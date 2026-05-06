  // ── Config ──────────────────────────────────────────────
  const QUARTER = 'Q1FY27';
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

  // BizTech donut
  new Chart(document.getElementById('chart-biztech-types'), {
    type: 'doughnut',
    data: {
      labels: ['Story (58.8%)', 'Task (22.2%)', 'Bug (12.0%)', 'Epic (3.6%)', 'Sub-task (2.3%)', 'Access/Svc req (1.1%)'],
      datasets: [{
        data: [260, 98, 53, 16, 10, 5],
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

  // BizTech QoQ bar
  new Chart(document.getElementById('chart-biztech-qoq'), {
    type: 'bar',
    data: {
      labels: ['Story', 'Task', 'Bug', 'Epic', 'Sub-task', 'Access/Svc Req'],
      datasets: [
        {
          label: 'Q4 FY26 (100 total)',
          data: [24, 57, 8, 2, 8, 1],
          backgroundColor: 'rgba(67,83,255,0.25)',
          borderColor: 'rgba(67,83,255,0.4)',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Q1 FY27 (442 total)',
          data: [260, 98, 53, 16, 10, 5],
          backgroundColor: '#4353FF',
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true, pointStyleWidth: 10 }
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // EntTech donut
  new Chart(document.getElementById('chart-enttech-types'), {
    type: 'doughnut',
    data: {
      labels: ['Story (58%)', 'Sub-task (16%)', 'Bug (10%)', 'Task (9%)', 'Epic (6%)', 'Access req (1%)'],
      datasets: [{
        data: [58, 16, 10, 9, 6, 1],
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

  // EntTech QoQ bar
  new Chart(document.getElementById('chart-enttech-qoq'), {
    type: 'bar',
    data: {
      labels: ['Story', 'Task', 'Sub-task', 'Bug', 'Access Req', 'Epic'],
      datasets: [
        {
          label: 'Q4 FY26 (partial)',
          data: [47, 32, 8, 7, 3, 2],
          backgroundColor: 'rgba(16,185,129,0.25)',
          borderColor: 'rgba(16,185,129,0.4)',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Q1 FY27',
          data: [58, 9, 16, 10, 1, 6],
          backgroundColor: '#10B981',
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true, pointStyleWidth: 10 }
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // ENI donut
  new Chart(document.getElementById('chart-eni-types'), {
    type: 'doughnut',
    data: {
      labels: ['Bug (69.6%)', 'Story (26.8%)', 'Access request (3.6%)'],
      datasets: [{
        data: [39, 15, 2],
        backgroundColor: ['#EF4444', '#F59E0B', '#FCD34D'],
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

  // ENI QoQ bar
  new Chart(document.getElementById('chart-eni-qoq'), {
    type: 'bar',
    data: {
      labels: ['Bug', 'Story', 'Access Req'],
      datasets: [
        {
          label: 'Q4 FY26',
          data: [22, 4, 0],
          backgroundColor: 'rgba(245,158,11,0.25)',
          borderColor: 'rgba(245,158,11,0.4)',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Q1 FY27',
          data: [39, 15, 2],
          backgroundColor: '#F59E0B',
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { font: { family: 'Inter', size: 12 }, usePointStyle: true, pointStyleWidth: 10 }
        }
      },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false } }
      }
    }
  });

  // ── iPaaS Charts ────────────────────────────────
  var ipaasWeeks = ['Wk6','Wk7','Wk8','Wk9','Wk10','Wk11','Wk12','Wk13','Wk14','Wk15','Wk16'];
  var ipaasRuns = [9220,10141,3423,9423,9947,11392,18822,347552,293532,402000,424371];
  var ipaasFailPct = [0.21,0.40,0.67,0.24,0.47,0.80,0.11,0.01,0.01,0.02,0.01];
  var ipaasTasks = [92900,102700,63900,98900,102500,131600,192700,442000,129200,95800,null]; // Wk16 tasks pending
  var ipaasRecipes = [76,80,71,75,82,81,79,81,84,92,95];

  // Runs chart (log scale — Stripe integration went live Wk13, causing 20x volume jump)
  new Chart(document.getElementById('chart-ipaas-runs'), {
    type: 'bar',
    data: {
      labels: ipaasWeeks,
      datasets: [{
        label: 'Recipe Runs',
        data: ipaasRuns,
        backgroundColor: ipaasRuns.map(function(v) { return v > 100000 ? '#4353FF' : 'rgba(67,83,255,0.45)'; }),
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: function(ctx) { return Number(ctx.parsed.y).toLocaleString() + ' runs'; } } },
        annotation: {
          annotations: {
            integrationLine: {
              type: 'line', xMin: 'Wk13', xMax: 'Wk13',
              borderColor: 'rgba(239,68,68,0.5)', borderWidth: 1, borderDash: [4,3],
              label: { content: 'Stripe-Invoice live', display: true, position: 'start', font: { size: 9 }, color: '#EF4444', backgroundColor: 'transparent' }
            }
          }
        }
      },
      scales: {
        y: {
          type: 'logarithmic',
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { callback: function(v) {
            if ([1000,10000,100000,500000].includes(v)) return v >= 1000 ? (v/1000)+'K' : v;
            return null;
          }}
        },
        x: { grid: { display: false } }
      }
    }
  });

  // Failure rate chart
  new Chart(document.getElementById('chart-ipaas-failures'), {
    type: 'line',
    data: {
      labels: ipaasWeeks,
      datasets: [{
        label: 'Failure Rate %',
        data: ipaasFailPct,
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239,68,68,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#EF4444'
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { callback: function(v) { return v + '%'; } } },
        x: { grid: { display: false } }
      }
    }
  });

  // Tasks consumed chart (log scale for same reason as runs)
  new Chart(document.getElementById('chart-ipaas-tasks'), {
    type: 'bar',
    data: {
      labels: ipaasWeeks,
      datasets: [{
        label: 'Tasks Consumed',
        data: ipaasTasks,
        backgroundColor: ipaasTasks.map(function(v) { return v > 200000 ? '#F59E0B' : 'rgba(245,158,11,0.45)'; }),
        borderRadius: 4
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: function(ctx) { return ctx.parsed.y ? Number(ctx.parsed.y).toLocaleString() + ' tasks' : 'Pending'; } } }
      },
      scales: {
        y: {
          type: 'logarithmic',
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { callback: function(v) {
            if ([10000,100000,500000].includes(v)) return (v/1000)+'K';
            return null;
          }}
        },
        x: { grid: { display: false } }
      }
    }
  });

  // Active recipes chart
  new Chart(document.getElementById('chart-ipaas-recipes'), {
    type: 'line',
    data: {
      labels: ipaasWeeks,
      datasets: [{
        label: 'Active Recipes',
        data: ipaasRecipes,
        borderColor: '#00C853',
        backgroundColor: 'rgba(0,200,83,0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#00C853'
      }]
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
