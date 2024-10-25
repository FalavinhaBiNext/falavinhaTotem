import { useContext } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import { GlobalContext } from "../../context/GlobalContextProvider";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/AssessoriaTributaria.png";

export default function ResultadoRH() {
  const { resultadoSurveyRh } = useContext(GlobalContext);
  const { title, message: resultMessage } = resultadoSurveyRh;

  return (
    <>
      <HeaderApp>
        <h1 className="title">Resultado</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          {title && resultMessage && (
            <article className="result-survey">
              <h2 className="result-survey__title">{title}</h2>
              <p className="result-survey__message">{resultMessage}</p>
            </article>
          )}
        </FramerMotion>
      </HeroApp>
    </>
  );
}
