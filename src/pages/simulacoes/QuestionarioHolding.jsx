import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoHolding.png";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import QuestionarioHoldingState from "../../states/QuestionarioHoldingState";
import { numberFormatter } from "../../utils";
import MainButton from "../../components/UI/MainButton";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import MainPageTitle from "../../components/UI/MainPageTitle";
import PopupModal from "../../components/UI/PopupModal";

export default function QuestionarioHolding() {
  const { holdingValues, setHoldingValues, holdinginventarioResult } =
    QuestionarioHoldingState();
  const {
    setResultadoHolding,
    showModal,
    closeModal,
    handleSetShowModal,
    hasSavedData,
    isSubmitting,
  } = useContext(GlobalContext);
  const { handleCheckRefresh } = useRefreshDetector();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    const parsedValue = numericValue === "" ? "" : parseInt(numericValue, 10);
    setHoldingValues((prevValues) => ({
      ...prevValues,
      [id]:
        parsedValue > 0 || numericValue === "" ? numericValue : prevValues[id],
    }));
  };

  const emptyValueFields =
    !holdingValues.valor_imovel || !holdingValues.inventario;

  const handleSubmitValues = () => {
    if (!showModal && !hasSavedData) {
      return handleSetShowModal(true);
    }
    setResultadoHolding(holdinginventarioResult);
    navigate("/resultado-holding");
  };

  useEffect(() => {
    handleCheckRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {showModal && (
        <PopupModal showModal={showModal} closeModal={closeModal} />
      )}

      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={"Pesquisa de Holding"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <form className="flex flex-col gap-8 mb-10 md:max-w-[768px] max-w-none mx-auto">
            <article className="border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent p-6">
              <h2 className="text-2xl text-light_color mb-5 tracking-[2px]">
                Holding
              </h2>
              <TextInput
                title="Valor do imóvel:"
                nome="valor_imovel"
                type="text"
                id="valor_imovel"
                value={
                  holdingValues.valor_imovel &&
                  `R$ ${numberFormatter(holdingValues.valor_imovel)}`
                }
                onChange={handleChange}
                placeholder="Digite um valor"
              />
            </article>

            <article className="border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent p-6">
              <h2 className="text-2xl text-light_color mb-5 tracking-[2px]">
                Inventário
              </h2>
              <TextInput
                title="Valor do inventário:"
                nome="inventario"
                type="text"
                id="inventario"
                value={
                  holdingValues.inventario &&
                  `R$ ${numberFormatter(holdingValues.inventario)}`
                }
                onChange={handleChange}
                placeholder="Digite um valor"
              />
            </article>
          </form>

          <MainButton
            type="submit"
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

const TextInput = ({
  title,
  nome,
  value,
  onChange,
  placeholder,
  newClassName,
}) => (
  <label htmlFor={nome} className="input-label">
    <span>{title}</span>
    <input
      className={`input-element ${newClassName}`}
      name={nome}
      placeholder={placeholder}
      autoComplete="off"
      value={value || ""}
      id={nome}
      onChange={onChange}
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
};
