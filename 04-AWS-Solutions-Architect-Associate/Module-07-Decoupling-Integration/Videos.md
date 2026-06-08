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

# 🎥 Module 7 Videos: Decoupling & Integration

> **How to use:** SQS / SNS / EventBridge / Kinesis comparisons show up in nearly every practice exam. Don't skip the "vs" videos.

## ⭐ Essential watching (~65 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="RoKAEzdcr7k" href="https://www.youtube.com/results?search_query=AWS+SQS+vs+SNS+vs+EventBridge" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SQS vs SNS vs EventBridge, When To Use Each</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 18 min · The decoupling trio</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="QRlsN2vGlG8" href="https://www.youtube.com/results?search_query=AWS+SQS+standard+vs+FIFO+queue" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📥</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SQS Standard vs FIFO Deep Dive</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · Order + dedup</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="DFSko_sLyMM" href="https://www.youtube.com/results?search_query=AWS+Step+Functions+tutorial+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Step Functions, Orchestrate Workflows</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 18 min · States, retries, parallel</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="Jw5Pqwn1doE" href="https://www.youtube.com/results?search_query=Kinesis+Data+Streams+vs+Firehose" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kinesis Data Streams vs Firehose</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 15 min · The streaming pair</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="CEj0yyubNgQ" href="https://www.youtube.com/results?search_query=SNS+fan+out+SQS+pattern" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SNS Fan-Out to SQS Pattern</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · The classic broadcast</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="F9Oben6rhs0" href="https://www.youtube.com/results?search_query=AWS+EventBridge+rules+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚌</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EventBridge, Rules, Buses, Targets</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 13 min · Event-driven done right</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="V8WoV94GhzY" href="https://www.youtube.com/results?search_query=SQS+visibility+timeout+DLQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⏱️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SQS Visibility Timeout & DLQ</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 11 min · Retry semantics</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="RrdvSoQNABg" href="https://www.youtube.com/results?search_query=Step+Functions+Express+vs+Standard" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Step Functions Express vs Standard</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 14 min · Pricing model differences</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="iDT1zFpy1kE" href="https://www.youtube.com/results?search_query=Amazon+MQ+vs+SQS+RabbitMQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🐰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Amazon MQ vs SQS</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 10 min · When to use MQ</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="_U_PiSpbWug" href="https://www.youtube.com/results?search_query=API+Gateway+architecture+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛡️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">API Gateway → Lambda → SQS</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 22 min · Serverless pipeline</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Be A Better Dev** | Best SQS/SNS pattern videos |
| **Stephane Maarek** | Side-by-side comparisons |
| **ExamPro** | Long-form integration modules |
| **AWS Online Tech Talks** | Step Functions and EventBridge sessions |

---

## ✅ After watching

1. SQS vs SNS vs EventBridge, describe each in 1 sentence.
2. FIFO vs Standard SQS, name 2 differences.
3. Kinesis Data Streams vs Firehose, pick one for replay; pick one for "dump to S3."
4. Step Functions Standard vs Express?
5. What's the SNS → SQS fan-out for?

Ready? [Quiz](./Quiz.md).
