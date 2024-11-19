import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import gifAvatar from "../../assets/gifs/avatar.gif";
import gifTel from "../../assets/gifs/tel.gif";
import gifEmail from "../../assets/gifs/email.gif";
import gifEmpresa from "../../assets/gifs/empresa.gif";
import gifTeam from "../../assets/gifs/team.gif";
import { formularioStyle } from "../../style/sharedStyle";

const { inputStyle, errorMessageStyle, labelStyle, selectOptionStyle } =
  formularioStyle();
export default function Formulario() {
  const { errors, touched, handleBlur, handleChange, inputValue, phoneMask } =
    useContext(GlobalContext);

  const inputs = [
    {
      title: "Nome",
      name: "nome",
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
      name: "telefone",
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
      name: "email",
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
      name: "empresa",
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
      name: "vendedor",
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

  return (
    <form className="flex flex-col gap-[10px] px-0 pt-2 sm:pt-4 pb-8 w-full">
      <h2 className="text-lg sm:text-2xl font-[inherit] text-dark_color text-center mb-1 uppercase font-normal">
        Queremos lhe conhecer melhor
      </h2>
      {inputs.map((input) => (
        <div className="input-wrapper" key={input.id}>
          <img
            src={input.icon}
            className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]"
            alt=""
          />
          {input.type !== "select" ? (
            <ElementoInput {...input} phoneMask={phoneMask} />
          ) : (
            <ElementoSelect {...input} />
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
  const { name, type, id, title, phoneMask } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);

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
};

ElementoInput.propTypes = {
  title: PropTypes.string,
  phoneMask: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

const ElementoSelect = (props) => {
  const { title, name, options } = props;
  const { inputValue, handleChange, handleBlur, errors, touched } =
    useContext(GlobalContext);

  return (
    <label htmlFor={name} className="input-label input-label--custom">
      <select
        className={`${inputStyle} appearance-none cursor-pointer`}
        name={name}
        id={name}
        onChange={handleChange}
        value={inputValue[name]}
        onBlur={handleBlur}
        style={{ borderColor: errors[name] && touched[name] ? "#e74c3c" : "" }}
      >
        <option value="" disabled className={selectOptionStyle}>
          {title}
        </option>
        {options
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((option) => (
            <option
              value={option.value}
              key={option.label}
              className={selectOptionStyle}
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
};

ElementoSelect.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
};
