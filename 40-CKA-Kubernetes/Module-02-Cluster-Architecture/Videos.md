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

# 🎥 Module 2 Videos: Cluster Architecture & Installation

> **How to use:** Start with the Essential section — these are the videos that most closely mirror what the CKA exam tests. Watch the Recommended section to solidify your mental model. Dive into Optional if you want to understand the internals deeply enough to answer any question the exam throws at you. After each video, close the tab and try to redraw the architecture from memory.

---

## ⭐ Essential Watching

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+Architecture+explained+KodeKloud+CKA" data-video-id="umXEmn3cMkY" target="_blank" rel="noopener">
    <div class="vg-thumb">
      <img src="https://i.ytimg.com/vi/umXEmn3cMkY/hqdefault.jpg" alt="Kubernetes Architecture KodeKloud" loading="lazy" onerror="this.style.display='none'">
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kubernetes Architecture Explained — CKA Course</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~18 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=kubeadm+install+kubernetes+cluster+step+by+step+KodeKloud" data-video-id="Ro2qeYeisZQ" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #0ea5e9, #6366f1);">
      <span>☸</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Setting Up a Kubernetes Cluster with kubeadm</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~25 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=etcd+backup+restore+kubernetes+CKA+etcdctl" data-video-id="ZdgmJYT4Xfk" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #dc2626, #9333ea);">
      <span>💾</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">etcd Backup and Restore — CKA Exam</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~15 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+Explained+in+6+Minutes+Nana" data-video-id="TlHvYWVUZyc" target="_blank" rel="noopener">
    <div class="vg-thumb">
      <img src="https://i.ytimg.com/vi/TlHvYWVUZyc/hqdefault.jpg" alt="Kubernetes explained TechWorld with Nana" loading="lazy" onerror="this.style.display='none'">
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kubernetes Explained in 6 Minutes</p>
      <p class="vg-creator">TechWorld with Nana</p>
      <p class="vg-duration">~6 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+Architecture+Course+Beginner+Nana+full" data-video-id="X48VuDVv0do" target="_blank" rel="noopener">
    <div class="vg-thumb">
      <img src="https://i.ytimg.com/vi/X48VuDVv0do/hqdefault.jpg" alt="Kubernetes Full Course TechWorld Nana" loading="lazy" onerror="this.style.display='none'">
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag essential">Essential</span>
      <p class="vg-title">Kubernetes Full Course — Architecture Deep Dive (Chapters 1–3)</p>
      <p class="vg-creator">TechWorld with Nana</p>
      <p class="vg-duration">First 45 min recommended</p>
    </div>
  </a>
</div>

---

## 📚 Recommended

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+control+plane+worker+node+components+IBM+Technology" data-video-id="90kZRyPcRZw" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #1d4ed8, #0ea5e9);">
      <span>🏛️</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Kubernetes Architecture: Control Plane vs Worker Nodes</p>
      <p class="vg-creator">IBM Technology</p>
      <p class="vg-duration">~8 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+TLS+certificates+PKI+explained+CKA" data-video-id="gXz4cq3PKdg" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #15803d, #4f46e5);">
      <span>🔐</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">TLS Certificates and PKI in Kubernetes — CKA Prep</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~22 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+static+pods+explained+manifest+directory" data-video-id="kgOfkBhDyL0" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #92400e, #b45309);">
      <span>📄</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Static Pods in Kubernetes — How the Control Plane Bootstraps</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~12 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+cluster+installation+kubeadm+Kunal+Kushwaha" data-video-id="KVON1lMkSqk" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #7c3aed, #c026d3);">
      <span>⚙️</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Complete Kubernetes Cluster Installation with kubeadm</p>
      <p class="vg-creator">Kunal Kushwaha</p>
      <p class="vg-duration">~35 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=Kubernetes+high+availability+HA+cluster+stacked+external+etcd" data-video-id="rQOrNRqSMEI" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #0f766e, #0891b2);">
      <span>🏗️</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag recommended">Recommended</span>
      <p class="vg-title">Kubernetes High Availability — Stacked vs External etcd</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~18 min</p>
    </div>
  </a>
</div>

---

## 🍿 Optional Deep Dives

