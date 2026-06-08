# Module 5 — Storage: Quiz
## 26 Questions | CKA Domain: Storage (10%)

Work through all questions before checking answers. Each question mirrors the style and difficulty of real CKA exam tasks.

---

### Q1. [Remember]
What is the lifecycle of an `emptyDir` volume?

A. Persists across Pod restarts as long as the Node is running  
B. Created when the Pod is assigned to a Node; deleted when the Pod is removed  
C. Created once per Deployment and shared by all replicas  
D. Persists until explicitly deleted with `kubectl delete volume`

---

### Q2. [Understand]
A sidecar container needs to share log files with a main container in the same Pod. Which volume type is most appropriate?

A. `hostPath`  
B. `persistentVolumeClaim`  
C. `emptyDir`  
D. `configMap`

---

### Q3. [Remember]
Which statement about Kubernetes Secrets is TRUE?

A. Secrets are encrypted at rest by default using AES-256  
B. Secrets are base64-encoded but NOT encrypted by default  
C. Secrets are stored as plaintext in etcd by default  
D. Secrets require a TLS certificate to be read by Pods

---

### Q4. [Apply]
You need to create an Opaque secret with key `API_KEY` and value `my-secret-key`. Which command is correct?

A. `kubectl create secret tls mysecret --from-literal=API_KEY=my-secret-key`  
B. `kubectl create secret generic mysecret --from-literal=API_KEY=my-secret-key`  
C. `kubectl create secret opaque mysecret --key=API_KEY --value=my-secret-key`  
D. `kubectl create configmap mysecret --from-literal=API_KEY=my-secret-key`

---

### Q5. [Understand]
A PVC is in `Pending` state. Which of the following is a likely cause?

A. The PVC has no `metadata.name` field  
B. No PV with matching `accessModes` and sufficient capacity exists  
C. The Pod referencing the PVC has not been created yet  
D. PVCs always start in Pending before transitioning to Available

---

### Q6. [Remember]
Which access mode allows a volume to be mounted read/write by multiple Nodes simultaneously?

A. ReadWriteOnce (RWO)  
B. ReadOnlyMany (ROX)  
C. ReadWriteMany (RWX)  
D. ReadWriteOncePod (RWOP)

---

### Q7. [Apply]
A StorageClass has `reclaimPolicy: Delete`. What happens when the PVC bound to a dynamically provisioned PV is deleted?

A. The PV enters Released state and waits for admin action  
B. The PV is retained and must be manually reclaimed  
C. The PV and its underlying storage are automatically deleted  
D. The PV is scrubbed and re-offered to new PVCs

---

### Q8. [Understand]
Which `hostPath` type creates the directory on the Node if it does not already exist?

A. `Directory`  
B. `FileOrCreate`  
C. `DirectoryOrCreate`  
D. `Socket`

---

### Q9. [Remember]
A PersistentVolume is a _______ resource. A PersistentVolumeClaim is a _______ resource.

A. Namespaced; Cluster-scoped  
B. Cluster-scoped; Namespaced  
C. Cluster-scoped; Cluster-scoped  
D. Namespaced; Namespaced

---

### Q10. [Apply]
You have a ConfigMap named `app-config` with key `DATABASE_URL`. You want to inject this as an environment variable named `DB_URL` in a container. Which snippet is correct?

A.
```yaml
envFrom:
- configMapRef:
    name: app-config
```

B.
```yaml
env:
- name: DB_URL
  valueFrom:
    configMapKeyRef:
      name: app-config
      key: DATABASE_URL
```

C.
```yaml
env:
- name: DB_URL
  valueFrom:
    secretKeyRef:
      name: app-config
      key: DATABASE_URL
```

D.
```yaml
volumeMounts:
- name: app-config
  mountPath: /env/DB_URL
```

---

### Q11. [Understand]
When a ConfigMap is mounted as a volume, how are the ConfigMap's keys represented inside the container?

A. As environment variables injected into the process  
B. As a single JSON file containing all keys  
C. As individual files, one per key  
D. As a binary blob that the application must parse

---

### Q12. [Remember]
Which Secret type is used for storing Docker registry credentials?

A. `Opaque`  
B. `kubernetes.io/tls`  
C. `kubernetes.io/dockerconfigjson`  
D. `kubernetes.io/basic-auth`

---

### Q13. [Analyze]
A PVC requests `ReadWriteMany` access and 10Gi of storage. A PV exists with `ReadWriteOnce` access and 20Gi of storage. What happens?

A. The PVC binds to the PV because the PV has sufficient capacity  
B. The PVC binds to the PV because it only needs a subset of the PV's capacity  
C. The PVC remains Pending because access modes are incompatible  
D. The PVC fails immediately with an error

