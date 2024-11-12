import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import Botoes from "../components/Botoes";
import fundo from "../assets/video/video.mp4";
import routes from "../routes";
import { GlobalContext } from "../context/GlobalContextProvider";

function HomePage() {
  const navigate = useNavigate();

  const { handleSetShowModal } = useContext(GlobalContext);
  const handleGetSevices = () => {
    handleSetShowModal(true);
    navigate(routes.servicos);
  };
  return (
    <>
      <HeaderApp />
      <HeroApp>
        <HomeVideoPlayer videoSrc={fundo} />
      </HeroApp>

      <FooterApp>
        <Botoes onClick={handleGetSevices} className="botao">
          CONHEÇA NOSSOS SERVIÇOS
        </Botoes>
      </FooterApp>
    </>
  );
}

export default HomePage;

const HomeVideoPlayer = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    opacity: 0,
    cursor: "pointer",
  };

  return (
    <>
      <video autoPlay loop muted={isMuted} playsInline className="home-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        style={audioOverlayStyle}
        onClick={() => setIsMuted(!isMuted)}
        role="button"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      />
    </>
  );
};

HomeVideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};
