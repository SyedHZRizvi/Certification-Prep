# Module 3: Workloads & Scheduling

> **CKA Domain:** Workloads & Scheduling — 15% of exam weight  
> **Estimated reading time:** 45–60 minutes

---

## The Dispatch Problem

Imagine running a logistics company with 500 delivery trucks. Every morning at 6 AM, a team of human dispatchers tries to assign packages to drivers manually. They look at which drivers are available, which trucks need maintenance, which routes have heavy traffic — and they write assignments on a whiteboard.

By 9 AM the whiteboard is chaos. Three dispatchers are arguing about driver 47. Two trucks have left for the same address. Five drivers are idle because nobody wrote their names down fast enough. One dispatcher called in sick, and nobody knows the North Side route assignments.

This is what running containers without Kubernetes looks like.

Now imagine replacing that whiteboard with an automated dispatch system. The system knows the state of every truck in real time. It knows which warehouse zones need coverage. When a driver calls in sick, the system instantly re-assigns their packages. When traffic blocks a route, the system reroutes automatically. When the city gets a new neighborhood, a supervisor simply adds it to the zone map and the dispatch algorithm handles the rest.

That automated dispatch system is the Kubernetes scheduler — and the rules it follows are what this module covers.

---

## 1. The Pod: The Unit of Work

Before dispatching trucks, you need to understand what a truck actually is. In Kubernetes, the fundamental unit of work is the **Pod** — a wrapper around one or more containers that share a network namespace and storage volumes.

Every Pod goes through a defined lifecycle. Understanding this lifecycle is non-negotiable for the CKA exam.

### 1.1 Pod Phases

| Phase | Description | What It Means in Practice |
|-------|-------------|--------------------------|
| `Pending` | Pod accepted by the cluster but not yet running | Scheduler is finding a node, or images are being pulled |
| `Running` | Pod bound to a node; at least one container is running or starting | Normal healthy state |
| `Succeeded` | All containers exited with code 0 and will not restart | Job completed successfully |
| `Failed` | All containers have terminated; at least one exited non-zero | Application crashed or was killed |
| `Unknown` | Pod state cannot be determined | Node communication lost (network partition, node crash) |

Think of these phases like a package delivery status: Created → Out for Delivery → Delivered, or: Out for Delivery → Lost.

### 1.2 restartPolicy

The `restartPolicy` field on the Pod spec controls what happens when a container inside the Pod terminates. This is **not** about the Pod itself restarting — it is about the container inside it.

```yaml
spec:
  restartPolicy: Always   # default — always restart containers on exit
  # restartPolicy: OnFailure  — restart only if exit code is non-zero
  # restartPolicy: Never      — never restart containers
```

- `Always` — used with Deployments and long-running services
- `OnFailure` — used with Jobs (retry on failure, stop on success)
- `Never` — used when you want exactly one attempt regardless of outcome

🚨 **Trap:** `restartPolicy` applies to the Pod, not the controller. If you define a Job with `restartPolicy: Always`, Kubernetes will reject it. Jobs must use `OnFailure` or `Never`.

---

## 2. ReplicaSets: Keeping the Fleet at Strength

Back to our logistics analogy. The dispatch system is told: "We need 10 trucks covering the East Zone at all times." When one truck breaks down, the system immediately dispatches a spare. That guarantee — *keep N units running* — is the job of a **ReplicaSet**.

A ReplicaSet has three critical components:

1. **`spec.replicas`** — the desired count
2. **`selector`** — how it finds the Pods it owns
3. **`template`** — the Pod blueprint

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: delivery-fleet
spec:
  replicas: 10
  selector:
    matchLabels:
      app: delivery-truck
      zone: east
  template:
    metadata:
      labels:
        app: delivery-truck
        zone: east
    spec:
      containers:
      - name: truck
        image: logistics/truck:v2
