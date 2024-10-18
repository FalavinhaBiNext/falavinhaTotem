import { useNavigate } from "react-router-dom";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import fundo from "../assets/image/TestePowerApps.png";
import FooterApp from "../components/Footer";
import Botoes from "../components/Botoes";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="fundoGeral" style={{ backgroundImage: `url(${fundo})` }}>
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>
      <HeroApp>
        <h1 className="title">FAÇA UMA SIMULAÇÃO</h1>
        <div className="hero">
          <iframe
            title="PowerApps RH"
            width="100%"
            height="100vh"
            src="https://apps.powerapps.com/play/e/default-96f51b0a-3040-483f-8b76-11848bfde4fb/a/e2a0899a-abcf-4b23-8b76-199927f08916?tenantId=96f51b0a-3040-483f-8b76-11848bfde4fb&sourcetime=1729165253405"
            frameBorder="1"
            allowFullScreen="true"
          ></iframe>
        </div>
      </HeroApp>
      <FooterApp>
        <a href="https://app.powerbi.com/view?r=eyJrIjoiMGM5Y2VhYTUtMTdhMS00MmM0LWFmOTMtYTY4Njc2ZjMwYzQwIiwidCI6Ijk2ZjUxYjBhLTMwNDAtNDgzZi04Yjc2LTExODQ4YmZkZTRmYiJ9">
          App Dashboard
        </a>
        <a href="https://www.appsheet.com/start/2abbb337-b46e-47c2-b19a-43f65ac1f180">
          appsheet
        </a>
      </FooterApp>
    </div>
  );
}
export default Dashboard;
