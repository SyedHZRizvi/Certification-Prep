# Module 8: Exam Speed — kubectl Fluency and Time Mastery

## The Pit Crew Principle

Picture a Formula 1 tyre change. A regular mechanic can change a tyre. He knows which bolts to loosen, which jack to position, how to seat the new wheel. Given enough time, he'll do it correctly every time. Now watch a pit crew. Four humans. 2.5 seconds. The wheel is on and the car is accelerating before you've finished blinking.

Both the mechanic and the pit crew possess identical underlying knowledge. The difference is not expertise — it is **rehearsed movement**. The pit crew doesn't think about the bolt pattern. Their hands find it automatically while their eyes are already on the next task.

The CKA exam is your pit stop.

You have 120 minutes and 17 tasks. Every task is a live terminal problem in a real Kubernetes cluster. The examiner is not watching how elegantly you think through the architecture. They are watching whether the object exists and is correctly configured when time runs out. The student who passes is not necessarily the most knowledgeable — it is the one who is **fastest with correct output**.

This module is not about learning new Kubernetes concepts. Every concept you need was covered in Modules 1–7. This module is about compressing your execution time until the right kubectl command fires from your fingers before your brain has fully finished forming the thought.

---

## 1. Terminal Setup — Do This First on Exam Day

The single highest-leverage action you can take at the start of the CKA exam is spending 90 seconds on terminal setup. This one-time investment saves minutes across the remaining 17 tasks. Do it before you read the first question.

```bash
# Step 1: Enable kubectl autocomplete
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc

# Step 2: Set the alias
alias k=kubectl
complete -o default -F __start_kubectl k

# Step 3: Verify it works — tab-complete should fire
k get po<TAB>
```

Why this matters: with the alias set, every `kubectl` becomes `k`. That is 6 keystrokes saved per command. Across a 17-task exam with dozens of kubectl calls, this is not trivial. Autocomplete means you type `k get dep<TAB>` instead of `k get deployments`. It means flag completion so you never mistype `--dry-run=client`.

> **MEMORIZE THIS.** The autocomplete and alias setup block above. Run it verbatim at exam start. It takes 20 seconds and pays back throughout the exam.

### Additional Comfort Settings

```bash
# Optional but useful
export do="--dry-run=client -o yaml"
# Usage: k run nginx --image=nginx $do > pod.yaml

export now="--force --grace-period=0"
# Usage: k delete pod nginx $now
```

---

## 2. Imperative Commands — Your Primary Time Savers

Writing YAML from scratch is slow. For common object types, `kubectl` can generate correct YAML in one command. You should reach for an imperative command or `--dry-run` scaffold first, and only hand-edit YAML when the imperative path doesn't cover your requirement.

> 🎯 **Exam Tip:** Imperative commands save approximately 80% of YAML writing time. If you can create the object imperatively, do it. If you need slight customization, generate the YAML scaffold with `--dry-run=client -o yaml`, edit it, then apply.

### Pod Creation

```bash
# Run a pod directly
kubectl run nginx --image=nginx

# Generate pod YAML without creating (your bread and butter)
kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml

# Pod with specific command
kubectl run busybox --image=busybox --command -- sleep 3600

# Pod with resource requests
kubectl run nginx --image=nginx --requests='cpu=100m,memory=128Mi'

# Pod with labels
kubectl run nginx --image=nginx --labels="app=web,tier=frontend"

# Pod with environment variable
kubectl run nginx --image=nginx --env="DB_HOST=localhost"

# Pod with specific port
kubectl run nginx --image=nginx --port=80
```

### Deployment Creation

```bash
# Create deployment
kubectl create deployment web --image=nginx --replicas=3

# Generate deployment YAML
kubectl create deployment web --image=nginx --replicas=3 --dry-run=client -o yaml > deploy.yaml

# Scale an existing deployment
kubectl scale deployment web --replicas=5

# Update the image (rolling update)
kubectl set image deployment/web nginx=nginx:1.18

# Check rollout status
kubectl rollout status deployment/web

# Rollback if something went wrong
kubectl rollout undo deployment/web
```

### Service Creation

```bash
# Expose a pod
kubectl expose pod nginx --port=80 --name=nginx-service

# Expose a deployment, with target port
kubectl expose deployment web --port=80 --target-port=8080 --name=web-svc

# Create a NodePort service
kubectl expose deployment web --port=80 --type=NodePort --name=web-np

# ClusterIP (default)
kubectl expose deployment web --port=80 --type=ClusterIP
```