```

The selector and the Pod template labels **must match exactly** — this is how the ReplicaSet knows which Pods it is responsible for. If you create Pods with matching labels manually, the ReplicaSet will count them toward its total and may not create new ones.

🎯 **Exam tip:** You will almost never create a ReplicaSet directly in the CKA exam. Deployments manage ReplicaSets for you. Know the ReplicaSet spec because `kubectl describe replicaset` output will appear in troubleshooting questions.

---

## 3. Deployments: Rolling Updates and Rollbacks

A Deployment wraps a ReplicaSet and adds the ability to roll out new versions and roll back to old ones — without downtime.

Think of it as a fleet upgrade system: you can say "Replace all v1 trucks with v2 trucks, but do it slowly — swap 2 at a time, and make sure the fleet never drops below 8 trucks total."

### 3.1 Creating a Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: delivery-app
spec:
  replicas: 10
  selector:
    matchLabels:
      app: delivery-app
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2        # At most 2 extra Pods above desired count
      maxUnavailable: 1  # At most 1 Pod can be unavailable at a time
  template:
    metadata:
      labels:
        app: delivery-app
    spec:
      containers:
      - name: app
        image: logistics/app:v2
```

### 3.2 Rolling Update Mechanics

- **`maxSurge`** — how many extra Pods can exist above `replicas` during the update (absolute number or percentage)
- **`maxUnavailable`** — how many Pods can be unavailable during the update (absolute number or percentage)

With `replicas: 10`, `maxSurge: 2`, `maxUnavailable: 1`:
- Maximum Pods during update: 12
- Minimum Pods running at any time: 9

### 3.3 Rollout Commands

**MEMORIZE THIS.**

```bash
# Check rollout status
kubectl rollout status deployment/delivery-app

# View rollout history
kubectl rollout history deployment/delivery-app

# Roll back to previous revision
kubectl rollout undo deployment/delivery-app

# Roll back to a specific revision
kubectl rollout undo deployment/delivery-app --to-revision=3

# Pause a rollout (to inspect mid-update)
kubectl rollout pause deployment/delivery-app

# Resume a paused rollout
kubectl rollout resume deployment/delivery-app

# Restart all Pods in a Deployment (triggers rolling update)
kubectl rollout restart deployment/delivery-app
```

When you run `kubectl rollout undo`, Kubernetes does not delete anything — it simply sets the Deployment's Pod template back to the previous ReplicaSet's spec, which triggers a new rolling update in reverse.

---

## 4. Workload Type Comparison

| Workload | Use Case | Pods Per Node | Ordered | Stable IDs | Persistent Storage |
|----------|----------|--------------|---------|------------|--------------------|
| Deployment | Stateless apps, web servers, APIs | Multiple | No | No | No (usually) |
| ReplicaSet | Low-level replica management | Multiple | No | No | No |
| DaemonSet | Node-level agents (logging, monitoring) | Exactly 1 | No | No | No |
| StatefulSet | Databases, queues, stateful apps | Multiple | Yes | Yes | Yes |
| Job | Batch processing, one-time tasks | N/A | No | No | No |
| CronJob | Scheduled batch tasks | N/A | No | No | No |

---

## 5. DaemonSets: One Agent Per Truck

Every delivery truck in our fleet has a GPS tracker installed. You don't choose which trucks get a tracker — every truck gets exactly one, automatically, whenever a new truck joins the fleet.

That is a **DaemonSet**: it ensures exactly one Pod runs on every node (or every node matching a selector).

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: log-collector
spec:
  selector:
    matchLabels:
      app: log-collector
  template:
    metadata:
      labels:
        app: log-collector
    spec:
      containers:
      - name: fluentd
        image: fluent/fluentd:v1.16
        volumeMounts:
        - name: varlog
          mountPath: /var/log
      volumes:
      - name: varlog
        hostPath:
          path: /var/log
```

Common DaemonSet use cases:
- **Log collection** (Fluentd, Filebeat)
- **Monitoring agents** (Prometheus Node Exporter, Datadog Agent)
- **Network plugins** (CNI components like Calico, Weave)
- **Storage daemons** (Ceph, GlusterFS clients)

When you add a new node to the cluster, the DaemonSet controller automatically schedules the Pod onto it. No manual intervention required.

---

## 6. StatefulSets: Remembering Who's Who

Imagine your logistics company has 5 refrigerated trucks. These trucks are not interchangeable — Truck A always serves the hospital (cold chain), Truck B serves the restaurant district, and they each have their own dedicated cold storage unit that cannot be swapped between trucks.

This is a **StatefulSet**: ordered, stable-identity Pods with persistent storage.

### 6.1 Key StatefulSet Characteristics

- Pods get **stable, predictable names**: `db-0`, `db-1`, `db-2`
- Pods are **created in order**: `db-0` must be Running before `db-1` starts
- Pods are **deleted in reverse order**: `db-2` before `db-1` before `db-0`
- Each Pod gets its own **PersistentVolumeClaim** via `volumeClaimTemplates`
- Each Pod gets a **stable network identity** via a Headless Service

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: postgres
spec:
  serviceName: "postgres-headless"
  replicas: 3
  selector:
    matchLabels:
      app: postgres
  template:
    metadata:
      labels:
        app: postgres
    spec:
      containers:
      - name: postgres
        image: postgres:15
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi
```

