const course = {
  outcomes: [
    { code: 'CPMK065', cpl: 'CPL06', title: 'Adaptasi & lifelong learning', text: 'Menilai perkembangan keamanan web, OWASP, framework, advisory, dan praktik DevSecOps secara kritis.' },
    { code: 'CPMK082', cpl: 'CPL08', title: 'Implementasi kontrol keamanan', text: 'Mengidentifikasi kerentanan, menerapkan mitigasi, autentikasi/otorisasi, HTTPS, headers, CSP, serta security testing tools.' },
    { code: 'CPMK084', cpl: 'CPL08', title: 'Integrasi teknologi modern', text: 'Merancang keamanan web yang scalable dan adaptif dengan cloud, Zero Trust, big data, serta AI/ML.' }
  ],
  assessments: [
    { label: 'UTS', value: 25, tone: 'blue' },
    { label: 'UAS / Proyek', value: 35, tone: 'navy' },
    { label: 'Tugas Praktik', value: 15, tone: 'teal' },
    { label: 'Kuis & Partisipasi', value: 15, tone: 'cyan' },
    { label: 'Presentasi Proyek', value: 10, tone: 'orange' }
  ],
  weeks: [
    { week: 1, code: 'CPMK065-1', title: 'Prinsip Dasar Keamanan Aplikasi Web', topics: ['attack surface & trust boundary', 'browser/server/client security', 'DNS dan HTTP/HTTPS', 'Same-Origin Policy & CORS', 'tren ancaman siber'], method: 'Kuliah interaktif + short discussion + demo protokol', handsOn: 'Observasi HTTP, origin, localStorage, dan trust boundary menggunakan browser DevTools.', assessment: null, project: false },
    { week: 2, code: 'CPMK065-2', title: 'Standar Keamanan Web — OWASP Top 10', topics: ['OWASP Top 10', 'risk & impact', 'cookies/session sebagai attack surface', 'defense-in-depth'], method: 'Case method + diskusi + identifikasi kategori risiko', handsOn: 'Pemetaan risiko OWASP pada aplikasi latihan dan analisis request/response.', assessment: null, project: false },
    { week: 3, code: 'CPMK065-3', title: 'Pembaruan Teknologi & Framework Keamanan', topics: ['security framework modern', 'SAST vs DAST', 'dependency scanning', 'security advisory', 'continuous learning'], method: 'Dokumentasi review + short discussion + framework comparison', handsOn: 'Membandingkan security features/advisory dan menilai relevansi kontrol.', assessment: { type: 'Kuis', weight: 5 }, project: false },
    { week: 4, code: 'CPMK065-4', title: 'DevSecOps & Secure SDLC', topics: ['shift-left security', 'CI/CD security gates', 'SAST/DAST/SCA', 'secrets management', 'pipeline hardening'], method: 'Kuliah + diskusi pipeline + simulasi', handsOn: 'Mendesain CI/CD security gate untuk proyek fiktif dan membaca hasil scanner.', assessment: null, project: false },
    { week: 5, code: 'CPMK082-1', title: 'Identifikasi Kerentanan Umum', topics: ['SQL Injection', 'XSS', 'CSRF', 'clickjacking', 'evidence & reproduction'], method: 'Demo terkontrol + praktikum lab + diskusi dampak', handsOn: 'Menguji SQLi, XSS, dan CSRF pada target lab yang disediakan.', assessment: { type: 'Tugas Praktik', weight: 5 }, project: false },
    { week: 6, code: 'CPMK082-2', title: 'Validasi, Sanitasi & Output Encoding', topics: ['allowlist validation', 'sanitasi kontekstual', 'prepared statement', 'output encoding', 'retest'], method: 'Live coding + code review + hands-on', handsOn: 'Memperbaiki aplikasi rentan lalu membuktikan mitigasi melalui retest.', assessment: { type: 'Tugas Praktik', weight: 5 }, project: false },
    { week: 7, code: 'CPMK082-3', title: 'Autentikasi, Session & Otorisasi', topics: ['password security', 'session management', 'Secure/HttpOnly/SameSite', 'OAuth/JWT/WebAuthn', 'RBAC & least privilege'], method: 'Studi kasus + demo + short discussion', handsOn: 'Implementasi login/session/RBAC sederhana dan pengujian akses antar-role.', assessment: { type: 'Kuis', weight: 5 }, project: false },
    { week: 8, code: 'UTS', title: 'Ujian Tengah Semester', topics: ['fondasi keamanan', 'OWASP', 'framework', 'DevSecOps', 'kerentanan', 'mitigasi input'], method: 'Tes tertulis · 120 menit', handsOn: 'Tidak ada hands-on kelas.', assessment: { type: 'UTS', weight: 25 }, project: false },
    { week: 9, code: 'CPMK082-4', title: 'HTTPS/TLS, Secure Headers & CSP', topics: ['TLS & certificate', 'HSTS', 'X-Content-Type-Options', 'Referrer-Policy', 'CSP', 'frame-ancestors'], method: 'Kuliah + demo konfigurasi + diskusi', handsOn: 'Mengaktifkan security headers/CSP pada lab dan memverifikasi dengan DevTools/curl.', assessment: { type: 'Kuis', weight: 5 }, project: false },
    { week: 10, code: 'CPMK082-5', title: 'Burp Suite & OWASP ZAP', topics: ['intercepting proxy', 'Repeater', 'passive/active scan', 'false positive', 'evidence', 'retest'], method: 'Demo + praktikum terarah + review hasil', handsOn: 'Mengintersep request, memvalidasi alert, dan menyusun rekomendasi mitigasi pada localhost.', assessment: { type: 'Tugas Praktik', weight: 5 }, project: false },
    { week: 11, code: 'CPMK084-1', title: 'Cloud Security untuk Aplikasi Web', topics: ['shared responsibility', 'IAM', 'WAF', 'load balancer', 'secrets/key management', 'logging', 'network segmentation'], method: 'Architecture case + diskusi kelompok', handsOn: 'Mendesain secure scalable web architecture pada AWS/GCP/Azure.', assessment: null, project: true },
    { week: 12, code: 'CPMK084-2', title: 'Zero Trust Architecture', topics: ['verify explicitly', 'least privilege', 'assume breach', 'identity-centric control', 'micro-segmentation', 'continuous verification'], method: 'Case method + architecture workshop', handsOn: 'Memetakan identity, policy decision, enforcement point, telemetry, dan response.', assessment: null, project: true },
    { week: 13, code: 'CPMK084-3', title: 'Big Data untuk Deteksi Anomali', topics: ['security logs', 'data pipeline', 'feature extraction', 'stream/batch processing', 'dashboard', 'anomaly detection'], method: 'Studi kasus log + pipeline design + hands-on', handsOn: 'Mengolah dataset log, membuat fitur keamanan, dan mendeteksi pola/anomali dasar.', assessment: null, project: true },
    { week: 14, code: 'CPMK084-4', title: 'AI/ML untuk Deteksi Pola Serangan', topics: ['supervised vs unsupervised', 'feature engineering', 'classification/anomaly detection', 'precision/recall/F1', 'threshold', 'robustness'], method: 'Praktikum model + discussion + project presentation', handsOn: 'Membangun model sederhana, mengevaluasi confusion matrix, dan menguji threshold.', assessment: { type: 'Presentasi Proyek', weight: 10 }, project: true },
    { week: 15, code: 'CPMK084-5', title: 'Adaptive Security Plan', topics: ['threat modeling', 'risk prioritization', 'continuous monitoring', 'supply-chain risk', 'incident response', 'continuous improvement'], method: 'Workshop + peer review + finalisasi proyek', handsOn: 'Menyusun roadmap hardening, monitoring, incident response, dan feedback loop.', assessment: null, project: true },
    { week: 16, code: 'UAS', title: 'UAS — Proyek Integratif', topics: ['secure app controls', 'cloud', 'Zero Trust', 'big data/logging', 'AI/ML', 'adaptive security'], method: 'Demo/evaluasi proyek + video wajib', handsOn: 'Presentasi hasil proyek, evidence pengujian, dan demo kontrol keamanan.', assessment: { type: 'UAS / Proyek', weight: 35 }, project: true }
  ],
  assessmentItems: [
    { week: 3, title: 'Kuis 1 — Framework & Security Advisory', type: 'Kuis', weight: 5, scope: 'Pembaruan teknologi, framework keamanan, SAST/DAST/SCA, dan security advisory.', output: 'Lembar jawaban kuis + analisis singkat berbasis dokumentasi.', rubric: ['Ketepatan konsep/jawaban — 60%', 'Kualitas analisis & argumentasi — 40%'] },
    { week: 5, title: 'Tugas 1 — Identifikasi SQLi, XSS, CSRF', type: 'Tugas Praktik', weight: 5, scope: 'Pengujian terkontrol terhadap aplikasi lab.', output: 'Laporan PDF: langkah, evidence, dampak, reproduksi, rekomendasi.', rubric: ['Ketepatan identifikasi — 40%', 'Analisis dampak & reproduksi — 30%', 'Dokumentasi & rekomendasi — 30%'] },
    { week: 6, title: 'Tugas 2 — Secure Input Handling', type: 'Tugas Praktik', weight: 5, scope: 'Validasi, sanitasi, prepared statement, output encoding, dan retest.', output: 'Source code hasil perbaikan + laporan retest PDF.', rubric: ['Implementasi mitigasi — 45%', 'Kualitas secure coding — 25%', 'Keberhasilan retest — 30%'] },
    { week: 7, title: 'Kuis 2 — Auth, Session, Authorization', type: 'Kuis', weight: 5, scope: 'Authentication vs authorization, cookie attributes, session security, RBAC, least privilege.', output: 'Lembar jawaban + analisis skenario.', rubric: ['Ketepatan jawaban — 60%', 'Analisis kasus — 40%'] },
    { week: 8, title: 'UTS', type: 'Ujian', weight: 25, scope: 'Materi Pertemuan 1–7 sesuai kisi-kisi RPKPS.', output: 'Tes tertulis · 120 menit.', rubric: ['Pilihan ganda, uraian singkat, studi kasus, dan esai'] },
    { week: 9, title: 'Kuis 3 — HTTPS, Headers & CSP', type: 'Kuis', weight: 5, scope: 'TLS, certificate, HSTS, security headers, CSP dan browser controls.', output: 'Lembar jawaban + analisis konfigurasi.', rubric: ['Ketepatan jawaban — 60%', 'Analisis konfigurasi — 40%'] },
    { week: 10, title: 'Tugas 3 — Burp Suite / OWASP ZAP', type: 'Tugas Praktik', weight: 5, scope: 'Intercept, Repeater, scanning, validasi temuan, false positive, rekomendasi.', output: 'Laporan PDF berisi evidence dan hasil validasi.', rubric: ['Penggunaan tools — 30%', 'Validasi temuan — 40%', 'Rekomendasi & kualitas laporan — 30%'] },
    { week: 14, title: 'Presentasi Proyek — AI/ML Threat Detection', type: 'Presentasi', weight: 10, scope: 'Masalah, dataset/fitur, model, metrik, keterbatasan, implikasi keamanan.', output: 'Slide + kode/notebook/artefak + demo bila tersedia.', rubric: ['Ketepatan teknis — 30%', 'Penguasaan materi — 25%', 'Sistematika & komunikasi — 20%', 'Artefak & tanya jawab — 25%'] },
    { week: 16, title: 'UAS — Proyek Integratif', type: 'Ujian', weight: 35, scope: 'Integrasi kontrol aplikasi, cloud, Zero Trust, logging/big data, AI/ML, dan adaptive security.', output: 'Laporan + artefak + evidence + video penjelasan/demo 10–15 menit.', rubric: ['Mengikuti kisi-kisi dan rubrik proyek UAS pada RPKPS'] }
  ],
  deliverables: [
    'Laporan proyek akhir dalam format PDF.',
    'Source code / configuration / notebook yang relevan.',
    'Diagram arsitektur keamanan aplikasi web.',
    'Evidence pengujian Burp Suite/OWASP ZAP dan hasil retest.',
    'Rancangan cloud security, IAM, WAF, logging, dan network segmentation.',
    'Pemetaan prinsip Zero Trust.',
    'Pipeline log/big data dan demonstrasi AI/ML sederhana.',
    'Adaptive security plan: hardening, monitoring, incident response, continuous improvement.',
    'Video penjelasan dan demo 10–15 menit.'
  ],
  phases: [
    { week: 11, label: 'Cloud Architecture', text: 'Rancang arsitektur scalable, IAM, WAF, secrets, logging, segmentasi.' },
    { week: 12, label: 'Zero Trust', text: 'Definisikan identity, policy, enforcement, least privilege, continuous verification.' },
    { week: 13, label: 'Security Data', text: 'Bangun rancangan pipeline log/big data dan fitur deteksi anomali.' },
    { week: 14, label: 'AI/ML + Preview', text: 'Implementasikan model sederhana dan presentasikan hasil antara.' },
    { week: 15, label: 'Adaptive Plan', text: 'Finalisasi threat model, prioritas risiko, hardening, monitoring, incident response.' },
    { week: 16, label: 'Final Evaluation', text: 'Kumpulkan laporan, artefak, video, dan lakukan demo/evaluasi proyek.' }
  ],
  references: [
    { name: 'OWASP Top 10', desc: 'Referensi utama kategori risiko keamanan aplikasi web.', url: 'https://owasp.org/www-project-top-ten/' },
    { name: 'OWASP Web Security Testing Guide', desc: 'Panduan metodologi pengujian keamanan web.', url: 'https://owasp.org/www-project-web-security-testing-guide/' },
    { name: 'PortSwigger Web Security Academy', desc: 'Materi praktik dan lab keamanan aplikasi web.', url: 'https://portswigger.net/web-security' },
    { name: 'Burp Suite Documentation', desc: 'Dokumentasi Proxy, Repeater, Scanner, dan workflow Burp.', url: 'https://portswigger.net/burp/documentation' },
    { name: 'OWASP ZAP', desc: 'Dokumentasi security testing tool open-source.', url: 'https://www.zaproxy.org/' },
    { name: 'MDN Web Security', desc: 'Referensi browser security, headers, CSP, cookies, dan platform web.', url: 'https://developer.mozilla.org/en-US/docs/Web/Security' },
    { name: 'NIST Zero Trust Architecture', desc: 'Referensi prinsip dan arsitektur Zero Trust.', url: 'https://csrc.nist.gov/publications/detail/sp/800-207/final' },
    { name: 'The Web Application Hacker’s Handbook', desc: 'Stuttard & Pinto — referensi fundamental web application security.', url: 'https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472' }
  ]
};

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const phaseForWeek = (week) => {
  if (week <= 4) return { key: 'foundation', label: 'Foundation' };
  if (week <= 7) return { key: 'build', label: 'Secure Build' };
  if (week === 8) return { key: 'exam', label: 'UTS' };
  if (week <= 10) return { key: 'ops', label: 'Security Ops' };
  if (week <= 15) return { key: 'intelligence', label: 'Intelligent Defense' };
  return { key: 'final', label: 'UAS' };
};

