---
permalink: /06-Azure-Administrator/
title: Azure Administrator Track (AZ-104)
---

# ☁️ Azure Administrator Track (AZ-104)

**☁️ Cloud · Azure** › Administrator (AZ-104)

> **Goal:** Pass the Microsoft Certified: Azure Administrator Associate (AZ-104) exam at 700/1000 or higher on your first attempt.
> **Duration:** 6–8 weeks part-time (10–12 hrs/week)
> **Cost:** $165 USD (exam fee) · cert is valid 1 year, renewable free online
> **Difficulty:** Associate · AZ-900 strongly recommended first

---

## ✨ Why This Certification Matters

### 🎯 The promise

The Microsoft Certified: Azure Administrator Associate (AZ-104) is the credential that takes you from someone who *understands* Azure to someone trusted to *operate* it in production. It is the most-listed Azure certification in mid-level cloud job postings, the entry credential for almost every Microsoft partner consulting role, and the proof-of-skill that opens the door to the Solutions Architect Expert, DevOps Engineer Expert, and Security Engineer Associate tiers. Pass AZ-104 and you are no longer a "cloud-curious" IT pro — you are a credentialed Azure operator.

### 💼 Career outcomes after passing

- **Azure Cloud Administrator** ($95K–$130K) — the headline role; runs Azure subscriptions, identities, storage, compute, and networking day-to-day
- **Cloud Engineer (Microsoft stack)** ($105K–$140K) — IC-track at most Microsoft-leaning enterprises
- **Hybrid Infrastructure Engineer** ($110K–$145K) — AZ-104 plus Windows Server experience commands a premium (laddering into course 25, AZ-800/801)
- **Cloud Consultant (Microsoft Partner)** ($115K–$160K) — billable consulting at gold/solutions partners (Avanade, Insight, Sogeti, Cognizant)
- **DevOps Engineer (Azure DevOps + AKS)** ($120K–$160K) — AZ-104 is the foundation; AZ-400 layers on top
- **Solutions Architect (Microsoft track)** ($135K–$185K) — AZ-104 is the floor; AZ-305 is the next rung

Average compensation uplift after passing: **15–25%** in the 6–12 months following certification, per Microsoft Learn's 2024 Learner Outcomes Report and Robert Half. AZ-104 sits in the middle of the most coherent ladder in the Microsoft ecosystem: **AZ-900 (course 05) → AZ-104 (this course) → AZ-305 (Solutions Architect Expert) / AZ-400 (DevOps Expert) / AZ-500 (Security Engineer)**.

### 🏛️ Why The Cert Hub's version is different

- **Built on primary-source citations, Bloom's-taxonomy question design, and real-world case studies** — 
- **Story-driven lessons (not flashcard punishment)** — concepts grounded in real customer scenarios before any service is named
- **Original questions only** — every quiz and practice exam written from Microsoft's published skills-measured outline; no copyrighted dumps
- **Real-world capstone scenario** — a 14-week scenario standing up a HIPAA + HITRUST production Azure landing zone for a 4,200-person regional health system on a $1.6M budget
- **One author, one voice** — coherent vocabulary across all 10 modules, three practice exams, and the capstone
- **Updated for the 2026 AZ-104 blueprint** — including Microsoft Entra terminology, current VPN Gateway/ExpressRoute pricing tiers, and the latest Azure Monitor + Policy posture

### 🚀 Ready to start?

Six to eight weeks of evening study, a $10–$25/month pay-as-you-go Azure subscription so every CLI and PowerShell snippet sticks as finger memory, and three practice exams that match the live exam's difficulty curve.

Begin with [Module 1: Subscriptions & Resource Hierarchy →](./Module-01-Subscriptions-Resource-Hierarchy/Reading.md)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:

