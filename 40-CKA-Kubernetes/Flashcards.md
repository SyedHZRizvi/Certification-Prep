<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#6366f1;color:#6366f1}
.fc-btn.fc-primary{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(99,102,241,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#eef0fb;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #e0e7ff;box-shadow:0 4px 18px rgba(99,102,241,.12)}
.fc-front{background:linear-gradient(135deg,#eef2ff 0%,#f5f3ff 100%)}
.fc-back{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;transform:rotateY(180deg)}
.fc-label{position:absolute;top:.85rem;left:1rem;font-size:.7rem;letter-spacing:.12em;font-weight:700;text-transform:uppercase;opacity:.65}
.fc-known{position:absolute;top:.85rem;right:1rem;font-size:1.1rem;color:#10b981;font-weight:700}
.fc-back .fc-known{color:#86efac}
.fc-text{font-size:1.18rem;line-height:1.55;font-weight:500;max-width:100%;word-wrap:break-word}
.fc-back .fc-text{font-weight:500}
.fc-hint{position:absolute;bottom:.85rem;left:0;right:0;font-size:.75rem;opacity:.55;letter-spacing:.05em}
.fc-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}
.fc-actions .fc-btn{flex:1 1 auto;min-width:108px}
.fc-empty{text-align:center;padding:2rem;color:#6b7280}
.fc-source-hidden{display:none !important}
@media (max-width:640px){
  .fc-app{margin:1rem .5rem 1.5rem;padding:1rem;border-radius:10px}
  .fc-controls{flex-direction:column;align-items:stretch}
  .fc-controls-left,.fc-controls-right{justify-content:space-between}
  .fc-select,.fc-counter{width:100%;text-align:center}
  .fc-card{min-height:220px}
  .fc-face{padding:1.6rem 1rem}
  .fc-text{font-size:1.05rem}
  .fc-actions .fc-btn{flex:1 1 45%;min-width:0;font-size:.85rem;padding:.55rem .4rem}
}
</style>

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards">
  <div class="fc-controls">
    <div class="fc-controls-left">
      <select class="fc-select" id="fc-section" aria-label="Filter by section"><option value="__all__">All Sections</option></select>
    </div>
    <div class="fc-controls-right">
      <span class="fc-counter" id="fc-counter">Card 0 of 0</span>
      <button class="fc-btn fc-ghost" id="fc-reset" title="Clear known-card progress">Reset progress</button>
    </div>
  </div>
  <div class="fc-progress" aria-hidden="true"><div class="fc-progress-bar" id="fc-progress-bar"></div></div>
  <div class="fc-card-wrap">
    <div class="fc-card" id="fc-card" role="button" tabindex="0" aria-label="Flashcard. Click or press space to flip.">
      <div class="fc-face fc-front">
        <span class="fc-label">Question</span>
        <span class="fc-known" id="fc-known-front" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-question">Loading flashcards…</div>
        <span class="fc-hint">Click to flip</span>
      </div>
      <div class="fc-face fc-back">
        <span class="fc-label">Answer</span>
        <span class="fc-known" id="fc-known-back" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-answer"></div>
        <span class="fc-hint">Click to flip back</span>
      </div>
    </div>
  </div>
  <div class="fc-actions">
    <button class="fc-btn" id="fc-prev" aria-label="Previous card">&larr; Previous</button>
    <button class="fc-btn fc-success" id="fc-got" aria-label="Mark as known and advance">&#10003; Got it</button>
    <button class="fc-btn fc-danger" id="fc-tryagain" aria-label="Mark as not known and advance">&#10007; Try again</button>
    <button class="fc-btn" id="fc-shuffle" aria-label="Shuffle cards">&#128256; Shuffle</button>
    <button class="fc-btn fc-primary" id="fc-next" aria-label="Next card">Next &rarr;</button>
  </div>
</div>

<script>
(function(){
  var STORAGE_KEY = 'fc-progress-cka';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var container = app.parentNode;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = [];
    var node;
    while((node = walker.nextNode())){
      if(node.tagName === 'H2'){
        var h2text = (node.textContent || '').trim();
        if(h2text){
          currentSection = h2text;
          if(!seen[h2text]){ seen[h2text] = true; sections.push(h2text); }
          sourceEls.push(node);
        }
        pendingQ = null; pendingQEl = null;
        continue;
      }
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
        var qBody = fullText.replace(/^Q:\s*/i, '').trim();
        pendingQ = { section: currentSection, q: qBody };
        pendingQEl = node;
        sourceEls.push(node);
      } else if(marker.indexOf('A:') === 0 && pendingQ){
        var aBody = fullText.replace(/^A:\s*/i, '').trim();
        pendingQ.a = aBody;
        cards.push(pendingQ);
        sourceEls.push(node);
        pendingQ = null; pendingQEl = null;
      }
    }
    if(cards.length === 0){
      document.getElementById('fc-question').textContent = 'No flashcards found. The source content is shown below.';
      return;
    }
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
    var allH2 = document.querySelectorAll('h2');
    allH2.forEach(function(h){ if(!h.classList.contains('fc-source-hidden') && h.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) h.classList.add('fc-source-hidden'); });
    var allOL = document.querySelectorAll('ol, ul');
    allOL.forEach(function(l){ if(l.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) l.classList.add('fc-source-hidden'); });
    var trailingP = document.querySelectorAll('p');
    trailingP.forEach(function(p){
      if(p.classList.contains('fc-source-hidden')) return;
      if(p.closest('.fc-app')) return;
      if(p.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) p.classList.add('fc-source-hidden');
    });
    var trailingBQ = document.querySelectorAll('blockquote');
    trailingBQ.forEach(function(bq){ if(bq.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) bq.classList.add('fc-source-hidden'); });
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });
    var known = {};
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw) known = JSON.parse(raw) || {};
    } catch(e){ known = {}; }
    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }
    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';
    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0;
      render();
    }
    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0;
      render();
    }
    var cardEl = document.getElementById('fc-card');
    var qEl = document.getElementById('fc-question');
    var aEl = document.getElementById('fc-answer');
    var counterEl = document.getElementById('fc-counter');
    var progressBar = document.getElementById('fc-progress-bar');
    var knownFront = document.getElementById('fc-known-front');
    var knownBack = document.getElementById('fc-known-back');
    function render(){
      cardEl.classList.remove('fc-flipped');
      if(deck.length === 0){
        qEl.textContent = 'No cards in this section.';
        aEl.textContent = '';
        counterEl.textContent = 'Card 0 of 0';
        progressBar.style.width = '0%';
        knownFront.textContent = ''; knownBack.textContent = '';
        return;
      }
      if(idx < 0) idx = 0;
      if(idx >= deck.length) idx = deck.length - 1;
      var c = deck[idx];
      qEl.textContent = c.q;
      aEl.textContent = c.a;
      counterEl.textContent = 'Card ' + (idx + 1) + ' of ' + deck.length;
      var knownCount = deck.reduce(function(acc, cc){ return acc + (known[cardId(cc)] ? 1 : 0); }, 0);
      var pct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;
      progressBar.style.width = pct + '%';
      var mark = known[cardId(c)] ? '✓' : '';
      knownFront.textContent = mark; knownBack.textContent = mark;
    }
    function flip(){ cardEl.classList.toggle('fc-flipped'); }
    function next(){ if(deck.length === 0) return; idx = (idx + 1) % deck.length; render(); }
    function prev(){ if(deck.length === 0) return; idx = (idx - 1 + deck.length) % deck.length; render(); }
    function markKnown(val){
      if(deck.length === 0) return;
      var c = deck[idx];
      if(val) known[cardId(c)] = 1;
      else delete known[cardId(c)];
      saveKnown();
      next();
    }
    function resetProgress(){
      if(!confirm('Clear all "Got it" progress for this deck?')) return;
      known = {};
      saveKnown();
      render();
    }
    cardEl.addEventListener('click', flip);
    cardEl.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); }
      else if(e.key === 'ArrowRight'){ e.preventDefault(); next(); }
      else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
    });
    document.getElementById('fc-next').addEventListener('click', next);
    document.getElementById('fc-prev').addEventListener('click', prev);
    document.getElementById('fc-got').addEventListener('click', function(){ markKnown(true); });
    document.getElementById('fc-tryagain').addEventListener('click', function(){ markKnown(false); });
    document.getElementById('fc-shuffle').addEventListener('click', shuffle);
    document.getElementById('fc-reset').addEventListener('click', resetProgress);
    sectionSel.addEventListener('change', function(){ sectionFilter = sectionSel.value; applyFilter(); });
    render();
  });
})();
</script>

