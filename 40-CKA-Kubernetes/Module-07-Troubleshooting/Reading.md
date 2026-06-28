# 🎯 Module 7: Troubleshooting

> **CKA Exam Domain:** Troubleshooting — **30% of the exam** (the single largest domain)

---

## 📚 You Are an Air Traffic Controller

Picture yourself in a darkened room at LAX. Fifty blips on your radar. Each one is a plane — a real aircraft carrying real people, burning real fuel. At 2:47 AM, one of them goes silent. No transponder. No radio response.

You don't panic. You don't randomly click buttons hoping something works. You follow the checklist.

First: was the signal lost, or is the plane actually in distress? Check adjacent frequencies. Second: can you raise them on the emergency channel? Third: is there weather in that sector? You work through a systematic protocol because in the 1960s, after several disasters caused by ad-hoc responses, aviation built **checklists for every failure mode**. That discipline is why commercial aviation has a fatality rate near zero.

The CKA exam is your air traffic control tower. Every pod is a plane. When one goes dark — when a pod is stuck in Pending, a node goes NotReady, or DNS (Domain Name System) stops resolving — you don't guess. You pull up your checklist. You run `kubectl describe`. You check Events. You follow the systematic protocol.

This module builds that protocol. It is the highest-weight domain on the entire exam at **30%**. Treat it accordingly.

---

## 🔬 The Troubleshooting Mental Model

Before running a single command, know the hierarchy of failure:

1. **Cluster layer**: Is the control plane healthy? Are nodes Ready?
2. **Node layer**: Is the kubelet running? Is the container runtime responsive?
3. **Pod layer**: Did the pod schedule? Did it start? Is it crashing? Is it OOMKilled?
4. **Application layer**: Is the app itself broken? Can it resolve DNS? Can it reach its service?

Every symptom maps to exactly one layer. Identify the layer first; then apply the commands for that layer. This saves the frantic five minutes of running random commands that the exam is designed to punish.

---

## 🔬 1. Application Troubleshooting — Pod Level

### 1.1 The Pod Lifecycle

A pod moves through these phases: `Pending → Running → (Succeeded | Failed)`. A pod stuck at `Pending` has never been scheduled. A pod in `Running` may still have containers that are crashing.

| Pod Status | Meaning | First Command |
|---|---|---|
| `Pending` | Not yet scheduled to a node | `kubectl describe pod <name>` → Events section |
| `ContainerCreating` | Scheduled; image is being pulled | `kubectl describe pod` → Events: pulling/pulled |
| `Running` | At least one container is up | `kubectl logs <pod>` to check app health |
| `CrashLoopBackOff` | Container keeps crashing and restarting | `kubectl logs <pod> --previous` |
| `OOMKilled` | Container exceeded memory limit | `kubectl describe pod` → Last State: OOMKilled |
| `ImagePullBackOff` | Cannot pull the container image | `kubectl describe pod` → Events: failed to pull |
| `ErrImagePull` | First failed pull attempt (before backoff kicks in) | Same as ImagePullBackOff — wrong image or auth |
| `Terminating` | Pod is being deleted | `kubectl delete pod --grace-period=0 --force` if stuck |
| `Completed` | All containers ran to completion (init or Job) | Normal for Jobs; abnormal for Deployment pods |
| `Unknown` | Node lost communication | Check node health; kubelet may be down |

### 1.2 Pending Pods — The Scheduling Investigation

A pod stuck in `Pending` means the Kubernetes scheduler could not find a valid node. **Always start with:**

```bash
kubectl describe pod <pod-name> -n <namespace>
```

**MEMORIZE THIS.** Jump straight to the `Events:` section at the bottom of the output. The scheduler writes its reason there. Common causes:

**Taint/Toleration Mismatch:**
```
Events:
  Warning  FailedScheduling  0/3 nodes are available: 3 node(s) had taint
  {dedicated:gpu, effect:NoSchedule}, that the pod didn't tolerate.
```
Fix: add a toleration to the pod spec, or remove the taint from the node.
```bash
kubectl taint nodes <node-name> dedicated:gpu:NoSchedule-   # remove the taint
```

**NodeSelector Mismatch:**
```
Events:
  Warning  FailedScheduling  0/3 nodes are available: 3 node(s) didn't match
  Pod's node affinity/selector.
```
Fix: check `nodeSelector` in the pod spec against actual node labels.
```bash
kubectl get nodes --show-labels
kubectl label node <node-name> disktype=ssd  # add missing label
```

