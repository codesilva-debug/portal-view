# ️ Guia Técnico de Implantação no Cloudflare — Portal BI RH (Rede Fadelito)

Este documento foi elaborado para orientar a equipe técnica da empresa no deploy, manutenção e evolução do **Portal de Inteligência de RH & Recrutamento da Rede Fadelito**.

---

## 1. ️ Arquitetura do Sistema

O projeto é estruturado para funcionar de forma nativa e de altíssima performance no **Cloudflare Pages** (com suporte opcional a **Cloudflare Pages Functions / Workers**):

```
├── index.html                   # Dashboard Principal (Protegido por Login Gatekeeper)
├── painel_imprimir_a4.html      # Relatório Diagramado A4 / PDF (Com verificação de sessão RBAC)
├── auth_service.js              # Módulo Central de Autenticação e Regras de Papéis (RBAC)
├── data_unidades.js             # Base histórica offline (Funis e registros das 34 unidades)
├── apps_script_connector.js     # Script de automação Google Apps Script (Web App / Webhook)
├── Fadelito.png                 # Logotipo circular oficial da marca
├── ChartsFadelito2.png          # Arte corporativa para a tela de autenticação
└── functions/api/login.js       # Endpoint Serverless para Cloudflare Pages Functions
```

---

## 2. Modelo de Autenticação e Perfis (RBAC)

O sistema possui dois níveis de acesso estritamente segregados:

### A. Perfil Diretoria Geral (`role: MASTER`)
* **Usuário Padrão:** `diretoria@fadelito.com.br` (ou `diretoria`, `admin`)
* **Senha Inicial Padrão:** `Diretoria@2026`
* **Permissões:**
  * Visão consolidada da rede: **" Toda a Rede (34 Unidades)"**.
  * Seletor de unidades ativo no topo da tela, permitindo auditar qualquer uma das 34 escolas individualmente.
  * Disparo de sincronização manual em tempo real com o Google Sheets.
  * Geração de relatórios A4 de qualquer unidade ou do consolidado geral.

### B. Perfil Unidade Escolar (`role: UNIT`)
* **Usuário Padrão:** E-mail ou slug da unidade (ex: `morumbi@fadelito.com.br`, `moema@fadelito.com.br`, `campinas@fadelito.com.br`)
* **Senha Inicial Padrão:** `Fadelito@2026`
* **Permissões:**
  * O painel inicializa compulsoriamente na unidade do usuário.
  * O seletor de unidades no topo fica **desativado e travado** com o selo e cadeado da respectiva escola.
  * Qualquer tentativa de alteração via script, console ou parâmetros é interceptada pelo `AuthService` e pelo `loadUnitData`.
  * O link de impressão A4 gera estritamente o relatório da sua unidade.

---

## 3. Tabela das 34 Unidades Catalogadas

