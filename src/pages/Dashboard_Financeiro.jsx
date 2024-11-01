import HeaderApp from "../components/Header";
import FooterApp from "../components/Footer";
import HeroApp from "../components/Hero";
import FramerMotion from "../components/FramerMotion";
import fundo from "../assets/image/FundoBI.png";

const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMmIzNTQ4ZWItMTYzZS00M2Y1LTliNzQtNzlhNDZkOTZkMzQ0IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function Dashboard_Financeiro() {

  return (
    <>
      <HeaderApp>
        <h1 className="title">DASHBOARD BI</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h2 className="subtitulo">Financeiro</h2>
          <div className="iframeDash">
            <iframe
              className="iframe-content"
              title="Financeiro - BI"
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

export default Dashboard_Financeiro;
