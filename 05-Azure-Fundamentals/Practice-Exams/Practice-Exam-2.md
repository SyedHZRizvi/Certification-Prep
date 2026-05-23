# 🧪 Practice Exam 2 — AZ-900 (Full-Course Check)

> **Conditions:** Set a 40-minute timer. 40 questions. Treat it like the real thing.
> **Pass mark:** 28/40 (70%) — minimum to be confident for the real exam
> Take this AFTER finishing ALL 6 modules.

---

## 📝 Questions

### 1. Which describes Platform-as-a-Service (PaaS)?
A. You manage hardware, OS, runtime, and apps
B. You build the datacenter yourself
C. You manage only users and data; provider manages everything else
D. You manage only your code, data, and configuration; provider manages OS and runtime

### 2. Which is an example of the OpEx model in the cloud?
A. Buying a $50,000 server upfront
B. Depreciating a 5-year storage array
C. Paying $0.018 per GB stored per month
D. Signing a 10-year hardware purchase order

### 3. The Azure region pair of "East US" is typically:
A. West Europe
B. Central US
C. West US
D. There is no pairing

### 4. Which two RBAC roles can grant access to other users? (Choose two)
A. Owner
B. Contributor
C. Reader
D. User Access Administrator

### 5. To enforce that all new resources MUST have a `CostCenter` tag, use:
A. Azure Policy with Append or Modify effect
B. Resource Lock
C. RBAC
D. Azure Monitor

### 6. Which Azure service provides cloud-native SIEM and SOAR?
A. Defender for Cloud
B. Azure Advisor
C. Azure Monitor
D. Microsoft Sentinel

### 7. Which service provides workload protection + a Secure Score?
A. Microsoft Defender for Cloud
B. Microsoft Sentinel
C. Azure Monitor
D. Azure Policy

### 8. Which is TRUE about Microsoft Entra ID?
A. It is the new name for Azure Active Directory
B. It uses Kerberos and LDAP like on-prem AD
C. It only works on-premises
D. It is an alternative to Active Directory Domain Services with identical features

### 9. Conditional Access requires which Entra ID edition?
A. Free
B. Office 365
C. P1 or higher
D. Government

### 10. Yes/No: Resource Locks apply to Owners as well as other roles.
A. Yes
B. No

### 11. Yes/No: A budget in Azure Cost Management will automatically shut down resources when 100% is reached.
A. Yes
B. No

### 12. Which is the MOST cost-effective option for a steady 3-year production workload?
A. Pay-As-You-Go
B. Spot VM
C. 3-year Reservation
D. Dev/Test pricing

### 13. The composite SLA of a workload depending on App Service (99.95%) and Azure SQL (99.99%) is approximately:
A. 99.99%
B. 99.94%
C. 99.95%
D. 100%

### 14. Which scenario fits Spot VMs?
A. Interruptible batch render farm
B. Production database
C. Critical front-end web server
D. Always-on logging server

### 15. Which is the modern Microsoft-recommended IaC language for Azure?
A. ARM JSON
B. Terraform
C. Bicep
D. Ansible

### 16. Which service answers "Is Azure (the platform) having an issue that affects MY resources?"
A. Azure Service Health
B. Azure Monitor
C. status.azure.com
D. Azure Advisor

### 17. Yes/No: status.azure.com requires login to view current Azure region status.
A. Yes
B. No

### 18. Azure Advisor provides recommendations in five pillars. Which is NOT one of them?
A. Cost
B. Reliability
C. Compliance
D. Security

### 19. To project on-premises servers into Azure for unified Policy and Defender, use:
A. Azure Migrate
B. Azure CLI
C. Azure Site Recovery
D. Azure Arc

### 20. Which is the BEST tool to physically ship 80 TB of data to Microsoft for ingestion?
A. Azure Data Box
B. ExpressRoute
C. VPN Gateway
D. Storage upload over HTTPS

### 21. Which TYPE of disk is recommended for most production VMs?
A. Standard HDD
B. Premium SSD
C. Standard SSD
D. Floppy disk

