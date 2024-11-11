import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaRH.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
import gifGrafico from "../../assets/gifs/grafico.gif";
import gifDocumento from "../../assets/gifs/documento.gif";
import gifWinner from "../../assets/gifs/winner.gif";
import gitComputador from "../../assets/gifs/computer.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

function ConsultoriaRH() {
  const topicosRH = [
    {
      icone: gifGrafico,
      texto: "Ferramentas de Gestão",
      conteudo: [
        "Holerite Online com Assinatura Digital(epays)",
        "Ponto Digital(epays)",
        "ERP",
        "Indicadores",
      ],
    },
    {
      icone: gifDocumento,
      texto: "Folha de Pagamento",
      conteudo: [
        "BPO",
        "Auditoria da Folha",
        "Relações Sindicais e Trabalhistas",
        "Treinamento in Company",
      ],
    },
    {
      icone: gitComputador,
      texto: "Outsourcing",
      conteudo: [
        "Departamento Pessoal",
        "Recursos Humanos",
        "Gestão de Pessoas",
        "Folha de Pagamento",
      ],
    },
    {
      icone: gifWinner,
      texto: "Desenvolvimento Organizacional",
      conteudo: [
        "Psicologia Organizacional",
        "Treinamento de Legislação Trabalhista e Previdenciária",
        "Letramento em Diversidade",
      ],
    },
  ];

  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONSULTORIA RH", route: routes.dashboardRH },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioRH },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title={textos.consultoriaRh.Titulo} />
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
          <div className="consultoria-rh">
            {topicosRH.map(({ icone, texto, conteudo }, index) => (
              <div className="consultoria-rh__item" key={index}>
                <img src={icone} alt="" className="icon-topicos_rh" />
                <p>{texto}</p>
                <ul>
                  {conteudo.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
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
