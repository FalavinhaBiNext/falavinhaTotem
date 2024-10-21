import { useContext } from "react";
import HeaderApp from "../components/Header";
import Botoes from "../components/Botoes";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HeroApp from "../components/Hero";
import { GlobalContext } from "../context/GlobalContextProvider";
import FramerMotion from "../components/FramerMotion";
import ResultSurvey from "../components/ResultSurvey";
import imagem from "../assets/image/AssessoriaTributaria.png";

const resultMessages = [
  {
    min: 18,
    max: 24,
    title: "Excelente Gestão!",
    message: `A empresa demonstra uma forte capacidade de integrar tecnologias avançadas e práticas modernas de RH, 
    garantindo eficiência e conformidade em todos os processos.`,
  },
  {
    min: 12,
    max: 17,
    title: "Boa Gestão",
    message: `A empresa está bem posicionada em termos de práticas de RH, 
    mas ainda pode melhorar em algumas informações para alcançar a excelência.`,
  },
  {
    min: 6,
    max: 11,
    title: "Gestão de RH Média",
    message: `A empresa possui práticas de RH que atendem aos requisitos básicos, 
    mas há várias áreas que necessitam de melhorias significativas.`,
  },
  {
    min: 0,
    max: 5,
    title: "Gestão de RH Deficitária",
    message: `A empresa enfrenta desafios consideráveis em suas práticas
    de RH e precisa de uma gestão mais eficiente.`,
  },
];

export default function RespostaQuestionario() {
  const { calculateTotalScore } = useContext(GlobalContext);

  const navigate = useNavigate();
  const result = calculateTotalScore();

  const { title, message: resultMessage } =
    resultMessages.find(({ min, max }) => result >= min && result <= max) || {};
  return (
    <>
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <h1 className="title">Resultado</h1>

          <ResultSurvey title={title} message={resultMessage} />
        </FramerMotion>
      </HeroApp>
    </>
  );
}
