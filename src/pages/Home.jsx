import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import fundo from "../assets/video/video-demo.mp4";
import { useState } from "react";

function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const audioOverlay = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
    opacity: "0",
  };

  return (
    <>
      <HeaderApp />
      <HeroApp>
        <video autoPlay loop muted={isMuted} playsInline className="home-video">
          <source src={fundo} type="video/mp4" />
        </video>
        <span style={audioOverlay} onClick={() => setIsMuted(!isMuted)}></span>
      </HeroApp>

      <FooterApp />
    </>
  );
}

export default HomePage;
