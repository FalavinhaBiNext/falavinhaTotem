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
    { name: "DASHBOARD BI TRIBUTÁRIO", route: routes.dashboardFinanceiro },
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioTributario },
  ];

  const topicos = [
    {titulo: "ANÁLISE DAS CARACTERÍSTICAS DO NEGÓCIO", texto: "Compreensão detalhada do setor, porte e especificidades da empresa", icone: gifLupa},
    {titulo: "ESTUDO DO DRE E BALANÇO CONTÁBIL", texto: "Avaliação minuciosa dos Demonstrativos de Resultados do Exercício (DRE) e do Balanço Patrimonial para identificar oportunidades de otimização fiscal.", icone: tribut},
    {titulo: "DEFINIÇÃO DE ESTRATÉGIAS FISCAIS", texto: "Elaboração de estratégias para reduzir as obrigações fiscais de forma eficiente e segura", icone: gifTarget},
    {titulo: "LEVANTAMENTO E APLICAÇÃO DE BENEFÍCIOS FISCAIS", texto: "Identificação e utilização de incentivos fiscais disponíveis para a empresa.", icone: gitEscada},
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
