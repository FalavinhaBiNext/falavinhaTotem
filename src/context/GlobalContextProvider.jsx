import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { useGetSurvey } from "../hooks/useGetSurvey";
import QuestionarioHoldingState from "../states/QuestionarioHoldingState";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultadoCigam, setResultadoCigam] = useState({});
  const [resultadoTributario, setResultadoTributario] = useState([]);
  const [resultadoHolding, setResultadoHolding] = useState({});
  const [showModal, setShowModal] = useState(true);

  const sessionStorageData = sessionStorage.getItem("user_info");
  const savedData = sessionStorageData ? JSON.parse(sessionStorageData) : {};

  const {
    setRespostasRh,
    handleGetSurveyRh,
    setRespostasEmp,
    handleGetSurveyEmpresarial,
    respostasRh,
    respostasEmp,
  } = useGetSurvey();
  const { holdingValues, setHoldingValues, holdinginventarioResult } =
    QuestionarioHoldingState();

  // Verifica se tem dados do usuário salvos no sessionStorage
  const hasSavedData = Object.keys(savedData).length > 0;
  useEffect(() => {
    const showPopUp = sessionStorage.getItem("show_popup");
    setShowModal(showPopUp !== "false");
  }, []);

  // Fecha o modal
  const closeModal = () => {
    sessionStorage.setItem("show_popup", false);
    setShowModal(false);
  };

  // Seta o status do modal para mostrar ou não
  function handleSetShowModal(value) {
    sessionStorage.setItem("show_popup", value);
    setShowModal(value);
  }

  // Filtro de valores NaN, nulos e vazios do resultado do tributário
  const tributarioFiltrado = resultadoTributario.reduce((acc, el) => {
    if (!isNaN(el.value) && el.value !== null && el.value !== "") {
      acc[el.title] = moneyConverter(el.value);
    }
    return acc;
  }, {});

  // Verifica se todos os valores do resultado do tributário
  // são válidos antes de salvar no servidor
  const hasValidData = resultadoTributario.some(
    (el) =>
      !isNaN(el.value) && el.value !== null && el.value !== "" && el.value !== 0
  );

  // SALVA OS DADOS DA SIMULAÇÃO
  const initialInputValues = {
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    vendedor: "",
  };

  const {
    values: inputValue,
    errors,
    touched,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: initialInputValues,
    validationSchema,
    onSubmit: handleSubmitUserData,
  });

  const dados_lead = {
    name: inputValue.nome || savedData.name,
    email: inputValue.email || savedData.email,
    phone: inputValue.telefone || savedData.phone,
    company: inputValue.empresa || savedData.company,
    seller: inputValue.vendedor || savedData.seller,
  };

  // função para salvar dados do lead
  async function handleSubmitUserData() {
    try {
      setIsSubmitting(true);
      console.log("LEAD BÁSICO: ", dados_lead);
      //https://rafae4699.c44.integrator.host/totem/lead/create
      //http://localhost:58470/lead/create
      await axios.post(
        "https://rafae4699.c44.integrator.host/totem/lead/create",
        dados_lead,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      sessionStorage.setItem("user_info", JSON.stringify(dados_lead));
    } catch (error) {
      console.error("Erro ao salvar o lead:", error);
    } finally {
      setIsSubmitting(false);
      resetForm();
    }
  }

  //  função para salvar todas as informações sobre o lead no servidor
  async function handleGetSurveyData(origemUsuario) {
    try {
      setIsSubmitting(true);
      const dados_usuario = {
        origin: origemUsuario || savedData.origin,
      };
      const dados_survey = {
        resultado_cigam: resultadoCigam,
        resultado_tributario: hasValidData
          ? JSON.stringify(tributarioFiltrado)
          : "Sem dados para exibir",
        resultado_empresarial: handleGetSurveyEmpresarial,
        resultado_rh: handleGetSurveyRh,
        resultado_holding: resultadoHolding,
      };
      // tratamento dos dados coletados
      const originMapping = {
        rh: {
          originName: "Consultoria RH",
          resultFunc: (data) =>
            `${data.resultado_rh.titulo}|${data.resultado_rh.mensagem}`,
        },
        cigam: {
          originName: "CIGAM",
          resultFunc: (data) => {
            const currencyOptions = { style: "currency", currency: "BRL" };
            return `Produtividade financeira: ${data.resultado_cigam.produtividade_financeira.toLocaleString(
              "pt-BR",
              currencyOptions
            )}|Produtividade hora: ${
              data.resultado_cigam.produtividade_hora
            }|Produtividade mensal: ${data.resultado_cigam.produtividade_mensal.toLocaleString(
              "pt-BR",
              currencyOptions
            )}`;
          },
        },
        empresarial: {
          originName: "Consultoria Empresarial",
          resultFunc: (data) =>
            `${data.resultado_empresarial.resultado_pesquisa.maturidade}|
           ${data.resultado_empresarial.resultado_pesquisa.mensagem}`,
        },
        tributário: {
          originName: "Tributário",
          resultFunc: (data) =>
            data.resultado_tributario
              .replace(/"(?=,)/g, "|")
              .replace(/"/g, "")
              .replace(/\|,/g, "|")
              .replace(/\\/g, "'")
              .replace(/[{}]/g, ""),
        },
        holding: {
          originName: "Holding",
          resultFunc: (data) => {
            const currencyOptions = { style: "currency", currency: "BRL" };
            const formatCurrency = (value) =>
              value.toLocaleString("pt-BR", currencyOptions);
            return `Resultado holding|ITCMD: ${formatCurrency(
              data.resultado_holding.holding_itcmd
            )}|Custo cartório: ${formatCurrency(
              data.resultado_holding.holding_cartorio
            )}|Consultoria holding: ${formatCurrency(
              data.resultado_holding.holding_consultoria
            )}|Total: ${formatCurrency(
              data.resultado_holding.holding_total
            )}||Resultado inventário|ITCMD: ${formatCurrency(
              data.resultado_holding.inventario_itcmd
            )}|Custo cartório: ${formatCurrency(
              data.resultado_holding.inventario_cartorio
            )}|Horários advocatícios: ${formatCurrency(
              data.resultado_holding.inventario_consultoria
            )}|Total: ${formatCurrency(
              data.resultado_holding.inventario_total
            )}||Diferença entre holding e inventário: ${formatCurrency(
              data.resultado_holding.total_geral
            )}`;
          },
        },
      };
      const originData = originMapping[dados_usuario.origin];
      const originChanged = originData?.originName || "";
      const result = originData?.resultFunc(dados_survey) || "";

      const lead = {
        origin: originChanged,
        result: result,
        ...dados_lead,
      };
      //https://rafae4699.c44.integrator.host/totem/lead/create
      //http://localhost:58470/lead/create
      await axios.post(
        "https://rafae4699.c44.integrator.host/totem/lead/create",
        lead,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("LEAD COMPLETO: ", lead);
      sessionStorage.setItem("lead_info", JSON.stringify(lead));
    } catch (error) {
      setIsSubmitting(false);
      console.error("Erro ao salvar o lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Certifica se os campos do input estão com erros ou vazios
  const hasEmptyInputs = Object.values(inputValue).some(
    (value) =>
      value === "" ||
      (typeof value === "object" && Object.keys(value).length === 0)
  );

  const hasInputErrors =
    errors.nome ||
    errors.email ||
    errors.telefone ||
    errors.empresa ||
    errors.vendedor;

  const values = {
    respostasRh,
    setRespostasRh,
    handleGetSurveyRh,
    handleGetSurveyEmpresarial,
    respostasEmp,
    setRespostasEmp,
    errors,
    touched,
    handleBlur,
    handleChange,
    inputValue,
    handleGetSurveyData,
    phoneMask,
    moneyConverter,
    resultadoCigam,
    setResultadoCigam,
    resultadoTributario,
    setResultadoTributario,
    hasEmptyInputs,
    hasInputErrors,
    holdingValues,
    setHoldingValues,
    holdinginventarioResult,
    resultadoHolding,
    setResultadoHolding,
    isSubmitting,
    savedData,
    handleSubmitUserData,
    initialInputValues,

    showModal,
    hasSavedData,
    closeModal,
    handleSetShowModal,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
