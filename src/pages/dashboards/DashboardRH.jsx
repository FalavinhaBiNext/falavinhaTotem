import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";
import useScreenSize from "../../hooks/useScreenSize";

const biContentTotem = `https://app.powerbi.com/view?r=eyJrIjoiNDAyM2RkYmQtOWM2Mi00NTljLWFiZjEtNmMwZWI2Y2IxYzU5IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9`;

const biContentWeb = `https://app.powerbi.com/view?r=eyJrIjoiYjYwZDUxZDktNGJkNS00MjIyLThlNTQtNzc3MGE5YzcyMTVhIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9
&navContentPaneEnabled=false`;

function DashboardFinanceiro() {
  // const motionStyle = {
  //   backgroundColor: "#009499",
  // };

  const { screenSize } = useScreenSize();
  const biContent = screenSize.width > 768 ? biContentWeb : biContentTotem;

  return (
    <>
      <MainHeader>
        <MainPageTitle title="DASHBOARD BI RH" />
      </MainHeader>

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
