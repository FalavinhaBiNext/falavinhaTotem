import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { BsRocketTakeoff, BsFillSuitcaseLgFill } from "react-icons/bs"
import { GoGear } from "react-icons/go"
import {RiTeamFill} from "react-icons/ri"
import FooterApp from "../components/Footer";
import imagem from "../assets/image/Servicos2.png";
import routes from "../routes";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";
import textos from "../components/textos";

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

  return (
    <>
      <HeaderApp>
        <h1 className="title">{textos.Servicos.Titulo}</h1>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <span className="textoMain">
            {textos.Servicos.Texto}
          </span>
          <div style={{ display: "flex", gap: 2 }}>
            <div className="container-topicos_servicos">
              <div className="element-topicos_servicos">
                <BsFillSuitcaseLgFill className="icon-topicos_servicos" />
                <p>+ 47 ANOS DE HISTÓRIA</p>
              </div>
            </div>
            <div className="container-topicos_servicos">
              <div className="element-topicos_servicos">
                <BsRocketTakeoff className="icon-topicos_servicos" />
                <p>+ 15.000 CLIENTES ATENDIDOS</p>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 2, textAlign: "start" }}>
            <div className="container-topicos_servicos">
              <div className="element-topicos_servicos">
                <RiTeamFill className="icon-topicos_servicos" />
                <p>+ 180 COLABORADORES</p>
              </div>
            </div>
            <div className="container-topicos_servicos">
              <div className="element-topicos_servicos">
                <GoGear className="icon-topicos_servicos" />
                <p>+ 15 SERVIÇOS</p>
              </div>
            </div>
          </div>
          <ButtonLinks options={options} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              marginTop: 50,
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
                  style={{ height: 100, width: 100 }}
                  src="https://cdn.me-qr.com/qr/130261488.png?v=1729000579"
                  alt="Create qr code for free"
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
                  style={{ height: 100, width: 100 }}
                  src="https://cdn.me-qr.com/qr/130259779.png?v=1728999910"
                  alt="Create qr code for free"
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