### ConfigMap and Secret

```bash
# ConfigMap from literal value
kubectl create configmap my-config --from-literal=key=value --from-literal=env=prod

# ConfigMap from a file
kubectl create configmap my-config --from-file=config.txt

# Secret (generic) from literal
kubectl create secret generic my-secret --from-literal=password=mypassword

# Secret from file
kubectl create secret generic my-secret --from-file=ssh-privatekey=~/.ssh/id_rsa

# TLS (Transport Layer Security) secret
kubectl create secret tls my-tls --cert=tls.crt --key=tls.key
```

### ServiceAccount, RBAC (Role-Based Access Control)

```bash
# Create ServiceAccount
kubectl create serviceaccount my-sa

# Create Role (namespace-scoped)
kubectl create role pod-reader --verb=get,list,watch --resource=pods

# Create RoleBinding
kubectl create rolebinding read-pods \
  --role=pod-reader \
  --serviceaccount=default:my-sa

# Create ClusterRole
kubectl create clusterrole node-reader --verb=get,list,watch --resource=nodes

# Create ClusterRoleBinding
kubectl create clusterrolebinding read-nodes \
  --clusterrole=node-reader \
  --serviceaccount=default:my-sa

# Check what a user/SA can do
kubectl auth can-i list pods --as=system:serviceaccount:default:my-sa
kubectl auth can-i --list --as=system:serviceaccount:default:my-sa
```

### Node Operations

```bash
# Label a node
kubectl label node node01 disktype=ssd

# Add a taint
kubectl taint node node01 key=value:NoSchedule

# Remove a taint (note the trailing dash!)
kubectl taint node node01 key=value:NoSchedule-

# Cordon (prevent new scheduling)
kubectl cordon node01

# Drain (evict all pods, then cordon)
kubectl drain node01 --ignore-daemonsets --delete-emptydir-data

# Uncordon
kubectl uncordon node01
```

### Imperative Command Reference Table

| Task | Command |
|------|---------|
| Create pod | `kubectl run <name> --image=<img>` |
| Generate pod YAML | `kubectl run <name> --image=<img> --dry-run=client -o yaml > pod.yaml` |
| Create deployment | `kubectl create deployment <name> --image=<img> --replicas=<n>` |
| Scale deployment | `kubectl scale deployment <name> --replicas=<n>` |
| Update image | `kubectl set image deployment/<name> <container>=<img>:<tag>` |
| Expose pod/deployment | `kubectl expose <type> <name> --port=<p> --name=<svc>` |
| Create ConfigMap | `kubectl create configmap <name> --from-literal=k=v` |
| Create Secret | `kubectl create secret generic <name> --from-literal=k=v` |
| Create ServiceAccount | `kubectl create serviceaccount <name>` |
| Create Role | `kubectl create role <name> --verb=get,list --resource=pods` |
| Create RoleBinding | `kubectl create rolebinding <name> --role=<r> --serviceaccount=ns:sa` |
| Label node | `kubectl label node <node> key=value` |
| Taint node | `kubectl taint node <node> key=value:Effect` |
| Remove taint | `kubectl taint node <node> key=value:Effect-` |
| Drain node | `kubectl drain <node> --ignore-daemonsets --delete-emptydir-data` |

---

## 3. Context Switching — The Task You Cannot Skip

Every CKA exam task begins with a context switch command. It looks like this:

```
kubectl config use-context cluster1
```

The exam has multiple clusters. Each task runs on a specific cluster. If you forget to switch context before starting a task, you will build the correct object in the wrong cluster. You will receive zero marks for that task even if your YAML is perfect.

> 🚨 **Trap: Forgetting to switch context costs you ALL marks for that task — not just partial marks. The correct object in the wrong cluster is the same as no object. This is the single most common reason candidates lose marks on otherwise-solved tasks. Develop a habit: read the context switch command, run it, then start.**

### Context Commands Reference Table

| Command | Purpose |
|---------|---------|
| `kubectl config get-contexts` | List all available contexts with current marked by `*` |
| `kubectl config current-context` | Show which context is active right now |
| `kubectl config use-context <name>` | Switch to a specific context |
| `kubectl config view` | View full kubeconfig |
| `kubectl config view --minify` | View only the active context |
| `kubectl config set-context --current --namespace=kube-system` | Set default namespace for current context |

### The Context Discipline

Build a muscle-memory habit. For every task:

