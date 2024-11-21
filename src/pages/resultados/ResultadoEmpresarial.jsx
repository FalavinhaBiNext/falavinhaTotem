import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import MainHeader from "../../components/Header";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import { IoStar } from "react-icons/io5";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function ResultadoEmpresarial() {
  const navigate = useNavigate();
  const { handleGetSurveyEmpresarial, handleGetSurveyData } =
    useContext(GlobalContext);
  const { resultado_pesquisa, porcentagem } = handleGetSurveyEmpresarial;

  useEffect(() => {
    if (resultado_pesquisa === null || porcentagem === null) {
      navigate("/consultoria-empresarial");
    } else {
      handleGetSurveyData("empresarial");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultado_pesquisa, porcentagem, navigate]);

  // Estrelas
  const renderStars = (icon) => {
    const starCount = Math.min(Math.max(icon, 1), 5);
    return Array.from({ length: starCount }, (_, index) => (
      <IoStar
        className="w-12 h-12 text-yellow-500 sm:w-16 sm:h-16"
        key={index}
      />
    ));
  };

  return (
    <>
      <ConfettiAnimation />

      <MainHeader redirect={"/consultoria-empresarial"}>
        <MainPageTitle title={"Resultado"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <article className="text-xl text-light_color py-[50px] font-gilroyThin md:max-w-[768px] max-w-none mx-auto">
            <h2 className="text-2xl text-center text-light_color">
              O nível de maturidade da sua empresa é: <br />
              <span className="inline-block pt-4 text-3xl font-bold uppercase sm:pt-6 sm:text-5xl">
                {resultado_pesquisa?.maturidade}
              </span>
            </h2>
            <div className="flex flex-row items-center justify-center gap-3 py-8 sm:py-10 sm:gap-5">
              {renderStars(resultado_pesquisa?.icon)}
            </div>

            <p className="text-base sm:text-lg text-light_color">
              {resultado_pesquisa?.mensagem}
            </p>
          </article>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