DNS for StatefulSet Pods follows this pattern:
`<pod-name>.<service-name>.<namespace>.svc.cluster.local`

So `postgres-0.postgres-headless.default.svc.cluster.local` always resolves to the same Pod.

---

## 7. Jobs and CronJobs: Scheduled Dispatches

### 7.1 Jobs

A Job runs a Pod to completion. Unlike a Deployment which restarts Pods forever, a Job says "do this task, report success or failure, then stop."

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: database-migration
spec:
  completions: 1      # Run successfully 1 time total
  parallelism: 1      # Run at most 1 Pod at a time
  template:
    spec:
      restartPolicy: OnFailure
      containers:
      - name: migrate
        image: logistics/migrator:v3
        command: ["python", "migrate.py"]
```

For parallel batch processing:
```yaml
spec:
  completions: 100    # Need 100 successful completions
  parallelism: 10     # Run 10 Pods at a time
```

### 7.2 CronJobs

A CronJob creates Jobs on a schedule.

**MEMORIZE THIS.** Cron syntax: `"minute hour day-of-month month day-of-week"`

```
"*/5 * * * *"     → every 5 minutes
"0 2 * * *"       → daily at 2:00 AM
"0 0 * * 0"       → every Sunday at midnight
"0 8 1 * *"       → 8 AM on the 1st of every month
"*/15 9-17 * * 1-5" → every 15 min during business hours, weekdays only
```

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: nightly-report
spec:
  schedule: "0 2 * * *"
  jobTemplate:
    spec:
      template:
        spec:
          restartPolicy: OnFailure
          containers:
          - name: reporter
            image: logistics/reporter:v1
```

Key CronJob fields:
- `successfulJobsHistoryLimit` (default 3) — how many completed Jobs to keep
- `failedJobsHistoryLimit` (default 1) — how many failed Jobs to keep
- `concurrencyPolicy: Forbid` — skip new Job if previous is still running

---

## 8. Scheduling: Where Do Pods Land?

The Kubernetes scheduler watches for Pods in `Pending` state and assigns them to nodes. It evaluates every node and scores them based on resource availability, constraints, and affinity rules.

### 8.1 Manual Scheduling with `spec.nodeName`

The bluntest tool: bypass the scheduler entirely and pin a Pod to a node by name.

```yaml
spec:
  nodeName: node-3
  containers:
  - name: app
    image: nginx
```

If the node does not exist or cannot accept the Pod, the Pod will stay in `Pending` forever. The scheduler ignores Pods that already have `nodeName` set.

### 8.2 nodeSelector

A simple label-based filter. The Pod will only schedule on nodes with matching labels.

```yaml
spec:
  nodeSelector:
    disktype: ssd
    region: us-east-1
```

First, label your node:
```bash
kubectl label node node-3 disktype=ssd region=us-east-1
```

`nodeSelector` is an AND condition: all labels must match.

### 8.3 Node Affinity

Node affinity is `nodeSelector` with more expressive rules — operators like `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, `Lt`.

There are two types:

| Affinity Type | Effect if No Match Found |
|---------------|-------------------------|
| `requiredDuringSchedulingIgnoredDuringExecution` | Pod stays Pending — hard requirement |
| `preferredDuringSchedulingIgnoredDuringExecution` | Pod may schedule on another node — soft preference |

```yaml
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: disktype
            operator: In
            values:
            - ssd
            - nvme
      preferredDuringSchedulingIgnoredDuringExecution:
      - weight: 80
        preference:
          matchExpressions:
          - key: region
            operator: In
            values:
            - us-east-1
