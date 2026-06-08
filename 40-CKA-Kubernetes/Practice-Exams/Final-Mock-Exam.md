# 🏆 CKA Final Mock Exam

> **Real exam format:** The actual CKA exam presents ~17 performance-based tasks in a live terminal. This mock exam uses scenario MCQ to test the same knowledge. Treat each question as a task description — identify exactly what command or YAML you would write, then choose the answer.
>
> **Time:** 120 minutes · **Tasks:** 17 · **Pass:** 66% (≥12/17)
>
> 📌 **Domain distribution (matching real exam):**
> | Domain | Weight | Questions |
> |---|---|---|
> | Troubleshooting | 30% | 5 |
> | Cluster Architecture, Installation & Configuration | 25% | 4 |
> | Services & Networking | 20% | 4 |
> | Workloads & Scheduling | 15% | 3 |
> | Storage | 10% | 1 |

---

### 1.

*(Troubleshooting — 30%)*

A pod named `payment-api` is in `CrashLoopBackOff`. You inspect the pod with `kubectl describe` and see this event:

```
Back-off restarting failed container
```

You run `kubectl logs payment-api --previous` and see:

```
Error: FATAL — database connection refused: dial tcp 10.96.45.12:5432: connect: connection refused
```

The database Service `postgres-svc` exists in the same namespace and has `port: 5432`. Running `kubectl get endpoints postgres-svc` shows `<none>`. What is the root cause and correct fix?

A. The pod's resource limits are too low — increase CPU and memory in the pod spec
B. The postgres-svc Service selector does not match the labels on the database pod, resulting in no endpoints; fix the selector or the pod labels so they match
C. The `payment-api` pod needs a readinessProbe pointing to the postgres port before it can connect
D. The database pod is in a different namespace and cross-namespace TCP connections require a NetworkPolicy egress rule on `payment-api`

---

### 2.

*(Troubleshooting — 30%)*

Node `worker-3` shows `NotReady`. You SSH in and run:

```bash
journalctl -u kubelet -n 50
```

You see repeated errors:

```
failed to run Kubelet: unable to load client CA file /etc/kubernetes/pki/ca.crt: open /etc/kubernetes/pki/ca.crt: no such file or directory
```

What is the most likely cause and correct remediation?

A. The node's kubelet version is incompatible with the control plane; upgrade kubelet with `apt-get upgrade kubelet`
B. The `/etc/kubernetes/pki/ca.crt` file was deleted or never copied to this node; copy it from the control plane and restart kubelet
C. The kubeconfig file at `/etc/kubernetes/kubelet.conf` is corrupt; run `kubeadm join` again to regenerate it
D. The node's system clock is out of sync with the control plane, causing certificate validation to fail

---

### 3.

*(Troubleshooting — 30%)*

A user reports that `nslookup kubernetes.default` fails inside a running pod. Other pods on the same node can resolve names correctly. You check the pod's `/etc/resolv.conf` and it correctly shows the kube-dns ClusterIP as the nameserver. You run `kubectl exec -it debug-pod -- curl http://10.96.0.10:53` and get `connection refused`. What should you investigate next?

A. The `kube-dns` Service is missing a port entry for UDP/53; edit the Service to add it
B. Check whether the CoreDNS pods are running and healthy: `kubectl get pods -n kube-system -l k8s-app=kube-dns`; if they are crashing, read their logs
C. Delete and recreate the debug pod so it picks up a fresh `/etc/resolv.conf` from the node
D. Restart the `kube-proxy` DaemonSet pods, as kube-proxy is responsible for DNS packet forwarding

---

### 4.

*(Troubleshooting — 30%)*

A Service named `web-svc` exists with `type: ClusterIP`, `port: 80`, `targetPort: 8080`. The Deployment `web` has 3 pods all in `Running` state. `kubectl get endpoints web-svc` shows the correct pod IPs. However, `curl http://web-svc.default.svc.cluster.local` from within another pod times out. What is the most likely cause?

