import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import fundo from "../assets/image/ContabilidadeTotem.png";
import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import ButtonLinks from "../components/ButtonLinks";
import FramerMotion from "../components/FramerMotion";

function Contabilidade() {
  const navigate = useNavigate();

  // links dos botões
  const options = [
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.dashboardGestor },
    { name: "DASHBOARD BI CONTABILIDADE", route: routes.powerapps },
  ];

  return (
    <>
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h1 className="title">{textos.contabilidade.Titulo}</h1>
            <h2 className="subtitulo">{textos.contabilidade.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">{textos.contabilidade.Texto}</p>
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
}
export default Contabilidade;
