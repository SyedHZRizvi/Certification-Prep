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

# 🎥 Module 10 Videos: DR, Migration & Hybrid

> **How to use:** The 4 DR tiers and the Snow family vs DataSync vs Storage Gateway table are pure memorization wins. Watch and write the tables.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="dn4F15S4cNw" href="https://www.youtube.com/results?search_query=AWS+disaster+recovery+strategies+backup+pilot+light+warm+standby" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⛑️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">The 4 DR Strategies on AWS</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 15 min · The official ladder</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="zXyudn7KeZM" href="https://www.youtube.com/results?search_query=AWS+Snow+family+Snowball+Snowmobile" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>❄️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Snow Family Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 12 min · Snowcone, Snowball, Snowmobile</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="QaCfOatTIDA" href="https://www.youtube.com/results?search_query=AWS+Storage+Gateway+File+Volume+Tape" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌉</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Storage Gateway, File, Volume, Tape</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 14 min · Hybrid bridge</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="09Kc1g2JKM0" href="https://www.youtube.com/results?search_query=AWS+DMS+database+migration+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛢️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DMS + Schema Conversion Tool</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 14 min · Heterogeneous migrations</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="xCNDN3IkwVI" href="https://www.youtube.com/results?search_query=AWS+DataSync+vs+Storage+Gateway+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚚</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DataSync vs Storage Gateway</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Online vs hybrid</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="8w-Ks_GEGPw" href="https://www.youtube.com/results?search_query=AWS+Application+Migration+Service+MGN" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Application Migration Service (MGN)</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 12 min · Lift-and-shift VMs</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="D9ozrzGHAJo" href="https://www.youtube.com/results?search_query=AWS+Outposts+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Outposts</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 11 min · AWS in your DC</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="dCy7ixko3tE" href="https://www.youtube.com/results?search_query=AWS+Backup+service+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💾</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Backup Service</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 18 min · One policy for many services</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="yaOnBLmnTcI" href="https://www.youtube.com/results?search_query=Aurora+Global+Database+failover+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Aurora Global Database Failover</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 14 min · Cross-region DR</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="yMg5z9Y3t_g" href="https://www.youtube.com/results?search_query=AWS+Transfer+Family+SFTP+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Transfer Family (SFTP/FTPS) to S3</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 11 min · Managed SFTP</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Tutorials Dojo** | DR strategy framing |
| **Stephane Maarek** | Snow + Outposts overview |
| **Be A Better Dev** | Storage Gateway & DataSync clarity |
| **AWS Online Tech Talks** | re:Invent migration sessions |

---

## ✅ After watching

1. Name the 4 DR strategies cheapest → priciest.
2. DMS vs SCT?
3. Snowball vs DataSync, when to use each?
4. Storage Gateway File vs Tape?
5. Outposts vs Local Zones?

Ready? [Quiz](./Quiz.md), then the Practice Exams.
