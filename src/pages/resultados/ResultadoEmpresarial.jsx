import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import HeaderApp from "../../components/Header";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import ConfettiAnimation from "../../components/ConfettiAnimation";
import { IoStar } from "react-icons/io5";

export default function ResultadoEmpresarial() {
  const navigate = useNavigate();
  const { handleGetSurveyEmpresarial } = useContext(GlobalContext);
  const { result, percentageScore } = handleGetSurveyEmpresarial;

  useEffect(() => {
    if (!result || !percentageScore) {
      navigate("/consultoria-empresarial");
    }
  }, [result, percentageScore, navigate]);

  const renderStars = (icon) => {
    const starCount = Math.min(Math.max(icon, 1), 5);
    return Array.from({ length: starCount }, (_, index) => (
      <IoStar key={index} />
    ));
  };

  return (
    <>
      <ConfettiAnimation />

      <HeaderApp redirect={"/consultoria-empresarial"}>
        <h1 className="title-result">Resultado</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <article className="result-survey">
            <h2 style={{ fontSize: "1.5rem", color: "#fff" }}>
              {" "}
              Sua pontuação é: {""}
              {Math.round(percentageScore)}%
            </h2>
            <h3>
              O nível de maturidade da empresa é{" "}
              <span style={{ fontSize: "1.5rem", textTransform: "uppercase" }}>
                {result.maturidade}
              </span>
            </h3>
            <div className="icon-result-container">
              {renderStars(result.icon)}
            </div>{" "}
            <p
              style={{ fontSize: "1rem", letterSpacing: "2px", color: "#fff" }}
            >
              {result.mensagem}
            </p>
          </article>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
