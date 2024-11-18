import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import routes from "../../routes";
import VideoPlayer from "../../components/UI/VideoPlayer";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />

      <HeroApp>
        <VideoPlayer />
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
