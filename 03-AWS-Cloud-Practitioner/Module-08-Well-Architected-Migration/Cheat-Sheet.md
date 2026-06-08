# 📋 Module 8 Cheat Sheet: Well-Architected & Migration

> One page. Print it. Tape it to your monitor.

---

## 🏛️ The 6 Well-Architected Pillars (in order)

```
1. Operational Excellence , Run, monitor, improve systems
2. Security               , Protect data, identities, assets
3. Reliability            , Recover from failure, scale dynamically
4. Performance Efficiency , Use resources efficiently
5. Cost Optimization      , Right-size, avoid waste
6. Sustainability         , Minimize environmental impact (added 2021)
```

🧠 **"Old Sea Rats Pop Cool Sodas"**

---

## 🛠️ Well-Architected TOOL vs FRAMEWORK

- **Framework** = the 6 pillars + principles (the philosophy)
- **Tool** = free AWS service that scores your workload and lists improvements

---

## 🚛 The 6 Rs of Migration

| R | Description | Effort |
|---|-------------|--------|
| **Rehost** | Lift & shift (VM → EC2) | Low |
| **Replatform** | Lift, tinker, shift (MySQL on EC2 → RDS Aurora) | Low–Med |
| **Repurchase** | Switch product (on-prem CRM → Salesforce) | Med |
| **Refactor** | Rewrite cloud-native (monolith → Lambda) | High |
| **Retire** | Decommission | Trivial |
| **Retain** | Keep on-prem (for now) | Trivial |

🧠 Pick the right R per app, most migrations use 2–3 different Rs.

---

## 🛠️ AWS Migration Services

| Service | Use case |
|---------|----------|
| **MGN** (App Migration Service) | Lift-and-shift servers |
| **DMS** (+ SCT) | DB migration (incl. cross-engine) |
| **DataSync** | Bulk file transfer (NFS/SMB → S3/EFS/FSx) |
| **Transfer Family** | Managed SFTP/FTPS/FTP |
| **Snow Family** | Petabyte physical transfer |
| **Migration Hub** | Central tracking console |
| **App Discovery Service** | Inventory on-prem apps |

🎯 Servers → **MGN** · DBs → **DMS** · Files → **DataSync** · PB → **Snow**

---

## ☁️ Cloud Adoption Framework (CAF), 6 Perspectives

```
1. Business
2. People
3. Governance
4. Platform
5. Security
6. Operations
```

Different from the 6 pillars but a similar number. Enterprise transformation framework.

---

## 🤝 AWS Partner Network (APN)

| Tier | Order |
|------|-------|
| Select | Lowest |
| Advanced | Middle |
| Premier | Highest |

Two kinds: **Consulting Partners** (services) and **Technology Partners (ISVs)** (software).

---

## 🛠️ Operations & Help

| Service | What |
|---------|------|
| **AWS Professional Services** | AWS's consulting team |
| **AWS Managed Services (AMS)** | AWS operates YOUR account (Enterprise) |
| **AWS IQ** | On-demand contractors |
| **AWS re:Post** | Free community Q&A |
| **AWS Skill Builder** | Free + paid training |
| **AWS Knowledge Center** | Free FAQ articles |
| **AWS Activate** | Startup credits/program |

---

## 🎓 Certification Path

```
Foundational:  Cloud Practitioner (CLF-C02)  ← YOU
Associate:     SAA-C03, DVA-C02, SOA-C02, DEA-C01
Professional:  SAP-C02, DOP-C02
Specialty:     SCS, ANS, MLA, MLS, DBS, DAS, PAS
```

🎯 Logical next: **Solutions Architect Associate (SAA-C03)**.

---

## 🏆 Exam Power Phrases

✅ "Use the Well-Architected Tool to evaluate"
✅ "Lift-and-shift = Rehost (lowest effort)"
✅ "Refactor when business value justifies the cost"
✅ "Use MGN for servers, DMS for DBs, DataSync for files"
✅ "APN tiers: Select → Advanced → Premier"

Wrong:
❌ "5 pillars" (it's 6 since 2021)
❌ "DMS migrates servers" (DMS = databases)
❌ "All migrations should Refactor" (no, pick the right R)
❌ "Retire = keep on-prem" (Retire = decommission)

---

## ⚠️ Anti-Patterns

- ❌ Forcing Refactor on every app (over-engineering)
- ❌ Skipping the Well-Architected review on critical workloads
- ❌ Ignoring the Sustainability pillar
- ❌ Picking MGN for a DB migration (should be DMS)

---

## 🗓️ Key Facts

- 6 pillars, 6 Rs, 6 CAF perspectives (note the "6" theme!)
- Sustainability added 2021
- MGN replaced SMS / CloudEndure for server migration
- APN: Select → Advanced → Premier
- AMS = AWS-run AWS for Enterprise customers
- AWS re:Post = free community Q&A

---

## ✏️ Quick Self-Check

1. The 6 Well-Architected pillars? ___
2. The 6 Rs of migration + a scenario each? ___
3. CAF's 6 perspectives? ___
4. MGN vs DMS vs DataSync? ___
5. APN tiers? ___

---

## 🎯 Final Prep Steps

```
1. Take Practice Exam 2  → ../Practice-Exams/Practice-Exam-2.md
2. Drill missed topics
3. Take Final Mock Exam   → ../Practice-Exams/Final-Mock-Exam.md
4. Sleep well
5. BOOK THE EXAM. You got this. ☁️
```

---

➡️ Take [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) now.
