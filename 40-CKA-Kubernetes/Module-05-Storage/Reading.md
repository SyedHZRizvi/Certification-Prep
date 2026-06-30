# Module 5 — Storage
## CKA Domain: Storage (10%)

---

## The Bakery Analogy

Imagine you run a chain of artisan bakeries. Every morning your bakers need ingredients — flour, eggs, yeast, secret spice blends. Where those ingredients are stored, how they are shared across locations, and who controls the inventory determines whether your bakeries run smoothly or grind to a halt.

Your Kubernetes cluster is that bakery chain. **Pods are the kitchens.** Some ingredients live right on the kitchen counter — fast, convenient, but gone the moment the kitchen closes. Others live in a central warehouse shared across all locations. And your secret recipes? Those live in a locked safe, not just scribbled on a whiteboard.

| Bakery concept | Kubernetes equivalent |
|---|---|
| Counter storage (per-shift, ephemeral) | `emptyDir` volume |
| Node-local walk-in fridge | `hostPath` volume |
| Central warehouse | PersistentVolume (PV) |
| Order form requesting warehouse space | PersistentVolumeClaim (PVC) |
| Warehouse company (auto-provisions bays) | StorageClass |
| Printed recipe card mounted on the wall | ConfigMap as volume |
| Locked safe with secret spice blend | Secret as volume |

---

## 5.1 — Ephemeral Volumes

### emptyDir

An `emptyDir` volume is created fresh every time a Pod is assigned to a Node. All containers in the Pod share it. When the Pod is deleted — or the container crashes hard enough to be evicted — the data disappears.

**When to use it:** scratch space, caches, inter-container communication (sidecar → main container).

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: bakery-scratch
spec:
  containers:
  - name: baker
    image: busybox
    command: ["sh", "-c", "echo 'dough rising' > /scratch/status.txt && sleep 3600"]
    volumeMounts:
    - name: scratch
      mountPath: /scratch
  - name: monitor
    image: busybox
    command: ["sh", "-c", "while true; do cat /scratch/status.txt; sleep 5; done"]
    volumeMounts:
    - name: scratch
      mountPath: /scratch
  volumes:
  - name: scratch
    emptyDir: {}
```

By default `emptyDir` uses disk. To store it in memory (faster, counts against container memory limit):

```yaml
volumes:
- name: scratch
  emptyDir:
    medium: Memory
    sizeLimit: 128Mi
```

### hostPath

A `hostPath` volume mounts a file or directory from the **Node's filesystem** into the Pod.

```yaml
volumes:
- name: host-logs
  hostPath:
    path: /var/log/myapp
    type: DirectoryOrCreate
```

| `hostPath` type | Behaviour |
|---|---|
| `""` (empty) | No check — whatever exists |
| `DirectoryOrCreate` | Creates directory if missing |
| `Directory` | Must exist already |
| `FileOrCreate` | Creates file if missing |
| `File` | Must exist already |
| `Socket` | Must be a Unix socket |

> 🚨 **Trap:** `hostPath` volumes are **node-local**. If a Pod is rescheduled to a different Node, the data is gone. Never use `hostPath` for shared production data.

---

## 5.2 — ConfigMaps as Volumes

ConfigMaps store non-sensitive configuration. You can mount them as files inside containers or expose them as environment variables.

### Creating a ConfigMap

**From literal:**
```bash
kubectl create configmap bakery-config \
  --from-literal=MAX_OVENS=4 \
  --from-literal=TEMP_UNIT=celsius
```

**From a file:**
```bash
kubectl create configmap bakery-config \
  --from-file=recipes.conf
```

**From an env file:**
```bash
kubectl create configmap bakery-config \
  --from-env-file=bakery.env
```

**YAML definition:**
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: bakery-config
data:
  MAX_OVENS: "4"
  TEMP_UNIT: celsius
  recipes.conf: |
    [sourdough]
    hydration=78
    salt_pct=2.1
```

### Mounting a ConfigMap as a Volume

Each key becomes a **file** inside the mountPath:

