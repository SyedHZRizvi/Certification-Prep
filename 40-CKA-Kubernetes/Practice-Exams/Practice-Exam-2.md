# 🧪 CKA Practice Exam 2

> **Note:** The real CKA exam is performance-based — you execute commands and write YAML in a live terminal. This practice exam uses scenario-based multiple choice to test the same knowledge. For each question, think about exactly what command or manifest you would write before choosing your answer.
>
> **Time:** 90 minutes · **Questions:** 12 · **Format:** Scenario MCQ
>
> **Domain coverage:** Cluster Architecture (3) · Workloads & Scheduling (2) · Services & Networking (2) · Storage (1) · Troubleshooting (4)

---

### 1.

You are bootstrapping a new worker node and need to join it to an existing cluster. The original join token has expired. On the control plane node, which command generates a new join token and prints the full `kubeadm join` command you need to run on the worker?

*(Cluster Architecture, Installation & Configuration — 25%)*

A. `kubeadm token list`
B. `kubeadm token create --print-join-command`
C. `kubectl create token kubeadm --namespace kube-system`
D. `kubeadm init phase upload-config --config kubeadm.yaml`

---

### 2.

A pod named `api-pod` in the `default` namespace is in `CrashLoopBackOff`. You run `kubectl logs api-pod` but the container restarts before you can read the output. Which command retrieves the logs from the previous (crashed) container instance?

*(Troubleshooting — 30%)*

A. `kubectl logs api-pod --since=1h`
B. `kubectl logs api-pod --previous`
C. `kubectl describe pod api-pod | grep -A 20 Events`
D. `kubectl exec api-pod -- journalctl -xe`

---

### 3.

You need to deploy a pod that mounts a ConfigMap named `app-config` as a directory of files under `/etc/app`. Each key in the ConfigMap should become a file, and the file content should be the key's value. Which volume type and mount configuration achieves this?

*(Workloads & Scheduling — 15%)*

A. Use a `secret` volume referencing the ConfigMap name and mount it at `/etc/app`
B. Use a `configMap` volume referencing `app-config` and mount it at `/etc/app`
C. Use a `hostPath` volume pointing to a directory on the node that mirrors the ConfigMap
D. Set `envFrom: configMapRef: name: app-config` in the container spec

---

### 4.

A NetworkPolicy in the `backend` namespace allows ingress only from pods with label `tier=frontend`. A pod labeled `tier=frontend` in the `frontend` namespace cannot reach the backend pods. The CNI plugin supports NetworkPolicy. What is the most likely missing configuration?

*(Services & Networking — 20%)*

A. The NetworkPolicy must also specify `egress` rules to allow traffic out of the backend pods
B. The `podSelector` in the NetworkPolicy `ingress.from` block matches pods only within the same namespace by default; a `namespaceSelector` is also required to allow cross-namespace traffic
C. The Service in the `backend` namespace needs `type: LoadBalancer` for cross-namespace routing
D. Pods in separate namespaces can never communicate regardless of NetworkPolicy

---

### 5.

You need to back up etcd and then restore it to a known-good snapshot. After restoring with `etcdctl snapshot restore`, what additional steps are required before the cluster uses the restored data?

*(Cluster Architecture, Installation & Configuration — 25%)*

A. Run `kubeadm reset` followed by `kubeadm init` to reinitialize the control plane
B. Update the etcd static pod manifest to point its `--data-dir` to the restored directory, then wait for the static pod to restart
C. Restart only the `kube-apiserver` static pod; etcd data is read at startup without any manifest changes
D. Copy the restored data directory over the existing `/var/lib/etcd` path while etcd is still running, then send a SIGHUP to the etcd process

---

### 6.

A StatefulSet named `db` has 3 replicas and uses a `volumeClaimTemplate`. You scale it down to 1 replica with `kubectl scale statefulset db --replicas=1`. What happens to the PersistentVolumeClaims for pods `db-1` and `db-2`?

