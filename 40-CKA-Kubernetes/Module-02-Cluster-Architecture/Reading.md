# Module 2: Cluster Architecture, Installation & Configuration

> **CKA Exam Domain:** Cluster Architecture, Installation & Configuration — **25%** of your exam score.
> This is the second-highest weighted domain. Master every concept here.

---

## 🏙️ The City Analogy: How Kubernetes Is Actually Organized

Imagine you are the mayor of a rapidly growing city. Citizens submit requests every day: "I need a new apartment building." "Can we add a fire station?" "We need to expand the water treatment plant."

Your city runs on two distinct systems:

**City Hall (The Control Plane)** — The brains. Here the mayor's office (kube-apiserver) receives all requests. Urban planners (kube-scheduler) decide which neighborhood gets which building. The city council (kube-controller-manager) constantly checks that reality matches the approved plans. The city archives (etcd) store every zoning record, deed, and permit ever issued. Nothing happens without City Hall's approval.

**Construction Crews (Worker Nodes)** — The muscle. Each crew has a foreman (kubelet) who talks to City Hall, receives blueprints, and makes sure the right buildings go up. Crew logistics (kube-proxy) handle traffic routing between buildings. The actual machinery (container runtime) does the physical construction.

This analogy maps directly to Kubernetes. Once it clicks, the exam questions become significantly easier.

---

## 🗺️ The Big Picture: Control Plane vs. Worker Nodes

```
┌──────────────────────────────────────────────────────────────────┐
│                         CONTROL PLANE                            │
│                                                                  │
│  ┌─────────────────┐  ┌──────────────┐  ┌─────────────────────┐ │
│  │  kube-apiserver │  │  etcd        │  │ kube-controller-mgr │ │
│  │  (front door)   │  │  (records)   │  │ (reconciliation)    │ │
│  └─────────────────┘  └──────────────┘  └─────────────────────┘ │
│                                                                  │
│  ┌─────────────────┐  ┌──────────────────────────────────────┐  │
│  │ kube-scheduler  │  │  cloud-controller-manager (optional) │  │
│  │ (placement)     │  │  (cloud provider integration)        │  │
│  └─────────────────┘  └──────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────┘

┌─────────────────────────┐  ┌─────────────────────────┐
│       WORKER NODE 1     │  │       WORKER NODE 2     │
│  ┌──────────────────┐   │  │  ┌──────────────────┐   │
│  │ kubelet          │   │  │  │ kubelet          │   │
│  │ kube-proxy       │   │  │  │ kube-proxy       │   │
│  │ container runtime│   │  │  │ container runtime│   │
│  └──────────────────┘   │  │  └──────────────────┘   │
└─────────────────────────┘  └─────────────────────────┘
```

---

## 🏛️ Control Plane Components Deep Dive

### kube-apiserver

The **only** component that talks directly to etcd. Every kubectl command, every controller query, every kubelet heartbeat passes through here first. It validates requests, authenticates callers, enforces authorization (RBAC), and then writes to or reads from etcd.

**MEMORIZE THIS.** The apiserver is the single gateway to the cluster state. All other components talk to etcd exclusively through the apiserver.

### etcd

A distributed, consistent key-value store based on the Raft consensus algorithm. Kubernetes stores *all* cluster state here — pod specs, service definitions, secrets, configmaps, RBAC policies, everything.

**MEMORIZE THIS.** etcd listens on port **2379** (client traffic) and **2380** (peer-to-peer traffic between etcd members).

### kube-scheduler

Watches for newly created Pods with no assigned node. Runs them through a filtering stage (which nodes *can* run this pod?) and a scoring stage (which node *should* run it?). Writes the binding back through the apiserver. The scheduler does NOT start the pod — it only decides placement.

### kube-controller-manager

A single binary that runs dozens of control loops (controllers) simultaneously. Each controller watches the desired state (in etcd, via apiserver) and drives the actual state toward it.

Key controllers you must know:

- **Node Controller** — detects node failures, marks nodes `NotReady`, evicts pods after timeout
- **ReplicaSet Controller** — ensures the correct number of pod replicas exist
- **Endpoints Controller** — populates the Endpoints objects that back Services
- **ServiceAccount & Token Controllers** — create default service accounts and API tokens
- **Job Controller** — manages batch job pods to completion

