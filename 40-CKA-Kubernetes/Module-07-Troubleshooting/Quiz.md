# 🧠 Module 7 Quiz: Troubleshooting

> **26 scenario-based questions** modeled on real CKA exam style. No definitions — every question describes a real cluster state and asks what you do next.

---

### Q1.
**[Apply / Troubleshoot]** A pod named `web-server` in the `production` namespace is stuck in `Pending`. You run `kubectl describe pod web-server -n production` and see this in the Events section: `Warning FailedScheduling 0/3 nodes are available: 3 node(s) had taint {env:prod, effect:NoSchedule} that the pod didn't tolerate.` What is the correct fix?

A. Delete the pod and recreate it with a different name
B. Add a toleration to the pod spec for `{key: env, value: prod, effect: NoSchedule}`
C. Increase the pod's CPU request so the scheduler picks a different node
D. Run `kubectl uncordon` on all three nodes

---

### Q2.
**[Apply / Troubleshoot]** A pod is showing status `CrashLoopBackOff`. You run `kubectl logs app-pod` and receive: `Error from server: container "app" in pod "app-pod" is not running.` What command should you run next?

A. `kubectl describe pod app-pod`
B. `kubectl logs app-pod --previous`
C. `kubectl delete pod app-pod --force`
D. `kubectl exec -it app-pod -- /bin/sh`

---

### Q3.
**[Analyze / Troubleshoot]** `kubectl describe pod db-pod` shows this in the Last State section: `Terminated / Reason: OOMKilled / Exit Code: 137`. The pod's memory limit is currently `128Mi`. What does this mean and what is the correct action?

A. The app code has a memory leak; rebuild the image
B. The node ran out of memory; add another node to the cluster
C. The container exceeded its `128Mi` memory limit; increase `resources.limits.memory`
D. The exit code 137 indicates a segmentation fault; check the application logs

---

### Q4.
**[Apply / Troubleshoot]** A pod is in `ImagePullBackOff` status. The Events section shows: `Failed to pull image "myrepo.internal/app:v2": rpc error: unauthorized: authentication required`. The image exists in a private registry. What is the correct fix?

A. Change the image to a public Docker Hub image
B. Run `kubectl login myrepo.internal` from the control plane node
C. Create a Docker registry Secret and reference it in the pod spec under `imagePullSecrets`
D. Add `--allow-privileged=true` to the kubelet configuration

---

### Q5.
**[Apply / Troubleshoot]** You run `kubectl get nodes` and see that `worker-2` has status `NotReady`. You SSH into `worker-2` and run `systemctl status kubelet`. The output shows `Active: inactive (dead)`. What is the correct sequence of commands?

A. `kubectl delete node worker-2` then `kubeadm join` to re-add it
B. `systemctl start kubelet` then `systemctl enable kubelet`
C. `reboot` to restart the node
D. `kubectl drain worker-2 --ignore-daemonsets` then `kubectl uncordon worker-2`

---

### Q6.
**[Analyze / Troubleshoot]** A developer reports that `kubectl` is completely unresponsive — commands hang for 60 seconds and then return "connection refused to https://10.0.0.1:6443". You can still SSH to the control plane node. What should you investigate first?

A. Run `kubectl get pods -n kube-system` to check CoreDNS
B. Use `crictl ps` to check if the kube-apiserver container is running
C. Check `/var/log/pods/` for application logs
D. Run `kubectl describe nodes` to check node health

---

### Q7.
**[Apply / Troubleshoot]** You find that the kube-apiserver static pod is not running. You check `/etc/kubernetes/manifests/kube-apiserver.yaml` and notice the `--etcd-servers` flag points to `https://127.0.0.1:2380` but etcd is listening on port `2379`. After fixing the YAML, what do you need to do to apply the change?

A. Run `kubectl apply -f /etc/kubernetes/manifests/kube-apiserver.yaml`
B. Run `systemctl restart kube-apiserver`
C. Nothing — kubelet automatically detects the changed manifest and restarts the static pod
D. Run `kubeadm init phase control-plane apiserver`

