import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoCigam.png";
import logoCigam from "../../assets/image/LogoCigam.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import { cigam } from "../../utils/conteudo_paginas";
import MainPageTitle from "../../components/UI/MainPageTitle";

const Cigam = () => {
  const { titulo, subtitulo, texto, topicos } = cigam;

  // links dos botões
  const options = [
    { name: "MODULOS CIGAM", route: routes.modulosCigam },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioCigam },
  ];
  return (
    <>
      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={titulo} image={logoCigam} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mt-0 mb-10 sm:mt-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {subtitulo}{" "}
              <PalavraChave color="#FE710E">
                completamente integrado!
              </PalavraChave>
            </h2>
            <p className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ texto, icone }, index) => (
              <li
                key={index}
                className="
                  flex flex-col items-start justify-start gap-2 p-6 text-left
                  w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 
                  bg-transparent text-light_color min-h-[200px]"
              >
                <img src={icone} alt="Icone" className="w-[50px] h-[50px]" />
                <p className="text-base sm:text-lg font-gilroyLight">{texto}</p>
              </li>
            ))}
          </ul>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
};
export default Cigam;
