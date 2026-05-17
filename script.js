// DADOS
const SERVICES = [
    {
        id: "cras-norte",
        type: "cras",
        name: "CRAS Ceilândia Norte",
        shortDesc: "Cesta Básica · Cadastro Único · Bolsa Família · BPC",
        pills: ["Cesta Básica", "Cadastro Único", "Bolsa Família", "BPC"],
        descFull: "Atende famílias em situação de vulnerabilidade social com cadastro e acesso a benefícios do Governo Federal.",
        address: "QNM 13, Módulo C, Ceilândia Norte – Brasília/DF",
        mapsUrl: "https://maps.google.com/?q=CRAS+Ceilândia+Norte+Brasília+DF",
        references: [
            { icon: "landmark", text: "Próximo ao Mercadão da Ceilândia (Feira do Produtor da Ceilândia Norte)" },
            { icon: "building", text: "A 3 quadras da Caixa d'Água da Ceilândia Norte, sentido Q. Norte" },
            { icon: "bus", text: "Ponto de ônibus na QNM 13 – várias linhas com destino à Ceilândia Norte" }
        ],
        schedule: [
            { day: "Segunda a Sexta", time: "08h – 17h" },
            { day: "Sábado", time: "Fechado" },
            { day: "Domingo e Feriados", time: "Fechado" }
        ],
        phone: "(61) 3451-0000",
        docs: [
            { name: "RG ou CNH", hint: "Documento com foto. Pode ser digital.", alert: false },
            { name: "CPF", hint: "Cadastro de Pessoa Física. Pode consultar online no site da Receita Federal.", alert: false },
            { name: "Comprovante de Residência", hint: "Conta de luz, água ou gás dos últimos 3 meses no seu nome.", alert: true },
            { name: "Carteira de Trabalho (CTPS)", hint: "Física ou digital (App Carteira de Trabalho Digital).", alert: false },
            { name: "Certidão de Nascimento ou Casamento", hint: "Para inclusão de dependentes no Cadastro Único.", alert: false },
            { name: "Comprovante de Renda", hint: "Contracheque, extrato bancário ou declaração de autônomo.", alert: false }
        ]
    },
    {
        id: "creas-ceilandia",
        type: "creas",
        name: "CREAS Ceilândia",
        shortDesc: "Violência · Violação de direitos · Acolhimento · Denúncia",
        pills: ["Denúncia de violência", "Violação de direitos", "Acolhimento"],
        descFull: "Atende pessoas em situação de risco pessoal ou social, vítimas de violência, abuso, abandono ou violação de direitos.",
        address: "QNM 28, Conjunto A, Ceilândia Sul – Brasília/DF",
        mapsUrl: "https://maps.google.com/?q=CREAS+Ceilândia+Brasília+DF",
        references: [
            { icon: "hospital", text: "Próximo ao Hospital Regional da Ceilândia (HRC) — referência principal da região" },
            { icon: "landmark", text: "A poucos minutos a pé da Caixa d'Água da Ceilândia, ponto de referência central" },
            { icon: "bus", text: "Acesso pela Estação Ceilândia Centro do Metrô/BRT, com linhas de ônibus locais" }
        ],
        schedule: [
            { day: "Segunda a Sexta", time: "08h – 17h" },
            { day: "Plantão (urgências)", time: "24h – CREAS de Plantão DF" },
            { day: "Sábado e Domingo", time: "Somente plantão" }
        ],
        phone: "(61) 3451-1111",
        docs: [
            { name: "Documento de Identificação", hint: "RG, CNH ou qualquer documento com foto. Aceitam-se cópias.", alert: false },
            { name: "Laudo Médico (se houver)", hint: "Exame de corpo de delito, laudo psicológico ou relatório médico. NÃO é obrigatório para ser atendido.", alert: true },
            { name: "Boletim de Ocorrência (se houver)", hint: "Se já registrou BO na Delegacia, leve uma cópia. NÃO é exigido para o primeiro atendimento.", alert: true },
            { name: "Comprovante de Residência", hint: "Se possível. Caso não tenha, o atendimento é realizado assim mesmo.", alert: true },
            { name: "Certidão de Nascimento dos filhos", hint: "Para casos envolvendo crianças e adolescentes.", alert: false }
        ]
    }
];