1. Read the task header (it has the context name)
2. Type `kubectl config use-context <name>` — do not copy-paste, type it
3. Confirm with `kubectl config current-context`
4. **Then** read the actual task requirements

This three-second ritual will protect you from the most expensive mistake on the exam.

---

## 4. Time Management Strategy

The CKA gives you 120 minutes for 17 tasks. Simple division gives 7 minutes per task — but not all tasks are equal.

### Task Weighting

Tasks display their point value as a percentage (e.g., 13%, 8%, 4%). This is your priority signal:

- A 13% task is worth 3× a 4% task
- Do not spend 12 minutes on a 4% task and leave a 13% task incomplete
- If you are stuck past 8 minutes on any task, mark it and move on

### Timing Table

| Task Weight | Target Time Budget | Skip Threshold |
|-------------|-------------------|----------------|
| 13%         | Up to 12 minutes  | 12 minutes     |
| 8–10%       | Up to 8 minutes   | 9 minutes      |
| 4–7%        | Up to 5 minutes   | 6 minutes      |
| < 4%        | Up to 3 minutes   | 4 minutes      |

### The Two-Pass Strategy

**Pass 1 (first 90 minutes):** Work through all 17 tasks in order. If a task exceeds its time budget, write a note on the exam notepad (task number + what you attempted) and move on. Do not delete partial work — partial credit may exist.

**Pass 2 (final 30 minutes):** Return to skipped tasks. With the pressure of unknown remaining tasks gone, you will often solve a previously-stuck task in 2 minutes.

> 🎯 **Exam Tip:** Read the entire task description before typing a single command. CKA tasks often have multiple sub-requirements (e.g., "create a pod AND set a resource limit AND mount a configmap"). Candidates who start before finishing the read often miss the third requirement entirely.

### Partial Credit Awareness

Some tasks award partial credit. A task asking you to "create a NetworkPolicy that blocks ingress from namespace X and allows from namespace Y" might award credit for the ingress block even if the allow rule is wrong. Never leave a task completely blank — attempt the parts you know.

---

## 5. Essential YAML Skeletons

For objects that cannot be created imperatively, you need YAML. The fastest path is always `--dry-run=client -o yaml` to generate a base, but for PersistentVolumes, NetworkPolicies, and complex role structures you will often need to write from a skeleton.

**MEMORIZE THIS.** These are the 8 most-tested YAML patterns.

### Pod

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  namespace: default
  labels:
    app: my-app
spec:
  containers:
  - name: my-container
    image: nginx:1.21
    ports:
    - containerPort: 80
    resources:
      requests:
        cpu: "100m"
        memory: "128Mi"
      limits:
        cpu: "200m"
        memory: "256Mi"
    env:
    - name: MY_VAR
      value: "my-value"
  nodeSelector:
    disktype: ssd
  tolerations:
  - key: "key"
    operator: "Equal"
    value: "value"
    effect: "NoSchedule"
```

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
  namespace: default
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: nginx:1.21
        ports:
        - containerPort: 80
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: default
spec:
  selector:
    app: my-app
  ports:
  - protocol: TCP (Transmission Control Protocol)
    port: 80
    targetPort: 8080
  type: ClusterIP
```

### PersistentVolume

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: manual
  hostPath:
    path: /mnt/data
```

### PersistentVolumeClaim

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
  namespace: default
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
  storageClassName: manual
```

### Role and RoleBinding

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: default
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: ServiceAccount
  name: my-sa
  namespace: default
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```

### NetworkPolicy

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-specific
  namespace: default
spec:
  podSelector:
    matchLabels:
      app: my-app
  policyTypes:
  - Ingress
  - Egress
  ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          kubernetes.io/metadata.name: allowed-ns
    ports:
    - protocol: TCP
      port: 80
  egress:
  - to:
    - ipBlock:
        cidr: 10.0.0.0/24
```

---

## 6. Exam Environment Tips

### The Built-in Notepad

The CKA exam terminal includes a notepad panel. Use it actively:

- Record skipped task numbers and what you attempted
- Paste YAML fragments you'll reuse (a PV spec you plan to clone for a PVC)
- Track your context per task if you are working non-linearly

### Live Documentation with kubectl explain

If you cannot remember a field, do not guess. Use the built-in reference:

```bash
# Top-level object fields
kubectl explain pod

# Nested fields
kubectl explain pod.spec
kubectl explain pod.spec.containers
kubectl explain pod.spec.containers.resources
kubectl explain pod.spec.volumes

# Deployment
kubectl explain deployment.spec.template.spec

# NetworkPolicy
kubectl explain networkpolicy.spec.ingress
```

