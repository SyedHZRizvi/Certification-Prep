# Module 2 Quiz: Cluster Architecture, Installation & Configuration

> **26 questions** | Mix of Remember, Understand, Apply, and Analyze levels
> Aim for a score of ≥85% before moving to Module 3. The CKA exam tests *application* — if you miss any Apply or Analyze question, revisit the Reading and redo the relevant lab.

---

### Q1.
Which Kubernetes component is the **only** one that communicates directly with etcd?

A) kube-scheduler  
B) kube-controller-manager  
C) kube-apiserver  
D) kubelet  

---

### Q2.
On which port does etcd listen for **client** requests by default?

A) 2380  
B) 6443  
C) 10250  
D) 2379  

---

### Q3.
Where are static pod manifests stored on a kubeadm-provisioned control plane node?

A) `/var/lib/kubelet/static-pods/`  
B) `/etc/kubernetes/manifests/`  
C) `/etc/kubernetes/static/`  
D) `/var/run/kubernetes/manifests/`  

---

### Q4.
What does the `kube-scheduler` actually do when it selects a node for a pod?

A) Pulls the container image and starts the container  
B) Writes a binding to etcd via the apiserver  
C) Directly calls the kubelet on the selected node  
D) Updates the pod's status to `Running`  

---

### Q5.
Which environment variable must you set before using `etcdctl` with the v3 API?

A) `ETCD_VERSION=3`  
B) `ETCDCTL_API=3`  
C) `ETCD_API_VERSION=v3`  
D) `ETCDCTL_VERSION=3`  

---

### Q6.
A kubeadm cluster's PKI certificates are stored in which directory?

A) `/etc/ssl/kubernetes/`  
B) `/var/lib/kubernetes/pki/`  
C) `/etc/kubernetes/pki/`  
D) `/usr/local/kubernetes/certs/`  

---

### Q7.
You want to modify the `--audit-policy-file` flag on the kube-apiserver in a kubeadm cluster. What is the correct approach?

A) Run `kubectl edit deployment kube-apiserver -n kube-system`  
B) Modify `/etc/kubernetes/manifests/kube-apiserver.yaml` and save the file  
C) Update the kubeconfig at `/etc/kubernetes/admin.conf`  
D) Restart the `kube-apiserver` systemd service  

---

### Q8.
A new token needs to be generated so a worker node can join the cluster. Which command accomplishes this and also prints the full join command?

A) `kubeadm token list --print-join-command`  
B) `kubectl create token node-join --print-command`  
C) `kubeadm token create --print-join-command`  
D) `kubeadm join --generate-token`  

---

### Q9.
What is the correct `etcdctl` command to take a snapshot backup of etcd, authenticating with TLS certificates?

A) `etcdctl backup --data-dir=/var/lib/etcd --backup-dir=/opt/etcd-backup`  
B) `ETCDCTL_API=3 etcdctl snapshot save /opt/backup.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key`  
C) `etcdctl snapshot save /opt/backup.db --tls-verify=false`  
D) `ETCDCTL_API=2 etcdctl cluster-backup /opt/backup.db`  

---

### Q10.
In a stacked etcd HA topology with 3 control plane nodes, how many control plane nodes can fail before the cluster loses quorum?

A) 0  
B) 1  
C) 2  
D) 3  

---

### Q11.
Your cluster has 5 etcd members in an external etcd topology. How many etcd members can fail while maintaining write availability?

A) 1  
B) 2  
C) 3  
D) 4  

---

### Q12.
Which component is responsible for maintaining the correct number of pod replicas for a ReplicaSet?

A) kube-scheduler  
B) kube-apiserver  
C) kubelet  
D) kube-controller-manager  

---

### Q13.
After running `kubeadm init`, all worker nodes show `NotReady`. Control plane pods are running. What is the most likely cause?

A) etcd has not started yet  
B) The CNI network plugin has not been installed  
C) Worker nodes have not joined yet  
D) The apiserver certificate has expired  

---

### Q14.
You run `etcdctl snapshot restore /opt/backup.db --data-dir=/var/lib/etcd-restore`. The cluster still reads old data after the restore. What step did you most likely miss?

A) Restarting `kube-scheduler`  
B) Updating the etcd static pod manifest to point `--data-dir` to `/var/lib/etcd-restore`  
C) Running `kubeadm reset` on the control plane  
D) Deleting all existing pods before restoring  

