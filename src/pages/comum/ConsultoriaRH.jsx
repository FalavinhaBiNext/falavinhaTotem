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
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.consultoriaRh.Subtitulo}
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              A{" "}
              <PalavraChave color="#fff">
                {textos.consultoriaRh.PalavraChave}
              </PalavraChave>
              {textos.consultoriaRh.Texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicosRH.map(({ icone, texto, conteudo }, index) => (
              <div
                className="flex flex-col items-start justify-start gap-1 min-h-[230px] py-3 px-4 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
                key={index}
              >
                <img src={icone} alt="Icone" className="w-[40px] h-[40px]" />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-2">
                  {texto}
                </h3>
                <ul className="flex flex-col gap-2 text-light_color">
                  {conteudo.map((item, index) => (
                    <li
                      className="font-gilroyLight text-base leading-[1.2rem]"
                      key={index}
                    >
                      {" "}
                      &#x2714; {item}
                    </li>
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
