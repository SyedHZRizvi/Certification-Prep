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

# 🎥 Module 6 Videos: Fine-Tuning & Customization

> **How to use:** The cost/decision matrix here is high-leverage. Watch the first two videos with the table from the Reading open, you should be able to predict which approach the speaker recommends before they say it.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=RAG+vs+fine+tuning+IBM+technology" target="_blank" rel="noopener" data-video-id="00Q0G84kq3M">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">RAG vs Fine-Tuning, Which Do You Need?</p>
      <p class="vg-creator">IBM Technology</p>
      <span class="vg-duration">⏱ 10 min · The most-tested comparison</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Bedrock+model+customization+fine-tuning+demo" target="_blank" rel="noopener" data-video-id="Sh1XBtf8ISg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Fine-Tuning Foundation Models on Amazon Bedrock</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 15 min · JSONL → custom model → Provisioned Throughput</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=BLEU+ROUGE+perplexity+LLM+evaluation+metrics" target="_blank" rel="noopener" data-video-id="RTaZqGflrJ8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">BLEU, ROUGE &amp; Perplexity, LLM Evaluation Metrics</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 12 min · The exam-relevant metrics in one shot</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Bedrock+Model+Evaluation+human+LLM+judge+demo" target="_blank" rel="noopener" data-video-id="WYdcTChKeig">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon Bedrock Model Evaluation Walkthrough</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · Automatic + human + LLM-as-judge</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=LoRA+PEFT+parameter+efficient+fine+tuning+explained" target="_blank" rel="noopener" data-video-id="LuszqkM1s88">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">LoRA &amp; PEFT, Cheap Fine-Tuning Explained</p>
      <p class="vg-creator">Sentdex / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 12 min · Why modern fine-tuning is affordable</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=RLHF+reinforcement+learning+human+feedback+Hugging+Face" target="_blank" rel="noopener" data-video-id="2MBJOuVq380">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">RLHF, Reinforcement Learning from Human Feedback</p>
      <p class="vg-creator">Hugging Face / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 10 min · How Claude / GPT are aligned</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=cost+optimization+Amazon+Bedrock+GenAI+workload" target="_blank" rel="noopener" data-video-id="P2fpid5AeNc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bedrock Cost Optimization, Batch, PT, Caching</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 18 min · Knobs you can pull to reduce spend</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=continued+pre-training+vs+fine-tuning+LLM" target="_blank" rel="noopener" data-video-id="cybEKSNBp-w">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Continued Pre-Training vs Fine-Tuning</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 14 min · The big-data vs small-data distinction</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+JumpStart+fine+tune+Llama+demo" target="_blank" rel="noopener" data-video-id="dyhKBax4Bxw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Fine-Tune Llama on SageMaker JumpStart</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 25 min · The JumpStart customization path</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=DPO+direct+preference+optimization+vs+RLHF" target="_blank" rel="noopener" data-video-id="XZLc09hkMwA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DPO vs RLHF, The Newer Alignment Method</p>
      <p class="vg-creator">DeepLearning.AI</p>
      <span class="vg-duration">⏱ 15 min · Background depth</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **AWS Machine Learning** | Bedrock customization demos |
| **DeepLearning.AI** | High-quality eval + alignment content |
| **IBM Technology** | The clearest RAG vs FT short videos |
| **Hugging Face** | Open-source PEFT / RLHF tutorials |
| **AWS re:Invent** | Cost optimization talks |
| **Sentdex** | Beginner-friendly fine-tuning |

---

## ✅ After watching

1. Walk through the customization decision tree (prompt → RAG → FT → continued pre-train).
2. Why must you buy Provisioned Throughput to invoke a customized Bedrock model?
3. When is BLEU the right metric vs ROUGE?
4. What's the difference between fine-tuning and continued pre-training?
5. Name 4 cost-optimization moves for Bedrock workloads.

After this, take **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)** once you finish Module 8.