// ICONES
const ICONS = {
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`,
    location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    docs: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    maps: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    landmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
    building: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="12"/><line x1="15" y1="22" x2="15" y2="12"/><line x1="9" y1="7" x2="9.01" y2="7"/><line x1="15" y1="7" x2="15.01" y2="7"/></svg>`,
    bus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
    hospital: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><line x1="12" y1="7" x2="12" y2="17"/><line x1="7" y1="12" x2="17" y2="12"/></svg>`,
    cras: `<svg viewBox="0 0 24 24" fill="none" stroke="#1b8c5e" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    creas: `<svg viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
};

// HOME CARDS
function buildHomeCards() {
    const crasContainer = document.querySelector('.cards-container');
    const creasContainer = document.querySelector('.creas-cards');

    SERVICES.forEach(svc => {
        const isCras = svc.type === 'cras';
        const container = isCras ? crasContainer : creasContainer;

        const card = document.createElement('article');
        card.className = `service-card ${svc.type}`;
        card.setAttribute('role', 'listitem');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${svc.name}: ${svc.shortDesc}`);

        card.innerHTML = `
          <div class="card-icon" aria-hidden="true">
            ${isCras ? ICONS.cras : ICONS.creas}
          </div>
          <div class="card-body">
            <span class="card-tag">${svc.type.toUpperCase()}</span>
            <div class="card-name">${svc.name}</div>
            <div class="card-desc">${svc.descFull}</div>
            <div class="card-services" aria-label="Serviços disponíveis">
              ${svc.pills.map(p => `<span class="service-pill">${p}</span>`).join('')}
            </div>
          </div>
          <div class="card-arrow" aria-hidden="true">${ICONS.arrow}</div>
        `;

        const navigate = () => showDetail(svc.id);
        card.addEventListener('click', navigate);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(); } });

        container.appendChild(card);
    });
}

