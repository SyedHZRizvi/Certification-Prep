# Module 4 Quiz — Services & Networking

**26 questions | CKA Domain: Services & Networking (20%)**

---

### Q1. [Remember]
Which Service type exposes a Deployment exclusively within the cluster and is the **default** type when `type:` is omitted from the manifest?

A. NodePort  
B. LoadBalancer  
C. ClusterIP  
D. ExternalName

---

### Q2. [Remember]
What is the valid port range for a NodePort Service?

A. 1024–65535  
B. 8000–9000  
C. 30000–32767  
D. 31000–31999

---

### Q3. [Understand]
A developer creates a Service of type `LoadBalancer` on a bare-metal cluster that has no cloud provider integration. What will `kubectl get svc` show in the `EXTERNAL-IP` column?

A. `127.0.0.1`  
B. `<none>`  
C. `<pending>`  
D. The Node's IP address

---

### Q4. [Understand]
An `ExternalName` Service named `legacy-db` is created in namespace `payments` with `externalName: db.corp.internal`. What does a DNS query for `legacy-db.payments.svc.cluster.local` return?

A. The ClusterIP of the Service  
B. A CNAME record pointing to `db.corp.internal`  
C. An A record for the external IP of `db.corp.internal`  
D. An error — ExternalName Services are not resolvable via DNS

---

### Q5. [Remember]
What component runs on every Node and programs iptables/IPVS rules to implement Service routing?

A. CoreDNS  
B. kube-scheduler  
C. kube-proxy  
D. kubelet

---

### Q6. [Understand]
A Service shows `Endpoints: <none>` when described. What is the most likely cause?

A. The Service has no `port` field defined  
B. The `selector` labels on the Service do not match any running Pod labels  
C. CoreDNS is not running  
D. kube-proxy is in IPVS mode instead of iptables mode

---

### Q7. [Apply]
You have a Deployment named `api` with Pods labeled `app=api` running on port 8080 in namespace `backend`. Which command creates a ClusterIP Service named `api-svc` on port 80 pointing to port 8080?

A. `kubectl expose deployment api --port=8080 --target-port=80 --name=api-svc`  
B. `kubectl expose deployment api --port=80 --target-port=8080 --name=api-svc`  
C. `kubectl create service clusterip api --tcp=80:8080`  
D. Both B and C are correct

---

### Q8. [Understand]
A Pod in namespace `web` wants to reach a Service named `cart` in namespace `shop`. Which DNS name resolves correctly?

A. `cart.svc.cluster.local`  
B. `cart`  
C. `cart.shop.svc.cluster.local`  
D. `shop.cart.cluster.local`

---

### Q9. [Remember]
CoreDNS replaces which earlier Kubernetes DNS solution?

A. etcd-dns  
B. kube-dns (as the component name on the Service)  
C. bind9  
D. dnsmasq

---

### Q10. [Understand]
Which statement about Ingress is correct?

A. Kubernetes ships with a built-in nginx IngressController enabled by default  
B. An Ingress object alone is sufficient to route external HTTP traffic  
C. Ingress requires a separately installed IngressController to function  
D. Ingress only supports path-based routing, not host-based routing

---

### Q11. [Apply]
You create the following Ingress rule. Traffic to `app.example.com/api` should go to Service `api-svc` on port 80. Which `pathType` value makes the path match any URL beginning with `/api`?

A. `Exact`  
B. `Prefix`  
C. `Glob`  
D. `StartsWith`

---

### Q12. [Understand]
What does the Kubernetes "flat network" contract guarantee?

A. All Pods share a single IP address via NAT  
B. Pods can only communicate with other Pods on the same Node  
C. Every Pod can communicate with every other Pod without NAT, using unique IPs  
D. Pod IPs are stable across restarts

---

### Q13. [Remember]
Which CNI plugin uses eBPF for high-performance networking and supports Layer 7 NetworkPolicies?

A. Flannel  
B. WeaveNet  
C. Calico  
D. Cilium

---

