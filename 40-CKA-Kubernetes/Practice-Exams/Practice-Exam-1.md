# 🧪 CKA Practice Exam 1

> **Note:** The real CKA exam is performance-based — you execute commands and write YAML in a live terminal. This practice exam uses scenario-based multiple choice to test the same knowledge. For each question, think about exactly what command or manifest you would write before choosing your answer.
>
> **Time:** 60 minutes · **Questions:** 8 · **Format:** Scenario MCQ

---

### 1.

You are running a pod that needs to be scheduled only on nodes labeled `disk=ssd`. The pod spec currently has no node selection constraints. Which field should you add to the pod spec to enforce this?

*(Workloads & Scheduling — 15%)*

A. `nodeSelector: disk: ssd` under `spec`
B. `affinity.podAffinity.requiredDuringSchedulingIgnoredDuringExecution` with a matching label selector
C. `tolerations` with key `disk` and value `ssd`
D. `nodeName: disk=ssd` under `spec`

---

### 2.

A junior engineer accidentally deleted the `kube-dns` Service in the `kube-system` namespace. Pods are now failing to resolve cluster-internal DNS names. You need to restore DNS functionality as quickly as possible. What is the most direct first step?

*(Troubleshooting — 30%)*

A. Restart the `kubelet` service on each worker node with `systemctl restart kubelet`
B. Delete and recreate the CoreDNS Deployment to trigger a self-healing rollout
C. Recreate the `kube-dns` Service using the correct ClusterIP and selectors pointing to the CoreDNS pods
D. Run `kubeadm reset` and then `kubeadm init` to reinitialize the control plane

---

### 3.

You need to create a ClusterRole that allows listing and watching all Pods across all namespaces, then bind it to a ServiceAccount named `monitor-sa` in the `ops` namespace. Which pair of commands accomplishes this?

*(Cluster Architecture, Installation & Configuration — 25%)*

A.
```
kubectl create role pod-reader --verb=list,watch --resource=pods
kubectl create rolebinding pod-reader-binding --role=pod-reader --serviceaccount=ops:monitor-sa
```
B.
```
kubectl create clusterrole pod-reader --verb=list,watch --resource=pods
kubectl create clusterrolebinding pod-reader-binding --clusterrole=pod-reader --serviceaccount=ops:monitor-sa
```
C.
```
kubectl create clusterrole pod-reader --verb=get,list --resource=pods,nodes
kubectl create rolebinding pod-reader-binding --clusterrole=pod-reader --serviceaccount=ops:monitor-sa -n ops
```
D.
```
kubectl create role pod-reader --verb=list,watch --resource=pods --namespace=ops
kubectl create clusterrolebinding pod-reader-binding --role=pod-reader --serviceaccount=ops:monitor-sa
```

---

### 4.

A Service of type `ClusterIP` exists for a Deployment with 3 replicas. External users report the application is unreachable. You run `kubectl get endpoints my-service` and see `<none>`. The pods are in `Running` state. What is the most likely cause?

*(Services & Networking — 20%)*

A. The Service port does not match the container port in the pod spec
B. The Service `selector` does not match the labels on the pods
C. The pods are not in the same namespace as the Service
D. The Deployment `replicas` field needs to be set to 1 before the Service can route traffic

---

### 5.

You must take an etcd snapshot before upgrading the cluster. The etcd pod is running as a static pod on the control plane node. Which command correctly creates the snapshot?

*(Cluster Architecture, Installation & Configuration — 25%)*

A.
```
kubectl exec -n kube-system etcd-controlplane -- etcdctl snapshot save /tmp/etcd-backup.db
```
B.
```
ETCDCTL_API=3 etcdctl snapshot save /tmp/etcd-backup.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```
C.
```
etcdctl snapshot save /tmp/etcd-backup.db --endpoints=http://127.0.0.1:2379
```
D.
```
kubectl cp kube-system/etcd-controlplane:/var/lib/etcd /tmp/etcd-backup.db
```

