# Atividades para Conclusão dos Requisitos — Mintzberg Flow

> Documento derivado da análise do código atual (`src/`) confrontado com `requirements.md`.
> Estruturado no mesmo modelo que o sistema precisa representar:
> **macroprocesso → processos → subprocessos → atividades**, com duração, colaboradores,
> entradas/saídas e paralelismo declarados em cada nível.
>
> **Equipe:** 2 desenvolvedores · **Prazo máximo:** 30/11/2026 · cada atividade é um item marcável (`- [ ]` → `- [x]`).

---

## 1. Diagnóstico do estado atual

### 1.1 O que existe e funciona

| Camada | Situação |
| --- | --- |
| Stack | React 19 + TypeScript + Tailwind 4 + Vite 8; `@xyflow/react` instalado. `tsc -b` passa sem erro. |
| Entrada | `src/App.tsx` renderiza diretamente `FlowchartPage`. Sem router. |
| Visualizações | Duas abas: `MacroProcessMap` (setores/processos) e `DetailedFlowDiagram` (fluxo interno). |
| Renderização | **SVG escrito à mão** com pan/zoom próprio (`onPointerDown`/`onWheel`), não React Flow. |
| Dados | Hardcoded em `src/data/*.ts`. `pdfProcessCatalog.ts` (5.299 linhas) é gerado por `scripts/generate_pdf_process_catalog.py` a partir de `src/docs/Fases1_2.pdf`. |
| Hierarquia | `avionicsHierarchy.ts` monta em tempo de import `diagramProcesses`, `detailDiagrams`, `processParentMap` com layout calculado. |
| Navegação | `navigationStack` em `FlowchartPage` permite drill-down de **processo → subprocesso** (2 níveis). |

### 1.2 Código já escrito mas desconectado da árvore de render

Nada abaixo é importado por `App.tsx` — é patrimônio recuperável, não trabalho a refazer:

- `components/flow/FlowCanvas.tsx` — canvas **React Flow** completo (Background, MiniMap, Controls, fitView).
- `components/flow/ProcessNode.tsx` — nó customizado do React Flow.
- `components/flow/ProcessEditorModal.tsx` — formulário de CRUD com todos os campos de `ProcessRecord`.
- `components/flow/ProcessDetailModal.tsx`, `ActivityInspector.tsx`, `OverviewFlow.tsx`.
- `components/ui/` — `StatCard`, `FilterChip`, `ProcessListItem`, `DetailGroup`.
- `utils/flow.ts` — `filterProcesses()` (busca textual multi-campo **já implementada**), `buildFlowNodes()`, `buildFlowEdges()` com rótulo de aresta e marcador de seta.
- `data/flowchart.ts`, `types/flow.ts` — layout e relações tipadas (`entrada`/`handoff`/`controle`/`feedback`).

### 1.3 Lacunas frente aos requisitos

| # | Requisito | Situação | Natureza da lacuna |
| --- | --- | --- | --- |
| RF-01 | Blocos com arrastar e soltar | ❌ | Canvas é read-only; posições vêm de `x`/`y` calculados no código. |
| RF-02 | Conexão de blocos por linhas/setas | ⚠️ | Arestas renderizam, mas são dado estático. Não há criação por interação. |
| RF-03 | Texto sobre as linhas | ⚠️ | `DiagramEdge.label` existe e renderiza; não é editável. |
| RF-04 | CRUD de processos e afins | ❌ | `ProcessEditorModal` existe sem `onSave` ligado a nada persistente. |
| RF-05 | Hierarquização | ⚠️ | Só 2 níveis navegáveis. Atividade é string/`ActivityDetail`, não nó próprio. |
| RF-06 | Anexar arquivos em blocos | ❌ | Nenhum modelo nem storage. |
| RF-07 | Controle de versão | ❌ | Nenhum carimbo de data, autor ou histórico. |
| RF-08 | Controle de nível de acesso | ❌ | Sem autenticação nem autorização. |
| RF-09 | Mecanismo de busca | ⚠️ | `filterProcesses()` pronto, sem nenhuma UI que o chame. |
| RF-10 | Exportação PDF/PNG | ❌ | Inexistente. |
| RF-11 | Paralelismo | ❌ | Não há modelo de dependência nem de simultaneidade. |
| RF-12 | Síntese de informações | ❌ | `duration` de pai é texto digitado à mão (`'151 horas estimadas (total dos subprocessos)'`), não calculado. |
| RF-13 | Dependência entre atividades de subprocessos distintos | ❌ | Arestas vivem dentro de uma `DiagramDefinition`; não atravessam a hierarquia. |
| RNF-01 | Salvamento automático | ❌ | Não há o que salvar — sem persistência. |
| RNF-02 | Responsivo e customizável | ⚠️ | Responsivo há (`useIsMobile`, breakpoints). Tema é dark fixo: `index.css` crava `color-scheme: dark`. |
| RNF-03 | Autenticação única | ❌ | Inexistente. |
| RNF-04 | Log por modificação | ❌ | Inexistente. |
| RNF-05 | Expansividade | ⚠️ | Drill-down existe; não há expansão in-place de nó. |
| RNF-06 | Sincronização concorrente | ❌ | Inexistente. |
| RNF-07 | Consistência de dependências | ❌ | Nenhuma validação. |

### 1.4 Três bloqueios estruturais

Estes três pontos condicionam quase todo o resto do plano:

**(a) A arquitetura front-end-only não sustenta mais os requisitos.**
`PROJECT_DESCRIPTION.md` §6 define "aplicação totalmente front-end com dados mockados". Mas
RF-07, RF-08, RNF-01, RNF-03, RNF-04 e RNF-06 (versão, acesso, autosave, autenticação, log,
concorrência) são, por definição, requisitos de servidor e banco. **Backend deixou de ser
opcional.** É a primeira decisão a tomar.

**(b) `duration` e `collaborators` são texto livre.**
Valores reais no repositório: `'3h00'`, `'Em média 1hr'`, `'Variável'`, `'151 horas estimadas
(total dos subprocessos)'`, `'1 a 5'`, `'Entre 1 e 5 colaboradores'`, `'5'`. Nenhuma soma, máximo
ou CPM é possível sobre isso. RF-11 e RF-12 exigem campos numéricos normalizados antes de
qualquer cálculo.

