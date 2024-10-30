import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import { GlobalContext } from "../../context/GlobalContextProvider";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/RespostaQuestionarioRH.png";
import "../../style/resultPages.css";
import { IoStar } from "react-icons/io5";
import { PiUserSwitchThin } from "react-icons/pi";
import { BsShieldLock } from "react-icons/bs";

export default function ResultadoRH() {
  const navigate = useNavigate();
  const { resultadoSurveyRh } = useContext(GlobalContext);
  const { title, message: resultMessage, icon } = resultadoSurveyRh;

  const rendeStars = (icon) => {
    const maxStars = 5;
    const starCount = Math.min(Math.max(icon, 1), maxStars);
    return Array(starCount)
      .fill(null)
      .map((_, index) => <IoStar key={index} />);
  };

  useEffect(() => {
    if (!resultadoSurveyRh || Object.keys(resultadoSurveyRh).length === 0) {
      navigate("/consultoriaRH");
    }
  }, [resultadoSurveyRh, navigate]);

  return (
    <>
      <HeaderApp>
        <h1 className="title-result">Resultado</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          {title && resultMessage && (
            <article className="result-survey">
              <h2 className="title_result_page">{title}</h2>
              <div className="icon-result-container">{rendeStars(icon)}</div>
              <p className="message_result_page">{resultMessage}</p>
            </article>
          )}

          <div className="topics-result">
            <div>
              <h2>ESTRATÉGIA DE RETENÇÃO</h2>
              <PiUserSwitchThin />
              <ul>
                <li>Pesquisa de Clima</li>
                <li>Plano de Cargos e Salários</li>
                <li>Avaliação de Desempenho</li>
                <li>Políticas Internas/Manuais Internos</li>
              </ul>
            </div>
            <div>
              <h2>LGPD</h2>
              <BsShieldLock />
              <ul>
                <li>Implantação e Auditoria</li>
                <li>Data Protection Officer - DPO</li>
                <li>Desenvolvimento de Políticas</li>
                <li>Consultoria Pontual</li>
              </ul>
            </div>
          </div>
        </FramerMotion>
      </HeroApp>
    </>
  );
}
