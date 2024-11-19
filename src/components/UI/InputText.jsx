import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { formularioStyle } from "../../style/sharedStyle";

export default function InputText(props) {
  const { name, type, id, title, phoneMask } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);
  const { labelStyle, inputStyle, errorMessageStyle } = formularioStyle();

  return (
    <label htmlFor={id} className={labelStyle} key={id}>
      <input
        className={inputStyle}
        type={type}
        name={name}
        id={id}
        placeholder={title}
        autoComplete="off"
        value={
          type === "tel"
            ? phoneMask(inputValue[name] || "")
            : inputValue[name] || ""
        }
        maxLength={type === "tel" ? 15 : undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ borderColor: errors[name] && touched[name] ? "#e74c3c" : "" }}
      />
      {errors[name] && touched[name] && (
        <span className={errorMessageStyle}>{errors[name]}</span>
      )}
    </label>
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  phoneMask: PropTypes.func,
};