# 🃏 CKA Master Flashcards

## Container Foundations & Docker

**Q:** What is the difference between a Docker image and a Docker container?

**A:** An image is a read-only, layered template built from a Dockerfile. A container is a running instance of an image — it adds a thin writable layer on top. Many containers can run from the same image simultaneously.

**Q:** What does the ENTRYPOINT instruction do in a Dockerfile, and how does it differ from CMD?

**A:** ENTRYPOINT sets the executable that always runs when the container starts; it cannot be overridden by arguments passed to docker run (only replaced with --entrypoint). CMD provides default arguments to ENTRYPOINT, or a default command if no ENTRYPOINT is set. CMD is overridden by any arguments passed after the image name in docker run.

**Q:** What happens to data written inside a container's writable layer when the container is deleted?

**A:** The data is permanently lost. Container writable layers are ephemeral and tied to the container's lifecycle. Use named volumes or bind mounts to persist data beyond a container's lifetime.

**Q:** What is a multi-stage Docker build and why is it used?

**A:** A multi-stage build uses multiple FROM instructions in a single Dockerfile. Early stages compile or build the application; the final stage copies only the built artifact into a minimal base image, discarding build tools. This produces smaller, more secure production images without requiring separate Dockerfiles.

**Q:** Which Linux kernel features underpin container isolation?

