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

# 🎥 Module 7 Videos: Responsible AI

> **How to use:** Each video maps to a specific AWS tool. Make a 4-column note: Service → Pillar → Inputs → Outputs. By the end you should be able to say *"Clarify = bias, Guardrails = safety/PII, Model Cards = docs, A2I = HITL"* without thinking.

## ⭐ Essential watching (~55 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Guardrails+for+Amazon+Bedrock+demo+walkthrough" target="_blank" rel="noopener" data-video-id="6_jRXLRKPHA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Guardrails for Amazon Bedrock — Full Walkthrough</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 18 min · PII, denied topics, content filters, grounding</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Clarify+bias+detection+explainability+demo" target="_blank" rel="noopener" data-video-id="jvcPZmnXaxo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">SageMaker Clarify — Bias &amp; Explainability</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 15 min · Pre/post-training bias + SHAP</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Responsible+AI+AWS+overview+pillars" target="_blank" rel="noopener" data-video-id="VVjAviy8frc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Responsible AI Overview &amp; Pillars</p>
      <p class="vg-creator">AWS AI / re:Invent</p>
      <span class="vg-duration">⏱ 12 min · Fairness, Explainability, Privacy, etc.</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AIF-C01+responsible+AI+walkthrough+ExamPro" target="_blank" rel="noopener" data-video-id="uRI0dllESko">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AIF-C01 — Responsible AI Domain Walkthrough</p>
      <p class="vg-creator">ExamPro / Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · Exam-aligned recap</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+A2I+augmented+AI+human+in+the+loop" target="_blank" rel="noopener" data-video-id="tdQPMdkXul4">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Amazon Augmented AI (A2I) — Human In The Loop</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 12 min · Workforce + review workflows</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SageMaker+Model+Cards+demo" target="_blank" rel="noopener" data-video-id="lwCBXYZhJyc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SageMaker Model Cards — Standardized Model Docs</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 10 min · What goes in a model card</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=SHAP+LIME+explainability+machine+learning" target="_blank" rel="noopener" data-video-id="d4PPMpdUCz8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">SHAP &amp; LIME Explainability Explained</p>
      <p class="vg-creator">StatQuest</p>
      <span class="vg-duration">⏱ 14 min · The two go-to explainability techniques</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NIST+AI+RMF+framework+overview" target="_blank" rel="noopener" data-video-id="-v2zEkKQv2Y">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NIST AI Risk Management Framework Overview</p>
      <p class="vg-creator">NIST</p>
      <span class="vg-duration">⏱ 22 min · External governance framework</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EU+AI+Act+explained+risk+categories" target="_blank" rel="noopener" data-video-id="XM9-I6844b8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">EU AI Act — Risk Categories Explained</p>
      <p class="vg-creator">European Commission / DLA Piper</p>
      <span class="vg-duration">⏱ 20 min · Prohibited / high-risk / limited / minimal</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=red+teaming+LLMs+adversarial+testing" target="_blank" rel="noopener" data-video-id="npAcymuDmeA">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Red-Teaming LLMs — Finding Failures Before Attackers Do</p>
      <p class="vg-creator">Anthropic / DeepLearning.AI</p>
      <span class="vg-duration">⏱ 25 min · Robust testing for safety</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **AWS Machine Learning** | Official Guardrails / Clarify / A2I demos |
| **AWS AI** | Responsible AI keynotes |
| **StatQuest** | Best free SHAP / LIME explainer |
| **Anthropic / DeepLearning.AI** | LLM safety and red-teaming |
| **NIST** | US federal AI guidance |
| **AWS re:Invent** | Customer governance stories |

---

## ✅ After watching

1. Map every service to its pillar: Clarify, Guardrails, Model Cards, AI Service Cards, A2I, Model Monitor.
2. Five Guardrails filter types, by name?
3. Difference between Model Cards (yours) and AI Service Cards (AWS's)?
4. What is human-in-the-loop and which AWS service implements it?
5. Name 2 external AI governance frameworks the exam might reference.

If you've got all 5, you're ready for the [Quiz](./Quiz.md).