function renderOutcomes() {
  document.querySelector('#outcomesGrid').innerHTML = course.outcomes.map(item => `
    <article class="outcome-card">
      <div class="outcome-meta"><span class="badge">${escapeHtml(item.code)}</span><span>${escapeHtml(item.cpl)}</span></div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>`).join('');
}

function renderAssessmentSummary() {
  document.querySelector('#assessmentSummary').innerHTML = course.assessments.map(item => `
    <div class="weight-card tone-${item.tone}">
      <span>${escapeHtml(item.label)}</span>
      <strong>${item.value}%</strong>
      <div class="weight-track"><i style="width:${Math.min(100, item.value * 2.4)}%"></i></div>
    </div>`).join('');
}

function renderRoadmap() {
  document.querySelector('#semesterRoadmap').innerHTML = course.weeks.map(item => {
    const phase = phaseForWeek(item.week);
    return `<a class="roadmap-week ${phase.key} ${item.assessment ? 'has-assessment' : ''}" href="#week-${item.week}" data-week-jump="${item.week}" aria-label="Minggu ${item.week}: ${escapeHtml(item.title)}">
      <strong>${item.week}</strong><i></i><span>${escapeHtml(phase.label)}</span>
    </a>`;
  }).join('');
}

function scheduleCard(item) {
  const phase = phaseForWeek(item.week);
  const assessment = item.assessment
    ? `<span class="badge ${item.assessment.type.includes('UAS') ? 'badge-danger' : item.assessment.type.includes('UTS') ? 'badge-warning' : ''}">${escapeHtml(item.assessment.type)} · ${item.assessment.weight}%</span>`
    : '<span class="badge badge-muted">Class</span>';

  return `<details class="schedule-card ${phase.key}" id="week-${item.week}">
    <summary>
      <div class="schedule-summary">
        <div class="week-bubble">${item.week}</div>
        <div class="schedule-title-wrap"><span>${escapeHtml(phase.label)} · ${escapeHtml(item.code)}</span><h3>${escapeHtml(item.title)}</h3></div>
        <div class="schedule-assessment">${assessment}</div>
        <div class="schedule-chevron">＋</div>
      </div>
    </summary>
    <div class="schedule-body">
      <div><h4>Materi inti</h4><ul>${item.topics.map(topic => `<li>${escapeHtml(topic)}</li>`).join('')}</ul></div>
      <div><h4>Class flow</h4><p>${escapeHtml(item.method)}</p></div>
      <div class="practice-box"><h4>Hands-on / exercise</h4><p>${escapeHtml(item.handsOn)}</p></div>
    </div>
  </details>`;
}

