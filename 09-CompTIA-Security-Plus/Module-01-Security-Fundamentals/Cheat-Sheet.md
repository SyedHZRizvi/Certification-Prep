# 📋 Module 1 Cheat Sheet: Security Fundamentals

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎯 CIA Triad + Non-Repudiation

| Letter | Property | Protected by |
|--------|----------|--------------|
| **C** | Confidentiality | Encryption, ACLs, MFA |
| **I** | Integrity | Hashing, digital signatures |
| **A** | Availability | Redundancy, backups, DR |
| **N-R** | Non-repudiation | Digital signatures (private key) |

🚨 *Non-repudiation is NOT part of CIA — it's the 4th property.*

---

## 🔐 AAA + I

```
IDENTIFICATION → AUTHENTICATION → AUTHORIZATION → ACCOUNTING
    "I am X"      "Prove it"        "You may..."     "Logged"
```

---

## 🚪 Zero Trust Cheat Block

| Plane | Components |
|-------|-----------|
| **Control Plane** | Policy Engine, Policy Administrator, Adaptive Identity, Threat Scope Reduction, Policy-Driven Access Control |
| **Data Plane** | Policy Enforcement Point (PEP), Subject/System, Implicit Trust Zone |

🧠 **PE thinks. PA tells. PEP does.**

Adaptive Identity = risk-based auth (signals: device, location, time, behavior).

---

## 🛡️ Control Types × Categories (4×6 Grid)

| TYPE ↓  CATEGORY → | Preventive | Deterrent | Detective | Corrective | Compensating | Directive |
|---|---|---|---|---|---|---|
| **Technical** | Firewall, MFA | Login banner | IDS, SIEM | AV quarantine | Extra logging | "Use VPN" config |
| **Managerial** | Hiring policy | Audit threat | Quarterly review | Lessons learned | Risk acceptance | AUP |
| **Operational** | Awareness training | "Reward for fraud" sign | Guard patrol | IR drill | Manual review | SOP |
| **Physical** | Lock, mantrap | Visible camera | Motion sensor | Repair lock | Second guard | "No tailgating" sign |

🧠 Rule: **same device can fit multiple cells** depending on what it's doing.

---

## 🔄 Change Management — One-Liners

| Term | One-liner |
|------|-----------|
| **CAB** | Change Advisory Board — approves changes |
| **Impact analysis** | What breaks if we do this? |
| **Backout plan** | How we undo if it fails |
| **Maintenance window** | When the change actually happens |
| **SOP** | Step-by-step for repeatable changes |
| **CMDB** | Inventory of configs/systems |
| **Dependencies** | Other systems affected by this change |
| **Test results** | Validation in non-prod |
| **Ownership** | One named human accountable |

---

## 🏆 Exam Power Phrases

When you see these in answers, they're often **right**:

- ✅ "Apply the principle of least privilege"
- ✅ "Layer multiple controls (defense in depth)"
- ✅ "Re-evaluate continuously" (Zero Trust)
- ✅ "Gap analysis"
- ✅ "Compensating control"
- ✅ "Backout plan / impact analysis"

When you see these, they're often **wrong**:

- ❌ "Trust traffic from inside the network"
- ❌ "Disable logging to reduce noise"
- ❌ "Skip the change advisory step for speed"
- ❌ "Share a privileged account"
- ❌ "Non-repudiation is part of CIA"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Castle-and-moat trust (the opposite of Zero Trust)
- ❌ Conflating Authentication with Authorization
- ❌ Single control reliance (no defense in depth)
- ❌ Undocumented changes
- ❌ "We'll add logging later"

---

## 🗓️ Key Facts To Memorize Cold

- CIA = Confidentiality, Integrity, Availability
- AAA = Authentication, Authorization, Accounting
- 4 control TYPES: Technical, Managerial, Operational, Physical
- 6 control CATEGORIES: Preventive, Deterrent, Detective, Corrective, Compensating, Directive
- Zero Trust: PE (decides), PA (translates), PEP (enforces)
- Domain 1 weight: **12%** of Sec+ exam

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. The 3 letters of CIA + what each protects? ___
2. The 3 Zero Trust control-plane components? ___
3. Two-axis classification of a "visible 24/7 camera"? ___
4. What's the difference between Preventive and Deterrent? ___
5. What's a backout plan and when is it written? ___

If you can answer all 5 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Cryptography & PKI](../Module-02-Cryptography-PKI/Reading.md)