**A:** Namespaces (isolate process, network, mount, UTS, IPC, user views) and cgroups (limit and account for CPU, memory, I/O, and other resources). Together they create the illusion of an isolated system without a full virtual machine.

**Q:** What does docker build -t myapp:v1 . do?

**A:** Builds a Docker image from the Dockerfile in the current directory (.), using the build context of the current directory, and tags the resulting image as myapp:v1. The tag format is name:version.

**Q:** What is a container runtime, and which runtime does Kubernetes use by default in modern versions?

**A:** A container runtime is the low-level software that pulls images, creates, starts, and stops containers. Kubernetes uses the Container Runtime Interface (CRI) to talk to runtimes. containerd (formerly via Docker, now directly) and CRI-O are the two most common runtimes; containerd is the default in kubeadm clusters since Kubernetes 1.24+.

## Cluster Architecture & Installation

**Q:** What does etcd store in a Kubernetes cluster?

**A:** All cluster state — API objects, node registrations, pod assignments, Secrets, ConfigMaps, and RBAC policies. It is the single source of truth for the entire cluster. The API server is the only component that reads and writes etcd directly.

**Q:** What are the four control plane components and what does each do?

**A:** kube-apiserver: the REST gateway; all components communicate through it. etcd: key-value store for cluster state. kube-scheduler: assigns pods to nodes based on resources and constraints. kube-controller-manager: runs controllers (ReplicaSet, Node, Endpoints, etc.) that reconcile desired vs actual state.

**Q:** What does the kubelet do on each node?

**A:** The kubelet is an agent that watches the API server for PodSpecs assigned to its node, ensures those pods are running and healthy, reports node and pod status back to the API server, and manages pod lifecycle events (start, stop, restart).

**Q:** What is kube-proxy and what does it manage?

**A:** kube-proxy runs on every node and maintains network rules (iptables or IPVS) that implement Service ClusterIPs and NodePorts. When traffic hits a Service IP, kube-proxy's rules route it to one of the backing pod IPs.

**Q:** What command checks the expiry of all kubeadm-managed certificates?

