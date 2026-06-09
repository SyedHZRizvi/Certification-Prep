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

# 🎥 Module 6 Videos: Security, Identity & Compliance

> **How to use:** Security & Compliance is 30% of your exam, the LARGEST domain. Watch all Essentials twice if you have to. The Shared Responsibility Model video is the single highest-yield video in the whole course.

## ⭐ Essential watching (~60 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Shared+Responsibility+Model+explained+CLF-C02" data-video-id="HlEv_9-VSxM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Shared Responsibility Model, Every Detail Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · HIGHEST-yield video</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+IAM+users+groups+roles+policies+tutorial" data-video-id="bmBzYFwUwsk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">IAM, Users, Groups, Roles, Policies Explained</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Core IAM</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=GuardDuty+Macie+Inspector+difference+AWS+security" data-video-id="h7pq95RMuEQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">GuardDuty vs Macie vs Inspector, Which Detects What?</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 13 min · Service disambiguation</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+KMS+encryption+at+rest+CloudHSM+difference" data-video-id="ItzzgWe7elE" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">KMS, CloudHSM, Secrets Manager, Encryption Stack</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 11 min · Encryption services</span>
    </div>
  </a>
</div>

## 📚 Recommended (~30 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Organizations+SCPs+multi+account+strategy" data-video-id="0YMb51VuD54" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Organizations + SCPs, Multi-Account Done Right</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 10 min · Enterprise guardrails</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=WAF+Shield+Standard+Advanced+AWS+DDoS+protection" data-video-id="jcE2gyVkhYo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">WAF vs Shield Standard vs Shield Advanced</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 9 min · Edge protection</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=CloudTrail+vs+Config+AWS+governance" data-video-id="MT-DNQUSLT8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">CloudTrail vs Config, Who Did What vs What Changed</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 8 min · Audit services</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+IAM+Identity+Center+SSO+setup+demo" data-video-id="4yJp5-jGGNk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">IAM Identity Center (AWS SSO) Walkthrough</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 15 min · Federated workforce</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Security+Hub+demo+aggregated+findings" data-video-id="nBusvrDEjdk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Security Hub, One Dashboard for Everything</p>
      <p class="vg-creator">AWS re:Invent</p>
      <span class="vg-duration">⏱ 20 min · Aggregator pattern</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | The most exam-faithful security explanations |
| **Be A Better Dev** | Security service disambiguation videos are gold |
| **Tutorials Dojo** | Cheat-sheet style "which service does X" content |
| **AWS re:Invent** | Deep-dive sessions if you want to nerd out |
| **ExamPro** | Free full CLF course; strong Security section |

---

## ✅ After watching

1. Shared Responsibility, give 3 things on each side.
2. IAM Roles vs Users, when to use which?
3. GuardDuty vs Macie vs Inspector, one-liner each.
4. KMS vs CloudHSM, when to pick which?
5. CloudTrail vs Config, what does each track?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
