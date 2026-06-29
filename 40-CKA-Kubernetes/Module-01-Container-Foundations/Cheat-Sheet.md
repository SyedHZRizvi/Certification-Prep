# 🗂️ Module 1 Cheat Sheet: Container Foundations

> Print this. Keep it beside you during every practice session. **MEMORIZE** markers = guaranteed exam material.

---

## VM (Virtual Machine) vs. Container — Core Distinction

| Property | Virtual Machine | Container |
|---|---|---|
| Kernel | Own separate kernel | **Shares host kernel** — MEMORIZE |
| Boot time | 30 sec – several min | Milliseconds |
| Image size | Gigabytes | Megabytes |
| Isolation | Hardware virtualization | Process-level (namespace) |
| Overhead | High | Very low |
| Portability | Good but heavy | Excellent |
| Runtime examples | VMware, KVM, Hyper-V | containerd, CRI-O |

---

## Container Isolation Primitives

| Primitive | What It Does |
|---|---|
| **namespaces** | Isolate *visibility* — PID, network, mount, UTS, IPC |
| **cgroups** | Limit *resource use* — CPU, memory, I/O, network |
| **OverlayFS** | Layer images; enable copy-on-write (CoW) |

**MEMORIZE:** cgroups = *limits*. namespaces = *isolation*. They are not the same thing.

---

## Docker Image & Container Model

| Concept | Key Fact |
|---|---|
| Image layers | Read-only; shared across images and containers |
| Container write layer | Writable; unique to each container; **destroyed on `docker rm`** |
| Copy-on-write (CoW) | File from image layer is copied to container layer before write |
| Registry | Docker Hub, ECR, GCR — where images are stored/pulled from |

**MEMORIZE:** Deleting a container deletes its write layer. Data not on a volume is gone.

---

## Container Lifecycle States

| State | Description |
|---|---|
| Created | Exists, not started |
| Running | Process executing |
| Paused | Frozen (SIGSTOP) |
| Exited / Stopped | Process terminated; container still exists |
| Dead | Failed removal (rare) |

**MEMORIZE:** `docker stop` → Exited (still exists). `docker rm` → gone. Two separate commands.

---

## Key Docker Commands

| Command | Purpose |
|---|---|
| `docker build -t name:tag .` | Build image from Dockerfile |
| `docker pull image:tag` | Download image |
| `docker push image:tag` | Upload image to registry |
| `docker images` | List local images |
| `docker ps` | Running containers only |
| `docker ps -a` | All containers (incl. stopped) |
| `docker run -d image` | Run container in background |
| `docker run -it image bash` | Interactive shell |
| `docker run -p host:container image` | Port mapping |
| `docker run -v /host:/ctr image` | Volume mount |
| `docker exec -it ctr bash` | Shell into running container |
| `docker logs ctr` | View stdout/stderr |
| `docker stop ctr` | Graceful stop (SIGTERM → SIGKILL) |
| `docker kill ctr` | Immediate stop (SIGKILL) |
| `docker rm ctr` | Delete stopped container |
| `docker rmi image` | Delete image |
| `docker inspect ctr` | Full JSON metadata |

---

## Kubernetes Architecture — Component Roles

### Control Plane

| Component | Port | Role |
|---|---|---|
| **kube-apiserver** | **6443** | Front door; validates/authenticates all requests; only component that talks to etcd — MEMORIZE |
| **etcd** | **2379** (client), 2380 (peer) | Distributed KV store; single source of truth for all cluster state — MEMORIZE |
| **kube-scheduler** | — | Assigns unscheduled pods to nodes; does NOT start containers |
| **kube-controller-manager** | — | Runs reconciliation loops (ReplicaSet, Node, Endpoints, ServiceAccount) |
| **cloud-controller-manager** | — | Cloud-specific integrations (load balancers, node lifecycle); optional |

**MEMORIZE:** No component talks directly to another — everything goes through the API (Application Programming Interface) server. etcd loss = cluster config loss.

### Worker Node

| Component | Port | Role |
|---|---|---|
| **kubelet** | 10250 | Node agent; starts/stops containers via CRI; reports status to API server |
| **kube-proxy** | 10256 (health) | Implements Service routing via iptables/IPVS rules on each node |
| **container runtime** | — | containerd or CRI-O; actually runs containers; use `crictl` to inspect |

