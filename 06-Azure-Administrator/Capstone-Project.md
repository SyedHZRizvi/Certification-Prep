# Capstone Project — AZ-104 Azure Administrator

> **Estimated effort:** 60–90 hours over 14 weeks (≈ 5–7 hours/week)
> **Format:** Self-graded with peer-review prompt at the end
> **Prerequisites:** Completion of all 10 modules + Practice Exam 1 (≥ 70%)

---

## Brief

You have been hired as the Senior Azure Administrator at **Meridian Health Partners**, a 4,200-person regional health system in the Pacific Northwest United States. Meridian operates 6 hospitals, 38 outpatient clinics, 2 long-term-care facilities, and a research institute. They have just signed a 5-year, $1.6 million Azure consumption commitment to migrate a **net-new Electronic Health Record (EHR) pilot** to Azure, with a *14-week deadline* to GA.

The clinical workload (Epic ASP-style multi-tier app) must run in production by go-live. The pilot will scale to ~800 concurrent clinicians, with personal health information (PHI) for ~50,000 patients in the first wave (a region's chronic-care population). After GA, the pilot becomes the template for the system-wide EHR rollout in 2027.

**Regulatory and compliance posture:**
- HIPAA Privacy + Security Rules (45 CFR Parts 160, 164) — non-negotiable
- HITRUST CSF certification target (Common Security Framework v11+, current as of 2026-05)
- Washington State data-residency: PHI must remain in U.S. West regions
- Three-year audit retention on all access events
- Disaster Recovery: RPO ≤ 1 hour, RTO ≤ 4 hours for clinical systems

**Constraints:**
- Hard budget: $1.6M for the 14-week pilot build (cloud spend + tooling; excludes labor)
- 6-person Azure platform team (2 senior, 2 mid, 2 junior — plus you)
- Existing tenant has 11 dev-team subscriptions in random hierarchy; you must reorganize without disrupting their work
- Microsoft FastTrack is involved as an advisor (free), but execution is your team's
- The pilot's clinical workflow team has NOT used Azure before; they need *runbooks*, not architectures

**The mandate.** Stand up a production Azure landing zone for the EHR pilot in 14 weeks, on budget, passing a third-party HITRUST self-assessment in week 12. Document everything so the system-wide 2027 rollout can replicate it.

---

## Deliverables (7 artifacts)

You will produce all seven. Each is graded against the rubric below. The total is graded out of 100.

### Deliverable 1: Management Group Hierarchy + Subscription Plan (15 points)

A diagram + Markdown specification of:

- Tenant root structure (Platform / Landing Zones / Sandbox per CAF Enterprise-Scale, 2020)
- Subscription strategy for **Pilot Prod**, **Pilot NonProd**, **Shared Services**, **Connectivity**, **Identity** — what goes in which sub and why
- Migration plan for the 11 existing dev-team subs into the new tree without disrupting their work
- Naming convention (RGs, resources, tags) per CAF "naming and tagging best practices"
- Cost-allocation model with `CostCenter`, `Application`, `Owner`, `DataClassification`, `Compliance` tag schema

### Deliverable 2: Identity Architecture (Entra ID + RBAC + PIM + Conditional Access) (15 points)

- Entra ID tenant configuration (Premium P2 licensing for clinical admins; P1 for general users)
- Group strategy (security vs. M365; dynamic groups for clinicians by specialty)
- PIM eligibility tree: who is *eligible* for what role, who can *activate*, and approval flow
- 8-policy Conditional Access starter set (require MFA for clinicians, block legacy auth, compliant-device for admin portal, etc.) with at least 2 risk-based policies
- B2B vendor access pattern (Epic services, Microsoft FastTrack, HITRUST auditor) using PIM + access reviews
- Break-glass account procedure (2 emergency Global Admins, FIDO2-only, MFA-exempt, monitored)

### Deliverable 3: Network Topology (Hub-Spoke with Private Endpoints) (15 points)

- Hub VNet in `westus3` with: ExpressRoute gateway to the hospital data center, Azure Firewall Premium, Bastion, Private DNS Zones, DNS Private Resolver
- Spokes: **Clinical Tier (EHR app)**, **Data Tier**, **Identity Plane**, **Management/Monitoring**
- Address space plan (non-overlapping CIDRs documented down to subnet level)
- Per-spoke UDR forcing `0.0.0.0/0` through hub firewall
- Private endpoints for: Azure SQL Managed Instance, Storage (clinical + audit), Key Vault, App Service Premium v3
- Private DNS Zone strategy with explicit links to each spoke
- ExpressRoute design (Standard, dual-circuit for resilience, with S2S VPN as backup tunnel)
- Force-tunneling rules + Microsoft 365 / Azure DevOps service tag exceptions

### Deliverable 4: Storage + Data Tier Design (10 points)

- Storage account topology (one per workload class) with `Standard_GZRS`, `min-tls-version=TLS1_2`, public network access disabled
- Customer-Managed Key (CMK) configuration with Key Vault (HSM-backed Premium SKU, purge protection, geo-redundancy)
- Lifecycle policies for clinical logs (Hot 90d → Cool 1yr → Archive 7yr → Delete)
- Immutable blob retention for audit logs (locked WORM, 7-year minimum)
- SAS strategy: only User Delegation SAS for any external sharing
- Azure SQL Managed Instance configuration with TDE + CMK + Always Encrypted for PHI columns

### Deliverable 5: Backup & DR Plan (10 points)

- GRS Recovery Services Vault in `westus3` with Cross-Region Restore enabled (pair = `westus`)
- Immutable vault + Multi-User Authentication via Resource Guard (2nd-admin approval required for any backup config change)
- Backup policies: hourly app-consistent SQL backup with 30-day retention; daily VM backup with GFS retention (7d/4w/12m/5y); Azure Files snapshots every 4 hours, 30-day soft delete
- Azure Site Recovery for clinical-tier VMs to paired region; RPO target 15 min, RTO target 1 hour
- Recovery plan with explicit boot order (Identity → Network → Data tier → App tier → Front Door)
- Quarterly test-failover schedule + post-test report template
- Annual full DR drill (mandatory for HITRUST)

### Deliverable 6: Governance + Cost Management (10 points)

- 6-initiative Azure Policy plan at the Landing Zones MG:

  1. Microsoft Cloud Security Benchmark (MCSB) baseline
  2. HIPAA HITRUST initiative (built-in)
  3. Allowed Locations (US West regions only)
  4. Required Tags (5-tag baseline from D1)
  5. Storage account hardening (no public access, TLS 1.2, CMK)
  6. Custom: Deny resources without diagnostic settings
- Remediation task plan for existing non-compliant resources
- Cost Management budgets (per spoke) with alerts at 50/75/90/100% to Finance + Cloud Ops
- Power BI dashboard for monthly chargeback to clinical departments
- Quarterly cost-optimization review process (Advisor + reservation purchase recommendations)

### Deliverable 7: Observability + Incident Response (15 points)

- Log Analytics workspace topology: one central + one per regulated workload (HIPAA segregation)
- AMA agent + DCR plan for all VMs, AKS, App Services
- Sentinel deployment (in scope as a stretch goal; baseline alerts in-scope)
- 20 alert rules across: control plane (audit log critical-resource-delete), data plane (storage anonymous read attempt), identity (sign-in risk > High; impossible travel), network (NSG flow log anomalies), performance (VM CPU > 80% for 10 min, web tier P95 latency > 500ms)
- Action groups: Clinical Ops on-call (24/7), Security Ops, Finance, Vendor Escalation
- 5 KQL Workbooks for: fleet health, security posture, cost trend, HIPAA audit log queries, network health
- Incident-response runbook with on-call rotation, escalation tree, and 90-minute time-to-engage SLA for Sev 1 alerts (clinical impact)

---

## Rubric (scored out of 100)

| Criterion | Points | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|--------|---------------------|---------------------|------------------|
| **MG Hierarchy + Subscriptions (D1)** | 15 | CAF-aligned, defended cost-allocation model, 5-tag schema, migration plan respects active workloads | Hierarchy correct, tagging present but partial, migration handwaved | Hierarchy violates CAF, no tags, no migration plan |
| **Identity Architecture (D2)** | 15 | PIM eligibility tree complete, 8+ CA policies with risk-based, break-glass procedure documented, B2B with access reviews | Most controls present, CA starter set ≥ 5 policies, PIM scoped to top 5 roles | Permanent Owners, < 3 CA policies, no break-glass, no access reviews |
| **Network Topology (D3)** | 15 | Full hub-spoke with private endpoints, UDR forcing, address-space plan, ExpressRoute + S2S resilience, DNS strategy detailed | Hub-spoke correct, PE present, DNS mostly working, ExpressRoute single-circuit | Flat VNet, no PE, no UDR forcing, no DNS plan |
| **Storage + Data Tier (D4)** | 10 | GZRS + CMK + immutable + lifecycle + private; CMK rotation procedure documented | Most controls present, lifecycle partial, CMK setup but no rotation procedure | LRS, MMK, public access enabled, no lifecycle |
| **Backup & DR (D5)** | 10 | RSV immutable + MUA, CRR enabled, ASR with RP and quarterly tests, RPO/RTO documented per workload | Backup configured, ASR present but no test schedule, RPO/RTO loose | No MUA, no CRR, no ASR, no test plan |
| **Governance + Cost (D6)** | 10 | 6+ initiatives with remediation, tag chargeback functional, Power BI dashboard, FinOps review cadence | Initiatives applied, budgets set, chargeback partial | < 3 initiatives, no budgets, no chargeback |
| **Observability (D7)** | 15 | Workspace topology + 20+ alerts + 5 workbooks + IR runbook with on-call + Sev-1 SLA | Workspace + 10+ alerts + 2+ workbooks + IR draft | < 5 alerts, no workbooks, no IR runbook |
| **Cross-cutting integration (Bonus)** | 10 | Documents are internally consistent (e.g., NSGs reference the network plan from D3, alert rules reference the MGs from D1). Diagrams are publishable. Cost estimates align to $1.6M with line-item detail. | Mostly consistent, some gaps. Cost rolls up but light on detail. | Documents contradict each other. No cost estimate. |

**Target score for "ready to present to leadership": 80+. Target for "pass":** 70+.

---

## Suggested timeline (14 weeks)

- **Week 1:** Read all 10 modules + Final Mock Exam diagnostic. Identify weakest 3 modules; deep-dive review.
- **Week 2:** D1 (MG + subscriptions + tags). Defend choices in a 1-page memo to "the CIO."
- **Week 3:** D2 (Identity). Build a Visio/draw.io diagram of the PIM eligibility tree. Document the 8 CA policies as a YAML-style table.
- **Week 4:** D3 (Network) — first pass. Address-space plan + hub-spoke skeleton.
- **Week 5:** D3 (Network) — second pass. Private endpoints + Private DNS Zones + UDR plan. Defend Bastion vs. JIT VM access.
- **Week 6:** D4 (Storage + Data). CMK setup procedure + lifecycle policies + immutable retention design.
- **Week 7:** D5 (Backup + DR). Compute RPO/RTO per workload. Write the quarterly-test failover plan.
- **Week 8:** D6 (Governance + Cost). Identify the 6 initiatives. Mock up the Power BI chargeback dashboard.
- **Week 9:** D7 (Observability) — alert design + Workbook mockups + IR runbook draft.
- **Week 10:** Cross-cutting consistency review. Update diagrams. Compute total cost estimate and reconcile to the $1.6M target.
- **Week 11:** Self-grade against rubric. Identify weakest 2 deliverables; remediate.
- **Week 12:** "HITRUST third-party assessment" simulation. Run yourself through the 19 HITRUST CSF v11 control families against your design. Document gaps.
- **Week 13:** Final polish. Write the executive summary (1 page).
- **Week 14:** Peer review (if you have a study partner) OR a self-paced review using the peer-review prompts below. Final scoring.

---

## What "submission" looks like

A single folder/repo containing:

- `00-Executive-Summary.md` (1 page)
- `01-MG-Subscriptions.md` + diagram (PNG or draw.io)
- `02-Identity.md` + PIM tree diagram + 8-policy CA matrix (table)
- `03-Network.md` + hub-spoke diagram + address-space spreadsheet
- `04-Storage-Data.md`
- `05-Backup-DR.md` + RPO/RTO matrix + recovery plan diagram
- `06-Governance-Cost.md` + initiative list + budget alert matrix
- `07-Observability-IR.md` + alert catalog + IR runbook
- `Cost-Estimate.xlsx` (line-item to ≤ $1.6M)
- `Rubric-Self-Grade.md` (you score yourself; defend each point)

Length expectation: 25–50 pages total across all docs. Brevity is graded — Microsoft engineers should be able to *implement* from your docs.

---

## Peer-review prompts (use these if you have a study partner; otherwise self-apply)

1. *"Pretend you're a HITRUST assessor. Audit this design against the HITRUST CSF v11 Access Control, Network Protection, and Audit Logging control families. Where would you fail it?"*
2. *"Pretend you're a hospital CISO. Where could this design get embarrassing in a board meeting? What's the question I haven't answered?"*
3. *"Pretend you're the Cloud FinOps lead. Show me the math from $1.6M down to per-workload monthly run-rate, and prove the 90% confidence interval doesn't exceed budget."*
4. *"Pretend you're the on-call engineer at 3 AM with a Sev-1. Can you find what you need in the IR runbook in under 60 seconds?"*

---

## Optional stretch goals

- **Stretch 1:** Add a Microsoft Sentinel deployment with 5+ analytics rules + 1 playbook (Logic App automation).
- **Stretch 2:** Add a Bicep / Terraform IaC plan that captures the entire landing zone as code (CAF Enterprise-Scale starter templates make this much faster).
- **Stretch 3:** Add an Azure Arc plan for the on-prem hospital data centers (governance + monitoring extends to non-Azure machines).
- **Stretch 4:** Add a generative-AI roadmap (Azure OpenAI Service in the Identity / Pilot Prod sub for clinical documentation summarization) with HIPAA-aware Conditional Access + private endpoints.
- **Stretch 5:** Write a 4-page "operational runbook for the on-call cloud engineer" that covers the 10 most likely incidents and the exact `az` / `kubectl` commands to remediate each.

---

## How this maps to the modules

| Deliverable | Modules drawn on |
|-------------|------------------|
| D1 (MG + Subs + Tags) | Module 1 (Subscriptions/Hierarchy), Module 10 (Policy) |
| D2 (Identity) | Module 2 (Entra ID + RBAC), Module 8 (Network Security overlap) |
| D3 (Network) | Module 7 (VNets), Module 8 (Network Security), Module 5 (Bastion) |
| D4 (Storage + Data) | Module 3 (Storage), Module 4 (Files), Module 5 (Disk encryption) |
| D5 (Backup + DR) | Module 9 (Backup + ASR), Module 1 (Locks) |
| D6 (Governance) | Module 1 (Policy + Cost), Module 10 (Policy + Initiatives) |
| D7 (Observability) | Module 10 (Monitor + Log Analytics + Alerts) |

Every module is exercised. That's the design.

---

## Closing note

This capstone is the Cornell/Harvard/Stanford case-method version of AZ-104: you are not just passing a test, you are designing a real architecture under real constraints. The exam is in 14 weeks; if you ship this capstone in 14 weeks, you will pass the exam and you will be hireable as a Senior Azure Administrator. That's the target.
