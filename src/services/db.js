import { desc } from "framer-motion/client";

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
    titulo: "Excelente Gestão!",
    mensagem: `A empresa demonstra uma forte capacidade de integrar tecnologias avançadas e práticas modernas de RH, 
    garantindo eficiência e conformidade em todos os processos.`,
    icon: 5,
  },
  {
    min: 12,
    max: 17,
    titulo: "Boa Gestão",
    mensagem: `A empresa está bem posicionada em termos de práticas de RH, 
    mas ainda pode melhorar em algumas informações para alcançar a excelência.`,
    icon: 4,
  },
  {
    min: 6,
    max: 11,
    titulo: "Gestão de RH Média",
    mensagem: `A empresa possui práticas de RH que atendem aos requisitos básicos, 
    mas há várias áreas que necessitam de melhorias significativas.`,
    icon: 3,
  },
  {
    min: 0,
    max: 5,
    titulo: "Gestão de RH Deficitária",
    mensagem: `A empresa enfrenta desafios consideráveis em suas práticas
    de RH e precisa de uma gestão mais eficiente.`,
    icon: 2,
  },
];


// Perguntas para o survey do empresarial
export const perguntasSurveyEmpresarial = [
  {
    id: 1,
    titulo: "Estratégia",
    perguntas: [
      {
        text: `Forças e fraquezas do negócio estão mapeados?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `Foram traçadas estratégias de curto prazo (próximos 3 meses)?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Finanças",
    perguntas: [
      {
        text: `Capital de giro é controlado?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `O fluxo de caixa é controlado?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Marketing",
    perguntas: [
      {
        text: `Existe um processo de vendas estruturado?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `Identidade visual é usada em todos os materiais da empresa?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
  {
    id: 4,
    titulo: "Recursos Humanos",
    perguntas: [
      {
        text: `São realizadas capacitações e treinamentos para novos contratados?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `Avaliação de desempenho é realizada periodicamente?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
  {
    id: 5,
    titulo: "Operações",
    perguntas: [
      {
        text: `Principais processos da empresa estão mapeados?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `Existe uma política de controle de qualidade de produtos ou serviços?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
  {
    id: 6, // Corrected duplicate id
    titulo: "Tecnologia",
    perguntas: [
      {
        text: `Existe um orçamento destinado para a transformação digital do negócio?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
      {
        text: `Relatórios de indicadores importantes são gerados automaticamente?`,
        options: [
          { value: 1, label: "Sim" },
          { value: 0, label: "Não" },
        ],
      },
    ],
  },
];

export const respostasSurveyEmpresarial = [
  {
    max: 100,
    min: 75,
    icon: 5,
    maturidade: "Avançado",
    mensagem: `Pela amostragem realizada, a empresa encontra-se em um nível avançado de maturidade 
    no conjunto das áreas analisadas. Como se trata de uma pequena amostragem, o ideal é a aplicação de 
    Diagnóstico na sua versão completa, realizada por um Consultor de Negócios para  entender quais áreas 
    ainda podem ser melhoradas, para que a empresa de continuidade as boas práticas para condução dos negócios.`,
  },
  {
    max: 75,
    min: 41,
    icon: 3,
    maturidade: "Intermediário",
    mensagem: `Pela amostragem realizada, a empresa encontra-se em um nível intermediário de maturidade no conjunto 
    das áreas analisadas. Recomenda-se a aplicação de Diagnóstico na sua versão completa, para entender em que áreas 
    estão as possibilidades de melhorias, realizada por um Consultor de Negócios. Uma consultoria pode ajudar a
     empresa a melhorar seus níveis de maturidade, para que obtenha melhores resultados e possa expandir seus negócios`,
  },
  {
    max: 40,
    min: 0,
    icon: 1,
    maturidade: "Básico",
    mensagem: `Pela amostragem realizada, a empresa encontra-se em um nível básico de maturidade no conjunto das áreas analisadas. 
    Recomenda-se a aplicação de Diagnóstico na sua versão completa, para entender em que áreas estão os principais problemas, 
    realizada por um Consultor de Negócios. Uma consultoria pode ajudar a empresa a melhorar seus níveis de maturidade, 
    para que obtenha melhores resultados e possa expandir seus negócios`,
  },
];

export const cursos = [
  {
    name: "FORMAR LÍDERES DE ELITE:",
    description: "Crie seu 'BOPE' Organizacional",
    item: [
      {item: "Identificação e Desenvolvimento de Talentos Internos."},
      {item: "Treinamento Intensivo em Habilidades de Liderança."},
      {item: "Cultura de Alta Performance e Resiliência."},
      {item: "Estratégias de Motivação e Engajamento de Equipes."},
      {item: "Avaliação Contínua e Feedback Construtivo."}
    ]
  },
  {
    name: "A REVOLUÇÃO DA IA:",
    description: "Transformando Negócios e Redefinindo Estratégias Empresariais",
    item: [
      {item: "Integração de IA nos processos de negócios."},
      {item: "Ética e governança na implementação de IA."},
      {item: "Personalização de experiências do cliente através da IA."},
      {item: "Automação inteligente e otimização de operações."},
      {item: "Análise de dados e tomada de decisões baseada em IA."}
    ]
  },
  {
    name: "DELEGAÇÃO ESTRATÉGICA:",
    description: "Maximizando Desempenho e Resultados Organizacionais",
    item: [
      {item: "Princípios Fundamentais da Delegação Estratégica"},
      {item: "Identificação de Tarefas e Responsabilidades para Delegação"},
      {item: "Desenvolvimento de Habilidades de Liderança para Delegação"},
      {item: "Abordagens e Melhores Práticas na Delegação"},
      {item: "Medindo o Impacto da Delegação nos Resultados Empresariais"}
    ]
  },
  {
    name: "FERRAMENTAS ESSENCIAIS PARA IMPULSIONAR AS VENDAS",
    description: "",
    item: [
      {item: "Automação de Marketing"},
      {item: "Gestão de Relacionamento com Clientes (CRM)"},
      {item: "Análise de Dados de Vendas"},
      {item: "Redes Sociais e Conteúdo Digital"},
      {item: "Inteligência Artificial e Chatbots"},
    ]
  },
  {
    name: "GESTÃO DE CONFLITOS:",
    description: "Transformando Desafios em Oportunidades",
    item: [
      {item: "Entendendo as Causas dos Conflitos."},
      {item: "Técnicas de Resolução de Conflitos."},
      {item: "A Arte da Negociação e Compromisso."},
      {item: "Manter a Calma em Situações de Conflito."},
      {item: "Transformando Conflitos em Crescimento."}
    ]
  },
  {
    name: "PROCESSOS DOS TRABALHOS",
    description: "Como Evitar Passivos Trabalhistas",
    item: [
      {item: "Identificação de Riscos Trabalhistas Comuns."},
      {item: "Implementação de Políticas de Conformidade."},
      {item: "Auditorias Internas e Externas para Prevenção de Passivos."}, 
      {item: "Treinamento e Capacitação de Equipes."},
      {item: "Resolução Proativa de Conflitos Trabalhistas."}
    ]
  },
  {
    name: "CONTABILIDADE GERENCIAL:",
    description: "Tomando Decisões Baseadas em Dados.",
    item: [
      {item: "Ferramentas de Contabilidade Gerencial para Análise de Desempenho."},
      {item: "Utilização de Indicadores Financeiros na Tomada de Decisões."},
      {item: "Relatórios Gerenciais: Transformando Dados em Ações Estratégicas."},
      {item: "Integração de Sistemas de Informação para Melhor Gestão."},
      {item: "Estudos de Caso: Sucesso na Tomada de Decisões Baseadas em Dados."}
    ]
  },
  {
    name: "GESTÃO DE RISCOS:",
    description: "Protegendo o Patrimônio da Empresa",
    item: [
      {item: "Identificação e Avaliação de Riscos Financeiros."},
      {item: "Estratégias de Mitigação e Controle de Riscos."},
      {item: "Uso de Derivativos e Seguros para Proteção Financeira."},
      {item: "Implementação de Políticas de Gestão de Riscos."},
      {item: "Monitoramento e Revisão Contínua de Riscos Financeiros."}
    ]
  },
  {
    name: "HOLDING FAMILIAR: ",
    description: "Proteção e Sucessão Patrimonial",
    item: [
      {item: "Estruturação de uma Holding Familiar: Passos Iniciais."},
      {item: "Vantagens Fiscais e Jurídicas de uma Holding."},
      {item: "Planejamento Sucessório e Continuidade do Patrimônio."},
      {item: "Governança e Gestão de Conflitos em Holdings Familiares."},
      {item: "Estudos de Caso: Sucesso na Proteção e Sucessão Patrimonial."}
    ]
  },
]