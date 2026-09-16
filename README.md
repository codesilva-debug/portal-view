# Portal View — BI RH & Recrutamento (Rede Fadelito)

Painel Executivo de Business Intelligence para acompanhamento em tempo real de vagas, vivências práticas e contratações da **Rede Fadelito de Educação Infantil** (35 Unidades Integradas).

---

## 1. Sistema de Autenticação & Perfis (RBAC & LGPD)

O sistema conta com tela de bloqueio executiva (*Login Gatekeeper*), autenticação serverless com fallback resiliente e segregação estrita de dados por perfil:

1. **Diretoria Geral (`MASTER`)**:
   - **Login:** `diretoria@fadelito.com.br` | **Senha:** `Diretoria@2026`
   - **Visão:** Consolidado de Toda a Rede (35 Unidades) com seletor ativo no topo para auditar qualquer unidade escolar individualmente.
2. **Unidades Escolares (`UNIT`)**:
   - **Login:** E-mail ou slug da escola (ex: `morumbi@fadelito.com.br`, `moema@fadelito.com.br`) | **Senha:** `Fadelito@2026`
   - **Visão:** Restrita **exclusivamente** à própria unidade escolar. Seletor de unidades travado e com selo da respectiva escola.
   - **Blindagem no F12 (Zero Data Leak):** Dados de outras unidades são descartados em tempo de execução. Mesmo que o usuário inspecione o console do navegador, nenhum registro de outra escola é mantido em memória.

> **Consulte o arquivo [`CREDENCIAIS_ACESSO.txt`](./CREDENCIAIS_ACESSO.txt) para a lista completa das 34 unidades com seus respectivos usuários e senhas de homologação.**

---

## 2. Deploy: Vercel & Cloudflare Pages

O projeto foi arquitetado para rodar nativamente com performance máxima e latência zero tanto na **Vercel** quanto no **Cloudflare Pages**:

### Como publicar no Vercel (Homologação Imediata):
1. Importe o repositório no [Vercel Dashboard](https://vercel.com).
2. O arquivo [`vercel.json`](./vercel.json) já está pré-configurado com as rotas de API e URLs amigáveis.
3. O endpoint serverless [`api/login.js`](./api/login.js) é detectado automaticamente como Vercel Function.
4. Clique em **Deploy** (não requer build command).

### Como publicar no Cloudflare Pages (Produção Prolongada):
1. Conecte o repositório ao Cloudflare Pages no painel do Cloudflare.
2. O endpoint [`functions/api/login.js`](./functions/api/login.js) é executado como Cloudflare Pages Functions.
3. Consulte o documento [`CLOUDFLARE_GUIA_TECNICO.md`](./CLOUDFLARE_GUIA_TECNICO.md) para o passo a passo completo e orientações para a equipe de TI.

---

## 3. Estrutura do Repositório

```
├── index.html                   # Dashboard Executivo Principal (Login Gatekeeper + Chart.js)
├── auth_service.js              # Módulo de Autenticação, RBAC e integração serverless
├── data_unidades.js             # Base histórica segura com DataManager encapsulado
├── CREDENCIAIS_ACESSO.txt       # Tabela oficial de acessos (Diretoria e 35 Unidades)
├── CLOUDFLARE_GUIA_TECNICO.md   # Guia detalhado para a equipe de TI no Cloudflare
├── vercel.json                  # Roteamento e configurações para deploy no Vercel
├── api/
│   └── login.js                 # Endpoint Serverless para Vercel
├── functions/
│   └── api/
│       └── login.js             # Endpoint Serverless para Cloudflare Pages Functions
├── Fadelito.png                 # Logotipo circular oficial da marca
├── ChartsFadelito2.png          # Arte corporativa para a tela de autenticação
└── .gitignore                   # Regras de exclusão para controle de versão limpo
```

---

## 4. Funcionalidades Principais

- **Segurança de Ponta:** Bloqueio total de gráficos e dados antes do login autenticado.
- **Sincronização em Tempo Real:** Conexão direta com a planilha oficial Google Sheets via Google Visualization API com auto-cura e resiliência.
- **Métricas Executivas de RH:**
  - Quadro de Vagas e Contratações Efetivadas por Escola
  - Vagas em Aberto e Acompanhamento de Captação
  - Vivências Práticas no Chão de Escola & Taxa Média de Conversão
  - Assertividade por Cargo e Turno de Trabalho
  - Funil de Seleção e Motivos de Perdas / Descarte
- **Entregáveis de Alta Produtividade:**
  - Gerador de Relatório Executivo para WhatsApp
