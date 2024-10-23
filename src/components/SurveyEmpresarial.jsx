import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import Botoes from "./Botoes";

export default function SurveyEmpresarial({
  perguntas,
  perguntasAlternativas,
}) {
  const [altAnswers, setAltAnswers] = useState({});

  const { answers, setAnswers, getUserContact, inputVal, errors } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  const hasEmptyInputs =
    inputVal.email === "" || inputVal.telefone === "" || inputVal.nome === "";
  const hasErrors = errors.nome || errors.email || errors.telefone;
  const hasAltAnswers = Object.keys(altAnswers).length === 2;

  function isAllQuestionsAnswered() {
    return Object.keys(answers).length === perguntas.length;
  }

  const handleSubmitSurvey = () => {
    getUserContact();
    navigate("/resultado-rh");
  };

  const handleChangeAlt = (questionId, answerValue) => {
    setAltAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  return (
    <ul className="survey">
      {perguntas.map((question, questionIndex) => (
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

      {perguntasAlternativas.map((question) => (
        <li className="survey__list" key={question.id}>
          <h2 className="survey__list--title">{question.text}</h2>
          <ul className="survey__list--question">
            {question.options.map((option) => (
              <li className="survey__list--radios" key={option.id}>
                <input
                  type="radio"
                  name={`question-${option.id}`}
                  id={`question-${option.id}`}
                  value={option.id}
                  checked={altAnswers[question.id] === option.id}
                  onChange={() => handleChangeAlt(question.id, option.id)}
                />
                <label
                  className="radio-label"
                  htmlFor={`question-${option.id}`}
                >
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}

      {isAllQuestionsAnswered() &&
        !hasEmptyInputs &&
        !hasErrors &&
        hasAltAnswers && (
          <Botoes onClick={handleSubmitSurvey} className="opcoes">
            Ver resultado
          </Botoes>
        )}
    </ul>
  );
}

SurveyEmpresarial.propTypes = {
  perguntas: PropTypes.array,
  perguntasAlternativas: PropTypes.array,
};
