import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/ConsultoriaEmpresarial.png";
import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
// Import dos Gifs
import gifTarget from "../assets/gifs/target.gif";
import gifComunicacao from "../assets/gifs/comunicacao.gif";
import gifEditar from "../assets/gifs/editar.gif";
import gifLupa from "../assets/gifs/lupa.gif";

function ConsultoriaEmpresarial() {
  // links dos botões
  const options = [
    {
      name: " DASHBOARD BI CONSULTORIA EMPRESARIAL",
      route: routes.dashboardGestor,
    },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioEmpresarial },
  ];

  const topicos =[
    {titulo: "PLANEJAMENTO", item: ["Levantamento das Informações", "Identificação das Dores do Cliente", "Alinhamento do Projeto", "Definição de Cronograma de Execução."], icone: gifTarget},
    {titulo: "ASSESSORIA EMPRESARIAL", item: ["Auditoria das Demonstrações Financeiras;", "Auditoria Tributária;", "Planejamento Estratégico;", "Monitoramento de P/A por Responsáveis e Setor;", "Construção de um Conselho Estratégico e Administrativo;"], icone: gifComunicacao},
    {titulo: "BPO FINANCEIRO", item: ["Terceirização Operacional do Contas a PAGAR e/ou a RECEBER;", "Conciliação Bancária de Forma Diária;", "Construção e Geração de Report's Financeiros;", "Execução das Atividades no ERP do Cliente;", "Liberação de um ERP em Nuvem;"], icone: gifLupa},
    {titulo: "EXECUÇÃO/MODELAGEM", item: ["Entrega das Atividades Combinadas;", "Excecução das Ações de Melhoria;", "Entrega dos Resultados Alcançados;"], icone: gifEditar},
  ]

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.consultoriaEmpresarial.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">
              {textos.consultoriaEmpresarial.Subtitulo}
            </h2>
          </div>

          <div className="textoMain">
            <p className="paragraph">
              A{" "}
              <PalavraChave color="#fff">
                {textos.consultoriaEmpresarial.palavraChave}
              </PalavraChave>
              {textos.consultoriaEmpresarial.texto}
            </p>
          </div>
          <div className="consultoria-rh">
          {topicos.map((item, index) => (
              <div key={index} className="consultoria-rh__item">
                <img src={item.icone} alt="" className="icon-topicos_rh"/>
                <p>{item.titulo}</p>
                <ul>
                  {item.item.map((itens, index) => (
                    <li key={index}>{itens}</li>
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
