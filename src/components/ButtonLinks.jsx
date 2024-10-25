import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Botoes from "./Botoes";

export default function ButtonLinks({ options, style }) {
  const navigate = useNavigate();

  return (
    <div className="links" style={style}>
      {options.map((option, index) => (
        <Botoes
          key={index}
          onClick={() => navigate(option.route)}
          className="botao"
        >
          {option.name}
        </Botoes>
      ))}
    </div>
  );
}

ButtonLinks.propTypes = {
  options: PropTypes.array,
  style: PropTypes.object,
};
