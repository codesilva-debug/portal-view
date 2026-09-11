/**
 * CLOUDFLARE PAGES FUNCTIONS — ENDPOINT DE LOGIN (/api/login)
 * 
 * Executado nativamente no runtime do Cloudflare Workers / Pages Functions.
 * Suporta variáveis de ambiente (env.MASTER_PASSWORD e env.DEFAULT_UNIT_PASSWORD)
 * e pode ser estendido pela equipe de TI com Cloudflare KV ou D1.
 */

const CANONICAL_UNITS = [
    "Aclimação", "Alto da Boa Vista", "Analia Franco", "Bonfiglioli", "Brooklin", 
    "Campinas", "Campo Belo", "Chacara Klabin", "Granja Viana", "Guarulhos", 
    "Higienópolis", "Indianópolis", "Ipiranga", "Jardins", "Lapa", "Marajoara", 
    "Moema", "Mooca", "Osasco", "Panamby", "Paraiso", "Perdizes", "Pinheiros", 
    "Piracicaba", "Portal do Morumbi", "Real Parque", "Santo Andre", "Saúde", 
    "São Caetano", "Tatuapé", "Vila Gumercindo", "Vila Leopoldina", "Vila Madalena", 
    "Vila Mariana", "Vila Sônia"
];

function normalizeStr(str) {
    return (str || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}

const SUPERVISORS = [
    {
        id: 'luana',
        name: 'Luana Silveira',
        username: 'luana',
        email: 'luana@fadelito.com.br',
        password: '5luanalpm',
        units: ["Lapa", "Panamby", "Moema"]
    },
    {
        id: 'pamela',
        name: 'Pamela Duarte',
        username: 'pamela',
        email: 'pamela@fadelito.com.br',
        password: '2026pamfadelitos',
        units: ["Vila Gumercindo"]
    },
    {
        id: 'aurelio',
        name: 'Aurélio Zanin',
        username: 'aurelio',
        email: 'aurelio@fadelito.com.br',
        password: 'sulaurelio2026',
        units: ["São Caetano", "Santo Andre", "Ipiranga", "Jardins", "Saúde"]
    },
    {
        id: 'camila',
        name: 'Camila Brandão',
        username: 'camila',
        email: 'camila@fadelito.com.br',
        password: 'intercamila#26',
        units: ["Campinas", "Piracicaba"]
    },
    {
        id: 'rodrigo',
        name: 'Rodrigo Mendes',
        username: 'rodrigo',
        email: 'rodrigo@fadelito.com.br',
        password: '7rodrigogob',
        units: ["Granja Viana", "Osasco", "Bonfiglioli"]
    },
    {
        id: 'juliana',
        name: 'Juliana Prado',
        username: 'juliana',
        email: 'juliana@fadelito.com.br',
        password: '2026julizl#amtg',
        units: ["Analia Franco", "Mooca", "Tatuapé", "Guarulhos"]
    },
    {
        id: 'fernando',
        name: 'Fernando Costa',
        username: 'fernando',
        email: 'fernando@fadelito.com.br',
        password: 'sulfernando*bcam',
        units: ["Alto da Boa Vista", "Brooklin", "Campo Belo", "Marajoara"]
    },
    {
        id: 'beatriz',
        name: 'Beatriz Nogueira',
        username: 'beatriz',
        email: 'beatriz@fadelito.com.br',
        password: '8biafadelito#hppm',
        units: ["Higienópolis", "Perdizes", "Pinheiros", "Vila Madalena"]
    },
    {
        id: 'marcelo',
        name: 'Marcelo Albuquerque',
        username: 'marcelo',
        email: 'marcelo@fadelito.com.br',
        password: 'morumbimarcelo26',
        units: ["Portal do Morumbi", "Real Parque", "Vila Leopoldina", "Vila Sônia"]
    },
    {
        id: 'tatiane',
        name: 'Tatiane Ramos',
        username: 'tatiane',
        email: 'tatiane@fadelito.com.br',
        password: 'tatiane2026#ackiv',
        units: ["Aclimação", "Chacara Klabin", "Indianópolis", "Paraiso", "Vila Mariana"]
    }
];

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        let body;
        try {
            body = await request.json();
        } catch (e) {
            body = {};
        }
        
        const { username, password } = body;

        if (!username || !password) {
            return new Response(JSON.stringify({ 
                success: false, 
                error: 'Usuário e senha são obrigatórios.' 
            }), {
                status: 400,
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        const cleanUser = normalizeStr(username.replace(/@fadelito\.com\.br$/i, ''));
        const userPass = String(password).trim();
        
        // 1. Validação Diretoria Master (Pode usar variável de ambiente do Cloudflare)
        const masterPass = (env && env.MASTER_PASSWORD) || 'Diretoria@2026';
        if (cleanUser === 'diretoria' || cleanUser === 'admin' || cleanUser === 'master') {
            if (userPass === masterPass || userPass.toLowerCase() === masterPass.toLowerCase()) {
                const sessionToken = 'fdt_mst_' + btoa(`${cleanUser}:${Date.now()}`);
                return new Response(JSON.stringify({
                    success: true,
                    session: {
                        role: 'MASTER',
                        name: 'Diretoria Geral',
                        username: 'diretoria',
                        email: 'diretoria@fadelito.com.br',
                        unit: 'ALL',
                        token: sessionToken,
                        timestamp: Date.now()
                    }
                }), {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            } else {
                return new Response(JSON.stringify({ success: false, error: 'Senha incorreta para Diretoria Geral.' }), {
                    status: 401,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }
        }

        // 2. Validação Supervisão / Gestores Fictícios (10 Supervisores)
        const matchedSupervisor = SUPERVISORS.find(s => {
            const sUser = normalizeStr(s.username);
            const sName = normalizeStr(s.name);
            return sUser === cleanUser || sName === cleanUser || cleanUser.includes(sUser);
        });

        if (matchedSupervisor) {
            if (userPass === matchedSupervisor.password) {
                const sessionToken = 'fdt_sup_' + btoa(`${matchedSupervisor.username}:${Date.now()}`);
                return new Response(JSON.stringify({
                    success: true,
                    session: {
                        role: 'SUPERVISOR',
                        name: matchedSupervisor.name,
                        username: matchedSupervisor.username,
                        email: matchedSupervisor.email,
                        units: matchedSupervisor.units.slice(),
                        unit: (matchedSupervisor.units.length > 1) ? 'SUPERVISOR_ALL' : matchedSupervisor.units[0],
                        token: sessionToken,
                        timestamp: Date.now()
                    }
                }), {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            } else {
                return new Response(JSON.stringify({ success: false, error: `Senha incorreta para a Supervisão (${matchedSupervisor.name}).` }), {
                    status: 401,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }
        }

        // 3. Validação Unidade Escolar
        const defaultUnitPass = (env && env.DEFAULT_UNIT_PASSWORD) || 'Fadelito@2026';
        const matchedUnit = CANONICAL_UNITS.find(u => {
            const uClean = normalizeStr(u);
            return uClean === cleanUser || uClean.includes(cleanUser) || cleanUser.includes(uClean);
        });

        if (matchedUnit) {
            if (userPass === defaultUnitPass || userPass.toLowerCase() === defaultUnitPass.toLowerCase()) {
                const sessionToken = 'fdt_unt_' + btoa(`${normalizeStr(matchedUnit)}:${Date.now()}`);
                return new Response(JSON.stringify({
                    success: true,
                    session: {
                        role: 'UNIT',
                        name: `Unidade ${matchedUnit}`,
                        username: normalizeStr(matchedUnit),
                        email: `${normalizeStr(matchedUnit)}@fadelito.com.br`,
                        unit: matchedUnit,
                        token: sessionToken,
                        timestamp: Date.now()
                    }
                }), {
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            } else {
                return new Response(JSON.stringify({ success: false, error: `Senha incorreta para a Unidade ${matchedUnit}.` }), {
                    status: 401,
                    headers: { 
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }
        }

        return new Response(JSON.stringify({ success: false, error: 'Usuário não encontrado. Digite seu usuário de supervisão, unidade ou diretoria@fadelito.com.br.' }), {
            status: 404,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message || 'Erro interno do servidor.' }), {
            status: 500,
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
}
