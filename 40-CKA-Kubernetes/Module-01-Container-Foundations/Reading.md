# 🎯 Module 1: Container Foundations

> **CKA Exam Domain:** Cluster Architecture, Installation & Configuration — 25% of the exam

---

## 📚 The Story That Changed Software Deployment Forever

Imagine it's 1955 and you run a shipping company. Every cargo ship is a different size. Every port loads cargo differently. Boxes are different shapes. Moving a crate from Shanghai to Rotterdam means re-packing everything at every port. The cost is absurd. The delays are constant. The waste is enormous.

Then, in 1956, a trucking entrepreneur named Malcom McLean invented the standardized shipping container. One size. One interface. Load it on a truck, a train, a ship — it doesn't matter. The container abstracts away the "how do we move this" problem. Global trade exploded.

Software had the same problem for decades. You'd build an application on your MacBook, ship it to a Linux staging server, and the ops team would spend a week debugging why it didn't work. "It works on my machine" became the infamous developer excuse — and it was a legitimate one.

**Docker, launched in 2013, was software's shipping container.**

And just as the invention of containers didn't solve the problem of *scheduling 10,000 containers across 50 ships at 30 ports simultaneously* — that required modern logistics software — Docker alone didn't solve the problem of running thousands of containers across hundreds of servers. That required **Kubernetes**.

This module gives you the conceptual foundation that everything else in CKA builds on. Understand containers deeply, and the rest of the exam becomes logical rather than memorized.

---

## 🔬 Why Containerization? The Problem with the Old World

### The "Works on My Machine" Problem

Traditional deployment had a fundamental mismatch: developers built software in one environment; operations ran it in another. Libraries, OS versions, runtime configurations, environment variables — any of these could differ and cause failures.

The classic solution was **Virtual Machines (VMs)**: run a full operating system inside another operating system. This guaranteed environment consistency, but at enormous cost.

### VMs vs. Containers

| Dimension | Virtual Machine | Container |
|---|---|---|
| What it virtualizes | Full hardware (CPU, RAM, disk, network) | OS process namespace only |
| Boot time | 30 seconds to several minutes | Milliseconds |
| Image size | Gigabytes (full OS included) | Megabytes (shared OS kernel) |
| Isolation level | Strong (hypervisor boundary) | Process-level (shared kernel) |
| Resource overhead | High (each VM runs a full OS) | Very low |
| Portability | Good (but heavyweight) | Excellent (lightweight) |
| Use case | Running different OSes, strong security boundary | Microservices, CI/CD, scale-out apps |
| Examples | VMware, VirtualBox, KVM, Hyper-V | Docker, containerd, CRI-O |

**MEMORIZE THIS.** Containers share the host OS kernel. VMs do not. This is the fundamental architectural difference, and it explains every other row in the table above.

### How Containers Achieve Isolation

Containers are not magic — they are Linux kernel features composed together:

- **Namespaces** — isolate what a process *can see*: PID namespace (own process tree), network namespace (own network stack), mount namespace (own filesystem view), UTS namespace (own hostname), IPC namespace (own inter-process communication).
- **cgroups (control groups)** — limit what a process *can use*: CPU, memory, I/O, network bandwidth.
- **Union Filesystems (OverlayFS)** — layer images efficiently so containers share common layers and only write their own differences.

> 🚨 **Trap on the exam:** The CKA will sometimes ask about container security boundaries. Containers are *not* as isolated as VMs because they share the kernel. A kernel exploit can escape a container. The exam distinguishes between "process isolation" (containers) and "hardware virtualization" (VMs). Don't conflate them.

---

## 🔬 Docker Fundamentals

### Images, Containers, and Layers

An **image** is a read-only blueprint. A **container** is a running instance of an image — like a class and an object in programming.

Images are built in **layers**. Each instruction in a Dockerfile (`FROM`, `RUN`, `COPY`, `ENV`) creates a new layer. Layers are cached and shared across images and containers. This is why pulling `nginx` the second time is instant — the layers are already local.

```
[Image Layer: Ubuntu 22.04 base]      ← shared by many images
[Image Layer: apt-get install python]  ← shared by python images
[Image Layer: COPY app.py /app/]       ← unique to this image
[Container Write Layer]                ← writable, unique to each container
```

When a container writes to a file that exists in an image layer, it uses **copy-on-write (CoW)**: the file is copied to the container's writable layer before modification. The original image layer is untouched.

**MEMORIZE THIS.** Image layers are read-only. Only the container's top layer is writable. When a container is deleted, the writable layer is gone — data not written to a volume is lost.

### Dockerfile → Image → Container Flow

```dockerfile
FROM ubuntu:22.04          # Base image (layer 1)
RUN apt-get update && \
    apt-get install -y python3  # New layer
WORKDIR /app               # New layer
COPY app.py .              # New layer
CMD ["python3", "app.py"]  # Metadata only (no new layer)
```

