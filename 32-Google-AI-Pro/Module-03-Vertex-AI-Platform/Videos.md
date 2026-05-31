<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #4285f4; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4285f4, #ea4335); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
.vg-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,.35); color: #fff; font-size: 48px; opacity: 0; transition: opacity .2s; }
.vg-card:hover .vg-play { opacity: 1; }
.vg-meta { padding: 14px 16px; }
.vg-tag { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; padding: 3px 8px; border-radius: 4px; margin-bottom: 8px; }
.vg-tag.essential { background: #d2e3fc; color: #1967d2; }
.vg-tag.recommended { background: #ceead6; color: #137333; }
.vg-tag.optional { background: #fef3c7; color: #92400e; }
.vg-title { font-weight: 700; font-size: 14px; line-height: 1.4; margin: 0 0 4px; color: #0f172a; }
.vg-creator { font-size: 12.5px; color: #64748b; margin: 0 0 6px; }
.vg-duration { font-size: 11px; color: #94a3b8; font-weight: 600; }
</style>

# 🎥 Module 3 Videos: Vertex AI Platform Deep Dive

## ⭐ Essential (~75 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+overview+platform+walkthrough+google+cloud" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vertex AI Platform Overview</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 18 min · The umbrella tour</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Model+Garden+claude+llama+gemini+models" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Model Garden — 200 Models, One Platform</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 15 min · Gemini + Claude + Llama on Vertex</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Search+vs+Vector+Search+difference+RAG" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vertex AI Search vs Vector Search</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · The critical distinction</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Pipelines+kubeflow+ML+orchestration+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vertex AI Pipelines (Kubeflow) Walkthrough</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 16 min · DAG orchestration on Vertex</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+provisioned+throughput+vs+payg+gemini+pricing" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Provisioned Throughput vs PAYG Breakeven</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 12 min · The pricing math</span></div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Workbench+notebook+managed+jupyter+gcp" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Vertex AI Workbench Tutorial</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · Managed notebooks</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Feature+Store+online+offline+features" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Vertex AI Feature Store</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 12 min · One source of truth for features</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VPC+Service+Controls+CMEK+Vertex+AI+enterprise+security" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VPC-SC + CMEK on Vertex AI</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 15 min · Enterprise security primitives</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Model+Monitoring+drift+detection+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Model Monitoring — Drift & Skew Detection</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · Catch silent failures</span></div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Spotify+Vertex+AI+migration+ML+platform+case+study" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Spotify on Vertex AI — Case Study</p><p class="vg-creator">Google Cloud Next</p>
      <span class="vg-duration">⏱ 25 min · 3,000 models consolidated</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Wayfair+vertex+ai+vector+search+generative+shopping" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Wayfair Generative Shopping</p><p class="vg-creator">Google Cloud Next</p>
      <span class="vg-duration">⏱ 22 min · 30M-SKU Vector Search</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+endpoints+canary+deployment+traffic+split" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Endpoints, Canary, Traffic Split</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 16 min · Safe deployment patterns</span></div>
  </a>
</div>

---

## ✅ After watching

1. List 8 Vertex AI sub-products and one purpose each.
2. Vertex AI Search vs Vertex AI Vector Search — when each?
3. When does Provisioned Throughput beat PAYG?
4. CMEK vs VPC-SC — what does each protect?
5. Default-region considerations for an EU regulated workload.
