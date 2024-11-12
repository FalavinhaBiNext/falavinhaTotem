import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoHolding.png";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import QuestionarioHoldingState from "../../states/QuestionarioHoldingState";
import { numberFormatter } from "../../utils";
import Botoes from "../../components/Botoes";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import PopupModal from "../../components/PopupModal";

export default function QuestionarioHolding() {
  const { holdingValues, setHoldingValues, holdinginventarioResult } =
    QuestionarioHoldingState();
  const {
    setResultadoHolding,
    showModal,
    closeModal,
    handleSetShowModal,
    hasSavedData,
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

      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Pesquisa de holding</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <form className="form" style={{ margin: "40px 0 40px" }}>
            <article className="holding-questionario">
              <h2 className="holding-questionario__title">Holding</h2>
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

            <article className="holding-questionario">
              <h2 className="holding-questionario__title">Inventário</h2>
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
        </FramerMotion>
      </HeroApp>

      <FooterApp footerFixed>
        <Botoes
          type="button"
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