### Q14. [Understand]
Which CNI plugin provides a simple VXLAN overlay but does **not** support NetworkPolicies by itself?

A. Calico  
B. Cilium  
C. Flannel  
D. Multus

---

### Q15. [Apply]
You apply this NetworkPolicy to namespace `prod`:

```yaml
spec:
  podSelector: {}
  policyTypes:
    - Ingress
```

What is the effect?

A. All ingress traffic to all Pods in `prod` is allowed  
B. All ingress traffic to all Pods in `prod` is denied  
C. Only traffic from the same namespace is allowed  
D. The policy has no effect because `podSelector: {}` is invalid

---

### Q16. [Analyze]
A NetworkPolicy `from` block contains:

```yaml
from:
  - namespaceSelector:
      matchLabels:
        env: staging
    podSelector:
      matchLabels:
        role: api
```

Which traffic is allowed?

A. Pods with `role: api` in ANY namespace, OR all pods in namespaces labeled `env: staging`  
B. Pods with `role: api` that are in a namespace labeled `env: staging` (AND logic)  
C. All pods in namespaces labeled `env: staging`, regardless of pod labels  
D. No traffic — this YAML is invalid

---

### Q17. [Apply]
You need to allow Pods labeled `app=worker` to make DNS lookups. Your cluster denies all egress by default. Which port(s) must be opened in the egress rules?

A. TCP 443 only  
B. UDP 53 only  
C. UDP 53 and TCP 53  
D. TCP 8053

---

### Q18. [Apply]
What is the full DNS FQDN for a Service named `checkout` in namespace `ecommerce` on a cluster with domain `cluster.local`?

A. `checkout.cluster.local`  
B. `checkout.ecommerce.cluster.local`  
C. `checkout.ecommerce.svc.cluster.local`  
D. `ecommerce.checkout.svc.cluster.local`

---

### Q19. [Remember]
EndpointSlices shard endpoints into chunks of at most how many entries by default?

A. 50  
B. 100  
C. 250  
D. 500

---

### Q20. [Apply]
A Service uses `selector: {app: web}` but the running Pods have label `app: Web` (capital W). What will `kubectl get endpoints <svc-name>` show?

A. The Pod IPs, because Kubernetes selectors are case-insensitive  
B. `<none>`, because label selectors are case-sensitive  
C. An error from the API server  
D. The Pod IPs only if `--case-insensitive` is set on the Service

---

### Q21. [Understand]
A LoadBalancer Service on a cloud cluster creates which of the following in the underlying cloud provider?

A. A DNS record pointing to the ClusterIP  
B. An external load balancer with a public IP that forwards to NodePort on each Node  
C. A VPN tunnel to each Pod's IP directly  
D. A firewall rule blocking all inbound traffic to the Nodes

---

### Q22. [Analyze]
You have two `from` entries in a NetworkPolicy as **separate** list items (each with its own leading dash):

```yaml
from:
  - namespaceSelector:
      matchLabels:
        env: prod
  - podSelector:
      matchLabels:
        role: monitor
```

Which traffic is allowed?

A. Only pods with `role: monitor` that are also in namespaces labeled `env: prod`  
B. All pods in namespaces labeled `env: prod`, OR pods labeled `role: monitor` in any namespace  
C. No traffic — multiple `from` entries are not allowed  
D. All traffic from the same namespace

---

### Q23. [Apply]
Which kubectl command lets you test connectivity to a Service named `payment-svc` in namespace `shop` from a temporary Pod, then immediately deletes the Pod?

A. `kubectl exec -it pod -- curl http://payment-svc.shop.svc.cluster.local`  
B. `kubectl run test --image=busybox --rm -it --restart=Never -- wget -qO- http://payment-svc.shop.svc.cluster.local`  
C. `kubectl port-forward svc/payment-svc 8080:80 -n shop`  
D. `kubectl describe svc payment-svc -n shop`

---

### Q24. [Understand]
What is the `ingressClassName` field on an Ingress object used for?

