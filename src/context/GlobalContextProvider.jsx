import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter, validationSchema } from "../utils";
import { BASE_URL } from "../services/api";
import { axiosInstance } from "../services/api";
import { useGetSurvey } from "../hooks/useGetSurvey";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const {
    setRespostasRh,
    handleGetSurveyRh,
    setRespostasEmp,
    handleGetSurveyEmpresarial,
    respostasRh,
    respostasEmp,
  } = useGetSurvey();
  const [resultadoCigam, setResultadoCigam] = useState(null);
  const [resultadoTributario, setResultadoTributario] = useState({});
  const sessionStorageData = sessionStorage.getItem("userInfo");
  const saveData = sessionStorageData ? JSON.parse(sessionStorageData) : null;

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
      const contatoUsuario = {
        name: inputValue.nome || saveData.name,
        email: inputValue.email || saveData.email,
        phone: inputValue.telefone || saveData.phone,
        origin: origemUsuario || saveData.origin,
      };
      const dadosSurvey = {
        resultadoCigam,
        resultadoTributario,
        resultadoEmpresarial: handleGetSurveyEmpresarial,
        resultadoRH: handleGetSurveyRh,
      };
      sessionStorage.setItem("userInfo", JSON.stringify(contatoUsuario));
      const response = await axiosInstance.post(
        `${BASE_URL}/survey`,
        {
          dadosSurvey,
          contatoUsuario,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Resposta do servidor:", response.data);
      resetForm();
    } catch (error) {
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
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