---

### Q14. [Apply]
You need to create a TLS secret for an Ingress controller. You have `cert.crt` and `cert.key`. Which command creates it correctly?

A. `kubectl create secret generic tls-secret --from-file=tls.crt=cert.crt --from-file=tls.key=cert.key`  
B. `kubectl create secret tls tls-secret --cert=cert.crt --key=cert.key`  
C. `kubectl create secret opaque tls-secret --cert=cert.crt --key=cert.key`  
D. `kubectl create configmap tls-secret --from-file=cert.crt --from-file=cert.key`

---

### Q15. [Understand]
What does `volumeBindingMode: WaitForFirstConsumer` do in a StorageClass?

A. Delays volume creation until the StorageClass is annotated as default  
B. Delays PV binding and provisioning until a Pod using the PVC is scheduled  
C. Prevents the PVC from binding until the admin manually approves it  
D. Forces all volumes to use the first available Node in the cluster

---

### Q16. [Remember]
Which reclaim policy is deprecated and should NOT be used?

A. Retain  
B. Delete  
C. Recycle  
D. Release

---

### Q17. [Apply]
A developer wants to expand a PVC from 5Gi to 20Gi. The StorageClass does NOT have `allowVolumeExpansion: true`. What is the result?

A. The expansion completes successfully after a Pod restart  
B. The expansion request is queued and applied at the next maintenance window  
C. The PVC expansion is rejected; the field is immutable without StorageClass support  
D. The PVC is deleted and re-created with the new size

---

### Q18. [Understand]
Which of the following correctly describes the difference between `envFrom` and `env.valueFrom.configMapKeyRef`?

A. `envFrom` imports all keys from a ConfigMap; `configMapKeyRef` imports a single key  
B. `envFrom` encrypts the values before injecting them; `configMapKeyRef` does not  
C. `envFrom` only works with Secrets; `configMapKeyRef` only works with ConfigMaps  
D. There is no functional difference; they are aliases

---

### Q19. [Apply]
You run `kubectl get secret mysecret -o jsonpath='{.data.password}'` and receive `c3VwM3JzM2NyM3Q=`. What is the actual password?

A. `c3VwM3JzM2NyM3Q=` (that is the password, stored as-is)  
B. The output is encrypted and cannot be read without a decryption key  
C. `sup3rs3cr3t` (decoded from base64)  
D. The password cannot be retrieved; Secrets are write-only

---

### Q20. [Remember]
What is the purpose of a projected volume?

A. To project (display) volume metadata to the cluster admin dashboard  
B. To combine multiple volume sources (ConfigMap, Secret, SA token, DownwardAPI) into a single directory  
C. To project a PVC's storage across multiple Nodes for redundancy  
D. To cache PV data locally on the Node for faster access

---

### Q21. [Analyze]
A Pod mounts a Secret as a volume at `/etc/creds`. The Secret has a key `db_pass`. Which file path inside the container contains the decoded password?

A. `/etc/creds` (the directory itself contains the value)  
B. `/etc/creds/db_pass`  
C. `/etc/creds/db_pass.base64`  
D. `/etc/creds/.data/db_pass`

---

### Q22. [Apply]
Which `storageClassName` value should you set on a PVC if you want it to bind only to PVs with `storageClassName: manual` and NOT trigger dynamic provisioning?

A. `storageClassName: ""`  
B. `storageClassName: default`  
C. `storageClassName: manual`  
D. Omit the `storageClassName` field entirely

---

### Q23. [Understand]
A Pod is deleted. Its PVC used a PV with `reclaimPolicy: Retain`. What is the state of the PV after the PVC is deleted?

A. Available — immediately ready to be claimed by a new PVC  
B. Released — data preserved, but PV cannot be automatically re-bound  
C. Deleted — the PV is removed along with the PVC  
D. Pending — waiting for the admin to approve the reclaim

---

### Q24. [Remember]
You create a ConfigMap from a file called `nginx.conf`. What is the key name in the ConfigMap?

A. `file`  
B. `nginx`  
C. `nginx.conf`  
D. The file contents become the ConfigMap name, not a key

---

### Q25. [Analyze]
A StatefulSet needs each Pod to have its own isolated 10Gi persistent volume automatically provisioned. Which approach is correct?

A. Create one PVC and reference it in the Pod spec  
B. Use `volumeClaimTemplates` in the StatefulSet spec with a StorageClass that supports dynamic provisioning  
C. Create individual PVs for each Pod and bind them manually  
D. Use `emptyDir` with `sizeLimit: 10Gi`

---