**(c) O modelo de domínio está fragmentado em três tipos paralelos.**
`ProcessRecord` (dado), `DiagramNode` (desenho) e `MacroFlowNode` (visão macro) descrevem a mesma
coisa em formatos diferentes, e `ProcessKind` fixa quatro níveis por enum. O requisito é uma
**árvore recursiva** (um nó tem um pai e filhos, sem profundidade fixada) com **arestas globais**
que podem ligar nós de ramos diferentes (RF-13). O modelo atual não expressa isso.

### 1.5 Conflito de escopo a registrar

`PROJECT_DESCRIPTION.md` §4 lista explicitamente como **fora do escopo**: "Aplicação de
metodologias como FMEA e **CPM**" e "**Múltiplos níveis sofisticados de permissão**" — ambos
agora pedidos em `requirements.md` (RF-11 e RF-08). O `requirements.md` é mais recente e
prevalece neste plano; `PROJECT_DESCRIPTION.md` §4, §6 e §12 precisam ser atualizados, do
contrário os dois documentos se contradizem para quem entrar no projeto depois. Isso está
registrado como atividade A1.1.6.

---

## 2. Equipe, prazo e capacidade

### 2.1 Divisão de responsabilidades

| Desenvolvedor | Trilha | Escopo principal | Esforço |
| --- | --- | --- | --- |
| **Dev A** | Back-end, dados e motor de cálculo | Modelo de domínio, banco, API, seed, autenticação, permissões, log, versionamento, realtime, grafo de dependências, síntese, CPM, busca no servidor, storage, relatório PDF | 340 h |
| **Dev B** | Front-end, canvas e interface | Router, migração para React Flow, arrastar e soltar, conexões, CRUD na UI, navegação hierárquica, expansividade, painéis de síntese, busca na UI, tema, mobile, acessibilidade | 338 h |

> Substitua "Dev A" e "Dev B" pelos nomes reais. A divisão segue a fronteira **servidor/dados ×
> interface**. Cada um pode trabalhar sem esperar o outro na maior parte do tempo. Os pontos em
> que um depende do outro estão na §11.2.

### 2.2 Janela de execução

- **Início:** quinta-feira, 08/10/2026
- **Fim do trabalho planejado:** sexta-feira, 27/11/2026
- **Reserva e entrega:** segunda-feira, **30/11/2026** (prazo máximo)
- **Dias úteis disponíveis:** 35. Já estão descontados os feriados de 12/10 (N. Sra. Aparecida),
  02/11 (Finados) e 20/11 (Consciência Negra).

### 2.3 ⚠️ Carga necessária para cumprir o prazo

O escopo completo soma **678 h**. Divididas entre 2 pessoas em 35 dias úteis, isso exige:

| | Por desenvolvedor |
| --- | --- |
| Horas totais | ~340 h |
| Por dia útil | **~10 h** |
| Por semana (5 dias) | **~50 h** |

Esse ritmo **só se sustenta com dedicação integral e mais um pouco**. Com uma carga menor, o prazo
de 30/11 só é cumprido se parte do escopo for cortada. As atividades marcadas com 🔻 são as
candidatas a corte. Elas não são o núcleo de nenhum requisito: o requisito continua atendido,
só com menos acabamento. Ordem sugerida de corte:

| Ordem | Atividade | h | O que se perde |
| --- | --- | --- | --- |
| 1 | A4.3.3 Gantt | 16 | Cronograma visual. O CPM continua, com caminho crítico no canvas. |
| 2 | A7.3.2 Culling de nós | 12 | Desempenho em diagramas muito grandes. |
| 3 | A2.4.3 Undo/redo | 14 | Desfazer na sessão. O histórico do servidor (A5.3.*) continua. |
| 4 | A6.1.3 Paleta Ctrl+K | 10 | Atalho de navegação. A busca e os filtros continuam. |
| 5 | A7.3.1 Acessibilidade por teclado | 10 | Navegação por teclado no canvas. |
| 6 | A3.2.3 Zoom semântico | 8 | Nível de detalhe automático pelo zoom. |
| 7 | A2.2.3 Snap e alinhamento | 8 | Conforto na edição. O arrastar e soltar continua. |
| 8 | A7.1.3 Acento e densidade | 6 | Personalização fina. O tema claro/escuro continua. |
| 9 | A6.4.3 Exportação JSON/CSV | 6 | Dados brutos. PDF e PNG continuam. |
| 10 | A7.3.3 Code splitting | 4 | Tempo da carga inicial. |
| | **Total cortável** | **94** | Com o corte: 584 h, ~8,3 h por dia útil por dev |

---

## 3. Como usar este checklist

- Marque `- [x]` quando a atividade estiver **concluída e integrada** na branch principal.
- Cada linha traz: **ID** · descrição · **esforço** · **responsável** · **prazo**.
- Abaixo de cada atividade estão a entrada (o que ela consome) e a saída (o que ela entrega).
- 🔻 = candidata a corte (§2.3).
- O prazo é a data em que a atividade precisa estar pronta para não atrasar quem depende dela.

---

## 4. Macroprocesso

> **MACROPROCESSO:** Plataforma Mintzberg Flow
> **Objetivo maior:** sustentar a construção do foguete por meio do mapeamento hierárquico,
> visual e auditável de todos os macroprocessos, processos, subprocessos e atividades da Cactus.
> **Entradas:** base documental das Fases 1 e 2 (`src/docs/Fases1_2.pdf`), protótipo React atual.
> **Saídas:** sistema web multiusuário de modelagem de processos com síntese automática de
> duração/pessoas e aplicação de CPM.
> **Esforço:** 678 h · **Colaboradores:** 2 · **Prazo:** 30/11/2026

| Processo | Foco | Esforço | Concluído até | Requisitos cobertos |
| --- | --- | --- | --- | --- |
| P1 | Fundação: modelo de dados e backend | 108 h | 27/10 | RF-04, RF-05, RF-13, RNF-03 (base) |
| P2 | Editor visual de processos | 132 h | 29/10 | RF-01, RF-02, RF-03, RF-04, RF-13 |
| P3 | Hierarquia e navegação | 50 h | 05/11 | RF-05, RNF-05 |
| P4 | Motor de cálculo: paralelismo, síntese e CPM | 100 h | 27/11 | RF-11, RF-12 |
| P5 | Acesso, colaboração e auditoria | 110 h | 19/11 | RF-07, RF-08, RNF-01, RNF-03, RNF-04, RNF-06 |
| P6 | Busca, consistência, anexos e exportação | 100 h | 26/11 | RF-06, RF-09, RF-10, RNF-07 |
| P7 | Interface, tema e responsividade | 78 h | 27/11 | RNF-02, RNF-05 |

