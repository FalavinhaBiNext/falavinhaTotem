import { useEffect, useState } from "react";

export default function useRefreshDetector() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const beforeUnload = (event) => {
      if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        sessionStorage.setItem("isRefreshing", "true");
        event.returnValue =
          "Tem certeza que deseja atualizar? As alterações não salvas serão perdidas.";
      }
    };

    const load = () => {
      if (sessionStorage.getItem("isRefreshing") === "true") {
        setIsRefreshing(true);
        sessionStorage.removeItem("isRefreshing");
      }
      setPageLoaded(true);
    };

    window.addEventListener("beforeunload", beforeUnload);
    window.addEventListener("load", load);

    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
      window.removeEventListener("load", load);
    };
  }, []);

  function handleCheckRefresh() {
    if (isRefreshing) {
      window.confirm(
        "Tem certeza que deseja atualizar? As alterações não salvas serão perdidas."
      );
    } else {
      console.log("Page was loaded initially.");
    }
  }

  // useEffect(() => {
  //   if (isRefreshing) {
  //     window.confirm(
  //       "Tem certeza que deseja atualizar? As alterações não salvas serão perdidas."
  //     );
  //   } else {
  //     console.log("Page was loaded initially.");
  //   }
  // }, [isRefreshing, pageLoaded]);

  return { isRefreshing, pageLoaded, handleCheckRefresh };
}
