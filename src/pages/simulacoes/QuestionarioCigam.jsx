import PropTypes from "prop-types";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import Botoes from "../../components/Botoes";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/Cigam.png";
import { GlobalContext } from "../../context/GlobalContextProvider";
import Formulario from "../../components/Formulario";
import { moneyFormatter, numberFormatter } from "../../utils";

export default function QuestionarioCigam() {
  const { moneyConverter, setSubmitTotalValues, getUserData } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    usuarios: "",
    salario_medio: "",
    implementacao: "",
    situacao_atual: "",
  });

  const [hasUserData] = useState(!!sessionStorage.getItem("userInfo"));

  const isValidValue = (val) => (isNaN(val) || !isFinite(val) ? "" : val);
  const emptyValueFields =
    values.usuarios === "" ||
    values.salario_medio === "" ||
    values.implementacao === "" ||
    values.situacao_atual === "";

  // FOLHA DE PAGAMENTO
  const folha_pagamento = useMemo(
    () => values.usuarios * values.salario_medio,
    [values.usuarios, values.salario_medio]
  );

  // SALARIO HORA
  const salario_hora = useMemo(
    () => values.salario_medio / 160,
    [values.salario_medio]
  );

  // GANHO PRODUTIVIDADE MENSAL
  const produtividade_mensal = useMemo(
    () => folha_pagamento * (values.situacao_atual / 100),
    [folha_pagamento, values.situacao_atual]
  );

  // GANHO PRODUTIVIDADE HORA
  const produtividade_hora = useMemo(
    () => values.usuarios * 160 * (values.situacao_atual / 100),
    [values.usuarios, values.situacao_atual]
  );

  // GANHO PRODUTIVIDADE FINACEIRA
  const produtividade_financeira = useMemo(
    () => produtividade_mensal * 12,
    [produtividade_mensal]
  );

  // ROI MENSAL
  const roiMensal = produtividade_mensal;

  // ROI ANUAL
  const roiAnual = roiMensal * 12;

  // ANO/MES PARA O ROI
  const roi_meses_ano = useMemo(
    () => values.implementacao / roiAnual,
    [values.implementacao, roiAnual]
  );

  const handleChange = (event) => {
    const { id, value } = event.target;
    // Permite apenas números
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue = numericValue === "" ? "" : parseInt(numericValue, 10);
    setValues((prevValues) => ({
      ...prevValues,
      [id]:
        parsedValue > 0 || numericValue === "" ? numericValue : prevValues[id],
    }));
  };

  // Envia dados para o servidor
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (emptyValueFields) return;
    if (!hasUserData) getUserData("CIGAM");

    setSubmitTotalValues({
      ...values,
      folha_pagamento,
      salario_hora,
      produtividade_hora,
      produtividade_mensal,
      produtividade_financeira,
      roi_meses_ano,
    });
    setValues({
      usuarios: "",
      salario_medio: "",
      implementacao: "",
      situacao_atual: "",
    });
    navigate("/resultado-cigam");
  };

  return (
    <>
      <HeaderApp>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <Formulario />

          <form
            className="form"
            style={{
              marginBottom: "60px",
            }}
          >
            <TextInput
              title="Usuários:"
              nome="usuarios"
              type="text"
              id="usuarios"
              value={numberFormatter(values.usuarios)}
              onChange={handleChange}
              placeholder="Número de usuários"
            />

            <TextInput
              title="Salário médio:"
              nome="salario_medio"
              type="text"
              id="salario_medio"
              value={
                values.salario_medio &&
                `R$ ${moneyFormatter(values.salario_medio)}`
              }
              onChange={handleChange}
              placeholder="Salário médio do colaborador"
            />

            <label
              htmlFor="situacao_atual"
              className="input-label input-label__select"
            >
              Situação atual
              <select
                className="input-element"
                name="situacao_atual"
                id="situacao_atual"
                value={values.situacao_atual}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value={15}>ERP Grande porte</option>
                <option value={20}>ERP Pequeno porte</option>
                <option value={30}>Não possui ERP/Micro ERP</option>
              </select>
            </label>

            <TextInput
              title="Implementação:"
              nome="implementacao"
              type="text"
              id="implementacao"
              value={
                values.implementacao &&
                `R$ ${moneyFormatter(values.implementacao)}`
              }
              onChange={handleChange}
              placeholder="Valor de implementação"
            />

            {/* OUTPUTS */}
            <TextInput
              title="ROI mensal:"
              nome="roi_mensal"
              type="text"
              id="roi_mensal"
              value={moneyConverter(isValidValue(roiMensal))}
              onChange={handleChange}
              placeholder="R$ 0,00"
              newClassName="input-element__output"
              isReadOnly={true}
            />

            <TextInput
              title="ROI anual - GP:"
              nome="roi_anual"
              type="text"
              id="roi_anual"
              value={moneyConverter(isValidValue(roiAnual))}
              onChange={handleChange}
              placeholder="R$ 0,00"
              newClassName="input-element__output"
              isReadOnly={true}
            />

            <TextInput
              title="ROI anual - GP:"
              nome="folha_pagamento"
              type="text"
              id="folha_pagamento"
              value={moneyConverter(isValidValue(folha_pagamento))}
              onChange={handleChange}
              placeholder="R$ 0,00"
              newClassName="input-element__output"
              isReadOnly={true}
            />

            <TextInput
              title="Salário/Hora:"
              nome="salario_hora"
              type="text"
              id="salario_hora"
              value={moneyConverter(isValidValue(salario_hora))}
              onChange={handleChange}
              placeholder="R$ 0,00"
              newClassName="input-element__output"
              isReadOnly={true}
            />

            <TextInput
              title="Ano/Meses para ROI:"
              nome="tempo_roi"
              type="text"
              id="tempo_roi"
              value={isValidValue(roi_meses_ano.toFixed(1)).replace(".", ",")}
              onChange={handleChange}
              placeholder="Tempo para ROI"
              newClassName="input-element__output"
              isReadOnly={true}
            />
            <br />
          </form>
        </FramerMotion>
      </HeroApp>

      <FooterApp footerFixed>
        <Botoes
          type="button"
          className="botao"
          onClick={handleSubmitValues}
          disabled={emptyValueFields}
        >
          Calcular
        </Botoes>
      </FooterApp>
    </>
  );
}

const TextInput = ({
  title,
  nome,
  value,
  onChange,
  placeholder,
  newClassName,
  isReadOnly,
}) => (
  <label htmlFor={nome} className="input-label">
    {title}
    <input
      className={`input-element ${newClassName}`}
      name={nome}
      placeholder={placeholder}
      autoComplete="off"
      value={value || ""}
      id={nome}
      onChange={onChange}
      readOnly={isReadOnly}
    />
  </label>
);

TextInput.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  newClassName: PropTypes.string,
  isReadOnly: PropTypes.bool,
};
