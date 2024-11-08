import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";

// Link ao dashboard Tributario
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiODA2NjYzNWEtYjVlMi00ZWVmLWE4YTAtZjk5YjJiNzhlMTE4IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {
  return (
    <>
      <HeaderApp>
        <h1 className="title">DASHBOARD BI</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h2 className="subtitulo">Tributário</h2>
          <div className="iframeDash">
            <iframe
              className="iframe-content"
              title="Tributario"
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
