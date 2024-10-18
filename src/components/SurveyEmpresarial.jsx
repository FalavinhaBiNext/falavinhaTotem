import PropTypes from "prop-types";
import { Fragment, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";

export default function SurveyEmpresarial({ questions }) {
  const { answers, setAnswers } = useContext(GlobalContext);

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

  function isAllQuestionsAnswered() {
    return Object.keys(answers).length === questions.length;
  }

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

      {isAllQuestionsAnswered() && (
        <button
          onClick={() => navigate("/resposta-questionario")}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "#fff",
            border: "none",
            outline: "none",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Ver resultado
        </button>
      )}
    </ul>
  );
}

SurveyEmpresarial.propTypes = {
  questions: PropTypes.array,
};
