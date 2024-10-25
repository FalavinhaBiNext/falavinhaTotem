import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { numberValueFormatter } from "../../utils";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Botoes from "../../components/Botoes";

const selectTributacao = [
  { value: "10", label: "Lucro real" },
  { value: "20", label: "Lucro presumido" },
  { value: "30", label: "Simples" },
];

const selectAtividads = [
  { value: "10", label: "Comércio" },
  { value: "20", label: "Indústria" },
  { value: "30", label: "Serviços" },
  { value: "40", label: "Const. Civil" },
  { value: "50", label: "Importadora" },
  { value: "60", label: "Restaurante" },
  { value: "70", label: "Auto-peças" },
  { value: "80", label: "P. de combustíveis" },
  { value: "90", label: "Farmácias" },
];

export default function QuestionarioTributario() {
  const { getUserData, setSubmitTotalValues } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [hasUserData] = useState(!!sessionStorage.getItem("userInfo"));
  const [taxationValues, setTaxationValues] = useState({
    tributacao: "",
    atividade: "",
    faturamento_mensal: "",
    numero_funcionarios: "",
    folha_pagamento: "",
    dispensa_anual: "",
    patrimonio_liquido: "",
    lucro_empresa: "",
    gastos_inovacao: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setTaxationValues((prevValues) => ({
      ...prevValues,
      [id]: numericValue,
    }));
  };

  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (!hasUserData) getUserData();
    setSubmitTotalValues({
      ...taxationValues,
    });
    navigate("/resultado-tributario");
  };

  const emptyValueFields =
    !taxationValues.tributacao ||
    !taxationValues.atividade ||
    !taxationValues.faturamento_mensal;

  return (
    <>
      <HeaderApp>
        <h1 className="title">Questionário Tributario</h1>
      </HeaderApp>
      <HeroApp>
        <FramerMotion>
          <Formulario />
          <form
            className="form"
            onSubmit={handleSubmitValues}
            style={{ marginBottom: "60px" }}
          >
            <SelectInput
              label="Tributação:"
              name="tributacao"
              options={[
                { value: "", label: "Selecione (obrigatório)" },
                ...selectTributacao,
              ]}
              value={taxationValues.tributacao}
              onChange={handleChange}
            />

            <SelectInput
              label="Atividade:"
              name="atividade"
              options={[
                { value: "", label: "Selecione (obrigatório)" },
                ...selectAtividads,
              ]}
              value={taxationValues.atividade}
              onChange={handleChange}
            />

            <TextInput
              title="Faturamento mensal:"
              nome="faturamento_mensal"
              value={taxationValues.faturamento_mensal}
              onChange={handleChange}
              placeholder="Digite um valor (obrigatório)"
            />
            <TextInput
              title="Número de funcionários:"
              nome="numero_funcionarios"
              value={taxationValues.numero_funcionarios}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
            <TextInput
              title="Valor da folha de pagamento:"
              nome="folha_pagamento"
              value={taxationValues.folha_pagamento}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
            <TextInput
              title="Médias das dispensas anuais:"
              nome="dispensa_anual"
              value={taxationValues.dispensa_anual}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
            <TextInput
              title="Patrimônio líquido:"
              nome="patrimonio_liquido"
              value={taxationValues.patrimonio_liquido}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
            <TextInput
              title="Lucro da empresa:"
              nome="lucro_empresa"
              value={taxationValues.lucro_empresa}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
            <TextInput
              title="Gastos com inovação e tecnologia:"
              nome="gastos_inovacao"
              value={taxationValues.gastos_inovacao}
              onChange={handleChange}
              placeholder="Digite um valor (opcional)"
            />
          </form>
        </FramerMotion>
      </HeroApp>

      <FooterApp footerFixed>
        <Botoes
          type="submit"
          className="botao"
          onClick={handleSubmitValues}
          disabled={emptyValueFields}
        >
          Calcular
        </Botoes>
      </FooterApp>
    </>
  );
}

const SelectInput = ({ label, name, options, value, onChange }) => (
  <label htmlFor={name} className="input-label input-label__select">
    {label}
    <select
      className="input-element"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </label>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const TextInput = ({ title, nome, value, onChange, placeholder }) => (
  <label htmlFor={nome} className="input-label">
    {title}
    <input
      className="input-element"
      type="text"
      name={nome}
      id={nome}
      placeholder={placeholder}
      autoComplete="off"
      value={numberValueFormatter(value)}
      onChange={onChange}
    />
  </label>
);

TextInput.propTypes = {
  title: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