**Insufficient Resources:**
```
Events:
  Warning  FailedScheduling  0/3 nodes are available: 3 Insufficient cpu.
```
Fix: reduce the pod's `resources.requests.cpu`, or add more nodes.
```bash
kubectl describe node <node-name> | grep -A 10 "Allocated resources"
```

**PersistentVolume not bound:**
```
Events:
  Warning  FailedScheduling  pod has unbound immediate PersistentVolumeClaims.
```
Fix: check PVC status; ensure a PV exists with matching storageClass, access mode, and capacity.

> 🚨 **Trap on the exam:** A pod in `Pending` has **never run**. Do NOT use `kubectl logs` — there are no logs yet. The answer is always in `kubectl describe pod` Events section.

### 1.3 CrashLoopBackOff — Reading Crash Logs

The container is starting, crashing, and Kubernetes keeps restarting it with exponential backoff (10s, 20s, 40s, 80s, up to 5 minutes).

```bash
kubectl logs <pod-name>                  # current container logs
kubectl logs <pod-name> --previous       # logs from the previous (crashed) container
kubectl logs <pod-name> -c <container>   # specific container in a multi-container pod
```

**MEMORIZE THIS.** `--previous` is the key flag for CrashLoopBackOff diagnosis. The current container may have only milliseconds of logs before it crashes again.

Common causes:
- Application configuration error (bad env var, missing config file)
- Missing dependency (database not reachable, secret not mounted)
- Application bug (the binary itself exits non-zero)
- Wrong entrypoint command in the image

Check the exit code:
```bash
kubectl describe pod <pod-name> | grep -A 5 "Last State:"
```
Exit code 1 = application error. Exit code 137 = OOMKilled (SIGKILL, signal 9). Exit code 139 = segfault (signal 11).

### 1.4 ImagePullBackOff — Registry and Auth Issues

The container runtime cannot pull the image. Check the Events:
```bash
kubectl describe pod <pod-name> | grep -A 20 "Events:"
```

Common causes and fixes:

| Cause | Symptom in Events | Fix |
|---|---|---|
| Typo in image name | `Error: manifest unknown` | Correct the image name in the pod spec |
| Wrong tag (e.g. `:lates` not `:latest`) | `Error: manifest not found` | Fix the tag |
| Private registry, no credentials | `Error: unauthorized: authentication required` | Create imagePullSecret and reference in pod spec |
| Registry is down | `Error: connection refused` | Temporary; wait or check registry health |

Creating an imagePullSecret:
```bash
kubectl create secret docker-registry my-registry-secret \
  --docker-server=registry.example.com \
  --docker-username=myuser \
  --docker-password=mypassword \
  --docker-email=myemail@example.com
```
Then reference it in the pod spec under `imagePullSecrets:`.

### 1.5 OOMKilled — Memory Limit Exceeded

The Linux kernel killed the container because it exceeded its memory limit. The pod status shows `OOMKilled` in the Last State section.

```bash
kubectl describe pod <pod-name>
# Look for:
# Last State:  Terminated
#   Reason:    OOMKilled
#   Exit Code: 137
```

Fix: increase the memory limit in the pod spec:
```yaml
resources:
  limits:
    memory: "512Mi"    # was 256Mi
  requests:
    memory: "256Mi"
```

> 🎯 **Exam tip:** Exit code 137 = OOMKilled. The kernel (not the app) killed the process. `kubectl logs` will be empty for the previous container — the process was killed, not allowed to write final logs.

### 1.6 kubectl describe Pod Anatomy

Know every section of `kubectl describe pod` output:

```
Name:           my-pod
Namespace:      default
Node:           worker-1/10.0.0.5      ← which node it's on (empty if Pending)
Status:         Running
IP:             172.16.0.4
Containers:
  my-container:
    Image:      nginx:1.21
    Port:       80/TCP (Transmission Control Protocol)
    State:      Running / Waiting / Terminated
    Last State: Terminated (if it crashed)
      Reason:   OOMKilled / Error / Completed
      Exit Code: 137 / 1 / 0
    Ready:      True / False
    Restart Count: 4                   ← number of restarts
    Limits:
      cpu: 500m
      memory: 256Mi
    Requests:
      cpu: 250m
      memory: 128Mi
    Mounts:
      /var/run/secrets/... (default service account token)
Conditions:
  Type           Status
  Initialized    True
  Ready          False                 ← pod is NOT ready
  PodScheduled   True
Volumes:
  ...
Events:
  Type     Reason     Age    Message
  Warning  BackOff    2m     Back-off restarting failed container
```

**MEMORIZE THIS.** The Events section at the bottom is the single most important section for troubleshooting. The Conditions section tells you *what* is wrong; the Events tell you *why*.

