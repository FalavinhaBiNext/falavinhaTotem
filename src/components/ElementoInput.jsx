import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalContextProvider";
import { useContext } from "react";

export default function ElementoInput(props) {
  const { nome, type, id, value, title, onChange, error, touched, onBlur } =
    props;
  const { phoneMask } = useContext(GlobalContext);

  return (
    <label htmlFor={id} className="input-label" key={id}>
      <input
        className="input-element"
        type={type}
        name={nome}
        id={id}
        placeholder={title}
        autoComplete="off"
        value={type === "tel" ? phoneMask(value) : value}
        maxLength={type === "tel" ? 15 : undefined}
        onChange={onChange}
        onBlur={onBlur}
        style={{
          borderColor: error && touched ? "#ff0000" : "",
        }}
      />
      {error && touched && <span className="error-message">{error}</span>}
    </label>
  );
}

ElementoInput.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  onBlur: PropTypes.func,
  phoneMask: PropTypes.func,
  nome: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};
