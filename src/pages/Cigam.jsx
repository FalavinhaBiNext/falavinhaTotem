import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";

import fundo from "../assets/image/FundoCigam.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";

const Cigam = () => {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CIGAM", route: routes.dashboardGestor },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.cigam.Titulo}</h1>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">
              {textos.cigam.Subtitulo}{" "}
              <PalavraChave color="#FE710E">
                completamente integrado!
              </PalavraChave>
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
