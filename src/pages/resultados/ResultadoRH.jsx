import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import { GlobalContext } from "../../context/GlobalContextProvider";
import FramerMotion from "../../components/UI/FramerMotion";
import imagem from "../../assets/image/ConsultoriaRH.png";
import { PiUserSwitchThin } from "react-icons/pi";
import { BsShieldLock } from "react-icons/bs";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import FooterApp from "../../components/Footer";
import YellowStar from "../../components/UI/YellowStar";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function ResultadoRH() {
  const navigate = useNavigate();
  const { handleGetSurveyRh, handleGetSurveyData } = useContext(GlobalContext);
  const { titulo, mensagem: resultMessage, icon } = handleGetSurveyRh;

  useEffect(() => {
    if (!handleGetSurveyRh || Object.keys(handleGetSurveyRh).length === 0) {
      navigate("/consultoriaRH");
    } else {
      handleGetSurveyData("rh");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleGetSurveyRh, navigate]);

  const improvementsSuggestion = [
    {
      title: "Estratégia de retenção",
      icon: <PiUserSwitchThin className="w-20 h-20" />,
      improvements: [
        "Pesquisa de Clima",
        "Plano de Cargos e Salários",
        "Avaliação de Desempenho",
        "Políticas Internas/Manuais Internos",
      ],
    },
    {
      title: "LGPD",
      icon: <BsShieldLock className="w-20 h-20" />,
      improvements: [
        "Implantação e Auditoria",
        "Data Protection Officer - DPO",
        "Desenvolvimento de Políticas",
        "Consultoria Pontual",
      ],
    },
  ];

  // ESTILOS
  const containerStyle = `grid grid-cols-standard2 justify-between full gap-10 lg:gap-6 pt-[30px] 
   md:max-w-[768px] max-w-none mx-auto`;
  return (
    <>
      <ConfettiAnimation />

      <MainHeader redirect={"/consultoriaRH"}>
        <MainPageTitle title={"Resultado RH"} />
      </MainHeader>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <article className="pt-8 mb-20 text-xl text-light_color font-gilroyThin md:max-w-[768px] max-w-none mx-auto">
            <h2 className="pb-8 text-5xl text-center font-gilroyBold">
              {titulo}
            </h2>
            <span className="flex justify-center gap-3 mb-8 sm:gap-5">
              {YellowStar(icon)}
            </span>{" "}
            <p className="text-xl text-center sm:text-left lg:text-2xl text-light_color">
              {resultMessage}
            </p>
          </article>

          <div className={containerStyle}>
            {improvementsSuggestion.map(({ title, icon, improvements }) => (
              <article
                className="w-full lg:w-max text-light_color lg:last:justify-self-end justify-self-auto"
                key={title}
              >
                <h2 className="mb-4 text-2xl italic font-semibold uppercase sm:mb-6 lg:text-3xl">
                  {title}
                </h2>
                <div className="flex flex-col gap-4">
                  {icon}
                  <ul className="flex flex-col w-full gap-1 sm:gap-2">
                    {improvements.map((improvement) => (
                      <li
                        className="text-base sm:text-lg text-start"
                        key={improvement}
                      >
                        &#x2714; {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
