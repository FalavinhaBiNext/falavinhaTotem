import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import gifAvatar from "../assets/gifs/avatar.gif";
import gifTel from "../assets/gifs/tel.gif";
import gifEmail from "../assets/gifs/email.gif";

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
      icon: gifEmail,
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
      icon: gifAvatar,
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

  const labelWrapper = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4b5052",
    gap: 10,
    borderRadius: "10px",
    padding: "0 10px",
  };

  return (
    <form className="form">
      {inputs.map((input) => (
        <div key={input.id} style={labelWrapper}>
          <img src={input.icon} className="icon-topicos_servicos" alt="" />
          {input.type !== "select" ? (
            <ElementoInput {...input} phoneMask={phoneMask} />
          ) : (
            <ElementSelect {...input} />
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

const ElementSelect = (props) => {
  // const { handleChangeSelect } = useContext(GlobalContext);
  const { title, nome, options } = props;
  const { inputValue, handleChange, errors, touched, handleBlur } =
    useContext(GlobalContext);

  return (
    <label htmlFor={nome} className="input-label">
      <select
        className="input-element"
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
        {options.map((option) => (
          <option value={option.id} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

{
  /* <select
className="input-element"
name="atividade"
id="atividade"
value={taxValues.atividade}
onChange={handleChange}
>
<option value={""} disabled>
  Selecione Uma Atividade
</option>
{selectAtividades.map((item) => (
  <option value={item.value} key={item.value}>
    {item.label}
  </option>
))}
</select> */
}

ElementSelect.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
};
