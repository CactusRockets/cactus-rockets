# Projeto: Mintzberg Flow

## 1. Visao Geral

O Mintzberg Flow e um sistema web desenvolvido para apoiar o Projeto Mintzberg na etapa de integracao, permitindo organizar processos, subprocessos e atividades, registrar entradas e saidas de cada processo e visualizar tudo em um fluxograma geral interligado.

O sistema nasce como uma ferramenta enxuta, pratica e interativa para transformar o material ja levantado nas etapas anteriores em uma representacao visual clara dos fluxos organizacionais da Cactus. Essa proposta esta alinhada ao subprojeto 3 do Plano Mestre, que define como objetivo identificar entradas e saidas e criar um fluxograma geral dos processos interligados.

## 2. Problema

Atualmente, o Projeto Mintzberg precisa consolidar os processos ja identificados e detalhados nos subprojetos anteriores em uma estrutura visual integrada.

O problema principal e que documentos textuais e listas descritivas dificultam a visualizacao das dependencias entre processos, setores, entradas e saidas. Isso torna mais dificil entender gargalos, relacoes entre areas e sequencia logica de execucao.

O sistema resolve esse problema ao centralizar essas informacoes em uma interface web que organiza os dados e os transforma em fluxogramas navegaveis, algo coerente com a metodologia definida para o subprojeto 3, que e justamente o mapeamento de processos por fluxograma.

## 3. Escopo Atual (MVP)

O MVP do sistema faz o seguinte:

- Cadastrar setores.
- Cadastrar macroprocessos, processos, subprocessos e atividades.
- Registrar entradas e saidas de cada processo.
- Relacionar processos entre si.
- Visualizar os processos em forma de fluxograma.
- Consultar processos por setor.
- Editar informacoes ja cadastradas.
- Permitir que o setor de gestao monte o fluxograma acompanhado dos demais setores.

O foco do MVP e exclusivamente atender o subprojeto 3, que precisa transformar a base construida antes em um fluxograma geral interligado. O sistema sera simples e interativo, priorizando clareza visual, rapidez de uso e facilidade de manutencao.

Isso esta alinhado com o proprio documento, que afirma que o subprojeto 3 ganha por ser simples e interativo, apesar do alto grau de complexidade do que esta sendo integrado.

## 4. Fora do Escopo

Neste momento, o sistema nao faz:

- Gestao de risco avancada.
- Controle de materiais.
- Gestao logistica.
- Gestao de pessoas.
- Gestao de qualidade.
- Gestao de seguranca.
- Aplicacao de metodologias como FMEA e CPM.
- Relatorios analiticos avancados.
- Automacoes complexas de aprovacao.
- Controle financeiro.
- Multiplos niveis sofisticados de permissao.
- Integracao com outros sistemas externos.

Esses itens ficam fora do escopo porque pertencem mais naturalmente ao subprojeto 4, que no Plano Mestre e descrito como a etapa de geracao de documentos, matrizes, planilhas e interfaces interativas voltadas a gestao de risco, materiais, logistica, pessoas, qualidade e seguranca.

## 5. Stack

- React
- TypeScript
- Tailwind CSS
- React Flow
- Vite

## 6. Arquitetura

A aplicacao sera totalmente front-end, baseada em componentes reutilizaveis. Os dados serao mantidos localmente em arquivos mockados para simular o comportamento de um sistema real.

A interface sera dividida em paginas e componentes, com navegacao entre dashboard, listagem de processos, detalhes e visualizacao do fluxograma.

## 7. Estrutura de Pastas

```text
src/
├── assets/
├── components/
│   ├── ui/
│   ├── layout/
│   └── flow/
├── pages/
│   ├── Dashboard/
│   ├── Processes/
│   ├── ProcessDetails/
│   └── Flowchart/
├── data/
│   ├── sectors.ts
│   ├── processes.ts
│   └── flowchart.ts
├── types/
│   ├── sector.ts
│   ├── process.ts
│   └── flow.ts
├── hooks/
├── utils/
├── routes/
├── App.tsx
├── main.tsx
└── index.css
```

## 8. Regras e Padroes

- Usar React com TypeScript.
- Usar Tailwind para estilizacao.
- Organizar componentes por responsabilidade.
- Usar nomes em PascalCase para componentes.
- Usar camelCase para variaveis e funcoes.
- Centralizar tipos em `types/`.
- Centralizar dados mockados em `data/`.
- Evitar logica grande dentro das paginas.
- Manter o projeto preparado para futura integracao com backend.

## 9. Fluxos Principais

### Fluxo 1: visualizar processos

1. O usuario entra na dashboard.
2. Visualiza os setores e processos disponiveis.
3. Seleciona um processo.
4. Abre a tela de detalhes.

### Fluxo 2: visualizar detalhes

1. O usuario acessa um processo.
2. Visualiza descricao, entradas, saidas, subprocessos e atividades.
3. Pode navegar para o fluxograma relacionado.

### Fluxo 3: visualizar fluxograma

1. O usuario abre a tela de fluxograma.
2. O sistema carrega os dados mockados.
3. Os processos sao renderizados como nos.
4. As relacoes entre eles aparecem como conexoes.
5. O usuario entende visualmente o fluxo geral.

## 10. Problemas Conhecidos + Solucoes

**Problema:** dados nao persistem.  
**Solucao:** aceitavel nesta fase, pois sao mockados.

**Problema:** sem backend nao ha cadastro real.  
**Solucao:** usar dados simulados bem estruturados para demonstrar a proposta.

**Problema:** fluxograma pode ficar poluido.  
**Solucao:** organizar nos por setor ou etapa.

## 11. Hurdles (Dificuldades Ja Encontradas)

- Definir o que realmente precisa aparecer no MVP.
- Evitar transformar o projeto em um sistema completo cedo demais.
- Estruturar dados mockados de forma parecida com um sistema real.
- Montar um fluxograma claro sem backend.

## 12. Decisoes Tecnicas

- Foi escolhido fazer apenas o front-end porque o objetivo atual e validar a interface e a visualizacao dos fluxos, nao construir a solucao completa.
- Foi escolhido usar dados mockados para acelerar o desenvolvimento e permitir demonstracao funcional sem dependencia de backend.
- Foi escolhido React com TypeScript para aumentar organizacao, reuso e manutencao do codigo.
- Foi escolhido Tailwind CSS para acelerar a construcao visual.
- Foi escolhido React Flow porque ele facilita muito a montagem do fluxograma.

## 13. Checklist de Desenvolvimento

1. Definir a tela ou componente.
2. Definir os dados mockados necessarios.
3. Criar ou ajustar os tipos TypeScript.
4. Montar a interface com Tailwind.
5. Conectar os dados mockados a tela.
6. Testar navegacao e renderizacao.
7. Validar consistencia visual.
8. Revisar se a estrutura esta pronta para futura integracao real.
