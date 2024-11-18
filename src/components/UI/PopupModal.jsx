import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { CloseIcon } from "../../assets/icon";
import Formulario from "./Formulario";
import MainButton from "./MainButton";

export default function PopupModal({ closeModal }) {
  const { hasEmptyInputs, emptyValueFields, handleSubmitUserData } =
    useContext(GlobalContext);

  const handleSubmitAndCloseModal = () => {
    handleSubmitUserData();
    closeModal();
  };

  const closeIconsStyle = {
    width: "24px",
    height: "24px",
    alignSelf: "flex-end",
    margin: "-12px",
    cursor: "pointer",
  };

  return (
    <div className="overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span onClick={closeModal} style={closeIconsStyle}>
          {CloseIcon()}
        </span>

        <Formulario />
        <MainButton
          onClick={handleSubmitAndCloseModal}
          type="button"
          className="botao"
          disabled={hasEmptyInputs || emptyValueFields}
        >
          Salvar
        </MainButton>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  closeModal: PropTypes.func,
};
