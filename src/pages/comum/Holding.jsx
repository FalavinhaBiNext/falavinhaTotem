import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/FundoHolding.png";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import routes from "../../routes";
import textos from "../../components/UI/textos";
import MainPageTitle from "../../components/UI/MainPageTitle";
import FooterApp from "../../components/Footer";
// Import dos Gifs
import gifHome from "../../assets/gifs/home.gif";
import gifTeam from "../../assets/gifs/team.gif";
import gifCompany from "../../assets/gifs/company.gif";

const Holding = () => {
  const options = [
    { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioHolding },
  ];

  const topicos = [
    {
      titulo: "PATRIMONIAL",
      texto:
        "O objetivo da holding patrimonial é facilitar a gestão e obter benefícios fiscais e sucessórios. Logo, a gestão dos bens próprios ou holding patrimonial irá facilitar que famílias com muitos bens gerenciem melhor o seu patrimônio, de forma centralizada.",
      icone: gifHome,
    },
    {
      titulo: "PARTICIPAÇÃO",
      texto:
        "O objetivo da holding administrativa é incrementar a eficiência no controle de uma ou mais empresas. Desta forma, o objetivo principal desse tipo de companhia é atuar no processo de decisões das empresas administradas.",
      icone: gifCompany,
    },
    {
      titulo: "FAMILIAR",
      texto:
        "O objetivo da holding familiar é proteger os ativos familiares já conquistados contra dívidas futuras e demais hipóteses de perda de patrimônio, reduzir a carga tributária na sucessão e planejar as regras de gestão corporativa dos sucessores.",
      icone: gifTeam,
    },
  ];

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <MainPageTitle title="HOLDING" />
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          <section className="mb-10">
            <h2 className="pb-3 text-xl leading-6 text-center text-light_color font-gilroyLight">
              Transforme sua gestão patrimonial com a segurança e eficiência de
              uma holding — proteção, otimização e legado para o seu futuro.
            </h2>
            <p className="text-base italic text-light_color font-gilroyThin">
              {textos.Holding.Texto}
            </p>
          </section>

          <div className="grid gap-5 mb-10 grid-cols-standard2">
            {topicos.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-1 min-h-[150px] py-3 px-4 text-left
                 w-full border-2 border-primary_color rounded-[20px] shadow-bx-1 bg-transparent text-light_color"
              >
                <img
                  src={item.icone}
                  alt="Icone"
                  className="w-[50px] h-[50px]"
                />
                <h3 className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem] uppercase pb-2">
                  {item.titulo}
                </h3>
                <p className="font-gilroyLight text-base leading-[1.2rem]">
                  {" "}
                  {item.texto}
                </p>
              </div>
            ))}
          </div>

          <ButtonLinks options={options} />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
};

export default Holding;
