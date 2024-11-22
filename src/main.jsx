// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/index.css";
import GlobalContextProvider from "./context/GlobalContextProvider";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./components/ErrorBoundaryFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <GlobalContextProvider>
    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
      <App />
    </ErrorBoundary>
  </GlobalContextProvider>
  // </React.StrictMode>
);
