# Module 3 Quiz: Workloads & Scheduling

**31 questions** | Bloom taxonomy levels noted | ~35 minutes under exam conditions

---

### Q1. [Remember]
A Pod is in `Pending` state. Which of the following is the most likely cause?

A) The application inside the container has crashed  
B) The scheduler has not yet found a suitable node  
C) The Pod has completed successfully and is terminating  
D) The kubelet on the target node is not running  

---

### Q2. [Understand]
Which `restartPolicy` is valid for a Kubernetes Job?

A) `Always`  
B) `Never`  
C) `Always` or `OnFailure`  
D) `OnFailure` or `Never`  

---

### Q3. [Remember]
What does the `maxUnavailable` field in a Deployment's rolling update strategy control?

A) The maximum number of Pods that can exist above the desired replica count  
B) The maximum number of Pods that can be unavailable during the update  
C) The maximum time a rollout can pause before being cancelled  
D) The maximum number of failed rollout attempts before auto-rollback  

---

### Q4. [Apply]
You need to roll back a Deployment named `api-server` to the immediately previous version. Which command is correct?

A) `kubectl rollout revert deployment/api-server`  
B) `kubectl rollout undo deployment/api-server`  
C) `kubectl rollout history deployment/api-server --undo`  
D) `kubectl scale deployment/api-server --replicas=0`  

---

### Q5. [Understand]
A node is tainted with `env=production:NoExecute`. A Pod without a matching toleration is currently running on that node. What happens?

A) Nothing — NoExecute only affects future scheduling  
B) The Pod is throttled but continues running  
C) The Pod is evicted immediately  
D) The Pod enters `Pending` state and is rescheduled  

---

### Q6. [Apply]
You want to ensure that a Pod is scheduled on a node with the label `gpu=nvidia`, but if no such node is available, the Pod should still be scheduled on any available node. Which approach is correct?

A) `nodeSelector` with `gpu: nvidia`  
B) Node affinity with `requiredDuringSchedulingIgnoredDuringExecution`  
C) Node affinity with `preferredDuringSchedulingIgnoredDuringExecution`  
D) A taint on GPU nodes with `NoSchedule` effect  

---

### Q7. [Remember]
Which Kubernetes workload type guarantees exactly one Pod per node?

A) ReplicaSet  
B) Deployment  
C) DaemonSet  
D) StatefulSet  

---

### Q8. [Analyze]
A StatefulSet named `kafka` has 3 replicas. What are the Pod names?

A) `kafka-a`, `kafka-b`, `kafka-c`  
B) `kafka-1`, `kafka-2`, `kafka-3`  
C) `kafka-0`, `kafka-1`, `kafka-2`  
D) `kafka-pod-0`, `kafka-pod-1`, `kafka-pod-2`  

---

### Q9. [Apply]
A namespace has a `ResourceQuota` that requires all Pods to specify CPU requests and limits. A developer submits a Pod without resource specifications. What happens?

A) The Pod is scheduled with no resource limits applied  
B) The Pod is rejected by the API server  
C) The Pod uses the node's default limits  
D) The Pod enters `Pending` state until limits are added  

---

### Q10. [Understand]
What is the difference between `requests.cpu` and `limits.cpu`?

A) `requests` is enforced at runtime; `limits` is used only for scheduling  
B) `requests` is used for scheduling decisions; `limits` is enforced at runtime  
C) `requests` and `limits` are both used for scheduling and have no runtime effect  
D) `limits` must always equal `requests`  

---

### Q11. [Remember]
What is the cron expression for a job that runs every 5 minutes?

A) `"5 * * * *"`  
B) `"*/5 * * * *"`  
C) `"* 5 * * *"`  
D) `"0/5 * * * *"`  

---

### Q12. [Apply]
You run `kubectl taint nodes worker-1 dedicated=gpu:NoSchedule`. You then create a Pod with the toleration below. Will the Pod schedule on `worker-1`?

