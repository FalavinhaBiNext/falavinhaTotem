import PropTypes from "prop-types";
import { useContext, useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { numberFormatter } from "../../utils";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Botoes from "../../components/Botoes";

const selectAtividads = [
  { value: 10, label: "Comércio" },
  { value: 20, label: "Indústria" },
  { value: 30, label: "Serviços" },
  { value: 40, label: "Const. Civil" },
  { value: 50, label: "Importadora" },
  { value: 60, label: "Restaurante" },
  { value: 70, label: "Auto-peças" },
  { value: 80, label: "P. de combustíveis" },
  { value: 90, label: "Farmácias" },
];

export default function QuestionarioTributario() {
  const { getUserData } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [hasUserData] = useState(!!sessionStorage.getItem("userInfo"));
  const [exportImport, setExportImport] = useState("");
  const [taxValues, setTaxValues] = useState({
    tributacao: "",
    atividade: "",
    faturamento_mensal: "",
    num_funcionarios: "",
    folha_pagamento: "",
    dispesa_anual: "",
    patrimonio_liquido: "",
    lucro_empresa: "",
    gastos_inovacao: "",
    importacoes_anuais: "",
    exportacoes_anuais: "",
  });
  const [calculatedValues, setCalculatedValues] = useState({
    exclusao_icms: null,
    exclusao_pis: null,
    taxa_siscomex: null,
    exclusao_iss: null,
    conceito_insumos: null,
    afastamento_verbas: null,
    inss_terceiros: null,
    reitegracao: null,
    lei_do_bem: null,
    capital_proprio: null,
    deducao_irpj: null,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setTaxValues((prevValues) => ({
      ...prevValues,
      [id]: numericValue,
    }));
  };

  // CÁCULO DE 'EXLUSÃO DO ICMS'
  const exclusao_icms = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.1 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.1 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'PIS/COFINS'
  const exclusao_pis = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.0925 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.0365 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'ISS'
  const exclusao_iss = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.05 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.05 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'AFASTAMENTO DE VERBAS INDENIZATÓRIAS'
  const afastamento_verbas = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.folha_pagamento * 0.005 * 60;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.folha_pagamento]);

  // CÁCULO DE 'RECUPERAÇÃO TAXAS SISCOMEX'
  const taxa_siscomex = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.importacoes_anuais * (214.5 - 30) * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.importacoes_anuais]);

  // CÁCULO DE 'INSS SOBRE TERCEIROS'
  const inss_terceiros = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return (taxValues.folha_pagamento - 20000) * 0.058 * 60;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.folha_pagamento]);

  // CÁCULO DE 'AMPLIAÇÕES DE CONCEITO DE INSUMOS PIS/COFINS'
  const conceito_insumos = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.dispesa_anual * 0.0925 * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.dispesa_anual]);

  // CÁCULO DE 'REINTEGRAÇÃO'
  const reitegracao = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.exportacoes_anuais * 0.03 * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.exportacoes_anuais]);

  // CÁCULO DE 'LEI DO BEM'
  const lei_do_bem = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.gastos_inovacao * 0.34;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.gastos_inovacao]);

  // CÁCULO DE 'JUROS SOBRE CAPITAL PRÓPRIO'
  const capital_proprio = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.patrimonio_liquido * 0.06 * 0.19;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.patrimonio_liquido]);

  const deducao_irpj = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.lucro_empresa * 0.15 * 0.04;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.lucro_empresa]);

  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (!hasUserData) getUserData("tributário");
    setCalculatedValues({
      exclusao_icms,
      exclusao_pis,
      taxa_siscomex,
      exclusao_iss,
      conceito_insumos,
      afastamento_verbas,
      inss_terceiros,
      reitegracao,
      lei_do_bem,
      capital_proprio,
      deducao_irpj,
    });

    // navigate("/resultado-tributario");
  };
  console.log(calculatedValues);

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
          <Formulario />
          <form
            className="form"
            onSubmit={handleSubmitValues}
            style={{ marginBottom: "60px" }}
          >
            <label
              htmlFor="tributacao"
              className="input-label input-label__select"
            >
              Tributação:
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
              Atividade:
              <select
                className="input-element"
                name="atividade"
                id="atividade"
                value={taxValues.atividade}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Selecione (Obrigatório)
                </option>
                {selectAtividads.map((item) => (
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
              htmlFor="exportImport"
              className="input-label input-label__select"
            >
              Se importa ou exporta:
              <select
                className="input-element"
                name="exportImport"
                id="exportImport"
                value={exportImport}
                onChange={(e) => setExportImport(e.target.value === "true")}
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
              disabled={!exportImport}
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
              disabled={!exportImport}
            />

            <TextInput
              title="Média das dispensas anuais:"
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
          disabled={emptyValueFields}
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
      {title}
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