This is faster than remembering field names and safer than guessing. The exam does not penalize you for looking things up — it penalizes you for wrong answers.

### dry-run Patterns Reference Table

| Scenario | Command Pattern |
|----------|----------------|
| Generate pod YAML | `kubectl run <n> --image=<img> --dry-run=client -o yaml > file.yaml` |
| Generate deployment YAML | `kubectl create deployment <n> --image=<img> --dry-run=client -o yaml > file.yaml` |
| Generate service YAML | `kubectl expose deployment <n> --port=80 --dry-run=client -o yaml > file.yaml` |
| Generate configmap YAML | `kubectl create configmap <n> --from-literal=k=v --dry-run=client -o yaml > file.yaml` |
| Generate role YAML | `kubectl create role <n> --verb=get --resource=pods --dry-run=client -o yaml > file.yaml` |
| Test apply without applying | `kubectl apply -f file.yaml --dry-run=client` |
| Validate server-side | `kubectl apply -f file.yaml --dry-run=server` |

### Frequently Needed Get and Describe Patterns

```bash
# Get all resources in a namespace
kubectl get all -n <namespace>

# Get with wide output (shows node placement)
kubectl get pods -o wide

# Watch live (useful for confirming pod start)
kubectl get pods -w

# Describe for events (your debugging tool)
kubectl describe pod <name>

# Get YAML of existing object (to understand structure)
kubectl get pod <name> -o yaml

# Get events sorted by time
kubectl get events --sort-by='.lastTimestamp'

# Quick log check
kubectl logs <pod> --tail=20
kubectl logs <pod> -c <container>   # multi-container pod

# Exec into a pod
kubectl exec -it <pod> -- /bin/sh
kubectl exec -it <pod> -c <container> -- bash
```

### Copying an Existing Object's YAML

Sometimes the fastest path is to dump an existing object, edit it, and apply it back:

```bash
kubectl get deployment web -o yaml > web-copy.yaml
# Edit the copy
vim web-copy.yaml
kubectl apply -f web-copy.yaml
```

This avoids writing from scratch when you're creating a similar object.

---

## 7. The Mental Model: Slow is Smooth, Smooth is Fast

Navy SEALs use the phrase "slow is smooth, smooth is fast." This is not a contradiction — it is a description of how expertise works. When you move slowly and deliberately at first, you eliminate errors. Elimination of errors means no backtracking. No backtracking means the slow deliberate path ends up faster than the rushed path that required three corrections.

Apply this to the CKA:

- Read the full task before typing (slow)
- Switch context before every task (slow)
- Use `--dry-run=client -o yaml` to inspect your object before applying (slow)
- Never skip verification: `kubectl get pod <name>` after creating (slow)

Each of these "slow" steps eliminates a class of error that, if it occurs, costs 3–5 minutes of debugging. The math consistently favors the deliberate approach.

---

## Summary

The CKA is a speed exam. You pass not by knowing more than other candidates, but by executing faster and more accurately. The compounding levers are:

1. **Terminal setup** (autocomplete + alias) — set this first, every exam
2. **Imperative commands** — create objects without YAML whenever possible
3. **Context discipline** — never start a task without switching context
4. **YAML skeletons** — when you must write YAML, start from a known-good structure
5. **Time management** — weight tasks by their percentage, skip and return
6. **kubectl explain** — use live docs rather than guessing field names

The pit crew changes the tyre in 2.5 seconds because they have done this specific sequence of movements hundreds of times. You will pass the CKA because you have run these specific kubectl sequences until your hands move before your brain finishes the thought.

---

## Next Steps

- Complete the Quiz for this module — it tests imperative command recall at the practical level
- Work through the Practice Exams in `/Practice-Exams/` under timed conditions (set a real timer)
- Use the Cheat Sheet as your exam-day reference — print or keep open in a second window
- Revisit any module (3–7) where you felt slow during practice exams

---

## Further Reading

- [kubectl Cheat Sheet — Official Kubernetes Docs](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl Command Reference](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)
- [CKA Exam Curriculum — CNCF](https://github.com/cncf/curriculum)
- [Kubernetes API (Application Programming Interface) Reference](https://kubernetes.io/docs/reference/kubernetes-api/)
- [kubectl Autocomplete Setup](https://kubernetes.io/docs/tasks/tools/included/optional-kubectl-configs-bash-linux/)
