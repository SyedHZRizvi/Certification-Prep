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

# 🎥 Module 7 Videos: Azure Monitor & Hybrid Monitoring

> **How to use:** Click any card to search YouTube for the latest top result. Monitoring is 15% of AZ-801 — and the KQL questions are unforgiving.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=John+Savill+Azure+Monitor+complete+overview" data-video-id="gzBXFnfvoXo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Monitor — Complete Overview</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 35 min · Metrics + logs + alerts</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Monitor+Agent+AMA+migration+MMA+walkthrough" data-video-id="Z1zDlXCwI9k" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AMA + DCR Migration from MMA</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 20 min · Mandatory in 2026</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kusto+Query+Language+KQL+tutorial+for+beginners" data-video-id="gIKBSU7RNUk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">KQL Basics — From Zero</p>
      <p class="vg-creator">Travis Roberts</p>
      <span class="vg-duration">⏱ 25 min · where, summarize, project</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Monitor+alerts+metric+log+walkthrough" data-video-id="jSlR9l4u-Z8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Azure Monitor Alerts — 3 Types</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 12 min · Action groups</span>
    </div>
  </a>
</div>

## 📚 Recommended (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VM+Insights+Azure+Monitor+dependency+map" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VM Insights & Dependency Map</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 14 min · Process flows</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Azure+Workbooks+tutorial+KQL+dashboard" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Azure Workbooks — Build Your Own</p>
      <p class="vg-creator">Inside Cloud and Security</p>
      <span class="vg-duration">⏱ 18 min · Interactive dashboards</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Data+Collection+Rules+DCR+Azure+Monitor+best+practice" data-video-id="R_lLvpuzMaQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DCR Design Best Practice</p>
      <p class="vg-creator">John Savill's Technical Training</p>
      <span class="vg-duration">⏱ 18 min · One per workload</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Microsoft+Sentinel+SIEM+Log+Analytics+overview" data-video-id="xMj7a4Ns_cU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Sentinel on Log Analytics</p>
      <p class="vg-creator">Microsoft Mechanics</p>
      <span class="vg-duration">⏱ 20 min · Add SIEM to Monitor</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Log+Analytics+commitment+tier+pricing+cost+optimization" data-video-id="M9bRhTqEtpE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LA Workspace Cost Optimization</p>
      <p class="vg-creator">FastTrack for Azure</p>
      <span class="vg-duration">⏱ 16 min · Tiers + retention</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=KQL+advanced+joins+let+statement+tutorial" data-video-id="6h451YyWox0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Advanced KQL — Joins & let</p>
      <p class="vg-creator">Rod Trent KQL Channel</p>
      <span class="vg-duration">⏱ 22 min · Pro-grade queries</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **John Savill's Technical Training** | The Azure Monitor authority |
| **Microsoft Mechanics** | Official walkthroughs |
| **Rod Trent KQL Channel** | KQL deep dives |
| **Travis Roberts** | KQL basics in plain English |
| **Inside Cloud and Security** | Enterprise workspace design |

---

## ✅ After watching

Answer these in your notebook:

1. AMA vs MMA — what changed and when?
2. What is a DCR, and how is one DCR associated with many machines?
3. Top 5 KQL operators you'd reach for in any troubleshooting query?
4. Metric alert vs log alert — when each?
5. VM Insights provides what, and how is it implemented?
6. Workbook — what data sources can it combine?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
