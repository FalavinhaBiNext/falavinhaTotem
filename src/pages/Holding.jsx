import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import fundo from "../assets/image/FundoHolding.png";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import routes from "../routes";
import textos from "../components/textos";
// Import dos Gifs
import gifHome from "../assets/gifs/home.gif";
import gifTeam from "../assets/gifs/team.gif";
import gifCompany from "../assets/gifs/company.gif";


const Holding = () => {

    const options = [
        { name: "FAÇA UMA SIMULAÇÃO", route: routes.questionarioHolding },
    ];

    const topicos = [
        { titulo: "PATRIMONIAL", texto: "O objetivo da holding patrimonial é facilitar a gestão e obter benefícios fiscais e sucessórios. Logo, a gestão dos bens próprios ou holding patrimonial irá facilitar que famílias com muitos bens gerenciem melhor o seu patrimônio, de forma centralizada.", icone: gifHome },
        { titulo: "PARTICIPAÇÃO", texto: "O objetivo da holding administrativa é incrementar a eficiência no controle de uma ou mais empresas. Desta forma, o objetivo principal desse tipo de companhia é atuar no processo de decisões das empresas administradas.", icone: gifCompany },
        { titulo: "FAMILIAR", texto: "O objetivo da holding familiar é proteger os ativos familiares já conquistados contra dívidas futuras e demais hipóteses de perda de patrimônio, reduzir a carga tributária na sucessão e planejar as regras de gestão corporativa dos sucessores.", icone: gifTeam },
    ];


    return (
        <>
            <HeaderApp redirect={"/servicos"}>
                <h1 className="title">HOLDING</h1>
            </HeaderApp>
            <HeroApp fundo={fundo}>
                <FramerMotion>
                    <div>
                        <h2 className="subtitulo">Subtitulo Holding</h2>
                    </div>
                    <div className="textoMain">
                        <p className="paragraph">{textos.Holding.Texto}</p>
                    </div>
                    {topicos.map((item, index) => (
                        <div className="consultoria-rh">
                            <div key={index} className="consultoria-rh__item">
                                <img src={item.icone} alt="" className="icon-topicos_rh" />
                                <p>{item.titulo}</p>
                                {item.texto}
                            </div>
                        </div>
                    ))}

                    <ButtonLinks options={options} />
                </FramerMotion>

            </HeroApp>
        </>
    );
};

export default Holding;