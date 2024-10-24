import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import HeaderApp from "../components/Header";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const notFoundText = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "30px",
  };

  return (
    <>
      <HeaderApp />
      <Main>
        <div style={{ margin: "auto" }}>
          <h1 style={notFoundText}>Página não encontrada</h1>
          <Botoes onClick={() => navigate(-1)} className="botao">
            Voltar
          </Botoes>
        </div>
      </Main>
      <FooterApp />
    </>
  );
}
