import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";

import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
// Import dos Gifs
import gifPuzzle from "../../assets/gifs/puzzle.gif";
import gifLine from "../../assets/gifs/line.gif";
import gifEditar from "../../assets/gifs/editar.gif";
import gifIntel from "../../assets/gifs/intel.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

const Cigam = () => {
  // links dos botões
  const options = [
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
    { name: "MODULOS CIGAM", route: routes.modulosCigam },
  ];

  const topicos = [
    {
      texto: "Integração do Ecossistema Empresarial ( Portais e IoT )",
      icone: gifPuzzle,
    },
    {
      texto: "Conhecimento e Agilidade em Inteligencia Artificial.",
      icone: gifLine,
    },
    {
      texto: "Personalização e Automação para acesso à informação.",
      icone: gifEditar,
    },
    {
      texto: "Inteligência de Negócio e Segurança Tributária.",
      icone: gifIntel,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title={textos.contabilidade.Titulo} image={logoCigam} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mt-0 mb-10 sm:mt-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.cigam.Subtitulo}{" "}
              <PalavraChave color="#FE710E">
                completamente integrado!
              </PalavraChave>
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              {textos.cigam.texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <div
                key={index}
                className="
                  flex flex-col items-start justify-start gap-2 py-3 px-4 text-left
                  w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 
                  bg-transparent text-light_color min-h-[200px]"
              >
                <img
                  src={item.icone}
                  alt="Icone"
                  className="w-[50px] h-[50px]"
                />
                <p className="font-gilroyLight text-base leading-[1.2rem]">
                  {item.texto}
                </p>
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
