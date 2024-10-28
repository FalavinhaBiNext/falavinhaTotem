import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";

export default function ResultadoTributario() {
  const { moneyConverter, submitTotalValues: data } = useContext(GlobalContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!data) {
  //     navigate("/questionario-tributario");
  //   }
  // }, [data, navigate]);

  const resultList = [
    {
      title: `Exclusão do ICMS da Base de Calculo do PIS/COFINS`,
      value: "1000",
    },
    {
      title: `Exclusão do PIS/COFINS da Própria Base`,
      value: "",
    },
    {
      title: `Exclusão do ISS da Base de Calculo do PIS/COFINS`,
      value: "",
    },
    {
      title: `Não Incidência do ICMS e ISS da Base de Calculo do IR e CS`,
      value: "",
    },
    {
      title: `Afastamento das Verbas Indenizatórias`,
      value: "",
    },
    {
      title: `INSS sobre Terceiros (Sistema "S") Limitação da Base em 20 Salários Mínimos`,
      value: "",
    },
    {
      title: `Recuperação do THC pago a maior nas importações`,
      value: "",
    },
    {
      title: `Exclusão do Frete e Seguros dos Impostos na Importação`,
      value: "",
    },
    {
      title: `Recuperação de Créditos para empresas do Simples Nacional (Produtos Monofásicos)`,
      value: "",
    },
    {
      title: `Inconstitucionalidade do IPI na Revenda dos Importados`,
      value: "",
    },
    {
      title: `Ampliação do conceito de insumo pelo STJ e implicações 
       no direito a créditos de PIS e COFINS`,
      value: "",
    },
    {
      title: `Restituição do ICMS-ST pago a maior`,
      value: "",
    },
    {
      title: `Reintegra`,
      value: "",
    },
    {
      title: `Lei do Bem`,
      value: "",
    },
    {
      title: `Juros sobre o Capital Próprio`,
      value: "",
    },
    {
      title: `PAT - Dedução do IRPJ`,
      value: "",
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/tributario"}>
        <h1 className="title">Resultado tributário</h1>
      </HeaderApp>

      <HeroApp>
        <FramerMotion>
          <ul style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {resultList.map((item, index) => (
              <li
                key={index}
                style={{
                  padding: 10,
                  borderRadius: 10,
                  border: "1px solid #FFF",
                  color: "#FFF",
                }}
              >
                {item.title}:
                <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {" "}
                  {item.value}
                </span>
              </li>
            ))}
            {/* <li>
              Valor da folha de pagamento:{" "}
              {moneyConverter(data?.folha_pagamento)}
            </li>
            <li>
              Médias das dispensas anuais:{" "}
              {moneyConverter(data?.dispensa_anual)}
            </li>
            <li>Patrimônio líquido: {moneyConverter(data?.pat_liquido)}</li>
            <li>Lucro da empresa: {moneyConverter(data?.lucro_empresa)}</li>
            <li>
              Gastos com inovação e tecnologia:{" "}
              {moneyConverter(data?.gastos_inovacao)}
            </li> */}
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
