# Module 4 Cheat Sheet — Services & Networking

**CKA Domain: Services & Networking (20%) | Quick reference for exam day**

---

## Service Type Comparison

| Type | ClusterIP? | NodePort? | External LB? | DNS CNAME? | When to use |
|------|:----------:|:---------:|:------------:|:----------:|-------------|
| `ClusterIP` | Yes (default) | No | No | No | Internal microservice-to-microservice |
| `NodePort` | Yes | Yes (30000-32767) | No | No | Direct external access, dev/test |
| `LoadBalancer` | Yes | Yes | Yes (cloud) | No | Production external traffic |
| `ExternalName` | No (no proxy) | No | No | Yes (CNAME) | Alias to external DNS name |

**Key fact:** LoadBalancer = ClusterIP + NodePort + cloud LB (stacked, additive).

---

## DNS Resolution Format

| Object | FQDN Pattern | Example |
|--------|-------------|---------|
| Service (same namespace) | `<svc>` | `cart` |
| Service (cross-namespace) | `<svc>.<ns>` | `cart.shop` |
| Service (full FQDN) | `<svc>.<ns>.svc.cluster.local` | `cart.shop.svc.cluster.local` |
| Pod | `<dashed-ip>.<ns>.pod.cluster.local` | `10-244-1-5.default.pod.cluster.local` |
| StatefulSet Pod | `<pod>.<headless-svc>.<ns>.svc.cluster.local` | `kafka-0.kafka.data.svc.cluster.local` |

CoreDNS Service: `kube-dns` in namespace `kube-system`.

---

## kubectl expose Quick Reference

```bash
# ClusterIP (default)
kubectl expose deployment <name> --port=80 --target-port=8080

# NodePort
kubectl expose deployment <name> --type=NodePort --port=80

# LoadBalancer
kubectl expose deployment <name> --type=LoadBalancer --port=80

# With name and namespace
kubectl expose deployment <name> --port=80 --name=<svc-name> -n <ns>

# Expose a Pod directly
kubectl expose pod <pod-name> --port=8080 --name=<svc-name>

# Imperative ClusterIP (alternative)
kubectl create service clusterip <name> --tcp=<port>:<targetPort>

# Imperative NodePort
kubectl create service nodeport <name> --tcp=80:80 --node-port=31000
```

---

## Ingress Quick Reference

```bash
# Describe ingress rules
kubectl get ingress -A
kubectl describe ingress <name> -n <ns>

# Common annotations (nginx)
nginx.ingress.kubernetes.io/rewrite-target: /
nginx.ingress.kubernetes.io/ssl-redirect: "false"
```

| `pathType` | Behavior |
|------------|----------|
| `Exact` | Full URL must match |
| `Prefix` | URL must start with path |
| `ImplementationSpecific` | Controller decides |

**TRAP:** No IngressController = Ingress objects do nothing. K8s core does NOT ship one.

---

## NetworkPolicy Syntax Reference

| Field | Location | Meaning |
|-------|----------|---------|
| `spec.podSelector` | Top level | Pods this policy **applies to** (targets) |
| `spec.policyTypes` | Top level | `Ingress`, `Egress`, or both |
| `ingress[].from[].podSelector` | Ingress rule | Allowed **source** Pods |
| `ingress[].from[].namespaceSelector` | Ingress rule | Allowed **source** namespaces |
| `ingress[].from[].ipBlock` | Ingress rule | Allowed CIDR ranges |
| `egress[].to[].podSelector` | Egress rule | Allowed **destination** Pods |
| `egress[].ports[]` | Ingress/Egress | Port + protocol filter |

### AND vs OR Logic (Critical)

```yaml
# AND — same dash entry: source must match BOTH conditions
from:
  - namespaceSelector: {matchLabels: {env: prod}}
    podSelector: {matchLabels: {role: api}}

# OR — separate dash entries: source matches if EITHER is true
from:
  - namespaceSelector: {matchLabels: {env: prod}}
  - podSelector: {matchLabels: {role: api}}
```

### Default Deny Templates

```yaml
# Deny ALL ingress to all pods in namespace
spec:
  podSelector: {}
  policyTypes: [Ingress]
  # no ingress: block = deny all

# Deny ALL egress from all pods in namespace
spec:
  podSelector: {}
  policyTypes: [Egress]
  # no egress: block = deny all

# Allow DNS when egress is denied (always add this)
egress:
  - ports:
    - protocol: UDP
      port: 53
    - protocol: TCP
      port: 53
```

---

## Troubleshooting Cheatsheet

```bash
# Check service exists and type
kubectl get svc <name> -n <ns>

# Check endpoints (empty = label mismatch)
kubectl get endpoints <name> -n <ns>

# Describe to see selector
kubectl describe svc <name> -n <ns>

# Check pod labels
kubectl get pods --show-labels -n <ns>

# Test from temporary pod (CleanUp automatic)
kubectl run tmp --image=busybox --rm -it --restart=Never -- \
  wget -qO- http://<svc>.<ns>.svc.cluster.local

# Port-forward for local testing
kubectl port-forward svc/<name> 8080:80 -n <ns>

# Check CoreDNS logs
kubectl logs -n kube-system -l k8s-app=kube-dns

# Check kube-proxy logs
kubectl logs -n kube-system -l k8s-app=kube-proxy
```

---

## Key Numbers to Memorize

| Value | Meaning |
|-------|---------|
| `30000–32767` | NodePort valid range |
| `100` | Max endpoints per EndpointSlice |
| `53` (UDP+TCP) | DNS port — open in egress when deny-all |
| `443` | HTTPS for Ingress TLS |
| `cluster.local` | Default cluster DNS domain |

---

## NetworkPolicy Skeleton (Write From Scratch)

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: <name>
  namespace: <namespace>
spec:
  podSelector:
    matchLabels:
      <key>: <value>         # target pods
  policyTypes:
    - Ingress                # or Egress or both
  ingress:
    - from:
        - podSelector:
            matchLabels:
              <key>: <value> # allowed source pods
        # optional:
        # - namespaceSelector:
        #     matchLabels:
        #       <key>: <value>
      ports:
        - protocol: TCP
          port: <number>
```
