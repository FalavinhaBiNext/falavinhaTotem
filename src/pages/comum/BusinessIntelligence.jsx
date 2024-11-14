import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import MainPageTitle from "../../components/UI/MainPageTitle";
import { businessIntelligence } from "../../utils/conteudo_paginas";

export default function BusinessIntelligence() {
  const { titulo, subtitulo, palavraChave, texto, topicos } =
    businessIntelligence;

  // links dos botões
  const options = [
    { name: "BI CONTABILIDADE", route: routes.dashboardGestor },
    { name: "BI FINANCEIRO", route: routes.dashboardFinanceiro },
    { name: "BI GESTÃO DE ESTOQUE", route: routes.dashboardGestaoEstoque },
    { name: "BI RECURSOS HUMANOS", route: routes.dashboardRH },
    { name: "BI TRIBUTÁRIO", route: routes.dashboardTributario },
  ];

  return (
    <>
      <HeaderApp>
        <MainPageTitle title={titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {subtitulo}!
            </h2>
            <p className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              O <PalavraChave color="#fff">{palavraChave}</PalavraChave>
              {texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ titulo, icone, lista }, index) => (
              <li
                className="flex flex-col justify-start items-start p-6 text-left 
                text-light_color w-full border-2 border-primary_color rounded-[20px] 
                shadow-bx-1 bg-transparent"
                key={index}
              >
                <img src={icone} alt="" className="w-[50px] h-[50px]" />
                <p className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-3">
                  {titulo}
                </p>
                <ul className="flex flex-col gap-2 text-light_color">
                  {lista.map((item, index) => (
                    <li
                      className="font-gilroyLight text-sm sm:text-base leading-[1.2rem]"
                      key={index}
                    >
                      &#x2714; {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
}
