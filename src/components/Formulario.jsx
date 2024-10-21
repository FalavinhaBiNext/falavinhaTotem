import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

export default function Formulario() {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    getUserContact,
    inputVal,
  } = useContext(GlobalContext);

  const inputs = [
    {
      title: "Nome completo",
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

  return (
    <form className="form" onSubmit={getUserContact}>
      {inputs.map((input) => (
        <label htmlFor={input.id} className="input-label" key={input.id}>
          <input
            className="input-element"
            type={input.type}
            name={input.nome}
            id={input.id}
            placeholder={input.title}
            autoComplete="off"
            value={input.type === "tel" ? phoneMask(input.value) : input.value}
            maxLength={input.type === "tel" ? 15 : undefined}
            onChange={input.onChange}
            onBlur={input.onBlur}
            style={{
              borderColor: input.error && input.touched ? "#ff0000" : "",
            }}
          />
          {input.error && input.touched && (
            <span className="error-message">{input.error}</span>
          )}
        </label>
      ))}
    </form>
  );
}
