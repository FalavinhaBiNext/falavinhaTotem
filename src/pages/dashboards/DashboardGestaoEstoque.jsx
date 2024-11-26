import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";
import useScreenSize from "../../hooks/useScreenSize";

// Link ao dashboard BI Gestão de Estoque
const biContentTotem = `https://app.powerbi.com/view?r=eyJrIjoiZDM5MzlhZjQtNWFkNC00YjJlLTkxNWMtNDI5NTliYjFiNWJiIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

const biContentWeb = `https://app.powerbi.com/view?r=eyJrIjoiNjMxNDFlZGEtZWYwNC00M2M0LTg4MGYtMzFjYTc3NDViODE5IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {

  const { screenSize } = useScreenSize();
  const biContent = screenSize.width > 768 ? biContentWeb : biContentTotem;

  return (
    <>
      <MainHeader>
        <MainPageTitle title="DASHBOARD GESTÃO DE ESTOQUE" />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <DashboardBILayout
            biTitle={"Controle de Estoque"}
            biContent={biContent}
          />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashContabilidade;
