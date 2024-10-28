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

  useEffect(() => {
    if (!data) {
      navigate("/questionario-tributario");
    }
  }, [data, navigate]);

  return (
    <>
      <HeaderApp redirect={"/tributario"}>
        <h1 className="title">Resultado tributário</h1>
      </HeaderApp>

      <HeroApp>
        <FramerMotion>
          <ul>
            <li>
              Valor da folha de pagamento:{" "}
              {moneyConverter(data?.folha_pagamento)}
            </li>
            <li>
              Médias das dispensas anuais:{" "}
              {moneyConverter(data?.dispensa_anual)}
            </li>
            <li>
              Patrimônio líquido: {moneyConverter(data?.patrimonio_liquido)}
            </li>
            <li>Lucro da empresa: {moneyConverter(data?.lucro_empresa)}</li>
            <li>
              Gastos com inovação e tecnologia:{" "}
              {moneyConverter(data?.gastos_inovacao)}
            </li>
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
