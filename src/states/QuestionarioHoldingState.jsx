import { useState, useMemo } from "react";
export default function QuestionarioHoldingState() {
  const [holdingValues, setHoldingValues] = useState({
    valor_imovel: "",
    inventario: "",
  });
  const holdingResultItCMD = useMemo(
    () => holdingValues.valor_imovel * 0.04,
    [holdingValues.valor_imovel]
  );
  const holdingResultCustoCartorio = useMemo(
    () => holdingValues.valor_imovel * 0.01,
    [holdingValues.valor_imovel]
  );
  const holdingResultConsultoriaHolding = useMemo(
    () => holdingValues.inventario * 0.01,
    [holdingValues.inventario]
  );
  const holdingTotal = useMemo(
    () =>
      holdingResultItCMD +
      holdingResultCustoCartorio +
      holdingResultConsultoriaHolding,
    [
      holdingResultItCMD,
      holdingResultCustoCartorio,
      holdingResultConsultoriaHolding,
    ]
  );

  const inventarioResultItCMD = useMemo(
    () => holdingValues.inventario * 0.04,
    [holdingValues.inventario]
  );
  const inventarioResultCustoCartorio = useMemo(
    () => holdingValues.inventario * 0.01,
    [holdingValues.inventario]
  );
  const inventarioResultConsultoriaHolding = useMemo(
    () => holdingValues.inventario * 0.1,
    [holdingValues.inventario]
  );
  const inventarioTotal = useMemo(
    () =>
      inventarioResultItCMD +
      inventarioResultCustoCartorio +
      inventarioResultConsultoriaHolding,
    [
      inventarioResultItCMD,
      inventarioResultCustoCartorio,
      inventarioResultConsultoriaHolding,
    ]
  );
  const totalResult = useMemo(
    () => inventarioTotal - holdingTotal,
    [holdingTotal, inventarioTotal]
  );

  const holdinginventarioResult = {
    holding_itcmd: holdingResultItCMD,
    holding_cartorio: holdingResultCustoCartorio,
    holding_consultoria: holdingResultConsultoriaHolding,
    holding_total: holdingTotal,
    inventario_itcmd: inventarioResultItCMD,
    inventario_cartorio: inventarioResultCustoCartorio,
    inventario_consultoria: inventarioResultConsultoriaHolding,
    total_inventario: inventarioTotal,
    total_geral: totalResult,
  };

  return {
    holdingValues,
    setHoldingValues,
    holdinginventarioResult,
  };
}
