# Module 4 — Services & Networking

**CKA Domain: Services & Networking (20% of exam)**

---

## The Hotel Analogy

Picture a large hotel. Inside the hotel, every room has an extension number on the internal phone system — guests call the front desk, dial an extension, and reach exactly who they need. Nobody outside the hotel can dial those extension numbers directly. That is **ClusterIP**: a stable internal address for a group of Pods, invisible to the outside world.

Now the hotel installs a dedicated phone line at the reception desk. Anyone from the street can call that number and the receptionist routes the call to the right room. That is **NodePort**: a port opened on every cluster Node, forwarding traffic inward to a Service.

The hotel chain grows. A professional call-center manages all incoming calls for every hotel in the chain — callers dial one number, the call center decides which hotel (and which room) to route them to, handles load balancing, and even provides failover. That is **LoadBalancer**: a cloud-provisioned external load balancer that sits in front of NodePort and ClusterIP.

Finally, a concierge stands in the lobby. A guest says "I need the spa"; the concierge looks at a directory and escorts them to the fourth floor, west wing. Another guest says "I need the restaurant"; they go somewhere else. The concierge doesn't open new phone lines — he reads the request and routes by name. That is **Ingress**: HTTP/HTTPS routing by hostname and URL path, handled by an IngressController.

---

## 1. Pod Networking Fundamentals

### The Flat Network Contract

Kubernetes imposes a strict networking contract on any conforming cluster:

1. Every Pod gets its own unique IP address.
2. Every Pod can communicate with every other Pod without NAT.
3. Every Node can communicate with every Pod without NAT.
4. The IP that a Pod sees for itself is the same IP that other Pods see when addressing it.

This "flat network" is not built into Kubernetes itself — it is delegated to a **CNI (Container Network Interface)** plugin installed by the cluster operator. The exam does not ask you to install a CNI, but you must know what they do.

### CNI Plugins You Should Know by Name

| Plugin | Key characteristic |
|--------|--------------------|
| **Calico** | NetworkPolicy support, BGP routing, high performance; very common in production |
| **Flannel** | Simple overlay network (VXLAN); minimal configuration; no NetworkPolicy support alone |
| **Cilium** | eBPF-based; rich observability and L7 NetworkPolicies; used in modern clusters |

Flannel + Calico is a common pairing (Flannel for routing, Calico for policy). On the CKA you will be given a working cluster — CNI is already installed.

---

## 2. Service Types — MEMORIZE THIS

A Service is a stable virtual IP (called a **ClusterIP**) and DNS name that load-balances traffic to a set of Pods selected by a label selector. The four types differ only in how much external exposure they add.

### Service Type Comparison Table

| Type | Cluster-internal? | Node-level port? | External LB? | Use case |
|------|:-----------------:|:----------------:|:------------:|----------|
| **ClusterIP** | Yes | No | No | Internal microservice communication |
| **NodePort** | Yes | Yes (30000-32767) | No | Direct external access, dev/test |
| **LoadBalancer** | Yes | Yes | Yes | Production external traffic (cloud) |
| **ExternalName** | Yes (DNS alias) | No | No | Alias to an external DNS name |

> **ClusterIP is the default** — if you omit `type:` in a Service manifest, you get ClusterIP.

### NodePort Range

NodePort uses ports **30000–32767**. If you do not specify a `nodePort` value, Kubernetes picks one from this range. If a port outside this range is specified, the API server rejects the manifest. This range is configurable but the default is what the exam tests.

---

## 3. Service YAML Examples

### ClusterIP Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hotel-internal
  namespace: default
spec:
  type: ClusterIP          # default; can omit
  selector:
    app: backend
  ports:
    - protocol: TCP
      port: 80             # port on the Service (ClusterIP)
      targetPort: 8080     # port on the Pod
```

### NodePort Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hotel-reception
  namespace: default
spec:
  type: NodePort
  selector:
    app: frontend
  ports:
    - protocol: TCP
      port: 80             # ClusterIP port
      targetPort: 80       # Pod port
      nodePort: 31000      # must be 30000-32767
```

Traffic reaches the pod via `<NodeIP>:31000`.

### LoadBalancer Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: hotel-callcenter
  namespace: default
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
```

The cloud controller manager provisions an external load balancer. `kubectl get svc` will show an `EXTERNAL-IP` once it is ready. On bare-metal clusters without a cloud provider, this IP remains `<pending>`.

### ExternalName Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-db
  namespace: default
spec:
  type: ExternalName
  externalName: db.example.com   # returns a CNAME record
```

