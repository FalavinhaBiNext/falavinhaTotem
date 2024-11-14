import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoTributario.png";

import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
// Import dos Gifs
import gifLupa from "../../assets/gifs/lupa.gif";
import tribut from "../../assets/gifs/tribut.gif";
import gifTarget from "../../assets/gifs/target.gif";
import gitEscada from "../../assets/gifs/escada.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

function Tributario() {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI TRIBUTÁRIO", route: routes.dashboardTributario },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioTributario },
  ];

  const topicos = [
    {
      titulo: "ANÁLISE DAS CARACTERÍSTICAS DO NEGÓCIO",
      texto: `Compreensão detalhada do setor, porte e especificidades da empresa`,
      icone: gifLupa,
    },
    {
      titulo: "ESTUDO DO DRE E BALANÇO CONTÁBIL",
      texto: `Avaliação minuciosa dos Demonstrativos de 
       Resultados do Exercício (DRE) e do Balanço Patrimonial para identificar oportunidades de otimização fiscal.`,
      icone: tribut,
    },
    {
      titulo: "DEFINIÇÃO DE ESTRATÉGIAS FISCAIS",
      texto: `Elaboração de estratégias para reduzir as obrigações fiscais de forma eficiente e segura`,
      icone: gifTarget,
    },
    {
      titulo: "LEVANTAMENTO E APLICAÇÃO DE BENEFÍCIOS FISCAIS",
      texto: `Identificação e utilização de incentivos fiscais disponíveis para a empresa.`,
      icone: gitEscada,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title={textos.tributario.Titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.tributario.Subtitulo}
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              A{" "}
              <PalavraChave color="#C48322">
                {textos.tributario.PalavraChave}
              </PalavraChave>
              {textos.tributario.Texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[200px] py-3 px-4 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img
                  src={item.icone}
                  alt="Icone"
                  className="w-[50px] h-[50px]"
                />
                <h3 className="text-light_color font-gilroyBold text-base leading-[1.2rem] uppercase pb-2">
                  {item.titulo}
                </h3>
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
}
export default Tributario;