---

### Q8.
**[Apply / Troubleshoot]** You need to verify that DNS resolution is working in the cluster. Which command creates a temporary debug pod, tests DNS, and cleans itself up automatically?

A. `kubectl create pod dns-test --image=busybox`
B. `kubectl run tmp --image=busybox --rm -it --restart=Never -- nslookup kubernetes`
C. `kubectl exec -it coredns-pod -- nslookup kubernetes`
D. `kubectl debug node/worker-1 -it --image=busybox`

---

### Q9.
**[Analyze / Troubleshoot]** A Service named `backend-svc` exists in the `app` namespace. Pods cannot connect to it. You run `kubectl get endpoints backend-svc -n app` and the output shows: `NAME         ENDPOINTS   AGE / backend-svc   <none>      5m`. What is the most likely cause?

A. The Service port is wrong
B. The pods are in a different namespace than the Service
C. The Service's selector does not match any pod labels
D. The Service type is ClusterIP and cannot be accessed from within the cluster

---

### Q10.
**[Apply / Troubleshoot]** You need to check the kubelet logs on a node to diagnose why it keeps disconnecting from the API server. Which command shows only the most recent 50 lines of kubelet logs?

A. `kubectl logs kubelet -n kube-system`
B. `cat /var/log/kubelet.log | tail -50`
C. `journalctl -u kubelet -n 50`
D. `crictl logs kubelet`

---

### Q11.
**[Analyze / Troubleshoot]** A pod has status `Init:0/1`. You run `kubectl describe pod init-pod` and see the init container status shows `State: Waiting / Reason: CrashLoopBackOff`. The init container runs `nslookup db-service`. The `db-service` Service exists in namespace `data`, but the pod is in namespace `app`. Which DNS name should the init container use?

A. `db-service`
B. `db-service.data`
C. `db-service.data.svc.cluster.local`
D. `data.db-service.cluster.local`

---

### Q12.
**[Apply / Troubleshoot]** You need to check logs from the etcd pod. The etcd pod is named `etcd-control-plane` in the `kube-system` namespace. Which command is correct?

A. `journalctl -u etcd`
B. `kubectl logs etcd-control-plane -n kube-system`
C. `crictl logs etcd` (without specifying namespace)
D. `cat /var/log/etcd.log`

---

### Q13.
**[Apply / Troubleshoot]** You need to check the health of the etcd cluster using `etcdctl`. Which of the following commands is correctly formed?

A. `etcdctl endpoint health`
B. `ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key endpoint health`
C. `kubectl exec etcd-control-plane -- etcdctl endpoint health`
D. `etcdctl --api-version=3 endpoint health --insecure`

---

### Q14.
**[Analyze / Troubleshoot]** A pod's `kubectl describe` output shows `Restart Count: 47` and in Conditions: `Ready: False`. The pod status is `Running`. What does this indicate, and what command should you run to diagnose?

A. The pod is healthy; 47 restarts is normal for a long-running workload
B. The pod is in CrashLoopBackOff; run `kubectl logs <pod> --previous`
C. The pod has a resource limit issue; run `kubectl top pod <pod>`
D. The pod failed readiness probe; run `kubectl describe pod` and check the Liveness/Readiness probe section

---

### Q15.
**[Apply / Troubleshoot]** A pod named `worker` in namespace `batch` has been in status `Terminating` for 15 minutes. The node it was running on is healthy. Which command forcefully removes the pod?

A. `kubectl delete pod worker -n batch`
B. `kubectl delete pod worker -n batch --grace-period=0 --force`
C. `kubectl kill pod worker -n batch`
D. `kubectl drain <node-name> --ignore-daemonsets`

---

### Q16.
**[Analyze / Troubleshoot]** You run `kubectl get events --sort-by=.metadata.creationTimestamp -n production` and see at the bottom (most recent): `Warning BackOff 30s Back-off pulling image "nginx:1.99.99"`. The pod is in `ImagePullBackOff`. What does the event timestamp sort order tell you?

