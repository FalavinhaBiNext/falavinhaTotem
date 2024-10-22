import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import HeaderApp from "../components/Header";
import Botoes from "../components/Botoes";
import HeroApp from "../components/Hero";
import FramerMotion from "../components/FramerMotion";
import FooterApp from "../components/Footer";
import fundo from "../assets/image/Cigam.png";
import { GlobalContext } from "../context/GlobalContextProvider";

export default function QuestionarioCigam() {
  const { moneyConverter, setSubmitRoIValues } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    usuarios: "",
    salario_medio: "",
    implementacao: "",
    situacao_atual: "",
  });
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
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value === "" ? "" : +value,
    }));
  };

  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (emptyValueFields) return;

    setSubmitRoIValues({
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
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>

          <form
            className="form"
            onSubmit={handleSubmitValues}
            style={{ marginBottom: "60px" }}
          >
            <label htmlFor="usuarios" className="input-label">
              Usuários:
              <input
                className="input-element"
                type="number"
                name="usuarios"
                id="usuarios"
                placeholder="Número de usuários"
                autoComplete="off"
                onChange={handleChange}
                value={values.usuarios}
              />
            </label>

            <label htmlFor="salario_medio" className="input-label">
              Salário médio:
              <input
                className="input-element"
                type="number"
                name="salario_medio"
                id="salario_medio"
                placeholder="Salário médio do colaborador"
                autoComplete="off"
                onChange={handleChange}
                value={values.salario_medio}
              />
            </label>

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
                  Situação atual da empresa
                </option>
                <option value={15}>ERP Grande porte</option>
                <option value={20}>ERP Pequeno porte</option>
                <option value={30}>Não possui ERP/Micro ERP</option>
              </select>
            </label>

            <label htmlFor="implementacao" className="input-label">
              Implementação:
              <input
                className="input-element"
                type="number"
                name="implementacao"
                id="implementacao"
                placeholder="Valor de implementação"
                autoComplete="off"
                onChange={handleChange}
                value={values.implementacao}
              />
            </label>

            {/* OUTPUTS */}
            <label htmlFor="roi_mensal" className="input-label">
              ROI mensal:
              <input
                className="input-element input-element__output"
                type="text"
                name="roi_mensal"
                id="roi_mensal"
                placeholder="R$ 0,00"
                value={moneyConverter(isValidValue(roiMensal))}
                readOnly
              />
            </label>

            <label htmlFor="roi_anual" className="input-label">
              ROI anual - GP:
              <input
                className="input-element input-element__output"
                type="text"
                name="roi_anual"
                id="roi_anual"
                placeholder="R$ 0,00"
                value={moneyConverter(isValidValue(roiAnual))}
                readOnly
              />
            </label>

            <label htmlFor="folha_pagamento" className="input-label">
              Folha de pagamento(apenas usuários):
              <input
                className="input-element input-element__output"
                type="text"
                name="folha_pagamento"
                id="folha_pagamento"
                placeholder="R$ 0,00"
                value={moneyConverter(isValidValue(folha_pagamento))}
                readOnly
              />
            </label>

            <label htmlFor="salario_hora" className="input-label">
              Salário/Hora:
              <input
                className="input-element input-element__output"
                type="text"
                name="salario_hora"
                id="salario_hora"
                placeholder="R$ 0,00"
                value={moneyConverter(isValidValue(salario_hora))}
                readOnly
              />
            </label>

            <label htmlFor="tempo_roi" className="input-label">
              Ano/Meses para ROI:
              <input
                className="input-element input-element__output"
                type="number"
                name="tempo_roi"
                id="tempo_roi"
                placeholder="Tempo para ROI"
                autoComplete="off"
                onChange={handleChange}
                value={isValidValue(roi_meses_ano.toFixed(1))}
                readOnly
              />
            </label>
            <br />

            <Botoes type="submit" className="opcoes">
              Calcular
            </Botoes>
          </form>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
