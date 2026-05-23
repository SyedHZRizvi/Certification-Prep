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

# 🎥 Module 4 Videos: Networking & CDN

> **How to use:** This is the densest module so far — networking concepts take repetition. After the Essentials, draw your own VPC diagram from memory before doing the quiz.

## ⭐ Essential watching (~50 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+VPC+basics+for+beginners+CLF-C02" data-video-id="43tIX7901Gs" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">VPC Basics — Subnets, IGW, NAT, Route Tables</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · The foundation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Security+Groups+vs+NACL+AWS+explained" data-video-id="1Ez3DN6s02Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Security Groups vs NACLs — Stateful vs Stateless</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 10 min · Exam favorite</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Route+53+routing+policies+explained" data-video-id="jXgIRPjXv3Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Route 53 Routing Policies — All 7 With Examples</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 13 min · MEMORIZE</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CloudFront+vs+Global+Accelerator+difference" data-video-id="GUfAQUjA3a0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">CloudFront vs Global Accelerator — When To Use Which</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · High-confusion topic</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ALB+vs+NLB+vs+GWLB+explained+AWS" data-video-id="aOzC0pEmhqI" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ALB vs NLB vs GWLB — Load Balancer Types</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · Layer 4 vs 7</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Direct+Connect+vs+VPN+vs+Transit+Gateway+AWS" data-video-id="spTVfetqjPA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Direct Connect vs VPN vs Transit Gateway</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 9 min · Hybrid connectivity</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VPC+endpoints+gateway+interface+PrivateLink" data-video-id="zqwYm1FTGow" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">VPC Endpoints — Gateway, Interface, PrivateLink</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 11 min · Private AWS access</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=API+Gateway+Lambda+serverless+REST+API+tutorial" data-video-id="osuHIlAsnSc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">API Gateway + Lambda — Serverless REST in 15 min</p>
      <p class="vg-creator">freeCodeCamp.org</p>
      <span class="vg-duration">⏱ 15 min · Hands-on</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Transit+Gateway+architecture+overview" data-video-id="dcZpQPW2IJ0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Transit Gateway — Hub-and-Spoke for VPCs</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 12 min · Scaling beyond peering</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best networking content for the exam |
| **Be A Better Dev** | Short, focused, accurate |
| **ExamPro** | Full CLF course; great Route 53 coverage |
| **Tutorials Dojo** | Cheat sheets for every networking service |
| **AWS Training and Certification** | Official architecture walkthroughs |

---

## ✅ After watching

1. Draw a VPC diagram showing IGW, NAT, public + private subnets, and a database in a private subnet.
2. Security Group vs NACL — 3 differences each.
3. List the 7 Route 53 routing policies.
4. ALB vs NLB — when to use each.
5. CloudFront vs Global Accelerator — one-line difference.

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