Pods that look up `external-db.default.svc.cluster.local` get a CNAME response pointing to `db.example.com`. No proxying occurs — this is purely DNS.

---

## 4. How kube-proxy Implements Services

`kube-proxy` runs on every Node as a DaemonSet. Its job is to watch the API server for Service and Endpoint objects and program the Node's network stack so that traffic to a ClusterIP gets forwarded to a real Pod IP.

### Modes

| Mode | Mechanism | Notes |
|------|-----------|-------|
| **iptables** | Inserts `PREROUTING` and `OUTPUT` chain rules | Default on most clusters; O(n) rule lookup |
| **ipvs** | Uses Linux IPVS (kernel L4 load balancer) | O(1) lookup; more scheduling algorithms; requires kernel module |
| **nftables** | Newer replacement for iptables (Kubernetes 1.29+) | |

When a Pod sends a packet to `10.96.80.10:80` (a ClusterIP), iptables/IPVS rewrites the destination to one of the backing Pod IPs before the packet leaves the Node. The source Pod never sees the intermediate virtual IP.

---

## 5. Endpoints and EndpointSlices

Every Service has a corresponding **Endpoints** object (or newer **EndpointSlice** objects) that lists the actual Pod IPs matching the selector.

```bash
kubectl get endpoints hotel-internal
kubectl get endpointslices -l kubernetes.io/service-name=hotel-internal
```

If a Service shows `<none>` endpoints, your selector does not match any running Pods — the most common cause of a Service routing to nothing.

EndpointSlices (GA since 1.21) shard endpoints into chunks of ≤100 entries each, improving scalability for large Services. kube-proxy reads EndpointSlices by default in modern clusters.

---

## 6. DNS in Kubernetes

### CoreDNS

CoreDNS is the default DNS server in Kubernetes (replaced kube-dns). It runs as a Deployment in the `kube-system` namespace and is exposed as a ClusterIP Service named `kube-dns`.

```bash
kubectl get pods -n kube-system -l k8s-app=kube-dns
kubectl get svc kube-dns -n kube-system
```

Every Pod's `/etc/resolv.conf` points to the `kube-dns` ClusterIP. DNS queries from Pods first hit CoreDNS, which resolves cluster-internal names and forwards external queries upstream.

### DNS Resolution Formats

| Resource | FQDN | Short form (within same namespace) |
|----------|------|------------------------------------|
| Service | `<svc>.<ns>.svc.cluster.local` | `<svc>` |
| Service (cross-ns) | `<svc>.<ns>.svc.cluster.local` | `<svc>.<ns>` |
| Pod | `<pod-ip-dashed>.<ns>.pod.cluster.local` | — |
| StatefulSet Pod | `<pod-name>.<svc>.<ns>.svc.cluster.local` | — |

**Examples:**

```
# Same namespace
curl http://hotel-internal          → resolves to ClusterIP

# Cross-namespace
curl http://hotel-internal.payments.svc.cluster.local

# Full Pod DNS (rarely needed)
# Pod IP 10.244.1.5 in namespace default:
# 10-244-1-5.default.pod.cluster.local
```

> 🎯 **Exam tip:** On the CKA you will frequently be asked "can Pod A reach Service B in namespace X?" The answer almost always involves the FQDN `<svc-name>.<namespace>.svc.cluster.local`. Know this cold.

---

## 7. Ingress

### What Ingress Is

An **Ingress** is a Kubernetes API object that defines HTTP/HTTPS routing rules. It does NOT implement those rules by itself — it is just configuration. A separate **IngressController** (a Pod/Deployment in the cluster) reads Ingress resources and programs an actual reverse proxy (nginx, HAProxy, Traefik, etc.).

> 🚨 **Trap:** Kubernetes does NOT ship with an IngressController. It is **not** part of the Kubernetes core. If you create an Ingress object in a cluster without an IngressController installed, nothing happens. On the CKA, the exam cluster has one pre-installed — but know this distinction cold because it is a favorite distractor question.

### Ingress Routing Types

**Host-based routing** — different hostnames go to different Services:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: hotel-ingress
  namespace: default