- Design and manage Azure subscriptions, management groups, and resource hierarchy
- Configure Microsoft Entra ID, RBAC, Conditional Access, and PIM
- Stand up storage accounts, blobs, file shares, and File Sync — and pick the right redundancy
- Deploy and manage virtual machines, scale sets, App Services, ACI, and AKS
- Build virtual networks with peering, VPN/ExpressRoute, NSGs, Application Gateway, and Load Balancer
- Protect workloads with Azure Backup, Site Recovery, and Azure Migrate
- Monitor everything with Azure Monitor, Log Analytics, alerts, Policy, and Resource Locks
- Drive most of it from Azure CLI **and** PowerShell — not just the portal

---

## 📚 The 10 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Subscriptions & Resource Hierarchy](./Module-01-Subscriptions-Resource-Hierarchy/Reading.md) | 3 hrs | Tenants → mgmt groups → subs → RGs, tags, cost mgmt, moving resources |
| 2 | [Entra ID & RBAC](./Module-02-Entra-ID-RBAC/Reading.md) | 4 hrs | Users, groups, B2B, Conditional Access, MFA, RBAC, custom roles, PIM |
| 3 | [Storage Accounts & Blobs](./Module-03-Storage-Accounts-Blobs/Reading.md) | 4 hrs | Account kinds, LRS/ZRS/GRS/GZRS, tiers, lifecycle, encryption, SAS, AzCopy |
| 4 | [Azure Files & File Sync](./Module-04-Azure-Files-File-Sync/Reading.md) | 2.5 hrs | SMB/NFS shares, AD auth, File Sync, cloud tiering, snapshots |
| 5 | [Virtual Machines](./Module-05-Virtual-Machines/Reading.md) | 4 hrs | VM sizes, AZ vs AS, managed disks, images, extensions, VMSS, autoscale |
| 6 | [App Services & Containers](./Module-06-App-Services-Containers/Reading.md) | 3 hrs | App Service plans, slots, scaling, ACI, AKS clusters & node pools |
| 7 | [Virtual Networks](./Module-07-Virtual-Networks/Reading.md) | 4 hrs | VNets, subnets, peering, endpoints, VPN Gateway types, ExpressRoute, hub-spoke |
| 8 | [Network Security](./Module-08-Network-Security/Reading.md) | 4 hrs | NSGs, ASGs, Azure Firewall, App Gateway WAF, Front Door, Load Balancer, DNS |
| 9 | [Backup, Recovery & Migration](./Module-09-Backup-Recovery-Migration/Reading.md) | 3 hrs | Recovery Services vault, VM/file backup, ASR, Azure Migrate |
| 10 | [Monitor & Governance](./Module-10-Monitor-Governance/Reading.md) | 3 hrs | Monitor, Log Analytics, alerts, Policy & initiatives, Locks |

**Total study time:** ~35 hours reading + 10 hours videos + 8 hours labs/quizzes = **~53 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–5 | 28 Q · 50 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 6–10 | 45 Q · 80 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before exam | 55 Q · 100 min | ⭐⭐⭐⭐⭐ |

**Plus:** Spend $10–$25/month on an Azure pay-as-you-go subscription and **do every CLI/PowerShell snippet in this course yourself**. The exam has drag-drop task ordering — you need finger memory, not just visual memory.

---

## 🎓 Capstone & Recommended Readings

Two new course-root resources extend this AZ-104 program beyond exam prep into graduate-level professional standard case-method learning:

