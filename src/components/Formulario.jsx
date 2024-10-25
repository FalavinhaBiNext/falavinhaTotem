import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

export default function Formulario() {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    getUserData,
    inputValue,
    phoneMask,
  } = useContext(GlobalContext);

  const [hasUserData, setHasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });

  // dados dos inputs
  const inputs = [
    {
      title: "Nome",
      nome: "nome",
      type: "text",
      id: "nome",
      value: inputValue.nome || "",
      onChange: handleChange,
      error: errors.nome,
      touched: touched.nome,
      onBlur: handleBlur,
    },
    {
      title: "Telefone",
      nome: "telefone",
      type: "tel",
      id: "telefone",
      value: inputValue.telefone || "",
      onChange: handleChange,
      error: errors.telefone,
      touched: touched.telefone,
      onBlur: handleBlur,
    },
    {
      title: "Email",
      nome: "email",
      type: "email",
      id: "email",
      value: inputValue.email || "",
      onChange: handleChange,
      error: errors.email,
      touched: touched.email,
      onBlur: handleBlur,
    },
  ];

  return !Object.keys(hasUserData).length > 0 ? (
    <form
      className="form"
      onSubmit={getUserData}
      style={{ marginBottom: hasUserData ? "50px" : "0" }}
    >
      {inputs.map((input) => (
        <ElementoInput {...input} key={input.id} phoneMask={phoneMask} />
      ))}
    </form>
  ) : null;
}

const ElementoInput = (props) => {
  const {
    nome,
    type,
    id,
    value,
    title,
    onChange,
    error,
    touched,
    onBlur,
    phoneMask,
  } = props;

  // altera a primeira letra do input para maiúscula
  const handleInputChange = (e) => {
    let updatedValue = e.target.value;
    if (type === "text") {
      updatedValue =
        updatedValue.charAt(0).toUpperCase() + updatedValue.slice(1);
    }
    onChange({ target: { name: nome, value: updatedValue } });
  };

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
        onChange={handleInputChange}
        onBlur={onBlur}
        style={{
          borderColor: error && touched ? "#ff0000" : "",
        }}
      />
      {error && touched && <span className="error-message">{error}</span>}
    </label>
  );
};

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
