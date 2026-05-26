# 📋 Module 6 Cheat Sheet: Server Security & Hardening

> Print. Tape. Drill before the exam.

---

## 🏛️ Physical Security Layers

| Layer | Examples |
|---|---|
| **Perimeter** | Fences, bollards, guards, lighting |
| **Building** | Badge readers, **mantrap / access control vestibule**, CCTV, visitor log |
| **Server room** | Caged racks, motion sensors, fire suppression (FM-200/Novec — NOT water) |
| **Component** | Tamper seals, chassis intrusion sensors, Kensington locks |

🚨 Wet-pipe sprinkler in server room = anti-pattern.

---

## 🚪 Firmware Stack

| Control | What |
|---|---|
| **UEFI / BIOS password** | Gate to firmware setup |
| **Secure Boot** | Only signed bootloaders run |
| **Measured Boot** | Hash chain in TPM PCRs |
| **TPM 2.0** | Tamper-resistant key + measurement chip |
| **SED** | Self-Encrypting Drive |
| **BitLocker / LUKS** | Disk encryption (Win/Linux) |

🧠 UEFI pw + Secure Boot together. Either alone is brittle.

---

## 🗝️ Access Control Models

| Model | One-liner |
|---|---|
| **DAC** | Owner decides (Linux/NTFS ACLs) |
| **MAC** | System enforces by clearance label (military) |
| **RBAC** | Roles grant permissions (most enterprise) |
| **ABAC** | Policy on attributes (cloud-flexible) |

---

## 🛡️ Identity Best Practices

- **One service account per service**
- **Least privilege**
- **gMSA** (Windows) — auto-rotated passwords
- **LAPS** — unique per-machine local admin passwords
- **Credential Guard** — LSA isolation vs Mimikatz
- **Tiered Admin** (Tier 0 / 1 / 2)
- **PAM + JIT** — time-boxed elevation with MFA
- **MFA** for admin + remote access

---

## 🩹 Patch Management

| Tool | Scope |
|---|---|
| **WSUS** | Windows |
| **MECM (SCCM)** | Windows + 3rd-party |
| **Intune** | Cloud-managed |
| **Red Hat Satellite** | RHEL |
| **Ansible / Puppet / Chef / Salt** | Cross-platform |
| **Tenable / Qualys / Rapid7** | Vuln scanning |

🧠 CISA **KEV** = highest priority (actively exploited).

---

## 📏 Security Baselines

| Source | Use |
|---|---|
| **CIS Benchmarks** | Industry standard L1 (basic) / L2 (strict) |
| **DISA STIGs** | US DoD-mandated |
| **Microsoft Security Baselines** | Official GPO templates |
| **Vendor guides** | RHEL, Ubuntu, vSphere |

---

## 🛡️ Endpoint Defense

| Tool | What |
|---|---|
| **AV** | Signature-based malware detection (legacy core) |
| **HIDS** | Host detects, alerts |
| **HIPS** | Host detects AND blocks |
| **EDR** | Behavioral + telemetry + IR (CrowdStrike, Defender, SentinelOne) |
| **FIM** | File integrity monitoring (Tripwire, AIDE, OSSEC) |

---

## 🔐 Hardening Checklist

✅ CIS/STIG baseline
✅ Remove unused roles/packages
✅ Disable SMB1, Telnet, FTP, unencrypted protocols
✅ Patch within SLA (critical < 7d, high < 30d)
✅ Host firewall default-deny ingress
✅ Encrypt at rest + in transit (TLS 1.2/1.3, SSH key)
✅ Audit logging → SIEM
✅ EDR + HIPS + FIM
✅ NTP from authoritative source
✅ UEFI pw + Secure Boot + TPM + SED
✅ CMDB up-to-date

**Windows extras:** Server Core, gMSA, Tiered Admin, Credential Guard, LAPS, AppLocker/WDAC, disable LLMNR/NBT-NS.

**Linux extras:** SELinux enforcing, SSH key-only, sudo command restrictions, audit SUID/SGID, restrictive mount options (`noexec`/`nosuid`/`nodev`).

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Apply CIS Benchmark"
- "Change default vendor credentials"
- "Segment OOB management network"
- "Least privilege + RBAC"
- "JIT + MFA"
- "Patch within KEV/SLA"
- "EDR + FIM + SIEM"
- "Self-Encrypting Drives + BitLocker (TPM)"

❌ Often **wrong**:
- "Default credentials are fine"
- "Antivirus is enough"
- "Shared admin password"
- "Wet sprinkler in server room"
- "Disable Secure Boot"
- "Patch when convenient"
- "Expose IPMI to internet"

---

## 🗓️ Facts To Memorize Cold

- 4 physical layers (perim/building/room/component)
- Mantrap = vestibule = anti-tailgate
- UEFI pw + Secure Boot together
- gMSA = auto-rotated
- HIDS detects, HIPS blocks, EDR is the modern superset
- CIS Levels 1 vs 2
- CISA KEV = "patch NOW"
- Domain weight: Security + DR = 24% of SK0-005

---

## ✏️ Quick Self-Check

Cover the answers and recite:
1. Mantrap purpose? ___
2. Why pair UEFI pw with Secure Boot? ___
3. RBAC vs DAC — one-liner each? ___
4. What is JIT in PAM and why? ___
5. CISA KEV — what is it? ___
6. Two Windows + two Linux hardening best practices? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 7: Networking for Servers](../Module-07-Networking/Reading.md)
