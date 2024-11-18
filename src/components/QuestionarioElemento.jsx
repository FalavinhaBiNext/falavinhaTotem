import PropTypes from "prop-types";
import logo from "../assets/image/MinilogoBlack.png";

const containerStyle = `flex flex-col gap-8 mb-10 md:max-w-[768px] max-w-none mx-auto`;
const surveyListStyle = `flex flex-col text-start bg-[#005d604d] p-5 rounded-[20px] shadow-bx-1`;
const surveyListQuestionsStyle = `flex flex-col gap-[5px] font-gilroyThin tracking-[2px]`;
const radioLabelStyle = `flex gap-2 text-base text-light_color p-[5px] items-center h-[inherit] font-gilroyLight cursor-pointer
 before:content-[''] before:bg-tranparent before:rounded-full before:border-[2px] before:border-[#b4b4b4] 
 before:inline-block before:w-[16px] before:h-[16px] before:min-w-[16px] before:relative before:top-0 before:mt-0
before:align-top before:text-center before:transition before:ease-in-out duration-300
`;
export function QuestionarioElementoMultiplo({
  respostas,
  perguntas,
  handleChange,
  children,
}) {
  return (
    <>
      <ul className={containerStyle}>
        {perguntas?.map((question, questionIndex) => (
          <li className={`${surveyListStyle} survey__list`} key={question.id}>
            <h2 className="text-lg text-light_color leading-[26px] pb-2 font-gilroyBold tracking-[2px]">
              {question.text}
            </h2>
            <ul className={surveyListQuestionsStyle}>
              {question.options.map((option) => (
                <li className="relative h-full" key={option.value}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    id={`${questionIndex}-${option.value}`}
                    value={option.value}
                    checked={respostas[question.id] === option.value}
                    onChange={() => handleChange(question.id, option.value)}
                  />
                  <label
                    className={`radio-label ${radioLabelStyle} ${
                      respostas[question.id] === option.value &&
                      "radio-label--multiplo"
                    }`}
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
  backgroundRadio,
  children,
}) {
  return (
    <>
      <ul className={containerStyle}>
        {perguntas?.map((section) => (
          <li className={`${surveyListStyle} survey__list`} key={section.id}>
            <h2 className="text-2xl sm:text-3xl text-light_color font-gilroyBold pb-[10px]">
              {section.titulo}
            </h2>
            <ul className={surveyListQuestionsStyle}>
              {section.perguntas.map((question, questionIndex) => (
                <li
                  className="flex flex-col gap-[2px] pb-2"
                  key={questionIndex}
                >
                  <h3 className="text-lg text-light_color leading-[26px] pb-1 font-gilroyBold tracking-[2px]">
                    {question.text}
                  </h3>
                  <ul className="flex flex-row gap-[10px] pb-2">
                    {question.options.map((option) => (
                      <li className="relative h-full" key={option.value}>
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
                          className={`radio-label ${radioLabelStyle} ${
                            respostas[`${section.id}-${questionIndex}`] ===
                              option.value && "radio-label--binario"
                          }`}
                          htmlFor={`${section.id}-${questionIndex}-${option.value}`}
                          style={{
                            backgroundColor:
                              respostas[`${section.id}-${questionIndex}`] ===
                              option.value
                                ? backgroundRadio
                                : "",
                          }}
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
  backgroundRadio: PropTypes.string,
};
