import { useMemo, useState } from "react";
import { respostasSurveyRh } from "../services/db";

export function useGetSurvey() {
  const [respostasRh, setRespostasRh] = useState({});

  // Coleta a mensagem resultado do survey do RH
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

  return {
    respostasRh,
    handleGetSurveyRh,
    setRespostasRh,
  };
}
