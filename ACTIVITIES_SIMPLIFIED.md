# Atividades — Mintzberg Flow (versão simplificada)

> Versão resumida do [ACTIVITIES.md](ACTIVITIES.md): 25 atividades gerais em vez de 74
> detalhadas. O escopo, as horas e os prazos são os mesmos. Para os detalhes técnicos de cada item
> (arquivos afetados, entradas e saídas, justificativas), consulte o documento completo.
>
> **Equipe:** 2 desenvolvedores · **Início:** 08/10/2026 · **Prazo máximo:** 30/11/2026
> Marque `- [x]` quando a atividade estiver concluída e integrada.

---

## Divisão

| | Dev A | Dev B |
| --- | --- | --- |
| **Foco** | Back-end, dados e motor de cálculo | Front-end, canvas e interface |
| **Atividades** | 11 | 14 |
| **Esforço** | 340 h | 338 h |

> ⚠️ **Ritmo necessário:** cerca de **10 h por dia útil por pessoa** (35 dias úteis, já
> descontados os feriados de 12/10, 02/11 e 20/11). Se esse ritmo não for viável, os itens
> marcados com *(opcional)* podem ser cortados sem deixar nenhum requisito descoberto. Eles somam
> 94 h.

---

## Dev A — Back-end, dados e motor de cálculo

- [ ] **A-01 · Modelo de dados unificado** · 28 h · até **13/10** · RF-05, RF-11, RF-12, RF-13
  - Transformar os três tipos atuais numa estrutura de árvore (macroprocesso → processo →
    subprocesso → atividade). Ligações podem conectar qualquer bloco, inclusive
    de ramos diferentes. Duração e pessoas viram números, e cada bloco guarda seus predecessores.
- [ ] **A-02 · Backend, banco e migração dos dados** · 66 h · até **22/10** · RF-04
  - Escolher o backend (recomendado: Supabase), criar o banco e a API de criação, edição e
    exclusão, migrar os dados atuais do PDF para o banco e configurar testes e CI.
- [ ] **A-03 · Hierarquia completa e ligações entre ramos** · 32 h · até **28/10** · RF-04, RF-05, RF-13
  - Tornar a atividade um bloco navegável, permitir criar, duplicar e excluir blocos com seus
    filhos, e exibir ligações com blocos que estão em outro subprocesso ou processo.
- [ ] **A-04 · Motor de cálculo: paralelismo, síntese e CPM** · 64 h · até **06/11** · RF-11, RF-12
  - Montar o grafo de dependências com detecção de ciclos. Calcular a duração (soma em série,
    maior valor em paralelo) e as pessoas (maior valor em série, soma em paralelo) de baixo para
    cima até o macroprocesso.
- [ ] **A-05 · Regras de consistência** · 12 h · até **10/11** · RNF-07
  - Detectar blocos sem entrada ou saída, blocos órfãos, ciclos, dados faltando e ligações
    quebradas.
- [ ] **A-06 · Autenticação e controle de acesso** · 32 h · até **12/11** · RF-08, RNF-03
  - Login por e-mail **(pronto até 23/10)**, papéis leitor/editor/admin por setor e permissões
    aplicadas no servidor.
- [ ] **A-07 · Log de alterações e versionamento** · 26 h · até **16/11** · RF-07, RNF-04
  - Registrar quem alterou o quê e quando **(log pronto até 13/11)**.
- [ ] **A-08 · Sincronização em tempo real** · 28 h · até **19/11** · RNF-06
  - Mostrar as mudanças para todos que estão com o diagrama aberto e tratar conflitos quando duas
    pessoas editam o mesmo bloco (opcional).
- [ ] **A-09 · Busca no servidor e armazenamento de anexos** · 20 h · até **24/11** · RF-06, RF-09
  - Busca textual no banco e upload de arquivos vinculados aos blocos.
- [ ] **A-10 · Relatório em PDF** · 16 h · até **26/11** · RF-10
  - Relatório com a ficha do bloco, o diagrama, a duração, as pessoas e o caminho crítico.
- [ ] **A-11 · Gráfico de Gantt** *(opcional)* · 16 h · até **27/11** · RF-11
  - Cronograma visual gerado a partir do CPM.

---

## Dev B — Front-end, canvas e interface

- [ ] **B-01 · Base da interface** · 20 h · até **09/10** · RNF-02
  - Preparar as cores para tema claro e escuro, criar as rotas (link direto para cada bloco) e
    dividir o carregamento por página *(opcional)*.
- [ ] **B-02 · Editor visual com arrastar e soltar** · 64 h · até **21/10** · RF-01
  - Migrar os diagramas para React Flow mantendo o visual atual. Criar a paleta de blocos para
    arrastar ao canvas e salvar a posição dos blocos. Alinhamento automático *(opcional)*.
- [ ] **B-03 · Conexões e rótulos** · 22 h · até **23/10** · RF-02, RF-03
  - Ligar blocos arrastando com o mouse, editar o texto de entrada/saída sobre a linha e definir
    os tipos de ligação e as setas.
- [ ] **B-04 · Navegação pela hierarquia** · 12 h · até **26/10** · RF-05
  - Descer e subir por qualquer número de níveis, com breadcrumb.
