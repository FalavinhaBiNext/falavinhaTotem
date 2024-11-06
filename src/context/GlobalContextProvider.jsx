import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { BASE_URL } from "../services/api";
import { axiosInstance } from "../services/api";
import { useGetSurvey } from "../hooks/useGetSurvey";
import QuestionarioHoldingState from "../states/QuestionarioHoldingState";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultadoCigam, setResultadoCigam] = useState({});
  const [resultadoTributario, setResultadoTributario] = useState([]);
  const [resultadoHolding, setResultadoHolding] = useState({});
  const sessionStorageData = sessionStorage.getItem("userInfo");
  const saveData = sessionStorageData ? JSON.parse(sessionStorageData) : null;

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

  // Filtro de valores NaN, nulos e vazios do resultado do tributário
  const tributarioFiltrado = resultadoTributario.reduce((acc, el) => {
    if (!isNaN(el.value) && el.value !== null && el.value !== "") {
      acc[el.title] = moneyConverter(el.value);
    }
    return acc;
  }, {});

  // Verifica se todos os valores do resultado do tributário são válidos antes de salvar no servidor
  const hasValidData = resultadoTributario.some(
    (el) =>
      !isNaN(el.value) && el.value !== null && el.value !== "" && el.value !== 0
  );

  const {
    values: inputValue,
    errors,
    touched,
    handleBlur,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: {
      nome: "",
      telefone: "",
      email: "",
    },
    validationSchema,
    onSubmit: handleGetSurveyData,
  });

  // Salva os dados do usuário no servidor
  async function handleGetSurveyData(origemUsuario) {
    try {
      setIsSubmitting(true);
      const dados_usuario = {
        name: inputValue.nome || saveData.name,
        email: inputValue.email || saveData.email,
        phone: inputValue.telefone || saveData.phone,
        origin: origemUsuario || saveData.origin,
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

      console.log("PARA O SERVER", dados_survey);

      sessionStorage.setItem("userInfo", JSON.stringify(dados_usuario));
      // const response = await axiosInstance.post(
      //   `${BASE_URL}/survey`,
      //   {
      //     dados_survey,
      //     dados_usuario,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );

      resetForm();
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Erro ao salvar o usuário:", error);
    }
  }

  // Certifica se os campos do input estão com erros ou vazios
  const hasEmptyInputs =
    inputValue.email === "" ||
    inputValue.telefone === "" ||
    inputValue.nome === "";
  const hasInputErrors = errors.nome || errors.email || errors.telefone;

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
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