---

## 5. P1 — Fundação: modelo de dados e backend

> **Objetivo:** substituir os três tipos paralelos por uma árvore recursiva persistida, e trocar
> os imports estáticos por uma camada de dados real.
> **Entrada:** `src/types/*.ts`, `src/data/*.ts` atuais.
> **Saída:** banco migrado, API CRUD, front consumindo dados remotos.
> **Esforço:** 108 h · **Concluído até:** 27/10

### S1.1 — Redesenho do modelo de domínio · 28 h · série · Dev A

- [ ] **A1.1.1** · Unificar `ProcessRecord` + `DiagramNode` + `MacroFlowNode` numa entidade `Node` recursiva (`id`, `parentId`, `kind` livre, `level` derivado), eliminando a profundidade fixa do enum `ProcessKind` · **8 h** · Dev A · prazo **08/10**
  - Entrada: `types/process.ts`, `types/diagram.ts`, `types/macroFlow.ts` → Saída: `types/node.ts`
- [ ] **A1.1.2** · Modelar `Edge` como entidade **global** (não aninhada em `DiagramDefinition`): `sourceNodeId`, `targetNodeId`, `label`, `kind`, âncoras. Isso habilita o RF-13 · **4 h** · Dev A · prazo **09/10**
  - Entrada: `types/diagram.ts`, `types/flow.ts` → Saída: `types/edge.ts`
- [ ] **A1.1.3** · Normalizar duração e equipe em campos numéricos: `durationMinutes: number`, `crewSize: number`, preservando o texto original em `durationLabel` · **6 h** · Dev A · prazo **09/10**
  - Entrada: valores de `processes.ts` → Saída: esquema + tipos
- [ ] **A1.1.4** · Modelar dependências: `predecessorIds: string[]` por nó, de onde série e paralelo são **derivados** (ver §8.1) · **6 h** · Dev A · prazo **13/10**
  - Entrada: RF-11 → Saída: modelo de dependência
- [ ] **A1.1.5** · Modelar posição por diagrama: `position` escopada ao `parentId` · **4 h** · Dev A · prazo **13/10**
  - Entrada: layout de `avionicsHierarchy.ts` → Saída: esquema de posição
- [ ] **A1.1.6** · Atualizar `PROJECT_DESCRIPTION.md` §4/§6/§12, resolvendo o conflito de escopo da §1.5 · **— h** · Dev A · prazo **13/10**
  - Entrada: §1.5 deste documento → Saída: docs coerentes

### S1.2 — Backend e persistência · 56 h · série · Dev A

- [ ] **A1.2.1** · Decidir a stack de backend. **Recomendação: Supabase**, que entrega Postgres, auth por e-mail, storage, realtime e RLS de uma vez · **4 h** · Dev A · prazo **14/10**
  - Entrada: §1.4(a), §14 → Saída: ADR escrito
- [ ] **A1.2.2** · Esquema do banco + migrations: `nodes`, `edges`, `attachments`, `node_versions`, `audit_log`, `users`, `roles`, `sectors` · **10 h** · Dev A · prazo **15/10**
  - Entrada: S1.1 → Saída: migrations versionadas
- [ ] **A1.2.3** · API CRUD de nós e arestas, com operações de subárvore (mover, duplicar, excluir em cascata) em transação · **16 h** · Dev A · prazo **16/10**
  - Entrada: A1.2.2 → Saída: API + testes
- [ ] **A1.2.4** · **Script de seed único** migrando `pdfProcessCatalog.ts` para o banco. Inclui o parser de `'3h00'`/`'Em média 1hr'`/`'Variável'` para minutos, com relatório dos valores não parseáveis para revisão humana · **12 h** · Dev A · prazo **19/10**
  - Entrada: `pdfProcessCatalog.ts`, `processes.ts`, A1.1.3 → Saída: base populada
- [ ] **A1.2.5** · Camada de acesso no front substituindo os imports estáticos de `src/data/` · **14 h** · Dev A · prazo **21/10**
  - Entrada: A1.2.3 → Saída: hooks de dados

> ⚠️ Depois da A1.2.4, o script `scripts/generate_pdf_process_catalog.py` deixa de ser fonte de
> verdade em runtime e passa a ser só uma ferramenta de importação pontual. Decisão a confirmar na §14.

### S1.3 — Infraestrutura de aplicação · 24 h · paralelo com S1.2 · Dev A + Dev B

- [ ] **A1.3.1** · Router com rota por nó (`/no/:id`), habilitando deep-link. Hoje `App.tsx` tem uma tela só · **6 h** · Dev B · prazo **09/10**
  - Entrada: `App.tsx` → Saída: rotas
- [ ] **A1.3.2** · Estado de servidor com cache e invalidação (TanStack Query ou equivalente) · **8 h** · Dev B · prazo **27/10**
  - Entrada: A1.2.5 → Saída: camada de cache
- [ ] **A1.3.3** · Testes (Vitest + Testing Library) e CI rodando `lint` + `tsc -b` + testes · **10 h** · Dev A · prazo **22/10**
  - Entrada: — → Saída: pipeline verde

---

## 6. P2 — Editor visual de processos

> **Objetivo:** transformar o canvas read-only em editor de verdade, com arrastar e soltar,
> conexões desenhadas pelo usuário e rótulos editáveis.
> **Entrada:** `DetailedFlowDiagram.tsx`, `MacroProcessMap.tsx`, `FlowCanvas.tsx` (órfão), P1.
> **Saída:** editor de diagramas persistente.
> **Esforço:** 132 h · **Concluído até:** 29/10

### S2.1 — Migração para React Flow · 40 h · série · Dev B

Decisão de engenharia: **não estender o SVG manual**. O `DetailedFlowDiagram` tem 1.095 linhas de
geometria, roteamento de arestas e pan/zoom próprios. O `@xyflow/react` já entrega arrastar nó,
criar aresta por interação, handles, seleção múltipla e minimapa. Ele já está no `package.json` e
já tem um canvas pronto em `FlowCanvas.tsx`.

