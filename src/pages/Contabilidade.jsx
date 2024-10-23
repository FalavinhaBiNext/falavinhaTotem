import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ContabilidadeTotem.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import ButtonLinks from "../components/ButtonLinks";
import FramerMotion from "../components/FramerMotion";

function Contabilidade() {
  // links dos botões
  const options = [
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.dashboardGestor },
    { name: "DASHBOARD BI CONTABILIDADE", route: routes.powerapps },
  ];

  return (
    <>
      <HeaderApp />

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