Build it: `docker build -t myapp:v1 .`
Run it: `docker run -d -p 8080:8080 myapp:v1`

### Docker Command Cheatsheet

| Command | What It Does |
|---|---|
| `docker build -t name:tag .` | Build an image from a Dockerfile in current directory |
| `docker pull image:tag` | Download an image from a registry |
| `docker push image:tag` | Upload an image to a registry |
| `docker images` | List all local images |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (including stopped) |
| `docker run -d image` | Run container in detached (background) mode |
| `docker run -it image bash` | Run container interactively with a shell |
| `docker run -p 8080:80 image` | Map host port 8080 → container port 80 |
| `docker run -v /host:/container image` | Mount a host directory as a volume |
| `docker exec -it container bash` | Open a shell in a running container |
| `docker logs container` | View container stdout/stderr |
| `docker stop container` | Gracefully stop a container (SIGTERM) |
| `docker kill container` | Force-stop a container (SIGKILL) |
| `docker rm container` | Delete a stopped container |
| `docker rmi image` | Delete an image |
| `docker inspect container` | Show detailed container metadata (JSON) |
| `docker network ls` | List Docker networks |
| `docker volume ls` | List Docker volumes |

### Container Lifecycle States

Understanding the container lifecycle is essential — Kubernetes pod phases mirror this model.

| State | Description | How You Get Here |
|---|---|---|
| **Created** | Container exists but has not started | `docker create` |
| **Running** | Process is executing | `docker start` / `docker run` |
| **Paused** | Process is frozen (SIGSTOP) | `docker pause` |
| **Stopped (Exited)** | Process has terminated | Normal exit, `docker stop`, crash |
| **Dead** | Container failed to be properly removed | Rare error state |
| **Restarting** | Container is being restarted by restart policy | Depends on `--restart` flag |

**MEMORIZE THIS.** A container is *stopped* but not *deleted* after `docker stop`. It still exists and can be restarted with `docker start`. You must explicitly `docker rm` to delete it.

> 🎯 **Exam tip:** In CKA, you will see the equivalent of these states in Kubernetes pod phases: `Pending`, `Running`, `Succeeded`, `Failed`, `Unknown`. The underlying container states map directly to pod phases. When a pod is stuck in `Pending`, the container hasn't started yet — check scheduling constraints. When stuck in `Running` but not ready, check liveness/readiness probes.

---

## 🔬 Why Kubernetes? the Multi-Host Scheduling Problem

Docker solved the packaging problem. But in a real production system, you have:

- Hundreds or thousands of containers
- Multiple physical or virtual servers
- Containers that crash and need restarting
- Need to roll out new versions without downtime
- Traffic that needs load balancing across container instances
- Containers that need to find each other (service discovery)

Running `docker run` manually on individual servers doesn't scale. You need a system that treats your cluster of servers as a single pool of compute and intelligently places, monitors, and reschedules containers.

**This is exactly what Kubernetes does.**

Think of Kubernetes as the global freight logistics system built on top of McLean's standardized containers. It handles:

| Problem | Kubernetes Solution |
|---|---|
| "Where should this container run?" | **Scheduler** assigns pods to nodes based on resource availability and constraints |
| "It crashed — restart it" | **ReplicaSet / Deployment controller** detects and recreates failed pods |
| "Roll out v2 without downtime" | **Rolling update** strategy in Deployments |
| "How do containers find each other?" | **Services** and **CoreDNS** provide stable IPs and DNS names |
| "Scale from 2 to 20 copies" | **Horizontal Pod Autoscaler** scales replica counts |
| "Store configuration securely" | **ConfigMaps** and **Secrets** |
| "Persist data across restarts" | **PersistentVolumes** and **PersistentVolumeClaims** |

---

## 🔬 Kubernetes Architecture: Control Plane and Worker Nodes

A Kubernetes cluster has two types of machines:

```
┌─────────────────────────────────────────┐
│            CONTROL PLANE                │
│  ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │API Server│ │Scheduler │ │ Ctrlr  │  │
│  └──────────┘ └──────────┘ │ Mgr    │  │
│  ┌──────────┐              └────────┘  │
│  │   etcd   │                          │
│  └──────────┘                          │
└─────────────────────────────────────────┘
           │ (API calls)
┌──────────┴──────────┐  ┌──────────────────┐
│    WORKER NODE 1    │  │  WORKER NODE 2   │
│  ┌────────────────┐ │  │ ┌──────────────┐ │
│  │ Pod: nginx     │ │  │ │ Pod: redis   │ │
│  │ Pod: app-v2    │ │  │ │ Pod: worker  │ │
│  └────────────────┘ │  │ └──────────────┘ │
│  kubelet  kube-proxy│  │ kubelet kube-proxy│
└─────────────────────┘  └──────────────────┘
```

