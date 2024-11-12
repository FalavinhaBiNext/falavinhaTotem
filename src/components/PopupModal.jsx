import { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalContextProvider";
import { CloseIcon } from "../assets/icons";
import Formulario from "./Formulario";
import Botoes from "./Botoes";

export default function PopupModal({ closeModal }) {
  const { hasEmptyInputs, emptyValueFields, handleSubmitUserData } =
    useContext(GlobalContext);

  const handleSubmitAndCloseModal = () => {
    handleSubmitUserData();
    closeModal();
  };

  return (
    <div className="overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span
          onClick={closeModal}
          style={{
            width: "24px",
            height: "24px",
            alignSelf: "flex-end",
            margin: "-12px",
            cursor: "pointer",
          }}
        >
          {CloseIcon()}
        </span>

        <Formulario />
        <Botoes
          onClick={handleSubmitAndCloseModal}
          type="button"
          className="botao"
          disabled={hasEmptyInputs || emptyValueFields}
        >
          Enviar
        </Botoes>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  closeModal: PropTypes.func,
};
