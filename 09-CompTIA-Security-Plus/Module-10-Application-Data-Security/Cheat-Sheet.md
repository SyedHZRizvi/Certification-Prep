# 📋 Module 10 Cheat Sheet: Application & Data Security

> One page. Last module, final touches before the practice exam.

---

## 🧪 AppSec Testing Quick-Pick

| Tool | When | What |
|------|------|------|
| **SAST** | Build | Reads code |
| **DAST** | Running app | Probes from outside |
| **IAST** | Running w/ agent | Inside-out hybrid |
| **SCA** | Build | Dependency CVEs |
| **RASP** | Production | In-process runtime block |
| **Fuzzing** | Test | Malformed inputs |
| **Pen test** | Pre-release | Human expert |

---

## 🔁 DevSecOps Pipeline Order

```
Commit  → Secret scan, pre-commit hooks
Build   → SAST, SCA, SBOM generation
Test    → DAST against staging, fuzzing
Deploy  → Image scan, signing, IaC scan
Prod    → RASP, WAF, EDR, log monitoring
```

---

## 🛡️ Threat Modeling

| Framework | Mnemonic |
|-----------|----------|
| **STRIDE** | Spoofing / Tampering / Repudiation / Info disclosure / DoS / Elevation |
| **PASTA** | Process for Attack Simulation and Threat Analysis |
| **DREAD** | Damage / Reproducibility / Exploitability / Affected / Discoverability |

---

## 🏷️ Data Classification

```
PUBLIC → INTERNAL → CONFIDENTIAL → RESTRICTED
              + PII / PHI / PCI / CHD / SPI / CUI / Trade Secret
```

---

## 🔐 3 Data States

| State | Protection |
|-------|-----------|
| **At Rest** | FDE, BitLocker, FileVault, TDE, encrypted backups |
| **In Transit** | TLS, IPSec, SSH, VPN, S/MIME |
| **In Use** | Confidential computing (SGX, SEV, Nitro Enclaves) |

---

## 🎭 Data Protection, The Right Tool

| Goal | Use |
|------|-----|
| Confidentiality w/ recovery | **Encryption** |
| Replace with vault reference | **Tokenization** |
| Display obscuring | **Masking** |
| Integrity / one-way | **Hashing** |
| Reversible w/ key | **Pseudonymization** |
| Irreversible (research) | **Anonymization** |
| Slow casual reader | **Obfuscation** |

---

## 🛡️ DLP Modes

| Mode | Catches |
|------|---------|
| **Network DLP** | Email / upload of sensitive content |
| **Endpoint DLP** | USB, print, screen capture |
| **Cloud DLP** | SaaS content (M365, Google Drive) |
| **Email DLP** | Outbound email specifically |

---

## 🌍 Sovereignty / Residency

| Term | Means |
|------|-------|
| Sovereignty | Local laws apply where data resides |
| Residency | Where data is stored |
| Localization | Legal requirement to keep in-country |

---

## 🛠️ Secure Coding (TOP 5 fixes)

1. **Parameterized queries** → SQLi
2. **Output encoding + CSP** → XSS
3. **Allow-list input validation**
4. **Server-side authorization checks** → IDOR
5. **Secrets manager** → no hardcoded creds

---

## 🏆 Exam Power Phrases

- ✅ "Parameterized queries / prepared statements"
- ✅ "Pre-commit secret scanning + secrets manager"
- ✅ "SCA + SBOM + signed artifacts"
- ✅ "True anonymization" (when GDPR scope must drop)
- ✅ "Confidential computing for in-use data"
- ❌ "Hardcoded secrets in code"
- ❌ "Hashing for confidentiality"
- ❌ "Pseudonymization meets GDPR anonymization"
- ❌ "WAF alone replaces secure coding"

---

## ✏️ Quick Self-Check

1. SAST vs DAST vs SCA, when each runs?
2. STRIDE letters?
3. 3 data states + protection mechanism?
4. Pseudonymization vs anonymization, GDPR implication?
5. PCI / PHI / PII, which reg covers each?

---

## 🎓 Now You're Ready

You've finished all 10 modules. Take **[Practice Exam 2](../Practice-Exams/Practice-Exam-2.md)**, then the **[Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md)**. Don't forget the [Flashcards](../Flashcards.md). Good luck. 🛡️