let activeScheduleFilter = 'all';
let activeScheduleView = 'compact';

function renderSchedule() {
  const items = course.weeks.filter(item => {
    if (activeScheduleFilter === 'assessment') return Boolean(item.assessment);
    if (activeScheduleFilter === 'project') return item.project;
    return true;
  });
  const list = document.querySelector('#scheduleList');
  list.className = `schedule-list ${activeScheduleView}`;
  list.innerHTML = items.map(scheduleCard).join('');
}

function renderMaterials(query = '') {
  const normalized = query.trim().toLowerCase();
  const items = course.weeks.filter(item => !['UTS', 'UAS'].includes(item.code));
  const filtered = items.filter(item => {
    if (!normalized) return true;
    const haystack = [item.title, item.code, item.method, item.handsOn, ...item.topics].join(' ').toLowerCase();
    return haystack.includes(normalized);
  });

  document.querySelector('#materialsGrid').innerHTML = filtered.map(item => `
    <article class="material-card">
      <div class="material-week">Pertemuan ${String(item.week).padStart(2, '0')}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.method)}</p>
      <details>
        <summary>Open material map</summary>
        <ul>${item.topics.map(topic => `<li>${escapeHtml(topic)}</li>`).join('')}</ul>
        <p class="hands-on-note"><strong>Hands-on:</strong> ${escapeHtml(item.handsOn)}</p>
      </details>
    </article>`).join('');
  document.querySelector('#materialCount').textContent = `${filtered.length} material${filtered.length === 1 ? '' : 's'} found`;
}

