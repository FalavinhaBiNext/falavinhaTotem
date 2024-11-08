import useAlertaFormularioVazio from "../../hooks/useAlertaFormularioVazio";

export default function AlertaFormulario() {
  const { getCurrentPath, showEmptyFormAlert } = useAlertaFormularioVazio();

  const alertStyle = {
    color: "red",
    textAlign: "center",
    fontSize: "1rem",
    fontFamily: "inherit",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "10px",
  };

  return <span style={alertStyle}>{getCurrentPath && showEmptyFormAlert}</span>;
}