### 22. Yes/No: An Azure subscription belongs to exactly one Microsoft Entra ID tenant.
A. Yes
B. No

### 23. Yes/No: A management group can be nested up to 6 levels deep below the root.
A. Yes
B. No

### 24. Which Azure compute service is BEST for orchestrating hundreds of microservices in containers?
A. ACI
B. AKS
C. App Service
D. VM Scale Set

### 25. A team needs a single Docker container to run for 30 minutes once per day. The BEST service is:
A. AKS
B. App Service
C. ACI
D. VM

### 26. Which storage redundancy provides the BEST combined HA + DR?
A. LRS
B. ZRS
C. GZRS
D. GRS

### 27. Yes/No: Cosmos DB supports MongoDB and Cassandra APIs.
A. Yes
B. No

### 28. The Azure free account includes:
A. Unlimited free Azure VMs for 5 years
B. $200 USD credit for 30 days + 12 months of select services + always-free tier
C. Free Microsoft 365 for 1 year
D. Free ExpressRoute

### 29. To force MFA only when users sign in from outside the corporate network, use:
A. Plain MFA
B. Azure Policy
C. RBAC
D. Conditional Access

### 30. The MOST appropriate tool to MIGRATE an on-prem SQL Server with minimal compatibility changes is:
A. Azure SQL Database
B. Storage Account
C. Cosmos DB
D. Azure SQL Managed Instance

### 31. Which Azure service provides browser-based RDP/SSH to VMs WITHOUT exposing public IPs?
A. Front Door
B. VPN Gateway
C. ExpressRoute
D. Azure Bastion

### 32. Yes/No: Tags in Azure automatically inherit from a Resource Group to all resources inside it.
A. Yes
B. No

### 33. Which is BEST for centrally storing database connection strings and TLS certificates?
A. Azure Key Vault
B. Storage account
C. Resource group description
D. Environment variables only

### 34. Which Azure compute service is BEST for serving a Windows desktop experience to many remote workers?
A. App Service
B. Azure Virtual Desktop
C. AKS
D. Functions

### 35. Which is TRUE about Azure Hybrid Benefit?
A. It allows reusing existing on-prem Windows Server / SQL Server licenses (with Software Assurance) on Azure VMs
B. It is a free migration tool
C. It is a backup service
D. It is an identity sync tool

### 36. Which is TRUE about Azure Monitor?
A. It is a SIEM
B. It collects metrics, logs, and traces from your workloads with alerting
C. It is a CDN
D. It is part of Azure Backup

### 37. Which is the BEST way to enforce that VMs can only be created in approved regions?
A. RBAC Reader role
B. Azure Policy with Deny effect
C. Resource Lock
D. NSG

### 38. Which is the public, anonymous status dashboard for Azure?
A. status.azure.com
B. portal.azure.com → Service Health
C. Cost Management
D. Trust Center

### 39. The 3 principles of Zero Trust are:
A. Trust but verify, audit logs, perimeter security
B. Verify explicitly, use least-privilege access, assume breach
C. Encrypt, authenticate, authorize
D. Defense, response, recovery

### 40. Yes/No: Microsoft Sentinel can ingest logs from non-Azure sources like AWS, on-prem firewalls, and third-party SaaS apps.
A. Yes
B. No

---

## 🎯 Answer Key (No Cheating!)

```
1.  D    11. B    21. B    31. D
2.  C    12. C    22. A    32. B
3.  C    13. B    23. A    33. A
4.  A,D  14. A    24. B    34. B
5.  A    15. C    25. C    35. A
6.  D    16. A    26. C    36. B
7.  A    17. B    27. A    37. B
8.  A    18. C    28. B    38. A
9.  C    19. D    29. D    39. B
10. A    20. A    30. D    40. A
```

---

## Detailed answer rationales

**Q1. Answer: D.** PaaS = customer manages code, data, configuration; Microsoft manages OS, runtime, scaling. C describes SaaS. A is IaaS. B is on-prem datacenter ownership. **Takeaway:** PaaS hides OS and runtime.

