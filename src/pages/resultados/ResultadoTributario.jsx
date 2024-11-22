import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import fundo from "../../assets/image/FundoTributario.png";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function ResultadoTributario() {
  const { moneyConverter, handleGetSurveyData, resultadoTributario } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (resultadoTributario.length === 0) {
      navigate("/questionario-tributario");
    } else {
      handleGetSurveyData("tributário");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultadoTributario, navigate]);

  const hasValidData = resultadoTributario.some(
    (el) =>
      !isNaN(el.value) && el.value !== null && el.value !== "" && el.value !== 0
  );
  const isDataValid = (val) =>
    val !== 0 && val !== "0" && val !== null && !isNaN(val);

  // ESTILOS
  const valuesBlockStyle = `flex flex-col w-full h-full sm:min-h-[160px] min-h-[150px] font-[inherit] 
  text-light_color shadow-bx-1 border-b-[1px] border-light_color rounded-[10px] bg-[#005d601a] p-6`;

  return (
    <>
      {hasValidData && <ConfettiAnimation />}

      <MainHeader redirect={"/tributario"}>
        <MainPageTitle title={"Resultado Tributário"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <ul className="flex flex-col gap-6 md:max-w-[768px] max-w-none mx-auto">
            {resultadoTributario.map(({ title, value }, index) => {
              if (isDataValid(value)) {
                return (
                  <li className={valuesBlockStyle} key={index}>
                    <h2
                      className="text-3xl sm:text-[2.5rem] whitespace-nowrap overflow-hidden 
                        overflow-ellipsis max-w-[-webkit-fill-available] font-semibold pb-3"
                    >
                      {moneyConverter(value)}
                    </h2>
                    <p className="mt-auto text-sm uppercase sm:text-base">
                      {title}
                    </p>
                  </li>
                );
              }
            })}

            {!hasValidData && (
              <h2 className="text-2xl text-center text-light_color mt-28">
                Infelizmente não obtivemos um resultado para os seus dados
              </h2>
            )}
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
