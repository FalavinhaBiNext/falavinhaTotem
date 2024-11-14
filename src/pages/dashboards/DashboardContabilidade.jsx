import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";

// Link ao dashboard BI Gestor 2.0
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMGM5Y2VhYTUtMTdhMS00MmM0LWFmOTMtYTY4Njc2ZjMwYz
QwIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashboardContabilidade() {
  return (
    <>
      <HeaderApp>
        <MainPageTitle title="DASHBOARD BI" />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <DashboardBILayout biTitle={"Contabilidade"} biContent={biContent} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashboardContabilidade;
