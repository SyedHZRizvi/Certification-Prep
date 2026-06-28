# Module 5: Cost Management & SLAs 💰

> **Why this module matters:** This module covers two topics the exam loves to mix up: **forecasting/managing spend** (pricing tools, cost management, tags, reservations) and **service guarantees** (SLAs, composite SLAs, lifecycle stages). Get the composite SLA (Service Level Agreement) math right and you're winning 3–5 questions for free.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [CapEx vs OpEx](../Module-01-Cloud-Concepts/Reading.md#-capex-vs-opex-you-will-be-tested-on-this), covered in Module 1
> - [HA vs DR vs Fault Tolerance](../Module-01-Cloud-Concepts/Reading.md#-fault-tolerance-disaster-recovery-and-ha--dont-mix-them-up), covered in Module 1
> - [Availability Zones + region pairs](../Module-02-Azure-Architecture/Reading.md#-region-pairs-aka-paired-regions), covered in Module 2
> - [Tags](../Module-04-Identity-Governance-Security/Reading.md#-tags--organize-and-bill) and the basics of Azure Policy from Module 4
> - Comfort with multiplication and basic percentages (the composite SLA math)
>
> If you're hazy on what an AZ is, the composite-SLA math in §"Composite SLA" will be confusing. Pause and re-read Module 2's AZ table.

---

## 🍕 A Story: Anna's First Azure Bill

Anna deployed *PizzaTracker.io* to Azure in a hurry. Month 1 bill: $112. Month 2: $268. Month 3: $1,144. Anna panics.

She digs in. Turns out:

- A developer left a 16-core GPU VM (Virtual Machine) running over the weekend ($340)
- Logs ballooned to 2 TB in Cool storage that should have been Cold ($90)
- Egress to a partner API (Application Programming Interface) hit $200 (each customer ping was 2 KB × 4M requests)
- A test database in Cosmos DB was running at provisioned 10,000 RU/s instead of serverless ($420)

She uses **Cost Management**, **Tags**, the **Pricing Calculator**, and finally moves predictable workloads to **Reservations** for a 60% discount. Month 4: $410. Crisis averted.

This module teaches you to do the same thing.

---

## 🛠️ The Cost Tool Triad

Three Azure tools you'll be tested on knowing the *difference* between:

| Tool | When | What it does |
|------|------|--------------|
| **Pricing Calculator** | BEFORE you deploy | Estimate cost of *Azure-only* resources by configuring them in a UI (User Interface) |
| **TCO Calculator** | BEFORE you migrate | Compare your **on-prem** cost (servers, storage, network, labor, electricity) vs Azure equivalent |
| **Microsoft Cost Management** | AFTER you deploy | Analyze, forecast, budget, and alert on actual Azure spend |

🎯 **Exam pattern:**
- *"Estimate cost of 5 VMs and a SQL DB before deploying"* → **Pricing Calculator**
- *"Compare cost of running our datacenter on-prem vs in Azure"* → **TCO Calculator**
- *"See where we spent $20K last month and forecast next month"* → **Cost Management**

⚠️ **Trap:** Pricing Calculator estimates new resources only. TCO is the on-prem-vs-cloud comparison.

---

## 💸 Factors That Affect Cost

The exam loves these. Know them.

| Factor | Effect on cost |
|--------|----------------|
| **Resource type** | A GPU VM costs vastly more than a B-series VM |
| **Region** | Pricing varies, Brazil/Australia tend to be more expensive than US/Europe |
| **Bandwidth (egress)** | Data leaving Azure (egress) is billed. Ingress is FREE. |
| **Subscription type** | EA, MCA, Pay-As-You-Go, Sponsorship, different rates |
| **Compute size / SKU (Stock Keeping Unit)** | Bigger = more |
| **Storage tier** | Hot > Cool > Cold > Archive (for storage); access cost is inverse |
| **OS / licensing** | Linux VMs cheaper than Windows VMs; Hybrid Benefit reduces this |
| **Reserved vs Pay-As-You-Go** | Reservations save up to 72% |
| **Spot vs regular** | Spot saves up to 90% but is interruptible |

🎯 **Memorize:** **Ingress is FREE. Egress costs money.** Many "lower the bill" scenarios pivot on this.

---

## 💰 Pricing Models (Big Picture)

| Model | Commitment | Discount | When to use |
|-------|-----------|----------|-------------|
| **Pay-As-You-Go (PAYG)** | None | Baseline price | Dev/test, unpredictable workloads |
| **Reservations** | 1 or 3 years | Up to 72% (VMs, SQL, Cosmos, etc.) | Steady, predictable production |
| **Spot VMs** | None, Azure can evict | Up to 90% off | Interruptible, fault-tolerant batch |
| **Savings Plans for Compute** | 1 or 3 year hourly compute commitment | Up to 65% | Flexibility across VM families/regions |
| **Azure Hybrid Benefit** | Use existing on-prem licenses (Windows/SQL Server with Software Assurance) | Up to 85% off VM | Existing licensed orgs |
| **Dev/Test pricing** | Tied to MSDN/Visual Studio subscription | Reduced rates | Non-production environments |
| **Enterprise Agreement (EA) / MCA** | Org-wide volume commitment | Negotiated | Large enterprises |

⚠️ **Trap:** Reservations and Savings Plans are different. Reservations = committed *resource type* (e.g., 5x D4s_v3 in East US for 3 years). Savings Plans = committed *hourly compute spend* across regions/families (more flexible, smaller discount).

---

## 🏷️ Tags + Cost Management, The Showback Pattern

Combine **tags** + **Cost Management** to break down spend by department, project, environment, etc.

```
Resource has tag: CostCenter=1234 → Cost Management filters by tag → Finance sees "Marketing spent $4,200 in March"
```

Common cost tags:

- `Environment` = prod / staging / dev
- `CostCenter` = department code
- `Project` = `pizzatracker-launch`
- `Owner` = team email

🎯 **Exam pattern:** "Show finance how much each department spent in Azure last quarter" → **Tag resources + use Cost Management filtered by tag**.

---

## 📊 Cost Management Capabilities

| Capability | What |
|-----------|------|
| **Cost analysis** | Slice/dice spend by sub, RG, region, tag |
| **Budgets** | Set spend limits and get alerts (NOT hard cutoffs, they only notify) |
| **Forecasts** | Predict future spend based on history |
| **Advisor recommendations** | Right-size, shut down idle, buy Reservations |
| **Exports** | Push billing data to storage / Power BI |

⚠️ **Trap:** Budgets **alert** when thresholds are crossed, they do NOT automatically shut things off. (You can wire them to a Logic App / Function to do that.)

---

## 📜 Service Level Agreements (SLAs)

An SLA is Microsoft's **financially backed** promise of a service's uptime / performance. If they miss it, you get service credits.

### Typical Azure SLA numbers (memorize the categories)

| SLA % | Downtime / year |
|-------|-----------------|
| 99.9% | ~8.76 hours |
| 99.95% | ~4.38 hours |
| 99.99% | ~52.6 minutes |
| 99.999% | ~5.26 minutes |

### Common VM SLA tiers (the classic exam question)

| Pattern | VM SLA |
|---------|--------|
| Single VM with **Premium/Ultra SSD** disks | 99.9% |
| 2+ VMs in an **Availability Set** | 99.95% |
| 2+ VMs across **Availability Zones** | 99.99% |

🎯 **Exam pattern:** "Customer requires 99.99% uptime for a VM workload" → **deploy across multiple Availability Zones**.

⚠️ **Important nuance:** Free / preview services typically have **NO SLA**. Once a service hits General Availability, the SLA applies.

---

## 🧮 Composite SLA, The Trick You Must Know

When a workload depends on multiple services, the *effective* SLA is the **product** of the individual SLAs.

**Formula:** Composite SLA = SLA_A × SLA_B × SLA_C × ...

### Example
You have:

- App Service: 99.95% (0.9995)
- Azure SQL Database: 99.99% (0.9999)

Composite = 0.9995 × 0.9999 = **0.99940005 → 99.94%**

So the *workload* SLA is **lower** than the lowest single component (always).

### Mitigation: redundant tiers

If you have **two regions** each with App Service + SQL, the formula becomes more nuanced (closer to 1 - (1 - region1)²), but the AZ-900 just expects you to recognize:

1. Composite SLA across dependencies = **multiply**
2. Redundancy within a tier (multiple instances) = **higher than single**

🎯 **Exam pattern:** "Three services with SLAs 99.95%, 99.99%, and 99.9%, what's the workload SLA?" → Multiply. Answer ≈ 99.84%.

⚠️ **Trap:** Adding more services → composite SLA goes DOWN (more things to fail). Adding redundancy within a single service → composite goes UP.

---

## 🌱 Service Lifecycle: Preview vs GA

Azure services move through stages:

| Stage | What it means | SLA? | Use in prod? |
|-------|---------------|------|--------------|
| **Private Preview** | Invite-only test | ❌ | ❌ |
| **Public Preview** | Anyone can try | ❌ | ❌ (use at own risk) |
| **General Availability (GA)** | Production-ready | ✅ | ✅ |
| **Deprecation announced** | Sunset planned | ✅ (until end) | Plan migration |
| **Retired** | Gone |, | ❌ |

🎯 **Exam pattern:** "We want to use a Preview feature in production, what are the implications?" → **No SLA**; not recommended for production.

You can check service availability and roadmaps via:

- **Azure updates page** (public roadmap)
- **Azure portal → Preview features blade**

---

## 📌 SLAs are NOT for free tiers

Free Azure services (Free Tier, Free Account) do **not** have an SLA. Always check.

---

## 🎁 Free Account / Free Services (lightly tested)

The Azure free account includes:

- $200 USD credit for 30 days
- **12 months free** of selected popular services (e.g., 750 hrs/mo of B1S Linux VM)
- **Always-free services** (Cosmos DB free tier, Functions consumption plan free executions, App Service F1, etc.)

🎯 **Exam pattern:** "What does the Azure free account include?" → $200 for 30 days + 12 months of select services + always-free tier.

---

## 🚨 Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Ingress costs money" | NO, ingress is free, egress is billed |
| "Budgets automatically shut down resources" | NO, they only alert |
| "Adding services always raises composite SLA" | NO, adding **dependencies** lowers SLA; adding **redundancy** raises it |
| "Pricing Calculator and TCO Calculator are the same" | NO, Pricing = new Azure cost; TCO = on-prem vs Azure comparison |
| "Reservations are CapEx" | NO, still OpEx (paid over time, no asset ownership) |
| "Preview services have a partial SLA" | NO, Preview = no SLA |
| "Spot VMs are good for production databases" | NO, Spot can be evicted with 30 sec notice |
| "Reservation discount applies to any matching VM size" | True for Reservations within an "instance series" if you select that flexibility, but reservations are scoped, read carefully |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Pricing Calculator** | Estimate cost of NEW Azure resources |
| **TCO Calculator** | Compare on-prem cost vs Azure |
| **Cost Management** | Analyze, forecast, budget actual Azure spend |
| **Budget** | Alert when spend crosses threshold (does NOT shut down) |
| **Reservation** | 1- or 3-year commitment for big discount |
| **Savings Plan** | Hourly compute commitment, more flexible than reservation |
| **Spot VM** | Up to 90% off, evictable |
| **Azure Hybrid Benefit** | Reuse on-prem Win/SQL licenses on Azure |
| **Egress** | Outbound bandwidth (billed) |
| **Ingress** | Inbound bandwidth (FREE) |
| **SLA** | Financially backed uptime/performance promise |
| **Composite SLA** | Product of dependent service SLAs |
| **GA** | General Availability, production-ready, SLA-backed |
| **Preview** | Pre-GA, no SLA, use at own risk |
| **Service Credits** | Refunds you get if Microsoft misses SLA |
| **Azure free account** | $200 / 30 days + 12 mo of select services + always-free tier |

---

## 📊 Case Study, GitHub on Azure (2018 acquisition through 2024 Copilot scale-up)

**Situation.** Microsoft acquired **GitHub** for $7.5 billion in stock in October 2018 (Microsoft press release, 2018-10-26). At acquisition, GitHub was serving roughly **31 million developers**, hosting more than **100 million repositories**, and running its own hybrid infrastructure (some AWS (Amazon Web Services), some bare-metal datacenters, custom MySQL clusters). By 2024, GitHub was at **>100 million developers** with billions of API calls per day, and had become the launch substrate for **GitHub Copilot**, Microsoft's most successful AI product line by paid-seat count. The migration from GitHub's pre-acquisition stack to "GitHub on Azure" plus the Copilot scale-up is the canonical Microsoft case for *cost stewardship at planet scale*.

**Decision.** Microsoft did *not* do a forced lift-and-shift. Nat Friedman (then GitHub CEO (Chief Executive Officer)) and the GitHub team retained operational autonomy, Microsoft's commitment was "GitHub stays GitHub." But over 2018–2023 the infrastructure quietly migrated to Azure for everything where it made economic sense. Key moves:

- **Compute migration to Azure**, repositories, Actions, Codespaces, Pages, and the Copilot inference fleet moved to Azure (US East/West + EU North/West + Asia regions). Codespaces specifically was built Azure-native from the start (GitHub Blog, 2020-05-06, "Codespaces beta").
- **Reservations + Savings Plans for the steady-state estate**, GitHub's repository hosting, search index, and Actions worker pool are 24/7 workloads with predictable baselines. 3-year reservations on the appropriate VM SKUs saved an estimated 50–60% on the steady portion of the bill versus pay-as-you-go (Microsoft customer testimony has cited "tens of millions" annualized).
- **Spot capacity for the elastic portion**, Actions CI/CD (Continuous Integration/Continuous Deployment) runners absorb massive bursty load (commits at peak working hours, deep idle overnight). Where evictability is acceptable, GitHub uses Spot pricing for cost arbitrage.
- **Tagging + Cost Management at scale**, every Azure resource at GitHub carries product / team / environment tags so finance can attribute exactly which Copilot region is costing what. Cost Management exports flow to Power BI for monthly board reporting.
- **Composite SLA discipline for Copilot** Copilot completions involve Azure OpenAI (99.9% baseline) + Azure App Service Premium (99.95%) + Cosmos DB (99.999%) + the GitHub auth path. The product SLA the company commits to is *deliberately conservative*, recognizing that the composite of dependencies multiplies down a textbook AZ-900 §"Composite SLA" application.
- **Hybrid Benefit for Windows server workloads**, GitHub's enterprise on-prem connectors and the Windows portion of Actions runners use Azure Hybrid Benefit on the inherited Microsoft licenses (Software Assurance).

**Outcome.** By 2024:

- **GitHub Copilot crossed 1.8 million paid subscribers** (Microsoft FY24 Q4 earnings, 2024-07-30), the fastest-growing developer-tools product in Microsoft history. The product wouldn't have been economically viable without the Azure cost stack (Reservations + Spot + Hybrid Benefit) under it.
- GitHub crossed **150 million developers globally** by Universe 2024 (GitHub Universe 2024 keynote, 2024-10-29).
- Microsoft's own data centers run hundreds of thousands of *internal* developer accounts on GitHub Enterprise, Microsoft itself is GitHub's largest single customer, validating the cost-and-SLA design at the most demanding internal load.
- Crucially, GitHub's pricing to developers (Free tier, $4/month Pro, $21/month Copilot Pro, enterprise tiers) is *competitive*, which is only possible because the cost engineering on the Azure side is disciplined.

**Lesson for the exam / for practitioners.** Three AZ-900 cost-and-SLA concepts visible end-to-end:

1. **Pricing-model mix is the cost lever, not "discounts."** GitHub uses Pay-As-You-Go (PAYG) for unpredictable spikes, Reservations for steady-state, Spot for evictable workloads, and Hybrid Benefit for license-eligible workloads all simultaneously. The exam's "which option saves money?" questions assume you understand this is *not* an "either/or" it's a portfolio.
2. **Composite SLA discipline at planet scale.** When you stack four Azure services that each have a 99.9–99.99% SLA, the composite is always lower than the worst single component. GitHub publishes Copilot's SLA conservatively because the math doesn't lie. The exam tests this multiplicatively.
3. **Tags + Cost Management = the *unit economics* answer.** Microsoft would not let GitHub make pricing commitments to developers if it couldn't attribute cost to product-line-and-region. Tags are the AZ-900's exam answer for "how do we chargeback?", they're also the only way a billion-row, planet-scale product runs profitably.

GitHub-on-Azure has been used by Satya Nadella and CFO (Chief Financial Officer) Amy Hood in multiple investor presentations as the canonical example of "the AI platform shift", and the cost discipline behind it is exactly what *The Cloud Adoption Framework: Manage* methodology (Microsoft, current edition checked 2026-05) prescribes.

**Discussion (Socratic).**
- **Q1:** GitHub uses *3-year Reservations* for steady workloads despite the fact that 3 years is a long time in cloud-economics terms (instance families change, Microsoft sometimes drops list prices). Argue both sides: (a) Reservations are the right answer for known-baseline workloads even with the lock-in risk; (b) Savings Plans (more flexible, smaller discount) are the right answer because they preserve optionality. What's the breakeven workload-volatility threshold?
- **Q2:** Copilot's composite SLA includes Azure OpenAI (99.9%), App Service (99.95%), Cosmos DB (99.999%), and the GitHub auth path. Compute the composite SLA assuming the auth path has 99.99% uptime. Then explain *why* GitHub publishes a more conservative number to customers than the math suggests. What hidden cost is "publishing a higher SLA than you can actually defend" creating?
- **Q3:** GitHub's Spot-VM strategy for Actions runners assumes evictability is acceptable, if a runner is evicted mid-build, the build retries. But customers see *some* failed builds as a result, especially during Azure capacity-tight periods. Walk through the trade-off between (a) GitHub's cost saving from Spot vs (b) the customer-experience cost of build retries. At what point would you, as GitHub's VP of Engineering, switch back from Spot to Reservation for Actions runners?

---

## ✅ Module 5 Summary

You now know:

- 🛠️ Pricing Calculator vs TCO Calculator vs Cost Management
- 💸 Cost factors (region, egress, SKU, tier, etc.)
- 💰 Pricing models (PAYG, Reservations, Spot, Savings Plans, Hybrid Benefit, Dev/Test)
- 🏷️ Tags + Cost Management = chargeback / showback
- 📜 Standard SLA tiers (99.9 / 99.95 / 99.99)
- 🧮 **Composite SLA math** (multiply dependencies)
- 🌱 Preview vs GA, and why Preview has no SLA
- 📊 One canonical cost-and-SLA case (GitHub on Azure + Copilot scale-up, 2018–2024)

**Next steps:**
1. 🎥 Watch the videos in [`Videos.md`](./Videos.md)
2. ✏️ Take [`Quiz.md`](./Quiz.md)
3. 📋 Print [`Cheat-Sheet.md`](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Tools & Features](../Module-06-Tools-Features/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 introduces Azure Advisor, the in-portal tool that surfaces Reservation/Spot/Hybrid Benefit recommendations programmatically. The Cost Management work in this module is *manual cost analysis*; Advisor automates the recommendation layer.
> - Cross-course: `06-Azure-Administrator` (AZ-104) operationalizes cost management setting up budgets, configuring action groups for budget alerts, automating shutdown-on-budget via Logic Apps. `04-AWS-Solutions-Architect-Associate` Module 8 covers the equivalent AWS cost-optimization patterns (Reserved Instances, Savings Plans, Spot) useful for multi-cloud architects.
> - Practice: Practice Exam 2 has 8–10 questions on pricing-model selection and SLA math; the final mock includes the canonical composite-SLA arithmetic question (Q32).

---

## 💬 Discussion, Socratic prompts

1. **The Reservation vs Savings Plan strategic choice.** A 200-person company is committing to Azure for the next 3 years. They have ~$2M/year of steady compute (production web tier + databases) and ~$500K/year of spiky workloads (Actions-style CI/CD). The cloud architect proposes: 100% Reservations for the steady portion (max discount), Pay-As-You-Go for the spiky portion. The CFO counter-proposes: 100% Savings Plans for everything (more flexibility, smaller discount). Which is right, and why? Build out the 3-year cost model qualitatively. (Hint: the answer involves portfolio thinking, not "winner takes all.")
2. **The composite-SLA inflation trick.** A vendor pitches their service as "99.99% SLA" but it depends on Azure SQL (99.99%), Azure App Service (99.95%), and a custom auth tier (97% they don't publish this). Compute the actual composite. What's the marketing trap, and what's the right question to ask the vendor before signing? Cite the Module 5 composite-SLA formula explicitly.
3. **Egress vs ingress economics.** A customer asks: "If ingress is free, why don't we just architect everything to minimize egress?" An engineer responds: "Because then your customers can't get the data out." Walk through the realistic egress patterns where a) the cost is trivial, b) the cost is the dominant line item on the bill, and c) the cost should fundamentally redesign your architecture (e.g., putting compute close to the data instead of pulling the data to the compute). When does egress economics dictate where you run your business logic?
4. **The "Spot for production" hot take.** A junior engineer reads about Spot's 90% discount and pitches running production stateless web workloads on Spot. The senior engineer pushes back. Build the strongest argument for Spot-in-production (rapid recovery from eviction, cost savings funded by accepting brief interruptions). Build the strongest argument against (customer-facing impact, on-call burden, error budget burn). At what kind of workload (latency-sensitive consumer vs batch back-end vs internal tooling) does Spot become defensible?
5. **The budget-doesn't-shut-down trap.** A team sets a budget at $5,000/month. Mid-month, a runaway feedback loop scales their App Service to 50 instances and the bill hits $4,800 in 10 days. The team is shocked their budget didn't "shut it off." Walk through the actual semantics of an Azure budget (alert, not enforcement). What's the *right* governance pattern to actually prevent runaway spend, drawing on Policy + Logic Apps + Action Groups? Why doesn't Microsoft just add a "hard stop" feature?

---

## 📚 Further Reading (Optional)

- 🔗 [Azure Pricing Calculator](https://azure.microsoft.com/pricing/calculator/), the official estimator
- 🔗 [Azure Total Cost of Ownership (TCO) Calculator](https://azure.microsoft.com/pricing/tco/calculator/), on-prem-vs-Azure comparator
- 🔗 [Microsoft Cost Management documentation](https://learn.microsoft.com/azure/cost-management-billing/), the post-deploy spend tool
- 🔗 [Azure SLA summary](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services), the current SLA per service (revised periodically)
- 🔗 [Reservations overview](https://learn.microsoft.com/azure/cost-management-billing/reservations/save-compute-costs-reservations), Reservation purchase + scope mechanics
- 🔗 [Azure Updates / roadmap](https://azure.microsoft.com/updates/), Preview / GA / Retirement announcements
- 📖 **Microsoft Cloud Adoption Framework, *Manage* methodology** (Microsoft, current edition checked 2026-05). §"Cloud Economics" + §"Workload management" are the operational playbook this module's concepts implement.
- 📖 *Hit Refresh*, Satya Nadella, 2017, HarperCollins. The GitHub acquisition rationale (chapter on the developer-platform thesis) is in the CEO's own voice.
