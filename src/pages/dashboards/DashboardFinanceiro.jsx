import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboardBILayout";

const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMmIzNTQ4ZWItMTYzZS00M2Y1LTliNzQtNzlhNDZkOTZkMzQ0IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashboardFinanceiro() {
  return (
    <>
      <HeaderApp>
        <MainPageTitle title="DASHBOARD BI" />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <DashboardBILayout biTitle={"Financeiro"} biContent={biContent} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashboardFinanceiro;
