import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";
import useScreenSize from "../../hooks/useScreenSize";

const biContentTotem = `https://app.powerbi.com/view?r=eyJrIjoiMmIzNTQ4ZWItMTYzZS00M2Y1LTliNzQtNzlhNDZkOTZkMzQ0IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

const biContentWeb = `https://app.powerbi.com/view?r=eyJrIjoiMDU5OTEyMTYtM2QxYi00N2NkLWE2ZjUtN2ZhMzYzMzQ1NjA2IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;


function DashboardFinanceiro() {
  
  const {screenSize} = useScreenSize();
  const biContent = screenSize.width > 768 ? biContentWeb : biContentTotem;


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