A. The most recent event appears first
B. The most recent event appears last
C. Events are sorted alphabetically by reason
D. `--sort-by` has no effect on events; they always show in random order

---

### Q17.
**[Apply / Troubleshoot]** `kubectl top nodes` returns: `error: Metrics API not available`. What is the most likely cause?

A. The `kubectl` binary needs to be updated
B. The metrics-server is not installed in the cluster
C. The kubeconfig file is missing from `~/.kube/config`
D. The node's cAdvisor is disabled

---

### Q18.
**[Apply / Troubleshoot]** A pod is stuck in `Pending`. `kubectl describe pod slow-pod` shows: `Warning FailedScheduling: 0/3 nodes are available: 1 Insufficient cpu, 2 node(s) had taint {node-role.kubernetes.io/control-plane: , effect: NoSchedule}`. The pod requests `3000m` CPU. What is the correct diagnosis?

A. All three nodes have CPU taints that prevent scheduling
B. One worker node has insufficient CPU for the 3000m request, and the other two nodes are control-plane nodes the pod can't tolerate
C. The pod's NodeSelector is pointing to non-existent nodes
D. The pod needs a higher priority class to preempt existing workloads

---

### Q19.
**[Apply / Troubleshoot]** You need to see all containers currently running on a node where `kubectl` is unavailable because the API server is down. Which command lists running containers?

A. `docker ps` (always works)
B. `crictl ps`
C. `kubectl get pods --kubeconfig=/etc/kubernetes/admin.conf`
D. `systemctl list-units --type=container`

---

### Q20.
**[Apply / Troubleshoot]** A NetworkPolicy exists in namespace `frontend` that selects all pods with label `app=web`. The policy has no `egress` rules. A pod with label `app=web` cannot reach an external database at `10.10.1.5:5432`. What is the cause?

A. The database IP is not a valid ClusterIP; use a Service instead
B. The NetworkPolicy selects the pod; since there are no egress rules, all egress is denied by default
C. The pod needs a label `networkpolicy=disabled` to bypass the policy
D. NetworkPolicies only affect ingress traffic; egress is always allowed

---

### Q21.
**[Apply / Troubleshoot]** You need to check if a specific container in a multi-container pod named `sidecar-pod` (containers: `main` and `logger`) is crashing. The `logger` container is suspected. Which command shows its previous crash logs?

A. `kubectl logs sidecar-pod --previous`
B. `kubectl logs sidecar-pod -c logger --previous`
C. `kubectl describe pod sidecar-pod | grep logger`
D. `kubectl exec sidecar-pod -c logger -- journalctl -n 100`

---

### Q22.
**[Apply / Troubleshoot]** A node named `worker-3` has condition `DiskPressure: True` in `kubectl describe node worker-3`. What does this mean and what is the correct fix?

A. The node has network disk issues; replace the network storage backend
B. The kubelet detected disk usage above its threshold; free up disk space on the node (`df -h` to diagnose, then clear old images with `crictl rmi --prune`)
C. The node needs more RAM allocated to disk cache; increase memory limits
D. This is a normal condition; DiskPressure True means the disk is healthy

---

### Q23.
**[Analyze / Troubleshoot]** You run `kubectl describe pod api-pod` and in the Events section see: `Warning FailedMount: MountVolume.SetUp failed for volume "config-vol": configmap "app-config" not found`. What is the correct fix?

A. Create the missing ConfigMap named `app-config` in the same namespace as the pod
B. Change the volume type from ConfigMap to an emptyDir
C. Delete and recreate the pod; the mount will succeed on retry
D. Add the annotation `volume.beta.kubernetes.io/mount=true` to the pod

---

### Q24.
**[Apply / Troubleshoot]** You are investigating a cluster where some pods have recently been evicted. Running `kubectl get events --sort-by=.metadata.creationTimestamp -A | grep Evict` shows evictions with reason `Evicted`. What is the most likely system-level cause?

A. The pods violated their PodDisruptionBudget
B. A node experienced memory pressure, disk pressure, or PID pressure and the kubelet evicted pods to recover resources
C. The pods exceeded their `maxSurge` rolling update limit
D. The Horizontal Pod Autoscaler scaled down the deployment