**A:** kubeadm certs check-expiration — prints a table of all certificates with their expiry dates, the authority that signed them, and whether they are externally managed.

**Q:** What is a static pod and how is it managed?

**A:** A static pod is defined by a YAML manifest file placed in a directory watched by the kubelet (default: /etc/kubernetes/manifests/). The kubelet creates and restarts the pod directly without involving the API server. The control plane components (apiserver, scheduler, controller-manager, etcd) run as static pods in kubeadm clusters.

**Q:** What is the NodePort range in a default Kubernetes cluster?

**A:** 30000–32767. Any Service of type NodePort or LoadBalancer gets an automatically assigned port in this range (or you can specify one manually within the range).

**Q:** How do you generate a new kubeadm join token after the original has expired?

**A:** Run kubeadm token create --print-join-command on the control plane. This generates a new bootstrap token and prints the complete kubeadm join command with the token and CA certificate hash, ready to run on the worker node.

**Q:** What flag must be added to kubeadm join to promote a node to a control plane replica?

**A:** --control-plane. You also need --certificate-key with the key that was generated during kubeadm init --upload-certs, which decrypts the control plane certificates uploaded to the cluster.

**Q:** What is the purpose of the --pod-network-cidr flag in kubeadm init?

**A:** It sets the IP range allocated to pod networks. This range is passed to the CNI plugin (e.g., Flannel, Calico) so it knows what address space to use for pod IPs. The value must not overlap with node CIDRs or Service CIDRs.

**Q:** What is a kubeconfig file and where does kubectl look for it by default?

**A:** A kubeconfig file contains cluster endpoints, CA certificates, and user credentials (client certificates or tokens) that kubectl uses to authenticate and route API requests. kubectl looks for it at ~/.kube/config by default, or at the path set in the KUBECONFIG environment variable.

## Workloads & Scheduling

**Q:** What is the difference between a Deployment and a StatefulSet?

**A:** A Deployment manages stateless pods — pods are interchangeable, have random names, share PVCs if any, and can be scaled or replaced in any order. A StatefulSet manages stateful pods — pods get stable network identities (pod-0, pod-1), ordered startup/teardown, and each pod gets its own PVC from a volumeClaimTemplate.

**Q:** What does maxSurge: 1 mean in a RollingUpdate Deployment strategy?

**A:** During a rolling update, at most 1 extra pod above the desired replica count can exist simultaneously. Combined with maxUnavailable: 0, this means the update creates one new pod, waits for it to be Ready, then terminates one old pod — maintaining full capacity throughout.

**Q:** How do you roll back a Deployment to its previous version?

**A:** kubectl rollout undo deployment/<name> — this reverts to the previous recorded revision. To roll back to a specific revision: kubectl rollout undo deployment/<name> --to-revision=<n>. View revision history with kubectl rollout history deployment/<name>.

**Q:** What is a DaemonSet used for?

**A:** A DaemonSet ensures exactly one pod runs on every node (or a subset of nodes matching a selector). It is used for node-level infrastructure like log collectors (Fluentd), monitoring agents (node-exporter), and network plugins (kube-proxy, CNI agents).

**Q:** What is the difference between nodeSelector and node affinity?

**A:** nodeSelector is a simple key-value map — the pod is only scheduled on nodes with all the specified labels. Node affinity (spec.affinity.nodeAffinity) supports richer expressions: In, NotIn, Exists, DoesNotExist operators, and two modes: requiredDuringSchedulingIgnoredDuringExecution (hard) and preferredDuringSchedulingIgnoredDuringExecution (soft).

**Q:** What is a taint and what are the three taint effects?

**A:** A taint is applied to a node to repel pods that do not tolerate it. The three effects are: NoSchedule (pod will not be scheduled on the node), PreferNoSchedule (scheduler tries to avoid the node but not guaranteed), and NoExecute (existing pods on the node are evicted unless they tolerate the taint).

**Q:** What is a PodDisruptionBudget (PDB)?

