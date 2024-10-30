import { useContext, useEffect, useState } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/ConsultoriaRH.png";
import Formulario from "../../components/Formulario";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import { perguntasSurveyRh } from "../../services/db";
import Botoes from "../../components/Botoes";

export default function QuestionarioRH() {
  const { answers, setAnswers, getUserData, hasInputErrors } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const [hasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      setAnswers({});
    }
  }, []);

  const handleChange = (questionId, answerValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  // Apenas certifica se todos os checkboxes foram marcados
  const isAllInputsChecked = () => {
    return (
      Object.keys(answers).length === perguntasSurveyRh.length || hasInputErrors
    );
  };

  const handleSubmitSurvey = () => {
    if (!Object.keys(hasUserData).length) getUserData("rh");
    navigate("/resultado-rh");
  };

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <Formulario />

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
                <img style={{position: "absolute", height: 200, width: 200, right: 20, opacity: 0.07}} src="/src/assets/image/MinilogoBlack.png" alt="Resposta" />
              </li>
            ))}

            <Botoes
              className="botao"
              onClick={handleSubmitSurvey}
              disabled={!isAllInputsChecked()}
            >
              Ver resultado
            </Botoes>
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
