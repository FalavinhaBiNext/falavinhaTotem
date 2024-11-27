import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { useGetSurvey } from "../hooks/useGetSurvey";
import QuestionarioHoldingState from "../states/QuestionarioHoldingState";
import {
  handleSaveSurveyData,
  handleSaveLeadData,
} from "../services/handleSaveSurveyData";

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

  // FUNÇÃO PARA SALVAR DADOS DO LEAD
  function handleSubmitUserData() {
    return handleSaveLeadData({
      dados_lead,
      setIsSubmitting,
      resetForm,
    });
  }

  // FUNÇÃO PARA SALVAR O LEAD NO SERVIDOR (ELA FOI CRIADA NA PASTA 'handleSaveSurveyData')
  function handleGetSurveyData(origemUsuario) {
    return handleSaveSurveyData({
      resultadoCigam,
      resultadoHolding,
      handleGetSurveyEmpresarial,
      handleGetSurveyRh,
      hasValidData,
      tributarioFiltrado,
      savedData,
      setIsSubmitting,
      origemUsuario,
      dados_lead,
      resetForm,
    });
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
    handleSubmitUserData,
    isSubmitting,
    showModal,
    closeModal,
    setShowModal,
    hasSavedData,
    handleSetShowModal,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
