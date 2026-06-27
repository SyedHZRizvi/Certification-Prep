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
</style>

# 🎥 Module 2 Videos: Data Engineering for ML

> **How to use:** Click any card to search YouTube. Watch in order; take notes on every service mentioned.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="AtG_QD1JAZk" href="https://www.youtube.com/results?search_query=AWS+Glue+ETL+tutorial+beginners+crawler+catalog" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Glue, Crawler, Catalog, ETL Walkthrough</p>
      <p class="vg-creator">Johnny Chivers</p>
      <span class="vg-duration">⏱ 18 min · Glue's core concepts</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="TYKOHj8owIs" href="https://www.youtube.com/results?search_query=Kinesis+Data+Streams+vs+Firehose+vs+Analytics+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kinesis Streams vs Firehose vs Analytics</p>
      <p class="vg-creator">CloudWolf AWS</p>
      <span class="vg-duration">⏱ 14 min · Pick the right streaming service</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="LP_KT6U73M0" href="https://www.youtube.com/results?search_query=AWS+S3+storage+classes+lifecycle+intelligent+tiering" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">S3 Storage Classes & Lifecycle Mastery</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 16 min · Cost-optimised data lake foundations</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="iUD5pPpcyZk" href="https://www.youtube.com/results?search_query=Amazon+Athena+best+practices+Parquet+partition+projection" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔍</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Athena Best Practices: Parquet + Partitioning</p>
      <p class="vg-creator">Amazon Web Services</p>
      <span class="vg-duration">⏱ 22 min · Cut your Athena bill 10×</span>
    </div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="OybeggHYfRI" href="https://www.youtube.com/results?search_query=AWS+Lake+Formation+governance+permissions+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏞️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Lake Formation, Governance Made Easy</p>
      <p class="vg-creator">AWS Developers</p>
      <span class="vg-duration">⏱ 20 min · LF-Tags, row/column security</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="1j8SdS7s_NY" href="https://www.youtube.com/results?search_query=Parquet+vs+ORC+vs+Avro+comparison+for+big+data" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📂</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Parquet vs ORC vs Avro, Choosing The Right Format</p>
      <p class="vg-creator">Data Engineering Café</p>
      <span class="vg-duration">⏱ 18 min · Why Parquet wins for ML</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="VRhKO71mEvs" href="https://www.youtube.com/results?search_query=AWS+DMS+CDC+continuous+replication+to+S3" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS DMS for Continuous Replication to S3</p>
      <p class="vg-creator">Amazon Web Services</p>
      <span class="vg-duration">⏱ 17 min · Move on-prem DBs to your data lake</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="7Xstz6Qo-pM" href="https://www.youtube.com/results?search_query=EMR+Serverless+Spark+tutorial+vs+Glue" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🐘</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">EMR Serverless vs EMR on EC2 vs Glue</p>
      <p class="vg-creator">Johnny Chivers</p>
      <span class="vg-duration">⏱ 25 min · Pick the right big-data engine</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="mf8Hb0coI6o" href="https://www.youtube.com/results?search_query=Netflix+data+platform+Iceberg+reinvent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Netflix Data Platform Deep Dive (Iceberg)</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 45 min · How petabyte-scale ML data flows</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="QLealnfNErs" href="https://www.youtube.com/results?search_query=AWS+Glue+DataBrew+no+code+data+preparation" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧹</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Glue DataBrew, No-Code Data Prep</p>
      <p class="vg-creator">Amazon Web Services</p>
      <span class="vg-duration">⏱ 22 min · 250+ transforms, analyst-friendly</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="g0GvriwXoe0" href="https://www.youtube.com/results?search_query=AWS+Snowball+Edge+petabyte+data+transfer" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>❄️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Snowball Edge, When to Ship a Disk</p>
      <p class="vg-creator">Amazon Web Services</p>
      <span class="vg-duration">⏱ 13 min · Petabyte-scale offline transfer</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels for this module

| Channel | Why |
|---------|-----|
| **AWS Online Tech Talks / AWS Events** | Official Glue, Lake Formation, Kinesis content |
| **Be A Better Dev** | Concise comparisons (Kinesis trio, EMR vs Glue) |
| **Stephane Maarek** | Best S3 deep-dive on YouTube |
| **Data Engineering Café / Seattle Data Guy** | Practitioner perspectives on Parquet, Iceberg |
| **Andreas Kretz** | Big-picture data-engineering career and architecture |

---

## ✅ After watching

1. Sketch the Raw Zone → Curated Zone reference architecture from memory.
2. When do you pick Kinesis Data Streams vs Firehose vs Managed Flink?
3. What is the single most-effective Athena cost-saving move?
4. How does Lake Formation differ from raw IAM bucket policies?
5. When is Glue Crawler the wrong choice, and what is the alternative?

Then go take the [Quiz](./Quiz.md).
