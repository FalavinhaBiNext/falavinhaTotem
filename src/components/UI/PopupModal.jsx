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
  const overlayStyle = `flex justify-center items-center fixed inset-0 z-[10000] 
  bg-[rgba(0, 0, 0, 0.3)] backdrop-blur-[4px] transition-all duration-500 ease-in-out`;
  const modalStyle = `absolute flex flex-col items-center w-full  md:max-w-[572px]  max-w-[calc(100%_-_30px)] max-w-[540px] h-auto 
  bg-[#ffffff80] border-[1.5px] border-gray-800 rounded-[0.75rem] shadow-bx-1 z-[10]
  animate-intro p-5`;

  return (
    <div className={overlayStyle}>
      <div className={modalStyle} onClick={(e) => e.stopPropagation()}>
        <span onClick={closeModal} style={closeIconsStyle} title="Fechar">
          {CloseIcon()}
        </span>

        <Formulario />
        <MainButton
          onClick={handleSubmitAndCloseModal}
          type="button"
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
