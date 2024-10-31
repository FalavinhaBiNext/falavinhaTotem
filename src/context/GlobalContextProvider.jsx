import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { respostasSurveyRh } from "../services/db";
import { BASE_URL } from "../services/api";
import { axiosInstance } from "../services/api";
import { useGetSurvey } from "../hooks/useGetSurvey";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [submitTotalValues, setSubmitTotalValues] = useState(null);
  const { respostasRh, setRespostasRh, handleGetSurveyRh } = useGetSurvey();

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
        resultadoEnquete: hasEnquete(origemUsuario) ? handleGetSurveyRh : {},
      };
      // const response = await axiosInstance.post(
      //   `${BASE_URL}/users`,
      //   userContact,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      // console.log("Resposta do servidor:", response);
      sessionStorage.setItem("userInfo", JSON.stringify(userContact));
      resetForm();
    } catch (error) {
      console.log("Erro ao salvar o usuário:", error);
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
