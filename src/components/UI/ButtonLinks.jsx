import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MainButton from "./MainButton";

export default function ButtonLinks({ options, style }) {
  const navigate = useNavigate();

  return (
    <div className="links" style={style}>
      {options.map((option, index) => (
        <MainButton
          key={index}
          onClick={() => navigate(option.route)}
          className="botao"
        >
          {option.name}
        </MainButton>
      ))}
    </div>
  );
}

ButtonLinks.propTypes = {
  options: PropTypes.array,
  style: PropTypes.object,
};