| # | Unidade Escolar | E-mail Sugerido | Senha Padrão |
|---|---|---|---|
| 1 | Aclimação | `aclimacao@fadelito.com.br` | `Fadelito@2026` |
| 2 | Alto da Boa Vista | `altodaboavista@fadelito.com.br` | `Fadelito@2026` |
| 3 | Analia Franco | `analiafranco@fadelito.com.br` | `Fadelito@2026` |
| 4 | Bonfiglioli | `bonfiglioli@fadelito.com.br` | `Fadelito@2026` |
| 5 | Brooklin | `brooklin@fadelito.com.br` | `Fadelito@2026` |
| 6 | Campinas | `campinas@fadelito.com.br` | `Fadelito@2026` |
| 7 | Campo Belo | `campobelo@fadelito.com.br` | `Fadelito@2026` |
| 8 | Chacara Klabin | `chacaraklabin@fadelito.com.br` | `Fadelito@2026` |
| 9 | Granja Viana | `granjaviana@fadelito.com.br` | `Fadelito@2026` |
| 10 | Guarulhos | `guarulhos@fadelito.com.br` | `Fadelito@2026` |
| 11 | Higienópolis | `higienopolis@fadelito.com.br` | `Fadelito@2026` |
| 12 | Indianópolis | `indianopolis@fadelito.com.br` | `Fadelito@2026` |
| 13 | Ipiranga | `ipiranga@fadelito.com.br` | `Fadelito@2026` |
| 14 | Jardins | `jardins@fadelito.com.br` | `Fadelito@2026` |
| 15 | Lapa | `lapa@fadelito.com.br` | `Fadelito@2026` |
| 16 | Marajoara | `marajoara@fadelito.com.br` | `Fadelito@2026` |
| 17 | Moema | `moema@fadelito.com.br` | `Fadelito@2026` |
| 18 | Mooca | `mooca@fadelito.com.br` | `Fadelito@2026` |
| 19 | Osasco | `osasco@fadelito.com.br` | `Fadelito@2026` |
| 20 | Panamby | `panamby@fadelito.com.br` | `Fadelito@2026` |
| 21 | Paraiso | `paraiso@fadelito.com.br` | `Fadelito@2026` |
| 22 | Perdizes | `perdizes@fadelito.com.br` | `Fadelito@2026` |
| 23 | Pinheiros | `pinheiros@fadelito.com.br` | `Fadelito@2026` |
| 24 | Piracicaba | `piracicaba@fadelito.com.br` | `Fadelito@2026` |
| 25 | Portal do Morumbi | `morumbi@fadelito.com.br` | `Fadelito@2026` |
| 26 | Real Parque | `realparque@fadelito.com.br` | `Fadelito@2026` |
| 27 | Santo Andre | `santoandre@fadelito.com.br` | `Fadelito@2026` |
| 28 | Saúde | `saude@fadelito.com.br` | `Fadelito@2026` |
| 29 | São Caetano | `saocaetano@fadelito.com.br` | `Fadelito@2026` |
| 30 | Tatuapé | `tatuape@fadelito.com.br` | `Fadelito@2026` |
| 31 | Vila Gumercindo | `vilagumercindo@fadelito.com.br` | `Fadelito@2026` |
| 32 | Vila Leopoldina | `vilaleopoldina@fadelito.com.br` | `Fadelito@2026` |
| 33 | Vila Madalena | `vilamadalena@fadelito.com.br` | `Fadelito@2026` |
| 34 | Vila Mariana | `vilamariana@fadelito.com.br` | `Fadelito@2026` |
| 35 | Vila Sônia | `vilasonia@fadelito.com.br` | `Fadelito@2026` |

---

## 4. Passo a Passo de Publicação no Cloudflare Pages

1. Acesse o painel da empresa no **Cloudflare Dashboard** (`dash.cloudflare.com`).
2. No menu lateral esquerdo, vá em **Workers & Pages**  **Create Application**  aba **Pages**.
3. Clique em **Connect to Git** e selecione o repositório (`portal-view`).
4. Nas configurações de Build:
   * **Framework preset:** `None` (Static HTML/JS)
   * **Build command:** Deixe em branco (não requer compilação)
   * **Build output directory:** `/` (raiz do repositório)
5. Clique em **Save and Deploy**. Em menos de 1 minuto o Cloudflare Pages estará ativo com certificado SSL automático e CDN global.
6. (Opcional) Vincule o subdomínio institucional desejado (ex: `bi-rh.fadelito.com.br` ou `recrutamento.fadelito.com.br`) na aba **Custom domains**.

---

## 5. Evoluções Recomendadas para a Equipe de TI

1. **Alteração de Senhas**:
   * Para alterar as senhas no modelo atual, basta editar o objeto `AUTH_CONFIG` no arquivo `auth_service.js`.
2. **Migração para Cloudflare Workers KV / D1**:
   * O endpoint em `functions/api/login.js` já está pronto para ler variáveis de ambiente (`env.MASTER_PASSWORD`) ou consultar o banco D1/KV.
3. **Cloudflare Zero Trust / Access**:
   * Como a empresa possui plano pago do Cloudflare, é possível criar uma política de **Cloudflare Access** na frente da rota, permitindo login direto via **Google Workspace (SSO)** dos e-mails institucionais `@fadelito.com.br`.
