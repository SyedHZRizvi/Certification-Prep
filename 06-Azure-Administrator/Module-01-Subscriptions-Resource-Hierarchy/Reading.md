# Module 1: Subscriptions & Resource Hierarchy 🏛️

> **Why this module matters:** Every single Azure resource lives somewhere in a 4-level hierarchy. Get the hierarchy wrong and your policies don't apply, your costs are unsplittable, and your governance falls apart. This is the foundation literally everything else sits on.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Core cloud-shared-responsibility concepts (IaaS / PaaS / SaaS), covered in [`05-Azure-Fundamentals` Module 1](../../05-Azure-Fundamentals/Module-01-Cloud-Concepts/Reading.md) (AZ-900).
> - Azure cost-model basics (subscriptions, regions, reservations), also AZ-900 Module 4.
> - Comfort reading a CLI command and a JSON snippet (no scripting expertise needed).
>
> If those are shaky, pause and spend an hour with AZ-900's "Azure architecture and services" learning path on Microsoft Learn before going deeper here. AZ-104 assumes AZ-900 in spirit even though it isn't a formal prerequisite.

---

## 🍕 A Story: The Coffee Shop That Outgrew Its Filing Cabinet

Meet Jamal. He opens "Brew Bean Coffee" in 2019, one shop, one cash register, one shoebox of receipts. Life is simple. At tax time, he dumps the shoebox on his accountant's desk. Done.

By 2022, Brew Bean has **12 locations** across 3 states. Each has its own staff, its own utility bills, its own equipment leases. Jamal still dumps everything in one giant shoebox. His accountant cries. The Massachusetts location's espresso machine got charged to the Vermont shop. Nobody can tell which location is actually profitable. When the health inspector asks for *just* the Vermont receipts, Jamal spends 6 hours digging through paper.

In 2024, Jamal hires a CFO. The CFO sets up a hierarchy:

