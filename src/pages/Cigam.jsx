import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";

import fundo from "../assets/image/Cigam.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";

const Cigam = () => {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CIGAM", route: routes.dashboardGestor },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
  ];

  return (
    <>
      <HeaderApp />
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h1 className="title">{textos.cigam.Titulo}</h1>
            <h2 className="subtitulo">
              {textos.cigam.Subtitulo}{" "}
              <span
                style={{
                  color: "#FE710E",
                  fontFamily: "Gilroy-bold",
                  fontSize: 14,
                }}
              >
                completamente integrado!
              </span>
            </h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">{textos.cigam.texto}</p>
          </div>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
};
export default Cigam;
