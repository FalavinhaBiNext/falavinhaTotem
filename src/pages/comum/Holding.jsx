import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoHolding.png";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import routes from "../../routes";
import MainPageTitle from "../../components/UI/MainPageTitle";
import FooterApp from "../../components/Footer";
import { holding } from "../../utils/conteudo_paginas";
import useScreenSize from "../../hooks/useScreenSize";

const Holding = () => {
  const { screenSize } = useScreenSize();
  const { titulo, subtitulo, texto, topicos } = holding;

  const options = [
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioHolding },
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
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ titulo, texto, icone }, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[150px] p-6 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img src={icone} alt="Icone" className="w-[50px] h-[50px]" />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-2">
                  {titulo}
                </h3>
                <p className="text-sm sm:text-base font-gilroyLight">
                  {" "}
                  {texto}
                </p>
              </li>
            ))}
          </ul>

          <ButtonLinks
            options={options}
            style={{ maxWidth: screenSize.width > 768 ? "470px" : "100%" }}
          />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default Holding;
