# Module 3: Workloads & Scheduling — Video Library

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

## Essential

Start here. These videos cover the core concepts that appear on almost every CKA exam attempt.

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+pod+lifecycle+phases+CKA" data-video-id="lFb_WA-4zTM" target="_blank" rel="noopener">
  <div class="vg-thumb">🚀<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Pod Lifecycle — Phases, restartPolicy & Container States</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <span class="vg-duration">~18 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+deployments+rolling+update+rollback+CKA+exam" data-video-id="mNK14yXIZF4" target="_blank" rel="noopener">
  <div class="vg-thumb">🔄<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Kubernetes Deployments — Rolling Updates, Rollbacks & kubectl rollout</p>
    <p class="vg-creator">KodeKloud</p>
    <span class="vg-duration">~22 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+taints+tolerations+CKA+exam+tutorial" data-video-id="mo8ZaJFJjSU" target="_blank" rel="noopener">
  <div class="vg-thumb">⚠️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Taints & Tolerations Explained — NoSchedule, NoExecute, PreferNoSchedule</p>
    <p class="vg-creator">KodeKloud</p>
    <span class="vg-duration">~14 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+node+affinity+nodeSelector+scheduling+CKA" data-video-id="I3TVjLFQAT8" target="_blank" rel="noopener">
  <div class="vg-thumb">🎯<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Node Affinity vs nodeSelector — Scheduling Pods to Specific Nodes</p>
    <p class="vg-creator">Mumshad Mannambeth</p>
    <span class="vg-duration">~17 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+resource+requests+limits+LimitRange+ResourceQuota+CKA" data-video-id="4QyecOoPsGU" target="_blank" rel="noopener">
  <div class="vg-thumb">📊<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag essential">Essential</span>
    <p class="vg-title">Resource Requests, Limits, LimitRange & ResourceQuota — CKA Deep Dive</p>
    <p class="vg-creator">KodeKloud</p>
    <span class="vg-duration">~20 min</span>
  </div>
</a>

</div>

## Recommended

Solidify your understanding of workload controllers and advanced scheduling patterns.

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+statefulset+tutorial+ordered+pods+persistent+volumes" data-video-id="pPQKAR1pA9U" target="_blank" rel="noopener">
  <div class="vg-thumb">🗄️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">StatefulSets Deep Dive — Ordered Pods, Stable IDs & volumeClaimTemplates</p>
    <p class="vg-creator">TechWorld with Nana</p>
    <span class="vg-duration">~26 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+daemonset+tutorial+log+collection+monitoring+CKA" data-video-id="cdkHFDdBsXE" target="_blank" rel="noopener">
  <div class="vg-thumb">🔍<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">DaemonSets Explained — Deploying Node-Level Agents in Kubernetes</p>
    <p class="vg-creator">That DevOps Guy</p>
    <span class="vg-duration">~13 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+jobs+cronjobs+tutorial+batch+CKA+exam" data-video-id="GGFKhqBzuFo" target="_blank" rel="noopener">
  <div class="vg-thumb">⏰<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">Kubernetes Jobs & CronJobs — Batch Workloads & Cron Syntax</p>
    <p class="vg-creator">KodeKloud</p>
    <span class="vg-duration">~16 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+scheduler+how+it+works+scheduling+algorithm+explained" data-video-id="rDCWxkvPlBs" target="_blank" rel="noopener">
  <div class="vg-thumb">🧩<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">How the Kubernetes Scheduler Works — Filtering, Scoring & Binding</p>
    <p class="vg-creator">Learnk8s</p>
    <span class="vg-duration">~21 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+replicaset+vs+deployment+difference+CKA" data-video-id="6D7iFkESmRo" target="_blank" rel="noopener">
  <div class="vg-thumb">⚙️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag recommended">Recommended</span>
    <p class="vg-title">ReplicaSet vs Deployment — What's the Difference and When to Use Each</p>
    <p class="vg-creator">Abhishek Veeramalla</p>
    <span class="vg-duration">~14 min</span>
  </div>
</a>

</div>

## Optional

Deepen your understanding with these advanced topics and hands-on walkthroughs.

<div class="vg-grid">

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+custom+scheduler+multiple+schedulers+tutorial" data-video-id="tgFRW8FJGZE" target="_blank" rel="noopener">
  <div class="vg-thumb">🔧<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Running Multiple Schedulers in Kubernetes — Custom Scheduler Deployment</p>
    <p class="vg-creator">KodeKloud</p>
    <span class="vg-duration">~18 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+pod+disruption+budget+PDB+workloads+scheduling" data-video-id="3qgSrAFmGPU" target="_blank" rel="noopener">
  <div class="vg-thumb">🛡️<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Pod Disruption Budgets — Protecting Availability During Node Drains</p>
    <p class="vg-creator">That DevOps Guy</p>
    <span class="vg-duration">~12 min</span>
  </div>
</a>

<a class="vg-card" href="https://www.youtube.com/results?search_query=kubernetes+OOMKilled+CPU+throttling+resource+troubleshooting" data-video-id="xfDQHBzgwoQ" target="_blank" rel="noopener">
  <div class="vg-thumb">🔥<div class="vg-play">▶</div></div>
  <div class="vg-meta">
    <span class="vg-tag optional">Optional</span>
    <p class="vg-title">Debugging OOMKilled & CPU Throttling — Understanding Resource Limits in Practice</p>
    <p class="vg-creator">Sysdig</p>
    <span class="vg-duration">~23 min</span>
  </div>
</a>

</div>

---

> **Study tip:** Watch Essential videos before your first lab session. Return to Recommended videos after you have deployed each workload type at least once. Optional videos are best consumed after completing the Quiz and identifying weak spots.
