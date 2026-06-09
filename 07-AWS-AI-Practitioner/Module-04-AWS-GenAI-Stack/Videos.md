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

# 🎥 Module 4 Videos: AWS GenAI Stack

> **How to use:** Watch with the model catalog table from the Reading open next to you. Pause whenever a new model family is mentioned and mark "which provider, what modality" on a sticky note.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Bedrock+overview+AWS+2024" target="_blank" rel="noopener" data-video-id="_vdK5PgcNvc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon Bedrock, Full Overview</p>
      <p class="vg-creator">AWS Machine Learning</p>
      <span class="vg-duration">⏱ 20 min · Official tour of providers, KBs, agents, guardrails</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Q+Developer+vs+Q+Business+explained" target="_blank" rel="noopener" data-video-id="op62mHU_CTk">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon Q Developer vs Amazon Q Business</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · The exam-critical distinction</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Nova+foundation+models+reinvent+2024" target="_blank" rel="noopener" data-video-id="Xx4D6TqXuG0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon Nova, re:Invent 2024 Launch</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 18 min · Nova Micro/Lite/Pro/Premier + Canvas + Reel</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AIF-C01+Bedrock+walkthrough+Stephane+Maarek" target="_blank" rel="noopener" data-video-id="BY4YlxhSKr8">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AIF-C01, Bedrock For The Exam</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 15 min · Exam-aligned recap</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=PartyRock+AWS+demo+how+to+use" target="_blank" rel="noopener" data-video-id="-6p-u-BwJww">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PartyRock, Build a GenAI App With No Code</p>
      <p class="vg-creator">AWS Developer</p>
      <span class="vg-duration">⏱ 10 min · Hands-on; go play afterward</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Bedrock+vs+SageMaker+JumpStart+comparison" target="_blank" rel="noopener" data-video-id="l53yDWWQCFQ">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Bedrock vs SageMaker JumpStart, Which Path?</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Removes the #2 confusion in Module 4</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Trainium+Inferentia+chips+explained" target="_blank" rel="noopener" data-video-id="Bteba8KLeGc">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Trainium &amp; Inferentia, Custom AI Chips</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 12 min · The infrastructure layer</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Anthropic+Claude+on+Amazon+Bedrock+demo" target="_blank" rel="noopener" data-video-id="ZLEm-cLTXEo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Anthropic Claude on Amazon Bedrock</p>
      <p class="vg-creator">AWS Events</p>
      <span class="vg-duration">⏱ 25 min · Real demo of Claude through Bedrock</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Q+in+QuickSight+demo" target="_blank" rel="noopener" data-video-id="uBG7lFXV6II">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Amazon Q in QuickSight, Generative BI</p>
      <p class="vg-creator">AWS Analytics</p>
      <span class="vg-duration">⏱ 14 min · Natural-language dashboards</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+HealthScribe+demo+generative+AI+clinical+notes" target="_blank" rel="noopener" data-video-id="lmklf-yP50s">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS HealthScribe, Generative Clinical Documentation</p>
      <p class="vg-creator">AWS Healthcare</p>
      <span class="vg-duration">⏱ 12 min · Specialty GenAI service</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **AWS Machine Learning** | Official, demo-rich Bedrock + Q content |
| **AWS Events** | re:Invent and Summit keynotes |
| **Stephane Maarek** | Exam-targeted AWS content |
| **ExamPro** | Free AIF-C01 walkthroughs |
| **Be A Better Dev** | Service comparisons made simple |
| **AWS Developer** | Hands-on demos and tutorials |

---

## ✅ After watching

1. Name 6 model providers available on Amazon Bedrock.
2. Which OpenAI / Google model is on Bedrock? (trick question)
3. Amazon Q Developer is for ___; Amazon Q Business is for ___.
4. When would you choose JumpStart over Bedrock?
5. List the 3 layers of the AWS GenAI stack and one service per layer.

After this, take **[Practice Exam 1](../Practice-Exams/Practice-Exam-1.md)**, you've covered enough ground for a halftime check.
