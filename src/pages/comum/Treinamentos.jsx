import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/Treinamento.png";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import routes from "../../routes";
// Import gifs
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifComputer from "../../assets/gifs/computer.gif";
import gifVideo from "../../assets/gifs/video.gif";
import gifEngajamento from "../../assets/gifs/engajamento.gif";

const Treinamentos = () => {
  const options = [{ name: "CONHEÇA NOSSOS CURSOS", route: routes.cursos }];

  const data = {
    titulo: "TREINAMENTOS",
    subtitulo: "NÚCLEO DE EDUCAÇÃO CORPORATIVA GRUPO FALAVINHA NEXT",
    texto:
      "O grupo Falavinha Next oferece treinamentos empresariais focados em capacitar equipes e desenvolver habilidades estratégicas, visando aumentar a eficiência e aprimorar processos dentro das empresas. Com uma abordagem prática e adaptada às necessidades do mercado, nossos treinamentos cobrem áreas essenciais para o crescimento sustentável e o aprimoramento profissional.",
  };

  const topicos = [
    {
      titulo: "PALESTRAS",
      texto:
        "Palestras empresariais focadas em desenvolvimento profissional e melhoria contínua.",
      icone: gifComunicacao,
    },
    {
      titulo: "TREINAMENTOS EMPRESARIAS",
      texto:
        "Treinamentos empresariais personalizados para capacitar equipes e impulsionar resultados.",
      icone: gifVideo,
    },
    {
      titulo: "CURSOS ONLINES E PRESENCIAIS",
      texto:
        "Cursos online e presenciais que combinam flexibilidade e imersão, garantindo aprendizado de alta qualidade adaptado às necessidades de cada profissional e empresa.",
      icone: gifComputer,
    },
    {
      titulo: "MENTORIAS PROFISSIONAIS",
      texto:
        "Mentorias profissionais focadas no desenvolvimento de lideranças e no aprimoramento de habilidades estratégicas, proporcionando acompanhamento personalizado para o crescimento de cada profissional.",
      icone: gifEngajamento,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        gap: "20px",
        padding: "20px",
        height: "100vh",
      }}
    >
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">{data.titulo}</h1>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <div>
            <h2 className="subtitulo">{data.subtitulo}</h2>
          </div>
          <div className="textoMain">
            <p className="paragraph">{data.texto}</p>
          </div>
          <div className="consultoria-rh">
            {topicos.map((item, index) => (
              <div key={index} className="consultoria-rh__item">
                <img src={item.icone} className="icon-topicos_rh" alt="" />
                <p>{item.titulo}</p>
                {item.texto}
              </div>
            ))}
          </div>
          <div style={{ padding: 20 }}>
            <ButtonLinks options={options} />
          </div>
        </FramerMotion>
      </HeroApp>
    </div>
  );
};

export default Treinamentos;
