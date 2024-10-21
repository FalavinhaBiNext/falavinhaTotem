import { useContext } from "react";
import HeaderApp from "../components/Header";
import Botoes from "../components/Botoes";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HeroApp from "../components/Hero";
import { GlobalContext } from "../context/GlobalContextProvider";
import FramerMotion from "../components/FramerMotion";
import imagem from "../assets/image/AssessoriaTributaria.png";

export default function ResultadoCigam() {
  const { moneyConverter } = useContext(GlobalContext);

  const navigate = useNavigate();

  const list = {
    display: "flex",
    flexFlow: "column",
    gap: "15px",
    marginBottom: "60px",
  };

  const listItem = {
    width: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    border: "2px solid #582b6f",
    borderRadius: "10px",
    minHeight: "120px",
    color: "#fff",
  };

  const mockdata = [
    {
      value: 5,
      title: "Usuários",
    },
    {
      value: moneyConverter(3000000),
      title: "Salário Médio",
    },
    {
      value: moneyConverter(1500000),
      title: "Folha de pagamento",
    },
    {
      value: moneyConverter(1875),
      title: "Salario/Hora/Colaborador",
    },
    {
      value: 160,
      title: "Ganho de produtividade em horas/mês",
    },
    {
      value: moneyConverter(300000),
      title: "Ganho de produtividade mensal",
    },
    {
      value: moneyConverter(3600000),
      title: "Ganho de produtividade financeira/ano",
    },
    {
      value: 4 / 100,
      title: "Retorno do investimento/anos/meses",
    },
  ];

  return (
    <>
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <h1 className="title">Resultado CIGAM</h1>

          <div>
            <ul style={list}>
              {mockdata.map((item, index) => (
                <li key={index} style={listItem}>
                  <h2>{item.title}</h2>
                  <h3>{item.value}</h3>
                </li>
              ))}
            </ul>
          </div>
        </FramerMotion>
      </HeroApp>
    </>
  );
}
