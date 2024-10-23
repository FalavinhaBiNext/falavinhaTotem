import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Botoes from "../components/Botoes";
import fundo from "../assets/video/vídeoTotem.mp4";
import routes from "../routes";

function HomePage() {
  const navigate = useNavigate();

  const homepageButtonStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 50,
    width: "100%",
    marginTop: "auto",
  };

  return (
    <>
      <HeaderApp />
      <HeroApp>
        <video autoPlay muted loop className="home-video">
          <source className="home-video__video" src={fundo} type="video/mp4" />
        </video>

        <div style={homepageButtonStyle}>
          <Botoes onClick={() => navigate(routes.servicos)} className="opcoes">
            CONHEÇA NOSSOS SERVIÇOS
          </Botoes>
        </div>
      </HeroApp>

      <FooterApp />
    </>
  );
}

export default HomePage;

// home-video
