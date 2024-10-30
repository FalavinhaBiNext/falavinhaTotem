import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaRHTotem.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
import { FaRegChartBar, FaFileInvoiceDollar } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { RiUserSearchFill } from "react-icons/ri";

function ConsultoriaRH() {
  const topicosRH = [
    {
      icon: <FaRegChartBar className="icon-topicos_rh" />,
      texto: "FERRAMENTAS DE GESTÃO",
    },
    {
      icon: <FaFileInvoiceDollar className="icon-topicos_rh" />,
      texto: "FOLHA DE PAGAMENTO",
    },
    {
      icon: <GiPodiumWinner className="icon-topicos_rh" />,
      texto: "OUTSOURCING",
    },
    {
      icon: <RiUserSearchFill className="icon-topicos_rh" />,
      texto: "DESENVOLVIMENTO ORGANIZACIONAL",
    },
  ];

  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONSULTORIA RH", route: routes.dashboardFinanceiro },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioRH },
  ];
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
              <PalavraChave color="#582B6F">
                {textos.consultoriaRh.PalavraChave}
              </PalavraChave>
              {textos.consultoriaRh.Texto}
            </p>
          </div>

          <ul className="consultoria-rh">
            {topicosRH.map((item, index) => (
              <li className="consultoria-rh__item" key={index}>
                {item.icon}
                <p>{item.texto}</p>
                <ul>
                  <li>Holerite Online com Assinatura Digital(epays)</li>
                  <li>Ponto Digital(epays)</li>
                  <li>ERP</li>
                  <li>Indicadores</li>
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
