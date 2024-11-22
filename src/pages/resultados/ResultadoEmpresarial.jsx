import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import MainHeader from "../../components/Header";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import MainPageTitle from "../../components/UI/MainPageTitle";
import YellowStar from "../../components/UI/YellowStar";

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

  return (
    <>
      <ConfettiAnimation />

      <MainHeader redirect={"/consultoria-empresarial"}>
        <MainPageTitle title={"Resultado Empresarial"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <article className="text-xl text-light_color pt-8 font-gilroyThin md:max-w-[768px] max-w-none mx-auto">
            <h2 className="text-2xl text-center text-light_color">
              O nível de maturidade da sua empresa é: <br />
              <span className="inline-block pt-4 text-3xl font-bold uppercase sm:pt-6 sm:text-5xl">
                {resultado_pesquisa?.maturidade}
              </span>
            </h2>
          </article>

          <div className="flex flex-col items-center justify-center gap-4 py-6 sm:py-8 md:max-w-[768px] max-w-none mx-auto">
            <span className="flex gap-3 sm:gap-5">
              {YellowStar(resultado_pesquisa?.icon)}
            </span>
            <p className="text-base text-center sm:text-lg text-light_color sm:text-left">
              {resultado_pesquisa?.mensagem}
            </p>
          </div>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
