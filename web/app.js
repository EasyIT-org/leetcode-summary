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
const problemDetailCache = new Map();
let detailRequestId = 0;

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

function normalizeId(frontendId) {
  if (frontendId === null || frontendId === undefined) return '';
  const raw = String(frontendId).trim();
  const padded = raw.replace(/\D/g, '').padStart(4, '0');
  return padded || raw;
}

function normalizeText(value) {
  if (!value) return '';
  return String(value)
    .replace(/<code>/g, '`')
    .replace(/<\/code>/g, '`')
    .replace(/<[^>]+>/g, '');
}

function getProblemFileName(problem) {
  const id = normalizeId(problem.frontend_id);
  const slug = problem.slug || problem.problem_slug || '';
  return `${id}-${slug}.json`;
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
      renderDetailPlaceholder();
      renderTechniques();
      renderProblems();
    });
    techniqueListEl.appendChild(card);
  });
}

function renderDetailPlaceholder() {
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

  problemDetailEl.innerHTML = '';

  const header = document.createElement('div');
  header.innerHTML = `
    <div class="detail-title">${selectedProblem.frontend_id}. ${selectedProblem.title}</div>
    <div class="detail-sub">Slug: ${selectedProblem.slug}</div>
  `;

  const tags = document.createElement('div');
  tags.className = 'detail-tags';
  const diff = document.createElement('span');
  diff.className = `pill ${difficultyClass}`;
  diff.textContent = `Difficulty: ${difficulty}`;
  const idTag = document.createElement('span');
  idTag.className = 'pill';
  idTag.textContent = `#${selectedProblem.frontend_id}`;
  tags.append(diff, idTag);

  const actions = document.createElement('div');
  actions.className = 'detail-actions';
  const link = document.createElement('a');
  link.className = 'btn';
  link.href = leetUrl;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Open on LeetCode';
  actions.appendChild(link);

  const techSection = document.createElement('div');
  const techLabel = document.createElement('div');
  techLabel.className = 'detail-sub';
  techLabel.textContent = 'Techniques';
  const techTags = document.createElement('div');
  techTags.className = 'detail-tags';
  if (techniques.length) {
    techniques.forEach((name) => {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = name;
      techTags.appendChild(pill);
    });
  } else {
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = 'n/a';
    techTags.appendChild(pill);
  }
  techSection.append(techLabel, techTags);

  const loading = document.createElement('div');
  loading.className = 'detail-loading';
  loading.textContent = 'Loading problem content...';

  problemDetailEl.append(header, tags, actions, techSection, loading);
}

function addTextSection(root, title, body, sectionKey) {
  if (!body) return;
  const section = document.createElement('div');
  section.className = 'detail-section';
  section.dataset.section = sectionKey;
  const label = document.createElement('div');
  label.className = 'detail-label';
  label.textContent = title;
  const content = document.createElement('div');
  content.className = 'detail-body';
  content.textContent = normalizeText(body);
  section.append(label, content);
  root.appendChild(section);
}

function addListSection(root, title, items, sectionKey) {
  if (!items || !items.length) return;
  const section = document.createElement('div');
  section.className = 'detail-section';
  section.dataset.section = sectionKey;
  const label = document.createElement('div');
  label.className = 'detail-label';
  label.textContent = title;
  const list = document.createElement('ul');
  list.className = 'detail-list';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = normalizeText(item);
    list.appendChild(li);
  });
  section.append(label, list);
  root.appendChild(section);
}

function addExamplesSection(root, examples) {
  if (!examples || !examples.length) return;
  const section = document.createElement('div');
  section.className = 'detail-section';
  section.dataset.section = 'examples';
  const label = document.createElement('div');
  label.className = 'detail-label';
  label.textContent = 'Examples';
  section.appendChild(label);

  examples.forEach((example) => {
    const block = document.createElement('div');
    block.className = 'example-block';
    const title = document.createElement('div');
    title.className = 'detail-sub';
    title.textContent = `Example ${example.example_num || ''}`.trim();
    const body = document.createElement('div');
    body.className = 'detail-body';
    body.textContent = normalizeText(example.example_text);
    block.append(title, body);
    section.appendChild(block);
  });

  root.appendChild(section);
}

async function fetchProblemDetail(problem) {
  const fileName = getProblemFileName(problem);
  const response = await fetch(`./problems/${fileName}`);
  if (!response.ok) {
    throw new Error(`Failed to load ${fileName}`);
  }
  return response.json();
}

async function loadDetailContent(problem) {
  const requestId = ++detailRequestId;
  const cacheKey = problem.slug || problem.problem_slug || problem.frontend_id;
  if (problemDetailCache.has(cacheKey)) {
    renderDetailContent(problem, problemDetailCache.get(cacheKey), requestId);
    return;
  }

  try {
    const detail = await fetchProblemDetail(problem);
    problemDetailCache.set(cacheKey, detail);
    renderDetailContent(problem, detail, requestId);
  } catch (error) {
    if (requestId !== detailRequestId) return;
    const errorBox = document.createElement('div');
    errorBox.className = 'empty';
    errorBox.textContent = 'Problem content not available.';
    problemDetailEl.appendChild(errorBox);
  }
}

function renderDetailContent(problem, detail, requestId) {
  if (requestId !== detailRequestId) return;
  renderDetailPlaceholder();
  const loading = problemDetailEl.querySelector('.detail-loading');
  if (loading) {
    loading.remove();
  }

  addTextSection(problemDetailEl, 'Description', detail.description, 'description');
  addExamplesSection(problemDetailEl, detail.examples);
  addListSection(problemDetailEl, 'Constraints', detail.constraints, 'constraints');
  addListSection(problemDetailEl, 'Follow ups', detail.follow_ups, 'follow-ups');
  addListSection(problemDetailEl, 'Hints', detail.hints, 'hints');

  if (detail.topics && detail.topics.length) {
    const section = document.createElement('div');
    section.className = 'detail-section';
    section.dataset.section = 'topics';
    const label = document.createElement('div');
    label.className = 'detail-label';
    label.textContent = 'Topics';
    const tags = document.createElement('div');
    tags.className = 'detail-tags';
    detail.topics.forEach((topic) => {
      const pill = document.createElement('span');
      pill.className = 'pill';
      pill.textContent = topic;
      tags.appendChild(pill);
    });
    section.append(label, tags);
    problemDetailEl.appendChild(section);
  }
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
      renderDetailPlaceholder();
      loadDetailContent(p);
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
  renderDetailPlaceholder();
}

techniqueFilterEl.addEventListener('input', renderTechniques);
problemFilterEl.addEventListener('input', renderProblems);
sortModeEl.addEventListener('change', renderProblems);

showTechniquesBtn.addEventListener('click', () => {
  selectedProblem = null;
  setDetailOpen(false);
  renderDetailPlaceholder();
  renderProblems();
});

loadIndex().catch((err) => {
  metaEl.textContent = `Failed to load index.json: ${err}`;
});