A. The pods are listening on port 80, not 8080; fix `targetPort` to `80` in the Service spec
B. A NetworkPolicy is blocking ingress traffic to the web pods; check for policies in the `default` namespace
C. The pod containers are actually listening on a different port than 8080; verify with `kubectl exec web-pod -- ss -tlnp`
D. Both B and C are plausible and should each be investigated — a timeout with correct endpoints typically means a NetworkPolicy block or the container is not actually listening on the declared targetPort

---

### 5.

*(Troubleshooting — 30%)*

You check etcd health on the control plane:

```bash
ETCDCTL_API=3 etcdctl endpoint health \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

Output:
```
https://127.0.0.1:2379 is unhealthy: failed to commit proposal: context deadline exceeded
```

The etcd pod is `Running`. What are the two most important things to check?

A. Check disk I/O performance on the etcd data directory (`/var/lib/etcd`) and check etcd pod logs for `apply entries took too long` warnings indicating disk latency causing leader election failures
B. Restart the etcd pod and run `kubeadm init` to reinitialize
C. Scale the etcd StatefulSet to 5 replicas for better quorum
D. Delete the etcd data directory and restore from the most recent snapshot

---

### 6.

*(Cluster Architecture, Installation & Configuration — 25%)*

You are setting up a highly available control plane with kubeadm. The first control plane node has been initialized. Which command correctly joins the second control plane node to the existing cluster?

A.
```bash
kubeadm join <load-balancer-ip>:6443 \
  --token <token> \
  --discovery-token-ca-cert-hash sha256:<hash> \
  --control-plane \
  --certificate-key <cert-key>
```
B.
```bash
kubeadm join <load-balancer-ip>:6443 \
  --token <token> \
  --discovery-token-ca-cert-hash sha256:<hash>
```
C.
```bash
kubeadm init --control-plane-endpoint <load-balancer-ip>:6443 \
  --join
```
D.
```bash
kubeadm join <control-plane-ip>:6443 \
  --token <token> \
  --control-plane
```

---

### 7.

*(Cluster Architecture, Installation & Configuration — 25%)*

You need to rotate all kubeadm-managed certificates because they are expiring in 3 days. Which command renews all certificates and what must you do immediately after?

A. Run `kubeadm certs renew all`; no further action needed — certificates are reloaded automatically
B. Run `kubeadm certs renew all`; then restart the control plane static pod containers (kube-apiserver, kube-controller-manager, kube-scheduler, etcd) so they load the new certificates
C. Delete the `/etc/kubernetes/pki/` directory and run `kubeadm init` to generate fresh certificates
D. Run `openssl x509 -signkey /etc/kubernetes/pki/ca.key -in /etc/kubernetes/pki/apiserver.csr -out /etc/kubernetes/pki/apiserver.crt -days 365` for each certificate file individually

---

### 8.

*(Cluster Architecture, Installation & Configuration — 25%)*

You need to restore etcd from a snapshot file at `/backup/etcd-snapshot.db`. The current etcd data is at `/var/lib/etcd`. Which sequence of commands is correct?

A.
```bash
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd-snapshot.db \
  --data-dir=/var/lib/etcd-restored

# Then edit /etc/kubernetes/manifests/etcd.yaml:
# Change --data-dir=/var/lib/etcd  →  --data-dir=/var/lib/etcd-restored
# Change hostPath for etcd-data volume to /var/lib/etcd-restored
```
B.
```bash
cp /backup/etcd-snapshot.db /var/lib/etcd/member/snap/db
systemctl restart etcd
```
C.
```bash
ETCDCTL_API=3 etcdctl snapshot restore /backup/etcd-snapshot.db \
  --data-dir=/var/lib/etcd
# No manifest changes needed
```
D.
```bash
kubectl exec -n kube-system etcd-controlplane -- \
  etcdctl snapshot restore /backup/etcd-snapshot.db
