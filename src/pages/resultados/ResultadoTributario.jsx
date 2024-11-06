import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import ConfettiAnimation from "../../components/ConfettiAnimation";

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

  const noResultStyle = {
    textAlign: "center",
    color: "#fff",
    fontSize: "1.5rem",
    marginTop: "100px",
  };

  const hasValidData = resultadoTributario.some(
    (el) =>
      !isNaN(el.value) && el.value !== null && el.value !== "" && el.value !== 0
  );

  return (
    <>
      {hasValidData && <ConfettiAnimation />}

      <HeaderApp redirect={"/tributario"}>
        <h1 className="title">Resultado tributário</h1>
      </HeaderApp>

      <HeroApp>
        <FramerMotion>
          <ul className="tributario-list">
            {resultadoTributario.map(({ title, value }, index) => {
              const isValidValue =
                value !== 0 && value !== "0" && value !== null && !isNaN(value);
              if (isValidValue) {
                return (
                  <li className="tributario-list__item" key={index}>
                    <h2 className="tributario-list__title">
                      {title}: <span>{moneyConverter(value)}</span>
                    </h2>
                  </li>
                );
              }
            })}

            {!hasValidData && (
              <h2 style={noResultStyle}>
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