---

### Q15.
A developer asks you to design a Kubernetes HA cluster that isolates etcd failures from control plane failures. You recommend:

A) Stacked etcd topology with 3 nodes  
B) External etcd topology with 3 control plane nodes and 3 etcd nodes  
C) A single control plane node with etcd replication enabled  
D) Stacked etcd topology with 5 nodes  

---

### Q16.
The kubelet on a worker node is running but pods scheduled to that node are not starting. `systemctl status kubelet` shows the service active. `crictl ps -a` shows no containers. Which of the following is the MOST likely cause?

A) The kube-scheduler is down  
B) The node's container runtime (e.g., containerd) is stopped or failed  
C) The kube-apiserver is unreachable  
D) The node has insufficient CPU for the pods  

---

### Q17.
You need to upgrade a kubeadm cluster from v1.28 to v1.30. Which of the following sequences is correct?

A) Upgrade kubeadm to 1.30, then run `kubeadm upgrade apply v1.30.0` immediately  
B) Upgrade directly: 1.28 → 1.30 in one step using `kubeadm upgrade apply v1.30.0`  
C) Upgrade 1.28 → 1.29 first, verify, then upgrade 1.29 → 1.30  
D) Drain all nodes, update all components simultaneously, then uncordon  

---

### Q18.
Which configuration file controls the kubelet's `cgroupDriver` and `staticPodPath` settings in a kubeadm cluster?

A) `/etc/kubernetes/kubelet.conf`  
B) `/var/lib/kubelet/config.yaml`  
C) `/etc/systemd/system/kubelet.service`  
D) `/etc/kubernetes/manifests/kubelet.yaml`  

---

### Q19.
A control plane node shows that `kube-controller-manager` pod is in `CrashLoopBackOff`. You edit `/etc/kubernetes/manifests/kube-controller-manager.yaml` to fix an incorrect flag. The pod does not restart automatically after 5 minutes. What should you check next?

A) Restart `kube-scheduler` because it schedules the pod  
B) Whether the YAML file has a syntax error that caused the kubelet to silently drop the manifest  
C) Whether the `kube-proxy` DaemonSet is healthy  
D) Run `kubeadm reset` and reinitialize the control plane  

---

### Q20.
Which command verifies the expiration dates of all certificates in a kubeadm cluster?

A) `openssl x509 -in /etc/kubernetes/pki/ca.crt -noout -dates`  
B) `kubectl get certificates -A`  
C) `kubeadm certs check-expiration`  
D) `kubeadm pki verify --all`  

---

### Q21.
A pod is scheduled to a node, but the kubelet is not starting it. You check the kubelet log and see `container runtime not ready: rpc error: code = Unavailable`. What is this telling you?

A) The pod's image cannot be pulled from the registry  
B) The kubelet cannot connect to the container runtime via the CRI socket  
C) The node has run out of disk space  
D) The pod's resource requests exceed node capacity  

---

### Q22.
You are designing a new Kubernetes cluster and must choose between containerd and CRI-O as the container runtime. Which statement accurately describes the difference?

A) containerd supports the OCI spec; CRI-O does not  
B) CRI-O is a full container management system; containerd is only a shim  
C) containerd is the CNCF standard, widely used in managed cloud offerings; CRI-O is lightweight and is the default in OpenShift  
D) Docker is required as an intermediary when using containerd with Kubernetes  

---

### Q23.
An etcd cluster with 3 members loses network connectivity to 2 of its members simultaneously. What is the state of the cluster?

A) The remaining member continues to serve reads and writes normally  
B) The remaining member can serve reads but not writes, because quorum is lost  
C) The cluster immediately deletes all data to prevent split-brain  
D) The remaining member becomes the leader and continues operating normally  

---

### Q24.
A security audit flags that a kubeadm cluster's certificates will expire in 15 days. You run `kubeadm certs renew all`. What must you do immediately after?

A) Run `kubeadm init` again to regenerate the cluster  
B) Restart the static pod containers for the control plane components so they load the new certificates  
C) Run `kubectl rollout restart deployment -n kube-system` for all deployments  
D) Nothing; the kubelet automatically reloads certificates without restart  

---

### Q25.
Examine the following `kubeadm init` output:

