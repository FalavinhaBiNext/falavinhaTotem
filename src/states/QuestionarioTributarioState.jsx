import { useState, useMemo } from "react";

export default function QuestionarioTributarioState() {
  const [taxValues, setTaxValues] = useState({
    tributacao: "",
    atividade: "",
    faturamento_mensal: "",
    num_funcionarios: "",
    folha_pagamento: "",
    dispesa_anual: "",
    patrimonio_liquido: "",
    lucro_empresa: "",
    gastos_inovacao: "",
    importacoes_anuais: "",
    exportacoes_anuais: "",
  });

  // CÁCULO DE 'EXLUSÃO DO ICMS'
  const exclusao_icms = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.1 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.1 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'PIS/COFINS'
  const exclusao_pis = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.0925 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.0365 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'ISS'
  const exclusao_iss = useMemo(() => {
    switch (taxValues.tributacao) {
      case "1":
        return taxValues.faturamento_mensal * 0.05 * 0.0925 * 60;
      case "2":
        return taxValues.faturamento_mensal * 0.05 * 0.0365 * 60;
      case "0":
        return "0";
      default:
        return null;
    }
  }, [taxValues.tributacao, taxValues.faturamento_mensal]);

  // CÁCULO DE 'AFASTAMENTO DE VERBAS INDENIZATÓRIAS'
  const afastamento_verbas = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.folha_pagamento * 0.005 * 60;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.folha_pagamento]);

  // CÁCULO DE 'RECUPERAÇÃO TAXAS SISCOMEX'
  const taxa_siscomex = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.importacoes_anuais * (214.5 - 30) * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.importacoes_anuais]);

  // CÁCULO DE 'INSS SOBRE TERCEIROS'
  const inss_terceiros = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return (taxValues.folha_pagamento - 20000) * 0.058 * 60;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.folha_pagamento]);

  // CÁCULO DE 'AMPLIAÇÕES DE CONCEITO DE INSUMOS PIS/COFINS'
  const conceito_insumos = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.dispesa_anual * 0.0925 * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.dispesa_anual]);

  // CÁCULO DE 'REINTEGRAÇÃO'
  const reitegracao = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.exportacoes_anuais * 0.03 * 5;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.exportacoes_anuais]);

  // CÁCULO DE 'LEI DO BEM'
  const lei_do_bem = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.gastos_inovacao * 0.34;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.gastos_inovacao]);

  // CÁCULO DE 'JUROS SOBRE CAPITAL PRÓPRIO'
  const capital_proprio = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.patrimonio_liquido * 0.06 * 0.19;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.patrimonio_liquido]);

  // CÁLCULO DA 'REDUÇÃO DO IRPJ'
  const deducao_irpj = useMemo(() => {
    if (taxValues.tributacao === "1" || taxValues.tributacao === "2") {
      return taxValues.lucro_empresa * 0.15 * 0.04;
    }
    return taxValues.tributacao === "0" ? "0" : null;
  }, [taxValues.tributacao, taxValues.lucro_empresa]);

  return {
    taxValues,
    setTaxValues,
    exclusao_icms,
    exclusao_pis,
    taxa_siscomex,
    exclusao_iss,
    conceito_insumos,
    afastamento_verbas,
    inss_terceiros,
    reitegracao,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
  };
}
