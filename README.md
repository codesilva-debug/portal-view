# 📊 Portal View — BI RH & Recrutamento (Rede Fadelito)

Painel Executivo de Business Intelligence para acompanhamento do processo seletivo e contratações em tempo real da Rede Fadelito (Unidade Portal do Morumbi).

## 🚀 Funcionalidades
- **Sincronização em Tempo Real (8s):** Conectado diretamente com a planilha do Google Sheets.
- **Auto-cura & Resiliência:** Dedução automática de datas, turnos e status de preenchimento.
- **Métricas Executivas de RH:**
  - Quadro de Vagas e Contratações Efetivadas
  - Vagas em Aberto / Captação
  - Vivências Práticas no Chão de Escola & Conversão
  - Assertividade e Distribuição por Turno / Horário
  - Motivos de Perdas / Descarte
- **Entregáveis Rápidos:**
  - Gerador de Relatório Executivo para WhatsApp
  - Painel de Impressão A4 / PDF

## 📁 Estrutura de Arquivos
- `index.html`: Dashboard principal interativo com filtros e gráficos Chart.js.
- `painel_imprimir_a4.html`: Relatório diagramado para exportação em PDF e impressão formal.
- `apps_script_connector.js`: Script de integração Google Apps Script (Web App).
- `vercel.json`: Configurações de deploy e roteamento para a Vercel.
