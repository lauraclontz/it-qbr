export const qbrBodyHtml = `<!-- ═══ Sidebar ═══════════════════════════════════════ -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h1>IT QBR</h1>
    <span class="quarter-badge">Q2 FY'27</span>
  </div>
  <nav>
    <a href="#exec-summary" class="active">
      <span class="nav-num">1</span> Executive Summary
    </a>
    <a href="#hires">
      <span class="nav-num">2</span> Hires & Open Roles
    </a>
    <a href="#metrics">
      <span class="nav-num">3</span> Operational Metrics
    </a>
    <a href="#landings">
      <span class="nav-num">4</span> Quarterly Landings
    </a>
    <a href="#roadmap">
      <span class="nav-num">5</span> Roadmap & Look Ahead
    </a>
    <a href="#decisions">
      <span class="nav-num">6</span> Decisions & Support
    </a>
    <a href="#sf-maturity">
      <span class="nav-num">7</span> SF Maturity Plan
    </a>
  </nav>
  <div class="sidebar-footer">
    Generated Aug 12, 2026<br>
    QBR Automation v1.0
  </div>
</aside>

<!-- ═══ Main Content ══════════════════════════════════ -->
<div class="main">

  <!-- Top Bar -->
  <div class="top-bar">
    <div>
      <h2>IT Quarterly Business Review</h2>
      <div class="subtitle">Q2 FY'27 &middot; May 1 &ndash; Jul 31, 2026 &middot; Presented Aug 2026</div>
    </div>
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <div class="comments-panel-toggle" onclick="toggleAllComments()">
        &#x1F4AC; <span id="total-comment-count">0</span> comments
      </div>
      <div style="padding:6px 14px; background:rgba(67,83,255,0.06); border:1px solid rgba(67,83,255,0.15); border-radius:20px; font-size:12px; font-weight:600; color:var(--blue);">
        &#x270F;&#xFE0F; <span id="edit-count">0</span> edits
      </div>
    </div>
  </div>

  <!-- ═══ 1. Executive Summary ══════════════════════ -->
  <div class="section" id="exec-summary">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">1</span> Executive Summary</h3>
      </div>
      <div class="card-body">
        <div class="commentable" data-comment-id="exec-placeholder">
          <div class="editable" data-edit-id="exec-summary-final">
            <p><strong>Overview.</strong> Enterprise Technology and IT Foundations delivered a strong Q2 &mdash; major billing, AI/automation, and Salesforce-governance work landed. The main watch items are IT helpdesk queue load and categorization/data-quality gaps.</p>
            <p style="margin:14px 0 4px;"><strong>Top wins</strong></p>
            <ul>
              <li>Automation reached production scale: Workato held ~405K runs/week at &le;0.04% failure; IT's Console/Flowbot ran 1,870 playbooks at a 0.43% failure rate (up from 39 at 36% in Q1); and a fleet of internal AI agents shipped (GTM delivery agents, the EAI Ops help bot at ~70% deflection, Mopsy, LegalBeagle).</li>
              <li>Enterprise Billing at the finish line.</li>
              <li>Salesforce governance &amp; security hardened: 20+ users moved off System Admin to right-sized roles, Okta SSO + phishing-resistant MFA enforced on Salesforce, and every outstanding SF security vulnerability closed ahead of 2026 platform requirements.</li>
            </ul>
            <p style="margin:14px 0 4px;"><strong>Watch items &amp; risks</strong></p>
            <ul>
              <li>IT helpdesk load concentrated: as AI absorbed the easy volume (total requests down 21%, human-reached flat), the harder work landed on a smaller team &mdash; time-to-first-human-reply rose to ~57h (though time-to-resolution improved 62%); the new Console Inbox should relieve this.</li>
              <li>Software-rationalization timing: renewal and migration decisions communicated too close to deadlines leave IT no runway and pull the team off planned work (see Decisions &amp; Support).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 2. New Hires & Open Roles ═════════════════ -->
  <div class="section" id="hires">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">2</span> New Hires & Open Roles</h3>
      </div>
      <div class="card-body">
        <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:12px;">New Hires (Q2 FY27)</h4>
        <div class="commentable" data-comment-id="hires-new">
          <table class="data-table">
            <thead>
              <tr><th>Name</th><th>Title</th><th>Type</th><th>Manager</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Lee Maddrell</strong></td><td>IT Support Specialist, EMEA</td><td><span class="pill pill-blue">FTE</span></td><td>Lalena Boetto</td></tr>
              <tr><td><strong>Sage Lee</strong></td><td>Senior Business Systems Analyst, Enterprise AI Operations</td><td><span class="pill pill-blue">FTE</span></td><td>Reed Shackelford</td></tr>
              <tr><td><strong>Angelo Licetti</strong></td><td>Salesforce Developer</td><td><span class="pill pill-yellow">CW (Peru)</span></td><td>Anna Duncanson</td></tr>
              <tr><td><strong>Aayushi Pankaj</strong></td><td>Senior Salesforce Administrator</td><td><span class="pill pill-blue">FTE</span></td><td>Anna Duncanson</td></tr>
              <tr><td><strong>Kiran Bhandari</strong></td><td>Okta Admin</td><td><span class="pill pill-yellow">CW</span></td><td>Lalena Boetto</td></tr>
              <tr><td><strong>Jasdeep Singh</strong></td><td>Jamf Admin</td><td><span class="pill pill-yellow">CW</span></td><td>Lalena Boetto</td></tr>
            </tbody>
          </table>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Angelo Licetti and Aayushi Pankaj started early Aug 2026; included here as they are onboard by the time of this QBR. Kiran Bhandari and Jasdeep Singh are IT contractors (managers to confirm).</p>
        </div>

        <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:24px 0 12px;">Open Roles</h4>
        <div class="commentable" data-comment-id="hires-open">
          <table class="data-table">
            <thead>
              <tr><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>IT Support Engineer, Argentina</td><td><span class="pill pill-yellow">Open</span></td></tr>
              <tr><td>IT Support Engineer, SF</td><td><span class="pill pill-yellow">Open</span></td></tr>
              <tr><td>Senior Corporate Infrastructure Engineer, US</td><td><span class="pill pill-yellow">Open</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 3. Operational Metrics ════════════════════ -->
  <div class="section" id="metrics">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">3</span> Operational Metrics</h3>
      </div>
      <div class="card-body">
        <button class="toggle-all" onclick="toggleAllAccordions()">
          &#x2195;&#xFE0F; Expand / Collapse All
        </button>

        <!-- 3a. Lifecycle Metrics -->
        <div class="accordion open" id="acc-lifecycle">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-lifecycle')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#6366F1"></span>
              3a. Lifecycle Metrics
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="lifecycle-metrics">
              <div class="metric-card">
                <div class="metric-value">92</div>
                <div class="metric-label">Onboards</div>
                <div class="metric-delta delta-neutral">2 misses</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">261</div>
                <div class="metric-label">Offboards</div>
                <div class="metric-delta delta-up">0 misses</div>
              </div>
            </div>
            <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Offboards are inflated by the RIF; offboarding is automated (the PBP&harr;IT handoff is still manual). Onboard misses: a few laptops delayed by logistics, so those hires used a personal device temporarily.</p>
          </div>
        </div>

        <!-- 3b. Helpdesk Metrics -->
        <div class="accordion open" id="acc-helpdesk">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-helpdesk')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#8B5CF6"></span>
              3b. Helpdesk Metrics
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="helpdesk-metrics">
              <div class="metric-card">
                <div class="metric-value">4,453</div>
                <div class="metric-label">Total Requests</div>
                <div class="metric-delta delta-neutral">&darr; 21% vs Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">1,325</div>
                <div class="metric-label">Reached a Human</div>
                <div class="metric-delta delta-neutral">flat vs 1,337 Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">4.73</div>
                <div class="metric-label">CSAT (out of 5.0)</div>
                <div class="metric-delta delta-up">90% perfect score</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">1,870</div>
                <div class="metric-label">Automation Playbooks</div>
                <div class="metric-delta delta-up">0.43% fail (vs 39 @ 36% Q1)</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">96%</div>
                <div class="metric-label">App Access Self-Served</div>
                <div class="metric-delta delta-up">never touched a person</div>
              </div>
            </div>

            <div class="commentary commentable" data-comment-id="helpdesk-commentary">
              <h5>&#x1F4DD; Commentary</h5>
              <ul class="editable" data-edit-id="helpdesk-commentary-text">
                <li>The help desk handled 4,453 requests in Q2, down 21% from Q1 &mdash; but nearly all of that decline is work the AI assistant now absorbs, not falling demand. Requests that actually reached a human were essentially flat (1,325 vs 1,337).</li>
                <li><strong>The good:</strong> self-service now handles the highest-volume, lowest-judgment work &mdash; 96% of app-access requests never touched a person. Automation ran 1,870 playbooks at a 0.43% failure rate (up from 39 runs at 36% in Q1) &mdash; production-grade now. CSAT held at 4.73/5, with 90% perfect scores.</li>
                <li><strong>The problem:</strong> the easy volume left, so the hard volume stayed and grew while the team got smaller. Time-to-first-human-reply rose from ~5h (Q1) to ~57h (Q2) after moving from Round Robin to a triage approach &mdash; though time-to-resolution improved 62%. Both should improve now that Console Inbox is live.</li>
                <li><strong>Deflection down 10% YoY (H1),</strong> driven primarily by GitHub (~40% of week-over-week ticket volume), then 1Password, Vault access, API keys, and Webflow Admin &mdash; it's not just engineering building anymore.</li>
                <li><strong>Path to green on GitHub:</strong> (1) GitHub orgs built &amp; mapped to Okta groups, (2) Flowbot intelligence to route and assign requests, (3) department owners/champions for approval decisions, (4) an access policy for the mono-repo outside EPD.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 3c. GTM (BTEC) — REAL DATA -->
        <div class="accordion open" id="acc-biztech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-biztech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#4353FF"></span>
              3c. GTM (BTEC)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <!-- Metric cards -->
            <div class="metrics-row commentable" data-comment-id="biztech-metrics">
              <div class="metric-card">
                <div class="metric-value">464</div>
                <div class="metric-label">Created</div>
                <div class="metric-delta delta-neutral">vs 491 Q1 FY27</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="btec-total">428</div>
                <div class="metric-label">Closed</div>
                <div class="metric-delta delta-neutral">&darr; 3% vs 441 Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">+36</div>
                <div class="metric-label">Net Backlog</div>
                <div class="metric-delta delta-neutral">created &minus; closed</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="btec-bugs-value">62</div>
                <div class="metric-label" id="btec-bugs-label">Bugs (14.5%)</div>
                <div class="metric-delta delta-up">&darr; vs 19.7% Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="btec-cycle">13.0d</div>
                <div class="metric-label">Median Cycle</div>
                <div class="metric-delta delta-down">&uarr; from 8.8d Q1</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="biztech-charts">
              <div class="chart-container">
                <h5>Issue Types (Q2 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-biztech-types"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Trend vs Q1: Bugs 19.7%&rarr;14.5%, Stories 44.7%&rarr;37.4%, Tasks 28.6%&rarr;31.8%, Epics 3.6%&rarr;4.9%.</p>
              </div>
              <div class="chart-container">
                <h5>Created vs Closed</h5>
                <div class="chart-wrap">
                  <canvas id="chart-biztech-flow"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Net backlog +36 in Q2 (created 464 &gt; closed 428).</p>
              </div>
            </div>

            <!-- Breakdown tables -->
            <div class="chart-row commentable" data-comment-id="biztech-breakdowns">
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>Change Type</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="btec-change-type-tbody">
                    <tr><td>Configuration</td><td>274</td><td>64.0%</td></tr>
                    <tr><td>Development</td><td>80</td><td>18.7%</td></tr>
                    <tr><td>Uncategorized</td><td>61</td><td>14.3%</td></tr>
                    <tr><td>Documentation</td><td>13</td><td>3.0%</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>ETE Category</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="btec-ete-cat-tbody">
                    <tr><td>Change the Business</td><td>154</td><td>36.0%</td></tr>
                    <tr><td>Run the Business</td><td>149</td><td>34.8%</td></tr>
                    <tr><td>Uncategorized</td><td>92</td><td>21.5%</td></tr>
                    <tr><td>Transform the Business</td><td>33</td><td>7.7%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Impacted Processes -->
            <div class="commentable" data-comment-id="biztech-processes" style="margin-bottom:16px;">
              <table class="data-table">
                <thead>
                  <tr><th>Top Impacted Processes</th><th>Count</th><th>%</th></tr>
                </thead>
                <tbody id="btec-process-tbody">
                  <tr><td>Platform Administration</td><td>108</td><td>25.2%</td></tr>
                  <tr><td>Demand-to-Opportunity (D2O)</td><td>67</td><td>15.7%</td></tr>
                  <tr><td>Opportunity-to-Order (O2O)</td><td>49</td><td>11.4%</td></tr>
                  <tr><td>Integration</td><td>34</td><td>7.9%</td></tr>
                  <tr><td>Partner</td><td>21</td><td>4.9%</td></tr>
                  <tr><td>Order-to-Cash (OTC)</td><td>16</td><td>3.7%</td></tr>
                  <tr><td>Time-to-Value (T2V)</td><td>5</td><td>1.2%</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Velocity & complexity -->
            <div class="metrics-row commentable" data-comment-id="biztech-velocity">
              <div class="metric-card">
                <div class="metric-value">1,085</div>
                <div class="metric-label">Velocity &mdash; Story Points Closed</div>
                <div class="metric-delta delta-neutral">vs 1,281 Q1 &middot; 86% pointed</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">2.9</div>
                <div class="metric-label">Avg Complexity (pts / ticket)</div>
                <div class="metric-delta delta-neutral">&darr; from 4.2 Q1 &mdash; smaller chunks</div>
              </div>
            </div>

            <!-- Median cycle time by complexity -->
            <div class="commentable" data-comment-id="biztech-complexity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Median Cycle Time by Complexity</h5>
              <div style="display:flex; gap:12px;">
                <div style="flex:1; background:var(--green-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--green);">5.9d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Simple tickets (&le;3 pts)</div>
                </div>
                <div style="flex:1; background:var(--red-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--red);">49.9d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Complex tickets (&ge;5 pts)</div>
                </div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Complexity drives duration &mdash; complex tickets take ~8&times; longer. Q2's higher overall cycle time reflects clearing aged complex items, not rising day-to-day complexity (avg points actually fell).</p>
            </div>

            <!-- Planned vs Unplanned (Activity Type) -->
            <div class="commentable" data-comment-id="biztech-activity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Planned vs Unplanned (Activity Type)</h5>
              <div style="display:flex; height:30px; border-radius:var(--radius-sm); overflow:hidden; font-size:12px; font-weight:600; color:#fff;">
                <div style="width:48.4%; background:var(--blue); display:flex; align-items:center; justify-content:center;">Planned 48% (200)</div>
                <div style="width:51.6%; background:var(--yellow); display:flex; align-items:center; justify-content:center;">Unplanned 52% (213)</div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Activity Type populated on 96.5% of tickets.</p>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="biztech-commentary">
              <h5>
                &#x1F4DD; Commentary
              </h5>
              <ul class="editable" data-edit-id="biztech-commentary-text">
                <li>GTM completed 428 tickets in Q2 FY27 (down 3% from 441 in Q1). Bug rate improved to 14.5% (62 bug-type tickets) from 19.7% in Q1.</li>
                <li>Median cycle time rose to 13.0d (from 8.8d in Q1); average held roughly flat at ~44d. The uptick was driven by a few long-running Stories closing this quarter (e.g. GTM Permissions automation at ~165d), not a broad slowdown.</li>
                <li>Work skewed to Configuration (64.0%) and Development (18.7%). These were new concepts in Q2, so no comparison QoQ.</li>
                <li>By category the mix was balanced — Change the Business led (36.0%), then Run the Business (34.8%), and Transform the Business at 7.7%.</li>
                <li>Top tagged processes: Platform Administration (25.2%), Demand-to-Opportunity (15.7%), and Opportunity-to-Order (11.4%) &lt; big focus in Q2 on stabilization.</li>
                <li>Key Q2 themes: Stabilization, governance, and internal operations amongst employee turnover (voluntary &amp; involuntary).&nbsp;</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- 3d. Finance &amp; Legal Systems (ETE) — REAL DATA -->
        <div class="accordion open" id="acc-enttech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-enttech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#10B981"></span>
              3d. Finance &amp; Legal Systems (ETE)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="enttech-metrics">
              <div class="metric-card">
                <div class="metric-value">180</div>
                <div class="metric-label">Created</div>
                <div class="metric-delta delta-neutral">vs 168 Q1 FY27</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="ete-total">295</div>
                <div class="metric-label">Closed</div>
                <div class="metric-delta delta-up">&uarr; 84% vs 160 Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">&minus;115</div>
                <div class="metric-label">Net Backlog</div>
                <div class="metric-delta delta-up">burn-down (closed &gt; created)</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="ete-bugs-value">8</div>
                <div class="metric-label" id="ete-bugs-label">Bugs (2.7%)</div>
                <div class="metric-delta delta-up">&darr; vs 8.8% Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="ete-cycle">76.1d</div>
                <div class="metric-label">Median Cycle</div>
                <div class="metric-delta delta-down">&uarr; from 5.1d Q1</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="enttech-charts">
              <div class="chart-container">
                <h5>Issue Types (Q2 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-enttech-types"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Trend vs Q1: Bugs 8.8%&rarr;2.7%, Stories 46.9%&rarr;51.5%, Tasks 24.4%&rarr;29.8%, Sub-tasks 11.9%&rarr;5.1%.</p>
              </div>
              <div class="chart-container">
                <h5>Created vs Closed</h5>
                <div class="chart-wrap">
                  <canvas id="chart-enttech-flow"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Backlog burn-down: closed 295 vs created 180 (net &minus;115).</p>
              </div>
            </div>

            <!-- Breakdown tables -->
            <div class="chart-row commentable" data-comment-id="enttech-breakdowns">
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>Change Type</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="ete-change-type-tbody">
                    <tr><td>Uncategorized</td><td>134</td><td>45.4%</td></tr>
                    <tr><td>Configuration</td><td>118</td><td>40.0%</td></tr>
                    <tr><td>Development</td><td>37</td><td>12.5%</td></tr>
                    <tr><td>Documentation</td><td>6</td><td>2.0%</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>ETE Category</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="ete-ete-cat-tbody">
                    <tr><td>Uncategorized</td><td>134</td><td>45.4%</td></tr>
                    <tr><td>Run the Business</td><td>104</td><td>35.3%</td></tr>
                    <tr><td>Transform the Business</td><td>35</td><td>11.9%</td></tr>
                    <tr><td>Change the Business</td><td>22</td><td>7.5%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Impacted Processes -->
            <div class="commentable" data-comment-id="enttech-processes" style="margin-bottom:16px;">
              <table class="data-table">
                <thead>
                  <tr><th>Top Impacted Processes</th><th>Count</th><th>%</th></tr>
                </thead>
                <tbody id="ete-process-tbody">
                  <tr><td>Order-to-Cash (OTC)</td><td>59</td><td>20.0%</td></tr>
                  <tr><td>Platform Administration</td><td>34</td><td>11.5%</td></tr>
                  <tr><td>Record to Report</td><td>24</td><td>8.1%</td></tr>
                  <tr><td>Procure to Pay</td><td>20</td><td>6.8%</td></tr>
                  <tr><td>Integration</td><td>18</td><td>6.1%</td></tr>
                  <tr><td>FP&amp;A</td><td>2</td><td>0.7%</td></tr>
                  <tr><td>Opportunity-to-Order (O2O)</td><td>2</td><td>0.7%</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Velocity & complexity -->
            <div class="metrics-row commentable" data-comment-id="enttech-velocity">
              <div class="metric-card">
                <div class="metric-value">364</div>
                <div class="metric-label">Velocity &mdash; Story Points Closed</div>
                <div class="metric-delta delta-neutral">vs 498 Q1 &middot; 48% pointed (partial)</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">2.6</div>
                <div class="metric-label">Avg Complexity (pts / ticket)</div>
                <div class="metric-delta delta-neutral">&darr; from 4.5 Q1 &mdash; smaller chunks</div>
              </div>
            </div>

            <!-- Median cycle time by complexity -->
            <div class="commentable" data-comment-id="enttech-complexity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Median Cycle Time by Complexity</h5>
              <div style="display:flex; gap:12px;">
                <div style="flex:1; background:var(--green-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--green);">2.9d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Simple tickets (&le;3 pts)</div>
                </div>
                <div style="flex:1; background:var(--red-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--red);">132.8d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Complex tickets (&ge;5 pts)</div>
                </div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">The 76d median reflects clearing long-dormant complex items (one Stripe AR story was open ~363 days) during this backlog burn-down &mdash; not rising day-to-day complexity (avg points fell).</p>
            </div>

            <!-- Planned vs Unplanned (Activity Type) -->
            <div class="commentable" data-comment-id="enttech-activity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Planned vs Unplanned (Activity Type)</h5>
              <div style="display:flex; height:30px; border-radius:var(--radius-sm); overflow:hidden; font-size:12px; font-weight:600; color:#fff;">
                <div style="width:59%; background:var(--blue); display:flex; align-items:center; justify-content:center;">Planned 59% (85)</div>
                <div style="width:41%; background:var(--yellow); display:flex; align-items:center; justify-content:center;">Unplanned 41% (59)</div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Activity Type populated on only 48.8% of tickets &mdash; partial view.</p>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="enttech-commentary">
              <h5>
                &#x1F4DD; Commentary
              </h5>
              <ul class="editable" data-edit-id="enttech-commentary-text">
                <li>Finance &amp; Legal Systems closed 295 tickets in Q2 FY27 (up 84% from 160 in Q1) while creating only 180 — a net backlog burn-down of 115, primarily due to closing the tickets related to Enterprise Billing.</li>
                <li>Bug rate fell to 2.7% (8 tickets) from 8.8% in Q1 — a very clean quarter on quality.</li>
                <li>Median cycle time rose sharply to 76.1d (from 5.1d), driven entirely by clearing aged, complex work: complex tickets (&ge;5 pts) ran a 132.8d median vs 2.9d for simple ones, and one Stripe AR automation had been open ~363 days. Typical ticket complexity actually fell (avg 4.5&rarr;2.6 pts).</li>
                <li>Data-quality caveat: ~50% of ETE tickets uncategorized due to backlog cleanup / RevRise backlog re-organization.&nbsp;</li>
                <li>Where tagged, work led by Order-to-Cash (20.0%) and Platform Administration (11.5%); Run the Business (35.3%) dominated by category.</li>
                <li>Key Q2 themes: Order to Cash dominated improvements, including tax improvements in Marketplace Taxation and a lot of medium-sized improvements to Enterprise OTC processes.&nbsp;</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- 3e. Integrations (ENI) — REAL DATA -->
        <div class="accordion open" id="acc-integrations">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-integrations')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#F59E0B"></span>
              3e. Integrations (ENI)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="eni-metrics">
              <div class="metric-card">
                <div class="metric-value">53</div>
                <div class="metric-label">Created</div>
                <div class="metric-delta delta-neutral">vs 72 Q1 FY27</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="eni-total">50</div>
                <div class="metric-label">Closed</div>
                <div class="metric-delta delta-neutral">&darr; 12% vs 57 Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">+3</div>
                <div class="metric-label">Net Backlog</div>
                <div class="metric-delta delta-neutral">created &minus; closed</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="eni-bugs-value">11</div>
                <div class="metric-label" id="eni-bugs-label">Bugs (22.0%)</div>
                <div class="metric-delta delta-up">&darr; from 68.4% Q1</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" id="eni-cycle">8.2d</div>
                <div class="metric-label">Median Cycle</div>
                <div class="metric-delta delta-neutral">&uarr; from 1.0d Q1 (see note)</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="eni-charts">
              <div class="chart-container">
                <h5>Issue Types (Q2 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-eni-types"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Trend vs Q1: Bugs 68.4%&rarr;22.0%, Stories 28.1%&rarr;58.0% &mdash; far fewer auto-created error tickets, more planned build work.</p>
              </div>
              <div class="chart-container">
                <h5>Created vs Closed</h5>
                <div class="chart-wrap">
                  <canvas id="chart-eni-flow"></canvas>
                </div>
                <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Roughly flat: created 53 vs closed 50 (net +3).</p>
              </div>
            </div>

            <!-- Breakdown tables -->
            <div class="chart-row commentable" data-comment-id="eni-breakdowns">
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>Change Type</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="eni-change-type-tbody">
                    <tr><td>Development</td><td>33</td><td>66.0%</td></tr>
                    <tr><td>Configuration</td><td>14</td><td>28.0%</td></tr>
                    <tr><td>Uncategorized</td><td>3</td><td>6.0%</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>ETE Category</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody id="eni-ete-cat-tbody">
                    <tr><td>Run the Business</td><td>29</td><td>58.0%</td></tr>
                    <tr><td>Change the Business</td><td>11</td><td>22.0%</td></tr>
                    <tr><td>Transform the Business</td><td>7</td><td>14.0%</td></tr>
                    <tr><td>Uncategorized</td><td>3</td><td>6.0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Impacted Processes -->
            <div class="commentable" data-comment-id="eni-processes" style="margin-bottom:16px;">
              <table class="data-table">
                <thead>
                  <tr><th>Top Impacted Processes</th><th>Count</th><th>%</th></tr>
                </thead>
                <tbody id="eni-process-tbody">
                  <tr><td>Integration</td><td>35</td><td>70.0%</td></tr>
                  <tr><td>Order-to-Cash (OTC)</td><td>7</td><td>14.0%</td></tr>
                  <tr><td>Demand-to-Opportunity (D2O)</td><td>3</td><td>6.0%</td></tr>
                  <tr><td>Opportunity-to-Order (O2O)</td><td>1</td><td>2.0%</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Velocity & complexity -->
            <div class="metrics-row commentable" data-comment-id="eni-velocity">
              <div class="metric-card">
                <div class="metric-value">707</div>
                <div class="metric-label">Velocity &mdash; Story Points Closed</div>
                <div class="metric-delta delta-neutral">vs 290 Q1 &middot; 86% pointed</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">16.4</div>
                <div class="metric-label">Avg Complexity (pts / ticket)</div>
                <div class="metric-delta delta-neutral">team estimates in larger chunks</div>
              </div>
            </div>

            <!-- Median cycle time by complexity -->
            <div class="commentable" data-comment-id="eni-complexity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Median Cycle Time by Complexity</h5>
              <div style="display:flex; gap:12px;">
                <div style="flex:1; background:var(--green-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--green);">0.4d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Simple tickets (&le;3 pts)</div>
                </div>
                <div style="flex:1; background:var(--red-bg); border-radius:var(--radius-sm); padding:14px;">
                  <div style="font-size:24px; font-weight:700; color:var(--red);">11.0d</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Complex tickets (&ge;5 pts)</div>
                </div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Integrations estimates in larger point values than the other teams, so its point totals aren't directly comparable &mdash; but the complexity&rarr;duration pattern holds within the team.</p>
            </div>

            <!-- Planned vs Unplanned (Activity Type) -->
            <div class="commentable" data-comment-id="eni-activity" style="margin-bottom:16px;">
              <h5 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:10px;">Planned vs Unplanned (Activity Type)</h5>
              <div style="display:flex; height:30px; border-radius:var(--radius-sm); overflow:hidden; font-size:12px; font-weight:600; color:#fff;">
                <div style="width:32.6%; background:var(--blue); display:flex; align-items:center; justify-content:center;">Planned 33% (14)</div>
                <div style="width:67.4%; background:var(--yellow); display:flex; align-items:center; justify-content:center;">Unplanned 67% (29)</div>
              </div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:8px;">Activity Type populated on 86% of tickets. Unplanned-heavy, consistent with reactive integration support.</p>
            </div>

            <!-- Bug rate context note -->
            <div class="commentary" style="background:#fffbeb; border-left-color:#D97706;">
              <h5 style="color:#D97706;">
                &#x26A0; Note on Bug Rate (22%)
              </h5>
              <ul>
                <li>Bug rate fell sharply from 68% (Q1) to 22% (Q2) &mdash; Q1 was inflated by <strong>auto-created Jira tickets from Workato recipe errors</strong> (resolved in minutes), which had pulled Q1's median cycle time down to ~1 day. Q2's mix shifted toward planned build work (Stories 58%).</li>
                <li><strong>Workato operational metrics remain the more reliable signal</strong> for integration health &mdash; see the iPaaS section below.</li>
              </ul>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="eni-commentary">
              <h5>
                &#x1F4DD; Commentary
              </h5>
              <ul class="editable" data-edit-id="eni-commentary-text">
                <li>Integrations closed 50 tickets in Q2 FY27 (created 53; net +3) — steady volume, down slightly from Q1's 57.</li>
                <li>Bug rate dropped from 68% to 22%: Q1 was dominated by auto-created Workato error tickets, while Q2 skewed to planned Stories (58%). The higher 8.2d median cycle (vs 1.0d) reflects that shift toward real build work, not slower response.</li>
                <li>Work categorizations: Run 58% / Change 22% / Transform 14%</li>
                <li>Velocity was 707 story points on 86% coverage &mdash; but the team estimates integration work in much larger point values than GTM or Finance &amp; Legal Systems, so its totals aren't comparable across teams.</li>
                <li>Activity Type skews Unplanned (67%), consistent with reactive integration support and error handling. H2 focuses on more pre-planning with stakeholders and cross-team</li>
                <li>Workato reliability stayed strong — see the iPaaS section for the authoritative signal (runs, failure rate, tasks).</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ═══ 3g. iPaaS Operational Metrics ═════════════ -->
  <div class="section" id="ipaas">
    <div class="card">
      <div class="card-header" style="background:var(--dark-2);">
        <h3><span class="section-num" style="background:#F59E0B;">&#x2699;</span> iPaaS Operational Metrics (Workato)</h3>
        <span class="pill pill-blue">Live Data</span>
      </div>
      <div class="card-body">
        <!-- Summary cards -->
        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-value" id="ipaas-total-runs">4.87M</div>
            <div class="metric-label">Total Recipe Runs</div>
            <div class="metric-delta delta-neutral">Q2 FY27</div>
          </div>
          <div class="metric-card">
            <div class="metric-value" id="ipaas-total-failures">490</div>
            <div class="metric-label">Total Failures</div>
            <div class="metric-delta delta-up" id="ipaas-fail-rate">0.010% fail rate</div>
          </div>
          <div class="metric-card">
            <div class="metric-value" id="ipaas-active-recipes">116</div>
            <div class="metric-label">Active Recipes</div>
            <div class="metric-delta delta-up">&#x2191; from 95 Q1 peak</div>
          </div>
          <div class="metric-card">
            <div class="metric-value" id="ipaas-tasks-consumed">850.4K</div>
            <div class="metric-label">Tasks Consumed</div>
            <div class="metric-delta delta-up" id="ipaas-tasks-delta">28% of quarterly budget</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">3M</div>
            <div class="metric-label">Quarterly Budget</div>
            <div class="metric-delta delta-neutral">12M/yr plan</div>
          </div>
        </div>

        <!-- Usage vs Budget gauge -->
        <div style="margin:16px 0 24px;">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:600; color:var(--text-secondary); margin-bottom:6px;">
            <span>Task Usage vs Quarterly Budget</span>
            <span id="ipaas-budget-label">850.4K / 3M (28%)</span>
          </div>
          <div style="background:var(--border); border-radius:8px; height:24px; overflow:hidden;">
            <div id="ipaas-budget-bar" style="background:linear-gradient(90deg, var(--green), var(--blue)); height:100%; width:28%; border-radius:8px; transition:width 0.5s;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-secondary); margin-top:4px;">
            <span>0</span>
            <span>3M limit</span>
          </div>
        </div>

        <!-- Charts -->
        <div class="chart-row">
          <div class="chart-container">
            <h5>Weekly Recipe Runs</h5>
            <div class="chart-wrap">
              <canvas id="chart-ipaas-runs"></canvas>
            </div>
          </div>
          <div class="chart-container">
            <h5>Weekly Failure Rate (%)</h5>
            <div class="chart-wrap">
              <canvas id="chart-ipaas-failures"></canvas>
            </div>
          </div>
        </div>

        <div class="chart-row">
          <div class="chart-container">
            <h5>Weekly Tasks Consumed</h5>
            <div class="chart-wrap">
              <canvas id="chart-ipaas-tasks"></canvas>
            </div>
          </div>
          <div class="chart-container">
            <h5>Active Recipes Over Time</h5>
            <div class="chart-wrap">
              <canvas id="chart-ipaas-recipes"></canvas>
            </div>
          </div>
        </div>

        <!-- Top consumers & failures table -->
        <div class="chart-row" style="margin-top:8px;">
          <div>
            <h5 style="font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.3px; margin-bottom:8px;">Top Task Consumers</h5>
            <table class="data-table">
              <thead><tr><th>Recipe</th><th>Tasks</th></tr></thead>
              <tbody id="ipaas-consumers-tbody">
                <tr><td>Salesforce &#x2194; Stripe - Invoice Status Updated</td><td>~330K runs/wk</td></tr>
                <tr><td>Salesforce &#x2194; Stripe - Generate Invoices</td><td>~75K runs/wk</td></tr>
                <tr><td>[US] Compile Candidate Data + Email for External Counsel</td><td>~27K/wk (top task recipe)</td></tr>
                <tr><td>[REC] Salesforce &#x2194; Clay Lead Scheduler</td><td>~2K runs/wk (new)</td></tr>
                <tr><td>Zapier-Webhook-LogStreaming</td><td>emerging (late Q2)</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h5 style="font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.3px; margin-bottom:8px;">Recurring Failure Sources</h5>
            <table class="data-table">
              <thead><tr><th>Recipe</th><th>Weeks</th></tr></thead>
              <tbody id="ipaas-failures-tbody">
                <tr><td>Workday &#x2192; Gsheets &#x2192; Remote (Deelbreaker) child</td><td>Wk 23&ndash;24 spike</td></tr>
                <tr><td>Salesforce &#x2194; NetSuite v2</td><td>Tax Code / NS Internal ID missing</td></tr>
                <tr><td>[BZ] LF | Slack | Sync Accept/Modify to SFDC</td><td>Duplicate Feature VR (wk 31)</td></tr>
                <tr><td>Adaptive &#x2192; Airtable: Full Data Sync</td><td>Failed job (recurring)</td></tr>
                <tr><td>[Bulk] Greenhouse &#x2192; Airtable (Offers)</td><td>Table already exists</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Commentary -->
        <div class="commentary commentable" data-comment-id="ipaas-commentary">
          <h5>
            &#x1F4DD; Commentary
          </h5>
          <ul class="editable" data-edit-id="ipaas-commentary-text">
            <li>Recipe runs averaging ~405K/week (peak 448K in the last week of July), whereas Q1 only reached that level mid-quarter.</li>
            <li>Failure rate stayed at or below 0.04% every week; the quarter high (wk 23, 1st week of June) came from the Workday &#x2192; Gsheets &#x2018;Deelbreaker&#x2019; child recipe, since resolved.</li>
            <li>Task consumption fell to ~850K (28% of the 3M quarterly budget), down from 48% in Q1 — comfortably within plan due in part to incorporating code within the recipes to reduce tasks where possible.</li>
            <li>Active recipes grew to 116 (from 95 in Q1), led by new Slack &amp; Stripe automations and a Zapier log-streaming webhook appearing late in the quarter.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 4. Quarterly Landings (from Asana) ═════════ -->
  <div class="section" id="landings">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">4</span> Quarterly Landings (Q2 FY27)</h3>
      </div>
      <div class="card-body">
        <div class="accordion open" id="acc-landings-enttech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-landings-enttech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#10B981"></span>
              EntTech
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
        <div class="commentable" data-comment-id="landings-table" style="position:relative">

          <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:4px 0 10px; color:var(--text);">Order to Cash</h4>
          <table class="data-table">
            <thead><tr><th style="width:32%;">Landing</th><th>What it delivered</th></tr></thead>
            <tbody>
              <tr><td><strong>Product Catalog Syncer</strong></td><td>Auto-syncs the product catalog from Salesforce to NetSuite, Stripe, and Anrok — one source of truth, full audit trail.</td></tr>
              <tr><td><strong>Sales Order automation (SF → NS)</strong></td><td>Fixed multi-year deal and bundle pricing errors; standardized billing schedules across sales orders.</td></tr>
              <tr><td><strong>Invoice syncing automation</strong></td><td>Connects Stripe, NetSuite, and Salesforce invoicing into one automated flow, replacing two disconnected systems.</td></tr>
              <tr><td><strong>Marketplace Template Taxability</strong></td><td>Implemented correct tax handling for Marketplace Template purchases.</td></tr>
              <tr><td><strong>Enterprise Billing go-live (Aug 17)</strong></td><td>New self-serve Enterprise billing system in Stripe, replacing manual invoicing.</td></tr>
            </tbody>
          </table>

          <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">C360</h4>
          <table class="data-table">
            <thead><tr><th style="width:32%;">Landing</th><th>What it delivered</th></tr></thead>
            <tbody>
              <tr><td><strong>C360: launch to the field (May 12)</strong></td><td>Gave the field product usage, entitlement, and user data — live in Salesforce.</td></tr>
            </tbody>
          </table>

          <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Platform Governance &amp; Stability</h4>
          <table class="data-table">
            <thead><tr><th style="width:32%;">Landing</th><th>What it delivered</th></tr></thead>
            <tbody>
              <tr><td><strong>SysAdmin migration in Salesforce</strong></td><td>Moved 20+ Rev Ops / Marketing / Deal Desk users off System Admin onto right-sized roles.</td></tr>
              <tr><td><strong>Salesforce platform security adherence</strong></td><td>Closed every outstanding Salesforce security vulnerability ahead of 2026 platform requirements.</td></tr>
              <tr><td><strong>Resolved automation failures</strong></td><td>Fixed automations that broke after the org restructure.</td></tr>
            </tbody>
          </table>

          <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Business Process Automation</h4>
          <table class="data-table">
            <thead><tr><th style="width:32%;">Landing</th><th>What it delivered</th></tr></thead>
            <tbody>
              <tr><td><strong>Brightflag / Zip Integration</strong></td><td>Approved legal invoices in Brightflag now auto-create the matching bill in Zip.</td></tr>
              <tr><td><strong>Workday → NetSuite EE Demographic Sync</strong></td><td>Automated employee demographic updates flowing from Workday into NetSuite.</td></tr>
              <tr><td><strong>SE Product Feedback Agent (Gappy)</strong></td><td>Workato routes SE product feedback straight into Salesforce.</td></tr>
              <tr><td><strong>Ironclad → Nomio integration</strong></td><td>Stood up the integration for the first time: Nomio is our AI-powered contract repository (supplementing Ironclad) that extracts and organizes contract metadata for Legal.</td></tr>
              <tr><td><strong>Background check automation (Workday → Checkr)</strong></td><td>Auto-tracks background checks to clear before start date, closing a SOC2 gap.</td></tr>
              <tr><td><strong>Enterprise Customers SSO Automation</strong></td><td>Automates Webflow SSO requests, routed by managed vs. unmanaged account, with a design view before they reach the build stage.</td></tr>
              <tr><td><strong>Closed Lost reasons &amp; GTM AI analytics</strong></td><td>Expanded Closed Lost reasons for risky renewals and added new closed-lost analytics fields for GTM AI.</td></tr>
              <tr><td><strong>Co-marketing sourced opportunities</strong></td><td>Co-marketing opps now flow through Salesforce as Partner Sourced (Co-Marketing subtype), with commission, forecasting, and reporting updated. PAMs gain visibility, partners are credited fairly, and Marketing retains campaign attribution.</td></tr>
              <tr><td><strong>IronClad Enhancements</strong></td><td>Moved CLM contract-attribute capture upstream to the quote stage and closed key Ironclad–Salesforce field-mapping gaps, cutting Legal's manual post-signature work and unblocking Sales / RevOps data needs.</td></tr>
              <tr><td><strong>Risk Record Lifecycle Improvements</strong></td><td>Fixed renewal status stamping and built account-level Exit ARR reporting for accounts without an active contract, closing key data gaps for RevOps and Finance.</td></tr>
              <tr><td><strong>Unmanaged renewals automation</strong></td><td>Auto-generates and tracks renewal opportunities for accounts with no assigned CSM.</td></tr>
            </tbody>
          </table>

          <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">AI</h4>
          <table class="data-table">
            <thead><tr><th style="width:32%;">Landing</th><th>What it delivered</th></tr></thead>
            <tbody>
              <tr><td><strong>Design Review Agent (internal)</strong></td><td>Reviews Salesforce design specs against our standards before build starts.</td></tr>
              <tr><td><strong>Technical Review Agent (internal)</strong></td><td>Reviews what was actually built in Salesforce against our standards.</td></tr>
              <tr><td><strong>Salesforce Data API Access Request Agent (internal)</strong></td><td>Handles Salesforce data API access requests and recommends solutions.</td></tr>
              <tr><td><strong>Slack and Jira comment agent (internal)</strong></td><td>Sends a Slack DM to stakeholders tagged in a comment, for faster response times.</td></tr>
              <tr><td><strong>Data Quality Agent</strong></td><td>Monitors data pipeline alerts, finds root cause, and drafts code fixes for review — fully automated, 24/7.</td></tr>
            </tbody>
          </table>
        </div>
          </div>
        </div>

        <div class="accordion open" id="acc-landings-it">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-landings-it')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#6366F1"></span>
              IT Foundations
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="commentable" data-comment-id="landings-it">
              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:4px 0 10px; color:var(--text);">IT Operations</h4>
              <table class="data-table">
                <thead><tr><th style="width:26%;">Landing</th><th>What it delivered</th></tr></thead>
                <tbody>
                  <tr><td><strong>Console / Flowbot / Inbox</strong></td><td>Routing human-intervention tickets keeps Flowbot learning and deflecting more; added 34 new and improved 46 Console Playbooks this quarter.</td></tr>
                  <tr><td><strong>Lore</strong></td><td>Documentation-as-code AI skill: interviews you, drafts internal/customer docs in a unified voice, and files them in GitHub + Confluence.</td></tr>
                  <tr><td><strong>Oktapus</strong></td><td>macOS tool for much faster Okta queries — wildcard search, filtering, a visual rules map, and auditor functions Okta itself lacks.</td></tr>
                  <tr><td><strong>JirAmigo</strong></td><td>macOS tool that surfaces Jira/Confluence tags &amp; replies and enables in-Jira triage.</td></tr>
                  <tr><td><strong>Gambit</strong></td><td>macOS GUI wrapper for GAM (the powerful Google Admin CLI).</td></tr>
                  <tr><td><strong>Sift</strong></td><td>Spotlight-style federated search across Atlassian, Linear, Google, Slack, Okta, and GitHub (a Glean-like alternative).</td></tr>
                  <tr><td><strong>Slacksmith</strong></td><td>Slack Enterprise Grid admin tool: workflow auditor plus an add-manager rescue write.</td></tr>
                  <tr><td><strong>Consignia</strong></td><td>Claude Skill for authoring Console/Flowbot Inbox AI assignment rules.</td></tr>
                  <tr><td><strong>Phosphor</strong></td><td>A refounding-moment effort for Webflow that informed the IT roadmap.</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Collaboration</h4>
              <table class="data-table">
                <thead><tr><th style="width:26%;">Landing</th><th>What it delivered</th></tr></thead>
                <tbody>
                  <tr><td><strong>Linear</strong></td><td>Deployed Linear for EPD.</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">IT Engineering</h4>
              <table class="data-table">
                <thead><tr><th style="width:26%;">Landing</th><th>What it delivered</th></tr></thead>
                <tbody>
                  <tr><td><strong>Okta + Anthropic Managed Auth</strong></td><td>Auto-provisions and auto-authorizes Atlassian and Asana.</td></tr>
                  <tr><td><strong>Certificate Authority</strong></td><td>Stood up Webflow's internal certificate authority for DVM.</td></tr>
                  <tr><td><strong>Apple &amp; Google Play Accounts</strong></td><td>Established Webflow developer accounts (initial use: WFC).</td></tr>
                  <tr><td><strong>Source Certificates</strong></td><td>Built the CI/CD flow to sign the app with an Apple developer certificate.</td></tr>
                  <tr><td><strong>Device Trust</strong></td><td>Went live for Snowflake, Stripe, Webflow Admin, and AWS.</td></tr>
                  <tr><td><strong>GitHub Rollout</strong></td><td>Rolled out GitHub orgs for Finance and Revenue.</td></tr>
                  <tr><td><strong>SocketFirewall Rollout</strong></td><td>Deployed the Security-procured tool that blocks malicious NPM packages; tuned on endpoints via Jamf.</td></tr>
                  <tr><td><strong>Okta SSO + phishing-resistant MFA on Salesforce</strong></td><td>Replaced local SF logins with an Okta SSO app emitting correct AMR claims, and drove the org-wide cutover.</td></tr>
                  <tr><td><strong>GCP ownership transfer</strong></td><td>Moved Google Cloud Platform ownership and budget to the Infrastructure team.</td></tr>
                  <tr><td><strong>All-Hands format working group</strong></td><td>Assessed Zoom all-hands scale and alternatives to better support a large org.</td></tr>
                  <tr><td><strong>Console Asset Management as CMDB</strong></td><td>Set the direction and partner-development relationship for Console's asset-management tooling.</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Enterprise AI Operations</h4>
              <table class="data-table">
                <thead><tr><th style="width:26%;">Landing</th><th>What it delivered</th></tr></thead>
                <tbody>
                  <tr><td><strong>AI Help Bot</strong></td><td>Slack agent for AI tooling/access questions that routes new requests into intake; cut EAI Ops intervention ~70% with 24/7 coverage (the team's only measured deflection result).</td></tr>
                  <tr><td><strong>Friend of Tax / LegalBeagle / Integration Needs Agent</strong></td><td>Three Slack agents on one shared architecture; Integration Needs Agent live 8/11 (&lt;2 min/opportunity), Tax &amp; Legal in pilot.</td></tr>
                  <tr><td><strong>Marketing Ops agent (Mopsy)</strong></td><td>Rebuilt on AWS (Secrets Manager, CI/CD, ECS Fargate) with UTM Builder, Campaign Intake, and Answer Agent skills at ~$11/mo.</td></tr>
                  <tr><td><strong>AI spend governance</strong></td><td>Per-subdept Claude/Cursor caps, $5K/mo API-key caps, daily usage sync to Airtable, and company-wide transparency; 927 users reconciled daily, ~$672K tracked, ~10% token reduction.</td></tr>
                  <tr><td><strong>AUP rewrite + mandatory Responsible AI training</strong></td><td>New Acceptable Use Policy with AI guardrails plus WorkRamp training (released 8/3), gating every AI user.</td></tr>
                  <tr><td><strong>AI Hub in Confluence</strong></td><td>~25 pages (model-choice guides for 11 functions, platform guides, SOPs) — the company's first self-serve AI enablement surface.</td></tr>
                  <tr><td><strong>Claude Cowork pilot</strong></td><td>Scaled 41 &rarr; 93 employees (+127%) with telemetry; expansion paused pending Security sign-off.</td></tr>
                  <tr><td><strong>MCP &amp; connector estate</strong></td><td>Added DocuSign, PartnerStack, Zendesk, Zoom, and Zip connectors plus in-house Workday/Google Sheets MCPs; migrated off the deprecated Atlassian SSE before the 6/30 cutoff.</td></tr>
                  <tr><td><strong>Doc Patrol</strong></td><td>Help Center auditing agent; reviewer calibration lifted exact agreement 52% &rarr; 63% at $0.97 per 50-article run.</td></tr>
                  <tr><td><strong>Talent automation</strong></td><td>Slack command + n8n workflow that spins up hiring channels with a Claude-drafted kickoff; saves 10&ndash;15 min/role.</td></tr>
                  <tr><td><strong>EAI Ops function stood up</strong></td><td>Built the intake/triage/reporting front door and consolidated 85+ AI Slack channels down to ~35.</td></tr>
                  <tr><td><strong>Team grew to five</strong></td><td>Hired and onboarded a Senior Business Systems Analyst, Enterprise AI Operations (Sage Lee, started 8/3).</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 5. Roadmap + Look Ahead (Q2 FY27) ═════════ -->
  <div class="section" id="roadmap">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">5</span> Roadmap &amp; Look Ahead &mdash; Q3 FY27</h3>
      </div>
      <div class="card-body">

        <div class="accordion open" id="acc-roadmap-enttech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-roadmap-enttech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#10B981"></span>
              EntTech
              <span class="pill pill-blue">P0 &amp; P1</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="commentable" data-comment-id="roadmap-enttech">
              <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Q3 FY27 look-ahead, P0 &amp; P1 only. Additional P2 and backlog initiatives live in the full roadmaps: <a href="https://docs.google.com/spreadsheets/d/1D1bM4RMY-8VpK0f_e7fFtvoh0DuufCoVURIoChKzxu0/edit?gid=906636856" target="_blank" style="color:var(--blue);">GTM Tech</a> &middot; <a href="https://docs.google.com/spreadsheets/d/1ZlKWbXs-fVisDFoFc988Jy-b_jLPdYocIM_phiAYB-o/edit?gid=1915868859" target="_blank" style="color:var(--blue);">Finance &amp; Legal Systems</a>.</p>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:4px 0 10px; color:var(--text);">Order to Cash</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Enterprise Billing Automation (Stripe)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Testing</span></td><td>Aug 17</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>Revenue Accounting for AI Credits</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                  <tr><td><strong>Coupon Governance</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>Campaigns SKUs / Bundle CPQ (GA Sep 15)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>Sep 15</td><td>GTM</td></tr>
                  <tr><td><strong>AWS Opportunity Tracking Automation</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>MDF Approvals: CPQ</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Testing</span></td><td>Aug 31</td><td>GTM</td></tr>
                  <tr><td><strong>Stigg Automation Refactor</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>Sales Order Creation Trigger Refactor</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">C360</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Domain Enrichment (C360 matching &amp; hierarchy)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM &middot; Integrations</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Platform Governance &amp; Stability</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Secure &amp; Stabilize Salesforce Integration + API Access</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">In Planning</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Salesforce Flows: Build, Optimize &amp; Maintain</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Disaster Recovery + Salesforce Backup (OwnBackup)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Automated User Provisioning: Okta &rarr; Salesforce</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Salesforce CI/CD Tool</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Salesforce Error Observability Framework</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Automated Error Tracking &rarr; Jira (mgmt, resolution, reporting)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Business Process Automation</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Campaigns Refresh</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>SFDC Home Pages (RevOps + MarketingOps)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Aug&ndash;Sep</td><td>GTM</td></tr>
                  <tr><td><strong>Intelligent Contract Repository</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Partner Certification / Lifecycle Tracking</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM &middot; Integrations</td></tr>
                  <tr><td><strong>PDR Handoff Process Updates</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Personalized ABM Landing Pages</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>Procurement Workflow Refactor</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                  <tr><td><strong>NS Admin Automation: Workday &rarr; NetSuite employee sync</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>NS Admin Automation: GL account creation</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>NS Admin Automation: role permission automation</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>Automation Opportunities: Internally Developed Software</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                  <tr><td><strong>Automation Opportunities: Commissions</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                  <tr><td><strong>Internal Workspace Provisioning</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">AI</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Salesforce MCP (Data Read-Only)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM &middot; Enterprise AI</td></tr>
                  <tr><td><strong>Salesforce MCP (Data Write)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">Discovery</span></td><td>&mdash;</td><td>GTM &middot; Enterprise AI</td></tr>
                  <tr><td><strong>AI Agents for GTM Tech Delivery Workflow</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-green">Done</span></td><td>Aug 11</td><td>GTM</td></tr>
                  <tr><td><strong>Clari Replacement (Write MCP) &mdash; Phase 1</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>GTM</td></tr>
                  <tr><td><strong>AI Ops: Automated close-prep &amp; reconciliation (NS/Stripe/SF)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>AI Ops: Intelligent exception flagging across O2C</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                  <tr><td><strong>AI Ops: System health monitoring &amp; alerting</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>&mdash;</td><td>Finance &amp; Legal &middot; Integrations</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="accordion open" id="acc-roadmap-it">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-roadmap-it')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#6366F1"></span>
              IT Foundations
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="commentable" data-comment-id="roadmap-it">
              <p style="font-size:13px; color:var(--text-secondary); margin-bottom:12px;">Q3 FY27 look-ahead, P0 &amp; P1 only. P2+ and backlog items are tracked in the IT Foundations roadmap.</p>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:4px 0 10px; color:var(--text);">IT Operations</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>Ashby Integrations</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>People</td></tr>
                  <tr><td><strong>Linear (Enterprise rollout)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>Multiple</td></tr>
                  <tr><td><strong>Software Renewals (H2 FY27)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3&ndash;Q4</td><td>&mdash;</td></tr>
                  <tr><td><strong>Console Inbox Migration (JSM &rarr; Console)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>&mdash;</td></tr>
                  <tr><td><strong>IT Asset Management Tool (Console CMDB)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Console</td></tr>
                  <tr><td><strong>Lifecycle Automation Refresh</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3&ndash;Q4</td><td>&mdash;</td></tr>
                  <tr><td><strong>PMO Center of Excellence for IT</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3&ndash;Q4</td><td>&mdash;</td></tr>
                  <tr><td><strong>AI Help Bot + Flowbot intake (#help-ai)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>&mdash;</td></tr>
                  <tr><td><strong>SFDC Dashboards via Zoom Signage (Korbyt)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>&mdash;</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">IT Engineering</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>JIT Super Admin access for Security</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Security</td></tr>
                  <tr><td><strong>dbt Labs OAuth + SCIM (by Nov 1)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Data</td></tr>
                  <tr><td><strong>Declarative device management software updates</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Security</td></tr>
                  <tr><td><strong>Stripe / Okta SCIM provisioning</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Security</td></tr>
                  <tr><td><strong>Identity Maturity (inventory, admin audit, UAR)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Security</td></tr>
                  <tr><td><strong>Okta test environment</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>&mdash;</td></tr>
                  <tr><td><strong>Improve SCIM + RBAC Salesforce provisioning</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Business Technology</td></tr>
                  <tr><td><strong>Device Trust (expansion, exception walk-back)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3&ndash;Q4</td><td>Security</td></tr>
                  <tr><td><strong>SFDC MCP v2</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Business Technology</td></tr>
                  <tr><td><strong>Privileged access controls &amp; alerting (Slack, AI tools, GWS)</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">Not Started</span></td><td>Q3</td><td>Security</td></tr>
                </tbody>
              </table>

              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:22px 0 10px; color:var(--text);">Enterprise AI Operations</h4>
              <table class="data-table">
                <thead><tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Team</th></tr></thead>
                <tbody>
                  <tr><td><strong>GitHub reorg / Okta resync &amp; management</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>Security</td></tr>
                  <tr><td><strong>AI Enablement 2.0</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>&mdash;</td></tr>
                  <tr><td><strong>Marketing MCP agent (Mopsy)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>Marketing</td></tr>
                  <tr><td><strong>AI Spend Management</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3&ndash;Q4</td><td>EPD, Security, FP&amp;A, Data</td></tr>
                  <tr><td><strong>LegalBeagle &mdash; Legal AI agent</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>Legal</td></tr>
                  <tr><td><strong>Friend of Tax / Billing agent</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Q3</td><td>Accounting</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- ═══ 6. Decisions & Support Needed ═════════════ -->
  <div class="section" id="decisions">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">6</span> Decisions & Support Needed</h3>
      </div>
      <div class="card-body">
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:14px;">From IT Foundations (Lalena). Additional decisions / escalations from other teams to be added.</p>

        <div class="commentary commentable" data-comment-id="decision-risk" style="background:var(--red-bg); border-left-color:var(--red);">
          <h5 style="color:var(--red);">&#x26A0; Risk &mdash; Software rationalization timing</h5>
          <ul>
            <li>Software rationalization can create unplanned work for IT, and the real risk is <strong>timing</strong>: when decisions are made or communicated too close to a renewal date, there isn't enough runway to assess impact or plan the migration properly.</li>
            <li>IT is expected to support these migrations but isn't staffed for it as an ongoing function &mdash; so the work isn't additive; it comes at the cost of something already planned.</li>
            <li><strong>The ask:</strong> build in real lead time between a rationalization decision and the renewal date. Without it, this keeps pulling the team off other priorities and risks burnout.</li>
          </ul>
        </div>

        <div class="commentary commentable" data-comment-id="decision-inform" style="background:var(--blue-bg); border-left-color:var(--blue);">
          <h5 style="color:var(--blue);">&#x2139; Inform &mdash; Atlassian pivot &amp; tool standards</h5>
          <ul>
            <li>With Linear now in the stack, we need to acknowledge the Atlassian pivot directly. Atlassian was previously communicated as our standard platform; that's no longer the direction, and IT is now operating as a <strong>multi-platform</strong> environment.</li>
            <li>There's no clear, standardized way to tell teams which tool to use for which purpose. The published application catalog doesn't set IT tool standards, so teams default to habit &mdash; producing inconsistent adoption and duplicate tooling.</li>
            <li><strong>Next step:</strong> communicate clear tool standards &mdash; what Linear is for, what Atlassian is still for &mdash; so teams aren't guessing and IT isn't reconciling mixed signals after the fact.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 7. Salesforce Maturity ════════════════════ -->
  <div class="section" id="sf-maturity">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">7</span> Salesforce Maturity Tactical Plan</h3>
      </div>
      <div class="card-body">
        <div class="maturity-track commentable" data-comment-id="sf-maturity-track">
          <div class="maturity-step completed">
            <div class="step-num">1</div>
            <div class="step-label">Initial</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Basic usage, minimal adoption</div>
          </div>
          <div class="maturity-step completed">
            <div class="step-num">2</div>
            <div class="step-label">Developing</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Some processes, initial automation</div>
          </div>
          <div class="maturity-step current">
            <div class="step-num">3</div>
            <div class="step-label">Defined</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Documented standards, embedded in ops</div>
          </div>
          <div class="maturity-step">
            <div class="step-num">4</div>
            <div class="step-label">Managed</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">KPIs, governance, cross-functional</div>
          </div>
          <div class="maturity-step">
            <div class="step-num">5</div>
            <div class="step-label">Optimized</div>
            <div style="font-size:11px; color:var(--text-secondary); margin-top:4px;">AI-driven, continuous improvement</div>
          </div>
        </div>
        <p style="font-size:13px; color:var(--text-secondary); margin-top:8px;">Currently at Level 3 &mdash; targeting Level 4 by end of FY27.</p>

        <div class="commentary commentable" data-comment-id="sf-maturity-commentary" style="margin-top:20px;">
          <h5>&#x1F4DD; Commentary</h5>
          <ul class="editable" data-edit-id="sf-maturity-commentary-text">
            <li><strong>Governance.</strong> Q2 moved the platform toward least-privilege and a defensible security posture: 20+ Rev Ops / Marketing / Deal Desk users migrated off System Admin onto right-sized roles, Okta SSO + phishing-resistant MFA enforced on Salesforce (retiring local logins), and every outstanding Salesforce security vulnerability closed ahead of 2026 platform requirements. Q3 extends this with Secure &amp; Stabilize SF Integration + API Access (P0), Okta&rarr;Salesforce automated provisioning, and improved SCIM + RBAC.</li>
            <li><strong>Stability.</strong> Q2 restored the automations that broke after the org restructure. Q3 hardens the foundation: Salesforce Flows rebuilt and optimized for performance, scale &amp; reliability (P0 &mdash; phase 1 already cut SOQL calls ~20x), a Salesforce CI/CD tool for safer deploys, and Disaster Recovery + Salesforce backup (OwnBackup).</li>
            <li><strong>Reliability.</strong> Building the ability to see and recover from failure: a Salesforce Error Observability Framework (Apex &amp; Flow) and automated error tracking routed to Jira for management, resolution, and reporting, plus SFDC MCP v2 for reliable, governed data access.</li>
            <li><strong>Trajectory.</strong> Together these advance Salesforce from Level 3 (Defined) toward Level 4 (Managed) &mdash; the shift from documented standards to an actively governed, observable, and recoverable platform &mdash; on track for end of FY27.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <!-- Footer -->
  <div style="text-align:center; padding:32px 0; color:var(--text-secondary); font-size:12px;">
    Generated Aug 12, 2026 &middot; QBR Automation v1.0 &middot; Data as of Aug 12, 2026
  </div>

</div>

<!-- ═══ Scripts ════════════════════════════════════════ -->`;
