import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";

import fundo from "../assets/image/FundoCigam.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
// Import dos Gifs
import gifPuzzle from "../assets/gifs/puzzle.gif";
import gifLine from "../assets/gifs/line.gif";
import gifEditar from "../assets/gifs/editar.gif";
import gifIntel from "../assets/gifs/intel.gif";


const Cigam = () => {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CIGAM", route: routes.dashboardGestor },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
  ];

  const topicos = [
    {texto: "Integração do Ecossistema Empresarial ( Portais e IoT )", icone: gifPuzzle},
    {texto: "Conhecimento e Agilidade em Inteligencia Artificial.", icone: gifLine},
    {texto: "Personalização e Automação para acesso à informação.", icone: gifEditar},
    {texto: "Inteligência de Negócio e Segurança Tributária.", icone: gifIntel}
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
          <div className="consultoria-rh">
            {topicos.map((item, index) => (
              <div key={index} className="consultoria-rh__item">
                  <img src={item.icone} alt="" className="icon-topicos_rh"/>
                  <p>{item.texto}</p>
              </div>
            ))}

          </div>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
};
export default Cigam;