function assessmentTypeClass(type) {
  if (type === 'Kuis') return 'type-kuis';
  if (type === 'Ujian') return 'type-ujian';
  if (type === 'Presentasi') return 'type-presentasi';
  return 'type-task';
}

function renderAssessments() {
  const sorted = [...course.assessmentItems].sort((a, b) => a.week - b.week);
  document.querySelector('#assessmentGrid').innerHTML = sorted.map(item => `
    <article class="assessment-card ${assessmentTypeClass(item.type)}">
      <div class="assessment-head"><span class="badge">Week ${item.week} · ${escapeHtml(item.type)}</span><strong>${item.weight}%</strong></div>
      <h3>${escapeHtml(item.title)}</h3>
      <p><strong>Scope:</strong> ${escapeHtml(item.scope)}</p>
      <p><strong>Output:</strong> ${escapeHtml(item.output)}</p>
      <div class="rubric-box"><span>Rubric snapshot</span><ul>${item.rubric.map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul></div>
    </article>`).join('');
}

function renderProject() {
  document.querySelector('#deliverablesList').innerHTML = course.deliverables.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  document.querySelector('#projectPhases').innerHTML = course.phases.map((item, index) => `
    <div class="phase-item">
      <div class="phase-number">${index + 1}</div>
      <div><span>Week ${item.week}</span><h3>${escapeHtml(item.label)}</h3><p>${escapeHtml(item.text)}</p></div>
    </div>`).join('');
}

