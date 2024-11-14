import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import MainPageTitle from "../../components/UI/MainPageTitle";
//Import dos gifs
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifMoeda from "../../assets/gifs/moedas.gif";
import gifCoins from "../../assets/gifs/coins1.gif";
import gifAvatar from "../../assets/gifs/avatar.gif";

export default function DashboardBI() {
  // links dos botões
  const options = [
    { name: "BI CONTABILIDADE", route: routes.dashboardGestor },
    { name: "BI FINANCEIRO", route: routes.dashboardFinanceiro },
    { name: "BI GESTÃO DE ESTOQUE", route: routes.dashboardGestaoEstoque },
    { name: "BI RECURSOS HUMANOS", route: routes.dashboardRH },
    { name: "BI TRIBUTÁRIO", route: routes.dashboardTributario },
  ];

  //Dados Tópicos
  const boards = [
    {
      title: "Financeiro",
      icon: gifCoins,
      content: [
        "Indicadoresa Financeiros",
        "Contas a Pagar e a Receber",
        "Fluxo de Caixa",
        "Análise Vertical e Horizontal",
        "PMP x PMR",
      ],
    },
    {
      title: "Contabilidade",
      icon: gifMoeda,
      content: [
        "EBITDA",
        "Indice de Liquidez",
        "Indicador de Resultado",
        "Indicadores Patrimoniais",
        "Análise Vertical e Horizontal",
      ],
    },
    {
      title: "Recursos Humanos",
      icon: gifAvatar,
      content: [
        "Turnover",
        "Headcount",
        "Custo Folha por Departamento",
        "Cálculo de Férias",
        "Controle de Banco de Horas",
      ],
    },
    {
      title: "Comercial",
      icon: gifComunicacao,
      content: [
        "Ticket Médio",
        "Taxa de Conversão",
        "Vendas por Cliente",
        "Venda por Filial/Região/Cidade",
        "Desempenho por Vendedor",
      ],
    },
  ];

  return (
    <>
      <HeaderApp>
        <MainPageTitle title={textos.Business.Titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.Business.Subtitulo}!
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              O{" "}
              <PalavraChave color="#fff">
                {textos.Business.PalavraChave}
              </PalavraChave>
              {textos.Business.Texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {boards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start py-3 px-4 text-left 
                text-light_color w-full border-2 border-primary_color rounded-[20px] 
                shadow-bx-1 bg-transparent"
              >
                <img src={item.icon} alt="" className="w-[50px] h-[50px]" />
                <p className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-3">
                  {item.title}
                </p>
                <ul className="flex flex-col gap-2 text-light_color">
                  {item.content.map((itens, index) => (
                    <li
                      className="font-gilroyLight text-base leading-[1.2rem]"
                      key={index}
                    >
                      &#x2714; {itens}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
}
