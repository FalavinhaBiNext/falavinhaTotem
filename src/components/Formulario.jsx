import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import gifAvatar from "../assets/gifs/avatar.gif";
import gifTel from "../assets/gifs/tel.gif";
import gifEmail from "../assets/gifs/email.gif";
import gifEmpresa from "../assets/gifs/empresa.gif";
import gifTeam from "../assets/gifs/team.gif";


export default function Formulario() {
  const { errors, touched, handleBlur, handleChange, inputValue, phoneMask } =
    useContext(GlobalContext);

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
    {
      title: "Empresa",
      nome: "empresa",
      type: "text",
      id: "empresa",
      value: inputValue.empresa || "",
      onChange: handleChange,
      error: errors.empresa,
      touched: touched.empresa,
      onBlur: handleBlur,
      icon: gifEmpresa,
    },
    {
      title: "Vendendor",
      nome: "vendedor",
      type: "select",
      id: "vendedor",
      value: inputValue.vendedor || "",
      onChange: handleChange,
      error: errors.vendedor,
      touched: touched.vendedor,
      onBlur: handleBlur,
      icon: gifTeam,
      options: [
        { value: "William Bond", label: "William Bond" },
        { value: "Tassio Leite", label: "Tassio Leite" },
        { value: "Ana Pimentel", label: "Ana Pimentel" },
        { value: "Henrique Paulo", label: "Henrique Paulo" },
        { value: "Henrique Rezende", label: "Henrique Rezende" },
        { value: "Eduardo Arthur", label: "Eduardo Arthur" },
        { value: "Vinicius Macedo", label: "Vinicius Macedo" },
        { value: "Bruno Lobo", label: "Bruno Lobo" },
        { value: "Ramon Campos", label: "Ramon Campos" },
        { value: "Danilo Bedretchuk", label: "Danilo Bedretchuk" },
        { value: "Wagner Clemente", label: "Wagner Clemente" },
      ],
    },
  ];

  function errorAlert(val) {
    return errors[val] && touched[val] ? "input-element--alert" : "";
  }

  return (
    <form className="form">
      <h2 className="form__title">QUEREMOS LHE CONHECER MELHOR</h2>
      {inputs.map((input) => (
        <div className="input-wrapper" key={input.id}>
          <img src={input.icon} className="icon-topicos_servicos" alt="" />
          {input.type !== "select" ? (
            <ElementoInput
              {...input}
              phoneMask={phoneMask}
              errorAlert={errorAlert}
            />
          ) : (
            <ElementoSelect {...input} errorAlert={errorAlert} />
          )}
        </div>
      ))}
    </form>
  );
}

Formulario.propTypes = {
  setIsFormVisible: PropTypes.func,
};

const ElementoInput = (props) => {
  const { nome, type, id, title, phoneMask, errorAlert } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);

  return (
    <label htmlFor={id} className="input-label" key={id}>
      <input
        className={`input-element ${errorAlert(nome)}`}
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
        onChange={handleChange}
        onBlur={handleBlur}
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
  errorAlert: PropTypes.func,
};

const ElementoSelect = (props) => {
  const { title, nome, options, errorAlert } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);

  return (
    <label htmlFor={nome} className="input-label input-label--custom">
      <select
        className={`input-element ${errorAlert(nome)}`}
        name={nome}
        id={nome}
        onChange={handleChange}
        value={inputValue[nome]}
        onBlur={handleBlur}
        onTouchStart={handleBlur}
        onTouchEnd={handleBlur}
        onFocus={handleBlur}
      >
        <option value={""} disabled>
          {title}
        </option>
        {options
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((option) => (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          ))}
      </select>
      {errors[nome] && touched[nome] && (
        <span className="error-message">{errors[nome]}</span>
      )}
    </label>
  );
};

ElementoSelect.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  errorAlert: PropTypes.func,
};
