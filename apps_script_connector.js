/**
 * GOOGLE APPS SCRIPT — SINCRONIZADOR BI RH REDE FADELITO (MODO PRIVADO & SEGURO)
 * 
 * Este script atua como uma PONTE SEGURA (API Proxy) para permitir que o Portal de BI
 * leia e escreva dados em tempo real SEM precisar tornar a planilha pública na internet.
 * 
 * ==============================================================================
 * INSTRUÇÕES DE INSTALAÇÃO PASSO A PASSO:
 * ==============================================================================
 * 
 * 1. TRANQUE A PLANILHA (LGPD & SEGURANÇA):
 *    - No canto superior direito da planilha, clique no botão verde "Compartilhar".
 *    - Em "Acesso geral", mude de "Qualquer pessoa com o link" para "Restrito".
 *    - Clique em "Concluído". Ninguém de fora conseguirá abrir a planilha no navegador!
 * 
 * 2. COLE ESTE SCRIPT NO GOOGLE APPS SCRIPT:
 *    - No menu superior da planilha, clique em "Extensões" > "Apps Script".
 *    - Apague todo o código existente lá e cole este script na íntegra.
 *    - Clique no ícone de disquete (Salvar) ou pressione Ctrl+S.
 * 
 * 3. IMPLANTE COMO APLICATIVO DA WEB (WEB APP):
 *    - No canto superior direito do Apps Script, clique no botão azul "Implantar" > "Nova implantação".
 *    - Clique no ícone de engrenagem ⚙️ ao lado de "Selecionar tipo" e escolha "App da Web".
 *    - Configure EXATAMENTE assim:
 *         • Descrição: API Privada BI RH Fadelito
 *         • Executar como: "Eu (seu email)" <--- ESSENCIAL: Permite ler a planilha restrita!
 *         • Quem tem acesso: "Qualquer pessoa"
 *    - Clique em "Implantar", conceda as permissões de acesso com a sua conta Google.
 *    - Copie a URL do App da Web gerada (ela termina com "/exec").
 * 
 * 4. ATIVE NO PORTAL DE BI:
 *    - Abra o Portal BI RH, vá na aba "Configurações" e cole essa URL no campo "URL do App da Web".
 *    - Clique em "Salvar e Sincronizar Privado". Pronto!
 * ==============================================================================
 */

function getSheetByGidOrNames(ss, gid, possibleNames, defaultIndex) {
  var sheets = ss.getSheets();
  
  // 1. Tenta encontrar pelo GID numérico exato (imune a renomeação de aba)
  if (gid !== undefined && gid !== null) {
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getSheetId() === gid || sheets[i].getSheetId() === parseInt(gid, 10)) {
        return sheets[i];
      }
    }
  }
  
  // 2. Tenta encontrar pelos nomes alternativos
  if (possibleNames && possibleNames.length > 0) {
    for (var j = 0; j < possibleNames.length; j++) {
      var found = ss.getSheetByName(possibleNames[j]);
      if (found) return found;
    }
  }
  
  // 3. Fallback para o índice padrão
  if (defaultIndex !== undefined && sheets[defaultIndex]) {
    return sheets[defaultIndex];
  }
  
  return sheets[0] || null;
}

/**
 * Endpoint de Leitura GET: Retorna os dados das abas de Vagas e Validação em formato JSON estruturado.
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // 1. Aba Oficial de Vagas (VALIDAÇÃO VAGAS JUL/DEZ - Padrão Direção)
    var sheetVagas = getSheetByGidOrNames(ss, null, [
      "VALIDAÇÃO VAGAS JUL/DEZ", 
      "VALIDAÇÃO VAGAS JULDEZ", 
      "VALIDACAO VAGAS JUL/DEZ", 
      "VALIDACAO VAGAS", 
      "VAGAS", 
      "VAGAS_UNID"
    ], 0);
    
    // 2. Abas legadas para compatibilidade (Looker / Ranking)
    var sheetLooker = getSheetByGidOrNames(ss, 1399861337, ["BASE_LOOKER", "Looker", "Dashboard", "GRAFICOS"], null);
    var sheetRanking = getSheetByGidOrNames(ss, 1503088086, ["Ranking", "BI - RANKING UNIDADES", "FUNIL", "UNIDADES"], null);
    
    var vagasValues = sheetVagas ? sheetVagas.getDataRange().getDisplayValues() : [];
    var lookerValues = sheetLooker ? sheetLooker.getDataRange().getDisplayValues() : [];
    var rankingValues = sheetRanking ? sheetRanking.getDataRange().getDisplayValues() : [];
    
    var output = {
      status: "success",
      service: "BI RH Rede Fadelito - Private API Bridge (Modelo Atualizado)",
      timestamp: new Date().toISOString(),
      sheets: {
        vagasName: sheetVagas ? sheetVagas.getName() : "Desconhecida",
        vagasRows: vagasValues.length,
        lookerName: sheetLooker ? sheetLooker.getName() : "Desconhecida",
        lookerRows: lookerValues.length,
        rankingName: sheetRanking ? sheetRanking.getName() : "Desconhecida",
        rankingRows: rankingValues.length
      },
      vagas: vagasValues,
      looker: lookerValues.length > 0 ? lookerValues : vagasValues,
      ranking: rankingValues
    };
    
    return ContentService.createTextOutput(JSON.stringify(output))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Endpoint de Escrita POST: Permite adicionar novos registros diretamente na aba de Vagas.
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = getSheetByGidOrNames(ss, 1399861337, ["Dashboard", "GRAFICOS", "VAGAS"], 0);
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Aba da planilha não foi localizada."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch (err) {}
    }
    
    var dataStr = data.data || Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
    var cargoStr = data.cargo || "";
    var horarioStr = data.horario || "";
    var mesNum = data.mes || parseInt(dataStr.split("/")[1], 10) || 1;
    var statusStr = data.status || "Aprovado";
    var unidadeStr = data.unidade || "Portal do Morumbi";
    var vivenciasNum = data.vivencias || 1;
    
    // Insere linha no final da aba
    sheet.appendRow([dataStr, mesNum, unidadeStr, cargoStr, "", statusStr, "", "", vivenciasNum]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Registro gravado com sucesso na planilha protegida!",
      inserted: {
        data: dataStr,
        cargo: cargoStr,
        unidade: unidadeStr,
        horario: horarioStr,
        mes: mesNum,
        status: statusStr
      }
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