**Q2. Answer: C.** Pay-per-GB monthly is the textbook OpEx pattern. A/B/D are CapEx (buying assets / committing to long-dated procurement). **Takeaway:** Consumption pricing = OpEx.

**Q3. Answer: C.** Microsoft documents East US ↔ West US as a paired region. A is wrong because pairs are within a geography (West Europe pairs to North Europe). B (Central US) is in the same geography but not the documented pair. D is wrong (the pair exists). **Takeaway:** Memorize a few canonical pairs — East US↔West US, North Europe↔West Europe, Japan East↔Japan West.

**Q4. Answer: A, D.** Owner grants access; User Access Administrator manages access specifically. B (Contributor) cannot grant access — the canonical Contributor distinction. C (Reader) can only view. **Takeaway:** Owner OR User Access Administrator = grant-access; Contributor explicitly *cannot*.

**Q5. Answer: A.** Azure Policy with Append or Modify effect adds/changes resource fields (like tags) at deploy time or via remediation. B (Lock) prevents delete/modify but doesn't enforce tag content. C (RBAC) controls who, not what shape. D (Monitor) is observability, not enforcement. **Takeaway:** Enforce *what resources look like* = Policy.

**Q6. Answer: D.** Sentinel is Microsoft's cloud-native SIEM/SOAR. A (Defender for Cloud) is CSPM + workload protection, not SIEM. B (Advisor) is recommendations. C (Monitor) is workload metrics, not SIEM. **Takeaway:** SIEM/SOAR = Sentinel. CSPM = Defender for Cloud.

**Q7. Answer: A.** Defender for Cloud's headline features are CSPM + Secure Score + CWPP. B (Sentinel) is SIEM/SOAR. C (Monitor) is observability. D (Policy) is compliance rules, no score. **Takeaway:** "Secure Score" is the Defender for Cloud signature.

**Q8. Answer: A.** Entra ID is the post-2023 name for Azure AD. B is wrong — Entra ID uses OAuth/SAML/OIDC, *not* Kerberos/LDAP (which on-prem AD DS uses). C is wrong — Entra is cloud-only. D is wrong — features and protocol are different from AD DS. **Takeaway:** Entra ID = Azure AD (renamed). Different from on-prem AD DS in protocol, structure, and feature.

**Q9. Answer: C.** Conditional Access requires Entra ID P1 or higher. Free tier doesn't include it. **Takeaway:** Conditional Access ⇒ Entra ID P1+.

**Q10. Answer: A (Yes).** Resource locks apply to *everyone* including Owners — until the lock itself is removed. The locks override RBAC for delete/modify actions. **Takeaway:** Locks are universal — including Owners.

**Q11. Answer: B (No).** Budgets *alert*; they do NOT shut down resources. (You can wire alerts to Logic Apps to automate shutdown.) **Takeaway:** Budget = notification, not enforcement.

**Q12. Answer: C.** 3-year Reservation gives the biggest discount (up to 72%) for a steady, predictable 3-year workload. A is full price. B (Spot) can be evicted. D (Dev/Test) requires MSDN subscription. **Takeaway:** Steady predictable 24/7 = Reservation, longest term.

**Q13. Answer: B.** 0.9995 × 0.9999 ≈ 0.9994 = 99.94%. A is the higher single component (wrong — composite is always lower). C is the lower single component (wrong — composite is lower than both). D is "no degradation" (impossible). **Takeaway:** Composite SLA always lower than the lowest single dependency.

**Q14. Answer: A.** Batch render farms are interruptible — Spot's eviction is acceptable. B/C/D all require always-on. **Takeaway:** Spot = batch / render / dev / fault-tolerant queue workers.

**Q15. Answer: C.** Bicep is Microsoft's recommended modern Azure IaC language. A (ARM JSON) is the older format Bicep compiles to. B (Terraform) is third-party multi-cloud. D (Ansible) is config management, not Azure-native IaC. **Takeaway:** Bicep = modern Azure-only IaC.

