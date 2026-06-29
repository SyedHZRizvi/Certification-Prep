# 📋 Module 9 Cheat Sheet: GRC, Risk & Compliance

> One page. 20% of the exam. Print it.

---

## 🏛️ Governance Hierarchy

```
Policy   (WHY + WHAT, board level)
Standard (HOW MUCH / WHICH, mandatory specifics)
Procedure (HOW, step by step)
Guideline (CONSIDER, recommendation)
Baseline (MINIMUM acceptable config)
```

---

## 💰 Quantitative Risk Formulas

```
SLE = AV × EF
ALE = SLE × ARO
```

Example: AV=$200k, EF=30%, ARO=0.25 → SLE=$60k, **ALE=$15k/yr**.

---

## ⚖️ Risk Treatment

| | What |
|---|------|
| **Avoid** | Stop the activity |
| **Mitigate** | Apply controls |
| **Transfer** | Insurance / outsource |
| **Accept** | Documented sign-off |

---

## 🤝 Vendor Agreements (memorize!)

| Acronym | Means |
|---------|-------|
| **NDA (Non-Disclosure Agreement)** | Confidentiality |
| **MSA** | Umbrella contract |
| **SOW** | Project scope under MSA |
| **SLA (Service Level Agreement)** | Performance metrics + remedies |
| **MOU** | Non-binding intent |
| **MOA** | Binding agreement |
| **BPA** | Business partnership |
| **ISA** | System interconnection |
| **DPA** | GDPR (General Data Protection Regulation) processor |
| **BAA** | HIPAA business associate |

---

## 📋 Frameworks vs Regulations

| Frameworks (voluntary) | Regs (mandatory) |
|------------------------|------------------|
| NIST CSF, 800-53, RMF | HIPAA, HITECH |
| ISO 27001 / 27002 | GDPR, CCPA (California Consumer Privacy Act) |
| CIS Controls v8 | PCI-DSS (contractual) |
| COBIT | SOX, GLBA |
| CSA CCM (cloud) | FISMA, FedRAMP |

**NIST CSF functions:** Identify → Protect → Detect → Respond → Recover (+ Govern in 2.0)

---

## 🛠️ BCP / DR Metrics (MEMORIZE)

| Acronym | Means |
|---------|-------|
| **RTO (Recovery Time Objective)** | Max acceptable DOWNTIME |
| **RPO (Recovery Point Objective)** | Max acceptable DATA LOSS (time) |
| **MTTR** | Avg time to recover |
| **MTBF** | Avg between failures |
| **MTTD** | Avg time to detect |
| **MTTC** | Avg time to contain |

🧠 *RTO = time. RPO = data.*

---

## 🌡️ DR Site Types

| Site | Setup | RTO |
|------|-------|-----|
| Hot | Fully ready, real-time sync | Minutes |
| Warm | Equipment in place, periodic sync | Hours-days |
| Cold | Empty facility | Days-weeks |
| Cloud DR | Varies | Varies |

---

## 💾 Backup

**3-2-1:** 3 copies, 2 media types, 1 off-site.

✅ **Immutable backup** = ransomware-resistant.
✅ **Air-gapped backup** = physically disconnected.
✅ **Test restores**, backup ≠ tested restore.

---

## 🎭 Exercise Types

```
Tabletop → Walkthrough → Simulation → Parallel → Full-Interruption
   talk      step-thru    live          DR-side    actual cutover
```

---

## 🏆 Exam Power Phrases

- ✅ "Documented risk acceptance signed by exec"
- ✅ "Continuous third-party monitoring"
- ✅ "Sign DPA for GDPR / BAA for HIPAA"
- ✅ "Test the DR plan annually"
- ✅ "Immutable backups + 3-2-1"
- ❌ "PCI is a law"
- ❌ "ALE = ARO"
- ❌ "Acceptance is irresponsible"
- ❌ "Annual training is enough"

---

## ✏️ Quick Self-Check

1. Compute: AV=$1M, EF=10%, ARO=2 → SLE = ? ALE = ?
2. Match: GDPR / HIPAA / PCI / SOX to their domains.
3. SLA / SOW / MSA, what does each do?
4. Hot vs warm vs cold site, RTO comparison.
5. NIST CSF functions in order?

---

➡️ [Module 10: Application & Data Security](../Module-10-Application-Data-Security/Reading.md)
