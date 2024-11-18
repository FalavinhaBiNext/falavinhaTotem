import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FramerMotion from "../../components/UI/FramerMotion";
import { modulosCigam } from "../../services/db";
import Accordion from "../../components/UI/Accordion";
import MainButton from "../../components/UI/MainButton";
import MainPageTitle from "../../components/UI/MainPageTitle";
import useAccordion from "../../hooks/useAccordion";

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

          <ul className="flex flex-col gap-4 mb-10">
            <Accordion sliced={sliced} background={"#ff7811"} />
          </ul>

          <div className="flex justify-center gap-x-6 gap-y-4">
            {page > 0 && (
              <MainButton
                onClick={prevPage}
                className={"md:max-w-[470px] max-w-none"}
              >
                &#x2190; Anterior
              </MainButton>
            )}
            {end < modulosCigam.length && (
              <MainButton
                onClick={nextPage}
                className={"md:max-w-[470px] max-w-none"}
              >
                Próximo &#x2192;
              </MainButton>
            )}
          </div>
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default ModulosCigam;
