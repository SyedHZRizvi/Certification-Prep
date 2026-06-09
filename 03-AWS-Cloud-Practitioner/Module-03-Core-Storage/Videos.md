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

# 🎥 Module 3 Videos: Core Storage

> **How to use:** Watch the Essentials in order (~45 min). When you watch the S3 storage classes video, PAUSE and write the 7 classes from memory before continuing. That's the single highest-yield drill in this whole module.

## ⭐ Essential watching (~45 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+S3+explained+for+beginners+Stephane+Maarek" data-video-id="Ns3KyQnSeVQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Amazon S3, Buckets, Objects, Versioning Explained</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 14 min · S3 fundamentals</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=S3+storage+classes+Standard+IA+Glacier+explained" data-video-id="0NkoMca764Y" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">All 7 S3 Storage Classes Explained</p>
      <p class="vg-creator">ExamPro</p>
      <span class="vg-duration">⏱ 12 min · The high-yield drill</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EBS+vs+EFS+vs+S3+difference+AWS" data-video-id="JIbIYCM48to" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">EBS vs EFS vs S3, The Storage Showdown</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 10 min · The trichotomy</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Snow+Family+Snowball+Snowcone+explained" data-video-id="zXyudn7KeZM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">AWS Snow Family, Snowcone, Snowball, Snowmobile</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 9 min · Physical data transfer</span>
    </div>
  </a>
</div>

## 📚 Recommended (~25 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=EBS+volume+types+gp3+io2+st1+sc1+explained" data-video-id="PRdShBP3adA" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">EBS Volume Types, gp3, io2, st1, sc1</p>
      <p class="vg-creator">Stephane Maarek</p>
      <span class="vg-duration">⏱ 9 min · When to pick which</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+Storage+Gateway+File+Volume+Tape+explained" data-video-id="ciRmcXTV-8A" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">AWS Storage Gateway, File, Volume, Tape</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 10 min · Hybrid storage</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Amazon+FSx+for+Windows+Lustre+NetApp+overview" data-video-id="wQJiOnuk0rc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">FSx Variants, Windows, Lustre, NetApp, OpenZFS</p>
      <p class="vg-creator">AWS Training and Certification</p>
      <span class="vg-duration">⏱ 8 min · Specialized file systems</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=S3+lifecycle+policies+demo+savings" data-video-id="NYjc2gluzTk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">S3 Lifecycle Rules, Automate Cost Savings</p>
      <p class="vg-creator">Be A Better Dev</p>
      <span class="vg-duration">⏱ 12 min · Hands-on demo</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=S3+versioning+vs+replication+vs+object+lock" data-video-id="b18KlhIgmjQ" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Versioning vs Replication vs Object Lock</p>
      <p class="vg-creator">Tutorials Dojo</p>
      <span class="vg-duration">⏱ 11 min · S3 data protection</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Stephane Maarek** | Hands-down best S3 + EBS content for CLF-C02 |
| **Tutorials Dojo** | Storage class cheat sheets are gold |
| **Be A Better Dev** | Quick disambiguation videos |
| **AWS Training and Certification** | Official, no-nonsense |
| **ExamPro** | Full free course, good Storage section |

---

## ✅ After watching

1. Name the 3 storage paradigms (block, file, object) and one AWS service for each.
2. List the 7 S3 storage classes from most-expensive to cheapest.
3. EBS vs Instance Store, what's the key difference?
4. EFS vs FSx for Windows, when to pick which?
5. When would you use a Snowball Edge instead of just uploading over the internet?

If you can answer all 5, you're ready for the [Quiz](./Quiz.md).
