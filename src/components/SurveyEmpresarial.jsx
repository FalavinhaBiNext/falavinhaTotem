import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import Botoes from "./Botoes";
import { perguntasSurveyRh } from "../services/db";

export default function SurveyEmpresarial({ hasUserData }) {
  const { answers, setAnswers, handleGetSurveyData, hasInputErrors } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      setAnswers({});
    }
  });

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  function isAllQuestionsAnswered() {
    return Object.keys(answers).length === perguntasSurveyRh.length;
  }

  const handleSubmitSurvey = () => {
    if (!isAllQuestionsAnswered() || hasInputErrors) return;
    if (!hasUserData) handleGetSurveyData();
    navigate("/resultado-rh");
    handleGetSurveyData();
  };

  return (
    <ul className="survey">
      {perguntasSurveyRh.map((question, questionIndex) => (
        <li className="survey__list" key={question.id}>
          <h2 className="survey__list--title">{question.text}</h2>
          <ul className="survey__list--question">
            {question.options.map((option) => (
              <li className="survey__list--radios" key={option.value}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  id={`${questionIndex}-${option.value}`}
                  value={option.value}
                  checked={answers[question.id] === option.value}
                  onChange={() => handleChange(question.id, option.value)}
                />
                <label
                  className="radio-label"
                  htmlFor={`${questionIndex}-${option.value}`}
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}

      <Botoes className="botao" onClick={handleSubmitSurvey}>
        Ver resultado
      </Botoes>
    </ul>
  );
}

SurveyEmpresarial.propTypes = {
  perguntas: PropTypes.array,
  perguntasAlternativas: PropTypes.array,
  hasUserData: PropTypes.bool,
};
