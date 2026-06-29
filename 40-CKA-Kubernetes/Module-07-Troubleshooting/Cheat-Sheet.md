# 🗺️ Module 7 Cheat Sheet: Troubleshooting

> **30% of the CKA exam.** This is your command-lookup reference for exam day. Print or bookmark.

---

## Pod Status Meanings and Fixes

| Status | Meaning | First Command | Likely Fix |
|---|---|---|---|
| `Pending` | Not scheduled to any node | `kubectl describe pod` → Events | Fix taint/selector/resource/PVC |
| `ContainerCreating` | Image being pulled | `kubectl describe pod` → Events | Wait; check registry if slow |
| `Running` | Container(s) running | `kubectl logs <pod>` | Check app logs if behavior wrong |
| `CrashLoopBackOff` | Container crashes + restarts | `kubectl logs <pod> --previous` | Fix app config/startup command |
| `OOMKilled` | Exceeded memory limit | `kubectl describe pod` → Last State | Increase `resources.limits.memory` |
| `ImagePullBackOff` | Cannot pull image | `kubectl describe pod` → Events | Fix image name or add imagePullSecret |
| `ErrImagePull` | First failed pull | `kubectl describe pod` → Events | Same as ImagePullBackOff |
| `Init:0/1` | Init container not done | `kubectl logs <pod> -c <init-ctr>` | Fix init container command/deps |
| `Init:CrashLoopBackOff` | Init container crashing | `kubectl logs <pod> -c <init-ctr> --previous` | Fix init container |
| `Terminating` (stuck) | Pod cannot finish graceful shutdown | `kubectl delete pod --grace-period=0 --force` | Force delete |
| `Unknown` | Node lost communication | `kubectl describe node` | Fix kubelet on the node |
| `Completed` | All containers exited 0 | (expected for Jobs) | Normal; abnormal in Deployments |

**Exit code cheat sheet:** `0` = success · `1` = app error · `137` = OOMKilled (128+9) · `139` = segfault (128+11)

---

## Pod-Level Troubleshooting Commands

| Command | Use |
|---|---|
| `kubectl describe pod <pod> -n <ns>` | Full status, conditions, events — start here |
| `kubectl logs <pod>` | Current container stdout/stderr |
| `kubectl logs <pod> --previous` | Last crashed container logs |
| `kubectl logs <pod> -c <container>` | Specific container in multi-container pod |
| `kubectl logs <pod> -c <ctr> --previous` | Previous crash of a specific container |
| `kubectl logs <pod> -f` | Tail live logs |
| `kubectl get events --sort-by=.metadata.creationTimestamp` | Chronological events (newest last) |
| `kubectl get events -n <ns> --field-selector reason=FailedScheduling` | Only scheduling failures |
| `kubectl run tmp --image=busybox --rm -it --restart=Never -- nslookup kubernetes` | DNS (Domain Name System) smoke test |

---

## Node Troubleshooting Commands

| Command | Use |
|---|---|
| `kubectl get nodes` | List all nodes and their status |
| `kubectl describe node <node>` | Conditions, capacity, events |
| `kubectl top nodes` | CPU and memory usage (requires metrics-server) |
| `kubectl drain <node> --ignore-daemonsets` | Evict all pods before node maintenance |
| `kubectl cordon <node>` | Mark node unschedulable (no pod eviction) |
| `kubectl uncordon <node>` | Re-enable scheduling on node |
| `systemctl status kubelet` | Is the kubelet service running? |
| `systemctl start kubelet` | Start a stopped kubelet |
| `systemctl enable kubelet` | Ensure kubelet starts on reboot |
| `systemctl restart kubelet` | Restart kubelet after config change |
| `journalctl -u kubelet -f` | Tail live kubelet logs |
| `journalctl -u kubelet -n 50` | Last 50 kubelet log lines |
| `journalctl -u kubelet --since "10 minutes ago"` | Recent kubelet logs |
| `df -h` | Check disk usage (kubelet stops if >85% full) |
| `crictl rmi --prune` | Remove unused container images |

---

## Cluster Component Check Commands

| Component | Check Command |
|---|---|
| All control plane pods | `kubectl get pods -n kube-system` |
| API (Application Programming Interface) server | `crictl ps \| grep apiserver` (if kubectl is unavailable) |
| Controller manager | `kubectl logs kube-controller-manager-<node> -n kube-system` |
| Scheduler | `kubectl logs kube-scheduler-<node> -n kube-system` |
| etcd | `kubectl logs etcd-<node> -n kube-system` |
| etcd health | `ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key endpoint health` |
| CoreDNS | `kubectl get pods -n kube-system -l k8s-app=kube-dns` |
| Static pod manifests | `ls /etc/kubernetes/manifests/` |

---

## Networking Debug Commands

| Command | Use |
|---|---|
| `kubectl get endpoints <svc>` | Check if Service has matching pods (`<none>` = selector mismatch) |
| `kubectl describe svc <svc>` | View Service selector, ports, and endpoints |
| `kubectl get pods --show-labels` | See actual pod labels to compare with Service selector |
| `kubectl get networkpolicy -n <ns>` | List NetworkPolicies that may block traffic |
| `kubectl describe networkpolicy <name>` | See what traffic is allowed/denied |
| `kubectl run tmp --image=busybox --rm -it --restart=Never -- nslookup <svc>.<ns>.svc.cluster.local` | Test cross-namespace DNS |
| `kubectl run tmp --image=curlimages/curl --rm -it --restart=Never -- curl http://<svc>:<port>` | Test HTTP (Hypertext Transfer Protocol) connectivity to a service |
| `kubectl run tmp --image=busybox --rm -it --restart=Never -- wget -qO- http://<pod-ip>:<port>` | Test direct pod connectivity |

---

## crictl Quick Reference (Use When kubectl Is Down)

| Command | Use |
|---|---|
| `crictl ps` | List running containers |
| `crictl ps -a` | List all containers (including stopped) |
| `crictl logs <container-id>` | Get container logs |
| `crictl inspect <container-id>` | Full container metadata |
| `crictl pods` | List pod sandboxes |
| `crictl images` | List pulled images |
| `crictl rmi --prune` | Remove unused images |
| `crictl pull <image>` | Manually pull an image |

---

## Key File Locations

| Path | Purpose |
|---|---|
| `/etc/kubernetes/manifests/` | Static pod YAMLs for control plane components |
| `/etc/kubernetes/admin.conf` | Admin kubeconfig for the cluster |
| `/var/lib/kubelet/config.yaml` | Kubelet configuration |
| `/var/lib/etcd/` | etcd data directory |
| `/etc/kubernetes/pki/etcd/` | etcd TLS (Transport Layer Security) certificates |
| `/var/log/pods/` | Raw pod log files on the node |
