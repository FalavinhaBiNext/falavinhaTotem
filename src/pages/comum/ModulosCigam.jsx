import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FramerMotion from "../../components/UI/FramerMotion";
import { modulosCigam } from "../../services/db";
import Accordion from "../../components/UI/Accordion";
import MainPageTitle from "../../components/UI/MainPageTitle";
import useAccordion from "../../hooks/useAccordion";
import PaginationButtons from "../../components/UI/PaginationButtons";

const ModulosCigam = () => {
  const { sliced, nextPage, prevPage, page, end } = useAccordion(modulosCigam);

  return (
    <>
      <MainHeader redirect={"/cigam"}>
        <MainPageTitle image={logoCigam} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mt-0 mb-10 sm:mt-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              Núcleo de educação corporativa grupo Falavinha Next
            </h2>
          </section>

          <div className="md:max-w-[768px] max-w-none mx-auto">
            <Accordion sliced={sliced} background={"#ff7811"} />

            <PaginationButtons
              page={page}
              end={end}
              nextPage={nextPage}
              prevPage={prevPage}
              data={modulosCigam}
            />
          </div>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default ModulosCigam;
