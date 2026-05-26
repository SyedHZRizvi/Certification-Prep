---
permalink: /24-CompTIA-Server-Plus/
title: CompTIA Server+ Track (SK0-005)
---

# 🖥️ CompTIA Server+ Track (SK0-005)

**🛡️ Infrastructure & Sysadmin** › CompTIA Server+ (SK0-005)

> **Goal:** Pass CompTIA Server+ (SK0-005) on the first attempt with a comfortable margin above 750/900.
> **Duration:** 5–7 weeks part-time (8–10 hrs/week)
> **Cost:** ~$369 USD (single voucher); cert is lifetime — no renewal required
> **Difficulty:** Intermediate · CompTIA recommends ~18–24 months of IT experience (A+ / Network+ helpful but not required)

---

## 🎯 What You'll Learn

By the end of this track, you'll be able to:
- Identify server hardware on sight — chassis form factors, redundant PSUs, ECC RAM modules, hot-swap bays, RAID controllers, and out-of-band management cards (iDRAC, iLO, IPMI, BMC)
- Administer both Windows Server (AD DS, DNS, DHCP, IIS, Hyper-V) and Linux servers (systemd, common daemons, package managers)
- Design storage systems: pick the right RAID level, decide SAN vs NAS, configure iSCSI/Fibre Channel, set up LUN masking and multipathing
- Stand up virtualization environments using VMware vSphere, Hyper-V, KVM, plus containers (Docker, Kubernetes basics)
- Plan disaster recovery — define RTO/RPO, pick backup strategies (full/incremental/differential/synthetic), implement the 3-2-1 rule, choose cold/warm/hot sites
- Harden servers — RBAC, service accounts with least privilege, patch management, CIS benchmarks, HIDS/HIPS
- Configure server-grade networking — NIC teaming, LACP, VLAN tagging, jumbo frames, load balancers
- Troubleshoot systematically — interpret POST codes, beep codes, LED indicators; isolate performance bottlenecks across CPU/RAM/disk/network

---

## 📚 The 8 Modules

| # | Module | Time | What You'll Master |
|---|--------|------|--------------------|
| 1 | [Server Hardware & Components](./Module-01-Server-Hardware/Reading.md) | 3 hrs | Form factors, ECC, redundant PSUs, RAID controllers, IPMI/iDRAC/iLO/BMC |
| 2 | [Server Administration (Windows & Linux)](./Module-02-Server-Administration/Reading.md) | 3.5 hrs | Windows Server roles, systemd, RDP/SSH/WinRM remote management |
| 3 | [Storage: RAID, SAN, NAS](./Module-03-Storage/Reading.md) | 3.5 hrs | RAID 0/1/5/6/10, Fibre Channel, iSCSI, NFS, SMB, dedup, thin/thick |
| 4 | [Virtualization & Containers](./Module-04-Virtualization/Reading.md) | 3 hrs | Type 1 vs Type 2 hypervisors, vSphere, Hyper-V, KVM, Docker, Kubernetes |
| 5 | [Disaster Recovery & Backup](./Module-05-Disaster-Recovery/Reading.md) | 3 hrs | RTO/RPO, backup types, 3-2-1, GFS, hot/warm/cold sites, replication |
| 6 | [Server Security & Hardening](./Module-06-Security/Reading.md) | 2.5 hrs | Physical security, UEFI, secure boot, RBAC, patching, CIS, HIDS/HIPS |
| 7 | [Networking for Servers](./Module-07-Networking/Reading.md) | 2.5 hrs | NIC teaming, LACP, VLAN tagging, jumbo frames, L4/L7 load balancers |
| 8 | [Troubleshooting & Documentation](./Module-08-Troubleshooting/Reading.md) | 3 hrs | POST/boot, LED/beep codes, bottlenecks, methodology, runbooks |

**Total study time:** ~24 hrs reading + ~10 hrs videos + ~10 hrs quizzes/exams = **~44 hours**

---

## 🧪 Practice Exams (Located in `Practice-Exams/`)

| Exam | When To Take It | Length | Difficulty |
|------|-----------------|--------|------------|
| [Practice-Exam-1](./Practice-Exams/Practice-Exam-1.md) | After Modules 1–4 | 45 Q / 45 min | ⭐⭐⭐ |
| [Practice-Exam-2](./Practice-Exams/Practice-Exam-2.md) | After Modules 5–8 | 65 Q / 65 min | ⭐⭐⭐⭐ |
| [Final-Mock-Exam](./Practice-Exams/Final-Mock-Exam.md) | 2–3 days before real exam | **90 Q / 90 min** | ⭐⭐⭐⭐⭐ |

Score 85%+ on the Final Mock before booking the real exam. The real Server+ scaled cut is 750/900 (~83%) — practice higher to leave room for nerves.