- [ ] **A2.1.1** · Recuperar `FlowCanvas` + `ProcessNode` e religá-los ao modelo de P1 · **8 h** · Dev B · prazo **13/10**
  - Entrada: `FlowCanvas.tsx`, `ProcessNode.tsx`, A1.1.1 → Saída: canvas vivo
- [ ] **A2.1.2** · Reimplementar os nós de `DetailedFlowDiagram` como nós customizados React Flow (`start`, `end`, `task`, `decision`, `message`, `system`, `subprocess`), **preservando a identidade visual atual** · **20 h** · Dev B · prazo **15/10**
  - Entrada: `DetailedFlowDiagram.tsx`, `types/diagram.ts` → Saída: nós customizados
- [ ] **A2.1.3** · Migrar `MacroProcessMap` para o mesmo canvas, unificando a interação entre as duas abas · **12 h** · Dev B · prazo **16/10**
  - Entrada: `MacroProcessMap.tsx` → Saída: visão macro unificada

### S2.2 — Arrastar e soltar (RF-01) · 24 h · série · Dev B

- [ ] **A2.2.1** · Paleta lateral de blocos por forma geométrica. Arrastar da paleta para o canvas cria o nó · **10 h** · Dev B · prazo **19/10**
  - Entrada: A2.1.2 → Saída: paleta
- [ ] **A2.2.2** · Persistir posição no `onNodeDragStop` com debounce (integra com RNF-01) · **6 h** · Dev B · prazo **20/10**
  - Entrada: A1.1.5, A2.1.1 → Saída: posição salva
- [ ] 🔻 **A2.2.3** · Snap-to-grid, guias de alinhamento, seleção e movimentação múltipla · **8 h** · Dev B · prazo **21/10**
  - Entrada: A2.2.1 → Saída: edição confortável

### S2.3 — Conexões, rótulos e travessia de hierarquia (RF-02, RF-03, RF-13) · 36 h · série · Dev B + Dev A

- [ ] **A2.3.1** · Handles nos quatro lados e criação de aresta por arraste (`onConnect`), com validação de alvo · **8 h** · Dev B · prazo **22/10**
  - Entrada: A2.1.2 → Saída: conexão por interação
- [ ] **A2.3.2** · Rótulo de aresta editável inline: o texto do que entra e sai (RF-03) · **8 h** · Dev B · prazo **22/10**
  - Entrada: A1.1.2 → Saída: rótulo editável
- [ ] **A2.3.3** · Tipos e estilos de aresta (`entrada`/`handoff`/`controle`/`feedback`) e marcadores de seta, aproveitando a paleta de `utils/flow.ts` · **6 h** · Dev B · prazo **23/10**
  - Entrada: `utils/flow.ts` → Saída: estilos
- [ ] **A2.3.4** · **Arestas que cruzam a hierarquia (RF-13):** quando a contraparte está fora do diagrama aberto, renderizar um nó-fantasma de referência externa, clicável, que navega até o nó real · **14 h** · Dev A · prazo **28/10**
  - Entrada: A1.1.2, A3.1.1 → Saída: dependências entre ramos

> A A2.3.4 atende diretamente o RF-13: uma atividade pode gerar entrada para outra que não
> pertence ao mesmo subprocesso ou processo. Ela também é pré-requisito do CPM, porque sem ela o
> grafo de dependências fica dividido por ramo.

### S2.4 — CRUD pela interface (RF-04) · 32 h · série · Dev B + Dev A

- [ ] **A2.4.1** · Religar `ProcessEditorModal` ao modelo novo, adicionando os campos numéricos da A1.1.3 e os predecessores da A1.1.4 · **10 h** · Dev B · prazo **28/10**
  - Entrada: `ProcessEditorModal.tsx`, S1.1 → Saída: formulário funcional
- [ ] **A2.4.2** · Criar / duplicar / excluir nó, com confirmação e política explícita de cascata para filhos e arestas · **8 h** · Dev A · prazo **26/10**
  - Entrada: A1.2.3 → Saída: CRUD completo
- [ ] 🔻 **A2.4.3** · Undo/redo por pilha de comandos no canvas e no formulário · **14 h** · Dev B · prazo **29/10**
  - Entrada: A2.2.*, A2.3.* → Saída: histórico de sessão

---

## 7. P3 — Hierarquia e navegação

> **Objetivo:** sair dos 2 níveis atuais para profundidade arbitrária e tornar a atividade um nó
> de primeira classe.
> **Entrada:** `FlowchartPage.tsx` (`navigationStack`), `processParentMap`.
> **Saída:** navegação recursiva com expansão in-place.
> **Esforço:** 50 h · **Concluído até:** 05/11

### S3.1 — Drill-down em n níveis (RF-05) · 22 h · série · Dev B + Dev A

- [ ] **A3.1.1** · Generalizar `navigationStack` para profundidade arbitrária, derivando a pilha da cadeia de ancestrais via `parentId` em vez do `processParentMap` pré-computado · **8 h** · Dev B · prazo **26/10**
  - Entrada: `FlowchartPage.tsx` → Saída: navegação recursiva
- [ ] **A3.1.2** · Breadcrumb a partir da cadeia de ancestrais, com colapso por reticências em caminhos profundos · **4 h** · Dev B · prazo **26/10**
  - Entrada: A3.1.1 → Saída: breadcrumb n-nível
- [ ] **A3.1.3** · **Tornar a atividade navegável:** hoje a atividade é `string` em `ProcessRecord.activities` / `ActivityDetail`, não um nó. Promovê-la a nó com diagrama próprio · **10 h** · Dev A · prazo **27/10**
  - Entrada: A1.1.1 → Saída: 4º nível navegável

### S3.2 — Expansividade (RNF-05) · 28 h · paralelo · Dev B

- [ ] **A3.2.1** · Expandir/colapsar nó in-place, mostrando os filhos dentro do nó pai sem trocar de tela · **10 h** · Dev B · prazo **03/11**
  - Entrada: A2.1.2 → Saída: expansão in-place
