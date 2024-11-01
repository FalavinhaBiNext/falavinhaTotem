import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const IDLE_TIMEOUT = 120000 //60000; -> 1 minuto em milisegundos
const CHECK_INTERVAL = 1000; // Faz uma checagem a cada segundo

export default function useIdleRedirect(redirectPath) {
  const navigate = useNavigate();
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let idleTimer;
    let checkInterval;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      clearInterval(checkInterval);

      idleTimer = setTimeout(() => {
        navigate(redirectPath);
        sessionStorage.removeItem("userInfo");
      }, IDLE_TIMEOUT);

      checkInterval = setInterval(() => {
        setIdleTime((prevTime) => prevTime + CHECK_INTERVAL);

        if (idleTime >= IDLE_TIMEOUT) {
          clearTimeout(idleTimer);
          clearInterval(checkInterval);
        }
      }, CHECK_INTERVAL);
    };

    const handleActivity = () => {
      setIdleTime(0);
      resetIdleTimer();
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("scroll", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      clearInterval(checkInterval);

      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [navigate, redirectPath]);

  return null;
}