**A:** A PDB limits how many pods of a set can be down simultaneously during voluntary disruptions (node drains, cluster upgrades). It specifies minAvailable (minimum pods that must stay up) or maxUnavailable (maximum pods that can be down). It does not protect against involuntary disruptions (node failure).

**Q:** What resource type runs a task on a schedule, like a cron job?

**A:** CronJob. It creates Jobs at specified intervals using standard cron syntax (e.g., "0 2 * * *" for 2am daily). Each CronJob execution creates a Job object, which in turn creates pod(s) to run the task.

**Q:** What does restartPolicy: OnFailure do on a pod?

**A:** The kubelet restarts the container within the same pod if it exits with a non-zero exit code. It does not restart if the container exits successfully (exit code 0). This is appropriate for Jobs and batch workloads. Deployments always use restartPolicy: Always.

**Q:** How does a HorizontalPodAutoscaler (HPA) decide to scale?

**A:** The HPA controller periodically checks metrics (CPU utilization, memory, or custom metrics) against the target value. If current utilization exceeds the target, it increases replicas (up to maxReplicas). If utilization drops below target, it decreases replicas (down to minReplicas). Metrics Server must be installed for CPU/memory HPA.

## Services & Networking

**Q:** What are the four Service types in Kubernetes and what does each expose?

**A:** ClusterIP: internal-only virtual IP, reachable only within the cluster. NodePort: opens a port on every node's external IP (range 30000–32767), also creates a ClusterIP. LoadBalancer: provisions a cloud load balancer and assigns an external IP, also creates NodePort and ClusterIP. ExternalName: maps the Service to a DNS CNAME (no proxying, no selector).

**Q:** How does Kubernetes DNS resolve a Service FQDN?

**A:** The FQDN format is <service>.<namespace>.svc.<cluster-domain> where cluster-domain defaults to cluster.local. CoreDNS, running in kube-system, answers queries for these names by returning the Service's ClusterIP. Pods have their /etc/resolv.conf configured with the cluster DNS server and search domains so short names like my-service resolve automatically.

**Q:** What does an empty podSelector ({}) in a NetworkPolicy mean?

**A:** It selects all pods in the namespace where the policy is applied. An empty podSelector is commonly used in a default-deny policy to isolate all pods from ingress or egress traffic.

**Q:** What is the difference between Ingress and a Service?

**A:** A Service operates at Layer 4 (TCP/UDP) and provides stable access to pods. An Ingress operates at Layer 7 (HTTP/HTTPS) and provides host-based and path-based routing, TLS termination, and name-based virtual hosting — all using a single external IP via an Ingress controller (e.g., nginx, Traefik).

**Q:** What happens to ingress traffic when no NetworkPolicy selects a pod?

**A:** By default, pods are non-isolated — all ingress and egress traffic is allowed. A pod becomes isolated only when at least one NetworkPolicy selects it, at which point only traffic explicitly allowed by a matching policy is permitted.

**Q:** What port does the Kubernetes API server listen on by default?

**A:** Port 6443 (HTTPS). The deprecated insecure port 8080 was removed in Kubernetes 1.20. All communication with the API server uses TLS.

**Q:** What is a headless Service and when would you use one?

**A:** A headless Service has clusterIP: None. Instead of a single virtual IP, DNS returns the individual pod IPs directly. Used with StatefulSets to give each pod a stable DNS name (pod-0.my-service.namespace.svc.cluster.local) so pods can discover and address each other individually, as needed for databases and peer-to-peer applications.

**Q:** What does the from block in a NetworkPolicy ingress rule support?

**A:** Three selector types: podSelector (select pods by label within the same namespace), namespaceSelector (select pods in namespaces matching a label), and ipBlock (select IP address ranges using CIDR notation). Multiple entries in the from array are OR'd; multiple conditions within a single entry are AND'd.

**Q:** What is the default DNS search domain added to pod /etc/resolv.conf in a kubeadm cluster?

**A:** <namespace>.svc.cluster.local, svc.cluster.local, and cluster.local are added as search domains. This allows pods to resolve my-service (short), my-service.other-namespace, and my-service.other-namespace.svc.cluster.local without specifying the full FQDN.

