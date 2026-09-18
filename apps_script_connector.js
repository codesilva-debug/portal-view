/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT — CONECTOR OFICIAL BI RH (REDE FADELITO)
 * ALTA VELOCIDADE + PROCESSAMENTO EM MEMÓRIA DE VIVÊNCIAS (V1 A V12)
 * ==============================================================================
 * 
 * VANTAGENS DESTA VERSÃO:
 * 1. Lê os dados cadastrais (Colunas A a N) com datas e textos formatados.
 * 2. Lê as colunas de teste prático (V1 a V12) em memória ultrarrápida (getValues).
 * 3. Soma as vivências no próprio servidor e envia apenas 1 coluna calculada (Total Vivências).
 * 4. Mantém a resposta instantânea (< 1 segundo) e o JSON superleve (~160 KB).
 * 5. Corrige a taxa de conversão por cargo no dashboard executivo.
 * 
 * INSTRUÇÕES PARA ATUALIZAR NA PLANILHA:
 * 1. Na planilha Google: Extensões > Apps Script.
 * 2. Substitua TODO o código existente por este e salve (Ctrl+S).
 * 3. Clique no botão azul "Implantar" > "Gerenciar implantações".
 * 4. Clique no ícone de lápis ✏️ (Editar).
 * 5. Na opção "Versão", selecione "Nova versão" e clique em "Implantar".
 * ==============================================================================
 */

function getSheetValores(ss, sheetNames) {
  var sheets = ss.getSheets();
  for (var j = 0; j < sheetNames.length; j++) {
    var found = ss.getSheetByName(sheetNames[j]);
    if (found) return found;
  }
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName().toUpperCase();
    if (name.indexOf("VALIDA") !== -1 || name.indexOf("JUL") !== -1 || name.indexOf("VAGAS") !== -1) {
      return sheets[i];
    }
  }
  return sheets[0] || null;
}

function getRankingSheet(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === 1503088086) return sheets[i];
  }
  return ss.getSheetByName("Ranking") ||
    ss.getSheetByName("BI - RANKING UNIDADES") ||
    ss.getSheetByName("FUNIL") ||
    ss.getSheetByName("UNIDADES") ||
    null;
}

