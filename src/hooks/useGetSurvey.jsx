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
      return { percentageScore: 0, result: 0 };
    }
    const totalQuestions = perguntasSurveyEmpresarial.reduce(
      (count, section) => count + section.perguntas.length,
      0
    );
    const totalScore = respostasEmpKeys.reduce(
      (total, key) => total + parseInt(respostasEmp[key], 10),
      0
    );

    const percentageScore = (totalScore / totalQuestions) * 100;
    const result =
      respostasSurveyEmpresarial.find(
        ({ min, max }) => percentageScore >= min && percentageScore <= max
      ) || 0;

    return { percentageScore, result };
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
