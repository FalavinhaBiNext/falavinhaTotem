import PropTypes from "prop-types";
import axios from "axios";
import { createContext, useState } from "react";
import { useFormik } from "formik";
import { phoneMask, moneyConverter } from "../utils/formatters";
import { validationSchema } from "../utils/validators";
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
      console.log("DADOS USUARIO", dados_usuario);
      console.log("DADOS SURVEY", dados_survey);
      sessionStorage.setItem("userInfo", JSON.stringify(dados_usuario));

      // let originChanged = "";
      // let result = "";

      // switch (dados_usuario.origin) {
      //   case "rh":
      //     originChanged = "Consultoria RH";
      //     result = `${dados_survey.resultado_rh.titulo}|${dados_survey.resultado_rh.mensagem}`;
      //     break;
      //   case "cigam":
      //     originChanged = "CIGAM";
      //     result = `Produtividade financeira: ${dados_survey.resultado_cigam.produtividade_financeira.toLocaleString(
      //       "pt-BR",
      //       {
      //         style: "currency",
      //         currency: "BRL",
      //       }
      //     )}|Produtividade hora: ${
      //       dados_survey.resultado_cigam.produtividade_hora
      //     }|Produtividade mensal: ${dados_survey.resultado_cigam.produtividade_mensal.toLocaleString(
      //       "pt-BR",
      //       {
      //         style: "currency",
      //         currency: "BRL",
      //       }
      //     )}`;
      //     break;
      //   case "empresarial":
      //     originChanged = "Consultoria Empresarial";
      //     result = `${dados_survey.resultado_empresarial.resultado_pesquisa.maturidade}|${dados_survey.resultado_empresarial.resultado_pesquisa.mensagem}`;
      //     break;
      //   case "tributário":
      //     originChanged = "Tributário";
      //     result = dados_survey.resultado_tributario;
      //     result = result.replace(/"(?=,)/g, "|");
      //     result = result.replace(/"/g, "");
      //     result = result.replace(/\|,/g, "|");
      //     result = result.replace(/\\/g, "'");
      //     result = result.replace(/[{}]/g, "");
      //     break;
      //   case "holding":
      //     originChanged = "Holding";
      //     result = `Resultado holding|ITCMD: ${dados_survey.resultado_holding.holding_itcmd.toLocaleString(
      //       "pt-BR",
      //       {
      //         style: "currency",
      //         currency: "BRL",
      //       }
      //     )}|Custo cartório: ${dados_survey.resultado_holding.holding_cartorio.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}|Consultoria holding: ${dados_survey.resultado_holding.holding_consultoria.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}|Total: ${dados_survey.resultado_holding.holding_total.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}||Resultado inventário|ITCMD: ${dados_survey.resultado_holding.inventario_itcmd.toLocaleString(
      //       "pt-BR",
      //       {
      //         style: "currency",
      //         currency: "BRL",
      //       }
      //     )}|Custo cartório: ${dados_survey.resultado_holding.inventario_cartorio.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}|Horários advocatícios: ${dados_survey.resultado_holding.inventario_consultoria.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}|Total: ${dados_survey.resultado_holding.inventario_total.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}||Diferença entre holding e inventário: ${dados_survey.resultado_holding.total_geral.toLocaleString(
      //       "pt-BR",
      //       { style: "currency", currency: "BRL" }
      //     )}`;

      //     break;
      // }

      // const lead = {
      //   name: dados_usuario.name,
      //   email: dados_usuario.email,
      //   phone: dados_usuario.phone,
      //   origin: originChanged,
      //   result: result,
      // };
      // console.log("LEAD", lead);
      // await axios.post(
      //   "https://rafae4699.c44.integrator.host/totem/lead/create",
      //   lead,
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
