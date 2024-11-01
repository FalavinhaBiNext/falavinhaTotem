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

export default function QuestionarioRH() {
  const { respostasRh, setRespostasRh, hasInputErrors, hasEmptyInputs } =
    useContext(GlobalContext);

  const navigate = useNavigate();
  const [isFormVisible, setisFormVisible] = useState(false);

  // Limpa a respostas do survey do RH ao carregar a página
  useEffect(() => {
    if (Object.keys(respostasRh).length > 0) {
      setRespostasRh({});
    }
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
          <Formulario setisFormVisible={setisFormVisible} />

          <QuestionarioElementoMultiplo
            perguntas={perguntasSurveyRh}
            respostas={respostasRh}
            handleChange={handleChange}
          >
            {/* botões inseridos como children */}
            <Botoes
              className="botao"
              onClick={() => navigate("/resultado-rh")}
              disabled={
                (isFormVisible && hasEmptyInputs) ||
                hasInputErrors ||
                !isAllInputsChecked()
              }
            >
              Ver resultado
            </Botoes>
          </QuestionarioElementoMultiplo>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
