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

# 🎥 Module 5 Videos: Databases

> **How to use:** The exam tests matching scenarios to services. After every video, write 3 example scenarios that map to that service. Build your scenario→service intuition.

## ⭐ Essential watching (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+RDS+vs+Aurora+vs+DynamoDB+CLF-C02" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RDS vs Aurora vs DynamoDB — Which Database?</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · The big 3 compared</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=RDS+Multi-AZ+vs+Read+Replica+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Multi-AZ vs Read Replicas — Don't Confuse Them</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 9 min · Exam trap</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+DynamoDB+in+10+minutes+beginners" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DynamoDB in 10 Minutes — Core Concepts</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 11 min · The NoSQL workhorse</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Redshift+vs+RDS+vs+Athena+data+warehouse" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Redshift vs RDS vs Athena — OLAP vs OLTP</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 11 min · Analytics services</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ElastiCache+Redis+vs+Memcached+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ElastiCache — Redis vs Memcached Decision</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 8 min · Pick the right engine</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+DMS+database+migration+service+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS DMS + SCT — Migrating Databases</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 12 min · Lift-and-shift</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Neptune+graph+database+use+cases+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Neptune Graph DB Use Cases</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 8 min · Niche but tested</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Aurora+Global+Database+cross+region+replication" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Aurora Global Database — Cross-Region in Action</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 25 min · Enterprise scale</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DynamoDB+Single+Table+Design+Alex+Debrie" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DynamoDB Single-Table Design — Alex DeBrie</p>
      <p class="vg-creator">Alex DeBrie</p>
      <span class="vg-duration">⏱ 30 min · Deep architecture</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best CLF-C02 DB content |
| **Alex DeBrie** | DynamoDB world expert |
| **Be A Better Dev** | Quick service explainers |
| **Tutorials Dojo** | Scenario-based DB matching |
| **AWS Training and Certification** | Official deep dives |

---

## ✅ After watching

1. Multi-AZ vs Read Replica — what does each give you?
2. When pick DynamoDB vs RDS?
3. Redshift use case in one sentence?
4. ElastiCache vs DAX — when to use each?
5. Name 3 specialty DBs (graph, time-series, ledger) and what they're for.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