```yaml
tolerations:
- key: "dedicated"
  operator: "Equal"
  value: "gpu"
  effect: "PreferNoSchedule"
```

A) Yes, because the toleration key and value match  
B) No, because the toleration effect does not match the taint effect  
C) Yes, because `PreferNoSchedule` tolerates all taint effects  
D) No, because the Pod needs node affinity to schedule on a tainted node  

---

### Q13. [Understand]
A container uses 300m CPU and its limit is 200m CPU. What happens?

A) The container is OOMKilled  
B) The Pod is evicted  
C) The container is CPU-throttled  
D) The container is restarted immediately  

---

### Q14. [Apply]
You want to run a batch job that processes 50 records, running 5 workers in parallel. Which Job spec is correct?

A) `completions: 5, parallelism: 50`  
B) `completions: 50, parallelism: 5`  
C) `completions: 10, parallelism: 5`  
D) `completions: 50, parallelism: 50`  

---

### Q15. [Remember]
Which field in a Pod spec allows you to bypass the Kubernetes scheduler and place a Pod directly on a specific node?

A) `spec.nodeAffinity`  
B) `spec.schedulerName`  
C) `spec.nodeName`  
D) `spec.nodeSelector`  

---

### Q16. [Analyze]
A Deployment has `replicas: 8`, `maxSurge: 25%`, and `maxUnavailable: 25%`. During a rolling update, what is the minimum number of Pods guaranteed to be running?

A) 4  
B) 6  
C) 7  
D) 8  

---

### Q17. [Understand]
What is the key difference between a `Job` and a `CronJob` in Kubernetes?

A) Jobs support parallelism; CronJobs do not  
B) CronJobs create Jobs on a schedule; a Job runs once  
C) CronJobs run indefinitely; Jobs run until failure  
D) Jobs require `restartPolicy: Never`; CronJobs require `restartPolicy: Always`  

---

### Q18. [Apply]
A node has the taint `spot=true:PreferNoSchedule`. A Pod has no tolerations. What happens when the scheduler tries to place this Pod?

A) The Pod cannot be scheduled on this node at all  
B) The Pod will be scheduled on this node if no other node is available  
C) The Pod is scheduled on this node with the same priority as taint-free nodes  
D) The Pod is evicted after 5 minutes  

---

### Q19. [Analyze]
You have a StatefulSet with `replicas: 3`. Pod `db-0` is in `Pending` state. What happens to `db-1` and `db-2`?

A) They are created in parallel with `db-0`  
B) They are created after a 30-second timeout  
C) They are not created until `db-0` is `Running`  
D) They are created immediately but enter `Init` state  

---

### Q20. [Remember]
What is the primary use case for a `LimitRange` object?

A) Capping the total CPU across all Pods in a namespace  
B) Setting default resource requests/limits for containers that don't specify their own  
C) Limiting the number of Pods that can run on a single node  
D) Restricting which namespaces can use high-memory nodes  

---

### Q21. [Apply]
You want to run a monitoring agent (Prometheus Node Exporter) on every node in the cluster, including nodes added in the future. Which workload type should you use?

A) Deployment with `replicas` equal to the number of nodes  
B) StatefulSet with `replicas` equal to the number of nodes  
C) DaemonSet  
D) Job with `completions` equal to the number of nodes  

---

### Q22. [Apply]
A Pod spec has the following affinity:

```yaml
requiredDuringSchedulingIgnoredDuringExecution:
  nodeSelectorTerms:
  - matchExpressions:
    - key: zone
      operator: In
      values: ["us-east-1a", "us-east-1b"]
```

The cluster has nodes in `us-west-2a` and `us-east-1b`. Where will the Pod be scheduled?

A) Any node in the cluster  
B) Only nodes in `us-west-2a`  
C) Only nodes in `us-east-1b`  
D) The Pod stays in Pending because no node matches both zones simultaneously  

---

### Q23. [Understand]
What does the `IgnoredDuringExecution` suffix in `requiredDuringSchedulingIgnoredDuringExecution` mean?

