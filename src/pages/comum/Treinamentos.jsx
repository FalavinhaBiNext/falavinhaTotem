import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/Treinamento.png";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import routes from "../../routes";
import FooterApp from "../../components/Footer";
// Import gifs
import gifComunicacao from "../../assets/gifs/comunicacao.gif";
import gifComputer from "../../assets/gifs/computer.gif";
import gifVideo from "../../assets/gifs/video.gif";
import gifEngajamento from "../../assets/gifs/engajamento.gif";
import MainPageTitle from "../../components/UI/MainPageTitle";

const Treinamentos = () => {
  const options = [{ name: "CONHEÇA NOSSOS CURSOS", route: routes.cursos }];

  const data = {
    titulo: "TREINAMENTOS",
    subtitulo: "Núcleo de educação corporativa grupo Falavinha Next",
    texto: `O grupo Falavinha Next oferece treinamentos empresariais focados em capacitar 
    equipes e desenvolver habilidades estratégicas, visando aumentar a eficiência e aprimorar 
    processos dentro das empresas. Com uma abordagem prática e adaptada às necessidades do mercado, 
    nossos treinamentos cobrem áreas essenciais para o crescimento sustentável e o aprimoramento profissional.`,
  };

  const topicos = [
    {
      titulo: "PALESTRAS",
      texto: `Palestras empresariais focadas em desenvolvimento profissional e melhoria contínua.`,
      icone: gifComunicacao,
    },
    {
      titulo: "TREINAMENTOS EMPRESARIAS",
      texto: `Treinamentos empresariais personalizados para capacitar equipes e impulsionar resultados.`,
      icone: gifVideo,
    },
    {
      titulo: "CURSOS ONLINES E PRESENCIAIS",
      texto: `Cursos online e presenciais que combinam flexibilidade e imersão, garantindo 
      aprendizado de alta qualidade adaptado às necessidades de cada profissional e empresa.`,
      icone: gifComputer,
    },
    {
      titulo: "MENTORIAS PROFISSIONAIS",
      texto: `Mentorias profissionais focadas no desenvolvimento de lideranças e no aprimoramento de 
      habilidades estratégicas, proporcionando acompanhamento personalizado para o crescimento de cada profissional.`,
      icone: gifEngajamento,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/solucoes"}>
        <MainPageTitle title={data.titulo} />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              {data.subtitulo}
            </h2>
            <p className="text-sm italic sm:text-base text-light_color font-gilroyThin">
              {data.texto}
            </p>
          </section>

          <ul className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[230px] p-6 text-left
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
                <p className="font-gilroyLight text-sm sm:text-base leading-[1.2rem]">
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default Treinamentos;
