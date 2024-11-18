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

  const noDataToShowStyle = {
    textAlign: "center",
    color: "#fff",
    fontSize: "1.5rem",
    marginTop: "100px",
  };

  return (
    <>
      <ConfettiAnimation />
      <MainHeader redirect={"/cigam"}>
        <MainPageTitle title={"Resultado CIGAM"} />
      </MainHeader>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          {roiData.length > 0 ? (
            <ul className="roi-list">
              {roiData.map((item, index) => (
                <li
                  className={`roi-list__item ${
                    item.customSize ? "roi-list__item--custom" : ""
                  }`}
                  key={index}
                >
                  <h2 className="roi-list__title">{item.value}</h2>
                  <h3 className="roi-list__value">
                    {item.title || "Ganho produtividade financeira anual"}
                  </h3>
                </li>
              ))}
            </ul>
          ) : (
            <h2 style={noDataToShowStyle}>Sem dados para exibir</h2>
          )}
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
