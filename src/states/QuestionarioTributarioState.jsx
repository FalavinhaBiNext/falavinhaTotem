/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from "react";

export default function QuestionarioTributarioState() {
  const [importacoes, setImportacoes] = useState(false);
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

  const tributacao = taxValues.tributacao;
  const faturamentoMensal = taxValues.faturamento_mensal;
  const folhaPagamento = taxValues.folha_pagamento;
  const dispesaAnual = taxValues.dispesa_anual;
  const patrimonioLiquido = taxValues.patrimonio_liquido;
  const lucroEmpresa = taxValues.lucro_empresa;
  const gastosInovacao = taxValues.gastos_inovacao;
  const importacoesAnuais = taxValues.importacoes_anuais;
  const exportacoesAnuais = taxValues.exportacoes_anuais;
  const atividades = taxValues.atividade;

  // Definição dos multiplicadores para os cálculos
  const multipliers = {
    1: 0.0925,
    2: 0.0365,
  };

  // CÁLCULO DE 'EXLUSÃO DO ICMS'
  const exclusao_icms = useMemo(() => {
    if (tributacao in multipliers) {
      return faturamentoMensal * 0.1 * multipliers[tributacao] * 60;
    }
    return tributacao === "0" ? 0 : null;
  }, [tributacao, faturamentoMensal]);

  // CÁLCULO DE 'PIS/COFINS'
  const exclusao_pis = useMemo(() => {
    if (tributacao in multipliers) {
      return (
        faturamentoMensal *
        multipliers[tributacao] *
        multipliers[tributacao] *
        60
      );
    }
    return tributacao === "0" ? 0 : null;
  }, [tributacao, faturamentoMensal]);

  // CÁLCULO DE 'ISS'
  const exclusao_iss = useMemo(() => {
    if (tributacao in multipliers) {
      return faturamentoMensal * 0.05 * multipliers[tributacao] * 60;
    }
    return tributacao === "0" ? 0 : null;
  }, [tributacao, faturamentoMensal]);

  const tributacao1or2 = tributacao === "1" || tributacao === "2";

  // CÁLCULO DE 'AFASTAMENTO DE VERBAS INDENIZATÓRIAS'
  const afastamento_verbas = useMemo(() => {
    return tributacao1or2
      ? folhaPagamento * 0.005 * 60
      : tributacao === "0"
      ? null
      : null;
  }, [tributacao, folhaPagamento]);

  // CÁLCULO DE 'RECUPERAÇÃO TAXAS SISCOMEX'
  const taxa_siscomex = useMemo(() => {
    return tributacao1or2
      ? importacoesAnuais * 184.5 * 5
      : tributacao === "0"
      ? 0
      : null;
  }, [tributacao, importacoesAnuais]);

  // CÁLCULO DE 'INSS SOBRE TERCEIROS'
  const inss_terceiros = useMemo(() => {
    return tributacao1or2
      ? (folhaPagamento - 20000) * 0.058 * 60
      : tributacao === "0"
      ? 0
      : null;
  }, [tributacao, folhaPagamento]);

  // CÁLCULO DE 'REINTEGRAÇÃO'
  const reintegracao = useMemo(() => {
    return tributacao1or2 ? exportacoesAnuais * 0.03 * 5 : null;
  }, [tributacao, exportacoesAnuais]);

  // Pre-calculate constants
  const CREDITOS_SIMPLES_MULTIPLIER = 0.0108 * 0.05;

  // CÁLCULO DE 'RECUPERAÇÃO DE CRÉDITOS SIMPLES NACIONAL (RESTAURANTES)'
  const creditos_simples1 = useMemo(() => {
    return tributacao === "0"
      ? faturamentoMensal * 0.15 * CREDITOS_SIMPLES_MULTIPLIER
      : null;
  }, [tributacao, faturamentoMensal]);

  // CÁLCULO DE 'RECUPERAÇÃO DE CRÉDITOS SIMPLES NACIONAL (AUTO-PEÇAS)'
  const creditos_simples2 = useMemo(() => {
    return tributacao === "0"
      ? faturamentoMensal * 0.8 * CREDITOS_SIMPLES_MULTIPLIER
      : null;
  }, [tributacao, faturamentoMensal]);

  // CÁLCULO DE 'AMPLIAÇÕES DE CONCEITO DE INSUMOS PIS/COFINS'
  const conceito_insumos = useMemo(() => {
    return tributacao === "1" ? dispesaAnual * 0.0925 * 5 : null;
  }, [tributacao, dispesaAnual]);

  // CÁLCULO DE 'NÃO INCIÊNCIA DO ICMS E ISS'
  const incidencia_icms = useMemo(() => {
    return tributacao === "2" ? faturamentoMensal * 0.017 : null;
  }, [tributacao, faturamentoMensal]);

  // CÁLCULO DE 'LEI DO BEM'
  const lei_do_bem = useMemo(() => {
    return tributacao === "1" ? gastosInovacao * 0.34 : null;
  }, [tributacao, gastosInovacao]);

  // CÁLCULO DE 'JUROS SOBRE CAPITAL PRÓPRIO'
  const capital_proprio = useMemo(() => {
    return tributacao === "1" ? patrimonioLiquido * 0.06 * 0.19 : null;
  }, [tributacao, patrimonioLiquido]);

  // CÁLCULO DA 'REDUÇÃO DO IRPJ'
  const deducao_irpj = useMemo(() => {
    return tributacao === "1" ? lucroEmpresa * 0.15 * 0.04 : null;
  }, [tributacao, lucroEmpresa]);

  // dados processados com base nas fórmulas de cálculos
  const tributarioValues = {
    exclusao_icms,
    exclusao_pis,
    exclusao_iss,
    tributacao1or2,
    afastamento_verbas,
    taxa_siscomex,
    inss_terceiros,
    reintegracao,
    creditos_simples1,
    creditos_simples2,
    conceito_insumos,
    incidencia_icms,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
  };

  return {
    taxValues,
    setTaxValues,
    tributacao,
    importacoes,
    setImportacoes,
    atividades,
    tributarioValues,
  };
}