### 1.7 Init Containers

Init containers run to completion before the main container starts. If an init container is stuck, the pod status shows `Init:0/1` (or `Init:CrashLoopBackOff`).

```bash
kubectl describe pod <pod-name>
# Look for "Init Containers:" section
# Check State, Last State, Exit Code of each init container

kubectl logs <pod-name> -c <init-container-name>  # logs from init container
```

A common exam scenario: an init container runs `nslookup some-service` to wait for a dependency. If that service doesn't exist, the init container keeps failing.

---

## 🔬 2. Cluster Troubleshooting

### 2.1 Node NotReady

When a node shows `NotReady`, pods cannot be scheduled to it, and existing pods may be evicted.

```bash
kubectl get nodes                         # see which nodes are NotReady
kubectl describe node <node-name>         # detailed status and conditions
```

**MEMORIZE THIS.** In the describe output, check `Conditions:`:
```
Conditions:
  Type              Status  Reason
  MemoryPressure    False   KubeletHasSufficientMemory
  DiskPressure      False   KubeletHasNoDiskPressure
  PIDPressure       False   KubeletHasSufficientPID
  Ready             False   KubeletNotReady          ← the node's kubelet is not responsive
```

SSH (Secure Shell) to the problem node and investigate the kubelet:

```bash
ssh <node-name>
systemctl status kubelet                  # is kubelet running?
systemctl start kubelet                   # if it's stopped
systemctl enable kubelet                  # ensure it starts on boot
journalctl -u kubelet -f                  # tail live kubelet logs
journalctl -u kubelet --since "5 minutes ago"   # recent kubelet logs
```

Common kubelet failures:
- Kubelet binary not running (systemctl restart kubelet)
- Certificate expired (check `/var/lib/kubelet/pki/`)
- Out of disk space (`df -h` — kubelet stops if disk usage > 85%)
- Container runtime not responding (`systemctl status containerd`)

> 🚨 **Trap on the exam:** The exam may SSH you into a node where kubelet is stopped. The fix is: `systemctl start kubelet` then `systemctl enable kubelet`. Do not reinstall anything — it's almost always a stopped service.

### 2.2 Control Plane Pod Issues

Control plane components (kube-apiserver, kube-controller-manager, kube-scheduler, etcd) run as **static pods** on the control plane node. Their manifests live in `/etc/kubernetes/manifests/`.

```bash
ls /etc/kubernetes/manifests/
# kube-apiserver.yaml
# kube-controller-manager.yaml
# kube-scheduler.yaml
# etcd.yaml

kubectl get pods -n kube-system           # check control plane pod status
kubectl describe pod kube-apiserver-<node> -n kube-system
kubectl logs kube-apiserver-<node> -n kube-system
```

If a control plane pod is not running, check if the static pod YAML has an error:
```bash
cat /etc/kubernetes/manifests/kube-apiserver.yaml
# Look for typos, wrong flags, wrong file paths
```

Kubelet reads these manifests automatically. If you fix the YAML, kubelet will restart the pod within seconds. **No `kubectl apply` needed for static pods.**

### 2.3 kube-apiserver Down — No kubectl Access

If `kubectl` is completely unresponsive (the API (Application Programming Interface) server is down), you cannot use kubectl at all. Switch to the container runtime directly:

```bash
# If using containerd:
crictl ps                                 # list running containers
crictl ps -a                              # list all containers including stopped
crictl logs <container-id>               # get container logs
crictl pods                              # list pods (containerd pod sandboxes)

# If using Docker (older setups):
docker ps
docker logs <container-id>
```

The API server manifest is at `/etc/kubernetes/manifests/kube-apiserver.yaml`. Edit it to fix the issue; kubelet will restart it.

> 🎯 **Exam tip:** If kubectl hangs or returns "connection refused," suspect the API server is down. Don't keep retrying kubectl — SSH to the control plane node and use crictl.

### 2.4 etcd Issues

etcd stores all cluster state. If etcd is unhealthy, the entire cluster is read-only or broken.

```bash
kubectl get pods -n kube-system | grep etcd
kubectl logs etcd-<control-plane-node> -n kube-system

# Check etcd health directly (requires etcdctl and certs):
ETCDCTL_API=3 etcdctl \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  endpoint health
```

**MEMORIZE THIS.** `ETCDCTL_API=3` must be set. etcdctl defaults to v2 API which is incompatible with Kubernetes clusters running etcd v3.

The etcd data directory is `/var/lib/etcd/`. If you need to restore an etcd snapshot:
```bash
ETCDCTL_API=3 etcdctl snapshot restore /backup/snapshot.db \
  --data-dir=/var/lib/etcd-restore
# Then update the etcd static pod manifest to point to the new data dir
```

