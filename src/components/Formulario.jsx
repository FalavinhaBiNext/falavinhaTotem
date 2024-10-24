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
    inputVal,
    phoneMask,
  } = useContext(GlobalContext);

  const [hasUserData, setHasUserData] = useState(() => {
    const storedData = localStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });
  const userDatAvailable = Object.keys(hasUserData).length > 0;

  const inputs = [
    {
      title: "Nome",
      nome: "nome",
      type: "text",
      id: "nome",
      value: inputVal.nome || "",
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
      value: inputVal.telefone || "",
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
      value: inputVal.email || "",
      onChange: handleChange,
      error: errors.email,
      touched: touched.email,
      onBlur: handleBlur,
    },
  ];

  return !userDatAvailable ? (
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
  hasUserData: PropTypes.object,
};