A) The rule is ignored if the Pod is in `Pending` state  
B) Once the Pod is running, the affinity rule is not re-evaluated  
C) The rule is applied only during the first scheduling attempt  
D) Existing Pods are evicted if the node's labels change  

---

### Q24. [Remember]
Control plane nodes are protected from regular workloads by default. What mechanism prevents ordinary Pods from being scheduled on the control plane?

A) A ResourceQuota on the `kube-system` namespace  
B) A DaemonSet toleration that only matches control plane Pods  
C) A taint on control plane nodes with `NoSchedule` effect  
D) A node affinity rule applied to all user Pods automatically  

---

### Q25. [Apply]
You need to check whether a Deployment's rolling update is complete. Which command gives you the most direct answer?

A) `kubectl get pods -l app=my-app`  
B) `kubectl describe deployment my-app`  
C) `kubectl rollout status deployment/my-app`  
D) `kubectl get replicaset -l app=my-app`  

---

### Q26. [Analyze]
A Pod spec has `schedulerName: my-batch-scheduler`, but no Pod with that scheduler name is running in the cluster. What is the Pod's state?

A) `Running` — it falls back to the default scheduler  
B) `Failed` — the scheduler name is invalid  
C) `Pending` — no scheduler is processing it  
D) `Unknown` — the API server cannot determine the state  

---

### Q27. [Apply]
Which command creates a Horizontal Pod Autoscaler for the Deployment `web` that targets 70% average CPU, scaling between 2 and 10 replicas?

A) `kubectl scale deployment web --cpu=70 --replicas=2-10`  
B) `kubectl autoscale deployment web --cpu-percent=70 --min=2 --max=10`  
C) `kubectl create hpa web --target-cpu=70 --range=2,10`  
D) `kubectl set autoscale deployment/web --cpu=70%`  

---

### Q28. [Analyze]
You create a CPU-based HPA, but `kubectl get hpa` shows `<unknown>/70%` in the TARGETS column and the workload never scales. What are the two most likely causes?

A) The Deployment has too many replicas already  
B) metrics-server is not installed, or the Pods have no `resources.requests.cpu` set  
C) The HPA `maxReplicas` is set lower than the current replica count  
D) The cluster is using `autoscaling/v2` instead of `autoscaling/v1`  

---

### Q29. [Apply]
An HPA currently runs 4 replicas at 80% average CPU with a target of 50%. Using the standard HPA formula, how many replicas will it scale to?

A) 5  
B) 6  
C) 7  
D) 8  

---

### Q30. [Understand]
Which statement correctly distinguishes the Horizontal Pod Autoscaler (HPA) from the Vertical Pod Autoscaler (VPA)?

A) HPA changes each Pod's CPU/memory requests; VPA changes the number of Pods  
B) HPA changes the number of Pods; VPA changes each Pod's CPU/memory requests  
C) Both change the number of Pods, but VPA is faster  
D) Both are built into Kubernetes core and enabled by default  

---

### Q31. [Remember]
Which API version should you use for an HPA that targets both CPU utilization and a memory value?

A) `autoscaling/v1`  
B) `autoscaling/v2`  
C) `apps/v1`  
D) `metrics/v1beta1`  

---

## Answers + Explanations

