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

# 🎥 Module 5 Videos: Fine-Tuning, PEFT & LoRA

## ⭐ Essential watching

<div class="vg-grid">
  <a class="vg-card" data-video-id="DhRoTONcyZE" href="https://www.youtube.com/results?search_query=sebastian+raschka+lora+from+scratch" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">LoRA from Scratch, Sebastian Raschka</p>
      <p class="vg-creator">Sebastian Raschka</p>
      <span class="vg-duration">⏱ 1h · The math + the code</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="y9PHWGOa8HA" href="https://www.youtube.com/results?search_query=tim+dettmers+qlora+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">QLoRA, Tim Dettmers (the author) talk</p>
      <p class="vg-creator">Tim Dettmers</p>
      <span class="vg-duration">⏱ 50m · NF4, double quant, paged optimizers</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aQmoog_s8HE" href="https://www.youtube.com/results?search_query=hugging+face+trl+sft+fine+tuning+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">TRL SFTTrainer, full tutorial</p>
      <p class="vg-creator">HuggingFace</p>
      <span class="vg-duration">⏱ 45m · End-to-end SFT</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="00Q0G84kq3M" href="https://www.youtube.com/results?search_query=should+you+fine+tune+RAG+vs+fine+tuning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAG vs Fine-Tuning, when to use which</p>
      <p class="vg-creator">community / OpenAI DevRel</p>
      <span class="vg-duration">⏱ 30m · The decision tree</span>
    </div>
  </a>
</div>

## 📚 Recommended

<div class="vg-grid">
  <a class="vg-card" data-video-id="k2pD3k1485A" href="https://www.youtube.com/results?search_query=DPO+direct+preference+optimization+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Direct Preference Optimization (DPO), explained</p>
      <p class="vg-creator">community paper review</p>
      <span class="vg-duration">⏱ 35m · Skip the reward model</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="MQwryfkydc0" href="https://www.youtube.com/results?search_query=unsloth+qlora+fast+fine+tuning" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Unsloth, 2× faster QLoRA</p>
      <p class="vg-creator">Unsloth team</p>
      <span class="vg-duration">⏱ 25m · The faster way</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=openai+fine+tuning+api+walkthrough+2024" data-video-id="vqhPjScKAjI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OpenAI fine-tuning API walkthrough</p>
      <p class="vg-creator">OpenAI DevRel</p>
      <span class="vg-duration">⏱ 30m · Managed FT, end-to-end</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="t509sv5MT0w" href="https://www.youtube.com/results?search_query=peft+library+huggingface+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PEFT library deep dive (LoRA, IA3, prefix tuning)</p>
      <p class="vg-creator">HuggingFace</p>
      <span class="vg-duration">⏱ 40m · The full PEFT family</span>
    </div>
  </a>
</div>

## 🍿 Optional

<div class="vg-grid">
  <a class="vg-card" data-video-id="m7KQdGSr0Dg" href="https://www.youtube.com/results?search_query=dora+weight+decomposed+lora+paper" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DoRA, Weight-Decomposed LoRA</p>
      <p class="vg-creator">paper review</p>
      <span class="vg-duration">⏱ 25m · LoRA successor</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=knowledge+distillation+llm+small+model" data-video-id="VvjPnRcMYRM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Knowledge Distillation, large → small LLM</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 35m · Cost-saving via distillation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ae2lbmtTY5A" href="https://www.youtube.com/results?search_query=axolotl+fine+tuning+llama+config" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Axolotl, config-driven fine-tuning</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 40m · The YAML-config alternative</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="iMD7ba1hHgw" href="https://www.youtube.com/results?search_query=llama+factory+fine+tuning+gui" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">LLaMA Factory, GUI fine-tuning</p>
      <p class="vg-creator">community</p>
      <span class="vg-duration">⏱ 30m · Lower-friction option</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Sebastian Raschka** | The clearest explainer on PEFT math + code |
| **HuggingFace** | PEFT + TRL official tutorials |
| **Trelis Research** | Practitioner LoRA / QLoRA walkthroughs |
| **AI Coffee Break** | Paper reviews |
| **Mervin Praison / Tim Dettmers** | Hands-on QLoRA |

---

## ✅ After watching

1. State the LoRA update equation. What are r, alpha, dropout?
2. Why is QLoRA cheaper than LoRA?
3. SFT vs DPO vs KTO vs PPO, when does each apply?
4. List 3 signs that fine-tuning won't help your problem.
5. How do you serve a fine-tuned model with vLLM? (Two patterns.)

Then take the [Quiz](./Quiz.md).
