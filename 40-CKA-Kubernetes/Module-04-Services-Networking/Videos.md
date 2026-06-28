# Module 4 — Video Resources: Services & Networking

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

---

## Essential — Watch These First

<div class="vg-grid" markdown="0">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+services+clusterip+nodeport+loadbalancer+explained" data-video-id="T4Z7visMM4E" target="_blank" rel="noopener">
  <div class="vg-thumb">
    ☎️
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Services Explained — ClusterIP, NodePort, LoadBalancer</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~20 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+networking+explained+pod+network+cni" data-video-id="EkAzMGldC5M" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🌐
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Networking Explained — Pod IPs, CNI, Flat Network Model</p>
    <p class="vg-creator">Tech Tutorials with Piyush</p>
    <p class="vg-duration">~18 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+ingress+explained+nginx+ingress+controller" data-video-id="GhZi4DxaxxE" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🚪
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Ingress Explained — Host & Path Routing with IngressController</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~32 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+network+policy+tutorial+CKA" data-video-id="eVtnevr3Rao" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🛡️
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes NetworkPolicy — Default Deny, Ingress & Egress Rules</p>
    <p class="vg-creator">Tech Tutorials with Piyush</p>
    <p class="vg-duration">~22 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+DNS+coredns+service+discovery+tutorial" data-video-id="4QyecOoPsGU" target="_blank" rel="noopener">
  <div class="vg-thumb">
    📖
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes DNS & CoreDNS — Service Discovery FQDN Format</p>
    <p class="vg-creator">DevOps Gathering</p>
    <p class="vg-duration">~14 min</p>
  </div>
</a>

</div>

---

## Recommended — Solidify Your Understanding

<div class="vg-grid" markdown="0">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+kube-proxy+iptables+ipvs+explained" data-video-id="lkXLsD6-4jA" target="_blank" rel="noopener">
  <div class="vg-thumb">
    ⚙️
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">How kube-proxy Works — iptables vs IPVS Mode Deep Dive</p>
    <p class="vg-creator">The Learning Channel</p>
    <p class="vg-duration">~25 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=calico+flannel+cilium+kubernetes+CNI+comparison" data-video-id="6v_BDHIgOY8" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🔌
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">CNI Plugins Compared — Calico, Flannel & Cilium Explained</p>
    <p class="vg-creator">ByteByteGo / various</p>
    <p class="vg-duration">~15 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+ingress+TLS+termination+tutorial" data-video-id="xwiRjimKW9c" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🔒
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Kubernetes Ingress with TLS — Cert-Manager & HTTPS Setup</p>
    <p class="vg-creator">Anton Putra</p>
    <p class="vg-duration">~28 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+endpointslices+endpoints+explained" data-video-id="6q1ifgeEoGQ" target="_blank" rel="noopener">
  <div class="vg-thumb">
    📋
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Kubernetes Endpoints & EndpointSlices — Service Routing Internals</p>
    <p class="vg-creator">CodeLucky</p>
    <p class="vg-duration">~12 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=CKA+exam+services+networking+practice+questions" data-video-id="Zm5sy6otLGc" target="_blank" rel="noopener">
  <div class="vg-thumb">
    📝
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">CKA Services & Networking — Exam Practice Walkthrough</p>
    <p class="vg-creator">kubernetesWay</p>
    <p class="vg-duration">~35 min</p>
  </div>
</a>

</div>

---

## Optional — Go Deeper

<div class="vg-grid" markdown="0">

<a class="vg-card" href="https://www.youtube.com/results?search_query=cilium+ebpf+kubernetes+networking+deep+dive" data-video-id="u8HKg5pENj4" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🔬
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Cilium & eBPF — The Future of Kubernetes Networking</p>
    <p class="vg-creator">KubeCon / CNCF</p>
    <p class="vg-duration">~40 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+service+mesh+istio+introduction" data-video-id="16fgzklcF7Y" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🕸️
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Service Mesh & Istio — Beyond Kubernetes Native Networking</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <p class="vg-duration">~45 min</p>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+network+policy+visualization+editor" data-video-id="nLOwKxk3Gi8" target="_blank" rel="noopener">
  <div class="vg-thumb">
    🗺️
    <div class="vg-play">▶</div>
  </div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">NetworkPolicy Visual Editor — Understanding AND vs OR Selectors</p>
    <p class="vg-creator">CodeLucky</p>
    <p class="vg-duration">~10 min</p>
  </div>
</a>

</div>

---

> **Watching order:** Start with the five Essential videos before the quiz. If you struggle with NetworkPolicies, the Recommended KodeKloud practice walkthrough is the highest-leverage follow-up.