### cloud-controller-manager

Separates cloud-specific logic from the core Kubernetes controller manager. Manages LoadBalancer services, routes, and node lifecycle on cloud providers. Not present in on-premises clusters.

| Component | Primary Role | Port(s) | Talks To |
|---|---|---|---|
| kube-apiserver | REST API gateway, auth/authz, validation | 6443 | etcd, all other components |
| etcd | Persistent state store (key-value) | 2379, 2380 | kube-apiserver only |
| kube-scheduler | Pod-to-node placement decisions | 10259 (HTTPS) | kube-apiserver |
| kube-controller-manager | Runs all built-in control loops | 10257 (HTTPS) | kube-apiserver |
| cloud-controller-manager | Cloud provider integration | 10258 | kube-apiserver, cloud API |

---

## ⚙️ Worker Node Components Deep Dive

### kubelet

The node agent. Runs on every node — including control plane nodes in `kubeadm` clusters. Responsibilities:

1. Registers the node with the apiserver
2. Watches for PodSpecs assigned to its node
3. Pulls container images via the container runtime interface (CRI)
4. Reports node and pod status back to the apiserver
5. Manages pod lifecycle: starts, stops, restarts containers per spec
6. Handles **liveness**, **readiness**, and **startup** probes
7. Manages **static pods** (reads from `/etc/kubernetes/manifests/`)

**MEMORIZE THIS.** The kubelet is the only component that is *not* a static pod itself — it is a systemd service that starts everything else on the node.

### kube-proxy

Runs on every node, maintains network rules (iptables or IPVS). Translates Service virtual IPs to actual pod IPs. Does NOT handle pod-to-pod networking directly — that is the CNI plugin's job.

### Container Runtime

The software that actually runs containers. Kubernetes uses the **Container Runtime Interface (CRI)** so any compliant runtime works.

| Runtime | Description | Default Socket |
|---|---|---|
| containerd | Industry standard, used by most managed Kubernetes | `/run/containerd/containerd.sock` |
| CRI-O | Lightweight, OCI-compliant, used by OpenShift | `/var/run/crio/crio.sock` |
| Docker Engine | Supported via cri-dockerd shim (not native CRI) | Deprecated in K8s 1.24+ |

> 🎯 **Exam tip:** The CKA exam environment uses **containerd**. Commands like `crictl ps`, `crictl logs`, and `crictl inspect` are your tools for debugging containers at the node level when `kubectl` is unavailable.

| Component | Runs On | Role | Managed By |
|---|---|---|---|
| kubelet | Every node | Node agent, pod lifecycle | systemd |
| kube-proxy | Every node | Service networking / iptables | DaemonSet (in kubeadm clusters) |
| Container runtime | Every node | Runs containers | systemd |

---

## 📦 Static Pods: The Bootstrap Trick

Control plane components (apiserver, scheduler, controller-manager, etcd) need to run *before* the Kubernetes API is available. Kubernetes solves this with **static pods**.

The kubelet reads YAML manifests from `/etc/kubernetes/manifests/` and directly creates pods — no apiserver involved. These pods are called static pods.

**MEMORIZE THIS.** Static pod manifest directory: `/etc/kubernetes/manifests/`

Files you will find there after `kubeadm init`:

```
/etc/kubernetes/manifests/
├── etcd.yaml
├── kube-apiserver.yaml
├── kube-controller-manager.yaml
└── kube-scheduler.yaml
```

To modify a control plane component, **edit the YAML file in that directory**. The kubelet watches the directory and automatically restarts the pod when the file changes. Do NOT use `kubectl edit` on static pods — your changes will be lost.

> 🚨 **Trap on the exam:** If you see a control plane pod not starting after editing, check `/etc/kubernetes/manifests/` for syntax errors. The kubelet silently drops invalid manifests. Use `crictl ps -a` and `crictl logs <container-id>` to debug.

---

## 🔧 kubeadm: Installing a Cluster

