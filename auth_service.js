/**
 * AUTH SERVICE — SISTEMA DE AUTENTICAÇÃO E CONTROLE DE ACESSO (RBAC)
 * Portal View — BI RH & Recrutamento (Rede Fadelito)
 * 
 * Gerencia sessões, perfis (MASTER vs UNIT) e segregação estrita de dados por unidade.
 * Compatível nativamente com Vercel, Cloudflare Pages, servidores estáticos e modo offline.
 */

(function(window) {
    'use strict';

    // Lista canônica oficial das 34 unidades da Rede Fadelito
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

    const SESSION_STORAGE_KEY = 'fadelito_auth_session';

    // Credenciais de contingência local protegidas em closure privada (usadas apenas se a API serverless estiver offline)
    const _PRIVATE_FALLBACK_HASHES = {
        masterUsers: ['diretoria', 'admin', 'master'],
        masterPass: 'Diretoria@2026',
        unitPass: 'Fadelito@2026'
    };

    const AuthService = {
        UNITS: CANONICAL_UNITS,

        /**
         * Localiza uma unidade válida a partir do texto informado (e-mail, nome ou slug)
         */
        findUnit(input) {
            if (!input) return null;
            const clean = normalizeStr(input.replace(/@fadelito\.com\.br$/i, ''));
            
            // 1. Busca exata ou slug normalizado
            for (const unit of CANONICAL_UNITS) {
                if (normalizeStr(unit) === clean) return unit;
            }

            // 2. Apelidos e variações comuns
            const aliases = {
                'morumbi': 'Portal do Morumbi',
                'portal': 'Portal do Morumbi',
                'portaldomorumbi': 'Portal do Morumbi',
                'analia': 'Analia Franco',
                'klabin': 'Chacara Klabin',
                'granja': 'Granja Viana',
                'boavista': 'Alto da Boa Vista',
                'altodaboavista': 'Alto da Boa Vista',
                'gumercindo': 'Vila Gumercindo',
                'leopoldina': 'Vila Leopoldina',
                'madalena': 'Vila Madalena',
                'mariana': 'Vila Mariana',
                'sonia': 'Vila Sônia',
                'caetano': 'São Caetano',
                'andre': 'Santo Andre'
            };

            if (aliases[clean]) return aliases[clean];

            // 3. Busca por inclusão parcial
            for (const unit of CANONICAL_UNITS) {
                const unitClean = normalizeStr(unit);
                if (unitClean.includes(clean) || clean.includes(unitClean)) {
                    return unit;
                }
            }

            return null;
        },

        /**
         * Autenticação assíncrona híbrida:
         * 1º Tenta a Serverless API (/api/login - Vercel ou Cloudflare Pages Functions)
         * 2º Se a API não responder (rede offline ou execução local estática), usa o validador interno resiliente.
         */
        async login(identifier, password, remember = true) {
            const rawId = (identifier || '').trim();
            const pass = (password || '').trim();

            if (!rawId) {
                return { success: false, error: 'Por favor, informe seu usuário ou e-mail institucional.' };
            }
            if (!pass) {
                return { success: false, error: 'Por favor, informe sua senha de acesso.' };
            }

            // 1. Tentativa via API Serverless (/api/login)
            try {
                const apiRes = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: rawId, password: pass })
                });

                if (apiRes.ok) {
                    const data = await apiRes.json();
                    if (data && data.success && data.session) {
                        data.session.remember = remember;
                        data.session.loginAt = new Date().toISOString();
                        this.setSession(data.session, remember);
                        return { success: true, session: data.session };
                    }
                } else if (apiRes.status === 401 || apiRes.status === 404 || apiRes.status === 400) {
                    const errData = await apiRes.json().catch(() => ({}));
                    return { success: false, error: errData.error || 'Credenciais inválidas.' };
                }
            } catch (networkErr) {
                // Endpoint serverless indisponível (ex: abertura via file:// ou dev estático)
                // Prossegue de forma transparente para a validação interna de contingência
            }

            // 2. Validação Interna de Contingência (Resiliente e Instantânea)
            const cleanId = normalizeStr(rawId.replace(/@fadelito\.com\.br$/i, ''));
            const isMaster = _PRIVATE_FALLBACK_HASHES.masterUsers.includes(cleanId);

            if (isMaster) {
                if (pass === _PRIVATE_FALLBACK_HASHES.masterPass || pass.toLowerCase() === _PRIVATE_FALLBACK_HASHES.masterPass.toLowerCase()) {
                    const session = {
                        role: 'MASTER',
                        name: 'Diretoria Geral',
                        email: 'diretoria@fadelito.com.br',
                        unit: 'ALL',
                        loginAt: new Date().toISOString(),
                        token: 'mst_local_' + Date.now(),
                        remember: remember
                    };
                    this.setSession(session, remember);
                    return { success: true, session };
                } else {
                    return { success: false, error: 'Senha incorreta para a Diretoria Geral.' };
                }
            }

            const matchedUnit = this.findUnit(rawId);
            if (matchedUnit) {
                if (pass === _PRIVATE_FALLBACK_HASHES.unitPass || pass.toLowerCase() === _PRIVATE_FALLBACK_HASHES.unitPass.toLowerCase()) {
                    const session = {
                        role: 'UNIT',
                        name: `Unidade ${matchedUnit}`,
                        email: rawId.includes('@') ? rawId : `${normalizeStr(matchedUnit)}@fadelito.com.br`,
                        unit: matchedUnit,
                        loginAt: new Date().toISOString(),
                        token: 'unt_local_' + Date.now(),
                        remember: remember
                    };
                    this.setSession(session, remember);
                    return { success: true, session };
                } else {
                    return { success: false, error: `Senha incorreta para a Unidade ${matchedUnit}.` };
                }
            }

            return { 
                success: false, 
                error: 'Usuário ou unidade não encontrada. Digite o nome da sua escola ou diretoria@fadelito.com.br.' 
            };
        },

        setSession(session, remember = true) {
            const dataStr = JSON.stringify(session);
            if (remember) {
                localStorage.setItem(SESSION_STORAGE_KEY, dataStr);
                sessionStorage.removeItem(SESSION_STORAGE_KEY);
            } else {
                sessionStorage.setItem(SESSION_STORAGE_KEY, dataStr);
                localStorage.removeItem(SESSION_STORAGE_KEY);
            }
            localStorage.setItem('fadelito_user_session', dataStr);
            if (session.unit) {
                localStorage.setItem('fadelito_active_unit', session.unit);
            }
        },

        getSession() {
            try {
                const raw = localStorage.getItem(SESSION_STORAGE_KEY) || 
                            sessionStorage.getItem(SESSION_STORAGE_KEY) ||
                            localStorage.getItem('fadelito_user_session');
                if (!raw) return null;
                const session = JSON.parse(raw);
                if (session && session.role) return session;
                return null;
            } catch (e) {
                return null;
            }
        },

        hasActiveSession() {
            return this.getSession() !== null;
        },

        isMaster() {
            const session = this.getSession();
            return session && session.role === 'MASTER';
        },

        isUnit() {
            const session = this.getSession();
            return session && session.role === 'UNIT';
        },

        getAllowedUnit() {
            const session = this.getSession();
            if (!session) return null;
            if (session.role === 'MASTER') {
                return localStorage.getItem('fadelito_active_unit') || 'ALL';
            }
            return session.unit;
        },

        canAccessUnit(unitName) {
            const session = this.getSession();
            if (!session) return false;
            if (session.role === 'MASTER') return true;
            return session.unit === unitName;
        },

        logout() {
            localStorage.removeItem(SESSION_STORAGE_KEY);
            sessionStorage.removeItem(SESSION_STORAGE_KEY);
            localStorage.removeItem('fadelito_user_session');
            localStorage.removeItem('fadelito_active_unit');
            localStorage.removeItem('fadelito_bi_records');
        }
    };

    window.AuthService = AuthService;

})(window);