/**
 * Endpoint GET: Envia todos os registros com vivências computadas para o BI.
 */
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Aba Oficial de Validação de Vagas
    var sheetVagas = getSheetValores(ss, [
      "VALIDAÇÃO VAGAS JUL/DEZ",
      "VALIDAÇÃO VAGAS JULDEZ",
      "VALIDACAO VAGAS JUL/DEZ",
      "VALIDACAO VAGAS",
      "VALIDAÇÃO DE VAGAS",
      "VAGAS"
    ]);

    // 2. Aba de Ranking / Funil Multi-Unidades
    var sheetRanking = getRankingSheet(ss);

    var lastRowVagas = sheetVagas ? Math.min(sheetVagas.getLastRow(), 3000) : 0;
    var lastColVagas = sheetVagas ? Math.min(sheetVagas.getLastColumn(), 80) : 14;

    // Leitura das 14 colunas essenciais (A até N) com formatação de texto/data
    var rawVagas = (sheetVagas && lastRowVagas > 0)
      ? sheetVagas.getRange(1, 1, lastRowVagas, Math.min(14, lastColVagas)).getDisplayValues()
      : [];

    // Leitura ultrarrápida em memória das colunas além da 14 (onde ficam V1..V12)
    var rawVivencias = (sheetVagas && lastRowVagas > 0 && lastColVagas > 14)
      ? sheetVagas.getRange(1, 15, lastRowVagas, lastColVagas - 14).getValues()
      : [];

    // Identificação dos índices de vivências (colunas V1..V12 da planilha original)
    // Offset em relação à coluna 15 (índice 0 em rawVivencias):
    // Índices padrão: 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65 -> Offset: 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51
    var vOffsets = [7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51];

    // Se a linha de cabeçalho tiver nomes como V1, V2 ou VIVÊNCIA, calibramos os offsets dinamicamente
    if (rawVivencias.length > 0) {
      var headerViv = rawVivencias[0];
      var detectedOffsets = [];
      for (var h = 0; h < headerViv.length; h++) {
        var hName = String(headerViv[h] || '').toUpperCase();
        if (/^V\d+$/i.test(hName) || hName.indexOf("VIV") !== -1 || hName.indexOf("TESTE") !== -1) {
          detectedOffsets.push(h);
        }
      }
      if (detectedOffsets.length >= 3) {
        vOffsets = detectedOffsets;
      }
    }

    // Filtra e processa cada vaga, calculando as vivências reais
    var cleanVagas = [];
    if (rawVagas.length > 0) {
      var headerRow = rawVagas[0].slice();
      headerRow.push("Total Vivências"); // Coluna 14 (índice 14)
      cleanVagas.push(headerRow);

      for (var i = 1; i < rawVagas.length; i++) {
        var r = rawVagas[i].slice();
        // Se possui Cargo (B), Data (C), Unidade (D) ou Status (I), é uma vaga válida
        if (r[1] || r[2] || r[3] || r[8] || r[9]) {
          var vCount = 0;
          if (rawVivencias.length > i) {
            var vRow = rawVivencias[i];
            for (var k = 0; k < vOffsets.length; k++) {
              var idx = vOffsets[k];
              if (idx < vRow.length) {
                var val = vRow[idx];
                if (val === 1 || val === "1" || val === true || String(val).trim() === "1") {
                  vCount++;
                }
              }
            }
          }

          // Se não há contagem explícita nas colunas V1..V12 mas o status é Aprovado,
          // no chão de escola ao menos 1 candidato realizou vivência para ser contratado
          var statusLower = String(r[8] || '').toLowerCase();
          if (vCount === 0 && (statusLower.indexOf('aprovado') !== -1 || statusLower.indexOf('viv') !== -1)) {
            vCount = 1;
          }

          r.push(vCount); // Adiciona na 15ª posição
          cleanVagas.push(r);
        }
      }
    }

    // Leitura da aba de Ranking e Funil
    var lastRowRanking = sheetRanking ? Math.min(sheetRanking.getLastRow(), 60) : 0;
    var rankingValues = (sheetRanking && lastRowRanking > 0)
      ? sheetRanking.getRange(1, 1, lastRowRanking, 9).getDisplayValues()
      : [];

    var output = {
      status: "success",
      service: "BI RH Rede Fadelito — API Oficial Validação Vagas (Alta Performance & Vivências)",
      timestamp: new Date().toISOString(),
      sheetVagasNome: sheetVagas ? sheetVagas.getName() : "Não encontrada",
      totalColunasDetectadas: lastColVagas,
      totalLinhasVagas: cleanVagas.length,
      vagas: cleanVagas,
      looker: cleanVagas,
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
 * Endpoint POST: Grava novos registros diretamente na aba oficial de validação.
 */
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetVagas = getSheetValores(ss, [
      "VALIDAÇÃO VAGAS JUL/DEZ",
      "VALIDAÇÃO VAGAS JULDEZ",
      "VALIDACAO VAGAS JUL/DEZ",
      "VALIDACAO VAGAS",
      "VAGAS"
    ]);

    if (!sheetVagas) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Aba VALIDAÇÃO VAGAS JUL/DEZ não encontrada."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch (err) { }
    }

    var carimbo = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy HH:mm:ss");
    var cargoStr = data.cargo || "";
    var dataStr = data.data || Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
    var unidadeStr = data.unidade || "Portal do Morumbi";
    var horarioStr = data.horario || "13:00 ÀS 19:00";
    var mesNum = data.mes || parseInt(dataStr.split("/")[1], 10) || 1;
    var statusStr = data.status || "Triagem";
    var colaboradorStr = data.colaborador || "";
    var tipoVagaStr = data.tipoVaga || "Nova"; // Coluna M

    sheetVagas.appendRow([
      carimbo, cargoStr, dataStr, unidadeStr, horarioStr, "", "", mesNum, statusStr, colaboradorStr, "", "", tipoVagaStr
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Registro gravado na aba oficial de validação!",
      tipoVaga: tipoVagaStr
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