`kubeadm` is the official cluster bootstrapper. It handles certificate generation, manifest creation, and node joining. The CKA exam frequently tests your ability to use it under realistic conditions.

### Phase 1: Pre-flight (`kubeadm init`)

`kubeadm init` runs a preflight checklist: swap disabled, container runtime accessible, required ports open, etc. If preflight fails, it tells you exactly what is wrong.

### The `kubeadm init` Workflow

```bash
# Basic init on the control plane node
kubeadm init \
  --pod-network-cidr=10.244.0.0/16 \       # required for most CNI plugins
  --apiserver-advertise-address=<IP> \       # which IP apiserver listens on
  --control-plane-endpoint=<LB_IP>:6443      # for HA: the load balancer address
```

After `kubeadm init` completes:

```bash
# Set up kubeconfig so kubectl works
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

### The `kubeadm join` Workflow

Worker nodes join using the token and discovery hash printed at the end of `kubeadm init`:

```bash
kubeadm join <control-plane-IP>:6443 \
  --token <token> \
  --discovery-token-ca-cert-hash sha256:<hash>
```

Tokens expire after 24 hours by default. To generate a new one:

```bash
kubeadm token create --print-join-command
```

### Full kubeadm Workflow Steps

| Step | Command / Action | What Happens |
|---|---|---|
| 1. Preflight | `kubeadm init` (auto) | Validates OS, runtime, ports, swap |
| 2. Cert generation | `kubeadm init` (auto) | Creates CA + all component certs in `/etc/kubernetes/pki/` |
| 3. Kubeconfig files | `kubeadm init` (auto) | Creates admin.conf, controller-manager.conf, scheduler.conf |
| 4. Static pod manifests | `kubeadm init` (auto) | Writes YAML files to `/etc/kubernetes/manifests/` |
| 5. Wait for control plane | `kubeadm init` (auto) | Polls apiserver until it responds |
| 6. Bootstrap tokens | `kubeadm init` (auto) | Creates short-lived join token |
| 7. Install CNI plugin | Manual | e.g., `kubectl apply -f flannel.yaml` |
| 8. Join workers | `kubeadm join ...` | Kubelet sends CSR, gets cert, registers node |

---

## 🔐 Certificates and TLS in Kubernetes

Kubernetes uses mutual TLS (mTLS) for all control plane communication. Every component has its own certificate, and every certificate is signed by the cluster's Certificate Authority (CA).

### Certificate Authority Structure

**MEMORIZE THIS.** After `kubeadm init`, all PKI files live in `/etc/kubernetes/pki/`:

```
/etc/kubernetes/pki/
├── ca.crt                    # Cluster CA certificate (public)
├── ca.key                    # Cluster CA key (KEEP SECURE)
├── apiserver.crt             # apiserver server cert
├── apiserver.key
├── apiserver-kubelet-client.crt    # apiserver → kubelet client cert
├── apiserver-kubelet-client.key
├── apiserver-etcd-client.crt       # apiserver → etcd client cert
├── apiserver-etcd-client.key
├── front-proxy-ca.crt        # Front proxy CA
├── front-proxy-ca.key
├── front-proxy-client.crt
├── front-proxy-client.key
└── etcd/
    ├── ca.crt                # etcd CA (separate from cluster CA)
    ├── ca.key
    ├── server.crt            # etcd server cert
    ├── server.key
    ├── peer.crt              # etcd peer cert
    ├── peer.key
    ├── healthcheck-client.crt
    └── healthcheck-client.key
```

### Certificate Expiry and Renewal

Certificates generated by kubeadm expire after **1 year** by default.

```bash
# Check certificate expiry dates
kubeadm certs check-expiration

# Renew all certificates
kubeadm certs renew all

