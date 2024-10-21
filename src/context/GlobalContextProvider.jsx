import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const calculateTotalScore = () => {
    return Object.values(answers).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
  };

  const requiredField = "Campo obrigatório!";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationSchema = Yup.object().shape({
    nome: Yup.string()
      .min(5, "Nome muito curto")
      .max(30, "Nome muito longo")
      .required(requiredField),
    telefone: Yup.string().required(requiredField).min(14, "Telefone inválido"),
    email: Yup.string()
      .email("Email inválido")
      .matches(regex, "Email incompleto!")
      .required(requiredField),
  });

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
    },
    validationSchema,
    onSubmit: getUserContact,
  });

  async function getUserContact() {
    try {
      console.log(inputVal);
      resetForm();
    } catch (error) {
      console.log(error);
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
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