```

`IgnoredDuringExecution` means: once the Pod is running, the rule is not re-evaluated. If a node's label changes, the Pod keeps running. (A future `RequiredDuringExecution` variant would evict the Pod.)

🎯 **Exam tip:** The CKA exam frequently asks you to configure node affinity from scratch under time pressure. Know the full YAML path: `spec.affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution.nodeSelectorTerms[].matchExpressions[]`. Use `kubectl explain pod.spec.affinity.nodeAffinity` if you blank.

---

## 9. Taints and Tolerations

While affinity says "Pods prefer or require certain nodes," taints work in the opposite direction: they say "this node repels certain Pods."

Think of it as a "No Trucks Allowed" sign on a road. Only trucks with a special permit (toleration) can use that road.

### 9.1 Taints

Apply a taint to a node:
```bash
kubectl taint nodes node-gpu gpu=required:NoSchedule
kubectl taint nodes node-db dedicated=database:NoExecute
kubectl taint nodes node-spot spot=true:PreferNoSchedule
```

Remove a taint (append `-` to the taint spec):
```bash
kubectl taint nodes node-gpu gpu=required:NoSchedule-
```

### 9.2 Taint Effects

**MEMORIZE THIS.**

| Effect | Behavior |
|--------|----------|
| `NoSchedule` | New Pods without matching toleration will NOT be scheduled on this node. Existing Pods are unaffected. |
| `PreferNoSchedule` | Scheduler will TRY to avoid placing Pods without toleration here, but will do so if no other node is available. |
| `NoExecute` | New Pods without toleration are not scheduled. Existing Pods without toleration are EVICTED immediately. |

### 9.3 Tolerations

A toleration on a Pod allows it to be scheduled on (or survive on) a tainted node.

```yaml
spec:
  tolerations:
  - key: "gpu"
    operator: "Equal"
    value: "required"
    effect: "NoSchedule"
  - key: "dedicated"
    operator: "Exists"
    effect: "NoExecute"
    tolerationSeconds: 3600   # Tolerate for 1 hour, then evict
```

- `operator: Equal` — key and value must both match
- `operator: Exists` — only the key needs to match (any value)
- `tolerationSeconds` — only valid with `NoExecute`; Pod is evicted after this duration

🚨 **Trap:** Tolerations are **permissive**, not prescriptive. A toleration says "I can run on a tainted node" — it does NOT mean "I will run on a tainted node." You need node affinity if you want to *force* placement on a tainted node.

A common pattern is to taint a node AND use node affinity together:
- Taint repels Pods without toleration
- Affinity attracts the right Pods to that specific node

### 9.4 Built-in Taints

Kubernetes uses taints internally:
```
node.kubernetes.io/not-ready:NoExecute
node.kubernetes.io/unreachable:NoExecute
node.kubernetes.io/memory-pressure:NoSchedule
node.kubernetes.io/disk-pressure:NoSchedule
node.kubernetes.io/unschedulable:NoSchedule
```

Control plane nodes are tainted with `node-role.kubernetes.io/control-plane:NoSchedule`, which is why regular workloads do not land on master nodes by default.

---

## 10. Resource Requests and Limits

Every truck has a weight limit. If you overload a truck, it breaks down. Resource requests and limits are Kubernetes's way of managing compute capacity.

### 10.1 CPU and Memory Units

**CPU:**
- `1` = 1 vCPU/Core
- `500m` = 500 millicores = 0.5 vCPU
- `100m` = 100 millicores = 0.1 vCPU

**Memory:**
- `128Mi` = 128 mebibytes (1 Mi = 1,048,576 bytes)
- `1Gi` = 1 gibibyte
- `256M` = 256 megabytes (SI unit, slightly different from Mi)

For the exam: always use `Mi` and `Gi` (binary units) — they are unambiguous.

### 10.2 Requests vs. Limits

```yaml
spec:
  containers:
  - name: app
    image: nginx
    resources:
      requests:
        cpu: "250m"
        memory: "128Mi"
      limits:
        cpu: "500m"
        memory: "256Mi"
```

- **`requests`** — the minimum the container needs. The scheduler uses this to decide which node has enough free capacity. The node must have at least this much allocatable resource.
- **`limits`** — the maximum the container can use. If CPU exceeds the limit, the container is throttled. If memory exceeds the limit, the container is OOMKilled.

| | Requests | Limits |
|--|---------|--------|
| Used for | Scheduling decisions | Runtime enforcement |
| CPU behavior if exceeded | — | Throttled (not killed) |
| Memory behavior if exceeded | — | OOMKilled |

### 10.3 LimitRange

A `LimitRange` object in a namespace sets default requests/limits and enforces min/max values for containers that do not specify their own.

```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
  namespace: production