- **[Capstone Project](./Capstone-Project.md)** — a 14-week, 7-deliverable scenario where you stand up a HIPAA + HITRUST production Azure landing zone for a 4,200-person regional health system on a $1.6M budget. Integrates every module via a 100-point rubric. Built for the elevation spec's "graduate-level professional" bar.
- **[Recommended Readings](./Recommended-Readings.md)** — the canonical textbooks (Exam Ref AZ-104 / CAF / Nadella's *Hit Refresh*), seminal papers (Saltzer & Schroeder 1975 on least privilege; Brewer 2000 on CAP), industry channels (John Savill, Adam Marczak, Microsoft Mechanics, Tim Warner), and free academic courses (MIT 6.824, Stanford CS-144) that reinforce the underlying CS.

---

## 📖 The Single Most Important Resource

🔗 **[Microsoft Learn AZ-104 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-104)** — the exact, current list of "skills measured." Print it. Tick off every bullet as you study. Microsoft updates this every 3–6 months — always trust the latest version over any third-party course.

Also bookmark:

- 🔗 [Azure documentation](https://learn.microsoft.com/azure/) — official docs
- 🔗 [Microsoft Learn free sandbox modules](https://learn.microsoft.com/training/courses/az-104t00) — hands-on practice without your own subscription
- 🔗 [Azure Architecture Center](https://learn.microsoft.com/azure/architecture/) — reference architectures

---

## 🎓 What Is The AZ-104 Exam?

| Detail | Specification |
|--------|---------------|
| Provider | Microsoft / Pearson VUE |
| Cost | $165 USD (varies by country) |
| Time | 100 minutes |
| Questions | 40–60 (exact count varies per exam form) |
| Pass mark | 700/1000 (≈ 70%) |
| Format | Multiple choice + multi-select + drag-drop task ordering + Yes/No groups + 1–2 case studies |
| Delivery | Pearson VUE test center or OnVUE online proctored |
| Retake | Wait 24 hrs after 1st failure, 14 days after 2nd–4th, 1 year after 5th |
| Validity | 1 year — renew free via online assessment on Microsoft Learn |
| Prereq | None required (AZ-900 strongly recommended) |

### Domain Weights (Memorize These)

| Domain | Weight |
|--------|--------|
| Manage Azure identities & governance | 20–25% |
| Implement & manage storage | 15–20% |
| Deploy & manage Azure compute | 20–25% |
| Implement & manage virtual networking | 15–20% |
| Monitor & maintain Azure resources | 10–15% |

---

## 🚦 Recommended Path (6-Week Plan)

```
Week 1: Module 1 (governance) + Module 2 (Entra/RBAC)
        → 10 quiz questions/day, get an Azure free account
Week 2: Module 3 (storage) + Module 4 (files)
        → Build a storage account, upload via AzCopy
Week 3: Module 5 (VMs) → Practice-Exam-1
        → Deploy a VM via CLI AND PowerShell
Week 4: Module 6 (compute) + Module 7 (networking)
        → Build a hub-spoke VNet by hand
Week 5: Module 8 (net sec) + Module 9 (backup/migration)
        → Configure NSGs, take a VM backup
Week 6: Module 10 (monitor) + Practice-Exam-2 + Final-Mock-Exam
        → Re-quiz on weak domains → SCHEDULE EXAM
```

8-week pace: stretch Weeks 4–5 across two weeks each.

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ **Studied portal only** — exam asks about CLI/PowerShell parameter order. Practice both.
2. ❌ **Glossed over networking** — NSG rule precedence and effective rules trip up 40% of candidates.
3. ❌ **Confused similar services** — Storage redundancy (LRS/ZRS/GRS/GZRS), VPN Gateway SKUs, Load Balancer vs App Gateway vs Front Door.
4. ❌ **Skipped hands-on labs** — drag-drop task-ordering questions are unforgiving if you've never done the steps.
5. ❌ **Misread case studies** — case studies hide the requirements ("must be zone-redundant", "lowest cost"). Underline keywords.
6. ❌ **Out-of-date material** — Azure renames things constantly ("Azure AD" → "Microsoft Entra ID"). Use 2024+ resources.
7. ❌ **Time pressure** — 100 min for 40–60 questions + case studies means ~90 sec/question. Don't get stuck.

---

## 🎬 Start Here

👉 [**Module 1: Subscriptions & Resource Hierarchy**](./Module-01-Subscriptions-Resource-Hierarchy/Reading.md)

The cloud is just someone else's computer. You're about to learn how to run it like a pro. 💪
