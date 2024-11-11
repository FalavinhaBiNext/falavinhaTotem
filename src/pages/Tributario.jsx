import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/FundoTributario.png";

import FooterApp from "../components/Footer";
import routes from "../routes";
import textos from "../components/textos";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import PalavraChave from "../components/PalavraChave";
// Import dos Gifs
import gifLupa from "../assets/gifs/lupa.gif";
import tribut from "../assets/gifs/tribut.gif";
import gifTarget from "../assets/gifs/target.gif";
import gitEscada from "../assets/gifs/escada.gif";

function Tributario() {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI TRIBUTÁRIO", route: routes.dashboardTributario },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioTributario },
  ];

  const topicos = [
    {titulo: "ANÁLISE DE PROCEDIMENTOS FISCAIS", texto: "Nossa Equipe de especialistas em contabilidade e legislação fiscal avalia os procedimentos existentes, identifica possíveis melhorias e oferece soluções estratégicas para garantir a conformidade com as leis tributárias locais e maximizar a eficiência fiscal.", icone: gifLupa},
    {titulo: "REVISÃO FISCAL CURITIBA", texto: "Tem a finalidade de encontrar oportunidades tributárias, seja elas por imposto pago a maior, por créditos não utilizados. Realiza todo o procedimento para o levantamento de crédito e compensação dos impostos.", icone: tribut},
    {titulo: "PLANEJAMENTO TRIBUTÁRIO", texto: "O planejamento tributário envolve a análise do melhor regime tributário a ser aplicado para o recolhimento dos impostos durante todo o ano-calendário.", icone: gifTarget},
    {titulo: "CONSULTORIA TRIBUTÁRIA", texto: "Identifica altenativas tributárias para diminuir o impacto dos tributos na Empresa. Assessora o cliente para diminuir o impacto dos tributos na sua empresa.", icone: gitEscada},
  ]

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.tributario.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">{textos.tributario.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">
              A{" "}
              <PalavraChave color="#C48322">
                {textos.tributario.PalavraChave}
              </PalavraChave>
              {textos.tributario.Texto}
            </p>
          </div>
          <div className="consultoria-rh">
            {topicos.map((item, index) => (
                <div key={index} className="consultoria-rh__item">
                  <img src={item.icone} alt="" className="icon-topicos_rh"/>
                  <p>{item.titulo}</p>
                  {item.texto}
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
export default Tributario;
