import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MainButton from "./MainButton";

export default function ButtonLinks({ options, style }) {
  const navigate = useNavigate();

  return (
    <div className="max-w-[992px] mx-auto" style={style}>
      <ul className="grid grid-cols-1 md:grid-cols-standard2 gap-x-6 gap-y-4">
        {options.map((option, index) => (
          <li key={index}>
            <MainButton onClick={() => navigate(option.route)}>
              {option.name}
            </MainButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

ButtonLinks.propTypes = {
  options: PropTypes.array,
  style: PropTypes.object,
};
