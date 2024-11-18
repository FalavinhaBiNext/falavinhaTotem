import PropTypes from "prop-types";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { numberFormatter } from "../../utils";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import QuestionarioTributarioState from "../../states/QuestionarioTributarioState";
import fundo from "../../assets/image/FundoTributario.png";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import MainPageTitle from "../../components/UI/MainPageTitle";
import PopupModal from "../../components/UI/PopupModal";

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
  const {
    setResultadoTributario,
    isSubmitting,
    showModal,
    closeModal,
    handleSetShowModal,
    hasSavedData,
  } = useContext(GlobalContext);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const { handleCheckRefresh } = useRefreshDetector();

  const {
    taxValues,
    setTaxValues,
    importacoes,
    setImportacoes,
    atividades,
    tributarioValues,
  } = QuestionarioTributarioState();

  const hasActivities = (activitiesArray) =>
    activitiesArray.includes(atividades);

  const hasPisCofins = hasActivities(["1", "2", "4", "5"]);
  const hasServicos = hasActivities(["3"]);
  const hasRestaurantes = hasActivities(["6"]);
  const hasAutoPecas = hasActivities(["7"]);
  const hasAllActivities = hasActivities([
    "1",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const resultList = [
    hasPisCofins && {
      title: `Exclusão do ICMS da base de cálculo do PIS/COFINS`,
      value: parseInt(tributarioValues.exclusao_icms, 10),
    },
    hasPisCofins && {
      title: `Exclusão do PIS/COFINS da própria base`,
      value: parseInt(tributarioValues.exclusao_pis, 10),
    },
    hasServicos && {
      title: `Exclusão do ISS da base de cálculo do PIS/COFINS`,
      value: parseInt(tributarioValues.exclusao_iss, 10),
    },
    hasAllActivities && {
      title: `Não incidência do ICMS e ISS da base de cálculo do IR e CS`,
      value: parseInt(tributarioValues.incidencia_icms, 10),
    },
    hasAllActivities && {
      title: `Afastamento das verbas indenizatórias`,
      value: parseInt(tributarioValues.afastamento_verbas, 10),
    },
    hasAllActivities && {
      title: `INSS sobre terceiros (Sistema "S") limitação da base em 20 salários mínimos`,
      value: parseInt(tributarioValues.inss_terceiros, 10),
    },
    hasAllActivities &&
      importacoes && {
        title: `Recuperação da taxa Siscomex pago a maior nas importações`,
        value: parseInt(tributarioValues.taxa_siscomex),
      },
    (hasRestaurantes || hasAutoPecas) && {
      title: `Recuperação de créditos para empresas do Simples Nacional (Produtos Monofásicos)`,
      value: hasRestaurantes
        ? parseInt(tributarioValues.creditos_simples1, 10)
        : hasAutoPecas
        ? parseInt(tributarioValues.creditos_simples2, 10)
        : null,
    },
    hasAllActivities && {
      title: `Ampliação do conceito de insumo pelo STJ e implicações no direito a créditos de PIS e COFINS`,
      value: parseInt(tributarioValues.conceito_insumos, 10),
    },
    hasAllActivities && {
      title: `Reintegra`,
      value: parseInt(tributarioValues.reintegracao, 10),
    },
    hasAllActivities && {
      title: `Lei do Bem`,
      value: parseInt(tributarioValues.lei_do_bem, 10),
    },
    hasAllActivities && {
      title: `Juros sobre o Capital Próprio`,
      value: parseInt(tributarioValues.capital_proprio, 10),
    },
    hasAllActivities && {
      title: `PAT - Dedução do IRPJ`,
      value: parseInt(tributarioValues.deducao_irpj, 10),
    },
  ].filter(Boolean);

  // Altera os valores dos campos
  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setTaxValues((prevValues) => ({
      ...prevValues,
      [id]: numericValue,
    }));
  };

  // Envia os dados para o servidor
  const handleSubmitValues = () => {
    if (!showModal && !hasSavedData) {
      return handleSetShowModal(true);
    }
    setResultadoTributario([...resultList]);
    navigate("/resultado-tributario");
  };

  // Verifica se os campos estão vazios
  const emptyValueFields =
    !taxValues.tributacao ||
    !taxValues.atividade ||
    !taxValues.faturamento_mensal;

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    handleCheckRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pageBtnStyle = `py-2 px-6  mx-auto min-h-10 w-full flex justify-center items-center 
   bg-primary_color rounded-[10px] text-light_color font-bold text-base cursor-pointer text-center
  `;

  return (
    <>
      {showModal && (
        <PopupModal showModal={showModal} closeModal={closeModal} />
      )}

      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={"Questionário Tributario"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <form className="flex flex-col gap-8 mb-10 md:max-w-[768px] max-w-none mx-auto">
            <div className="flex items-center justify-end gap-2 max-w-[768px] md:mr-0 mx-auto">
              {[true, false].map((page, index) => (
                <button
                  key={index}
                  className={`${pageBtnStyle} ${
                    page === show ? "font-bold border border-white" : ""
                  }`}
                  onClick={() => setShow(page)}
                  type="button"
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {show && (
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="tributacao"
                  className="input-label input-label__select"
                >
                  Tributação: (Obrigatório)
                  <select
                    className="input-element"
                    name="tributacao"
                    id="tributacao"
                    value={taxValues.tributacao}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecione
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
                  Atividade: (Obrigatório)
                  <select
                    className="input-element"
                    name="atividade"
                    id="atividade"
                    value={taxValues.atividade}
                    onChange={handleChange}
                  >
                    <option value={""} disabled>
                      Selecione
                    </option>
                    {selectAtividades.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>

                <TextInput
                  title="Faturamento Mensal: (Obrigatório)"
                  nome="faturamento_mensal"
                  value={
                    taxValues.faturamento_mensal &&
                    `R$ ${numberFormatter(taxValues.faturamento_mensal)}`
                  }
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite um valor aproximado"
                />

                <TextInput
                  title="Número de Funcionários:"
                  nome="num_funcionarios"
                  value={numberFormatter(taxValues.num_funcionarios)}
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite um valor aproximado"
                />
                <TextInput
                  title="Valor da Folha de Pagamento:"
                  nome="folha_pagamento"
                  value={
                    taxValues.folha_pagamento &&
                    `R$ ${numberFormatter(taxValues.folha_pagamento)}`
                  }
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite um valor aproximado"
                />
              </div>
            )}

            {!show && (
              <div className="flex flex-col gap-4">
                <TextInput
                  title="Média das Despesas Anuais:"
                  nome="dispesa_anual"
                  type="number"
                  value={
                    taxValues.dispesa_anual &&
                    `R$ ${numberFormatter(taxValues.dispesa_anual)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um valor aproximado"
                />
                <TextInput
                  title="Patrimônio Líquido:"
                  nome="patrimonio_liquido"
                  type="number"
                  value={
                    taxValues.patrimonio_liquido &&
                    `R$ ${numberFormatter(taxValues.patrimonio_liquido)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um valor aproximado"
                />
                <TextInput
                  title="Lucro da Empresa:"
                  nome="lucro_empresa"
                  type="number"
                  value={
                    taxValues.lucro_empresa &&
                    `R$ ${numberFormatter(taxValues.lucro_empresa)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um valor aproximado"
                />
                <TextInput
                  title="Gastos com Inovação e Tecnologia:"
                  nome="gastos_inovacao"
                  type="number"
                  value={
                    taxValues.gastos_inovacao &&
                    `R$ ${numberFormatter(taxValues.gastos_inovacao)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um valor aproximado"
                />
                <label
                  htmlFor="importacoes"
                  className="input-label input-label__select"
                >
                  Importa ou Exporta?:
                  <select
                    className="input-element"
                    name="importacoes"
                    id="importacoes"
                    value={importacoes}
                    onChange={(e) => setImportacoes(e.target.value === "true")}
                  >
                    <option value={false}>Selecione (Opcional)</option>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                  </select>
                </label>

                {importacoes && (
                  <>
                    <TextInput
                      title="Média de Importações por ano: (Opcional)"
                      nome="importacoes_anuais"
                      value={
                        taxValues.importacoes_anuais &&
                        `R$ ${numberFormatter(taxValues.importacoes_anuais)}`
                      }
                      onChange={handleChange}
                      type="number"
                      placeholder="Digite um valor aproximado"
                    />
                    <TextInput
                      title="Média de Exportações por ano: (Opcional)"
                      nome="exportacoes_anuais"
                      value={
                        taxValues.exportacoes_anuais &&
                        `R$ ${numberFormatter(taxValues.exportacoes_anuais)}`
                      }
                      onChange={handleChange}
                      type="number"
                      placeholder="Digite um valor aproximado"
                    />
                  </>
                )}
              </div>
            )}
          </form>

          <MainButton
            type={show ? "button" : "submit"}
            className={"md:max-w-[470px] max-w-none"}
            onClick={show ? handleShow : handleSubmitValues}
            disabled={!show && (emptyValueFields || isSubmitting)}
          >
            {show ? "Próximo" : "Calcular"}
          </MainButton>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
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
