export const projectName = 'Mintzberg Flow'

export const projectOverview =
  'Sistema web para organizar processos, subprocessos e atividades, registrar entradas e saidas e enxergar tudo em um fluxograma interligado da Cactus.'

export const projectProblem =
  'Hoje o material do Projeto Mintzberg esta disperso em documentos e listas, o que dificulta visualizar dependencias, gargalos e a sequencia logica entre setores.'

export const stackItems = [
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  '@xyflow/react',
  'Vite 8',
]

export const mvpScope = [
  'Cadastrar setores e processos.',
  'Registrar entradas e saidas por processo.',
  'Relacionar processos entre si.',
  'Visualizar o fluxo completo em um canvas navegavel.',
  'Consultar processos por setor.',
  'Editar e refinar a base que vai alimentar o fluxograma real.',
]

export const outsideScope = [
  'Gestao de risco avancada.',
  'Controle de materiais e logistica.',
  'Gestao de pessoas, qualidade e seguranca.',
  'Relatorios analiticos avancados.',
  'Automacoes complexas de aprovacao.',
  'Integracoes com sistemas externos.',
]

export const knownIssues = [
  {
    problem: 'Os dados ainda nao persistem.',
    solution: 'Nesta fase o uso de mocks e proposital para validar navegacao, estrutura e leitura visual.',
  },
  {
    problem: 'Sem backend nao existe cadastro real de operacao.',
    solution: 'A base atual foi desenhada para espelhar um modelo real e facilitar integracao futura.',
  },
  {
    problem: 'Fluxogramas densos podem ficar poluidos.',
    solution: 'O layout organiza por setor e permite foco visual em um processo selecionado.',
  },
]

export const hurdles = [
  'Definir o limite correto do MVP.',
  'Evitar que o sistema vire uma suite completa cedo demais.',
  'Modelar mocks com cara de sistema real.',
  'Montar um fluxo claro sem dependencia de backend.',
]

export const technicalDecisions = [
  'Front-end apenas para validar experiencia e estrutura antes de investir em backend.',
  'Dados mockados para acelerar demonstracao funcional.',
  'React com TypeScript para manutencao e reuso.',
  'Tailwind para velocidade de construcao visual.',
  'React Flow para interacao e navegacao no fluxograma.',
]

export const developmentChecklist = [
  'Definir a tela ou componente.',
  'Listar os dados mockados necessarios.',
  'Criar ou ajustar os tipos TypeScript.',
  'Montar a interface com Tailwind.',
  'Conectar a tela aos dados.',
  'Testar navegacao e renderizacao.',
  'Validar consistencia visual.',
  'Garantir que a base esteja pronta para integracao real.',
]
