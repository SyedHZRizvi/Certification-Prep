# Module 2 Cheat Sheet: Cluster Architecture & Installation

> Keep this open during labs. Everything here has appeared on or is directly tested by the CKA exam.

---

## Key Ports

| Component | Port | Protocol |
|---|---|---|
| kube-apiserver | 6443 | HTTPS |
| etcd (client) | 2379 | HTTPS |
| etcd (peer) | 2380 | HTTPS |
| kubelet | 10250 | HTTPS |
| kube-scheduler | 10259 | HTTPS |
| kube-controller-manager | 10257 | HTTPS |
| kube-proxy (metrics) | 10249 | HTTP |
| NodePort range | 30000–32767 | TCP/UDP |

---

## Critical File Paths

| File / Directory | Purpose |
|---|---|
| `/etc/kubernetes/manifests/` | Static pod manifests (control plane) |
| `/etc/kubernetes/manifests/kube-apiserver.yaml` | apiserver static pod config |
| `/etc/kubernetes/manifests/kube-controller-manager.yaml` | controller-manager static pod config |
| `/etc/kubernetes/manifests/kube-scheduler.yaml` | scheduler static pod config |
| `/etc/kubernetes/manifests/etcd.yaml` | etcd static pod config |
| `/etc/kubernetes/pki/` | All cluster PKI certs and keys |
| `/etc/kubernetes/pki/etcd/` | etcd-specific certs (ca.crt, server.crt, peer.crt) |
| `/etc/kubernetes/admin.conf` | Admin kubeconfig (copy to `~/.kube/config`) |
| `/etc/kubernetes/kubelet.conf` | kubelet kubeconfig (auth to apiserver) |
| `/etc/kubernetes/controller-manager.conf` | controller-manager kubeconfig |
| `/etc/kubernetes/scheduler.conf` | scheduler kubeconfig |
| `/var/lib/kubelet/config.yaml` | KubeletConfiguration (cgroupDriver, staticPodPath, DNS) |
| `/var/lib/etcd/` | etcd data directory (default) |
| `/run/containerd/containerd.sock` | containerd CRI socket |
| `/var/run/crio/crio.sock` | CRI-O socket |

---

## kubeadm Commands

| Command | Description |
|---|---|
| `kubeadm init --pod-network-cidr=10.244.0.0/16` | Bootstrap control plane with Flannel CIDR |
| `kubeadm init --apiserver-advertise-address=<IP>` | Specify apiserver listen IP |
| `kubeadm init --control-plane-endpoint=<LB>:6443` | HA: set load balancer endpoint |
| `kubeadm token create --print-join-command` | Generate token + print full join command |
| `kubeadm token list` | List all bootstrap tokens and expiry |
| `kubeadm join <IP>:6443 --token <tok> --discovery-token-ca-cert-hash sha256:<hash>` | Join worker node |
| `kubeadm upgrade plan` | Show available upgrade versions and plan |
| `kubeadm upgrade apply v1.29.0` | Upgrade control plane to specified version |
| `kubeadm upgrade node` | Upgrade kubelet config on a worker node |
| `kubeadm certs check-expiration` | List all cert expiry dates |
| `kubeadm certs renew all` | Renew all kubeadm-managed certificates |
| `kubeadm certs renew apiserver` | Renew only the apiserver certificate |
| `kubeadm reset` | Remove all kubeadm installation artifacts |
| `kubeadm config print init-defaults` | Print default kubeadm init configuration |

---

## etcdctl Commands (Exact Exam Syntax)

> Always prepend `ETCDCTL_API=3` — without it, commands use the deprecated v2 API.

```bash
# Take a snapshot backup
ETCDCTL_API=3 etcdctl snapshot save /opt/etcd-backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key

# Verify a snapshot
ETCDCTL_API=3 etcdctl snapshot status /opt/etcd-backup.db \
  --write-out=table

# Restore a snapshot to a new data directory
ETCDCTL_API=3 etcdctl snapshot restore /opt/etcd-backup.db \
  --data-dir=/var/lib/etcd-restore \
  --name=master \
  --initial-cluster=master=https://127.0.0.1:2380 \
  --initial-advertise-peer-urls=https://127.0.0.1:2380

# After restore: update /etc/kubernetes/manifests/etcd.yaml
# --data-dir=/var/lib/etcd  →  --data-dir=/var/lib/etcd-restore
# Also update the hostPath volume for the data directory

# List all etcd members
ETCDCTL_API=3 etcdctl member list \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

---

## HA Topology Comparison

| Attribute | Stacked etcd | External etcd |
|---|---|---|
| etcd location | Same node as control plane | Dedicated separate nodes |
| Min nodes for HA | 3 control plane nodes | 3 control plane + 3 etcd (6 total) |
| kubeadm support | Native (`kubeadm init` + `--upload-certs`) | Manual etcd setup required |
| Failure isolation | Losing a control plane node = losing an etcd member | etcd and control plane fail independently |
| Cost | Lower (fewer VMs) | Higher (more VMs) |
| Production preference | Acceptable for most | Preferred for large/critical clusters |
| Quorum with 3 nodes | Tolerates 1 failure | Tolerates 1 failure per cluster (etcd + control plane separate) |

---

## Static Pod Locations

| Component | Manifest File | Key Flags to Know |
|---|---|---|
| kube-apiserver | `/etc/kubernetes/manifests/kube-apiserver.yaml` | `--etcd-servers`, `--service-cluster-ip-range`, `--tls-cert-file` |
| kube-controller-manager | `/etc/kubernetes/manifests/kube-controller-manager.yaml` | `--cluster-cidr`, `--node-cidr-mask-size`, `--kubeconfig` |
| kube-scheduler | `/etc/kubernetes/manifests/kube-scheduler.yaml` | `--config`, `--kubeconfig` |
| etcd | `/etc/kubernetes/manifests/etcd.yaml` | `--data-dir`, `--listen-client-urls`, `--initial-cluster` |

---

## Post-`kubeadm init` Checklist

```bash
# 1. Set up kubeconfig
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# 2. Install CNI plugin (example: Flannel)
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml

