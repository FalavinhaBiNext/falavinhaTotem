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
import { formularioStyle } from "../../style/sharedStyle";

const { labelStyle, inputStyle } = formularioStyle();
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

  const dataValues = [
    {
      title: "Holding",
      name: "valor_imovel",
      value: holdingValues.valor_imovel,
    },
    {
      title: "Inventário",
      name: "inventario",
      value: holdingValues.inventario,
    },
  ];

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
          <form className="flex flex-col gap-8 sm:gap-10 mb-10 md:max-w-[768px] max-w-none mx-auto">
            {dataValues.map(({ title, name, value }, index) => (
              <article
                className="border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent py-8 px-6"
                key={index}
              >
                <h2 className="text-xl text-light_color mb-2 tracking-[2px] uppercase">
                  {title}
                </h2>
                <TextInput
                  name={name}
                  type="text"
                  id={name}
                  value={value && `R$ ${numberFormatter(value)}`}
                  onChange={handleChange}
                  placeholder="Digite um valor"
                />
              </article>
            ))}
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

const TextInput = ({ name, value, onChange }) => (
  <label htmlFor={name} className={labelStyle}>
    <input
      className={inputStyle}
      name={name}
      autoComplete="off"
      value={value || ""}
      id={name}
      onChange={onChange}
      placeholder="Digite um valor"
    />
  </label>
);

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};