- [ ] **A3.2.2** · Painel lateral de detalhe progressivo, recuperando `ActivityInspector` e `ProcessDetailModal` (ambos órfãos) · **10 h** · Dev B · prazo **04/11**
  - Entrada: `ActivityInspector.tsx`, `ProcessDetailModal.tsx` → Saída: inspetor
- [ ] 🔻 **A3.2.3** · Minimapa e zoom semântico: nível de detalhe do nó em função do zoom · **8 h** · Dev B · prazo **05/11**
  - Entrada: A2.1.1 → Saída: leitura enxuta

---

## 8. P4 — Motor de cálculo: paralelismo, síntese e CPM

> **Objetivo:** fazer duração e tamanho de equipe serem **calculados** a partir dos filhos e das
> dependências, em vez de digitados.
> **Entrada:** campos numéricos da A1.1.3, dependências da A1.1.4, arestas globais da A2.3.4.
> **Saída:** síntese automática em todos os níveis + caminho crítico.
> **Esforço:** 100 h · **Concluído até:** 06/11 (núcleo) · 27/11 (Gantt)

### 8.1 Decisão de modelagem a registrar antes de codar

Os requisitos RF-11 e RF-12 descrevem duas regras que se invertem:

| | Em série | Em paralelo |
| --- | --- | --- |
| **Duração** | soma das atividades | maior duração entre elas |
| **Pessoas** | maior necessidade entre elas | soma das necessidades |

A recomendação é **não** implementar isso como uma flag `isParallel` por bloco, e sim derivar
série e paralelo de um **DAG de dependências** (`predecessorIds`), por dois motivos:

1. As duas regras da tabela são **casos particulares** do grafo. Duração = caminho mais longo no
   DAG, que vira soma quando tudo está em série e máximo quando tudo está em paralelo. Pessoas =
   **máxima demanda simultânea** ao longo do tempo, que vira máximo e soma, respectivamente. Uma
   única implementação cobre os dois casos e também os mistos, como um subprocesso com alguns
   blocos em série e outros em paralelo. Para esse caso misto, a flag booleana não tem resposta.
2. O RF-11 pede CPM, e **o CPM é definido sobre o DAG**, não sobre flags. Começar com a flag
   significa reescrever o motor depois.

Se quiserem, a flag `isParallel` pode existir como atalho de UI que grava as dependências por baixo.

### S4.1 — Grafo de dependências · 18 h · série · Dev A

- [ ] **A4.1.1** · Construir o DAG a partir de arestas + predecessores, com **detecção de ciclos** e erro localizado · **10 h** · Dev A · prazo **29/10**
  - Entrada: A1.1.4, A2.3.4 → Saída: grafo validado
- [ ] **A4.1.2** · Derivar séries e paralelos por ordenação topológica em níveis · **8 h** · Dev A · prazo **30/10**
  - Entrada: A4.1.1 → Saída: níveis de execução

### S4.2 — Síntese bottom-up (RF-12) · 34 h · série · Dev A

- [ ] **A4.2.1** · **Duração:** caminho mais longo no DAG dos filhos (soma em série, máximo em paralelo) · **10 h** · Dev A · prazo **03/11**
  - Entrada: A4.1.2 → Saída: duração calculada
- [ ] **A4.2.2** · **Pessoas:** máxima demanda simultânea (máximo em série, soma em paralelo) · **10 h** · Dev A · prazo **04/11**
  - Entrada: A4.1.2 → Saída: equipe calculada
- [ ] **A4.2.3** · Propagação recursiva até o macroprocesso, com override manual marcado explicitamente na UI · **8 h** · Dev A · prazo **05/11**
  - Entrada: A4.2.1, A4.2.2 → Saída: síntese em n níveis
- [ ] **A4.2.4** · Memoização e invalidação por subárvore. A base tem centenas de nós, e recalcular tudo a cada edição não escala · **6 h** · Dev A · prazo **05/11**
  - Entrada: A4.2.3 → Saída: recálculo incremental

### S4.3 — CPM (RF-11) · 34 h · série · Dev A + Dev B

- [ ] **A4.3.1** · Cálculo de ES/EF/LS/LF e folga total/livre por nó · **12 h** · Dev A · prazo **06/11**
  - Entrada: A4.1.1 → Saída: métricas CPM
- [ ] **A4.3.2** · Destaque visual do caminho crítico no canvas · **6 h** · Dev B · prazo **10/11**
  - Entrada: A4.3.1 → Saída: caminho crítico visível
- [ ] 🔻 **A4.3.3** · Gantt simples derivado do CPM · **16 h** · Dev A · prazo **27/11**
  - Entrada: A4.3.1 → Saída: cronograma

### S4.4 — Exibição da síntese · 14 h · paralelo · Dev B

- [ ] **A4.4.1** · Badges de duração e pessoas sintetizadas nos nós, reaproveitando o `StatCard` (órfão) · **6 h** · Dev B · prazo **09/11**
  - Entrada: `StatCard.tsx`, A4.2.3 → Saída: indicadores no canvas
- [ ] **A4.4.2** · Painel "como este número foi calculado", que abre a composição (ex.: por que 151 h) · **8 h** · Dev B · prazo **09/11**
  - Entrada: A4.2.3 → Saída: rastreabilidade

---

## 9. P5 — Acesso, colaboração e auditoria

> **Objetivo:** tornar o sistema multiusuário, auditável e versionado.
> **Entrada:** backend da S1.2.
> **Saída:** login, papéis, log, histórico, autosave e edição concorrente.
> **Esforço:** 110 h · **Concluído até:** 19/11

### S5.1 — Autenticação (RNF-03) · 16 h · série · Dev A + Dev B

- [ ] **A5.1.1** · Login por e-mail (magic link), sessão persistente, logout e rotas protegidas · **10 h** · Dev A · prazo **23/10**
  - Entrada: A1.2.1 → Saída: autenticação
- [ ] **A5.1.2** · Perfil de usuário (nome, setor, avatar, preferências) · **6 h** · Dev B · prazo **12/11**
  - Entrada: A5.1.1 → Saída: perfil

### S5.2 — Autorização (RF-08) · 22 h · série · Dev A

- [ ] **A5.2.1** · Papéis `leitor` / `editor` / `admin`, com escopo por setor (os 6 de `data/sectors.ts`) · **8 h** · Dev A · prazo **10/11**
  - Entrada: `sectors.ts`, A5.1.1 → Saída: matriz de papéis
