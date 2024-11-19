import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvider";
import InputText from "./InputText";
import gifAvatar from "../../assets/gifs/avatar.gif";
import gifTel from "../../assets/gifs/tel.gif";
import gifEmail from "../../assets/gifs/email.gif";
import gifEmpresa from "../../assets/gifs/empresa.gif";
import gifTeam from "../../assets/gifs/team.gif";
import InputSelect from "./InputSelect";

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

  function errorAlert(val) {
    return errors[val] && touched[val] ? "input-element--alert" : "";
  }

  return (
    <form className="form">
      <h2 className="form__title">QUEREMOS LHE CONHECER MELHOR</h2>
      {inputs.map((input) => (
        <div className="input-wrapper" key={input.id}>
          <img
            src={input.icon}
            className="w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]"
            alt=""
          />
          {input.type !== "select" ? (
            <InputText {...input} phoneMask={phoneMask} />
          ) : (
            <InputSelect {...input} errorAlert={errorAlert} />
          )}
        </div>
      ))}
    </form>
  );
}

Formulario.propTypes = {
  setIsFormVisible: PropTypes.func,
};
