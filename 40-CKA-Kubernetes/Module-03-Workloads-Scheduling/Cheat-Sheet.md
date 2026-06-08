# Module 3 Cheat Sheet: Workloads & Scheduling

> Quick-reference tables for the CKA exam. Print or keep open in a second tab.

---

## Workload Comparison

| Feature | Deployment | DaemonSet | StatefulSet | Job | CronJob |
|---------|-----------|-----------|-------------|-----|---------|
| **Use case** | Stateless apps, APIs | Node agents | Databases, queues | Batch tasks | Scheduled batch |
| **Pods per node** | Multiple | Exactly 1 | Multiple | N/A | N/A |
| **Ordered creation** | No | No | Yes (0, 1, 2...) | No | No |
| **Stable Pod names** | No (random suffix) | No | Yes (`name-0`, `name-1`) | No | No |
| **PVC per Pod** | No | No | Yes (volumeClaimTemplates) | No | No |
| **Runs to completion** | No | No | No | Yes | Yes (via Job) |
| **Headless Service needed** | No | No | Yes | No | No |
| **Rolling update support** | Yes | Yes | Yes | No | No |
| **restartPolicy** | Always | Always | Always | OnFailure/Never | OnFailure/Never |

---

## Taint Effects

| Effect | Blocks New Pods (no toleration) | Evicts Existing Pods (no toleration) |
|--------|--------------------------------|-------------------------------------|
| `NoSchedule` | Yes | No |
| `PreferNoSchedule` | No (soft — avoids if possible) | No |
| `NoExecute` | Yes | Yes (immediately, or after `tolerationSeconds`) |

**Add a taint:**
```bash
kubectl taint nodes <node> <key>=<value>:<effect>
```
**Remove a taint** (append `-`):
```bash
kubectl taint nodes <node> <key>=<value>:<effect>-
```

---

## Node Affinity Types

| Type | Behavior | Pod stays Pending if no match? |
|------|----------|-------------------------------|
| `requiredDuringSchedulingIgnoredDuringExecution` | Hard requirement — must match | Yes |
| `preferredDuringSchedulingIgnoredDuringExecution` | Soft preference — try to match | No (schedules anywhere) |

**Note:** `IgnoredDuringExecution` = rule is NOT re-evaluated after the Pod is running. Label changes won't evict a running Pod.

**Operators available in `matchExpressions`:**
`In` | `NotIn` | `Exists` | `DoesNotExist` | `Gt` | `Lt`

---

## kubectl Rollout Commands

| Command | Purpose |
|---------|---------|
| `kubectl rollout status deployment/<name>` | Watch rollout progress (blocks until done) |
| `kubectl rollout history deployment/<name>` | List revision history |
| `kubectl rollout undo deployment/<name>` | Roll back to previous revision |
| `kubectl rollout undo deployment/<name> --to-revision=<n>` | Roll back to specific revision |
| `kubectl rollout pause deployment/<name>` | Pause in-progress rollout |
| `kubectl rollout resume deployment/<name>` | Resume paused rollout |
| `kubectl rollout restart deployment/<name>` | Trigger fresh rolling restart |

---

## Resource Units

| Resource | Unit | Equivalent |
|----------|------|------------|
| CPU | `1` | 1 vCPU / 1 Core |
| CPU | `500m` | 0.5 vCPU (500 millicores) |
| CPU | `100m` | 0.1 vCPU |
| Memory | `128Mi` | 134,217,728 bytes (binary) |
| Memory | `1Gi` | 1,073,741,824 bytes (binary) |
| Memory | `256M` | 256,000,000 bytes (SI — avoid ambiguity, prefer Mi) |

**CPU exceeded limit:** throttled (not killed)  
**Memory exceeded limit:** OOMKilled (container terminated)

---

## Cron Syntax Reference

```
"minute  hour  day-of-month  month  day-of-week"
  0-59   0-23      1-31       1-12     0-6 (Sun=0)
```

| Expression | Meaning |
|------------|---------|
| `"*/5 * * * *"` | Every 5 minutes |
| `"0 2 * * *"` | Daily at 2:00 AM |
| `"0 0 * * 0"` | Every Sunday at midnight |
| `"0 8 1 * *"` | 8 AM on the 1st of every month |
| `"0 9-17 * * 1-5"` | Every hour 9 AM–5 PM, weekdays |
| `"*/15 9-17 * * 1-5"` | Every 15 min during business hours (weekdays) |

---

## Pod Phases Quick Reference

| Phase | Pod State | Container State |
|-------|-----------|----------------|
| `Pending` | Accepted, not yet bound to node | Waiting (image pull or scheduling) |
| `Running` | Bound to node | At least one container running/starting/restarting |
| `Succeeded` | All containers exited 0 | Terminated (exit 0) |
| `Failed` | All containers terminated | At least one exited non-zero |
| `Unknown` | Cannot communicate with node | Indeterminate |

---

## Scheduling Decision Hierarchy

1. `spec.nodeName` — bypasses scheduler entirely (hardcoded node)
2. `nodeSelector` — simple label filter (AND logic)
3. Node Affinity `required` — hard constraint with richer operators
4. Node Affinity `preferred` — scored preference
5. Taints/Tolerations — repel Pods without matching toleration
6. Resource `requests` — node must have allocatable capacity

---

## Key YAML Paths (use with `kubectl explain`)

```
pod.spec.nodeName
pod.spec.nodeSelector
pod.spec.affinity.nodeAffinity
pod.spec.affinity.nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution
pod.spec.affinity.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution
pod.spec.tolerations
pod.spec.schedulerName
pod.spec.containers[].resources.requests
pod.spec.containers[].resources.limits
deployment.spec.strategy.rollingUpdate.maxSurge
deployment.spec.strategy.rollingUpdate.maxUnavailable
statefulset.spec.volumeClaimTemplates
statefulset.spec.serviceName
job.spec.completions
job.spec.parallelism
cronjob.spec.schedule
```
