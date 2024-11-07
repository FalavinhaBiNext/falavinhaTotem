import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContextProvider";

export default function useAlertaFormularioVazio() {
  const [hasForm, setHasForm] = useState(false);
  const [hasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });
  const { hasEmptyInputs, hasInputErrors } = useContext(GlobalContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!Object.keys(hasUserData).length > 0) {
      setHasForm(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCurrentPath = [
    "/questionario-tributario",
    "/questionario-rh",
    "/questionario-cigam",
    "/questionario-empresarial",
    "/questionario-holding",
  ].includes(pathname);

  const showEmptyFormAlert =
    (hasForm && hasEmptyInputs) || hasInputErrors
      ? "Preencha todos os campos do formulário!"
      : null;

  return {
    getCurrentPath,
    showEmptyFormAlert,
  };
}
