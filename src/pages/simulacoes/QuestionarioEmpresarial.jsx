import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import Botoes from "../../components/Botoes";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { perguntasSurveyEmpresarial } from "../../services/db";
import { QuestionarioElementoBinario } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";

export default function QuestionarioEmpresarial() {
  const navigate = useNavigate();
  const { handleCheckRefresh } = useRefreshDetector();
  const {
    hasInputErrors,
    hasEmptyInputs,
    respostasEmp,
    setRespostasEmp,
    isSubmitting,
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

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <QuestionarioElementoBinario
            perguntas={perguntasSurveyEmpresarial}
            respostas={respostasEmp}
            handleChange={handleChange}
            backgroundRadio={"#0f3355"}
          >
            {/* botões inseridos como children */}

            <div className="accordion-button">
              <Botoes
                className="botao"
                onClick={() => navigate("/resultado-empresarial")}
                disabled={
                  hasEmptyInputs ||
                  hasInputErrors ||
                  !isAllInputsChecked() ||
                  isSubmitting
                }
              >
                Ver resultado
              </Botoes>
            </div>
          </QuestionarioElementoBinario>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
