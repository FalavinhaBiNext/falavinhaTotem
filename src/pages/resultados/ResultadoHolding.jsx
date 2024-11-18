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

  const resultStyle = (val) => val < 0 && "red";

  return (
    <>
      <ConfettiAnimation />
      <MainHeader redirect={"/holding"}>
        <h1 className="title">Resultado holding</h1>
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          {data.map(({ title, items }) => (
            <div className="holding" key={title}>
              <h3 className="holding-title">Resultado {title}</h3>
              <ul className="holding-list">
                {items.map((item) => (
                  <li className="holding-list__item" key={item.title}>
                    {item.title}: <span>{moneyConverter(item.value)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <h4 className="holding-total">
            Diferença entre Holding e Inventário:{" "}
            <span
              style={{
                color: resultStyle(resultadoHolding.total_geral),
              }}
            >
              {moneyConverter(resultadoHolding.total_geral)}
            </span>
          </h4>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