# Renew a specific cert
kubeadm certs renew apiserver
```

**MEMORIZE THIS.** After renewing certificates, you must restart the static pod containers. The easiest way is to move the manifest out of `/etc/kubernetes/manifests/` and back in, or use `crictl` to stop the containers.

---

## 🗄️ etcd: Architecture, Backup, and Restore

etcd is the most critical piece of your cluster. If etcd is lost, your cluster state is gone. Backup procedures are **guaranteed to appear** on the CKA exam.

### Raft Consensus

etcd uses the Raft algorithm for distributed consensus. In a cluster of `n` nodes:

- Requires a **quorum** of `⌊n/2⌋ + 1` nodes to elect a leader and commit writes
- Recommended sizes: **3 nodes** (tolerates 1 failure) or **5 nodes** (tolerates 2 failures)
- An even number of nodes (2, 4) does NOT improve fault tolerance — use odd numbers

**MEMORIZE THIS.** With 3 etcd members, you can lose 1 and remain operational. With 5 members, you can lose 2.

### etcdctl: The Command-Line Client

The `etcdctl` binary manages etcd. Always set `--endpoints`, `--cacert`, `--cert`, and `--key` for authenticated clusters.

**MEMORIZE THIS.** Set this environment variable first to use v3 of the API:

```bash
export ETCDCTL_API=3
```

### Snapshot Backup (Exact Exam Syntax)

```bash
ETCDCTL_API=3 etcdctl snapshot save /opt/etcd-backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

Verify the backup:

```bash
ETCDCTL_API=3 etcdctl snapshot status /opt/etcd-backup.db \
  --write-out=table
```

### Snapshot Restore (Exact Exam Syntax)

```bash
# Step 1: Restore snapshot to a new data directory
ETCDCTL_API=3 etcdctl snapshot restore /opt/etcd-backup.db \
  --data-dir=/var/lib/etcd-restore \
  --name=master \
  --initial-cluster=master=https://127.0.0.1:2380 \
  --initial-advertise-peer-urls=https://127.0.0.1:2380

# Step 2: Update the etcd static pod manifest to use the new data directory
# Edit /etc/kubernetes/manifests/etcd.yaml
# Change: --data-dir=/var/lib/etcd
# To:     --data-dir=/var/lib/etcd-restore
# Also update the hostPath volume to point to /var/lib/etcd-restore
```

> 🎯 **Exam tip:** On the exam, the `etcdctl` TLS flags are always required when talking to a kubeadm cluster. The certificates live in `/etc/kubernetes/pki/etcd/`. Memorize that path — you will type it under pressure.

---

## 🏗️ High Availability: Stacked vs. External etcd

When running Kubernetes in production (and when the CKA asks you to design an HA cluster), there are two etcd topologies.

### Stacked etcd Topology

etcd runs **on the same nodes** as the control plane components. Each control plane node has: apiserver + controller-manager + scheduler + etcd.

**Pros:** Simpler setup, fewer machines needed, kubeadm supports it natively.  
**Cons:** If a control plane node is lost, you lose both a control plane member AND an etcd member simultaneously.

```
Control Plane Node 1        Control Plane Node 2        Control Plane Node 3
┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐
│  apiserver           │    │  apiserver           │    │  apiserver           │
│  controller-manager  │    │  controller-manager  │    │  controller-manager  │
│  scheduler           │    │  scheduler           │    │  scheduler           │
│  etcd ←──────────────┼────┼──► etcd ◄────────────┼────┼──► etcd              │
└─────────────────────┘    └─────────────────────┘    └─────────────────────┘
         ↑                           ↑                           ↑
         └────────────── Load Balancer ──────────────────────────┘
```

### External etcd Topology

etcd runs on **dedicated nodes**, separate from the control plane.

**Pros:** etcd failures do not affect control plane node count; scales independently.  
**Cons:** More machines required, more complex setup.

```
Control Plane Nodes              External etcd Cluster
┌─────────────────┐             ┌──────────┐
│  apiserver       │ ──────────► │  etcd-1  │
│  controller-mgr  │             ├──────────┤
│  scheduler       │             │  etcd-2  │
└─────────────────┘             ├──────────┤
┌─────────────────┐             │  etcd-3  │
│  apiserver       │ ──────────► └──────────┘
│  controller-mgr  │
│  scheduler       │
└─────────────────┘
         ↑
    Load Balancer
```

### HA Topology Comparison

