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

    // Lista oficial dos 10 Gestores / Supervisores com unidades atribuídas
    const SUPERVISORS = [
        {
            id: 'luana',
            name: 'Luana Silveira',
            username: 'luana',
            email: 'luana@fadelito.com.br',
            password: '5luanalpm',
            mnemonic: 'Prefixo 5 + luana + lpm (Lapa, Panamby, Moema)',
            units: ["Lapa", "Panamby", "Moema"]
        },
        {
            id: 'pamela',
            name: 'Pamela Duarte',
            username: 'pamela',
            email: 'pamela@fadelito.com.br',
            password: '2026pamfadelitos',
            mnemonic: 'Ano 2026 + pam + fadelitos (Vila Gumercindo)',
            units: ["Vila Gumercindo"]
        },
        {
            id: 'aurelio',
            name: 'Aurélio Zanin',
            username: 'aurelio',
            email: 'aurelio@fadelito.com.br',
            password: 'sulaurelio2026',
            mnemonic: 'sul + aurelio + 2026 (São Caetano, Santo André, Ipiranga, Jardins, Saúde)',
            units: ["São Caetano", "Santo Andre", "Ipiranga", "Jardins", "Saúde"]
        },
        {
            id: 'camila',
            name: 'Camila Brandão',
            username: 'camila',
            email: 'camila@fadelito.com.br',
            password: 'intercamila#26',
            mnemonic: 'inter (Interior) + camila + #26 (Campinas, Piracicaba)',
            units: ["Campinas", "Piracicaba"]
        },
        {
            id: 'rodrigo',
            name: 'Rodrigo Mendes',
            username: 'rodrigo',
            email: 'rodrigo@fadelito.com.br',
            password: '7rodrigogob',
            mnemonic: '7 + rodrigo + gob (Granja Viana, Osasco, Bonfiglioli)',
            units: ["Granja Viana", "Osasco", "Bonfiglioli"]
        },
        {
            id: 'juliana',
            name: 'Juliana Prado',
            username: 'juliana',
            email: 'juliana@fadelito.com.br',
            password: '2026julizl#amtg',
            mnemonic: '2026 + juli + zl (Zona Leste) + amtg (Analia, Mooca, Tatuapé, Guarulhos)',
            units: ["Analia Franco", "Mooca", "Tatuapé", "Guarulhos"]
        },
        {
            id: 'fernando',
            name: 'Fernando Costa',
            username: 'fernando',
            email: 'fernando@fadelito.com.br',
            password: 'sulfernando*bcam',
            mnemonic: 'sul + fernando + * + bcam (Brooklin, Campo Belo, Alto da Boa Vista, Marajoara)',
            units: ["Alto da Boa Vista", "Brooklin", "Campo Belo", "Marajoara"]
        },
        {
            id: 'beatriz',
            name: 'Beatriz Nogueira',
            username: 'beatriz',
            email: 'beatriz@fadelito.com.br',
            password: '8biafadelito#hppm',
            mnemonic: '8 + bia + fadelito + # + hppm (Higienópolis, Perdizes, Pinheiros, Vila Madalena)',
            units: ["Higienópolis", "Perdizes", "Pinheiros", "Vila Madalena"]
        },
        {
            id: 'marcelo',
            name: 'Marcelo Albuquerque',
            username: 'marcelo',
            email: 'marcelo@fadelito.com.br',
            password: 'morumbimarcelo26',
            mnemonic: 'morumbi + marcelo + 26 (Morumbi, Real Parque, Leopoldina, Sônia)',
            units: ["Portal do Morumbi", "Real Parque", "Vila Leopoldina", "Vila Sônia"]
        },
        {
            id: 'tatiane',
            name: 'Tatiane Ramos',
            username: 'tatiane',
            email: 'tatiane@fadelito.com.br',
            password: 'tatiane2026#ackiv',
            mnemonic: 'tatiane + 2026 + # + ackiv (Aclimação, Chacara Klabin, Indianópolis, Paraíso, Vila Mariana)',
            units: ["Aclimação", "Chacara Klabin", "Indianópolis", "Paraiso", "Vila Mariana"]
        }
    ];

    // Credenciais de contingência local protegidas em closure privada (usadas apenas se a API serverless estiver offline)
    const _PRIVATE_FALLBACK_HASHES = {
        masterUsers: ['diretoria', 'admin', 'master'],
        masterPass: 'Diretoria@2026',
        unitPass: 'Fadelito@2026'
    };

    const AuthService = {
        UNITS: CANONICAL_UNITS,
        SUPERVISORS: SUPERVISORS,

        /**
         * Localiza uma supervisão válida a partir do texto informado (e-mail, nome ou slug)
         */
        findSupervisor(input) {
            if (!input) return null;
            const clean = normalizeStr(input.replace(/@fadelito\.com\.br$/i, ''));
            return SUPERVISORS.find(s => {
                const sUser = normalizeStr(s.username);
                const sName = normalizeStr(s.name);
                return sUser === clean || sName === clean || clean.includes(sUser);
            }) || null;
        },

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
            
            // 2.1 Diretoria Geral (Master)
            const isMaster = _PRIVATE_FALLBACK_HASHES.masterUsers.includes(cleanId);
            if (isMaster) {
                if (pass === _PRIVATE_FALLBACK_HASHES.masterPass || pass.toLowerCase() === _PRIVATE_FALLBACK_HASHES.masterPass.toLowerCase()) {
                    const session = {
                        role: 'MASTER',
                        name: 'Diretoria Geral',
                        username: 'diretoria',
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

            // 2.2 Supervisão / Gestores Fictícios (10 Supervisores)
            const matchedSupervisor = this.findSupervisor(rawId);
            if (matchedSupervisor) {
                if (pass === matchedSupervisor.password) {
                    const session = {
                        role: 'SUPERVISOR',
                        name: matchedSupervisor.name,
                        username: matchedSupervisor.username,
                        email: matchedSupervisor.email,
                        units: matchedSupervisor.units.slice(),
                        unit: (matchedSupervisor.units.length > 1) ? 'SUPERVISOR_ALL' : matchedSupervisor.units[0],
                        loginAt: new Date().toISOString(),
                        token: 'sup_local_' + Date.now(),
                        remember: remember
                    };
                    this.setSession(session, remember);
                    return { success: true, session };
                } else {
                    return { success: false, error: `Senha incorreta para a Supervisão (${matchedSupervisor.name}).` };
                }
            }

            // 2.3 Unidade Escolar Individual
            const matchedUnit = this.findUnit(rawId);
            if (matchedUnit) {
                if (pass === _PRIVATE_FALLBACK_HASHES.unitPass || pass.toLowerCase() === _PRIVATE_FALLBACK_HASHES.unitPass.toLowerCase()) {
                    const session = {
                        role: 'UNIT',
                        name: `Unidade ${matchedUnit}`,
                        username: normalizeStr(matchedUnit),
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
                error: 'Usuário não encontrado. Digite seu usuário de supervisão, nome da unidade ou diretoria@fadelito.com.br.' 
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

        isSupervisor() {
            const session = this.getSession();
            return session && session.role === 'SUPERVISOR';
        },

        isUnit() {
            const session = this.getSession();
            return session && session.role === 'UNIT';
        },

        getAllowedUnits() {
            const session = this.getSession();
            if (!session) return [];
            if (session.role === 'MASTER') return CANONICAL_UNITS.slice();
            if (session.role === 'SUPERVISOR') return (session.units || []).slice();
            if (session.role === 'UNIT' && session.unit) return [session.unit];
            return [];
        },

        getAllowedUnit() {
            const session = this.getSession();
            if (!session) return null;
            if (session.role === 'MASTER') {
                return localStorage.getItem('fadelito_active_unit') || 'ALL';
            }
            if (session.role === 'SUPERVISOR') {
                return localStorage.getItem('fadelito_active_unit') || (session.units && session.units.length > 1 ? 'SUPERVISOR_ALL' : (session.units ? session.units[0] : null));
            }
            return session.unit;
        },

        canAccessUnit(unitName) {
            const session = this.getSession();
            if (!session) return false;
            if (session.role === 'MASTER') return true;
            if (session.role === 'SUPERVISOR') {
                if (unitName === 'SUPERVISOR_ALL') return true;
                return Array.isArray(session.units) && session.units.includes(unitName);
            }
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