// DETALHES
function buildDetail(svc) {
    const isCras = svc.type === 'cras';
    const totalDocs = svc.docs.length;

    const refsHtml = svc.references.map(r => `
        <div class="ref-point">
          ${ICONS[r.icon] || ICONS.landmark}
          <p>${r.text}</p>
        </div>
      `).join('');

    const scheduleHtml = svc.schedule.map(s => `
        <div class="schedule-row">
          <span class="schedule-day">${s.day}</span>
          <span class="schedule-time">${s.time}</span>
        </div>
      `).join('');

    const docsHtml = svc.docs.map((doc, i) => `
        <div class="checklist-item ${doc.alert ? 'alert-item' : ''}"
             role="checkbox"
             aria-checked="false"
             tabindex="0"
             data-index="${i}"
             aria-label="${doc.name}${doc.alert ? ' — item de atenção' : ''}">
          <div class="check-box" aria-hidden="true">${ICONS.check}</div>
          <div class="check-text">
            <div class="check-name">${doc.name}</div>
            <div class="check-hint">${doc.hint}</div>
            ${doc.alert ? `<span class="alert-badge">${ICONS.alert} Atenção — leve este!</span>` : ''}
          </div>
        </div>
      `).join('');

    const detail = document.getElementById('screenDetail');
    detail.innerHTML = `
        <section class="detail-hero ${isCras ? 'cras-bg' : 'creas-bg'}" aria-labelledby="detailTitle">
          <span class="detail-tag">${svc.type.toUpperCase()}</span>
          <h2 id="detailTitle">${svc.name}</h2>
          <p>${svc.descFull}</p>
        </section>

        <div class="detail-content">

          <!-- Localização -->
          <div class="detail-card" aria-labelledby="labelLoc">
            <div class="detail-card-title" style="color:var(--blue-deep)" id="labelLoc">
              ${ICONS.location} Onde fica
            </div>
            <div class="location-main">📍 ${svc.name}</div>
            <div class="location-street">${svc.address}</div>
            <div class="ref-points" aria-label="Pontos de referência populares">
              ${refsHtml}
            </div>
            <a href="${svc.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-maps" aria-label="Abrir localização no Google Maps">
              ${ICONS.maps} Abrir no Google Maps
            </a>
          </div>

          <!-- Horário -->
          <div class="detail-card" aria-labelledby="labelHorario">
            <div class="detail-card-title" style="color:var(--ink-soft)" id="labelHorario">
              ${ICONS.clock} Horários de Atendimento
            </div>
            <div class="schedule-grid" role="list">
              ${scheduleHtml}
            </div>
          </div>

          <!-- Contato -->
          <div class="detail-card" aria-labelledby="labelContato">
            <div class="detail-card-title" style="color:var(--ink-soft)" id="labelContato">
              ${ICONS.phone} Contato
            </div>
            <div class="contacts">
              <div class="contact-row">
                ${ICONS.phone}
                <a href="tel:${svc.phone.replace(/\D/g, '')}" aria-label="Ligar para ${svc.phone}">${svc.phone}</a>
              </div>
              <div class="contact-row">
                ${ICONS.info}
                <span>Ligue antes de ir para confirmar atendimento</span>
              </div>
            </div>
          </div>

          <!-- Checklist Documentos -->
          <div class="detail-card" aria-labelledby="labelDocs">
            <div class="detail-card-title" style="color:var(--ink-soft)" id="labelDocs">
              ${ICONS.docs} Documentos Necessários
            </div>

            <div class="progress-wrap" role="status" aria-live="polite" aria-label="Progresso da checklist de documentos">
              <div class="progress-header">
                <span class="progress-label">Documentos conferidos</span>
                <span class="progress-count" id="progressCount">0 / ${totalDocs}</span>
              </div>
              <div class="progress-bar-bg" aria-hidden="true">
                <div class="progress-bar-fill" id="progressFill"></div>
              </div>
              <div class="progress-ready" id="progressReady" role="alert" aria-live="assertive">
                ${ICONS.check} Você está pronto para ir!
              </div>
            </div>

            <div class="checklist" role="group" aria-label="Lista de documentos — marque os que você já tem">
              ${docsHtml}
            </div>
          </div>

        </div>

        <footer class="footer" role="contentinfo">
          <strong>⚠️ Guia acadêmico informativo</strong><br />
          Sem vínculo oficial com órgãos públicos.<br />
          Confirme informações diretamente com o serviço.
        </footer>
      `;

    // checklist
    const items = detail.querySelectorAll('.checklist-item');
    const fill = detail.querySelector('#progressFill');
    const count = detail.querySelector('#progressCount');
    const ready = detail.querySelector('#progressReady');

    function updateProgress() {
        const checked = detail.querySelectorAll('.checklist-item.checked').length;
        const pct = Math.round((checked / totalDocs) * 100);
        fill.style.width = pct + '%';
        count.textContent = `${checked} / ${totalDocs}`;
        if (checked === totalDocs) {
            ready.classList.add('show');
        } else {
            ready.classList.remove('show');
        }
    }

    items.forEach(item => {
        const toggle = () => {
            const isChecked = item.classList.toggle('checked');
            item.setAttribute('aria-checked', isChecked ? 'true' : 'false');
            updateProgress();
        };
        item.addEventListener('click', toggle);
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
    });
}

// NAVEGAÇÃO
function showDetail(serviceId) {
    const svc = SERVICES.find(s => s.id === serviceId);
    if (!svc) return;

    buildDetail(svc);

    document.getElementById('screenHome').classList.remove('active');
    document.getElementById('screenDetail').classList.add('active');
    document.getElementById('btnBack').style.display = 'flex';

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Atualiza pagina
    document.title = `${svc.name} – SOSS Ceilândia`;
}

function showHome() {
    document.getElementById('screenDetail').classList.remove('active');
    document.getElementById('screenHome').classList.add('active');
    document.getElementById('btnBack').style.display = 'none';
    document.title = 'SOSS Ceilândia';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// INICIA
document.addEventListener('DOMContentLoaded', () => {
    buildHomeCards();
    document.getElementById('btnBack').addEventListener('click', showHome);
});