function renderReferences() {
  document.querySelector('#referenceGrid').innerHTML = course.references.map(item => `
    <a class="reference-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
      <span class="reference-arrow">↗</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.desc)}</p>
    </a>`).join('');
}

function setActiveButtons(selector, target) {
  document.querySelectorAll(selector).forEach(btn => btn.classList.remove('active'));
  target.classList.add('active');
}

function initScheduleControls() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeScheduleFilter = btn.dataset.filter;
      setActiveButtons('.filter-btn', btn);
      renderSchedule();
    });
  });
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeScheduleView = btn.dataset.view;
      setActiveButtons('.view-btn', btn);
      renderSchedule();
    });
  });
  document.querySelectorAll('[data-week-jump]').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activeScheduleFilter = 'all';
      const allButton = document.querySelector('.filter-btn[data-filter="all"]');
      if (allButton) setActiveButtons('.filter-btn', allButton);
      renderSchedule();
      requestAnimationFrame(() => {
        const target = document.querySelector(`#week-${link.dataset.weekJump}`);
        if (target) {
          target.open = true;
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  });
}

function initMaterialSearch() {
  const input = document.querySelector('#materialSearch');
  input.addEventListener('input', () => renderMaterials(input.value));
}

function initNavigation() {
  const toggle = document.querySelector('#navToggle');
  const nav = document.querySelector('#siteNav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

renderOutcomes();
renderAssessmentSummary();
renderRoadmap();
renderSchedule();
renderMaterials();
renderAssessments();
renderProject();
renderReferences();
initScheduleControls();
initMaterialSearch();
initNavigation();