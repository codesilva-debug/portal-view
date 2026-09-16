# REDE FADELITO DE EDUCAÇÃO INFANTIL
## PORTAL BI RH & RECRUTAMENTO — TABELA OFICIAL DE SUPERVISÕES E GESTORES

Este documento contém a relação oficial dos **10 Gestores e Supervisores**, suas credenciais de acesso exclusivas, a divisão regional das **35 Unidades Escolares** e a lógica estruturada de cada senha.

---

### 1. Matriz Consolidada de Acessos das Supervisões

| # | Gestor(a) | Usuário de Login | E-mail Institucional | Senha de Acesso | Unidades Sob Supervisão | Lógica / Mnemônico da Senha |
|:---:|:---|:---|:---|:---|:---|:---|
| **01** | **Luana Silveira** | `luana` | `luana@fadelito.com.br` | `5luanalpm` | **Lapa**, **Panamby**, **Moema** *(3)* | Prefixo `5` + `luana` + `lpm` (*Lapa, Panamby, Moema*) |
| **02** | **Pamela Duarte** | `pamela` | `pamela@fadelito.com.br` | `2026pamfadelitos` | **Vila Gumercindo** *(1)* | Ano `2026` + `pam` + `fadelitos` |
| **03** | **Aurélio Zanin** | `aurelio` | `aurelio@fadelito.com.br` | `sulaurelio2026` | **São Caetano**, **Santo André**, **Ipiranga**, **Jardins**, **Saúde** *(5)* | `sul` + `aurelio` + `2026` |
| **04** | **Camila Brandão** | `camila` | `camila@fadelito.com.br` | `intercamila#26` | **Campinas**, **Piracicaba** *(2)* | `inter` (*Interior*) + `camila` + `#26` |
| **05** | **Rodrigo Mendes** | `rodrigo` | `rodrigo@fadelito.com.br` | `7rodrigogob` | **Granja Viana**, **Osasco**, **Bonfiglioli** *(3)* | Número `7` + `rodrigo` + `gob` (*Granja, Osasco, Bonfiglioli*) |
| **06** | **Juliana Prado** | `juliana` | `juliana@fadelito.com.br` | `2026julizl#amtg` | **Analia Franco**, **Mooca**, **Tatuapé**, **Guarulhos** *(4)* | `2026` + `juli` + `zl` (*Zona Leste*) + `#amtg` (*Analia, Mooca, Tatuapé, Guarulhos*) |
| **07** | **Fernando Costa** | `fernando` | `fernando@fadelito.com.br` | `sulfernando*bcam` | **Alto da Boa Vista**, **Brooklin**, **Campo Belo**, **Marajoara** *(4)* | `sul` + `fernando` + `*` + `bcam` (*Brooklin, Campo Belo, Alto da Boa Vista, Marajoara*) |
| **08** | **Beatriz Nogueira** | `beatriz` | `beatriz@fadelito.com.br` | `8biafadelito#hppm` | **Higienópolis**, **Perdizes**, **Pinheiros**, **Vila Madalena** *(4)* | `8` + `bia` + `fadelito` + `#` + `hppm` (*Higienópolis, Perdizes, Pinheiros, Madalena*) |
| **09** | **Marcelo Albuquerque** | `marcelo` | `marcelo@fadelito.com.br` | `morumbimarcelo26` | **Portal do Morumbi**, **Real Parque**, **Vila Leopoldina**, **Vila Sônia** *(4)* | Base `morumbi` + `marcelo` + `26` |
| **10** | **Tatiane Ramos** | `tatiane` | `tatiane@fadelito.com.br` | `tatiane2026#ackiv` | **Aclimação**, **Chacara Klabin**, **Indianópolis**, **Paraiso**, **Vila Mariana** *(5)* | `tatiane` + `2026` + `#ackiv` (*Aclimação, Chacara Klabin, Indianópolis, Paraíso, Vila Mariana*) |

luana@fadelito.com.br | 5luanalpm
pamela@fadelito.com.br | 2026pamfadelitos
aurelio@fadelito.com.br | sulaurelio2026
camila@fadelito.com.br | intercamila#26
rodrigo@fadelito.com.br | 7rodrigogob
juliana@fadelito.com.br | 2026julizl#amtg
fernando@fadelito.com.br | sulfernando*bcam
beatriz@fadelito.com.br | 8biafadelito#hppm
marcelo@fadelito.com.br | morumbimarcelo26
tatiane@fadelito.com.br | tatiane2026#ackiv

> **Total de Unidades Supervisionadas:** 3 + 1 + 5 + 2 + 3 + 4 + 4 + 4 + 4 + 5 = **35 Unidades Escolares** (100% da rede contemplada).

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
