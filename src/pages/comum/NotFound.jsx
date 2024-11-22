import MainButton from "../../components/UI/MainButton";
import FooterApp from "../../components/Footer";
import MainHeader from "../../components/Header";
import Main from "../../components/Main";
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
      <MainHeader />
      <Main>
        <div style={{ margin: "auto" }}>
          <h1 style={notFoundText}>Página não encontrada</h1>
          <MainButton
            onClick={() => navigate(-1)}
            className="botao"
            style={{ width: "max-content" }}
          >
            Voltar
          </MainButton>
        </div>
      </Main>

      <FooterApp />
    </>
  );
}
