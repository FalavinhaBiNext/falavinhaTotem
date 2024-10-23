import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});
  const [surveyMsg, setSurveyMsg] = useState({});
  const [submitROIValues, setSubmitRoIValues] = useState(null);

  const calculateTotalScore = () => {
    return Object.values(answers).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
  };

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
      surveyMessage: surveyMsg,
    },
    validationSchema,
    onSubmit: getUserContact,
  });

  async function getUserContact() {
    try {
      console.log({
        nome: inputVal.nome,
        email: inputVal.email,
        telefone: inputVal.telefone,
        origem: inputVal.origem,
        surveyMessage: inputVal.surveyMessage,
      });

      resetForm();
    } catch (error) {
      console.error("Error saving user info:", error);
    }
  }

  const values = {
    answers,
    setAnswers,
    calculateTotalScore,
    errors,
    touched,
    handleBlur,
    handleChange,
    inputVal,
    getUserContact,
    phoneMask,
    moneyConverter,
    submitROIValues,
    setSubmitRoIValues,
    setSurveyMsg,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