---

## 📖 The Single Most Important Resource

🔗 **[Professor Messer's free SK0-005 video course](https://www.professormesser.com/server-plus/sk0-005/sk0-005-video-training-course/)** — Hundreds of bite-sized videos covering every objective. Pair them with the [Mike Meyers Server+ All-in-One Exam Guide](https://www.mheducation.com/highered/product/comptia-server-certification-all-in-one-exam-guide-fifth-edition-exam-sk0-005-rountree/M9781260469929.html) for breadth + depth.

Honorable mentions:
- 📘 *CompTIA Server+ Study Guide* (Troy McMillan, Sybex) — clear writing, scenario-heavy
- 📘 *Mike Meyers Server+ All-in-One* — the most rigorous coverage; long but comprehensive
- 📘 *CompTIA Server+ Cert Guide* (Pearson) — exam-aligned, lots of practice questions

---

## 🎓 What Is The Server+ Exam?

| Detail | Specification |
|--------|---------------|
| Provider | CompTIA |
| Exam code | SK0-005 (current version since 2020; long-life refresh) |
| Cost | ~$369 USD |
| Time | 90 minutes |
| Questions | **Up to 90** — multiple-choice (single + multi) and Performance-Based Questions (PBQs) |
| Pass mark | **750 / 900** (~83%) — scaled, not raw percentage |
| Delivery | Pearson VUE test center OR online proctored |
| Validity | **Lifetime** — no CEUs, no expiration. Rare among CompTIA certs. |
| Prerequisites | None official; CompTIA recommends A+ + Network+ + 18–24 months hands-on server experience |

### Domain Weights (Know Where to Spend Study Time)

| Domain | Weight | Modules |
|--------|--------|---------|
| 1.0 Server Hardware Installation & Management | **18%** | Module 1 |
| 2.0 Server Administration | **30%** | Modules 2, 4, 7 |
| 3.0 Security & Disaster Recovery | **24%** | Modules 5, 6 |
| 4.0 Troubleshooting | **28%** | Modules 3 (storage TS), 8 |

Server Administration and Troubleshooting together are **58%** of the exam — don't shortchange Modules 2, 4, 7, and 8.

---

## 🚦 Recommended Path

### 5-Week Intensive Plan
```
Week 1: Modules 1, 2          → Quizzes
Week 2: Modules 3, 4          → Quizzes → Practice Exam 1
Week 3: Modules 5, 6          → Quizzes
Week 4: Modules 7, 8          → Quizzes → Practice Exam 2
Week 5: Flashcards + Final Mock + review → REAL EXAM
```

### 7-Week Relaxed Plan
```
Weeks 1-2: Modules 1, 2 + Professor Messer domain 1
Weeks 3-4: Modules 3, 4 + Practice Exam 1 + Messer domain 2
Weeks 5-6: Modules 5, 6, 7 + Practice Exam 2 + Messer domains 3-4
Week 7:    Module 8 + Flashcards drill + Final Mock → REAL EXAM
```

---

## ⚠️ The 7 Most Common Reasons People Fail

1. ❌ **Underestimated RAID arithmetic** — You will be asked to compute usable capacity for RAID 5/6/10 with N disks. Drill until you can do it in 10 seconds.
2. ❌ **Confused SAN with NAS** — SAN is block (presents LUNs over FC/iSCSI); NAS is file (NFS/SMB). Sec+ tests every angle.
3. ❌ **Memorized RTO/RPO but couldn't apply them** — Scenarios give you a tolerance and ask you to pick a backup/replication strategy. Practice with numbers.
4. ❌ **Skipped Linux** — At least 30% of admin questions assume systemd/SSH/permissions. Don't avoid Linux because you're Windows-first.
5. ❌ **Treated virtualization as "the same as VM in my laptop"** — Type 1 vs Type 2, vMotion/live migration, snapshots vs templates vs clones — all tested.
6. ❌ **Ignored out-of-band management** — iDRAC, iLO, IPMI, BMC are critical Server+ vocabulary. Know what they do and how they differ from in-band.
7. ❌ **No time management on PBQs** — Like Sec+, the PBQs eat clock. Skip them, do the MCQs, return.

---

## 🃏 Use the Flashcards

Server+ is acronym-heavy (RAID, iSCSI, IPMI, BMC, LACP, NFS, SMB, MTBF, MTTR, RTO, RPO, GFS, CIS, HIDS, HIPS…). The [Master Flashcards](./Flashcards.md) has 130+ cards covering every acronym, hardware spec, RAID math example, and DR concept. Drill them daily — even 10 minutes/day beats one 70-minute cram.

---

## 🎬 Start Here

👉 [**Module 1: Server Hardware & Components**](./Module-01-Server-Hardware/Reading.md)

You got this. 🖥️
