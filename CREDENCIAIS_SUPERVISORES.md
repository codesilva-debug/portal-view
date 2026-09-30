# REDE FADELITO DE EDUCAÇÃO INFANTIL
## PORTAL BI RH & RECRUTAMENTO — TABELA OFICIAL DE SUPERVISÕES E GESTORES

Este documento contém a relação oficial dos **10 Gestores e Supervisores**, suas credenciais de acesso exclusivas, a divisão regional das **35 Unidades Escolares** e a lógica estruturada de cada senha.

---

### 1. Matriz Consolidada de Acessos das Supervisões

#### A. Supervisões Oficiais Ativas (Requerem E-mail Completo para Login):
| # | Gestor(a) | E-mail / Login Obrigatório | Senha de Acesso | Unidades Sob Supervisão | Notas de Segurança |
|:---:|:---|:---|:---|:---|:---|
| **01** | **Canassa** | `fadelito.canassa@gmail.com` | `F@delito123` | **Portal do Morumbi**, **Panamby**, **Paraiso** *(3)* | Login estrito por e-mail completo (case-insensitive). Visão padrão consolidada das 3 unidades + seletor individual ativo. |
| **02** | **Antônio Martins** | `antoniomartins@mudras.com.br` | `701029` | **Tatuapé** *(1)* | Login estrito por e-mail completo. Seletor travado na Unidade Tatuapé. |

fadelito.canassa@gmail.com | F@delito123
antoniomartins@mudras.com.br | 701029

---

#### B. Demais Regionais de Apoio / Homologação:
| # | Gestor(a) | Usuário de Login | E-mail Institucional | Senha de Acesso | Unidades Sob Supervisão | Lógica / Mnemônico da Senha |
|:---:|:---|:---|:---|:---|:---|:---|
| **03** | **Luana Silveira** | `luana` | `luana@fadelito.com.br` | `5luanalpm` | **Lapa**, **Moema** *(2)* | Luana Silveira (Lapa, Moema) |
| **04** | **Pamela Duarte** | `pamela` | `pamela@fadelito.com.br` | `2026pamfadelitos` | **Vila Gumercindo** *(1)* | Pamela Duarte (Vila Gumercindo) |
| **05** | **Aurélio Zanin** | `aurelio` | `aurelio@fadelito.com.br` | `sulaurelio2026` | **São Caetano**, **Santo André**, **Ipiranga**, **Jardins**, **Saúde** *(5)* | `sul` + `aurelio` + `2026` |
| **06** | **Camila Brandão** | `camila` | `camila@fadelito.com.br` | `intercamila#26` | **Campinas**, **Piracicaba** *(2)* | `inter` (*Interior*) + `camila` + `#26` |
| **07** | **Rodrigo Mendes** | `rodrigo` | `rodrigo@fadelito.com.br` | `7rodrigogob` | **Granja Viana**, **Osasco**, **Bonfiglioli** *(3)* | Número `7` + `rodrigo` + `gob` |
| **08** | **Juliana Prado** | `juliana` | `juliana@fadelito.com.br` | `2026julizl#amtg` | **Analia Franco**, **Mooca**, **Guarulhos** *(3)* | `2026` + `juli` + `zl` |
| **09** | **Fernando Costa** | `fernando` | `fernando@fadelito.com.br` | `sulfernando*bcam` | **Alto da Boa Vista**, **Brooklin**, **Campo Belo**, **Marajoara** *(4)* | `sul` + `fernando` + `*` + `bcam` |
| **10** | **Beatriz Nogueira** | `beatriz` | `beatriz@fadelito.com.br` | `8biafadelito#hppm` | **Higienópolis**, **Perdizes**, **Pinheiros**, **Vila Madalena** *(4)* | `8` + `bia` + `fadelito` + `#` + `hppm` |
| **11** | **Marcelo Albuquerque** | `marcelo` | `marcelo@fadelito.com.br` | `morumbimarcelo26` | **Real Parque**, **Vila Leopoldina**, **Vila Sônia** *(3)* | Real Parque, Vila Leopoldina, Vila Sônia |
| **12** | **Tatiane Ramos** | `tatiane` | `tatiane@fadelito.com.br` | `tatiane2026#ackiv` | **Aclimação**, **Chacara Klabin**, **Indianópolis**, **Vila Mariana** *(4)* | `tatiane` + `2026` + `#ackiv` |

> **Total de Unidades Supervisionadas:** 3 + 1 + 2 + 1 + 5 + 2 + 3 + 3 + 4 + 4 + 3 + 4 = **35 Unidades Escolares** (100% da rede contemplada).

---

### 2. Como Funciona a Experiência de Cada Gestor(a)

1. **Visão Inicial Automatizada:**
   - Ao digitar seu usuário (ex: `luana`) e senha (ex: `5luanalpm`), o gestor entra diretamente no painel.
   - O selo no cabeçalho exibe a tag **SUPERVISÃO** em tom roxo executivo, acompanhado do nome completo do gestor.
   - Se o gestor tiver mais de 1 unidade, o painel carrega por padrão o **Consolidado da Supervisão**, somando vagas, contratações, vivências e funil de todas as suas unidades.

2. **Navegação no Seletor de Unidades:**
   - O seletor de unidades do topo é restrito: o gestor **só visualiza as unidades que estão sob sua supervisão**.
   - O gestor pode alternar entre a visão consolidada de suas escolas ou inspecionar cada uma individualmente.
   - Unidades de outros gestores ou da rede geral **não aparecem no menu**.

3. **Blindagem de Memória & Proteção de Dados (RBAC):**
   - Os dados de outras unidades são eliminados da memória do navegador (`ALL_UNITS_DATA` e sincronização do Google Sheets).
   - Mesmo se alguém tentar inspecionar o código pelo console do navegador (`F12`), não conseguirá acessar registros nem métricas de outras escolas.

---

### 3. Acesso Master da Diretoria Geral (Referência)

Para a Diretoria Geral, o perfil **Master** permanece ativo com visão irrestrita de todas as 35 unidades e da rede inteira:

- **Usuário / E-mail:** `diretoria@fadelito.com.br` *(ou apenas `diretoria`)*
- **Senha Master:** `Diretoria@2026`
- **Permissões:** Acesso ao seletor completo das 35 unidades + opção "Toda a Rede (Consolidado Geral)".

---

### 4. Guia Rápido de Testes

1. Abra o painel no navegador: [http://localhost:3456/index.html](http://localhost:3456/index.html)
2. Se houver uma sessão aberta, clique no botão vermelho **Sair** no canto superior direito.
3. Faça login com um dos gestores:
   - **Exemplo 1 (3 unidades):** Usuário `luana` | Senha `5luanalpm`
     - *Resultado:* Exibe Lapa, Panamby e Moema, com consolidação das 3.
   - **Exemplo 2 (1 unidade):** Usuário `pamela` | Senha `2026pamfadelitos`
     - *Resultado:* Exibe exclusivamente Vila Gumercindo com seletor travado.
   - **Exemplo 3 (5 unidades):** Usuário `aurelio` | Senha `sulaurelio2026`
     - *Resultado:* Exibe São Caetano, Santo André, Ipiranga, Jardins e Saúde.