**MEMORIZE:** The scheduler *decides* where; the kubelet *starts* it. Two separate steps.

---

## Scheduler → Kubelet → Runtime Flow

```
kubectl apply -f pod.yaml
  → API Server (validates + stores in etcd)
    → Scheduler (watches, picks node, updates pod spec)
      → kubelet on target node (watches, pulls spec)
        → container runtime via CRI (starts container)
```

---

## Container Runtime Interface (CRI)

| Tool | When to Use |
|---|---|
| `docker` | Developer workstation (not exam nodes) |
| `crictl` | **CKA exam nodes** — use instead of docker |
| `ctr` | Low-level containerd CLI (Command Line Interface) |

| `crictl` command | Equivalent docker command |
|---|---|
| `crictl ps` | `docker ps` |
| `crictl images` | `docker images` |
| `crictl logs <id>` | `docker logs <id>` |
| `crictl inspect <id>` | `docker inspect <id>` |

**MEMORIZE:** On CKA exam nodes (containerd), `docker ps` returns nothing. Always use `crictl ps`.

---

## Core kubectl Commands

| Command | Purpose |
|---|---|
| `kubectl get pods` | List pods in current namespace |
| `kubectl get pods -A` | All pods, all namespaces |
| `kubectl get pods -o wide` | Add node + IP columns |
| `kubectl get pods -o yaml` | Full YAML output |
| `kubectl describe pod <name>` | Detailed info + Events |
| `kubectl logs <pod>` | Container stdout/stderr |
| `kubectl logs <pod> -c <ctr>` | Specific container logs |
| `kubectl exec -it <pod> -- bash` | Shell into pod |
| `kubectl apply -f file.yaml` | Create or update from file |
| `kubectl delete pod <name>` | Delete a pod |
| `kubectl get events --sort-by=.metadata.creationTimestamp` | Recent events |

## kubectl Imperative Commands (Exam Speed)

| Command | Creates |
|---|---|
| `kubectl run nginx --image=nginx` | Pod |
| `kubectl create deployment web --image=nginx --replicas=3` | Deployment |
| `kubectl expose deployment web --port=80 --type=ClusterIP` | Service |
| `kubectl scale deployment web --replicas=5` | Scales Deployment |
| `kubectl set image deployment/web nginx=nginx:1.25` | Updates image |
| `kubectl run nginx --image=nginx --dry-run=client -o yaml` | YAML template (no create) |

**MEMORIZE:** `--dry-run=client -o yaml` scaffolds manifests instantly. Redirect to a file and edit.

---

## Output Format Flags

| Flag | Output |
|---|---|
| *(none)* | Human-readable table |
| `-o wide` | Table + extra columns |
| `-o yaml` | Full YAML |
| `-o json` | Full JSON |
| `-o jsonpath='{.spec.nodeName}'` | Single field extraction |
| `--dry-run=client -o yaml` | Manifest preview without creating |

---

## Kubernetes Object Quick Reference

| Object | Purpose |
|---|---|
| **Pod** | Smallest deployable unit; 1+ containers sharing network + storage |
| **Deployment** | Manages ReplicaSets; rolling updates; rollback |
| **ReplicaSet** | Maintains N pod replicas; usually managed by Deployment |
| **Service** | Stable virtual IP + DNS (Domain Name System) name for a set of pods |
| **Namespace** | Virtual cluster; resource isolation within a cluster |
| **ConfigMap** | Non-sensitive config data injected into pods |
| **Secret** | Base64-encoded sensitive data (passwords, tokens) |
| **PersistentVolume (PV)** | Cluster-level storage resource |
| **PersistentVolumeClaim (PVC)** | Pod's request for storage; binds to a PV |
| **DaemonSet** | Runs one pod per node (e.g., kube-proxy, log agents) |

---

## Exam Traps — Quick Reference

| Trap | Truth |
|---|---|
| "Docker runs on CKA exam nodes" | containerd runs on exam nodes; use `crictl` |
| "Scheduler starts containers" | Scheduler *assigns* nodes; kubelet *starts* containers |
| "etcd is a cache" | etcd is the **source of truth**; loss without backup = disaster |
| "`docker stop` deletes the container" | No — it stops it; `docker rm` deletes it |
| "Containers are as isolated as VMs" | No — containers share the kernel; VMs do not |
| "All components talk to each other" | Everything goes through the API server |