**Q16. Answer: A.** Service Health is the *personalized* view of Azure platform issues affecting *your* resources. B (Monitor) is your-workload metrics. C (status.azure.com) is public, anonymous, global. D (Advisor) is recommendations. **Takeaway:** Service Health = personalized Azure-platform issues.

**Q17. Answer: B (No).** status.azure.com is public — anyone can view without logging in. (The personalized view is in the portal at Service Health.) **Takeaway:** Public global = status.azure.com. Personalized = Service Health (in portal).

**Q18. Answer: C.** The five Advisor pillars are Cost, Security, Performance, Reliability, and Operational Excellence. *Compliance* is not one of them. **Takeaway:** Five pillars — no Compliance pillar; compliance is tracked elsewhere (Compliance Manager, Defender for Cloud).

**Q19. Answer: D.** Azure Arc extends Azure management (Policy, Defender, Monitor, RBAC) to non-Azure resources where they live — on-prem, AWS, GCP. A (Migrate) is for *moving* resources. B (CLI) is a tool. C (Site Recovery) is replication/DR, not unified management. **Takeaway:** Arc = manage non-Azure resources *in place*. Migrate = *move* them to Azure.

**Q20. Answer: A.** Azure Data Box is the physical-appliance offline transfer service for TB–PB scale. B (ExpressRoute) is online and capped at circuit speed. C (VPN) is too slow at this volume. D (HTTPS upload) is also too slow for 80TB. **Takeaway:** Mail in TB-PB = Data Box.

**Q21. Answer: B.** Premium SSD is Microsoft's recommended default for most production VM workloads. A (Standard HDD) is dev/test only. C (Standard SSD) is light prod. D is absurd (no floppy disks in cloud!). **Takeaway:** Premium SSD = production default.

**Q22. Answer: A (Yes).** A subscription belongs to exactly one Microsoft Entra ID tenant. (A tenant can have many subscriptions, but each subscription has one tenant.) **Takeaway:** Subscription:Tenant = many:one.

**Q23. Answer: A (Yes).** Microsoft documents up to 6 levels of nesting beneath the root MG. **Takeaway:** 6-level max — common exam trivia.

**Q24. Answer: B.** AKS is the only Microsoft-managed Kubernetes service — for orchestrating hundreds of microservices in containers. A (ACI) is single-container. C (App Service) doesn't orchestrate containers at scale. D (VMSS) is plain VM auto-scale, not container orchestration. **Takeaway:** Many containers + orchestration = AKS.

**Q25. Answer: C.** ACI = single Docker container, fastest start, perfect for short batch jobs. A (AKS) is overkill for one container. B (App Service) doesn't fit a 30-min batch container well. D (VM) is the most expensive option. **Takeaway:** One container, short job = ACI.

**Q26. Answer: C.** GZRS (Geo-Zone-Redundant Storage) = ZRS (across AZs in primary region) + LRS in paired region = best HA + DR combined. A (LRS) is single-DC only. B (ZRS) survives DC loss but not region. D (GRS) survives region but not best in-region HA. **Takeaway:** GZRS = best of both.

**Q27. Answer: A (Yes).** Cosmos DB supports SQL/NoSQL (native), MongoDB, Cassandra, Gremlin, and Table APIs. **Takeaway:** Cosmos = multi-model, multi-API.

**Q28. Answer: B.** The Azure free account: $200 USD credit for 30 days + 12 months of select services + always-free tier (Functions consumption, Cosmos DB free tier, F1 App Service, etc.). **Takeaway:** Memorize the three-part free-account offer.

**Q29. Answer: D.** Conditional Access is the policy engine that decides *when* to require MFA based on signals (location, device state, app, risk). A (plain MFA) is *always*-on, not conditional. B (Policy) governs resources, not auth. C (RBAC) governs permissions, not auth conditions. **Takeaway:** "MFA but only when X" = Conditional Access.

