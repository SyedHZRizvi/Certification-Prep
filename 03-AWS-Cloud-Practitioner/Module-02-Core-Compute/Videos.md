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

# 🎥 Module 2 Videos: Core Compute

> **How to use:** Watch Essentials in order (~50 min). Pause and sketch the decision tree: "Long-running VM? Container? Serverless function?" — this is the #1 architecture choice on the exam.

## ⭐ Essential watching (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+EC2+explained+Stephane+Maarek+CLF-C02" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EC2 Fundamentals for the AWS Cloud Practitioner</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 15 min · The core service</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EC2+pricing+models+On-Demand+Reserved+Spot+Savings+Plan" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EC2 Pricing Models — On-Demand, Reserved, Spot, Savings Plans</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 12 min · High-frequency exam topic</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Lambda+explained+in+10+minutes+Be+A+Better+Dev" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Lambda Explained in 10 Minutes</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · The serverless workhorse</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ECS+vs+EKS+vs+Fargate+explained+AWS" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ECS vs EKS vs Fargate — Which Do I Use?</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 12 min · Container disambiguation</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Auto+Scaling+Groups+explained+CLF" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Auto Scaling Groups + ELB — The Scaling Power Couple</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · Critical pattern</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Elastic+Beanstalk+vs+Lightsail+vs+App+Runner" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Beanstalk vs Lightsail vs App Runner</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 8 min · Easy-mode compute</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Batch+explained+for+beginners" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Batch — Run Massive Batch Jobs Cheaply</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 7 min · For batch workloads</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Spot+Instances+90+percent+savings+real+world" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Saving 90% With Spot Instances in Production</p>
      <p class="vg-creator">freeCodeCamp.org</p>
      <span class="vg-duration">⏱ 20 min · Advanced cost optimization</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Lambda+cold+starts+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Lambda Cold Starts — Why &amp; How To Avoid</p>
      <p class="vg-creator">Marcia Villalba</p>
      <span class="vg-duration">⏱ 13 min · Deeper Lambda knowledge</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Most exam-aligned content for CLF-C02 |
| **Be A Better Dev** | Quick service explainers, especially containers/serverless |
| **ExamPro (Andrew Brown)** | Full free CLF course; great pricing coverage |
| **Marcia Villalba** | DevAdvocate; deep Lambda + serverless |
| **Tutorials Dojo** | Cheat sheets + practice walkthroughs |

---

## ✅ After watching

Answer these in your notebook:

1. Name the 5 EC2 instance families and what each is optimized for.
2. List the 4 main EC2 pricing models and when to use each.
3. What's the Lambda max execution time? What happens if you exceed it?
4. ECS vs EKS vs Fargate — explain in one sentence each.
5. What's the difference between an Auto Scaling Group and an Elastic Load Balancer?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