<div class="vg-grid" markdown="0">
  <a class="vg-card" href="https://www.youtube.com/results?search_query=etcd+raft+consensus+algorithm+explained+distributed" data-video-id="vYwT__nIXWY" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #991b1b, #7c3aed);">
      <span>🔬</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">etcd and Raft Consensus — How Distributed State Really Works</p>
      <p class="vg-creator">IBM Technology</p>
      <p class="vg-duration">~14 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=containerd+container+runtime+interface+CRI+Kubernetes+Rawkode" data-video-id="m1_IXhfa30k" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #1e3a5f, #2563eb);">
      <span>📦</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">containerd and the Container Runtime Interface (CRI) Deep Dive</p>
      <p class="vg-creator">Rawkode (David McKay)</p>
      <p class="vg-duration">~30 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=kubelet+internals+how+it+works+Kubernetes+deep+dive" data-video-id="F-p_7XguqXk" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #166534, #15803d);">
      <span>🔩</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Inside the kubelet — Node Agent Internals</p>
      <p class="vg-creator">Kunal Kushwaha</p>
      <p class="vg-duration">~25 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+certificate+signing+request+CSR+approval+CKA" data-video-id="B5CbVBmGjrw" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #78350f, #d97706);">
      <span>📜</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Kubernetes Certificate Signing Requests — Approving Node CSRs</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~10 min</p>
    </div>
  </a>

  <a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+upgrade+kubeadm+step+by+step+CKA+exam" data-video-id="z_w3me8tmJA" target="_blank" rel="noopener">
    <div class="vg-thumb" style="background: linear-gradient(135deg, #1e1b4b, #4338ca);">
      <span>⬆️</span>
      <div class="vg-play">▶</div>
    </div>
    <div class="vg-meta">
      <span class="vg-tag optional">Optional</span>
      <p class="vg-title">Upgrading a Kubernetes Cluster with kubeadm — CKA Walkthrough</p>
      <p class="vg-creator">KodeKloud / Mumshad Mannambeth</p>
      <p class="vg-duration">~20 min</p>
    </div>
  </a>
</div>

---

## 📺 Best Channels for CKA Prep

| Channel | Strength | Best For |
|---|---|---|
| **KodeKloud / Mumshad Mannambeth** | Most comprehensive CKA course on YouTube; lab-driven | Every exam domain; primary resource |
| **TechWorld with Nana** | Crystal-clear conceptual explanations; excellent production quality | Building mental models; architecture understanding |
| **Kunal Kushwaha** | Hands-on labs; real-world cluster setup | Installation and configuration walkthroughs |
| **IBM Technology** | Short, authoritative explainers (5–15 min) | Quick concept reinforcement between labs |
| **Rawkode / David McKay** | Deep CNCF ecosystem knowledge; low-level internals | Container runtimes, OCI specs, advanced debugging |

> **Note:** KodeKloud offers a full paid CKA course with integrated labs (killer.sh-style). If you can afford one resource, that is it. The YouTube content above is free and covers roughly 70% of the same material.

---

## 🤔 After Watching — Reflection Questions

Work through these after completing the Essential videos. Close everything and answer from memory. If you cannot answer a question, rewatch the relevant segment.

1. **Draw it:** Without looking at any notes, sketch the Kubernetes control plane. Label every component, its port number, and what it talks to.

2. **Trace a request:** What happens, step by step, when you run `kubectl create deployment nginx --image=nginx`? Name every component the request passes through before a container starts.

3. **The etcd question:** Why does the apiserver get exclusive access to etcd? What would break if the scheduler wrote directly to etcd?

4. **Static pods:** If the kube-apiserver pod crashes and the kubelet restarts it from the static manifest, does the new pod appear in `kubectl get pods -n kube-system`? Why or why not?

5. **HA design:** Your manager says "we need Kubernetes HA with the absolute minimum number of servers." How many servers do you recommend, and what runs on each one?

6. **Backup scenario:** Your etcd snapshot was taken at 2:00 PM. A developer accidentally deleted a namespace at 3:00 PM. You restore the snapshot at 3:15 PM. What data, if any, is permanently lost?

7. **Runtime failure:** A worker node's kubelet is running but no pods are starting. `crictl ps` shows no containers. What are the most likely causes and how do you diagnose them?

8. **Certificate expiry:** `kubectl get nodes` starts returning "certificate has expired or is not yet valid." What is the fastest path to resolution without rebuilding the cluster?
