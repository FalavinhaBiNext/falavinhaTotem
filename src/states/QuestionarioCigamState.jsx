import { useState, useMemo } from "react";

export default function QuestionarioCigamState() {
  const [cigamValues, setCigamValues] = useState({
    usuarios: "",
    salario_medio: "",
    implementacao: "",
    situacao_atual: "",
  });

  // FOLHA DE PAGAMENTO
  const folha_pagamento = useMemo(
    () => cigamValues.usuarios * cigamValues.salario_medio,
    [cigamValues.usuarios, cigamValues.salario_medio]
  );

  // SALARIO HORA
  const salario_hora = useMemo(
    () => cigamValues.salario_medio / 160,
    [cigamValues.salario_medio]
  );

  // GANHO PRODUTIVIDADE MENSAL
  const produtividade_mensal = useMemo(
    () => folha_pagamento * (cigamValues.situacao_atual / 100),
    [folha_pagamento, cigamValues.situacao_atual]
  );

  // GANHO PRODUTIVIDADE HORA
  const produtividade_hora = useMemo(
    () => cigamValues.usuarios * 160 * (cigamValues.situacao_atual / 100),
    [cigamValues.usuarios, cigamValues.situacao_atual]
  );

  // GANHO PRODUTIVIDADE FINACEIRA
  const produtividade_financeira = useMemo(
    () => produtividade_mensal * 12,
    [produtividade_mensal]
  );

  // ROI MENSAL
  const roi_mensal = produtividade_mensal;

  // ROI ANUAL
  const roi_anual = roi_mensal * 12;

  // ANO/MES PARA O ROI
  const roi_meses_ano = useMemo(
    () => cigamValues.implementacao / roi_anual,
    [cigamValues.implementacao, roi_anual]
  );

  return {
    cigamValues,
    setCigamValues,
    produtividade_mensal,
    produtividade_hora,
    produtividade_financeira,
    roi_meses_ano,
    roi_anual,
    roi_mensal,
    salario_hora,
    folha_pagamento,
  };
}