```

---

### 9.

*(Cluster Architecture, Installation & Configuration — 25%)*

A ServiceAccount named `deploy-bot` in namespace `ci-cd` needs permission to create and update Deployments in that namespace only, but must not have any access in other namespaces. Which resource combination enforces this correctly?

A. ClusterRole + ClusterRoleBinding scoped to namespace `ci-cd`
B. Role in namespace `ci-cd` + RoleBinding in namespace `ci-cd` referencing the ServiceAccount
C. ClusterRole + RoleBinding in namespace `ci-cd` referencing the ServiceAccount
D. Role in namespace `ci-cd` + ClusterRoleBinding referencing the ServiceAccount

---

### 10.

*(Services & Networking — 20%)*

You want to allow pods labeled `role=backend` in namespace `app` to receive ingress traffic only from pods labeled `role=frontend` in the same namespace, and block everything else. Which NetworkPolicy achieves this?

A.
```yaml
spec:
  podSelector:
    matchLabels:
      role: backend
  policyTypes: [Ingress]
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
```
B.
```yaml
spec:
  podSelector:
    matchLabels:
      role: frontend
  policyTypes: [Egress]
  egress:
  - to:
    - podSelector:
        matchLabels:
          role: backend
```
C.
```yaml
spec:
  podSelector: {}
  policyTypes: [Ingress, Egress]
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
```
D.
```yaml
spec:
  podSelector:
    matchLabels:
      role: backend
  policyTypes: [Ingress]
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          role: frontend
```

---

### 11.

*(Services & Networking — 20%)*

You create an Ingress resource:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: app.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-svc
            port:
              number: 8080
```

External users hitting `http://app.example.com/api/users` get `404 Not Found` from the Ingress controller, not the application. What is the most likely cause?

A. The `pathType: Prefix` should be `pathType: Exact` for the `/api` path
B. No Ingress controller is installed in the cluster; Ingress resources have no effect without a controller
C. The `api-svc` Service does not exist or is in a different namespace than the Ingress resource
D. The `rewrite-target: /` annotation is stripping the path before reaching the backend; the application receives `/` not `/api/users` and may not handle it

---

### 12.

*(Services & Networking — 20%)*

From inside a pod, you run:

```bash
nslookup my-service.staging.svc.cluster.local
```

What does each segment of this FQDN represent, and what default DNS domain is used in kubeadm clusters?

A. `my-service` = pod name, `staging` = node name, `svc` = service type, `cluster.local` = cluster ID
B. `my-service` = Service name, `staging` = namespace, `svc` = subdomain for Services, `cluster.local` = cluster DNS domain (the kubeadm default)
C. `my-service` = Deployment name, `staging` = namespace, `svc` = internal routing prefix, `cluster.local` = the node's hostname
D. `my-service` = Service name, `staging` = Service type, `svc` = cluster subdomain, `cluster.local` = DNS search domain for the node

---

### 13.

*(Services & Networking — 20%)*

You have a pod in namespace `web` that needs to reach an external database at `db.corp.internal:5432`. The corporate DNS resolves this name but CoreDNS does not forward it. What is the correct way to configure CoreDNS to forward `corp.internal` queries to the corporate DNS server at `10.0.0.53`?

A. Add a `forward` stanza to the CoreDNS ConfigMap in `kube-system` for the `corp.internal` zone:
   ```
   corp.internal:53 {
     forward . 10.0.0.53
   }
   ```
B. Add `nameserver 10.0.0.53` to each pod's `/etc/resolv.conf` manually
C. Create a Service of type `ExternalName` pointing to `db.corp.internal`
D. Restart CoreDNS with the `--upstream` flag pointing to `10.0.0.53`

---

### 14.

*(Workloads & Scheduling — 15%)*

A Deployment has `strategy.type: RollingUpdate` with `maxSurge: 1` and `maxUnavailable: 0`. The Deployment has 4 replicas. During an update, how many pods will be running at any given moment during the rollout?

A. Between 3 and 4 pods
B. Exactly 4 pods at all times (old pods are terminated only after new pods are Ready)
C. Between 4 and 5 pods — at most 5 running simultaneously
D. Between 2 and 4 pods depending on readiness probe timing

---

### 15.

*(Workloads & Scheduling — 15%)*

You need to run a pod that performs a one-time database migration. The pod must run to completion and report success or failure. It should not restart if it completes successfully but should retry up to 3 times on failure. Which resource type and spec is correct?