## Storage

**Q:** What is the difference between a PersistentVolume (PV) and a PersistentVolumeClaim (PVC)?

**A:** A PV is a cluster-level storage resource provisioned by an admin (or dynamically by a StorageClass provisioner). A PVC is a namespace-level request for storage by a user — it specifies size, access mode, and optionally a StorageClass. Kubernetes binds a PVC to a matching PV.

**Q:** What are the three PersistentVolume access modes?

**A:** ReadWriteOnce (RWO): mounted read-write by a single node. ReadOnlyMany (ROX): mounted read-only by many nodes. ReadWriteMany (RWX): mounted read-write by many nodes. Not all storage backends support all modes — hostPath and local volumes only support RWO.

**Q:** What happens to a PersistentVolume when the PVC that bound it is deleted?

**A:** It depends on the PV's reclaimPolicy: Retain — the PV is kept with Released status; the data is preserved but it cannot be rebound until manually reclaimed. Delete — the PV and underlying storage (e.g., cloud disk) are deleted automatically. Recycle — deprecated; wipes the volume with rm -rf and makes it Available again.

**Q:** How does dynamic provisioning work with a StorageClass?

**A:** When a PVC references a StorageClass by name (or uses the default), the StorageClass provisioner automatically creates a PV matching the PVC's request. The provisioner (e.g., aws-ebs, gce-pd, nfs-subdir) communicates with the cloud or storage system to create the actual volume. No manual PV creation is needed.

**Q:** How do you mark a StorageClass as the default?

**A:** Add the annotation storageclass.kubernetes.io/is-default-class: "true" to the StorageClass object. PVCs that do not specify a storageClassName will be bound to the default StorageClass. Only one StorageClass should have this annotation.

**Q:** What is the difference between a ConfigMap volume and a Secret volume?

**A:** Both mount data as files in the pod's filesystem. ConfigMap volumes mount non-sensitive configuration data. Secret volumes mount base64-decoded secret data, and Kubernetes stores Secrets in etcd (optionally encrypted at rest). Secret files are backed by a tmpfs (in-memory) filesystem on the node by default, not written to disk.

**Q:** What field in a pod spec mounts a PVC into a container?

**A:** Two fields work together: spec.volumes defines a volume entry with a persistentVolumeClaim.claimName referencing the PVC name. spec.containers[].volumeMounts references the volume by name and specifies the mountPath inside the container.

## Security & RBAC

**Q:** What is the difference between a Role and a ClusterRole?

**A:** A Role is namespace-scoped — it grants permissions only within the namespace where it is created. A ClusterRole is cluster-scoped — it can grant permissions on cluster-wide resources (nodes, PVs, namespaces) or be used as a template bound in specific namespaces via a RoleBinding.

**Q:** What is the difference between a RoleBinding and a ClusterRoleBinding?

**A:** A RoleBinding grants permissions within a specific namespace — it can reference either a Role or a ClusterRole. A ClusterRoleBinding grants permissions cluster-wide — it can only reference a ClusterRole. Using a ClusterRole with a RoleBinding restricts its permissions to the binding's namespace.

**Q:** What command checks whether a ServiceAccount or user has a specific permission?

**A:** kubectl auth can-i <verb> <resource> --as=<user> --namespace=<ns> — for example: kubectl auth can-i delete pods --as=system:serviceaccount:default:my-sa -n production. Returns "yes" or "no".

**Q:** What is a ServiceAccount and how do pods use it?

**A:** A ServiceAccount provides an identity for processes running in pods. Each namespace has a default ServiceAccount. Pods are assigned a ServiceAccount (spec.serviceAccountName), and the API server automatically mounts the ServiceAccount's token as a file at /var/run/secrets/kubernetes.io/serviceaccount/token, which the pod uses to authenticate API requests.

**Q:** What does the principle of least privilege mean in RBAC?

