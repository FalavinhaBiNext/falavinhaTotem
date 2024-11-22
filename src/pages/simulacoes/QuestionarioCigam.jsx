import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import MainHeader from "../../components/Header";
import MainButton from "../../components/UI/MainButton";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoCigam.png";
import { numberFormatter } from "../../utils";
import QuestionarioCigamState from "../../states/QuestionarioCigamState";
import gifWinner from "../../assets/gifs/winner.gif";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import gifCheck from "../../assets/gifs/check.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";
import logoCigam from "../../assets/image/LogoCigam.png";
import PopupModal from "../../components/UI/PopupModal";
import { formularioStyle } from "../../style/sharedStyle";

const { labelStyle, inputStyle, labelSelectStyle, selectOptionStyle } =
  formularioStyle();
export default function QuestionarioCigam() {
  const navigate = useNavigate();
  const { handleCheckRefresh } = useRefreshDetector();
  const {
    setResultadoCigam,
    isSubmitting,
    showModal,
    hasSavedData,
    closeModal,
    handleSetShowModal,
  } = useContext(GlobalContext);
  const {
    cigamValues,
    setCigamValues,
    produtividade_mensal,
    produtividade_hora,
    produtividade_financeira,
    roi_meses_ano,
    salario_hora,
    folha_pagamento,
  } = QuestionarioCigamState();
  const emptyValueFields =
    cigamValues.usuarios === "" ||
    cigamValues.salario_medio === "" ||
    cigamValues.implementacao === "" ||
    cigamValues.situacao_atual === "";

  const handleChange = (event) => {
    const { id, value } = event.target;
    // Permite apenas números
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue = numericValue === "" ? "" : parseInt(numericValue, 10);
    setCigamValues((prevValues) => ({
      ...prevValues,
      [id]:
        parsedValue > 0 || numericValue === "" ? numericValue : prevValues[id],
    }));
  };

  // Envia dados para o servidor
  const handleSubmitValues = () => {
    if (emptyValueFields) return;
    if (!showModal && !hasSavedData) {
      return handleSetShowModal(true);
    }
    setResultadoCigam({
      ...cigamValues,
      folha_pagamento,
      salario_hora,
      produtividade_hora,
      produtividade_mensal,
      produtividade_financeira,
      roi_meses_ano,
    });
    navigate("/resultado-cigam");
  };

  useEffect(() => {
    handleCheckRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = [
    { value: 15, label: "ERP Grande porte" },
    { value: 20, label: "ERP Pequeno porte" },
    { value: 30, label: "Tassio LeiteNão possui ERP/Micro ERP" },
  ];

  return (
    <>
      {showModal && (
        <PopupModal showModal={showModal} closeModal={closeModal} />
      )}

      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle image={logoCigam} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mt-0 mb-10 sm:mt-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              Faça uma pesquisa sobre sua empresa
            </h2>
          </section>

          <form className="grid gap-5 mb-10 grid-cols-standard2">
            <TextInput
              title="Usuários:"
              nome="usuarios"
              type="text"
              id="usuarios"
              value={numberFormatter(cigamValues.usuarios)}
              onChange={handleChange}
              placeholder="Número de usuários"
            />
            <TextInput
              title="Salário médio:"
              nome="salario_medio"
              type="text"
              id="salario_medio"
              value={
                cigamValues.salario_medio &&
                `R$ ${numberFormatter(cigamValues.salario_medio)}`
              }
              onChange={handleChange}
              placeholder="Salário médio do colaborador"
            />
            <TextInput
              title="Implementação:"
              nome="implementacao"
              type="text"
              id="implementacao"
              value={
                cigamValues.implementacao &&
                `R$ ${numberFormatter(cigamValues.implementacao)}`
              }
              onChange={handleChange}
              placeholder="Valor de implementação"
            />
            <SelectInput
              cigamValues={cigamValues}
              handleChange={handleChange}
              options={options}
            />
          </form>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            <div
              className="flex flex-col items-start justify-start gap-2 p-6 text-left
                  w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 
                  bg-transparent text-light_color min-h-[200px]"
            >
              <img src={gifWinner} alt="Winner" className="icon-topicos_rh" />
              <p>
                Premiado como Melhor ERP para médias e Grandes empresas pelo B2B
                STACK
              </p>
            </div>
            <div
              className="flex flex-col items-start justify-start gap-2 p-6 text-left
                  w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 
                  bg-transparent text-light_color min-h-[200px]"
            >
              <img src={gifCheck} alt="Winner" className="icon-topicos_rh" />
              <p>
                Único ERP de grande porte que usa tecnologia LOW CODE - à prova
                de futuro (Magic)
              </p>
            </div>
          </div>
          <MainButton
            type="button"
            className={"md:max-w-[470px] max-w-none"}
            onClick={handleSubmitValues}
            disabled={emptyValueFields || isSubmitting}
          >
            Calcular
          </MainButton>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}

const TextInput = ({ nome, value, onChange, placeholder, isReadOnly }) => (
  <label htmlFor={nome} className={labelStyle}>
    <input
      className={inputStyle}
      name={nome}
      placeholder={placeholder}
      autoComplete="off"
      value={value || ""}
      id={nome}
      onChange={onChange}
      readOnly={isReadOnly}
    />
  </label>
);

TextInput.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  newClassName: PropTypes.string,
  isReadOnly: PropTypes.bool,
};

const SelectInput = (props) => {
  const { cigamValues, handleChange, options } = props;

  return (
    <label htmlFor="situacao_atual" className={labelSelectStyle}>
      <select
        className={`${inputStyle} appearance-none cursor-pointer`}
        name="situacao_atual"
        id="situacao_atual"
        value={cigamValues.situacao_atual}
        onChange={handleChange}
      >
        <option value="" disabled>
          Situação atual
        </option>
        {options.map((option) => (
          <option
            className={selectOptionStyle}
            value={option.value}
            key={option.label}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

SelectInput.propTypes = {
  cigamValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }).isRequired
  ).isRequired,
};
