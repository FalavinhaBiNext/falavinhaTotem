import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import imagem from "../assets/image/Servicos.png";
import routes from "../routes";
import FramerMotion from "../components/FramerMotion";
import ButtonLinks from "../components/ButtonLinks";

function SecondPage() {
  const navigate = useNavigate();

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
  ];

  return (
    <>
      <HeaderApp>
        <Botoes onClick={() => navigate(routes.home)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <h1 className="title">NOSSAS SOLUÇÕES</h1>
          {/* <span className='textoMain'>A Falavinha Next oferece uma ampla gama de serviços para otimizar a gestão de sua empresa. Entre eles estão: soluções contábeis, gestão financeira, consultoria tributária, consultoria em RH, além da criação de dashboards personalizados de Business Intelligence (BI). Somos parceiros da Cigam, proporcionando ainda mais integração e eficiência para o seu negócio.</span> */}
          <ButtonLinks options={options} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
              marginTop: "auto",
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
