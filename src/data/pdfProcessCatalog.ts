import type { ActivityDetail } from '../types/process'

export type PdfSubprocessCatalogEntry = {
  title: string
  description: string
  sourcePages: number[]
  activities: ActivityDetail[]
}

export type PdfProcessCatalogEntry = {
  title: string
  description: string
  sourcePages: number[]
  subprocesses: PdfSubprocessCatalogEntry[]
}

export const pdfProcessCatalog = [
  {
    "title": "Criacao da Identidade Visual",
    "description": "Desenvolvimento de toda a identidade visual do projeto, incluindo patch e design da fuselagem.",
    "sourcePages": [191, 192, 193],
    "subprocesses": [
      {
        "title": "Criação do Patch do Foguete",
        "description": "Desenvolvimento do patch oficial que representa a missão e o foguete.",
        "sourcePages": [191, 192],
        "activities": [
          {
            "title": "Pesquisa Exploratória",
            "description": "Levantar toda informação necessária para consolidar uma identidade visual.",
            "objective": "Consolidar a base de referências para a criação visual.",
            "tools": ["Computador"],
            "duration": "3h00",
            "collaborators": "1 a 2",
            "projectRisks": ["Não ter o nome do projeto e sua missão", "Ter referências muito obscuras"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Número de informações coerentes e úteis obtidas"],
            "skills": ["Noção de design visual", "Capacidade de pesquisa extensiva"]
          },
          {
            "title": "Definição das Propriedades Visuais",
            "description": "Definir e documentar tudo pertinente à identidade visual desejada.",
            "objective": "Documentar cores, formas e elementos que comporão a identidade.",
            "tools": ["Computador"],
            "duration": "1h30",
            "collaborators": "1",
            "projectRisks": ["Não ter informações e elementos suficientes", "Ter informações e elementos em excesso"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Grau de coesão dos elementos escolhidos"],
            "skills": ["Noção de design visual", "Documentação"]
          },
          {
            "title": "Design do Patch",
            "description": "Consolidar a identidade visual num patch de projeto.",
            "objective": "Finalizar a arte do patch para aplicação.",
            "tools": ["Computador"],
            "duration": "6h00",
            "collaborators": "1",
            "projectRisks": ["Não ter as habilidades necessárias para transformar a identidade visual num patch"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Grau de significado coeso com a missão e beleza do patch"],
            "skills": ["Habilidades de design visual", "Habilidades com software de edição de imagem"]
          }
        ]
      },
      {
        "title": "Criação do Design Visual da Fuselagem do Foguete",
        "description": "Desenvolvimento da arte gráfica que será aplicada ao corpo do foguete.",
        "sourcePages": [192, 193],
        "activities": [
          {
            "title": "Obtenção de Informações",
            "description": "Determinar toda informação vital para a produção da arte gráfica da fuselagem.",
            "objective": "Garantir que as dimensões e restrições da fuselagem sejam respeitadas.",
            "tools": ["Computador"],
            "duration": "1h00",
            "collaborators": "1",
            "projectRisks": ["Receber informações equivocadas ou ambíguas sobre a fuselagem"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Coesão das informações obtidas com a realidade"],
            "skills": ["Comunicação", "Investigação"]
          },
          {
            "title": "Design da Fuselagem",
            "description": "Definir e documentar tudo pertinente à identidade visual desejada.",
            "objective": "Criar a arte final para pintura ou plotagem.",
            "tools": ["Computador", "Artigos de desenho"],
            "duration": "6h00",
            "collaborators": "1",
            "projectRisks": ["Não ter informações sólidas sobre a fuselagem", "Fugir da identidade visual"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Coesão da arte com a identidade visual e o patch"],
            "skills": ["Habilidades de design visual", "Habilidades com software de edição", "Visualização geométrica"]
          },
          {
            "title": "Aplicação do Design na Fuselagem",
            "description": "Deixar a fuselagem do foguete bem apresentável.",
            "objective": "Executar a pintura ou plotagem final no foguete.",
            "tools": ["Artigos de pintura ou plotagem", "Verniz"],
            "duration": "2h00",
            "collaborators": "1 a 2",
            "projectRisks": ["Aplicar uma arte desalinhada", "Não aplicar métodos de preservação da arte"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Alinhamento da arte na fuselagem", "Grau de beleza"],
            "skills": ["Noções de design visual", "Habilidades com artes gráficas"]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do Motor",
    "description": "Desenvolvimento teórico, CAD e manufatura do motor foguete.",
    "sourcePages": [195, 196, 197, 198, 199],
    "subprocesses": [
      {
        "title": "Projeto Teórico do Motor",
        "description": "Definição da missão, condições de contorno e idealização inicial.",
        "sourcePages": [195, 196],
        "activities": [
          {
            "title": "Missão do motor",
            "description": "Decidir quais serão os objetivos do motor.",
            "objective": "Definir a necessidade e o propósito do motor para a missão.",
            "tools": ["Computador", "Papel", "Caneta"],
            "duration": "1h",
            "collaborators": "Setor Prop",
            "projectRisks": ["Não ter uma necessidade relevante"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Clareza, criatividade e eficiência para alcançar a missão"],
            "skills": ["Criatividade e senso crítico", "Noções de engenharia"]
          },
          {
            "title": "Condições de contorno",
            "description": "Saber os dados de massa total do foguete e diâmetro interno da fuselagem.",
            "objective": "Definir os limites físicos para o projeto do motor.",
            "tools": ["Computador", "Word ou Docs"],
            "duration": "2h",
            "collaborators": "Setor Prop + Estrutura",
            "projectRisks": ["Mudança nos dados obtidos", "Ausência de informação de estrutura"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Dados de massa e diâmetro bem definidos"],
            "skills": ["Capacidade analítica", "Boa comunicação"]
          },
          {
            "title": "Idealização e Tabelas SRM e Exalt",
            "description": "Obter dimensões iniciais, pressão de operação e curva de empuxo.",
            "objective": "Gerar a curva de empuxo teórica e prever o apogeu.",
            "tools": ["Computador", "Planilha SRM", "Planilha Exalt"],
            "duration": "2h",
            "collaborators": "1 ou 2",
            "projectRisks": ["Não saber operar as planilhas", "Condições de contorno erradas"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Melhor iteração considerando materiais e manufatura"],
            "skills": ["Capacidade analítica", "Saber operar as tabelas"]
          }
        ]
      },
      {
        "title": "Verificações Estruturais",
        "description": "Cálculos e simulações de resistência do motor.",
        "sourcePages": [196, 197],
        "activities": [
          {
            "title": "Cálculos Teóricos",
            "description": "Obter as tensões de Von Mises atuando no motor.",
            "objective": "Validar as tensões de escoamento e fatores de correção.",
            "tools": ["Computador", "Calculadora", "Livro de elementos de máquinas", "Normas ASME div. 3"],
            "duration": "2 a 4h",
            "collaborators": "2 ou mais",
            "projectRisks": ["Cálculos errados"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Revisão nos cálculos e fundação teórica validada"],
            "skills": ["Noções de resistência dos materiais", "Normas técnicas"]
          },
          {
            "title": "Simulações FEA",
            "description": "Verificar o fator de segurança do motor via software.",
            "objective": "Validar os cálculos teóricos com análise de elementos finitos.",
            "tools": ["Computador", "Inventor", "Ansys"],
            "duration": "4h a 4 dias",
            "collaborators": "2 ou mais",
            "projectRisks": ["Malha incorreta", "Setup da simulação incorreto"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Simulação calibrada e validada", "Dados próximos dos teóricos"],
            "skills": ["Manuseio do Ansys e Inventor"]
          }
        ]
      },
      {
        "title": "Manufatura do Motor",
        "description": "Usinagem e produção física dos componentes.",
        "sourcePages": [197, 198, 199],
        "activities": [
          {
            "title": "Plano de Manufatura",
            "description": "Definir as etapas e processos de usinagem detalhadamente.",
            "objective": "Garantir a execução correta da usinagem.",
            "tools": ["Computador", "Word ou Docs"],
            "duration": "1 a 2h",
            "collaborators": "1",
            "projectRisks": ["Etapas em ordem errada", "Processo ineficiente"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Clareza e organização nas etapas descritas"],
            "skills": ["Senso organizacional", "Experiência com processos de usinagem"]
          },
          {
            "title": "Usinagem",
            "description": "Realizar a usinagem das peças no torno mecânico.",
            "objective": "Obter as peças físicas do motor.",
            "tools": ["Torno mecânico", "Ferramentas de corte", "Tarugo de metal", "Furadeira", "Fluido de corte"],
            "duration": "5 a 15 dias úteis",
            "collaborators": "2 ou mais",
            "projectRisks": ["Matar a peça", "Desenho errado", "Matéria prima inadequada"],
            "safetyRisks": ["Acidentes graves", "Cortes", "Operação de alto torque"],
            "indicators": ["Segurança na operação", "Acabamento da peça"],
            "skills": ["Operação de maquinário", "Diretrizes de segurança"]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento de Estrutura (Fase 2)",
    "description": "Projeto detalhado, simulação e manufatura avançada dos componentes estruturais do foguete.",
    "sourcePages": [184, 185, 186, 187, 188, 189],
    "subprocesses": [
      {
        "title": "Integração de Sistemas Internos",
        "description": "Fixação e validação mecânica dos subsistemas no tubo.",
        "sourcePages": [188, 189],
        "activities": [
          {
            "title": "Integração de Satélite",
            "description": "Integrar o satélite ao foguete, garantindo fixação segura e proteção estrutural.",
            "objective": "Assegurar que o satélite suporte as cargas de voo sem deslocamento.",
            "tools": ["Chaves", "EPIs", "Parafusos padronizados"],
            "duration": "2h",
            "collaborators": "2 de E&A + 2 de Satélite",
            "projectRisks": ["Fixação inadequada do sistema"],
            "safetyRisks": ["Acidentes com ferramentas"],
            "indicators": ["Satélite firmemente fixado", "Fácil montagem/desmontagem"],
            "skills": ["Manuseio de ferramentas", "Noções de integração estrutural"]
          }
        ]
      }
    ]
  },
  {
    "title": "Sistema de Recuperação",
    "description": "Projeto, dimensionamento, fabricação e teste dos sistemas de paraquedas e ejeção.",
    "sourcePages": [216, 218, 220, 223, 225, 233, 237, 245, 249],
    "subprocesses": [
      {
        "title": "Dimensionamento do Paraquedas",
        "description": "Definição de requisitos e cálculos de velocidade terminal.",
        "sourcePages": [216, 218],
        "activities": [
          {
            "title": "Analisar Velocidade Terminal Desejada",
            "description": "Decidir velocidade terminal para o foguete-modelo em competição.",
            "objective": "Garantir um pouso seguro dentro das normas da competição.",
            "tools": ["Computador", "Calculadora", "Planilha da Bravo Aerospace"],
            "duration": "1h30min",
            "collaborators": "1",
            "projectRisks": ["Não ter o regulamento", "Massa estimada incorreta"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Clareza e organização nos cálculos"],
            "skills": ["Manuseio de Excel", "Capacidade analítica"]
          },
          {
            "title": "Dimensionamento e Seleção de Materiais",
            "description": "Obter parâmetros para confecção e escolher tecidos/cordas.",
            "objective": "Definir a geometria final e resistência dos materiais do velame.",
            "tools": ["Computador", "Planilha da Bravo Aerospace"],
            "duration": "5h",
            "collaborators": "2",
            "projectRisks": ["Materiais proibidos pelo regulamento", "Falha de cálculo de carga"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Confiabilidade do material e custo-benefício"],
            "skills": ["Cálculo de carga suportada", "Pesquisa de materiais"]
          }
        ]
      },
      {
        "title": "Fabricação e Montagem",
        "description": "Corte, costura e integração do sistema de recuperação.",
        "sourcePages": [220, 221, 231],
        "activities": [
          {
            "title": "Corte e Costura do Velame",
            "description": "Confeccionar gabaritos, cortar tecidos e costurar gomos.",
            "objective": "Obter o paraquedas físico com alta resistência nas costuras.",
            "tools": ["Máquina de costura", "Papelão", "Estilete", "Tecido de velame", "Cordas"],
            "duration": "8h+",
            "collaborators": "3",
            "projectRisks": ["Precisão do corte insuficiente", "Falha na tensão da linha de costura"],
            "safetyRisks": ["Cortes com estilete", "Furos com agulha"],
            "indicators": ["Resistência das costuras", "Simetria do velame"],
            "skills": ["Destreza manual", "Operação de máquina de costura"]
          },
          {
            "title": "Montagem no Tubo",
            "description": "Embalar paraquedas e testar encaixe no tubo estrutural.",
            "objective": "Garantir que o sistema ejetará sem prender ou emaranhar.",
            "tools": ["Paraquedas", "Talco", "Tubo de teste"],
            "duration": "3h",
            "collaborators": "2",
            "projectRisks": ["Paraquedas mal dimensionado para o volume do tubo", "Emaranhamento das linhas"],
            "safetyRisks": ["Resquícios de fibra de vidro no tubo"],
            "indicators": ["Facilidade de dobragem", "Ocupação volumétrica correta"],
            "skills": ["Atenção aos detalhes", "Técnicas de dobragem"]
          }
        ]
      },
      {
        "title": "Sistema de Ejeção e Pirotecnia",
        "description": "Projeto da câmara de combustão, pólvora e cortadores de linha.",
        "sourcePages": [227, 233, 235, 238, 242],
        "activities": [
          {
            "title": "Dimensionar Câmara e Pólvora",
            "description": "Cálculo de volume e massa de pólvora para ejeção.",
            "objective": "Pressurizar a câmara o suficiente para romper os pinos de cisalhamento.",
            "tools": ["Calculadora", "Fórmulas de gases ideais", "Planilha Excel"],
            "duration": "3h",
            "collaborators": "1",
            "projectRisks": ["Erro de cálculo de pressão", "Subdimensionamento da carga"],
            "safetyRisks": ["Manuseio de materiais explosivos"],
            "indicators": ["Pressão teórica vs necessária"],
            "skills": ["Física básica", "Termodinâmica básica"]
          },
          {
            "title": "Manufatura e Teste do Cortador",
            "description": "Usinagem do cortador de linha e teste de seccionamento.",
            "objective": "Validar o corte limpo do shock cord no tempo correto.",
            "tools": ["Torno mecânico", "Lâminas", "Skib", "Pólvora"],
            "duration": "6h+",
            "collaborators": "2",
            "projectRisks": ["Corte parcial da linha", "Falha de vedação dos gases"],
            "safetyRisks": ["Detonação acidental", "Cortes com ferramentas"],
            "indicators": ["Corte completo da linha na primeira tentativa"],
            "skills": ["Usinagem", "Manuseio de pirotécnicos"]
          }
        ]
      }
    ]
  },
  {
    "title": "Carga Útil e Satélite (Payload)",
    "description": "Desenvolvimento dos instrumentos científicos e integração do CanSat.",
    "sourcePages": [75, 76, 77, 78, 79],
    "subprocesses": [
      {
        "title": "Sensoriamento Atmosférico e Dinâmica",
        "description": "Integração de sensores ambientais e inerciais.",
        "sourcePages": [76, 77],
        "activities": [
          {
            "title": "Integração de Sensores (BME280/MPU6050)",
            "description": "Conexão e calibração dos sensores de pressão e movimento.",
            "objective": "Garantir a coleta precisa de dados ambientais e de atitude.",
            "tools": ["OBC", "Sensores", "Multímetro", "Osciloscópio"],
            "duration": "8h",
            "collaborators": "2",
            "projectRisks": ["Ruído excessivo no sinal", "Falha de comunicação I2C"],
            "safetyRisks": ["Curto-circuito na alimentação"],
            "indicators": ["Precisão e estabilidade das leituras"],
            "skills": ["Protocolos I2C/SPI", "Calibração de sensores"]
          }
        ]
      },
      {
        "title": "Subsistema de Imagem",
        "description": "Implementação da captura periódica de fotos.",
        "sourcePages": [77, 78],
        "activities": [
          {
            "title": "Integração ESP32-CAM",
            "description": "Configuração da câmera e rotinas de salvamento em SD.",
            "objective": "Obter registros visuais da missão em intervalos regulares.",
            "tools": ["ESP32-CAM", "Cartão SD", "Computador"],
            "duration": "6h",
            "collaborators": "1",
            "projectRisks": ["Corrupção de arquivos no SD", "Falta de foco/nitidez"],
            "safetyRisks": ["Não se aplica"],
            "indicators": ["Taxa de sucesso na captura de imagens"],
            "skills": ["Programação C++", "Otimização de hardware"]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do projeto teórico",
    "description": "Definição dos parâmetros iniciais do projeto (diâmetro dos tubos, quantidade de seções, material, coifa, geometria das aletas e etc.). Nessa fase são realizadas várias simulações de voo para validar e otimizar a estabilidade do foguete e prever o desempenho. Essa é a primeira etapa a ser iniciada na construção de um foguete e uma das últimas a ser finalizada, visto que para fechar o projeto teórico é necessário que todos os setores já tenham finalizado e manufaturado seus projetos. O trabalho nessa etapa é cíclico, devendo ser sempre atualizado a cada mudança mínima em qualquer subsistema.",
    "sourcePages": [
      2,
      3,
      4,
      5,
      6
    ],
    "subprocesses": [
      {
        "title": "Projeto Openrocket",
        "description": "Nessa etapa são definidos os parâmetros estruturais iniciais, sendo o principal deles o diâmetro interno do tubo. Os demais setores dão uma previsão inicial de espaço e massas de seus subsistemas, e com isso o setor de E&A começa a construir o projeto do foguete no Openrocket. Também, são realizadas diversas simulações ao longo de todo o desenvolvimento do projeto. Essas simulações têm como objetivos entender como o projeto teórico se comporta ao longo do voo e verificar se alterações precisam ser feitas para que as metas do projeto sejam alcançadas.",
        "sourcePages": [
          2,
          3,
          4
        ],
        "activities": [
          {
            "title": "Definição do diâmetro interno dos tubos de corpo",
            "description": "O setor em conjunto com os demais estabelecem o diâmetro interno máximo do modelo. Esse é um dos pontos primordiais do desenvolvimento do projeto, pois o diâmetro externo máximo do foguete é um dos parâmetros que mais impactam a eficiência do projeto.",
            "sourcePages": [
              3
            ]
          },
          {
            "title": "Previsões dos espaços e da massa de cada setor",
            "description": "Os setores dão uma previsão das massas e dos espaços que seus sistemas terão. A ideia é que em um primeiro momento elas façam uma estimativa desses dados com uma margem de erro e essas estimativas funcionem como limite máximo que os demais coordenadores poderão trabalhar. A partir disso, E&A tem uma ideia do quão grande e quão pesado o projeto será. A comunicação entre os setores têm um papel fundamental nessa etapa do projeto, pois só com uma excelente comunicação é que o projeto teórico poderá ser construído, já que todos os setores dependem uns dos outros para fechar os projetos dos seus sistemas.",
                        "objective": "espaço e massa cada sistema precisará.",
            "tools": ["Computador", "Caderno", "Canetas", "OpenRocket"],
            "duration": "1h",
            "sourcePages": [
              3
            ]
          },
          {
            "title": "Inicia-se a construção do projeto Openrocket",
            "description": "Com base nas informações repassadas pelos demais setores, inicia-se a construção do modelo no OpenRocket. O primeiro componente a ser configurado é o tubo de corpo, pois ele é a base estrutural do foguete. Cabe ao setor de E&A utilizar os dados sobre o espaço necessário para cada subsistema e definir a quantidade e o comprimento dos tubos de corpo a serem utilizados. Essa etapa deve garantir que todos os subsistemas sejam alocados de forma eficiente, evitando deixar espaços vazios que possam comprometer a estabilidade do voo e, ao mesmo tempo, buscando facilitar a montagem final do foguete.",
            "sourcePages": [
              3
            ]
          },
          {
            "title": "Arquivo ENG de propulsão",
            "description": "O setor de Propulsão constrói o arquivo que contém a curva de empuxo do motor e o envia para o setor de E&A, para que seja inserido no projeto do OpenRocket. Esse arquivo representa o funcionamento do motor dentro do software, sendo essencial para que as simulações de voo possam ser realizadas de forma adequada.",
            "sourcePages": [
              3
            ]
          },
          {
            "title": "Ajustar a estabilidade do modelo",
            "description": "Essa atividade consiste basicamente em ajustar as geometrias dos principais componentes de estabilidade (aletas), para que o modelo fique com uma margem estática adequada para os padrões do setor (1,5cal - 2cal). Essa atividade deve ser repetida todas ás vezes que o projeto sofrer qualquer mínima mudança, sendo assim, a última atividade a ser finalizada no desenvolvimento do projeto teórico.",
                        "objective": "modificação controlada da geometria, distribuição de massa e posicionamento dos componentes internos, garantindo que o foguete apresente estabilidade estática adequada durante todo o perfil de voo.",
            "tools": ["Computador", "OpenRocket"],
            "duration": "1h",
            "sourcePages": [
              4
            ]
          },
          {
            "title": "Revisão do projeto teórico",
            "description": "Essa etapa consiste basicamente em fazer um revisão de cada componente do foguete, no projeto OpenRocket, para verificar se todas as informações estão batendo com os dados reais. Normalmente, essa é a última etapa do desenvolvimento do projeto do teórico e deve ser realizada individualmente com cada setor e posteriormente em uma reunião com todos os setores juntos.",
            "sourcePages": [
              4
            ]
          }
        ]
      },
      {
        "title": "Simulações aerodinâmicas",
        "description": "Aqui são realizadas alguns tipos de simulações, para validação da aerodinâmica. O tipo exato de simulação de CFD vai variar dependendo das exigências da competição, dos recursos disponíveis no setor e dos conhecimentos dos membros",
        "sourcePages": [
          2,
          5
        ],
        "activities": [
          {
            "title": "Extrair do open condições de voo para simulação",
            "description": "Coletar dados de velocidade (Número de Mach)para servir como condições de contorno no CFD.",
                        "tools": ["Computador", "Open Rocket", "Excel"],
            "duration": "48h",
            "collaborators": "2",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Simular coifas",
            "description": "Analisar o comportamento do fluxo de ar sobre o nariz do foguete para validar o coeficiente de arrasto e identificar possíveis pontos de separação de camada limite ou formação de ondas de choque.",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Simular aletas",
            "description": "Executar simulações focadas na distribuição de pressão sobre as empenagens. O objetivo é calcular as forças de sustentação e arrasto local, além de verificar a formação de vórtices de ponta de asa.",
                        "objective": "distribuição de pressão superficial",
            "duration": "192h",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Simular boat tail",
            "description": "Avaliar a eficácia da redução do arrasto de base. A simulação foca na região de esteira (recirculação) atrás do foguete para garantir que o ângulo do cone esteja otimizando a recuperação de pressão.",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Simular corpo e transições",
            "description": "Estudar o escoamento ao longo das fuselagens e mudanças de diâmetro, garantindo que não existam zonas de turbulência excessiva que possam prejudicar a estabilidade ou aumentar o arrasto total.",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Simular foguete completo",
            "description": "Realizar a simulação de corpo inteiro para obter o CD (coeficiente de arrasto) global e o CNα (coeficiente de força normal), validando se os resultados condizem com o planejado no projeto teórico.",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Otimização da geometria do foguete para melhor desempenho aerodinâmico",
            "description": "Ajustar curvas e dimensões com base nos mapas de pressão e velocidade obtidos, visando a redução do arrasto e o aumento do apogeu sem comprometer a estabilidade.",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Extrair dados aerodinâmicos para análise estrutural",
            "description": "Exportar os mapas de pressão superficial obtidos no CFD para serem aplicados como cargas na simulação de FEA, permitindo uma análise estrutural muito mais fiel à realidade de voo.",
                        "tools": ["Computador", "Excel", "Ansys fluent", "Open Rocket", "Modelos escolhidos, simulados em conjunto e"],
            "duration": "validados. 72h",
            "collaborators": "2 membros do setor",
            "sourcePages": [
              5
            ]
          }
        ]
      },
      {
        "title": "Simulações de voo",
        "description": "Umas das etapas de maior importância dentro do desenvolvimento do projeto teórico, pois é através dessas",
        "sourcePages": [
          2,
          4
        ],
        "activities": [
          {
            "title": "Simulações de voo no OpenRocket",
            "description": "Essa atividade consiste na execução de simulações de voo básicas realizadas no open, para prever o comportamento dinâmico do foguete sob condições reais de operação. O foco principal é a validação do apogeu alvo e da velocidade terminal do modelo.",
                        "tools": ["Computador", "OpenRocket"],
            "duration": "24h",
            "collaborators": "5 (os membros de estrutura)",
            "sourcePages": [
              4
            ]
          },
          {
            "title": "Simulações de voo no RocketPy",
            "description": "Esta atividade consiste na execução de simulações avançadas utilizando a biblioteca RocketPy. Diferente de ferramentas simplificadas do OpenRocket, o RocketPy permite uma análise muito mais completa e rigorosa, pois utiliza um modelo matemático de 6 graus de liberdade. Isso significa que ele considera não apenas a transição do foguete, mas todas as suas rotações e a influência de ventos variáveis em diferentes altitudes, proporcionando uma previsão de trajetória significativamente mais próxima do comportamento real do voo.",
            "sourcePages": [
              4
            ]
          },
          {
            "title": "Interpretação dos dados",
            "description": "Esta atividade consiste na análise crítica dos resultados obtidos nas simulações de voo. A interpretação dos dados são de extrema importância, pois é a partir delas que avaliamos se o projeto está dentro das especificações estabelecidas no desenvolvimento teórico(apogeu, velocidade terminal e etc.).",
            "sourcePages": [
              4
            ]
          }
        ]
      },
      {
        "title": "Simulações estruturais",
        "description": "As simulações estruturais consistem na etapa de testes para a resistência e melhor comportamento dos materiais que serão utilizados no foguete; Serão feitas simulações no Ansys Mechanical e testes na máquina universal de ensaios para obtenção dos dados experimentais, numéricos e computacionais.",
        "sourcePages": [
          3,
          5,
          6
        ],
        "activities": [
          {
            "title": "Definir casos de carregamento estrutural",
            "description": "Identificar e quantificar todas as forças que atuarão no foguete, como o empuxo máximo do motor, o arrasto aerodinâmico no regime transônico e as cargas de inércia. Devem ser considerados os cenários de \"pior caso\", como rajadas de vento laterais e o impacto da abertura do paraquedas.",
                        "objective": "simulações estruturais, considerando aceleração máxima, cargas aerodinâmicas, empuxo do motor, esforços nos rail buttons, cargas nas aletas e possíveis condições de vento lateral, garantindo que o dimensionamento estrutural contemple os cenários mais severos de operação.",
            "tools": ["Computador", "Dados das simulações (Dados das simulações)", "Excel", "Ansys"],
            "duration": "48h",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Definir propriedades de materiais e critérios de falha",
            "description": "Inserir no software os dados técnicos dos materiais (módulo de Young, coeficiente de Poisson e limite de escoamento do PLA, PETG ou Compósitos). Define-se também se a falha será",
            "sourcePages": [
              5
            ]
          },
          {
            "title": "Realizar análise estrutural dos componentes",
            "description": "Executar a simulação individual de peças críticas isoladas, como aletas e suportes de motor. O objetivo é verificar se cada componente suporta suas cargas específicas antes de integrá-los no modelo global.",
                        "objective": "Indentificar regiôes críticas e de concentração de tensões - Verificar fatores de segurança - Garantir integridade estrutural dos componentes",
            "duration": "336h",
            "sourcePages": [
              6
            ]
          },
          {
            "title": "Realizar análise estrutural de interfaces e junções",
            "description": "Avaliar as tensões nos pontos de conexão (acoplamentos, parafusos e colagens). O foco é garantir que as junções entre as fuselagens e as fixações das aletas suportem os esforços de cisalhamento e tração sem falha local.",
                        "tools": ["Computador", "ANSYS Mechanical", "CAD’s das inferfaces"],
            "duration": "144h",
            "collaborators": "2",
            "sourcePages": [
              6
            ]
          },
          {
            "title": "Realizar análise estrutural global do veículo",
            "description": "Simular o comportamento do foguete completo sob cargas combinadas (empuxo, arrasto e peso próprio). Verifica-se se a estrutura mantém sua integridade axial e se as deflexões estão dentro dos limites elásticos do material.",
                        "tools": ["Computador com carga completa", "ANSYS Mechanical", "CAD da montagem completa do foguete"],
            "duration": "336h",
            "collaborators": "2 membros do setor",
            "sourcePages": [
              6
            ]
          },
          {
            "title": "Realizar análise de flambagem",
            "description": "Analisar a estabilidade de paredes finas (fuselagens) sob compressão. O objetivo é determinar a carga crítica em que a estrutura pode sofrer colapso súbito, garantindo um fator de segurança adequado para evitar a falha por instabilidade elástica.",
                        "objective": "Computados  ANSYS Mechanical  CAD do foguete 96h 2  Avaliar estabilidade estrutural sob cargas compressivas  Determinar fator crítico de flambagem  regiões de possível instabilidade Identificar estrutural",
            "tools": ["Computados", "ANSYS Mechanical", "CAD do foguete"],
            "duration": "96h",
            "collaborators": "2",
            "sourcePages": [
              6
            ]
          },
          {
            "title": "Realizar estudo de convergência e validação do modelo",
            "description": "Refinar a malha da simulação (Mesh) para garantir que os resultados numéricos sejam precisos e estáveis. Consiste em comparar os dados da simulação com modelos analíticos ou testes de bancada para validar a confiabilidade do software.",
                        "tools": ["Computador", "ANSYS Mechanical", "CAD"],
            "duration": "144h",
            "collaborators": "2",
            "sourcePages": [
              6
            ]
          },
          {
            "title": "Otimizar configuração estrutural",
            "description": "Ajustar espessuras, materiais e geometrias com base nos resultados das análises anteriores. O objetivo é remover o excesso de massa de áreas menos solicitadas, garantindo que o foguete seja o mais leve possível sem comprometer a segurança.",
                        "objective": "Computador  Ansys Mechanical  Excel 240h Membros do setor + Diretora técnica  Melhorar distribuição de tensões",
            "tools": ["Computador", "Ansys Mechanical", "Excel"],
            "duration": "240h",
            "collaborators": "Membros do setor + Diretora técnica",
            "sourcePages": [
              6
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Manufaturas dos componentes estruturais",
    "description": "Aqui onde o projeto sai do papel e inicia o processo de fabricação. Cada componente vai ter o seu próprio processo de manufatura.",
    "sourcePages": [
      2,
      6,
      7,
      8,
      9,
      10
    ],
    "subprocesses": [
      {
        "title": "Manufatura dos tubos de corpos",
        "description": "Os tubos do corpo são fabricados por meio do processo de laminação de material compósito, utilizando resina reforçada com fibra de vidro. O processo envolve a aplicação controlada das camadas de fibra, impregnação com resina, compactação e cura, garantindo resistência estrutural, rigidez e uniformidade dimensional do componente.",
        "sourcePages": [
          6,
          7,
          8
        ],
        "activities": [
          {
            "title": "Testes",
            "description": "Aqui serão feitos os testes para decisão de: materiais a serem utilizados, métodos de manufatura, proporção de catalisador e etc.",
            "sourcePages": [
              7
            ]
          },
          {
            "title": "Preparar os materiais",
            "description": "Conferir se os materiais necessários estão disponíveis na oficina em quantidade e validade adequada, isso inclui materiais químicos como a resina e o catalisador e também ferramentas para o processo junto aos epis básicos (luvas, pinceis, máscaras..)",
                        "tools": ["Conhecimento organizacional da SHP."],
            "sourcePages": [
              7
            ]
          },
          {
            "title": "Passar a cera desmoldante",
            "description": "Higienizar o tubo se necessário e com a superfície limpa passar a cera desmoldante com o auxílio da estopa. Esse processo de passar a cera sob a superfície deve se repetir 4 vezes, deixando 5 minutos para secagem em cada etapa.",
                        "tools": ["Cera", "Estopa"],
            "collaborators": "1 membro Mecanismo de desmolde.",
            "sourcePages": [
              7
            ]
          },
          {
            "title": "Passar o PVA",
            "description": "Após o tempo de secagem da última camada de cera, deve-se passar mais 4 camadas de pva, este com auxílio de um pincel com tempo de secagem entre as camadas de 10 minutos.",
                        "tools": ["PVA, Pincel, Luva"],
            "collaborators": "1 membro Mecanismo de desmolde",
            "sourcePages": [
              7
            ]
          },
          {
            "title": "Terceiro mecanismo de desmolde",
            "description": "Por último, o tubo é envolto em algo que irá separar o tubo da fibra, este pode ser acetato ou papel celofane (materiais usados no momento), corta-se o material com o diâmetro do tubo e então é feito a junção das extremidades com fita durex ou crepe.",
                        "tools": ["Acetato ficar preso na laminação", "Se cortar", "Laminação sem bolhas internas", "Fácil remoção do acetato", "Saber utilizar uma tesoura e fita"],
            "sourcePages": [
              7
            ]
          },
          {
            "title": "Laminação",
            "description": "Nesta etapa a resina deve ser pesada e acrescida da porcentagem de catalisador indicado pelo fabricante. Após isso, deve ser passada, com auxílio de um pincel, na fibra de vidro.",
                        "tools": ["Resina", "Catalisador", "Fibra de vidro", "Pincéis", "Cano de PVC", "Balança", "Pote descartável"],
            "duration": "1 hora",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Desmolde",
            "description": "O desmolde se resume a puxar a fibra e separá-la do tubo, se houver dificuldades é possível que haja o uso do soprador térmico para amolecer o cano e retirar com maior facilidade.",
                        "tools": ["Força física"],
            "duration": "1h",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Lixar os tubos no torno",
            "description": "Começar pela lixa de maior grão e depois ir diminuindo, lixando todo o tubo de corpo uniformemente .",
                        "tools": ["Lixas", "Máscara com filtro"],
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Cortar os tubos no tamanho ideal",
            "description": "Com os parâmetros do OpenRocket fazer o gabarito de corte e utilizar a serra de fita.",
                        "tools": ["Máscara com filtro", "Luva", "Tubo de corpo", "Serra de fita", "Folha(para fazer o gabarito de corte)", "Fita"],
            "duration": "20min",
            "sourcePages": [
              8
            ]
          }
        ]
      },
      {
        "title": "Manufatura do Boat tail",
        "description": "O boat tail é projetado em CAD e fabricado por manufatura aditiva, conforme especificações dimensionais e estruturais do projeto. Após a impressão, são realizadas etapas de acabamento e inspeção dimensional para garantir coaxialidade e correto encaixe com a fuselagem.",
        "sourcePages": [
          6,
          9
        ],
        "activities": [
          {
            "title": "Construção do CAD",
            "description": "Com base no projeto OpenRocket o CAD do Boat Tail é construído no Inventor Autodesk.",
                        "tools": ["Inventor", "MatLab", "Excel"],
            "duration": "2h",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Definir parâmetros de impressão",
            "description": "O CAD do componente é fatiado e preparado para ser impresso",
                        "tools": ["Efeito degrau mínimo", "Noção de manufatura aditiva"],
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Pós-processamento",
            "description": "Utilizar de lixas para deixar a superfície do componente mais uniforme e fazer os “reparos” necessários.",
                        "objective": "componente o mais uniforme possível.",
            "tools": ["Lixas", "Luvas", "Máscaras"],
            "duration": "1h",
            "sourcePages": [
              9
            ]
          }
        ]
      },
      {
        "title": "Manufatura das transições",
        "description": "É realizado o desenvolvimento do modelo CAD da transição, considerando requisitos aerodinâmicos e estruturais. A fabricação do componente é executada conforme o material definido em projeto, seguida de verificação dimensional e ajuste para garantir alinhamento e adequado acoplamento à fuselagem.",
        "sourcePages": [
          7,
          9
        ],
        "activities": [
          {
            "title": "Construção do modelo CAD",
            "description": "Com base no projeto OpenRocket o CAD das transições é construído no Inventor Autodesk.",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Manufatura",
            "description": "Vai depender do tipo de transição que for escolhida para integrar as partes do tubo.",
                        "objective": "Computador;  Torno CNC; 1h 1 membro e um técnico da oficina; Manufaturar os rail buttons.  Rail Buttons feitos com materiais que sejam",
            "tools": ["Rail Buttons “empenados”", "Acidentes com o torno CNC", "Peça com alta resistência mecânica e leveza", "Fidelidade ao modelo feito em CAD", "Noções do torno CNC; Integração dos componentes estruturais"],
            "sourcePages": [
              9
            ]
          }
        ]
      },
      {
        "title": "Manufatura da coifa",
        "description": "A coifa é fabricada por meio de laminação de material compósito ou por manufatura aditiva, conforme requisitos estruturais e de massa. O processo inclui moldagem, cura, acabamento superficial e inspeção geométrica para assegurar simetria e qualidade aerodinâmica.",
        "sourcePages": [
          7
        ],
        "activities": []
      },
      {
        "title": "Manufatura das Aletas",
        "description": "As aletas são modeladas em CAD e fabricadas por manufatura aditiva, respeitando critérios de resistência estrutural, espessura e perfil aerodinâmico definidos em projeto. Após a fabricação, são realizadas inspeções dimensionais e acabamento superficial.",
        "sourcePages": [
          7,
          9
        ],
        "activities": [
          {
            "title": "Desenvolvimento do modelo CAD",
            "description": "Com base no arquivo OpenRocket as aletas são construídas no Inventor Autodesk.",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Definir parâmetros de impressão",
            "description": "O CAD do componente é fatiado e preparado para ser impresso",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Pós-processamento",
            "description": "Utilizar de lixas para deixar a superfície do componente mais uniforme e melhorar a adesão da laminação na hora de fixar as aletas nos tubos.",
            "sourcePages": [
              9
            ]
          }
        ]
      },
      {
        "title": "Manufatura dos Rails Buttons",
        "description": "Os rail buttons são fabricados por meio de usinagem CNC, garantindo precisão dimensional, concentricidade e acabamento superficial adequado para minimizar atrito com o trilho de lançamento. Após a usinagem, é realizada inspeção dimensional para assegurar conformidade com o padrão adotado no projeto.",
        "sourcePages": [
          7
        ],
        "activities": []
      },
      {
        "title": "Manufatura da Coifa (Manufatura Aditiva)",
        "description": "",
        "sourcePages": [
          8
        ],
        "activities": [
          {
            "title": "Testes",
            "description": "Aqui serão feitos os testes para decisão de: materiais a serem utilizados, .",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Construção do CAD",
            "description": "Com os parâmetros do OpenRocket usar o matlab e exel para conseguir os pontos de curvatura da coifa e colocar no Inventor, ligar os pontos com o tipo de linha spline e incluir o ressalto antes de usar a função rotação",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Definir parâmetros de impressão",
            "description": "O CAD do componente é fatiado e preparado para ser impresso.",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Pós-processamento",
            "description": "Lixar toda a superfície de maneira uniforme",
            "sourcePages": [
              8
            ]
          }
        ]
      },
      {
        "title": "Manufatura da Coifa (Laminação)",
        "description": "",
        "sourcePages": [
          8,
          9
        ],
        "activities": [
          {
            "title": "Construção do CAD do molde",
            "description": "Com os parâmetros do OpenRocket usar o matlab e excel para conseguir os pontos de curvatura da coifa e colocar no Inventor, ligar os pontos com o tipo de linha spline e incluir o ressalto antes de usar a função rotação.",
                        "tools": ["Facilidade de retirar o molde", "Noção de Inventor, Matlab e excel."],
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Definir parâmetros de impressão",
            "description": "O CAD do componente é fatiado e preparado para ser impresso.",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Passar a cera desmoldante",
            "description": "Higienizar o molde e com a superfície limpa passar a cera desmoldante com o auxílio da estopa. Esse processo de passar a cera sob a superfície deve se repetir 4 vezes, deixando 5 minutos para secagem em cada etapa.",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Passar o PVA",
            "description": "Após o tempo de secagem da última camada de cera, deve-se passar mais 4 camadas de pva, este com auxílio de um pincel com tempo de secagem entre as camadas de 10 minutos.",
            "sourcePages": [
              8
            ]
          },
          {
            "title": "Laminação",
            "description": "Nesta etapa a resina deve ser pesada e acrescida da porcentagem de catalisador indicado pelo fabricante. Após isso, deve ser passada, com auxílio de um pincel, na fibra de vidro",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Desmolde",
            "description": "O desmolde se resume a separar a laminação do molde base..",
            "sourcePages": [
              9
            ]
          },
          {
            "title": "Acabamento",
            "description": "Utilizar de lixas para deixar a superfície mais uniforme e do acréscimo de materiais(como durepoxi ou resina), para consertar bolhas ou outras imperfeições.",
            "sourcePages": [
              9
            ]
          }
        ]
      },
      {
        "title": "Manufatura dos Rail Buttons",
        "description": "",
        "sourcePages": [
          9,
          10
        ],
        "activities": [
          {
            "title": "Construção do modelo CAD",
            "description": "Com base nas especificações da competição, o CAD dos Ral Buttons é construído no Inventor Autodesk.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Manufatura",
            "description": "A manufatura dos Rails Buttons é feita em torno CNC. Para isso, é preciso preparar o arquivo com as especificações do CAD.",
            "sourcePages": [
              10
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Montagem do Foguete",
    "description": "A montagem é a última fase da construção de um foguete e, para sua realização, é necessário que todos os setores já tenham finalizado e manufaturado todos os seus sistemas. Nessa etapa, todos os componentes estruturais, de propulsão, de eletrônica e recuperação são colocados e fixados em seus lugares seguindo o projeto teórico do modelo.",
    "sourcePages": [
      2
    ],
    "subprocesses": []
  },
  {
    "title": "Montagem",
    "description": "",
    "sourcePages": [
      10,
      11
    ],
    "subprocesses": [
      {
        "title": "Integração dos componentes estruturais",
        "description": "Esta atividade consiste na montagem física e união de todos os componentes estruturais externos do modelo, incluindo a coifa, fuselagens, transições, aletas, boat tail e rails buttons. O foco é garantir o alinhamento axial perfeito do conjunto e a integridade das conexões mecânicas, assegurando que o foguete se comporte como um corpo rígido único durante as solicitações de voo.",
        "sourcePages": [
          10,
          11
        ],
        "activities": [
          {
            "title": "Gabarito de furos",
            "description": "Seguindo o projeto OpenRocket e os CAD’s dos componentes é desenvolvido o gabarito, para garantir a concentricidade de todos os componentes.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Furar",
            "description": "É feito os furos de todos os componentes estruturais usando o gabarito como guia.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Fixação das aletas",
            "description": "Nessa etapa, são feitos rasgos na fuselagem com o auxílio de gabaritos, a fim de garantir maior precisão no uso da Delta CNC (máquina a laser), e as aletas são fixadas por meio de laminação, pelo método tip-to-tip.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Fixação das transições",
            "description": "Com base no gabarito definido, são realizados os furos necessários na fuselagem para a correta fixação das transições, garantindo alinhamento e posicionamento conforme o projeto.",
                        "tools": ["Parafusos", "Transições", "Tubos de corpos", "Chaves dos parafusos"],
            "duration": "30min",
            "collaborators": "2 Fixar as transições nos tubos.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Fixação do Boat Tail",
            "description": "Com base no gabarito definido, são realizados os furos necessários na fuselagem para a correta fixação do Boat Tail, garantindo alinhamento e posicionamento conforme o projeto",
                        "tools": ["Parafusos", "Boat Tail", "Tubo de corpo", "Chaves dos parafusos"],
            "duration": "30min",
            "collaborators": "2 Fixar o Boat tail no tubo.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Fixação da coifa",
            "description": "Com base no gabarito definido, são realizados os furos necessários na fuselagem para a correta fixação da coifa, garantindo alinhamento e posicionamento conforme o projeto",
                        "tools": ["Parafusos", "Coifa", "Tubos de corpo", "Chaves dos parafusos"],
            "duration": "30min",
            "collaborators": "3 Fixar coifa no tubo de corpo.",
            "sourcePages": [
              10
            ]
          },
          {
            "title": "Fixação dos rail buttons",
            "description": "Na etapa de fixação dos Rails Buttons,são instalados em dois pontos da fuselagem: um posicionado no centro de gravidade do foguete e outro na altura média das aletas, garantindo estabilidade e correto guiamento no trilho de lançamento. A furação e a montagem devem assegurar perfeito alinhamento axial entre os dois Rails, evitando esforços laterais indesejados durante a decolagem. A fixação tem que ser realizada de forma estruturalmente reforçada, garantindo que o sistema suporte todos os esforços atuantes no lançamento.",
            "sourcePages": [
              11
            ]
          }
        ]
      },
      {
        "title": "Integração dos sistemas internos",
        "description": "Essa atividade consiste em fazer a fixação de todos os sistemas internos do foguete.",
        "sourcePages": [
          10,
          11
        ],
        "activities": [
          {
            "title": "Escolha do tamanho dos parafusos",
            "description": "Nessa atividade, são definidos os parafusos que serão utilizados no projeto, considerando critérios como resistência mecânica, material, peso e padronização. Deve-se sempre buscar manter um mesmo padrão de parafusos em todo o projeto, a fim de facilitar a montagem, manutenção e reposição.",
                        "objective": "os parafusos padrão a serem usados no projeto.",
            "tools": ["Computador", "Caderno"],
            "duration": "1h",
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Gabarito de furos",
            "description": "Levando em consideração as posições de cada sistema no projeto Openrocket e os CAD’s de cada suporte, é desenvolvido o gabarito, para garantir a concentricidade de todos os componentes e a entrada de ar para os sistemas de eletrônica e satélite.",
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Furar",
            "description": "É feito os furos de todos os componentes estruturais usando o gabarito como guia.",
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Integração de Propulsão",
            "description": "Essa etapa consiste na instalação do sistema de propulsão, cujo o principal objetivo é garantir que os componentes estruturais(transições e fuselagens) resistam a todo o esforço mecânico.",
                        "objective": "ao foguete, garantindo fixação segura do motor, alinhamento axial adequado e compatibilidade com a estrutura, assegurando transferência eficiente de cargas durante o voo.",
            "tools": ["Sistema de propulsão", "Parafusos", "Chaves", "EPI’s"],
            "duration": "3h",
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Integração de Recuperação",
            "description": "Essa etapa consiste na instalação do sistema de recuperação, cujo o principal objetivo é garantir que os componentes estruturais(transições e fuselagens) resistam a todo o esforço mecânico.",
                        "tools": ["Sistema de Recuperação", "Parafusos", "Chaves", "EPI’s"],
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Integração de Eletrônica",
            "description": "Esta atividade consiste na preparação da fuselagem para a recepção do sistema de eletrônica. O foco é garantir que a eletrônica esteja fixada de forma que evite rotações do sistema.",
                        "tools": ["Fácil montagem e desmontagem do sistema", "Noções de integração estrutural", "Manuseio de ferramentas"],
            "sourcePages": [
              11
            ]
          },
          {
            "title": "Integração de Satélite",
            "description": "Esta atividade consiste na preparação da fuselagem para a recepção do sistema de eletrônica. O foco é garantir que o satélite esteja fixado de forma que evite rotações do sistema.",
                        "objective": "fixação segura e proteção estrutural.",
            "tools": ["Sistema de Eletrônica", "Parafusos", "Chaves", "EPI’s"],
            "duration": "2h",
            "sourcePages": [
              11
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento da Aviônica",
    "description": "Definição do projeto teórico (materiais, módulos, estrutura, tamanho e massa), simulação e planejamento dos circuitos, testes com módulos existentes, aquisição e testes dos componentes necessários. Em seguida, monta-se o sistema com testes elétricos e de funcionamento, desenvolve-se e aprimora-se o código, cria-se o suporte em CAD e imprime-se em 3D. Após a montagem completa da aviônica, realiza-se a furação do tubo estrutural com base em um gabarito e são feitos testes funcionais, de estresse e de integração com outros setores do foguete. O processo é finalizado com a elaboração de um relatório de uso e desempenho do sistema.",
    "sourcePages": [
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "subprocesses": [
      {
        "title": "Definição do Projeto Teórico",
        "description": "Fazer pesquisa base para o projeto. Definir todos os componentes essenciais do projeto: materiais, módulos, estrutura do suporte e estimação do tamanho e massa do projeto completo. Gerar documento do projeto teórico. A partir disso é gerado uma lista de compras de componentes. Nessa etapa é definido: Microcontrolador, módulos, sensores e componentes. Estudo das combinações de componentes e melhor posicionamento nas placas eletrônicas de acordo com o propósito do circuito.",
        "sourcePages": [
          13
        ],
        "activities": []
      },
      {
        "title": "Simulação e Planejamento",
        "description": "Fazer simulação ou análise matemática dos circuitos envolvidos (circuito de processamento, acionamento e distribuição de energia). OBS.: Nem tudo é possível de ser simulado.",
        "sourcePages": [
          13
        ],
        "activities": []
      },
      {
        "title": "Testes Básicos",
        "description": "Montar circuito de processamento com os componentes adquiridos. Desenvolver o código do circuito. Teste de comunicação do microcontrolador com os módulos e sensores.",
        "sourcePages": [
          13,
          15,
          16
        ],
        "activities": [
          {
            "title": "Montagem do circuito de processamento e Testes",
            "description": "Montar circuito de processamento com os componentes adquiridos. Desenvolver o código do circuito. Teste de comunicação do microcontrolador com os módulos e sensores. Montar o circuito de processamento em protoboard com os componentes adquiridos, desenvolver o código básico de comunicação do microcontrolador com módulos e sensores, e validar o funcionamento de cada interface de comunicação.",
            "objective": "Montar o circuito de processamento em protoboard com os componentes adquiridos, desenvolver o código básico de comunicação do microcontrolador com módulos e sensores, e validar o funcionamento de cada interface de comunicação.",
            "tools": ["Protoboard", "Microcontrolador e sensores definidos no projeto", "Fonte de alimentação regulada", "Multímetro", "Computador com IDE de programação (Arduino IDE, VS Code + PlatformIO)", "Cabos e jumpers."],
            "duration": "10 horas",
            "collaborators": "2",
            "projectRisks": ["Falha de comunicação entre microcontrolador e módulos (problemas de endereçamento I2C/SPI)", "Incompatibilidade de tensão entre componentes", "Bugs no código que impeçam a leitura correta dos sensores."],
            "safetyRisks": [
              "Verificar a tensão máxima suportada por cada componente antes de energizar o circuito."
            ],
            "indicators": ["Todos os módulos e sensores comunicando corretamente com o microcontrolador", "Código de teste funcional com leitura e exibição dos dados de cada sensor", "Ausência de sobreaquecimento nos componentes durante a operação."],
            "skills": ["Programação em C/C++ para sistemas embarcados", "Protocolos de comunicação serial (I2C, SPI, UART)", "Uso de multímetro e ferramentas de medição eletrônica", "Montagem de circuitos em protoboard."],
            "sourcePages": [
              15,
              89,
              90
            ]
          },
          {
            "title": "Montagem do circuito de acionamento e Testes",
            "description": "Montar circuito de acionamento com os componentes adquiridos. Testar a funcionalidade geral do circuito. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc. Validar o circuito projetado inicialmente, detectar todas as avarias e corrigi-las. Testar o funcionamento do algoritmo, sensores e plataforma de captação de dados.",
            "objective": "Validar o circuito projetado inicialmente, detectar todas as avarias e corrigi-las. Testar o funcionamento do algoritmo, sensores e plataforma de captação de dados.",
            "tools": ["Protoboard", "Componentes do circuito de acionamento (MOSFETs, resistores, diodos, etc.)", "Fonte de alimentação", "Multímetro e osciloscópio", "Computador com IDE", "Resistência de carga para simulação de skibs."],
            "duration": "8 horas",
            "collaborators": "2",
            "projectRisks": [
              "Disparo acidental durante os testes;"
            ],
            "safetyRisks": ["Nunca conectar skibs reais durante testes de bancada; utilizar resistências de carga simuladas", "Garantir que o circuito de segurança (arm/disarm) esteja funcional antes dos testes."],
            "indicators": ["Circuito ativando a carga simulada nos tempos e tensões corretos", "Ausência de sobreaquecimento nos componentes de chaveamento", "Lógica de arm/disarm funcionando corretamente."],
            "skills": ["Eletrônica de potência e chaveamento", "Uso de multímetro e osciloscópio", "Programação de sinais de controle em microcontrolador", "Normas de segurança para circuitos pirotécnicos."],
            "sourcePages": [
              16,
              90,
              91
            ]
          },
          {
            "title": "Montagem do circuito de distribuição de energia e Testes",
            "description": "Montar circuito de distribuição de energia com os componentes adquiridos. Testar a funcionalidade geral do circuito. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc. Montar o circuito de distribuição e regulação de energia, verificar a correta entrega de tensão para cada subcircuito do sistema e realizar testes de características elétricas para garantir estabilidade e segurança.",
            "objective": "Montar o circuito de distribuição e regulação de energia, verificar a correta entrega de tensão para cada subcircuito do sistema e realizar testes de características elétricas para garantir estabilidade e segurança.",
            "tools": ["Protoboard", "Reguladores de tensão, capacitores, diodos e demais componentes de energia", "Fonte de bancada", "Multímetro e osciloscópio (para análise de ripple)", "Bateria LiPo utilizada no projeto."],
            "duration": "6 horas",
            "collaborators": "2",
            "projectRisks": ["Tensão de saída fora da especificação danificando componentes sensíveis", "Ripple excessivo causando instabilidade nos sensores", "Sobreaquecimento dos reguladores de tensão sob carga."],
            "safetyRisks": ["Risco de inversão de polaridade da bateria; verificar proteções contra inversão", "Cuidado com curto-circuito ao conectar a bateria LiPo."],
            "indicators": ["Tensões de saída dentro da especificação em todos os rails de alimentação", "Ripple dentro dos limites aceitos pelos componentes", "Reguladores operando em temperatura adequada sob carga nominal."],
            "skills": ["Eletrônica analógica e de potência", "Uso de osciloscópio para análise de sinais de tensão", "Conhecimento de reguladores lineares e chaveados", "Segurança no manuseio de baterias LiPo."],
            "sourcePages": [
              16,
              91,
              92
            ]
          },
          {
            "title": "Montagem do circuito X e Testes",
            "description": "OBS.: Similar aos anteriores. Pode ser que dependendo do projeto outros circuitos isolados apareçam. Montar e testar quaisquer circuitos adicionais que surjam durante o desenvolvimento do projeto e que não se enquadrem nas categorias de processamento, acionamento ou energia. A natureza deste circuito varia conforme a necessidade específica do projeto.",
            "objective": "Montar e testar quaisquer circuitos adicionais que surjam durante o desenvolvimento do projeto e que não se enquadrem nas categorias de processamento, acionamento ou energia. A natureza deste circuito varia conforme a necessidade específica do projeto.",
            "tools": ["Protoboard", "Componentes específicos do circuito adicional identificado no projeto", "Fonte de alimentação", "Multímetro", "Computador com IDE (se necessário código)."],
            "duration": "4 horas",
            "collaborators": "2",
            "projectRisks": ["Integração com os demais circuitos pode introduzir interferências não previstas", "Riscos específicos dependem do tipo de circuito adicional implementado."],
            "safetyRisks": [
              "Avaliar riscos de segurança específicos ao tipo de circuito sendo montado."
            ],
            "indicators": [
              "Circuito funcionando conforme os requisitos definidos;"
            ],
            "skills": ["Habilidades específicas ao tipo de circuito sendo desenvolvido", "Montagem e teste de circuitos eletrônicos em geral."],
            "sourcePages": [
              16,
              92,
              93
            ]
          }
        ]
      },
      {
        "title": "Testes Avançados e Refinamento",
        "description": "Refinamento do código com a lógica de acionamento desejada. Resolução de bugs. Teste de funcionalidade e Teste de características elétricas com o circuito completo (circuito de processamento, acionamento e distribuição de energia).",
        "sourcePages": [
          14,
          16
        ],
        "activities": [
          {
            "title": "Refinamento de código e Resolução de bugs nos códigos do projeto",
            "description": "Refinamento do código com a lógica de acionamento desejada. Resolução de bugs. Refinamento da redundância do circuito para acionamento. Testar todos os possíveis casos. Refinar o código com a lógica de acionamento definitiva, implementar redundâncias necessárias, resolver todos os bugs identificados e testar exaustivamente todos os casos possíveis de operação da aviônica.",
            "objective": "Refinar o código com a lógica de acionamento definitiva, implementar redundâncias necessárias, resolver todos os bugs identificados e testar exaustivamente todos os casos possíveis de operação da aviônica.",
            "tools": ["Computador com IDE (Arduino IDE, VS Code + PlatformIO)", "Hardware completo da aviônica (microcontrolador + circuitos)", "Monitor serial e debugger", "Osciloscópio (para diagnóstico de sinais)."],
            "duration": "8 horas",
            "collaborators": "2",
            "projectRisks": ["Bugs residuais que só se manifestam em condições específicas de voo", "Regressões após correções de bugs anteriores", "Lógica de acionamento com casos limite não cobertos."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Código passando em todos os casos de teste definidos", "Lógica de arm, disarm e acionamento verificada com redundância", "Zero bugs conhecidos antes da integração final", "Código versionado e documentado no repositório."],
            "skills": ["Boas práticas de versionamento Git/Github", "Programação em C/C++", "Estrutura de dados", "Arduino IDE", "Conhecimento profundo das bibliotecas próprias dos sensores e seu funcionamento", "Debug de algoritmo", "Alto desempenho lógico e matemático"],
            "sourcePages": [
              16,
              94
            ]
          },
          {
            "title": "Testes Avançados",
            "description": "Teste de funcionalidade geral e Teste de características elétricas com o circuito completo (circuito de processamento, acionamento e distribuição de energia). Realizar testes de funcionalidade geral e de características elétricas com o circuito completo integrado (processamento + acionamento + distribuição de energia), validando a operação conjunta de todos os subsistemas da aviônica.",
            "objective": "Realizar testes de funcionalidade geral e de características elétricas com o circuito completo integrado (processamento + acionamento + distribuição de energia), validando a operação conjunta de todos os subsistemas da aviônica.",
            "tools": [
              "Hardware completo da aviônica montada;"
            ],
            "duration": "26 horas",
            "collaborators": "3",
            "projectRisks": ["Interferência eletromagnética entre os circuitos ao operar simultaneamente", "Consumo de corrente total acima da capacidade da bateria", "Falhas intermitentes difíceis de reproduzir."],
            "safetyRisks": [
              "Utilizar resistências de carga no lugar de skibs reais durante testes de bancada."
            ],
            "indicators": ["Sistema completo funcionando de ponta a ponta sem falhas", "Consumo de corrente dentro do orçamento de energia definido", "Dados de telemetria recebidos corretamente no ground station", "Acionamento ocorrendo nos momentos corretos segundo a lógica programada."],
            "skills": ["Sistemas embarcados e integração de hardware", "Análise de sinais com osciloscópio", "Telemetria e comunicação sem fio", "Procedimentos de teste estruturado."],
            "sourcePages": [
              16,
              94,
              95
            ]
          }
        ]
      },
      {
        "title": "Produção Física e montagem",
        "description": "Desenvolver as placas de protótipo. Desenvolver o modelo CAD do suporte. Realizar a impressão 3D do suporte. Acoplar as placas no suporte. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte.",
        "sourcePages": [
          14,
          16
        ],
        "activities": [
          {
            "title": "Desenvolver as placas de protótipo",
            "description": "Realizar o CAD e a manufatura das placas de circuito impresso PCB´s e realizar sua validação",
            "sourcePages": [
              16
            ]
          },
          {
            "title": "Desenvolver o suporte",
            "description": "Desenvolver o modelo CAD do suporte. Validar CAD com a montagem virtual de todos os seus elementos (placas eletrônicas, etc). Realizar a impressão 3D do suporte ou adquirir os materiais para suporte (se não for feito com impressão 3D).",
                        "objective": "elementos e realizar a impressão 3D. Falha na impressão 3D ou dimensões incorretas do suporte, impedindo o acoplamento correto das placas. Risco de queimaduras no manuseio da impressora 3D. Suporte impresso com encaixe perfeito, sem folgas ou interferências mecânicas.",
            "tools": ["Computador", "Softwares de modelagem 3D (Fusion 360º)", "Instrumentos de medição paquímetro,", "Especificações dos demais setores e das placas eletrônicas", "datasheets dos módulos sensores e componentes eletrônicos"],
            "sourcePages": [
              16
            ]
          },
          {
            "title": "Montagem do projeto",
            "description": "Preparar fios de conexão entre placas eletrônicas. Acoplar as placas no suporte. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte.",
                        "tools": ["multímetro, alicates)", "Ferramentas de bancada (estação de solda,"],
            "duration": "6 horas.",
            "collaborators": "2",
            "sourcePages": [
              16
            ]
          }
        ]
      },
      {
        "title": "Integração com Outros Setores",
        "description": "Definir o gabarito de furos (acionamento, carregamento, altímetro). Furar o tubo de estrutura de teste com base no gabarito. Teste de alinhamento dos furos (com estrutura). Teste de fixação da aviônica na estrutura do foguete (com estrutura). Teste de acionamento dos paraquedas (com recuperação).",
        "sourcePages": [
          14,
          16,
          17
        ],
        "activities": [
          {
            "title": "Definir o gabarito de furos (acionamento, carregamento, altímetro etc)",
            "description": "Envolve buscar e definir como pode ser a melhor distribuição dos furos de acordo com a configuração da aviônica (tamanho, posição do barômetro). Idealmente, já deve se ter uma fórmula geral para isso. Documentação dos furos para que as pessoas",
            "sourcePages": [
              16
            ]
          },
          {
            "title": "Teste com a estrutura do foguete",
            "description": "Furar o tubo de estrutura de teste com base no gabarito. Teste de alinhamento dos furos (com estrutura). Teste de fixação da aviônica na estrutura do foguete (com estrutura). Furar o tubo de estrutura de teste com base no gabarito definido e verificar o alinhamento dos furos e a correta fixação da aviônica dentro do tubo estrutural.",
            "objective": "Furar o tubo de estrutura de teste com base no gabarito definido e verificar o alinhamento dos furos e a correta fixação da aviônica dentro do tubo estrutural.",
            "tools": ["Tubo de estrutura de teste furado conforme gabarito", "Aviônica montada", "Ferramentas de fixação", "Paquímetro."],
            "duration": "4 horas",
            "collaborators": "3",
            "projectRisks": [
              "Desalinhamento dos furos em relação ao gabarito;"
            ],
            "safetyRisks": [
              "Utilizar EPI adequado (óculos e luvas) durante a furação do tubo."
            ],
            "indicators": ["Furos alinhados conforme gabarito com tolerância definida", "Aviônica inserida e fixada corretamente no tubo sem folga excessiva", "Conectores externos acessíveis e funcionais pelos furos."],
            "skills": ["Uso de furadeira e ferramentas de usinagem básicas", "Leitura e aplicação de gabaritos mecânicos", "Montagem e integração de subsistemas."],
            "sourcePages": [
              17,
              98,
              99
            ]
          },
          {
            "title": "Teste com a recuperação do foguete",
            "description": "Teste de acionamento dos paraquedas (com recuperação). O teste serve para verificar se a aviônica e a recuperação estão alinhados. Realizar o teste conjunto da aviônica com o sistema de recuperação para verificar se o acionamento dos paraquedas ocorre nos momentos corretos e se a integração entre os dois sistemas está funcionando corretamente.",
            "objective": "Realizar o teste conjunto da aviônica com o sistema de recuperação para verificar se o acionamento dos paraquedas ocorre nos momentos corretos e se a integração entre os dois sistemas está funcionando corretamente.",
            "tools": ["Aviônica completa e funcional", "Sistema de recuperação (paraquedas, skibs, suporte de ejeção)", "Tubo de teste com furos realizados", "Bateria de teste", "Ferramentas de montagem."],
            "duration": "6 horas",
            "collaborators": "4",
            "projectRisks": ["Timing incorreto de acionamento do drogue ou paraquedas principal", "Falha na comunicação entre aviônica e circuito de acionamento dos skibs", "Acionamento acidental durante a montagem."],
            "safetyRisks": ["Nunca conectar skibs reais no primeiro teste de integração; usar resistências simuladas", "Estabelecer protocolo claro de arm/disarm antes de qualquer teste de acionamento real."],
            "indicators": [
              "Acionamento ocorrendo nos tempos corretos programados;"
            ],
            "skills": ["Integração de sistemas eletrônicos e mecânicos", "Procedimentos de segurança para sistemas pirotécnicos", "Comunicação e coordenação entre equipes (eletrônica e recuperação)."],
            "sourcePages": [
              17,
              99,
              100
            ]
          }
        ]
      },
      {
        "title": "Testes Funcionais e Testes de Estresse",
        "description": "Teste de fluxo de ar no foguete. Teste de vibração.",
        "sourcePages": [
          14,
          17
        ],
        "activities": [
          {
            "title": "Teste de fluxo de ar no foguete",
            "description": "O objetivo é verificar se os furos escolhidos no tubo de teste de estrutura estão bem posicionados de forma que o fluxo de ar gerado pela aceleração do foguete no decorrer do voo não cause acionamentos errôneos. Talvez seja necessário utilizar alguma espécie de espuma para impedir o fluxo de ar de circular pelo sensor de forma abrupta. O teste pode ser realizado com um túnel de vento idealmente. Os dados da aviônica de teste podem ser enviados via telemetria em tempo real para serem analisados quando a aviônica for posicionada no túnel de vento (ou similar).",
            "sourcePages": [
              17
            ]
          },
          {
            "title": "Teste de vibração",
            "description": "O objetivo é verificar se a aviônica suporta passar pela vibração do foguete durante o voo completo. Pode ser utilizada alguma máquina que gera vibrações de mesma intensidade que um foguete em voo. Depois de submetida nesta máquina durante o tempo estimado de voo, a aviônica deve ser analisada para verificar: soldagem eletrônica, funcionamento e leitura de todos os módulos e componentes, funcionamento geral do projeto etc.",
            "sourcePages": [
              17
            ]
          }
        ]
      },
      {
        "title": "Documentação",
        "description": "Relatório completo de uso e funcionamento do sistema.",
        "sourcePages": [
          14,
          17,
          18
        ],
        "activities": [
          {
            "title": "Produção de mídias",
            "description": "Realizar a produção de fotos, diagramas, tabelas, artes e qualquer tipo de mídia visual a serem implementadas no acervo do relatório geral.",
                        "objective": "projeto, documentando visualmente o hardware, os circuitos, o suporte e os resultados dos testes.",
            "tools": ["Câmera fotográfica ou smartphone", "Computador com software de edição (Figma, Canva, Inkscape ou similar)", "Software de diagramação técnica", "Protótipo físico e materiais do projeto para fotografar. fotos, diagramas,"],
            "duration": "5 horas",
            "sourcePages": [
              17
            ]
          },
          {
            "title": "Realização do relatório geral",
            "description": "Relatório completo de uso e funcionamento do sistema. Deve descrever as alterações que foram feitas em relação ao projeto teórico. Deve descrever o funcionamento de cada placa eletrônica. Deve descrever o posicionamento das placas no suporte. Deve descrever os parâmetros de impressão 3D. Deve descrever os modos de uso da aviônica etc. Ou seja, é uma",
                        "tools": ["Computador", "Software de edição de documentos (Google Docs, Word)", "Mídias produzidas (fotos, diagramas, tabelas)", "Dados dos testes realizados", "Projeto teórico documentado."],
            "duration": "15 horas",
            "collaborators": "3",
            "sourcePages": [
              17
            ]
          },
          {
            "title": "Revisão e melhorias",
            "description": "Após o documento estar completo, o coordenador se encarrega de re000visar o documento como um todo e indicar os principais pontos de Melhoria em formato de comentários que serão revisitados e corrigidos posteriormente pelos responsáveis de cada etapa do documento.",
                        "duration": "4 horas",
            "collaborators": "2",
            "sourcePages": [
              18
            ]
          }
        ]
      },
      {
        "title": "Definição do Projeto Teórico da Aviônica",
        "description": "",
        "sourcePages": [
          14,
          15
        ],
        "activities": [
          {
            "title": "Pesquisa base para o projeto",
            "description": "Envolve definir os requisitos funcionais e não funcionais da aviônica do projeto. Envolve pesquisar como a aviônica pode ser projetada para abarcar estes requisitos, tanto estruturalmente quanto funcionalmente. Envolve pesquisar e se baseiar em outras equipes e na literatura. Definir requisitos funcionais e não funcionais; entender as possibilidades estruturais e de funcionamento da aviônica.",
            "objective": "Definir requisitos funcionais e não funcionais; entender as possibilidades estruturais e de funcionamento da aviônica.",
            "tools": ["Computador com acesso à internet", "Artigos científicos e literatura técnica", "Projetos anteriores de aviônica", "Vídeos de referência"],
            "duration": "30 horas",
            "collaborators": "5",
            "projectRisks": [
              "Requisitos mal definidos podem impactar o hardware e o projeto como um todo. Essa é uma parte crítica e crucial para o bom andamento do projeto."
            ],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Profundidade da pesquisa e clareza na lista de requisitos gerada.", "Alto detalhamento técnico", "Bom uso de recursos visuais"],
            "skills": ["Alto conhecimento técnico em sistemas embarcados e programação em C/C++", "Visão analítica e metodologia de pesquisa científica", "Eletrônica Analógica e Digital.", "Sistemas de Telemetria e IOT", "Pesquisar em fontes legítimas e confiáveis"],
            "sourcePages": [
              14,
              84
            ]
          },
          {
            "title": "Definir módulos eletrônicos e sensores",
            "description": "Com base na pesquisa, definir todos os módulos, sensores e componentes eletrônicos que serão usados na aviônica. Deve ser cuidadosamente pensado para abranger todos os requisitos definidos no escopo inicial do projeto: redundância na leitura dos dados, requisitos de telemetria (distância, taxa de transmissão de dados) etc. Selecionar sensores e componentes que atendam aos requisitos de telemetria, redundância e taxa de transmissão.",
            "objective": "Selecionar sensores e componentes que atendam aos requisitos de telemetria, redundância e taxa de transmissão.",
            "tools": ["Computador", "Datasheets"],
            "duration": "Em média 1hr",
            "collaborators": "1",
            "projectRisks": ["Incompatibilidade entre componentes", "Escolha de sensores com precisão insuficiente."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": [
              "Garantir e mostra de maneira documentada que os módulos cobrem todos os requisitos do projeto teórico e apresentam compatibilidade técnica total entre os itens da lista de materiais"
            ],
            "skills": ["Conhecimento em eletrônica digital, analógica e IOT", "Interpretação de datasheets.", "Familiaridade nos tipos de comunicação SPI e I2C"],
            "sourcePages": [
              14,
              84,
              85
            ]
          },
          {
            "title": "Definir a estrutura do suporte das placas",
            "description": "Com base na escolha desses componentes, devemos pensar em formas de distribuir os componentes nas placas. E com base nisso e na pesquisa, definir melhor posicionamento das placas dentro do projeto de aviônica. Algumas escolhas possíveis Determinar o melhor posicionamento dos componentes nas PCB’s, assim como a posição das mesmas no suporte. Realizar o modelo 3D incial do que será o suporte da aviônica",
            "objective": "Determinar o melhor posicionamento dos componentes nas PCB’s, assim como a posição das mesmas no suporte. Realizar o modelo 3D incial do que será o suporte da aviônica",
            "tools": ["Computador", "Software Fusion 360º Autodesk"],
            "duration": "6 hrs",
            "collaborators": "2",
            "projectRisks": ["Mal posicionamento de trilhas e componentes", "Incompatibilidade de tamanho e ergonomia com os outros projetos setoriais"],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Precisão e organização na pesquisa e dados objetivos.", "Explicação técnica, clara e coesa"],
            "skills": ["Capacidade analítica.", "Boas práticas na criação de design de PCB", "Manuseio de um software de modelagem 3D"],
            "sourcePages": [
              14,
              85
            ]
          },
          {
            "title": "Gerar documento do projeto teórico",
            "description": "Definido os materiais, componentes e estrutura geral do projeto. Devemos fazer uma estimativa de parâmetros essenciais para o projeto do foguete como um todo: tamanho da aviônica, massa da aviônica etc. Por fim, um relatório completo do projeto teórico deve ser montado com todas as informações acima. Formalizar todos os dados do projeto teórico em um documento estruturado, incluindo componentes selecionados, estrutura do suporte, estimativas de massa e tamanho da aviônica, e lista de materiais necessários para aquisição.",
            "objective": "Formalizar todos os dados do projeto teórico em um documento estruturado, incluindo componentes selecionados, estrutura do suporte, estimativas de massa e tamanho da aviônica, e lista de materiais necessários para aquisição.",
            "tools": ["Computador", "Software de edição de documentos (Google Docs, Word, etc.)", "Dados consolidados do projeto teórico (componentes, massas, dimensões)."],
            "duration": "20 horas",
            "collaborators": "5",
            "projectRisks": ["Documento incompleto pode gerar retrabalho nas etapas seguintes", "Falta de atualização do documento após mudanças no projeto."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Documento claro, completo e padronizado com todas as informações do projeto teórico", "Parâmetros de massa e tamanho estimados com margem de erro definida", "Lista de materiais gerada e validada pela equipe."],
            "skills": ["Capacidade de síntese e documentação técnica", "Conhecimento dos componentes eletrônicos e suas especificações", "Domínio de ferramentas de edição de documentos."],
            "sourcePages": [
              15,
              86
            ]
          },
          {
            "title": "Gerar lista de compras de componentes",
            "description": "Nessa etapa é avaliado todos os componentes e materiais que já temos disponíveis no inventário e todos os que serão necessários adquirir. Ao final, uma lista de compras é gerada para adquirir os componentes. Levantar todos os componentes e materiais necessários para o projeto, comparar com o inventário disponível e gerar uma lista de compras completa com especificações técnicas e quantidades.",
            "objective": "Levantar todos os componentes e materiais necessários para o projeto, comparar com o inventário disponível e gerar uma lista de compras completa com especificações técnicas e quantidades.",
            "tools": ["Computador", "Planilha eletrônica (Google Sheets, Excel)", "Inventário atualizado dos componentes disponíveis", "Datasheets dos componentes necessários."],
            "duration": "2 horas",
            "collaborators": "2",
            "projectRisks": ["Componentes fora de estoque ou com longo prazo de entrega", "Erros na especificação dos componentes levando a incompatibilidades."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Lista de compras completa com especificações técnicas (tensão, corrente, encapsulamento) e fornecedores identificados", "Diferenciação clara entre itens disponíveis no inventário e itens a serem adquiridos."],
            "skills": ["Leitura e interpretação de datasheets", "Conhecimento de fornecedores de componentes eletrônicos", "Organização e controle de inventário."],
            "sourcePages": [
              15,
              86,
              87
            ]
          }
        ]
      },
      {
        "title": "Simulação e Planejamento do Projeto Teórico",
        "description": "",
        "sourcePages": [
          15
        ],
        "activities": [
          {
            "title": "Definir esquema elétrico entre os componentes e Analisar viabilidade de simulação",
            "description": "Montar o esquema elétrico de todos os circuitos do projeto: circuito de processamento, circuito de acionamento e circuito de energia. Envolve definir e pesquisar como os componentes se ligam uns aos outros em cada circuito de acordo com os seus objetivos. Por fim, definir quais serão os circuitos que serão simulados ou analisados por meio matemático (nem todos são possíveis). Essa simulação envolve: simular funcionamento, potência consumida, pontos de tensão, fluxo de corrente etc. Montar o esquemático elétrico completo de todos os circuitos do projeto (processamento, acionamento e distribuição de energia), definir como os componentes se interconectam e identificar quais circuitos serão simulados ou analisados matematicamente.",
            "objective": "Montar o esquemático elétrico completo de todos os circuitos do projeto (processamento, acionamento e distribuição de energia), definir como os componentes se interconectam e identificar quais circuitos serão simulados ou analisados matematicamente.",
            "tools": ["Computador", "Software de simulação/CAD de circuitos (Eagle, KiCad, LTSpice, etc)", "Datasheets dos componentes", "Calculadora ou planilha para análises matemáticas."],
            "duration": "8 horas",
            "collaborators": "2",
            "projectRisks": ["Erros no esquemático que só se manifestam na montagem física", "Circuitos mal dimensionados gerando sobreaquecimento ou falha de funcionamento", "Incompatibilidade de níveis de tensão entre módulos."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": ["Esquemático elétrico completo e devidamente documentado para todos os circuitos", "Análise de potência, corrente e tensão validada para cada subcircuito", "Lista de circuitos a simular claramente definida."],
            "skills": ["Eletrônica analógica e digital", "Uso de software de CAD de circuitos (KiCad ou similar)", "Interpretação de datasheets e notas de aplicação", "Análise de circuitos e cálculos de dimensionamento."],
            "sourcePages": [
              15,
              88
            ]
          },
          {
            "title": "Simular circuitos com os componentes e Documentar",
            "description": "Uma vez que os circuitos foram definidos, eles devem ser simulados e validados (para o caso dos circuitos que podem ser simulados ou analisados de forma matemática). Nesta etapa podem ocorrer ajustes. Depois, os circuitos e código (se houver) devem ser armazenados e documentados. Simular e validar os circuitos definidos no esquemático que permitem análise computacional, verificando funcionamento, potência consumida, pontos de tensão e fluxo de corrente. Documentar os resultados e registrar os circuitos que não puderam ser simulados.",
            "objective": "Simular e validar os circuitos definidos no esquemático que permitem análise computacional, verificando funcionamento, potência consumida, pontos de tensão e fluxo de corrente. Documentar os resultados e registrar os circuitos que não puderam ser simulados.",
            "tools": [
              "Computador;"
            ],
            "duration": "6 horas",
            "collaborators": "2",
            "projectRisks": ["Divergência entre o comportamento simulado e o real devido a simplificações dos modelos", "Circuitos sem modelos de simulação disponíveis exigindo validação experimental."],
            "safetyRisks": [
              "Não se aplica."
            ],
            "indicators": [".Simulação bem sucedida", "Diferentes testes de funcionamento para cada módulo", "Clareza e objetividade nos teste e na escrita do documento"],
            "skills": ["Resultados de simulação documentados com análise de funcionamento, tensões e correntes", "Registro dos circuitos que não puderam ser simulados e estratégia de validação adotada", "Documento de simulação arquivado e acessível à equipe."],
            "sourcePages": [
              15,
              88,
              89
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do sistema de leitura do banco estático",
    "description": "Definição do projeto teórico (materiais, módulos, estrutura e tamanho), simulação e planejamento dos circuitos, testes com módulos existentes, aquisição e testes dos componentes necessários. Em seguida, monta-se o sistema com testes elétricos e de funcionamento, desenvolve-se e aprimora-se o código, cria-se o suporte em CAD e imprime-se em 3D. Após a montagem completa do sistema de leitura são feitos testes funcionais, de estresse e de integração com o projeto de banco estático de propulsão. O processo é finalizado com a elaboração de um relatório de uso e desempenho do sistema.",
    "sourcePages": [
      12,
      18,
      19,
      20,
      21
    ],
    "subprocesses": [
      {
        "title": "Definição do Projeto Teórico",
        "description": "Fazer pesquisa base para o projeto. Definir todos os componentes essenciais do projeto: materiais, tipo da célula de carga, módulos e estrutura do suporte. Definir requisitos de desempenho do sistema (faixa de leitura, taxa de amostragem e erro máximo). Gerar documento do projeto teórico. A partir disso é gerado uma lista de compras de componentes. Nessa etapa é definido: Tipo de célula de carga ideal, intervalo de força medido e método de calibração etc. Estudo da célula de carga.",
        "sourcePages": [
          18,
          19
        ],
        "activities": [
          {
            "title": "Pesquisa base para o projeto",
            "description": "Envolve definir os requisitos funcionais e não funcionais da aviônica do projeto. Envolve pesquisar como o sistema deve ser projetado para abarcar estes requisitos, tanto estruturalmente quanto funcionalmente. Envolve pesquisar e se baseiar em outras equipes e na literatura.",
            "sourcePages": [
              19
            ]
          },
          {
            "title": "Definir módulos eletrônicos e sensores",
            "description": "Com base na pesquisa, definir todos os módulos, sensores e componentes eletrônicos que serão usados no projeto. Deve ser cuidadosamente pensado para abranger todos os requisitos definidos no escopo inicial do projeto: intervalo em Newtons de leitura de força da célula de carga etc.",
            "sourcePages": [
              19
            ]
          },
          {
            "title": "Gerar documento do projeto teórico",
            "description": "Definido os materiais, componentes e estrutura geral do projeto. Devemos fazer uma estimativa de parâmetros essenciais para o projeto do foguete como um todo: tamanho do sistema etc Por fim, um relatório completo do projeto teórico deve ser montado com todas as informações acima.",
            "sourcePages": [
              19
            ]
          },
          {
            "title": "Gerar lista de compras de componentes",
            "description": "Nessa etapa é avaliado todos os componentes e materiais que já temos disponíveis no inventário e todos os que serão necessários adquirir. Ao final, uma lista de compras é gerada para adquirir os componentes.",
            "sourcePages": [
              19
            ]
          }
        ]
      },
      {
        "title": "Simulação e Planejamento",
        "description": "Fazer simulação ou análise matemática de funcionamento do circuito de leitura do banco estático, incluindo estimativa de ruído, estabilidade do sinal e resposta dinâmica do sistema. OBS.: Nem tudo é possível de ser simulado.",
        "sourcePages": [
          18,
          19,
          20
        ],
        "activities": [
          {
            "title": "Definir esquema elétrico entre os componentes e",
            "description": "Montar o esquema elétrico de todos os circuitos do projeto. Envolve definir e pesquisar como os componentes se ligam uns aos outros em cada circuito de acordo com os seus objetivos.",
            "sourcePages": [
              19
            ]
          },
          {
            "title": "Analisar viabilidade de simulação",
            "description": "Por fim, definir quais serão os circuitos que serão simulados ou analisados por meio matemático (nem todos são possíveis). Essa simulação envolve: simular funcionamento, potência consumida, pontos de tensão, fluxo de corrente etc.",
            "sourcePages": [
              20
            ]
          },
          {
            "title": "Simular circuitos com os componentes e Documentar",
            "description": "Uma vez que os circuitos foram definidos, eles devem ser simulados e validados (para o caso dos circuitos que podem ser simulados ou analisados de forma matemática). Nesta etapa podem ocorrer ajustes. Depois, os circuitos e código (se houver) devem ser armazenados e documentados.",
            "sourcePages": [
              20
            ]
          }
        ]
      },
      {
        "title": "Montagem, Testes e Códigos",
        "description": "Montar circuito de leitura do banco estático com os componentes adquiridos. Desenvolver o código do circuito para leitura de dados do banco estático. Teste de comunicação do microcontrolador com os módulos e sensores. Testar a funcionalidade geral do circuito com a célula de carga. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc. Criar códigos auxiliares para: código para calibração da célula de carga, código para transmitir dados via telemetria e código para recepção de dados via telemetria. Refinamento de todos os códigos. Resolução de bugs.",
        "sourcePages": [
          18,
          20
        ],
        "activities": [
          {
            "title": "Montagem do circuito e Testes básicos",
            "description": "Montar circuito com os componentes adquiridos. Desenvolver o código do circuito. Teste de comunicação do microcontrolador com os módulos e sensores.",
                        "objective": "Montar o circuito físico em protoboard; desenvolver o código básico; testar comunicação inicial com os módulos e sensores.  Falhas de comunicação entre o microcontrolador",
            "tools": ["Protoboard, cabos e jumpers para conexões temporárias.", "Microcontrolador e Célula de Carga definidos no projeto", "Módulo HX711 e sensores auxiliares", "Multímetro para medições", "Computador com IDE (Arduino IDE, VS Code + PlatformIO)"],
            "duration": "6 horas.",
            "collaborators": "6 hrs 2",
            "sourcePages": [
              20
            ]
          },
          {
            "title": "Testes de funcionamento e parâmetros elétricos",
            "description": "Testar a funcionalidade geral do circuito com a célula de carga. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc.",
                        "objective": "elétricas críticas: sobreaquecimento, corrente sob carga, continuidade e tensão",
            "duration": "4 horas",
            "sourcePages": [
              20
            ]
          },
          {
            "title": "Criação de códigos auxiliares e resolução de bugs",
            "description": "Criar códigos auxiliares: código para calibração da célula de carga, código para transmitir dados via telemetria e código para recepção de dados via telemetria. É necessário testar esses códigos também. Resolver possíveis bugs no projeto e nos códigos.",
            "sourcePages": [
              20
            ]
          }
        ]
      },
      {
        "title": "Produção Física e Montagem",
        "description": "Desenvolver as placas de protótipo. Desenvolver o modelo CAD do suporte. Realizar a impressão 3D do suporte. Na montagem,",
        "sourcePages": [
          18
        ],
        "activities": []
      },
      {
        "title": "Testes Funcionais e Testes de Estresse",
        "description": "Teste de vibração da célula de carga durante a leitura de dados. Verificar se a possível vibração do motor durante os testes de banco estático influenciam a leitura da célula. Após a validação dos testes, deve ser feito um relatório completo de uso e funcionamento do sistema. Analisar como o projeto do sistema de leitura do banco estático se ajusta com o projeto do banco estático (de propulsão). Verificar a fixação da célula no banco estático, posicionamento do sistema durante os testes estáticos. Procedimento de uso durante o teste estático.",
        "sourcePages": [
          19,
          21
        ],
        "activities": [
          {
            "title": "Teste de vibração",
            "description": "Teste de vibração da célula de carga durante a leitura de dados. Verificar se a possível vibração do motor durante os testes de banco estático influenciam a leitura da célula.",
            "sourcePages": [
              21
            ]
          },
          {
            "title": "Teste de funcionamento com o banco estático",
            "description": "Analisar como o projeto do sistema de leitura do banco estático se ajusta com o projeto do banco estático (de propulsão). Verificar a fixação da célula no banco estático, posicionamento do sistema durante os testes estáticos. Procedimento de uso durante o teste estático.",
                        "tools": ["Banco estático de propulsão", "Célula de carga e completamente montados e calibrados; sistema de leitura"],
            "sourcePages": [
              21
            ]
          }
        ]
      },
      {
        "title": "Produção Física e Montagem Final",
        "description": "",
        "sourcePages": [
          20
        ],
        "activities": [
          {
            "title": "Desenvolver as placas de protótipo",
            "description": "Realizar o CAD e a manufatura das placas de circuito impresso PCB´s e realizar sua validação",
            "sourcePages": [
              20
            ]
          },
          {
            "title": "Desenvolver o suporte",
            "description": "Desenvolver o modelo CAD do suporte do sistema. Validar CAD com a montagem virtual de todos os seus elementos (placas eletrônicas, etc). Realizar a impressão 3D do suporte ou adquirir os materiais para suporte (se não for feito com impressão 3D).",
            "sourcePages": [
              20
            ]
          },
          {
            "title": "Montagem do projeto",
            "description": "Preparar fios de conexão entre placas eletrônicas. Acoplar as placas no suporte. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte. Teste de funcionamento geral do projeto.",
            "sourcePages": [
              20
            ]
          }
        ]
      },
      {
        "title": "Documentação",
        "description": "",
        "sourcePages": [
          21
        ],
        "activities": [
          {
            "title": "Produção de mídias",
            "description": "Realizar a produção de fotos, diagramas, tabelas, artes e qualquer tipo de mídia visual a serem implementadas no acervo do relatório geral.",
            "sourcePages": [
              21
            ]
          },
          {
            "title": "Documentação",
            "description": "Relatório completo de uso e funcionamento do sistema. Deve descrever as alterações que foram feitas em relação ao projeto teórico. Deve descrever o funcionamento de cada placa eletrônica. Deve descrever o posicionamento das placas no suporte. Deve descrever os parâmetros de impressão 3D. Deve descrever os modos de uso do projeto etc. Ou seja, é uma documentação completa do projeto de forma que seja reprodutível novamente com as mesmas características.",
            "sourcePages": [
              21
            ]
          },
          {
            "title": "Revisão e melhorias",
            "description": "Após o documento estar completo, o coordenador se encarrega de revisar o documento como um todo e indicar os principais pontos de Melhoria em formato de comentários que serão revisitados e corrigidos posteriormente pelos responsáveis de cada etapa do documento.",
            "sourcePages": [
              21
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do sistema de telemetria",
    "description": "Definição do projeto teórico (materiais, módulos, estrutura e tamanho) da recepção de dados, simulação e planejamento dos circuitos, testes com módulos existentes, aquisição e testes dos componentes necessários. Aquisição de antena direcional para a recepção dos dados. Em seguida, monta-se o sistema de recepção com testes elétricos e de funcionamento, cria-se o suporte em CAD e imprime-se em 3D. Após a montagem completa do sistema são feitos testes funcionais e comunicação dos dados com a aviônica de Eletrônica. O processo é finalizado com a elaboração de um relatório de uso e desempenho do sistema.",
    "sourcePages": [
      12,
      21,
      22,
      23,
      24,
      25
    ],
    "subprocesses": [
      {
        "title": "Definição do Projeto Teórico",
        "description": "Fazer pesquisa base para o projeto. Definir todos os componentes essenciais do projeto: materiais, módulos, estrutura do suporte e estimação do tamanho e massa do projeto completo. Gerar documento do projeto teórico. A partir disso é gerado uma lista de compras de componentes. Nessa etapa é definido: módulo de telemetria, o tipo de antena ideal e suas características, etc. Estudo do módulo de telemetria e tipo de antena escolhida.",
        "sourcePages": [
          21,
          22,
          23
        ],
        "activities": [
          {
            "title": "Pesquisa base para o projeto",
            "description": "Envolve definir os requisitos funcionais e não funcionais da aviônica do projeto. Envolve pesquisar como o sistema deve ser projetado para abarcar estes requisitos, tanto estruturalmente quanto funcionalmente. Envolve pesquisar e se baseiar em outras equipes e na literatura.",
            "sourcePages": [
              22
            ]
          },
          {
            "title": "Definir módulos eletrônicos e sensores",
            "description": "Com base na pesquisa, definir todos os módulos, sensores e componentes eletrônicos que serão usados no projeto. Deve ser cuidadosamente pensado para abranger todos os requisitos definidos no escopo inicial do projeto: módulo de telemetria com suficiente taxa de transmissão de dados, distância desejada etc.",
            "sourcePages": [
              22
            ]
          },
          {
            "title": "Gerar documento do projeto teórico",
            "description": "Definido os materiais, componentes e estrutura geral do projeto. Devemos fazer uma estimativa de parâmetros essenciais para o projeto do foguete como um todo: tamanho do sistema, massa total etc. Por fim, um relatório completo do projeto teórico deve ser montado com todas as informações acima.",
            "sourcePages": [
              22
            ]
          },
          {
            "title": "Gerar lista de compras de componentes",
            "description": "Nessa etapa é avaliado todos os componentes e materiais que já temos disponíveis no inventário e todos os que serão necessários adquirir. Ao final, uma lista de compras é gerada para adquirir os componentes.",
            "sourcePages": [
              23
            ]
          }
        ]
      },
      {
        "title": "Simulação e Planejamento",
        "description": "",
        "sourcePages": [
          23
        ],
        "activities": [
          {
            "title": "Definir esquema elétrico entre os componentes e Analisar viabilidade de simulação",
            "description": "Montar o esquema elétrico de todos os circuitos do projeto. Envolve definir e pesquisar como os componentes se ligam uns aos outros em cada circuito de acordo com os seus objetivos. Por fim, definir quais serão os circuitos que serão simulados ou analisados por meio matemático (nem todos são possíveis). Essa simulação envolve: simular funcionamento, potência consumida, pontos de tensão, fluxo de corrente etc.",
            "sourcePages": [
              23
            ]
          },
          {
            "title": "Simular circuitos com os componentes e Documentar",
            "description": "Uma vez que os circuitos foram definidos, eles devem ser simulados e validados (para o caso dos circuitos que podem ser simulados ou analisados de forma matemática). Nesta etapa podem ocorrer ajustes. Depois, os circuitos e código (se houver) devem ser armazenados e documentados.",
            "sourcePages": [
              23
            ]
          }
        ]
      },
      {
        "title": "Montagem, Testes e Códigos",
        "description": "",
        "sourcePages": [
          23
        ],
        "activities": [
          {
            "title": "Montagem do circuito e Testes básicos",
            "description": "Montar circuito com os componentes adquiridos em protoboard. Desenvolver o código do circuito. Testar a comunicação do microcontrolador com os módulos e sensores.",
            "sourcePages": [
              23
            ]
          },
          {
            "title": "Testes de funcionamento e parâmetros elétricos",
            "description": "Testar a funcionalidade geral do circuito como telemetria de dados. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão, etc.",
            "sourcePages": [
              23
            ]
          },
          {
            "title": "Melhoria de código e resolução de bugs",
            "description": "Refinamento do código com a transmissão e recepção desejada. Resolução de bugs. Teste de ajustes do módulo para máxima potência e máxima taxa de transmissão.",
            "sourcePages": [
              23
            ]
          }
        ]
      },
      {
        "title": "Produção Física e Montagem Final",
        "description": "",
        "sourcePages": [
          23,
          24
        ],
        "activities": [
          {
            "title": "Desenvolver as placas de protótipo",
            "description": "Realizar o CAD e a manufatura das placas de circuito impresso PCB´s e realizar sua validação.",
            "sourcePages": [
              23
            ]
          },
          {
            "title": "Desenvolver o suporte",
            "description": "Desenvolver o modelo CAD do suporte do sistema. Validar CAD com a montagem virtual de todos os seus elementos (placas",
            "sourcePages": [
              23
            ]
          },
          {
            "title": "Montagem do projeto",
            "description": "Acoplar as placas no suporte manufaturado. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte.",
            "sourcePages": [
              24
            ]
          },
          {
            "title": "Testes finais",
            "description": "Testes de funcionamento geral do projeto. Verificar continuidade e possíveis pontos de curto-circuito. Analisar transmissão e recepção de dados e validar formato dos dados enviados/recebidos etc.",
            "sourcePages": [
              24
            ]
          }
        ]
      },
      {
        "title": "Integração com Outros Setores",
        "description": "",
        "sourcePages": [
          24
        ],
        "activities": [
          {
            "title": "Teste de funcionamento com a aviônica",
            "description": "Analisar como o projeto do sistema de telemetria se ajusta com o projeto da aviônica de Eletrônica. Ou seja, avaliar como ocorre a comunicação entre eles.",
                        "tools": ["Computador", "Softwares técnicos ou CAD conforme etapa", "Instrumentos de medição (multímetro, paquímetro, fonte)", "Ferramentas manuais ou de bancada", "Componentes e materiais do projeto.", "Aviônica"],
            "duration": "4 horas.",
            "sourcePages": [
              24
            ]
          },
          {
            "title": "Teste de comunicação do websocket com API de dados",
            "description": "Realizar a comunicação do sistema de telemetria com a plataforma de captura de dados e analisar se realmente os dados estão sendo captados e apresentados corretamente",
            "sourcePages": [
              24
            ]
          }
        ]
      },
      {
        "title": "Testes Funcionais e Testes de Transmissão",
        "description": "",
        "sourcePages": [
          24
        ],
        "activities": [
          {
            "title": "Teste de distância máxima",
            "description": "Verificar a distância máxima para a transmissão e recepção dos dados.",
            "sourcePages": [
              24
            ]
          },
          {
            "title": "Teste de transmissão de dados",
            "description": "Verificar se o sistema de telemetria continua funcionando corretamente após os picos de correntes causados pela transmissão de dados ou alguma interferência eletromagnética.",
            "sourcePages": [
              24
            ]
          }
        ]
      },
      {
        "title": "Documentação",
        "description": "",
        "sourcePages": [
          24,
          25
        ],
        "activities": [
          {
            "title": "Produção de mídias",
            "description": "Realizar a produção de fotos, diagramas, tabelas, artes e qualquer tipo de mídia visual a serem implementadas no acervo do relatório geral.",
            "sourcePages": [
              24
            ]
          },
          {
            "title": "Realização do relatório geral",
            "description": "Relatório completo de uso e funcionamento do sistema. Deve descrever as alterações que foram feitas em relação ao projeto teórico. Deve descrever possíveis erros cometidos e cuidados a serem tomados. Deve descrever o funcionamento de cada placa eletrônica. Deve descrever o posicionamento das placas no suporte. Deve descrever os parâmetros de impressão 3D. Deve descrever os modos de uso do projeto etc. Ou seja, é uma",
            "sourcePages": [
              24
            ]
          },
          {
            "title": "Revisão e melhorias",
            "description": "Após o documento estar completo, o coordenador se encarrega de revisar o documento como um todo e indicar os principais pontos de Melhoria em formato de comentários que serão revisitados e corrigidos posteriormente pelos responsáveis de cada etapa do documento.",
            "sourcePages": [
              25
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento da caixa de carregamento",
    "description": "Definição do projeto teórico (materiais, módulos, estrutura e tamanho), simulação e planejamento dos circuitos, testes com módulos existentes, aquisição e testes dos componentes necessários. Em seguida, monta-se o sistema com testes elétricos e de funcionamento, cria-se o suporte em CAD e imprime-se em 3D. Após a montagem completa do sistema são feitos testes funcionais, de estresse e de integração com o",
    "sourcePages": [
      12,
      25,
      26,
      27
    ],
    "subprocesses": [
      {
        "title": "Definição do Projeto Teórico",
        "description": "Fazer pesquisa base para o projeto. Definir todos os componentes essenciais do projeto: materiais, módulos, estrutura do suporte e estimação do tamanho e massa do projeto completo. Gerar documento do projeto teórico. A partir disso é gerado uma lista de compras de componentes. Nessa etapa é definido: módulo de carregamento, proteções do circuito etc. Estudo do módulo de carregamento.",
        "sourcePages": [
          25,
          26
        ],
        "activities": [
          {
            "title": "Pesquisa base para o projeto",
            "description": "Envolve definir os requisitos funcionais e não funcionais da aviônica do projeto. Envolve pesquisar como o sistema deve ser projetado para abarcar estes requisitos, tanto estruturalmente quanto funcionalmente. Envolve pesquisar e usar a criatividade.",
            "sourcePages": [
              25
            ]
          },
          {
            "title": "Definir módulos eletrônicos e sensores",
            "description": "Com base na pesquisa, definir todos os módulos, sensores e componentes eletrônicos que serão usados no projeto. Deve ser cuidadosamente pensado para abranger todos os requisitos definidos no escopo inicial do projeto: módulo de carregamento adequado etc.",
            "sourcePages": [
              26
            ]
          },
          {
            "title": "Gerar documento do projeto teórico",
            "description": "Por fim, um relatório completo do projeto teórico deve ser montado com todas as informações acima.",
            "sourcePages": [
              26
            ]
          },
          {
            "title": "Gerar lista de compras de componentes",
            "description": "Nessa etapa é avaliado todos os componentes e materiais que já temos disponíveis no inventário e todos os que serão necessários adquirir. Ao final, uma lista de compras é gerada para adquirir os componentes.",
            "sourcePages": [
              26
            ]
          }
        ]
      },
      {
        "title": "Montagem e Testes",
        "description": "Montar circuito de carregamento com os componentes adquiridos. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc.",
        "sourcePages": [
          25
        ],
        "activities": []
      },
      {
        "title": "Produção e Montagem Final",
        "description": "Desenvolver o modelo CAD do suporte. Realizar a impressão 3D do suporte. Realizar a montagem dos componentes no suporte.",
        "sourcePages": [
          25,
          26
        ],
        "activities": [
          {
            "title": "Desenvolver o suporte",
            "description": "Desenvolver o modelo CAD do suporte do sistema. Validar CAD com a montagem virtual de todos os seus elementos (placas eletrônicas, etc…).",
            "sourcePages": [
              26
            ]
          },
          {
            "title": "Imprimir o suporte",
            "description": "Enviar o arquivo stl para o software creality e enviar o arquivo para a impressora 3d).",
                        "tools": ["Computador ou estação de trabalho", "Software de fatiamento como o Creality slicer"],
            "duration": "2 horas.",
            "sourcePages": [
              26
            ]
          },
          {
            "title": "Montagem do projeto",
            "description": "Acoplar os componentes eletrônicos no suporte. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte. Teste de funcionamento geral do projeto.",
            "sourcePages": [
              26
            ]
          }
        ]
      },
      {
        "title": "Integração com Outros Setores",
        "description": "Nessa etapa será feita a validação com o sistema de aviônica de Eletrônica. A aviônica possui as baterias que a caixa de carregamento deverá carregar corretamente.",
        "sourcePages": [
          25,
          26
        ],
        "activities": [
          {
            "title": "Teste de funcionamento com a aviônica",
            "description": "Nessa etapa será feita a validação com o sistema de aviônica de Eletrônica. A aviônica possui as baterias que a caixa de carregamento deverá carregar corretamente.",
            "sourcePages": [
              26
            ]
          }
        ]
      },
      {
        "title": "Documentação",
        "description": "Relatório completo de uso e funcionamento do sistema.",
        "sourcePages": [
          25,
          27
        ],
        "activities": [
          {
            "title": "Coleção e Anexação de Mídias",
            "description": "Coletar fotos dos processos e componentes, tabelas e diagramas para futura anexação no relatório.",
                        "tools": ["Computador", "celular", "Softwares de planilha e geração de diagramas"],
            "duration": "3 horas.",
            "sourcePages": [
              27
            ]
          },
          {
            "title": "Produção do relatório",
            "description": "Seguindo as normas para documentos técnicos da Cactus Rockets, iniciar a produção do relatório completo de uso e funcionamento do sistema. Deve descrever as alterações que foram feitas em relação ao projeto teórico. Deve descrever o funcionamento de cada placa eletrônica. Deve descrever o posicionamento das placas no suporte. Deve descrever os parâmetros de impressão 3D. Deve descrever os modos de uso do projeto etc. Ou seja, é uma documentação completa do projeto de forma que seja reprodutível novamente com as mesmas características.",
                        "objective": "• Computador ou estação de trabalho; • Softwares técnicos ou CAD conforme etapa; • Instrumentos de medição (multímetro, paquímetro, fonte); • Artigos científicos • Vídeos da internet • 10 horas. • 2. Relatar detalhadamente o processo de produção desse projeto da parte teórica até a prática com alto",
            "tools": ["Computador ou estação de trabalho", "Softwares técnicos ou CAD conforme etapa", "Instrumentos de medição (multímetro, paquímetro, fonte)", "Artigos científicos", "Vídeos da internet"],
            "duration": "10 horas.",
            "sourcePages": [
              27
            ]
          },
          {
            "title": "Revisão, Problemas e Melhorias",
            "description": "Após o desenvolvimento e conclusão do relatório, revisar o documento, observações relativas aos problemas enfrentados durante a realização do projeto, além de sugestões de como evitar que se repitam.",
                        "tools": ["Computador"],
            "duration": "4 horas.",
            "sourcePages": [
              27
            ]
          }
        ]
      },
      {
        "title": "Montagem Preliminar e Testes",
        "description": "",
        "sourcePages": [
          26
        ],
        "activities": [
          {
            "title": "Montagem do circuito e Testes básicos",
            "description": "Montar circuito com os componentes adquiridos. Verificar o comportamento dos módulos.",
            "sourcePages": [
              26
            ]
          },
          {
            "title": "Testes de funcionamento e parâmetros elétricos",
            "description": "Testar a funcionalidade geral do circuito. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc.",
            "sourcePages": [
              26
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do sistema de ignição",
    "description": "Definição do projeto teórico (materiais, módulos, estrutura e tamanho), simulação e planejamento dos circuitos, testes com módulos existentes, aquisição e testes dos componentes necessários. Em seguida, monta-se o sistema com testes elétricos e de funcionamento, cria-se o suporte em CAD e manufatura-se. Após a montagem completa do sistema é feito o teste de acionamento dos skibs. O processo é finalizado com a elaboração de um relatório de uso e desempenho do sistema.",
    "sourcePages": [
      13,
      27,
      28,
      29
    ],
    "subprocesses": [
      {
        "title": "Definição do Projeto Teórico",
        "description": "Fazer pesquisa base para o projeto. Definir todos os componentes essenciais do projeto: materiais, chaves de acionamento, estrutura do suporte e estimação do tamanho e massa do projeto completo. Dimensionamento da corrente necessária para acionar os skibs. Gerar documento do projeto teórico e esquemático elétrico. A partir disso é gerado uma lista de compras de componentes.",
        "sourcePages": [
          27,
          28
        ],
        "activities": [
          {
            "title": "Pesquisa base para o projeto",
            "description": "Envolve definir os requisitos funcionais e não funcionais do projeto. Envolve pesquisar como o sistema deve ser projetado para abarcar estes requisitos, tanto estruturalmente quanto funcionalmente.",
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Definir módulos eletrônicos",
            "description": "Com base na pesquisa, definir todos os componentes eletrônicos que serão usados no projeto. Deve ser cuidadosamente pensado para abranger todos os requisitos definidos no escopo inicial do projeto: chaves de acionamento, baterias etc.",
                        "tools": ["Circuitos elétricos"],
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Gerar documento do projeto teórico",
            "description": "Por fim, um relatório completo do projeto teórico deve ser montado com todas as informações acima.",
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Gerar lista de compras de componentes",
            "description": "Nessa etapa é avaliado todos os componentes e materiais que já temos disponíveis no inventário e todos os que serão necessários adquirir. Ao final, uma lista de compras é gerada para adquirir os componentes.",
            "sourcePages": [
              28
            ]
          }
        ]
      },
      {
        "title": "Montagem e Testes",
        "description": "Montar circuito de acionamento com os componentes adquiridos para validação. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc.",
        "sourcePages": [
          27,
          28
        ],
        "activities": [
          {
            "title": "Montagem do circuito e Testes básicos",
            "description": "Montar circuito com os componentes adquiridos. Verificar o comportamento dos componentes.",
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Testes de funcionamento e parâmetros elétricos",
            "description": "Testar a funcionalidade geral do circuito. Teste de características elétricas: sobreaquecimento, corrente, continuidade, tensão etc.",
            "sourcePages": [
              28
            ]
          }
        ]
      },
      {
        "title": "Produção e Montagem Final",
        "description": "Desenvolvimento do modelo CAD do suporte. Manufatura da estrutura. Fixação definitiva dos componentes na estrutura final. Soldagem dos cabos e conectores robustos.",
        "sourcePages": [
          27,
          28
        ],
        "activities": [
          {
            "title": "Desenvolver o suporte",
            "description": "Desenvolver o modelo CAD do suporte do sistema. Validar CAD com a montagem virtual de todos os seus elementos. Realizar a impressão 3D do suporte ou adquirir os materiais para suporte (se não for feito com impressão 3D).",
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Montagem do projeto",
            "description": "Acoplar os componentes eletrônicos no suporte. Realizar as devidas conexões. Teste básico de firmeza dos componentes no suporte. Teste de funcionamento geral do projeto.",
            "sourcePages": [
              28
            ]
          }
        ]
      },
      {
        "title": "Integração com Outros Setores",
        "description": "Validação operacional conjunta com o setor de Propulsão durante a realização do Teste de Queima. Verificação prévia de segurança e execução da sequência de acionamento em estágios para a ignição real do motor, garantindo a eficácia e segurança do disparo.",
        "sourcePages": [
          27,
          28,
          29
        ],
        "activities": [
          {
            "title": "Preparação do Setup de Segurança",
            "description": "Em conjunto com o setor de Propulsão, definir o perímetro de segurança. Posicionar a caixa de ignição na distância segura estabelecida. Estender os cabos da caixa até a bancada do",
            "sourcePages": [
              28
            ]
          },
          {
            "title": "Conexão e Teste de Continuidade",
            "description": "Verificar a tensão das baterias e realizar teste de continuidade dos fios da extensão antes de conectar ao motor.",
                        "objective": "fios de extensão e do skib utilizando o multímetro antes de conectá-lo ao motor.",
            "tools": ["Multímetro", "Skib"],
            "sourcePages": [
              29
            ]
          },
          {
            "title": "Análise Pós-Teste",
            "description": "Após o teste, desconectar o sistema. Inspecionar os conectores e a fiação próxima ao motor para verificar se houve danos por calor ou detritos. Registrar se o sistema funcionou na primeira tentativa ou se houve falhas.",
                        "objective": "a tubeira e os conectores por danos causados pelo calor, e registrar possíveis falhas ou atrasos na ignição.",
            "tools": ["EPIs adequados para aproximação"],
            "duration": "1 hora",
            "sourcePages": [
              29
            ]
          }
        ]
      },
      {
        "title": "Documentação",
        "description": "Relatório completo de uso e funcionamento do sistema.",
        "sourcePages": [
          27,
          29
        ],
        "activities": [
          {
            "title": "Produção de mídias",
            "description": "Realizar a produção de fotos, diagramas, tabelas, artes e qualquer tipo de mídia visual a serem implementadas no acervo do relatório geral.",
            "sourcePages": [
              29
            ]
          },
          {
            "title": "Documentação",
            "description": "Relatório completo de uso e funcionamento do sistema. Deve descrever as alterações que foram feitas em relação ao projeto teórico. Deve descrever os modos de uso do projeto etc. Ou seja, é uma documentação completa do projeto de forma que seja reprodutível novamente com as mesmas características.",
            "sourcePages": [
              29
            ]
          },
          {
            "title": "Revisão, Problemas e Melhorias",
            "description": "Após o desenvolvimento e conclusão do relatório, revisar o documento, observações relativas aos problemas enfrentados durante a realização do projeto, além de sugestões de como evitar que se repitam.",
            "sourcePages": [
              29
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento de placas eletrônicas",
    "description": "Tem-se nesse momento as conexões dos componentes da placa já estabelecida. Desenvolvimento do esquemático e layout da placa em software de PCB. Escolher o método de prototipação da placa (CNC, laser ou fotossensível). Exportar arquivo de placa do software e manufaturar a placa. Fazer testes na placa. Soldagem dos componentes na placa. Fazer testes na placa soldada.",
    "sourcePages": [
      13,
      29,
      30
    ],
    "subprocesses": [
      {
        "title": "Desenvolver esquemático de conexões e Layout das PCBs",
        "description": "Considerando que já testamos os circuitos de um determinado projeto. Precisamos desenvolver o esquemático de todas as placas associadas ao projeto. depois, devemos fazer o layout das placas ajustando as dimensões de acordo com os requisitos do projeto.",
        "sourcePages": [
          29,
          30
        ],
        "activities": [
          {
            "title": "Desenvolver esquemático elétrico",
            "description": "Desenvolver o esquemático de todas as placas associadas ao projeto.",
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Desenvolver layout das PCBs",
            "description": "Desenvolver o layout das placas ajustando as dimensões de acordo com os requisitos do projeto.",
                        "tools": ["Computador", "Software de CAD de PCB (KiCad, Altium ou similar)", "Datasheets dos componentes selecionados"],
            "duration": "16 horas",
            "collaborators": "1",
            "sourcePages": [
              30
            ]
          }
        ]
      },
      {
        "title": "Manufaturar as PCBs",
        "description": "Exportamos os arquivos das placas em algum formato compatível (gerber, por exemplo). Utilizamos algum método de manufatura para produzir as placas. Caso o método de manufatura não faça os furos, devemos fazer os furos manualmente. Testar conexões. Caso as conexões estejam inadequadas, corrigir.",
        "sourcePages": [
          29,
          30
        ],
        "activities": [
          {
            "title": "produção de arquivo para a manufatura de PCBs",
            "description": "Exportamos os arquivos das placas em algum formato compatível (gerber, por exemplo). Utilizamos algum método de manufatura para produzir as placas.",
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Furar as PCBs",
            "description": "Caso o método de manufatura não faça os furos, devemos fazer os furos manualmente. Furos de vias, pads e furos de fixação.",
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Teste de conexões",
            "description": "Testar conexões. Caso as conexões estejam inadequadas, corrigir.",
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Soldar as PCBs",
            "description": "Soldagem de todas as vias e conexões nas placas. Soldagem de todos os componentes nas placas.",
                        "tools": ["PCB estágio 2", "Ferro de solda", "Estanho", "Fluxo de solda", "Componentes selecionados", "Datasheets dos componentes selecionados", "Fios."],
            "duration": "10 horas",
            "sourcePages": [
              30
            ]
          }
        ]
      },
      {
        "title": "Preparações finais nas PCBs",
        "description": "Testar conexões. Caso as conexões estejam inadequadas, corrigir. Testar soldagem. Caso a soldagem esteja inadequada, corrigir.",
        "sourcePages": [
          29,
          30
        ],
        "activities": [
          {
            "title": "Teste de conexões pós soldagem",
            "description": "Testar conexões pós soldagem. Caso as conexões estejam inadequadas, corrigir.",
                        "tools": ["Multimetro", "PCB estágio 3(Cortada, desenhada, furada e com componentes soldados)"],
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Teste de soldagem",
            "description": "Testar soldagem. Caso a soldagem esteja inadequada, corrigir.",
            "sourcePages": [
              30
            ]
          },
          {
            "title": "Acabamento das PCBs",
            "description": "Dar um acabamento na placa, tanto melhorando seu aspecto visual quanto melhorando alguma característica para trazer confiabilidade nas conexões do circuito.",
                        "tools": ["Palha de aço", "Lixas", "Micro retifica", "Fita isolante", "PCB estágio 3(Cortada, desenhada, furada e com componentes soldados)."],
            "sourcePages": [
              30
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Criação da Identidade Visual do Foguete",
    "description": "Com base no nome e missão do projeto do foguete, a identidade visual dele é criada. O objetivo é juntar elementos que transmitam o que a equipe quer passar e alcançar com o foguete e, a partir deles, estabelecer cores, tipografia e outros elementos visuais que serão consolidados no patch do projeto e no design visual da fuselagem do foguete.",
    "sourcePages": [
      31
    ],
    "subprocesses": []
  },
  {
    "title": "Criação da Identidade Visual",
    "description": "",
    "sourcePages": [
      31,
      32
    ],
    "subprocesses": [
      {
        "title": "Criação do Patch do Foguete",
        "description": "A partir dos elementos definidos para a identidade visual, é necessário criar um patch, que reúne os símbolos mais significativos num “emblema” ou “logo” do projeto do foguete. Sua criação utiliza softwares de criação e edição de imagem e a arte deve ser um produto digital.",
        "sourcePages": [
          31,
          32
        ],
        "activities": [
          {
            "title": "Pesquisa Exploratória",
            "description": "A identidade visual do foguete é definida a partir da pesquisa de elementos que coincidam com o significado que o projeto possui para a equipe e também com o seu nome. Comumente, a equipe homenageia cientistas, então elementos visuais atrelados à contribuições deles são opções imediatas acessíveis que também ajudam a definir cores e tipografia.",
            "sourcePages": [
              31
            ]
          },
          {
            "title": "Definição das Propriedades Visuais",
            "description": "Depois de ter realizado a pesquisa e o levantamento de vários elementos visuais, cores, fontes, formatos e etc., além de outros exemplos de patch, é necessário escolher aqueles que melhor transmitem a ideia desejada. Toda propriedade escolhida deve ser documentada.",
                        "tools": ["Noção de design visual", "Documentação."],
            "sourcePages": [
              31
            ]
          },
          {
            "title": "Design do Patch",
            "description": "Com base no documento da identidade visual e utilizando um software de criação e edição de imagem, o patch é",
                        "tools": ["Computador. Em média"],
            "duration": "6 horas",
            "sourcePages": [
              31
            ]
          }
        ]
      },
      {
        "title": "Criação do Design Visual da Fuselagem do Foguete",
        "description": "Tendo estabelecido a identidade visual e seu eventual patch, com tendo em mente as dimensões do foguete e o alinhamento dos furos na fuselagem, além de outras informações como divisão da fuselagem em partes, um design visual é criado para ela, também em softwares de criação e edição de imagem. O produto é uma arte gráfica que será pintada ou adesivada na fuselagem.",
        "sourcePages": [
          31,
          32
        ],
        "activities": [
          {
            "title": "Obtenção de Informações",
            "description": "As dimensões do foguete, a divisão em sua fuselagem em tubos, a orientação dos furos nela, o número de aletas e as dimensões delas e da coifa são obtidos. Essas informações são vitais para fazer o design da fuselagem de maneira bem seccionada e que manterá o alinhamento da arte, caso ela seja dividida em mais de um tubo. Outras informações importantes incluem o número de patrocinadores que terão sua logo na arte e o tamanho de cada uma delas, além de a disposição destes elementos em conjunto com a logo da equipe e da Univasf.",
            "sourcePages": [
              32
            ]
          },
          {
            "title": "Design da Fuselagem",
            "description": "Já tendo em mãos todos os elementos previamente estabelecidos na identidade visual e as informações vitais descritas acima, através de um software de criação e edição de imagem, o design visual da fuselagem é criado. É importante ressaltar que, tratando-se de uma arte gráfica, as configurações dela são diferentes de uma arte digital. Elementos não utilizados no patch, mas que foram aprovados, podem ser incluídos aqui.",
                        "tools": ["Computador ou artigos de desenho. Em média"],
            "duration": "6 horas",
            "sourcePages": [
              32
            ]
          },
          {
            "title": "Aplicação do Design na fuselagem",
            "description": "Assim que o design da fuselagem estiver pronto, é possível fazer o produto final, que seria a aplicação dele na fuselagem. Isso pode ser feito através da plotagem dos tubos da fuselagem ou pintando-o. É vital que haja uma marca de orientação para manter o alinhamento da arte no caso da fuselagem ser dividida. Por fim, é aplicado qualquer produto que preserve a integridade da arte, pois ela será exposta à intemperismos físicos.",
            "sourcePages": [
              32
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do Motor",
    "description": "Iniciando do projeto teórico, onde são compostos os dimensionamentos, consultas de referências bibliográficas e cálculos analíticos, parte-se para a parte de desenvolvimento computacional, fazendo a modelagem em CAD e a simulação computacional. Atendendo aos parâmetros estruturais, inicia-se a manufatura de todos seus componentes (cabeçote, câmara e tubeira). Garantindo a tolerância de projeto, são feitos os testes de validação e, desde que os resultados estejam coerentes com o projeto teórico (ou das tolerâncias do mesmo), o motor está finalizado.",
    "sourcePages": [
      33,
      34,
      35,
      36
    ],
    "subprocesses": [
      {
        "title": "Projeto Teórico",
        "description": "A partir dos dados e demandas da competição ou missão que a equipe participará, busca-se uma iteração (simulação alimentada por dados para gerar um resultado desejado de apogeu e empuxo) condizente com as exigências utilizando as tabelas Exalt e SRM para determinar os dados.",
        "sourcePages": [
          34,
          35
        ],
        "activities": [
          {
            "title": "Missão do motor",
            "description": "A cada motor é dada uma missão a qual ele deve cumprir, seja em lançamentos oficiais, não oficiais ou pontos de estudo do setor",
                        "tools": ["Computador", "Papel", "Caneta. Em média"],
            "duration": "1h",
            "sourcePages": [
              34
            ]
          },
          {
            "title": "condições de contorno",
            "description": "Cada missão entrega uma certa condição de contorno ou meta para alcançar, em motores de lançamento é desejado pelo menos a massa total e o diametro previstos do foguete,",
            "sourcePages": [
              34
            ]
          },
          {
            "title": "idealização e tabelas SRM e Exalt",
            "description": "Com os parâmetros bem definidos, passamos para a idealização de pontos e possibilidades, sempre verificando a disponibilidade de materiais (como diâmetro e materiais de tubos comerciais), e iterações na tabela SRM a fim de encontrar o melhor escolha de dados técnicos de pressão, empuxo, apogeu etc.",
                        "objective": "empuxo teórica e apogeu",
            "tools": ["Computador", "Planilha SRM", "Planilha Exalt."],
            "duration": "2h",
            "sourcePages": [
              35
            ]
          }
        ]
      },
      {
        "title": "Verificações estruturais",
        "description": "Cálculos estruturais (com fatores de segurança) são realizados para decidir dimensões adequadas para que o motor suporte a pressão, temperatura e impacto que serão colocados sobre ele.",
        "sourcePages": [
          34,
          35
        ],
        "activities": [
          {
            "title": "Cálculos",
            "description": "Com a pressão de operação do motor bem definida e as dimensões de diâmetro de câmara, comprimento e ângulo de convergente e divergente, partimos para a realização de cálculos estruturais, a fim de encontrar a espessura mínima de cada um dos componentes, numero de parafusos laterais ou de roscas e vedações. A tensão de escoamento dos materiais deve ser previamente analisada e corrigida com base nos efeitos dinâmicos e de temperatura no motor",
            "sourcePages": [
              35
            ]
          },
          {
            "title": "Simulações",
            "description": "São feitas simulações estruturais e/ou fluidas de escoamento para verificar como a geometria próxima da real vai se comportar, por sua vez, simulações devem ser validadas com estudos e parâmetros bem definidos (artigos e tensão de Von Misses obtida nos cálculos)",
                        "tools": ["Computador", "Inventor", "Ansys."],
            "duration": "4h",
            "collaborators": "ou 4 dias 2 ou mais",
            "sourcePages": [
              35
            ]
          }
        ]
      },
      {
        "title": "CAD’s",
        "description": "Modelar o motor em CAD 3D para obter o dimensionamento físico experimental dele.",
        "sourcePages": [
          34,
          35
        ],
        "activities": [
          {
            "title": "Desenhos",
            "description": "Após as dimensões serem obtidas com as verificações estruturais, podemos partir para a modelagem e desenho em CAD com base nessas dimensões, esses CAD’s devem ser feitos considerando a manufatura e o peso final do motor.",
                        "objective": "simulações.",
            "tools": ["Computador", "inventor. 3 -"],
            "duration": "5h",
            "sourcePages": [
              35
            ]
          }
        ]
      },
      {
        "title": "Manufatura do motor",
        "description": "Obtenção de materiais e realização de um plano de manufatura para produzir o motor fisicamente.",
        "sourcePages": [
          34,
          35,
          36
        ],
        "activities": [
          {
            "title": "Plano de manufatura",
            "description": "Com os desenhos bem definidos, é feito um planejamento de como as peças serão feitas, detalhando o maquinário, ferramentas e etapas de processo.",
                        "objective": "operação com detalhamento técnico para realizar a usinagem.",
            "tools": ["Computador", "word ou docs. 1 a"],
            "duration": "2h",
            "sourcePages": [
              35
            ]
          },
          {
            "title": "Designação",
            "description": "A designação de membros ou até empresas que possam fazer tal atividade é feita com base na experiência e nível de domínio da pessoa.",
                        "tools": ["Computador", "Word ou docs."],
            "duration": "30 min",
            "collaborators": "1",
            "sourcePages": [
              36
            ]
          },
          {
            "title": "Usinagem",
            "description": "usinagem das peças com base no plano de manufatura",
            "sourcePages": [
              36
            ]
          },
          {
            "title": "Montagem",
            "description": "Com as peças prontas, é realizada a montagem descarregada do motor, a fim de verificar as tolerâncias e possíveis necessidades de acabamento.",
            "sourcePages": [
              36
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Fabricação do Propelente Sólido (KNSU)",
    "description": "A partir de um estudo teórico e histórico (com base nos antecedentes produzidos pela equipe), define-se os parâmetros de nitrato de potássio e sorbitol. Também são definidos a forma e quantidade do propelente segundo as dimensões do foguete. Em seguida, a fabricação do combustível é feita e seus testes de validação são realizados para que a comparação com os valores esperados seja feita.",
    "sourcePages": [
      33
    ],
    "subprocesses": []
  },
  {
    "title": "Teste de Queima",
    "description": "Processo de validação termo-estrutural do motor e propelente que antecede o Teste Estático. O motor é carregado com o propelente e fixado na bancada de teste estático. Em seguida, o acionamento é realizado através do sistema de ignição. Caso não ocorra qualquer dano a estrutura do motor e o propelente sofrer ignição, o teste obteve sucesso e dados como tempo de queima são coletados.",
    "sourcePages": [
      33,
      38
    ],
    "subprocesses": [
      {
        "title": "Validação estrutural com teste de queima",
        "description": "O teste de queima consiste na verificação prática da ignição e da estabilidade do funcionamento do propelente sólido já inserido no motor. Nesse procedimento, o motor é fixado em um suporte rígido, geralmente no banco de testes estático, sem a utilização de instrumentos de medição como células de carga ou sensores de empuxo. O objetivo principal é assegurar que o propelente fabricado queima de forma contínua e controlada, além de avaliar se o motor suporta as condições térmicas e estruturais do processo de combustão. Durante o ensaio, observa-se a intensidade da queima, a existência de falhas na ignição e a integridade do invólucro do motor. Esse tipo de teste é essencial em estágios iniciais de desenvolvimento, especialmente em projetos educacionais e experimentais, pois permite validar a compatibilidade entre o propelente e a estrutura do motor antes da realização de lançamentos.",
        "sourcePages": [
          38
        ],
        "activities": []
      }
    ]
  },
  {
    "title": "Bancada de Teste Hidrostático",
    "description": "Análogo ao processo de desenvolvimento do motor, a bancada de teste hidrostático nasce de um projeto teórico, partindo do pressuposto que a equipe irá produzir uma por si mesma (talvez sendo necessário fazer engenharia reversa em algum objeto de pressurização hidráulica). O projeto teórico envolve cálculos para pressão e dimensionamentos de operação. Fazendo a modelagem em CAD e análises estruturais (em especial, análises computacionais sobre elementos com alta exposição à pressão), parte-se para a manufatura da bancada.",
    "sourcePages": [
      33,
      38,
      39
    ],
    "subprocesses": [
      {
        "title": "Projeção da peça a acoplar no motor",
        "description": "Geralmente é feito um “contra cabeçote” que vai na extremidade da tubeira para acoplar ao sistema de pressurização",
        "sourcePages": [
          38
        ],
        "activities": [
          {
            "title": "Projeto",
            "description": "Essa peça é feita levando em conta a um cabeçote com um furo e rosca auto travante com as dimensões da rosca a acoplar na mangueira do sistema",
                        "tools": ["Computador", "word ou docs. Em média"],
            "duration": "2h",
            "sourcePages": [
              38
            ]
          },
          {
            "title": "CAD’s",
            "description": "obter as medidas e fazer o desenho da peça",
                        "objective": "cabeçote ou, caso a conexão passe pela tubeira, para acoplar na tubeira",
            "tools": ["Computador", "Inventor."],
            "duration": "2h",
            "sourcePages": [
              38
            ]
          },
          {
            "title": "Manufatura",
            "description": "manufatura da peça",
            "sourcePages": [
              38
            ]
          }
        ]
      },
      {
        "title": "Preparação e realização do teste",
        "description": "Com o contra cabeçote feito, o motor é reunido com o sistema é montado para realizar o teste",
        "sourcePages": [
          38,
          39
        ],
        "activities": [
          {
            "title": "Realização",
            "description": "Para realizar o teste a mangueira, motor e macaco hidráulico devem estar preenchidos com água, pois bolhas de ar podem dificultar na pressurização. Com todas as peças acopladas e vedadas, o sistema é pressurizado a uma pressão de 1,5 vezes maior que a pressão de operação do motor e é registrada essa pressão. Após o teste, a pressão é aliviada na válvula de alívio e O óleo do macaco deve ser retornado para evitar oxidação do sistema",
                        "tools": ["Operação da bancada de testes Projeção (bancada estática)"],
            "sourcePages": [
              39
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Bancada de Teste Estático",
    "description": "A partir de um projeto teórico, no qual supõe-se uma estrutura que será fixada no solo e uma hipótese de dimensões para, em seguida, realizar cálculos e simulações de tensões e análises e estáticas e dinâmicas através de softwares como o ANSYS ou o Inventor. Após a validação do projeto, inicia-se sua manufatura (terceirizada ou não) para, quando a bancada estiver pronta, o setor se reunir com o setor de Eletrônica para determinar a posição da célula de carga.",
    "sourcePages": [
      33,
      39
    ],
    "subprocesses": [
      {
        "title": "projeção",
        "description": "Projeto teórico da bancada e sua idealização feita com base na disponibilidade e tipos de motores a serem testados pela equipe",
        "sourcePages": [
          39
        ],
        "activities": [
          {
            "title": "condições de contorno",
            "description": "pontos os quais a bancada deve atender, como diâmetro e comprimento do maior motor que pode ser testado nela, local onde ela vai ser operada, classe do maior motor que ela deve suportar, custos e disponibilidade de material",
            "sourcePages": [
              39
            ]
          },
          {
            "title": "idealização",
            "description": "alinhar o melhor design que pode ser atribuído a ela levando em conta as condições de contorno",
            "sourcePages": [
              39
            ]
          },
          {
            "title": "verificação estrutural",
            "description": "com o design pronto, ele deve ser verificado, preferencialmente por meio de simulações feitas em CFD",
            "sourcePages": [
              39
            ]
          },
          {
            "title": "CAD’s",
            "description": "com a estrutura ok, dá seguimento para representar e obter a medida e informações dos materiais para sua produção",
            "sourcePages": [
              39
            ]
          }
        ]
      },
      {
        "title": "manufatura",
        "description": "torna o projeto teórico físico",
        "sourcePages": [
          39
        ],
        "activities": [
          {
            "title": "plano de manufatura",
            "description": "Certas peças e componentes devem ser feitos pela equipe, isso exige a escolha do melhor procedimento para obtê los",
            "sourcePages": [
              39
            ]
          },
          {
            "title": "ajuda de patrocinadores",
            "description": "Geralmente alguns patrocinadores ajudam na manufatura, como em atividades de soldagem",
            "sourcePages": [
              39
            ]
          },
          {
            "title": "montagem",
            "description": "procedimento de reunir todas as peças para fazer a bancada, esse processo é mais relevante caso a bancada seja móvel",
            "sourcePages": [
              39
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Teste Hidrostático",
    "description": "Com a Bancada de Teste Hidrostático pronta e devidamente montada, o motor (descarregado) é conectado ao sistema de bombeamento de água. Seguindo os procedimentos de segurança, o fluido é bombeado para dentro do motor até a pressão desejada e, ao final, verifica-se se houve rompimento ou alguma outra avaria no motor ou na própria bancada. Com tudo validado, o motor está pronto para ir para a etapa de Teste Estático.",
    "sourcePages": [
      34
    ],
    "subprocesses": []
  },
  {
    "title": "Teste Estático",
    "description": "Com a Bancada de Teste Estático pronta, define-se um local adequado e realiza-se um perímetro de isolamento, prepara o ambiente e verifica os materiais (célula de carga, motor, propelente). O motor é carregado, fixado e o sistema de ignição é conectado, os operadores do teste são posicionados e, seguindo os procedimentos de segurança, a ignição é feita. A expectativa é que a combustão seja completa e controlada para que, ao fim, os dados de empuxo sejam coletados.",
    "sourcePages": [
      34
    ],
    "subprocesses": []
  },
  {
    "title": "Fabricação do Propelente Sólido (KNSB)",
    "description": "",
    "sourcePages": [
      36,
      37,
      38
    ],
    "subprocesses": [
      {
        "title": "Receita do propelente",
        "description": "A receita do propelente é feita com base nos fundamentos encontrados no site do Nakka (65% de oxidante pra 35% de combustível) e após testes de temperatura e cozimento é feito uma análise do melhor resultado.",
        "sourcePages": [
          36
        ],
        "activities": [
          {
            "title": "Projeto teórico",
            "description": "A receita em si é obtida através de cozimentos com base nos cozimentos feitos pelo Nakka, e com o auxílio de um motor de testes, a curva de empuxo real é comparada com a curva de empuxo teórica para verificar e validar a eficiência. As variáveis controláveis desses testes são tempo, temperatura e aparência.",
                        "objective": "Definir geometria do motor para o empuxo alvo.  Validar apogeu conforme requisitos da missão.  Otimizar a massa do propelente.",
            "duration": "3 horas",
            "collaborators": "2",
            "sourcePages": [
              36
            ]
          },
          {
            "title": "Preparação do nitrato",
            "description": "A recristalização consiste em aquecer o fertilizante com água deionizada até homogeneizar, filtrar a solução e deixá-la esfriar preferencialmente no gelo para formar os cristais. Após remover a água, os cristais são secos em estufa, triturados e armazenados em recipientes herméticos.",
                        "objective": "comercial.  Remover impurezas e aditivos do fertilizante  Aumentar o grau de pureza do oxidante para uma queima estável.",
            "collaborators": "2 a 3 dias 1",
            "sourcePages": [
              36
            ]
          }
        ]
      },
      {
        "title": "Recristalização do nitrato",
        "description": "O fertilizante contendo o nitrato de potássio do tipo NPK xx-00-xx (‘’xx’’ é a proporção de nitrato-fósforo-potássio presente no fertilizante) precisa ser purificado para o cozimento",
        "sourcePages": [
          36
        ],
        "activities": []
      },
      {
        "title": "Produção do molde",
        "description": "É estudada a maneira mais viável de projetar e manufaturar um molde para o propelente. Normalmente é feito por manufatura aditiva",
        "sourcePages": [
          36,
          37
        ],
        "activities": [
          {
            "title": "Idealização e cad",
            "description": "O corpo e base do molde são projetados a partir da dimensão real das seções do propelente, o corpo e a base são geralmente feitos de impressão 3d e a haste do núcleo é de aço, alumínio ou Impressão 3d (dependendo do diâmetro e comprimento do núcleo da seção)",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Manufatura",
            "description": "Nesse caso deve ser verificada a disponibilidade de filamento da equipe, membros com impressoras e ajuda do NIMA, geralmente é mais viável a equipe fornecer filamento a um membro.",
            "sourcePages": [
              37
            ]
          }
        ]
      },
      {
        "title": "Cozimento",
        "description": "A fabricação do propelente sólido KNSB (Potassium Nitrate–Sorbitol) consiste na preparação de uma mistura homogênea de nitrato de potássio (KNO₃) e sorbitol (adoçante ), nas proporções típicas de 65% para o oxidante e 35% para o combustível.",
        "sourcePages": [
          36,
          37
        ],
        "activities": [
          {
            "title": "Preparação inicial",
            "description": "Inicialmente, é preciso moer o KNO3 e se possível peneirar em uma peneira de malha superior a 100. Após isso, o sorbitol e kno3 são pesados em uma balança de precisão. Os dois ingredientes pesados são colocados num recipiente com tampa para serem mexidos e misturados.",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Mistura",
            "description": "Os dois ingredientes pesados são colocados num recipiente com tampa, bem lacrada, para serem mexidos e misturados.",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Cocção",
            "description": "A panela é aquecida a uma temperatura de +/- 120 graus, e metade da mistura é colocada na panela e mexido com auxílio de uma espátula para ajudar a derreter. Após a mistura derreter e se incorporar o restante da mistura é adicionada. Deve demorar em média mais 5-10m para tudo incorporar e derreter corretamente. A temperatura final da mistura deve estar ali em seus 130 graus.",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Surfactante",
            "description": "Com o surfactante, assim que a mistura estiver completamente incorporada, adicione 0,1% de surfactante em relação à massa total. Lembrando que o surfactante não é obrigatório, mas ajuda a despejar a mistura no molde.",
                        "collaborators": "2 a 5 minutos 1",
            "sourcePages": [
              37
            ]
          }
        ]
      },
      {
        "title": "Nucleamento",
        "description": "O propelente logo após o cozimento é nucleado dentro do molde feito",
        "sourcePages": [
          36,
          37,
          38
        ],
        "activities": [
          {
            "title": "Com surfactante",
            "description": "Imediatamente após o cozimento, a mistura deve ser derramada dentro do molde, é possível usar uma espátula para ajudar a transferir a mistura para o molde.",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Sem surfactante",
            "description": "Imediatamente após o cozimento, com uma colher, a mistura deve ser retirada da panela e colocada no molde.",
            "sourcePages": [
              37
            ]
          },
          {
            "title": "Finalização",
            "description": "Após colocar toda a mistura no molde, é necessário dar várias porradinhas no molde para tirar as bolhas de ar que ficam",
            "sourcePages": [
              37
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Teste Estático de Combustão",
    "description": "",
    "sourcePages": [
      40
    ],
    "subprocesses": [
      {
        "title": "Validação",
        "description": "O teste estático enquadra-se como etapa principal que antecede o teste dinâmico (voo), nele se obtém dados reais de empuxo para o motor desenvolvido, que servem para nortear a capacidade de projeção do foguete e no desenvolvimento da geometria de aletas pelo setor de estrutura e aerodinâmica",
        "sourcePages": [
          40
        ],
        "activities": [
          {
            "title": "Preparação do local",
            "description": "Preparar o local escolhido com a bancada de testes estáticos",
                        "tools": ["Rádio de mão"],
            "duration": "30 min",
            "sourcePages": [
              40
            ]
          },
          {
            "title": "Preparação da célula de carga",
            "description": "Um membro de eletrônica deve preparar a célula de carga previamente na oficina, para calibrar e verificar a continuidade do equipamento, e assim seguir para a preparação no local do teste",
                        "tools": ["Notebook", "extensão."],
            "duration": "30 min",
            "sourcePages": [
              40
            ]
          },
          {
            "title": "Segurança local",
            "description": "Deve ser estabelecido um perímetro com 30 metros de raio de cobertura, com pelo menos 3 operadores para isso, para o acionamento é um supervisor e alguma pessoa de eletrônica para preparar o acionamento",
                        "tools": ["Noções de segurança."],
            "sourcePages": [
              40
            ]
          },
          {
            "title": "Segurança do teste",
            "description": "O motor deve ser carregado pelo supervisor, seguindo todo o procedimento de notificação do início e fim do carregamento e inserção do skib, cuidado com a linha de fogo do motor",
                        "tools": ["Radio de mão", "capacete de proteção", "kit de primeiros socorros."],
            "duration": "20 min",
            "sourcePages": [
              40
            ]
          },
          {
            "title": "Acionamento",
            "description": "Para acionar o motor, o supervisor deve confirmar com os operadores a segurança do perímetro, e se confirmada, seguir com o acionamento",
            "sourcePages": [
              40
            ]
          },
          {
            "title": "Falha de acionamento",
            "description": "Caso a caixa seja acionada e a combustão não ocorra, o supervisor deve puxar o cabo do skib a partir do local de acionamento, caso o skib tenha queimado, o pessoal deve esperar 20 minutos para poder verificar o motor",
                        "objective": "verificar se o skib acionou ou não, caso acionado, esperar 20 minutos para verificar o motor",
            "tools": ["Rádio de mão. 0 ou"],
            "duration": "20 min",
            "sourcePages": [
              40
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Teste Hidrostático do Motor",
    "description": "",
    "sourcePages": [
      40,
      41
    ],
    "subprocesses": [
      {
        "title": "Validação",
        "description": "O teste hidrostático consiste na validação da resistência do motor a uma pressão de 1,5 vezes ( este valor pode ser maior ou menor a depender das especificações da competição) maior do que a pressão de operação do mesmo, nesse processo o motor é fixado em uma bancada de teste hidrostático onde é feito um cabeçote que irá se acoplar em um encaixe macho fêmea a bancada de testes. A pressão é bombeada a partir de um sistema que adicionará pressão no motor (e geralmente é um macaco hidráulico modificado) e a leitura é feita a partir de um manômetro.",
        "sourcePages": [
          40
        ],
        "activities": []
      },
      {
        "title": "",
        "description": "",
        "sourcePages": [
          41
        ],
        "activities": [
          {
            "title": "Realização do teste hidrostático",
            "description": "O teste hidrostático é realizado em um local selecionado previamente não tendo necessidade de ser em um local fixo, visto que a bancada pode ser móvel, semelhante a realização de um teste estático dois operadores são posicionados a verificar os arredores do teste para que não haja nenhum intruso na área de realização do teste, e um operador é selecionado para bombear a água do sistema, durante um bombeamento os operadores de verificação devem ficar atentos e manter o operador de bombeamento atualizado sobre qualquer irregularidade que possa acontecer. Assim que a pressão desejável é atingida, o operador de bombeamento deverá anotar os dados obtidos da leitura do manômetro e logo após aliviar a pressão do sistema, para que o mesmo possa ser desmontado e guardado com segurança.",
            "sourcePages": [
              41
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do Paraquedas",
    "description": "Especificação dos requisitos de acordo com a competição (velocidade terminal); projeto teórico e escolha do material; cálculos para o dimensionamento do velame, cordas de suspensão e tirante; confirmação das massas dos setores; fabricação dos gabaritos dos gomos; corte, costura e confecção do paraquedas; teste de funcionalidade; ensaio de cordas e quick links; calcular espaço ocupado na estrutura; simulação.",
    "sourcePages": [
      42
    ],
    "subprocesses": []
  },
  {
    "title": "Desenvolvimento do Sistema de Ejeção Pirotécnica",
    "description": "Projeto teórico e escolha do material de acordo com o tipo de ejeção e a massa de recuperação; projetar CADs (pistão, suporte inferior); simulações de esforços; calcular tamanho necessário para a câmara de combustão; projetar parafuso cisalhante após dados fornecidos por E&A; metodologia de montagem; plano de manufatura; folhas de desenho; manufatura/usinagem do sistema e parafuso cisalhante; análise de vedação; testes de montagem.",
    "sourcePages": [
      42
    ],
    "subprocesses": []
  },
  {
    "title": "Desenvolvimento de Pólvora",
    "description": "Estudo e teste das proporções dos materiais (Nitrato de Potássio, Enxofre e Carvão); calcular densidade; teste de queima; projetar cápsulas para pólvora; teste na cápsula.",
    "sourcePages": [
      42
    ],
    "subprocesses": []
  },
  {
    "title": "Desenvolvimento do Cortador de Linha",
    "description": "Projeto teórico e escolha do material; projetar CAD; fazer folha de desenho; usinagem do cortador (torno e furadeira); fazer rosca; analisar vedação; teste de funcionalidade.",
    "sourcePages": [
      42,
      49,
      50,
      51
    ],
    "subprocesses": [
      {
        "title": "Projeto Teórico do Cortador de Linha",
        "description": "Inicialmente, definir o funcionamento do cortador, escolher materiais com base na resistência e massa. Após a conceituação da ideia, desenvolver o CAD.",
        "sourcePages": [
          49,
          50
        ],
        "activities": [
          {
            "title": "Definir o Funcionamento do Cortador",
            "description": "Realizar um brainstorming e pesquisa para conceituar o mecanismo de corte. Definir como o cortador irá operar (ruptura por aquecimento) para garantir que ele cumpra seu papel de liberar a linha no momento correto.",
                        "objective": "na altitude correta para o sistema dual-deployment",
            "tools": ["Computador; Em média"],
            "duration": "2h",
            "sourcePages": [
              49
            ]
          },
          {
            "title": "Escolher Materiais",
            "description": "Com base no funcionamento definido, pesquisar e selecionar os materiais mais adequados para a fabricação do cortador. A escolha deve priorizar a resistência mecânica para suportar o",
            "sourcePages": [
              49
            ]
          },
          {
            "title": "Desenvolver o CAD",
            "description": "Após a conceituação da ideia e a seleção dos materiais, criar o modelo tridimensional (CAD) do cortador de linha. Essa etapa permite visualizar o design, analisar encaixes e preparar o componente para a manufatura.",
                        "tools": ["Computador", "Software CAD; Em média"],
            "duration": "3h",
            "sourcePages": [
              50
            ]
          }
        ]
      },
      {
        "title": "Manufatura do Cortador de Linha",
        "description": "Elaborar a folha de desenho para a fabricação e produzir o plano de manufatura conforme o CAD. Realizar a manufatura de acordo com o projeto.",
        "sourcePages": [
          49,
          50
        ],
        "activities": [
          {
            "title": "Elaborar Folha de Desenho para Fabricação",
            "description": "Com o CAD finalizado, criar a folha de desenho técnica detalhada do cortador de linha. Essa folha deve conter todas as dimensões, tolerâncias, acabamentos e especificações de material necessárias para a fabricação.",
                        "objective": "cortador seja exata e sem ambiguidades",
            "tools": ["Computador", "Software CAD Em média"],
            "duration": "2h",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Produzir Plano de Manufatura",
            "description": "Desenvolver um plano de manufatura que descreve passo a passo os processos de usinagem ou fabricação do cortador de linha. Esse plano deve estar em conformidade com o CAD e a folha de desenho, indicando as máquinas e ferramentas necessárias.",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Realizar Manufatura do Cortador",
            "description": "Executar a fabricação do cortador de linha de acordo com o plano de manufatura e a folha de desenho. Utilizar as técnicas e máquinas apropriadas (como torno, furadeira, etc.) para produzir um componente com as especificações exatas do projeto.",
            "sourcePages": [
              50
            ]
          }
        ]
      },
      {
        "title": "Teste de Corte",
        "description": "Com a manufatura finalizada, testar o encaixe do parafuso com a rosca, a passagem da linha de fixação e da linha de corte. Fazer a montagem e realizar o teste de funcionalidade, com skib e pólvora, analisando a vedação necessária para o funcionamento. Analisar os resultados obtidos e ajustes necessários.",
        "sourcePages": [
          49,
          50,
          51
        ],
        "activities": [
          {
            "title": "Testar Encaixe de Parafuso e Roscas",
            "description": "Verificar a precisão das roscas e o encaixe de quaisquer parafusos que façam parte do mecanismo do cortador. Isso garante que o componente possa ser montado corretamente e que não haverá travamentos.",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Testar Passagem da Linha de Fixação e Corte",
            "description": "Simular a passagem da linha que será fixada ao cortador e, principalmente, da linha que deverá ser cortada. Assegurar que ambas as linhas se movimentam livremente onde necessário e que a linha de corte se posiciona corretamente para o acionamento.",
                        "objective": "se o diâmetro é suficiente e simular manualmente o curso da lâmina/pistão de corte.",
            "tools": ["Cortador mecânico montado (sem carga)", "Amostras de linha (ex: Paracord, Nylon). Em média"],
            "duration": "30min",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Realizar Montagem e Teste de Funcionalidade",
            "description": "Montar o cortador de linha com todos os seus componentes, incluindo o skib e uma pequena quantidade de pólvora. Realizar um teste de funcionalidade em ambiente controlado, observando a ativação do mecanismo de corte e a eficácia da liberação da linha.",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Analisar Vedação Necessária",
            "description": "Durante o teste de funcionalidade, analisar a necessidade e a eficiência da vedação do cortador. Uma vedação adequada é",
                        "objective": "para não colocar em risco o acionamento no voo real e o paraquedas.",
            "tools": ["Cortador recém-acionado", "Computador Em média"],
            "duration": "1h",
            "sourcePages": [
              50
            ]
          },
          {
            "title": "Analisar Resultados Obtidos e Ajustes",
            "description": "Documentar e analisar detalhadamente os resultados dos testes de funcionalidade. Identificar quaisquer falhas, ineficiências ou pontos de melhoria no design ou na manufatura do cortador. Realizar os ajustes necessários no projeto ou na fabricação para otimizar seu desempenho e confiabilidade.",
                        "objective": "estado das peças) para determinar a aprovação ou a necessidade de revisão do projeto.",
            "tools": ["Computador", "Planilhas Excel para relatórios", "Fotos e vídeos registrados dos testes. Em média"],
            "duration": "2h",
            "sourcePages": [
              51
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Testes Estáticos de Ejeção",
    "description": "Solicitar tubo teste para E&A; após todos os componentes de recuperação finalizados, deve-se testar a montagem no tubo teste; preparar as cápsulas com skibs e a massa inicial estimada da pólvora; preparar o cortador de linha; dobrar o paraquedas e cordas; finalizar montagem (utilizar alguma estrutura para simular a massa da coifa e parafuso); preparar local de testes com EPIs necessários; posicionar câmeras/pessoas para registro do teste; acionamento; após o acionamento tirar fotos, medir distância da ejeção e preencher a ficha de teste; analisar o funcionamento e/ou falhas ocorridas (causas, repassar a padronização da montagem, quantidade de pólvora, vedação); posteriormente desmontar o sistema de recuperação e analisar internamente se houve danos.",
    "sourcePages": [
      42
    ],
    "subprocesses": []
  },
  {
    "title": "Desenvolvimento de Paraquedas",
    "description": "",
    "sourcePages": [
      43,
      44,
      45
    ],
    "subprocesses": [
      {
        "title": "Definição de Requisitos",
        "description": "Analisar a velocidade terminal desejada, de acordo com a competição. Obter com outros setores a massa de recuperação, analisar o local de lançamento para ASL (altitude do local de lançamento) e definir ponto de abertura do paraquedas em relação ao solo (AGL).",
        "sourcePages": [
          43
        ],
        "activities": []
      },
      {
        "title": "Projeto e Dimensionamento",
        "description": "Com os requisitos definidos, colocar os parâmetros na planilha da Bravo Aerospace para obter o dimensionamento do velame e linhas de suspensão (colocar uma margem de erro na massa, visto que pode aumentar). Com os dados de saída da planilha, realizar a pesquisa e seleção de materiais com base em massa e resistência (geralmente utiliza-se Nylon Rip Stop e Paracord). Verificar o comprimento do foguete com E&A para dimensionar tirante, estimar o comprimento embalado do paraquedas passar para E&A. Confirmar novamente a massa de recuperação antes de iniciar a fabricação.",
        "sourcePages": [
          43
        ],
        "activities": []
      },
      {
        "title": "Fabricação",
        "description": "Confirmada a massa estimada, com uma faixa de erro, iniciar a confecção de gabaritos para o corte dos gomos do velame e realizar o ensaio das cordas. Feito os gabaritos, deve-se realizar o corte do material do velame, cordas de suspensão e tirantes, conforme os parâmetros obtidos na planilha e cálculos utilizados. Após todos os cortes, realizar a costura dos velames e cordas.",
        "sourcePages": [
          43
        ],
        "activities": []
      },
      {
        "title": "Testes e Validação",
        "description": "Com o paraquedas costurado, dobrar o paraquedas para conferir comprimento embalado e testar no tubo de teste. Realizar o teste em queda livre para verificar a abertura do paraquedas, com os quick links, registrar e analisar o resultado. Fazer a simulação do paraquedas com os parâmetros obtidos para comparação com o real.",
        "sourcePages": [
          43
        ],
        "activities": []
      },
      {
        "title": "Definição de Requisitos do Paraquedas",
        "description": "",
        "sourcePages": [
          43,
          44
        ],
        "activities": [
          {
            "title": "Analisar Velocidade Terminal Desejada",
            "description": "Estudar e determinar a velocidade ideal de descida do foguete (velocidade terminal) que se alinha com as regras e exigências da competição, para utilizar na planilha da Bravo Aerospace.",
            "sourcePages": [
              43
            ]
          },
          {
            "title": "Obter Massa de Recuperação com Outros Setores",
            "description": "Comunicar-se com o setor de E&A, Propulsão e Eletrônica para obter a massa total estimada do foguete no momento da recuperação. Esse dado é fundamental para o dimensionamento correto do paraquedas.",
                        "tools": ["Calculadora", "Papel", "Caneta; Em média"],
            "duration": "30min",
            "sourcePages": [
              43
            ]
          },
          {
            "title": "Analisar Local de Lançamento (ASL)",
            "description": "Pesquisar e registrar a Altitude do Local de Lançamento (ASL). A pressão atmosférica em altitudes diferentes influencia o desempenho do paraquedas, sendo um fator importante nos cálculos.",
                        "tools": ["Computador"],
            "sourcePages": [
              43
            ]
          },
          {
            "title": "Definir Ponto de Abertura do Paraquedas (AGL)",
            "description": "Estabelecer a Altitude Acima do Nível do Solo (AGL) em que o paraquedas drogue e o principal deverão ser ejetados, consoante o manual da competição e o local.",
                        "tools": ["Computador"],
            "duration": "30min",
            "sourcePages": [
              44
            ]
          }
        ]
      },
      {
        "title": "Projeto e Dimensionamento do Paraquedas",
        "description": "",
        "sourcePages": [
          44
        ],
        "activities": [
          {
            "title": "Alimentar Planilha de Dimensionamento e Obter Resultados",
            "description": "Inserir todos os parâmetros definidos (velocidade terminal, massa de recuperação, ASL, AGL) na planilha da Bravo Aerospace. Adicionar uma margem de erro na massa para compensar possíveis variações futuras no peso final do foguete. Utilizar os dados de saída da planilha para obter as dimensões precisas do velame do paraquedas, comprimento das linhas de suspensão e outros dados, caso necessário.",
                        "tools": ["Computador", "Planilha da Bravo Aerospace. Em média"],
            "duration": "2h",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Pesquisar e Selecionar Materiais",
            "description": "Com base nos dados de dimensionamento e nos requisitos de massa e resistência, pesquisar e selecionar os materiais adequados. Geralmente, utilizam-se Nylon Rip Stop para o velame e Paracord para as linhas de suspensão devido à sua leveza e durabilidade.",
                        "tools": ["Computador", "Resultados da planilha da Bravo Aerospace. Em média"],
            "duration": "3h",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Dimensionar Tirante",
            "description": "Entrar em contato com o setor de E&A para obter o comprimento total do foguete. Utilizar essa informação para dimensionar o tirante, que conecta o paraquedas ao corpo do foguete.",
                        "objective": "Calculadora;  Computador; Em média 1h 1 Estimar tamanho do tirante",
            "tools": ["Calculadora", "Computador; Em média"],
            "duration": "1h",
            "collaborators": "1 Estimar tamanho do tirante",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Estimar Comprimento Embalado",
            "description": "Fazer uma estimativa do comprimento do paraquedas quando ele estiver dobrado e embalado dentro do compartimento do foguete.",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Confirmar Massa de Recuperação Final",
            "description": "Realizar uma última confirmação da massa de recuperação com os outros setores antes de iniciar o processo de fabricação. Isso evita retrabalhos e garante que o paraquedas será adequado ao peso final do foguete.",
                        "objective": "paraquedas para iniciar a fabricação",
            "tools": ["Calculadora", "Papel", "Caneta; Em média"],
            "duration": "30min",
            "sourcePages": [
              44
            ]
          }
        ]
      },
      {
        "title": "Fabricação do Paraquedas",
        "description": "",
        "sourcePages": [
          44,
          45
        ],
        "activities": [
          {
            "title": "Confeccionar Gabaritos para Corte de Gomos",
            "description": "Criar moldes precisos (gabaritos) para o corte dos gomos que formarão o velame do paraquedas, de acordo com o dimensionamento obtido na planilha da Bravo Aerospace. A precisão nessa etapa é crucial para a simetria e o bom desempenho do paraquedas, logo, deve-se seguir as marcações fornecidas para uma melhor acurácia.",
                        "tools": ["Papelão", "Piloto", "Régua", "Estilete", "Tesoura", "Resultados da planilha da Bravo Aerospace. Em média"],
            "duration": "2h",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Realizar Ensaio das Cordas",
            "description": "Testar amostras das cordas de suspensão e dos materiais dos tirantes para verificar sua resistência à tração. Isso garante que as cordas suportarão as forças exercidas durante a ejeção e a descida.",
                        "tools": ["Corda", "Paquímetro", "Máquina de ensaio de tração", "sistema de fixação adequado", "Tesoura", "Computador. Em média"],
            "duration": "4 horas",
            "collaborators": "1 Confirmar a resistência da corda",
            "sourcePages": [
              44
            ]
          },
          {
            "title": "Cortar Materiais",
            "description": "Utilizar os gabaritos confeccionados para cortar o material do velame, as cordas de suspensão e os tirantes, seguindo as dimensões obtidas na planilha e nos cálculos de dimensionamento, acrescido de uma margem de erro, ou seja, cortar as linhas maiores.",
                        "tools": ["Calculadora", "Piloto", "Estilete", "Tesoura", "Tecido do velame", "Cordas; No mínimo"],
            "duration": "2h",
            "sourcePages": [
              45
            ]
          },
          {
            "title": "Costurar Velames e Cordas",
            "description": "Unir os gomos do velame através de costuras resistentes, formando o formato desejado do paraquedas. As cordas de suspensão também são costuradas ao velame de forma segura e padronizada.",
                        "tools": ["Máquina de costura", "Linha", "Gomos cortados", "Cordas cortadas", "Alfinete", "Agulha", "Fósforo/Isqueiro. No mínimo"],
            "duration": "4h",
            "sourcePages": [
              45
            ]
          }
        ]
      },
      {
        "title": "Teste e Validação do Paraquedas",
        "description": "",
        "sourcePages": [
          45
        ],
        "activities": [
          {
            "title": "Embalar Paraquedas e Testar Montagem",
            "description": "Realizar o processo de dobragem do paraquedas de forma padronizada. Após dobrado, medir o comprimento total para conferência. Inserir o paraquedas dobrado no tubo de teste, que simula o compartimento do foguete. Essa atividade verifica o encaixe e se o paraquedas pode ser facilmente ejetado.",
                        "tools": ["Paraquedas", "Talco; Em média"],
            "duration": "20min",
            "sourcePages": [
              45
            ]
          },
          {
            "title": "Realizar Teste em Queda Livre",
            "description": "Simular a abertura do paraquedas em queda livre, utilizando os quick links que serão usados no foguete, com uma massa leve apenas para ajudar na queda. Observar a forma de abertura, a velocidade de descida e a estabilidade.Documentar detalhadamente os resultados, incluindo tempo de abertura (se possível), estabilidade, qualquer anomalia e outros dados relevantes. Analisar esses dados para identificar pontos de melhoria ou confirmar o bom funcionamento.",
                        "tools": ["Paraquedas", "Cronômetro", "Celular. Em média"],
            "duration": "1h",
            "sourcePages": [
              45
            ]
          },
          {
            "title": "Simular Paraquedas para Comparação",
            "description": "Utilizar softwares de simulação com os parâmetros reais do paraquedas fabricado. Comparar os resultados da simulação com os dados obtidos nos testes físicos para validar o modelo teórico e entender as possíveis divergências.",
            "sourcePages": [
              45
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento do Sistema de Ejeção",
    "description": "",
    "sourcePages": [
      45,
      46,
      47
    ],
    "subprocesses": [
      {
        "title": "Projeto Teórico",
        "description": "Definição do tipo de ejeção e fazer um brainstorm de como poderia ser o sistema. Pesquisar os materiais a serem utilizados, desenvolver os CADs, solicitar a massa estimada de recuperação para realizar as simulações de esforços e tensões. Realizar o dimensionamento da câmara de combustão e do espaço necessário do paraquedas drogue.",
        "sourcePages": [
          45
        ],
        "activities": []
      },
      {
        "title": "Manufatura",
        "description": "Após o projeto teórico finalizado, confirmar a massa de recuperação e a massa acima do subsistema de recuperação. Elaborar folhas de desenho e plano de manufatura de cada peça",
        "sourcePages": [
          45
        ],
        "activities": []
      },
      {
        "title": "Montagem",
        "description": "Finalizada a manufatura das peças, testar montagem inicial e analisar ajustes necessários, observar possíveis gargalos e erros (vedação, fixações). Após confirmar todos os encaixes, definir a ordem de montagem final e a metodologia a ser seguida com foco na otimização do processo.",
        "sourcePages": [
          46
        ],
        "activities": []
      },
      {
        "title": "Testes",
        "description": "Com a montagem padronizada, testar montagem com paraquedas, cronometrar e analisar os gargalos.",
        "sourcePages": [
          46
        ],
        "activities": []
      },
      {
        "title": "Projeto Teórico do Sistema de Ejeção",
        "description": "",
        "sourcePages": [
          46
        ],
        "activities": [
          {
            "title": "Brainstorming",
            "description": "Realizar uma sessão de brainstorming para explorar diferentes abordagens e mecanismos de ejeção pirotécnico. Definir qual disposição dos componentes são mais adequadas com base nos requisitos do foguete (massa e estrutura) e da competição.",
                        "objective": "geral do sistema de recuperação",
            "tools": ["Folha", "Caneta", "Quadro", "Piloto", "Computador Em média"],
            "duration": "2h",
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Pesquisar Materiais",
            "description": "Investigar e selecionar os materiais ideais para cada componente do sistema de ejeção. Essa pesquisa deve considerar fatores como resistência a altas temperaturas, pressão, peso, usinabilidade e custo.",
                        "tools": ["Computador", "Celular. Em média"],
            "duration": "3h",
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Desenvolver CADs",
            "description": "Criar os modelos tridimensionais (CADs) de cada peça do sistema de ejeção (pistão, câmara, suportes, etc.). Essa etapa é crucial para a visualização, análise de encaixes e futura manufatura.",
                        "objective": "tolerâncias e exportação para manufatura/simulações.",
            "tools": ["Computador", "Softwares de CAD. Em média"],
            "duration": "8h",
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Solicitar Massa Estimada de Recuperação",
            "description": "Obter dos setores responsáveis a massa estimada do foguete no momento da ejeção, assim como calcular a massa dos componentes de recuperação após a câmara de combustão. Esse dado é fundamental para dimensionar a força de ejeção necessária e o desempenho do sistema.",
                        "tools": ["Organização", "Comunicação eficiente entre setores."],
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Realizar Simulações de Esforços e Tensões",
            "description": "Utilizar softwares de simulação para analisar como as peças do sistema de ejeção se comportarão sob as forças e tensões geradas pela ejeção. Identificar pontos de concentração de estresse e otimizar o design para evitar falhas.",
                        "tools": ["Calculadora", "Computador"],
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Dimensionar Câmara de Combustão",
            "description": "Calcular as dimensões ideais da câmara onde a pólvora será queimada, garantindo espaço suficiente para a quantidade necessária de propelente e pressão adequada para a ejeção.",
                        "objective": "negra necessária para pressurizar a câmara, obter pressão suficiente para romper os pinos de cisalhamento e ejetar o sistema.",
            "duration": "2h",
            "sourcePages": [
              46
            ]
          },
          {
            "title": "Dimensionar Espaço Necessário dos Paraquedas",
            "description": "Determinar o volume que os paraquedas, drogue e principal, ocuparão dentro do sistema de ejeção, junto com seus invólucros protetores. Isso garante que ele possa ser acomodado e ejetado eficientemente. Caso o dimensionamento inicial do compartimento dos paraquedas ficar menor que o projetado, é realizado ajuste na dobra do paraquedas e nos componentes passíveis de alteração.",
                        "tools": ["Calculadora", "Excel", "Dados dos materiais"],
            "sourcePages": [
              46
            ]
          }
        ]
      },
      {
        "title": "Manufatura do Sistema de Ejeção",
        "description": "",
        "sourcePages": [
          47
        ],
        "activities": [
          {
            "title": "Confirmar Massas",
            "description": "Realizar uma última verificação das massas do sistema de recuperação e da massa total acima do subsistema de recuperação. Essa confirmação é vital para validar os cálculos de força e garantir que o projeto final ainda é adequado.",
                        "objective": "(após simulação/CAD) para refinar os cálculos do sistema de recuperação",
            "tools": ["Computador", "Planilha da Bravo Aerospace. Em média"],
            "duration": "1h",
            "sourcePages": [
              47
            ]
          },
          {
            "title": "Elaborar Folhas de Desenho",
            "description": "Criar desenhos folhas de desenho para cada peça, contendo todas as dimensões, tolerâncias e especificações.",
            "sourcePages": [
              47
            ]
          },
          {
            "title": "Plano de Manufatura",
            "description": "Desenvolver um plano de manufatura, que descreve as etapas e processos de usinagem ou fabricação para cada componente, considerando o material específico.",
            "sourcePages": [
              47
            ]
          },
          {
            "title": "Realizar Manufatura/Usinagem dos Componentes",
            "description": "Executar o processo de fabricação de cada componente do sistema de ejeção, utilizando as máquinas e ferramentas adequadas (tornearia, fresagem, impressão 3D, etc.), de acordo com os desenhos e o plano de manufatura.",
            "sourcePages": [
              47
            ]
          }
        ]
      },
      {
        "title": "Montagem do Sistema de Ejeção",
        "description": "",
        "sourcePages": [
          47
        ],
        "activities": [
          {
            "title": "Testar Montagem Inicial e Analisar Ajustes",
            "description": "Realizar uma primeira montagem dos componentes manufaturados para verificar o encaixe, alinhamento e funcionalidade básica. Identificar e analisar a necessidade de quaisquer ajustes finos nas peças para garantir um encaixe perfeito.",
            "sourcePages": [
              47
            ]
          },
          {
            "title": "Definir Ordem de Montagem Final",
            "description": "Com base nos testes de montagem inicial e ajustes realizados, estabelecer a sequência ideal de montagem dos componentes para otimizar o processo e evitar erros.",
            "sourcePages": [
              47
            ]
          },
          {
            "title": "Testar Montagem com Paraquedas",
            "description": "Integrar o paraquedas (já dobrado) ao sistema de ejeção montado e realizar um teste de montagem completo. Verificar se o paraquedas se acomoda adequadamente e se a montagem do conjunto está correta. Registrar o tempo é necessário para realizar a montagem completa do sistema de ejeção com o paraquedas. Essa métrica ajuda a identificar a eficiência do processo e a planejar futuras montagens.",
                        "tools": ["Sistema de ejeção", "Paraquedas."],
            "sourcePages": [
              47
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Desenvolvimento da Pólvora",
    "description": "",
    "sourcePages": [
      47,
      48,
      49
    ],
    "subprocesses": [
      {
        "title": "Definição de Proporção de Materiais para a Pólvora",
        "description": "Após relacionar as informações necessárias, realizar mini testes para verificar a proporção e o comportamento da pólvora, fazer e analisar diferentes proporções, selecionar a melhor de acordo com o objetivo e calcular a densidade.",
        "sourcePages": [
          47,
          48
        ],
        "activities": [
          {
            "title": "Estudar Proporções dos Componentes Base",
            "description": "Realizar um estudo aprofundado sobre as proporções ideais de Nitrato de Potássio, Enxofre e Carvão para a fabricação da pólvora negra. Pesquisar literaturas, artigos e dados existentes que abordem a química e a performance de diferentes misturas.",
                        "tools": ["Computador com acesso à internet. Em média"],
            "duration": "2h",
            "sourcePages": [
              48
            ]
          },
          {
            "title": "Realizar Mini Testes de Proporção e Comportamento",
            "description": "Com base nas informações coletadas na pesquisa, preparar pequenas amostras de pólvora com diferentes proporções dos componentes. Realizar mini testes de queima controlados para observar e registrar o comportamento da chama, tempo de queima e resíduos de cada proporção.",
            "sourcePages": [
              48
            ]
          },
          {
            "title": "Analisar Diferentes Proporções",
            "description": "Analisar os dados e observações dos mini testes. Comparar o desempenho de cada proporção em relação ao objetivo do sistema de ejeção (força, velocidade de queima, consistência). Selecionar a proporção que apresenta o melhor equilíbrio entre eficiência e segurança.",
                        "tools": ["Computador."],
            "sourcePages": [
              48
            ]
          },
          {
            "title": "Calcular Densidade da Pólvora Produzida",
            "description": "Após definir a proporção ideal e produzir uma quantidade maior de pólvora com essa mistura, realizar o cálculo preciso da sua densidade. Esse dado é crucial para o dimensionamento das cápsulas.",
            "sourcePages": [
              48
            ]
          }
        ]
      },
      {
        "title": "Manufatura das Cápsulas de Pólvora",
        "description": "Com a proporção aproximada definida, dimensionar as cápsulas de acordo com a massa de recuperação e a densidade obtida. Solicitar a impressão das cápsulas em ABS Like (devido a resistência e precisão) para os testes.",
        "sourcePages": [
          48,
          49
        ],
        "activities": [
          {
            "title": "Dimensionar Cápsulas de Pólvora",
            "description": "Com a proporção aproximada da pólvora definida e sua densidade calculada, dimensionar as cápsulas que a conterão. O dimensionamento deve considerar a massa de recuperação do foguete e o espaço disponível no sistema de ejeção.",
            "sourcePages": [
              48
            ]
          },
          {
            "title": "Projetar as Cápsulas de Pólvora",
            "description": "Tendo o dimensionamento realizado, é necessário modelar as cápsulas para que seja possível realizar a impressão delas.",
            "sourcePages": [
              48
            ]
          },
          {
            "title": "Impressão das Cápsulas",
            "description": "Enviar os modelos 3D das cápsulas para impressão. Especificar o material ABS-Like devido à sua boa resistência mecânica, precisão dimensional e adequação para testes de queima.",
            "sourcePages": [
              49
            ]
          }
        ]
      },
      {
        "title": "Testes de Queima",
        "description": "Com a pólvora produzida e a cápsula impressa, realizar o teste de queima da pólvora na cápsula, com skib e a vedação necessária. Depois realizar a comparação do teste da pólvora produzida e da utilizada anteriormente (fogos de artifício) no teste estático de ejeção e comparar resultados.",
        "sourcePages": [
          48
        ],
        "activities": []
      },
      {
        "title": "Teste de Queima das Cápsulas de Pólvora",
        "description": "",
        "sourcePages": [
          49
        ],
        "activities": [
          {
            "title": "Realizar Teste de Queima da Pólvora na Cápsula",
            "description": "Inserir a pólvora produzida e otimizada dentro da cápsula impressa. Realizar um teste de queima controlada, utilizando um skib e garantindo a vedação necessária da cápsula para simular as condições de pressão do sistema de ejeção.",
                        "tools": ["Manuseio de materiais explosivos/inflamáveis."],
            "sourcePages": [
              49
            ]
          },
          {
            "title": "Comparar Resultados com Pólvora Anterior em Teste Estático",
            "description": "Comparar o desempenho da pólvora recém-produzida com a performance da pólvora de fogos de artifício que foi utilizada em testes estáticos de ejeção anteriores. Analisar métricas como tempo de queima, pressão gerada, eficiência da ejeção e consistência para validar a nova formulação.",
            "sourcePages": [
              49
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Teste Estático de Ejeção",
    "description": "",
    "sourcePages": [
      51,
      52,
      53
    ],
    "subprocesses": [
      {
        "title": "Preparação do Teste",
        "description": "Solicitação do tubo de teste para o setor de E&A, com os parâmetros do protótipo. Assim que entregue, testar a montagem do subsistema de ejeção e o paraquedas, avaliar possíveis riscos e falhas. Após o teste de montagem inicial, preparar os componentes para a montagem final do teste, colocar pólvora nos skibs e cortador de linha, vedar, encaixar no suporte de ejeção, conectar com os fios de acionamento e montar. Dobrar o paraquedas e as linhas, colocar grafite para diminuir o atrito (caso necessário). Produzir um componente para simular a coifa (com a massa maior para compensar a falta do parafuso cisalhante, caso necessário) e finalizar a montagem.",
        "sourcePages": [
          51,
          52
        ],
        "activities": [
          {
            "title": "Solicitar Tubo de Teste para E&A e Testar Montagem",
            "description": "Fazer a solicitação formal do tubo de teste ao setor de E&A, especificando os parâmetros e dimensões do protótipo do foguete para que o tubo simule as condições reais. Assim que o tubo de teste for entregue, realizar uma montagem inicial do",
            "sourcePages": [
              51
            ]
          },
          {
            "title": "Preparar Componentes para Montagem Final",
            "description": "Após o teste de montagem inicial e a avaliação de riscos, preparar todos os componentes para a montagem final do teste de ejeção. Isso inclui: colocar a quantidade correta de pólvora nos skibs e no cortador de linha; garantir a vedação adequada dos componentes que envolvem a pólvora; encaixar os componentes no suporte de ejeção; e conectar os fios de acionamento aos skibs. Dobrar o paraquedas principal e suas linhas de suspensão de forma organizada e eficiente para garantir uma ejeção suave e sem enroscos. Se necessário, aplicar grafite nas superfícies de contato para diminuir o atrito durante a ejeção.",
                        "tools": ["Visão Especial"],
            "sourcePages": [
              52
            ]
          },
          {
            "title": "Produzir Componente para Simular Coifa",
            "description": "Criar um componente que simule a massa da coifa do foguete. Se o parafuso cisalhante não for utilizado no teste, a massa desse componente deve ser maior para compensar a falta do parafuso (se necessário).",
                        "tools": ["Material de massa igual à da coifa."],
            "sourcePages": [
              52
            ]
          },
          {
            "title": "Finalizar a Montagem",
            "description": "Realizar a montagem final de todos os componentes no tubo de teste, incluindo o paraquedas dobrado, o sistema de ejeção preparado e o componente que simula a coifa.",
                        "tools": ["Sistema de recuperação completo", "Componente que simula a coifa", "Tubo de Teste. Em média"],
            "duration": "2h",
            "sourcePages": [
              52
            ]
          }
        ]
      },
      {
        "title": "Execução do Teste",
        "description": "Com a montagem do sistema de recuperação finalizada no tubo, deve-se preparar o local de testes, com foco na segurança, utilização dos EPIs necessários e distância estabelecida. Após fixar o tubo montado e posicionar as pessoas para o registro do teste em vídeo, assim como a pessoa que vai acionar o sistema, é realizado o acionamento.",
        "sourcePages": [
          51,
          52
        ],
        "activities": [
          {
            "title": "Preparar o Local de Testes",
            "description": "Escolher e preparar um local de testes seguro, com espaço suficiente. Definir e demarcar uma área de segurança, garantindo que todas as pessoas envolvidas estejam a uma distância segura do tubo de teste. Fixar firmemente o tubo de teste em uma estrutura estável para evitar movimentos ou tombamentos durante o teste de ejeção. Posicionar câmeras e pessoas responsáveis pela filmagem do teste em ângulos estratégicos para capturar todos os detalhes da ejeção.",
            "sourcePages": [
              52
            ]
          },
          {
            "title": "Realizar o Acionamento e finalizar o teste",
            "description": "A pessoa designada para acionar o sistema de ejeção deve seguir um protocolo de segurança. O acionamento deve ser feito a uma distância segura e utilizando o método apropriado, utiliza-se bateria para o acionamento dos testes estáticos realizados sem a conexão do setor de eletrônica (quando este é conectado, o acionamento é realizado por um membro de Eletrônica).",
            "sourcePages": [
              52
            ]
          }
        ]
      },
      {
        "title": "Relatório do Teste",
        "description": "Após o acionamento, deve-se tirar fotos do resultado, medir a distância de ejeção do paraquedas, preencher a ficha de teste com os dados obtidos e observados e analisar o funcionamento do sistema e identificar quaisquer falhas (repassar a padronização da montagem). Feito todos registros, é necessário desmontar o sistema e analisar internamente para verificar se os skibs foram queimados como esperado e se houve danos aos componentes.",
        "sourcePages": [
          51,
          52,
          53
        ],
        "activities": [
          {
            "title": "Tirar Fotos do Resultado",
            "description": "Imediatamente após o acionamento, tirar fotos detalhadas do resultado do teste. As fotos devem mostrar a posição do paraquedas, a integridade dos componentes e quaisquer danos ou anomalias.",
                        "objective": "peças ejetadas, estado da linha cortada, pinos de cisalhamento rompidos).",
            "tools": ["Celular Em média"],
            "duration": "30min",
            "sourcePages": [
              53
            ]
          },
          {
            "title": "Medir a Distância de Ejeção do Paraquedas e preencher ficha de testes",
            "description": "Medir a distância que o paraquedas foi ejetado do tubo de teste. Essa medida é um indicador da força e da eficiência do sistema de ejeção. Preencher a ficha de teste padronizada com todos os dados e observações relevantes.",
            "sourcePages": [
              53
            ]
          },
          {
            "title": "Analisar o Funcionamento do Sistema",
            "description": "Analisar o funcionamento geral do sistema de ejeção com base nos dados e observações coletadas. Identificar pontos fortes e fracos, e repassar quaisquer ajustes necessários na padronização da montagem.",
                        "objective": "ensaio, confrontando teoria x prática.",
            "tools": ["Bloco de anotações", "Computador", "Ficha de teste recém-preenchida e fotos. Em média"],
            "duration": "1h",
            "sourcePages": [
              53
            ]
          },
          {
            "title": "Identificar Quaisquer Falhas",
            "description": "Investigar a fundo quaisquer falhas que tenham ocorrido durante o teste. Determinar a causa raiz das falhas e propor soluções para evitar que elas se repitam em testes futuros ou no voo real.",
            "sourcePages": [
              53
            ]
          },
          {
            "title": "Desmontar o Sistema e Analisar Internamente",
            "description": "Após a análise externa, desmontar cuidadosamente o sistema de ejeção e inspecionar todos os componentes. Verificar se os skibs foram queimados como esperado e se houve danos ou desgaste em alguma peça.",
            "sourcePages": [
              53
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Definição de Requisitos e Missão",
    "description": "Este processo representa a base conceitual de todo o desenvolvimento do CanSat. É nesta etapa que a equipe transforma a ideia da missão em requisitos técnicos verificáveis, garantindo que todos os subsistemas (estrutura, energia, OBC, payload e comunicação) sejam projetados dentro de limites claros. A definição correta da missão reduz retrabalho, evita decisões contraditórias entre equipes e assegura que o sistema final seja compatível com as regras da competição e com as limitações físicas impostas pelo veículo lançador. Além disso, este processo estabelece os critérios de sucesso da missão, permitindo que os testes posteriores sejam conduzidos com métricas claras de desempenho.",
    "sourcePages": [
      54,
      55,
      56,
      57
    ],
    "subprocesses": [
      {
        "title": "Levantamento de Requisitos da Competição",
        "description": "Este subprocesso tem como objetivo interpretar e consolidar todas as restrições impostas pelos organizadores da competição e pelo veículo lançador. Ao transformar regras textuais em requisitos técnicos claros, a equipe evita ambiguidades que podem comprometer a integração do satélite com o foguete ou gerar penalizações durante a avaliação da missão. Também é",
        "sourcePages": [
          55,
          56
        ],
        "activities": [
          {
            "title": "Análise Técnica do Regulamento da Competição",
            "description": "Realizar uma leitura detalhada e estruturada do manual técnico da competição, identificando todas as regras, restrições operacionais e requisitos obrigatórios que impactam o desenvolvimento do CanSat. Esta atividade busca garantir que nenhum requisito crítico seja negligenciado durante o desenvolvimento do sistema.",
            "sourcePages": [
              56
            ]
          },
          {
            "title": "Consolidação de Requisitos Técnicos do Sistema",
            "description": "Transformar as regras identificadas no regulamento em requisitos técnicos mensuráveis, que possam orientar o desenvolvimento dos subsistemas do satélite. Essa consolidação garante que os requisitos sejam claros, verificáveis e diretamente aplicáveis ao projeto.",
            "sourcePages": [
              56
            ]
          }
        ]
      },
      {
        "title": "Definição de Objetivos Experimentais e Critérios de Sucesso",
        "description": "Este subprocesso estabelece a razão científica ou educacional da missão. A equipe define quais dados deseja coletar durante o voo e qual o valor desses dados para a aprendizagem ou para experimentos técnicos. Também são definidos os critérios de sucesso da missão, que permitem avaliar posteriormente se o CanSat cumpriu seu propósito.",
        "sourcePages": [
          56
        ],
        "activities": [
          {
            "title": "Definição do Experimento da Missão",
            "description": "Determinar qual experimento ou conjunto de medições será realizado durante o voo, considerando limitações de massa, energia e capacidade computacional do satélite. O experimento deve ser relevante para os objetivos educacionais da equipe e viável dentro das restrições da competição.",
            "sourcePages": [
              56
            ]
          },
          {
            "title": "Definição de Métricas e Critérios de Sucesso da Missão",
            "description": "Estabelecer parâmetros objetivos que permitam avaliar o sucesso ou fracasso da missão após o voo. Esses critérios incluem funcionamento dos sistemas, transmissão de dados, integridade estrutural e qualidade dos dados coletados.",
            "sourcePages": [
              56
            ]
          }
        ]
      },
      {
        "title": "Análise de Riscos e Segurança (FMECA)",
        "description": "A análise de riscos busca identificar possíveis falhas técnicas e operacionais que possam comprometer o funcionamento do satélite ou a segurança do lançamento. A aplicação da metodologia FMECA permite antecipar cenários de falha, avaliar sua criticidade e definir estratégias de mitigação antes que o sistema seja construído.",
        "sourcePages": [
          56,
          57
        ],
        "activities": [
          {
            "title": "Identificação de Modos de Falha do Sistema",
            "description": "Mapear todos os possíveis modos de falha que podem ocorrer nos subsistemas do CanSat, incluindo falhas elétricas, estruturais, de software ou comunicação.",
            "sourcePages": [
              57
            ]
          },
          {
            "title": "Classificação de Criticidade e Estratégias de Mitigação",
            "description": "Avaliar a criticidade de cada falha identificada considerando sua probabilidade de ocorrência e o impacto na missão. Com base nessa análise, são definidas estratégias de mitigação, redundância ou monitoramento.",
            "sourcePages": [
              57
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Logística, Aquisição e Materiais",
    "description": "Responsável pelo planejamento, aquisição, controle e disponibilização de todos os recursos físicos necessários ao desenvolvimento do CanSat. Este processo garante que os subsistemas do satélite possuam acesso oportuno aos componentes necessários, respeitando simultaneamente restrições de custo, massa, consumo energético e cronograma de desenvolvimento.",
    "sourcePages": [
      54,
      57,
      58
    ],
    "subprocesses": [
      {
        "title": "Planejamento de Materiais e Otimização de Custos",
        "description": "Este subprocesso tem como objetivo estruturar e manter atualizada a Bill of Materials (BOM) do CanSat, representando a árvore completa de componentes do sistema e listando todos os itens necessários para montagem, integração e testes do satélite. Além da organização dos componentes, este subprocesso envolve a análise comparativa e seleção de alternativas, considerando critérios como custo, desempenho, consumo energético, massa e compatibilidade entre subsistemas. A BOM funciona como uma interface entre engenharia, finanças e logística, permitindo rastrear custos, massas, consumo energético e dependências técnicas entre os subsistemas do satélite.",
        "sourcePages": [
          57,
          58
        ],
        "activities": [
          {
            "title": "Estruturação Inicial da BOM",
            "description": "Construir a primeira versão estruturada da BOM contendo todos os componentes previstos no projeto, incluindo sensores, microcontroladores, módulos de comunicação, baterias, conectores, cabos, materiais estruturais e elementos de fixação. Essa atividade permite identificar desde cedo restrições críticas como massa total do sistema, consumo energético agregado e espaço físico disponível na estrutura do satélite.",
            "sourcePages": [
              58
            ]
          },
          {
            "title": "Consolidação da BOM e Controle de Revisões",
            "description": "Atualizar continuamente a BOM à medida que o projeto evolui, registrando substituições de componentes, alterações de quantidade ou mudanças decorrentes de decisões de engenharia. O controle de revisões garante rastreabilidade das decisões técnicas e evita inconsistências entre o projeto eletrônico, mecânico e logístico.",
            "sourcePages": [
              58
            ]
          },
          {
            "title": "Análise Comparativa de Componentes",
            "description": "Comparar diferentes opções de sensores, microcontroladores e módulos de comunicação considerando: precisão, consumo energético, peso, custo, compatibilidade com o sistema.",
            "sourcePages": [
              58
            ]
          }
        ]
      },
      {
        "title": "Aquisição e Gestão de Fornecedores",
        "description": "Este subprocesso é responsável pela identificação, seleção e gestão de fornecedores, garantindo que os componentes especificados na BOM possam ser adquiridos dentro do prazo e orçamento do projeto. As atividades incluem pesquisa de fornecedores, comparação de preços, análise de prazos de entrega (lead time), avaliação da confiabilidade dos vendedores e acompanhamento do processo de compra. Uma gestão eficiente de fornecedores reduz riscos de atrasos no cronograma do projeto e assegura a disponibilidade dos componentes necessários para as fases de integração e testes.",
        "sourcePages": [
          57,
          58
        ],
        "activities": [
          {
            "title": "Mapeamento de Fornecedores",
            "description": "Identificar fornecedores capazes de fornecer os componentes especificados.",
            "sourcePages": [
              58
            ]
          },
          {
            "title": "Planejamento de Lead Times",
            "description": "Identificar componentes com prazos longos de entrega (ex: sensores importados ou módulos RF específicos) e priorizar sua aquisição antecipadamente.",
            "sourcePages": [
              58
            ]
          }
        ]
      },
      {
        "title": "Recebimento e Controle de Componentes",
        "description": "Este subprocesso é responsável pelo recebimento, inspeção e controle dos componentes adquiridos, garantindo que os materiais entregues correspondam às especificações definidas na BOM e estejam em condições adequadas de uso. As atividades incluem verificação física dos componentes, testes básicos quando necessário, registro no inventário do projeto e armazenamento adequado para evitar danos ou perdas. O controle de componentes contribui para a rastreabilidade dos materiais utilizados no CanSat e reduz o risco de falhas decorrentes de peças defeituosas ou incompatíveis.",
        "sourcePages": [
          57,
          58
        ],
        "activities": [
          {
            "title": "Inspeção de Componentes Recebidos",
            "description": "Verificar se os componentes recebidos correspondem às especificações técnicas e estão livres de defeitos físicos.",
            "sourcePages": [
              58
            ]
          },
          {
            "title": "Planejamento Logístico para Lançamento",
            "description": "Garantir que todos os equipamentos necessários para a missão estejam disponíveis e transportados com segurança, incluindo: CanSat, estação terrena, baterias, ferramentas de manutenção.",
            "sourcePages": [
              58
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Gestão de Estrutura e Mecânica",
    "description": "Desenvolvimento da arquitetura física do CanSat, contemplando a definição da geometria estrutural, organização interna dos subsistemas e garantia da integridade mecânica durante todas as fases da missão. Este processo assegura a compatibilidade dimensional com o padrão 1C, define o caminho de cargas estruturais (load path), organiza a distribuição de massa e estabelece mecanismos de fixação adequados para os subsistemas eletrônicos e sensores. Também contempla a proteção dos componentes embarcados contra vibrações, choques mecânicos e esforços gerados durante o lançamento e a descida do satélite, garantindo que a estrutura funcione como suporte estável para todos os módulos eletrônicos e payloads.",
    "sourcePages": [
      54,
      58,
      59,
      60,
      61,
      62,
      63
    ],
    "subprocesses": [
      {
        "title": "Desenvolvimento Estrutural",
        "description": "Consiste na definição da arquitetura estrutural do CanSat, incluindo suas dimensões externas, layout interno, interfaces mecânicas entre subsistemas e análise preliminar de comportamento estrutural. Nesta etapa são estabelecidos os limites físicos do satélite de acordo com as restrições da missão e da interface com o foguete, além da organização do volume interno para acomodação eficiente de todos os subsistemas embarcados. Também são definidos os pontos de fixação estrutural e o caminho de transmissão de cargas (load path), garantindo que os esforços mecânicos gerados durante o lançamento, ejeção e manipulação do sistema sejam adequadamente suportados pela estrutura do satélite. Adicionalmente, são conduzidas análises de distribuição de massa, determinação do centro de gravidade e simulações estruturais preliminares, com o objetivo de prever o comportamento mecânico do sistema durante as fases de lançamento, descida e recuperação. Os resultados dessas análises são utilizados para orientar ajustes e refinamentos no modelo estrutural antes da etapa de fabricação.",
        "sourcePages": [
          59,
          60,
          61
        ],
        "activities": [
          {
            "title": "Levantamento de restrições estruturais da missão",
            "description": "Identificar e documentar todas as restrições físicas impostas ao CanSat, como dimensões máximas, massa limite, interfaces mecânicas com o foguete e requisitos de segurança. Essa atividade estabelece as bases para todo o projeto estrutural subsequente.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Modelagem conceitual da estrutura",
            "description": "Criar o primeiro modelo conceitual da estrutura do CanSat, definindo geometria geral, volume interno disponível e posicionamento preliminar dos subsistemas.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Análise de Massa e Centro de Gravidade",
            "description": "Realizar o levantamento detalhado da massa de todos os componentes do CanSat e determinar sua distribuição dentro da estrutura. A partir dessas informações, calcula-se o centro de gravidade do sistema, garantindo que ele esteja localizado em uma posição adequada para manter estabilidade durante a descida e evitar rotações excessivas do satélite no ar. Essa atividade também contribui para o controle da massa total do sistema, assegurando que o CanSat permaneça dentro dos limites estabelecidos pelo regulamento da competição.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Análise Estrutural Preliminar",
            "description": "Avaliar preliminarmente a resistência estrutural do CanSat considerando os esforços mecânicos que podem ocorrer durante o lançamento, ejeção do foguete e impacto na fase de recuperação. A análise busca identificar possíveis pontos de concentração de tensão, regiões com risco de deformação ou falha estrutural e oportunidades de reforço na estrutura. Essa atividade contribui para o aumento da confiabilidade do sistema antes da fase de fabricação.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Simulação Estrutural Estática",
            "description": "Executar simulações computacionais para prever o comportamento estrutural do CanSat sob diferentes condições mecânicas, como vibração, compressão ou impacto. A simulação permite validar o projeto estrutural antes da fabricação, identificando possíveis falhas ou deformações que poderiam comprometer o funcionamento do satélite durante a missão. Essa etapa também permite otimizar a estrutura, reduzindo massa desnecessária sem comprometer a resistência mecânica.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Simulação de Vibração Estrutural",
            "description": "Realizar uma análise de vibração estrutural do CanSat com o objetivo de prever o comportamento da estrutura durante as fases de lançamento e ejeção do foguete. Durante essas etapas, o satélite pode estar sujeito a vibrações intensas e excitações mecânicas que podem provocar deslocamento de componentes, fadiga estrutural ou falhas em fixações. A simulação permite identificar possíveis ressonâncias estruturais, regiões de concentração de tensão e pontos onde a rigidez estrutural pode precisar de reforço. A partir dos resultados obtidos, ajustes podem ser feitos no design estrutural para melhorar a robustez do sistema.",
            "sourcePages": [
              60
            ]
          },
          {
            "title": "Simulação de Impacto / Queda",
            "description": "Simular o comportamento estrutural do CanSat durante a fase de aterrissagem ou impacto no solo após a descida. Mesmo com o uso de paraquedas, existe a possibilidade de impactos relativamente bruscos dependendo das condições de vento, velocidade de descida ou irregularidade do terreno. A simulação busca avaliar se a estrutura e os sistemas internos conseguem suportar essas forças sem comprometer a integridade dos sensores, do computador de bordo e dos sistemas de comunicação. Também permite avaliar a necessidade de reforços estruturais ou mecanismos de amortecimento.",
            "sourcePages": [
              61
            ]
          },
          {
            "title": "Refinamento do Modelo Estrutural",
            "description": "Refinar o modelo estrutural do CanSat a partir dos resultados obtidos nas análises e simulações realizadas nas etapas anteriores. Durante esse processo, ajustes podem ser feitos na geometria da estrutura, na espessura de paredes, na distribuição de suportes internos ou na posição de fixações, com o objetivo de melhorar a resistência mecânica, reduzir massa desnecessária e garantir melhor acomodação dos subsistemas internos. Esse refinamento também busca aumentar a confiabilidade do sistema estrutural antes da etapa de fabricação.",
            "sourcePages": [
              61
            ]
          }
        ]
      },
      {
        "title": "Organização de Camadas (Stack)",
        "description": "Define a arquitetura interna baseada em múltiplas placas eletrônicas empilhadas ao longo do eixo vertical do satélite. Essa organização em camadas permite otimizar o uso do volume interno, facilitar a separação funcional entre módulos e melhorar a distribuição de massa ao longo da estrutura.",
        "sourcePages": [
          59,
          61
        ],
        "activities": [
          {
            "title": "Definição da arquitetura das placas",
            "description": "Definir quais módulos eletrônicos estarão presentes em cada camada da pilha de PCBs, considerando requisitos térmicos, interferência eletromagnética e facilidade de integração.",
            "sourcePages": [
              61
            ]
          },
          {
            "title": "Definição de espaçadores e tirantes estruturais",
            "description": "Definir os elementos mecânicos responsáveis por manter a pilha de placas rigidamente conectada e alinhada ao longo do eixo estrutural do CanSat.",
            "sourcePages": [
              61
            ]
          },
          {
            "title": "Verificação de Alinhamento e Distribuição de Massa",
            "description": "Avaliar o alinhamento das placas eletrônicas (PCBs) dentro da estrutura do CanSat e verificar se a distribuição de massa entre os diferentes subsistemas está equilibrada. Essa atividade busca evitar desalinhamentos que possam dificultar a montagem, causar tensões mecânicas ou interferir na estabilidade do satélite durante a descida. A análise também considera a posição relativa de componentes mais pesados, contribuindo para uma melhor localização do centro de massa e para o comportamento estável do sistema durante o voo.",
            "sourcePages": [
              61
            ]
          }
        ]
      },
      {
        "title": "Fabricação da Estrutura",
        "description": "Responsável pela fabricação física da estrutura projetada do CanSat utilizando técnicas de manufatura digital, priorizando leveza, resistência mecânica e precisão dimensional que permitam suportar os esforços mecânicos da missão. Nesta etapa são produzidos o corpo cilíndrico, tampas estruturais e suportes internos necessários para acomodar os subsistemas eletrônicos. A estrutura será produzida majoritariamente por impressão 3D, permitindo rápida prototipagem, iteração de design e fácil substituição de componentes estruturais durante o desenvolvimento do projeto.",
        "sourcePages": [
          59,
          61,
          62
        ],
        "activities": [
          {
            "title": "Seleção de material de manufatura",
            "description": "Avaliar e selecionar o material de impressão 3D mais adequado para a estrutura do CanSat, considerando fatores como",
            "sourcePages": [
              61
            ]
          },
          {
            "title": "Preparação do Modelo para Manufatura (Fatiamento)",
            "description": "Preparar os modelos CAD das peças estruturais para o processo de impressão 3D utilizando softwares de fatiamento. Nesta etapa são definidos parâmetros de impressão como altura de camada, densidade de preenchimento (infill), espessura de paredes, suportes de impressão e orientação das peças na mesa da impressora. Essas configurações influenciam diretamente na resistência mecânica das peças e na qualidade final da estrutura produzida.",
            "sourcePages": [
              62
            ]
          },
          {
            "title": "Impressão das peças estruturais",
            "description": "Realizar a fabricação das peças estruturais do CanSat por meio de impressão 3D, utilizando o material previamente selecionado e os parâmetros definidos na etapa de fatiamento. Durante o processo, é importante monitorar a impressão para identificar possíveis falhas como deformações, delaminações ou problemas de aderência à mesa. Ao final da impressão, as peças devem ser removidas com cuidado para evitar danos estruturais.",
            "sourcePages": [
              62
            ]
          },
          {
            "title": "Acabamento e preparação das peças",
            "description": "Realizar o acabamento das peças estruturais após a impressão 3D, removendo suportes de impressão, rebarbas e imperfeições superficiais que possam interferir na montagem do sistema. Dependendo da necessidade, podem ser realizados pequenos ajustes dimensionais, como lixamento ou limpeza de furos destinados à passagem de parafusos. Essa etapa garante melhor encaixe entre as peças e facilita o processo de integração mecânica do CanSat.",
            "sourcePages": [
              62
            ]
          }
        ]
      },
      {
        "title": "Integração Mecânica",
        "description": "Consiste na montagem física de todos os subsistemas dentro da estrutura do CanSat, garantindo compatibilidade entre os módulos eletrônicos, sensores, sistema de energia e carga útil.",
        "sourcePages": [
          59,
          62,
          63
        ],
        "activities": [
          {
            "title": "Montagem da Pilha de PCBs",
            "description": "Montar a pilha de placas eletrônicas (stack) que compõem os subsistemas do CanSat, utilizando espaçadores e elementos de fixação apropriados. Essa atividade envolve posicionar corretamente cada PCB de acordo com a arquitetura previamente definida, garantindo alinhamento entre conectores, sensores e demais componentes eletrônicos. Uma montagem adequada contribui para a organização interna do sistema e reduz o risco de danos aos circuitos durante o funcionamento.",
            "sourcePages": [
              62
            ]
          },
          {
            "title": "Fixação dos Subsistemas na Estrutura",
            "description": "Integrar os diferentes subsistemas do CanSat à estrutura mecânica, realizando a fixação das placas eletrônicas, sensores, baterias e outros componentes por meio de parafusos, suportes ou encaixes estruturais. Essa etapa garante que todos os elementos permaneçam firmemente posicionados durante as fases de lançamento, ejeção e descida, evitando deslocamentos internos que possam comprometer o funcionamento do sistema.",
            "sourcePages": [
              62
            ]
          },
          {
            "title": "Verificação de Interferências Mecânicas",
            "description": "Verificar se há interferências físicas entre os diferentes componentes instalados dentro da estrutura do CanSat. Essa análise busca identificar possíveis colisões entre peças, dificuldade de passagem de cabos, bloqueio de sensores ou restrições de movimento em partes móveis. Caso sejam identificados conflitos mecânicos, ajustes podem ser realizados na posição dos componentes ou no design da estrutura.",
            "sourcePages": [
              63
            ]
          }
        ]
      },
      {
        "title": "Validação Estrutural",
        "description": "Envolve a verificação da integridade mecânica do CanSat após a integração estrutural, garantindo que o sistema seja capaz de suportar as condições de vibração, impacto e manipulação associadas às fases de lançamento, voo e recuperação.",
        "sourcePages": [
          59,
          63
        ],
        "activities": [
          {
            "title": "Inspeção Estrutural e Verificação de Fixações",
            "description": "Realizar uma inspeção visual e mecânica da estrutura do CanSat após a montagem completa, verificando se todas as fixações estão corretamente apertadas e se não há danos estruturais nas peças impressas. Essa etapa busca garantir que parafusos, suportes e espaçadores estejam adequadamente instalados, reduzindo o risco de soltura de componentes durante a missão.",
            "sourcePages": [
              63
            ]
          },
          {
            "title": "Teste de Rigidez Estrutural",
            "description": "Executar testes simples de rigidez estrutural aplicando forças moderadas na estrutura do CanSat para verificar possíveis deformações ou folgas nos pontos de fixação. Esse teste permite avaliar se a estrutura possui resistência mecânica suficiente para suportar as condições de operação previstas durante o lançamento e a descida.",
            "sourcePages": [
              63
            ]
          },
          {
            "title": "Teste de Queda Controlada",
            "description": "Realizar testes de queda controlada do CanSat a partir de alturas previamente definidas, com o objetivo de avaliar a resistência estrutural do sistema e verificar se os componentes internos permanecem devidamente fixados após o impacto. Após cada teste, é realizada uma inspeção da estrutura e dos subsistemas para identificar possíveis danos ou deslocamentos.",
            "sourcePages": [
              63
            ]
          },
          {
            "title": "Revisão Estrutural Pré-Integração",
            "description": "Conduzir uma revisão final do sistema estrutural antes da integração definitiva com os demais subsistemas do satélite. Nessa etapa são analisados o estado das peças estruturais, a qualidade da montagem mecânica e a adequação das fixações utilizadas. Essa revisão garante que a estrutura esteja pronta para suportar as etapas finais de testes e operação da missão.",
            "sourcePages": [
              63
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Gestão de Energia e Alimentação",
    "description": "Responsável pelo projeto, implementação e validação do sistema de fornecimento de energia elétrica do CanSat. Esse processo garante que todos os subsistemas recebam alimentação elétrica de forma estável, segura e eficiente ao longo de todas as fases da missão, desde a preparação pré-voo até a recuperação do satélite. Além da seleção da fonte de energia e da definição da arquitetura de distribuição elétrica, o processo também envolve a implementação de mecanismos de proteção elétrica, controle de consumo e verificação da autonomia energética do sistema. O objetivo é assegurar que o CanSat opere dentro dos limites seguros de tensão e corrente,",
    "sourcePages": [
      54,
      63,
      64,
      65,
      66,
      67,
      68,
      69
    ],
    "subprocesses": [
      {
        "title": "Definição do Sistema de Energia",
        "description": "Este subprocesso envolve o planejamento da arquitetura de alimentação elétrica do CanSat. Nessa etapa são analisadas as necessidades energéticas de todos os subsistemas, como computador de bordo, sensores da carga útil, módulos de",
        "sourcePages": [
          63,
          65,
          66
        ],
        "activities": [
          {
            "title": "Levantamento de Consumo dos Subsistemas",
            "description": "Realizar o levantamento do consumo elétrico de todos os subsistemas do CanSat por meio da análise das especificações técnicas de microcontroladores, sensores, módulos de comunicação e conversores de tensão. São identificadas tensões de operação, corrente típica e possíveis variações de consumo em diferentes modos de funcionamento. Esses dados são organizados em uma tabela de consumo energético, permitindo estimar a corrente total do sistema e dimensionar corretamente a fonte de energia.",
            "sourcePages": [
              65
            ]
          },
          {
            "title": "Seleção da Fonte de Energia",
            "description": "Selecionar a bateria que alimentará o sistema elétrico do CanSat considerando capacidade energética, corrente máxima de descarga, peso, dimensões físicas, segurança e compatibilidade com o sistema. No projeto são avaliadas baterias recarregáveis do tipo 18650, conhecidas pela alta densidade energética. A escolha considera a autonomia necessária para a missão e as restrições estruturais do satélite, garantindo alimentação estável para todos os subsistemas.",
            "sourcePages": [
              65
            ]
          },
          {
            "title": "Definição da Arquitetura de Distribuição de Energia",
            "description": "Definir como a energia da bateria será distribuída entre os subsistemas do CanSat. Nessa etapa são estabelecidas as tensões necessárias para cada módulo, como 5V e 3.3V, além da topologia de distribuição elétrica. Também são definidos barramentos de alimentação, conexões e integração de conversores de tensão e sistemas de proteção. Uma arquitetura",
            "sourcePages": [
              65
            ]
          }
        ]
      },
      {
        "title": "Regulação e Distribuição",
        "description": "Este subprocesso é responsável pela implementação dos mecanismos de regulação e distribuição da energia elétrica dentro do CanSat. Como a tensão fornecida pela bateria nem sempre corresponde às necessidades dos dispositivos eletrônicos, são utilizados conversores DC-DC para gerar tensões estáveis, normalmente 5V e 3.3V. Esses conversores permitem alimentar adequadamente o computador de bordo, sensores, módulos de comunicação e demais circuitos do sistema. Além da conversão de tensão, também é planejada a distribuição da energia entre os subsistemas, garantindo alimentação confiável e organizada. A estabilidade elétrica é essencial para o funcionamento correto dos componentes, sendo necessário minimizar efeitos como ripple, queda de tensão e variações provocadas por mudanças no consumo.",
        "sourcePages": [
          64,
          66,
          67
        ],
        "activities": [
          {
            "title": "Seleção dos Conversores DC-DC",
            "description": "Selecionar os conversores DC-DC responsáveis por fornecer os níveis de tensão necessários aos subsistemas do CanSat. São analisadas especificações como tensão de entrada e saída, corrente máxima, eficiência energética e estabilidade da regulação. Também é avaliado o comportamento sob variações de carga, já que alguns subsistemas apresentam consumo variável. A escolha adequada garante conversão eficiente da energia da bateria e fornecimento estável de tensão e corrente para todo o sistema elétrico.",
            "sourcePages": [
              66
            ]
          },
          {
            "title": "Implementação do Circuito de Regulação de Tensão",
            "description": "Implementar o circuito responsável pela regulação de tensão do sistema elétrico do CanSat, integrando os conversores DC-DC com a bateria e os barramentos de alimentação definidos na arquitetura elétrica. São realizadas conexões elétricas e adicionados componentes auxiliares, como capacitores de filtragem, para melhorar a estabilidade da tensão e reduzir ruídos elétricos. Essa implementação garante que os dispositivos eletrônicos recebam alimentação segura dentro dos limites de operação.",
            "sourcePages": [
              66
            ]
          },
          {
            "title": "Planejamento da Distribuição de Energia",
            "description": "Planejar como a energia elétrica será distribuída entre os subsistemas após a regulação de tensão. A atividade envolve definir barramentos de alimentação, conexões elétricas e caminhos de distribuição para módulos como computador de bordo, sensores, comunicação e circuitos auxiliares. Também são considerados organização da fiação, identificação das linhas e possibilidade de isolamento de subsistemas. Um planejamento adequado facilita a integração elétrica e reduz erros durante montagem e manutenção.",
            "sourcePages": [
              66
            ]
          },
          {
            "title": "Levantamento de Consumo dos Componentes",
            "description": "Realizar o levantamento detalhado do consumo elétrico de todos os componentes do CanSat por meio da análise de datasheets e, quando necessário, medições experimentais com fonte de bancada e multímetro. São identificadas corrente típica, corrente máxima e tensão de operação de cada dispositivo. Esses dados são organizados em uma tabela preliminar que servirá de base para a planilha de Power Budget, garantindo uma análise energética confiável.",
            "sourcePages": [
              66
            ]
          },
          {
            "title": "Construção da Planilha de Power Budget",
            "description": "Elaborar uma planilha estruturada contendo todos os subsistemas do CanSat e seus parâmetros de consumo energético. Cada linha representa um componente e as colunas",
            "sourcePages": [
              66
            ]
          },
          {
            "title": "Estimativa de Consumo da Missão",
            "description": "Estimar o consumo total de energia do CanSat ao longo da missão considerando diferentes fases operacionais, como pré-lançamento, subida, descida, coleta de dados e transmissão de telemetria. Utilizando a planilha de Power Budget, são definidos os períodos de atividade de cada subsistema, considerando que alguns operam de forma intermitente. Essa análise permite determinar o consumo médio e máximo do sistema e validar a viabilidade energética da missão.",
            "sourcePages": [
              67
            ]
          },
          {
            "title": "Verificação da Autonomia da Bateria",
            "description": "Verificar se a capacidade da bateria é suficiente para sustentar o consumo energético estimado da missão. A análise compara os dados da planilha de Power Budget com as especificações da bateria selecionada, considerando perdas nos reguladores, variações de desempenho e margens de segurança. Caso a autonomia seja insuficiente, podem ser realizados ajustes no projeto, como redução de consumo, otimização de ciclos de operação ou escolha de uma bateria com maior capacidade.",
            "sourcePages": [
              67
            ]
          }
        ]
      },
      {
        "title": "Montagem do Sistema Elétrico",
        "description": "Este subprocesso consiste na implementação física do sistema de alimentação elétrica do CanSat, integrando baterias, dispositivos de proteção e elementos de controle de energia. Durante essa etapa são instalados componentes como células de bateria, suportes, fusíveis, chave geral e o pino de segurança Remove-Before-Flight (RBF). Esses elementos são organizados de forma a permitir inspeções pré-lançamento e garantir que o sistema permaneça desenergizado durante transporte e integração com o foguete. Também são realizadas as conexões elétricas entre baterias, reguladores de tensão e os barramentos que alimentam os subsistemas. A organização da fiação e a qualidade das conexões são fundamentais para evitar falhas de alimentação e garantir segurança durante testes e operação.",
        "sourcePages": [
          64,
          67,
          68
        ],
        "activities": [
          {
            "title": "Preparação dos Componentes do Sistema de Alimentação",
            "description": "Organizar e preparar os componentes do sistema de alimentação do CanSat antes da montagem final. São separados e inspecionados itens como baterias, suportes, fusíveis, conectores, fios, chave geral e pino Remove-Before-Flight (RBF). Durante a preparação são realizados ajustes preliminares, como corte, identificação e preparação de terminais. Essa etapa garante que os materiais estejam prontos para integração elétrica, reduzindo erros de montagem e facilitando a instalação dentro da estrutura.",
            "sourcePages": [
              67
            ]
          },
          {
            "title": "Instalação das Baterias e Suporte de Energia",
            "description": "Realizar a instalação física das baterias responsáveis pelo fornecimento de energia ao CanSat. As células, geralmente do tipo 18650, são posicionadas em suportes adequados e fixadas na estrutura para evitar deslocamentos durante lançamento, descida e pouso. Também são verificadas a orientação das conexões, proteção contra curtos-circuitos e organização interna do sistema, garantindo segurança elétrica, estabilidade mecânica e facilidade de inspeção e manutenção.",
            "sourcePages": [
              67
            ]
          },
          {
            "title": "Instalação dos Dispositivos de Segurança Elétrica",
            "description": "Integrar os dispositivos responsáveis pela segurança elétrica do CanSat, incluindo fusível de proteção, chave geral e pino Remove-Before-Flight (RBF). O fusível protege o sistema contra sobrecorrente, a chave geral permite controlar a alimentação durante testes e o pino RBF mantém o circuito aberto até os momentos finais antes do lançamento. A correta instalação desses elementos garante segurança operacional durante testes em solo e preparação da missão.",
            "sourcePages": [
              68
            ]
          },
          {
            "title": "Conexão do Sistema de Energia aos Subsistemas",
            "description": "Realizar as conexões entre o sistema de alimentação e os subsistemas do CanSat, como reguladores de tensão, computador de bordo, sensores, comunicação e carga útil. São utilizados conversores DC-DC para gerar barramentos de alimentação, como 5V e 3.3V. Durante a atividade também é organizada a fiação interna, evitando tensão mecânica e interferências. Após as conexões, são realizados testes de continuidade e verificação de tensão.",
            "sourcePages": [
              68
            ]
          }
        ]
      },
      {
        "title": "Gestão de Consumo de Energia",
        "description": "Este subprocesso trata do controle do consumo energético do CanSat, garantindo operação eficiente e segura do sistema elétrico. São definidas estratégias para ativar ou desativar subsistemas conforme a necessidade da missão, evitando consumo desnecessário e aumentando a autonomia da bateria. Esse controle pode ser implementado por meio de técnicas como power gating, utilizando transistores MOSFET controlados pelo computador de bordo (OBC). Além disso, o sistema incorpora mecanismos de proteção elétrica contra falhas como",
        "sourcePages": [
          64
        ],
        "activities": []
      },
      {
        "title": "Testes de Alimentação",
        "description": "Este subprocesso envolve a verificação experimental do desempenho do sistema elétrico do CanSat. Durante essa etapa são realizados testes para medir o consumo real do sistema, avaliar o comportamento dos reguladores de tensão e verificar a autonomia energética da bateria. Os resultados obtidos são comparados com as estimativas do Power Budget, permitindo identificar possíveis diferenças entre o modelo teórico e o funcionamento real do sistema. Também são analisados fatores como estabilidade de tensão, aquecimento de componentes e comportamento do sistema sob diferentes condições de carga. Esses testes são fundamentais para validar o sistema de alimentação e reduzir riscos de falhas durante a missão.",
        "sourcePages": [
          65,
          69
        ],
        "activities": [
          {
            "title": "Teste de Tensão e Continuidade do Sistema Elétrico",
            "description": "Realizar a verificação inicial do circuito de alimentação após a montagem do sistema elétrico do CanSat. Utilizando instrumentos de medição, são feitos testes de continuidade para identificar falhas de conexão ou curtos-circuitos. Também são medidas tensões em pontos críticos, como bateria, reguladores e barramentos, garantindo níveis compatíveis com os requisitos dos subsistemas.",
            "sourcePages": [
              69
            ]
          },
          {
            "title": "Teste de Consumo Energético do Sistema",
            "description": "Medir o consumo real de corrente do CanSat em diferentes condições de operação para validar as estimativas do Power Budget. Os testes incluem ativação individual dos subsistemas e funcionamento simultâneo de todos os módulos. Os resultados permitem identificar consumo mínimo, médio e máximo do sistema e comparar o comportamento real com as previsões do projeto.",
            "sourcePages": [
              69
            ]
          },
          {
            "title": "Teste de Estabilidade dos Reguladores de Tensão",
            "description": "Verificar a estabilidade dos reguladores DC-DC responsáveis pela alimentação dos subsistemas. Durante os testes são avaliadas variações de tensão quando diferentes cargas são ativadas ou desativadas. Também são observados fatores como aquecimento dos reguladores, eficiência energética e comportamento em condições de carga elevada, garantindo fornecimento de tensão estável para componentes sensíveis.",
            "sourcePages": [
              69
            ]
          },
          {
            "title": "Teste de Autonomia do Sistema de Energia",
            "description": "Avaliar experimentalmente o tempo de operação do CanSat utilizando apenas a energia armazenada nas baterias. O sistema é executado em condições próximas às da missão, mantendo ativos os principais subsistemas. O teste permite verificar se a autonomia energética atende aos requisitos da missão e validar as estimativas realizadas no Power Budget.",
            "sourcePages": [
              69
            ]
          }
        ]
      },
      {
        "title": "Gestão de Consumo e Segurança",
        "description": "",
        "sourcePages": [
          68,
          69
        ],
        "activities": [
          {
            "title": "Definição da Estratégia de Gerenciamento de Energia",
            "description": "Definir a estratégia de gerenciamento do consumo energético do CanSat, determinando quais subsistemas operarão continuamente e quais poderão funcionar de forma intermitente. A equipe analisa o perfil de operação de cada módulo considerando frequência de uso, criticidade e impacto no consumo total. Com base nisso, são definidos momentos de ativação e desativação dos dispositivos, além do papel do computador de bordo (OBC) no controle energético.",
            "sourcePages": [
              68
            ]
          },
          {
            "title": "Implementação do Circuito de Power Gating",
            "description": "Implementar o circuito responsável por controlar eletronicamente o fornecimento de energia a determinados subsistemas do CanSat. O controle geralmente utiliza transistores MOSFET como chaves eletrônicas acionadas pelo computador de bordo. Esse mecanismo permite desligar módulos que não precisam operar continuamente, reduzindo o consumo energético. Durante a atividade são selecionados componentes, dimensionados os transistores e realizadas as conexões entre o circuito de controle e o OBC.",
            "sourcePages": [
              68
            ]
          },
          {
            "title": "Integração do Controle de Energia com o OBC",
            "description": "Integrar o sistema de controle de energia ao computador de bordo do CanSat. O OBC envia sinais para os circuitos de power gating, permitindo ativar ou desativar subsistemas conforme o perfil operacional da missão. A atividade inclui conexões elétricas entre hardware e OBC, além do desenvolvimento de rotinas no software embarcado para gerenciamento energético,",
            "sourcePages": [
              68
            ]
          },
          {
            "title": "Verificação dos Sistemas de Proteção Elétrica",
            "description": "Verificar o funcionamento dos mecanismos de proteção elétrica do CanSat, incluindo fusíveis, chave geral e pino Remove-Before-Flight. São realizados testes para confirmar que esses dispositivos operam corretamente e interrompem o fornecimento de energia em situações de falha. Também são simuladas condições anormais para avaliar a resposta do sistema, garantindo segurança durante testes em solo, transporte e preparação para o lançamento.",
            "sourcePages": [
              69
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Computador de Bordo (OBC)",
    "description": "O Computador de Bordo (OBC) é responsável pelo controle lógico e coordenação das operações do CanSat durante todas as fases da missão. Baseado na arquitetura ESP32, o sistema gerencia a comunicação entre sensores, módulos de telemetria e subsistemas internos por meio de barramentos digitais como I2C, SPI e UART. O OBC executa rotinas de aquisição de dados, processamento básico, armazenamento em memória e envio de informações para a estação terrena. Também gerencia sincronização temporal, integridade de dados e mecanismos de segurança operacional, garantindo que os subsistemas funcionem de forma integrada, confiável e resiliente às condições de vibração, interferência elétrica e limitações energéticas típicas do voo.",
    "sourcePages": [
      55,
      70,
      71,
      72,
      73,
      74,
      75
    ],
    "subprocesses": [
      {
        "title": "Arquitetura Computacional",
        "description": "Define a estrutura lógica e física do sistema computacional embarcado. Inclui a escolha da arquitetura baseada no ESP32, o planejamento dos barramentos de comunicação, o mapeamento de GPIOs e a organização modular do firmware. O objetivo é estabelecer uma base robusta para integração dos sensores, sistema de telemetria, armazenamento de dados e controle de subsistemas, garantindo escalabilidade, manutenção simples e operação confiável durante a missão.",
        "sourcePages": [
          70,
          71
        ],
        "activities": [
          {
            "title": "Seleção da Plataforma Computacional",
            "description": "Avaliação das possíveis plataformas embarcadas que podem atuar como unidade central do CanSat. A atividade envolve analisar requisitos de processamento, interfaces de comunicação, consumo energético e compatibilidade com os sensores e módulos planejados para a missão.",
            "sourcePages": [
              71
            ]
          },
          {
            "title": "Mapeamento de Interfaces e GPIOs",
            "description": "Definição detalhada da utilização dos pinos de entrada e saída do microcontrolador, incluindo a associação de cada interface física aos sensores, módulos de comunicação, sistemas de armazenamento e outros dispositivos eletrônicos presentes no CanSat.",
            "sourcePages": [
              71
            ]
          },
          {
            "title": "Definição da Arquitetura de Comunicação Interna",
            "description": "Planejamento da forma como os diferentes módulos eletrônicos embarcados irão trocar dados com o computador de bordo. A atividade inclui a definição dos protocolos de comunicação, organização dos barramentos e estratégia de gerenciamento do fluxo de dados.",
            "sourcePages": [
              71
            ]
          },
          {
            "title": "Organização da Estrutura do Firmware",
            "description": "Definição da estrutura lógica do software embarcado, incluindo separação de módulos de código responsáveis por aquisição de dados, comunicação, armazenamento e controle da missão.",
            "sourcePages": [
              71
            ]
          }
        ]
      },
      {
        "title": "Gerenciamento de Firmware",
        "description": "Responsável pelo desenvolvimento, organização e manutenção do firmware embarcado que executa as operações do Computador de Bordo. O subprocesso envolve a implementação das rotinas de aquisição de dados, controle de sensores, comunicação com a estação terrena e gerenciamento de armazenamento. Também inclui a estruturação do código, versionamento, tratamento de erros e definição da lógica de execução do sistema, garantindo operação estável e previsível durante todas as fases da missão.",
        "sourcePages": [
          70,
          71,
          72
        ],
        "activities": [
          {
            "title": "Definição do Ambiente de Desenvolvimento",
            "description": "Consiste na escolha e configuração do ambiente de desenvolvimento utilizado para programação do ESP32, incluindo seleção do framework (Arduino ou ESP-IDF), instalação de bibliotecas necessárias e definição das ferramentas de compilação, depuração e upload do firmware.",
            "sourcePages": [
              71
            ]
          },
          {
            "title": "Implementação da Estrutura Base do Firmware",
            "description": "Criação da estrutura inicial do código embarcado, incluindo inicialização do sistema, configuração de interfaces de comunicação, organização dos módulos principais e definição do fluxo básico de execução do firmware.",
            "sourcePages": [
              71
            ]
          },
          {
            "title": "Implementação das Rotinas de Aquisição de Sensores",
            "description": "Desenvolvimento das rotinas responsáveis pela leitura periódica dos sensores embarcados utilizando os protocolos de comunicação definidos, garantindo coleta consistente dos dados necessários para a missão.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação da Lógica de Execução da Missão",
            "description": "Programação da lógica que define o comportamento do sistema durante a operação do CanSat, incluindo sequenciamento de tarefas, gerenciamento de coleta de dados e acionamento de subsistemas conforme a fase da missão.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação de Rotinas de Tratamento de Erros",
            "description": "Desenvolvimento de mecanismos de detecção e tratamento de falhas no sistema, como perda de comunicação com sensores, falhas de leitura ou erros de armazenamento de dados.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Controle de Versão e Documentação do Firmware",
            "description": "Organização e manutenção do código fonte utilizando ferramentas de versionamento, permitindo rastreabilidade de alterações, colaboração entre integrantes e registro das versões utilizadas durante os testes da missão.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação da Máquina de Estados da Missão",
            "description": "Consiste na implementação de uma estrutura lógica que organiza o comportamento do sistema de acordo com as diferentes fases da missão do CanSat. Cada estado representa uma etapa da operação (pré-lançamento, subida, descida e recuperação), permitindo que o firmware execute rotinas específicas de aquisição de dados, telemetria e controle conforme o momento da missão.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação do Sistema de Timestamp e Sincronização de Dados",
            "description": "Desenvolvimento de um mecanismo que registre o momento exato em que cada dado é coletado ou transmitido pelo sistema. O timestamp permite correlacionar medições de diferentes sensores e reconstruir posteriormente a sequência de eventos ocorridos durante o voo do CanSat.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação de Sistema de Watchdog e Monitoramento de Falhas",
            "description": "Implementação de mecanismos de monitoramento que permitam detectar travamentos ou comportamentos inesperados do firmware durante a operação. O watchdog reinicia automaticamente o sistema caso o programa deixe de responder, aumentando a robustez do computador de bordo frente a falhas temporárias ou erros de execução.",
            "sourcePages": [
              72
            ]
          }
        ]
      },
      {
        "title": "Gerenciamento de Dados de Missão",
        "description": "Responsável por definir como os dados coletados pelos sensores serão organizados, estruturados e preparados para armazenamento e transmissão. O subprocesso envolve a definição do formato dos registros de dados, criação de buffers temporários, padronização dos pacotes de telemetria e gerenciamento do fluxo de informações entre sensores, memória e sistemas de comunicação.",
        "sourcePages": [
          70,
          72,
          73
        ],
        "activities": [
          {
            "title": "Definição da Estrutura de Dados da Missão",
            "description": "Consiste em definir como os dados coletados pelos sensores serão organizados dentro do sistema embarcado. A atividade inclui a criação de estruturas de dados que agrupam medições, timestamps e informações de estado da missão, garantindo consistência e facilidade de processamento, armazenamento e posterior análise dos dados do voo.",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Implementação de Buffers de Dados",
            "description": "Desenvolvimento de mecanismos de armazenamento temporário que permitam acumular leituras de sensores antes de enviá-las",
            "sourcePages": [
              72
            ]
          },
          {
            "title": "Definição do Formato de Pacotes de Telemetria",
            "description": "Definição do formato dos dados que serão enviados à estação terrena, incluindo ordem das variáveis, tamanho dos campos e identificação dos sensores. Essa padronização facilita a interpretação das informações pela estação de solo e garante compatibilidade entre o sistema embarcado e o software de visualização.",
            "sourcePages": [
              73
            ]
          },
          {
            "title": "Implementação de Registro de Logs de Missão",
            "description": "Desenvolvimento do sistema responsável por registrar de forma contínua os dados coletados durante o voo. Os logs permitem reconstruir posteriormente o comportamento do CanSat, facilitando análise de desempenho da missão e identificação de possíveis falhas operacionais.",
            "sourcePages": [
              73
            ]
          }
        ]
      },
      {
        "title": "Aquisição dos dados",
        "description": "Responsável pela implementação das rotinas de comunicação entre o computador de bordo e os sensores da missão. Este subprocesso define como os dados ambientais e de voo serão coletados, incluindo configuração de protocolos de comunicação, frequência de amostragem e sincronização temporal das leituras. Também contempla a validação das medições obtidas em bancada, garantindo integridade dos dados e funcionamento estável mesmo em condições de vibração ou interferência no barramento.",
        "sourcePages": [
          70
        ],
        "activities": []
      },
      {
        "title": "Gestão de Memória e Armazenamento",
        "description": "Responsável pela organização, armazenamento e preservação dos dados coletados durante a missão do CanSat. Este subprocesso define a estrutura de arquivos de registro, implementa rotinas de escrita em cartão SD ou memória flash e estabelece estratégias de buffering para reduzir perdas de dados causadas por vibração, falhas de energia ou interrupções do sistema. Também garante que os dados registrados possam ser recuperados e analisados posteriormente para avaliação do desempenho da missão.",
        "sourcePages": [
          70,
          74
        ],
        "activities": [
          {
            "title": "Definição da Estrutura de Registro de Dados",
            "description": "Consiste na definição do formato em que os dados coletados serão armazenados pelo sistema. Nesta etapa é estabelecida a organização dos registros contendo timestamp e medições dos sensores, garantindo padronização dos dados e facilitando a leitura, análise e geração de gráficos após a recuperação do CanSat.",
            "sourcePages": [
              74
            ]
          },
          {
            "title": "Implementação da Escrita em Cartão SD",
            "description": "Desenvolvimento das rotinas responsáveis por registrar os dados coletados em cartão SD durante a missão. A implementação inclui inicialização do módulo de armazenamento, criação de arquivos de log e gravação contínua das medições geradas pelos sensores e pelo sistema.",
            "sourcePages": [
              74
            ]
          },
          {
            "title": "Implementação de Buffer de Escrita",
            "description": "Implementação de um sistema de armazenamento temporário em memória RAM para agrupar medições antes da escrita no cartão SD. O uso de buffers reduz a frequência de acesso ao armazenamento e diminui o risco de perda de dados causada por interrupções momentâneas durante a operação do sistema.",
            "sourcePages": [
              74
            ]
          },
          {
            "title": "Validação da Integridade dos Dados Gravados",
            "description": "Realização de testes de leitura dos arquivos registrados no cartão SD após simulações de operação do sistema. O objetivo é confirmar que os dados foram gravados corretamente, sem corrupção ou perda de registros, garantindo confiabilidade do armazenamento durante o voo.",
            "sourcePages": [
              74
            ]
          },
          {
            "title": "Proteção contra Perda de Dados em Falha de Energia",
            "description": "Implementação de estratégias no firmware para reduzir a perda de dados em caso de interrupção inesperada de energia. Inclui gravação periódica no cartão SD, uso de buffers controlados e fechamento regular dos arquivos de log, garantindo que os dados coletados até o momento da falha permaneçam recuperáveis.",
            "sourcePages": [
              74
            ]
          }
        ]
      },
      {
        "title": "Integração de Subsistemas",
        "description": "Responsável por integrar o computador de bordo com os demais sistemas do CanSat, incluindo sensores, carga útil, sistema de",
        "sourcePages": [
          70,
          74,
          75
        ],
        "activities": [
          {
            "title": "Integração do OBC com Sensores e Payload",
            "description": "Consiste na conexão e validação da comunicação entre o computador de bordo e os sensores ou dispositivos da carga útil. Nesta etapa são verificados barramentos de comunicação, endereçamento e funcionamento conjunto dos dispositivos, garantindo que o OBC consiga coletar dados de todos os módulos instalados.",
            "sourcePages": [
              74
            ]
          },
          {
            "title": "Integração com Sistema de Energia",
            "description": "Verificação da alimentação elétrica do computador de bordo e dos módulos conectados. Nesta etapa são avaliadas tensões fornecidas pelo sistema de energia, estabilidade da alimentação e comportamento do sistema durante inicialização, garantindo que todos os dispositivos operem dentro dos limites elétricos seguros.",
            "sourcePages": [
              75
            ]
          },
          {
            "title": "Integração com Sistema de Telemetria",
            "description": "Configuração da comunicação entre o OBC e o módulo responsável pela transmissão de dados para a estação terrena. Nesta etapa são definidos formatos de telemetria, frequência de envio e validação da transmissão de informações coletadas durante os testes de bancada.",
            "sourcePages": [
              75
            ]
          },
          {
            "title": "Simulação de Operação Integrada do Sistema",
            "description": "Realização de testes de bancada com todos os subsistemas conectados ao OBC, simulando o funcionamento completo do CanSat. O objetivo é verificar interação entre sensores, armazenamento e comunicação, garantindo que o sistema funcione de forma coordenada antes da integração estrutural final.",
            "sourcePages": [
              75
            ]
          }
        ]
      },
      {
        "title": "Aquisição de Dados",
        "description": "",
        "sourcePages": [
          73,
          74
        ],
        "activities": [
          {
            "title": "Integração dos Sensores ao OBC",
            "description": "Consiste na conexão e configuração inicial dos sensores utilizados na missão, incluindo sensores ambientais e de navegação. Nesta etapa são definidos endereços de comunicação, verificada a compatibilidade elétrica e confirmada a comunicação básica entre o sensor e o microcontrolador através dos barramentos digitais disponíveis.",
            "sourcePages": [
              73
            ]
          },
          {
            "title": "Implementação das Rotinas de Leitura de Sensores",
            "description": "Desenvolvimento das rotinas de firmware responsáveis pela leitura periódica dos sensores conectados ao OBC. Nesta etapa são implementadas funções de coleta de dados, conversão de valores brutos para unidades físicas e organização das informações para posterior armazenamento ou transmissão.",
            "sourcePages": [
              73
            ]
          },
          {
            "title": "Definição da Frequência de Amostragem",
            "description": "Determinação da periodicidade com que cada sensor será consultado pelo OBC durante a missão. A definição considera limitações de processamento, taxa de geração de dados e requisitos da missão, garantindo que as medições sejam representativas sem sobrecarregar o sistema ou o armazenamento.",
            "sourcePages": [
              73
            ]
          },
          {
            "title": "Validação das Leituras em Bancada",
            "description": "Realização de testes experimentais para verificar se os sensores estão registrando valores coerentes com o ambiente. Nesta etapa são comparadas leituras obtidas pelo sistema com valores esperados ou instrumentos de referência, garantindo confiabilidade dos dados antes da integração completa do CanSat.",
            "sourcePages": [
              73
            ]
          },
          {
            "title": "Sincronização Temporal das Medições",
            "description": "Implementação de um sistema de marcação temporal para todas as medições realizadas pelo OBC. Cada leitura de sensor recebe um timestamp gerado pelo microcontrolador, permitindo",
            "sourcePages": [
              73
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Gestão da Carga Útil (Payload)",
    "description": "Responsável pelo desenvolvimento, integração e validação dos instrumentos científicos do CanSat responsáveis pela coleta de dados durante a missão. O processo envolve a seleção e integração de sensores ambientais e inerciais, implementação do subsistema de captura de imagens e sincronização temporal dos dados coletados. Também inclui testes e validações para garantir a confiabilidade das medições realizadas durante o voo. O objetivo é obter um conjunto consistente de dados ambientais, dinâmicos e visuais que permitam analisar o comportamento do artefato e as condições da atmosfera durante a missão.",
    "sourcePages": [
      55,
      75,
      76,
      77,
      78,
      79
    ],
    "subprocesses": [
      {
        "title": "Sensoriamento Atmosférico",
        "description": "Responsável pela implementação do sistema de medição das condições atmosféricas durante o voo do CanSat. Envolve a integração dos sensores BME280 e AHT21 para coleta de dados de pressão, temperatura e umidade ao longo da descida. O uso de dois sensores térmicos permite redundância nas medições de temperatura, aumentando a confiabilidade dos dados coletados. O sistema possibilita o perfilamento atmosférico da troposfera durante a missão, permitindo análises posteriores sobre variações ambientais em função da altitude.",
        "sourcePages": [
          75,
          76,
          77
        ],
        "activities": [
          {
            "title": "Seleção e Verificação dos Sensores Atmosféricos",
            "description": "Analisar e validar os sensores responsáveis pelas medições atmosféricas do CanSat, verificando compatibilidade elétrica, precisão e comunicação com o sistema embarcado. São avaliados os sensores BME280 e AHT21 por meio de datasheets e testes iniciais para confirmar funcionamento adequado antes da integração ao computador de bordo.",
            "sourcePages": [
              76
            ]
          },
          {
            "title": "Integração dos Sensores ao Computador de Bordo",
            "description": "Realizar a integração elétrica e lógica dos sensores BME280 e AHT21 ao computador de bordo do CanSat. A atividade envolve conexão ao barramento I2C, configuração de endereços e implementação inicial das rotinas de leitura no software embarcado, garantindo aquisição confiável dos dados ambientais.",
            "sourcePages": [
              76
            ]
          },
          {
            "title": "Calibração e Teste dos Sensores Atmosféricos",
            "description": "Realizar testes experimentais para avaliar a precisão e estabilidade das medições de temperatura, pressão e umidade fornecidas pelos sensores. As leituras são comparadas com instrumentos de referência ou valores ambientais conhecidos para identificar possíveis desvios e validar o funcionamento adequado dos sensores.",
            "sourcePages": [
              76
            ]
          },
          {
            "title": "Validação da Aquisição de Dados Atmosféricos",
            "description": "Testar o sistema completo de aquisição de dados atmosféricos em condições simuladas de operação, verificando a estabilidade das leituras ao longo do tempo e a correta transmissão dos",
            "sourcePages": [
              76
            ]
          }
        ]
      },
      {
        "title": "Dinâmica de Voo",
        "description": "Responsável pela implementação do sistema de medição da dinâmica de movimento do CanSat durante o voo. Utiliza o sensor inercial MPU6050 para registrar acelerações lineares e velocidades angulares do artefato. Esses dados permitem analisar comportamento rotacional, estabilidade durante a descida e possíveis oscilações do satélite. As medições contribuem para a compreensão do comportamento dinâmico do CanSat ao longo da missão.",
        "sourcePages": [
          75,
          77
        ],
        "activities": [
          {
            "title": "Integração do Sensor Inercial ao OBC",
            "description": "Realizar a integração elétrica e lógica do sensor inercial MPU6050 ao computador de bordo do CanSat. A atividade inclui conexão ao barramento I2C, verificação de comunicação com o microcontrolador e implementação inicial das rotinas de leitura de aceleração e velocidade angular.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Implementação da Aquisição de Dados Inerciais",
            "description": "Desenvolver rotinas no software embarcado responsáveis pela leitura contínua dos dados do acelerômetro e giroscópio do MPU6050. O sistema deve registrar acelerações e velocidades angulares durante o voo, permitindo posterior análise da dinâmica e do comportamento rotacional do CanSat.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Teste de Comportamento Dinâmico",
            "description": "Realizar testes experimentais para avaliar a resposta do sensor MPU6050 a movimentos controlados. O CanSat ou protótipo é submetido a rotações e acelerações simuladas, permitindo verificar se os dados registrados representam corretamente o movimento físico do sistema.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Validação dos Dados de Dinâmica de Voo",
            "description": "Avaliar a consistência e confiabilidade dos dados coletados pelo sensor inercial em testes prolongados. A análise busca confirmar que o sistema registra corretamente aceleração e rotação durante diferentes condições de movimento, garantindo dados úteis para análise da dinâmica de voo do CanSat.",
            "sourcePages": [
              77
            ]
          }
        ]
      },
      {
        "title": "Subsistema de Imagem",
        "description": "Responsável pela implementação do sistema de captura de imagens do CanSat durante a missão. Utiliza a ESP32-CAM para registrar imagens periódicas durante o voo, permitindo observação visual do ambiente e do comportamento do satélite durante a descida. O subsistema envolve configuração do módulo de câmera, definição da frequência de captura, integração com o",
        "sourcePages": [
          75,
          77,
          78
        ],
        "activities": [
          {
            "title": "Integração do Módulo ESP32-CAM ao Sistema",
            "description": "Realizar a integração elétrica e lógica do módulo ESP32-CAM ao sistema do CanSat, garantindo alimentação adequada e comunicação com o computador de bordo. A atividade inclui testes iniciais de funcionamento, verificação da inicialização da câmera e validação da captura básica de imagens.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Implementação da Captura Periódica de Imagens",
            "description": "Desenvolver rotinas no software da ESP32-CAM responsáveis pela captura automática de imagens em intervalos regulares durante o voo. A frequência de captura é definida considerando limitações de processamento, armazenamento e largura de banda da telemetria.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Teste de Qualidade e Estabilidade das Imagens",
            "description": "Realizar testes para avaliar a qualidade das imagens capturadas pela ESP32-CAM em diferentes condições de iluminação e movimento. A atividade busca garantir que as imagens possuam resolução e nitidez suficientes para análise após a missão.",
            "sourcePages": [
              77
            ]
          },
          {
            "title": "Validação do Subsistema de Imagem",
            "description": "Executar testes prolongados para validar o funcionamento contínuo do sistema de captura de imagens. O objetivo é verificar estabilidade da operação, confiabilidade da captura periódica e integração adequada com os demais subsistemas do CanSat.",
            "sourcePages": [
              78
            ]
          }
        ]
      },
      {
        "title": "Sincronização Temporal",
        "description": "Responsável pela implementação de um mecanismo de sincronização temporal entre os diferentes instrumentos da carga útil do CanSat. O sistema garante que sensores ambientais, sensores inerciais e subsistema de imagem registrem dados associados a um mesmo referencial de tempo. Essa sincronização permite correlacionar posteriormente eventos do voo, variações ambientais e imagens capturadas, possibilitando análises mais precisas do comportamento do satélite durante a missão.",
        "sourcePages": [
          76,
          78
        ],
        "activities": [
          {
            "title": "Definição da Estratégia de Timestamp",
            "description": "Definir o método de sincronização temporal utilizado no sistema de payload. A atividade envolve estabelecer o computador de bordo como referência de tempo e definir o formato de timestamp utilizado para registrar os dados provenientes dos sensores e das imagens capturadas durante o voo.",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Implementação do Sistema de Timestamp nos Sensores",
            "description": "Implementar no software embarcado o registro automático de timestamp para cada conjunto de dados coletados pelos sensores ambientais e inerciais. O objetivo é garantir que cada medição esteja associada ao instante exato de aquisição.",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Sincronização da Captura de Imagens com os Dados dos Sensores",
            "description": "Implementar o mecanismo de sincronização entre o subsistema de imagem e o sistema de aquisição de sensores, garantindo que cada imagem capturada esteja associada ao timestamp correspondente. Isso permite correlacionar imagens com dados ambientais e de movimento durante a análise da missão.",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Validação da Sincronização Temporal",
            "description": "Executar testes experimentais para verificar se todos os dados coletados pelo payload compartilham o mesmo referencial temporal. A atividade envolve analisar registros de sensores e imagens para confirmar a correta associação de timestamps e a consistência da sequência temporal.",
            "sourcePages": [
              78
            ]
          }
        ]
      },
      {
        "title": "Validação da Carga Útil",
        "description": "Responsável pela verificação integrada do funcionamento de todos os instrumentos da carga útil do CanSat. O subprocesso envolve testes experimentais para avaliar a aquisição, sincronização, armazenamento e transmissão dos dados coletados pelos sensores e pelo subsistema de imagem. O objetivo é garantir que todos os sistemas operem de forma estável e confiável antes da missão, assegurando a qualidade científica dos dados obtidos durante o voo.",
        "sourcePages": [
          76,
          78,
          79
        ],
        "activities": [
          {
            "title": "Teste Integrado dos Sensores da Carga Útil",
            "description": "Realizar testes com todos os sensores do payload operando simultaneamente, verificando aquisição de dados ambientais e inerciais em conjunto. O objetivo é confirmar que os sensores funcionam corretamente quando integrados ao sistema completo e que não há interferência entre os dispositivos.",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Teste Integrado do Sistema de Imagem",
            "description": "Testar o funcionamento do subsistema de imagem operando simultaneamente com os sensores do payload. O objetivo é verificar se a captura periódica de imagens ocorre corretamente sem comprometer a aquisição ou transmissão dos dados dos demais instrumentos.",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Teste de Telemetria dos Dados da Carga Útil",
            "description": "Verificar a transmissão em tempo real dos dados coletados pela carga útil para a estação terrena. O teste busca confirmar que as",
            "sourcePages": [
              78
            ]
          },
          {
            "title": "Teste de Missão Simulada da Carga Útil",
            "description": "Executar um teste completo do payload simulando o funcionamento do sistema durante uma missão real. Sensores, câmera e telemetria operam simultaneamente por um período prolongado para verificar estabilidade do sistema e validar o comportamento integrado da carga útil.",
            "sourcePages": [
              79
            ]
          },
          {
            "title": "Revisão de Prontidão da Carga Útil (Payload Readiness Review)",
            "description": "Realizar uma revisão técnica final da carga útil para verificar se todos os subsistemas estão devidamente integrados, testados e preparados para operação durante a missão. A atividade consiste na análise dos resultados dos testes realizados, verificação de funcionamento dos sensores, sistema de imagem, armazenamento e telemetria, além da conferência das conexões elétricas e configuração do software embarcado.",
            "sourcePages": [
              79
            ]
          }
        ]
      }
    ]
  },
  {
    "title": "Estação Terrena e Telemetria (GCS)",
    "description": "Responsável pela recepção, visualização, registro e análise dos dados transmitidos pelo CanSat durante as operações de teste e missão. O processo envolve o desenvolvimento da interface de monitoramento, a configuração da infraestrutura de comunicação em rádio frequência, a implementação de protocolos de telemetria e comandos remotos, além da validação do alcance e da estabilidade do link de comunicação. Também inclui o armazenamento estruturado dos dados de voo para posterior análise técnica, permitindo avaliação do desempenho do sistema e suporte às revisões pós-missão.",
    "sourcePages": [
      55,
      79,
      80,
      81,
      82
    ],
    "subprocesses": [
      {
        "title": "Desenvolvimento de Interface (GUI)",
        "description": "Responsável pelo desenvolvimento da interface gráfica da estação terrena utilizada para monitorar, visualizar e registrar os dados transmitidos pelo CanSat em tempo real. O subprocesso envolve a criação de dashboards capazes de exibir parâmetros da missão por meio de gráficos, indicadores e registros estruturados, permitindo que a equipe acompanhe o comportamento do sistema durante os testes e o voo.",
        "sourcePages": [
          79,
          80
        ],
        "activities": [
          {
            "title": "Definição da Arquitetura da Interface",
            "description": "Planejar a estrutura da interface gráfica da estação terrena, definindo quais dados serão exibidos, como altitude, temperatura, aceleração e status do sistema. A atividade estabelece o layout inicial do dashboard e a organização dos elementos visuais utilizados no monitoramento da missão.",
            "sourcePages": [
              80
            ]
          },
          {
            "title": "Implementação da Visualização de Telemetria em Tempo Real",
            "description": "Desenvolver os componentes da interface responsáveis por exibir os dados recebidos do CanSat em tempo real, utilizando gráficos e indicadores dinâmicos para representar parâmetros da missão, permitindo acompanhamento contínuo do comportamento do satélite durante testes e voo.",
            "sourcePages": [
              80
            ]
          },
          {
            "title": "Implementação do Registro de Dados da Telemetria",
            "description": "Implementar na interface o registro automático dos dados recebidos do CanSat, armazenando as informações em arquivos estruturados que permitam posterior análise da missão e reconstrução do comportamento do sistema durante o voo.",
            "sourcePages": [
              80
            ]
          }
        ]
      },
      {
        "title": "Infraestrutura de Hardware e RF",
        "description": "Responsável pela configuração física da estação terrena utilizada para comunicação com o CanSat. O subprocesso envolve a seleção e montagem dos equipamentos de rádio frequência, antenas, receptores e estruturas de suporte, além da organização da estação de monitoramento em campo. O objetivo é garantir uma recepção estável da telemetria e possibilitar a operação da estação durante testes e missões em ambiente aberto.",
        "sourcePages": [
          79,
          80,
          81
        ],
        "activities": [
          {
            "title": "Seleção e Planejamento dos Equipamentos de RF",
            "description": "Definir os equipamentos de comunicação utilizados na estação terrena, incluindo módulo receptor, antena, cabos e interfaces com o computador de monitoramento. A atividade envolve avaliar requisitos de alcance, frequência de operação e compatibilidade com o sistema de telemetria do CanSat.",
            "sourcePages": [
              80
            ]
          },
          {
            "title": "Montagem Física da Estação Terrena",
            "description": "Realizar a montagem física da estação terrena, instalando antenas, receptores, suportes estruturais e conectando os equipamentos ao computador de monitoramento. A atividade também inclui organização dos cabos e posicionamento adequado da antena para recepção eficiente do sinal.",
            "sourcePages": [
              80
            ]
          },
          {
            "title": "Verificação e Ajuste da Antena",
            "description": "Realizar testes de posicionamento e orientação da antena para otimizar a recepção do sinal transmitido pelo CanSat. A atividade inclui ajustes de inclinação, direção e altura da antena, buscando melhorar a estabilidade e a intensidade do sinal recebido.",
            "sourcePages": [
              81
            ]
          }
        ]
      },
      {
        "title": "Protocolos de Comando (Uplink)",
        "description": "Responsável pelo desenvolvimento e implementação dos mecanismos que permitem o envio de comandos da estação terrena para o CanSat durante testes e operações de missão. O subprocesso inclui a definição da estrutura dos comandos, implementação do envio via sistema de comunicação e verificação da resposta do satélite, garantindo que ajustes operacionais possam ser realizados remotamente quando necessário.",
        "sourcePages": [
          79,
          81
        ],
        "activities": [
          {
            "title": "Definição da Estrutura dos Comandos de Uplink",
            "description": "Definir os tipos de comandos que poderão ser enviados ao CanSat pela estação terrena, estabelecendo sua estrutura de dados, formato de transmissão e parâmetros de controle. A atividade também documenta como cada comando será interpretado pelo computador de bordo.",
            "sourcePages": [
              81
            ]
          },
          {
            "title": "Implementação do Sistema de Envio de Comandos",
            "description": "Desenvolver o mecanismo que permite à estação terrena enviar comandos para o CanSat por meio do sistema de comunicação, integrando essa funcionalidade à interface da estação terrena para permitir que operadores executem ações remotas durante testes ou simulações de missão.",
            "sourcePages": [
              81
            ]
          },
          {
            "title": "Teste de Recepção e Execução de Comandos",
            "description": "Realizar testes práticos para verificar se os comandos enviados pela estação terrena são corretamente recebidos e executados pelo CanSat. A atividade avalia a confiabilidade da comunicação e confirma se as respostas do sistema embarcado correspondem às instruções enviadas.",
            "sourcePages": [
              81
            ]
          }
        ]
      },
      {
        "title": "Gestão de Telemetria e Logs",
        "description": "Responsável pela organização, armazenamento e gerenciamento dos dados de telemetria recebidos pela estação terrena durante testes e missões. O subprocesso envolve a definição do formato de registro dos dados, implementação do salvamento automático das medições e estruturação dos arquivos para facilitar análises",
        "sourcePages": [
          79,
          81
        ],
        "activities": [
          {
            "title": "Definição da Estrutura de Dados da Telemetria",
            "description": "Definir como os dados recebidos do CanSat serão organizados e registrados nos arquivos de telemetria, estabelecendo campos como tempo, altitude, temperatura, aceleração e status do sistema. A atividade também define o formato dos arquivos utilizados para armazenamento dos registros.",
            "sourcePages": [
              81
            ]
          },
          {
            "title": "Implementação do Registro Automático de Telemetria",
            "description": "Desenvolver o mecanismo responsável por registrar automaticamente os dados recebidos pela estação terrena, salvando as informações em arquivos estruturados durante a operação da missão. O objetivo é garantir que todos os dados transmitidos sejam armazenados de forma contínua e organizada.",
            "sourcePages": [
              81
            ]
          },
          {
            "title": "Verificação e Organização dos Logs de Missão",
            "description": "Realizar a verificação dos arquivos de telemetria gerados durante os testes ou missão, conferindo se os registros foram armazenados corretamente e organizando os dados para análise técnica posterior. A atividade também inclui a preparação dos arquivos para uso em relatórios e revisões pós-voo.",
            "sourcePages": [
              81
            ]
          }
        ]
      },
      {
        "title": "Integração e Teste de Alcance (LOS)",
        "description": "Responsável por integrar o CanSat à estação terrena e realizar testes experimentais de comunicação em ambiente aberto, avaliando a estabilidade e o alcance do link de telemetria. O subprocesso envolve a execução de testes progressivos de distância, análise da qualidade do sinal e validação do funcionamento da comunicação em linha de visada, garantindo que os dados do satélite possam ser recebidos de forma confiável durante a missão.",
        "sourcePages": [
          80,
          82
        ],
        "activities": [
          {
            "title": "Integração do Sistema de Comunicação entre CanSat e GCS",
            "description": "Realizar a integração inicial entre o sistema de comunicação do CanSat e a estação terrena, verificando se os dados transmitidos pelo satélite podem ser recebidos corretamente pela GCS. A atividade confirma a compatibilidade entre transmissor, receptor e software de monitoramento.",
            "sourcePages": [
              82
            ]
          },
          {
            "title": "Teste Progressivo de Alcance da Telemetria",
            "description": "Realizar testes de comunicação aumentando gradualmente a distância entre o CanSat e a estação terrena em ambiente aberto, avaliando a estabilidade da recepção de dados e identificando possíveis perdas de sinal ou interferências ao longo do alcance.",
            "sourcePages": [
              82
            ]
          },
          {
            "title": "Avaliação da Qualidade do Link de Comunicação",
            "description": "Analisar os dados coletados durante os testes de alcance para avaliar a qualidade do link de comunicação, verificando estabilidade da transmissão, taxa de perda de pacotes e consistência dos dados recebidos pela estação terrena.",
            "sourcePages": [
              82
            ]
          }
        ]
      }
    ]
  }
] satisfies PdfProcessCatalogEntry[]