---

### Q25.
**[Apply / Troubleshoot]** A junior engineer reports that a Deployment's pods are all `Running` but the application returns 502 errors through the Ingress. The Ingress controller pods are healthy. What should you check first?

A. The pod's container image version
B. `kubectl get endpoints <service-name>` to confirm the Service has active endpoints, then test direct pod connectivity with `curl <pod-ip>:<port>`
C. The Ingress TLS certificate expiry
D. Whether `kubectl top pods` shows high CPU usage

---

### Q26.
**[Apply / Troubleshoot]** You need to troubleshoot why a pod cannot pull an image from `gcr.io/my-project/app:v3`. The Events show `Back-off pulling image`. The image exists and is accessible. You suspect the node has a stale/corrupt image layer cached. Which crictl command removes all unused images from the node?

A. `crictl rmi --all`
B. `crictl rmi --prune`
C. `crictl image rm gcr.io/my-project/app:v3`
D. `docker image prune -a`

---

## 🎯 Answers + Explanations

**Q1 — B.** The scheduler cannot place the pod because all nodes have the taint `{env:prod, effect:NoSchedule}` and the pod has no matching toleration. The fix is to add a toleration. Removing the taint (not offered) would also work, but tolerating it is the targeted fix. Uncordon (D) applies to manually cordoned nodes, not tainted ones.

**Q2 — B.** `kubectl logs --previous` retrieves the logs from the previously terminated container instance. Option A (describe) is a secondary step — useful but won't show you why it crashed. Option D (exec) is impossible because the container isn't running. The key insight: the current container may have zero logs if it crashes instantly.

**Q3 — C.** Exit code 137 = OOMKilled (128 + signal 9). The kernel killed the container because it exceeded its memory limit. The fix is to increase `resources.limits.memory`. D is wrong — exit code 139 is a segfault. The node's total memory is unrelated to a container's cgroup memory limit.

**Q4 — C.** Private registry access requires a Kubernetes Secret of type `docker-registry` and a reference in the pod spec's `imagePullSecrets`. The kubelet uses this secret to authenticate pull requests. Option B is wrong — there is no `kubectl login` command.

**Q5 — B.** The kubelet is stopped (`inactive/dead`). `systemctl start kubelet` restarts it; `systemctl enable kubelet` ensures it restarts after a node reboot. Never delete and re-join a node unless the node itself is permanently broken — that destroys all pod state.

**Q6 — B.** If `kubectl` cannot connect to the API server endpoint, the API server itself is likely down. Since kubectl requires the API server, you must bypass it and use `crictl ps` directly on the control plane node to inspect whether the kube-apiserver container is running.

**Q7 — C.** Static pod manifests are watched by the kubelet. When the YAML changes, the kubelet automatically stops the old container and starts a new one with the updated spec. No `kubectl apply` or service restart is needed.

**Q8 — B.** `kubectl run` with `--rm` and `--restart=Never` creates a pod, runs the command interactively, and deletes the pod on exit. This is the canonical CKA DNS smoke test. Option A doesn't run a command. Option C requires knowing the exact CoreDNS pod name.

**Q9 — C.** An empty Endpoints object (`<none>`) definitively indicates a selector mismatch. The Service's `selector:` does not match any pod's labels. Verify with `kubectl describe svc backend-svc` (check Selector:) and `kubectl get pods -n app --show-labels` (check actual labels). Option D is wrong — ClusterIP Services are accessible from within the cluster by design.

**Q10 — C.** `journalctl -u kubelet -n 50` reads the systemd journal for the kubelet unit and returns the last 50 lines. The kubelet is a systemd service, not a Kubernetes pod — it has no `kubectl logs` equivalent (option A). Option B assumes a file that may not exist on all systems.

**Q11 — C.** Cross-namespace DNS requires the fully qualified format: `<service-name>.<namespace>.svc.cluster.local`. `db-service.data` (option B) may work in some configurations but is not guaranteed. Short name `db-service` only resolves within the same namespace.