*(Workloads & Scheduling — 15%)*

A. The PVCs are automatically deleted along with the pods to free storage
B. The PVCs remain and are not deleted; they must be manually removed if no longer needed
C. The PVCs are detached from the pods but automatically reattached if the StatefulSet is scaled back up using new PVC names
D. The PVCs enter `Terminating` state and are garbage-collected after 30 minutes

---

### 7.

You want to expose a Deployment named `frontend` on port 80 inside the cluster and port 30080 on every node's IP so external clients can reach it directly. Which Service configuration achieves this?

*(Services & Networking — 20%)*

A. `type: ClusterIP` with `port: 80` and `nodePort: 30080`
B. `type: NodePort` with `port: 80` and `nodePort: 30080`
C. `type: LoadBalancer` with `port: 80` and `targetPort: 30080`
D. `type: ExternalName` with `externalName: frontend.default.svc.cluster.local`

---

### 8.

A node named `worker-2` shows `NotReady` in `kubectl get nodes`. You SSH into the node and run `systemctl status kubelet` — the service is stopped. After starting it, the node returns to `Ready`. What should you check to prevent this from happening automatically on reboot?

*(Troubleshooting — 30%)*

A. Run `kubeadm join` again on the node to re-register it with the control plane
B. Ensure the kubelet service is enabled for automatic start: `systemctl enable kubelet`
C. Drain the node before each reboot with `kubectl drain worker-2 --ignore-daemonsets`
D. Add a `RestartPolicy: Always` to the kubelet unit file and reload the daemon

---

### 9.

You are inspecting a cluster certificate and need to check when the API server certificate expires. Which command shows the certificate expiry information managed by kubeadm?

*(Cluster Architecture, Installation & Configuration — 25%)*

A. `openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -text | grep -A 2 Validity`
B. `kubeadm certs check-expiration`
C. `kubectl describe secret kube-apiserver -n kube-system`
D. `kubeadm alpha certs renew all --dry-run`

---

### 10.

A pod is stuck in `Pending` state. `kubectl describe pod my-pod` shows the event: `0/3 nodes are available: 3 node(s) had untolerated taint {dedicated: gpu}.` The pod needs to run on these GPU nodes. What is the correct fix?

*(Troubleshooting — 30%)*

A. Add a `nodeSelector: dedicated: gpu` to the pod spec
B. Add a `toleration` to the pod spec with `key: dedicated`, `operator: Equal`, `value: gpu`, and `effect: NoSchedule`
C. Remove the taint from all nodes with `kubectl taint nodes --all dedicated-`
D. Add an `affinity.nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution` rule for the GPU nodes

---

### 11.

You must create a PersistentVolume of 5Gi backed by a local directory `/data/vol1` on node `worker-1`, with `ReadWriteOnce` access mode and a `StorageClass` of `manual`. Write the correct PV spec. Which of the following YAML snippets is valid?

*(Storage — 10%)*

A.
```yaml
spec:
  capacity:
    storage: 5Gi
  accessModes: [ReadWriteMany]
  hostPath:
    path: /data/vol1
  storageClassName: manual
```
B.
```yaml
spec:
  capacity:
    storage: 5Gi
  accessModes: [ReadWriteOnce]
  hostPath:
    path: /data/vol1
  storageClassName: manual
```
C.
```yaml
spec:
  capacity:
    storage: 5Gi
  accessModes: [ReadWriteOnce]
  local:
    path: /data/vol1
  storageClassName: manual
```
D.
```yaml
spec:
  capacity:
    storage: 5Gi
  accessModes: [ReadOnlyMany]
  nfs:
    server: worker-1
    path: /data/vol1
  storageClassName: manual
```

---

### 12.

You run `kubectl get pods -n kube-system` and notice that `kube-scheduler-controlplane` has been in `Error` state for 5 minutes. New pods are stuck in `Pending`. What is the most systematic first diagnostic step?

*(Troubleshooting — 30%)*