```yaml
spec:
  containers:
  - name: baker
    image: busybox
    volumeMounts:
    - name: config-vol
      mountPath: /etc/bakery
  volumes:
  - name: config-vol
    configMap:
      name: bakery-config
```

The directory `/etc/bakery/` will contain `MAX_OVENS`, `TEMP_UNIT`, and `recipes.conf` as individual files.

### Injecting ConfigMap as Environment Variables

```yaml
spec:
  containers:
  - name: baker
    image: busybox
    envFrom:
    - configMapRef:
        name: bakery-config
```

Or selectively:
```yaml
    env:
    - name: OVEN_COUNT
      valueFrom:
        configMapKeyRef:
          name: bakery-config
          key: MAX_OVENS
```

---

## 5.3 — Secrets

Secrets store sensitive data: passwords, tokens, TLS certificates.

> 🚨 **Trap — MEMORIZE THIS:** Kubernetes Secrets are stored **base64-encoded**, NOT encrypted by default. Base64 is **encoding**, not encryption — anyone with `kubectl get secret -o yaml` can decode them instantly. Encryption at rest requires enabling `EncryptionConfiguration` on the API server. CKA examiners specifically test whether you know this distinction.

### Secret Types

| Type | Use case |
|---|---|
| `Opaque` | Generic — any key/value pairs |
| `kubernetes.io/dockerconfigjson` | Image pull credentials |
| `kubernetes.io/tls` | TLS certificate + key |
| `kubernetes.io/service-account-token` | SA token (auto-created) |
| `kubernetes.io/basic-auth` | Username + password |
| `kubernetes.io/ssh-auth` | SSH private key |

### Creating Secrets

**Opaque (from literal — kubectl encodes automatically):**
```bash
kubectl create secret generic bakery-secret \
  --from-literal=SPICE_BLEND=saffron-cardamom \
  --from-literal=DB_PASSWORD=sup3rs3cr3t
```

**TLS secret:**
```bash
kubectl create secret tls bakery-tls \
  --cert=tls.crt \
  --key=tls.key
```

**Docker registry secret:**
```bash
kubectl create secret docker-registry regcred \
  --docker-server=registry.mycompany.com \
  --docker-username=syed \
  --docker-password=mypassword \
  --docker-email=syed@company.com
```

**YAML definition (values must be base64-encoded manually):**
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: bakery-secret
type: Opaque
data:
  SPICE_BLEND: c2FmZnJvbi1jYXJkYW1vbQ==   # echo -n 'saffron-cardamom' | base64
  DB_PASSWORD: c3VwM3JzM2NyM3Q=
```

### Mounting a Secret as a Volume

```yaml
spec:
  containers:
  - name: baker
    image: busybox
    volumeMounts:
    - name: secret-vol
      mountPath: /etc/secrets
      readOnly: true
  volumes:
  - name: secret-vol
    secret:
      secretName: bakery-secret
```

Each key becomes a file. Values are decoded before being written to the mount — so your application reads the plaintext, not the base64 string.

### Injecting Secret as Environment Variables

```yaml
    envFrom:
    - secretRef:
        name: bakery-secret
```

> 🎯 **Exam tip:** When a question says "mount as a volume," use `volumeMounts` + `volumes`. When it says "inject as env vars," use `envFrom` or `env.valueFrom`. The exam frequently asks you to do one specific form — read carefully.

---

## 5.4 — PersistentVolumes (PV)

A **PersistentVolume** is a piece of storage in the cluster that has been provisioned by an administrator (or dynamically by a StorageClass). It is a cluster-scoped resource — it does not belong to any namespace.

Think of it as a warehouse bay: capacity defined, location known, rules set.

### PV Specification

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: bakery-warehouse-pv
spec:
  capacity:
    storage: 10Gi
  volumeMode: Filesystem          # or Block
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: manual
  hostPath:                       # underlying storage type
    path: /mnt/data/bakery
```

### Access Modes

| Mode | Abbreviation | Meaning |
|---|---|---|
| `ReadWriteOnce` | RWO | Mounted read/write by a single Node |
| `ReadOnlyMany` | ROX | Mounted read-only by many Nodes |
| `ReadWriteMany` | RWX | Mounted read/write by many Nodes |
| `ReadWriteOncePod` | RWOP | Mounted read/write by a single Pod (k8s ≥1.22) |

