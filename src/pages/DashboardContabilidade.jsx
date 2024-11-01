import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import FramerMotion from "../components/FramerMotion";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/FundoBI.png";

// Link ao dashboard BI Gestor 2.0
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMGM5Y2VhYTUtMTdhMS00MmM0LWFmOTMtYTY4Njc2ZjMwYz
QwIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {
  return (
    <>
      <HeaderApp>
        <h1 className="title">DASHBOARD BI</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h2 className="subtitulo">Gestor 2.0 | Contabilidade</h2>
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
