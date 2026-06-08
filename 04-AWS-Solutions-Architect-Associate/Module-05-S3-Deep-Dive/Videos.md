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

# 🎥 Module 5 Videos: S3 Deep Dive

> **How to use:** S3 is dense with rules. Don't skip the storage class and lifecycle videos, they're directly testable.

## ⭐ Essential watching (~70 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="6oYJTyggbfM" href="https://www.youtube.com/results?search_query=AWS+S3+complete+overview+Stephane+Maarek" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🪣</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">S3 Complete Tour, Buckets, Objects, Permissions</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 22 min · The foundation</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="LP_KT6U73M0" href="https://www.youtube.com/results?search_query=AWS+S3+storage+classes+explained+Tutorials+Dojo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>📊</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">S3 Storage Classes & Lifecycle</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 18 min · 7 classes, when to use</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="g2Wod2has2g" href="https://www.youtube.com/results?search_query=S3+encryption+SSE-KMS+SSE-S3+SSE-C" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔐</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">S3 Encryption, SSE-S3, SSE-KMS, SSE-C</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 15 min · Key management options</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="trmicgGpmd4" href="https://www.youtube.com/results?search_query=S3+replication+CRR+SRR+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🌍</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">S3 Cross-Region & Same-Region Replication</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 15 min · Setup + gotchas</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid">
  <a class="vg-card" data-video-id="V2arOZ72d6M" href="https://www.youtube.com/results?search_query=S3+presigned+URL+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔗</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">S3 Presigned URLs in Action</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Temporary access</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="TH2vngv-lC8" href="https://www.youtube.com/results?search_query=S3+object+lock+governance+compliance" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔒</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">S3 Object Lock, Governance vs Compliance</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 14 min · WORM made simple</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="KtWFGnB_dOs" href="https://www.youtube.com/results?search_query=S3+CloudFront+OAC+private+bucket" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🚀</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">S3 + CloudFront with Origin Access Control</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 13 min · The right private-S3 pattern</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" data-video-id="J2CVnmUWSi4" href="https://www.youtube.com/results?search_query=S3+Transfer+Acceleration+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>⚡</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">S3 Transfer Acceleration</p>
      <p class="vg-creator">AWS Training</p>
      <span class="vg-duration">⏱ 12 min · Fast global uploads</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="yqJwN8EBCw8" href="https://www.youtube.com/results?search_query=S3+Select+SQL+demo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🔎</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">S3 Select, SQL on Objects</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 15 min · Skip the full download</span>
    </div>
  </a>
  <a class="vg-card" data-video-id="O_N7ebzSe1g" href="https://www.youtube.com/results?search_query=S3+Access+Points+tutorial" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎫</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">S3 Access Points, Per-App Policies</p>
      <p class="vg-creator">AWS</p>
      <span class="vg-duration">⏱ 11 min · Multi-tenant buckets</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Best end-to-end S3 walkthroughs |
| **Tutorials Dojo** | Practice-test phrasing |
| **Be A Better Dev** | Encryption + presigned URLs |
| **AWS Online Tech Talks** | Replication deep dives |

---

## ✅ After watching

1. List the 7 S3 storage classes from most-to-least available.
2. When do you pick Intelligent-Tiering?
3. What's the difference between SSE-S3, SSE-KMS, and SSE-C?
4. Object Lock Governance vs Compliance, which can be overridden?
5. What does Transfer Acceleration use under the hood?

Ready? [Quiz](./Quiz.md).
