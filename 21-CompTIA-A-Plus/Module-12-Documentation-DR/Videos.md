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
</style>

# 🎥 Module 12 Videos: Documentation, Change & DR

> Curated in study order. Final module — pair with the Practice Exams next.

## ⭐ Essential (~45 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+220-1102+Backup+strategies+RPO+RTO" data-video-id="7rM-4TTHymM" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Backup Strategies — Full / Incr / Diff + RPO/RTO</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 13 min · The 3-2-1 rule</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+220-1102+Documentation+ticketing" data-video-id="OSwWQxkY0Ec" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Documentation &amp; Ticketing</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 11 min · Ticket lifecycle</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Professor+Messer+220-1102+Disaster+recovery+sites" data-video-id="YIZfARjB4Eo" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">DR Sites — Hot / Warm / Cold</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · Pick the right tier</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Dion+Training+3-2-1+backup+rule" data-video-id="wwt9dDhsgJw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">3-2-1 Backup Rule in Practice</p>
      <p class="vg-creator">Dion Training</p>
      <span class="vg-duration">⏱ 10 min · Memorize this</span>
    </div>
  </a>
</div>

## 📚 Recommended (~35 min)

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Veeam+immutable+backup+ransomware" data-video-id="yUy4JYuejr0" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Immutable Backups vs Ransomware (Veeam)</p>
      <p class="vg-creator">Veeam Software</p>
      <span class="vg-duration">⏱ 14 min · Modern resilience</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=ITIL+ticket+lifecycle+best+practices" data-video-id="CuwrRjnkbnY" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">ITIL Ticket Lifecycle Best Practices</p>
      <p class="vg-creator">ITIL Foundation YouTube</p>
      <span class="vg-duration">⏱ 12 min · Process framing</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Lawrence+Systems+3-2-1+backup+strategy+SMB" data-video-id="wwt9dDhsgJw" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">3-2-1 Backup for Small Business</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 16 min · Real procurement</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Maersk+NotPetya+2017+recovery+talk" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Maersk NotPetya 2017 — Recovery Story</p>
      <p class="vg-creator">Various / Adam Banks RSAC keynote</p>
      <span class="vg-duration">⏱ 25 min · Case study</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=NIST+800-34+disaster+recovery+walkthrough" data-video-id="pxW7pAtobpc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">NIST 800-34 Contingency Planning Walkthrough</p>
      <p class="vg-creator">NIST community</p>
      <span class="vg-duration">⏱ 20 min · Federal best practices</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=AWS+backup+restoration+demo" data-video-id="IiXFN-ka_Ts" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">AWS Backup &amp; Restore Demo</p>
      <p class="vg-creator">AWS / Amazon Web Services</p>
      <span class="vg-duration">⏱ 18 min · Cloud DR tooling</span>
    </div>
  </a>
</div>

---

## 🏆 Best channels to subscribe to

| Channel | Why |
|---------|-----|
| **Professor Messer** | Final A+ review pillar |
| **Veeam / Acronis** | Vendor-official backup deep-dives |
| **Lawrence Systems** | SMB-scale practical DR |
| **ITIL Foundation YouTube** | Process discipline |
| **AWS / Microsoft / Google official** | Cloud DR tooling |

---

## ✅ After watching

1. Recite the 3-2-1 backup rule + the modern 3-2-1-1-0 variant.
2. Define RPO vs RTO + give an example of each.
3. Hot vs Warm vs Cold site — recovery time of each?
4. Walk through your steps when ransomware destroys both production AND local backup.
5. Why must you TEST backups, not just take them?

---

## 🏁 Course completion — your next moves

✅ Take **Practice Exam 1** (Core 1)
✅ Take **Practice Exam 2** (Core 2)
✅ Take **Final Mock Exam** (90 Q / 90 min)
✅ Book your real CompTIA A+ exams via Pearson VUE

Then return for **Network+ (course 22)** to expand your networking expertise.
