import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaEmpresarial.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";

function ConsultoriaEmpresarial() {
  // links dos botões
  const options = [
    {
      name: " DASHBOARD BI CONSULTORIA EMPRESARIAL",
      route: routes.dashboardGestor,
    },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.powerapps },
  ];

  return (
    <>
      <HeaderApp>
        <h1 className="title">{textos.consultoriaEmpresarial.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">
              {textos.consultoriaEmpresarial.Subtitulo}
            </h2>
          </div>

          <div className="textoMain">
            <p className="paragraph">
              A
              <span
                style={{
                  color: "#0E2350",
                  fontSize: 24,
                  fontFamily: "Gilroy-bold",
                }}
              >
                {textos.consultoriaEmpresarial.palavraChave}
              </span>
              {textos.consultoriaEmpresarial.texto}
            </p>
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
export default ConsultoriaEmpresarial;
