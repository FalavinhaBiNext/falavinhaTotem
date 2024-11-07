import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";

import fundo from "../assets/image/FundoCigam.png";
import logoCigam from "../assets/image/LogoCigam.png";
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
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
    { name: "MODULOS CIGAM", route: routes.modulosCigam },
  ];

  const topicos = [
    { texto: "Integração do Ecossistema Empresarial ( Portais e IoT )", icone: gifPuzzle },
    { texto: "Conhecimento e Agilidade em Inteligencia Artificial.", icone: gifLine },
    { texto: "Personalização e Automação para acesso à informação.", icone: gifEditar },
    { texto: "Inteligência de Negócio e Segurança Tributária.", icone: gifIntel}
  ];

  return (
    <div style={{ display: "flex", flexFlow: "column", gap: "20px", padding: "20px", height: "100vh" }}>
      <HeaderApp redirect={"/servicos"}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img style={{ width: "45%" }} src={logoCigam} alt="" />
        </div>
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
                <img src={item.icone} alt="" className="icon-topicos_rh" />
                <p>{item.texto}</p>
              </div>
            ))}

          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 20, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
      
          </div>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </div>
  );
};
export default Cigam;