A. Run `kubectl delete pod kube-scheduler-controlplane -n kube-system` to force a restart from the static pod manifest
B. Run `kubectl logs kube-scheduler-controlplane -n kube-system` (or `kubectl logs --previous`) to read the scheduler's error output, then inspect `/etc/kubernetes/manifests/kube-scheduler.yaml` for misconfiguration
C. Restart the entire control plane by rebooting the control plane node
D. Run `kubeadm init phase control-plane scheduler` to regenerate the scheduler static pod manifest

---

## 🎯 Answer Key (No Cheating!)

```
1. B — kubeadm token create --print-join-command generates a new bootstrap token and outputs the complete kubeadm join command including the CA certificate hash. kubeadm token list only lists existing (possibly expired) tokens without generating new ones.

2. B — kubectl logs --previous fetches the logs from the last terminated container instance, which is exactly what you need when the current container is restarting too fast to read. --since filters by time on the running container, not the previous one. kubectl exec fails when the container is crashing.

3. B — A configMap volume type mounts each ConfigMap key as a file in the specified directory. envFrom/configMapRef injects keys as environment variables, not files. Secrets use a different volume type (secret). hostPath does not stay synchronized with ConfigMap changes.

4. B — By default, podSelector in a NetworkPolicy ingress rule selects pods within the same namespace as the policy. To allow traffic from pods in a different namespace, you must add a namespaceSelector alongside or instead of the podSelector in the from block. Cross-namespace pod-to-pod communication via NetworkPolicy is fully supported when both selectors are specified.

5. B — After etcdctl snapshot restore writes the restored data to a new directory, you must update the --data-dir argument in the etcd static pod manifest (/etc/kubernetes/manifests/etcd.yaml) and ensure the hostPath volume mounts point to the restored directory. The kubelet detects the manifest change and restarts the static pod automatically. kubeadm reset would wipe the whole cluster.

6. B — StatefulSet PVCs are intentionally not deleted when pods are removed or scaled down. This is by design to protect stateful data. You must delete the PVCs manually with kubectl delete pvc if they are no longer needed. If scaled back up, the same PVC names are reattached to the new pods.

7. B — NodePort Services expose a port on every node's external IP (in the range 30000–32767) while also creating a ClusterIP for internal access. port: 80 is the Service port, nodePort: 30080 is the port on each node. ClusterIP does not support nodePort. LoadBalancer targets a pod port with targetPort, not a node port.

8. B — systemctl enable kubelet configures the systemd unit to start automatically at boot. Without this, if the node reboots the kubelet will not start and the node will appear NotReady. Draining before reboots is a best practice for maintenance but does not cause the kubelet to auto-start. RestartPolicy in a unit file controls crash restart, not boot startup.

9. B — kubeadm certs check-expiration reads all kubeadm-managed certificates and prints their expiry dates in a clean table. While openssl can also show expiry, it requires specifying each cert path individually. kubectl describe secret does not show TLS expiry. The alpha command in option D is from older kubeadm versions.

10. B — The event explicitly says the pod has an untolerated taint. A toleration matching the taint (key, value, effect) must be added to the pod spec to allow scheduling. nodeSelector only selects by label, not by taint. Removing the taint is disruptive and defeats the purpose of restricting that node. preferredDuringScheduling (soft affinity) does not override taints.

11. B — The correct combination is ReadWriteOnce access mode, hostPath for a local directory on a node, and storageClassName: manual. Option A uses ReadWriteMany which is incorrect for a hostPath volume (only one node can write). Option C uses local which requires a nodeAffinity block specifying the node. Option D uses NFS syntax for a local path.

12. B — The correct first step for a failing system component is always to read the logs (kubectl logs or --previous for crash loops) and then inspect the static pod manifest for syntax errors, wrong flag names, or incorrect file paths. Deleting the pod (option A) is sometimes appropriate after diagnosis but not before understanding the error. Rebooting the control plane is disruptive and unnecessary.
```
