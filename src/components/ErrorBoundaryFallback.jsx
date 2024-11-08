import PropTypes from "prop-types";
import MainButton from "./UI/MainButton";

export default function ErrorBoundaryFallback({ resetErrorBoundary }) {
  const mainStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#009499",
    padding: "50px 20px",
  };

  const titleStyles = {
    color: "red",
    fontSize: "1.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    textAlign: "center",
  };

  return (
    <main role="alert" style={mainStyles}>
      <h1 style={titleStyles}>Erro ao carregar a página!</h1>
      <MainButton onClick={resetErrorBoundary} className="botao" type="button">
        Tente novamente
      </MainButton>
    </main>
  );
}

ErrorBoundaryFallback.propTypes = {
  resetErrorBoundary: PropTypes.func,
};