spec:
  ingressClassName: nginx
  rules:
    - host: spa.hotel.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: spa-service
                port:
                  number: 80
    - host: restaurant.hotel.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: restaurant-service
                port:
                  number: 80
```

**Path-based routing** — same hostname, different paths go to different Services:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: hotel-paths
  namespace: default
spec:
  ingressClassName: nginx
  rules:
    - host: hotel.com
      http:
        paths:
          - path: /spa
            pathType: Prefix
            backend:
              service:
                name: spa-service
                port:
                  number: 80
          - path: /restaurant
            pathType: Prefix
            backend:
              service:
                name: restaurant-service
                port:
                  number: 80
```

### TLS Termination

```yaml
spec:
  tls:
    - hosts:
        - hotel.com
      secretName: hotel-tls-secret   # Secret must contain tls.crt and tls.key
```

### `pathType` Values

| Value | Behavior |
|-------|----------|
| `Exact` | URL must match exactly |
| `Prefix` | URL must begin with the path |
| `ImplementationSpecific` | Delegated to the IngressController |

---

## 7.5 Gateway API — The Modern Successor to Ingress

### Why a Successor Exists

Go back to the concierge in our hotel lobby. Ingress gave that concierge exactly one job description: read an HTTP request and point it at a room. It works, but every hotel chain wanted to tweak the concierge's behaviour — rewrite a URL here, split traffic 90/10 there, terminate TLS a particular way — and the Ingress object had no fields for any of it. So vendors bolted those features on through **annotations**: dozens of free-text `nginx.ingress.kubernetes.io/...` strings that the API server never validates and that do not port from one controller to another.

The **Gateway API** is the rebuilt lobby. Instead of one overloaded concierge, the work is split across three roles that map to three Kubernetes objects — and the routing rules live in typed, validated fields instead of annotations. It is the project's chosen long-term replacement for Ingress; Ingress is frozen (stable, but receiving no new features) while Gateway API is where new capability lands.

> 🎯 **Exam tip:** When a question contrasts Ingress with Gateway API, the headline fact is **"Gateway API is the modern successor to Ingress — role-oriented, expressive, and portable, with no annotation soup."** Ingress is not removed; both coexist on the cluster.

### The Three Resources (and Who Owns Them)

Gateway API deliberately separates concerns so that infrastructure teams and application teams stop stepping on each other:

| Resource | API kind | Owned by | Analogy |
|----------|----------|----------|---------|
| **GatewayClass** | `GatewayClass` | Cluster operator / infra | The brand of concierge desk a chain has approved (e.g. "nginx", "istio") |
| **Gateway** | `Gateway` | Platform / cluster admin | The physical desk in *this* lobby — which ports it listens on, which TLS certs it holds |
| **HTTPRoute** | `HTTPRoute` | Application developer | The directory card that says "/spa goes to the spa-service" |

A GatewayClass is cluster-scoped and is provided by whoever installs the controller — it is the rough analogue of `ingressClassName`. A Gateway references a GatewayClass and opens **listeners** (port + protocol + optional TLS). An HTTPRoute attaches itself to a Gateway and carries the actual hostname/path matching rules. This many-to-one fan-in (many HTTPRoutes → one Gateway) is what lets one team own the entry point while many teams independently publish routes.

All three live under the `gateway.networking.k8s.io` API group. The objects are delivered as **CRDs** (see Module 2) — Gateway API ships out-of-tree, so a cluster must have the CRDs and a conforming controller installed before any of this works. The CKA exam cluster will have them pre-installed.

> 🚨 **Trap on the exam:** Just like Ingress, a Gateway object **does nothing on its own** — it needs a controller implementing the referenced GatewayClass (NGINX Gateway Fabric, Istio, Cilium, etc.). And the API group is `gateway.networking.k8s.io`, **not** `networking.k8s.io` (that is Ingress). Mixing up the two API groups is a classic distractor.

### GatewayClass

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: hotel-gwc
spec:
  controllerName: gateway.nginx.org/nginx-gateway-controller   # who implements this class
```

### Gateway (the Listener)

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: hotel-gateway
  namespace: default
spec:
  gatewayClassName: hotel-gwc
  listeners:
    - name: http
      protocol: HTTP
      port: 80
    - name: https
      protocol: HTTPS
      port: 443
      tls:
        mode: Terminate                 # Gateway terminates TLS here
        certificateRefs:
          - kind: Secret
            name: hotel-tls-secret      # Secret with tls.crt and tls.key
```

