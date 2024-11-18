import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import FramerMotion from "../../components/UI/FramerMotion";
import FooterApp from "../../components/Footer";
import MainButton from "../../components/UI/MainButton";
import { GlobalContext } from "../../context/GlobalContextProvider";
import Formulario from "../../components/Formulario";
import { perguntasSurveyEmpresarial } from "../../services/db";
import { QuestionarioElementoBinario } from "../../components/QuestionarioElemento";
import useRefreshDetector from "../../hooks/useRefreshDetector";

export default function QuestionarioEmpresarial() {
  const navigate = useNavigate();
  const { handleCheckRefresh } = useRefreshDetector();
  const [isFormVisible, setIsFormVisible] = useState(false);
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
      <MainHeader redirect={"/solucoes"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <Formulario setIsFormVisible={setIsFormVisible} />
          <QuestionarioElementoBinario
            perguntas={perguntasSurveyEmpresarial}
            respostas={respostasEmp}
            handleChange={handleChange}
            backgroundRadio={"#0f3355"}
          />
        </FramerMotion>
      </HeroApp>
      <FooterApp>
        <MainButton
          className="botao"
          onClick={() => navigate("/resultado-empresarial")}
          disabled={
            (isFormVisible && hasEmptyInputs) ||
            hasInputErrors ||
            !isAllInputsChecked() ||
            isSubmitting
          }
        >
          Ver resultado
        </MainButton>
      </FooterApp>
    </>
  );
}
