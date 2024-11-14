import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import imagem from "../../assets/image/Servicos2.png";
import routes from "../../routes";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import { solucoes } from "../../utils/conteudo_paginas";
import QRCodeIcons from "../../components/UI/QRCodeIcons";
import MainPageTitle from "../../components/UI/MainPageTitle";
import PalavraChave from "../../components/UI/PalavraChave";

export default function Servicos() {
  const { titulo, texto, topicos } = solucoes;

  // links dos botões
  const options = [
    { name: "DASHBOARDS BI", route: routes.bisinessIntelligence },
    { name: "TRIBUTÁRIO", route: routes.tributario },
    { name: "CONTABILIDADE", route: routes.contabilidade },
    { name: "CONSULTORIA RH", route: routes.consultoriRh },
    { name: "CIGAM", route: routes.cigam },
    {
      name: "CONSULTORIA EMPRESARIAL",
      route: routes.consultoriaEmpresarial,
    },
    { name: "HOLDING", route: routes.holding },
    { name: "TREINAMENTOS", route: routes.treinamentos },
  ];

  return (
    <>
      <HeaderApp>
        <MainPageTitle title={titulo} />
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              A <PalavraChave color="#fff">Falavinha Next </PalavraChave>
              {texto}
            </h2>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map(({ icone, titulo }) => (
              <li
                className="flex flex-col items-center justify-center gap-2 
                  min-h-[180px] w-full border-2 border-primary_color rounded-[10px] 
                  shadow-bx-1 p-6"
                key={titulo}
              >
                <img src={icone} alt="" className="w-[40px] h-[40px]" />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem]">
                  {titulo}
                </h3>
              </li>
            ))}
          </ul>

          <ButtonLinks options={options} />

          <QRCodeIcons />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
