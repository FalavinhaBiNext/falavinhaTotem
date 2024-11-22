import MainHeader from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaRH.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import { consultoriaRh } from "../../utils/conteudo_paginas";
import MainPageTitle from "../../components/UI/MainPageTitle";

function ConsultoriaRH() {
  const { titulo, subtitulo, palavraChave, texto, topicos } = consultoriaRh;

  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONSULTORIA RH", route: routes.dashboardRH },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioRH },
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
              A <PalavraChave color="#fff">{palavraChave}</PalavraChave>
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ icone, texto, lista }, index) => (
              <li
                className="flex flex-col items-start justify-start gap-1 min-h-[230px] p-6 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
                key={index}
              >
                <img src={icone} alt="Icone" className="w-[40px] h-[40px]" />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-2">
                  {texto}
                </h3>
                <ul className="flex flex-col gap-2 text-light_color">
                  {lista.map((item, index) => (
                    <li
                      className="font-gilroyLight text-sm sm:text-base leading-[1.2rem]"
                      key={index}
                    >
                      {" "}
                      &#x2714; {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ButtonLinks options={options} />
          <br />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
export default ConsultoriaRH;