> Note: **access mode is a capability claim**, not enforcement by Kubernetes. The underlying storage plugin enforces it. NFS supports RWX; most cloud block volumes only support RWO.

### Reclaim Policies

| Policy | What happens when PVC is deleted |
|---|---|
| `Retain` | PV stays, data preserved, admin must manually reclaim |
| `Delete` | PV and underlying storage are deleted automatically |
| `Recycle` | **Deprecated** — scrubbed with `rm -rf` and re-offered (do not use) |

> 🚨 **Trap:** `Recycle` appears in old docs but is deprecated since Kubernetes 1.11 and removed from most cloud providers. If you see it in an exam question, it is likely a distractor.

### PV Phases

| Phase | Meaning |
|---|---|
| `Available` | Free, not yet claimed |
| `Bound` | Claimed by a PVC |
| `Released` | PVC deleted; not yet reclaimed |
| `Failed` | Automatic reclamation failed |

---

## 5.5 — PersistentVolumeClaims (PVC)

A **PersistentVolumeClaim** is a request for storage by a user or Pod. It is namespaced.

Think of it as the order form your bakery branch submits to the warehouse company: "I need 5 Gi of space with read/write access."

### Binding Process

1. User creates a PVC specifying `capacity`, `accessModes`, and optionally `storageClassName`.
2. Kubernetes finds a matching PV (capacity ≥ requested, access modes match, storageClassName matches).
3. PVC enters `Bound` state; PV enters `Bound` state.
4. Pod references the PVC by name.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: bakery-pvc
  namespace: production
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: manual        # must match PV's storageClassName
```

> Important: The PVC's `accessModes` must be a **subset** of the PV's `accessModes`. A PVC requesting RWX will never bind to a PV that only offers RWO.

### Using a PVC in a Pod

```yaml
spec:
  containers:
  - name: baker
    image: nginx
    volumeMounts:
    - name: warehouse-storage
      mountPath: /var/lib/bakery
  volumes:
  - name: warehouse-storage
    persistentVolumeClaim:
      claimName: bakery-pvc
```

---

## 5.6 — StorageClass and Dynamic Provisioning

Statically provisioning PVs — where an admin creates each one by hand — does not scale. **StorageClass** automates this: when a PVC is created, the StorageClass contacts a **provisioner** (a plugin, usually cloud-provider specific) and automatically creates a PV to satisfy the claim.

This is the warehouse company with automated racking systems: submit the order form, space appears.

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: kubernetes.io/no-provisioner   # local; use cloud provisioner in prod
reclaimPolicy: Delete
volumeBindingMode: WaitForFirstConsumer
allowVolumeExpansion: true
parameters:
  type: pd-ssd                              # provisioner-specific
```

### Key StorageClass Fields

| Field | Options | Notes |
|---|---|---|
| `provisioner` | `kubernetes.io/aws-ebs`, `disk.csi.azure.com`, `pd.csi.storage.gke.io`, etc. | Must match installed CSI driver |
| `reclaimPolicy` | `Delete` (default), `Retain` | Applied to dynamically created PVs |
| `volumeBindingMode` | `Immediate`, `WaitForFirstConsumer` | `WaitForFirstConsumer` delays binding until Pod is scheduled |
| `allowVolumeExpansion` | `true` / `false` | Enables PVC resize |

### Dynamic Provisioning Flow

```
User creates PVC → StorageClass provisioner called →
PV created automatically → PVC bound to new PV →
Pod can now use the PVC
```

### PVC Resizing

If `allowVolumeExpansion: true` on the StorageClass, you can expand a PVC:

```yaml
# Edit the PVC
spec:
  resources:
    requests:
      storage: 20Gi   # was 5Gi — increase only, never decrease
```

```bash
kubectl edit pvc bakery-pvc
# or
kubectl patch pvc bakery-pvc -p '{"spec":{"resources":{"requests":{"storage":"20Gi"}}}}'
```

> The volume expansion completes when the Pod is restarted (for file-system resize) or, with some CSI drivers, online without restart.

