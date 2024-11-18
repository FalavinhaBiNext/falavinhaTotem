import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { perguntasSurveyEmpresarial } from "../../services/db";
import { QuestionarioElementoBinario } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";
import MainPageTitle from "../../components/UI/MainPageTitle";
import PopupModal from "../../components/UI/PopupModal";

export default function QuestionarioEmpresarial() {
  const navigate = useNavigate();
  const { handleCheckRefresh } = useRefreshDetector();
  const {
    hasInputErrors,
    respostasEmp,
    setRespostasEmp,
    isSubmitting,
    showModal,
    closeModal,
    handleSetShowModal,
    hasSavedData,
  } = useContext(GlobalContext);

  // Limpa a respostas do survey do RH ao carregar a página
  useEffect(() => {
    if (Object.keys(respostasEmp).length > 0) {
      setRespostasEmp({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (questionId, answerValue) => {
    setRespostasEmp((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerValue,
    }));
  };

  // Apenas certifica se todos os checkboxes foram marcados
  const isAllInputsChecked = () => {
    const totalNumberOfQuestions = perguntasSurveyEmpresarial.reduce(
      (totalCount, section) => totalCount + section.perguntas.length,
      0
    );
    return Object.keys(respostasEmp).length === totalNumberOfQuestions;
  };

  useEffect(() => {
    handleCheckRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Envia dados para o servidor
  const handleSubmitValues = () => {
    if (!showModal && !hasSavedData) {
      return handleSetShowModal(true);
    }
    navigate("/resultado-empresarial");
  };

  return (
    <>
      {showModal && (
        <PopupModal showModal={showModal} closeModal={closeModal} />
      )}

      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={"Faça uma pesquisa sobre sua empresa"} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <QuestionarioElementoBinario
            perguntas={perguntasSurveyEmpresarial}
            respostas={respostasEmp}
            handleChange={handleChange}
            backgroundRadio={"#0f3355"}
          />

          <MainButton
            className={"md:max-w-[470px] max-w-none"}
            onClick={handleSubmitValues}
            disabled={hasInputErrors || !isAllInputsChecked() || isSubmitting}
          >
            Ver resultado
          </MainButton>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
