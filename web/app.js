const techniqueListEl = document.getElementById('techniqueList');
const problemListEl = document.getElementById('problemList');
const techniqueTitleEl = document.getElementById('techniqueTitle');
const techniqueFilterEl = document.getElementById('techniqueFilter');
const problemFilterEl = document.getElementById('problemFilter');
const sortModeEl = document.getElementById('sortMode');
const metaEl = document.getElementById('meta');
const layoutEl = document.getElementById('layout');
const detailPanelEl = document.getElementById('detailPanel');
const problemDetailEl = document.getElementById('problemDetail');
const showTechniquesBtn = document.getElementById('showTechniques');

let indexData = null;
let selectedTechnique = null;
let selectedProblem = null;

showTechniquesBtn.hidden = true;

function renderMeta() {
  if (!indexData) return;
  const meta = indexData.meta || {};
  const updated = meta.updated_at ? new Date(meta.updated_at).toLocaleString() : 'n/a';
  metaEl.textContent = `Updated: ${updated} | Problems: ${meta.count_problems || 0} | Techniques: ${meta.count_techniques || 0}`;
}

function getLeetCodeUrl(slug) {
  return `https://leetcode.com/problems/${slug}/`;
}

function setDetailOpen(open) {
  layoutEl.classList.toggle('detail-open', open);
  showTechniquesBtn.hidden = !open;
  if (!open) {
    detailPanelEl.scrollTop = 0;
  }
}

function getTechniqueEntries() {
  if (!indexData) return [];
  const techniques = indexData.techniques || {};
  return Object.keys(techniques).map((name) => ({
    name,
    count: (techniques[name] || []).length,
  }));
}

function renderTechniques() {
  if (!indexData) return;
  const filter = techniqueFilterEl.value.trim().toLowerCase();
  const entries = getTechniqueEntries()
    .filter((item) => item.name.includes(filter))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  techniqueListEl.innerHTML = '';
  entries.forEach((item) => {
    const card = document.createElement('div');
    card.className = `card ${selectedTechnique === item.name ? 'active' : ''}`;
    card.innerHTML = `
      <div>
        <div class="title">${item.name}</div>
        <div class="tag">${item.count} problems</div>
      </div>
      <div class="count">${item.count}</div>
    `;
    card.addEventListener('click', () => {
      selectedTechnique = item.name;
      selectedProblem = null;
      setDetailOpen(false);
      renderDetail();
      renderTechniques();
      renderProblems();
    });
    techniqueListEl.appendChild(card);
  });
}

function renderDetail() {
  if (!selectedProblem) {
    problemDetailEl.innerHTML = '<div class="empty">Select a problem to view details.</div>';
    return;
  }

  const difficulty = selectedProblem.difficulty || 'unknown';
  const difficultyClass = ['easy', 'medium', 'hard'].includes(difficulty.toLowerCase())
    ? difficulty.toLowerCase()
    : '';
  const techniques = selectedProblem.techniques || [];
  const leetUrl = getLeetCodeUrl(selectedProblem.slug);
  const techniqueTags = techniques.length
    ? techniques.map((name) => `<span class="pill">${name}</span>`).join('')
    : '<span class="pill">n/a</span>';

  problemDetailEl.innerHTML = `
    <div>
      <div class="detail-title">${selectedProblem.frontend_id}. ${selectedProblem.title}</div>
      <div class="detail-sub">Slug: ${selectedProblem.slug}</div>
    </div>
    <div class="detail-tags">
      <span class="pill ${difficultyClass}">Difficulty: ${difficulty}</span>
      <span class="pill">#${selectedProblem.frontend_id}</span>
    </div>
    <div class="detail-actions">
      <a class="btn" href="${leetUrl}" target="_blank" rel="noopener">Open on LeetCode</a>
    </div>
    <div>
      <div class="detail-sub">Techniques</div>
      <div class="detail-tags">${techniqueTags}</div>
    </div>
  `;
}

function renderProblems() {
  if (!indexData) return;
  const techniques = indexData.techniques || {};
  const problems = indexData.problems || {};
  const filter = problemFilterEl.value.trim().toLowerCase();
  const sortMode = sortModeEl.value;

  let ids = [];
  if (selectedTechnique && techniques[selectedTechnique]) {
    ids = techniques[selectedTechnique];
  }

  const entries = ids.map((id) => problems[id]).filter(Boolean);

  const filtered = entries.filter((p) => {
    const text = `${p.frontend_id} ${p.title} ${p.slug} ${p.difficulty}`.toLowerCase();
    return text.includes(filter);
  });

  filtered.sort((a, b) => {
    if (sortMode === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortMode === 'id') {
      return Number(a.frontend_id) - Number(b.frontend_id);
    }
    return 0;
  });

  techniqueTitleEl.textContent = selectedTechnique
    ? `Problems • ${selectedTechnique}`
    : 'Problems';

  problemListEl.innerHTML = '';

  if (!selectedTechnique) {
    problemListEl.innerHTML = '<div class="card"><div class="title">Select a technique to view problems.</div></div>';
    return;
  }

  if (!filtered.length) {
    problemListEl.innerHTML = '<div class="card"><div class="title">No problems matched.</div></div>';
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement('div');
    const isActive = selectedProblem && selectedProblem.slug === p.slug;
    card.className = `card ${isActive ? 'active' : ''}`;
    card.innerHTML = `
      <div class="problem">
        <div class="title">${p.frontend_id}. ${p.title}</div>
        <div class="tag">${p.slug}</div>
        <div class="tag">Difficulty: ${p.difficulty || 'unknown'}</div>
      </div>
      <div class="problem-actions">
        <a class="problem-link" href="${getLeetCodeUrl(p.slug)}" target="_blank" rel="noopener">LeetCode</a>
      </div>
    `;
    card.addEventListener('click', () => {
      selectedProblem = p;
      setDetailOpen(true);
      renderProblems();
      renderDetail();
    });
    const link = card.querySelector('.problem-link');
    link.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    problemListEl.appendChild(card);
  });
}

async function loadIndex() {
  const response = await fetch('./index.json');
  indexData = await response.json();
  renderMeta();
  renderTechniques();
  renderProblems();
  renderDetail();
}

techniqueFilterEl.addEventListener('input', renderTechniques);
problemFilterEl.addEventListener('input', renderProblems);
sortModeEl.addEventListener('change', renderProblems);

showTechniquesBtn.addEventListener('click', () => {
  selectedProblem = null;
  setDetailOpen(false);
  renderDetail();
  renderProblems();
});

loadIndex().catch((err) => {
  metaEl.textContent = `Failed to load index.json: ${err}`;
});
