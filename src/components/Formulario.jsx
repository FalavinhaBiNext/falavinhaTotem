import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import gifAvatar from "../assets/gifs/avatar.gif";
import gifTel from "../assets/gifs/tel.gif";
import gifEmail from "../assets/gifs/email.gif";

export default function Formulario({ setIsFormVisible }) {
  const { errors, touched, handleBlur, handleChange, inputValue, phoneMask } =
    useContext(GlobalContext);

  const [hasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("userInfo");
    return storedData ? JSON.parse(storedData) : {};
  });

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
      icon: gifAvatar,
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
      icon: gifTel,
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
      icon: gifEmail,
    },
  ];

  useEffect(() => {
    if (!Object.keys(hasUserData).length > 0) {
      setIsFormVisible(true);
    }

    if (inputValue.nome || inputValue.telefone || inputValue.email) {
      inputValue.nome = "";
      inputValue.telefone = "";
      inputValue.email = "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return !Object.keys(hasUserData).length > 0 ? (
    <form className="form">
      {inputs.map((input, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4b5052",
            gap: 10,
            borderRadius: "10px",
            padding: "0 10px",
          }}
        >
          <img src={input.icon} className="icon-topicos_servicos" alt="" />
          <ElementoInput {...input} key={input.id} phoneMask={phoneMask} />
        </div>
      ))}
    </form>
  ) : null;
}

Formulario.propTypes = {
  setIsFormVisible: PropTypes.func,
};

const ElementoInput = (props) => {
  const { nome, type, id, title, phoneMask } = props;
  const { inputValue, handleChange, errors, touched, handleBlur } =
    useContext(GlobalContext);

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
    handleChange({ target: { name: nome, value: updatedValue } });
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
        value={
          type === "tel"
            ? phoneMask(inputValue[nome] || "")
            : inputValue[nome] || ""
        }
        maxLength={type === "tel" ? 15 : undefined}
        onChange={handleInputChange}
        onBlur={handleBlur}
        style={{
          borderColor: errors[nome && touched[nome]] ? "#ff0000" : "",
        }}
      />
      {errors[nome] && touched[nome] && (
        <span className="error-message">{errors[nome]}</span>
      )}
    </label>
  );
};

ElementoInput.propTypes = {
  title: PropTypes.string,
  phoneMask: PropTypes.func,
  nome: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};