- [ ] **A5.2.2** · Políticas no banco (RLS) **e** guardas na UI, com modo leitura explícito. A autorização fica no servidor, e não só em esconder botões · **14 h** · Dev A · prazo **12/11**
  - Entrada: A5.2.1 → Saída: acesso controlado

### S5.3 — Auditoria e versionamento (RF-07, RNF-04) · 36 h · série · Dev A + Dev B

- [ ] **A5.3.1** · Log append-only por modificação: quem, o quê, quando, valor anterior e valor novo · **10 h** · Dev A · prazo **13/11**
  - Entrada: A1.2.2 → Saída: trilha de auditoria
- [ ] **A5.3.2** · Linha do tempo por nó + carimbo de "última atualização" visível no canvas e no inspetor · **10 h** · Dev B · prazo **16/11**
  - Entrada: A5.3.1 → Saída: histórico legível
- [ ] **A5.3.3** · Snapshot e restauração de versão de um diagrama inteiro, com diff antes de confirmar · **16 h** · Dev A · prazo **16/11**
  - Entrada: A5.3.1 → Saída: versionamento

### S5.4 — Autosave e concorrência (RNF-01, RNF-06) · 36 h · série · Dev B + Dev A

- [ ] **A5.4.1** · Autosave com debounce configurável e indicador de estado (salvando / salvo / erro / offline) · **8 h** · Dev B · prazo **30/10**
  - Entrada: A1.2.5 → Saída: salvamento automático
- [ ] **A5.4.2** · Realtime: propagação de mudanças entre sessões abertas + presença (quem está vendo ou editando o quê) · **16 h** · Dev A · prazo **18/11**
  - Entrada: A1.2.1 → Saída: sincronização
- [ ] **A5.4.3** · Resolução de conflito por versão otimista, com aviso e merge assistido quando o mesmo nó é editado ao mesmo tempo · **12 h** · Dev A · prazo **19/11**
  - Entrada: A5.4.2 → Saída: concorrência segura

---

## 10. P6 — Busca, consistência, anexos e exportação

> **Esforço:** 100 h · **Concluído até:** 26/11
> Os quatro subprocessos são **independentes entre si** e rodam em paralelo.

### S6.1 — Busca (RF-09) · 30 h · Dev B + Dev A

- [ ] **A6.1.1** · Religar `filterProcesses()` de `utils/flow.ts` a uma UI de busca. A função já cobre nome, descrição, objetivo, etapa, responsável, entradas, saídas, atividades, tags, ferramentas, riscos, indicadores e habilidades · **4 h** · Dev B · prazo **05/11**
  - Entrada: `utils/flow.ts` → Saída: busca ativa
- [ ] **A6.1.2** · Busca full-text no banco (tsvector, pt-BR) com ranking, para escalar além do filtro em memória · **10 h** · Dev A · prazo **23/11**
  - Entrada: A1.2.2 → Saída: busca no servidor
- [ ] 🔻 **A6.1.3** · Paleta de comandos (Ctrl+K) que salta para o nó e o centraliza no canvas, abrindo a hierarquia até ele · **10 h** · Dev B · prazo **24/11**
  - Entrada: A6.1.2, A3.1.1 → Saída: navegação por busca
- [ ] **A6.1.4** · Filtros combináveis por setor, status, responsável e tag, reaproveitando o `FilterChip` (órfão) · **6 h** · Dev B · prazo **06/11**
  - Entrada: `FilterChip.tsx` → Saída: filtros

### S6.2 — Anexos (RF-06) · 18 h · Dev A + Dev B

- [ ] **A6.2.1** · Upload para o storage, com limite de tipo e tamanho, vinculado ao nó · **10 h** · Dev A · prazo **24/11**
  - Entrada: A1.2.1 → Saída: anexos persistidos
- [ ] **A6.2.2** · Lista, preview, download e remoção de anexos no inspetor + contador no bloco do canvas · **8 h** · Dev B · prazo **25/11**
  - Entrada: A6.2.1 → Saída: anexos na UI

### S6.3 — Consistência de dependências (RNF-07) · 22 h · Dev A + Dev B

- [ ] **A6.3.1** · Regras de validação: nó sem entrada, nó sem saída, nó órfão, ciclo no DAG, duração/equipe ausente, referência externa quebrada, filho fora do período do pai · **12 h** · Dev A · prazo **10/11**
  - Entrada: A4.1.1 → Saída: motor de regras
- [ ] **A6.3.2** · Painel de diagnóstico com contagem por severidade, marcação visual no canvas e salto para o nó com problema · **10 h** · Dev B · prazo **11/11**
  - Entrada: A6.3.1 → Saída: inconsistências visíveis

### S6.4 — Exportação (RF-10) · 30 h · Dev B + Dev A

- [ ] **A6.4.1** · Exportar PNG/SVG do viewport ou do diagrama completo, com escala selecionável · **8 h** · Dev B · prazo **17/11**
  - Entrada: A2.1.1 → Saída: imagem
- [ ] **A6.4.2** · Relatório PDF: ficha do nó (objetivo, entradas/saídas, riscos, indicadores, habilidades, ferramentas), diagrama renderizado, síntese de duração/equipe e caminho crítico · **16 h** · Dev A · prazo **26/11**
  - Entrada: A4.2.3, A6.4.1 → Saída: relatório
- [ ] 🔻 **A6.4.3** · Exportação de dados em JSON/CSV para uso em planilha · **6 h** · Dev B · prazo **17/11**
  - Entrada: A1.2.3 → Saída: dados exportados

---

## 11. P7 — Interface, tema e responsividade

> **Esforço:** 78 h · **Concluído até:** 27/11

### S7.1 — Tokens e temas (RNF-02) · 22 h · Dev B

- [ ] **A7.1.1** · Refatorar o `index.css`: hoje o `:root` fixa `color-scheme: dark` e o `body` tem gradiente escuro fixo. Extrair tokens claro/escuro mantendo a paleta `--color-cactus-*` e `--color-sand-*` · **10 h** · Dev B · prazo **08/10**
  - Entrada: `index.css` → Saída: tokens temáveis