- [ ] **B-05 · Cadastro e salvamento automático** · 40 h · até **30/10** · RF-04, RNF-01
  - Formulário de criação e edição de blocos ligado ao banco, com salvamento automático e
    indicador de estado. Desfazer/refazer *(opcional)*.
- [ ] **B-06 · Visualização expansível** · 28 h · até **05/11** · RNF-05
  - Expandir blocos no próprio canvas e abrir um painel/pop-up com os detalhes. Nível de detalhe
    automático pelo zoom *(opcional)*.
- [ ] **B-07 · Busca e filtros** · 10 h · até **06/11** · RF-09
  - Campo de busca e filtros por setor, status, responsável e tag.
- [ ] **B-08 · Síntese, caminho crítico e alertas na tela** · 30 h · até **11/11** · RF-11, RF-12, RNF-07
  - Mostrar duração e pessoas calculadas em cada bloco, explicar como o número foi obtido.
- [ ] **B-09 · Perfil e preferências** · 18 h · até **13/11** · RNF-02, RNF-03
  - Ícone informando o usuário logado e seletor de tema claro/escuro. Cor de destaque e densidade *(opcional)*.
- [ ] **B-10 · Histórico na tela** · 10 h · até **16/11** · RF-07, RNF-04
  - Linha do tempo de alterações por bloco e data da última atualização.
- [ ] **B-12 · Versão para celular** · 30 h · até **23/11** · RNF-02
  - Gestos de toque, painéis adaptados à tela pequena e modo somente leitura no celular.
- [ ] **B-13 · Anexos na tela e busca rápida** · 18 h · até **25/11** · RF-06, RF-09
  - Enviar, visualizar e remover anexos de um bloco. Atalho Ctrl+K para saltar até um bloco
    *(opcional)*.

---

## Entrega

- [ ] **ENTREGA · Integração final, revisão e publicação** · Dev A + Dev B · até **30/11**

---

## Onde um depende do outro

| Até | Quem entrega | O quê | Para quem destravar |
| --- | --- | --- | --- |
| 13/10 | Dev A | A-01 Modelo de dados | B-02 Editor visual |
| 22/10 | Dev A | A-02 Backend | B-05 Cadastro e salvamento |
| 26/10 | Dev B | B-04 Navegação | A-03 Ligações entre ramos |
| 06/11 | Dev A | A-04 Motor de cálculo | B-08 Síntese na tela |
| 10/11 | Dev A | A-05 Consistência | B-08 Alertas na tela |
| 12/11 | Dev A | A-06 Controle de acesso | B-09 Perfil e B-12 Celular |
| 13/11 | Dev A | Log (parte da A-07) | B-10 Histórico na tela |
| 17/11 | Dev B | B-11 Exportação de imagem | A-10 Relatório em PDF |
| 24/11 | Dev A | A-09 Anexos e busca | B-13 Anexos na tela |

---

## Marcos

- [ ] **Fundação:** dados no banco, sem dependência de mocks · **22/10**
- [ ] **Editor:** desenhar, conectar, rotular e salvar · **30/10**
- [ ] **Inteligência:** duração, pessoas, caminho crítico e alertas calculados · **11/11**
- [ ] **Operação:** login, permissões, histórico e edição simultânea · **19/11**
- [ ] **Alcance:** busca, anexos, exportação, tema e celular · **27/11**
- [ ] **Entrega final** · **30/11**

---

## Cobertura dos requisitos

| Requisito | Atividades |
| --- | --- |
| RF-01 Blocos com arrastar e soltar | B-02 |
| RF-02 Conexão por linhas e setas | B-03 |
| RF-03 Texto sobre as linhas | B-03 |
| RF-04 CRUD de processos e afins | A-02, A-03, B-05 |
| RF-05 Hierarquização | A-01, A-03, B-04 |
| RF-06 Anexar arquivos | A-09, B-13 |
| RF-07 Controle de versão | A-07, B-10 |
| RF-08 Nível de acesso | A-06 |
| RF-09 Busca | A-09, B-07, B-13 |
| RF-10 Exportação PDF/PNG | A-10, B-11 |
| RF-11 Paralelismo e CPM | A-01, A-04, B-08 |
| RF-12 Síntese de informações | A-01, A-04, B-08 |
| RF-13 Dependência entre ramos | A-01, A-03 |
| RNF-01 Salvamento automático | B-05 |
| RNF-02 Responsivo e customizável | B-01, B-09, B-12 |
| RNF-03 Autenticação única | A-06, B-09 |
| RNF-04 Log por modificação | A-07, B-10 |
| RNF-05 Expansividade | B-06 |
| RNF-06 Sincronização concorrente | A-08 |
| RNF-07 Consistência de dependências | A-05, B-08 |

---

## Decisões pendentes (até 13/10)

- [ ] Qual backend usar (recomendado: Supabase)?
- [ ] O script que importa os dados do PDF continua sendo usado depois da migração?
- [ ] Paralelismo calculado pelas dependências entre blocos (recomendado) ou marcado manualmente?
- [ ] Permissões por setor bastam ou é preciso permissão por bloco?
- [ ] Onde o sistema vai ser hospedado?
- [ ] A equipe sustenta ~10 h por dia útil, ou os itens opcionais já saem do plano?
