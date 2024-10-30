import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FramerMotion from "../components/FramerMotion";
import fundo from "../assets/image/BusinessIntelligence.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";

import { GiPodiumWinner } from "react-icons/gi"
import gifGrafico from "../assets/gifs/grafico.gif"
import gifDocumento from "../assets/gifs/documento.gif"
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
  ]

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
          <div style={{ display: "flex", gap: 2 }}>
            <div className="container-topicos_rh" >
              <div className="element-topicos_rh">
                <img
                  src={gifGrafico}
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
            <div className="container-topicos_rh" >
              <div className="element-topicos_rh">
                <img
                  src={gifGrafico}
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
          </div>
          <div style={{ display: "flex", gap: 2 }}>
            <div className="container-topicos_rh" >
              <div className="element-topicos_rh">
                <img
                  src={gifGrafico}
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
            <div className="container-topicos_rh" >
              <div className="element-topicos_rh">
                <img
                  src={gifGrafico}
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
          </div>
          <ButtonLinks options={options} style={{ marginBottom: "50px" }} />
        </FramerMotion>
      </HeroApp>
      <FooterApp></FooterApp>
    </>
  );
};
export default Dashboard;
