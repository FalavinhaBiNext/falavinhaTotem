import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import Botoes from "../components/Botoes";
import FooterApp from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import FramerMotion from "../components/FramerMotion";
import SurveyEmpresarial from "../components/SurveyEmpresarial";
import imagem from "../assets/image/Servicos.png";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";
import ElementoInput from "../components/ElementoInput";

const perguntas = [
  {
    id: 1,
    text: `Você já está familiarizado com os conceitos de turnover e rotatividade, 
    mas sabe como a análise preditiva pode ajudar a reduzir essas taxas em até 30% em grandes empresas?`,
    options: [
      { value: 4, label: `Sim, usamos análise preditiva com sucesso.` },
      {
        value: 3,
        label: `Estamos implementando, mas ainda não atingimos a meta.`,
      },
      { value: 2, label: `Estamos explorando, mas sem aplicação prática.` },
      { value: 1, label: `Conhecemos o conceito, mas não aplicamos.` },
      { value: 0, label: `Não estamos familiarizados com isso.` },
    ],
  },
  {
    id: 2,
    text: ` Você sabe como a inteligência artificial está sendo usada para otimizar processos de 
    recrutamento e seleção em empresas de ponta atualmente?
    `,
    options: [
      { value: 4, label: `Sim, usamos IA amplamente com bons resultados.` },
      { value: 3, label: `Usamos IA em algumas áreas.` },
      { value: 2, label: `Estamos testando ou começando a implementar.` },
      { value: 1, label: `Conhecemos a IA, mas não a usamos.` },
      { value: 0, label: `Não estamos cientes do uso de IA.` },
    ],
  },
  {
    id: 3,
    text: `Você já aplicou a análise de pessoas (people analytics) 
    para prever a retenção de talentos, ou ainda está usando métodos 
    tradicionais para tomar essas decisões?`,
    options: [
      { value: 4, label: `Sim, usamos people analytics com sucesso.` },
      { value: 3, label: `Estamos começando a usar com alguns resultados.` },
      { value: 2, label: `Estamos considerando o uso.` },
      {
        value: 1,
        label: `Dependemos de métodos tradicionais, mas conhecemos o conceito.`,
      },
      { value: 0, label: "Não usamos nem estamos cientes dis" },
    ],
  },
  {
    id: 4,
    text: `Como você tem ajustado sua estratégia de gestão de talentos com 
    base no conceito de employee experience?`,
    options: [
      {
        value: 4,
        label: `Sim, ajustamos regularmente com base no employee experience.`,
      },
      { value: 3, label: `Fazemos ajustes ocasionais.` },
      { value: 2, label: `Estamos começando a considerar isso.` },
      { value: 1, label: `Conhecemos o conceito, mas não aplicamos.` },
      { value: 0, label: `Não consideramos isso em nossa estratégia.` },
    ],
  },
  {
    id: 5,
    text: `Você já enfrentou dificuldades para integrar novas tecnologias no 
    processo de avaliação de desempenho dos colaboradores?`,
    options: [
      { value: 4, label: `Sim, integramos com sucesso novas tecnologias.` },
      { value: 3, label: `Estamos em processo de integração.` },
      { value: 2, label: `Enfrentamos dificuldades, mas estamos tentando.` },
      { value: 1, label: `Conhecemos as tecnologias, mas não as integramos.` },
      { value: 0, label: `Não usamos novas tecnologias.` },
    ],
  },
  {
    id: 6,
    text: `Com as recentes mudanças na legislação trabalhista, como você está garantindo 
    que os processos de recrutamento e demissão estejam 100% em conformidade?`,
    options: [
      { value: 4, label: "Sim, garantimos total conformidade. " },
      {
        value: 3,
        label: `Quase totalmente em conformidade, com pequenos ajustes necessários.`,
      },
      { value: 2, label: `Estamos trabalhando para alcançar a conformidade.` },
      {
        value: 1,
        label: `Conhecemos as mudanças, mas ainda não estamos em conformidade.`,
      },
      { value: 0, label: `Não estamos em conformidade.` },
    ],
  },
];

const perguntasAlternativas = [
  {
    id: 1,
    text: `Você acredita que treinamentos de liderança podem impactar positivamente o desempenho da sua equipe?`,
    options: [
      {
        label: "Sim",
        id: 11,
      },
      {
        label: "Não",
        id: 12,
      },
      {
        label: "Não tenho certeza",
        id: 13,
      },
    ],
  },
  {
    id: 2,
    text: `Você estaria interessado em participar de uma pesquisa de clima organizacional para melhorar o ambiente de trabalho?`,
    options: [
      {
        label: "Sim",
        id: 21,
      },
      {
        label: "Não",
        id: 22,
      },
      {
        label: "Não tenho certeza",
        id: 23,
      },
    ],
  },
];

export default function QuestionarioRH() {
  const navigate = useNavigate();
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    getUserContact,
    inputVal,
  } = useContext(GlobalContext);

  const inputs = [
    {
      title: "Nome",
      nome: "nome",
      type: "text",
      id: "nome",
      value: inputVal.nome || "",
      onChange: handleChange,
      error: errors.nome,
      touched: touched.nome,
      onBlur: handleBlur,
    },
    {
      title: "Telefone",
      nome: "telefone",
      type: "tel",
      id: "telefone",
      value: inputVal.telefone || "",
      onChange: handleChange,
      error: errors.telefone,
      touched: touched.telefone,
      onBlur: handleBlur,
    },
    {
      title: "Email",
      nome: "email",
      type: "email",
      id: "email",
      value: inputVal.email || "",
      onChange: handleChange,
      error: errors.email,
      touched: touched.email,
      onBlur: handleBlur,
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
          <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>

          <form className="form" onSubmit={getUserContact}>
            {inputs.map((input) => (
              <ElementoInput {...input} key={input.id} />
            ))}
          </form>

          <SurveyEmpresarial
            perguntas={perguntas}
            perguntasAlternativas={perguntasAlternativas}
          />
        </FramerMotion>
      </HeroApp>

      <FooterApp />
    </>
  );
}
