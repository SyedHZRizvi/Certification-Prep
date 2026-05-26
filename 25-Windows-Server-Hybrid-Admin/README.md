---
permalink: /25-Windows-Server-Hybrid-Admin/
title: Windows Server Hybrid Administrator Associate (AZ-800 + AZ-801)
---

# 🖥️ Windows Server Hybrid Administrator Associate (AZ-800 + AZ-801)

**🖥️ Hybrid · Microsoft** › Windows Server Hybrid Administrator Associate (AZ-800 + AZ-801)

> **Goal:** Pass *both* required Microsoft exams — **AZ-800** (Administering Windows Server Hybrid Core Infrastructure) and **AZ-801** (Configuring Windows Server Hybrid Advanced Services) — at 700/1000 or higher on first attempt for each.
> **Duration:** 10–14 weeks part-time (10–12 hrs/week)
> **Cost:** ~$165 USD per exam · ~$330 total · cert is valid 1 year, renewable free online
> **Difficulty:** Associate · AZ-104 (Azure Administrator) and 5+ years of Windows Server experience strongly recommended

---

## ✨ Why This Certification Matters

### 🎯 The promise

The Microsoft Certified: Windows Server Hybrid Administrator Associate (AZ-800 + AZ-801) is the credential for the systems engineer who *runs* the real enterprise — the one with on-prem Active Directory, Hyper-V clusters, file servers, DFS, DHCP, IPAM, IIS, plus the Azure Arc / Entra Connect / Azure Monitor / Azure Backup integration every Fortune 500 actually uses in 2026. It is one of the most demanding credentials Microsoft awards at the associate tier — passing **two** exams — and one of the most respected in the hybrid-infrastructure career market.

### 💼 Career outcomes after passing

- **Windows Systems Administrator** ($85K–$125K) — running on-prem AD, file servers, Hyper-V
- **Hybrid Infrastructure Engineer** ($110K–$155K) — Windows Server + Azure Arc + Entra Connect at scale
- **Senior Systems Engineer** ($120K–$170K) — design and ops across hybrid environments
- **Active Directory Engineer / Identity Engineer** ($115K–$165K) — AD DS forests, FSMO design, Entra ID integration
- **Infrastructure Architect (Microsoft track)** ($140K–$195K) — typical 3–5 years post-AZ-800/801
- **DevOps Engineer (Microsoft stack)** ($120K–$160K) — Windows Server + Azure + DSC / PowerShell
- **Senior Cloud Consultant (Microsoft Partner)** ($130K–$185K + bonus) — Avanade, Insight, Cognizant

This is the senior credential in the most coherent Microsoft sysadmin ladder: **AZ-900 (course 05) → AZ-104 (course 06) → AZ-800/801 (this course) → AZ-305 (Solutions Architect Expert)**. AZ-800/801 holders typically command a 20–30% premium over AZ-104-only peers thanks to the breadth and depth required to pass both exams.

### 🏛️ Why The Cert Hub's version is different

