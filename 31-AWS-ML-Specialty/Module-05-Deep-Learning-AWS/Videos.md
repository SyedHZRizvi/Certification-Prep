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

# 🎥 Module 5 Videos: Deep Learning on AWS

## ⭐ Essential (~90 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+distributed+training+SMDDP+SMMP+reinvent" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📦</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Distributed Training (SMDDP + SMMP)</p>
      <p class="vg-creator">AWS re:Invent (AIM402)</p>
      <span class="vg-duration">⏱ 50 min · Data + model parallel</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Trainium+Inferentia+silicon+overview" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Trainium + Inferentia — Custom AI Silicon</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 22 min · Cost-optimal training & inference</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=mixed+precision+training+FP16+BF16+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧮</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Mixed Precision — FP16, BF16, FP8 Explained</p>
      <p class="vg-creator">NVIDIA Tech / DeepLearningAI</p>
      <span class="vg-duration">⏱ 18 min · Speed up DL with no accuracy loss</span>
    </div>
  </a>
</div>

## 📚 Recommended (~70 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+PyTorch+script+mode+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🐍</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker PyTorch Script Mode Walkthrough</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 25 min · Bring your own training script</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Ground+Truth+active+learning+labelling" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏷️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Ground Truth + Active Learning</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 20 min · Cut labelling cost 70%</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Debugger+Profiler+training+diagnostics" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Debugger + Profiler</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · Find training bottlenecks</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Transformer+architecture+visual+attention+is+all+you+need" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔭</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Transformer Visual Walkthrough</p>
      <p class="vg-creator">3Blue1Brown</p>
      <span class="vg-duration">⏱ 26 min · Attention mechanism</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Stable+Diffusion+training+infrastructure+AWS+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎨</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Stable Diffusion Training Infrastructure</p>
      <p class="vg-creator">Stability AI / AWS talks</p>
      <span class="vg-duration">⏱ 45 min · 256 A100 GPUs in action</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+EFA+Elastic+Fabric+Adapter+HPC+ML" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Elastic Fabric Adapter (EFA) for ML Training</p>
      <p class="vg-creator">AWS HPC</p>
      <span class="vg-duration">⏱ 17 min · HPC networking</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=FSx+for+Lustre+S3+integration+for+ML+training" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">FSx for Lustre + S3 for ML Training</p>
      <p class="vg-creator">AWS Storage</p>
      <span class="vg-duration">⏱ 19 min</span>
    </div>
  </a>
</div>

---

## ✅ After watching

1. When pick SMDDP vs SMMP vs both?
2. Why does multi-node DL training need EFA?
3. FP16 vs BF16 — when prefer each?
4. Cost-optimal inference for 7B-parameter LLM? Compute family?
5. Active learning's bias trade-off — when not acceptable?

➡️ [Quiz.md](./Quiz.md)