---

## 5.7 — Projected Volumes

A **projected volume** lets you combine multiple volume sources (ConfigMap, Secret, ServiceAccountToken, DownwardAPI) into a single directory inside a container.

```yaml
spec:
  volumes:
  - name: all-in-one
    projected:
      sources:
      - secret:
          name: bakery-secret
          items:
          - key: DB_PASSWORD
            path: db/password
      - configMap:
          name: bakery-config
          items:
          - key: recipes.conf
            path: config/recipes.conf
      - serviceAccountToken:
          path: token
          expirationSeconds: 3600
          audience: bakery-api
```

This mounts all three sources under the same directory in the container, avoiding path collisions by using `items[].path`.

---

## 5.8 — Volume Types Comparison

| Volume Type | Scope | Survives Pod restart? | Survives Node reboot? | Shared across Nodes? |
|---|---|---|---|---|
| `emptyDir` | Pod | No | No | No |
| `emptyDir (Memory)` | Pod | No | No | No |
| `hostPath` | Node | Yes | Yes* | No |
| `configMap` | Cluster | Yes (read-only) | Yes | Yes |
| `secret` | Cluster | Yes (read-only) | Yes | Yes |
| `persistentVolumeClaim` | Cluster/Namespace | Yes | Yes | Depends on PV backend |
| `nfs` | Cluster | Yes | Yes | Yes (RWX) |

*hostPath survives reboot only if the path persists on the node.

---

## 5.9 — Key kubectl Commands for Storage

```bash
# PersistentVolumes (cluster-scoped)
kubectl get pv
kubectl describe pv <pv-name>

# PersistentVolumeClaims (namespaced)
kubectl get pvc -n <namespace>
kubectl describe pvc <pvc-name> -n <namespace>

# StorageClasses
kubectl get storageclass
kubectl describe storageclass <sc-name>

# ConfigMaps
kubectl get configmap -n <namespace>
kubectl describe configmap <name> -n <namespace>
kubectl create configmap <name> --from-literal=key=value
kubectl create configmap <name> --from-file=<file>

# Secrets
kubectl get secret -n <namespace>
kubectl describe secret <name> -n <namespace>   # values NOT shown
kubectl get secret <name> -o jsonpath='{.data.key}' | base64 -d   # decode value
kubectl create secret generic <name> --from-literal=key=value
kubectl create secret tls <name> --cert=tls.crt --key=tls.key

# Check what a PVC is bound to
kubectl get pvc <name> -o jsonpath='{.spec.volumeName}'
```

---

## Summary

| Concept | One-liner |
|---|---|
| `emptyDir` | Ephemeral scratch space, dies with Pod |
| `hostPath` | Node-local path, not portable |
| ConfigMap | Non-sensitive config, mounted as files or env vars |
| Secret | Sensitive data, base64-encoded (NOT encrypted) |
| PersistentVolume | Pre-provisioned storage bay, cluster-scoped |
| PersistentVolumeClaim | Namespaced request that binds to a PV |
| StorageClass | Auto-provisioner; creates PV on demand |
| Projected volume | Multiple sources merged into one directory |

**The binding contract:** A PVC binds to a PV when capacity ≥ request, access modes are compatible, and storageClassName matches. Once bound, both are locked to each other.

**The security contract:** Secrets are base64, not encrypted. If your cluster needs encryption at rest, enable `EncryptionConfiguration` — that is beyond the CKA scope but know the distinction.

---

## Next Steps

- Module 6: Security & RBAC — where you will control *who* can access those Secrets
- Practice: `kubectl create` a PV + PVC pair, bind them, mount into a Pod, verify with `kubectl exec`
- Hands-on: Deploy a StatefulSet that uses a `volumeClaimTemplate` (dynamic PVC per replica)

---

## Further Reading

- [Kubernetes Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
- [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)
- [Storage Classes](https://kubernetes.io/docs/concepts/storage/storage-classes/)
- [Configure a Pod to Use a ConfigMap](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/)
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [Projected Volumes](https://kubernetes.io/docs/concepts/storage/projected-volumes/)
