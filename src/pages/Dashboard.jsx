import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FramerMotion from "../components/FramerMotion";
import fundo from "../assets/image/FundoBI.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
//Import dos gifs
import gifComunicacao from "../assets/gifs/comunicacao.gif";
import gifMoeda from "../assets/gifs/moedas.gif"
import gifCoins from "../assets/gifs/coins1.gif";
import gifAvatar from "../assets/gifs/avatar.gif";
import gifWinner from "../assets/gifs/winner.gif"

const Dashboard = () => {
  const navigate = useNavigate();
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    // Tempo de inatividade (exemplo: 5 minutos = 300000 ms)
    const timeoutDuration = 300000;
    const handleActivity = () => {
      setLastInteraction(Date.now()); // Atualiza o tempo da última interação
    };
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction > timeoutDuration) {
        navigate("/"); // Redireciona para a página inicial
      }
    }, 1000); // Verifica a cada 1 segundo

    // Ouve eventos de interação com a página
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);

    // Limpa os listeners e o intervalo ao desmontar o componente
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
    };
  }, [lastInteraction, navigate]);

  // links dos botões
  const options = [
    { name: "BI GESTOR 2.0", route: routes.dashboardGestor },
    { name: "BI FINANCEIRO", route: routes.dashboardFinanceiro },
    { name: "BI GESTÃO DE ESTOQUE", route: routes.dashboardGestaoEstoque },
    { name: "BI RECURSOS HUMANOS", route: routes.dashboardRH },
    { name: "BI TRIBUTÁRIO", route: routes.powerapps }
  ];

  //Dados Tópicos
  const financeiro = [
    'Indicadoresa Financeiros',
    'Contas a Pagar e a Receber',
    'Fluxo de Caixa',
    'Análise Vertical e Horizontal',
    'PMP x PMR'
  ];

  const contabil = [
    'EBITDA', 
    'Indice de Liquidez',
    'Indicador de Resultado',
    'Indicadores Patrimoniais',
    'Análise Vertical e Horizontal'
  ];

  const rh = [
    'Turnover',
    'Headcount',
    'Custo Folha por Departamento',
    'Cálculo de Férias',
    'Controle de Banco de Horas'
  ];

  const comercial = [
    'Ticket Médio',
    'Taxa de Conversão',
    'Vendas por Cliente',
    'Venda por Filial/Região/Cidade',
    'Desempenho por Vendedor'
  ];

  return (
    <>
      <HeaderApp>
        <h1 className="title">{textos.Business.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">{textos.Business.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">
              O{" "}
              <PalavraChave color="#fff">
                {textos.Business.PalavraChave}
              </PalavraChave>
              {textos.Business.Texto}
            </p>
          </div>
          <div className="container-topicos">
            <div className="consultoria-rh" >
              <div className="consultoria-rh__item">
                <img
                  src={gifCoins}
                  alt=""
                  className="icon-topicos_rh"
                />
                <p>
                  FINANCEIRO
                </p>
                <ul>
                  {financeiro.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="consultoria-rh" >
              <div className="consultoria-rh__item">
                <img
                  src={gifMoeda}
                  alt=""
                  className="icon-topicos_rh"
                />
                <p>
                  CONTÁBIL
                </p>
                <ul>
                  {contabil.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="container-topicos">
            <div className="consultoria-rh" >
              <div className="consultoria-rh__item">
                <img
                  src={gifAvatar}
                  alt=""
                  className="icon-topicos_rh"
                />
                <p>
                  RH
                </p>
                <ul>
                  {rh.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="consultoria-rh" >
              <div className="consultoria-rh__item">
                <img
                  src={gifComunicacao}
                  alt=""
                  className="icon-topicos_rh"
                />
                <p>
                  COMERCIAL
                </p>
                <ul>
                  {comercial.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ButtonLinks options={options} style={{ marginBottom: "50px" }} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
};
export default Dashboard;