| Q | Answer | Explanation |
|---|--------|-------------|
| 1 | **B** | `Pending` means the scheduler has not yet bound the Pod to a node. A crashed container would show `Running` with restarts, or `Failed`. |
| 2 | **D** | Jobs require `OnFailure` or `Never`. `Always` causes the API server to reject the Job — Pods would restart forever and never "complete." |
| 3 | **B** | `maxUnavailable` sets how many Pods can be down during the update. `maxSurge` handles the upper bound (extra Pods above desired). |
| 4 | **B** | `kubectl rollout undo deployment/<name>` is the correct command. It reverts to the previous ReplicaSet revision. |
| 5 | **C** | `NoExecute` evicts existing Pods that do not tolerate the taint. `NoSchedule` would leave existing Pods alone. |
| 6 | **C** | `preferredDuringSchedulingIgnoredDuringExecution` is a soft preference — the Pod schedules elsewhere if no matching node exists. `required` would keep it Pending. |
| 7 | **C** | DaemonSets schedule exactly one Pod per node. ReplicaSets and Deployments spread Pods across nodes without the one-per-node guarantee. |
| 8 | **C** | StatefulSet Pod names are `<name>-0`, `<name>-1`, ... starting at 0, not 1. |
| 9 | **B** | When a ResourceQuota enforces CPU/memory, the API server rejects Pods without resource specs — they never reach the scheduler. |
| 10 | **B** | `requests` is what the scheduler uses to find a node with enough capacity. `limits` is enforced by the kubelet/kernel at runtime. |
| 11 | **B** | `"*/5 * * * *"` means "every 5 minutes." `"5 * * * *"` means "at minute 5 of every hour." |
| 12 | **B** | The taint effect is `NoSchedule` but the toleration specifies `PreferNoSchedule` — effects must match exactly. The Pod cannot tolerate this taint. |
| 13 | **C** | Exceeding CPU limits results in throttling (the Linux CFS scheduler limits CPU time). Only exceeding memory limits causes OOMKill. |
| 14 | **B** | `completions: 50` means 50 successful runs are needed. `parallelism: 5` means 5 Pods run simultaneously. |
| 15 | **C** | `spec.nodeName` bypasses the scheduler entirely. The kubelet on the named node picks up the Pod directly. |
| 16 | **B** | 25% of 8 = 2. `maxUnavailable: 2` means minimum running = 8 - 2 = 6 Pods. |
| 17 | **B** | A CronJob is a controller that creates Jobs on a defined schedule. The Job itself runs to completion as normal. |
| 18 | **B** | `PreferNoSchedule` is a soft taint. The scheduler avoids placing Pods here but will do so if no other node is available. |
| 19 | **C** | StatefulSets create Pods in strict order. `db-1` will not start until `db-0` is `Running` and `Ready`. |
| 20 | **B** | `LimitRange` provides per-container defaults and bounds within a namespace. `ResourceQuota` handles namespace-wide totals. |
| 21 | **C** | DaemonSets automatically deploy one Pod per node, including new nodes added after the DaemonSet is created. |
| 22 | **C** | The required affinity needs `zone In [us-east-1a, us-east-1b]`. Only nodes in `us-east-1b` qualify. `us-west-2a` does not match. |
| 23 | **B** | `IgnoredDuringExecution` means that once the Pod is running, affinity rules are not continuously evaluated. Label changes won't evict the Pod. |
| 24 | **C** | Control plane nodes receive the taint `node-role.kubernetes.io/control-plane:NoSchedule`. Regular Pods lack a matching toleration, so they are not scheduled there. |
| 25 | **C** | `kubectl rollout status` blocks and reports the precise rollout progress and completion. Other commands require manual interpretation. |
| 26 | **C** | Without the named scheduler running, no component processes the Pod's scheduling request. It stays `Pending` indefinitely. |
| 27 | **B** | `kubectl autoscale deployment web --cpu-percent=70 --min=2 --max=10` is the imperative one-liner. The other options use flags/subcommands that do not exist. |
| 28 | **B** | An HPA reads metrics from the Metrics API served by metrics-server (not installed by default), and CPU *utilization* is measured against each container's `resources.requests.cpu`. Missing either produces `<unknown>` and no scaling. |
| 29 | **C** | `desiredReplicas = ceil(currentReplicas × currentMetric / targetMetric) = ceil(4 × 80/50) = ceil(6.4) = 7`. |
| 30 | **B** | HPA scales horizontally (more/fewer Pods via `replicas`); VPA scales vertically (adjusts per-Pod CPU/memory requests/limits). VPA is an add-on, not built in, and the two should not target the same metric. |
| 31 | **B** | `autoscaling/v2` supports multiple metrics including memory and custom/external metrics. `autoscaling/v1` supports only a single CPU target. |
