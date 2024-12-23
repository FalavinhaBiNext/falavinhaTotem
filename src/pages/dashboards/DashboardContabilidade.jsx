import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";
import useScreenSize from "../../hooks/useScreenSize";

// Link ao dashboard BI Gestor 2.0
const biContentTotem = `https://app.powerbi.com/view?r=eyJrIjoiMGM5Y2VhYTUtMTdhMS00MmM0LWFmOTMtYTY4Njc2ZjMwYz
QwIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

const biContentWeb = `https://app.powerbi.com/view?r=eyJrIjoiNjU0ZGYxZWItZWE0Yi00MTA5LTk4OWMtODhmNDg1ODUzY2Y5IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashboardContabilidade() {

  const { screenSize } = useScreenSize();
  console.log(screenSize.width);

  const biContent = screenSize.width < 768 ? biContentTotem : biContentWeb;

  return (
    <>
      <MainHeader>
        <MainPageTitle title="DASHBOARD BI" />
      </MainHeader>

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
