import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaRH.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
import { GiPodiumWinner } from "react-icons/gi"
import gifGrafico from "../assets/gifs/grafico.gif"
import gifDocumento from "../assets/gifs/documento.gif"
import gifWinner from "../assets/gifs/winner.gif"


function ConsultoriaRH() {
  // const topicosRH = [
  //   {
  //     icon: <FaRegChartBar className="icon-topicos_rh" />,
  //     texto: "FERRAMENTAS DE GESTÃO",
  //   },
  //   {
  //     icon: <FaFileInvoiceDollar className="icon-topicos_rh" />,
  //     texto: "FOLHA DE PAGAMENTO",
  //   },
  //   {
  //     icon: <GiPodiumWinner className="icon-topicos_rh" />,
  //     texto: "OUTSOURCING",
  //   },
  //   {
  //     icon: <RiUserSearchFill className="icon-topicos_rh" />,
  //     texto: "DESENVOLVIMENTO ORGANIZACIONAL",
  //   },
  // ];

  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONSULTORIA RH", route: routes.dashboardFinanceiro },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioRH },
  ];

  const ferramentas = [
    'Holerite Online com Assinatura Digital(epays)',
    'Ponto Digital(epays)',
    'ERP',
    'Indicadores',
  ]

  const folha = [
    'BPO',
    'Auditoria da Folha',
    'Relações Sindicais e Trabalhistas',
    'Treinamento in Company',
  ]

  const outsourcing = [
    'Departamento Pessoal',
    'Recursos Humanos',
    'Gestão de Pessoas',
    'Folha de Pagamento',
  ]

  const desenvolvimento = [
    'Psicologia Organizacional',
    'Treinamento de Legislação Trabalhista e Previdenciária',
    'Letramento em Diversidade',
  ]

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.consultoriaRh.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div style={{ marginTop: "20px" }}>
            <h2 className="subtitulo">{textos.consultoriaRh.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">
              A{" "}
              <PalavraChave color="#fff">
                {textos.consultoriaRh.PalavraChave}
              </PalavraChave>
              {textos.consultoriaRh.Texto}
            </p>
          </div>
          <div className="container-topicos">
            <div className="consultoria-rh" >
              <div className="consultoria-rh__item">
                <img 
                  src={gifGrafico}
                  alt=""
                  className="icon-topicos_rh"
                />
                <p>
                  FERRAMENTAS DE GESTÃO
                </p>
                <ul>
                  {ferramentas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="consultoria-rh">
              <div className="consultoria-rh__item">
                <img src={gifDocumento} alt="" className="icon-topicos_rh"/>
                <p>FOLHA DE PAGAMENTO</p>
                <ul>
                  {folha.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="container-topicos">
            <div className="consultoria-rh">
              <div className="consultoria-rh__item">
                <GiPodiumWinner className="icon-topicos_rh" />
                <p>OUTSOURCING</p>
                <ul>
                 {outsourcing.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="consultoria-rh">
              <div className="consultoria-rh__item">
                <img src={gifWinner} alt="" className="icon-topicos_rh" />
                <p>DESENVOLVIMENTO ORGANIZACIONAL</p>
                <ul>
                  {desenvolvimento.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ButtonLinks options={options} />
          <br />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
export default ConsultoriaRH;