# 3. Verify nodes become Ready
kubectl get nodes -w

# 4. Verify control plane pods
kubectl get pods -n kube-system
```

---

## Cluster Upgrade Sequence (One Minor Version at a Time)

```bash
# On control plane node
apt-get update
apt-get install -y kubeadm=1.29.0-00
kubeadm upgrade plan
kubeadm upgrade apply v1.29.0
apt-get install -y kubelet=1.29.0-00 kubectl=1.29.0-00
systemctl daemon-reload && systemctl restart kubelet

# For each worker node (run drain on control plane, rest on worker)
kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data
# On worker node:
apt-get install -y kubeadm=1.29.0-00 kubelet=1.29.0-00
kubeadm upgrade node
systemctl daemon-reload && systemctl restart kubelet
# Back on control plane:
kubectl uncordon <node-name>
```

---

## crictl Quick Reference (Node-Level Debugging)

| Command | Purpose |
|---|---|
| `crictl ps` | List running containers |
| `crictl ps -a` | List all containers including stopped |
| `crictl logs <container-id>` | View container logs |
| `crictl inspect <container-id>` | Inspect container details |
| `crictl images` | List pulled images |
| `crictl pull <image>` | Pull a container image |
| `crictl pods` | List pod sandboxes |
| `crictl info` | Show runtime info |

---

## etcd Quorum Quick Reference

| etcd Members | Quorum Required | Max Failures Tolerated |
|---|---|---|
| 1 | 1 | 0 |
| 3 | 2 | 1 |
| 5 | 3 | 2 |
| 7 | 4 | 3 |

> Always use an **odd** number of etcd members. Even numbers do not improve fault tolerance.

---

## Helm Quick Reference

```bash
helm repo add <name> <url> && helm repo update   # register + refresh a repo
helm search repo <name>                          # find charts/versions
helm template <rel> <chart>                      # render YAML (client, no install)
helm install <rel> <chart> -n <ns> --create-namespace
helm install <rel> <chart> --set key=val         # override a value
helm install <rel> <chart> -f values.yaml        # override via file
helm upgrade --install <rel> <chart> --set key=val   # install-or-upgrade
helm list -A                                      # all releases
helm rollback <rel> <revision> -n <ns>
helm uninstall <rel> -n <ns>
```

| Term | Meaning | Override precedence (high → low) |
|---|---|---|
| Chart / Release / Repo | Package / instance / server | `--set` > `-f file` > chart `values.yaml` |

> **TRAP:** `helm upgrade` drops prior `--set` values unless you pass `--reuse-values`.

---

## Kustomize Quick Reference (built into kubectl)

```bash
kubectl kustomize <dir>          # render final YAML to stdout
kubectl apply -k <overlay-dir>   # build + apply
kubectl delete -k <overlay-dir>  # remove managed objects
```

```
myapp/base/kustomization.yaml          # resources: [deployment.yaml, service.yaml]
myapp/overlays/prod/kustomization.yaml # resources: [../../base]; namePrefix/patches/images/replicas
```

| Helm | Kustomize |
|---|---|
| Go templating (`{{ }}`) | Patches on plain YAML |
| `helm install` / `helm template` | `kubectl apply -k` / `kubectl kustomize` |
| Needs `helm` binary | Built into `kubectl` |

> **TRAP:** `apply -f <dir>` ignores `kustomization.yaml`; use `apply -k` to get the overlay.

---

## CRDs and Operators

```bash
kubectl get crd                          # list installed CRDs
kubectl describe crd <plural>.<group>    # group, versions, scope
kubectl get <newkind> -A                 # use the custom kind natively
kubectl explain <kind>.spec --recursive  # discover fields (works on CRs too)
```

| Term | Role |
|---|---|
| CRD | Teaches the API server a new **kind** (schema) |
| Custom Resource (CR) | An **instance** = desired state |
| Operator | **Controller + CRD(s)** running a reconcile loop |

> **TRAP:** A CR that "does nothing" usually means its operator/controller Pod isn't running — a CRD without a controller is inert, like Ingress without an IngressController.