- **Engineered to the Cornell · Harvard · Princeton · Stanford pedagogical standard** — AD design taught from named sources (Lamport on distributed time, the Kerberos 1988 paper, Microsoft's design papers on FSMO and replication topology, Saltzer & Schroeder on least privilege)
- **Story-driven lessons (not flashcard punishment)** — every module begins with a real enterprise scenario (an AD forest recovery after ransomware, a Hyper-V cluster split-brain, a file-server migration of 4,200 user mailboxes)
- **Original questions only** — every quiz and practice exam written from Microsoft's published skills-measured outlines for both AZ-800 and AZ-801; no copyrighted dumps
- **Real-world case studies** — Maersk's NotPetya AD recovery, SolarWinds 2020 (AD as the target), a real hospital's Storage Spaces Direct migration, a regional bank's Azure Arc rollout
- **One author, one voice** — coherent vocabulary across all 10 modules and both exam blueprints
- **Updated for the 2026 AZ-800 / AZ-801 blueprint** — Windows Server 2022/2025, Storage Replica/Spaces Direct, Azure Arc-enabled servers, Azure Stack HCI, the current Defender for Servers posture

### 🚀 Ready to start?

Ten to fourteen weeks. Set up a real AD lab (Hyper-V on Windows 11 Pro or VMware Workstation). Build an Entra Connect lab against a free Microsoft 365 developer tenant. Plan to sit AZ-800 around week 9 and AZ-801 around week 13.

Begin with [Module 1: Active Directory →](./Module-01-Active-Directory/Reading.md)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:
- Deploy and manage **Active Directory Domain Services** at enterprise scale — forests, trusts, FSMO roles, sites, GPOs, and RODCs
- Integrate on-prem AD with **Microsoft Entra ID** via Entra Connect, password hash sync, pass-through auth, and federation
- Build resilient networking with **Windows DNS Server, DHCP, IPAM**, and IP Address Management for hybrid environments
- Design **file servers and storage** using S2D, Storage Replica, DFS-N, DFS-R, ReFS, FSRM, Work Folders, BranchCache, and iSCSI
- Operate **Hyper-V** at scale — Gen 1 vs Gen 2 VMs, nested virtualization, Hyper-V Replica, shielded VMs, live migration, SR-IOV
- Onboard servers to **Azure Arc** for centralized management of on-prem, multicloud, and edge Windows Server workloads
- Monitor everything from a single pane using **Azure Monitor**, the Azure Monitor Agent (AMA), Data Collection Rules, and Log Analytics
- Secure servers with **Microsoft Defender for Servers**, WDAC, Credential Guard, secured-core, and just-in-time VM access
- Protect data using **Azure Backup (MARS/MABS)** and recover with **Azure Site Recovery (ASR)** and the **Storage Migration Service**
- Automate with **PowerShell 7, DSC, JEA, Azure Automation, and Azure Automanage**

---

## 📚 The 10 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Active Directory Domain Services](./Module-01-Active-Directory/Reading.md) | 5 hrs | Domains/forests/trusts, OUs, GPOs, replication, FSMO, sites, AD Recycle Bin, RODC |
| 2 | [Identity & Entra ID Hybrid Integration](./Module-02-Identity-Entra/Reading.md) | 4 hrs | Entra Connect, Cloud Sync, PHS/PTA/federation, Entra Join, hybrid join, seamless SSO |
| 3 | [Networking, DNS & DHCP](./Module-03-Networking-DNS/Reading.md) | 4 hrs | DNS zones, conditional forwarders, DNSSEC, DHCP scopes/superscopes, IPAM, firewall, NLB |
| 4 | [File Servers, Storage & Storage Spaces](./Module-04-File-Storage/Reading.md) | 5 hrs | S2D, Storage Replica, DFS-N/R, ReFS vs NTFS, FSRM, Work Folders, BranchCache, iSCSI |
| 5 | [Hyper-V & Virtualization](./Module-05-HyperV/Reading.md) | 4 hrs | Gen 1/Gen 2 VMs, nested virt, Hyper-V Replica, shielded VMs, vSwitch, live migration, SR-IOV |
| 6 | [Hybrid Cloud with Azure Arc](./Module-06-Azure-Arc/Reading.md) | 4 hrs | Arc onboarding, Arc-enabled servers/K8s, policy at scale, Update Management, ESUs via Arc |
| 7 | [Azure Monitor & Hybrid Monitoring](./Module-07-Azure-Monitor/Reading.md) | 4 hrs | AMA, DCRs, Log Analytics, Workbooks, alerts, VM Insights, perf counters, KQL basics |
| 8 | [Server Security & Defender](./Module-08-Security-Defender/Reading.md) | 4 hrs | Defender for Servers P1/P2, MDE, JIT VM access, WDAC, Credential Guard, secured-core, Exploit Guard |
| 9 | [Backup, ASR & Migration](./Module-09-Backup-Migration/Reading.md) | 4 hrs | Azure Backup, MARS, MABS, Recovery Services Vault, ASR, Storage Migration Service, Azure Migrate |
| 10 | [PowerShell, DSC & Automation](./Module-10-PowerShell-Automation/Reading.md) | 4 hrs | PS 7 vs 5.1, remoting, JEA, DSC, Azure Automation, Automanage, admin scripting |

**Total study time:** ~42 hours reading + 12 hours videos + 12 hours labs/quizzes = **~66 hours**

Modules 1–5 are the AZ-800 backbone (core infrastructure). Modules 6–10 are the AZ-801 backbone (advanced services + hybrid). The exam split isn't perfectly clean — Identity (M2) and Networking (M3) appear in both — but this is the standard split most candidates use.

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty | Focus |
|------|-----------------|--------|------------|-------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–5 | 40 Q · 80 min | ⭐⭐⭐ | AZ-800 core infrastructure |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 6–10 | 60 Q · 120 min | ⭐⭐⭐⭐ | AZ-801 hybrid + advanced services |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before each exam | 60 Q · 120 min | ⭐⭐⭐⭐⭐ | Combined — mirror of either exam |

**Plus:** Spin up a **Windows Server 2022 Eval ISO** (free, 180 days) in Hyper-V or VirtualBox AND a **$10–$25/month Azure pay-as-you-go subscription**. Hybrid Administrator is brutal without hands-on time. Microsoft asks "click-through" sequencing questions you cannot pass from theory.

---

## 📖 The Single Most Important Resources

🔗 **[Microsoft Learn AZ-800 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-800)** and **[AZ-801 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/az-801)** — the exact, current list of "skills measured" for each exam. Print both. Tick off every bullet as you study. Microsoft updates these every 3–6 months — always trust the latest version.

Also bookmark:
- 🔗 [Windows Server documentation](https://learn.microsoft.com/windows-server/) — official docs
- 🔗 [Azure Arc documentation](https://learn.microsoft.com/azure/azure-arc/) — the heart of AZ-801
- 🔗 [Microsoft Learn free sandbox modules — AZ-800](https://learn.microsoft.com/training/courses/az-800t00) and [AZ-801](https://learn.microsoft.com/training/courses/az-801t00) — hands-on without your own infra
- 🔗 [Windows Admin Center](https://learn.microsoft.com/windows-server/manage/windows-admin-center/overview) — the modern admin GUI
- 🔗 [Microsoft Tech Community — Windows Server blog](https://techcommunity.microsoft.com/category/windows-server) — current product announcements

---

## 🎓 What Are The AZ-800 and AZ-801 Exams?

| Detail | AZ-800 | AZ-801 |
|--------|--------|--------|
| Full title | Administering Windows Server Hybrid Core Infrastructure | Configuring Windows Server Hybrid Advanced Services |
| Provider | Microsoft / Pearson VUE | Microsoft / Pearson VUE |
| Cost | $165 USD (varies by country) | $165 USD (varies by country) |
| Time | 120 minutes | 120 minutes |
| Questions | 40–60 (exact count varies per form) | 40–60 (exact count varies per form) |
| Pass mark | 700/1000 (≈ 70%) | 700/1000 (≈ 70%) |
| Format | Multiple choice + multi-select + drag-drop ordering + Yes/No groups + case studies | Same |
| Delivery | Pearson VUE test center or OnVUE online proctored | Same |
| Retake | Wait 24 hrs after 1st fail, 14 days after 2nd–4th, 1 year after 5th | Same |
| Validity | 1 year — renew free via online assessment on Microsoft Learn | Same |
| Prereq | None required (AZ-104 + hands-on Windows Server strongly recommended) | None required (AZ-800 should be passed first in practice) |

### Domain Weights (Memorize These)

**AZ-800 — Administering Windows Server Hybrid Core Infrastructure**

| Domain | Weight |
|--------|--------|
| Deploy and manage AD DS in on-prem and cloud environments | 30–35% |
| Manage Windows Servers and workloads in a hybrid environment | 10–15% |
| Manage virtual machines and containers | 15–20% |
| Implement and manage an on-prem and hybrid networking infrastructure | 15–20% |
| Manage storage and file services | 15–20% |

**AZ-801 — Configuring Windows Server Hybrid Advanced Services**

| Domain | Weight |
|--------|--------|
| Secure Windows Server on-prem and hybrid infrastructures | 25–30% |
| Implement and manage Windows Server high availability | 10–15% |
| Implement disaster recovery | 15–20% |
| Migrate servers and workloads | 20–25% |
| Monitor and troubleshoot Windows Server environments | 15–20% |

---

## 🚦 Recommended Path (12-Week Plan)

```
Week 1–2:  Module 1 (Active Directory) + spin up a 2-DC lab in Hyper-V
           → Promote a forest, create OUs, link a GPO
Week 3:    Module 2 (Identity/Entra) → install Entra Connect to a free Entra tenant
Week 4:    Module 3 (Networking/DNS/DHCP) → configure a conditional forwarder + DHCP failover
Week 5:    Module 4 (File/Storage) → build a 2-node S2D-like cluster, configure DFS-N
Week 6:    Module 5 (Hyper-V) + Practice-Exam-1 → schedule AZ-800
Week 7:    AZ-800 exam · 1-day break · start Module 6 (Azure Arc) → onboard your lab servers
Week 8:    Module 7 (Azure Monitor) → wire AMA + DCRs to a Log Analytics workspace
Week 9:    Module 8 (Security/Defender) → enable Defender for Servers P2 on a test sub
Week 10:   Module 9 (Backup/ASR/Migration) → take a MARS backup + ASR replication test
Week 11:   Module 10 (PowerShell/Automation) + Practice-Exam-2
Week 12:   Final-Mock-Exam · review wrong-answer modules · SCHEDULE AZ-801
```

10-week pace: skip the explicit lab weeks and learn one cert at a time.
14-week pace: stretch Modules 1, 4, and 6 across two weeks each — they're the densest.

---

## ⚠️ The 7 Most Common Reasons People Fail These Exams

1. ❌ **Treated AZ-801 as "AZ-800 + a little Azure"** — it's the opposite. Arc, Monitor, Defender, ASR, and Migrate dominate AZ-801. If you don't have an Azure sub, you will fail.
2. ❌ **Skipped Group Policy preference vs setting** — and the Filtering/Block Inheritance/Enforced precedence rules. These are 5+ questions guaranteed on AZ-800.
3. ❌ **Confused Entra Connect (legacy) with Entra Cloud Sync** — they coexist and have different capabilities. The exam tests when each is the right choice.
4. ❌ **Memorized cmdlet names but not parameter order** — drag-drop "complete this command" items demand finger memory.
5. ❌ **Ignored Storage Spaces Direct prerequisites** — RDMA NICs, 10 GbE+, identical hardware, 2–16 node range. Misremembering S2D limits is the #1 storage miss.
6. ❌ **Underestimated DNS** — conditional forwarders, DNSSEC trust anchors, GlobalNames zones, scavenging. DNS is 8% of total marks across the two exams.
7. ❌ **Out-of-date material** — "Azure AD" → "Microsoft Entra ID" (2023), "Azure AD Connect" → "Microsoft Entra Connect Sync" (2023). Use 2024+ resources only.

---

## 🎬 Start Here

👉 [**Module 1: Active Directory Domain Services**](./Module-01-Active-Directory/Reading.md)

You're about to learn the most enduring administrative skill in the Microsoft ecosystem. Forests planted today still serve enterprises 20 years from now. Get the fundamentals right and the cloud becomes a tool you wield, not a wave you ride. 💪
