import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Botoes from "../components/Botoes";
import fundo from "../assets/video/video-demo.mp4";
import routes from "../routes";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderApp />
      <HeroApp>
        <video autoPlay muted loop className="home-video">
          <source className="home-video__video" src={fundo} type="video/mp4" />
        </video>
      </HeroApp>

      <FooterApp>
        <Botoes onClick={() => navigate(routes.servicos)} className="botao">
          CONHEÇA NOSSOS SERVIÇOS
        </Botoes>
      </FooterApp>
    </>
  );
}

export default HomePage;

// home-video
