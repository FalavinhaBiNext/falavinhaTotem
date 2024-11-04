import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

import gifAvatar from "../assets/gifs/avatar.gif";
import gifTel from "../assets/gifs/tel.gif";
import gifEmail from "../assets/gifs/email.gif";

export default function Formulario({ setisFormVisible }) {
  const { errors, touched, handleBlur, handleChange, inputValue, phoneMask } =
    useContext(GlobalContext);

  const [hasUserData] = useState(() => {
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
      icon: gifAvatar
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
      icon: gifTel
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
      icon: gifEmail
    },
  ];

  useEffect(() => {
    if (!Object.keys(hasUserData).length > 0) {
      setisFormVisible(true);
    }
  });

  return !Object.keys(hasUserData).length > 0 ? (
    <form className="form">
      {inputs.map((input) => (
        <div style={{display: "flex", alignItems: "center", backgroundColor: "#4b5052", gap: 10, borderRadius: "10px", padding: "0 10px",}}>
          <img src={input.icon} className="icon-topicos_servicos" alt="" />
          <ElementoInput {...input} key={input.id} phoneMask={phoneMask} />
        </div>
      ))}
    </form>
  ) : null;
}

Formulario.propTypes = {
  setisFormVisible: PropTypes.func,
};

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
    if (updatedValue.includes(" ")) {
      const words = updatedValue.split(" ");
      updatedValue = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      updatedValue =
        updatedValue.charAt(0).toUpperCase() + updatedValue.slice(1);
    }
    if (type === "email") {
      updatedValue = updatedValue.toLowerCase();
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
