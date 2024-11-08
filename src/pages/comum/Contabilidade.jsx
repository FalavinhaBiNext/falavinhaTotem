import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoContabilidade.png";
import FooterApp from "../../components/Footer";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import ButtonLinks from "../../components/UI/ButtonLinks";
import FramerMotion from "../../components/UI/FramerMotion";
// Import dos Gifs
import gifTarget from "../../assets/gifs/target.gif";
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifCheck from "../../assets/gifs/check.gif";
import gifComputador from "../../assets/gifs/computer.gif";

function Contabilidade() {
  // links dos botões
  const options = [
    { name: "DASHBOARD BI CONTABILIDADE", route: routes.dashboardGestor },
  ];

  const topicos = [
    {
      titulo: "PLANEJAMENTO CONTÁBIL",
      texto: `Inclui a elaboração de contas e relatórios (BI), acompanhamento e envio periódicos de balancetes, 
      além de relatórios comparaticos de evolução financeira e outros 
      indicadores essenciais para uma visão detalhada e estratégica da contabilidade.`,
      icone: gifTarget,
    },
    {
      titulo: "CONTABILIDADE CONSULTIVA",
      texto: `com foco nas necessidades únicas e exclusivas das empresas prezando por um atendimento personalizado, 
      por meio do uso de tecnologia de ponta e inovação constante, conseguimos apresentar soluções estratégicas 
      para auxiliar na tomada de decisão de cada modelo de negócio das empresas.`,
      icone: gifComunicacao,
    },
    {
      titulo: "CONTABILIDADE GERENCIAL",
      texto: `Proporciona uma visão detalhada e atualizada da situação financeira da empresa, permitindo uma melhor tomada de decisões. 
      Com informações precisas sobre receitas, despesas, lucros e custos, os gestores podem identificar áreas de oportunidade, 
      avaliar o desempenho de diferentes departamentos, projetos, segmentos e produtos, podendo assim direcionar recursos de 
      forma mais eficiente.`,
      icone: gifCheck,
    },
    {
      titulo: "TECNOLOGIA E SISTEMAS",
      texto: `Utilizamos o que há de melhor em tecnologia para o seu atendimento, contamos com sistema de comunicação e 
      solicitações via web, envio automático de guias e relatórios e um dos melhores sistemas contábeis do mercado, 
      tudo isso para garantir as informações repassadas e trazer mais praticidade para o seu dia a dia.`,
      icone: gifComputador,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{textos.contabilidade.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">{textos.contabilidade.Subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">{textos.contabilidade.Texto}</p>
          </div>
          <div className="consultoria-rh">
            {topicos.map((item, index) => (
              <div key={index} className="consultoria-rh__item">
                <img src={item.icone} alt="" className="icon-topicos_rh" />
                <p>{item.titulo}</p>
                {item.texto}
              </div>
            ))}
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>
      <FooterApp>
        {/* 
        // QR CODE QUE IRÁ DIRECIONAR PARA O WHATSAPP DA FALAVINHA NEXT
        <div style={{ display: 'flex', flex: 1, justifyContent: 'end', margin: '40px' }}>
          <a href='#'>
            <img
              style={{ height: 100, width: 100 }}
              src='https://cdn2.me-qr.com/qr/133728716.png?v=1730899955' alt='Create qr code for free' />
          </a>
        </div> */}
      </FooterApp>
    </>
  );
}
export default Contabilidade;
