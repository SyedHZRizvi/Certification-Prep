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

# 🎥 Module 4 Videos: Virtualization & Containers

> **How to use:** If possible, follow along in VirtualBox or Hyper-V at home. Virtualization clicks fast when you spin up your first lab VM.

## ⭐ Essential watching (~55 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Type+1+vs+Type+2+hypervisor+explained" data-video-id="wPB_C7hOY-8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Type 1 vs Type 2 Hypervisor</p>
      <p class="vg-creator">Professor Messer</p>
      <span class="vg-duration">⏱ 9 min · The core split</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=vSphere+ESXi+vCenter+basics+overview" data-video-id="bCDVEfuf7Kg" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">vSphere / ESXi / vCenter Overview</p>
      <p class="vg-creator">VMware community</p>
      <span class="vg-duration">⏱ 14 min · Enterprise vocabulary</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=vMotion+live+migration+how+it+works" data-video-id="0Q_MPVeuWgc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">vMotion / Live Migration Internals</p>
      <p class="vg-creator">VMware community</p>
      <span class="vg-duration">⏱ 12 min · Memory ship + cutover</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=docker+vs+vm+difference+containers+explained" data-video-id="RAaU-Q5LN9s" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Docker vs VM, Containers Explained</p>
      <p class="vg-creator">NetworkChuck</p>
      <span class="vg-duration">⏱ 14 min · Kernel-sharing visualized</span>
    </div>
  </a>
</div>

## 📚 Recommended (~40 min)

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Hyper-V+Generation+1+vs+Generation+2+VM" data-video-id="umxi6AHPtW8" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Hyper-V Gen 1 vs Gen 2</p>
      <p class="vg-creator">Andy Malone MVP</p>
      <span class="vg-duration">⏱ 11 min · BIOS vs UEFI VM</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Proxmox+VE+install+walkthrough+beginner" data-video-id="jMlo1m7Op7E" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Proxmox VE Install, Beginner</p>
      <p class="vg-creator">Lawrence Systems</p>
      <span class="vg-duration">⏱ 15 min · KVM HCI for home lab</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+pods+services+deployments+101" data-video-id="X48VuDVv0do" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Kubernetes 101, Pods, Services, Deployments</p>
      <p class="vg-creator">TechWorld with Nana</p>
      <span class="vg-duration">⏱ 14 min · K8s conceptual map</span>
    </div>
  </a>
</div>

## 🍿 Optional deep dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=VMware+DRS+HA+anti-affinity+rules" data-video-id="i4pR8SsqS3g" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">DRS, HA, Anti-Affinity Hands-On</p>
      <p class="vg-creator">VMware community</p>
      <span class="vg-duration">⏱ 18 min · Cluster mechanics</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=container+namespaces+cgroups+how+docker+works" data-video-id="8fi7uSYlOdc" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">How Docker Works, Namespaces + cgroups</p>
      <p class="vg-creator">Liz Rice</p>
      <span class="vg-duration">⏱ 25 min · Containers from scratch</span>
    </div>
  </a>
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Broadcom+VMware+licensing+change+impact+2024" data-video-id="1d-hZOJCRrU" target="_blank" rel="noopener">
    <div class="vg-thumb"><span>🎬</span><div class="vg-play">▶</div></div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">VMware Broadcom Licensing Shake-Up</p>
      <p class="vg-creator">community analyses</p>
      <span class="vg-duration">⏱ 20 min · Industry context</span>
    </div>
  </a>
</div>

---

## ✅ After watching

Answer these in your notebook:

1. Type 1 vs Type 2, which is for production and why?
2. Name 4 things that have to be true for vMotion to work between two ESXi hosts.
3. Snapshot vs backup, give two reasons snapshots are NOT a backup.
4. Container vs VM, what's the single most important architectural difference?
5. Anti-affinity rule, give one concrete example.
6. Kubernetes, what's a Pod?

If you can answer all 6, you're ready for the [Quiz](./Quiz.md).
