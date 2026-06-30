# 📋 Module 5 Cheat Sheet: Cost Management & SLAs

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛠️ Cost Tool Triad

| Tool | When | Purpose |
|------|------|---------|
| **Pricing Calculator** | BEFORE deploy | Estimate Azure-only resource cost |
| **TCO Calculator** | BEFORE migrate | Compare on-prem vs Azure |
| **Cost Management** | AFTER deploy | Analyze, forecast, budget actual spend |

---

## 💸 Cost Factors

- **Region** (Brazil/AU pricier; US/EU cheaper)
- **Resource size / SKU**
- **OS** (Linux < Windows; Hybrid Benefit reduces)
- **Storage tier** (Hot/Cool/Cold/Archive)
- **Bandwidth**, **ingress = FREE, egress = $$$**
- **Pricing model** (PAYG / Reservation / Spot)
- **Subscription type** (EA / MCA / PAYG / Sponsorship)

---

## 💰 Pricing Models

| Model | Commit | Discount | When |
|-------|--------|----------|------|
| PAYG | None | Baseline | Dev/test, spiky |
| **Reservation** | 1 or 3 yr (specific SKU) | Up to 72% | Steady prod |
| **Savings Plan** | 1 or 3 yr hourly compute $ | Up to 65% | Flexible across families |
| **Spot** | None (evictable) | Up to 90% | Batch, dev, fault-tolerant |
| **Hybrid Benefit** | Bring own license | Up to 85% (VM) | Existing Win/SQL SA orgs |
| **Dev/Test** | MSDN tied | Reduced | Non-prod |

⚠️ All of these are still **OpEx**.

---

## 📊 Cost Management

- **Cost analysis**, slice by sub/RG/tag/region
- **Budgets**, alert thresholds (do NOT auto-stop)
- **Forecasts**
- **Exports** to storage / Power BI
- **Advisor**, right-size / shut down idle / buy reservations

---

## 🏷️ Tags = Showback

`Environment`, `CostCenter`, `Project`, `Owner` → filter in Cost Management → bill back to departments.

⚠️ Tags don't inherit by default, use Azure Policy.

---

## 📜 SLA Cheats (memorize)

| Tier | Downtime / yr |
|------|---------------|
| 99.9% | 8.76 hrs |
| 99.95% | 4.38 hrs |
| 99.99% | 52.6 min |

### VM SLA pattern
| Deployment | SLA |
|------------|-----|
| Single VM (Premium/Ultra SSD) | 99.9% |
| Availability Set (2+ VMs) | 99.95% |
| Availability Zones (2+ VMs) | 99.99% |

---

## 🧮 Composite SLA

**Formula:** Composite = SLA_A × SLA_B × ...

**Example:** 99.95% × 99.99% = **99.94%**

- Adding **dependencies** → composite DOWN
- Adding **redundancy** within a tier → composite UP

---

## 🌱 Service Lifecycle

| Stage | SLA? | Prod? |
|-------|------|-------|
| Private Preview | ❌ | ❌ |
| Public Preview | ❌ | ❌ |
| GA | ✅ | ✅ |
| Deprecated | ✅ until end | Plan migration |

Free tiers / Free account → **no SLA**.

---

## 🎁 Azure Free Account

- $200 USD credit for 30 days
- 12 months free of select services (e.g., 750 hrs/mo B1S Linux VM)
- Always-free tier (Functions consumption execs, Cosmos DB free tier, F1 App Service, etc.)

---

## 🏆 Exam Power Phrases

**Usually CORRECT:**
- ✅ "Ingress free, egress billed"
- ✅ "Pricing Calculator for new resources"
- ✅ "TCO Calculator for on-prem comparison"
- ✅ "Tags + Cost Management for showback"
- ✅ "AZs for 99.99% VM SLA"
- ✅ "Reservation for steady 3-year workloads"

**Usually WRONG:**
- ❌ "Budget shuts down resources"
- ❌ "Reservations are CapEx"
- ❌ "Preview services have an SLA"
- ❌ "All regions cost the same"
- ❌ "Spot VMs for production databases"

---

## ⚠️ Anti-Patterns

- ❌ Running test workloads at PAYG rates 24/7 (use auto-shutdown)
- ❌ No tags = no chargeback
- ❌ Designing for 99.999% with one VM
- ❌ Multi-region without considering egress costs
- ❌ Preview features in mission-critical paths

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. Three cost tools and their purpose? ___
2. Composite SLA formula? ___
3. Three VM SLA tiers and how to achieve them? ___
4. Reservation vs Savings Plan vs Spot? ___
5. Ingress vs egress billing? ___

---

➡️ [Module 6: Tools & Features](../Module-06-Tools-Features/Reading.md)