| Attribute | Stacked etcd | External etcd |
|---|---|---|
| Minimum nodes for HA | 3 control plane nodes | 3 control plane + 3 etcd nodes |
| etcd failure impact | Loses control plane member too | Isolated to etcd cluster |
| Setup complexity | Lower (kubeadm native) | Higher |
| Cost | Lower (fewer VMs) | Higher |
| Data protection | Moderate | High |
| CKA exam likelihood | Higher | Know the concept |

**MEMORIZE THIS.** For stacked etcd HA, the minimum is **3 control plane nodes**. For external etcd HA, the minimum is **3 control plane nodes + 3 etcd nodes** (6 total).

---

## 🔩 kubelet Configuration

The kubelet is configured via:

1. **Command-line flags** (deprecated, still functional)
2. **KubeletConfiguration** file (preferred): `/var/lib/kubelet/config.yaml`
3. **Environment file**: `/etc/kubernetes/kubelet.env` (on some distributions)

```bash
# Check kubelet service
systemctl status kubelet

# View kubelet configuration
cat /var/lib/kubelet/config.yaml

# View kubelet startup flags
systemctl cat kubelet

# Restart kubelet after config changes
systemctl daemon-reload && systemctl restart kubelet
```

The kubelet configuration file at `/var/lib/kubelet/config.yaml` controls:
- `clusterDNS` — the DNS server IP for pods
- `clusterDomain` — the cluster domain (default: `cluster.local`)
- `staticPodPath` — where to read static pod manifests (default: `/etc/kubernetes/manifests/`)
- `cgroupDriver` — must match the container runtime (`cgroupfs` or `systemd`)

**MEMORIZE THIS.** The cgroup driver in the kubelet config and in the container runtime config **must match**. A mismatch causes all pods to fail to start. kubeadm sets both to `systemd` by default.

---

## 📋 Component Configuration File Locations

| Component | Config/Manifest Path |
|---|---|
| kube-apiserver (static pod) | `/etc/kubernetes/manifests/kube-apiserver.yaml` |
| kube-controller-manager (static pod) | `/etc/kubernetes/manifests/kube-controller-manager.yaml` |
| kube-scheduler (static pod) | `/etc/kubernetes/manifests/kube-scheduler.yaml` |
| etcd (static pod) | `/etc/kubernetes/manifests/etcd.yaml` |
| kubelet config | `/var/lib/kubelet/config.yaml` |
| kubelet kubeconfig | `/etc/kubernetes/kubelet.conf` |
| admin kubeconfig | `/etc/kubernetes/admin.conf` |
| controller-manager kubeconfig | `/etc/kubernetes/controller-manager.conf` |
| scheduler kubeconfig | `/etc/kubernetes/scheduler.conf` |
| PKI directory | `/etc/kubernetes/pki/` |
| etcd data (default) | `/var/lib/etcd/` |

---

## 🌐 Container Network Interface (CNI)

kubeadm does not install a CNI plugin — you must do this after `kubeadm init`. The cluster will show nodes as `NotReady` until a CNI is installed.

Common CNI plugins and their `--pod-network-cidr` requirements:

| CNI Plugin | Typical CIDR | Install Method |
|---|---|---|
| Flannel | `10.244.0.0/16` | `kubectl apply -f flannel.yaml` |
| Calico | `192.168.0.0/16` | `kubectl apply -f calico.yaml` |
| Weave | Any | `kubectl apply -f weave.yaml` |
| Cilium | Flexible | Helm chart |

> 🎯 **Exam tip:** The exam tells you which CNI to install and usually provides the `kubectl apply` command. Your job is to run it correctly and verify nodes reach `Ready` state. Use `kubectl get nodes` to confirm.

---

## 🔄 Upgrading a Cluster with kubeadm

The CKA exam may ask you to upgrade a cluster. The process is: upgrade kubeadm, then upgrade the control plane, then upgrade each worker node.

