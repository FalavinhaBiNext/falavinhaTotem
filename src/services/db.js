
// Perguntas para o survey do RH
export const perguntasSurveyRh = [
  {
    id: 1,
    text: `Você já está familiarizado com os conceitos de turnover e rotatividade, 
    mas sabe como a análise preditiva pode ajudar a reduzir essas taxas em até 30% em grandes empresas?`,
    //TEXTO RESUMIDO PARA PERGUNTA
    //Você sabe como a análise preditiva pode reduzir o turnover em até 30% nas empresas?
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
    // TEXO RESUMIDO PARA PERGUNTA
    // Já usa people analytics para prever retenção de talentos ou ainda recorre a métodos tradicionais?

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

// Respostas para o survey do RH
export const respostasSurveyRh = [
  {
    min: 18,
    max: 24,
    title: "Excelente Gestão!",
    message: `A empresa demonstra uma forte capacidade de integrar tecnologias avançadas e práticas modernas de RH, 
    garantindo eficiência e conformidade em todos os processos.`,
    icon: 5,
  },
  {
    min: 12,
    max: 17,
    title: "Boa Gestão",
    message: `A empresa está bem posicionada em termos de práticas de RH, 
    mas ainda pode melhorar em algumas informações para alcançar a excelência.`,
    icon: 4,
  },
  {
    min: 6,
    max: 11,
    title: "Gestão de RH Média",
    message: `A empresa possui práticas de RH que atendem aos requisitos básicos, 
    mas há várias áreas que necessitam de melhorias significativas.`,
    icon: 3,
  },
  {
    min: 0,
    max: 5,
    title: "Gestão de RH Deficitária",
    message: `A empresa enfrenta desafios consideráveis em suas práticas
    de RH e precisa de uma gestão mais eficiente.`,
    icon: 2,
  },
];