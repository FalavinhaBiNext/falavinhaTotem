export default function handleSaveSurveyData({
  resultadoCigam,
  resultadoHolding,
  handleGetSurveyEmpresarial,
  handleGetSurveyRh,
  hasValidData,
  tributarioFiltrado,
  savedData,
  setIsSubmitting,
  origemUsuario,
  dados_lead,
}) {
  try {
    setIsSubmitting(true);
    const dados_usuario = {
      origin: origemUsuario || savedData.origin,
    };
    const dados_survey = {
      resultado_cigam: resultadoCigam,
      resultado_tributario: hasValidData
        ? JSON.stringify(tributarioFiltrado)
        : "Sem dados para exibir",
      resultado_empresarial: handleGetSurveyEmpresarial,
      resultado_rh: handleGetSurveyRh,
      resultado_holding: resultadoHolding,
    };
    // tratamento dos dados coletados
    const originMapping = {
      rh: {
        originName: "Consultoria RH",
        resultFunc: (data) =>
          `${data.resultado_rh.titulo}|${data.resultado_rh.mensagem}`,
      },
      cigam: {
        originName: "CIGAM",
        resultFunc: (data) => {
          const currencyOptions = { style: "currency", currency: "BRL" };
          return `Produtividade financeira: ${data.resultado_cigam.produtividade_financeira.toLocaleString(
            "pt-BR",
            currencyOptions
          )}|Produtividade hora: ${data.resultado_cigam.produtividade_hora
            }|Produtividade mensal: ${data.resultado_cigam.produtividade_mensal.toLocaleString(
              "pt-BR",
              currencyOptions
            )}`;
        },
      },
      empresarial: {
        originName: "Consultoria Empresarial",
        resultFunc: (data) =>
          `${data.resultado_empresarial.resultado_pesquisa.maturidade}|
           ${data.resultado_empresarial.resultado_pesquisa.mensagem}`,
      },
      tributário: {
        originName: "Tributário",
        resultFunc: (data) =>
          data.resultado_tributario
            .replace(/"(?=,)/g, "|")
            .replace(/"/g, "")
            .replace(/\|,/g, "|")
            .replace(/\\/g, "'")
            .replace(/[{}]/g, ""),
      },
      holding: {
        originName: "Holding",
        resultFunc: (data) => {
          const currencyOptions = { style: "currency", currency: "BRL" };
          const formatCurrency = (value) =>
            value.toLocaleString("pt-BR", currencyOptions);
          return `Resultado holding|ITCMD: ${formatCurrency(
            data.resultado_holding.holding_itcmd
          )}|Custo cartório: ${formatCurrency(
            data.resultado_holding.holding_cartorio
          )}|Consultoria holding: ${formatCurrency(
            data.resultado_holding.holding_consultoria
          )}|Total: ${formatCurrency(
            data.resultado_holding.holding_total
          )}||Resultado inventário|ITCMD: ${formatCurrency(
            data.resultado_holding.inventario_itcmd
          )}|Custo cartório: ${formatCurrency(
            data.resultado_holding.inventario_cartorio
          )}|Horários advocatícios: ${formatCurrency(
            data.resultado_holding.inventario_consultoria
          )}|Total: ${formatCurrency(
            data.resultado_holding.inventario_total
          )}||Diferença entre holding e inventário: ${formatCurrency(
            data.resultado_holding.total_geral
          )}`;
        },
      },
    };
    const originData = originMapping[dados_usuario.origin];
    const originChanged = originData?.originName || "";
    const result = originData?.resultFunc(dados_survey) || "";

    const lead = {
      origin: originChanged,
      result: result,
      ...dados_lead,
    };
    // await axios.post(
    //   "https://rafae4699.c44.integrator.host/totem/lead/create",
    //   lead,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    console.log("LEAD COMPLETO: ", lead);
    sessionStorage.setItem("lead_info", JSON.stringify(lead));
  } catch (error) {
    setIsSubmitting(false);
    console.error("Erro ao salvar o lead:", error);
  } finally {
    setIsSubmitting(false);
  }
}