**Q12 — B.** The etcd control plane component runs as a static pod. `kubectl logs etcd-control-plane -n kube-system` retrieves its logs through the API server. Option A would work if etcd were a systemd service, but in kubeadm clusters it's a static pod. Option C uses crictl which requires a container ID, not a pod name.

**Q13 — B.** etcdctl requires: (1) `ETCDCTL_API=3` environment variable, (2) the correct endpoint, (3) all three TLS files — CA cert, client cert, and client key. Option A and D are missing the TLS flags, which would cause authentication failures on a secured etcd. Option C would work conceptually but the exec syntax is incomplete.

**Q14 — B.** 47 restarts with `Ready: False` is CrashLoopBackOff behavior — the container keeps crashing. `kubectl logs <pod> --previous` shows why the last container crashed. Option D (readiness probe failure) would show `Ready: False` but typically a much lower restart count.

**Q15 — B.** `--grace-period=0 --force` bypasses the graceful termination period and deletes the API object immediately. This is appropriate when a pod is stuck in `Terminating` for an abnormally long time on a healthy node. Use with caution in production.

**Q16 — B.** `--sort-by=.metadata.creationTimestamp` sorts in ascending order (oldest first, newest last). The most recent events appear at the bottom. This is why the exam tip says to read the Events section from the bottom up.

**Q17 — B.** The metrics-server is a separate component that must be deployed into the cluster. It is not installed by default in kubeadm clusters. Without it, the Metrics API (`metrics.k8s.io`) does not exist, and `kubectl top` cannot retrieve resource data.

**Q18 — B.** The event gives two reasons: one worker node has insufficient CPU for 3000m, and two nodes are control-plane nodes with the standard `NoSchedule` taint. The fix is either to reduce the CPU request or add resources to the worker node.

**Q19 — B.** `crictl ps` is the CRI-compliant tool for inspecting containers when the API server is unavailable. It works directly with the container runtime (containerd/CRI-O). Option A (docker) may not be available in modern clusters that use containerd. Option C still requires the API server.

**Q20 — B.** When a NetworkPolicy selects a pod, traffic must be explicitly allowed. If the policy has no `egress` stanzas, all egress from the selected pod is **denied by default**. The fix is to add an egress rule allowing traffic to `10.10.1.5:5432`. Option D is a common misconception — NetworkPolicies affect both ingress and egress when specified.

**Q21 — B.** `-c logger` specifies the container, and `--previous` retrieves the last terminated instance's logs. Option A without `-c` defaults to the first container (`main`), not `logger`. Option D (exec into a crashed container) is impossible if the container is in CrashLoopBackOff.

**Q22 — B.** `DiskPressure: True` means the kubelet's disk usage has exceeded its eviction threshold (default ~85%). The node will start evicting pods. Diagnose with `df -h` on the node; free space by removing unused container images with `crictl rmi --prune` or unused log files.

**Q23 — A.** `FailedMount` for a ConfigMap volume means the referenced ConfigMap does not exist in the pod's namespace. The fix is to create it: `kubectl create configmap app-config --from-literal=key=value -n <namespace>`. The pod will mount it automatically on the next retry.

**Q24 — B.** Pod evictions are triggered by the kubelet's eviction manager when a node experiences resource pressure: memory pressure (MemoryPressure), disk pressure (DiskPressure), or PID pressure (PIDPressure). The kubelet evicts pods in priority order to reclaim resources. Check `kubectl describe node` for active pressure conditions.

**Q25 — B.** 502 errors from an Ingress with healthy Ingress controller pods almost always indicate the backend Service has no healthy endpoints. Start with `kubectl get endpoints <service-name>` — if it shows `<none>`, the Service selector is broken. Then test the pod directly with curl to isolate whether it's a routing or application issue.

**Q26 — B.** `crictl rmi --prune` removes all unused (untagged and unreferenced) images from the node's container runtime. This is the correct command for containerd-based clusters. Option A (`--all`) would also delete images used by running containers and would be destructive. Option D (`docker`) may not be available on containerd nodes.
