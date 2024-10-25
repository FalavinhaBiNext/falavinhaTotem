import PropTypes from "prop-types";

export default function PalavraChave({
  color = "#000",
  fontSize = "1rem",
  textTransform = "uppercase",
  fontFamily = "Gilroy-bold",
  children,
}) {
  return (
    <span
      style={{
        color,
        fontSize,
        fontFamily,
        textTransform,
      }}
    >
      {children}
    </span>
  );
}

PalavraChave.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textTransform: PropTypes.string,
  fontFamily: PropTypes.string,
  children: PropTypes.node,
};