### Q26. [Evaluate]
An engineering team argues that Kubernetes Secrets are secure enough for production because "they are encrypted." A colleague disagrees. Who is correct, and why?

A. The engineering team is correct — Secrets use AES-256 encryption by default  
B. The colleague is correct — Secrets are base64-encoded only; encryption at rest requires explicit EncryptionConfiguration on the API server  
C. Both are partially correct — Secrets are encrypted in transit (TLS) but not at rest  
D. Neither is correct — Secrets store data in plaintext with no encoding at all

---

## 🎯 Answers + Explanations

| Q | Answer | Explanation |
|---|---|---|
| 1 | **B** | `emptyDir` is tied to Pod lifecycle — created on assignment to a Node, deleted when the Pod is removed for any reason. |
| 2 | **C** | `emptyDir` is the standard pattern for sharing files between containers in the same Pod. Both containers mount the same volume. |
| 3 | **B** | Secrets are base64-encoded (for binary safety), NOT encrypted. This is one of the most common CKA exam traps. |
| 4 | **B** | `kubectl create secret generic` creates Opaque secrets. The `--from-literal` flag handles encoding automatically. |
| 5 | **B** | A PVC stays Pending when no suitable PV exists — either no matching `storageClassName`, insufficient capacity, or incompatible `accessModes`. |
| 6 | **C** | `ReadWriteMany` (RWX) allows multiple Nodes to mount the volume read/write simultaneously. Requires a backend that supports it (e.g., NFS, CephFS). |
| 7 | **C** | With `reclaimPolicy: Delete`, deleting the PVC triggers automatic deletion of both the PV object and the underlying storage resource. |
| 8 | **C** | `DirectoryOrCreate` creates the directory (and any missing parent directories) if it does not exist. `Directory` requires it to pre-exist. |
| 9 | **B** | PVs are cluster-scoped (no namespace). PVCs are namespaced — they live in a specific namespace and bind to cluster-scoped PVs. |
| 10 | **B** | Option A imports ALL keys from the ConfigMap (but under their original names). Option B is correct for renaming a single key. |
| 11 | **C** | Each key in the ConfigMap becomes a separate file inside the mount directory. The filename is the key; the file content is the value. |
| 12 | **C** | `kubernetes.io/dockerconfigjson` is specifically for Docker registry credentials, referenced by `imagePullSecrets`. |
| 13 | **C** | Access modes must be compatible. A PVC requesting RWX will not bind to a PV that only advertises RWO, regardless of capacity. |
| 14 | **B** | `kubectl create secret tls` is the dedicated command for TLS secrets. It requires `--cert` and `--key` flags and creates keys named `tls.crt` and `tls.key`. |
| 15 | **B** | `WaitForFirstConsumer` is important for topology-aware provisioning — it waits until a Pod is scheduled so the volume can be provisioned in the correct availability zone. |
| 16 | **C** | `Recycle` is deprecated since Kubernetes 1.11 and removed from most cloud providers. Use `Delete` or `Retain` instead. |
| 17 | **C** | Volume expansion is gated by `allowVolumeExpansion: true` on the StorageClass. Without it, the API server rejects the update. |
| 18 | **A** | `envFrom` imports every key in the ConfigMap/Secret as env vars. `configMapKeyRef` imports and (optionally renames) a single key. |
| 19 | **C** | `c3VwM3JzM2NyM3Q=` decodes to `sup3rs3cr3t`. Run `echo 'c3VwM3JzM2NyM3Q=' | base64 -d` to verify. |
| 20 | **B** | A projected volume merges multiple sources (ConfigMap, Secret, ServiceAccountToken, DownwardAPI) into a single mount point, avoiding multiple volume mounts. |
| 21 | **B** | Each Secret key becomes a file at `<mountPath>/<key>`. The value written to the file is already decoded from base64 by kubelet. |
| 22 | **C** | Setting `storageClassName: manual` makes the PVC bind only to PVs with the same `storageClassName`. No dynamic provisioner is invoked because `manual` is not a dynamic StorageClass. |
| 23 | **B** | With `Retain`, the PV moves to `Released` state. The data is preserved and the PV is not re-offered — an admin must manually clean up and set the PV back to `Available`. |
| 24 | **C** | `--from-file=nginx.conf` uses the filename (including extension) as the key. The key is `nginx.conf`; the value is the file contents. |
| 25 | **B** | `volumeClaimTemplates` in a StatefulSet automatically creates one PVC per Pod replica, using the specified StorageClass for dynamic provisioning. |
| 26 | **B** | The colleague is correct. Base64 is trivially reversible. Encryption at rest requires `EncryptionConfiguration` configured on the kube-apiserver — it is not enabled by default. |