```
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, run as a regular user:
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  ...

You can now join any number of worker nodes by running:
  kubeadm join 10.0.0.10:6443 --token abc123.xyz456abc789xyz0 \
    --discovery-token-ca-cert-hash sha256:a1b2c3...
```

A new worker node needs to join but the token has expired. Which sequence of steps is correct?

A) Re-run `kubeadm init` to generate a new token, then join  
B) Run `kubeadm token create --print-join-command` on the control plane, then use the output on the worker  
C) Manually edit `/etc/kubernetes/tokens.csv` on the control plane and restart kube-apiserver  
D) Run `kubectl create token --join` on the worker node directly  

---

### Q26.
You have a kubeadm cluster. The kube-apiserver pod is in `Error` state. `crictl logs <apiserver-container-id>` shows: `error: unable to load server certificate: open /etc/kubernetes/pki/apiserver.crt: no such file or directory`. What is the most efficient resolution path?

A) Run `kubeadm reset` and `kubeadm init` to rebuild the cluster  
B) Run `kubeadm certs renew apiserver` to regenerate the missing certificate  
C) Copy the certificate from another control plane node's `/etc/kubernetes/pki/` directory  
D) Restore from an etcd backup taken before the certificate was deleted  

---

## 🎯 Answers + Explanations

| Q | Answer | Level |
|---|---|---|
| 1 | C | Remember |
| 2 | D | Remember |
| 3 | B | Remember |
| 4 | B | Understand |
| 5 | B | Remember |
| 6 | C | Remember |
| 7 | B | Apply |
| 8 | C | Apply |
| 9 | B | Apply |
| 10 | B | Understand |
| 11 | B | Understand |
| 12 | D | Understand |
| 13 | B | Analyze |
| 14 | B | Apply |
| 15 | B | Apply |
| 16 | B | Analyze |
| 17 | C | Apply |
| 18 | B | Remember |
| 19 | B | Analyze |
| 20 | C | Apply |
| 21 | B | Analyze |
| 22 | C | Understand |
| 23 | B | Analyze |
| 24 | B | Apply |
| 25 | B | Apply |
| 26 | B | Analyze |

---

**Q1 — C:** The kube-apiserver is the single gateway to etcd. All other components (scheduler, controller-manager, kubelet) communicate with the apiserver, never etcd directly. This is architectural — it lets the apiserver enforce authentication, authorization, and validation centrally.

**Q2 — D:** etcd client port is **2379**. Port 2380 is the peer-to-peer port used for etcd member replication (Raft protocol). Port 6443 is the apiserver. Port 10250 is the kubelet.

**Q3 — B:** `/etc/kubernetes/manifests/` is the static pod directory configured by kubeadm. The kubelet watches this directory and manages pods directly without the apiserver.

**Q4 — B:** The scheduler writes a binding object to the apiserver (which persists it to etcd). The kubelet on the selected node watches for pods bound to its node and then starts them. The scheduler never starts containers — it only decides placement.

**Q5 — B:** `ETCDCTL_API=3` enables the v3 API. Without it, `etcdctl` defaults to API v2, which uses completely different commands (`etcdctl backup` instead of `etcdctl snapshot save`). This is one of the most common mistakes on the CKA exam.

**Q6 — C:** `/etc/kubernetes/pki/` is where kubeadm stores all generated certificates and keys, including the cluster CA, apiserver cert, etcd certs (in the `etcd/` subdirectory), and front-proxy certs.

**Q7 — B:** Control plane components in a kubeadm cluster run as static pods. To modify their configuration, edit the YAML manifest in `/etc/kubernetes/manifests/`. The kubelet detects the change and recreates the pod with the new configuration. `kubectl edit` changes are ephemeral for static pods.

**Q8 — C:** `kubeadm token create --print-join-command` generates a new 24-hour token and prints the full `kubeadm join` command including the correct CA cert hash. This is the authoritative approach.

**Q9 — B:** This is the exact syntax required on the CKA exam. All four TLS flags are required for an authenticated etcd cluster. `ETCDCTL_API=3` must be set. The certificate paths match the default kubeadm PKI layout. Option A is the old v2 API syntax.

**Q10 — B:** With 3 etcd members, quorum requires ⌊3/2⌋ + 1 = 2 members. You can lose 1 member and still have 2 remaining (quorum maintained). Losing 2 members drops you to 1, which is below quorum.

