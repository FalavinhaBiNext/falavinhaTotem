import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import PalavraChave from "../../components/UI/PalavraChave";
// Import dos Gifs
import gifTarget from "../../assets/gifs/target.gif";
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifEditar from "../../assets/gifs/editar.gif";
import gifLupa from "../../assets/gifs/lupa.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

function ConsultoriaEmpresarial() {
  // links dos botões
  const options = [
    {
      name: " DASHBOARD BI CONSULTORIA EMPRESARIAL",
      route: routes.dashboardGestor,
    },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioEmpresarial },
  ];

  const topicos = [
    {
      titulo: "PLANEJAMENTO",
      item: [
        "Levantamento das Informações",
        "Identificação das Dores do Cliente",
        "Alinhamento do Projeto",
        "Definição de Cronograma de Execução.",
      ],
      icone: gifTarget,
    },
    {
      titulo: "ASSESSORIA EMPRESARIAL",
      item: [
        "Auditoria das Demonstrações Financeiras;",
        "Auditoria Tributária;",
        "Planejamento Estratégico;",
        "Monitoramento de P/A por Responsáveis e Setor;",
        "Construção de um Conselho Estratégico e Administrativo;",
      ],
      icone: gifComunicacao,
    },
    {
      titulo: "BPO FINANCEIRO",
      item: [
        "Terceirização Operacional do Contas a PAGAR e/ou a RECEBER;",
        "Conciliação Bancária de Forma Diária;",
        "Construção e Geração de Report's Financeiros;",
        "Execução das Atividades no ERP do Cliente;",
        "Liberação de um ERP em Nuvem;",
      ],
      icone: gifLupa,
    },
    {
      titulo: "EXECUÇÃO/MODELAGEM",
      item: [
        "Entrega das Atividades Combinadas;",
        "Excecução das Ações de Melhoria;",
        "Entrega dos Resultados Alcançados;",
      ],
      icone: gifEditar,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title={textos.consultoriaEmpresarial.Titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {textos.consultoriaEmpresarial.Subtitulo}
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              A{" "}
              <PalavraChave color="#fff">
                {textos.consultoriaEmpresarial.palavraChave}
              </PalavraChave>
              {textos.consultoriaEmpresarial.texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[230px] py-3 px-4 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img
                  src={item.icone}
                  alt="Icone"
                  className="w-[40px] h-[40px]"
                />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-2">
                  {item.titulo}
                </h3>
                <ul className="flex flex-col gap-2 text-light_color">
                  {item.item.map((itens, index) => (
                    <li
                      className="font-gilroyLight text-base leading-[1.2rem]"
                      key={index}
                    >
                      {" "}
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

      <FooterApp />
    </>
  );
}
export default ConsultoriaEmpresarial;
