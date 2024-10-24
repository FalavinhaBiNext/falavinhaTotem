import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaRHTotem.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";

function ConsultoriaRH() {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONSULTORIA RH", route: routes.dashboardFinanceiro },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioRH },
  ];
  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.consultoriaRh.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">{textos.consultoriaRh.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">
              A{" "}
              <span
                style={{
                  color: "#582B6F",
                  fontSize: 16,
                  fontFamily: "Gilroy-bold",
                }}
              >
                {textos.consultoriaRh.PalavraChave}
              </span>{" "}
              {textos.consultoriaRh.Texto}
            </p>
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
export default ConsultoriaRH;
