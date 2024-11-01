import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/AssessoriaTributaria.png";
import FooterApp from "../../components/Footer";

export default function ResultadoCigam() {
  const {
    moneyConverter,
    resultadoCigam: data,
    handleGetSurveyData,
  } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      navigate("/questionario-cigam");
    } else {
      handleGetSurveyData("cigam");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, navigate]);

  const roiData = data
    ? [
        { value: data?.usuarios, title: "Usuários" },
        {
          value: moneyConverter(data?.salario_medio),
          title: "Salário Médio",
        },
        {
          value: moneyConverter(data?.folha_pagamento),
          title: "Folha de Pagamento",
        },
        {
          value: moneyConverter(data?.salario_hora),
          title: "Salário/Hora/Colaborador",
        },
        {
          value: data?.produtividade_hora,
          title: "Ganho de Produtividade em Horas/Mês",
        },
        {
          value: moneyConverter(data?.produtividade_mensal),
          title: "Ganho de Produtividade Mensal",
        },
        {
          value: moneyConverter(data?.produtividade_financeira),
          title: "Ganho de Produtividade Financeira/Ano",
        },
        {
          value: data?.roi_meses_ano.toFixed(1).replace(".", ","),
          title: "Retorno do Investimento/Anos/Meses",
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
      <HeaderApp redirect={"/cigam"}>
        <h1 className="title">Resultado CIGAM</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          {roiData.length > 0 ? (
            <ul className="roi-list">
              {roiData.map((item, index) => (
                <li className="roi-list__item" key={index}>
                  <h2 className="roi-list__title">{item.value}</h2>
                  <h3 className="roi-list__value">{item.title}</h3>
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
