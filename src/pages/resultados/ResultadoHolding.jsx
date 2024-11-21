import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { moneyConverter } from "../../utils";
import { GlobalContext } from "../../context/GlobalContextProvider";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoHolding.png";
import ConfettiAnimation from "../../components/UI/ConfettiAnimation";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function ResultadoHolding() {
  const { resultadoHolding, handleGetSurveyData } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Object.values(resultadoHolding).length) {
      navigate("/questionario-holding");
    } else {
      handleGetSurveyData("holding");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultadoHolding, navigate]);

  const data = [
    {
      title: "Holding",
      items: [
        { title: "ITCMD", value: resultadoHolding.holding_itcmd },
        { title: "Custo cartório", value: resultadoHolding.holding_cartorio },
        {
          title: "Consultoria holding",
          value: resultadoHolding.holding_consultoria,
        },
        {
          title: "Total",
          value: resultadoHolding.holding_total,
        },
      ],
    },
    {
      title: "Inventário",
      items: [
        { title: "ITCMD", value: resultadoHolding.inventario_itcmd },
        {
          title: "Custo cartório",
          value: resultadoHolding.inventario_cartorio,
        },
        {
          title: "Honorários advocatícios",
          value: resultadoHolding.inventario_consultoria,
        },
        { title: "Total", value: resultadoHolding.inventario_total },
      ],
    },
  ];

  // ESTILOS
  const containerStyle = `flex flex-col justify-center items-start gap-5 p-5 w-full mb-10 sm:mb-12
  rounded-[10px] min-h-[120px] shadow-bx-1 text-light_color font-[inherit] tracking-[1.5px] bg-[#005d601a]
  `;

  return (
    <>
      <ConfettiAnimation />

      <MainHeader redirect={"/holding"}>
        <MainPageTitle title={"Resultado Holding"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div className="md:max-w-[768px] max-w-none mx-auto">
            {data.map(({ title, items }) => (
              <div className={containerStyle} key={title}>
                <h3 className="text-2xl uppercase sm:text-3xl text-light_color font-gilroyLight">
                  Resultado {title}
                </h3>

                <ul className="flex flex-col gap-1 sm:gap-2">
                  {items.map((item) => (
                    <li className="text-base text-start" key={item.title}>
                      {item.title}:{" "}
                      <span className="text-xl font-semibold">
                        {moneyConverter(item.value)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <h4 className="text-light_color text-xl sm:text-2xl font-bold tracking-[1.5px]">
              Diferença entre Holding e Inventário:{" "}
              <span
                className={`${
                  resultadoHolding.total_geral < 0 && "text-error_color"
                } sm:text-3xl text-2xl`}
              >
                {moneyConverter(resultadoHolding.total_geral)}
              </span>
            </h4>
          </div>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
