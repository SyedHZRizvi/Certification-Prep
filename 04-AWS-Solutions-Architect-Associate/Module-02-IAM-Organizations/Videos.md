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

# 🎥 Module 2 Videos: IAM & Organizations

> **How to use:** Click any card to search YouTube for the topic, top result is usually the freshest. IAM is the #1 source of "wait, what?" on the SAA exam, so don't skip the deep-dive videos.

## ⭐ Essential watching (~70 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="I_Uh1ra3RYU" href="https://www.youtube.com/results?search_query=AWS+IAM+for+beginners+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IAM Crash Course, Users, Groups, Roles, Policies</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 25 min · The foundation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="qsF6Kauh2J4" href="https://www.youtube.com/results?search_query=AWS+IAM+policy+evaluation+logic+Be+A+Better+Dev" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🧮</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IAM Policy Evaluation Logic</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Deny always wins</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="b-R40XGKrF4" href="https://www.youtube.com/results?search_query=AWS+STS+AssumeRole+cross+account+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔄</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Cross-Account Access with AssumeRole</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 18 min · STS in practice</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="vBoLC2oSUPo" href="https://www.youtube.com/results?search_query=AWS+Organizations+SCP+explained" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🏢</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Organizations & Service Control Policies</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 15 min · Multi-account governance</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="4yJp5-jGGNk" href="https://www.youtube.com/results?search_query=AWS+IAM+Identity+Center+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🆔</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">IAM Identity Center (formerly AWS SSO)</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 18 min · Modern multi-account SSO</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="aeRkFDVurAM" href="https://www.youtube.com/results?search_query=AWS+IAM+permissions+boundary+vs+SCP" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🛂</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Permissions Boundary vs SCP</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 10 min · The classic confusion</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="TlCuOjviOhk" href="https://www.youtube.com/results?search_query=AWS+IAM+role+EC2+instance+profile" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>💻</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EC2 IAM Roles & Instance Profiles</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 12 min · Never bake keys into AMIs</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" data-video-id="jnWHZMVCHSo" href="https://www.youtube.com/results?search_query=AWS+confused+deputy+ExternalId" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🕵️</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">The Confused Deputy & ExternalId</p>
      <p class="vg-creator">AWS Security</p>
      <span class="vg-duration">⏱ 14 min · Vendor access patterns</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="ioBgpcDiguA" href="https://www.youtube.com/results?search_query=AWS+IAM+Access+Analyzer+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔎</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IAM Access Analyzer, find public resources</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 12 min · Real-world detection</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="eQ64C7q4C2U" href="https://www.youtube.com/results?search_query=Amazon+Cognito+identity+pool+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>👤</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Cognito Identity Pools, temp AWS creds for app users</p>
      <p class="vg-creator">freeCodeCamp</p>
      <span class="vg-duration">⏱ 22 min · Mobile/web pattern</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best IAM walkthroughs on YouTube |
| **Be A Better Dev** | Animated, single-concept videos perfect for IAM nuance |
| **ExamPro** | Long-form free SAA course, IAM-heavy |
| **AWS Security** | Official source for policy and governance |
| **Tutorials Dojo** | Real exam-question phrasing |

---

## ✅ After watching

Answer these in your notebook:

1. Why use an IAM Role instead of an IAM User for an EC2 application?
2. What's the difference between an SCP and a permissions boundary?
3. How does "Deny" interact with "Allow" in IAM policy evaluation?
4. What is `ExternalId` and when is it used?
5. What's the best way to give developers access to 30 AWS accounts?

If you can answer all 5, take the [Quiz](./Quiz.md). If not, re-watch the policy evaluation and AssumeRole videos.
