import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";

const biContent = `https://app.powerbi.com/view?r=eyJrIjoiNDAyM2RkYmQtOWM2Mi00NTljLWFiZjEtNmMwZWI2Y2IxYzU5IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9`;

function DashboardFinanceiro() {
  // const motionStyle = {
  //   backgroundColor: "#009499",
  // };

  return (
    <>
      <HeaderApp>
        <MainPageTitle title="DASHBOARD BI RH" />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h2 className="subtitulo">RECURSOS HUMANOS</h2>
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

export default DashboardFinanceiro;
