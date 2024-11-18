import { useContext, useEffect } from "react";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import imagem from "../../assets/image/ConsultoriaRH.png";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import { perguntasSurveyRh } from "../../services/db";
import MainButton from "../../components/UI/MainButton";
import { QuestionarioElementoMultiplo } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import MainPageTitle from "../../components/UI/MainPageTitle";
import PopupModal from "../../components/UI/PopupModal";

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

      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={"Faça uma pesquisa sobre sua empresa"} />
      </MainHeader>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <QuestionarioElementoMultiplo
            perguntas={perguntasSurveyRh}
            respostas={respostasRh}
            handleChange={handleChange}
          ></QuestionarioElementoMultiplo>

          <MainButton
            className={"md:max-w-[470px] max-w-none"}
            onClick={handleSubmitValues}
            disabled={!isAllInputsChecked() || isSubmitting}
          >
            Ver resultado
          </MainButton>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