A. It specifies the DNS class for the Ingress hostname  
B. It selects which IngressController should handle this Ingress when multiple are installed  
C. It sets the TLS version for HTTPS termination  
D. It has no effect and is deprecated in Kubernetes 1.18+

---

### Q25. [Evaluate]
A security team requires that only Pods in namespace `monitoring` can scrape metrics from Pods labeled `app=api` in namespace `services` on port 9090. No other ingress should be allowed to those Pods. Which NetworkPolicy approach is correct?

A. Apply a policy in namespace `monitoring` with `podSelector: {}` and egress to `services`  
B. Apply a policy in namespace `services` selecting `app=api` Pods, allowing ingress from namespaceSelector matching `monitoring`, on port 9090  
C. Apply a policy in namespace `services` selecting all Pods, allowing all ingress from namespace `monitoring`  
D. Use an Ingress object with host-based routing to restrict traffic to port 9090

---

### Q26. [Evaluate]
A StatefulSet named `kafka` in namespace `data` has three Pods (`kafka-0`, `kafka-1`, `kafka-2`) and a headless Service named `kafka`. What is the DNS name for the second Pod (`kafka-1`)?

A. `kafka-1.data.svc.cluster.local`  
B. `kafka-1.kafka.data.svc.cluster.local`  
C. `kafka.data.svc.cluster.local`  
D. `kafka-1.cluster.local`

---

## Answers + Explanations

**Q1 — C. ClusterIP**  
ClusterIP is the default Service type and provides an internal-only virtual IP. If you omit `type:` from the manifest, the API server defaults to ClusterIP.

**Q2 — C. 30000–32767**  
This is the mandatory range. Ports below 30000 or above 32767 are rejected by the API server. The specific value is configurable with `--service-node-port-range` on the API server but the default is 30000-32767 and is what the CKA tests.

**Q3 — C. `<pending>`**  
Without a cloud controller manager to provision a load balancer, the `EXTERNAL-IP` field remains `<pending>` indefinitely. It does not fall back to the Node IP or `<none>`.

**Q4 — B. A CNAME record pointing to `db.corp.internal`**  
ExternalName Services work purely at the DNS layer. CoreDNS returns a CNAME to the `externalName` value. No proxying or load balancing occurs. No ClusterIP is allocated.

**Q5 — C. kube-proxy**  
kube-proxy runs as a DaemonSet on every Node and programs iptables/IPVS rules so that traffic destined for a ClusterIP is DNAT'd to a real Pod IP.

**Q6 — B. The selector labels do not match any running Pod labels**  
`<none>` endpoints is almost always a label mismatch. Check `kubectl describe svc` for the Selector and `kubectl get pods --show-labels` for actual pod labels. Case matters.

**Q7 — D. Both B and C are correct**  
`kubectl expose deployment api --port=80 --target-port=8080 --name=api-svc` (B) and `kubectl create service clusterip api --tcp=80:8080` (C, then rename) both achieve the goal. Note: in B, `--port` is the Service port and `--target-port` is the Pod port — not the reverse as in A.

**Q8 — C. `cart.shop.svc.cluster.local`**  
Cross-namespace DNS requires at minimum `<service>.<namespace>`. The full FQDN is `<service>.<namespace>.svc.cluster.local`. Simply using `cart` would only resolve within the same namespace.

**Q9 — B. kube-dns**  
CoreDNS replaced kube-dns as the cluster DNS implementation, but for backward compatibility the Service is still named `kube-dns` in the `kube-system` namespace. The component label changed to `k8s-app=kube-dns`.

**Q10 — C. Ingress requires a separately installed IngressController**  
This is one of the most important facts for the CKA. Kubernetes core does not include an IngressController. Nginx, Traefik, HAProxy, and others are third-party controllers that must be installed separately. The Ingress object is just configuration without one.

**Q11 — B. `Prefix`**  
`Prefix` matches any URL that begins with the specified path. `Exact` requires a full URL match. `Glob` and `StartsWith` are not valid Kubernetes `pathType` values.

