# 📋 Module 8 Cheat Sheet: Security Operations

> One page. The biggest domain (28%). Print and study daily.

---

## 🚨 NIST IR Lifecycle (MEMORIZE ORDER)

```
1. Preparation
2. Detection & Analysis
3. Containment
4. Eradication
5. Recovery
6. Lessons Learned
```

🧠 **"Please Don't Cause Even Reckless Lapses"**

---

## 🔥 Order of Volatility (capture in THIS order)

```
1. CPU registers / cache
2. RAM / running processes / netconns
3. Temp files / swap / pagefile
4. Disk
5. Remote / archival logs
6. Physical config / topology
```

🚨 Capture memory BEFORE shutdown.

---

## 📊 SIEM vs SOAR

| | SIEM | SOAR |
|---|------|------|
| Function | Detect | Respond |
| Output | Alerts | Actions / tickets |
| Examples | Splunk, Sentinel, Elastic | Phantom, XSOAR, Tines |

---

## 📜 Log Source Cheat Cards

| Log | Provides |
|-----|----------|
| Firewall | Allow/deny + 5-tuple |
| IDS/IPS | Signature/anomaly alerts |
| OS / Sysmon | Process, auth, service events |
| EDR | Process trees + behavioral |
| DNS | Domain resolutions |
| Auth | Logins / MFA / failures |
| NetFlow / sFlow / IPFIX | Flow metadata only |
| PCAP | Full packet payloads (huge) |

---

## 🔍 Forensics Vocabulary

| | What |
|---|------|
| Acquisition | Bit-for-bit forensic image |
| Hash verify | SHA-256 original = SHA-256 image |
| Chain of custody | Documented evidence handling |
| Legal hold | Suspend deletion |
| E-discovery | Litigation data production |
| Write blocker | Read-only hardware for evidence |
| Working copy | Analyze on COPY, never original |

---

## 🩹 Vulnerability Scoring

| Acronym | Means |
|---------|-------|
| **CVE** | Unique vuln ID |
| **CVSS** | 0-10 severity score |
| **CWE** | Weakness category (CWE-89=SQLi) |
| **EPSS** | Probability of exploitation |
| **KEV** | CISA's "exploited NOW" list, patch FIRST |

Priority = (CVSS or EPSS) × asset criticality × exposure.

---

## 🔬 Scan & Test Types

| | What |
|---|------|
| Credentialed | Logged in (most accurate) |
| Non-credentialed | External view |
| Agent-based | Continuous host reporting |
| Active scan | Sends probes |
| Passive | Listens only |
| Black-box pen test | Tester knows nothing |
| White-box | Full info |
| Gray-box | Partial info |
| Red / Blue / Purple | Offense / Defense / Both |

---

## 🗑️ Data Destruction

| Method | Works on |
|--------|----------|
| Crypto-erase | Encrypted drives (incl. SSDs) |
| Wipe / overwrite | HDDs (multiple passes) |
| Degauss | Magnetic media ONLY (not SSD) |
| Shred / pulverize | Anything physical |
| Incinerate | Regulated; some industries |

---

## 🎭 Exercise Types

| | What |
|---|------|
| Tabletop | Discussion only |
| Walkthrough | Step-by-step rehearsal |
| Simulation | Controlled live |
| Parallel | DR site runs alongside prod |
| Full-interruption | Actual cutover (risky) |

---

## 🏆 Exam Power Phrases

- ✅ "Capture volatile memory first"
- ✅ "Document chain of custody"
- ✅ "Patch KEV + high-EPSS + high-CVSS first"
- ✅ "SOAR playbook for mass response"
- ✅ "Lessons learned → updated playbook"
- ❌ "Wipe and re-image before triage"
- ❌ "Degauss the SSD"
- ❌ "Original drive for analysis"
- ❌ "Tabletop tests technology" (it doesn't)

---

## ✏️ Quick Self-Check

1. NIST IR phases in order?
2. Order of volatility, top 4?
3. CVSS / EPSS / KEV, one line each?
4. SIEM vs SOAR difference?
5. Why does forensic work always use a copy?

---

➡️ [Module 9: GRC, Risk & Compliance](../Module-09-GRC-Risk-Compliance/Reading.md)