### HTTPRoute (the Routing Rules)

Host-based and path-based routing live in the same object. An HTTPRoute binds to a Gateway through `parentRefs`:

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: hotel-route
  namespace: default
spec:
  parentRefs:
    - name: hotel-gateway               # attach to the Gateway above
  hostnames:
    - "hotel.com"
  rules:
    - matches:
        - path:
            type: PathPrefix            # PathPrefix | Exact | RegularExpression
            value: /spa
      backendRefs:
        - name: spa-service
          port: 80
    - matches:
        - path:
            type: PathPrefix
            value: /restaurant
      backendRefs:
        - name: restaurant-service
          port: 80
```

> Note the field names differ from Ingress on purpose: `backendRefs` (a list — enabling native traffic splitting by weight), `parentRefs` (the Gateway binding), and `PathPrefix` instead of Ingress's `Prefix`. Native weighted splitting is just two `backendRefs` entries each with a `weight:` — something Ingress could only do through controller-specific annotations.

### TLS in Gateway API

TLS is configured on the **Gateway listener**, not on the route — that is the architectural split again (infra owns certs; developers own routes). The two modes:

| `tls.mode` | Behavior |
|------------|----------|
| `Terminate` | Gateway decrypts TLS using the referenced Secret, then forwards plaintext to the backend |
| `Passthrough` | Gateway forwards the encrypted connection untouched; the backend terminates TLS |

### Ingress vs. Gateway API — Side by Side

| Dimension | Ingress | Gateway API |
|-----------|---------|-------------|
| API group | `networking.k8s.io` | `gateway.networking.k8s.io` |
| Objects | One (`Ingress`) | Three (`GatewayClass`, `Gateway`, `HTTPRoute`) |
| Roles | Blended into one object | Separated: infra / cluster-admin / developer |
| Advanced features | Vendor annotations (non-portable) | Typed, validated spec fields (portable) |
| Traffic splitting | Annotation-dependent | Native via weighted `backendRefs` |
| Protocols | HTTP/HTTPS | HTTP, HTTPS, TLS, TCP, UDP, gRPC (via route kinds) |
| Status | Stable, frozen (no new features) | Active successor for new capability |
| Ships with K8s core | No (controller required) | No (CRDs + controller required) |

```bash
# Inspect Gateway API objects
kubectl get gatewayclass
kubectl get gateway -A
kubectl get httproute -A
kubectl describe gateway hotel-gateway       # check the PROGRAMMED / ACCEPTED conditions
```

> 🎯 **Exam tip:** After applying a Gateway, run `kubectl describe gateway <name>` and read the **conditions**. `Accepted: True` and `Programmed: True` mean the controller picked it up. An address only appears once the controller provisions the listener — the same "is it actually wired up?" check you do for a Service's endpoints.

---

## 8. NetworkPolicies

### Default Behavior Without NetworkPolicies

By default, all Pods can reach all other Pods in the cluster (flat network, no firewalling). NetworkPolicies introduce firewalling at the Pod level, implemented by the CNI plugin (Calico and Cilium support them; plain Flannel does not).

### The Default-Deny Pattern

To lock down a namespace, apply a NetworkPolicy that selects all Pods but specifies no `ingress` or `egress` rules — this denies all traffic to/from all Pods in the namespace.

```yaml
# Deny all ingress to all pods in namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
  namespace: hotel
spec:
  podSelector: {}         # selects ALL pods in the namespace
  policyTypes:
    - Ingress
  # no ingress rules = deny all
```

```yaml
# Deny all egress from all pods in namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-egress
  namespace: hotel
spec:
  podSelector: {}
  policyTypes:
    - Egress
  # no egress rules = deny all
```

### Selector Types in NetworkPolicies

| Selector | Field | Selects |
|----------|-------|---------|
| Pod selector | `podSelector` | Pods in the **same namespace** matching labels |
| Namespace selector | `namespaceSelector` | All Pods in matching **namespaces** |
| Pod + Namespace selector | Both in one `from` entry | Pods matching both conditions (AND logic) |
| IP block | `ipBlock` | CIDR ranges (typically for external traffic) |

### A Real NetworkPolicy — Allow Specific Ingress

Allow only Pods labeled `role: frontend` in the `web` namespace to reach Pods labeled `role: db` in the `database` namespace, on port 5432:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-db
  namespace: database
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
    - Ingress
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: web
          podSelector:
            matchLabels:
              role: frontend
      ports:
        - protocol: TCP
          port: 5432
```

