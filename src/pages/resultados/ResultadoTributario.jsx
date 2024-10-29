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

  console.log(data);
  const {
    exclusao_icms,
    exclusao_pis,
    exclusao_iss,
    afastamento_verbas,
    inss_terceiros,
    taxa_siscomex,
    conceito_insumos,
    reitegracao,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
    atividade,
    exportImport,
  } = data;

  // useEffect(() => {
  //   if (!data) {
  //     navigate("/questionario-tributario");
  //   }
  // }, [data, navigate]);

  const resultList = [
    {
      title: `Exclusão do ICMS da Base de Calculo do PIS/COFINS`,
      value: exclusao_icms && moneyConverter(exclusao_icms),
    },
    {
      title: `Exclusão do PIS/COFINS da Própria Base`,
      value: exclusao_pis && moneyConverter(exclusao_pis),
      recup: ["1", "2", "4", "5"].includes(atividade) ? "Judiciário" : null,
      risco: ["1", "2", "4", "5"].includes(atividade) ? "Baixo" : null,
      tempo_rec: ["1", "2", "4", "5"].includes(atividade) ? "3 meses" : null,
    },
    {
      title: `Exclusão do ISS da Base de Calculo do PIS/COFINS`,
      value: exclusao_iss && moneyConverter(exclusao_iss),
      recup: ["3"].includes(atividade) ? "Judiciário" : null,
      risco: ["3"].includes(atividade) ? "Médio" : null,
      tempo_rec: ["3"].includes(atividade) ? "3 meses" : null,
    },
    {
      title: `Afastamento das Verbas Indenizatórias`,
      value: afastamento_verbas && moneyConverter(afastamento_verbas),
      recup: "Judiciário",
      risco: "Alto",
      tempo_rec: "3 anos",
    },
    {
      title: `INSS sobre Terceiros (Sistema "S") Limitação da Base em 20 Salários Mínimos`,
      value: inss_terceiros && moneyConverter(inss_terceiros),
      recup: "Judiciário",
      risco: "Alto",
      tempo_rec: "3 meses",
    },
    {
      title: `Recuperação da Taxa Siscomex pago a maior nas importações`,
      value: taxa_siscomex && moneyConverter(taxa_siscomex),
      recup: exportImport ? "Judiciário" : null,
      risco: exportImport ? "Baixo" : null,
      tempo_rec: exportImport ? "1 ano" : null,
    },
    {
      title: `Ampliação do conceito de insumo pelo STJ e implicações 
       no direito a créditos de PIS e COFINS`,
      value: conceito_insumos && moneyConverter(conceito_insumos),
      recup: "Administrativo",
      risco: "Baixo",
      tempo_rec: "3 meses",
    },
    {
      title: `Reintegra`,
      value: reitegracao && moneyConverter(reitegracao),
      recup: ["10"].includes(atividade) ? "Administrativo" : null,
      risco: ["10"].includes(atividade) ? "Alto" : null,
      tempo_rec: ["10"].includes(atividade) ? "3 meses" : null,
    },
    {
      title: `Lei do Bem`,
      value: lei_do_bem && moneyConverter(lei_do_bem),
      recup: ["10"].includes(atividade) ? "Administrativo" : null,
      risco: ["10"].includes(atividade) ? "Alto" : null,
      tempo_rec: ["10"].includes(atividade) ? "3 meses" : null,
    },
    {
      title: `Juros sobre o Capital Próprio`,
      value: capital_proprio && moneyConverter(capital_proprio),
      recup: ["10"].includes(atividade) ? "Administrativo" : null,
      risco: ["10"].includes(atividade) ? "Alto" : null,
      tempo_rec: ["10"].includes(atividade) ? "3 meses" : null,
    },
    {
      title: `PAT - Dedução do IRPJ`,
      value: deducao_irpj && moneyConverter(deducao_irpj),
      recup: ["10"].includes(atividade) ? "Administrativo" : null,
      risco: ["10"].includes(atividade) ? "Alto" : null,
      tempo_rec: ["10"].includes(atividade) ? "3 meses" : null,
    },
  ];

  const checkIsPositive = (val) => (val === 0 ? `R$ ${val},00` : val);

  return (
    <>
      <HeaderApp redirect={"/tributario"}>
        <h1 className="title">Resultado tributário</h1>
      </HeaderApp>

      <HeroApp>
        <FramerMotion>
          <ul style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {resultList.map(
              ({ title, value, recup, risco, tempo_rec }, index) => (
                <li
                  key={index}
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    border: "1px solid #FFF",
                    color: "#FFF",
                    textAlign: "start",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    letterSpacing: "1px",
                  }}
                >
                  <p>
                    {title}:
                    <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                      {" "}
                      {checkIsPositive(value)}
                    </span>
                  </p>
                  {recup && (
                    <p>
                      Recup. <b>{checkIsPositive(recup)}</b>
                    </p>
                  )}
                  {risco && (
                    <p>
                      Risco: <b>{checkIsPositive(risco)}</b>
                    </p>
                  )}
                  {tempo_rec && (
                    <p>
                      Tempo M. Recuperação: <b>{checkIsPositive(tempo_rec)}</b>
                    </p>
                  )}
                </li>
              )
            )}
          </ul>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
