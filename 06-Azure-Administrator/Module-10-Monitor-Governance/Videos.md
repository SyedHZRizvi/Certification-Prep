<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-thumb img { width: 100%; height: 100%; object-fit: cover; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #ddd6fe; color: #5b21b6; }
.vg-tag.recommended { background: #dbeafe; color: #1e40af; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
.vg-section-title { font-size: 18px; font-weight: 800; margin: 30px 0 8px; color: #0f172a; }
.vg-section-desc { font-size: 14px; color: #64748b; margin: 0 0 4px; }
</style>

# 🎥 Module 10 Videos: Monitor & Governance

> **How to use:** Wrap-up module, focus on the John Savill Azure Monitor overview and the Policy refresher. KQL basics will save you 10 points on the exam if a "build a query" scenario appears.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Monitor+architecture+logs+metrics" target="_blank" rel="noopener" data-video-id="gzBXFnfvoXo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Monitor, Architecture &amp; Components</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 24 min · The big picture</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adam+Marczak+Log+Analytics+KQL+tutorial" target="_blank" rel="noopener" data-video-id="mZLuWijP_xU">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">KQL Basics, Querying Log Analytics</p>
      <p class="vg-creator">Adam Marczak, Azure for Everyone</p>
      <span class="vg-duration">⏱ 18 min · Where/summarize/top</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Tim+Warner+Azure+alerts+action+groups+tutorial" target="_blank" rel="noopener" data-video-id="OwSLrMIUc8A">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Alerts &amp; Action Groups, End-to-End</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 14 min · Metric/log/activity alerts</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Policy+initiative+remediation" target="_blank" rel="noopener" data-video-id="fhIn_kHz4hk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Policy &amp; Remediation Tasks</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · DINE + remediation</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Monitor+Agent+AMA+DCR+migration" target="_blank" rel="noopener" data-video-id="Z1zDlXCwI9k">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Monitor Agent &amp; Data Collection Rules</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 13 min · AMA replaces MMA</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Application+Insights+workspace+based" target="_blank" rel="noopener" data-video-id="x1opSOTsBwE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Application Insights, Workspace-based</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 12 min · Distributed traces</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Network+Watcher+troubleshooting" target="_blank" rel="noopener" data-video-id="8wmfh9nGRCc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Network Watcher, IP Flow Verify &amp; NSG Flow Logs</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 10 min · Debug NSG drops</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Workbooks+dashboards+monitoring" target="_blank" rel="noopener" data-video-id="USJtscQ-oew">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Workbooks, Interactive Monitoring Reports</p>
      <p class="vg-creator">Tim Warner</p>
      <span class="vg-duration">⏱ 12 min · Parameterized KQL</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Defender+for+Cloud+secure+score+regulatory+compliance" target="_blank" rel="noopener" data-video-id="eWcoMi_nQt4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Defender for Cloud Secure Score</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 15 min · MCSB compliance</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | Monitor + Policy deep dives. |
| **Adam Marczak, Azure for Everyone** | KQL intro. |
| **Tim Warner** | Alerts + Workbooks. |
| **Inside Cloud and Security** | AMA migration. |
| **Microsoft Mechanics** | App Insights + Defender. |

---

## ✅ After watching

1. What are the two main data stores in Azure Monitor (metrics vs logs)?
2. Default Activity Log retention?
3. KQL: what does `summarize` do?
4. AMA vs MMA, which is current?
5. Difference between a Policy assignment and a remediation task?

Quiz → [Quiz](./Quiz.md)
