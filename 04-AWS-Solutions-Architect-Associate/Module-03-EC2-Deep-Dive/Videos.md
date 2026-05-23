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

# 🎥 Module 3 Videos: EC2 Deep Dive

> **How to use:** EC2 has more knobs than any other service. Don't skim the videos on purchase options and load balancers — those are exam gold.

## ⭐ Essential watching (~75 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="ik2J0txfbdM" href="https://www.youtube.com/results?search_query=EC2+instance+types+explained+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EC2 Instance Types Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 18 min · T/M/C/R/I/G families</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="-t148tYgnJU" href="https://www.youtube.com/results?search_query=EC2+pricing+options+On-Demand+Reserved+Spot+Savings+Plan" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EC2 Purchase Options Compared</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 22 min · When to pick which</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="25hIy-ewuWw" href="https://www.youtube.com/results?search_query=AWS+Auto+Scaling+Group+demo+launch+template" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📈</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Auto Scaling Groups + Launch Templates</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 18 min · Hands-on walkthrough</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aOzC0pEmhqI" href="https://www.youtube.com/results?search_query=ALB+vs+NLB+vs+GWLB+AWS+ExamPro" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚖️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">ALB vs NLB vs GWLB</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 17 min · The classic comparison</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="WdiHIxkhplY" href="https://www.youtube.com/results?search_query=AWS+EBS+volume+types+gp3+io2+st1+sc1" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🗄️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EBS Volume Types Compared</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 12 min · gp3, io2, st1, sc1</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="xABE2P_453c" href="https://www.youtube.com/results?search_query=AWS+placement+groups+cluster+spread+partition" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎯</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Placement Groups: Cluster, Spread, Partition</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 10 min · The 3 patterns</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="CglWS2rfYRo" href="https://www.youtube.com/results?search_query=EFS+vs+EBS+vs+FSx+comparison" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📁</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EFS vs EBS vs FSx</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 13 min · Storage decisions</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="tny8N-hkCqs" href="https://www.youtube.com/results?search_query=AWS+Spot+Instance+best+practices" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎰</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Spot Instances — Mixed Instance Policies</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 25 min · Real cost savings</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="HKAl4tSCp7o" href="https://www.youtube.com/results?search_query=Graviton+vs+x86+AWS+benchmarks" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧠</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Graviton vs x86 — Why Move?</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 18 min · ARM on AWS</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="GiZuOVNKZ2c" href="https://www.youtube.com/results?search_query=ALB+path+based+routing+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛣️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">ALB Path-Based & Host-Based Routing</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 20 min · Microservices patterns</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best instance-type and pricing breakdowns |
| **ExamPro** | Free SAA prep — heavy EC2 coverage |
| **Be A Better Dev** | Hands-on demos in 15 min |
| **AWS Events / re:Invent** | Deep architectural sessions |

---

## ✅ After watching

1. List the 6 instance family letters and one use case each.
2. When would you pick Spot over Reserved Instances?
3. ALB vs NLB — name 2 differences and a scenario for each.
4. What does a Launch Template do that a Launch Configuration cannot?
5. What's the difference between Stop, Hibernate, and Terminate?

If you can answer all 5, take the [Quiz](./Quiz.md).
