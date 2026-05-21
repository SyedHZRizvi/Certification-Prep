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
