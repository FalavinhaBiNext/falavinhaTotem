import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";

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
          <DashboardBILayout
            biTitle={"Recursos Humanos"}
            biContent={biContent}
          />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashboardFinanceiro;
