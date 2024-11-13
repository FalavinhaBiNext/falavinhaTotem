import { useContext, useEffect } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/ConsultoriaRH.png";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import { perguntasSurveyRh } from "../../services/db";
import Botoes from "../../components/Botoes";
import { QuestionarioElementoMultiplo } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import PopupModal from "../../components/PopupModal";

export default function QuestionarioRH() {
  const {
    respostasRh,
    setRespostasRh,
    hasInputErrors,
    isSubmitting,
    showModal,
    closeModal,
    handleSetShowModal,
    hasSavedData,
  } = useContext(GlobalContext);

  const { handleCheckRefresh } = useRefreshDetector();
  const navigate = useNavigate();

  // Limpa a respostas do survey do RH ao carregar a página
  useEffect(() => {
    if (Object.keys(respostasRh).length > 0) {
      setRespostasRh({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleCheckRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (questionId, answerValue) => {
    setRespostasRh((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  // Apenas certifica se todos os checkboxes foram marcados
  const isAllInputsChecked = () => {
    return (
      Object.keys(respostasRh).length === perguntasSurveyRh.length ||
      hasInputErrors
    );
  };

  const handleSubmitValues = () => {
    if (!showModal && !hasSavedData) {
      return handleSetShowModal(true);
    }
    navigate("/resultado-rh");
  };

  return (
    <>
      {showModal && (
        <PopupModal showModal={showModal} closeModal={closeModal} />
      )}

      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <QuestionarioElementoMultiplo
            perguntas={perguntasSurveyRh}
            respostas={respostasRh}
            handleChange={handleChange}
          >
            {/* botões inseridos como children */}
            <div className="accordion-button">
              <Botoes
                className="botao"
                onClick={handleSubmitValues}
                disabled={!isAllInputsChecked() || isSubmitting}
              >
                Ver resultado
              </Botoes>
            </div>
          </QuestionarioElementoMultiplo>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
