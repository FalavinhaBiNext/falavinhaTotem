import HeaderApp from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboardBILayout";

// Link ao dashboard BI Gestão de Estoque
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiZDM5MzlhZjQtNWFkNC00YjJlLTkxNWMtNDI5NTliYjFiNWJiIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {
  return (
    <>
      <HeaderApp>
        <MainPageTitle title="DASHBOARD GESTÃO DE ESTOQUE" />
      </HeaderApp>

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