```bash
# 1. Upgrade kubeadm (on control plane node)
apt-get update && apt-get install -y kubeadm=1.29.0-00

# 2. Verify upgrade plan
kubeadm upgrade plan

# 3. Apply the upgrade
kubeadm upgrade apply v1.29.0

# 4. Upgrade kubelet and kubectl on control plane
apt-get install -y kubelet=1.29.0-00 kubectl=1.29.0-00
systemctl daemon-reload && systemctl restart kubelet

# 5. For each worker node: drain, upgrade kubelet, uncordon
kubectl drain <node> --ignore-daemonsets --delete-emptydir-data
# On the worker node:
apt-get install -y kubeadm=1.29.0-00 kubelet=1.29.0-00
kubeadm upgrade node
systemctl daemon-reload && systemctl restart kubelet
# Back on control plane:
kubectl uncordon <node>
```

**MEMORIZE THIS.** You can only upgrade **one minor version at a time**. You cannot skip from 1.27 directly to 1.29. The path is 1.27 → 1.28 → 1.29.

---

## 📦 Helm: The Package Manager for Kubernetes

Go back to City Hall. Installing a CNI plugin or a monitoring stack by hand means applying a dozen separate YAML files — Deployments, Services, ConfigMaps, RBAC, CRDs — and editing each one for your environment. Helm is the city's permit office that takes a **single standardised application package** and stamps out all those objects for you, with your local values filled in.

A Helm **chart** is that package: a directory of templated manifests plus a `values.yaml` of defaults. A **release** is one installed instance of a chart in your cluster. A **repository** is a server hosting charts you can pull.

### Why Helm Is on the CKA

The curriculum explicitly tests **using Helm to install cluster components**. You will not be asked to author a chart from scratch, but you must be able to add a repo, install a chart, override values, and upgrade a release.

### Helm Workflow Commands

**MEMORIZE THIS.**

```bash
# Add and refresh a chart repository
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update
helm search repo ingress-nginx          # find chart names/versions

# Preview the rendered manifests WITHOUT installing (dry-run on the client)
helm template my-release ingress-nginx/ingress-nginx

# Install a chart as a named release into a namespace
helm install my-release ingress-nginx/ingress-nginx \
  --namespace ingress --create-namespace

# Override values at install time
helm install my-release ingress-nginx/ingress-nginx \
  --set controller.replicaCount=2 \
  --set controller.service.type=NodePort

# Use a values file instead of many --set flags
helm install my-release ingress-nginx/ingress-nginx -f my-values.yaml

# List releases, inspect, and upgrade
helm list -A
helm get values my-release -n ingress
helm upgrade my-release ingress-nginx/ingress-nginx --set controller.replicaCount=3
helm upgrade --install my-release ingress-nginx/ingress-nginx   # install if absent, else upgrade

# Roll back and uninstall
helm rollback my-release 1 -n ingress
helm uninstall my-release -n ingress
```

| Concept | Meaning |
|---|---|
| Chart | The package (templates + `values.yaml` + `Chart.yaml`) |
| Release | One named, installed instance of a chart |
| Repository | A server hosting charts (`helm repo add`) |
| `values.yaml` | Default configuration; override with `--set` or `-f` |
| `helm template` | Render manifests locally — no cluster contact, no install |

> 🎯 **Exam tip:** `helm template` renders the YAML on the client and prints it — perfect when a task says "show what *would* be applied" or when you want to pipe the output into `kubectl apply -f -`. `helm install --dry-run` is the server-side equivalent that also validates against the API. Know the difference.

> 🚨 **Trap on the exam:** `--set key=value` overrides take precedence over `-f values.yaml`, which in turn override the chart's built-in `values.yaml`. If an override "isn't working," check whether a later `--set` is winning. Also: `helm upgrade` does NOT re-read your previous `--set` flags unless you pass `--reuse-values` — forgetting this silently reverts overrides to chart defaults.

---

## 🧩 Kustomize: Template-Free Configuration

Helm uses templating (`{{ .Values.x }}`). Kustomize takes the opposite approach: you keep **plain, valid YAML** and layer **patches** on top of it. There are no template placeholders — every file is a real manifest you could apply directly. Kustomize is built **into `kubectl`**, so there is nothing extra to install on the exam.

The mental model: a **base** holds the common manifests; each **overlay** (dev, staging, prod) points at the base and patches only what differs.

### `kustomization.yaml`

