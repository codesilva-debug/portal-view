(function(window) {
    'use strict';

    // Base interna protegida em closure privada (inacessível pelo window global / F12)
    const _PRIVATE_RAW_DATA = {
  "unitFunnels": {
    "Aclimação": {
      "vivencias": 28,
      "aprovados": 12,
      "reprovados": 2,
      "desistentes": 2,
      "naoCompareceu": 11,
      "desistInteg": 0,
      "reprovInteg": 1,
      "totalVagas": 14,
      "vagasAbertas": 2,
      "enviados": 28
    },
    "Alto da Boa Vista": {
      "vivencias": 21,
      "aprovados": 9,
      "reprovados": 3,
      "desistentes": 1,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 10,
      "vagasAbertas": 1,
      "enviados": 21
    },
    "Analia Franco": {
      "vivencias": 30,
      "aprovados": 15,
      "reprovados": 6,
      "desistentes": 2,
      "naoCompareceu": 4,
      "desistInteg": 3,
      "reprovInteg": 0,
      "totalVagas": 15,
      "vagasAbertas": 0,
      "enviados": 30
    },
    "Bonfiglioli": {
      "vivencias": 44,
      "aprovados": 13,
      "reprovados": 11,
      "desistentes": 6,
      "naoCompareceu": 14,
      "desistInteg": 0,
      "reprovInteg": 1,
      "totalVagas": 13,
      "vagasAbertas": 0,
      "enviados": 44
    },
    "Brooklin": {
      "vivencias": 17,
      "aprovados": 8,
      "reprovados": 3,
      "desistentes": 3,
      "naoCompareceu": 3,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 9,
      "vagasAbertas": 1,
      "enviados": 17
    },
    "Campinas": {
      "vivencias": 2,
      "aprovados": 2,
      "reprovados": 1,
      "desistentes": 0,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 2,
      "vagasAbertas": 0,
      "enviados": 2
    },
    "Campo Belo": {
      "vivencias": 54,
      "aprovados": 17,
      "reprovados": 9,
      "desistentes": 0,
      "naoCompareceu": 13,
      "desistInteg": 8,
      "reprovInteg": 4,
      "totalVagas": 18,
      "vagasAbertas": 1,
      "enviados": 54
    },
    "Chacara Klabin": {
      "vivencias": 45,
      "aprovados": 20,
      "reprovados": 4,
      "desistentes": 3,
      "naoCompareceu": 16,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 21,
      "vagasAbertas": 1,
      "enviados": 45
    },
    "Granja Viana": {
      "vivencias": 35,
      "aprovados": 12,
      "reprovados": 1,
      "desistentes": 5,
      "naoCompareceu": 14,
      "desistInteg": 3,
      "reprovInteg": 0,
      "totalVagas": 13,
      "vagasAbertas": 1,
      "enviados": 35
    },
    "Guarulhos": {
      "vivencias": 2,
      "aprovados": 1,
      "reprovados": 0,
      "desistentes": 1,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 1,
      "vagasAbertas": 0,
      "enviados": 2
    },
    "Higienópolis": {
      "vivencias": 48,
      "aprovados": 20,
      "reprovados": 5,
      "desistentes": 5,
      "naoCompareceu": 14,
      "desistInteg": 2,
      "reprovInteg": 0,
      "totalVagas": 20,
      "vagasAbertas": 0,
      "enviados": 48
    },
    "Indianópolis": {
      "vivencias": 13,
      "aprovados": 10,
      "reprovados": 0,
      "desistentes": 0,
      "naoCompareceu": 2,
      "desistInteg": 0,
      "reprovInteg": 1,
      "totalVagas": 10,
      "vagasAbertas": 0,
      "enviados": 13
    },
    "Ipiranga": {
      "vivencias": 67,
      "aprovados": 29,
      "reprovados": 7,
      "desistentes": 4,
      "naoCompareceu": 22,
      "desistInteg": 3,
      "reprovInteg": 1,
      "totalVagas": 30,
      "vagasAbertas": 1,
      "enviados": 67
    },
    "Jardins": {
      "vivencias": 0,
      "aprovados": 0,
      "reprovados": 0,
      "desistentes": 0,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 0,
      "vagasAbertas": 0,
      "enviados": 0
    },
    "Lapa": {
      "vivencias": 25,
      "aprovados": 16,
      "reprovados": 1,
      "desistentes": 0,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 2,
      "totalVagas": 17,
      "vagasAbertas": 1,
      "enviados": 25
    },
    "Marajoara": {
      "vivencias": 35,
      "aprovados": 14,
      "reprovados": 4,
      "desistentes": 2,
      "naoCompareceu": 9,
      "desistInteg": 4,
      "reprovInteg": 1,
      "totalVagas": 14,
      "vagasAbertas": 0,
      "enviados": 35
    },
    "Moema": {
      "vivencias": 58,
      "aprovados": 17,
      "reprovados": 8,
      "desistentes": 7,
      "naoCompareceu": 15,
      "desistInteg": 5,
      "reprovInteg": 3,
      "totalVagas": 18,
      "vagasAbertas": 1,
      "enviados": 58
    },
    "Mooca": {
      "vivencias": 27,
      "aprovados": 16,
      "reprovados": 3,
      "desistentes": 3,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 16,
      "vagasAbertas": 0,
      "enviados": 27
    },
    "Osasco": {
      "vivencias": 33,
      "aprovados": 14,
      "reprovados": 4,
      "desistentes": 7,
      "naoCompareceu": 7,
      "desistInteg": 1,
      "reprovInteg": 0,
      "totalVagas": 14,
      "vagasAbertas": 0,
      "enviados": 33
    },
    "Panamby": {
      "vivencias": 27,
      "aprovados": 14,
      "reprovados": 5,
      "desistentes": 5,
      "naoCompareceu": 4,
      "desistInteg": 1,
      "reprovInteg": 0,
      "totalVagas": 14,
      "vagasAbertas": 0,
      "enviados": 27
    },
    "Paraiso": {
      "vivencias": 63,
      "aprovados": 28,
      "reprovados": 6,
      "desistentes": 6,
      "naoCompareceu": 18,
      "desistInteg": 1,
      "reprovInteg": 3,
      "totalVagas": 29,
      "vagasAbertas": 1,
      "enviados": 63
    },
    "Perdizes": {
      "vivencias": 23,
      "aprovados": 11,
      "reprovados": 4,
      "desistentes": 2,
      "naoCompareceu": 5,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 12,
      "vagasAbertas": 1,
      "enviados": 23
    },
    "Pinheiros": {
      "vivencias": 38,
      "aprovados": 18,
      "reprovados": 3,
      "desistentes": 7,
      "naoCompareceu": 6,
      "desistInteg": 2,
      "reprovInteg": 0,
      "totalVagas": 19,
      "vagasAbertas": 1,
      "enviados": 38
    },
    "Piracicaba": {
      "vivencias": 0,
      "aprovados": 0,
      "reprovados": 0,
      "desistentes": 0,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 0,
      "vagasAbertas": 0,
      "enviados": 0
    },
    "Portal do Morumbi": {
      "vivencias": 29,
      "aprovados": 19,
      "reprovados": 4,
      "desistentes": 1,
      "naoCompareceu": 4,
      "desistInteg": 1,
      "reprovInteg": 0,
      "totalVagas": 19,
      "vagasAbertas": 0,
      "enviados": 29
    },
    "Real Parque": {
      "vivencias": 38,
      "aprovados": 14,
      "reprovados": 6,
      "desistentes": 1,
      "naoCompareceu": 15,
      "desistInteg": 3,
      "reprovInteg": 0,
      "totalVagas": 14,
      "vagasAbertas": 0,
      "enviados": 38
    },
    "Santo Andre": {
      "vivencias": 43,
      "aprovados": 17,
      "reprovados": 7,
      "desistentes": 6,
      "naoCompareceu": 9,
      "desistInteg": 2,
      "reprovInteg": 1,
      "totalVagas": 18,
      "vagasAbertas": 1,
      "enviados": 43
    },
    "Saúde": {
      "vivencias": 34,
      "aprovados": 18,
      "reprovados": 6,
      "desistentes": 3,
      "naoCompareceu": 6,
      "desistInteg": 2,
      "reprovInteg": 0,
      "totalVagas": 20,
      "vagasAbertas": 2,
      "enviados": 34
    },
    "São Caetano": {
      "vivencias": 34,
      "aprovados": 19,
      "reprovados": 7,
      "desistentes": 3,
      "naoCompareceu": 3,
      "desistInteg": 0,
      "reprovInteg": 1,
      "totalVagas": 21,
      "vagasAbertas": 2,
      "enviados": 34
    },
    "Tatuapé": {
      "vivencias": 7,
      "aprovados": 4,
      "reprovados": 2,
      "desistentes": 0,
      "naoCompareceu": 0,
      "desistInteg": 0,
      "reprovInteg": 1,
      "totalVagas": 4,
      "vagasAbertas": 0,
      "enviados": 7
    },
    "Vila Gumercindo": {
      "vivencias": 42,
      "aprovados": 20,
      "reprovados": 3,
      "desistentes": 4,
      "naoCompareceu": 7,
      "desistInteg": 6,
      "reprovInteg": 2,
      "totalVagas": 22,
      "vagasAbertas": 2,
      "enviados": 42
    },
    "Vila Leopoldina": {
      "vivencias": 51,
      "aprovados": 25,
      "reprovados": 5,
      "desistentes": 4,
      "naoCompareceu": 12,
      "desistInteg": 2,
      "reprovInteg": 0,
      "totalVagas": 25,
      "vagasAbertas": 0,
      "enviados": 51
    },
    "Vila Madalena": {
      "vivencias": 22,
      "aprovados": 12,
      "reprovados": 2,
      "desistentes": 2,
      "naoCompareceu": 2,
      "desistInteg": 3,
      "reprovInteg": 0,
      "totalVagas": 12,
      "vagasAbertas": 0,
      "enviados": 22
    },
    "Vila Mariana": {
      "vivencias": 27,
      "aprovados": 14,
      "reprovados": 3,
      "desistentes": 1,
      "naoCompareceu": 7,
      "desistInteg": 0,
      "reprovInteg": 0,
      "totalVagas": 15,
      "vagasAbertas": 1,
      "enviados": 27
    },
    "Vila Sônia": {
      "vivencias": 30,
      "aprovados": 14,
      "reprovados": 4,
      "desistentes": 3,
      "naoCompareceu": 3,
      "desistInteg": 4,
      "reprovInteg": 2,
      "totalVagas": 14,
      "vagasAbertas": 0,
      "enviados": 30
    }
  },
  "unitRecords": {
    "Aclimação": [
      {
        "id": 22,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Roselaine Lima",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 23,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Kenia Ferraz",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 67,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Andressa Pereira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 171,
        "data": "03/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Eneida Cardoso de oliveira",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 182,
        "data": "09/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "ANDRESSA",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 198,
        "data": "09/06/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "10:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Letícia Souza Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 204,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Maria Silva",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 239,
        "data": "09/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Wilson Francisco De Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 247,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Maria Elisangela Ferreira Andrade",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 326,
        "data": "11/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Adriana Do Carmo Rodrigues",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 370,
        "data": "07/07/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Eduardo Pereira de Souza",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 450,
        "data": "13/08/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Sabrina Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 82,
        "data": "02/09/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "unidade": "Aclimação",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      },
      {
        "id": 541,
        "data": "06/08/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "unidade": "Aclimação",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Alto da Boa Vista": [
      {
        "id": 175,
        "data": "04/03/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Adriana Cezar Rego Do Espirito Santo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 233,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "8:30 às 18:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Pedro Henrique Dos Santos",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 255,
        "data": "15/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Leticia Sena Mendes",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 286,
        "data": "08/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Erika Cabral",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 345,
        "data": "23/06/2026",
        "cargo": "RECEPÇÃO",
        "horario": "8:30 às 18:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Veronica Aparecida Santos Conceição",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 402,
        "data": "27/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Sofia Caetano Quental",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 428,
        "data": "04/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Débora Nascimento",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 429,
        "data": "04/08/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Edilene Alves Dos Santos Alves",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 492,
        "data": "27/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "9:30 ÀS 16:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Alice De Oliveira Pires",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 643,
        "data": "14/09/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "unidade": "Alto da Boa Vista",
        "horario": "9:30 ÀS 16:30",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Analia Franco": [
      {
        "id": 5,
        "data": "05/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Adriano Junior",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 20,
        "data": "08/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Monica Amaro do Nascimento Oliveira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 88,
        "data": "27/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Ana Carolina França Pereira",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 103,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "GEOVANNA SANTOS",
        "vivencias": 5,
        "tipoVaga": "Nova"
      },
      {
        "id": 104,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Edirene Maciel",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 188,
        "data": "10/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Frishta Naemi",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 256,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:30 ÀS 18:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Gabrielly Guimarães",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 271,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:30 ÀS 18:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Marcia Oliveira",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 272,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "8:00 ÀS 14:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Danielly Carvalho Dos Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 279,
        "data": "04/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "8:00 ÀS 14:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Julia Oliveira Araújo",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 285,
        "data": "07/05/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "8:30 às 18:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Sara Ribeiro Brito Portal",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 349,
        "data": "26/06/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:00 ÀS 16:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "ESTHER DE SENA BARBOSA",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 395,
        "data": "20/07/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Bruna Aguiar",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 449,
        "data": "12/08/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Jozelaine Alves",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 488,
        "data": "27/08/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Cecilia Sparano",
        "vivencias": 2,
        "tipoVaga": "Nova"
      }
    ],
    "Bonfiglioli": [
      {
        "id": 8,
        "data": "05/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Keila Ribeiro Pardinho",
        "vivencias": 7,
        "tipoVaga": "Substituição"
      },
      {
        "id": 179,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "10:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Evellyn Caetano",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 180,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giovanna Lovessi",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 262,
        "data": "17/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "09:00 ÀS 16:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Danielle Paula Da Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 322,
        "data": "08/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Franciele Dos Santos Pedro",
        "vivencias": 10,
        "tipoVaga": "Substituição"
      },
      {
        "id": 351,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Cintia Ferreira Costa Patriota",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 352,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Tamires Carvalho",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 369,
        "data": "06/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Sandra Raimundo Oliveira",
        "vivencias": 8,
        "tipoVaga": "Nova"
      },
      {
        "id": 404,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Adriana Leme",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 405,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Priscila Aparecida",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 406,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Andressa Drielly Lima Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 493,
        "data": "28/08/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Michele Souza Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 494,
        "data": "28/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vaga fechada com a amanda Transferencia de osasco",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Brooklin": [
      {
        "id": 305,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 15:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Brenda Clemente",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 331,
        "data": "15/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Emilly Silva Dias",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 367,
        "data": "03/07/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Ana Meira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 384,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "9:00 ÀS 16:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Luana Ferreira Cruz",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 389,
        "data": "15/07/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "9:00 ÀS 16:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Loren Rodrigues Dos Santos",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 420,
        "data": "03/08/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "9:00 ÀS 16:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Elaine Silva",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 421,
        "data": "03/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:00 ÀS 16:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Mariane Fernandes",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 483,
        "data": "25/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Camila Rodrigues Ferreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 606,
        "data": "27/08/2026",
        "cargo": "AUX LIMPEZA",
        "unidade": "Brooklin",
        "horario": "7:00 ÀS 17:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Campinas": [
      {
        "id": 28,
        "data": "09/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Daniela Almeida",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 71,
        "data": "22/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Fechada com indicação da unidade",
        "vivencias": 1,
        "tipoVaga": "Nova"
      }
    ],
    "Campo Belo": [
      {
        "id": 6,
        "data": "05/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Joyce De Jesus Assis",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 57,
        "data": "19/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÁS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Luciana Maria Medeiros Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 76,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Michelle Mesquita Soares",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 77,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Thauany Elisa Almeida Dos Santos",
        "vivencias": 10,
        "tipoVaga": "Substituição"
      },
      {
        "id": 86,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "GIOVANNA ROSA DA SILVA",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 87,
        "data": "26/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "9:00 ÀS 16:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Jéssica Santos",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 127,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Pamela Andrade",
        "vivencias": 10,
        "tipoVaga": "Substituição"
      },
      {
        "id": 181,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giovanna Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 183,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "8:00 ÀS 14:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Izabelly Christina Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 217,
        "data": "20/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:00 ÀS 16:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Cristiane Souza",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 290,
        "data": "12/05/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Maria Da Silva Souza",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 299,
        "data": "18/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "9:00 ÀS 16:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Wania Stefani Nascimento Do Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 317,
        "data": "02/06/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Elisangela Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 383,
        "data": "13/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Luana Lima",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 409,
        "data": "28/07/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Marynara Sousa",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 443,
        "data": "11/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:00 ÀS 16:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Brenda Washi",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 448,
        "data": "12/08/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Kenia Judyt Torres Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 228,
        "data": "14/09/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "unidade": "Campo Belo",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Chacara Klabin": [
      {
        "id": 37,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "9:00 ÀS 16:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Gisele Baptista da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 38,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Natalia Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 39,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Islaine Rosa",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 112,
        "data": "03/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Silvana Da Silva Paulino",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 133,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Giovanna Santos Antonio",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 134,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:30 ÀS 16:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Julia Pinheiro",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 200,
        "data": "17/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "8:00 ÀS 14:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Geórgia Ricardo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 218,
        "data": "23/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Josefa Maria Dos Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 242,
        "data": "13/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Lethicia Dias De Carvalho",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 244,
        "data": "13/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Alexandra Melo Pery",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 246,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "09:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Vanderleia Marcelino",
        "vivencias": 12,
        "tipoVaga": "Substituição"
      },
      {
        "id": 268,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Camila Santana Portero",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 281,
        "data": "06/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Flávia Gabriele Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 282,
        "data": "06/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Beatriz Conceição",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 312,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Rosana Ramos Pereira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 315,
        "data": "01/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Tamiles Rodrigues",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 329,
        "data": "15/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Nicolly Gomes Vilanova",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 337,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "9:30 ÀS 16:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Gabriela Figueiredo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 350,
        "data": "29/06/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "8:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Bianca Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 471,
        "data": "19/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Gabrielly Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 633,
        "data": "10/09/2026",
        "cargo": "AUX LIMPEZA",
        "unidade": "Chacara Klabin",
        "horario": "7:00 ÀS 17:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Granja Viana": [
      {
        "id": 14,
        "data": "07/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Macela Da Silva Cordeiro",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 46,
        "data": "09/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "José Natanael Barbosa Da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 47,
        "data": "14/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Alline Nascimento Rocha",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 79,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Rayssa Ferreira D A Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 170,
        "data": "02/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Aline - vaga fechada pela propria unidade",
        "vivencias": 9,
        "tipoVaga": "Nova"
      },
      {
        "id": 197,
        "data": "16/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:30 ÀS 17:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Jayana Faias",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 266,
        "data": "24/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Mariana Camara",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 399,
        "data": "23/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Silvana Da Conceição L Carvalho",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 400,
        "data": "24/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "11:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mayara Faria Gonsalves",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 418,
        "data": "30/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Isabela Santana",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 440,
        "data": "10/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Fernanda Rodrigues",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 499,
        "data": "01/09/2025",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 18:00",
        "mes": 9,
        "status": "Aprovado",
        "colaborador": "Camila Eduarda",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 615,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "unidade": "Granja Viana",
        "horario": "7:00 ÀS 13:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Guarulhos": [
      {
        "id": 35,
        "data": "12/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "6:45 ÀS 16:45",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Kleiton Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      }
    ],
    "Higienópolis": [
      {
        "id": 1,
        "data": "16/12/2025",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Mariza Salvador",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 2,
        "data": "16/12/2025",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Natizieli Aparecida Ferreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 3,
        "data": "17/12/2025",
        "cargo": "OUTROS",
        "horario": "7:00 ÀS 17:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Paloma Damaceno Bettoni",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 148,
        "data": "24/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Joao Victor Oliveira Da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 154,
        "data": "26/02/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Tamires Matos Jardim",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 196,
        "data": "16/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "08:00 ÁS 15:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Gisele Alves",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 212,
        "data": "18/03/2026",
        "cargo": "RECEPÇÃO",
        "horario": "7:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Gabriela da silva coneceição",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 227,
        "data": "01/04/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "10:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Marcela Monares",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 236,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Anderson De Araujo Nunes",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 318,
        "data": "05/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Márcia Bárbara Marques Moreira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 358,
        "data": "30/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:30 às 18:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Janaina Dos Santos Ramos",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 360,
        "data": "02/06/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Fabiana Silva De Lima",
        "vivencias": 5,
        "tipoVaga": "Nova"
      },
      {
        "id": 376,
        "data": "08/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Alda Jesus Damascena",
        "vivencias": 7,
        "tipoVaga": "Substituição"
      },
      {
        "id": 381,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Ketlyn Beatriz da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 382,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Rita Vieira De Oliveira Carvalho",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 398,
        "data": "23/07/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "11:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Pollyana Bastos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 403,
        "data": "27/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Leticia Sales Germano Jorge",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 412,
        "data": "28/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Ana Paula Almeida Da Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 463,
        "data": "18/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Gisele Correa Da Costa",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 464,
        "data": "18/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Eduarda Damasceno Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      }
    ],
    "Indianópolis": [
      {
        "id": 42,
        "data": "13/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:00 ÀS 16:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Victória Menezes De Oliveira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 165,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA ADM/RECEPCIONISTA",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Gabriella Elizabeth",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 276,
        "data": "29/04/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Jessica Da Silva Lima",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 324,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Jaiane Moura E Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 340,
        "data": "19/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Cristiane Torquato De Oliveira",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 341,
        "data": "22/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "8:00 ÀS 15:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Amanda Alexandrina Rafael Ferreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 379,
        "data": "08/07/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:00 ÀS 16:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Guilherme Basile",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 446,
        "data": "12/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Isabela Araujo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 480,
        "data": "24/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Fabiana Figueiredo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 484,
        "data": "25/08/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Maria de Carvalho",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      }
    ],
    "Ipiranga": [
      {
        "id": 19,
        "data": "08/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Lidiane de Melo",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 24,
        "data": "08/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Sabrina França Moreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 56,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Silvana Alves Da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 58,
        "data": "19/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "9:00 ÀS 16:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Caroline Soares",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 61,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Hellen Vitoria",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 75,
        "data": "22/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Anna Carolina Da Silva Custodio Abreu",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 111,
        "data": "02/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Flávia Marques",
        "vivencias": 7,
        "tipoVaga": "Substituição"
      },
      {
        "id": 129,
        "data": "10/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Daniele Aso",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 146,
        "data": "24/02/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Hieda Vitoria Formigone",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 167,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:30 ÀS 18:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Juliana Lopes Ferreira",
        "vivencias": 0,
        "tipoVaga": "Nova"
      },
      {
        "id": 224,
        "data": "25/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Débora Aro Pereira",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 252,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Gabriella Silva",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 253,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Flavia Marques",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 294,
        "data": "14/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Isabelle Rodrigues",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 295,
        "data": "14/05/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Vanessa Pinheiro",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 297,
        "data": "15/05/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Vanessa De Souza Pereira",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 306,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Emilly Moreira da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 338,
        "data": "17/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Kailly França",
        "vivencias": 8,
        "tipoVaga": "Nova"
      },
      {
        "id": 361,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Camila Melo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 362,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:30 ÀS 18:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Alessandra Soto Gomes",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 363,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "8:00 ÀS 14:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Adriana Jesus da Silva Santos",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 380,
        "data": "13/07/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Elaine Oliveira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 419,
        "data": "31/07/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Karina Mesquita Menezes",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 435,
        "data": "06/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Janaína Quintela",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 438,
        "data": "10/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Isabelly Rodrigues",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 439,
        "data": "10/08/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "8:00 ÀS 14:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Cibelle Ferreira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 459,
        "data": "17/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Gabriela Araújo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 468,
        "data": "19/08/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Andressa Gaidamavicius -´Essa candidata foi barrada pelo RH porém o mantenedor decidiu continuar até o fim do ano.",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 502,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 9,
        "status": "Aprovado",
        "colaborador": "Jamilly de Oliveira Sousa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 619,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "unidade": "Ipiranga",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Jardins": [],
    "Lapa": [
      {
        "id": 131,
        "data": "11/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:30 ÀS 18:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Yasmin Veloso Alves",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 149,
        "data": "24/02/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Hellen Moura De Oliveira Francisco",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 150,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Bianca De Lima",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 151,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "8:00 ÀS 15:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Ana Beatriz Santos Reis",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 152,
        "data": "25/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:00 ÀS 17:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Carla Tosi De Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 163,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "11:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Erika Tais Gonzaga Machado",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 213,
        "data": "19/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Thayná Renault",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 298,
        "data": "15/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "8:00 ÀS 15:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Gislayne Lima Muniz",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 303,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:00 ÀS 17:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Elenice Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 304,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "8:00 ÀS 15:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Graciele Matos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 314,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Amanda Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 346,
        "data": "23/06/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:30 ÀS 17:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Janaina Nicolau",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 377,
        "data": "10/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Keliane Araujo Moraes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 410,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Giovanna De Oliveira Tavares",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 411,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Hoselainy Vieira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 447,
        "data": "12/08/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Poliana Izidoro Telles",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 644,
        "data": "09/09/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "unidade": "Lapa",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Marajoara": [
      {
        "id": 63,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Tainan Tainan Marques E Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 64,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Angélica Macedo Silva Tomaiz",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 95,
        "data": "28/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Jessica Carvalho Meneses",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 114,
        "data": "03/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Andressa Gomes",
        "vivencias": 10,
        "tipoVaga": "Substituição"
      },
      {
        "id": 147,
        "data": "24/02/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Jaqueline Barbosa Neris",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 216,
        "data": "20/03/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:30 às 18:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Joana Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 313,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Juliana Faustino",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 356,
        "data": "29/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Aline Gabriela",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 392,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Adriana Lopes Alves Dos Santos Lopes Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 441,
        "data": "11/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Nádia Gomes Sarrão",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 442,
        "data": "11/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Kátia Aparecida Ferreira Da Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 445,
        "data": "12/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "8:00 ÀS 14:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Alcineia Resende",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 452,
        "data": "13/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Nathália Fagundes Jacome",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 475,
        "data": "20/08/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Elisângela Oliveira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      }
    ],
    "Moema": [
      {
        "id": 7,
        "data": "05/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Cíntia Oliveira - APROVADA",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 10,
        "data": "05/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Stefani Nascimento",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 59,
        "data": "20/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maria Lucia Cabral De Melo",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 101,
        "data": "30/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Fernanda Moura",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 102,
        "data": "02/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Janaina Lisboa Martins",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 136,
        "data": "19/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Michele Moura",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 206,
        "data": "18/03/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Thifani Lopes",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 249,
        "data": "14/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Edna Barretto",
        "vivencias": 7,
        "tipoVaga": "Substituição"
      },
      {
        "id": 273,
        "data": "28/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Karoline Alves",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 274,
        "data": "28/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "9:00 ÀS 16:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Isabela Ferreira de Souza - Transferencia da unidade do campo belo",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 330,
        "data": "15/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:30 às 18:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Joseni Leite Moura",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 335,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Sofia Antonio",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 348,
        "data": "26/06/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "10:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Ana Paula Fernandes Silva",
        "vivencias": 8,
        "tipoVaga": "Nova"
      },
      {
        "id": 373,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Priscila Souza Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 388,
        "data": "14/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:30 às 18:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Jeniffer Andrade",
        "vivencias": 8,
        "tipoVaga": "Substituição"
      },
      {
        "id": 424,
        "data": "04/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Dalila Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 456,
        "data": "14/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Yasmin Aleixo",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 338,
        "data": "11/09/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "unidade": "Moema",
        "horario": "10:00 ÀS 17:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Mooca": [
      {
        "id": 51,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "8:00 ÀS 14:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Roberta Pinto",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 52,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Júlia Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 66,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Isabelle Cuenca",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 91,
        "data": "27/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Priscila Dias",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 125,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Amanda",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 132,
        "data": "11/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:30 ÀS 18:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Fabiana Duarte De Moura",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 164,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Emilly Pereira Da Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 168,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Stefani Fernandes De Oliveira",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 169,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Cindy Anselmo",
        "vivencias": 7,
        "tipoVaga": "Substituição"
      },
      {
        "id": 184,
        "data": "09/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Frishta Naemi",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 189,
        "data": "10/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Rebeca Maranesi da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 190,
        "data": "11/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Sabrina Dos Santos Da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 203,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Simone Menezes Godoi",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 258,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "9:00 ÀS 16:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Julia Castilho",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 366,
        "data": "03/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tamires Rodrigues",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 497,
        "data": "31/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Laís Ferreira Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      }
    ],
    "Osasco": [
      {
        "id": 48,
        "data": "14/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:30 ÀS 16:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Jocea Moreno Canos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 69,
        "data": "22/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Patrícia Ferreira Cazassa Cazassa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 78,
        "data": "23/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Eliane Barcelos da Silva Paes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 106,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Isabella Ferreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 107,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Cintia Nara Vieira Da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 141,
        "data": "20/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Juliana Farias Vicente",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 232,
        "data": "07/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "9:00 ÀS 16:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Ana Paula De Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 248,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Luiza Ketlen",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 263,
        "data": "17/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Elaine Martins",
        "vivencias": 12,
        "tipoVaga": "Substituição"
      },
      {
        "id": 278,
        "data": "04/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Débora Urban",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 288,
        "data": "11/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:00 ÀS 17:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Bianca Amorim",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 319,
        "data": "08/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Vanessa Lopes de Andrade",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 469,
        "data": "19/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Amanda Nascimento",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 470,
        "data": "19/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vaga fechada com transferencia da Leopoldina",
        "vivencias": 1,
        "tipoVaga": "Nova"
      }
    ],
    "Panamby": [
      {
        "id": 70,
        "data": "22/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "8:00 ÀS 15:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Giovanna Lyssa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 105,
        "data": "02/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "8:30 às 18:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Wanderson De Oliveira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 124,
        "data": "09/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Priscila Viana Da Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 208,
        "data": "18/03/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:00 ÀS 16:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Matheus Rodrigues",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 223,
        "data": "25/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Nataly Ester Oliveira Dos Santos Luiz",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 226,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "8:00 ÀS 14:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Mariana Rílary Silvestre Sousa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 245,
        "data": "13/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Isabel Gonçalves Da Silva",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 311,
        "data": "01/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Karen Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 323,
        "data": "09/06/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Maria De Lourdes Dos Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 332,
        "data": "16/06/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Ricardo Antonio Da Silva",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 368,
        "data": "06/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Joziane Fernandes Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 371,
        "data": "07/07/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tatiane Leles",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 416,
        "data": "30/07/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Rafaela Alonso Hernandes Negrão - iND",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 467,
        "data": "18/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Manuela França Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      }
    ],
    "Paraiso": [
      {
        "id": 25,
        "data": "08/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Glaucia Regina Maciel",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 93,
        "data": "28/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "D'avila Dayane",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 117,
        "data": "05/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Sabrina Soares Da Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 123,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Bianca Vitória",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 126,
        "data": "09/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Tatiana Carla",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 140,
        "data": "20/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Amanda Emily Neves De Barros Soares",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 145,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Luana Casali",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 160,
        "data": "27/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Maria Do Socorro Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 161,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Vitória Carolina Nóbrega Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 162,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Mariana Eraldo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 187,
        "data": "10/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Ednalva De Alcântara Oliveira Oliveira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 191,
        "data": "11/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "8:00 ÀS 14:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Pamela Gomes",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 201,
        "data": "17/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 15:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Camila Lazo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 210,
        "data": "18/03/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Wilton Vicente",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 211,
        "data": "18/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Maria Do Carmo",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 220,
        "data": "23/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:30 ÀS 16:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Millenea Cardoso Henrique",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 234,
        "data": "07/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Estefani Oliveira",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 238,
        "data": "09/04/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:30 ÀS 16:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Natalia Lays Da Silva Franca",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 259,
        "data": "16/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Júlia Vasconcelos Vasconcelos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 287,
        "data": "11/05/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Ana Paula Telles",
        "vivencias": 11,
        "tipoVaga": "Substituição"
      },
      {
        "id": 296,
        "data": "15/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Marcia da silva costa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 301,
        "data": "25/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Eduardo Pereira De Souza",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 336,
        "data": "16/06/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Marcos Regnes Da Silva Viégas",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 397,
        "data": "21/07/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Daniela Roberti",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 425,
        "data": "04/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Thais Michelle de Oliveira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 457,
        "data": "14/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Laís Saorin",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 458,
        "data": "17/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "8:00 ÀS 14:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Keila Dias Mendes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 460,
        "data": "17/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "11:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Karyne Cardoso",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 629,
        "data": "09/09/2026",
        "cargo": "RECEPÇÃO",
        "unidade": "Paraiso",
        "horario": "9:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Perdizes": [
      {
        "id": 68,
        "data": "22/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Patricia Sousa",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 353,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Luana De Vasconcelos Dantas",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 354,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "8:00 ÀS 15:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Rebeca Santos",
        "vivencias": 5,
        "tipoVaga": "Nova"
      },
      {
        "id": 355,
        "data": "29/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "12:00 ÀS 18:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Izabela Leite",
        "vivencias": 5,
        "tipoVaga": "Nova"
      },
      {
        "id": 396,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Rayane Ferreira Barbosa",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 444,
        "data": "11/08/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Com indicação da propria unidade",
        "vivencias": 0,
        "tipoVaga": "Nova"
      },
      {
        "id": 476,
        "data": "20/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:30 ÀS 18:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Jamilly Paradela",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 477,
        "data": "20/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Rute Roza Do Nascimento Da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 481,
        "data": "24/08/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Crislaine Roberta Moreira Souza",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 482,
        "data": "24/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "8:00 ÀS 15:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vitoria Medeiros piva Fabri do Carmo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 504,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Aprovado",
        "colaborador": "Agatha Andreza Estevam Firmino",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 621,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "unidade": "Perdizes",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Pinheiros": [
      {
        "id": 36,
        "data": "1/12/0025",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Vitoria Aparecida",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 80,
        "data": "23/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Ronivaldo Dos Santos Matos Dos Santos Matos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 84,
        "data": "1/26/0026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Ariane Fregotte",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 89,
        "data": "1/27/0026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Iracema Gomes Sousa",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 90,
        "data": "1/27/0026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Wendevania Tavares Da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 119,
        "data": "2/6/0026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:30 ÀS 16:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Renata",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 166,
        "data": "02/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "9:30 ÀS 16:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Aline Conegundes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 172,
        "data": "03/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "9:30 ÀS 16:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Victoria Andrade",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 192,
        "data": "3/11/0025",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Priscila Almeida",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 194,
        "data": "12/03/2026",
        "cargo": "RECEPÇÃO",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Tauane Felix Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 202,
        "data": "3/17/0026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giovanna Queiroz Pereira Da Paixão",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 251,
        "data": "14/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Igor De Jesus Ramos",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 264,
        "data": "4/20/0026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Bianca Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 328,
        "data": "6/15/0026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Maria Cláudia Santos Pereira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 413,
        "data": "7/29/0026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Laura Da Silva Delfino",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 414,
        "data": "7/29/0026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Geziane Araújo Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 478,
        "data": "21/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Ketheny Caroliny Theodoro",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 485,
        "data": "26/08/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Eliane Réges De Lima",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 573,
        "data": "17/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "unidade": "Pinheiros",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      }
    ],
    "Piracicaba": [],
    "Portal do Morumbi": [
      {
        "id": 49,
        "data": "14/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Larissa Alves Anselmo",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 53,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Mayani Barbosa Cardeal",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 54,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "10:30 ÀS 17:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Biancca Oliveira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 74,
        "data": "22/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Willian Rodrigues Dos Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 96,
        "data": "29/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Camilly Giovanna Campos De Souza",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 115,
        "data": "05/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Adriana Barros",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 122,
        "data": "09/02/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Jamilly Socorro Noia Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 156,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:30 ÀS 17:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Camilla Silva Martins Dos Anjos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 176,
        "data": "05/03/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Esther Dutra Contiero Nascimento",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 215,
        "data": "20/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Elaine Cristina Mendes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 235,
        "data": "07/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "João Paulo Lobo Pereira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 269,
        "data": "27/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Wellington Souza De Carvalho",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 270,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "11:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Morgana Marcolino",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 289,
        "data": "11/05/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "crislaine Lima",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 320,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Evellyn De Araújo Teodoro",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 321,
        "data": "08/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Glauciane Ribeiro Assunção Da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 407,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "7:00 ÀS 13:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mariana Victoria Melo da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 408,
        "data": "28/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Maria Moreira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 465,
        "data": "17/08/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Lucival Almeida",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      }
    ],
    "Real Parque": [
      {
        "id": 92,
        "data": "27/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maria De Jesus Da Silva Pereira",
        "vivencias": 12,
        "tipoVaga": "Substituição"
      },
      {
        "id": 209,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Bruna Costa Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 231,
        "data": "06/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:00 ÀS 16:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Jaqueline Sampaio Das Flores",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 241,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Bruna Costa Silva",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 250,
        "data": "14/04/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "10:00 ÀS 17:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Júlia Saraiva Ribeiro Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 254,
        "data": "15/04/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Jaqueline Da Silva E Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 284,
        "data": "07/05/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Anny Caroline Costa Castro",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 308,
        "data": "27/05/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "8:00 ÀS 14:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Luana Francisca Da Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 325,
        "data": "10/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:30 ÀS 16:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Nágela De Paula Reis Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 327,
        "data": "12/06/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "7:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Francine Ferrari",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 364,
        "data": "01/07/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tassiana Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 391,
        "data": "16/07/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Angelica Araujo",
        "vivencias": 5,
        "tipoVaga": "Substituição"
      },
      {
        "id": 462,
        "data": "18/08/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Silvia De Jesus",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 498,
        "data": "31/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:00 ÀS 16:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Mony Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      }
    ],
    "Santo Andre": [
      {
        "id": 4,
        "data": "05/01/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Uanderson Trindade",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 32,
        "data": "12/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Katia Oliveira Chaves",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 33,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Julia Rodrigues Da Silva",
        "vivencias": 5,
        "tipoVaga": "Nova"
      },
      {
        "id": 40,
        "data": "12/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Thais Gomes",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 121,
        "data": "06/02/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Maria Josenir Nascimento Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 138,
        "data": "19/02/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Júlio Cesar Da Silva Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 155,
        "data": "26/02/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Marcia Gisele De Jesus",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 157,
        "data": "27/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Jaquelina Francisca Da Conceicao Conceição",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 178,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Josiane Aparecida Santos Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 193,
        "data": "12/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Juliene Araujo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 334,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Tayane Santana Castanho",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 386,
        "data": "13/07/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Danielle Rodrigues",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 393,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Caroline Morais",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 401,
        "data": "27/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Adrielly Tavares",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 430,
        "data": "05/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Kamilly Silva",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 431,
        "data": "05/08/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Simoni Flamino",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 432,
        "data": "05/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Eduarda Macedo",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 625,
        "data": "04/09/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "unidade": "Santo Andre",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Saúde": [
      {
        "id": 18,
        "data": "07/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Viviane Novaes Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 29,
        "data": "09/01/2026",
        "cargo": "ESTAGIÁRIA PRÉ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Elaine Pereira de Oliveira",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 72,
        "data": "22/01/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Valentina Maria De Oliveira Lima",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 100,
        "data": "30/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Flaviany Calistro Benites",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 113,
        "data": "03/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Jéssica Waldez Ferreira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 174,
        "data": "04/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Jessica Monteiro",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 240,
        "data": "09/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Fernanda Joaquim",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 261,
        "data": "16/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Anderson Dias Leme",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 277,
        "data": "30/04/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "7:00 ÀS 13:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Thaina Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 280,
        "data": "05/05/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Gabriella Chaves Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 309,
        "data": "15/05/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Mariana Romero",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 365,
        "data": "02/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Marcela Nery dos Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 394,
        "data": "17/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Tatiane Marques da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 454,
        "data": "14/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Maria Aparecida Brandão Da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 455,
        "data": "14/08/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vaga fechada pela propria unidade com ex funcionaria (CRISTIANE)",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 473,
        "data": "19/08/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Ailma Gomes De Oliveira Gomes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 486,
        "data": "26/08/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Layla Santos Vasconcelos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 501,
        "data": "01/09/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Aprovado",
        "colaborador": "Vanessa Torres Avelino",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 639,
        "data": "14/09/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "unidade": "Saúde",
        "horario": "13:00 ÀS 19:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      },
      {
        "id": 640,
        "data": "14/09/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "unidade": "Saúde",
        "horario": "12:30 ÀS 18:30",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "São Caetano": [
      {
        "id": 15,
        "data": "06/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Debora Souza",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 16,
        "data": "1/6/0026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Juliana Aparecida Celis Tizo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 17,
        "data": "1/6/0026",
        "cargo": "PROF DE INGLÊS",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Vaga fechada pela unidade com indicação",
        "vivencias": 0,
        "tipoVaga": "Nova"
      },
      {
        "id": 26,
        "data": "09/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "KATIANA DE SOUZA TOMAZ",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 34,
        "data": "12/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Adriana Aires Jaquetta",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 44,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maria Gabriela Gomes Da Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 62,
        "data": "20/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Raissa Nunes Da Silva De Oliveira",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 94,
        "data": "28/01/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Rosangela Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 135,
        "data": "13/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Maythe Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 144,
        "data": "23/02/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "9:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Ana Greco",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 186,
        "data": "09/03/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Valeria Cristina Zaparoli",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 199,
        "data": "16/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "6:45 ÀS 16:45",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Fernanda Martins",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 214,
        "data": "19/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Giselle De Oliveira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 302,
        "data": "26/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Daniela Postigo De Oliveira",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 307,
        "data": "27/05/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "9:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Cleonice Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 339,
        "data": "19/06/2026",
        "cargo": "OUTROS",
        "horario": "6:45 ÀS 16:45",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Alexandra Gomes Meksa",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 427,
        "data": "04/08/2026",
        "cargo": "AUX CLASSE MINI",
        "horario": "9:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Beatriz Mezalira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 433,
        "data": "06/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Karla Bini Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 495,
        "data": "28/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "12:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Vitória Constantino Veríssimo",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 627,
        "data": "09/09/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "unidade": "São Caetano",
        "horario": "7:00 ÀS 13:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Substituição"
      },
      {
        "id": 636,
        "data": "11/09/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "unidade": "São Caetano",
        "horario": "12:00 ÀS 18:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Tatuapé": [
      {
        "id": 41,
        "data": "13/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Keren Lais Mades",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 230,
        "data": "06/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Marceli Cavalari",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 437,
        "data": "07/08/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Wellington De Freitas Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 496,
        "data": "28/08/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Danilo Pinheiro Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      }
    ],
    "Vila Gumercindo": [
      {
        "id": 21,
        "data": "08/01/2026",
        "cargo": "RECEPÇÃO",
        "horario": "8:30 às 18:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Rafaela Carmo Lima",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 31,
        "data": "12/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "7:00 ÀS 17:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Vitoria Cristina De Arian",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 50,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Caroline Napolitano Camargo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 55,
        "data": "16/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "8:00 ÀS 14:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "ELLEN GOMES OLIVEIRA DEIRÓZ",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 85,
        "data": "26/01/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "7:00 ÀS 17:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Karina Favaro Oliveira",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 110,
        "data": "02/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Maria Nascimento",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 128,
        "data": "10/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Mariana Spetanieri",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 142,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Hellen Vitória",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 158,
        "data": "27/02/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "THAINÁ MOREIRA DE ASSUNÇÃO/ transferida da SAUDE",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 159,
        "data": "27/02/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Andreia  EX funcionaria BROOKLIN",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 222,
        "data": "24/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Jacqueline Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 260,
        "data": "16/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Claudineide Viana Leite",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 292,
        "data": "13/05/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Jeniffer Aline Pião Da Silva",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 293,
        "data": "13/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "12:30 ÀS 18:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Liliane Santo",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 333,
        "data": "16/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Bruna da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 343,
        "data": "22/06/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Giselle Oliveira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 375,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "10:30 ÀS 17:30",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Isabele Vilas",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 415,
        "data": "30/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Camila Rodrigues Ferreira",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 417,
        "data": "30/07/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Mariana Cristina Spetanieri da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 423,
        "data": "04/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Adina Maria Pinheiro",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 641,
        "data": "14/09/2026",
        "cargo": "OUTROS",
        "unidade": "Vila Gumercindo",
        "horario": "8:00 ÀS 18:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      },
      {
        "id": 645,
        "data": "15/09/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "unidade": "Vila Gumercindo",
        "horario": "7:00 ÀS 13:00",
        "mes": 9,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Vila Leopoldina": [
      {
        "id": 13,
        "data": "07/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Osmária Gomes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 27,
        "data": "09/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Caroline Correa Nascimento Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 60,
        "data": "20/01/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Tatiane Dos Santos Hermogenes",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 108,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Natalia Dos Santos Sousa Oliveira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 109,
        "data": "02/02/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "12:30 ÀS 18:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Natália Cristina",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 120,
        "data": "06/02/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "9:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Daniela Almeida",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 153,
        "data": "25/02/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Bianca Barbosa Da Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 173,
        "data": "04/03/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "12:30 ÀS 18:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Maria Gilcileia",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 177,
        "data": "06/03/2026",
        "cargo": "EDUCADORA JARD",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Adriana Souza",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 205,
        "data": "18/03/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Michele Da Silva Assunção",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 225,
        "data": "30/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "10:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Maria Eduarda Fernandes Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 229,
        "data": "06/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Daniel Barreto",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 257,
        "data": "16/04/2026",
        "cargo": "RECEPÇÃO",
        "horario": "9:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Pamela Silva Santos - Aprovada",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 265,
        "data": "20/04/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "10:30 ÀS 17:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Luana Araújo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 275,
        "data": "29/04/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:30 às 18:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Josefa Monteiro Da Silva",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 310,
        "data": "28/05/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Guilherme Miranda Gomes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 316,
        "data": "02/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Nayara Rocha",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 342,
        "data": "22/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:30 às 18:30",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Marcela Dos Santos Silva",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 344,
        "data": "23/06/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "7:00 ÀS 17:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Gabrielle Aparecida Custodio Lugue",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 347,
        "data": "24/06/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "7:00 ÀS 13:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Angelica De Paula Barbosa",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 359,
        "data": "30/06/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Emelen Prado",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 372,
        "data": "07/07/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Rosana Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 374,
        "data": "08/07/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "11:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Elisangela Rocha Da Silva",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 387,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Ana Claudia Teles",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 451,
        "data": "13/08/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Catarina Ferreira Novais",
        "vivencias": 2,
        "tipoVaga": "Nova"
      }
    ],
    "Vila Madalena": [
      {
        "id": 65,
        "data": "21/01/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Thaline Barbosa",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 81,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Luciana Alves Maciel",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 82,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MATI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Aline Guizi Rodrigues Macedo",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 83,
        "data": "26/01/2026",
        "cargo": "EDUCADORA MINI",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Tainar Pereira de Assis Paes",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 143,
        "data": "23/02/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:30 ÀS 16:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Pietra Silva",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 219,
        "data": "23/03/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:30 ÀS 16:30",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Cibele Borges Tavares",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 243,
        "data": "13/04/2026",
        "cargo": "EDUCADORA MATII",
        "horario": "8:30 às 18:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Rosimar Dos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 267,
        "data": "27/04/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Aryane Victoria Teixeira Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 291,
        "data": "13/05/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Elis Borges",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 300,
        "data": "18/05/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "9:30 ÀS 16:30",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Kauany Gomes Dos Santos",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 390,
        "data": "15/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "8:00 ÀS 14:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Livia Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 422,
        "data": "03/08/2026",
        "cargo": "ASSIST CLASSE",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Georgia Potenza Moreira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      }
    ],
    "Vila Mariana": [
      {
        "id": 11,
        "data": "05/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Antonia Marta Cariri Ferreira",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 12,
        "data": "07/01/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Alisson Felix dos Santos",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 73,
        "data": "22/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "9:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Ana Veridiane De Moura Silva",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 99,
        "data": "30/01/2026",
        "cargo": "COORD BERÇ",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Maria Eliane Alves Da Silva",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 130,
        "data": "2/10/0265",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "9:30 ÀS 16:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Sarah Damásio",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 139,
        "data": "19/02/2026",
        "cargo": "PROF DE INGLÊS",
        "horario": "8:30 às 18:30",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Victória Menezes De Oliveira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 185,
        "data": "09/03/2026",
        "cargo": "ESTAGIÁRIA MATII",
        "horario": "10:00 ÀS 17:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Lavínia Schwartzkopf",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 195,
        "data": "13/03/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Isabella .",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 207,
        "data": "18/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "13:00 ÀS 19:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Graciete Fortunato",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 221,
        "data": "24/03/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 3,
        "status": "Aprovado",
        "colaborador": "Keylian Araujo",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 237,
        "data": "09/04/2026",
        "cargo": "INSPETOR DE ALUNOS",
        "horario": "9:30 ÀS 19:30",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "José João Rodrigues Neto",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 357,
        "data": "26/06/2026",
        "cargo": "ESTAGIÁRIA VOLANTE",
        "horario": "9:00 ÀS 16:00",
        "mes": 6,
        "status": "Aprovado",
        "colaborador": "Letícia Vitoria Matias Da Silva",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 378,
        "data": "10/07/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "8:00 ÀS 18:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Jaciara Bianca Ferreira De Farias",
        "vivencias": 4,
        "tipoVaga": "Substituição"
      },
      {
        "id": 474,
        "data": "20/08/2016",
        "cargo": "EDUCADORA PRÉ",
        "horario": "8:00 ÀS 18:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Cláudia Gayer Pereira Da Costa",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 603,
        "data": "27/08/2026",
        "cargo": "ESTAGIÁRIA MINI",
        "unidade": "Vila Mariana",
        "horario": "8:00 ÀS 14:00",
        "mes": 8,
        "status": "Triagem",
        "colaborador": "",
        "vivencias": 0,
        "tipoVaga": "Nova"
      }
    ],
    "Vila Sônia": [
      {
        "id": 9,
        "data": "05/01/2026",
        "cargo": "EDUCADORA PRÉ",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Laís França De Jesus Santos",
        "vivencias": 3,
        "tipoVaga": "Substituição"
      },
      {
        "id": 30,
        "data": "09/01/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Kimberly Fernandes",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 43,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Rayssa Gabriela",
        "vivencias": 3,
        "tipoVaga": "Nova"
      },
      {
        "id": 45,
        "data": "13/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:30 ÀS 16:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Juliana Teodoro Morgado",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 97,
        "data": "29/01/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "9:30 ÀS 16:30",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Melissa Silva Queiroz",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 98,
        "data": "30/01/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 1,
        "status": "Aprovado",
        "colaborador": "Daniela Oliveira",
        "vivencias": 4,
        "tipoVaga": "Nova"
      },
      {
        "id": 116,
        "data": "05/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Thaissa Luellen Delfino Rivera",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 118,
        "data": "05/02/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Maria Eduarda Alves Borges",
        "vivencias": 6,
        "tipoVaga": "Substituição"
      },
      {
        "id": 137,
        "data": "19/02/2026",
        "cargo": "AUX LIMPEZA",
        "horario": "8:00 ÀS 18:00",
        "mes": 2,
        "status": "Aprovado",
        "colaborador": "Raquel Fernanda De Oliveira Justino",
        "vivencias": 2,
        "tipoVaga": "Substituição"
      },
      {
        "id": 228,
        "data": "02/04/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 4,
        "status": "Aprovado",
        "colaborador": "Yana Cavalcante",
        "vivencias": 2,
        "tipoVaga": "Nova"
      },
      {
        "id": 283,
        "data": "07/05/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "13:00 ÀS 19:00",
        "mes": 5,
        "status": "Aprovado",
        "colaborador": "Amanda Sales da Silva",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 385,
        "data": "13/07/2026",
        "cargo": "ESTAGIÁRIA MAT I",
        "horario": "13:00 ÀS 19:00",
        "mes": 7,
        "status": "Aprovado",
        "colaborador": "Ana Beatriz Alves De Oliveira",
        "vivencias": 1,
        "tipoVaga": "Nova"
      },
      {
        "id": 434,
        "data": "06/08/2026",
        "cargo": "ESTAGIÁRIA BERÇ",
        "horario": "7:00 ÀS 13:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Daniela Aquilino De Meneses",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      },
      {
        "id": 466,
        "data": "18/08/2026",
        "cargo": "ESTAGIÁRIA JARD",
        "horario": "10:00 ÀS 17:00",
        "mes": 8,
        "status": "Aprovado",
        "colaborador": "Tainá Santos",
        "vivencias": 1,
        "tipoVaga": "Substituição"
      }
    ]
  }
};

    const DataManager = {
        getAuthorizedData: function(session) {
            if (!session) {
                return { unitRecords: {}, unitFunnels: {} };
            }
            if (session.role === 'MASTER') {
                return JSON.parse(JSON.stringify(_PRIVATE_RAW_DATA));
            }
            if (session.role === 'SUPERVISOR') {
                const allowed = session.units || [];
                const recs = {};
                const funs = {};
                allowed.forEach(u => {
                    if (_PRIVATE_RAW_DATA.unitRecords && _PRIVATE_RAW_DATA.unitRecords[u]) {
                        recs[u] = _PRIVATE_RAW_DATA.unitRecords[u].map(item => Object.assign({}, item));
                    }
                    if (_PRIVATE_RAW_DATA.unitFunnels && _PRIVATE_RAW_DATA.unitFunnels[u]) {
                        funs[u] = Object.assign({}, _PRIVATE_RAW_DATA.unitFunnels[u]);
                    }
                });
                return {
                    unitRecords: recs,
                    unitFunnels: funs
                };
            }
            if (session.role === 'UNIT') {
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
        },
        updateLiveRawData: function(recordsMap, funnelsMap) {
            if (recordsMap && Object.keys(recordsMap).length > 0) {
                _PRIVATE_RAW_DATA.unitRecords = recordsMap;
            }
            if (funnelsMap && Object.keys(funnelsMap).length > 0) {
                _PRIVATE_RAW_DATA.unitFunnels = funnelsMap;
            }
            try {
                localStorage.setItem('fadelito_cached_live_data', JSON.stringify({
                    unitRecords: _PRIVATE_RAW_DATA.unitRecords,
                    unitFunnels: _PRIVATE_RAW_DATA.unitFunnels
                }));
            } catch(e) {}
        }
    };

    // Auto-carregamento instantâneo do último cache sincronizado (0ms de espera ao abrir o site)
    try {
        const _cachedRaw = localStorage.getItem('fadelito_cached_live_data');
        if (_cachedRaw) {
            const _parsed = JSON.parse(_cachedRaw);
            if (_parsed && _parsed.unitRecords && Object.keys(_parsed.unitRecords).length > 0) {
                _PRIVATE_RAW_DATA.unitRecords = _parsed.unitRecords;
            }
            if (_parsed && _parsed.unitFunnels && Object.keys(_parsed.unitFunnels).length > 0) {
                _PRIVATE_RAW_DATA.unitFunnels = _parsed.unitFunnels;
            }
        }
    } catch(e) {}

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
                if (!session || session.role === 'MASTER') {
                    _PRIVATE_RAW_DATA.unitRecords = newVal.unitRecords;
                    _PRIVATE_RAW_DATA.unitFunnels = newVal.unitFunnels || _PRIVATE_RAW_DATA.unitFunnels;
                } else if (session && session.role === 'SUPERVISOR' && Array.isArray(session.units)) {
                    session.units.forEach(u => {
                        if (newVal.unitRecords && newVal.unitRecords[u]) {
                            _PRIVATE_RAW_DATA.unitRecords[u] = newVal.unitRecords[u];
                        }
                        if (newVal.unitFunnels && newVal.unitFunnels[u]) {
                            _PRIVATE_RAW_DATA.unitFunnels[u] = newVal.unitFunnels[u];
                        }
                    });
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
