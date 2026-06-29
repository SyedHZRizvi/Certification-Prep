# Module 5 — Storage Cheat Sheet
## CKA Quick Reference

---

## Volume Types

| Volume Type | Scope | Survives Pod delete? | Shared across Nodes? | Typical use |
|---|---|---|---|---|
| `emptyDir` | Pod | No | No | Scratch, inter-container share |
| `emptyDir` (Memory) | Pod | No | No | Fast scratch, RAM cache |
| `hostPath` | Node | Yes (if path persists) | No | Node-level logs, DaemonSet |
| `configMap` | Cluster | Yes (read-only) | Yes | Config files mounted as files |
| `secret` | Cluster | Yes (read-only) | Yes | Credentials, TLS (Transport Layer Security) certs |
| `persistentVolumeClaim` | Cluster/NS | Yes | Depends on backend | Stateful workloads |
| `projected` | Cluster | Yes (read-only) | Yes | Combine CM + Secret + SA token |
| `nfs` | Cluster | Yes | Yes (RWX) | Shared storage across Pods |

---

## Access Modes

| Mode | Abbreviation | Multiple Nodes? | Multiple Pods? | Typical backend |
|---|---|---|---|---|
| `ReadWriteOnce` | RWO | No (one Node) | Multiple on same Node | AWS (Amazon Web Services) EBS, GCE PD, Azure Disk |
| `ReadOnlyMany` | ROX | Yes | Yes (read only) | NFS, CephFS |
| `ReadWriteMany` | RWX | Yes | Yes | NFS, CephFS, Azure File |
| `ReadWriteOncePod` | RWOP | No | One Pod only | CSI drivers (k8s >= 1.22) |

> RWO = one Node, not one Pod. Multiple Pods on the same Node can use an RWO volume.

---

## Reclaim Policies

| Policy | Triggered when | Data preserved? | PV re-usable automatically? |
|---|---|---|---|
| `Retain` | PVC deleted | Yes | No — admin must manually reclaim |
| `Delete` | PVC deleted | No | N/A — PV deleted |
| `Recycle` | PVC deleted | No | Yes (deprecated — do not use) |

---

## PV Phases

| Phase | Meaning |
|---|---|
| `Available` | No PVC bound; ready to be claimed |
| `Bound` | Claimed by a PVC |
| `Released` | PVC deleted; `Retain` policy; data still present |
| `Failed` | Automatic reclamation failed |

---

## Secret Types

| Type | Created with | Keys stored |
|---|---|---|
| `Opaque` | `kubectl create secret generic` | Any key/value pairs |
| `kubernetes.io/dockerconfigjson` | `kubectl create secret docker-registry` | `.dockerconfigjson` |
| `kubernetes.io/tls` | `kubectl create secret tls` | `tls.crt`, `tls.key` |
| `kubernetes.io/service-account-token` | Auto-created by SA controller | `token`, `ca.crt`, `namespace` |
| `kubernetes.io/basic-auth` | Manual YAML | `username`, `password` |
| `kubernetes.io/ssh-auth` | Manual YAML | `ssh-privatekey` |

---

## StorageClass Key Fields

| Field | Values | Notes |
|---|---|---|
| `provisioner` | Cloud CSI driver name | Must match installed plugin |
| `reclaimPolicy` | `Delete` (default), `Retain` | Applies to dynamically created PVs |
| `volumeBindingMode` | `Immediate`, `WaitForFirstConsumer` | Use WFC for topology-aware |
| `allowVolumeExpansion` | `true` / `false` | Must be true to resize PVCs |

---

## kubectl Storage Commands

```bash
# --- PersistentVolumes ---
kubectl get pv
kubectl describe pv <name>
kubectl delete pv <name>

# --- PersistentVolumeClaims ---
kubectl get pvc [-n <namespace>]
kubectl describe pvc <name> [-n <namespace>]
kubectl delete pvc <name> [-n <namespace>]

# --- StorageClasses ---
kubectl get storageclass
kubectl describe storageclass <name>

# --- ConfigMaps ---
kubectl create configmap <name> --from-literal=key=val
kubectl create configmap <name> --from-file=<file>
kubectl create configmap <name> --from-env-file=<file>
kubectl get configmap [-n <ns>]
kubectl describe configmap <name> [-n <ns>]

# --- Secrets ---
kubectl create secret generic <name> --from-literal=key=val
kubectl create secret tls <name> --cert=tls.crt --key=tls.key
kubectl create secret docker-registry <name> \
  --docker-server=<server> --docker-username=<u> --docker-password=<p>
kubectl get secret [-n <ns>]
kubectl describe secret <name>             # values are hidden
kubectl get secret <name> -o yaml         # shows base64-encoded values

# --- Decode a Secret value ---
kubectl get secret <name> -o jsonpath='{.data.<key>}' | base64 -d

# --- Check PVC binding ---
kubectl get pvc <name> -o jsonpath='{.spec.volumeName}'
kubectl get pvc <name> -o jsonpath='{.status.phase}'

# --- Resize a PVC (StorageClass must have allowVolumeExpansion: true) ---
kubectl patch pvc <name> -p '{"spec":{"resources":{"requests":{"storage":"20Gi"}}}}'
```

---

## YAML Snippets — Quick Reference

### Minimal PV
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:
    storage: 10Gi
  accessModes: [ReadWriteOnce]
  persistentVolumeReclaimPolicy: Retain
  storageClassName: manual
  hostPath:
    path: /mnt/data
```

### Minimal PVC
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 5Gi
  storageClassName: manual
```

### Mount PVC in Pod
```yaml
volumes:
- name: data
  persistentVolumeClaim:
    claimName: my-pvc
containers:
- volumeMounts:
  - name: data
    mountPath: /data
```

### ConfigMap as volume
```yaml
volumes:
- name: cfg
  configMap:
    name: my-configmap
containers:
- volumeMounts:
  - name: cfg
    mountPath: /etc/config
```

### Secret as volume (read-only recommended)
```yaml
volumes:
- name: sec
  secret:
    secretName: my-secret
containers:
- volumeMounts:
  - name: sec
    mountPath: /etc/secrets
    readOnly: true
```

---

## Key Facts to Memorize

- Secrets are **base64-encoded, NOT encrypted** by default
- PV is cluster-scoped; PVC is namespaced
- PVC `accessModes` must be a **subset** of the PV's `accessModes`
- `emptyDir` dies when the Pod dies
- `hostPath` is node-local — not portable across Nodes
- `WaitForFirstConsumer` delays provisioning until Pod scheduling
- Volume expansion requires `allowVolumeExpansion: true` on the StorageClass
- `Recycle` reclaim policy is deprecated — use `Retain` or `Delete`
