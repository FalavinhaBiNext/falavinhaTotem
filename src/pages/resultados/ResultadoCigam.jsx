import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import imagem from "../../assets/image/AssessoriaTributaria.png";
import FooterApp from "../../components/Footer";
import { numberFormatter } from "../../utils";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function ResultadoCigam() {
  const {
    moneyConverter,
    resultadoCigam: data,
    handleGetSurveyData,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.values(data).length) {
      navigate("/questionario-cigam");
    } else {
      handleGetSurveyData("cigam");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigate]);

  const roiData = data
    ? [
        {
          value: moneyConverter(data?.produtividade_financeira),
          title: "Ganho de Produtividade Financeira/Ano",
          customSize: true,
        },
        {
          value: moneyConverter(data?.produtividade_mensal),
          title: "Ganho de Produtividade Mensal",
          customSize: true,
        },
        {
          value: numberFormatter(data?.produtividade_hora),
          title: "Ganho de Produtividade em Horas/Mês",
          customSize: false,
        },
        {
          value: data?.roi_meses_ano?.toFixed(1)?.replace(".", ","),
          title: "Retorno do Investimento/Anos/Meses",
          customSize: false,
        },
      ]
    : [];

  // STYLES
  const blocksListStyle = `flex flex-col gap-5 mb-[30px] md:max-w-[768px] max-w-none mx-auto`;
  const blockStyle = `w-full flex flex-col justify-center items-center p-[15px] rounded-[10px] 
  shadow-bx-1 bg-[#ff5200f2] font-[inherit] font-semibold tracking-[1.2px] text-light_color min-h-[100px]`;
  const customBlockStyle = `min-h-[200px] gap-[10px]`;
  const resultListStyle = (val) =>
    `${blockStyle} ${val ? customBlockStyle : ""}`;
  const resultValueStyle = (val) =>
    `${
      val ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
    } whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[-webkit-fill-available]`;

  return (
    <>
      <ConfettiAnimation />

      <MainHeader redirect={"/cigam"}>
        <MainPageTitle title={"Resultado CIGAM"} />
      </MainHeader>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          {roiData.length > 0 ? (
            <ul className={blocksListStyle}>
              {roiData.map((item, index) => (
                <li className={resultListStyle(item.customSize)} key={index}>
                  <h2 className={resultValueStyle(item.customSize)}>
                    {item.value}
                  </h2>
                  <h3 className="text-base text-center sm:text-lg">
                    {item.title || "Ganho produtividade financeira anual"}
                  </h3>
                </li>
              ))}
            </ul>
          ) : (
            <h2 className="text-2xl text-center text-light_color mt-28">
              Não há dados disponíveis
            </h2>
          )}
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