A. A Deployment with `restartPolicy: OnFailure` and `replicas: 1`
B. A Job with `completions: 1`, `backoffLimit: 3`, and `restartPolicy: OnFailure` on the pod template
C. A CronJob that runs `@once` with `failedJobsHistoryLimit: 3`
D. A standalone Pod with `restartPolicy: OnFailure` and a `livenessProbe` that exits when migration completes

---

### 16.

*(Workloads & Scheduling — 15%)*

A node is tainted with:
```
kubectl taint nodes gpu-node accelerator=nvidia:NoSchedule
```

You have three pods:
- Pod A: no tolerations
- Pod B: `tolerations: [{key: "accelerator", operator: "Equal", value: "nvidia", effect: "NoSchedule"}]`
- Pod C: `tolerations: [{key: "accelerator", operator: "Exists", effect: "NoSchedule"}]`

Which pods can be scheduled on `gpu-node`?

A. Only Pod B
B. Only Pod C
C. Pod B and Pod C
D. All three pods — taints only affect pods without any tolerations key matching the node

---

### 17.

*(Storage — 10%)*

A PersistentVolumeClaim requests:
```yaml
resources:
  requests:
    storage: 2Gi
accessModes: [ReadWriteOnce]
storageClassName: fast
```

You have two available PersistentVolumes:

- PV-1: `4Gi`, `ReadWriteOnce`, `storageClassName: fast`
- PV-2: `2Gi`, `ReadWriteOnce`, `storageClassName: fast`

Which PV will Kubernetes bind to the PVC, and why?

A. PV-1 (4Gi), because Kubernetes always prefers larger volumes to avoid rebinding
B. PV-2 (2Gi), because Kubernetes selects the smallest PV that satisfies the PVC's requests to minimize wasted capacity
C. Both PVs are bound simultaneously to share the load
D. Neither — the PVC must request exactly the same size as an available PV to bind

---

## 🎯 Answer Key (No Cheating!)

