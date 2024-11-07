import { useContext, useEffect, useState } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/FramerMotion";
import imagem from "../../assets/image/ConsultoriaRH.png";
import Formulario from "../../components/Formulario";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { useNavigate } from "react-router-dom";
import { perguntasSurveyRh } from "../../services/db";
import Botoes from "../../components/Botoes";
import { QuestionarioElementoMultiplo } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";

export default function QuestionarioRH() {
  const {
    respostasRh,
    setRespostasRh,
    hasInputErrors,
    hasEmptyInputs,
    isSubmitting,
  } = useContext(GlobalContext);

  const { handleCheckRefresh } = useRefreshDetector();
  const navigate = useNavigate();
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <Formulario setIsFormVisible={setIsFormVisible} />

          <QuestionarioElementoMultiplo
            perguntas={perguntasSurveyRh}
            respostas={respostasRh}
            handleChange={handleChange}
            backgroundRadio={"#582b6f"}
          >
            {/* botões inseridos como children */}
            <div className="accordion-button">
              <Botoes
                className="botao"
                onClick={() => navigate("/resultado-rh")}
                disabled={
                  (isFormVisible && hasEmptyInputs) ||
                  hasInputErrors ||
                  !isAllInputsChecked() ||
                  isSubmitting
                }
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
