<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #4285f4; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #34a853, #fbbc04); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
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

# 🎥 Module 6 Videos: Fine-Tuning on Vertex AI

## ⭐ Essential (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+Gemini+supervised+fine+tuning+SFT+tutorial" data-video-id="eC6Hd1hFvos" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">SFT on Gemini Flash, Walkthrough</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 18 min · End-to-end tuning job</span></div>
  </a>
  <a class="vg-card" data-video-id="00Q0G84kq3M" href="https://www.youtube.com/results?search_query=fine+tuning+vs+RAG+vs+prompt+engineering+decision" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Fine-Tune vs RAG vs Prompt, When?</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 15 min · The decision matrix</span></div>
  </a>
  <a class="vg-card" data-video-id="DhRoTONcyZE" href="https://www.youtube.com/results?search_query=LoRA+parameter+efficient+fine+tuning+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">LoRA Explained, Adapter Tuning</p><p class="vg-creator">Yannic Kilcher / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 14 min · The math + intuition</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vertex+AI+evaluation+service+pointwise+pairwise+LLM" data-video-id="t6Mv50fwmHQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Vertex AI Evaluation Service</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 12 min · LLM-as-judge</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=catastrophic+forgetting+fine+tuning+LLM+prevention" data-video-id="nzEI3DxP0vU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag essential">Essential</span>
      <p class="vg-title">Catastrophic Forgetting, Diagnose + Fix</p><p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 11 min · The hidden FT failure mode</span></div>
  </a>
</div>

## 📚 Recommended (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="k2pD3k1485A" href="https://www.youtube.com/results?search_query=DPO+direct+preference+optimization+vs+RLHF" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">DPO vs RLHF, Simpler Preference Learning</p><p class="vg-creator">AI Coffee Break</p>
      <span class="vg-duration">⏱ 15 min · The Rafailov 2023 paper</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=model+distillation+teacher+student+LLM+compression" data-video-id="kIiO6G_V3Zk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LLM Distillation, Teacher → Student</p><p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 14 min · Pro quality at Flash cost</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=MedLM+Vertex+AI+medical+domain+tuning+google" data-video-id="GCRTNeFTpNg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">MedLM, Domain-Tuned Medical LLM</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 12 min · Med-PaLM 2 successor</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=JSONL+training+data+Vertex+AI+fine+tune+format" data-video-id="T9LxhJn0jrY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Vertex AI Tuning Dataset Format</p><p class="vg-creator">Google Cloud Tech</p>
      <span class="vg-duration">⏱ 14 min · JSONL conversation format</span></div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Adore+Me+gemini+prompt+engineering+product+copy" data-video-id="hBeA7SRQM4g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Adore Me, "We Didn't Need to Fine-Tune"</p><p class="vg-creator">Google Cloud Customer Stories</p>
      <span class="vg-duration">⏱ 18 min · The prompt-vs-FT lesson</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Vodafone+ticket+classification+gemini+fine+tune+case+study" data-video-id="X8bKIfSVBP0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Vodafone, Network Ticket Classification SFT</p><p class="vg-creator">Google Cloud Next</p>
      <span class="vg-duration">⏱ 20 min · When SFT does work</span></div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Mayo+Clinic+medLM+vertex+AI+clinical+decision" data-video-id="T2-adKxhQjk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">Mayo Clinic + MedLM</p><p class="vg-creator">Google Cloud Health</p>
      <span class="vg-duration">⏱ 16 min · Clinical CDS notes</span></div>
  </a>
  <a class="vg-card" data-video-id="vLTmnaMpQCs" href="https://www.youtube.com/results?search_query=InstructGPT+RLHF+OpenAI+training+language+models" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta"><span class="vg-tag optional">Optional</span>
      <p class="vg-title">InstructGPT / RLHF, The Original Paper</p><p class="vg-creator">Yannic Kilcher</p>
      <span class="vg-duration">⏱ 30 min · Ouyang et al. 2022</span></div>
  </a>
</div>

---

## ✅ After watching

1. The customization ladder, five rungs in order?
2. Three things fine-tuning is good at; three things it's bad at?
3. What is LoRA and what is `adapter_size`?
4. DPO vs RLHF, what's the simpler path?
5. When use distillation?
