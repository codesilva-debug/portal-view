/**
 * GOOGLE APPS SCRIPT — SINCRONIZADOR BI RH REDE FADELITO
 * 
 * Instruções de Instalação:
 * 1. Abra a sua planilha Google Sheets: https://docs.google.com/spreadsheets/d/17ZoXL-enZbUmpXgCroT7qkocvsbHYLPVu_cp0ACBpn0/edit?gid=1399861337#gid=1399861337
 * 2. No menu superior, clique em "Extensões" > "Apps Script".
 * 3. Apague qualquer código existente no editor e cole este script na íntegra.
 * 4. Clique no botão azul "Implantar" (canto superior direito) > "Nova implantação".
 * 5. Clique na engrenagem  ao lado de "Selecionar tipo" e escolha "App da Web".
 * 6. Configure:
 *    - Descrição: "API BI RH Fadelito"
 *    - Executar como: "Eu (seu email)"
 *    - Quem tem acesso: "Qualquer pessoa" (necessário para o site conseguir enviar requisições)
 * 7. Clique em "Implantar" e conceda as permissões solicitadas.
 * 8. Copie a URL do App da Web fornecida (termina com /exec) e cole no Portal BI RH na aba "Configurações".
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Dashboard") || ss.getSheetByName("GRAFICOS") || ss.getActiveSheet();
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Aba da planilha não foi encontrada."
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    // Formato dos campos esperados
    var dataStr = data.data || Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
    var cargoStr = data.cargo || "";
    var horarioStr = data.horario || "";
    var mesNum = data.mes || parseInt(dataStr.split("/")[1], 10) || 1;
    var statusStr = data.status || "Aprovado";
    
    // Adiciona no final da lista
    sheet.appendRow([dataStr, cargoStr, horarioStr, mesNum, statusStr]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Registro adicionado com sucesso na planilha!",
      inserted: {
        data: dataStr,
        cargo: cargoStr,
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

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "BI RH Rede Fadelito - Google Sheets Sync API",
    timestamp: new Date()
  })).setMimeType(ContentService.MimeType.JSON);
}