```
1. B — The logs show a TCP connection refused to the database Service IP, but endpoints are <none>. When a Service has no endpoints, the selector does not match any pod labels. This is the definitive cause: fix the Service selector or the database pod's labels. Resource limits would cause OOMKilled, not connection refused.

2. B — The kubelet error is explicit: it cannot find /etc/kubernetes/pki/ca.crt. This file is required by the kubelet to verify the API server's certificate. It must be present on every node. The most common cause is that it was never copied during node setup, or it was accidentally deleted. Copy it from the control plane (/etc/kubernetes/pki/ca.crt) and restart kubelet.

3. B — Since /etc/resolv.conf is correct but curl to the DNS IP on port 53 is refused, the problem is that CoreDNS pods themselves are unhealthy or not running. The next step is to check their status and logs. kube-proxy handles iptables/IPVS rules for Service ClusterIPs but does not forward DNS; CoreDNS does. The kube-dns Service port configuration is unlikely to be the issue since other pods resolve correctly.

4. D — A timeout with correct endpoints (pods are reachable at the IP level) has two common causes: (1) a NetworkPolicy blocking ingress to the pods, or (2) the container is not actually listening on the declared targetPort. Both must be investigated. Option A is wrong because targetPort: 8080 means the Service forwards to the container's port 8080, which is the declared listening port.

5. A — A healthy etcd that says "context deadline exceeded" on writes is a classic sign of disk I/O saturation. etcd uses fsync heavily; slow disks cause proposal timeouts and leader elections. The etcd logs will show "apply entries took too long" or "leader changed" events. Restarting or deleting data would destroy cluster state. etcd is not a StatefulSet — it is a static pod and cannot be scaled via kubectl.

6. A — Joining a second control plane node requires three additional flags beyond a worker join: --control-plane (to promote the node to control plane), and --certificate-key (to decrypt the uploaded control plane certificates). The endpoint must point to the load balancer, not a specific control plane node. Option B joins as a worker. Option C is not valid syntax.

7. B — kubeadm certs renew all writes new certificate files to disk but the running static pod processes still have the old certificates loaded in memory. You must restart the static pods (by moving and restoring their manifests, or by using crictl/kubectl delete on them) so they re-read the certificates. On managed clusters, simply moving the manifests out of /etc/kubernetes/manifests and back triggers the kubelet to restart the pods.

8. A — The correct restore procedure is: (1) run etcdctl snapshot restore to a NEW directory (not the live data dir, which would corrupt it), then (2) update the etcd static pod manifest to point --data-dir and the hostPath volume to the new directory. The kubelet will detect the manifest change and restart etcd using the restored data. Copying the snapshot file directly into the member/snap directory is incorrect — the snapshot must be unpacked by etcdctl.

9. B — A Role is namespace-scoped; a RoleBinding is also namespace-scoped and can reference either a Role or a ClusterRole but its permissions apply only in its own namespace. Using a Role + RoleBinding in namespace ci-cd ensures deploy-bot can only act within that namespace. Option C (ClusterRole + RoleBinding) also works for scoping access to one namespace, but option B (Role) is more precise and least-privilege. Option D uses ClusterRoleBinding which would grant cluster-wide access.

10. A — Option A selects only backend pods (podSelector: role=backend) as the target, restricts to Ingress, and allows from pods with role=frontend in the same namespace. This correctly isolates backend pods. Option B is an egress policy on frontend pods, which does not protect backend from other sources. Option C selects all pods in the namespace. Option D uses namespaceSelector which selects namespaces by label, not pods.

11. C — When an Ingress returns 404 and the backend endpoints are correct, the most common cause is that the referenced Service does not exist or is in the wrong namespace. The Ingress controller looks for the Service in the same namespace as the Ingress resource. Option D (rewrite stripping path) would cause application-level errors, not an Ingress-level 404. Option B would cause all paths to fail, not just /api.

12. B — Kubernetes DNS follows the pattern: <service>.<namespace>.svc.<cluster-domain>. The cluster domain is cluster.local by default in kubeadm clusters. svc is the fixed subdomain that distinguishes Service records from pod records (which use the pod subdomain). This FQDN structure is defined in the DNS specification for Kubernetes (RFC-based SRV records).

13. A — CoreDNS uses a Corefile stored in a ConfigMap. Adding a separate server block for corp.internal with a forward directive tells CoreDNS to proxy those queries to the corporate DNS server. This is the supported, cluster-wide fix. Editing /etc/resolv.conf in pods is not persistent across pod restarts. ExternalName Services resolve a fixed hostname, not arbitrary corp.internal subdomains. CoreDNS does not accept --upstream as a command-line flag.

14. C — maxSurge: 1 means at most 1 extra pod above the desired count (4+1=5) can exist during the update. maxUnavailable: 0 means no pod can be taken down until a replacement is Ready. So during rollout: Kubernetes brings up 1 new pod (now 5 total), waits for it to be Ready, then terminates 1 old pod (back to 4), then brings up the next new one. The total oscillates between 4 and 5.

15. B — A Job is the correct resource for a finite task. completions: 1 means run to successful completion once. backoffLimit: 3 allows up to 3 retries on failure. restartPolicy: OnFailure restarts the container on the same pod on failure (rather than Never which creates new pods). Deployments are for long-running processes and do not support run-to-completion semantics.

16. C — A toleration with operator: Equal requires the key and value to match exactly. A toleration with operator: Exists only requires the key to match, regardless of value. Both Pod B and Pod C have tolerations that satisfy the taint accelerator=nvidia:NoSchedule — B by exact value match, C by existence match. Pod A has no toleration for this taint and will not be scheduled on gpu-node.

17. B — Kubernetes PV selection uses a best-fit algorithm: it finds all PVs that satisfy the PVC's requirements (storageClassName, accessModes, capacity ≥ requested) and then selects the one with the smallest sufficient capacity. PV-2 (2Gi) exactly satisfies the 2Gi request and wastes no space. PV-1 (4Gi) also qualifies but would waste 2Gi. The PVC does not need an exact size match — it needs at least the requested amount.
```
