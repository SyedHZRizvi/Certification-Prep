# CKA Exam Day Cheat Sheet — Module 8

> Run the Setup block first, before reading question 1.

---

## 1. Terminal Setup — Run This First

```bash
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
alias k=kubectl
complete -o default -F __start_kubectl k
export do="--dry-run=client -o yaml"   # k run nginx --image=nginx $do > pod.yaml
export now="--force --grace-period=0"  # k delete pod nginx $now
```

---

## 2. Context Switching — Before Every Task

| Command | Purpose |
|---------|---------|
| `kubectl config get-contexts` | List all contexts; `*` marks active |
| `kubectl config current-context` | Show active context name only |
| `kubectl config use-context <name>` | Switch to a context |
| `kubectl config view --minify` | Show active context config |
| `kubectl config set-context --current --namespace=<ns>` | Set default namespace |

**Rule:** Context switch → confirm with `current-context` → then read the task.

---

## 3. Imperative Command Reference

| Task | Command |
|------|---------|
| Create pod | `k run <name> --image=<img>` |
| Generate pod YAML | `k run <name> --image=<img> --dry-run=client -o yaml > pod.yaml` |
| Pod with command | `k run <name> --image=busybox --command -- sleep 3600` |
| Pod with env var | `k run <name> --image=<img> --env="KEY=val"` |
| Pod with labels | `k run <name> --image=<img> --labels="app=web"` |
| Create deployment | `k create deployment <name> --image=<img> --replicas=<n>` |
| Generate deploy YAML | `k create deployment <name> --image=<img> --dry-run=client -o yaml > dep.yaml` |
| Scale deployment | `k scale deployment <name> --replicas=<n>` |
| Update image | `k set image deployment/<name> <container>=<img>:<tag>` |
| Rollout status | `k rollout status deployment/<name>` |
| Rollback | `k rollout undo deployment/<name>` |
| Expose pod | `k expose pod <name> --port=<p> --name=<svc>` |
| Expose deployment | `k expose deployment <name> --port=<p> --target-port=<tp> --name=<svc>` |
| NodePort service | `k expose deployment <name> --port=<p> --type=NodePort` |
| Create ConfigMap | `k create configmap <name> --from-literal=key=val` |
| Create Secret | `k create secret generic <name> --from-literal=key=val` |
| Create ServiceAccount | `k create serviceaccount <name> -n <ns>` |
| Create Role | `k create role <name> --verb=get,list --resource=pods -n <ns>` |
| Create RoleBinding | `k create rolebinding <name> --role=<r> --serviceaccount=<ns>:<sa>` |
| Create ClusterRole | `k create clusterrole <name> --verb=get,list --resource=nodes` |
| Create ClusterRoleBinding | `k create clusterrolebinding <name> --clusterrole=<cr> --serviceaccount=<ns>:<sa>` |
| Check RBAC (Role-Based Access Control) | `k auth can-i list pods --as=system:serviceaccount:<ns>:<sa>` |
| Label node | `k label node <node> key=val` |
| Taint node | `k taint node <node> key=val:NoSchedule` |
| Remove taint | `k taint node <node> key=val:NoSchedule-` |
| Cordon node | `k cordon <node>` |
| Drain node | `k drain <node> --ignore-daemonsets --delete-emptydir-data` |
| Uncordon node | `k uncordon <node>` |
| Delete pod fast | `k delete pod <name> --force --grace-period=0` |

---

## 4. YAML Skeletons — Five Most Common Objects

### Pod (generate with: `k run <n> --image=<img> $do > pod.yaml`)
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: c
    image: nginx:1.21
    resources:
      requests: { cpu: "100m", memory: "128Mi" }
      limits:   { cpu: "200m", memory: "256Mi" }
  nodeSelector: { disktype: ssd }
  tolerations:
  - { key: "key", operator: "Equal", value: "val", effect: "NoSchedule" }
```

### Deployment (generate with: `k create deployment <n> --image=<img> $do`)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-dep
spec:
  replicas: 3
  selector: { matchLabels: { app: my-app } }
  template:
    metadata: { labels: { app: my-app } }
    spec:
      containers:
      - name: c
        image: nginx:1.21
```

### PersistentVolume + PersistentVolumeClaim
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity: { storage: 1Gi }
  accessModes: [ReadWriteOnce]
  persistentVolumeReclaimPolicy: Retain
  storageClassName: manual
  hostPath: { path: /mnt/data }
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes: [ReadWriteOnce]
  resources: { requests: { storage: 500Mi } }
  storageClassName: manual
```

### NetworkPolicy
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-ns
  namespace: default
spec:
  podSelector: { matchLabels: { app: my-app } }
  policyTypes: [Ingress, Egress]
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: allowed-ns
    ports:
    - { protocol: TCP (Transmission Control Protocol), port: 80 }
```

---

## 5. Exam Timing Table

| Task Weight | Time Budget | Skip At |
|-------------|-------------|---------|
| 13%         | 12 min      | 12 min  |
| 8–10%       | 8 min       | 9 min   |
| 4–7%        | 5 min       | 6 min   |
| < 4%        | 3 min       | 4 min   |

**Two-pass strategy:** Pass 1 = all 17 tasks in order, skip anything over budget. Pass 2 = return to skipped tasks with remaining time.

---

## 6. Quick Diagnostic Commands

```bash
k describe pod <name>          # Events — your first stop for Pending/CrashLoop
k logs <name> --tail=20        # Container logs
k logs <name> -c <container>   # Specific container in multi-container pod
k get pods -o wide             # See node placement and pod IPs
k get events --sort-by='.lastTimestamp'  # Cluster-wide recent events
k exec -it <name> -- /bin/sh   # Shell into a pod
k explain pod.spec.containers  # Live field reference — use instead of guessing
```

---

> Context first. Always. Every task. No exceptions.