---

### 6.

You apply the following NetworkPolicy to the `production` namespace:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
  namespace: production
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

What is the effect of this policy?

*(Services & Networking — 20%)*

A. All pods in `production` can no longer send traffic to any destination
B. All pods in `production` are isolated from ingress traffic; all egress traffic is still allowed
C. All traffic — both ingress and egress — to all pods in `production` is denied
D. Only pods without labels are affected; labeled pods continue to receive traffic normally

---

### 7.

A Deployment named `web` has 4 replicas. After a bad release, you need to immediately roll back to the previous revision. Which command performs the rollback?

*(Workloads & Scheduling — 15%)*

A. `kubectl set image deployment/web web=previous-image:tag`
B. `kubectl rollout undo deployment/web`
C. `kubectl rollout restart deployment/web`
D. `kubectl apply -f web-deployment-v1.yaml --force`

---

### 8.

A PersistentVolumeClaim is stuck in `Pending` state. The cluster has a StorageClass named `fast-ssd` marked as the default. The PVC requests `storageClassName: standard`. You inspect available PersistentVolumes and find none with `storageClassName: standard`. What is the most appropriate fix?

*(Storage — 10%)*

A. Delete the PVC and recreate it without specifying `storageClassName` so it binds to the default StorageClass
B. Patch the PVC's `storageClassName` field in-place to `fast-ssd`
C. Create a PersistentVolume with `storageClassName: standard` and sufficient capacity that matches the PVC's access mode and storage request
D. Mark the `fast-ssd` StorageClass as non-default and create a new StorageClass named `standard` pointing to the same provisioner

---

## 🎯 Answer Key (No Cheating!)

```
1. A — nodeSelector is the simplest way to constrain a pod to nodes with a specific label. It goes directly under spec as a key-value map. Tolerations handle taints, not labels. nodeName requires an exact node name, not a label expression.

2. C — The kube-dns Service is what gives CoreDNS its stable ClusterIP that kubelets advertise to pods. Recreating the Service with the correct ClusterIP (or letting IPAM assign one and updating /etc/resolv.conf references) restores DNS. Restarting kubelet or kubeadm reset are disproportionate and slower.

3. B — Listing/watching pods across all namespaces requires a ClusterRole (not a namespaced Role) and a ClusterRoleBinding. The --serviceaccount flag uses the format namespace:name. Option A uses a namespaced Role and RoleBinding, which cannot grant cluster-wide access.

4. B — When endpoints show <none> but pods are Running, the Service selector does not match the pod labels. Kubernetes uses label selectors to build the Endpoints object; a mismatch means no pods are selected. Port mismatches would still show endpoints but cause connection refused errors.

5. B — etcdctl requires ETCDCTL_API=3, the correct endpoint, and all three TLS flags (cacert, cert, key) pointing to the etcd PKI files. Running without TLS flags against the plain HTTP port will fail on a kubeadm cluster because etcd listens on HTTPS only. kubectl exec without the TLS flags also fails.

6. B — An empty podSelector ({}) selects all pods in the namespace. The policy only specifies policyTypes: [Ingress], so only ingress is restricted. Egress is not affected because it is not listed in policyTypes. Only pods without labels is incorrect — the empty selector matches every pod regardless of labels.

7. B — kubectl rollout undo deployment/web reverts to the previous recorded revision instantly. kubectl rollout restart triggers a rolling restart of the current image (not a rollback). Setting the image manually works but requires knowing the previous tag. --force with apply deletes and recreates the object.

8. C — PVCs bind to PVs by matching storageClassName, access modes, and capacity. Creating a matching PV resolves the pending state without modifying the PVC. Patching storageClassName on a pending PVC is allowed but changes the requirement. Option A (removing storageClassName) would bind to the default StorageClass, which may not be appropriate for the workload's needs.
```