Every Kustomize directory has a `kustomization.yaml` that lists resources and the transformations to apply:

```yaml
# base/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yaml
  - service.yaml
commonLabels:
  app: hotel-api
```

### Bases and Overlays

```
myapp/
├── base/
│   ├── kustomization.yaml
│   ├── deployment.yaml
│   └── service.yaml
└── overlays/
    └── prod/
        ├── kustomization.yaml      # references ../../base
        └── replica-patch.yaml
```

```yaml
# overlays/prod/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - ../../base                      # pull in the base
namePrefix: prod-                   # prod-hotel-api, prod-...
replicas:
  - name: hotel-api
    count: 5
patches:
  - path: replica-patch.yaml        # strategic-merge patch onto the base
images:
  - name: hotel/api
    newTag: v2.3.0
```

### Applying Kustomize

**MEMORIZE THIS.**

```bash
# Render the final YAML to stdout (no cluster contact)
kubectl kustomize overlays/prod

# Build AND apply in one step (the -k flag)
kubectl apply -k overlays/prod

# Delete everything a kustomization manages
kubectl delete -k overlays/prod
```

### Helm vs. Kustomize

| Dimension | Helm | Kustomize |
|---|---|---|
| Mechanism | Go templating (`{{ }}`) | Overlays/patches on plain YAML |
| Packaging | Charts + repositories | Directories (`base` + `overlays`) |
| Install command | `helm install` | `kubectl apply -k` |
| Render-only command | `helm template` | `kubectl kustomize` |
| Extra tooling needed | `helm` binary | None — built into `kubectl` |
| Strength | Distribution, versioned releases, rollbacks | Environment variants without templating |

> 🎯 **Exam tip:** Both `kubectl apply -k <dir>` and `kubectl apply -f <dir>` take a directory, but `-k` means "treat this as a kustomization and build it first." If you `apply -f` a directory that contains a `kustomization.yaml`, you do **not** get the overlay — you just apply the raw files. Use `-k` whenever a `kustomization.yaml` is present.

---

## 🔌 Custom Resource Definitions (CRDs) and the Operator Pattern

Kubernetes ships with built-in kinds — Pod, Service, Deployment. A **CustomResourceDefinition (CRD)** teaches the API server a brand-new kind. Once a CRD is installed, `kubectl get <newkind>` works exactly like `kubectl get pods`, and the new objects are stored in etcd and protected by RBAC like anything else. This is how Gateway API, cert-manager, Prometheus, and most ecosystem tools extend Kubernetes.

### What a CRD Looks Like

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: backups.ops.example.com        # must be <plural>.<group>
spec:
  group: ops.example.com
  scope: Namespaced                     # or Cluster
  names:
    plural: backups
    singular: backup
    kind: Backup
    shortNames: [bk]
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                schedule: {type: string}
```

After applying that CRD, you can create instances of the new `Backup` kind:

```yaml
apiVersion: ops.example.com/v1
kind: Backup
metadata:
  name: nightly
spec:
  schedule: "0 2 * * *"
```

### Inspecting CRDs and Custom Resources

**MEMORIZE THIS.**

```bash
# List all CRDs installed on the cluster
kubectl get crd

# Describe a specific CRD (see its group, versions, scope)
kubectl describe crd backups.ops.example.com

# Use the new kind like any native resource
kubectl get backups -A
kubectl get bk                          # shortName works too

# Discover the fields of ANY kind — built-in or custom
kubectl explain backup.spec
kubectl explain backup.spec.schedule
```

> 🎯 **Exam tip:** `kubectl explain` reads the live OpenAPI schema from the API server, so it works on custom resources the moment their CRD is installed. When you forget a field path under pressure, `kubectl explain <kind>.spec --recursive` is faster than opening the docs tab.

### The Operator Pattern

A CRD alone is just **data** — it adds a new kind but nothing acts on it. An **Operator** supplies the **behaviour**: it is a custom controller running in the cluster (usually as a Deployment) that watches instances of the CRD and drives reality toward their spec.

This is the same **control loop** the built-in controllers use (Module 2, kube-controller-manager): *observe desired state → compare to actual state → reconcile the difference → repeat.* An Operator encodes operational knowledge — "how to back up this database," "how to fail over this cluster" — into that loop so a human does not have to run the runbook by hand.

```
   Custom Resource (desired)          Operator (controller)
   ┌──────────────────────┐           ┌────────────────────────┐
   │ kind: Backup          │  watch    │  reconcile loop:        │
   │ spec.schedule: 0 2 *  │ ────────► │  observe → diff → act   │
   └──────────────────────┘           └───────────┬────────────┘
                                                   │ creates/updates
                                                   ▼
                                       Pods, Jobs, PVCs, Secrets...