### Control Plane Components

**MEMORIZE THIS.** The control plane is the brain of Kubernetes. All decisions are made here.

#### kube-apiserver
The front door of Kubernetes. Every interaction — `kubectl` commands, internal component communication, external integrations — goes through the API server. It validates requests, authenticates users, authorizes actions, and persists state to etcd. If the API server is down, nothing works.

**Key facts:**
- Listens on port **6443** (HTTPS)
- All components talk to it — no component talks to another directly (except via the API server)
- Stateless — can be horizontally scaled

#### etcd
A distributed key-value store that holds the entire cluster state. Think of it as Kubernetes' database. Every object you create (Pod, Deployment, Service) is stored here.

**Key facts:**
- Port **2379** (client), **2380** (peer)
- **MEMORIZE THIS.** All cluster state lives in etcd. Losing etcd without a backup = losing your cluster configuration entirely.
- Uses the Raft consensus algorithm for distributed consistency
- Should be backed up regularly (`etcdctl snapshot save`)

#### kube-scheduler
Watches for newly created pods that have no node assigned and selects the best node for them. The scheduler evaluates every node based on resource requests/limits, affinity/anti-affinity rules, taints and tolerations, and available ports.

**Key facts:**
- The scheduler *decides* where a pod goes; it does NOT *start* the pod
- The kubelet on the target node does the actual starting

#### kube-controller-manager
Runs all the built-in controller loops. Each controller watches the API server for its resource type and reconciles the actual state toward the desired state.

Built-in controllers include:
- **Node Controller** — detects and responds to node failures
- **ReplicaSet Controller** — maintains the correct number of pod replicas
- **Endpoints Controller** — populates Services with pod IPs
- **ServiceAccount Controller** — creates default service accounts in new namespaces

**MEMORIZE THIS.** The controller pattern: observe desired state → observe current state → take action to close the gap. This reconciliation loop is the heart of Kubernetes.

#### cloud-controller-manager (optional)
In cloud environments (AWS, GCP, Azure), this component handles cloud-specific logic: managing load balancers, node lifecycle, routes. It separates cloud provider code from core Kubernetes.

### Worker Node Components

Every worker node runs three key processes:

#### kubelet
The node agent. The kubelet watches the API server for pods assigned to its node, then instructs the container runtime to start, stop, and report on containers. It also runs liveness and readiness probes.

**Key facts:**
- Communicates with the API server (pulls pod specs, pushes status)
- Does NOT run as a pod — it's a system process on the node
- If the kubelet fails, the node's pods will still run temporarily but won't be managed

#### kube-proxy
Implements Services by maintaining network rules (iptables or IPVS rules) that forward traffic to the correct pod IPs. When you access a Service ClusterIP, kube-proxy's rules route the traffic.

**Key facts:**
- Runs as a DaemonSet on every node
- Does NOT proxy at the application layer — it works at the OS network level
- Port **10250** (kubelet), **10256** (kube-proxy health check)

#### Container Runtime
The software that actually runs containers. Kubernetes speaks to the runtime via the **Container Runtime Interface (CRI)**.

Supported runtimes:
- **containerd** — most common in modern clusters, default in kind and many cloud providers
- **CRI-O** — lightweight, OpenShift's preferred runtime
- **Docker Engine** (via dockershim) — deprecated and removed in Kubernetes 1.24

**MEMORIZE THIS.** As of Kubernetes 1.24, Docker Engine is no longer a supported container runtime. containerd (which Docker itself uses internally) is the standard. The CKA exam uses containerd clusters.

---

## 🔬 The CRI and Container Runtime Interface

Kubernetes abstracts the container runtime behind the **CRI API**. This allows swapping runtimes without changing Kubernetes itself. The kubelet calls CRI methods like `RunPodSandbox`, `CreateContainer`, `StartContainer`, and `StopContainer`.

When you use `crictl` on a CKA exam node (instead of `docker`), you're talking directly to the CRI-compatible runtime.

```bash
# crictl equivalents for docker commands
crictl ps              # docker ps
crictl images          # docker images
crictl logs <id>       # docker logs
crictl inspect <id>    # docker inspect
```

> 🚨 **Trap on the exam:** On CKA exam nodes, `docker` may not be installed or may not control the runtime (containerd is used). Always use `crictl` to inspect containers on nodes. Using `docker ps` may return empty results even when containers are running.

---

## 🔬 kubectl Basics

`kubectl` is the command-line interface to the Kubernetes API server. Every `kubectl` command translates to an API call.

### Essential kubectl Commands