**Q12 — C. Every Pod can communicate with every other Pod without NAT, using unique IPs**  
The three Kubernetes networking requirements: unique Pod IPs, pod-to-pod communication without NAT, and node-to-pod communication without NAT. Pod IPs are NOT stable across restarts — that's a common misconception.

**Q13 — D. Cilium**  
Cilium is the eBPF-based CNI known for high performance, deep observability, and support for Layer 7 NetworkPolicies. Calico uses BGP. Flannel uses VXLAN. WeaveNet is largely deprecated.

**Q14 — C. Flannel**  
Flannel provides a simple VXLAN overlay network but does not implement NetworkPolicies natively. Many clusters pair Flannel (for routing) with Calico (for policies), or simply switch to Calico/Cilium for both.

**Q15 — B. All ingress traffic to all Pods in `prod` is denied**  
`podSelector: {}` selects ALL Pods in the namespace. `policyTypes: [Ingress]` with no `ingress:` rules means deny all ingress. This is the standard default-deny pattern.

**Q16 — B. Pods with `role: api` that are in a namespace labeled `env: staging` (AND logic)**  
When `namespaceSelector` and `podSelector` appear in the **same** list item (same dash), they are ANDed. Both conditions must be true simultaneously. Separate dashes would create OR logic.

**Q17 — C. UDP 53 and TCP 53**  
DNS uses both UDP (primary) and TCP (for large responses and zone transfers). Opening only UDP 53 can cause intermittent failures. Always open both protocols for a complete DNS egress rule.

**Q18 — C. `checkout.ecommerce.svc.cluster.local`**  
The format is `<service-name>.<namespace>.svc.<cluster-domain>`. The `svc` segment is mandatory and distinguishes Service DNS from Pod DNS.

**Q19 — B. 100**  
EndpointSlices default to a maximum of 100 endpoints per slice. When a Service has more than 100 matching Pods, multiple slices are created. This improves performance compared to a single monolithic Endpoints object.

**Q20 — B. `<none>`, because label selectors are case-sensitive**  
Kubernetes label selectors perform exact string matching. `app: web` and `app: Web` are different values. This is a common real-world debugging trap. Always check label casing.

**Q21 — B. An external load balancer with a public IP that forwards to NodePort on each Node**  
LoadBalancer is additive: it creates a ClusterIP, then a NodePort on all Nodes, then asks the cloud controller manager to provision an external load balancer that targets those NodePorts. Traffic flows: External LB → NodePort → ClusterIP → Pod.

**Q22 — B. All pods in namespaces labeled `env: prod`, OR pods labeled `role: monitor` in any namespace**  
Separate list items (each with its own `-`) use OR logic. A source matches if it satisfies ANY of the entries. This is the counterpart to Q16's AND logic — the distinction is purely structural in the YAML.

**Q23 — B. `kubectl run test --image=busybox --rm -it --restart=Never -- wget -qO- http://payment-svc.shop.svc.cluster.local`**  
The `--rm` flag deletes the Pod after it exits, `--restart=Never` ensures it is a one-shot Pod, and `wget -qO-` prints the response to stdout. This is the standard CKA pattern for ad-hoc connectivity testing.

**Q24 — B. It selects which IngressController should handle this Ingress**  
When multiple IngressControllers are installed (e.g., nginx and Traefik), `ingressClassName` routes the Ingress object to the correct controller. Without it, behavior depends on the default IngressClass configured in the cluster.

**Q25 — B. Apply a policy in namespace `services` selecting `app=api` Pods, allowing ingress from namespaceSelector matching `monitoring`, on port 9090**  
NetworkPolicies are applied in the namespace of the target Pods (not the source). The policy lives in `services`, selects the `app=api` Pods, and specifies allowed inbound sources. Option A is an egress policy on the wrong side.

**Q26 — B. `kafka-1.kafka.data.svc.cluster.local`**  
StatefulSet Pods get stable DNS via the headless Service. The format is `<pod-name>.<service-name>.<namespace>.svc.<cluster-domain>`. This is what enables stable addressing for distributed systems like Kafka, Zookeeper, and etcd.
