# Capstone Project, Azure Fundamentals (AZ-900)

> **Why this capstone exists.** The AZ-900 exam tests vocabulary and concept recognition. The capstone tests whether you can *apply* those concepts to a realistic engagement. A student who finishes this project should be able to walk into a real cloud-strategy conversation at a 100-person company and add value on day one, not just pass a multiple-choice test.

---

## Brief

You've been retained as a freelance cloud advisor by **Cantwell, Boyd & Reyes LLP (CBR)**, a 110-person commercial litigation firm headquartered in Chicago with satellite offices in New York and Los Angeles. CBR's managing partner, Margaret Cantwell, hired you for a 6-week engagement after a near-miss ransomware incident in late 2025 forced the firm to face questions it had been avoiding for a decade.

**Current state (the "before" you're inheriting):**

| Layer | Today |
|---|---|
| **File servers** | 3 Windows Server 2019 boxes in a closet in the Chicago office (matter files, billing exports, document templates). About 4 TB total. No off-site backup since 2022. |
| **Email** | On-prem Microsoft Exchange 2019. ~110 mailboxes. Mailbox sizes 5–50 GB each. |
| **Document management** | NetDocuments (SaaS, already cloud, keep it). |
| **Practice management** | Clio (SaaS, keep it). |
| **DR / backup** | Nightly tape rotation; tapes go home with the IT admin in a locked bag. Last successful restore test: 2021. |
| **Identity** | On-prem Active Directory; passwords reset every 90 days; no MFA. |
| **Endpoints** | ~140 laptops + 30 desktops. Mix of Windows 10 and 11. Most still domain-joined. |
| **Network** | T-1 to Chicago office (DSL backup); VPN appliance for remote workers (5 yrs old, EOL). |
| **Compliance posture** | Nothing formal. State bar e-discovery rules apply. Some EU-resident clients ⇒ implicit GDPR exposure. Some former-government clients require 5-year matter-file retention. |
| **Annual IT spend** | ~$340K (3 admins + hardware + licenses + datacenter). |

**The mandate, and the constraints:**

Margaret Cantwell has handed you a one-page mandate:

1. **GDPR-defensible**, partners regularly serve EU citizens; the firm has been told twice by client procurement teams that GDPR posture is now a buying criterion.
2. **State-bar e-discovery + 5-year retention**, every matter file, every email, every billing record retained for 5 years (or per matter-specific orders) with chain-of-custody intact.
3. **Disaster recovery from a regional event**, Chicago is in a flood plain. New York and Los Angeles offices are on opposite coasts. A Chicago outage cannot stop matters from progressing on the coasts.
4. **$180K capex avoidance over 3 years.** The firm was planning to refresh the Chicago datacenter (~$180K). Margaret wants that money *not spent*, but the cloud-migration cost must come in under the avoided capex over 3 years, after which there's no expectation of additional capital.
5. **The firm is buying, not renting forever.** Margaret has explicitly said "I'm not interested in being told we'll save money in 2030. Show me the 3-year picture."

**Target architecture (your job to design, these are constraints, not solutions):**

- **Microsoft 365** for email + calendar + collaboration + Teams (replaces on-prem Exchange)
- **Azure Files** for matter-file storage (replaces the closet servers)
- **Azure Backup + Azure Site Recovery** for backup and DR (replaces tape)
- **Microsoft Sentinel + Microsoft Defender for Cloud + Microsoft Entra ID P1 with Conditional Access** for security posture
- **Microsoft Entra ID** for identity (with on-prem AD sync via Entra Connect during transition)
- Continue using **Clio** and **NetDocuments** (don't touch what works)

The *architecture* you design and the *cost model* + *change plan* you write are what Margaret will hand to the partnership for sign-off.

---

## Deliverables (7 artifacts)

You will produce a written engagement package, roughly 25–35 pages of total output across the seven deliverables.

1. **Target Architecture Diagram + Narrative** (3–5 pages). A clean architecture diagram showing every Azure / M365 service in the recommended target state, the Microsoft Entra ID + on-prem AD relationship, network connectivity (ExpressRoute vs. VPN), and the Chicago / NY / LA flow. Narrative explains each choice in plain English. *Decision points:* primary region, paired region, ExpressRoute vs VPN, Azure Files redundancy tier, M365 license SKU.

2. **3-Year TCO Cost Model** (2–3 pages). A side-by-side spreadsheet (export to PDF) comparing the *as-is* on-prem 3-year spend (datacenter refresh, tape, licenses, admins) against the *to-be* Azure + M365 3-year spend (PAYG vs Reservation portfolio, M365 E3/E5 license cost, Azure Backup + ASR + Sentinel monthly burn). Show explicitly the $180K capex avoidance and where it goes. Cite the Azure Pricing Calculator + TCO Calculator outputs.

3. **Compliance Matrix** (2–3 pages). A table mapping each regulatory requirement (GDPR Articles 5/15/17/32, state bar e-discovery rules, 5-year retention) to the specific Azure / M365 service + setting that satisfies it. Cite Microsoft Service Trust Portal artifacts (SOC 2, ISO 27001) that the firm can use to evidence compliance to clients or regulators.

4. **Identity + Access Design** (2–3 pages). Concrete RBAC plan (which RBAC roles to which people at which scope), Conditional Access policy set (when MFA is required, when sign-in is blocked, what device-compliance is enforced), Microsoft Entra ID P1 vs P2 sizing decision (with reasoning), external-access plan for outside counsel and expert witnesses. Cite the §"Always Customer" four items from Module 1.

5. **Migration Runbook** (3–5 pages). Week-by-week (6-week timeline) cutover plan with named pre-flight checks, a defined order (M365 → file servers → DR posture → identity hardening), rollback gates, communication plan to the partnership, and an explicit *parallel-run period* for file servers (do not cut over until you've validated). Include a named Azure Migrate assessment step before the cutover.

6. **Change Management Plan** (2–3 pages). The 110 employees include partners who haven't changed their workflows in 20 years. Apply Kotter's 8-Step Change Model (Kotter, *Leading Change*, 1996, Harvard Business School Press) explicitly, establish urgency, build a guiding coalition (which partners?), communicate the vision, etc. Identify the three biggest *human* risks (a senior partner who refuses MFA; a paralegal who circumvents the new file-share to use Dropbox; the IT admin who feels displaced) and your mitigation for each.

7. **Risk Register + Rollback Playbook** (2 pages). Enumerate the top 8 technical risks with severity, likelihood, and mitigation (canonical examples: Chicago internet outage during cutover; M365 mailbox migration mid-flight failure; Entra Connect sync collision; Conditional Access policy locks out an admin; budget overrun in month 2). For each, document the rollback path with named services and named owners.

---

## Rubric (scored out of 100)

Self-grade or peer-grade with a study partner using the matrix below. The bar is **80+ to consider yourself capstone-complete**.

| Criterion | Pts | Excellent (90–100%) | Acceptable (70–89%) | Below bar (<70%) |
|-----------|-----|---------------------|---------------------|------------------|
| **Target architecture clarity** | 20 | Every service named has a defensible reason. Region pair documented. Diagram is publishable. | Most services named with reasons; diagram present. | Generic "use Azure" with no service-level reasoning. |
| **TCO accuracy + believability** | 15 | Cites Pricing + TCO Calculator outputs; Reservation/PAYG portfolio shown; 3-year math checks. | Numbers present and roughly defensible; minor gaps. | Round-number guesses; no calculator citations. |
| **Compliance mapping** | 15 | Every constraint mapped to specific service + setting + Trust Portal evidence. | Most constraints mapped; ≥1 missing artifact. | Hand-wave "Azure is compliant." |
| **Identity + RBAC design** | 15 | Concrete role/scope assignments; CA policies named; P1 vs P2 justified. | Roles and CA present at a high level. | "Use RBAC" with no specifics. |
| **Migration runbook realism** | 15 | Week-by-week with rollback gates and parallel-run windows. Azure Migrate step is named. | High-level timeline with cutover order. | "Migrate over a weekend." |
| **Change-management quality** | 10 | Kotter's model applied explicitly; named human risks + mitigations. | Generic change-management bullets. | "Train the users." |
| **Risk register** | 10 | 8+ realistic risks with severity × likelihood + named rollback path. | 4–7 risks, partial mitigations. | <4 risks or fluff. |

---

## Suggested timeline (6 weeks part-time, ~5 hrs/week)

- **Week 1**, Read the brief twice. Build the *target-state architecture diagram*. Use Microsoft Cloud Adoption Framework's "Landing Zone" reference to ground the design. **Decision points to lock:** primary region (US East? US Central?), paired region, Azure Files redundancy tier (GRS? GZRS?), VPN vs ExpressRoute.
- **Week 2**, Stand up a sandbox Azure free-trial subscription. Use the **Pricing Calculator** + **TCO Calculator** to produce the 3-year cost model. Calibrate against the $180K avoided capex.
- **Week 3**, Compliance matrix. Read the Microsoft Trust Center + Service Trust Portal pages for SOC 2, ISO 27001, GDPR, and HIPAA. Map each control to your design.
- **Week 4**, Identity + RBAC design. Whiteboard the role-to-scope mapping for partners, associates, paralegals, IT, and external counsel. Design the Conditional Access policy set. Decide P1 vs P2 sizing.
- **Week 5**, Migration runbook + change management plan. Apply Kotter's 8-Step model explicitly. Write the cutover narrative with rollback gates.
- **Week 6**, Risk register, peer review, and polish. If you have a study partner, swap capstones for a 1-hour structured review using the rubric above.

---

## What "submission" looks like

A single ZIP (or shared cloud folder) containing seven files:

- `01-Target-Architecture.pdf` (with embedded diagram, draw.io / Visio / Lucidchart all fine)
- `02-TCO-Cost-Model.xlsx` + `02-TCO-Cost-Model.pdf` (one-page exec summary in the PDF, math in the spreadsheet)
- `03-Compliance-Matrix.pdf`
- `04-Identity-RBAC-Design.pdf`
- `05-Migration-Runbook.pdf`
- `06-Change-Management-Plan.pdf`
- `07-Risk-Register.xlsx` + `07-Risk-Register.pdf`

Total length: roughly 25–35 pages of written deliverable plus the supporting spreadsheets. This is what a real consulting engagement at a firm of CBR's size would produce.

**Self-grading instructions.** Read your own deliverables 48 hours after finishing them, never on the same day. The 48-hour gap forces you to read what you *actually wrote*, not what you *meant to write*. Score honestly against the rubric. If you score below 80, identify the weakest two deliverables and rewrite them.

---

## Optional stretch goals

- **(+5 points)** Add an actual Bicep template (Module 6) that deploys the Azure Files + Storage Account + Recovery Services Vault + Sentinel workspace from your architecture. Push it to a personal GitHub repo.
- **(+5 points)** Write the **partner-meeting narrative**, a 1-page memo, plain language, that Margaret could read to the partnership at their next monthly meeting. No tech jargon. Use the *Pyramid Principle* (Minto, *The Pyramid Principle*, 1978) to structure it.
- **(+5 points)** Add a **24-month-from-now reassessment**, what should CBR revisit at the 24-month mark of operating on Azure (Reservation re-purchase, Conditional Access tuning, etc.)? Cite the Microsoft CAF *Manage* methodology.
- **(+5 points)** Map your design to **AWS equivalents** as a sanity check (S3 + EFS instead of Azure Files; AWS Backup instead of Azure Backup; etc.). What would change about the recommendation, and why did Azure win for CBR? Cite the cross-course material in `03-AWS-Cloud-Practitioner` and `04-AWS-Solutions-Architect-Associate` Module 1.

---

## Why this scenario (Cornell-style framing)

A 110-person law firm sits in the gravity well between "small business with one IT generalist" and "enterprise with a security team." It's the *most common* size class of new Azure customer in 2025–2026 the segment Microsoft itself targets most actively with M365 + Azure Files + Sentinel bundles. The constraints (GDPR, state bar, retention, capex avoidance) are *real* they were paraphrased from multiple Microsoft customer-case write-ups in the 2024 Verticals: Legal series.

When you finish this capstone, you'll be able to walk into a real engagement of this size and contribute substantively, not just pass an exam. That's the graduate-level professional standard.

---

> "There's no learning without doing. The exam tests recognition; the capstone tests judgment.", Capstone authoring rubric, adapted from the Cornell SC Johnson College of Business case method.
