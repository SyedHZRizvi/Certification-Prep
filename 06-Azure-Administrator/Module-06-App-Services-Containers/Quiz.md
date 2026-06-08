# ✏️ Module 6 Quiz: App Services & Containers

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24 minimum.

---

## Questions

### Q1. The MINIMUM App Service Plan tier that supports deployment slots is: *(Remember)*
A. Free
B. Basic
C. Standard
D. Premium v3

---

### Q2. Zone redundancy for App Service requires: *(Remember)*
A. Free tier
B. Basic
C. Premium v3 (or Isolated v2)
D. Any tier

---

### Q3. An App Service Plan can host: *(Understand)*
A. Exactly one web app
B. Up to 10 web apps regardless of size
C. Multiple web apps that share the plan's compute
D. Only Linux apps

---

### Q4. To deploy a web app inside your VNet with a **private IP for inbound** access, you need: *(Apply)*
A. Standard tier with VNet integration
B. Premium v3 with private endpoint (or Isolated v2 / ASE)
C. Free tier
D. Any Linux plan

---

### Q5. **Order these steps** to release new code with zero downtime via slot swap. *(Create)*

1. Create a Standard or higher App Service Plan
2. Create the web app
3. Create a `staging` deployment slot
4. Deploy code to `staging` and warm it up
5. Swap `staging` → `production`

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 3 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 1 → 2 → 4 → 3 → 5

---

