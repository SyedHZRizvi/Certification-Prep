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

# 🎥 Module 6 Videos: Databases on AWS

> **How to use:** Pick the videos for the databases your background is weakest in. Spend extra time on RDS vs Aurora vs DynamoDB, those are the most-tested.

## ⭐ Essential watching (~80 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="1tQhyK5wBAc" href="https://www.youtube.com/results?search_query=AWS+RDS+Multi-AZ+vs+Read+Replicas" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛢️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RDS Multi-AZ vs Read Replicas</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 15 min · HA vs read scaling</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="I4uOEoUYPC8" href="https://www.youtube.com/results?search_query=Aurora+architecture+explained+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌿</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Aurora Architecture & Global Database</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 20 min · The 6-way storage</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="lZ_-evQM2cM" href="https://www.youtube.com/results?search_query=DynamoDB+deep+dive+capacity+modes" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DynamoDB Deep Dive, Tables, Indexes, Capacity</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 25 min · End-to-end</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aV7hvL7_7U4" href="https://www.youtube.com/results?search_query=ElastiCache+Redis+vs+Memcached" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔥</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ElastiCache Redis vs Memcached</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 14 min · The classic comparison</span>
    </div>
  </a>
</div>

## 📚 Recommended (~45 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="kjquJMOqi_M" href="https://www.youtube.com/results?search_query=DynamoDB+DAX+vs+ElastiCache" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DAX, DynamoDB Accelerator</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 14 min · Microsecond reads</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="dzqHYjXOg24" href="https://www.youtube.com/results?search_query=AWS+Redshift+architecture+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Redshift Architecture & Spectrum</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 18 min · MPP data warehouse</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="dgj9cvqgYYs" href="https://www.youtube.com/results?search_query=AWS+RDS+Proxy+Lambda+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">RDS Proxy for Lambda</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 13 min · Connection pooling</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="Y6jbFC8tvVw" href="https://www.youtube.com/results?search_query=Amazon+Neptune+graph+database+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🕸️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Neptune Graph Database</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 18 min · Social graphs</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="kQ8Q5Dsb-6E" href="https://www.youtube.com/results?search_query=Amazon+Timestream+IoT+time+series" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⏲️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Timestream for IoT & Metrics</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 14 min · Time-series done right</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="0WtPYMLUs7c" href="https://www.youtube.com/results?search_query=Amazon+QLDB+ledger+database" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📜</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">QLDB, Immutable Ledger</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 12 min · Tamper-evident</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | RDS/Aurora coverage second to none |
| **Be A Better Dev** | DynamoDB and Lambda integration |
| **ExamPro** | Long-form database modules |
| **AWS Online Tech Talks** | Real workload sessions |

---

## ✅ After watching

1. Multi-AZ vs Read Replicas, purpose of each?
2. Aurora's storage durability across how many AZs and copies?
3. DAX vs ElastiCache, when each?
4. Redis vs Memcached, name 3 differences.
5. When do you pick Redshift over RDS?

Ready? [Quiz](./Quiz.md).
