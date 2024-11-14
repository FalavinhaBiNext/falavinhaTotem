import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoContabilidade.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import ButtonLinks from "../../components/UI/ButtonLinks";
import FramerMotion from "../../components/UI/FramerMotion";
import MainPageTitle from "../../components/UI/MainPageTitle";
import { contabilidade } from "../../utils/conteudo_paginas";

function Contabilidade() {
  const { titulo, subtitulo, texto, topicos } = contabilidade;

  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONTABILIDADE", route: routes.dashboardGestor },
  ];

  return (
    <>
      <HeaderApp redirect={"/solucoes"}>
        <MainPageTitle title={titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {subtitulo}!
            </h2>
            <p className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ titulo, texto, icone }, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start gap-2 min-h-[150px] p-6 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img src={icone} alt="Icone" className="w-[50px] h-[50px]" />
                <h2 className="font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-3">
                  {titulo}
                </h2>
                <p className="text-sm sm:text-base font-gilroyLight">{texto}</p>
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
export default Contabilidade;
