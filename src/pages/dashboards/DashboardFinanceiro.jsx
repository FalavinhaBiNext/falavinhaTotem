import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";

const biContent = `https://app.powerbi.com/view?r=eyJrIjoiMmIzNTQ4ZWItMTYzZS00M2Y1LTliNzQtNzlhNDZkOTZkMzQ0IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashboardFinanceiro() {
  return (
    <>
      <MainHeader>
        <MainPageTitle title="DASHBOARD BI" />
      </MainHeader>

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