```

| Term | Role |
|---|---|
| CRD | Defines a new **kind** (the schema) |
| Custom Resource (CR) | An **instance** of that kind (the desired state) |
| Controller | A loop that **watches** resources and reconciles state |
| Operator | A **controller + one or more CRDs** packaging operational know-how |

### Installing and Inspecting an Operator

Operators are typically delivered via a manifest bundle or a Helm chart that installs (a) the CRDs and (b) the controller Deployment plus its RBAC:

```bash
# Common install paths
kubectl apply -f https://example.com/operator/install.yaml
helm install my-operator some-repo/my-operator -n operators --create-namespace

# Confirm the CRDs landed and the controller is running
kubectl get crd | grep example.com
kubectl get pods -n operators
kubectl get deploy -n operators
```

> 🚨 **Trap on the exam:** A custom resource sitting in `Pending` or doing nothing usually means the **operator/controller is not running** (crashed Pod, missing RBAC, wrong namespace) — not that the CR is malformed. Check `kubectl get pods -n <operator-ns>` and its logs first. A CRD without its controller is inert, exactly like an Ingress object with no IngressController.

---

## 📊 Summary

| Concept | Key Fact |
|---|---|
| etcd port | 2379 (client), 2380 (peer) |
| apiserver port | 6443 |
| Static pod dir | `/etc/kubernetes/manifests/` |
| PKI dir | `/etc/kubernetes/pki/` |
| etcd data dir | `/var/lib/etcd/` |
| kubelet config | `/var/lib/kubelet/config.yaml` |
| Backup command | `etcdctl snapshot save` |
| Restore command | `etcdctl snapshot restore` |
| ETCDCTL_API | Must be set to `3` |
| Stacked HA min | 3 control plane nodes |
| External HA min | 3 control plane + 3 etcd nodes |
| Upgrade rule | One minor version at a time |
| CNI installed by | You (not kubeadm) |
| Helm render-only | `helm template` (client) / `--dry-run` (server) |
| Helm install/upgrade | `helm install`, `helm upgrade --install`, `--set`, `-f`, `helm repo add` |
| Kustomize apply | `kubectl apply -k <overlay>`; render with `kubectl kustomize` |
| Kustomize layout | `base/` + `overlays/` referencing the base |
| CRD | Teaches the API server a new kind; `kubectl get crd`, `kubectl explain` |
| Operator | Controller + CRD(s); reconcile loop encoding ops knowledge |

---

## ➡️ Next Steps

1. **Lab:** Bootstrap a 1-control-plane + 2-worker cluster using kubeadm on VMs or killercoda.com
2. **Lab:** Perform an etcd backup and restore from scratch (do this at least 3 times)
3. **Lab:** Deliberately break a static pod and use `crictl` to diagnose it
4. **Quiz:** Take the Module 2 Quiz (31 questions) targeting Apply and Analyze levels
5. **Next Module:** Module 3 — Workloads and Scheduling (Deployments, DaemonSets, resource limits)

---

## 📚 Further Reading

- [Kubernetes Components (official docs)](https://kubernetes.io/docs/concepts/overview/components/)
- [kubeadm init reference](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/)
- [Operating etcd clusters (official docs)](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/)
- [PKI certificates and requirements](https://kubernetes.io/docs/setup/best-practices/certificates/)
- [High Availability topology options](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/)
- [Kubelet configuration reference](https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/)
- [Helm documentation](https://helm.sh/docs/)
- [Declarative management with Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/)
- [Custom Resources & CRDs](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
- [Operator pattern](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)
