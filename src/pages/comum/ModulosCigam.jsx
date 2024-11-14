import { useState } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FramerMotion from "../../components/UI/FramerMotion";
import { modulosCigam } from "../../services/db";
import Accordion from "../../components/UI/Accordion";
import MainButton from "../../components/UI/MainButton";
import MainPageTitle from "../../components/UI/MainPageTitle";

const ModulosCigam = () => {
  const [page, setPage] = useState(0);
  const fieldsPage = 3;
  const start = page * fieldsPage;
  const end = start + fieldsPage;
  const sliced = modulosCigam.slice(start, end);

  const nextPage = () => {
    if (end < modulosCigam.length) setPage(page + 1);
  };
  const prevPage = () => {
    if (start > 0) setPage(page - 1);
  };

  return (
    <>
      <HeaderApp redirect={"/cigam"}>
        <MainPageTitle image={logoCigam} />
      </HeaderApp>

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
        {/* <FramerMotion>
          <div>
            <h2 className="subtitulo">MODULOS CIGAM</h2>
          </div>
          <div className="container-accordion">
            {sliced.map((item, index) => (
              <Accordion
                name={item.name}
                item={item.item}
                key={index}
                background={"#ff7811"}
                cardFundo={"#1B1F24"}
              />
            ))}
          </div>
          <div className="accordion-button">
            {page === 0 ? null : (
              <button className="botao" onClick={prevPage}>
                Anterior
              </button>
            )}
            {end >= modulosCigam.length ? null : (
              <button className="botao" onClick={nextPage}>
                Próximo
              </button>
            )}
          </div>
        </FramerMotion> */}
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default ModulosCigam;
