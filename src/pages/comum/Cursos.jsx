import { useState } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/Treinamento.png";
import FramerMotion from "../../components/UI/FramerMotion";
import { cursos } from "../../services/db";
import Accordion from "../../components/UI/Accordion";
import MainPageTitle from "../../components/UI/MainPageTitle";

const Cursos = () => {
  const fieldsPage = 3;
  const [page, setPage] = useState(0);

  const start = page * fieldsPage;
  const end = start + fieldsPage;
  const sliced = cursos.slice(start, end);

  const nextPage = () => {
    if (end < cursos.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (start > 0) setPage(page - 1);
  };

  return (
    <>
      <HeaderApp redirect={"/treinamentos"}>
        <MainPageTitle title="CURSOS GRUPO FALAVINHA NEXT" />
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">
              NÚCLEO DE EDUCAÇÃO CORPORATIVA GRUPO FALAVINHA NEXT
            </h2>
          </div>
          <div className="container-accordion">
            {sliced.map((item, index) => (
              <Accordion
                name={item.name}
                description={item.description}
                item={item.item}
                key={index}
                background={"#0F3355"}
                cardFundo={"#1b1f24"}
              />
            ))}
          </div>
          <div className="accordion-button">
            {page === 0 ? null : (
              <button className="botao" onClick={prevPage}>
                Anterior
              </button>
            )}
            {end >= cursos.length ? null : (
              <button className="botao" onClick={nextPage}>
                Próximo
              </button>
            )}
          </div>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
};

export default Cursos;
