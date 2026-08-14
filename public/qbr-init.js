  // ── Config ──────────────────────────────────────────────
  const QUARTER = 'Q2FY27';
  const API_BASE = '/api';

  // ── In-memory state (loaded from API on init) ────────────
  let _comments = {};   // { section_id: [{id, author, text, time}] }
  let _flags    = [];   // [{flag_id, severity, section, message, owner, resolved, resolved_by, resolved_at}]
  let _edits    = {};   // { edit_id: {content, author} }
  let currentUser = localStorage.getItem('qbr-user-name') || '';

  // ── API helpers ─────────────────────────────────────────
  async function apiGet(path) {
    const r = await fetch(API_BASE + path);
    if (!r.ok) throw new Error(r.statusText);
    return r.json();
  }
  async function apiPost(path, body) {
    const r = await fetch(API_BASE + path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!r.ok) throw new Error(r.statusText);
    return r.json();
  }
  async function apiDelete(path) {
    const r = await fetch(API_BASE + path, { method: 'DELETE' });
    if (!r.ok) throw new Error(r.statusText);
    return r.json();
  }

  // ── Bootstrap: load all state from API ──────────────────
  async function initFromAPI() {
    try {
      const [comments, flags, edits] = await Promise.all([
        apiGet('/comments?quarter=' + QUARTER),
        apiGet('/flags?quarter='    + QUARTER),
        apiGet('/edits?quarter='    + QUARTER),
      ]);
      _comments = comments;
      _flags    = flags;
      _edits    = edits;
    } catch (e) {
      console.warn('API unavailable, starting with empty state:', e.message);
    }
    updateCommentCounts();
    renderFlags();
    initEditables();
  }

  // ── Accordion ────────────────────────────────────────────
  function toggleAccordion(id) {
    document.getElementById(id).classList.toggle('open');
  }
  function toggleAllAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    const anyOpen = Array.from(accordions).some(a => a.classList.contains('open'));
    accordions.forEach(a => { if (anyOpen) a.classList.remove('open'); else a.classList.add('open'); });
  }

  // ── Collapsible top-level sections ───────────────────────
  document.querySelectorAll('.section > .card > .card-header').forEach(header => {
    const h3 = header.querySelector('h3');
    if (!h3) return;
    const right = document.createElement('div');
    right.className = 'card-header-right';
    Array.from(header.children).forEach(c => { if (c !== h3) right.appendChild(c); });
    const chev = document.createElement('span');
    chev.className = 'section-chevron';
    chev.textContent = '▾';
    right.appendChild(chev);
    header.appendChild(right);
    header.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      header.closest('.card').classList.toggle('collapsed');
    });
  });

  // ── Nav highlight on scroll ──────────────────────────────
  const navLinks = document.querySelectorAll('.sidebar nav a');
  const sections = document.querySelectorAll('.section');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(link.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── Inline Editing ───────────────────────────────────────
  function updateEditCounts() {
    const el = document.getElementById('edit-count');
    if (el) el.textContent = Object.keys(_edits).length;
  }

  function initEditables() {
    document.querySelectorAll('.editable').forEach(function(el) {
      const id = el.dataset.editId;
      if (!id) return;
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'true');

      // Apply any existing edit from API
      if (_edits[id]) {
        el.innerHTML = _edits[id].content;
        el.classList.add('edited');
        const b = document.createElement('span');
        b.className = 'edit-indicator';
        b.textContent = 'edited by ' + (_edits[id].author || 'someone');
        el.appendChild(b);
      } else {
        const b = document.createElement('span');
        b.className = 'edit-indicator';
        b.textContent = 'edited';
        el.appendChild(b);
      }

      if (!el.dataset.originalContent) el.dataset.originalContent = el.innerHTML;

      el.addEventListener('blur', function() {
        const tmp = document.createElement('div');
        tmp.innerHTML = el.innerHTML;
        tmp.querySelectorAll('.edit-indicator').forEach(b => b.remove());
        const clean = tmp.innerHTML;

        const orig = document.createElement('div');
        orig.innerHTML = el.dataset.originalContent;
        orig.querySelectorAll('.edit-indicator').forEach(b => b.remove());
        const origClean = orig.innerHTML;

        if (clean !== origClean) {
          if (!currentUser) { ensureUserName(() => saveEdit(id, clean, el)); }
          else { saveEdit(id, clean, el); }
        }
      });
    });
    updateEditCounts();
  }

  async function saveEdit(editId, content, el) {
    try {
      await apiPost('/edits', { edit_id: editId, content, author: currentUser, quarter: QUARTER });
      _edits[editId] = { content, author: currentUser };
      el.classList.add('edited');
      let badge = el.querySelector('.edit-indicator');
      if (!badge) { badge = document.createElement('span'); badge.className = 'edit-indicator'; el.appendChild(badge); }
      badge.textContent = 'edited by ' + currentUser;
      updateEditCounts();
    } catch (e) { console.error('Failed to save edit:', e); }
  }

  // ── Flags ────────────────────────────────────────────────
  function renderFlags() {
    const container = document.getElementById('flags-container');
    if (!container) return;
    container.innerHTML = '';
    let counts = { HIGH: 0, MEDIUM: 0, LOW: 0, resolved: 0 };

    _flags.forEach(function(f) {
      if (f.resolved) counts.resolved++; else counts[f.severity] = (counts[f.severity] || 0) + 1;
      const div = document.createElement('div');
      div.className = 'flag-interactive severity-' + f.severity.toLowerCase() + (f.resolved ? ' resolved' : '');
      div.innerHTML = '<div class="flag-left">'
        + '<div class="flag-severity-dot"></div>'
        + '<div class="flag-info">'
        + '<div class="flag-message">' + escapeHtml(f.message) + '</div>'
        + '<div class="flag-owner-section">' + escapeHtml(f.section) + ' \u00B7 Owner: ' + escapeHtml(f.owner) + '</div>'
        + (f.resolved ? '<div class="flag-resolved-by">\u2705 Resolved by ' + escapeHtml(f.resolved_by) + ' \u00B7 ' + escapeHtml(f.resolved_at) + '</div>' : '')
        + '</div></div>'
        + (f.resolved
          ? '<button class="flag-resolve-btn unresolve" onclick="toggleFlag(\'' + f.flag_id + '\')">Reopen</button>'
          : '<button class="flag-resolve-btn resolve"   onclick="toggleFlag(\'' + f.flag_id + '\')">Mark resolved</button>');
      container.appendChild(div);
    });

    const hi = document.getElementById('flag-count-high');
    const me = document.getElementById('flag-count-medium');
    const lo = document.getElementById('flag-count-low');
    const re = document.getElementById('flag-count-resolved');
    const oc = document.getElementById('flags-open-count');
    if (hi) hi.textContent = '\uD83D\uDD34 ' + (counts.HIGH   || 0) + ' HIGH';
    if (me) me.textContent = '\uD83D\uDFE1 ' + (counts.MEDIUM || 0) + ' MEDIUM';
    if (lo) lo.textContent = '\uD83D\uDFE2 ' + (counts.LOW    || 0) + ' LOW';
    if (re) re.textContent = '\u2705 '        +  counts.resolved     + ' resolved';
    if (oc) oc.textContent = (counts.HIGH || 0) + (counts.MEDIUM || 0) + (counts.LOW || 0);
  }

  async function toggleFlag(flagId) {
    if (!currentUser) { ensureUserName(() => toggleFlag(flagId)); return; }
    const f = _flags.find(x => x.flag_id === flagId);
    if (!f) return;
    try {
      if (f.resolved) {
        await apiPost('/flags/' + flagId + '/unresolve?quarter=' + QUARTER, {});
        f.resolved = false; f.resolved_by = ''; f.resolved_at = '';
      } else {
        const res = await apiPost('/flags/' + flagId + '/resolve?quarter=' + QUARTER, { resolved_by: currentUser });
        f.resolved = true; f.resolved_by = currentUser; f.resolved_at = res.resolved_at || '';
      }
      renderFlags();
    } catch (e) { console.error('Failed to toggle flag:', e); }
  }

  // ── Comments ─────────────────────────────────────────────
  function updateCommentCounts() {
    let total = 0;
    document.querySelectorAll('.commentable').forEach(el => {
      const id = el.dataset.commentId;
      const list = _comments[id] || [];
      const badge = el.querySelector('.comment-count-badge');
      if (list.length > 0) {
        el.classList.add('has-comments');
        if (badge) { badge.textContent = list.length; badge.style.display = 'flex'; }
        total += list.length;
      } else {
        el.classList.remove('has-comments');
        if (badge) badge.style.display = 'none';
      }
    });
    const tc = document.getElementById('total-comment-count');
    if (tc) tc.textContent = total;
  }

  function renderThread(el) {
    const id = el.dataset.commentId;
    const comments = _comments[id] || [];
    const list = el.querySelector('.comment-list');
    list.innerHTML = '';
    comments.forEach(c => {
      const li = document.createElement('li');
      li.className = 'comment-item';
      li.innerHTML = `
        <div class="comment-meta">
          <span class="comment-author">${escapeHtml(c.author)}</span>
          <span>
            <span class="comment-time">${c.time}</span>
            <button class="comment-delete" onclick="deleteComment('${id}', ${c.id})" title="Delete">\u2715</button>
          </span>
        </div>
        <div class="comment-text">${escapeHtml(c.text)}</div>
      `;
      list.appendChild(li);
    });
    list.scrollTop = list.scrollHeight;
  }

  async function addComment(commentId) {
    if (!currentUser) { ensureUserName(() => addComment(commentId)); return; }
    const el = document.querySelector(`[data-comment-id="${commentId}"]`);
    const input = el.querySelector('.comment-input');
    const text = input.value.trim();
    if (!text) return;
    try {
      const res = await apiPost('/comments', { section_id: commentId, author: currentUser, text, quarter: QUARTER });
      if (!_comments[commentId]) _comments[commentId] = [];
      _comments[commentId].push({ id: res.id, author: currentUser, text, time: res.time });
      input.value = '';
      renderThread(el);
      updateCommentCounts();
    } catch (e) { console.error('Failed to post comment:', e); }
  }

  async function deleteComment(commentId, dbId) {
    try {
      await apiDelete('/comments/' + dbId);
      _comments[commentId] = (_comments[commentId] || []).filter(c => c.id !== dbId);
      if (!_comments[commentId].length) delete _comments[commentId];
      const el = document.querySelector(`[data-comment-id="${commentId}"]`);
      renderThread(el);
      updateCommentCounts();
    } catch (e) { console.error('Failed to delete comment:', e); }
  }

  function toggleThread(commentId) {
    const el = document.querySelector(`[data-comment-id="${commentId}"]`);
    const thread = el.querySelector('.comment-thread');
    thread.classList.toggle('open');
    if (thread.classList.contains('open')) {
      renderThread(el);
      setTimeout(() => el.querySelector('.comment-input').focus(), 50);
    }
  }

  function toggleAllComments() {
    const threads = document.querySelectorAll('.comment-thread');
    const anyOpen = Array.from(threads).some(t => t.classList.contains('open'));
    threads.forEach(t => {
      if (anyOpen) { t.classList.remove('open'); }
      else {
        t.classList.add('open');
        const el = t.closest('.commentable');
        if (el) renderThread(el);
      }
    });
  }

  // ── Export comments as markdown (backup) ─────────────────
  function exportComments() {
    const entries = Object.entries(_comments);
    if (!entries.length) { alert('No comments to export.'); return; }
    const lines = ["# QBR Comments \u2014 Q1 FY'27", "", "Exported " + new Date().toLocaleString(), ""];
    entries.forEach(([section, comments]) => {
      lines.push("## " + section.replace(/-/g, ' '));
      comments.forEach(c => lines.push("- **" + c.author + "** (" + c.time + "): " + c.text));
      lines.push("");
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([lines.join("\n")], { type: 'text/markdown' }));
    a.download = 'qbr-comments-Q1FY27.md';
    a.click();
  }

  // ── User identity ─────────────────────────────────────────
  function ensureUserName(callback) {
    if (currentUser) { callback(); return; }
    const overlay = document.createElement('div');
    overlay.id = 'name-prompt';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:9999;display:flex;align-items:center;justify-content:center;';
    overlay.innerHTML = `
      <div style="background:#fff;padding:28px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.2);max-width:360px;width:100%;text-align:center;">
        <div style="font-size:24px;margin-bottom:8px;">\uD83D\uDCAC</div>
        <h3 style="font-family:Poppins,sans-serif;font-size:16px;margin-bottom:4px;">What's your name?</h3>
        <p style="font-size:13px;color:#6b7280;margin-bottom:16px;">Shown on comments and edits — shared with the team.</p>
        <input type="text" id="name-input" placeholder="e.g. Laura Clontz"
          style="width:100%;padding:10px 14px;border:1px solid #e5e7eb;border-radius:8px;font-size:14px;font-family:Inter,sans-serif;outline:none;margin-bottom:12px;"
          onkeydown="if(event.key==='Enter')document.getElementById('name-submit').click()">
        <button id="name-submit" onclick="(function(){
          const n=document.getElementById('name-input').value.trim()||'Anonymous';
          currentUser=n; localStorage.setItem('qbr-user-name',n);
          document.getElementById('name-prompt').remove();
        })()" style="width:100%;padding:10px;background:#4353FF;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">
          Continue
        </button>
      </div>`;
    document.body.appendChild(overlay);
    // Attach callback to submit
    document.getElementById('name-submit').addEventListener('click', function() {
      setTimeout(callback, 50);
    });
    setTimeout(() => document.getElementById('name-input').focus(), 100);
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ── Inject comment UI into all commentable elements ───────
  document.querySelectorAll('.commentable').forEach(el => {
    const id = el.dataset.commentId;
    const btn = document.createElement('button');
    btn.className = 'comment-btn';
    btn.innerHTML = '\uD83D\uDCAC<span class="comment-count-badge" style="display:none">0</span>';
    btn.onclick = (e) => { e.stopPropagation(); toggleThread(id); };
    el.appendChild(btn);

    const thread = document.createElement('div');
    thread.className = 'comment-thread';
    thread.innerHTML = `
      <div class="comment-thread-header">
        <span>\uD83D\uDCAC Comments</span>
        <button class="comment-thread-close" onclick="toggleThread('${id}')">\u2715</button>
      </div>
      <ul class="comment-list"></ul>
      <div class="comment-input-row">
        <input type="text" class="comment-input" placeholder="Add a comment\u2026"
          onkeydown="if(event.key==='Enter')addComment('${id}')">
        <button onclick="addComment('${id}')">Post</button>
      </div>`;
    el.appendChild(thread);
  });

  // ── Initialize ───────────────────────────────────────────
  initFromAPI();

  // ── Charts ──────────────────────────────────────

  // Console Top 5 Categories bar chart
  new Chart(document.getElementById('chart-console-categories'), {
    type: 'bar',
    data: {
      labels: ['Access Request', 'Permission/Role Update', 'Miscellaneous', 'Software', 'Password Reset'],
      datasets: [{
        label: 'Q1 FY27',
        data: [76.0, 9.2, 5.0, 3.2, 1.0],
        backgroundColor: ['#4353FF', '#6B77FF', '#818CF8', '#A5B4FC', '#C7D2FE'],
        borderRadius: 4,
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.parsed.x + '%'; }
          }
        }
      },
      scales: {
        x: { beginAtZero: true, max: 100, ticks: { callback: function(v) { return v + '%'; } }, grid: { color: 'rgba(0,0,0,0.05)' } },
        y: { grid: { display: false } }
      }
    }
  });

  // Automation % trend line chart
  new Chart(document.getElementById('chart-automation-trend'), {
    type: 'line',
    data: {
      labels: ['Q3 FY26*', 'Q4 FY26', 'Q1 FY27'],
      datasets: [{
        label: 'Automation %',
        data: [65, 84, 74.8],
        borderColor: '#4353FF',
        backgroundColor: 'rgba(67,83,255,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 6,
        pointBackgroundColor: ['#F59E0B', '#00C853', '#EF4444'],
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.parsed.y + '%'; }
          }
        }
      },
      scales: {
        y: { min: 50, max: 100, ticks: { callback: function(v) { return v + '%'; } }, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // ── Live data from API ──────────────────────────────────
  async function fetchLiveData() {
    try {
      const [jiraRes, workatoRes, asanaRes] = await Promise.all([
        fetch(API_BASE + '/data/jira?quarter=' + QUARTER).then(r => r.json()),
        fetch(API_BASE + '/data/workato?quarter=' + QUARTER).then(r => r.json()),
        fetch(API_BASE + '/data/asana?quarter=' + QUARTER).then(r => r.json()),
      ]);
      applyJira(jiraRes);
      applyWorkato(workatoRes);
      applyAsana(asanaRes);
    } catch (e) {
      console.warn('Live data fetch failed:', e.message);
    }
  }

  function fmt(n) {
    if (n == null) return '—';
    if (n >= 1e6) return (n / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.?0+$/, '') + 'K';
    return String(n);
  }

  function pct(num, den) {
    if (!den) return '0%';
    return (num / den * 100).toFixed(1) + '%';
  }

  function tableRows(data, total) {
    return data.map(([k, v]) =>
      `<tr><td>${escapeHtml(k)}</td><td>${v}</td><td>${pct(v, total)}</td></tr>`
    ).join('');
  }

  function applyJira(data) {
    const projects = data.projects || {};

    function applyProject(key, prefix, color) {
      const p = projects[key];
      if (!p || p.error) return;
      const totalEl = document.getElementById(prefix + '-total');
      const bugsValEl = document.getElementById(prefix + '-bugs-value');
      const bugsLabelEl = document.getElementById(prefix + '-bugs-label');
      const cycleEl = document.getElementById(prefix + '-cycle');
      if (totalEl) totalEl.textContent = p.total;
      if (bugsValEl) bugsValEl.textContent = p.bug_count;
      if (bugsLabelEl) bugsLabelEl.textContent = 'Bugs (' + pct(p.bug_count, p.total) + ')';
      if (cycleEl) cycleEl.textContent = p.median_cycle_days != null ? p.median_cycle_days + 'd' : '—';

      const ctTbody = document.getElementById(prefix + '-change-type-tbody');
      if (ctTbody && p.by_change_type) {
        ctTbody.innerHTML = tableRows(Object.entries(p.by_change_type).slice(0, 5), p.total);
      }
      const eteTbody = document.getElementById(prefix + '-ete-cat-tbody');
      if (eteTbody && p.by_ete_category) {
        eteTbody.innerHTML = tableRows(Object.entries(p.by_ete_category).slice(0, 5), p.total);
      }
      const procTbody = document.getElementById(prefix + '-process-tbody');
      if (procTbody && p.by_impacted_process) {
        procTbody.innerHTML = tableRows(Object.entries(p.by_impacted_process).slice(0, 7), p.total);
      }

      const chartId = { btec: 'chart-biztech-types', ete: 'chart-enttech-types', eni: 'chart-eni-types' }[prefix];
      const chartEl = document.getElementById(chartId);
      if (chartEl && p.by_type) {
        const colors = {
          btec: ['#4353FF','#6B77FF','#EF4444','#818CF8','#A5B4FC','#C7D2FE'],
          ete:  ['#10B981','#34D399','#EF4444','#6EE7B7','#A7F3D0','#D1FAE5'],
          eni:  ['#EF4444','#F59E0B','#FCD34D','#FBBF24','#A5B4FC','#C7D2FE'],
        };
        const palette = colors[prefix] || colors.btec;
        const entries = Object.entries(p.by_type).slice(0, 6);
        const labels = entries.map(([k, v]) => k + ' (' + pct(v, p.total) + ')');
        const vals = entries.map(([, v]) => v);
        if (window._charts && window._charts[prefix]) {
          window._charts[prefix].destroy();
        }
        if (!window._charts) window._charts = {};
        window._charts[prefix] = new Chart(chartEl, {
          type: 'doughnut',
          data: {
            labels,
            datasets: [{ data: vals, backgroundColor: palette, borderWidth: 0, borderRadius: 4 }]
          },
          options: {
            responsive: true, maintainAspectRatio: false, cutout: '60%',
            plugins: {
              legend: { position: 'right', labels: { font: { family: 'Inter', size: 11 }, padding: 8, usePointStyle: true, pointStyleWidth: 10 } }
            }
          }
        });
      }
    }

    applyProject('BTEC', 'btec', '#4353FF');
    applyProject('ETE',  'ete',  '#10B981');
    applyProject('ENI',  'eni',  '#F59E0B');
  }

  function safeChart(id, config) {
    const el = document.getElementById(id);
    if (!el) return;
    Chart.getChart(el)?.destroy();
    return new Chart(el, config);
  }

  function applyWorkato(data) {
    const s = data.summary || {};
    const weeks = data.weeks || [];

    const fmtRuns = document.getElementById('ipaas-total-runs');
    const fmtFail = document.getElementById('ipaas-total-failures');
    const fmtRate = document.getElementById('ipaas-fail-rate');
    const fmtRecipes = document.getElementById('ipaas-active-recipes');
    const fmtTasks = document.getElementById('ipaas-tasks-consumed');
    const fmtDelta = document.getElementById('ipaas-tasks-delta');
    const fmtBudgetLabel = document.getElementById('ipaas-budget-label');
    const fmtBudgetBar = document.getElementById('ipaas-budget-bar');

    if (fmtRuns) fmtRuns.textContent = fmt(s.total_runs);
    if (fmtFail) fmtFail.textContent = fmt(s.total_failures);
    if (fmtRate) fmtRate.textContent = (s.overall_failure_rate_pct || 0).toFixed(3) + '% fail rate';
    if (fmtRecipes) fmtRecipes.textContent = s.peak_active_recipes || '—';
    if (fmtTasks) fmtTasks.textContent = fmt(s.tasks_consumed);
    if (fmtDelta) fmtDelta.textContent = (s.budget_pct || 0) + '% of quarterly budget';
    if (fmtBudgetLabel) fmtBudgetLabel.textContent = fmt(s.tasks_consumed) + ' / ' + fmt(s.quarterly_budget) + ' (' + (s.budget_pct || 0) + '%)';
    if (fmtBudgetBar) fmtBudgetBar.style.width = Math.min(s.budget_pct || 0, 100) + '%';

    const consumers = document.getElementById('ipaas-consumers-tbody');
    if (consumers && data.top_task_consumers) {
      consumers.innerHTML = data.top_task_consumers.map(r =>
        `<tr><td>${escapeHtml(r.recipe)}</td><td>${r.count ? Number(r.count).toLocaleString() : '—'}</td></tr>`
      ).join('') || consumers.innerHTML;
    }

    const failures = document.getElementById('ipaas-failures-tbody');
    if (failures && data.recurring_failures) {
      failures.innerHTML = data.recurring_failures.map(r =>
        `<tr><td>${escapeHtml(r.recipe)}</td><td>${r.weeks_appeared} wks</td></tr>`
      ).join('') || failures.innerHTML;
    }

    if (!weeks.length) return;
    const labels = weeks.map(w => 'Wk' + w.week_number);
    const runs = weeks.map(w => w.total_runs);
    const failPct = weeks.map(w => w.failure_rate_pct);
    const tasks = weeks.map(w => w.weekly_tasks || null);
    const recipes = weeks.map(w => w.total_running_recipes);

    safeChart('chart-ipaas-runs', {
      type: 'bar',
      data: {
        labels,
        datasets: [{ label: 'Recipe Runs', data: runs,
          backgroundColor: runs.map(v => v > 100000 ? '#4353FF' : 'rgba(67,83,255,0.45)'),
          borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false },
          tooltip: { callbacks: { label: ctx => Number(ctx.parsed.y).toLocaleString() + ' runs' } } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { callback: v => v >= 1000 ? (v/1000).toFixed(0)+'K' : v } },
          x: { grid: { display: false } }
        }
      }
    });

    safeChart('chart-ipaas-failures', {
      type: 'line',
      data: {
        labels,
        datasets: [{ label: 'Failure Rate %', data: failPct,
          borderColor: '#EF4444', backgroundColor: 'rgba(239,68,68,0.1)',
          fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: '#EF4444' }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { callback: v => v + '%' } },
          x: { grid: { display: false } }
        }
      }
    });

    const tasksData = weeks.map(w => w.weekly_tasks || 0);
    safeChart('chart-ipaas-tasks', {
      type: 'bar',
      data: {
        labels,
        datasets: [{ label: 'Tasks Consumed', data: tasksData,
          backgroundColor: tasksData.map(v => v > 200000 ? '#F59E0B' : 'rgba(245,158,11,0.45)'),
          borderRadius: 4 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false },
          tooltip: { callbacks: { label: ctx => Number(ctx.parsed.y).toLocaleString() + ' tasks' } } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { callback: v => v >= 1000 ? (v/1000).toFixed(0)+'K' : v } },
          x: { grid: { display: false } }
        }
      }
    });

    safeChart('chart-ipaas-recipes', {
      type: 'line',
      data: {
        labels,
        datasets: [{ label: 'Active Recipes', data: recipes,
          borderColor: '#00C853', backgroundColor: 'rgba(0,200,83,0.1)',
          fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: '#00C853' }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.05)' } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  function applyAsana(data) {
    const projects = data.projects || [];
    const tbody = document.getElementById('landings-tbody');
    if (!tbody || !projects.length) return;

    const priorityClass = { 'P0': 'pill-red', 'P1': 'pill-red', 'P2': 'pill-blue', 'P3': 'pill-gray' };
    tbody.innerHTML = projects.map(p => {
      const pLabel = p.priority ? p.priority.replace('P0', 'P0 — Critical').replace('P1', 'P1 — High').replace('P2', 'P2 — Medium').replace('P3', 'P3 — Low') : '';
      const cls = p.priority ? (priorityClass[p.priority.split(' ')[0]] || 'pill-gray') : 'pill-gray';
      return `<tr>
        <td><strong>${escapeHtml(p.name)}</strong></td>
        <td>${escapeHtml(p.section)}</td>
        <td>${escapeHtml(p.pillar)}</td>
        <td>${pLabel ? `<span class="pill ${cls}">${escapeHtml(pLabel)}</span>` : '—'}</td>
        <td>${escapeHtml(p.completed_at)}</td>
      </tr>`;
    }).join('');
  }

  fetchLiveData();

  // BizTech donut (static fallback — overwritten by fetchLiveData if API is up)
  new Chart(document.getElementById('chart-biztech-types'), {
    type: 'doughnut',
    data: {
      labels: ['Story (37.4%)', 'Task (31.8%)', 'Bug (14.5%)', 'Epic (4.9%)', 'Service req (4.2%)', 'Other (7.2%)'],
      datasets: [{
        data: [160, 136, 62, 21, 18, 31],
        backgroundColor: ['#4353FF', '#6B77FF', '#EF4444', '#818CF8', '#A5B4FC', '#C7D2FE'],
        borderWidth: 0,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: { font: { family: 'Inter', size: 11 }, padding: 8, usePointStyle: true, pointStyleWidth: 10 }
        }
      }
    }
  });

  // BizTech created vs closed (Q1 vs Q2)
  new Chart(document.getElementById('chart-biztech-flow'), {
    type: 'bar',
    data: {
      labels: ['Q1 FY27', 'Q2 FY27'],
      datasets: [
        { label: 'Created', data: [491, 464], backgroundColor: '#6B77FF', borderRadius: 4 },
        { label: 'Closed',  data: [441, 428], backgroundColor: '#4353FF', borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, usePointStyle: true, pointStyleWidth: 10 } } },
      scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } }
    }
  });

  // EntTech donut (static fallback — overwritten by fetchLiveData if API is up)
  new Chart(document.getElementById('chart-enttech-types'), {
    type: 'doughnut',
    data: {
      labels: ['Story (51.5%)', 'Task (29.8%)', 'Epic (8.1%)', 'Sub-task (5.1%)', 'Access req (2.7%)', 'Bug (2.7%)'],
      datasets: [{
        data: [152, 88, 24, 15, 8, 8],
        backgroundColor: ['#10B981', '#34D399', '#EF4444', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
        borderWidth: 0,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: { font: { family: 'Inter', size: 11 }, padding: 8, usePointStyle: true, pointStyleWidth: 10 }
        }
      }
    }
  });

  // EntTech created vs closed (Q1 vs Q2)
  new Chart(document.getElementById('chart-enttech-flow'), {
    type: 'bar',
    data: {
      labels: ['Q1 FY27', 'Q2 FY27'],
      datasets: [
        { label: 'Created', data: [168, 180], backgroundColor: '#34D399', borderRadius: 4 },
        { label: 'Closed',  data: [160, 295], backgroundColor: '#10B981', borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, usePointStyle: true, pointStyleWidth: 10 } } },
      scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } }
    }
  });

  // ENI donut (static fallback — overwritten by fetchLiveData if API is up)
  new Chart(document.getElementById('chart-eni-types'), {
    type: 'doughnut',
    data: {
      labels: ['Story (58%)', 'Bug (22%)', 'Task (16%)', 'Epic (4%)'],
      datasets: [{
        data: [29, 11, 8, 2],
        backgroundColor: ['#F59E0B', '#EF4444', '#FBBF24', '#FCD34D'],
        borderWidth: 0,
        borderRadius: 4,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: { font: { family: 'Inter', size: 11 }, padding: 8, usePointStyle: true, pointStyleWidth: 10 }
        }
      }
    }
  });

  // ENI created vs closed (Q1 vs Q2)
  new Chart(document.getElementById('chart-eni-flow'), {
    type: 'bar',
    data: {
      labels: ['Q1 FY27', 'Q2 FY27'],
      datasets: [
        { label: 'Created', data: [72, 53], backgroundColor: '#FBBF24', borderRadius: 4 },
        { label: 'Closed',  data: [57, 50], backgroundColor: '#F59E0B', borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 11 }, usePointStyle: true, pointStyleWidth: 10 } } },
      scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } }
    }
  });

  // iPaaS / Workato — Q2 static data (live API pipeline retired; fed straight to applyWorkato).
  // Q2 = weeks 19–31; wk29 (2nd wk July) is absent from the source sheet.
  const WORKATO_Q2 = {
    summary: {
      total_runs: 4874194,
      total_failures: 490,
      overall_failure_rate_pct: 0.010,
      peak_active_recipes: 116,
      tasks_consumed: 850437,
      quarterly_budget: 3000000,
      budget_pct: 28
    },
    weeks: [
      { week_number: 19, total_runs: 424008, failure_rate_pct: 0.01, weekly_tasks: 69357,  total_running_recipes: 102 },
      { week_number: 20, total_runs: 417723, failure_rate_pct: 0.01, weekly_tasks: 67336,  total_running_recipes: 104 },
      { week_number: 21, total_runs: 414649, failure_rate_pct: 0.01, weekly_tasks: 63701,  total_running_recipes: 109 },
      { week_number: 22, total_runs: 402302, failure_rate_pct: 0.00, weekly_tasks: 61490,  total_running_recipes: 111 },
      { week_number: 23, total_runs: 364028, failure_rate_pct: 0.04, weekly_tasks: 60118,  total_running_recipes: 106 },
      { week_number: 24, total_runs: 405339, failure_rate_pct: 0.03, weekly_tasks: 65304,  total_running_recipes: 107 },
      { week_number: 25, total_runs: 405913, failure_rate_pct: 0.00, weekly_tasks: 68978,  total_running_recipes: 106 },
      { week_number: 26, total_runs: 400333, failure_rate_pct: 0.01, weekly_tasks: 63313,  total_running_recipes: 107 },
      { week_number: 27, total_runs: 385101, failure_rate_pct: 0.00, weekly_tasks: 62800,  total_running_recipes: 111 },
      { week_number: 28, total_runs: 416750, failure_rate_pct: 0.00, weekly_tasks: 65106,  total_running_recipes: 111 },
      { week_number: 30, total_runs: 389957, failure_rate_pct: 0.00, weekly_tasks: 136489, total_running_recipes: 111 },
      { week_number: 31, total_runs: 448091, failure_rate_pct: 0.01, weekly_tasks: 66445,  total_running_recipes: 116 }
    ]
  };
  applyWorkato(WORKATO_Q2);

