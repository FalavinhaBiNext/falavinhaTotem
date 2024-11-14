import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoContabilidade.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import ButtonLinks from "../../components/UI/ButtonLinks";
import FramerMotion from "../../components/UI/FramerMotion";
import MainPageTitle from "../../components/UI/MainPageTitle";
// Import dos Gifs
import gifTarget from "../../assets/gifs/target.gif";
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifCheck from "../../assets/gifs/check.gif";
import gifComputador from "../../assets/gifs/computer.gif";

function Contabilidade() {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONTABILIDADE", route: routes.dashboardGestor },
  ];

  const topicos = [
    {
      titulo: "PLANEJAMENTO CONTÁBIL",
      texto: `Inclui a elaboração de contas e relatórios (BI), acompanhamento e envio periódicos de balancetes, 
      além de relatórios comparaticos de evolução financeira e outros 
      indicadores essenciais para uma visão detalhada e estratégica da contabilidade.`,
      icone: gifTarget,
    },
    {
      titulo: "CONTABILIDADE CONSULTIVA",
      texto: `com foco nas necessidades únicas e exclusivas das empresas prezando por um atendimento personalizado, 
      por meio do uso de tecnologia de ponta e inovação constante, conseguimos apresentar soluções estratégicas 
      para auxiliar na tomada de decisão de cada modelo de negócio das empresas.`,
      icone: gifComunicacao,
    },
    {
      titulo: "CONTABILIDADE GERENCIAL",
      texto: `Proporciona uma visão detalhada e atualizada da situação financeira da empresa, permitindo uma melhor tomada de decisões. 
      Com informações precisas sobre receitas, despesas, lucros e custos, os gestores podem identificar áreas de oportunidade, 
      avaliar o desempenho de diferentes departamentos, projetos, segmentos e produtos, podendo assim direcionar recursos de 
      forma mais eficiente.`,
      icone: gifCheck,
    },
    {
      titulo: "TECNOLOGIA E SISTEMAS",
      texto: `Utilizamos o que há de melhor em tecnologia para o seu atendimento, contamos com sistema de comunicação e 
      solicitações via web, envio automático de guias e relatórios e um dos melhores sistemas contábeis do mercado, 
      tudo isso para garantir as informações repassadas e trazer mais praticidade para o seu dia a dia.`,
      icone: gifComputador,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title={textos.contabilidade.Titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.contabilidade.Subtitulo}!
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              {textos.contabilidade.Texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-2 min-h-[150px] py-3 px-4 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img
                  src={item.icone}
                  alt="Icone"
                  className="w-[50px] h-[50px]"
                />
                <h2 className="font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-3">
                  {item.titulo}
                </h2>
                <p className="text-sm sm:text-base font-gilroyLight">
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
export default Contabilidade;