> **AND vs OR:** When `namespaceSelector` and `podSelector` appear in the **same** list item (`-`), they are ANDed. When they appear in **separate** list items (`- namespaceSelector: ...` and `- podSelector: ...` as two dashes), they are ORed.

### Allow Egress to DNS (Critical Pattern)

If you deny all egress, Pods can no longer resolve DNS. Always add a DNS egress exception:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns-egress
  namespace: hotel
spec:
  podSelector: {}
  policyTypes:
    - Egress
  egress:
    - ports:
        - protocol: UDP
          port: 53
        - protocol: TCP
          port: 53
```

### CKA Critical: Writing a NetworkPolicy From Scratch

The exam frequently gives you a scenario like: "Allow pods with label `app=api` to receive traffic from pods with label `app=web` on port 8080." Know this skeleton:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: <name>
  namespace: <namespace>
spec:
  podSelector:               # who this policy APPLIES TO (the target)
    matchLabels:
      app: api
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:       # who is ALLOWED IN
            matchLabels:
              app: web
      ports:
        - protocol: TCP
          port: 8080
```

> 🎯 **Exam tip:** `podSelector` in `spec` = the target Pods this policy protects. `podSelector` in `from`/`to` = the source/destination Pods being permitted. Don't confuse the two.

---

## 9. Quick Reference: `kubectl expose`

```bash
# Expose a Deployment as ClusterIP on port 80
kubectl expose deployment hotel-app --port=80 --target-port=8080

# Expose as NodePort
kubectl expose deployment hotel-app --type=NodePort --port=80

# Expose as LoadBalancer
kubectl expose deployment hotel-app --type=LoadBalancer --port=80

# Expose a specific Pod
kubectl expose pod my-pod --port=8080 --name=my-pod-svc
```

---

## 10. Troubleshooting Services (Exam Workflow)

```bash
# 1. Does the Service exist?
kubectl get svc <name>

# 2. Does it have endpoints?
kubectl get endpoints <name>

# 3. Do the labels match?
kubectl describe svc <name>     # see "Selector:"
kubectl get pods --show-labels  # check actual pod labels

# 4. Test connectivity from inside cluster
kubectl run test --image=busybox --rm -it --restart=Never -- \
  wget -qO- http://<svc-name>.<namespace>.svc.cluster.local

# 5. Check kube-proxy logs
kubectl logs -n kube-system -l k8s-app=kube-proxy
```

---

## Summary

| Concept | One-liner |
|---------|-----------|
| ClusterIP | Stable virtual IP, internal only, default type |
| NodePort | Opens 30000-32767 on every Node |
| LoadBalancer | Cloud LB + NodePort + ClusterIP stacked |
| ExternalName | DNS CNAME alias, no proxying |
| CoreDNS | Cluster DNS server; format is `svc.ns.svc.cluster.local` |
| Ingress | HTTP routing rules; requires IngressController (not in K8s core) |
| Gateway API | Modern successor to Ingress; GatewayClass + Gateway + HTTPRoute; `gateway.networking.k8s.io`; CRDs + controller required |
| NetworkPolicy | Pod-level firewall; CNI must support it; default is allow-all |
| kube-proxy | Programs iptables/IPVS rules on each Node to implement Services |
| EndpointSlices | Lists real Pod IPs behind a Service |

---

## Next Steps

- **Videos.md** — Watch the essential video walkthroughs for this module
- **Quiz.md** — 30 questions covering everything in this module
- **Cheat-Sheet.md** — One-page reference for exam day
- **Module 5: Storage** — PersistentVolumes, PVCs, StorageClasses

---

## Further Reading

- [Kubernetes Services documentation](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Kubernetes Ingress documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/)
- [Gateway API documentation](https://kubernetes.io/docs/concepts/services-networking/gateway/)
- [Gateway API project site](https://gateway-api.sigs.k8s.io/)
- [NetworkPolicies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)
- [CoreDNS in Kubernetes](https://kubernetes.io/docs/tasks/administer-cluster/coredns/)
- [DNS for Services and Pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)
- [EndpointSlices](https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/)
- [CNI specification](https://github.com/containernetworking/cni)
