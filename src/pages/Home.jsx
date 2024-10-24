import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import fundo from "../assets/video/video-demo.mp4";

function HomePage() {
  return (
    <>
      <HeaderApp />
      <HeroApp>
        <video autoPlay muted loop className="home-video">
          <source className="home-video__video" src={fundo} type="video/mp4" />
        </video>
      </HeroApp>

      <FooterApp />
    </>
  );
}

export default HomePage;

// home-video
