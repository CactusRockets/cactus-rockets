# Requisitos — Mintzberg Flow

## 1. Objetivo

O foco principal do site é oferecer uma **modelagem dinâmica e visual de processos, organizada de
forma hierárquica**. O objetivo maior é a construção do foguete. Ele se desdobra em:

```
Macroprocesso → Processos → Subprocessos → Atividades
```

---

## 2. Requisitos funcionais

### 2.1 Modelagem visual

| ID | Requisito |
| --- | --- |
| RF-01 | Desenho dos processos em formas geométricas, com "arrastar e soltar". Esses elementos são chamados de **blocos**. |
| RF-02 | Conexão de blocos por linhas e setas, definindo entradas e saídas. |
| RF-03 | Identificação do que entra e sai dos blocos por meio de textos sobre as linhas. |

### 2.2 Estrutura e gestão dos processos

| ID | Requisito |
| --- | --- |
| RF-04 | CRUD de processos e afins (subprocessos, atividades etc.). |
| RF-05 | Hierarquização de processos: macroprocesso contém processos, processo contém subprocessos, e assim por diante. |
| RF-06 | Anexo de arquivos em blocos. |
| RF-07 | Controle de versão de processos (data da última atualização etc.). |
| RF-08 | Controle de nível de acesso (nem todos podem editar). |

### 2.3 Consulta e saída de informações

| ID | Requisito |
| --- | --- |
| RF-09 | Mecanismo de busca para facilitar encontrar informações no mapa. |
| RF-10 | Exportação de relatórios em PDF ou PNG. |

### 2.4 Paralelismo, síntese e dependências

| ID | Requisito |
| --- | --- |
| RF-11 | Definição de paralelismo entre blocos (quando um bloco ocorre ao mesmo tempo que outro). |
| RF-12 | Síntese de informações sobre os blocos. Por exemplo, a duração de um subprocesso é definida por suas atividades. |
| RF-13 | Uma atividade pode gerar entrada (ser requisito) para outra atividade que **não pertence ao mesmo subprocesso ou processo**. |

---

## 3. Regras de negócio

### RN-01 — Síntese conforme o paralelismo (RF-11, RF-12)

As regras de duração e de pessoas **se invertem** entre blocos em série e em paralelo:

| Grandeza | Blocos em série | Blocos em paralelo |
| --- | --- | --- |
| **Duração** | Soma das durações | Maior duração entre os blocos |
| **Pessoas necessárias** | Maior necessidade entre os blocos | Soma das necessidades |

**Exemplo:** se todas as atividades de um subprocesso estão em série, a duração dele é a soma das
durações. Se pelo menos uma ocorre em paralelo com as outras (porque não depende delas), a
duração do subprocesso passa a ser a maior duração entre as atividades em paralelo. Para o
número de pessoas, a lógica é a inversa.

### RN-02 — Paralelismo como base para CPM (RF-11)

O paralelismo fica ainda mais importante quando uma metodologia como o **CPM** (Critical Path
Method) for aplicada. Se tudo estivesse em série, não haveria como aplicá-la.

### RN-03 — Dependências entre ramos da hierarquia (RF-13)

As ligações de entrada e saída não se limitam ao mesmo subprocesso ou processo. Elas podem ligar
atividades de ramos diferentes da hierarquia.

---

## 4. Requisitos não-funcionais

| ID | Categoria | Requisito |
| --- | --- | --- |
| RNF-01 | Persistência | Salvamento automático a cada intervalo de tempo X. |
| RNF-02 | Usabilidade | Interface responsiva e customizável por usuário: cor, modo noturno, uso no celular etc. |
| RNF-03 | Segurança | Autenticação única de cada usuário (por exemplo, via e-mail). |
| RNF-04 | Auditoria | Geração de log a cada modificação: quem modificou o quê e quando. |
| RNF-05 | Usabilidade | Expansividade: visualização enxuta que permite expandir as informações com cliques. |
| RNF-06 | Concorrência | Sincronização, com suporte a acesso e modificações simultâneas. |
| RNF-07 | Integridade | Consistência de dependências: por exemplo, processos sem entrada e saída aparecem destacados. |
