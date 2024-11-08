import { useState } from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FramerMotion from "../../components/UI/FramerMotion";
import { modulosCigam } from "../../services/db";
import Accordion from "../../components/UI/Accordion";

import "../../style/accordion.css";

const ModulosCigam = () => {
  const fieldsPage = 3;
  const [page, setPage] = useState(0);

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "45%" }} src={logoCigam} alt="" />
        </div>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
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
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
};

export default ModulosCigam;
