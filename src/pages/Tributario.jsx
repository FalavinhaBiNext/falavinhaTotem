import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import fundo from "../assets/image/AssessoriaTributaria.png";
import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";

function Tributario() {
  const navigate = useNavigate();

  // links dos botões
  const options = [
    { name: "DASHBOARD BI TRIBUTÁRIO", route: routes.dashboardFinanceiro },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.powerapps },
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
            <h1 className="title">{textos.tributario.Titulo}</h1>
            <h2 className="subtitulo">{textos.tributario.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">
              A{" "}
              <span
                style={{
                  color: "#C48322",
                  fontFamily: "Gilroy-bold",
                  fontSize: 24,
                }}
              >
                {textos.tributario.PalavraChave}
              </span>{" "}
              {textos.tributario.Texto}
            </p>
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
export default Tributario;
