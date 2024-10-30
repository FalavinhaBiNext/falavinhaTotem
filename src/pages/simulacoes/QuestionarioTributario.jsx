import PropTypes from "prop-types";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { numberFormatter } from "../../utils";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Botoes from "../../components/Botoes";
import QuestionarioTributarioState from "../../states/QuestionarioTributarioState";

const selectAtividades = [
  { value: 1, label: "Comércio" },
  { value: 2, label: "Indústria" },
  { value: 3, label: "Serviços" },
  { value: 4, label: "Construção Civil" },
  { value: 5, label: "Importadora" },
  { value: 6, label: "Restaurante" },
  { value: 7, label: "Auto-peças" },
  { value: 8, label: "Posto de combustíveis" },
  { value: 9, label: "Farmácias" },
];

export default function QuestionarioTributario() {
  const { getUserData, setSubmitTotalValues, hasEmptyInputs } =
    useContext(GlobalContext);
  const {
    taxValues,
    setTaxValues,
    exclusao_icms,
    exclusao_pis,
    taxa_siscomex,
    exclusao_iss,
    conceito_insumos,
    afastamento_verbas,
    inss_terceiros,
    reintegracao,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
    creditos_simples1,
    creditos_simples2,
    incidencia_icms,
  } = QuestionarioTributarioState();
  const navigate = useNavigate();
  const [hasUserData] = useState(!!sessionStorage.getItem("userInfo"));
  const [importOrExport, setImportOrExport] = useState("");
  const [isFormVisible, setisFormVisible] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setTaxValues((prevValues) => ({
      ...prevValues,
      [id]: numericValue,
    }));
  };
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (!hasUserData) getUserData("tributário");
    setSubmitTotalValues({
      exclusao_icms,
      exclusao_pis,
      taxa_siscomex,
      exclusao_iss,
      conceito_insumos,
      afastamento_verbas,
      inss_terceiros,
      reintegracao,
      lei_do_bem,
      capital_proprio,
      deducao_irpj,
      creditos_simples1,
      creditos_simples2,
      incidencia_icms,
      atividades: taxValues.atividade,
      importacoes: taxValues.importacoes_anuais,
    });
    navigate("/resultado-tributario");
  };

  const emptyValueFields =
    !taxValues.tributacao ||
    !taxValues.atividade ||
    !taxValues.faturamento_mensal;

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Questionário Tributario</h1>
      </HeaderApp>
      <HeroApp>
        <FramerMotion>
          <Formulario setisFormVisible={setisFormVisible} />
          <form
            className="form"
            onSubmit={handleSubmitValues}
            style={{ marginBottom: "60px" }}
          >
            <label
              htmlFor="tributacao"
              className="input-label input-label__select"
            >
              <span>Tributação:</span>
              <select
                className="input-element"
                name="tributacao"
                id="tributacao"
                value={taxValues.tributacao}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecione (Obrigatório)
                </option>
                <option value={1}>Lucro real</option>
                <option value={2}>Lucro presumido</option>
                <option value={0}>Simples</option>
              </select>
            </label>

            <label
              htmlFor="atividade"
              className="input-label input-label__select"
            >
              <span>Atividade:</span>
              <select
                className="input-element"
                name="atividade"
                id="atividade"
                value={taxValues.atividade}
                onChange={handleChange}
              >
                <option value={""} disabled>
                  Selecione (Obrigatório)
                </option>
                {selectAtividades.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <TextInput
              title="Faturamento mensal:"
              nome="faturamento_mensal"
              value={
                taxValues.faturamento_mensal &&
                `R$ ${numberFormatter(taxValues.faturamento_mensal)}`
              }
              onChange={handleChange}
              type="number"
              placeholder="Digite um valor (Obrigatório)"
            />

            <TextInput
              title="Número de funcionários:"
              nome="num_funcionarios"
              value={numberFormatter(taxValues.num_funcionarios)}
              onChange={handleChange}
              type="number"
              placeholder="Digite um valor (Opcional)"
            />

            <TextInput
              title="Valor da folha de pagamento:"
              nome="folha_pagamento"
              value={
                taxValues.folha_pagamento &&
                `R$ ${numberFormatter(taxValues.folha_pagamento)}`
              }
              onChange={handleChange}
              type="number"
              placeholder="Digite um valor (Opcional)"
            />

            <label
              htmlFor="importOrExport"
              className="input-label input-label__select"
            >
              <span>Se importa ou exporta:</span>
              <select
                className="input-element"
                name="importOrExport"
                id="importOrExport"
                value={importOrExport}
                onChange={(e) => setImportOrExport(e.target.value === "true")}
              >
                <option value={false}>Selecione (Opcional)</option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
            </label>

            <TextInput
              title="Média de importações por ano:"
              nome="importacoes_anuais"
              value={
                taxValues.importacoes_anuais &&
                `R$ ${numberFormatter(taxValues.importacoes_anuais)}`
              }
              onChange={handleChange}
              type="number"
              placeholder="Digite um valor (Opcional)"
              disabled={!importOrExport}
            />

            <TextInput
              title="Média de exportações por ano:"
              nome="exportacoes_anuais"
              value={
                taxValues.exportacoes_anuais &&
                `R$ ${numberFormatter(taxValues.exportacoes_anuais)}`
              }
              onChange={handleChange}
              type="number"
              placeholder="Digite um valor (Opcional)"
              disabled={!importOrExport}
            />

            <TextInput
              title="Média das dispesas anuais:"
              nome="dispesa_anual"
              type="number"
              value={
                taxValues.dispesa_anual &&
                `R$ ${numberFormatter(taxValues.dispesa_anual)}`
              }
              onChange={handleChange}
              placeholder="Digite um valor (Opcional)"
            />

            <TextInput
              title="Patrimônio líquido:"
              nome="patrimonio_liquido"
              type="number"
              value={
                taxValues.patrimonio_liquido &&
                `R$ ${numberFormatter(taxValues.patrimonio_liquido)}`
              }
              onChange={handleChange}
              placeholder="Digite um valor (Opcional)"
            />

            <TextInput
              title="Lucro da empresa:"
              nome="lucro_empresa"
              type="number"
              value={
                taxValues.lucro_empresa &&
                `R$ ${numberFormatter(taxValues.lucro_empresa)}`
              }
              onChange={handleChange}
              placeholder="Digite um valor (Opcional)"
            />

            <TextInput
              title="Gastos com inovação e tecnologia:"
              nome="gastos_inovacao"
              type="number"
              value={
                taxValues.gastos_inovacao &&
                `R$ ${numberFormatter(taxValues.gastos_inovacao)}`
              }
              onChange={handleChange}
              placeholder="Digite um valor (Opcional)"
            />
          </form>
        </FramerMotion>
      </HeroApp>

      <FooterApp footerFixed>
        <Botoes
          type="submit"
          className="botao"
          onClick={handleSubmitValues}
          disabled={(isFormVisible && hasEmptyInputs) || emptyValueFields}
        >
          Calcular
        </Botoes>
      </FooterApp>
    </>
  );
}

// COMPONENTE DO INPUT DE TEXTO OU NÚMERO
const TextInput = ({ title, nome, value, onChange, placeholder, disabled }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (disabled && inputRef.current && value) {
      inputRef.current.value = "";
      onChange({ target: { id: nome, value: "" } });
    }
  }, [disabled, nome, onChange, value]);

  return (
    <label htmlFor={nome} className="input-label">
      <span>{title}</span>
      <input
        className="input-element"
        name={nome}
        id={nome}
        placeholder={placeholder}
        autoComplete="off"
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        ref={inputRef}
      />
    </label>
  );
};

TextInput.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
