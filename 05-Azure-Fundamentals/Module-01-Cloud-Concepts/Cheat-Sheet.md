# 📋 Module 1 Cheat Sheet: Cloud Concepts

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 💰 CapEx vs OpEx

| | CapEx | OpEx |
|---|---|---|
| What | Buy an asset upfront | Pay as you go |
| Example | $8K server | Azure bill |
| Cloud? | ❌ | ✅ |

**Trap:** Reservations = still **OpEx** (paid over time, no asset ownership).

---

## 🍱 IaaS / PaaS / SaaS

| Model | You manage | Azure example |
|-------|------------|----------------|
| **IaaS** | OS + up | Azure VM, VM Scale Sets |
| **PaaS** | Code + data | App Service, Azure SQL DB, AKS, Functions |
| **SaaS** | Users + data | Microsoft 365, Dynamics 365 |

🧠 Memory: **I**aaS → **I** do a lot. **S**aaS → **S**omeone else does it.

---

## 🏢 Deployment Models

| Model | Owner | Use case |
|-------|-------|----------|
| Public | Microsoft | Most workloads |
| Private | Single org | Strict data residency / regulations |
| Hybrid | Public + Private connected | Lift & shift, bursting, identity bridge |
| Multi-cloud | Multiple public clouds | Best-of-breed, avoid lock-in |

---

## 📈 Scaling

```
Vertical (UP)  =  bigger VM   (D2s → D8s)
Horizontal (OUT) = more VMs   ([VM][VM][VM][VM])
```

- Autoscale = automatic, metric-driven (preferred)
- Elasticity = scale automatically with real-time demand
- VM Scale Sets, App Service auto-scale = horizontal

---

## 🛡️ HA vs DR vs FT

| Term | Definition |
|------|------------|
| **HA** | Stays up when component fails (in-region) |
| **DR** | Recover from major event (region failure) |
| **Fault Tolerance** | Zero downtime during failure |
| **Business Continuity** | Whole-organization resilience |

---

## 🤝 Shared Responsibility — ALWAYS Customer

1. **Data**
2. **Endpoints** (laptops, phones)
3. **Accounts / Identity**
4. **Access management**

ALWAYS Microsoft: physical hardware, physical datacenter, physical network.

| Layer | IaaS | PaaS | SaaS |
|-------|------|------|------|
| OS | Customer | MS | MS |
| Runtime | Customer | MS | MS |
| App | Customer | Customer | MS |
| Data | Customer | Customer | Customer |

---

## 💸 Pricing Quick Hits

| Option | What | When |
|--------|------|------|
| Pay-As-You-Go | Default, no commit | Dev/test, spiky |
| Reservation | 1 or 3 year commit, up to 72% off | Steady prod workloads |
| Spot VM | Up to 90% off, evictable | Batch, render, dev |
| Hybrid Benefit | Reuse on-prem Win/SQL licenses | Existing licensed orgs |

**Ingress (in) = free. Egress (out) = costs money.**

---

## ☁️ The 6 Cloud Benefits

1. **High Availability** — stays up
2. **Scalability** — grows with demand
3. **Reliability** — recovers from failure
4. **Predictability** — performance + cost forecastable
5. **Security** — provider invests at massive scale
6. **Governance** + **Manageability** — control at scale

---

## 🏆 Exam Power Phrases

**Usually CORRECT in answers:**
- ✅ "Pay only for what you use"
- ✅ "Automatically scale based on demand"
- ✅ "Shared responsibility"
- ✅ "OpEx model"
- ✅ "Microsoft Entra ID" (NOT "Azure AD")

**Usually WRONG:**
- ❌ "Buy more servers"
- ❌ "Microsoft is fully responsible for data"
- ❌ "Reservations are CapEx"
- ❌ "Cloud is always cheaper"
- ❌ "Spot VMs for production databases"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Running spot VMs for mission-critical DB
- ❌ Treating SaaS as "no responsibility for me"
- ❌ Lifting and shifting without re-architecting (and then complaining about cost)
- ❌ Putting regulated data in public cloud without proper controls
- ❌ Calling Microsoft Entra ID "Azure AD" on the exam

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. CapEx vs OpEx in one sentence? ___
2. Three things customers ALWAYS manage (shared responsibility)? ___
3. Difference between scale up and scale out? ___
4. HA vs DR? ___
5. New name for Azure AD? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Azure Architecture](../Module-02-Azure-Architecture/Reading.md)
