# 📋 Module 3 Cheat Sheet: Core Services

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 💻 Compute Picker

| Need | Service |
|------|---------|
| Full OS control / legacy | **VM** |
| Auto-scale identical VMs | **VM Scale Set** |
| Web app / API, no OS | **App Service** |
| One container, fast | **ACI** |
| Container orchestration at scale | **AKS** |
| Event-driven serverless code | **Functions** |
| Streamed Windows desktops | **Azure Virtual Desktop** |

---

## 🌐 Networking Quick Map

| Need | Service |
|------|---------|
| Private network in Azure | **Virtual Network (VNet)** |
| Connect 2 VNets | **VNet Peering** |
| On-prem ↔ Azure over internet | **VPN Gateway** |
| On-prem ↔ Azure private circuit | **ExpressRoute** |
| Basic allow/deny rules | **NSG** |
| Managed cloud firewall | **Azure Firewall** |
| Global L7 + WAF + CDN | **Front Door** |
| Regional L7 + WAF | **Application Gateway** |
| L4 (TCP/UDP) | **Load Balancer** |
| DNS-based global routing | **Traffic Manager** |
| Host DNS zones | **Azure DNS** |
| CDN for static content | **Azure CDN** |

### VPN vs ExpressRoute
- **VPN** = over internet, encrypted, cheap, hours to set up
- **ExpressRoute** = private circuit, predictable, expensive, weeks

---

## 💾 Storage

### Four storage services
| Service | What |
|---------|------|
| **Blob** | Object storage (files, images, backups) |
| **Files** | Managed SMB / NFS file share |
| **Queue** | Simple message queue |
| **Table** | Cheap NoSQL key-value |

### Blob access tiers
| Tier | Use | Storage $ | Access $ | Min retention |
|------|-----|-----------|----------|---------------|
| Hot | Daily | High | Low | None |
| Cool | ~30+ days | Mid | Mid | 30d |
| Cold | ~90+ days | Low | High | 90d |
| Archive | Rare/offline | Lowest | Highest (rehydrate!) | 180d |

### Redundancy
| | Copies | Where |
|---|--------|-------|
| **LRS** | 3 | 1 datacenter |
| **ZRS** | 3 | 3 AZs in 1 region |
| **GRS** | 6 | 3 primary + 3 paired region |
| **GZRS** | 6 | 3 AZs + 3 paired region (best) |
| RA-* | + read access | Secondary readable |

---

## 🗄️ Databases

| Service | Use |
|---------|-----|
| **Azure SQL Database** | Cloud-native managed SQL (PaaS) |
| **Azure SQL Managed Instance** | Lift-and-shift SQL Server (PaaS, near-100% compat) |
| **SQL Server on VM** | Total SQL Server control (IaaS) |
| **Cosmos DB** | Global NoSQL multi-model, multi-region writes, <10ms |
| **Azure DB for MySQL Flexible Server** | Managed MySQL |
| **Azure DB for PostgreSQL Flexible Server** | Managed PostgreSQL |
| **Azure Cache for Redis** | In-memory cache |

🎯 Cosmos DB APIs: NoSQL (native), MongoDB, Cassandra, Gremlin, Table.

---

## 🧭 Service Decoder (one-liners)

```
"Web app + API, no OS"              → App Service
"Event-driven code"                  → Functions
"Container orchestration"            → AKS
"Single container quickly"           → ACI
"Lift legacy server"                 → VM
"Auto-scale stateless VMs"           → VMSS
"Stream desktops"                    → Azure Virtual Desktop
"Private to-Azure circuit"           → ExpressRoute
"To-Azure over internet"             → VPN Gateway
"Connect VNets"                      → VNet Peering
"Global L7 entry"                    → Front Door
"Regional L7"                        → Application Gateway
"TCP/UDP LB"                         → Load Balancer
"Object storage"                     → Blob
"File share"                         → Azure Files
"Global NoSQL low latency"           → Cosmos DB
"Lift SQL Server"                    → SQL Managed Instance
"Cloud-native SQL"                   → Azure SQL Database
"Massive event ingest (IoT)"         → Event Hubs
"Enterprise messaging"               → Service Bus
"Low-code workflow"                  → Logic Apps
"Event routing"                      → Event Grid
```

---

## 🏆 Exam Power Phrases

**Usually CORRECT:**
- ✅ "App Service for web apps without OS management"
- ✅ "Functions for event-driven"
- ✅ "ExpressRoute for private, predictable hybrid"
- ✅ "Cosmos DB for globally distributed NoSQL"
- ✅ "GZRS for best HA + DR"

**Usually WRONG:**
- ❌ "App Service requires OS patching"
- ❌ "ACI for orchestrating microservices"
- ❌ "Archive blobs are instantly readable"
- ❌ "Cosmos DB for relational SQL workloads"
- ❌ "VPN Gateway is a private circuit"

---

## ⚠️ Anti-Patterns

- ❌ Single VM for spike traffic (use VMSS or App Service)
- ❌ Archive tier for active data
- ❌ Cosmos DB used as a relational DB
- ❌ ACI for production orchestration
- ❌ LRS for production data needing in-region HA

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Six Azure compute services + one pick rule each? ___
2. VPN vs ExpressRoute? ___
3. L4 vs L7 LB Azure names? ___
4. LRS vs ZRS vs GRS vs GZRS in one phrase each? ___
5. Four blob access tiers + which needs rehydration? ___

If you can answer all 5 in under 90 seconds, you own this module. ✅

---

➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md), then move to [Module 4: Identity, Governance & Security](../Module-04-Identity-Governance-Security/Reading.md)
