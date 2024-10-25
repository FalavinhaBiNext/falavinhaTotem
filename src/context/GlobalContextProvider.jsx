import PropTypes from "prop-types";
import { createContext, useState, useMemo } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { respostasSurveyRh } from "../services/db";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [submitROIValues, setSubmitRoIValues] = useState(null);

  const {
    values: inputVal,
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
      origem: "RH",
      surveyMessage: {},
    },
    validationSchema,
    onSubmit: getUserData,
  });

  async function getUserData() {
    try {
      const userData = {
        nome: inputVal.nome,
        email: inputVal.email,
        telefone: inputVal.telefone,
        origem: inputVal.origem,
        surveyMessage: inputVal.surveyMsg,
      };
      const userContact = {
        nome: inputVal.nome,
        email: inputVal.email,
        telefone: inputVal.telefone,
      };
      localStorage.setItem("userInfo", JSON.stringify(userContact));
      console.log("APENAS O CONTATO DO USUÁRIO:", userData);
      console.log("APENAS O CONTATO DO USUÁRIO:", userContact);

      resetForm();
    } catch (error) {
      console.error("Error saving user info:", error);
    }
  }

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
    inputVal.email === "" || inputVal.telefone === "" || inputVal.nome === "";
  const hasInputErrors = errors.nome || errors.email || errors.telefone;

  const values = {
    answers,
    setAnswers,
    resultadoSurveyRh,
    errors,
    touched,
    handleBlur,
    handleChange,
    inputVal,
    getUserData,
    phoneMask,
    moneyConverter,
    submitROIValues,
    setSubmitRoIValues,
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
