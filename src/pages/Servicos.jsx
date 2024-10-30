import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import imagem from "../assets/image/Servicos2.png";
import routes from "../routes";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import textos from "../components/textos";
import { RiTeamFill } from "react-icons/ri";
import { BsFillSuitcaseLgFill, BsRocketTakeoff } from "react-icons/bs";
import { GoGear } from "react-icons/go";

function SecondPage() {
  // links dos botões
  const options = [
    { name: "DASHBOARDS BI", route: routes.bi },
    { name: "TRIBUTÁRIO", route: routes.tributario },
    { name: "CONTABILIDADE", route: routes.contabilidade },
    { name: "CONSULTORIA RH", route: routes.consultoriRh },
    { name: "CIGAM", route: routes.cigam },
    {
      name: "CONSULTORIA EMPRESARIAL",
      route: routes.consultoriaEmpresarial,
    },
    { name: "HOLDING", route: routes.holding },
    { name: "TREINAMENTOS", route: routes.treinamentos },
  ];

  // DADOS DOS TÓPICOS
  const nossaHistoria = [
    {
      icon: <BsFillSuitcaseLgFill className="icon-topicos_servicos" />,
      texto: "+ 47 ANOS DE HISTÓRIA",
    },
    {
      icon: <BsRocketTakeoff className="icon-topicos_servicos" />,
      texto: "+ 15.000 CLIENTES ATENDIDOS",
    },
    {
      icon: <RiTeamFill className="icon-topicos_servicos" />,
      texto: "+ 180 COLABORADORES",
    },
    {
      icon: <GoGear className="icon-topicos_servicos" />,
      texto: "+ 15 SERVIÇOS",
    },
  ];

  return (
    <>
      <HeaderApp>
        <h1 className="title">NOSSAS SOLUÇÕES</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <span className="textoMain">{textos.Servicos.Texto}</span>
          <ul className="container-topicos">
            {nossaHistoria.map((item, index) => (
              <li className="container-topicos_servicos" key={index}>
                {item.icon}
                <p>{item.texto}</p>
              </li>
            ))}
          </ul>

          <ButtonLinks options={options} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://falavinhanext.com.br/"
                border="0"
                style={{ cursor: "pointer", display: "block" }}
              >
                <img
                  style={{ height: 80, width: 80 }}
                  src="https://cdn.me-qr.com/qr/130261488.png?v=1729000579"
                  alt="Site Falavinha"
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.instagram.com/"
                border="0"
                style={{ cursor: "pointer", display: "block" }}
              >
                <img
                  style={{ height: 80, width: 80 }}
                  src="https://cdn.me-qr.com/qr/130259779.png?v=1728999910"
                  alt="Instagram Falavinha"
                />
              </a>
            </div>
          </div>
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

export default SecondPage;