---

## 🔬 3. Networking Troubleshooting

### 3.1 DNS Resolution Failures

DNS in Kubernetes is handled by CoreDNS, running as pods in the `kube-system` namespace. Every pod gets DNS configured automatically.

**Test DNS from inside a pod:**
```bash
kubectl run tmp-debug --image=busybox --rm -it --restart=Never -- nslookup kubernetes
```

**MEMORIZE THIS.** This is the standard DNS smoke test. `kubernetes` is always a valid service in the default namespace. If it fails, CoreDNS is broken.

More targeted DNS tests:
```bash
# Test service DNS resolution
kubectl run tmp-debug --image=busybox --rm -it --restart=Never -- \
  nslookup my-service.my-namespace.svc.cluster.local

# Check CoreDNS pods
kubectl get pods -n kube-system | grep coredns
kubectl logs -n kube-system -l k8s-app=kube-dns

# Check CoreDNS ConfigMap
kubectl describe configmap coredns -n kube-system
```

DNS name format for services: `<service-name>.<namespace>.svc.cluster.local`

### 3.2 Service Not Routing Traffic

A Service that isn't forwarding traffic almost always has a **selector mismatch** — the selector on the Service doesn't match the labels on the Pods.

```bash
kubectl describe service <service-name>    # check Selector: and Endpoints:
kubectl get endpoints <service-name>       # if Endpoints is <none>, selector is broken
kubectl get pods --show-labels             # see actual pod labels
```

**MEMORIZE THIS.** An empty Endpoints object means no pods match the Service selector. This is the most common networking issue on the exam.

Debugging workflow:
1. `kubectl describe svc my-service` → note the `Selector:`
2. `kubectl get pods -l <selector>` → are any pods returned?
3. If no pods match → fix the label on pods OR fix the selector on the Service

Test connectivity directly with a debug pod:
```bash
kubectl run curl-test --image=curlimages/curl --rm -it --restart=Never -- \
  curl http://my-service:8080
```

### 3.3 NetworkPolicy Blocking Traffic

If pods can't communicate and the Service endpoints look correct, a NetworkPolicy may be blocking traffic.

```bash
kubectl get networkpolicy -n <namespace>            # list all network policies
kubectl describe networkpolicy <policy-name>        # see what it allows/denies
```

NetworkPolicies are additive for egress/ingress — once ANY NetworkPolicy selects a pod, all traffic not explicitly allowed is denied.

Debug with a temporary pod that bypasses app-level issues:
```bash
kubectl run debug-pod --image=busybox --rm -it --restart=Never -- \
  wget -qO- http://<pod-ip>:<port>
```

---

## 🔬 4. Logging and Monitoring

### 4.1 Kubernetes Events

Events are the first place to look for cluster-level activity:

```bash
kubectl get events -n <namespace>
kubectl get events --sort-by=.metadata.creationTimestamp
kubectl get events --field-selector reason=FailedScheduling
kubectl get events -A                     # all namespaces
```

**MEMORIZE THIS.** `--sort-by=.metadata.creationTimestamp` shows events chronologically — most recent last. This is essential when diagnosing what just happened.

### 4.2 Resource Usage — kubectl top

`kubectl top` requires the **metrics-server** to be installed. If it's not installed, these commands return "Metrics API not available."

```bash
kubectl top nodes                          # CPU/memory per node
kubectl top pods                           # CPU/memory per pod in current namespace
kubectl top pods -A                        # all namespaces
kubectl top pods --containers              # break down by container
```

### 4.3 Container Runtime Logs — crictl

crictl is the CRI-compliant container runtime CLI (Command Line Interface). Use it when kubectl is unavailable or to inspect containers at a lower level:

```bash
crictl ps                                  # running containers
crictl ps -a                               # all containers (including stopped)
crictl logs <container-id>                 # container logs
crictl inspect <container-id>              # full container metadata
crictl pods                                # list pod sandboxes
crictl images                              # list pulled images
```

---

## 🗺️ Troubleshooting Decision Tree