```bash
# Cluster and context management
kubectl cluster-info
kubectl config get-contexts
kubectl config use-context <name>
kubectl config current-context

# Working with resources
kubectl get pods                          # List pods in current namespace
kubectl get pods -n kube-system           # List pods in kube-system namespace
kubectl get pods --all-namespaces         # List pods in all namespaces
kubectl get pods -o wide                  # Show extra info (node, IP)
kubectl get pods -o yaml                  # Full YAML output
kubectl describe pod <name>               # Detailed info + events
kubectl logs <pod>                        # Container logs
kubectl logs <pod> -c <container>         # Specific container logs
kubectl exec -it <pod> -- bash            # Shell into a pod
kubectl apply -f manifest.yaml            # Create or update from file
kubectl delete -f manifest.yaml           # Delete from file
kubectl delete pod <name>                 # Delete a pod
kubectl get events --sort-by=.metadata.creationTimestamp  # Recent events

# Quick imperative commands (exam speed)
kubectl run nginx --image=nginx           # Create a pod
kubectl create deployment web --image=nginx --replicas=3
kubectl expose deployment web --port=80 --type=ClusterIP
kubectl scale deployment web --replicas=5
kubectl set image deployment/web nginx=nginx:1.25
```

### kubectl Output Formats

| Flag | Output |
|---|---|
| *(none)* | Human-readable table |
| `-o wide` | Table with extra columns |
| `-o yaml` | Full YAML manifest |
| `-o json` | Full JSON |
| `-o jsonpath='{.spec.nodeName}'` | Extract specific field |
| `-o custom-columns=NAME:.metadata.name` | Custom column output |
| `--dry-run=client -o yaml` | Generate YAML without creating |

**MEMORIZE THIS.** `--dry-run=client -o yaml` is your fastest way to generate manifest templates in the exam. Example: `kubectl run pod1 --image=nginx --dry-run=client -o yaml > pod1.yaml`

---

## ⚠️ Common Pitfalls and Misconceptions

### Pitfall 1: "Kubernetes runs Docker"
Kubernetes does not run Docker directly. It uses containerd (or another CRI runtime). Docker is a developer tool; containerd is the production runtime. The CKA exam clusters use containerd.

### Pitfall 2: "etcd is just a cache"
etcd is the *source of truth* for all cluster state. It is not a cache. If etcd loses data (without a backup), your cluster's entire configuration is gone — nodes, pods, services, RBAC rules, everything.

### Pitfall 3: "The scheduler starts pods"
The scheduler *assigns* pods to nodes by writing the node name to the pod's spec. The kubelet on that node *starts* the containers. Two separate steps, two separate components.

### Pitfall 4: "Deleting a pod deletes its data"
Unless data is written to a PersistentVolume, it is stored in the container's writable layer and will be lost when the pod is deleted. This is expected behavior — pods are ephemeral by design.

---

## 📋 Summary

| Concept | Key Takeaway |
|---|---|
| Containers vs VMs | Containers share kernel (fast, lightweight); VMs virtualize hardware (strong isolation) |
| Images vs Containers | Image = blueprint (read-only layers); Container = running instance + writable layer |
| Copy-on-Write | Container writes go to a new layer; original image untouched |
| Why Kubernetes | Scheduling, healing, scaling, service discovery across many hosts |
| API Server | Single entry point for all cluster operations; port 6443 |
| etcd | Cluster's database; lose it = lose everything; must be backed up |
| Scheduler | Decides *where* pods run; kubelet *starts* them |
| Controller Manager | Reconciliation loops that drive actual state toward desired state |
| kubelet | Node agent; talks to API server; instructs container runtime |
| kube-proxy | Implements Service routing via iptables/IPVS |
| Container Runtime | containerd is the standard; talk to it via `crictl` on exam nodes |
| kubectl dry-run | `--dry-run=client -o yaml` generates manifests without creating objects |

---

## 🚀 Next Steps

- Complete the Module 1 Quiz (26 questions, aim for 20+)
- Review the Module 1 Cheat Sheet — print it and keep it during practice
- Set up a local cluster (kind or minikube) and run through all kubectl commands hands-on
- Practice `kubectl run`, `kubectl create`, `kubectl expose`, and `kubectl describe` until they are automatic
- Move to **Module 2: Cluster Architecture** for deep dives on cluster setup, kubeadm, and TLS bootstrapping

---

## 📚 Further Reading

- [Kubernetes Official Docs — Cluster Architecture](https://kubernetes.io/docs/concepts/architecture/)
- [Kubernetes Official Docs — Container Runtimes](https://kubernetes.io/docs/setup/production-environment/container-runtimes/)
- [etcd Documentation](https://etcd.io/docs/)
- [Docker Overview](https://docs.docker.com/get-started/overview/)
- [OCI Runtime Specification](https://opencontainers.org/posts/blog/2021-04-29-oci-runtime-spec/)
- [Kelsey Hightower — Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) — build a cluster from scratch to understand every component
