# 📋 Module 6 Cheat Sheet: App Services & Containers

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎚️ App Service Plan Tier Matrix

| Feature | Free | Basic | **Standard** | **Premium v3** | Isolated v2 |
|---------|------|-------|--------------|----------------|-------------|
| Custom domain | ❌ | ✅ | ✅ | ✅ | ✅ |
| SSL/TLS binding | ❌ | ✅ | ✅ | ✅ | ✅ |
| Auto-scale | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Deployment slots** | ❌ | ❌ | ✅ (5) | ✅ (20) | ✅ |
| Daily backup | ❌ | ❌ | ✅ | ✅ | ✅ |
| VNet integration (outbound) | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Private endpoint (inbound)** | ❌ | ❌ | ❌ | ✅ | ✅ |
| Zone-redundant | ❌ | ❌ | ❌ | ✅ | ✅ |
| Inside ASE | ❌ | ❌ | ❌ | ❌ | ✅ |

🧠 **Slots → Standard. Private endpoint / zone-redundant → Premium v3.**

---

## 🔁 Slot Swap Rules

```
[ staging slot ]  ──── swap ────►  [ production slot ]
```

- Swap is **warm**: instances are warmed in staging, then routing flips
- Default: app settings move with the slot
- Mark as **"Slot setting"** to KEEP a setting with its slot (e.g. staging DB)
- Roll back = swap again

---

## 🧭 Compute Decision

```
                    Need orchestration / K8s API?
                            │
              ┌─── YES ────►  AKS
              │
              └─── NO  ────►  Short-lived container?
                                │
                       ┌── YES ► ACI
                       │
                       └── NO ─► App Service
                                  (Linux or Windows container or code)
```

---

## 📦 ACI Quick Hit

- Container group = 1+ containers sharing IP/storage
- Restart policies: `Always`, `OnFailure`, `Never`
- VNet integration: delegated subnet
- Best for: nightly batch, queue-triggered, build agents

---

## ☸️ AKS Quick Hit

| Layer | Notes |
|-------|-------|
| Control plane | Free (Standard tier) / paid (Uptime SLA tier) |
| System node pool | Required, runs CoreDNS etc. |
| User node pool | Your apps; can autoscale, Spot, Windows |
| HPA | Scales pod replicas |
| Cluster autoscaler | Scales nodes per pool |

Networking modes (default-ish → exotic):
**Azure CNI Overlay** (modern default) → Azure CNI → CNI Powered by Cilium → Kubenet (legacy)

Ingress: LB Service (L4) · **AGIC / App Gateway for Containers** (L7 + WAF) · NGINX · Istio

Storage CSI: **AzureDisk (RWO)** · **AzureFile (RWX)** · Blob CSI

---

## 🏆 Exam Power Phrases

Often **correct**:

- ✅ "Use deployment slots with Standard or higher"
- ✅ "Premium v3 plan for private endpoint + zone redundancy"
- ✅ "AGIC / AGFC for L7 ingress with WAF"
- ✅ "Cluster autoscaler + HPA together"
- ✅ "Mark connection strings as Slot setting"

Often **wrong**:

- ❌ "Slots on Basic tier"
- ❌ "ACI for long-running stateful workload"
- ❌ "Kubenet for new clusters"
- ❌ "Azure Disk for multi-pod read/write"
- ❌ "AKS control plane has a cost in standard tier"

---

## ⚠️ Anti-Patterns

- ❌ Multiple noisy-neighbor production apps on one Basic plan
- ❌ Swapping without warming staging
- ❌ AKS for a single web app
- ❌ Public-facing AKS without ingress + WAF
- ❌ Connection strings in code instead of app settings

---

## ✏️ Quick Self-Check

1. Lowest tier for slots? ___
2. Tier needed for private endpoint on App Service? ___
3. ACI restart policies? ___
4. HPA vs cluster autoscaler, which scales what? ___
5. RWX-capable AKS storage driver? ___

---

➡️ [Module 7: Virtual Networks](../Module-07-Virtual-Networks/Reading.md)
