import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";

// Link ao dashboard BI Gestão de Estoque
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiZDM5MzlhZjQtNWFkNC00YjJlLTkxNWMtNDI5NTliYjFiNWJiIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {
  return (
    <>
      <HeaderApp>
        <MainPageTitle title="DASHBOARD GESTÃO DE ESTOQUE" />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h2 className="subtitulo">Controle de Estoque</h2>
          <div className="iframeDash">
            <iframe
              className="iframe-content"
              title="Gestor 2.0 (Revitalizado) - Copia"
              src={biContent}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <span className="iframe-border"></span>
          </div>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashContabilidade;
