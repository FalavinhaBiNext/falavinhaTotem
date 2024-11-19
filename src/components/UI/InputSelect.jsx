import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { formularioStyle } from "../../style/sharedStyle";

export default function InputSelect(props) {
  const { title, name, options } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);
  const { inputStyle, errorMessageStyle, labelSelectStyle } = formularioStyle();

  return (
    <label htmlFor={name} className={labelSelectStyle}>
      <select
        className={`${inputStyle} appearance-none cursor-pointer`}
        name={name}
        id={name}
        onChange={handleChange}
        value={inputValue[name]}
        onBlur={handleBlur}
        style={{ borderColor: errors[name] && touched[name] ? "#e74c3c" : "" }}
      >
        <option value={""} disabled>
          {title}
        </option>
        {options
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((option) => (
            <option
              className="text-base font-semibold text-dark_color font-[inherit] leading-[14px] py-[3px]"
              value={option.value}
              key={option.label}
            >
              {option.label}
            </option>
          ))}
      </select>
      {errors[name] && touched[name] && (
        <span className={errorMessageStyle}>{errors[name]}</span>
      )}
    </label>
  );
}

InputSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  errorAlert: PropTypes.func,
};
