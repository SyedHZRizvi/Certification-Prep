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

# 🎥 Module 8 Videos: AI Security & Governance

> **How to use:** This is where the AWS security generalist content overlaps. If you've done CCP or SAA, the IAM/KMS/VPC parts are review, just focus on the AI-specific overlays (Bedrock IAM, KB security, invocation logging, AI-specific threats).

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+Bedrock+security+best+practices+IAM+VPC" target="_blank" rel="noopener" data-video-id="ybWH1K5yLIw">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon Bedrock Security Best Practices</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 18 min · IAM, VPC endpoints, KMS, logging</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Shared+Responsibility+Model+AI" target="_blank" rel="noopener" data-video-id="o13js0hIO_o">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Shared Responsibility, Adapted for AI Workloads</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 12 min · The cloud / in-the-cloud split for AI</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AIF-C01+security+governance+ExamPro" target="_blank" rel="noopener" data-video-id="kc7Qf43fblg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AIF-C01, Security &amp; Governance Domain Walkthrough</p>
      <p class="vg-creator">ExamPro / Stephane Maarek</p>
      <span class="vg-duration">⏱ 15 min · Exam-aligned recap</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Macie+PII+discovery+demo" target="_blank" rel="noopener" data-video-id="PVnFYotwqyo">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Macie, PII Discovery in S3</p>
      <p class="vg-creator">AWS Security</p>
      <span class="vg-duration">⏱ 10 min · Pre-RAG data hygiene</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+CloudTrail+Bedrock+model+invocation+logging" target="_blank" rel="noopener" data-video-id="qt38XTSAG50">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CloudTrail vs Bedrock Model Invocation Logging</p>
      <p class="vg-creator">AWS Online Tech Talks</p>
      <span class="vg-duration">⏱ 12 min · The two different log streams</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=OWASP+Top+10+LLM+applications+threats" target="_blank" rel="noopener" data-video-id="mDiglllKPwg">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">OWASP Top 10 for LLMs Explained</p>
      <p class="vg-creator">OWASP Foundation</p>
      <span class="vg-duration">⏱ 15 min · Threat catalog the exam paraphrases</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+PrivateLink+VPC+endpoint+Bedrock" target="_blank" rel="noopener" data-video-id="fAkr-4cZrSY">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">PrivateLink VPC Endpoints for Bedrock</p>
      <p class="vg-creator">AWS Networking</p>
      <span class="vg-duration">⏱ 10 min · Make Bedrock traffic private</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=KMS+customer+managed+key+best+practices" target="_blank" rel="noopener" data-video-id="f3APF1dP8w0">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">KMS Customer-Managed Keys, Best Practices</p>
      <p class="vg-creator">AWS Security</p>
      <span class="vg-duration">⏱ 18 min · Key rotation, policies, audit</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=HIPAA+on+AWS+Bedrock+healthcare+AI" target="_blank" rel="noopener" data-video-id="aTiz6ocJm4Q">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">HIPAA-Compliant AI Workloads on AWS</p>
      <p class="vg-creator">AWS Healthcare</p>
      <span class="vg-duration">⏱ 22 min · BAA + eligible services</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Nitro+Enclaves+confidential+AI" target="_blank" rel="noopener" data-video-id="PZTtJu1QtBE">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Nitro Enclaves, Confidential AI Computing</p>
      <p class="vg-creator">AWS Security</p>
      <span class="vg-duration">⏱ 18 min · Isolated in-use data protection</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **AWS Online Tech Talks** | Bedrock + SageMaker security deep dives |
| **AWS Security** | Macie, GuardDuty, KMS |
| **AWS Networking** | PrivateLink / VPC endpoints |
| **OWASP Foundation** | LLM threat modeling |
| **AWS re:Invent** | Customer governance war stories |
| **ExamPro / Stephane Maarek** | Exam-aligned content |

---

## ✅ After watching

1. Walk through a secure-by-default Bedrock architecture (IAM, VPC endpoint, KMS, Guardrails, logging).
2. What's the difference between CloudTrail and Bedrock model invocation logging?
3. Which AWS service discovers PII in S3 before you ingest it into a Knowledge Base?
4. List 5 AI-specific threats and one mitigation each.
5. What document do you need before running HIPAA workloads on AWS?

Now take **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)**, you've covered all 5 exam domains.