- [ ] **A7.1.2** · Seletor de tema (claro / escuro / sistema), com a preferência salva no perfil do usuário · **6 h** · Dev B · prazo **12/11**
  - Entrada: A7.1.1, A5.1.2 → Saída: nightmode
- [ ] 🔻 **A7.1.3** · Personalização de cor de acento e densidade de informação por usuário · **6 h** · Dev B · prazo **13/11**
  - Entrada: A7.1.2 → Saída: UI customizável

### S7.2 — Mobile (RNF-02) · 30 h · Dev B

- [ ] **A7.2.1** · Gestos de toque no canvas (pinch-zoom, pan com dois dedos) e alvos de toque de pelo menos 44 px · **12 h** · Dev B · prazo **18/11**
  - Entrada: A2.1.1 → Saída: canvas tátil
- [ ] **A7.2.2** · Painéis e modais como bottom sheet no mobile, substituindo o drawer atual do `DetailedFlowDiagram` · **10 h** · Dev B · prazo **19/11**
  - Entrada: `useIsMobile` existente → Saída: mobile usável
- [ ] **A7.2.3** · Modo leitura no celular, com a edição reservada ao desktop e isso informado na UI · **8 h** · Dev B · prazo **23/11**
  - Entrada: A5.2.2 → Saída: política mobile

### S7.3 — Acessibilidade e desempenho · 26 h · Dev B

- [ ] 🔻 **A7.3.1** · Navegação por teclado, foco visível e ARIA no canvas, nos modais e no inspetor · **10 h** · Dev B · prazo **26/11**
  - Entrada: P2, P3 → Saída: acessibilidade
- [ ] 🔻 **A7.3.2** · Virtualização/culling de nós fora do viewport, para diagramas grandes · **12 h** · Dev B · prazo **27/11**
  - Entrada: A2.1.1 → Saída: desempenho
- [ ] 🔻 **A7.3.3** · Code splitting por rota (hoje o `pdfProcessCatalog.ts`, com 5.299 linhas, vai inteiro no bundle) · **4 h** · Dev B · prazo **09/10**
  - Entrada: A1.3.1 → Saída: carga inicial menor

### Entrega final

- [ ] **ENTREGA** · Integração final, revisão de regressões, atualização da documentação e deploy · **reserva** · Dev A + Dev B · prazo **30/11**

---

## 12. Cronograma por desenvolvedor

### 12.1 Semana a semana

Uma sequência por pessoa, já ordenada respeitando as dependências entre as duas trilhas.

| Semana | Dev A — Back-end, dados e motor | Dev B — Front-end, canvas e interface |
| --- | --- | --- |
| **08–09/10** (2 dias) | A1.1.1, A1.1.2, A1.1.3 | A7.1.1, A1.3.1, A7.3.3 |
| **13–16/10** (4 dias · feriado 12/10) | A1.1.4, A1.1.5, A1.1.6, A1.2.1, A1.2.2, A1.2.3 | A2.1.1, A2.1.2, A2.1.3 |
| **19–23/10** | A1.2.4, A1.2.5, A1.3.3, A5.1.1 | A2.2.1, A2.2.2, A2.2.3, A2.3.1, A2.3.2, A2.3.3, *início A3.1.1* |
| **26–30/10** | A2.4.2, A3.1.3, A2.3.4, A4.1.1, A4.1.2 | A3.1.1, A3.1.2, A1.3.2, A2.4.1, A2.4.3, A5.4.1 |
| **03–06/11** (4 dias · feriado 02/11) | A4.2.1, A4.2.2, A4.2.3, A4.2.4, A4.3.1 | A3.2.1, A3.2.2, A3.2.3, A6.1.1, A6.1.4 |
| **09–13/11** | A6.3.1, A5.2.1, A5.2.2, A5.3.1, *início A5.3.3* | A4.4.1, A4.4.2, A4.3.2, A6.3.2, A5.1.2, A7.1.2, A7.1.3 |
| **16–19/11** (4 dias · feriado 20/11) | A5.3.3, A5.4.2, A5.4.3 | A5.3.2, A6.4.1, A6.4.3, A7.2.1, A7.2.2 |
| **23–27/11** | A6.1.2, A6.2.1, A6.4.2, A4.3.3 | A7.2.3, A6.1.3, A6.2.2, A7.3.1, A7.3.2 |
| **30/11** | **Entrega** (reserva) | **Entrega** (reserva) |

### 12.2 Pontos de sincronização entre os dois

São os momentos em que um desenvolvedor precisa ter terminado algo para o outro seguir. Um
atraso aqui atrasa os dois.

| Até | Quem entrega | O quê | Quem destrava | Para quê |
| --- | --- | --- | --- | --- |
| 08/10 | Dev A | A1.1.1 (tipo `Node`) | Dev B | Começar a migração do canvas (A2.1.1) |
| 13/10 | Dev A | A1.1.5 (posição por diagrama) | Dev B | Persistir a posição ao arrastar (A2.2.2) |
| 21/10 | Dev A | A1.2.5 (camada de dados) | Dev B | Cache e autosave (A1.3.2, A5.4.1) |
| 26/10 | Dev B | A3.1.1 (navegação recursiva) | Dev A | Arestas entre ramos (A2.3.4) |
| 05/11 | Dev A | A4.2.3 (síntese) | Dev B | Badges e painel de cálculo (A4.4.*) |
| 06/11 | Dev A | A4.3.1 (CPM) | Dev B | Caminho crítico no canvas (A4.3.2) |
| 10/11 | Dev A | A6.3.1 (regras) | Dev B | Painel de diagnóstico (A6.3.2) |
| 12/11 | Dev A | A5.2.2 (permissões) | Dev B | Modo leitura no mobile (A7.2.3) |
| 13/11 | Dev A | A5.3.1 (log) | Dev B | Linha do tempo por nó (A5.3.2) |
| 17/11 | Dev B | A6.4.1 (PNG/SVG) | Dev A | Diagrama dentro do PDF (A6.4.2) |
| 23/11 | Dev A | A6.1.2 (busca no servidor) | Dev B | Paleta Ctrl+K (A6.1.3) |
| 24/11 | Dev A | A6.2.1 (upload) | Dev B | Anexos na UI (A6.2.2) |

### 12.3 Marcos (fases)

