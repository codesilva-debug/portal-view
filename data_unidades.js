(function(window) {
    'use strict';

    // Base interna protegida em closure privada (inacessível pelo window global / F12)
    const _PRIVATE_RAW_DATA = {
  "unitFunnels": {
    "Aclimação": {
      "enviados": 28,
      "aprovados": 11,
      "reprovados": 3,
      "desistentes": 2,
      "naoCompareceu": 11,
      "desistInteg": 0,
      "reprovInteg": 1,
      "taxa": null
    },
    "Alto da Boa Vista": {
      "enviados": 20,
      "aprovados": 13,
      "reprovados": 2,
      "desistentes": 0,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Analia Franco": {
      "enviados": 37,
      "aprovados": 16,
      "reprovados": 9,
      "desistentes": 2,
      "naoCompareceu": 7,
      "desistInteg": 3,
      "reprovInteg": 0,
      "taxa": null
    },
    "Bonfiglioli": {
      "enviados": 44,
      "aprovados": 12,
      "reprovados": 11,
      "desistentes": 6,
      "naoCompareceu": 14,
      "desistInteg": 0,
      "reprovInteg": 1,
      "taxa": null
    },
    "Brooklin": {
      "enviados": 16,
      "aprovados": 7,
      "reprovados": 3,
      "desistentes": 2,
      "naoCompareceu": 4,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Campinas": {
      "enviados": 3,
      "aprovados": 1,
      "reprovados": 1,
      "desistentes": 0,
      "naoCompareceu": 1,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Campo Belo": {
      "enviados": 55,
      "aprovados": 18,
      "reprovados": 10,
      "desistentes": 0,
      "naoCompareceu": 14,
      "desistInteg": 9,
      "reprovInteg": 4,
      "taxa": null
    },
    "Chacara Klabin": {
      "enviados": 46,
      "aprovados": 21,
      "reprovados": 4,
      "desistentes": 4,
      "naoCompareceu": 16,
      "desistInteg": 1,
      "reprovInteg": 0,
      "taxa": null
    },
    "Granja Viana": {
      "enviados": 38,
      "aprovados": 13,
      "reprovados": 2,
      "desistentes": 5,
      "naoCompareceu": 15,
      "desistInteg": 3,
      "reprovInteg": 0,
      "taxa": null
    },
    "Guarulhos": {
      "enviados": 2,
      "aprovados": 1,
      "reprovados": 0,
      "desistentes": 1,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Higienópolis": {
      "enviados": 63,
      "aprovados": 24,
      "reprovados": 9,
      "desistentes": 11,
      "naoCompareceu": 16,
      "desistInteg": 3,
      "reprovInteg": 0,
      "taxa": null
    },
    "Indianópolis": {
      "enviados": 12,
      "aprovados": 9,
      "reprovados": 0,
      "desistentes": 0,
      "naoCompareceu": 2,
      "desistInteg": 0,
      "reprovInteg": 1,
      "taxa": null
    },
    "Ipiranga": {
      "enviados": 71,
      "aprovados": 31,
      "reprovados": 8,
      "desistentes": 5,
      "naoCompareceu": 24,
      "desistInteg": 2,
      "reprovInteg": 1,
      "taxa": null
    },
    "Lapa": {
      "enviados": 24,
      "aprovados": 16,
      "reprovados": 1,
      "desistentes": 0,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 2,
      "taxa": null
    },
    "Marajoara": {
      "enviados": 35,
      "aprovados": 15,
      "reprovados": 4,
      "desistentes": 2,
      "naoCompareceu": 9,
      "desistInteg": 4,
      "reprovInteg": 1,
      "taxa": null
    },
    "Moema": {
      "enviados": 59,
      "aprovados": 21,
      "reprovados": 8,
      "desistentes": 7,
      "naoCompareceu": 15,
      "desistInteg": 5,
      "reprovInteg": 3,
      "taxa": null
    },
    "Mooca": {
      "enviados": 28,
      "aprovados": 15,
      "reprovados": 5,
      "desistentes": 3,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Osasco": {
      "enviados": 36,
      "aprovados": 14,
      "reprovados": 4,
      "desistentes": 7,
      "naoCompareceu": 10,
      "desistInteg": 1,
      "reprovInteg": 0,
      "taxa": null
    },
    "Panamby": {
      "enviados": 34,
      "aprovados": 13,
      "reprovados": 6,
      "desistentes": 7,
      "naoCompareceu": 7,
      "desistInteg": 1,
      "reprovInteg": 0,
      "taxa": null
    },
    "Paraiso": {
      "enviados": 65,
      "aprovados": 30,
      "reprovados": 6,
      "desistentes": 7,
      "naoCompareceu": 18,
      "desistInteg": 1,
      "reprovInteg": 3,
      "taxa": null
    },
    "Perdizes": {
      "enviados": 20,
      "aprovados": 8,
      "reprovados": 4,
      "desistentes": 2,
      "naoCompareceu": 6,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Pinheiros": {
      "enviados": 36,
      "aprovados": 19,
      "reprovados": 2,
      "desistentes": 5,
      "naoCompareceu": 7,
      "desistInteg": 2,
      "reprovInteg": 1,
      "taxa": null
    },
    "Portal do Morumbi": {
      "enviados": 33,
      "aprovados": 20,
      "reprovados": 7,
      "desistentes": 1,
      "naoCompareceu": 4,
      "desistInteg": 1,
      "reprovInteg": 0,
      "taxa": null
    },
    "Real Parque": {
      "enviados": 39,
      "aprovados": 13,
      "reprovados": 6,
      "desistentes": 2,
      "naoCompareceu": 15,
      "desistInteg": 3,
      "reprovInteg": 0,
      "taxa": null
    },
    "Santo Andre": {
      "enviados": 43,
      "aprovados": 18,
      "reprovados": 7,
      "desistentes": 6,
      "naoCompareceu": 9,
      "desistInteg": 2,
      "reprovInteg": 1,
      "taxa": null
    },
    "Saúde": {
      "enviados": 34,
      "aprovados": 17,
      "reprovados": 6,
      "desistentes": 3,
      "naoCompareceu": 6,
      "desistInteg": 2,
      "reprovInteg": 0,
      "taxa": null
    },
    "São Caetano": {
      "enviados": 33,
      "aprovados": 19,
      "reprovados": 7,
      "desistentes": 3,
      "naoCompareceu": 3,
      "desistInteg": 0,
      "reprovInteg": 1,
      "taxa": null
    },
    "Tatuapé": {
      "enviados": 6,
      "aprovados": 3,
      "reprovados": 2,
      "desistentes": 0,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 1,
      "taxa": null
    },
    "Vila Gumercindo": {
      "enviados": 42,
      "aprovados": 18,
      "reprovados": 3,
      "desistentes": 4,
      "naoCompareceu": 9,
      "desistInteg": 6,
      "reprovInteg": 2,
      "taxa": null
    },
    "Vila Leopoldina": {
      "enviados": 54,
      "aprovados": 28,
      "reprovados": 8,
      "desistentes": 4,
      "naoCompareceu": 12,
      "desistInteg": 2,
      "reprovInteg": 0,
      "taxa": null
    },
    "Vila Madalena": {
      "enviados": 22,
      "aprovados": 13,
      "reprovados": 2,
      "desistentes": 3,
      "naoCompareceu": 1,
      "desistInteg": 3,
      "reprovInteg": 0,
      "taxa": null
    },
    "Vila Mariana": {
      "enviados": 25,
      "aprovados": 14,
      "reprovados": 3,
      "desistentes": 1,
      "naoCompareceu": 7,
      "desistInteg": 0,
      "reprovInteg": 0,
      "taxa": null
    },
    "Vila Sônia": {
      "enviados": 29,
      "aprovados": 13,
      "reprovados": 4,
      "desistentes": 3,
      "naoCompareceu": 3,
      "desistInteg": 4,
      "reprovInteg": 2,
      "taxa": null
    }
  },
  "unitRecords": {
    "Higienópolis": [
      {
        "id": 1,
        "data": "16/12/2025",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 2,
        "data": "16/12/2025",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 3,
        "data": "17/12/2025",
        "cargo": "OUTROS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Beatriz Modesto Oliveira",
        "vivencias": 1
      },
      {
        "id": 102,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Renato Sabino Almeida",
        "vivencias": 1
      },
      {
        "id": 162,
        "data": "15/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 183,
        "data": "24/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Renato Sabino de Almeida",
        "vivencias": 1
      },
      {
        "id": 188,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 190,
        "data": "26/02/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "AMANDA MARQUES PAIVA",
        "vivencias": 2
      },
      {
        "id": 239,
        "data": "16/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 257,
        "data": "18/03/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 276,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "NATIZIELI APARECIDA FERREIRA",
        "vivencias": 1
      },
      {
        "id": 278,
        "data": "01/04/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Beatryz Felix Santana (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 293,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "João Victor Oliveira da Silva",
        "vivencias": 1
      },
      {
        "id": 323,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "NATIZIELI APARECIDA FERREIRA DO SANTOS",
        "vivencias": 2
      },
      {
        "id": 363,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 373,
        "data": "15/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Gabriela Silva da Conceição",
        "vivencias": 1
      },
      {
        "id": 392,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 398,
        "data": "05/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Fabiana Pereira da Silva",
        "vivencias": 3
      },
      {
        "id": 452,
        "data": "30/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 454,
        "data": "02/06/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 5
      },
      {
        "id": 470,
        "data": "08/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "GABRIELA VIEIRA RODRIGUES SALAZAR",
        "vivencias": 7
      },
      {
        "id": 477,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 478,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 496,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 497,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 504,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 513,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 546,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 551,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "GISELE PEREIRA DA SILVA ALVES",
        "vivencias": 2
      },
      {
        "id": 559,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 574,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 575,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 603,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 604,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "Ana Paula Almeida da Silva",
        "vivencias": 2
      }
    ],
    "Campinas": [
      {
        "id": 4,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "LEILA DINIZ DA CONCEICAO",
        "vivencias": 1
      },
      {
        "id": 10,
        "data": "15/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "GRECE SUMAYA SILVA DA COSTA ALVES",
        "vivencias": 1
      },
      {
        "id": 39,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 40,
        "data": "09/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 88,
        "data": "22/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 117,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "DAIANE MACHADO FERNANDES ALVES",
        "vivencias": 1
      }
    ],
    "Santo Andre": [
      {
        "id": 5,
        "data": "05/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "VITOR NASCIMENTO DE OMENA",
        "vivencias": 6
      },
      {
        "id": 44,
        "data": "12/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 45,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 5
      },
      {
        "id": 53,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 147,
        "data": "06/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Barbara Helena Bueno da Silva",
        "vivencias": 2
      },
      {
        "id": 169,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 170,
        "data": "19/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "GUSTAVO GOMES DA SILVA OLIVEIRA",
        "vivencias": 2
      },
      {
        "id": 191,
        "data": "26/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Katia oliveira Chaves",
        "vivencias": 2
      },
      {
        "id": 193,
        "data": "27/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "DAIANNY",
        "vivencias": 1
      },
      {
        "id": 219,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Thais da Silva Costa Gomes",
        "vivencias": 1
      },
      {
        "id": 235,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Márcia Gisele",
        "vivencias": 1
      },
      {
        "id": 236,
        "data": "12/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Márcia Gisele de Jesus",
        "vivencias": 1
      },
      {
        "id": 268,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Gabriele Regina Marques Santana",
        "vivencias": 1
      },
      {
        "id": 422,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Julia Rodrigues da Silva",
        "vivencias": 4
      },
      {
        "id": 482,
        "data": "13/07/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 491,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tayane Santana Castanho",
        "vivencias": 3
      },
      {
        "id": 502,
        "data": "27/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Raiane Vitória Souza da Conceição",
        "vivencias": 1
      },
      {
        "id": 534,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 535,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Juliene Araujo Varim",
        "vivencias": 2
      },
      {
        "id": 536,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Caroline de Moraes Victor",
        "vivencias": 3
      },
      {
        "id": 624,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Briefing",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Analia Franco": [
      {
        "id": 6,
        "data": "05/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "GABRIEL DE OLIVEIRA SENA",
        "vivencias": 3
      },
      {
        "id": 30,
        "data": "08/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 107,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 108,
        "data": "27/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Cássia dos Santos Sena",
        "vivencias": 5
      },
      {
        "id": 126,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 5
      },
      {
        "id": 127,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 230,
        "data": "10/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Barbara Castro Ferreira de Araujo (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 316,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 334,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Gabriela Gazonatto",
        "vivencias": 1
      },
      {
        "id": 335,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 344,
        "data": "04/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 350,
        "data": "07/05/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 440,
        "data": "26/06/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 451,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 6
      },
      {
        "id": 493,
        "data": "20/07/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 552,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 553,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "Bruna Santos Aguiar",
        "vivencias": 1
      },
      {
        "id": 558,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 601,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      }
    ],
    "Campo Belo": [
      {
        "id": 7,
        "data": "05/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 16,
        "data": "15/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 72,
        "data": "19/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 93,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Valquiria Rodrigues Costa",
        "vivencias": 1
      },
      {
        "id": 94,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Emily Vitoria Gomes dos Santos",
        "vivencias": 10
      },
      {
        "id": 105,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "SABRINA DA SILVA ALBINO",
        "vivencias": 1
      },
      {
        "id": 106,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "CRISLAINE DE SOUZA LIMA",
        "vivencias": 3
      },
      {
        "id": 153,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Luana Stefany Dos Santos Silva",
        "vivencias": 10
      },
      {
        "id": 223,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Laise da Silva Jesus",
        "vivencias": 1
      },
      {
        "id": 225,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Dayala Santos de Moura",
        "vivencias": 2
      },
      {
        "id": 263,
        "data": "20/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Julia Aparecida Alves dos Santos",
        "vivencias": 6
      },
      {
        "id": 357,
        "data": "12/05/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "BEATRIZ FREITAS BRITO",
        "vivencias": 1
      },
      {
        "id": 370,
        "data": "18/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Isabela Ferreira de Souza",
        "vivencias": 1
      },
      {
        "id": 372,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 396,
        "data": "02/06/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Maria do Socorro da Silva Souza",
        "vivencias": 1
      },
      {
        "id": 406,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Renata da Graça Silva",
        "vivencias": 1
      },
      {
        "id": 479,
        "data": "13/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 510,
        "data": "28/07/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "BEATRIZ FREITAS BRITO",
        "vivencias": 3
      },
      {
        "id": 549,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 557,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      }
    ],
    "São Caetano": [
      {
        "id": 8,
        "data": "15/01/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 22,
        "data": "06/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 23,
        "data": "06/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 24,
        "data": "15/01/2026",
        "cargo": "PROF DE BALLET",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 25,
        "data": "15/01/2026",
        "cargo": "PROF DE JUDÔ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 26,
        "data": "06/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 36,
        "data": "09/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 46,
        "data": "12/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 57,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 63,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 77,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 114,
        "data": "28/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 133,
        "data": "15/01/2026",
        "cargo": "FINANCEIRO",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 165,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 166,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "Rosangela de jesus",
        "vivencias": 1
      },
      {
        "id": 178,
        "data": "23/02/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 228,
        "data": "09/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Debora Regina de Souza",
        "vivencias": 1
      },
      {
        "id": 244,
        "data": "16/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Cosma Soares Lacerda",
        "vivencias": 1
      },
      {
        "id": 259,
        "data": "19/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 274,
        "data": "15/01/2026",
        "cargo": "OUTROS",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 376,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 383,
        "data": "27/05/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 415,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 429,
        "data": "19/06/2026",
        "cargo": "OUTROS",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 531,
        "data": "15/01/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 537,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 609,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      }
    ],
    "Moema": [
      {
        "id": 9,
        "data": "05/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Natalia Machado Candeo dos Santos",
        "vivencias": 2
      },
      {
        "id": 13,
        "data": "05/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 74,
        "data": "20/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ANA JANAINA DO NASCIMENTO",
        "vivencias": 4
      },
      {
        "id": 123,
        "data": "30/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Bruna Siqueira Silva",
        "vivencias": 2
      },
      {
        "id": 125,
        "data": "02/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Paola Francisca Garcia Vieira",
        "vivencias": 4
      },
      {
        "id": 142,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 154,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 167,
        "data": "19/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "STEFANI NEVES FERREIRA DO NASCIMENTO",
        "vivencias": 2
      },
      {
        "id": 214,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Ana Patricia de Lima",
        "vivencias": 1
      },
      {
        "id": 251,
        "data": "18/03/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Priscila Martins dos Santos",
        "vivencias": 3
      },
      {
        "id": 307,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "MARIA LUCIA CABRAL DE MELO",
        "vivencias": 7
      },
      {
        "id": 336,
        "data": "28/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Shirley Vitória Vital Barbosa",
        "vivencias": 1
      },
      {
        "id": 337,
        "data": "28/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Beatriz de Carvalho Molina",
        "vivencias": 5
      },
      {
        "id": 418,
        "data": "15/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "ANA QUERCIA DE SOUSA GOMES",
        "vivencias": 2
      },
      {
        "id": 423,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Karoline Alves de Souza",
        "vivencias": 1
      },
      {
        "id": 431,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 439,
        "data": "26/06/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 8
      },
      {
        "id": 467,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Karoline Alves de Souza",
        "vivencias": 2
      },
      {
        "id": 485,
        "data": "14/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Joseni Leite Moura",
        "vivencias": 8
      },
      {
        "id": 527,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Isabela Ferreira de Souza",
        "vivencias": 2
      },
      {
        "id": 566,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      }
    ],
    "Bonfiglioli": [
      {
        "id": 11,
        "data": "05/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Sara Caroline Gonçalves",
        "vivencias": 7
      },
      {
        "id": 21,
        "data": "15/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Agnes Cristina Tierno de Oliveira",
        "vivencias": 1
      },
      {
        "id": 220,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Lauryn Mariah Alves",
        "vivencias": 2
      },
      {
        "id": 221,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Vitória Kemely de Oliveira",
        "vivencias": 2
      },
      {
        "id": 322,
        "data": "17/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 402,
        "data": "08/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Terezinha Maria Pereira",
        "vivencias": 10
      },
      {
        "id": 444,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 445,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 463,
        "data": "06/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 8
      },
      {
        "id": 505,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Cintia Patriota",
        "vivencias": 2
      },
      {
        "id": 506,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tamires Carvalho",
        "vivencias": 1
      },
      {
        "id": 507,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mariana Victoria Melo da Silva",
        "vivencias": 2
      },
      {
        "id": 607,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 608,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Vila Sônia": [
      {
        "id": 12,
        "data": "05/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Daiana Marta Gomes de Oliveira",
        "vivencias": 2
      },
      {
        "id": 42,
        "data": "09/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Jailma Vaz dos Santos",
        "vivencias": 2
      },
      {
        "id": 56,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 58,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 119,
        "data": "29/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Juliana Teodoro Morgado",
        "vivencias": 2
      },
      {
        "id": 120,
        "data": "30/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 141,
        "data": "05/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Kimberly Fernandes",
        "vivencias": 1
      },
      {
        "id": 144,
        "data": "05/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Rayssa Gabriela Sardinha",
        "vivencias": 6
      },
      {
        "id": 168,
        "data": "19/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Taissa Luellen Delfino Rivera",
        "vivencias": 2
      },
      {
        "id": 281,
        "data": "02/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 348,
        "data": "07/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Beatriz Pereira Lopes",
        "vivencias": 1
      },
      {
        "id": 354,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Yana Cavalcante",
        "vivencias": 1
      },
      {
        "id": 481,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 538,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Stefanny Lopes Vieira",
        "vivencias": 1
      },
      {
        "id": 577,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Amanda Sales da Silva",
        "vivencias": 1
      }
    ],
    "Vila Mariana": [
      {
        "id": 14,
        "data": "05/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "CASSIA DUARTE",
        "vivencias": 2
      },
      {
        "id": 17,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 18,
        "data": "07/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 90,
        "data": "22/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "PAULA APARECIDA VIEIRA",
        "vivencias": 3
      },
      {
        "id": 121,
        "data": "30/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 157,
        "data": "10/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "CAROLINE FERREIRA GALLEGO",
        "vivencias": 1
      },
      {
        "id": 171,
        "data": "19/02/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 227,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "RAYSSA BRITTO",
        "vivencias": 1
      },
      {
        "id": 238,
        "data": "13/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "CAMILA MARTINS GENEROSA LUZ",
        "vivencias": 2
      },
      {
        "id": 252,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "JAMILE ALVES DA COSTA",
        "vivencias": 2
      },
      {
        "id": 269,
        "data": "24/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Mariana Gomes da Silva",
        "vivencias": 1
      },
      {
        "id": 294,
        "data": "09/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "FLAVIO NOVAIS DOS SANTOS",
        "vivencias": 2
      },
      {
        "id": 450,
        "data": "26/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 474,
        "data": "10/07/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "ANA LUIZA DEL CIELLO",
        "vivencias": 4
      },
      {
        "id": 585,
        "data": "15/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "STELLA LOPES CAMARGO CHAIM",
        "vivencias": 2
      },
      {
        "id": 602,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Chacara Klabin": [
      {
        "id": 15,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "UALAS GOMES DOS SANTOS",
        "vivencias": 1
      },
      {
        "id": 50,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 51,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 52,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 137,
        "data": "03/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "RENILZA SANTOS OLIVEIRA",
        "vivencias": 2
      },
      {
        "id": 163,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Melyssa  Nascimento de Souza",
        "vivencias": 2
      },
      {
        "id": 164,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "MIKAELE JAQUELINE BRASILINO",
        "vivencias": 1
      },
      {
        "id": 200,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "RENILZA SANTOS OLIVEIRA",
        "vivencias": 1
      },
      {
        "id": 245,
        "data": "17/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Francisca Micaele de Oliveira Chaves",
        "vivencias": 1
      },
      {
        "id": 264,
        "data": "23/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 299,
        "data": "13/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 301,
        "data": "13/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 303,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "SANDRA REGINA DE SOUZA RIBEIRO",
        "vivencias": 12
      },
      {
        "id": 330,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 346,
        "data": "06/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 347,
        "data": "06/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 390,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 394,
        "data": "01/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "JOSEFA MARIA DOS SANTOS SILVA",
        "vivencias": 5
      },
      {
        "id": 397,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 403,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Alberto Pereira da Silva",
        "vivencias": 1
      },
      {
        "id": 417,
        "data": "15/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 426,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 442,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 443,
        "data": "29/06/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 582,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 583,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Vila Leopoldina": [
      {
        "id": 19,
        "data": "07/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Girlene Maria de Oliveira de Santana",
        "vivencias": 2
      },
      {
        "id": 38,
        "data": "09/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "FABIANA DE JESUS COSTA",
        "vivencias": 1
      },
      {
        "id": 75,
        "data": "20/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Renata Perrusi",
        "vivencias": 1
      },
      {
        "id": 132,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 134,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Victoria Mazzio Soares",
        "vivencias": 1
      },
      {
        "id": 146,
        "data": "06/02/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 189,
        "data": "25/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 211,
        "data": "04/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Natália dos Santos Sousa Oliveira",
        "vivencias": 3
      },
      {
        "id": 217,
        "data": "06/03/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 240,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 242,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 250,
        "data": "18/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "CAROLINE CORREA NASCIMENTO SANTOS",
        "vivencias": 4
      },
      {
        "id": 273,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 275,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 282,
        "data": "06/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Rafael da Silva Granella",
        "vivencias": 1
      },
      {
        "id": 317,
        "data": "16/04/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Ariadne Einsten Xavier Gomes",
        "vivencias": 1
      },
      {
        "id": 326,
        "data": "20/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Maria Eduarda Fernandes Silva",
        "vivencias": 1
      },
      {
        "id": 338,
        "data": "29/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Michele da Silva Assunção",
        "vivencias": 3
      },
      {
        "id": 388,
        "data": "28/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Daniel Barreto",
        "vivencias": 2
      },
      {
        "id": 395,
        "data": "02/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Jasmyne Duarte Paulos da Fonseca",
        "vivencias": 2
      },
      {
        "id": 433,
        "data": "22/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Maria Antônia do Santos",
        "vivencias": 6
      },
      {
        "id": 435,
        "data": "23/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Josefa Monteiro da Silva",
        "vivencias": 1
      },
      {
        "id": 438,
        "data": "24/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Tadinha da Silva Roberto",
        "vivencias": 4
      },
      {
        "id": 441,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Tatiane dos Santos Hermógenes Cerqueira",
        "vivencias": 1
      },
      {
        "id": 453,
        "data": "30/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 466,
        "data": "07/07/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tatiane dos Santos Hermógenes Cerqueira",
        "vivencias": 1
      },
      {
        "id": 468,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Maria Gilcileia Cândido da Silva",
        "vivencias": 2
      },
      {
        "id": 472,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "Tatiane dos Santos Hermogenes Cerqueira",
        "vivencias": 1
      },
      {
        "id": 483,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "Luana Araújo da Silva",
        "vivencias": 2
      },
      {
        "id": 484,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Nayara  dos Santos Rocha",
        "vivencias": 2
      },
      {
        "id": 524,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "Osmaria Maria Gomes Paulo",
        "vivencias": 1
      },
      {
        "id": 561,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      }
    ],
    "Granja Viana": [
      {
        "id": 20,
        "data": "07/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "francisca micaelle",
        "vivencias": 6
      },
      {
        "id": 37,
        "data": "15/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Ana Luiza da Silva Medrado (Aguardando a unidade mandar o CPF correto)",
        "vivencias": 1
      },
      {
        "id": 59,
        "data": "09/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Luiz Rodrigues",
        "vivencias": 1
      },
      {
        "id": 60,
        "data": "14/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 65,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 96,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 124,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 208,
        "data": "02/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 9
      },
      {
        "id": 241,
        "data": "16/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 328,
        "data": "24/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Beatriz Sá de Jesus",
        "vivencias": 1
      },
      {
        "id": 498,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Aline Laís da silva",
        "vivencias": 6
      },
      {
        "id": 499,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "Aline Lais da Silva",
        "vivencias": 1
      },
      {
        "id": 500,
        "data": "24/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Carla Vitoria Evangelista",
        "vivencias": 2
      },
      {
        "id": 520,
        "data": "30/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 545,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 613,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Vivência",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 614,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Saúde": [
      {
        "id": 27,
        "data": "07/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 41,
        "data": "09/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 89,
        "data": "22/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "CRISTIANE RODRIGUES PAPA",
        "vivencias": 2
      },
      {
        "id": 122,
        "data": "30/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 138,
        "data": "03/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Thainá Moreira de Assunção",
        "vivencias": 2
      },
      {
        "id": 212,
        "data": "04/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 297,
        "data": "09/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Jessica Maria catharino Monteiro",
        "vivencias": 1
      },
      {
        "id": 321,
        "data": "16/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "CAIO CESAR ONOFRE",
        "vivencias": 4
      },
      {
        "id": 339,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 341,
        "data": "30/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "BÁRBARA CRISTINA VIEIRA DOS SANTOS",
        "vivencias": 1
      },
      {
        "id": 345,
        "data": "05/05/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "TATIANE MARQUES AMARAL BENASSI",
        "vivencias": 2
      },
      {
        "id": 387,
        "data": "15/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "NAYARA ASHLEY DANTES RIBEIRO DA LUZ",
        "vivencias": 2
      },
      {
        "id": 459,
        "data": "02/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "NAYARA ASHLEY DANTES RIBEIRO DA LUZ",
        "vivencias": 1
      },
      {
        "id": 492,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "VIVIANE NOVAES DOS SANTOS",
        "vivencias": 2
      },
      {
        "id": 564,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "MARCELA NERY DOS SANTOS",
        "vivencias": 2
      },
      {
        "id": 565,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "SUZETE MARIA MARQUES SILVA DOS SANTOS",
        "vivencias": 4
      },
      {
        "id": 584,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "SIMONE CRISTINA DE SOUZA",
        "vivencias": 2
      },
      {
        "id": 599,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "MARIA APARECIDA BRANDAO DA SILVA",
        "vivencias": 1
      },
      {
        "id": 615,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Vivência",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 616,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "THAYSSA VITORIA DOS SANTOS LÚCIO",
        "vivencias": 1
      }
    ],
    "Ipiranga": [
      {
        "id": 28,
        "data": "08/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Luciene Cordeiro do Nascimento",
        "vivencias": 2
      },
      {
        "id": 29,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Silvia Costa Molina",
        "vivencias": 1
      },
      {
        "id": 34,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 71,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Ana Noely Silva Valdo",
        "vivencias": 1
      },
      {
        "id": 73,
        "data": "19/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 76,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Manuella de Mello Puga",
        "vivencias": 1
      },
      {
        "id": 92,
        "data": "22/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 136,
        "data": "02/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "AMANDA MOTA DA SILVA",
        "vivencias": 7
      },
      {
        "id": 156,
        "data": "10/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 181,
        "data": "24/02/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Sabrina frança Moreira",
        "vivencias": 1
      },
      {
        "id": 205,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 272,
        "data": "25/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Debora de Mello Teixeira",
        "vivencias": 1
      },
      {
        "id": 310,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Tatiana de Sousa Omena",
        "vivencias": 3
      },
      {
        "id": 311,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 365,
        "data": "14/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Flavia Alessandra Marques De Gouveia",
        "vivencias": 1
      },
      {
        "id": 366,
        "data": "14/05/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 368,
        "data": "15/05/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "SANDRA BATISTA AMARAL",
        "vivencias": 4
      },
      {
        "id": 380,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "MARIA EDUARDA SOUSA ARRAES",
        "vivencias": 1
      },
      {
        "id": 381,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "ANNA CAROLINA SAVIOLI",
        "vivencias": 1
      },
      {
        "id": 407,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Leila Ribeiro Holanda",
        "vivencias": 4
      },
      {
        "id": 412,
        "data": "15/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Amanda da Rocha Moreschi",
        "vivencias": 1
      },
      {
        "id": 427,
        "data": "17/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 8
      },
      {
        "id": 455,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 456,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 457,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 476,
        "data": "13/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 521,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Natalia da Costa Nascimento",
        "vivencias": 3
      },
      {
        "id": 539,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 543,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Ana Paula Teixeira dos Santos",
        "vivencias": 1
      },
      {
        "id": 544,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Maria Vitória Selmes de Oliveira Martin",
        "vivencias": 2
      },
      {
        "id": 563,
        "data": "15/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "GIOVANNA DE AZEVEDO BERNARDES",
        "vivencias": 7
      },
      {
        "id": 570,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 579,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "KARINA MESQUITA MENEZES",
        "vivencias": 2
      },
      {
        "id": 617,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 9,
        "status": "Aprovado",
        "colaborador": "Lucimara Santos Conceição",
        "vivencias": 1
      },
      {
        "id": 618,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "Janaina Quintela Nickel",
        "vivencias": 1
      }
    ],
    "Vila Gumercindo": [
      {
        "id": 31,
        "data": "08/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 43,
        "data": "12/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 64,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 70,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 104,
        "data": "26/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 135,
        "data": "02/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "PAMELA SANTANA AMERICO",
        "vivencias": 6
      },
      {
        "id": 155,
        "data": "10/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 174,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 194,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Adrielli da Silva Barreto",
        "vivencias": 1
      },
      {
        "id": 195,
        "data": "27/02/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 270,
        "data": "24/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "PAMELA SANTANA AMERICO",
        "vivencias": 2
      },
      {
        "id": 280,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Hellen Vitória Lopes Januario",
        "vivencias": 1
      },
      {
        "id": 320,
        "data": "16/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "PAMELA SANTANA AMERICO",
        "vivencias": 1
      },
      {
        "id": 361,
        "data": "13/05/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Andrea Carneiro dos Santos",
        "vivencias": 3
      },
      {
        "id": 362,
        "data": "13/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 421,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "THAINÁ MOREIRA DE ASSUNÇÃO",
        "vivencias": 2
      },
      {
        "id": 424,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "Aretuza Santos",
        "vivencias": 1
      },
      {
        "id": 434,
        "data": "22/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Cinthia Bernardo de Carvalho",
        "vivencias": 1
      },
      {
        "id": 469,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Dandara Rodrigues Moreira",
        "vivencias": 1
      },
      {
        "id": 516,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mariana Cristina Spetanieri da Silva",
        "vivencias": 3
      },
      {
        "id": 519,
        "data": "30/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 526,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "Giselle Oliveira",
        "vivencias": 3
      },
      {
        "id": 569,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "Aretuza Santos",
        "vivencias": 1
      }
    ],
    "Aclimação": [
      {
        "id": 32,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 33,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 83,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 209,
        "data": "03/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "PAULA THAIANA DE JESUS SANTOS",
        "vivencias": 6
      },
      {
        "id": 224,
        "data": "09/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "JORZIANA DOS SANTOS DA SILVA BRANDAO",
        "vivencias": 5
      },
      {
        "id": 243,
        "data": "09/06/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 249,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Kenia Ferraz",
        "vivencias": 4
      },
      {
        "id": 290,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "JORZIANA DOS SANTOS DA SILVA BRANDÃO",
        "vivencias": 1
      },
      {
        "id": 296,
        "data": "09/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "BRUNNO ARAUJO DOS SANTOS",
        "vivencias": 2
      },
      {
        "id": 304,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "PAULA THAIANA DE JESUS SANTOS",
        "vivencias": 1
      },
      {
        "id": 305,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "PAULA THAIANA DE JESUS SANTOS",
        "vivencias": 1
      },
      {
        "id": 410,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 411,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 413,
        "data": "11/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 464,
        "data": "07/07/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "WILSON FRANCISCO DE OLIVEIRA",
        "vivencias": 1
      },
      {
        "id": 540,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "LETICIA SOUZA DA SILVA",
        "vivencias": 1
      },
      {
        "id": 560,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Luzmaia Arielli dos Santos Oliveira",
        "vivencias": 1
      },
      {
        "id": 621,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "SABRINA SANTOS",
        "vivencias": 1
      }
    ],
    "Paraiso": [
      {
        "id": 35,
        "data": "08/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 103,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Giselly Karla Cosme de Andrade",
        "vivencias": 1
      },
      {
        "id": 113,
        "data": "28/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 143,
        "data": "05/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 149,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 152,
        "data": "09/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 172,
        "data": "20/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 177,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 179,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 196,
        "data": "27/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Giseli Aparecida",
        "vivencias": 2
      },
      {
        "id": 197,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 198,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 229,
        "data": "10/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Silvani Bernardes Santos",
        "vivencias": 3
      },
      {
        "id": 233,
        "data": "11/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 246,
        "data": "17/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 255,
        "data": "18/03/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Robson Luiz da Silva",
        "vivencias": 1
      },
      {
        "id": 256,
        "data": "18/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giselly Karla Cosme de Andrade",
        "vivencias": 4
      },
      {
        "id": 266,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Luana",
        "vivencias": 1
      },
      {
        "id": 267,
        "data": "23/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 289,
        "data": "07/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Mariana",
        "vivencias": 1
      },
      {
        "id": 295,
        "data": "09/04/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 319,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 353,
        "data": "11/05/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "MARIA DO CARMO FERREIRA PALMEIRA",
        "vivencias": 11
      },
      {
        "id": 367,
        "data": "15/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Wilton Vicente",
        "vivencias": 1
      },
      {
        "id": 375,
        "data": "25/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Wilton Vicente",
        "vivencias": 2
      },
      {
        "id": 425,
        "data": "16/06/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "EDUARDO PEREIRA DE SOUZA",
        "vivencias": 4
      },
      {
        "id": 428,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "EDUARDO PEREIRA DE SOUZA",
        "vivencias": 1
      },
      {
        "id": 495,
        "data": "21/07/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Luanna Inacio",
        "vivencias": 1
      },
      {
        "id": 528,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Rose",
        "vivencias": 3
      },
      {
        "id": 529,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 5
      },
      {
        "id": 541,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 567,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 568,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Pamela Gomes De Sá",
        "vivencias": 2
      },
      {
        "id": 571,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Estefani Oliveira Pereira",
        "vivencias": 2
      }
    ],
    "Guarulhos": [
      {
        "id": 47,
        "data": "12/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "RAFAEL VITOR DE SOUZA CORREA",
        "vivencias": 2
      }
    ],
    "Pinheiros": [
      {
        "id": 48,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 49,
        "data": "12/01/2025",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Thais Silva dos Santos",
        "vivencias": 1
      },
      {
        "id": 97,
        "data": "23/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 101,
        "data": "26/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Sandra Alves dos Santos",
        "vivencias": 2
      },
      {
        "id": 109,
        "data": "27/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Elis costa de Oliveira",
        "vivencias": 4
      },
      {
        "id": 110,
        "data": "27/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maira lucia lucciardi",
        "vivencias": 1
      },
      {
        "id": 145,
        "data": "06/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Rosemeire de Jesus de Araújo",
        "vivencias": 1
      },
      {
        "id": 204,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Ariane Feitosa de Oliveria",
        "vivencias": 2
      },
      {
        "id": 210,
        "data": "03/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Ana Paula  de Jesus Carneiro",
        "vivencias": 1
      },
      {
        "id": 234,
        "data": "11/03/2025",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Ana Carolina pedroso de Oliveira",
        "vivencias": 1
      },
      {
        "id": 237,
        "data": "12/03/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 247,
        "data": "17/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Samia Rochely Cruz Lima",
        "vivencias": 3
      },
      {
        "id": 309,
        "data": "14/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "EDMAR DE MELO SILVA",
        "vivencias": 4
      },
      {
        "id": 325,
        "data": "20/04/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Raquel Gonçalves da Silva de Jesus",
        "vivencias": 1
      },
      {
        "id": 416,
        "data": "15/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Camila Ferreira Azevedo e Silva",
        "vivencias": 2
      },
      {
        "id": 514,
        "data": "29/07/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Wendevania Tavares da Silva",
        "vivencias": 1
      },
      {
        "id": 515,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 530,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "Camila Aragão da Silva Ferreira",
        "vivencias": 3
      },
      {
        "id": 572,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 589,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 590,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 598,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Briefing",
        "colaborador": "Bianca Soares Santos",
        "vivencias": 2
      }
    ],
    "Tatuapé": [
      {
        "id": 54,
        "data": "13/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Vanesia Ferreira da Silva",
        "vivencias": 1
      },
      {
        "id": 283,
        "data": "06/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 542,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Igor Geneci Cordeiro de Souza",
        "vivencias": 2
      },
      {
        "id": 610,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "Sérgio André Lira Rodrigues Junior",
        "vivencias": 1
      }
    ],
    "Indianópolis": [
      {
        "id": 55,
        "data": "13/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 202,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Aline Santos Rodrigues",
        "vivencias": 1
      },
      {
        "id": 203,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Aline Santos Rodrigues",
        "vivencias": 1
      },
      {
        "id": 340,
        "data": "29/04/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 408,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 430,
        "data": "19/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Jaiane Moura e Silva",
        "vivencias": 1
      },
      {
        "id": 432,
        "data": "22/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 475,
        "data": "08/07/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 555,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 591,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Isabela Araújo Azevedo",
        "vivencias": 1
      },
      {
        "id": 597,
        "data": "15/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Alessandra Soares Morais",
        "vivencias": 2
      }
    ],
    "Osasco": [
      {
        "id": 61,
        "data": "14/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Marcos Falcone",
        "vivencias": 2
      },
      {
        "id": 85,
        "data": "22/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Renata Ferreira de Queiroz Batistela",
        "vivencias": 1
      },
      {
        "id": 95,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Amanda Dias Araujo Correia",
        "vivencias": 2
      },
      {
        "id": 130,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 131,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Andreia Cardoso de Godoy",
        "vivencias": 2
      },
      {
        "id": 173,
        "data": "20/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Thais Correia Alfredo",
        "vivencias": 2
      },
      {
        "id": 287,
        "data": "07/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 306,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Cintia Nara Vieira da Silva",
        "vivencias": 1
      },
      {
        "id": 324,
        "data": "17/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "SIMONE TENÓRIO DOS SANTOS",
        "vivencias": 12
      },
      {
        "id": 342,
        "data": "04/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Maria Selma Luciene Benedito",
        "vivencias": 2
      },
      {
        "id": 343,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Cintia Angela da Silva Oliveira",
        "vivencias": 3
      },
      {
        "id": 355,
        "data": "11/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 399,
        "data": "08/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Simone Tenorio dos Santos",
        "vivencias": 3
      },
      {
        "id": 580,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Amanda Fernandes Santana",
        "vivencias": 1
      },
      {
        "id": 581,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Portal do Morumbi": [
      {
        "id": 62,
        "data": "14/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 68,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 69,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 91,
        "data": "22/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 118,
        "data": "29/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 140,
        "data": "05/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 148,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 192,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 215,
        "data": "05/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Larissa Alves Anselmo",
        "vivencias": 1
      },
      {
        "id": 216,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Jamilly Socorro Noia dos Santos",
        "vivencias": 1
      },
      {
        "id": 260,
        "data": "20/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Adriana Barros Ferreira",
        "vivencias": 2
      },
      {
        "id": 291,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 292,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 331,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 332,
        "data": "27/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 333,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 356,
        "data": "11/05/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Elaine Cristina Mendes",
        "vivencias": 1
      },
      {
        "id": 400,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 401,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Adriana Barros Ferreira",
        "vivencias": 2
      },
      {
        "id": 501,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "EDCILVIO DIAS DA SILVA",
        "vivencias": 1
      },
      {
        "id": 508,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mayani Barbosa Cardeal",
        "vivencias": 1
      },
      {
        "id": 509,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Elaine Cristina Mendes",
        "vivencias": 3
      },
      {
        "id": 576,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Welligton",
        "vivencias": 1
      },
      {
        "id": 594,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 595,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Em Aberto",
        "colaborador": "Lucival",
        "vivencias": 3
      }
    ],
    "Mooca": [
      {
        "id": 66,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ERIKA ALUANA PADOVAM ALVES",
        "vivencias": 1
      },
      {
        "id": 67,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ELIZELMA DIAS DE LIMA",
        "vivencias": 1
      },
      {
        "id": 82,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Juliana Lopes Ferreira",
        "vivencias": 2
      },
      {
        "id": 111,
        "data": "27/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ANA CAROLINA COELHO RUFINI (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 151,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 159,
        "data": "11/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Esther dias frota da silva",
        "vivencias": 1
      },
      {
        "id": 201,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 206,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "STEPHANY APARECIDA CONRADO",
        "vivencias": 1
      },
      {
        "id": 207,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "KESIA CRISTINA FERRTE TEIXEIRA",
        "vivencias": 7
      },
      {
        "id": 218,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "RENATA DE SOUZA SANTOS REIS",
        "vivencias": 1
      },
      {
        "id": 226,
        "data": "09/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Priscila Turra Dias (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 231,
        "data": "10/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "RENATA  DE SOUZA SANTOS REIS",
        "vivencias": 1
      },
      {
        "id": 232,
        "data": "11/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Fabiana Duarte de Moura",
        "vivencias": 2
      },
      {
        "id": 248,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Isabelle Naoimy da Silva Cuenca",
        "vivencias": 1
      },
      {
        "id": 318,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Cindy dos Santos Anselmo",
        "vivencias": 1
      },
      {
        "id": 327,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "Francisca Meirislene T. Rodrigues",
        "vivencias": 1
      },
      {
        "id": 374,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "SIMONE MENEZES GODOI",
        "vivencias": 1
      },
      {
        "id": 460,
        "data": "03/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Vanessa sperança morgado",
        "vivencias": 2
      },
      {
        "id": 611,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Alto da Boa Vista": [
      {
        "id": 78,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 213,
        "data": "04/03/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 262,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "Kerolyn Thauane Araujo Pereira Ossani",
        "vivencias": 1
      },
      {
        "id": 279,
        "data": "15/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 288,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "PETERSON VENANCIO SANTANA DA SILVA",
        "vivencias": 4
      },
      {
        "id": 314,
        "data": "15/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Adrielly Gomes da Silva",
        "vivencias": 1
      },
      {
        "id": 351,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Thaina Cristina Rodrigues dos anjos",
        "vivencias": 1
      },
      {
        "id": 352,
        "data": "08/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Lorena de Souza Fernandes",
        "vivencias": 1
      },
      {
        "id": 364,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 384,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 436,
        "data": "23/06/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Silvia Luiza Valeriano sa Silva",
        "vivencias": 3
      },
      {
        "id": 503,
        "data": "27/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tamires Silva de Miranda",
        "vivencias": 2
      },
      {
        "id": 532,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 533,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vitória Maria Barbosa de Almeida",
        "vivencias": 1
      },
      {
        "id": 600,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Sabrina Alves de Aragão",
        "vivencias": 2
      },
      {
        "id": 606,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 622,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Vivência",
        "colaborador": "Edilene Alves dos Santos",
        "vivencias": 1
      }
    ],
    "Marajoara": [
      {
        "id": 79,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Lorena de Souza Fernandes",
        "vivencias": 1
      },
      {
        "id": 80,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maria Mônica da Silva Amaral",
        "vivencias": 3
      },
      {
        "id": 115,
        "data": "28/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Priscilla de Melo Souza da Silva",
        "vivencias": 1
      },
      {
        "id": 116,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Kelly Cristina Ferreira da silva",
        "vivencias": 1
      },
      {
        "id": 139,
        "data": "03/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "KELLY CRISTINA FERREIRA DA SILVA",
        "vivencias": 10
      },
      {
        "id": 182,
        "data": "24/02/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Jessica Leal de Oliveira",
        "vivencias": 1
      },
      {
        "id": 261,
        "data": "20/03/2026",
        "cargo": "COORD BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Vanessa Chabi de Jesus",
        "vivencias": 2
      },
      {
        "id": 391,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Cristhyan Evanny Gomes de Assis",
        "vivencias": 1
      },
      {
        "id": 449,
        "data": "29/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Andressa Aparecida de Jesus Gomes",
        "vivencias": 5
      },
      {
        "id": 490,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Juliana Carvalho Sousa Faustino",
        "vivencias": 2
      },
      {
        "id": 547,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 548,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 554,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Laura Maria Silva de Oliveira",
        "vivencias": 1
      },
      {
        "id": 562,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "STEPHANY FERREIRA DE ALMEIDA",
        "vivencias": 2
      },
      {
        "id": 586,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Vila Madalena": [
      {
        "id": 81,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "VIVIANE BARBOSA VIEIRA",
        "vivencias": 1
      },
      {
        "id": 98,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ANA PAULA DOS SANTOS DELPRAT NOVELLI",
        "vivencias": 3
      },
      {
        "id": 99,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "DALVA DE SOUZA TINI",
        "vivencias": 2
      },
      {
        "id": 100,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 160,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 161,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 175,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 176,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 265,
        "data": "23/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 300,
        "data": "13/04/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Aline Guizi Rodrigues Macedo",
        "vivencias": 1
      },
      {
        "id": 329,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 360,
        "data": "13/05/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 371,
        "data": "18/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 488,
        "data": "15/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "PIETRA VICTORIA YABUTA DA SILVA",
        "vivencias": 1
      },
      {
        "id": 517,
        "data": "15/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 525,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 623,
        "data": "15/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Perdizes": [
      {
        "id": 84,
        "data": "22/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Luara Marques Marcelino",
        "vivencias": 3
      },
      {
        "id": 180,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Em Aberto",
        "colaborador": "Gabriela Zeigel Mann",
        "vivencias": 1
      },
      {
        "id": 222,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 446,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 447,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 4
      },
      {
        "id": 448,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 5
      },
      {
        "id": 487,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 494,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 550,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 587,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "Thaisa dos santos silva",
        "vivencias": 1
      },
      {
        "id": 588,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Thalita Silva Carvalho",
        "vivencias": 1
      },
      {
        "id": 592,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Julia Cristina dos santos camargo",
        "vivencias": 1
      },
      {
        "id": 593,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Brunna ribeiro da silva",
        "vivencias": 1
      },
      {
        "id": 619,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "Rafaela da Silva Pereira",
        "vivencias": 1
      },
      {
        "id": 620,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Vivência",
        "colaborador": "Anna Beatriz Sá de Jesus",
        "vivencias": 1
      }
    ],
    "Brooklin": [
      {
        "id": 86,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "Melissa Alves Ribeiro",
        "vivencias": 1
      },
      {
        "id": 379,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 419,
        "data": "15/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 461,
        "data": "03/07/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 480,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 486,
        "data": "15/07/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "JULIA EMILLY SANTOS SILVA",
        "vivencias": 3
      },
      {
        "id": 522,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "JULIA EMILI",
        "vivencias": 2
      },
      {
        "id": 523,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "BRENDA LOHANI GOMES CLEMENTE",
        "vivencias": 1
      },
      {
        "id": 596,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 605,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "Marcela da Silva Melo",
        "vivencias": 2
      }
    ],
    "Panamby": [
      {
        "id": 87,
        "data": "22/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Aline Benevides (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 128,
        "data": "15/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Em Aberto",
        "colaborador": "AUREA ANDRADE TEIXEIRA VALERIO",
        "vivencias": 5
      },
      {
        "id": 129,
        "data": "02/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "HENRIQUE PEREIRA DE SOUZA",
        "vivencias": 3
      },
      {
        "id": 150,
        "data": "09/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 253,
        "data": "18/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giovanna Lyssa (prof. extracurricular não se envia entrev. de desligamento.)",
        "vivencias": 1
      },
      {
        "id": 271,
        "data": "25/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Suely Valdeci santos da silva",
        "vivencias": 1
      },
      {
        "id": 277,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Isadora Monteiro da Silva",
        "vivencias": 1
      },
      {
        "id": 285,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "Larissa Oliveira da Silva",
        "vivencias": 1
      },
      {
        "id": 302,
        "data": "13/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Nayara Rodrigues de Almeida",
        "vivencias": 3
      },
      {
        "id": 389,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Bianca Amorim Silva",
        "vivencias": 1
      },
      {
        "id": 404,
        "data": "09/06/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 405,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 420,
        "data": "16/06/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "FADNER HENRIQUE SILVA DE OLIVEIRA",
        "vivencias": 3
      },
      {
        "id": 462,
        "data": "06/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Isabel Goncalves Da Silva",
        "vivencias": 2
      },
      {
        "id": 465,
        "data": "07/07/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Priscila Viana da Silva",
        "vivencias": 1
      },
      {
        "id": 471,
        "data": "15/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Em Aberto",
        "colaborador": "Priscila Viana da Silva",
        "vivencias": 1
      },
      {
        "id": 518,
        "data": "30/07/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Suellen Cristina de Angelo dos Santos",
        "vivencias": 4
      },
      {
        "id": 578,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Ana Paula Limeira de Queiroz Carvalho",
        "vivencias": 2
      }
    ],
    "Real Parque": [
      {
        "id": 112,
        "data": "27/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Jeane Pereira da Silva",
        "vivencias": 12
      },
      {
        "id": 254,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 284,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 286,
        "data": "06/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Stefany Tomaz Costa",
        "vivencias": 1
      },
      {
        "id": 298,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Viviane Lacerda Lopes",
        "vivencias": 3
      },
      {
        "id": 308,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 312,
        "data": "15/01/2026",
        "cargo": "OUTROS",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "Thamara da Silva Brito",
        "vivencias": 1
      },
      {
        "id": 313,
        "data": "15/04/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 315,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 349,
        "data": "07/05/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 358,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 359,
        "data": "15/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Julia Oliveira Camargo",
        "vivencias": 1
      },
      {
        "id": 382,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Anny Caroline Costa Catrso",
        "vivencias": 1
      },
      {
        "id": 385,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Em Aberto",
        "colaborador": "Anny Caroline Costa Castro",
        "vivencias": 1
      },
      {
        "id": 386,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 409,
        "data": "10/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Nathalia",
        "vivencias": 2
      },
      {
        "id": 414,
        "data": "12/06/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Milena",
        "vivencias": 2
      },
      {
        "id": 458,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Priscila",
        "vivencias": 1
      },
      {
        "id": 489,
        "data": "16/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Marcia Aparecida Modesto Coelho",
        "vivencias": 5
      },
      {
        "id": 573,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "MARIA TASSIANA AVELINO DOS SANTOS",
        "vivencias": 1
      },
      {
        "id": 612,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 8,
        "status": "Vivência",
        "colaborador": "",
        "vivencias": 1
      }
    ],
    "Lapa": [
      {
        "id": 158,
        "data": "11/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 184,
        "data": "24/02/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Rosana Silva",
        "vivencias": 1
      },
      {
        "id": 185,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Danielle Fernandes da Silva",
        "vivencias": 1
      },
      {
        "id": 186,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Liliane Aaprecida de Paula",
        "vivencias": 1
      },
      {
        "id": 187,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Elidia Silva Braga",
        "vivencias": 2
      },
      {
        "id": 199,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Stephanie Ferreira de Paula",
        "vivencias": 2
      },
      {
        "id": 258,
        "data": "19/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 3
      },
      {
        "id": 369,
        "data": "15/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 377,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Carla Tosi de Oliveira",
        "vivencias": 2
      },
      {
        "id": 378,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 393,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      },
      {
        "id": 437,
        "data": "23/06/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Amanda Santos da Conceição",
        "vivencias": 1
      },
      {
        "id": 473,
        "data": "10/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Elenice dos Santos Silva",
        "vivencias": 2
      },
      {
        "id": 511,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 512,
        "data": "15/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 1
      },
      {
        "id": 556,
        "data": "15/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "",
        "vivencias": 2
      }
    ]
  }
}

    // Gerenciador Seguro de Acesso a Dados (RBAC & LGPD)
    const DataManager = {
        getAuthorizedData(session) {
            if (!session || !session.role) {
                return { unitRecords: {}, unitFunnels: {} };
            }
            if (session.role === 'MASTER') {
                return _PRIVATE_RAW_DATA;
            }
            if (session.role === 'UNIT' && session.unit) {
                const u = session.unit;
                return {
                    unitRecords: {
                        [u]: (_PRIVATE_RAW_DATA.unitRecords && _PRIVATE_RAW_DATA.unitRecords[u]) 
                            ? _PRIVATE_RAW_DATA.unitRecords[u].map(item => Object.assign({}, item)) 
                            : []
                    },
                    unitFunnels: {
                        [u]: (_PRIVATE_RAW_DATA.unitFunnels && _PRIVATE_RAW_DATA.unitFunnels[u]) 
                            ? Object.assign({}, _PRIVATE_RAW_DATA.unitFunnels[u]) 
                            : {}
                    }
                };
            }
            return { unitRecords: {}, unitFunnels: {} };
        }
    };

    window.DataManager = DataManager;

    // Getter dinâmico inteligente em ALL_UNITS_DATA para compatibilidade segura
    Object.defineProperty(window, 'ALL_UNITS_DATA', {
        get: function() {
            const session = window.AuthService ? window.AuthService.getSession() : null;
            return DataManager.getAuthorizedData(session);
        },
        set: function(newVal) {
            if (newVal && newVal.unitRecords) {
                const session = window.AuthService ? window.AuthService.getSession() : null;
                if (session && session.role === 'MASTER') {
                    _PRIVATE_RAW_DATA.unitRecords = newVal.unitRecords;
                    _PRIVATE_RAW_DATA.unitFunnels = newVal.unitFunnels;
                } else if (session && session.role === 'UNIT' && session.unit) {
                    const u = session.unit;
                    if (newVal.unitRecords[u]) {
                        _PRIVATE_RAW_DATA.unitRecords[u] = newVal.unitRecords[u];
                    }
                    if (newVal.unitFunnels && newVal.unitFunnels[u]) {
                        _PRIVATE_RAW_DATA.unitFunnels[u] = newVal.unitFunnels[u];
                    }
                }
            }
        },
        configurable: true
    });

})(window);
