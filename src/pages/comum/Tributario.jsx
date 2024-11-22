import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoTributario.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import { tributario } from "../../utils/conteudo_paginas";

import MainPageTitle from "../../components/UI/MainPageTitle";

function Tributario() {
  const { titulo, subtitulo, palavraChave, texto, topicos } = tributario;

  // links dos botões
  const options = [
    { name: "DASHBOARD BI TRIBUTÁRIO", route: routes.dashboardTributario },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioTributario },
  ];

  return (
    <>
      <MainHeader redirect={"/solucoes"}>
        <MainPageTitle title={titulo} />
      </MainHeader>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {subtitulo}
            </h2>
            <p className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              A <PalavraChave color="#C48322">{palavraChave}</PalavraChave>
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ titulo, texto, icone }, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[200px] p-6 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img src={icone} alt="Icone" className="w-[50px] h-[50px]" />
                <h3 className="text-light_color font-gilroyBold text-base leading-[1.2rem] uppercase pb-2">
                  {titulo}
                </h3>
                <p className="font-gilroyLight text-sm sm:text-base leading-[1.2rem]">
                  {texto}
                </p>
              </li>
            ))}
          </ul>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
export default Tributario;
