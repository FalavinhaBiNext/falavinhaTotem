import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaRHTotem.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
import {FaRegChartBar} from "react-icons/fa"
import { GiPodiumWinner } from "react-icons/gi"
import { GoGear, GoAlert } from "react-icons/go"
import {RiUserSearchFill} from "react-icons/ri"

function ConsultoriaRH() {
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
          <div style={{marginTop: "20px"}}>
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
          <div style={{ display: "flex", gap: 2 }}>
            <div className="container-topicos_servicos" >
              <div className="element-topicos_rh">
                <FaRegChartBar className="icon-topicos_rh" />
                <p>FERRAMENTAS DE GESTÃO</p>
                <ul>
                  <li>Holerite Online com Assinatura Digital(epays)</li>
                  <li>Ponto Digital(epays)</li>
                  <li>ERP</li>
                  <li>Indicadores</li>
                </ul>
              </div>
            </div>
            <div className="container-topicos_servicos">
              <div className="element-topicos_rh">
                <GoAlert className="icon-topicos_rh" />
                <p>FOLHA DE PAGAMENTO</p>
                <ul>
                  <li>BPO</li>
                  <li>Auditoria da Folha</li>
                  <li>Relações Sindicais e Trabalhistas</li>
                  <li>Treinamento in Company</li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2}}>
            <div className="container-topicos_servicos">
              <div className="element-topicos_rh">
                <GiPodiumWinner className="icon-topicos_rh" />
                <p>OUTSOURCING</p>
                <ul>
                  <li>Departamento Pessoal</li>
                  <li>Recursos Humanos</li>
                  <li>Gestão de Pessoas</li>
                  <li>Folha de Pagamento</li>
                </ul>
              </div>
            </div>
            <div className="container-topicos_servicos">
              <div className="element-topicos_rh">
                <RiUserSearchFill className="icon-topicos_rh" />
                <p>DESENVOLVIMENTO ORGANIZACIONAL</p>
                <ul>
                  <li>Psicologia Organizacional</li>
                  <li>Treinamento de Legislação Trabalhista e Previdenciária</li>
                  <li>Treinamento Técnicos Relacionados a Processos Trabalhistas</li>
                  <li>Letramento em Diversidade</li>
                </ul>
              </div>
            </div>
          </div>
          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
export default ConsultoriaRH;