spec:
  limits:
  - type: Container
    default:
      cpu: "500m"
      memory: "256Mi"
    defaultRequest:
      cpu: "100m"
      memory: "64Mi"
    max:
      cpu: "2"
      memory: "2Gi"
    min:
      cpu: "50m"
      memory: "32Mi"
```

### 10.4 ResourceQuota

A `ResourceQuota` caps the total resource consumption across all objects in a namespace.

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: team-quota
  namespace: team-alpha
spec:
  hard:
    requests.cpu: "10"
    requests.memory: "20Gi"
    limits.cpu: "20"
    limits.memory: "40Gi"
    pods: "50"
    services: "10"
```

If a namespace has a ResourceQuota for CPU/memory, every Pod in that namespace **must** specify requests and limits — or the Pod will be rejected.

---

## 11. Multiple Schedulers

Kubernetes allows you to run custom schedulers alongside the default one. A Pod can opt into a specific scheduler using `spec.schedulerName`:

```yaml
spec:
  schedulerName: my-custom-scheduler
  containers:
  - name: app
    image: nginx
```

If the named scheduler does not exist, the Pod stays in `Pending` state. The default scheduler's name is `default-scheduler`.

For the CKA exam, you need to know:
- How to specify a custom scheduler in a Pod spec
- That Pods without `schedulerName` use `default-scheduler`
- How to deploy a second scheduler (it runs as a Deployment in `kube-system`)

---

## 12. Horizontal Pod Autoscaler (HPA): Scaling the Fleet Automatically

Back to the logistics company. So far you have set a fixed fleet size: "10 trucks on the East Zone." But demand is not constant — Monday mornings are slammed, Sunday nights are dead. Paying for 10 trucks at 3 AM is wasteful; running 10 trucks during the holiday rush is not enough. What you really want is a dispatcher who **watches the load and adds or removes trucks automatically** to keep every truck about 70% utilised.

That dispatcher is the **Horizontal Pod Autoscaler (HPA)**. It watches a metric (most commonly CPU), compares it to a target you set, and changes the `replicas` count of a Deployment, ReplicaSet, or StatefulSet to keep the metric near that target. "Horizontal" means it adds **more Pods** — not bigger Pods.

### 12.1 How the HPA Loop Works

The HPA controller runs inside the control plane and re-evaluates every 15 seconds by default. Each cycle:

1. Read the current metric value for the Pods (e.g., average CPU across all Pods).
2. Compute desired replicas with the ratio formula:
   `desiredReplicas = ceil( currentReplicas × ( currentMetric / targetMetric ) )`
3. Scale the target workload toward that number, clamped between `minReplicas` and `maxReplicas`.

So if 4 Pods are averaging 80% CPU and your target is 50%, the HPA computes `ceil(4 × 80/50) = ceil(6.4) = 7` and scales to 7 Pods.

### 12.2 The metrics-server Dependency

🚨 **Trap on the exam:** The HPA does **not** collect metrics itself. It reads them from the **Metrics API**, which is supplied by **metrics-server** — a separate component that is NOT installed by default. Without metrics-server, CPU/memory-based HPAs show `<unknown>` in the `TARGETS` column and never scale. This is the single most common HPA failure.

```bash
# Is metrics-server present and serving?
kubectl get deployment metrics-server -n kube-system
kubectl top nodes        # these two commands ONLY work
kubectl top pods         # if metrics-server is running
```

The same `kubectl top` dependency is a quick way to confirm metrics are flowing before you even create an HPA.

### 12.3 Creating an HPA Imperatively

**MEMORIZE THIS.** The fastest path on the exam is `kubectl autoscale`:

```bash
kubectl autoscale deployment delivery-app \
  --cpu-percent=70 \
  --min=2 \
  --max=10
```

This targets 70% average CPU, never scaling below 2 or above 10 Pods.

🎯 **Exam tip:** For the HPA to use a CPU *percentage*, the Pods' containers **must declare `resources.requests.cpu`** — the percentage is measured against the request. No CPU request means the HPA cannot compute utilisation and will report `<unknown>`. Always check that requests are set.

