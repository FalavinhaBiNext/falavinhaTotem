import PropTypes from "prop-types";
import logo from "../assets/image/MinilogoBlack.png";
import { style } from "framer-motion/client";
export function QuestionarioElementoMultiplo({
  respostas,
  perguntas,
  handleChange,
  children,
}) {
  return (
    <>
      <ul className="survey">
        {perguntas?.map((question, questionIndex) => (
          <li className="survey__list" key={question.id}>
            <h2 className="survey__list--title">{question.text}</h2>
            <ul className="survey__list--question">
              {question.options.map((option) => (
                <li className="survey__list--radios"
                 key={option.value}>
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
      </ul>

      {/* botão para enviar  os dados*/}
      {children}
    </>
  );
}

QuestionarioElementoMultiplo.propTypes = {
  respostas: PropTypes.object,
  perguntas: PropTypes.array,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};

export function QuestionarioElementoBinario({
  respostas,
  perguntas,
  handleChange,
  children,
}) {
  return (
    <>
      <ul className="survey">
        {perguntas?.map((section) => (
          <li className="survey__list" key={section.id}>
            <h2 className="survey__list--empreTitle">{section.titulo}</h2>
            <ul className="survey__list--question">
              {section.perguntas.map((question, questionIndex) => (
                <li className="survey__question--list" key={questionIndex}>
                  <h3>{question.text}</h3>
                  <ul className="survey__question--radios">
                    {question.options.map((option) => (
                      <li className="survey__list--radios" key={option.value}>
                        <input
                          type="radio"
                          name={`question-${section.id}-${questionIndex}`}
                          id={`${section.id}-${questionIndex}-${option.value}`}
                          value={option.value}
                          checked={
                            respostas[`${section.id}-${questionIndex}`] ===
                            option.value
                          }
                          onChange={() =>
                            handleChange(
                              `${section.id}-${questionIndex}`,
                              option.value
                            )
                          }
                        />
                        <label
                          className="radio-label"
                          htmlFor={`${section.id}-${questionIndex}-${option.value}`}
                        >
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* botão para enviar  os dados*/}
      {children}
    </>
  );
}

QuestionarioElementoBinario.propTypes = {
  respostas: PropTypes.object,
  perguntas: PropTypes.array,
  handleChange: PropTypes.func,
  children: PropTypes.node,
};