**Q11 — B:** With 5 etcd members, quorum requires ⌊5/2⌋ + 1 = 3. You can lose 2 members (leaving 3), maintaining quorum. Losing 3 drops to 2, which is below quorum.

**Q12 — D:** The kube-controller-manager runs the ReplicaSet controller (among others). It continuously watches the desired state (replica count) and creates or deletes pods to match it. The scheduler places those pods; the kubelet runs them.

**Q13 — B:** This is the classic post-init scenario. Everything is working, but nodes show `NotReady` because the CNI plugin (Flannel, Calico, etc.) has not been installed yet. Without a CNI, the network is not configured and nodes cannot become Ready.

**Q14 — B:** `etcdctl snapshot restore` creates a new data directory but does not change where etcd reads from. You must edit `/etc/kubernetes/manifests/etcd.yaml` to update both the `--data-dir` flag and the hostPath volume mount to point to `/var/lib/etcd-restore`. Kubelet then restarts etcd with the new data.

**Q15 — B:** External etcd is the architecture where etcd runs on dedicated nodes, fully separated from control plane nodes. An etcd node failure does not reduce the control plane node count. This directly addresses the requirement to isolate etcd failures from control plane failures.

**Q16 — B:** The kubelet is healthy (running) but cannot start containers. The most direct path from "kubelet active, no containers" is a failed container runtime. The kubelet communicates with the runtime via CRI socket (`/run/containerd/containerd.sock`). If containerd is stopped, `crictl ps -a` shows nothing.

**Q17 — C:** Kubernetes only supports upgrading one minor version at a time. 1.28 → 1.30 would skip 1.29, which is not supported and can cause data format incompatibilities in etcd. The correct path is always sequential minor version upgrades.

**Q18 — B:** `/var/lib/kubelet/config.yaml` is the KubeletConfiguration file. It controls cluster-level settings like `clusterDNS`, `cgroupDriver`, and `staticPodPath`. `/etc/kubernetes/kubelet.conf` is the kubeconfig file used by the kubelet to authenticate to the apiserver — not the same thing.

**Q19 — B:** The kubelet silently drops static pod manifests that contain YAML syntax errors. It logs the error but does not create or restart the pod. If you save an invalid YAML file, the existing running pod continues (or its crash state persists) but the edited manifest is never applied. Always validate YAML before saving.

**Q20 — C:** `kubeadm certs check-expiration` is the purpose-built command. It shows all kubeadm-managed certificates with their expiration dates in a clear table. Option A works for a single cert but requires you to check each file individually.

**Q21 — B:** The CRI socket error means the kubelet tried to connect to the container runtime via its Unix socket and received an `Unavailable` gRPC error. This is the runtime (containerd or CRI-O) being down or the socket path being misconfigured in the kubelet configuration.

**Q22 — C:** containerd is the CNCF-graduated, industry-standard runtime used by most cloud providers (EKS, GKE, AKS). CRI-O is a lightweight, OCI-compliant runtime tightly integrated with Podman tooling and is the default on Red Hat OpenShift. Both are fully OCI-compliant. Docker is NOT required as an intermediary for containerd with Kubernetes.

**Q23 — B:** With 3 members and 2 lost, only 1 member remains — below the quorum of 2. By Raft, a node without quorum cannot commit writes (it does not know if a majority agrees). It can still serve reads from its local state, but writes will be rejected to prevent split-brain. This is why odd-numbered etcd clusters of at least 3 are mandatory for HA.

**Q24 — B:** Certificate renewal updates the files on disk, but the in-memory state of running control plane containers still holds the old expired certificates. You must restart the static pod containers to force them to reload the renewed certificates from disk. The fastest way is to move the manifests out of and back into `/etc/kubernetes/manifests/`, or use `crictl` to stop the containers (kubelet restarts them automatically).

**Q25 — B:** After a token expires, `kubeadm token create --print-join-command` is the single command that handles everything: creates a new token, computes the CA cert hash, and outputs the complete `kubeadm join` command. Re-running `kubeadm init` would destroy the existing cluster.

**Q26 — B:** `kubeadm certs renew apiserver` regenerates specifically the apiserver certificate and key in `/etc/kubernetes/pki/`. This is the minimally invasive fix — no cluster reset required. After the command, force-restart the apiserver static pod by touching the manifest or using `crictl`. Option D (etcd restore) would additionally lose all data written since the snapshot was taken, and is unnecessarily destructive for a certificate issue.
