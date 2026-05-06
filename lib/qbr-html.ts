export const qbrBodyHtml = `<!-- ═══ Sidebar ═══════════════════════════════════════ -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h1>IT QBR</h1>
    <span class="quarter-badge">Q1 FY'27</span>
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
    Generated Apr 16, 2026<br>
    QBR Automation v1.0
  </div>
</aside>

<!-- ═══ Main Content ══════════════════════════════════ -->
<div class="main">

  <!-- Top Bar -->
  <div class="top-bar">
    <div>
      <h2>IT Quarterly Business Review</h2>
      <div class="subtitle">Q1 FY'27 &middot; Feb 1 &ndash; Apr 30, 2026 &middot; Presented May 2026</div>
    </div>
    <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <div class="comments-panel-toggle" onclick="toggleAllComments()">
        &#x1F4AC; <span id="total-comment-count">0</span> comments
      </div>
      <div style="padding:6px 14px; background:rgba(67,83,255,0.06); border:1px solid rgba(67,83,255,0.15); border-radius:20px; font-size:12px; font-weight:600; color:var(--blue);">
        &#x270F;&#xFE0F; <span id="edit-count">0</span> edits
      </div>
<div class="flags-badge" onclick="document.getElementById('flags-summary').scrollIntoView({behavior:'smooth'})">
        &#x26A0;&#xFE0F; <span id="flags-open-count">15</span> open flags
      </div>
    </div>
  </div>

  <!-- ═══ 1. Executive Summary ══════════════════════ -->
  <div class="section" id="exec-summary">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">1</span> Executive Summary</h3>
        <span class="flag flag-high">&#x26A0; HIGH &mdash; Laura / Lalena to review</span>
      </div>
      <div class="card-body">
        <div class="status-bar commentable" data-comment-id="exec-status">
          <div class="status-dot status-yellow"></div>
          <div>
            <strong>Status: Pending Review</strong>
            <span style="color:var(--text-secondary); font-size:13px;"> &mdash; AI-drafted executive summary will be generated after all sections are reviewed.</span>
          </div>
        </div>

        <div class="placeholder commentable" data-comment-id="exec-placeholder">
          <div class="placeholder-icon">&#x1F4DD;</div>
          <div class="editable" data-edit-id="exec-summary-text">
            <p>AI-drafted executive summary will be generated after all sections are reviewed.</p>
          </div>
          <div class="placeholder-action">Click above to start writing, or Laura / Lalena to finalize before QBR meeting</div>
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
        <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:12px;">New Hires (Q1 FY27)</h4>
        <div class="commentable" data-comment-id="hires-new">
          <table class="data-table">
            <thead>
              <tr><th>Name</th><th>Title</th><th>Type</th><th>Manager</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Anna Duncanson</strong></td><td>Senior Manager, GTM Technology</td><td><span class="pill pill-blue">FTE</span></td><td>Laura Clontz</td></tr>
              <tr><td><strong>Jen Szymarek</strong></td><td>Senior AI Product Owner</td><td><span class="pill pill-blue">FTE</span></td><td>Reed Shackelford</td></tr>
              <tr><td><strong>Krishnakant Nayak</strong></td><td>Integrations Engineer</td><td><span class="pill pill-yellow">CW (India)</span></td><td>Sachin Katiyar</td></tr>
            </tbody>
          </table>
        </div>

        <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin:24px 0 12px;">Open Roles</h4>
        <div class="commentable" data-comment-id="hires-open">
          <table class="data-table">
            <thead>
              <tr><th>Role</th><th>Type</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>AI Business Systems Admin</td><td><span class="pill pill-gray">TBD</span></td><td><span class="pill pill-yellow">Open</span></td></tr>
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
        <span class="flag flag-medium">&#x26A0; Multiple sections need review</span>
      </div>
      <div class="card-body">
        <button class="toggle-all" onclick="toggleAllAccordions()">
          &#x2195;&#xFE0F; Expand / Collapse All
        </button>

        <!-- 3a. IT Ops (Console) -->
        <div class="accordion open" id="acc-itops">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-itops')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#6366F1"></span>
              3a. IT Ops (Console)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="itops-console-metrics">
              <div class="metric-card">
                <div class="metric-value">4,675</div>
                <div class="metric-label">Ticket Volume</div>
                <div class="metric-delta delta-up">&uarr; 16.2% vs Q4 (4,024)</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">4.76</div>
                <div class="metric-label">CSAT (out of 5.0)</div>
                <div class="metric-delta delta-up">&uarr; from 4.7 (326 reviews)</div>
              </div>
              <div class="metric-card">
                <div class="metric-value" style="color:var(--red);">74.8%</div>
                <div class="metric-label">Automation Rate</div>
                <div class="metric-delta delta-down">&darr; from ~84% Q4</div>
              </div>
            </div>

            <!-- Console categories chart + automation trend -->
            <div class="chart-row commentable" data-comment-id="itops-charts">
              <div class="chart-container">
                <h5>Top 5 Console Categories</h5>
                <div class="chart-wrap">
                  <canvas id="chart-console-categories"></canvas>
                </div>
              </div>
              <div class="chart-container">
                <h5>Automation % Trend</h5>
                <div class="chart-wrap">
                  <canvas id="chart-automation-trend"></canvas>
                </div>
                <p style="font-size:11px; color:var(--text-secondary); margin-top:8px;">* Q3 FY26 data is approximate</p>
              </div>
            </div>

            <div class="commentary commentable" data-comment-id="itops-console-flag">
              <h5>
                &#x1F6A9; Automation Drop
                <span class="flag flag-high">&#x26A0; HIGH &mdash; Anthony to investigate</span>
              </h5>
              <ul class="editable" data-edit-id="itops-automation-text">
                <li>Console automation dropped from ~84% (Q4) to 74.8% (Q1). This needs investigation &mdash; possible cause: new ticket categories not yet automated, or changed routing rules.</li>
              </ul>
            </div>

            <!-- Jira ITS placeholder -->
            <div style="margin-top:20px;">
              <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:12px;">Jira ITS</h4>
              <div class="placeholder commentable" data-comment-id="itops-jira-its">
                <div class="placeholder-icon">&#x1F3AB;</div>
                <p>Full ITS pagination in progress. Sample shows ~50 tickets/day, 86% Service Requests.</p>
                <div class="placeholder-action">Flag: Complete ITS data pull needed</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3b. Endpoint -->
        <div class="accordion" id="acc-endpoint">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-endpoint')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#8B5CF6"></span>
              3b. Endpoint Management
              <span class="flag flag-low" style="margin-left:8px;">&#x1F4CB; Chris</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="placeholder commentable" data-comment-id="endpoint-placeholder">
              <div class="placeholder-icon">&#x1F4BB;</div>
              <p>Awaiting Jamf data from Chris.</p>
              <div class="placeholder-action">Chris to provide Jamf export for endpoint metrics</div>
            </div>
          </div>
        </div>

        <!-- 3c. AI Adoption -->
        <div class="accordion" id="acc-ai">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-ai')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#EC4899"></span>
              3c. AI Adoption
              <span class="flag flag-low" style="margin-left:8px;">&#x1F4CB; Reed</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="placeholder commentable" data-comment-id="ai-adoption-placeholder">
              <div class="placeholder-icon">&#x1F916;</div>
              <p>Awaiting AI adoption metrics from Reed.</p>
              <div class="placeholder-action">Reed to provide AI adoption data (MAU, DAU, attainment)</div>
            </div>
          </div>
        </div>

        <!-- 3d. BizTech / GTM (BTEC) — REAL DATA -->
        <div class="accordion open" id="acc-biztech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-biztech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#4353FF"></span>
              3d. BizTech / GTM (BTEC)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <!-- Metric cards -->
            <div class="metrics-row commentable" data-comment-id="biztech-metrics">
              <div class="metric-card">
                <div class="metric-value">442</div>
                <div class="metric-label">Total Tickets</div>
                <div class="metric-delta delta-up">&uarr; vs 100 Q4 FY26</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">53</div>
                <div class="metric-label">Bugs (12.7%)</div>
                <div class="metric-delta delta-up">&darr; reactive work</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">9.2d</div>
                <div class="metric-label">Median Cycle Time</div>
                <div class="metric-delta delta-up">&darr; from 13.9d Q4</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="biztech-charts">
              <div class="chart-container">
                <h5>Issue Types (Q1 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-biztech-types"></canvas>
                </div>
              </div>
            </div>

            <!-- Breakdown tables -->
            <div class="chart-row commentable" data-comment-id="biztech-breakdowns">
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>Change Type</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Configuration</td><td>228</td><td>54.8%</td></tr>
                    <tr><td>Development</td><td>141</td><td>33.9%</td></tr>
                    <tr><td>Documentation</td><td>13</td><td>3.1%</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>ETE Category</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Run the Business</td><td>194</td><td>46.6%</td></tr>
                    <tr><td>Change the Business</td><td>178</td><td>42.8%</td></tr>
                    <tr><td>Transform the Business</td><td>10</td><td>2.4%</td></tr>
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
                <tbody>
                  <tr><td>Opportunity-to-Order (O2O)</td><td>95</td><td>22.8%</td></tr>
                  <tr><td>Order-to-Cash (OTC)</td><td>95</td><td>22.8%</td></tr>
                  <tr><td>Platform Administration</td><td>76</td><td>18.3%</td></tr>
                  <tr><td>Demand-to-Opportunity (D2O)</td><td>70</td><td>16.8%</td></tr>
                  <tr><td>Partner</td><td>21</td><td>5.0%</td></tr>
                  <tr><td>Integration</td><td>14</td><td>3.4%</td></tr>
                  <tr><td>Time-to-Value (T2V)</td><td>9</td><td>2.2%</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="biztech-commentary">
              <h5>
                &#x1F4DD; Commentary
                <span class="flag flag-medium">&#x26A0; MEDIUM &mdash; BizTech lead to review</span>
              </h5>
              <ul class="editable" data-edit-id="biztech-commentary-text">
                <li>BizTech / GTM completed 442 tickets in Q1 FY27, with median cycle time improving 34% to 9.2d (down from 13.9d in Q4 FY26).</li>
                <li>Bug rate held at 12.7% (53 tickets), indicating a continued shift away from reactive work toward planned delivery.</li>
                <li>Ticket mix skewed toward Configuration (54.8%) and Development (33.9%), driven by Salesforce billing infrastructure and partner tooling work.</li>
                <li>Opportunity-to-Order and Order-to-Cash processes drove the most volume (22.8% each), consistent with Q1 commercial systems priorities.</li>
                <li>Platform Administration (18.3%) and Demand-to-Opportunity (16.8%) were the next highest-volume process areas.</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- 3e. EntTech (ETE) — REAL DATA -->
        <div class="accordion open" id="acc-enttech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-enttech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#10B981"></span>
              3e. EntTech (ETE)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="enttech-metrics">
              <div class="metric-card">
                <div class="metric-value">160</div>
                <div class="metric-label">Total Tickets</div>
                <div class="metric-delta delta-up">&uarr; vs Q4</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">14</div>
                <div class="metric-label">Bugs (10.7%)</div>
                <div class="metric-delta delta-up">Low reactive work</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">5.9d</div>
                <div class="metric-label">Median Cycle Time</div>
                <div class="metric-delta delta-up">&darr; from 6.5d Q4</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="enttech-charts">
              <div class="chart-container">
                <h5>Issue Types (Q1 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-enttech-types"></canvas>
                </div>
              </div>
            </div>

            <!-- Breakdown tables -->
            <div class="chart-row commentable" data-comment-id="enttech-breakdowns">
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>Change Type</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Configuration</td><td>119</td><td>90.8%</td></tr>
                    <tr><td>Development</td><td>9</td><td>6.9%</td></tr>
                    <tr><td>Documentation</td><td>3</td><td>2.3%</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table class="data-table">
                  <thead>
                    <tr><th>ETE Category</th><th>Count</th><th>%</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Run the Business</td><td>99</td><td>75.6%</td></tr>
                    <tr><td>Change the Business</td><td>30</td><td>22.9%</td></tr>
                    <tr><td>Transform the Business</td><td>2</td><td>1.5%</td></tr>
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
                <tbody>
                  <tr><td>Platform Administration</td><td>42</td><td>32.1%</td></tr>
                  <tr><td>Order-to-Cash (OTC)</td><td>28</td><td>21.4%</td></tr>
                  <tr><td>Procure to Pay</td><td>22</td><td>16.8%</td></tr>
                  <tr><td>Record to Report</td><td>18</td><td>13.7%</td></tr>
                  <tr><td>Integration</td><td>10</td><td>7.6%</td></tr>
                  <tr><td>FP&amp;A</td><td>9</td><td>6.9%</td></tr>
                  <tr><td>Opportunity-to-Order (O2O)</td><td>2</td><td>1.5%</td></tr>
                </tbody>
              </table>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="enttech-commentary">
              <h5>
                &#x1F4DD; Commentary
                <span class="flag flag-medium">&#x26A0; MEDIUM &mdash; Bali to review</span>
              </h5>
              <ul class="editable" data-edit-id="enttech-commentary-text">
                <li>EntTech completed 160 tickets in Q1 FY27, with median cycle time improving to 5.9d from 6.5d in Q4 FY26.</li>
                <li>Bug rate remained low at 10.7% (14 tickets), with work predominantly configuration-driven (90.8%) — indicative of a stable, well-defined operating environment.</li>
                <li>75.6% of work fell under Run the Business, consistent with a mature team sustaining existing finance and HR systems (NetSuite, Workday, Coupa).</li>
                <li>Platform Administration (32.1%) and Order-to-Cash (21.4%) were the top process areas, followed by Procure-to-Pay (16.8%) and Record-to-Report (13.7%).</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- 3f. Integrations (ENI) — REAL DATA -->
        <div class="accordion open" id="acc-integrations">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-integrations')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#F59E0B"></span>
              3f. Integrations (ENI)
              <span class="pill pill-blue">Live Data</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="metrics-row commentable" data-comment-id="eni-metrics">
              <div class="metric-card">
                <div class="metric-value">58</div>
                <div class="metric-label">Total Tickets</div>
                <div class="metric-delta delta-up">&uarr; vs Q4</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">39</div>
                <div class="metric-label">Bugs (67%)</div>
                <div class="metric-delta delta-neutral">See note below</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">0.73d</div>
                <div class="metric-label">Median Cycle Time</div>
                <div class="metric-delta delta-up">&darr; from 9.6d Q4</div>
              </div>
            </div>

            <!-- Charts -->
            <div class="chart-row commentable" data-comment-id="eni-charts">
              <div class="chart-container">
                <h5>Issue Types (Q1 FY27)</h5>
                <div class="chart-wrap">
                  <canvas id="chart-eni-types"></canvas>
                </div>
              </div>
            </div>

            <!-- Bug rate context note -->
            <div class="commentary" style="background:#fffbeb; border-left-color:#D97706;">
              <h5 style="color:#D97706;">
                &#x26A0; Note on Bug Rate (67%)
              </h5>
              <ul>
                <li>High bug count likely reflects <strong>auto-created Jira tickets from Workato recipe errors</strong>, not true integration failures or manual bug reports. Many are auto-resolved within hours (median cycle time: 0.73d).</li>
                <li>Team is working to differentiate between data entry errors and true integration errors in Jira. <strong>Workato operational metrics are the more reliable signal</strong> — see below.</li>
              </ul>
            </div>

            <!-- Commentary -->
            <div class="commentary commentable" data-comment-id="eni-commentary">
              <h5>
                &#x1F4DD; Commentary
                <span class="flag flag-medium">&#x26A0; MEDIUM &mdash; Sachin Katiyar to review</span>
              </h5>
              <ul class="editable" data-edit-id="eni-commentary-text">
                <li>Integrations completed 58 tickets in Q1 FY27 with a median cycle time of 0.73d — down significantly from 9.6d in Q4 FY26, reflecting faster auto-resolution of Workato-generated tickets.</li>
                <li>The 67% bug rate is an artifact of auto-created Jira tickets from Workato recipe errors, not true integration failures. Workato operational metrics are the more reliable signal: 0.032% failure rate across 1.54M recipe runs.</li>
                <li>Active recipe count grew 25% (76 → 95) in Q1, driven by new Salesforce ↔ Stripe billing integrations that went live in late March and are now the platform's highest-volume recipes.</li>
                <li>Task consumption sits at 48% of quarterly budget (1.45M of 3M) — on track, with Stripe integration volume warranting continued monitoring for plan-level impact.</li>
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
            <div class="metric-value">1.54M</div>
            <div class="metric-label">Total Recipe Runs</div>
            <div class="metric-delta delta-neutral">11 weeks, Q1 FY27</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">499</div>
            <div class="metric-label">Total Failures</div>
            <div class="metric-delta delta-up">0.032% fail rate</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">95</div>
            <div class="metric-label">Active Recipes</div>
            <div class="metric-delta delta-up">&#x2191; from 76 (+25%)</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">1.45M</div>
            <div class="metric-label">Tasks Consumed</div>
            <div class="metric-delta delta-up">48% of quarterly budget</div>
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
            <span>Task Usage vs Q1 Budget</span>
            <span>1.45M / 3M (48%)</span>
          </div>
          <div style="background:var(--border); border-radius:8px; height:24px; overflow:hidden;">
            <div style="background:linear-gradient(90deg, var(--green), var(--blue)); height:100%; width:48%; border-radius:8px; transition:width 0.5s;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-secondary); margin-top:4px;">
            <span>0</span>
            <span style="color:var(--yellow);">&#x26A0; Alert threshold (75%)</span>
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
              <tbody>
                <tr><td>Salesforce &#x2194; Stripe - Invoice Status Updated</td><td>High volume (wk 13+)</td></tr>
                <tr><td>Salesforce &#x2194; Stripe - Generate Invoices</td><td>High volume (wk 13+)</td></tr>
                <tr><td>[US] Compile Candidate Data + Email for External Counsel</td><td>~30K/week</td></tr>
                <tr><td>SimilarWeb Batch Handler</td><td>Periodic batches</td></tr>
                <tr><td>Zoom to Salesforce Meeting Attendees</td><td>~5K/week</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <h5 style="font-family:'Poppins',sans-serif; font-size:13px; font-weight:600; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.3px; margin-bottom:8px;">Recurring Failure Sources</h5>
            <table class="data-table">
              <thead><tr><th>Recipe</th><th>Error</th></tr></thead>
              <tbody>
                <tr><td>Adaptive &#x2192; Airtable: Full Data Sync</td><td>Password expired / 502</td></tr>
                <tr><td>Greenhouse &#x2192; Airtable: Data Import</td><td>Table already exists</td></tr>
                <tr><td>Open Role Announcements</td><td>User ID Must be Present</td></tr>
                <tr><td>Stripe Customer creation function</td><td>Failed job</td></tr>
                <tr><td>Work Email Boomerang Child</td><td>Failed job</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Commentary -->
        <div class="commentary commentable" data-comment-id="ipaas-commentary">
          <h5>
            &#x1F4DD; Commentary
            <span class="flag flag-medium">&#x26A0; MEDIUM &#x2014; Sachin Katiyar to review</span>
          </h5>
          <ul class="editable" data-edit-id="ipaas-commentary-text">
            <li>Recipe run volume increased 46x from early Feb (~10K/week) to mid-Apr (~400K/week), driven by Salesforce &#x2194; Stripe billing integrations going live in late March.</li>
            <li>Despite the massive volume spike, failure rate remained under 0.04% &#x2014; strong platform reliability.</li>
            <li>Task consumption is at 48% of quarterly budget (1.45M of 3M). On track, but the Stripe integration volume should be monitored for plan impact.</li>
            <li>Active recipe count grew 25% (76 &#x2192; 95), reflecting new integrations being built and deployed.</li>
            <li>Recurring failures in Adaptive &#x2192; Airtable and Greenhouse &#x2192; Airtable recipes suggest credential/schema maintenance needed.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 4. Quarterly Landings (from Asana) ═════════ -->
  <div class="section" id="landings">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">4</span> Quarterly Landings (Q1 FY27)</h3>
      </div>
      <div class="card-body">
        <div class="commentable" data-comment-id="landings-table" style="position:relative">
          <table class="data-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Team</th>
                <th>Pillar</th>
                <th>Priority</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Automated Webflow Product Provisioning</strong></td>
                <td>GTM Technology</td>
                <td>Pillar 2 &mdash; Business Process Automation</td>
                <td><span class="pill pill-red">P1 &mdash; High</span></td>
                <td>Apr 13, 2026</td>
              </tr>
              <tr>
                <td><strong>MadKudu Implementation</strong></td>
                <td>GTM Technology</td>
                <td>Pillar 2 &mdash; Business Process Automation</td>
                <td><span class="pill pill-red">P1 &mdash; High</span></td>
                <td>Apr 16, 2026</td>
              </tr>
              <tr>
                <td><strong>Safebase Implementation</strong></td>
                <td>GTM Technology</td>
                <td>Pillar 4 &mdash; Identity, Security &amp; Compliance</td>
                <td><span class="pill pill-red">P1 &mdash; High</span></td>
                <td>Apr 13, 2026</td>
              </tr>
              <tr>
                <td><strong>Obsidian Implementation</strong></td>
                <td>GTM Technology</td>
                <td>Pillar 4 &mdash; Identity, Security &amp; Compliance</td>
                <td><span class="pill pill-yellow" style="background:var(--red-bg); color:var(--red);">P0 &mdash; Critical</span></td>
                <td>Apr 16, 2026</td>
              </tr>
              <tr>
                <td><strong>&ldquo;Centralize&rdquo; POC</strong></td>
                <td>GTM Technology</td>
                <td>Pillar 2 &mdash; Business Process Automation</td>
                <td><span class="pill pill-blue">P2 &mdash; Medium</span></td>
                <td>Apr 13, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 5. Roadmap + Look Ahead (Q2 FY27) ═════════ -->
  <div class="section" id="roadmap">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">5</span> Roadmap &amp; Look Ahead &mdash; Q2 FY27</h3>
      </div>
      <div class="card-body">

        <!-- GTM Technology -->
        <div class="accordion open" id="acc-roadmap-gtm">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-roadmap-gtm')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#4353FF"></span>
              GTM Technology
              <span class="pill pill-blue">15 projects</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="commentable" data-comment-id="roadmap-gtm">
              <table class="data-table">
                <thead>
                  <tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Pillar</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Customer 360</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 3</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>User Provisioning + Deprovisioning + Hierarchy Automation</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 30</td><td>Modern IT Operating Model</td></tr>
                  <tr><td><strong>Trials Process Build</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">In Planning</span></td><td>May 22</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Enterprise Deal Qualification</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">In Planning</span></td><td>May 22</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>MDF Approval Process</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">In Planning</span></td><td>May 31</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Partner Data Revamp</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>May 31</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Integration User Overhaul</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-blue">In Planning</span></td><td>May 31</td><td>Modern IT Operating Model</td></tr>
                  <tr><td><strong>Unmanaged Renewals Automation</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Apr 30</td><td><span style="color:var(--text-secondary)">(blank)</span></td></tr>
                  <tr><td><strong>Managed Package Audit</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">&mdash;</span></td><td>Jul 1</td><td>Operational Excellence</td></tr>
                  <tr><td><strong>SFDC Uptime + Error Monitoring</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">&mdash;</span></td><td>Jul 31</td><td>Modern IT Operating Model</td></tr>
                  <tr><td><strong>AI Assisted Forecasting</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 30</td><td>AI as Default Way of Working</td></tr>
                  <tr><td><strong>Outreach &lt;&gt; SFDC Integration</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 17</td><td>Operational Excellence</td></tr>
                  <tr><td><strong>AI Assisted Slack Ticket Updating</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jul 30</td><td>AI as Default Way of Working</td></tr>
                  <tr><td><strong>AI Assisted Discovery</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jul 30</td><td>AI as Default Way of Working</td></tr>
                  <tr><td><strong>True Ups Opportunity Automation</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-gray">&mdash;</span></td><td>Jun 30</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Marketo &lt;&gt; SFDC Integration</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-blue">In Planning</span></td><td>Jul 31</td><td>Operational Excellence</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- EntTech / Finance, Legal & Billing -->
        <div class="accordion open" id="acc-roadmap-enttech">
          <button class="accordion-trigger" onclick="toggleAccordion('acc-roadmap-enttech')">
            <span class="trigger-left">
              <span class="team-dot" style="background:#10B981"></span>
              EntTech / Finance, Legal &amp; Billing
              <span class="pill pill-blue">8 projects</span>
            </span>
            <span class="chevron">&#x25BC;</span>
          </button>
          <div class="accordion-content">
            <div class="commentable" data-comment-id="roadmap-enttech">
              <table class="data-table">
                <thead>
                  <tr><th>Project</th><th>Priority</th><th>Status</th><th>Due</th><th>Pillar</th></tr>
                </thead>
                <tbody>
                  <tr><td><strong>Argentina Entity</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-gray">&mdash;</span></td><td>Jun 30</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Enterprise Billing Automation (Stripe)</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 30</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>SKU Creation Automation + Product Catalog Syncer</strong></td><td><span class="pill pill-red">P0</span></td><td><span class="pill pill-blue">In Planning</span></td><td>May 31</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Automated Intercompany for Expenses Across Webflow Entities</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>May 1</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>Consolidation of Month End and Flux Analysis</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-gray">&mdash;</span></td><td>May 31</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>JPMC Bank Integration for Expense Payout</strong></td><td><span class="pill pill-red">P1</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 30</td><td>Business Process Automation</td></tr>
                  <tr><td><strong>ZIP AI Intake Process</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-green">Done</span></td><td>May 31</td><td>AI as Default Way of Working</td></tr>
                  <tr><td><strong>ZIP and Brightflag Integration</strong></td><td><span class="pill pill-blue">P2</span></td><td><span class="pill pill-yellow">In Progress</span></td><td>Jun 30</td><td>Business Process Automation</td></tr>
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
        <span class="flag flag-low">&#x1F4CB; Laura / Lalena</span>
      </div>
      <div class="card-body">
        <div class="placeholder commentable" data-comment-id="decisions-placeholder">
          <div class="placeholder-icon">&#x1F91D;</div>
          <p>Laura / Lalena to populate before QBR meeting.</p>
          <div class="placeholder-action">Add decisions, escalations, and cross-team dependencies</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ═══ 7. Salesforce Maturity ════════════════════ -->
  <div class="section" id="sf-maturity">
    <div class="card">
      <div class="card-header">
        <h3><span class="section-num">7</span> Salesforce Maturity Tactical Plan</h3>
        <span class="flag flag-low">&#x1F4CB; Anna Duncanson</span>
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
      </div>
    </div>
  </div>


  <!-- ═══ Flags Summary ════════════════════════════ -->
  <div class="section" id="flags-summary" style="margin-top:40px;">
    <div style="padding:20px; background:var(--white); border-radius:var(--radius); box-shadow:var(--shadow);">
      <h4 style="font-family:'Poppins',sans-serif; font-size:14px; margin-bottom:16px;">&#x26A0;&#xFE0F; Review Flags</h4>
      <div style="display:flex; gap:16px; margin-bottom:16px;">
        <div id="flag-count-high" style="padding:8px 16px; background:var(--red-bg); border-radius:var(--radius-sm); font-size:13px; font-weight:600; color:var(--red);">&#x1F534; 4 HIGH</div>
        <div id="flag-count-medium" style="padding:8px 16px; background:var(--yellow-bg); border-radius:var(--radius-sm); font-size:13px; font-weight:600; color:var(--yellow);">&#x1F7E1; 5 MEDIUM</div>
        <div id="flag-count-low" style="padding:8px 16px; background:var(--green-bg); border-radius:var(--radius-sm); font-size:13px; font-weight:600; color:var(--green);">&#x1F7E2; 6 LOW</div>
        <div id="flag-count-resolved" style="padding:8px 16px; background:rgba(0,200,83,0.06); border-radius:var(--radius-sm); font-size:13px; font-weight:600; color:var(--green);">&#x2705; 0 resolved</div>
      </div>
      <div id="flags-container">
        <!-- Flags rendered dynamically by JS -->
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align:center; padding:32px 0; color:var(--text-secondary); font-size:12px;">
    Generated Apr 16, 2026 &middot; QBR Automation v1.0 &middot; Data as of Apr 16, 2026
  </div>

</div>

<!-- ═══ Scripts ════════════════════════════════════════ -->`;