- [ ] **F1 — Fundação** · dados persistidos, o app deixa de depender de mocks · **27/10**
- [ ] **F2 — Editor** · o usuário desenha, conecta, rotula e salva (RF-01 a RF-05, RF-13) · **29/10**
- [ ] **F3 — Inteligência** · duração e equipe calculadas, caminho crítico e inconsistências apontadas (RF-11, RF-12, RNF-07) · **11/11**
- [ ] **F4 — Operação** · multiusuário com login, papéis, log, versão e autosave · **19/11**
- [ ] **F5 — Alcance** · busca, anexos, exportação, tema e mobile · **27/11**
- [ ] **F6 — Entrega** · tudo integrado e publicado · **30/11**

### 12.4 Síntese aplicada ao próprio plano

Aplicando a este documento a regra do RF-11:

- **Esforço total (soma em série):** 678 h
- **Com 2 pessoas em paralelo:** 340 h para o Dev A e 338 h para o Dev B. Duração = a maior
  das duas trilhas ≈ **34 dias úteis**
- **Caminho crítico:** S1.1 → S1.2 → A2.4.2 → A3.1.3 → A2.3.4 → S4.1 → S4.2 → A4.3.1, todo na
  trilha do Dev A. Um atraso do Dev A no início (P1) empurra todo o motor de cálculo.

---

## 13. Rastreabilidade requisito → atividade

| Requisito | Atividades | Responsável | Pronto até |
| --- | --- | --- | --- |
| RF-01 Blocos com arrastar e soltar | A2.1.1–3, A2.2.1–3 | Dev B | 21/10 |
| RF-02 Conexão por linhas e setas | A2.3.1, A2.3.3 | Dev B | 23/10 |
| RF-03 Texto sobre as linhas | A2.3.2 | Dev B | 22/10 |
| RF-04 CRUD de processos e afins | A1.2.3, A2.4.1–3 | Dev A + Dev B | 29/10 |
| RF-05 Hierarquização | A1.1.1, A3.1.1–3 | Dev A + Dev B | 27/10 |
| RF-06 Anexar arquivos | A6.2.1–2 | Dev A + Dev B | 25/11 |
| RF-07 Controle de versão | A5.3.1–3 | Dev A + Dev B | 16/11 |
| RF-08 Nível de acesso | A5.2.1–2 | Dev A | 12/11 |
| RF-09 Busca | A6.1.1–4 | Dev A + Dev B | 24/11 |
| RF-10 Exportação PDF/PNG | A6.4.1–3 | Dev A + Dev B | 26/11 |
| RF-11 Paralelismo e CPM | A1.1.4, A4.1.1–2, A4.3.1–3 | Dev A + Dev B | 27/11 |
| RF-12 Síntese de informações | A1.1.3, A4.2.1–4, A4.4.1–2 | Dev A + Dev B | 09/11 |
| RF-13 Dependência entre ramos distintos | A1.1.2, A2.3.4 | Dev A | 28/10 |
| RNF-01 Salvamento automático | A2.2.2, A5.4.1 | Dev B | 30/10 |
| RNF-02 Responsivo e customizável | A7.1.1–3, A7.2.1–3 | Dev B | 23/11 |
| RNF-03 Autenticação única | A5.1.1–2 | Dev A + Dev B | 12/11 |
| RNF-04 Log por modificação | A5.3.1–2 | Dev A + Dev B | 16/11 |
| RNF-05 Expansividade | A3.2.1–3 | Dev B | 05/11 |
| RNF-06 Sincronização concorrente | A5.4.2–3 | Dev A | 19/11 |
| RNF-07 Consistência de dependências | A6.3.1–2 | Dev A + Dev B | 11/11 |

---

## 14. Riscos

| Risco | Impacto | Mitigação |
| --- | --- | --- |
| **Carga de ~10 h por dia útil por dev não se sustenta** | **Alto** | Aplicar o corte da §2.3 já na primeira semana de atraso, e não deixar para a última semana. |
| Dev A atrasa P1, e com isso todo o caminho crítico | Alto | P1 tem prioridade absoluta até 27/10. O Dev B começa com tarefas sem dependência (A7.1.1, A1.3.1). |
| Reescrever o canvas SVG manual quebra a identidade visual já aprovada | Alto | A A2.1.2 trata a preservação visual como critério de aceite. |
| O parser de duração (A1.2.4) falha em `'Variável'`, `'Em média 1hr'` e similares | Médio | O parser gera um relatório dos valores não parseáveis para revisão humana. Nada é inferido em silêncio. |
| Um ciclo no DAG trava a síntese | Alto | A A4.1.1 detecta e localiza o ciclo antes de qualquer cálculo, e a A6.3.1 o mostra na UI. |
| Edição concorrente corrompe a árvore | Alto | A5.4.3 com versão otimista. As operações de subárvore da A1.2.3 rodam em transação. |
| Escopo real maior que o MVP descrito em `PROJECT_DESCRIPTION.md` | Médio | Conflito registrado na §1.5. A A1.1.6 atualiza o documento. |
| Uma base grande (centenas de nós) deixa o canvas lento | Médio | A7.3.2 (culling) e A4.2.4 (recálculo incremental). |

---

## 15. Decisões pendentes (precisam de resposta até 13/10)

A A1.2.1 vence em 14/10. Sem estas respostas, o Dev A para no segundo dia útil depois do feriado.

- [ ] **Backend.** Supabase (recomendado, porque cobre banco, auth, storage, realtime e RLS de uma
  vez), Node + Prisma + Postgres próprio, ou outra opção?
- [ ] **Script do PDF.** O `scripts/generate_pdf_process_catalog.py` passa a ser só importação
  pontual (recomendado) ou precisa continuar reimportável sobre dados já editados no sistema? A
  segunda opção exige uma estratégia de merge e muda a A1.2.4.
- [ ] **Paralelismo.** Confirmar o DAG de dependências como modelo base, conforme a §8.1, ou manter
  a flag `isParallel` por bloco, aceitando reescrever o motor quando o CPM entrar.
- [ ] **Granularidade do acesso.** Papéis por setor bastam, ou é preciso permissão por nó?
- [ ] **Hospedagem.** Onde o sistema vai rodar, e quem administra os convites de usuário?
- [ ] **Corte de escopo.** Confirmar se a equipe consegue manter ~50 h por semana por pessoa ou se o
  corte da §2.3 já entra no plano desde o início.
