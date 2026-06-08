# Module 5 — Storage: Video Resources

<style>
.vg-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 22px 0 30px; }
.vg-card { display: block; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: transform .2s, box-shadow .2s, border-color .2s; }
.vg-card:hover { transform: translateY(-3px); box-shadow: 0 12px 24px -8px rgba(0,0,0,.15); border-color: #818cf8; }
.vg-thumb { position: relative; aspect-ratio: 16 / 9; background: linear-gradient(135deg, #4f46e5, #8b5cf6); display: flex; align-items: center; justify-content: center; color: #fff; font-size: 48px; }
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

## How to use this page

**Essential** — watch before attempting any practice questions.  
**Recommended** — deepen understanding; high return on time investment.  
**Optional** — edge cases, deep dives, or alternative explanations for topics that aren't clicking.

---

## Essential Viewing

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+persistent+volumes+PV+PVC+tutorial+CKA" target="_blank" rel="noopener">
  <div class="vg-thumb">☸️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Persistent Volumes & PVC — Full Walkthrough</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~22 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+storage+class+dynamic+provisioning+tutorial" target="_blank" rel="noopener">
  <div class="vg-thumb">☸️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">StorageClass & Dynamic Provisioning in Kubernetes</p>
    <p class="vg-creator">KodeKloud</p>
    <p class="vg-duration">~18 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+configmap+secret+tutorial+mount+volume+env" target="_blank" rel="noopener">
  <div class="vg-thumb">☸️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">ConfigMaps & Secrets — Mount as Volumes and Env Vars</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~20 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=CKA+storage+section+exam+tips+persistent+volumes" target="_blank" rel="noopener">
  <div class="vg-thumb">🎓<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">CKA Storage Section — Exam Tips & Common Mistakes</p>
    <p class="vg-creator">KodeKloud</p>
    <p class="vg-duration">~15 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+emptyDir+hostPath+volumes+explained" target="_blank" rel="noopener">
  <div class="vg-thumb">📦<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">emptyDir & hostPath Volumes Explained with Demo</p>
    <p class="vg-creator">That DevOps Guy</p>
    <p class="vg-duration">~12 min</p>
  </div>
</a>

</div>

---

## Recommended Viewing

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+secrets+base64+security+encryption+at+rest" target="_blank" rel="noopener">
  <div class="vg-thumb">🔐<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Kubernetes Secrets — Security, Base64, and Encryption at Rest</p>
    <p class="vg-creator">Abhishek Veeramalla</p>
    <p class="vg-duration">~16 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+PVC+reclaim+policy+retain+delete+tutorial" target="_blank" rel="noopener">
  <div class="vg-thumb">☸️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">PV Reclaim Policies — Retain vs Delete Deep Dive</p>
    <p class="vg-creator">Mumshad Mannambeth (Udemy CKA)</p>
    <p class="vg-duration">~10 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+access+modes+ReadWriteOnce+ReadWriteMany+explained" target="_blank" rel="noopener">
  <div class="vg-thumb">🔑<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">PV Access Modes — RWO, ROX, RWX Explained</p>
    <p class="vg-creator">KodeKloud</p>
    <p class="vg-duration">~9 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+volume+expansion+PVC+resize+storageclass" target="_blank" rel="noopener">
  <div class="vg-thumb">📈<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Expanding PVCs — Volume Resize with StorageClass</p>
    <p class="vg-creator">Cloud Native Now</p>
    <p class="vg-duration">~11 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+projected+volumes+secret+configmap+serviceaccount+token" target="_blank" rel="noopener">
  <div class="vg-thumb">🗂️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Projected Volumes — Combine ConfigMap, Secret & SA Token</p>
    <p class="vg-creator">Techno Tim</p>
    <p class="vg-duration">~13 min</p>
  </div>
</a>

</div>

---

## Optional / Deep-Dive

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+CSI+driver+container+storage+interface+explained" target="_blank" rel="noopener">
  <div class="vg-thumb">🔩<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">CSI Drivers — How Kubernetes Talks to Storage Backends</p>
    <p class="vg-creator">Rawkode Academy</p>
    <p class="vg-duration">~25 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+statefulset+volumeClaimTemplate+persistent+storage" target="_blank" rel="noopener">
  <div class="vg-thumb">📊<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">StatefulSet volumeClaimTemplates — Per-Pod Persistent Storage</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~19 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+encryption+at+rest+secrets+EncryptionConfiguration" target="_blank" rel="noopener">
  <div class="vg-thumb">🛡️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Encrypting Kubernetes Secrets at Rest — EncryptionConfiguration</p>
    <p class="vg-creator">CNCF</p>
    <p class="vg-duration">~21 min</p>
  </div>
</a>

</div>

---

> **Note:** All links above search YouTube for the described topic. Because YouTube URLs change and videos are updated regularly, search-based links ensure you always find current, high-quality content rather than stale direct links. Creators listed are the recommended sources to look for in search results.
