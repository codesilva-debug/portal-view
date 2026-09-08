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

        // 2. Validação Unidade Escolar
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

        return new Response(JSON.stringify({ success: false, error: 'Usuário ou unidade não encontrada.' }), {
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
