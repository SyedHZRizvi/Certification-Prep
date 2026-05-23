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

# 🎥 Module 2 Videos: CDPs & Server-Side Tracking

> **How to use:** This is the most technical-architecture module in the course. The Simo Ahava videos in particular are essential — bookmark his channel.

## ⭐ Essential watching (~90 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="Sxkjwthxl4s" href="https://www.youtube.com/results?search_query=Simo+Ahava+server-side+tagging+GTM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Server-Side Tagging Explained</p>
      <p class="vg-creator">Simo Ahava</p>
      <span class="vg-duration">⏱ 24 min · The canonical walkthrough</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="6dn4H6Qrauc" href="https://www.youtube.com/results?search_query=Segment+Customer+Data+Platform+architecture" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">What Is a CDP? Architecture &amp; Use Cases</p>
      <p class="vg-creator">Twilio Segment</p>
      <span class="vg-duration">⏱ 18 min · Vendor-friendly intro</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="k2WfBQw3It0" href="https://www.youtube.com/results?search_query=Hightouch+reverse+ETL+composable+CDP" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Composable CDP: Why Warehouse-Native Wins</p>
      <p class="vg-creator">Hightouch</p>
      <span class="vg-duration">⏱ 15 min · The 2026 model</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="rRBDn40ye78" href="https://www.youtube.com/results?search_query=Apple+ITP+third+party+cookie+death+history" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The Death of the Third-Party Cookie</p>
      <p class="vg-creator">MeasureSchool</p>
      <span class="vg-duration">⏱ 20 min · ITP / ATT / Privacy Sandbox timeline</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="GNCRVI2qs3c" href="https://www.youtube.com/results?search_query=Meta+Conversions+API+CAPI+implementation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Meta Conversions API Implementation</p>
      <p class="vg-creator">Meta Blueprint</p>
      <span class="vg-duration">⏱ 15 min · CAPI from a Meta engineer</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="SITX4lkvCy0" href="https://www.youtube.com/results?search_query=Stape+server+side+GTM+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Stape Hosted sGTM: End-to-End Setup</p>
      <p class="vg-creator">Stape.io</p>
      <span class="vg-duration">⏱ 22 min · Practical setup</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="g3GOLXSXvrA" href="https://www.youtube.com/results?search_query=mParticle+vs+Segment+CDP+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CDP Vendor Selection</p>
      <p class="vg-creator">CDP Institute</p>
      <span class="vg-duration">⏱ 18 min · Segment vs mParticle vs Adobe</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Owmh4tubies" href="https://www.youtube.com/results?search_query=identity+resolution+deterministic+probabilistic+marketing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Identity Resolution Explained</p>
      <p class="vg-creator">LiveRamp / Acxiom</p>
      <span class="vg-duration">⏱ 15 min · Det vs prob</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="Yx3Z733ElgI" href="https://www.youtube.com/results?search_query=Snowplow+open+source+event+tracking" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Snowplow: Open-Source Event Tracking</p>
      <p class="vg-creator">Snowplow Analytics</p>
      <span class="vg-duration">⏱ 28 min · OSS approach</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="4lAnSJO78no" href="https://www.youtube.com/results?search_query=Salesforce+Data+Cloud+CDP+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Salesforce Data Cloud (formerly CDP)</p>
      <p class="vg-creator">Salesforce</p>
      <span class="vg-duration">⏱ 25 min · Enterprise-cloud bundling</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="5FRNM7RcpeA" href="https://www.youtube.com/results?search_query=Adobe+Real+Time+CDP+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Adobe Real-Time CDP</p>
      <p class="vg-creator">Adobe</p>
      <span class="vg-duration">⏱ 30 min · Adobe ecosystem play</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Simo Ahava** | THE server-side GTM source. Deep, accurate, free. |
| **MeasureSchool** | Practical GA4 + GTM + measurement |
| **Twilio Segment** | Strong CDP architecture content |
| **Hightouch** | Best resource on composable / warehouse-native CDP |
| **CDP Institute** | Vendor-neutral CDP research |
| **Stape.io** | Practical sGTM tutorials |

---

## ✅ After watching

1. Define a CDP using the CDP Institute's 5 properties.
2. State the difference between a CDP and a Data Warehouse.
3. What percentage of measurement loss can server-side tagging realistically recover?
4. Name the 4 CDP architectural patterns and one vendor in each.
5. When is probabilistic identity resolution INAPPROPRIATE in 2026?

If you can answer all 5 in under 5 minutes, you're ready for the [Quiz](./Quiz.md).