### Q6. Marking an app setting as a "slot setting" means: *(Understand)*
A. It moves with the slot during a swap
B. It STAYS with the slot during a swap (doesn't swap)
C. It is encrypted automatically
D. It is read-only

---

### Q7. Scale UP for App Service means: *(Remember)*
A. Add more instances
B. Move to a larger plan SKU (more CPU/RAM)
C. Spread across more regions
D. Reduce instance count

---

### Q8. ACI is the BEST fit for: *(Apply)*
A. A WordPress site with daily traffic spikes
B. A 5-minute container that processes a queue message and exits
C. A 24/7 microservice with strict SLA
D. A stateful PostgreSQL DB

---

### Q9. Yes/No, ACI. *(Evaluate)*

**S1:** A container group can have multiple containers sharing one IP and storage.
**S2:** ACI supports deployment into a delegated subnet of a VNet.
**S3:** ACI replaces AKS for production microservices.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q10. Microsoft charges you for the AKS: *(Remember)*
A. Control plane only
B. Nodes (and add-ons), but not the standard control plane
C. Both, node + control plane per hour
D. Pods individually

---

### Q11. In AKS, the system node pool is for: *(Understand)*
A. Production workloads
B. CoreDNS, kube-proxy, and other cluster-critical pods
C. Spot interruption testing
D. Karpenter only

---

### Q12. The Horizontal Pod Autoscaler (HPA) scales: *(Remember)*
A. Nodes in a pool
B. The number of pod replicas based on CPU/memory or custom metrics
C. The control plane size
D. Disk size

---

### Q13. The cluster autoscaler scales: *(Remember)*
A. Pods
B. The number of nodes in a node pool based on pending-pod pressure
C. Container groups
D. App Service plans

---

### Q14. Yes/No, AKS networking. *(Evaluate)*

**S1:** With Azure CNI, pods get IPs directly from the VNet.
**S2:** Azure CNI Overlay assigns pod IPs from an overlay CIDR, conserving VNet IPs.
**S3:** Kubenet is the recommended modern default.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q15. To do layer-7 ingress with WAF for AKS, the BEST option is: *(Apply)*
A. Standard Load Balancer service
B. Application Gateway (AGIC) or Application Gateway for Containers
C. Azure Front Door only
D. NSG on the node pool

---

### Q16. To mount the SAME persistent volume to multiple AKS pods (RWX), use: *(Apply)*
A. Azure Disk CSI driver
B. Azure File CSI driver
C. Ephemeral OS disk
D. Local emptyDir

---

### Q17. A long-running 24/7 .NET 8 web app with custom domain + SSL is BEST hosted on: *(Analyze)*
A. ACI
B. App Service (Standard or Premium v3)
C. AKS (overkill for a single app)
D. Azure Functions

---

### Q18. Auto-swap for slots is: *(Understand)*
A. A toggle that automatically swaps a slot to production after deployment
B. A backup feature
C. Only available in AKS
D. The same as scale out

---

### Q19. To run a Python web app behind an Azure-private endpoint AND integrate outbound calls to a VNet-only Storage Account: *(Analyze)*
A. Basic plan
B. Standard plan with VNet integration (outbound) + Premium v3 plan with private endpoint (inbound)
C. Free tier
D. Use ACI

---

### Q20. Yes/No, App Service tiers. *(Understand)*

**S1:** Free tier supports custom domain.
**S2:** Standard tier supports auto-scale and 5 slots.
**S3:** Isolated v2 runs in an App Service Environment (ASE).

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

---

### Q21. To bind a custom domain `www.contoso.com` with HTTPS, on App Service you need: *(Apply)*
A. Basic+ plan, custom domain validation, and an SSL/TLS binding (App Service Managed Cert or BYO)
B. Free tier
C. AKS only
D. WAF policy

---

### Q22. ACI restart policies are: *(Remember)*
A. Always, OnFailure, Never
B. None, Always
C. OnSuccess, Always
D. Restart-allowed, restart-denied

---

### Q23. Which is TRUE about AKS upgrades? *(Understand)*
A. Microsoft auto-upgrades on a fixed schedule with no override
B. You choose the Kubernetes version and can upgrade via the portal/CLI (`az aks upgrade`)
C. AKS does not support cluster upgrades
D. Each upgrade requires a new cluster

---

### Q24. Which of the following is a valid AKS service ingress option? *(Understand)*
A. Standard Load Balancer (Service type LoadBalancer)
B. Application Gateway Ingress Controller (AGIC)
C. NGINX or Istio
D. All of the above

---

## 🎯 Answers + Explanations

### Q1: **C. Standard**
Slots start at Standard. Free/Shared/Basic don't have slots.

### Q2: **C. Premium v3 (or Isolated v2)**
Zone redundancy is a Premium v3 / Isolated v2 feature.

### Q3: **C. Multiple web apps that share the plan's compute**
A plan = compute. Many apps can share it (they share noisy neighbors too, be careful).

### Q4: **B. Premium v3 with private endpoint (or Isolated v2 / ASE)**
Private endpoint (inbound private IP) starts at Premium v3.

### Q5: **A. 1 → 2 → 3 → 4 → 5**
Plan → app → slot → deploy → swap. The canonical zero-downtime workflow.

### Q6: **B. It STAYS with the slot during a swap (doesn't swap)**
Slot settings are sticky to their slot.

### Q7: **B. Move to a larger plan SKU (more CPU/RAM)**
Scale **up** = vertical. Scale **out** = horizontal.

### Q8: **B. A 5-minute container that processes a queue message and exits**
ACI is for short-lived, event-driven containers.

### Q9: **A. Yes / Yes / No**
Container groups exist. VNet integration is supported. ACI is NOT a replacement for AKS in production.

### Q10: **B. Nodes (and add-ons), but not the standard control plane**
The standard SLA control plane is free. (Uptime SLA tier adds a small cost for 99.95%.)

### Q11: **B. CoreDNS, kube-proxy, and other cluster-critical pods**
System pool is mandatory. User pools host your apps.

### Q12: **B. The number of pod replicas based on CPU/memory or custom metrics**
HPA = pods.

### Q13: **B. The number of nodes in a node pool based on pending-pod pressure**
Cluster autoscaler = nodes.

### Q14: **A. Yes / Yes / No**
Kubenet is legacy. Azure CNI / CNI Overlay are modern defaults.

### Q15: **B. Application Gateway (AGIC) or Application Gateway for Containers**
Layer-7 + WAF + ingress integration. Standard LB is L4 only.

### Q16: **B. Azure File CSI driver**
Azure Files = SMB/NFS = RWX possible. Azure Disk is RWO.

### Q17: **B. App Service (Standard or Premium v3)**
The textbook App Service workload.

### Q18: **A. A toggle that automatically swaps a slot to production after deployment**
Enable on the source slot for hands-off deploys.

### Q19: **B. Standard plan with VNet integration (outbound) + Premium v3 plan with private endpoint (inbound)**
Be careful: Standard CAN do VNet integration (outbound). Private endpoint (inbound) needs Premium v3. So both tiers come into play in this scenario, but the right pick today is Premium v3 with both features enabled.

### Q20: **A. No / Yes / Yes**
Free tier does NOT support custom domain. Standard supports auto-scale + 5 slots. Isolated v2 = ASE.

### Q21: **A. Basic+ plan, custom domain validation, and an SSL/TLS binding**
Free/Shared cannot have custom domain. Basic+ is the minimum tier.

### Q22: **A. Always, OnFailure, Never**
The three restart policies for ACI.

### Q23: **B. You choose the Kubernetes version and can upgrade via the portal/CLI**
`az aks upgrade --kubernetes-version 1.30.5`. AKS supports surge upgrades.

### Q24: **D. All of the above**
LB Service, AGIC/AGFC, and 3rd-party ingress controllers (NGINX, Istio) all work.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Compute domain mastered.
- 20–22/24 → ✅ Strong.
- 16–19/24 → ⚠️ Re-read App Service tiers + AKS sections.
- <16/24 → 🔁 Re-read the module.

---

## 🃏 Add To Your Flashcards

- App Service tier matrix (slots / VNet integration / private endpoint / zone redundant)
- Slot setting = sticky
- Scale up vs scale out
- AKS control plane = free (standard tier)
- HPA = pods, cluster autoscaler = nodes
- Azure CNI vs Overlay vs Kubenet
- ACI = short-lived, queue-driven, no orchestration
- AGIC / AGFC for AKS L7 ingress with WAF

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7](../Module-07-Virtual-Networks/Reading.md)