### 12.4 The autoscaling/v2 Object

The declarative form uses the `autoscaling/v2` API, which supports multiple and non-CPU metrics. Know this YAML:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: delivery-app-hpa
  namespace: default
spec:
  scaleTargetRef:                 # what to scale
    apiVersion: apps/v1
    kind: Deployment
    name: delivery-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization        # percentage of the Pod's CPU request
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: AverageValue       # absolute value, not a percentage
          averageValue: 500Mi
```

> The older `autoscaling/v1` only supports a single CPU target. `autoscaling/v2` adds memory, multiple metrics, custom/external metrics, and scaling **behavior** policies (stabilization windows to prevent flapping). For the CKA, use `autoscaling/v2`.

### 12.5 Inspecting an HPA

```bash
kubectl get hpa
kubectl describe hpa delivery-app-hpa     # shows current vs target + scaling events
kubectl get hpa delivery-app-hpa -o yaml
```

In `kubectl get hpa`, the `TARGETS` column reads like `45%/70%` (current/target). A value of `<unknown>/70%` means metrics-server is missing or the Pods have no CPU request — go fix that first.

### 12.6 HPA vs. VPA

| Dimension | Horizontal Pod Autoscaler (HPA) | Vertical Pod Autoscaler (VPA) |
|-----------|---------------------------------|-------------------------------|
| Scales | **Number of Pods** (out/in) | **Resources per Pod** (requests/limits up/down) |
| Good for | Stateless apps that scale by adding replicas | Workloads that are hard to replicate (some stateful/singletons) |
| Mechanism | Adjusts `replicas` on the workload | Adjusts container `requests`/`limits` |
| Disruption | Non-disruptive (adds/removes Pods) | Often restarts Pods to apply new sizes |
| Built in? | Yes (core API `autoscaling/v2`) | No — add-on, installed separately |
| CKA focus | **Primary** — know it well | Conceptual — know the distinction |

🚨 **Trap on the exam:** Do not run an HPA and a VPA on the **same CPU/memory metric** for the same workload — they fight each other (the VPA changes the request the HPA measures against). They can coexist only on *different* metrics. The CKA tests HPA hands-on; VPA appears as a "know the difference" concept.

---

## Summary

| Concept | Key Points |
|---------|-----------|
| Pod lifecycle | Pending → Running → Succeeded/Failed/Unknown; restartPolicy: Always/OnFailure/Never |
| ReplicaSet | Maintains replica count; selector + template must match |
| Deployment | Wraps ReplicaSet; rolling updates via maxSurge/maxUnavailable; `kubectl rollout undo` |
| DaemonSet | One Pod per node; used for agents and infrastructure |
| StatefulSet | Ordered, stable-identity Pods; PVC per Pod via volumeClaimTemplates |
| Job/CronJob | To-completion workloads; cron syntax `"minute hour dom month dow"` |
| nodeSelector | Simple label match for scheduling |
| Node Affinity | Required (hard) vs Preferred (soft); richer operators than nodeSelector |
| Taints | Repel Pods from nodes; NoSchedule/PreferNoSchedule/NoExecute |
| Tolerations | Allow Pods onto tainted nodes (permissive, not mandatory) |
| Resources | requests = scheduling floor; limits = runtime ceiling; CPU throttled, memory OOMKilled |
| LimitRange | Per-namespace defaults and bounds |
| ResourceQuota | Per-namespace total caps |
| HPA | Scales replica count to hit a metric target; `autoscaling/v2`; needs metrics-server + CPU requests |
| HPA vs VPA | HPA = more Pods; VPA = bigger Pods (add-on); don't pair on same metric |

---

## Next Steps

- Module 4: Services & Networking — how Pods communicate once they are scheduled
- Practice: Use `kubectl explain` on every resource type covered here
- Lab: Deploy a StatefulSet with PVC, apply taints to a node, and verify scheduling behavior

---

## Further Reading

- [Kubernetes Docs: Pod Lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/)
- [Kubernetes Docs: Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
- [Kubernetes Docs: Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)
- [Kubernetes Docs: Assigning Pods to Nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)
- [Kubernetes Docs: Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)
- [Kubernetes Docs: StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
- [Kubernetes Docs: Horizontal Pod Autoscaling](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
- [Kubernetes Docs: HPA Walkthrough](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/)
