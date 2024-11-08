import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import fundo from "../../assets/video/video.mp4";
import routes from "../../routes";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderApp />

      <HeroApp>
        <HomeVideoPlayer videoSrc={fundo} />
      </HeroApp>

      <FooterApp>
        <MainButton
          onClick={() => navigate(routes.servicos)}
          className={"md:max-w-[470px] max-w-none"}
        >
          CONHEÇA NOSSOS SERVIÇOS
        </MainButton>
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
      <video
        className="fixed inset-0 w-screen h-screen min-[992px]:object-cover object-fill mx-auto"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div
        style={audioOverlayStyle}
        onClick={() => setIsMuted(!isMuted)}
        role="button"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      />
      <span
        className="absolute bottom-0 left-0 w-full h-[50%] 
      bg-gradient-to-b from-transparent to-[#000] z-10 pointer-events-none"
      />
    </>
  );
};

HomeVideoPlayer.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};
