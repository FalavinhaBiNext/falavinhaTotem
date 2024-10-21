import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import Botoes from "./Botoes";

export default function SurveyEmpresarial({ questions }) {
  const { answers, setAnswers, getUserContact, inputVal, errors, touched } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    setAnswers({});
  }, [setAnswers]);

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  const hasEmptyInputs =
    inputVal.email === "" || inputVal.telefone === "" || inputVal.nome === "";
  const hasErrors = errors.nome || errors.email || errors.telefone;

  function isAllQuestionsAnswered() {
    return Object.keys(answers).length === questions.length;
  }

  const handleSubmitSurvey = () => {
    getUserContact();
    navigate("/resposta-questionario");
  };

  return (
    <ul className="survey">
      {questions.map((question, questionIndex) => (
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

      {isAllQuestionsAnswered() && !hasEmptyInputs && !hasErrors && (
        <Botoes onClick={handleSubmitSurvey} className="opcoes">
          Ver resultado
        </Botoes>
      )}
    </ul>
  );
}

SurveyEmpresarial.propTypes = {
  questions: PropTypes.array,
};