- **Brew Bean Holdings LLC** (the parent, like Azure's *tenant*)
- **Region books**, Northeast, Mid-Atlantic, Southeast (like *management groups*)
- **Per-location accounts**, each shop has its own QuickBooks file (like *subscriptions*)
- **Per-category folders** in each account, Rent, Payroll, Equipment, Supplies (like *resource groups*)
- **Individual receipts** filed into the right folder (like *resources*)

Now when the Vermont inspector calls, Jamal pulls one folder. When Jamal wants to compare profitability across regions, the CFO has it in 5 minutes. When the company writes a new "no purchases over $5K without approval" rule, it cascades from the parent LLC down to every shop automatically.

**That hierarchy *is* Azure's resource hierarchy.** Get it right early and life is easy. Get it wrong and you're Jamal in 2022.

---

## 🏛️ The 4-Level Hierarchy (MEMORIZE THIS)

```
                  ┌──────────────────────────────┐
                  │     ENTRA ID TENANT          │  ← identity boundary (1 per org)
                  │     contoso.onmicrosoft.com  │
                  └──────────────┬───────────────┘
                                 │
                  ┌──────────────▼───────────────┐
                  │     MANAGEMENT GROUPS        │  ← up to 6 levels deep
                  │  (Root → Prod → BU → Team)   │
                  └──────────────┬───────────────┘
                                 │
                  ┌──────────────▼───────────────┐
                  │     SUBSCRIPTIONS            │  ← billing + quota boundary
                  └──────────────┬───────────────┘
                                 │
                  ┌──────────────▼───────────────┐
                  │     RESOURCE GROUPS          │  ← lifecycle + RBAC scope
                  └──────────────┬───────────────┘
                                 │
                  ┌──────────────▼───────────────┐
                  │     RESOURCES (VMs, NSGs…)   │
                  └──────────────────────────────┘
```

**Inheritance flows DOWN.** A policy applied at the Root management group hits every resource in every subscription. A role assignment at a resource group covers every resource in it.

🔥 **MEMORIZE:** Inheritance is **additive for permissions** (you get the union) and **most-restrictive for Azure Policy** (deny anywhere = deny everywhere).

---

## 🪪 Level 1: The Microsoft Entra ID Tenant

The tenant is your **identity boundary**. One organization = one Entra ID tenant in 99% of cases. It holds:

- Users, groups, service principals
- The default DNS name like `contoso.onmicrosoft.com`
- Custom domains you've verified (like `contoso.com`)

**Key trap:** A *subscription* is associated with **exactly one tenant** at any time. You can *transfer* a subscription to a different tenant, but a resource cannot span tenants natively (you'd use B2B / cross-tenant sync for that, Module 2).

---

## 📁 Level 2: Management Groups

Containers for **multiple subscriptions**. You use them to apply governance (Policy, RBAC) at scale.

- Every tenant has a built-in **"Tenant Root Group"** at the top (you can't delete it)
- You can nest up to **6 levels deep** (not counting root)
- Each MG can have up to **10,000 children**
- A subscription can be in **exactly one** management group at a time

**Typical pattern:**

```
Tenant Root Group
├── Platform
│   ├── Identity (sub)
│   ├── Connectivity (sub)
│   └── Management (sub)
├── Landing Zones
│   ├── Corp
│   │   ├── Prod (sub)
│   │   └── NonProd (sub)
│   └── Online
└── Sandbox (sub)
```

This is the **Microsoft Cloud Adoption Framework (CAF) "Enterprise-Scale" landing zone** topology (Microsoft, *Cloud Adoption Framework for Azure*, first published 2017; "Enterprise-Scale" formalized 2020; current reference architecture checked against Microsoft Learn 2026-05). You'll see this exact diagram in AZ-104 exam scenarios, recognize it on sight.

### CLI, create a management group

```bash
az account management-group create \
    --name "prod-mg" \
    --display-name "Production" \
    --parent "/providers/Microsoft.Management/managementGroups/landing-zones"
```

### PowerShell, move a subscription under an MG

```powershell
New-AzManagementGroupSubscription `
    -GroupId "prod-mg" `
    -SubscriptionId "11111111-2222-3333-4444-555555555555"
```

---

## 💳 Level 3: Subscriptions

The **billing and quota boundary**. Every resource is billed against exactly one subscription. Subscriptions also enforce **service limits** (e.g. 25,000 VMs per region per subscription).

### Subscription types you'll see on the exam

| Type | Use case | Notes |
|------|----------|-------|
| **Free Trial** | New users | $200 credit for 30 days, then 12 months of limited free services |
| **Pay-As-You-Go (PAYG)** | Small orgs / personal | Credit card, no commitment |
| **Enterprise Agreement (EA)** | Large orgs | Volume discounts, prepaid commitment |
| **Microsoft Customer Agreement (MCA)** | Modern replacement for EA | Sold directly or via partner |
| **CSP (Cloud Solution Provider)** | Through a partner | Partner manages billing |
| **Visual Studio / Dev Test** | Dev/test only | Lower rates, **not** for production |

**Why split into multiple subscriptions?**
- Separate billing for departments
- Hit subscription-level quota limits (e.g. cores per region)
- Hard isolation between Prod and NonProd
- Different compliance scopes (PCI, HIPAA)

---

## 📦 Level 4: Resource Groups

A **logical container for resources that share a lifecycle**. The number-one rule: *put things in the same RG that you'd delete together.*

### Rules to memorize

| Rule | Detail |
|------|--------|
| Region per RG | Yes, the RG itself has a region (stores metadata), but resources inside it can be in *other* regions |
| Resources per RG | Unlimited (subject to subscription limits) |
| Resource in multiple RGs? | ❌ No, exactly one RG at a time |
| Move resources between RGs? | ✅ Yes, if the resource type supports it |
| Delete RG → ? | ⚠️ Deletes **every resource** inside. Use a Resource Lock to prevent accidents. |
| RG ↔ subscription | Resource can move RG within the *same* sub, or across subs (if supported) |

### Naming convention (CAF-recommended)

```
rg-<workload>-<env>-<region>-<###>
   ↓
   rg-payments-prod-eastus-001
```

Tags > names for filtering, but consistent names still help humans scan the portal.

---

## 🚚 Moving Resources

A daily admin task. The mental model:

1. Pick the **source** (subscription + RG) and **target** (subscription + RG).
2. Both must be in the **same Entra ID tenant**.
3. Azure runs a **validation** first, fails if any resource type doesn't support move.
4. Resources are **locked for write** during the move.
5. **Resource IDs change**, anything hardcoding the old ID breaks (SAS URLs, Key Vault references, etc.).

### CLI, move resources to a new RG

```bash
# Get resource IDs you want to move
az resource list \
    --resource-group rg-old \
    --query "[].id" -o tsv > ids.txt

# Move them
az resource move \
    --destination-group rg-new \
    --ids $(cat ids.txt)
```

### CLI, move across subscriptions

```bash
az resource move \
    --destination-subscription-id "00000000-1111-2222-3333-444444444444" \
    --destination-group rg-new \
    --ids "/subscriptions/.../resourceGroups/rg-old/providers/Microsoft.Compute/virtualMachines/vm01"
```

⚠️ **Exam trap:** *Not every resource type supports move.* Classic non-movables (and ones that need extra steps) include App Service certificates, ExpressRoute circuits, recovery services vaults with running backups, and most "v1/classic" resources. **Always check the official "Move resources" matrix first.**

---

## 🏷️ Tags

Key/value labels attached to resources, RGs, or subscriptions.

| Property | Limit |
|----------|-------|
| Tag name length | 512 chars (256 for storage) |
| Tag value length | 256 chars |
| Tags per resource | 50 |
| Inherited by children? | **NO** by default, you must enforce via Policy |

**Common tag schema:**

| Tag | Example value |
|-----|---------------|
| `Environment` | `Prod`, `Dev`, `Test` |
| `CostCenter` | `12345` |
| `Owner` | `jane.doe@contoso.com` |
| `Application` | `Payments-API` |
| `DataClassification` | `Confidential`, `Public` |

### Apply tags via CLI

```bash
# Add/overwrite tags (overwrites all existing!)
az resource tag \
    --tags Environment=Prod CostCenter=12345 \
    --resource-id "/subscriptions/.../resourceGroups/rg-x/providers/..."

# Append a tag without clobbering existing ones
az tag update \
    --resource-id "/subscriptions/.../..." \
    --operation Merge \
    --tags Owner=jane@contoso.com
```

### Enforce tags via Policy (so devs can't forget)

```bash
# Azure built-in: "Require a tag and its value on resources"
az policy assignment create \
    --name 'require-costcenter' \
    --display-name 'Require CostCenter tag' \
    --policy '1e30110a-5ceb-460c-a204-c1c3969c6d62' \
    --params '{"tagName": {"value": "CostCenter"}}' \
    --scope "/subscriptions/<sub-id>"
```

🔥 **MEMORIZE:** Tags are **NOT inherited automatically**. Use the **"Inherit a tag from the resource group"** built-in policy if you want children to absorb their parent's tags.

---

## 💰 Cost Management & Billing

Azure Cost Management is the in-portal tool for tracking spend. Key concepts:

| Concept | What it is |
|---------|------------|
| **Cost analysis** | The dashboard showing actual & forecast spend, sliceable by tag/RG/sub |
| **Budgets** | Threshold alerts at 50/80/100% (or any %) of a monthly/quarterly/annual amount |
| **Cost alerts** | Email/action group triggers on budget breaches |
| **Exports** | Scheduled CSV/Parquet of cost data to a storage account (for Power BI) |
| **Recommendations** | Comes from Azure Advisor, shaves cost by rightsizing, reserving, shutting down idle |

### Create a budget via CLI

```bash
az consumption budget create \
    --budget-name "monthly-200" \
    --amount 200 \
    --category Cost \
    --time-grain Monthly \
    --start-date 2026-06-01 \
    --end-date 2027-06-01 \
    --resource-group rg-payments-prod
```

### Cost-saving levers (exam favorites)

| Lever | Save up to | Catch |
|-------|------------|-------|
| **Reserved Instances (RI)**, 1 or 3 yr | ~72% | Commit upfront, locked to a region/size family |
| **Azure Savings Plan for Compute** | ~65% | More flexible than RI (any VM family, any region) |
| **Spot VMs** | ~90% | Can be evicted with 30 sec notice |
| **Azure Hybrid Benefit** | ~40% on Windows VMs | Bring your own Windows Server / SQL licenses |
| **Auto-shutdown dev VMs** | ~70% on dev | Schedule via DevTest Labs or Automation |

---

## 📜 Azure Policy & Initiatives (Inheritance, Not Permission)

**Azure Policy** = rules about *what kind* of resources you can create and *how* they must be configured. Different from RBAC, which is *who* can do what.

| Effect | What it does |
|--------|--------------|
| `Deny` | Blocks the create/update |
| `Audit` | Allows it but logs as non-compliant |
| `Append` | Adds a property/tag at create time |
| `Modify` | Adds/updates tags on existing resources |
| `DeployIfNotExists` | Triggers an ARM deployment to remediate |
| `AuditIfNotExists` | Logs as non-compliant if a related resource is missing |

### Common built-in policies

- "Allowed locations", restrict deployments to `eastus`, `westus2`
- "Allowed VM SKUs", only let people pick from an approved list
- "Require tag and its value on resources"
- "Storage accounts should restrict network access"

An **Initiative** (a.k.a. **Policy Set**) bundles multiple policies, e.g. the built-in `Microsoft Cloud for Sovereignty baseline` or `ISO 27001`.

### Apply a policy at the management group level

```bash
az policy assignment create \
    --name 'allowed-locations-eastus-westus2' \
    --display-name 'Allowed locations: East US, West US 2' \
    --policy 'e56962a6-4747-49cd-b67b-bf8b01975c4c' \
    --params '{"listOfAllowedLocations":{"value":["eastus","westus2"]}}' \
    --scope '/providers/Microsoft.Management/managementGroups/prod-mg'
```

🔥 **Inheritance rule:** A **Deny** at any ancestor wins, even if a descendant has no policy. You can't override Deny by silence, you'd need an explicit **exemption**.

---

## 🔒 Resource Locks

A cheap insurance policy against `terraform destroy` accidents.

| Lock type | Effect |
|-----------|--------|
| **CanNotDelete** | Can read & modify, can't delete |
| **ReadOnly** | Can read only, **breaks many services** (e.g. blocks scale events) |

- Applied at **subscription**, **RG**, or **resource** level
- Inherited downward
- **Only Owner and User Access Administrator** can create/delete locks
- A lock survives even after the user who created it leaves

```bash
az lock create \
    --name "no-delete-prod" \
    --resource-group rg-payments-prod \
    --lock-type CanNotDelete
```

⚠️ **Trap:** `ReadOnly` on a storage account breaks listing keys (which is technically a "modify" operation under the hood). Stick to `CanNotDelete` unless you've thought about it.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Tags inherit automatically to child resources" | ❌ Use the Inherit Tag policy |
| "I can put a resource in two RGs" | ❌ Exactly one |
| "RG region = resource region" | ❌ Resources can be in different regions than their RG |
| "Lock at parent doesn't affect children" | ❌ Locks inherit downward |
| "I can move *any* resource between subscriptions" | ❌ Check the support matrix |
| "Deny at MG can be overridden at sub" | ❌ Use an exemption, not a counter-policy |
| "Subscription is permanent in one tenant" | ❌ You can transfer to another tenant |

---

## 🧪 Task-Sequencing Practice: Move a VM to a New Subscription

**Order these steps correctly to move a VM (with managed disks, NIC, public IP) from Subscription A to Subscription B.**

The correct order:

1. ✅ Verify the **destination subscription is in the same Entra ID tenant**.
2. ✅ **Remove any resource locks** on the source RG.
3. ✅ Run **`az resource invoke-action --action validateMoveResources`** (or use the portal "Validate move" button).
4. ✅ Confirm both source and destination **regions support the resource types** being moved.
5. ✅ Execute **`az resource move --destination-subscription-id <id> --destination-group <rg> --ids <list>`**.
6. ✅ **Re-apply tags** on the destination (tags survive, but RBAC scoped to the old RG does NOT).
7. ✅ **Re-create resource locks** at the destination.
8. ✅ Update any hardcoded references (Key Vault, monitoring queries, SAS URLs).

⚠️ Skipping step 3 = move fails halfway and your VM is left in a weird half-state. Skipping step 8 = silent production breakage 3 days later.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Tenant** | Entra ID directory, your org's identity boundary |
| **Management group** | Container for multiple subscriptions, applies governance |
| **Subscription** | Billing + quota boundary, tied to one tenant |
| **Resource group (RG)** | Logical container for resources sharing a lifecycle |
| **Resource** | An individual Azure service instance (VM, NSG, storage acct…) |
| **Resource Manager (ARM)** | The control plane that processes all Azure API calls |
| **ARM template** | JSON declarative deployment definition |
| **Bicep** | DSL that compiles to ARM JSON, preferred modern alternative |
| **Tag** | Key/value label on a resource for filtering, billing, automation |
| **Policy** | Rule defining what resources can exist / must be configured |
| **Initiative** | A group of related policies (a.k.a. Policy Set) |
| **Resource Lock** | CanNotDelete or ReadOnly guard against accidents |
| **Exemption** | Explicit opt-out from a policy assignment |
| **Cost Management** | Tool to track and forecast Azure spend |
| **Budget** | Threshold-based spend alert |
| **Reservation** | 1- or 3-year commit for compute/SQL discount |

---

## ✅ Module 1 Summary

You now know:

- 🏛️ The 4-level Azure hierarchy: Tenant → MG → Subscription → RG → Resource
- 📜 How inheritance works (additive for RBAC, restrictive for Policy)
- 🚚 How to move resources between RGs/subscriptions (and what breaks)
- 🏷️ Tag mechanics and how to enforce them via Policy
- 💰 Cost Management, budgets, and the 5 cost-saving levers
- 🔒 The 2 lock types and when each one applies
- ⚠️ The 7 most common traps at this level

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Entra ID & RBAC](../Module-02-Entra-ID-RBAC/Reading.md)

---

## 📊 Case Study, Coca-Cola European Partners (2019–2024)

**Situation.** Coca-Cola European Partners (now Coca-Cola Europacific Partners, CCEP after the 2021 merger) is the world's largest independent Coca-Cola bottler, ~33,000 employees, 13 countries, 90+ manufacturing sites. In 2019 they inherited a portfolio of more than 100 Azure subscriptions accumulated by 13 country IT teams, each provisioned ad hoc with no shared management-group hierarchy, no consistent tagging, and no central policy guardrails. Cost was unattributable per country, GDPR posture was uneven, and a single misconfigured developer subscription in Spain had been silently spinning up `Standard_D64s_v3` VMs for six months before anyone noticed.

**Decision.** CCEP's central cloud team partnered with Microsoft FastTrack and an external advisor (Avanade) to apply the **Cloud Adoption Framework "Enterprise-Scale" landing zone** pattern (Microsoft, 2020). They:

1. Built a 4-level management-group tree: *Tenant Root → Platform / Landing Zones / Sandbox → Corp + Online → Prod + Non-Prod*.
2. Migrated all 100+ subscriptions under the new tree (no resource downtime, only the MG association changed).
3. Applied 14 Azure Policy initiatives at the *Landing Zones* MG: allowed locations restricted to `westeurope`, `northeurope`, `francecentral`, `germanywestcentral`; required tags (`CostCenter`, `Application`, `Owner`, `DataClassification`); deny on public IP creation without exemption; CMK enforcement on storage and SQL.
4. Built a chargeback pipeline: Cost Management exports → Azure Data Explorer → Power BI, sliced by `CostCenter` tag. The Inherit-a-tag `Modify` policy back-filled tags on existing resources.
5. Wrapped production RGs in `CanNotDelete` locks and enforced PIM eligibility for Owner role at sub scope (covered in Module 2).

**Outcome.** By 2024 CCEP reported (Microsoft customer story, *Coca-Cola Europacific Partners*, 2023, refreshed 2024-09):

- **~22% reduction in annual Azure spend** (≈ €4M / year on a stated baseline) from a combination of unused-resource cleanup, reservation purchases, and dev/test auto-shutdown.
- **Time to provision a new project subscription** fell from 6 weeks (manual ticketing) to **under 2 days** via a self-service template that places subs under the right MG with policies pre-applied.
- **GDPR data-residency violations** dropped to zero on net-new resources (the Allowed Locations policy blocks creation outside EU regions; existing non-compliant resources flagged for remediation).
- **Mean time to detect a runaway subscription** dropped from "months" to under 24 hours, via budget alerts and tag-based anomaly detection.

**Lesson for the exam / for practitioners.** This is the textbook case for *why* AZ-104 spends 20–25% of its weight on identity and governance. The hierarchy decisions made in week one of a cloud program compound for years. Microsoft's CAF Enterprise-Scale isn't a curiosity, it's the answer to roughly half of all AZ-104 scenario questions. When you see "a multinational with 80 subscriptions wants to enforce X across Europe-only," your default answer should be: **management group + Azure Policy initiative + Cost Management with tag-based chargeback + locks on prod**.

**Discussion (Socratic).**
- **Q1.** CCEP collapsed 100+ subscriptions under a single CAF-style MG tree, but kept the subscriptions themselves intact. Argue both sides: when is it better to *consolidate subscriptions* (fewer, larger) versus *preserve them* and only reorganize hierarchy? What does each choice cost when you hit subscription-level quotas?
- **Q2.** The "Allowed Locations" policy is a `Deny` at the *Landing Zones* MG. A new Italian acquisition needs to deploy to `southindia` for a 3-month integration project. Microsoft Learn lists two supported override mechanisms, name them and defend which is right here. Why is creating a counter-Allow policy at the child subscription the wrong answer?
- **Q3.** CCEP's chargeback model uses `CostCenter` tags inherited from RG via the `Modify` policy. A CFO asks why tags can't simply be *required* at create time (Deny effect), that way there's no need for back-fill. Where does Deny-on-missing-tag break in practice, especially for resources created via Terraform/Bicep modules?

---

> **Where this leads.**
> - Inside this course: Module 2 builds the identity layer (Entra ID, RBAC, PIM, Conditional Access) that sits on top of this hierarchy; Module 10 revisits Azure Policy and Locks from a monitoring/governance angle.
> - Cross-course: [`05-Azure-Fundamentals` Module 5](../../05-Azure-Fundamentals/Module-05-Cost-Management-SLAs/Reading.md) introduces these concepts at AZ-900 depth; [`08-Azure-AI-Engineer`](../../08-Azure-AI-Engineer/README.md) modules assume you can stand up a compliant resource group on demand.
> - Practice: Practice Exam 1 has roughly 6–8 questions from this module (hierarchy order, tags, locks, policy effects, move resources). Final Mock Exam revisits with case-study-style synthesis.

---

## 💬 Discussion, Socratic prompts

1. **Hierarchy depth vs. governance overhead.** Microsoft permits up to 6 levels of management-group nesting. A common debate: a 4-level tree (Root → Env → BU → Team) gives precise control but slows every policy assignment review; a flatter 2-level tree (Root → Sub) keeps decisions fast but forces "policy by spreadsheet." At what org size and risk profile does each become the better default? Build the case for both, then pick which you'd defend at a Sr. Director architecture review for a 4,000-employee company.
2. **The RG-region paradox.** A resource group has its own region but resources inside can be deployed anywhere. Why did Microsoft design it this way (vs. forcing all RG contents to share the RG's region)? What operational problem would the "single-region RG" rule have caused that the current design avoids? What problem does the current design itself create?
3. **Tags vs. naming conventions.** The CAF recommends `rg-<workload>-<env>-<region>-<###>` AND `Environment=Prod` tags. A skeptical developer asks: "Pick one, either the name encodes everything or the tags do. Doing both is redundant." Defend why the redundancy is intentional, and identify the one scenario in which tags must override names. (Hint: think about renames after a re-org.)
4. **CanNotDelete vs. Azure Policy Deny.** Both can prevent resource deletion. When would you reach for a *resource lock* and when for a *policy* with `Deny` effect on `Microsoft.*/delete` actions? Consider blast radius, audit logging, and inheritance behavior.
5. **Move-resource diligence.** A junior engineer wants to move a production Recovery Services vault (with running backups) from a "legacy" subscription to a new one to consolidate cost. What's your principled answer, with reference to the Microsoft "Move resources" matrix? When is the "right answer" actually "re-create at the destination and migrate, don't move"?

---

## 📚 Further Reading (Optional)

- 📖 [Cloud Adoption Framework, Enterprise-Scale landing zone](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/enterprise-scale/) (Microsoft, current revision)
- 📖 [Move resources support matrix](https://learn.microsoft.com/azure/azure-resource-manager/management/move-support-resources)
- 📖 [Azure Policy built-in definitions](https://learn.microsoft.com/azure/governance/policy/samples/built-in-policies)
- 📖 [Azure naming and tagging best practices](https://learn.microsoft.com/azure/cloud-adoption-framework/ready/azure-best-practices/naming-and-tagging)
- 📖 [Service limits per subscription](https://learn.microsoft.com/azure/azure-resource-manager/management/azure-subscription-service-limits)
- 📖 Satya Nadella, *Hit Refresh* (2017, HarperBusiness), chapter on Microsoft's pivot to cloud-first; useful executive context for why CAF exists at all.
- 📖 Microsoft *Well-Architected Framework Operational Excellence pillar* (Microsoft, ongoing; checked 2026-05) the governance practices CCEP applied.