**Q30. Answer: D.** Azure SQL Managed Instance offers near-100% SQL Server compatibility — designed for complex SQL Server lift-and-shift. A (Azure SQL DB) is cloud-native, not 100% SQL Server compatible. B (Storage) is not a database. C (Cosmos) is NoSQL. **Takeaway:** "Lift-and-shift SQL Server with minimal changes" = SQL Managed Instance.

**Q31. Answer: D.** Azure Bastion provides browser-based RDP/SSH via a private hop — VMs have no public IPs. A (Front Door) is HTTPS, not RDP/SSH. B (VPN) requires client setup. C (ExpressRoute) is hybrid connectivity, not VM access. **Takeaway:** Browser RDP/SSH, no public IP = Bastion.

**Q32. Answer: B (No).** Tags do NOT inherit by default — you need an Azure Policy (e.g., the built-in "Inherit a tag from the resource group" policy) to enforce inheritance. **Takeaway:** Tag inheritance = Policy-enforced, not automatic.

**Q33. Answer: A.** Azure Key Vault is purpose-built for secrets, keys, and certificates, HSM-backed, with managed-identity integration. B/D are insecure. C is absurd. **Takeaway:** Secrets/keys/certs = Key Vault.

**Q34. Answer: B.** Azure Virtual Desktop streams Windows 10/11 desktops to many remote users. A (App Service) hosts web apps. C (AKS) is containers. D (Functions) is serverless code. **Takeaway:** Stream Windows desktops = AVD.

**Q35. Answer: A.** Azure Hybrid Benefit lets you bring existing on-prem Windows Server / SQL Server licenses (with Software Assurance) to Azure VMs for up to 85% discount. B/C/D conflate this with unrelated services. **Takeaway:** Hybrid Benefit = reuse on-prem licenses on Azure.

**Q36. Answer: B.** Azure Monitor is the workload-observability service — metrics, logs, traces, alerts. A (SIEM) is Sentinel. C (CDN) is Azure CDN / Front Door. D (Backup) is its own service. **Takeaway:** Monitor = your-workload observability.

**Q37. Answer: B.** Azure Policy with Deny effect blocks creation of non-compliant resources (e.g., outside approved regions). A (RBAC Reader) is about who, not what shape. C (Lock) blocks delete/modify, not creation in wrong region. D (NSG) is network filtering, not region restriction. **Takeaway:** "Restrict to approved regions" = Policy + Deny effect.

**Q38. Answer: A.** status.azure.com = public, global, anonymous Azure status. B is the personalized version in the portal. C is cost management. D is the compliance docs hub. **Takeaway:** Public global = status.azure.com.

**Q39. Answer: B.** Microsoft's documented three Zero Trust principles: Verify explicitly, Use least-privilege access, Assume breach. A scrambles the words. C lists the AAA triad. D lists the IR phases. **Takeaway:** Memorize verbatim: verify explicitly / least privilege / assume breach.

**Q40. Answer: A (Yes).** Sentinel ingests logs from anywhere — Azure, AWS, on-prem firewalls, M365, third-party SaaS — making it a true multi-source SIEM. **Takeaway:** Sentinel = multi-source SIEM/SOAR.

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 36–40 | 🏆 Ready for the Final Mock Exam |
| 28–35 | ✅ Solid — review wrong answers, then take Final Mock |
| 22–27 | ⚠️ Re-study weak modules; retake in 2 days |
| <22 | 🔁 Restart from the modules you missed; re-read cheat sheets |

---

## 🔍 Review Process

For EACH wrong answer:
1. Identify which module covered it (1–6)
2. Re-read the relevant Reading.md
3. Add the concept to your flashcards
4. Re-test on this question in 3 days

---

## 📍 Yes/No Practice (real exam style)

This exam included several Yes/No-style items (#10, #11, #17, #22, #23, #27, #32, #40). Microsoft AZ-900 features clusters of these in "case study" blocks. Practice scanning for the **single keyword** that determines the answer.

---

➡️ When ready: [Final Mock Exam](./Final-Mock-Exam.md) — 50 questions, 45 minutes, real exam length
