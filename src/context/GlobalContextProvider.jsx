import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { respostasSurveyRh } from "../services/db";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [submitTotalValues, setSubmitTotalValues] = useState(null);

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
      resultadoEnquete: {},
    },
    validationSchema,
    onSubmit: getUserData,
  });

  const hasEnquete = (val) => {
    if (val === "rh") {
      return true;
    }
  };

  // Salva os dados do usuário no servidor
  async function getUserData(origemUsuario) {
    try {
      const userContact = {
        nome: inputValue.nome,
        email: inputValue.email,
        telefone: inputValue.telefone,
        origem: origemUsuario,
        resultadoEnquete: hasEnquete(origemUsuario) ? resultadoSurveyRh : {},
      };
      console.log("CONTATO DO USUÁRIO:", userContact);
      sessionStorage.setItem("userInfo", JSON.stringify(userContact));
      resetForm();
    } catch (error) {
      console.error("Erro ao salvar o usuário:", error);
    }
  }

  // Coleta a mensagem resultado do survey do RH
  const resultadoSurveyRh = useMemo(() => {
    if (Object.keys(answers).length === 0) {
      return {};
    }
    const totalScore = Object.values(answers).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
    return (
      respostasSurveyRh.find(
        ({ min, max }) => totalScore >= min && totalScore <= max
      ) || {}
    );
  }, [answers]);

  // Certifica se os campos do input estão com erros ou vazios
  const hasEmptyInputs =
    inputValue.email === "" ||
    inputValue.telefone === "" ||
    inputValue.nome === "";
  const hasInputErrors = errors.nome || errors.email || errors.telefone;

  const values = {
    answers,
    setAnswers,
    resultadoSurveyRh,
    errors,
    touched,
    handleBlur,
    handleChange,
    inputValue,
    getUserData,
    phoneMask,
    moneyConverter,
    submitTotalValues,
    setSubmitTotalValues,
    hasEmptyInputs,
    hasInputErrors,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
