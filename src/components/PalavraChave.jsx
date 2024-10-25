import PropTypes from "prop-types";

export default function PalavraChave(props) {
  const {
    color = "#000",
    fontSize = "1rem",
    textTransform = "uppercase",
    fontFamily = "Gilroy-bold",
    children,
  } = props;

  const styleProps = {
    color,
    fontSize,
    fontFamily,
    textTransform,
  };

  return <span style={styleProps}>{children}</span>;
}

PalavraChave.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  textTransform: PropTypes.string,
  fontFamily: PropTypes.string,
  children: PropTypes.node,
};