| Symptom | First Command | Likely Cause | Fix |
|---|---|---|---|
| Pod stuck in `Pending` | `kubectl describe pod` → Events | Taint, NodeSelector, resource limits, unbound PVC | Fix taint/toleration, labels, requests, or PVC |
| Pod in `CrashLoopBackOff` | `kubectl logs <pod> --previous` | App error, bad config, missing dependency | Fix app config; check logs for error message |
| Pod in `ImagePullBackOff` | `kubectl describe pod` → Events | Wrong image name/tag, missing imagePullSecret | Fix image reference or create secret |
| Pod in `OOMKilled` | `kubectl describe pod` → Last State | Memory limit too low for workload | Increase `resources.limits.memory` |
| Node `NotReady` | `kubectl describe node` then `systemctl status kubelet` | kubelet stopped, disk full, cert expired | `systemctl start kubelet`; check disk/certs |
| kubectl unresponsive | `crictl ps` on control plane node | API server is down | Fix `/etc/kubernetes/manifests/kube-apiserver.yaml` |
| DNS not resolving | `kubectl run tmp --image=busybox --rm -it -- nslookup kubernetes` | CoreDNS down or misconfigured | Check CoreDNS pods and ConfigMap |
| Service not forwarding | `kubectl get endpoints <svc>` | Selector mismatch between Service and Pods | Align selector labels |
| App can't connect to DB | `kubectl get networkpolicy` | NetworkPolicy denying egress/ingress | Add correct NetworkPolicy rule |
| Metrics commands fail | `kubectl get pods -n kube-system | grep metrics` | metrics-server not installed | Install metrics-server |

---

## 🔬 Kubelet Debug Commands Reference

| Command | Purpose |
|---|---|
| `systemctl status kubelet` | Is kubelet service running? |
| `systemctl start kubelet` | Start a stopped kubelet |
| `systemctl restart kubelet` | Restart kubelet after config change |
| `systemctl enable kubelet` | Ensure kubelet starts on node reboot |
| `journalctl -u kubelet` | All kubelet logs |
| `journalctl -u kubelet -f` | Tail live kubelet logs |
| `journalctl -u kubelet --since "10 minutes ago"` | Recent kubelet logs |
| `journalctl -u kubelet -n 50` | Last 50 log lines |
| `/var/lib/kubelet/config.yaml` | Kubelet configuration file |
| `/etc/kubernetes/kubelet.conf` | Kubelet kubeconfig (API server connection) |
| `/var/lib/kubelet/pki/` | Kubelet TLS (Transport Layer Security) certificates |
| `df -h` | Check disk usage (kubelet stops if >85% full) |

---

## 🚨 Common Exam Traps

> 🚨 **Trap on the exam:** When a node is `NotReady`, students often try to delete and recreate pods. This does nothing — the pods will just stay in `Pending` since the node is unavailable. The correct path is to SSH to the node and fix kubelet.

> 🚨 **Trap on the exam:** `kubectl logs <pod>` on a `CrashLoopBackOff` pod gives you the **current** container's logs, which may be empty if it crashed immediately. Always use `kubectl logs <pod> --previous` to see the last crash's output.

> 🎯 **Exam tip:** The exam environment uses kubeadm clusters. Control plane components are always static pods in `/etc/kubernetes/manifests/`. If a component is broken, edit the YAML file — do not try to use `kubectl` to fix it.

> 🎯 **Exam tip:** Time is the scarcest resource on the CKA. For any "something is broken" task, spend no more than 30 seconds deciding which layer the problem is at. Cluster? Node? Pod? Network? Once you know the layer, your next command is predetermined.

---

## ✅ Summary

This module is the exam. Thirty percent of your CKA score depends on the skills here. The systematic approach:

1. **Identify the layer**: Cluster → Node → Pod → Application/Network
2. **Run the right first command**: Almost always `kubectl describe` + Events section
3. **Follow the evidence**: Let the error message tell you the fix, don't guess
4. **Know the kubelet**: Half of cluster issues are a stopped kubelet on a node
5. **Know the selectors**: Half of network issues are a Service selector mismatch

Practice these commands until they are reflexive. The exam doesn't reward knowing that problems exist — it rewards fixing them in under 4 minutes each.

---

## ⏭️ Next Steps

- **Module 8**: Exam Speed — time strategies, imperative kubectl commands, and the 4-minute-per-question discipline
- **Practice Exam 1**: Full troubleshooting scenario set — 5 pre-broken clusters, 15 tasks
- Work through the Quiz in this module before attempting the practice exams

---

## 📖 Further Reading

- Kubernetes Docs: [Troubleshooting](https://kubernetes.io/docs/tasks/debug/)
- Kubernetes Docs: [Debug Running Pods](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/)
- Kubernetes Docs: [Debug Services](https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/)
- Kubernetes Docs: [Troubleshoot Clusters](https://kubernetes.io/docs/tasks/debug/debug-cluster/)
- Kubernetes Docs: [Logging Architecture](https://kubernetes.io/docs/concepts/cluster-administration/logging/)
