import PropTypes from "prop-types";

import React from "react";
import logo from "../assets/image/MinilogoBlack.png";
export default function QuestionarioElemento({
  respostas,
  perguntas,
  handleChange,
  children,
}) {
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
                  checked={respostas[question.id] === option.value}
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

          <img
            style={{
              position: "absolute",
              height: 200,
              width: 200,
              right: 20,
              opacity: 0.07,
            }}
            src={logo}
            alt="Logo falavinha"
          />
        </li>
      ))}

      {children}
    </ul>
  );
}

QuestionarioElemento.propTypes = {
  respostas: PropTypes.object,
  perguntas: PropTypes.array,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};
