import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/UI/FramerMotion";
import fundo from "../../assets/image/FundoBI.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
//Import dos gifs
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifMoeda from "../../assets/gifs/moedas.gif";
import gifCoins from "../../assets/gifs/coins1.gif";
import gifAvatar from "../../assets/gifs/avatar.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function DashboardBI() {
  //const navigate = useNavigate();
  // const [lastInteraction, setLastInteraction] = useState(Date.now());

  // useEffect(() => {
  //   // Tempo de inatividade (exemplo: 5 minutos = 300000 ms)
  //   const timeoutDuration = 300000;
  //   const handleActivity = () => {
  //     setLastInteraction(Date.now()); // Atualiza o tempo da última interação
  //   };
  //   const interval = setInterval(() => {
  //     if (Date.now() - lastInteraction > timeoutDuration) {
  //       navigate("/"); // Redireciona para a página inicial
  //     }
  //   }, 1000); // Verifica a cada 1 segundo

  //   // Ouve eventos de interação com a página
  //   window.addEventListener("mousemove", handleActivity);
  //   window.addEventListener("keypress", handleActivity);

  //   // Limpa os listeners e o intervalo ao desmontar o componente
  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener("mousemove", handleActivity);
  //     window.removeEventListener("keypress", handleActivity);
  //   };
  // }, [lastInteraction, navigate]);

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
      title: "RH",
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
          <section className="textoMain">
            <h2 className="pb-2 text-xl text-center text-light_color">
              {textos.Business.Subtitulo}!
            </h2>
            <p className="text-light_color text-base leading-[1.2rem] italic">
              O{" "}
              <PalavraChave color="#fff">
                {textos.Business.PalavraChave}
              </PalavraChave>
              {textos.Business.Texto}
            </p>
          </section>

          <div className="grid gap-5 mt-8 mb-10 grid-cols-standard3">
            {boards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start py-3 px-4 text-left 
                text-light_color w-full border-2 border-[#007175] rounded-[20px] 
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
          <ButtonLinks options={options} style={{ marginBottom: "50px" }} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
}
