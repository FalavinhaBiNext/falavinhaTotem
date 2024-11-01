import { useMemo, useState } from "react";
import {
  perguntasSurveyEmpresarial,
  respostasSurveyRh,
  respostasSurveyEmpresarial,
} from "../services/db";

export function useGetSurvey() {
  const [respostasRh, setRespostasRh] = useState({});
  const [respostasEmp, setRespostasEmp] = useState({});

  // Coleta a  resultado do survey do RH
  const handleGetSurveyRh = useMemo(() => {
    if (Object.keys(respostasRh).length === 0) {
      return {};
    }
    const totalScore = Object.values(respostasRh).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
    return (
      respostasSurveyRh.find(
        ({ min, max }) => totalScore >= min && totalScore <= max
      ) || {}
    );
  }, [respostasRh]);

  // Coleta a resultado do survey do empresarial
  const handleGetSurveyEmpresarial = useMemo(() => {
    const respostasEmpKeys = Object.keys(respostasEmp);
    if (respostasEmpKeys.length === 0) {
      return { porcentagem: 0, resultado_pesquisa: 0 };
    }
    const totalQuestions = perguntasSurveyEmpresarial.reduce(
      (count, section) => count + section.perguntas.length,
      0
    );
    const totalScore = respostasEmpKeys.reduce(
      (total, key) => total + parseInt(respostasEmp[key], 10),
      0
    );

    const porcentagem = (totalScore / totalQuestions) * 100;
    const resultado_pesquisa =
      respostasSurveyEmpresarial.find(
        ({ min, max }) => porcentagem >= min && porcentagem <= max
      ) || 0;

    return { porcentagem, resultado_pesquisa };
  }, [respostasEmp]);

  return {
    respostasRh,
    handleGetSurveyRh,
    setRespostasRh,
    respostasEmp,
    setRespostasEmp,
    handleGetSurveyEmpresarial,
  };
}