**A:** Grant only the minimum permissions needed for a subject (user, group, or ServiceAccount) to perform its function. Avoid using ClusterRoleBindings when a RoleBinding in a specific namespace suffices. Never grant wildcard verbs (*) or resources (*) in production.

**Q:** What is a PodSecurityAdmission (PSA) and what are its three levels?

**A:** PSA is the built-in admission controller that enforces Pod Security Standards at the namespace level (replaced PodSecurityPolicy in Kubernetes 1.25+). The three levels are: Privileged (unrestricted), Baseline (prevents known privilege escalations), and Restricted (heavily restricted, follows security best practices). Applied via namespace labels: pod-security.kubernetes.io/enforce: restricted.

**Q:** How do you create an RBAC Role that allows creating and listing Deployments?

**A:** kubectl create role deploy-manager --verb=create,list --resource=deployments --namespace=<ns>. This creates a Role in the specified namespace with the listed verbs on the deployments resource in the apps API group.

**Q:** What is the difference between authentication and authorization in Kubernetes?

**A:** Authentication verifies who is making the request (certificate CN, bearer token, OIDC). Authorization determines what the authenticated user is allowed to do — in Kubernetes this is handled by RBAC (and optionally ABAC or webhook modes). Authentication happens first; if it fails, authorization is never checked.

**Q:** What is a NetworkPolicy and what CNI requirement must be met for it to work?

**A:** A NetworkPolicy is a Kubernetes API object that specifies how pods are allowed to communicate with each other and with external endpoints. It requires a CNI plugin that implements NetworkPolicy enforcement — such as Calico, Cilium, or WeaveNet. The default kubenet plugin and Flannel do not enforce NetworkPolicies.

## Troubleshooting

**Q:** What are the five common pod status phases and what does each mean?

**A:** Pending: pod accepted but not yet scheduled or containers not started. Running: pod is bound to a node and at least one container is running. Succeeded: all containers exited with code 0 and will not restart. Failed: all containers terminated and at least one exited with non-zero code. Unknown: pod state cannot be determined (usually node communication failure).

**Q:** What does CrashLoopBackOff mean and how do you diagnose it?

**A:** The container is repeatedly crashing and Kubernetes is backing off restarts with increasing delays (10s, 20s, 40s... up to 5min). Diagnose with: kubectl logs <pod> --previous (logs from the crashed container), kubectl describe pod <pod> (exit code, events), and check application startup errors, missing environment variables, or misconfigured probes.

**Q:** What command retrieves logs from a previously crashed container instance?

**A:** kubectl logs <pod-name> --previous (or -p). This fetches the log output from the last terminated instance of the container, which is essential when the container restarts too fast to read current logs.

**Q:** A node shows NotReady. What are the first three things to check?

**A:** 1. kubectl describe node <node-name> — check the Conditions section for disk pressure, memory pressure, PID pressure, or network unavailability. 2. SSH to the node and run systemctl status kubelet — check if kubelet is running and read its error output. 3. journalctl -u kubelet -n 100 — read recent kubelet logs for certificate errors, API server connectivity issues, or runtime failures.

**Q:** How do you drain a node safely before maintenance?

**A:** kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data. This cordons the node (marks it unschedulable) and evicts all pods (respecting PodDisruptionBudgets). DaemonSet pods cannot be evicted and must be ignored with the flag. After maintenance, uncordon with kubectl uncordon <node-name>.

**Q:** What does OOMKilled mean in a container's status?

**A:** The container exceeded its memory limit and was killed by the Linux OOM (Out of Memory) killer. The exit code is typically 137. Fix by increasing spec.containers[].resources.limits.memory or reducing the application's memory usage.

**Q:** How do you see why a pod failed to schedule?

**A:** kubectl describe pod <pod-name> — scroll to the Events section. Common messages: "0/3 nodes are available: 3 Insufficient cpu" (resource shortage), "3 node(s) had untolerated taint" (taint mismatch), "0/3 nodes matched node affinity/selector" (selector mismatch), "PVC not bound" (storage issue).

**Q:** What command lets you run a temporary debug pod in the cluster?

