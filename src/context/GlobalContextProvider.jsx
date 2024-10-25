import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { respostasSurveyRh } from "../services/db";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [submitROIValues, setSubmitRoIValues] = useState(null);
  const [hasUserData, setHasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });

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

  // Coleta os dados do usuário e salva no localStorage
  async function getUserData() {
    try {
      const userContact = {
        nome: inputValue.nome,
        email: inputValue.email,
        telefone: inputValue.telefone,
      };
      sessionStorage.setItem("userInfo", JSON.stringify(userContact));
      console.log("CONTATO DO USUÁRIO:", userContact);
      resetForm();
    } catch (error) {
      console.error("Error saving user info:", error);
    }
  }

  // Coleta os dados do usuário e a mensagem resultado do survey da CIGAM
  const handleSubmitCigamSurvey = (origemUsuario) => {
    const userData = {
      nome: inputValue.nome || hasUserData.nome || "",
      email: inputValue.email || hasUserData.email || "",
      telefone: inputValue.telefone || hasUserData.telefone || "",
      origem: origemUsuario,
      resultadoEnquete: resultadoSurveyRh,
    };
    console.log("APENAS DADOS DO USUÁRIO:", userData);
  };

  // Coleta a mensagem resultado do survey da CIGAM
  const resultadoSurveyRh = useMemo(() => {
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
    submitROIValues,
    setSubmitRoIValues,
    hasEmptyInputs,
    hasInputErrors,
    handleSubmitCigamSurvey,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
