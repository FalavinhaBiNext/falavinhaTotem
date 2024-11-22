import MainHeader from "../../components/Header";
import FooterApp from "../../components/Footer";
import FramerMotion from "../../components/UI/FramerMotion";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoBI.png";
import MainPageTitle from "../../components/UI/MainPageTitle";
import DashboardBILayout from "../../components/UI/DashboadBILayout";

// Link ao dashboard Tributario
const biContent = `https://app.powerbi.com/view?r=eyJrIjoiODA2NjYzNWEtYjVlMi00ZWVmLWE4YTAtZjk5YjJiNzhlMTE4IiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9&navContentPaneEnabled=false`;

function DashContabilidade() {
  return (
    <>
      <MainHeader>
        <MainPageTitle title="DASHBOARD BI" />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <DashboardBILayout biTitle={"Tributário"} biContent={biContent} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default DashContabilidade;