**A:** kubectl run debug --image=busybox --rm -it --restart=Never -- sh — creates a temporary pod, gives you an interactive shell, and deletes the pod when you exit. Useful for testing DNS, network connectivity, and cluster access from within the cluster network.

**Q:** How do you check if a Service is routing traffic correctly?

**A:** First: kubectl get endpoints <service-name> — if empty (<none>), the selector does not match any pods. Second: test from inside a pod with curl or wget using the Service ClusterIP or DNS name. Third: check if the container is actually listening on the declared targetPort using kubectl exec <pod> -- ss -tlnp.

**Q:** What does it mean when a pod is in Pending state with no events?

**A:** Usually indicates a scheduling constraint that the scheduler cannot satisfy. Run kubectl describe pod to see scheduling failure reasons. Common causes: insufficient CPU/memory on all nodes, no nodes match nodeSelector, taint with no matching toleration, PVC stuck in Pending (no matching PV), or the cluster has no nodes at all.

## Exam Speed & kubectl

**Q:** How do you quickly generate a pod YAML manifest without creating the pod?

**A:** kubectl run <name> --image=<image> --dry-run=client -o yaml > pod.yaml — the --dry-run=client flag prevents the object from being created; -o yaml outputs the manifest. Same pattern works for Deployments: kubectl create deployment <name> --image=<image> --dry-run=client -o yaml.

**Q:** How do you set a kubectl alias and enable bash completion to save time on the exam?

**A:** Add alias k=kubectl to ~/.bashrc and run source ~/.bashrc. Enable completion with source <(kubectl completion bash) and complete -F __start_kubectl k. This lets you type k get po instead of kubectl get pods.

**Q:** What is the ETCDCTL_API environment variable and what value does it need for modern etcd commands?

**A:** ETCDCTL_API=3 — sets the etcdctl client to use the v3 API. Without it, etcdctl defaults to v2 which uses different subcommands and cannot interact with a v3 etcd cluster. Always set this before running etcdctl snapshot save or snapshot restore.

**Q:** How do you imperatively expose a Deployment as a NodePort Service?

**A:** kubectl expose deployment <name> --type=NodePort --port=80 --target-port=8080 — creates a Service in the same namespace, automatically sets the selector to match the Deployment's pod labels, and assigns a random NodePort in the 30000–32767 range.

**Q:** How do you update a container image in a running Deployment without editing a file?

**A:** kubectl set image deployment/<name> <container-name>=<new-image>:<tag> — triggers a rolling update immediately. The container name can be found in kubectl describe deployment or in the pod template spec.

**Q:** What kubectl command shows resource utilization (CPU and memory) for nodes?

**A:** kubectl top nodes — shows current CPU and memory usage for each node. kubectl top pods shows per-pod utilization. Requires Metrics Server to be installed and running. On the exam, check if metrics-server is available in kube-system.

**Q:** How do you copy a file from a pod to your local machine?

**A:** kubectl cp <namespace>/<pod-name>:/path/in/pod /local/destination/path — copies the file from the pod's filesystem to your local path. Reverse the argument order to copy from local to pod. Requires tar to be available inside the container.

**Q:** What is the fastest way to create a ConfigMap from a literal value and verify it?

**A:** Create: kubectl create configmap my-config --from-literal=key=value. Verify: kubectl get configmap my-config -o yaml — shows the data section with the key-value pair. Use --from-file=<path> to create from a file, where the filename becomes the key.

**Q:** What flags on kubectl get show all namespaces and wide output simultaneously?

**A:** kubectl get pods -A -o wide — -A (or --all-namespaces) shows resources across all namespaces and adds a NAMESPACE column. -o wide adds extra columns like NODE and IP. Combine as: kubectl get pods -A -o wide.

**Q:** How do you force-delete a pod that is stuck in Terminating state?

**A:** kubectl delete pod <name> --force --grace-period=0 — bypasses the graceful termination period and immediately removes the pod from the API server. Use only when the node is unreachable or the pod will not terminate normally, as this does not guarantee the container process has stopped on the node.
