import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";

export default function ResultadoTributario() {
  const { moneyConverter, resultadoTributario, handleGetSurveyData } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!resultadoTributario) {
      navigate("/questionario-tributario");
    } else {
      handleGetSurveyData("tributário");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultadoTributario, navigate]);

  if (!resultadoTributario) return null;

  const {
    exclusao_icms,
    exclusao_pis,
    exclusao_iss,
    afastamento_verbas,
    inss_terceiros,
    taxa_siscomex,
    conceito_insumos,
    reintegracao,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
    creditos_simples1,
    creditos_simples2,
    atividades,
    importacoes,
    incidencia_icms,
  } = resultadoTributario;

  const hasActivities = (activitiesArray) =>
    activitiesArray.includes(atividades);

  const hasPisCofins = hasActivities(["1", "2", "4", "5"]);
  const hasServicos = hasActivities(["3"]);
  const hasRestaurantes = hasActivities(["6"]);
  const hasAutoPecas = hasActivities(["7"]);
  const hasAllActivities = hasActivities([
    "1",
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);
  const resultList = [
    hasPisCofins && {
      title: `Exclusão do ICMS da base de cálculo do PIS/COFINS`,
      value: exclusao_icms,
    },
    hasPisCofins && {
      title: `Exclusão do PIS/COFINS da própria base`,
      value: exclusao_pis,
    },
    hasServicos && {
      title: `Exclusão do ISS da base de cálculo do PIS/COFINS`,
      value: exclusao_iss,
    },
    hasAllActivities && {
      title: `Não incidência do ICMS e ISS da base de cálculo do IR e CS`,
      value: incidencia_icms,
    },
    hasAllActivities && {
      title: `Afastamento das verbas indenizatórias`,
      value: afastamento_verbas,
    },
    hasAllActivities && {
      title: `INSS sobre terceiros (Sistema "S") limitação da base em 20 salários mínimos`,
      value: inss_terceiros,
    },
    hasAllActivities &&
      importacoes > 0 && {
        title: `Recuperação da taxa Siscomex pago a maior nas importações`,
        value: taxa_siscomex,
      },
    (hasRestaurantes || hasAutoPecas) && {
      title: `Recuperação de créditos para empresas do Simples Nacional (Produtos Monofásicos)`,
      value: hasRestaurantes
        ? creditos_simples1
        : hasAutoPecas
        ? creditos_simples2
        : null,
    },
    hasAllActivities && {
      title: `Ampliação do conceito de insumo pelo STJ e implicações no direito a créditos de PIS e COFINS`,
      value: conceito_insumos,
    },
    hasAllActivities && {
      title: `Reintegra`,
      value: reintegracao,
    },
    hasAllActivities && {
      title: `Lei do Bem`,
      value: lei_do_bem,
    },
    hasAllActivities && {
      title: `Juros sobre o Capital Próprio`,
      value: capital_proprio,
    },
    hasAllActivities && {
      title: `PAT - Dedução do IRPJ`,
      value: deducao_irpj,
    },
  ].filter(Boolean);

  return (
    <>
      <HeaderApp redirect={"/tributario"}>
        <h1 className="title">Resultado tributário</h1>
      </HeaderApp>

      <HeroApp>
        <FramerMotion>
          <ul className="tributario-list">
            {resultList
              .filter(
                ({ value }) =>
                  value !== 0 &&
                  value !== "0" &&
                  value !== null &&
                  !isNaN(value)
              )
              .map(({ title, value }, index) => (
                <li className="tributario-list__item" key={index}>
                  <h2 className="tributario-list__title">
                    {title}: <span>{moneyConverter(value)}</span>
                  </h2>
                </li>
              ))}
            {resultList.filter(
              ({ value }) => value !== 0 && value !== "0" && value !== null
            ).length === 0 && (
              <h2
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "1.5rem",
                  marginTop: "100px",
                }}
              >
                Sem dados para exibir
              </h2>
            )}
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
