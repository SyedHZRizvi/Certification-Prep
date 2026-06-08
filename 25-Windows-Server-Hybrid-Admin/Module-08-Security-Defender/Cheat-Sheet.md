# 📋 Module 8 Cheat Sheet: Server Security & Defender

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🛡️ Defender for Servers, P1 vs P2 (MEMORIZE)

| Feature | P1 | **P2** |
|---------|-----|---------|
| MDE (EDR) | ✅ | ✅ |
| Defender Antivirus | ✅ | ✅ |
| Vulnerability Assessment | ❌ | **✅ MDVM or Qualys** |
| File Integrity Monitoring | ❌ | ✅ |
| **JIT VM access** | ❌ | **✅** |
| Adaptive Application Controls | ❌ | ✅ |
| Network Hardening | ❌ | ✅ |
| Regulatory Compliance | ❌ | ✅ |
| Free LA ingest | ❌ | **500 MB/node/day** |
| List price | ~$5/server/mo | ~$15/server/mo |

🔥 **Covers both Azure VMs AND Arc-enabled servers equally.**

---

## 🔓 JIT VM Access (P2)

- Closes RDP/SSH/WinRM ports at NSG by default
- Request opens port for **time-bound** access (default ≤ 3 hrs)
- Per-request source IP (specific / range / any)
- Requires `Microsoft.Compute/virtualMachines/openConnectionPortDirectly/action`

---

## 🤖 MDE Capabilities

- **EDR** with MITRE ATT&CK mapping
- **ASR** (Attack Surface Reduction), 17 named rules
- **MDVM** (Vulnerability Management), in P2
- **Live Response**, remote PS-like session without inbound port
- **Network Protection**, blocks malicious domains/IPs
- **Auto-investigation & remediation**
- **Tamper Protection**, prevents disabling MDAV

### Top ASR rules

| Rule | Purpose |
|------|---------|
| Block Office apps creating child processes | Defeats macro→PS attacks |
| Block credential stealing from LSASS | Anti-Mimikatz |
| Block JS/VBS launching downloaded EXE | Anti-fileless |
| Block executable content from email | Anti-phishing payload |
| Block Office macro Win32 calls | Anti-macro |

---

## 🚧 WDAC (Modern App Allowlisting)

- **Kernel mode**, tamper-resistant
- **Audit** mode first, **Enforce** mode after
- Rule types: signed code, hash, FilePath, FilePublisher
- Distributed via GPO, MEM, MDM, MSI

🚨 Always Audit for 7+ days before Enforce.

---

## 🔐 Credential Guard

```
LSASS  →  isolated  ←  Hyper-V hypervisor (VBS)
                                     ▲
                              TPM + Secure Boot
```

Prerequisites: VT-x/AMD-V + EPT/RVI · UEFI · Secure Boot · Hyper-V hypervisor

### Protected Users group (complementary)

- Disables NTLM
- Disables DES, RC4 Kerberos
- Disables credential caching (no offline auth)
- Disables unconstrained delegation

---

## 🏰 Secured-Core Server (Windows Server 2022+)

| Component | Provides |
|-----------|----------|
| TPM 2.0 | Hardware root of trust |
| UEFI Secure Boot | Signed boot code only |
| DMA Protection | No Thunderbolt DMA attacks |
| VBS + HVCI | Memory integrity via hypervisor |
| System Guard | Boot integrity + attestation |

🔥 **Requires certified OEM hardware**, no software shortcut.

---

## 🪖 Exploit Guard

- **ASR** rules (above)
- **Controlled Folder Access**, anti-ransomware allowlist
- **Network Protection**, blocks malicious domains in browsers
- **Exploit Protection**, DEP, ASLR, CFG (formerly EMET)

---

## 🛂 Tier-0 Hardening Triad

```
PAW (Privileged Access Workstation)
    + Credential Guard + Protected Users + LAPS
    + Tier 0/1/2 admin segregation
    + WDAC
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Defender for Servers P2 for FIM, JIT, VA, compliance"
- ✅ "WDAC in Audit then Enforce"
- ✅ "Credential Guard + Protected Users for Tier-0 admins"
- ✅ "JIT VM access with 3-hour max"
- ✅ "ASR rule to block Office child processes"
- ✅ "Secured-core server on certified hardware for max protection"
- ✅ "PAW for Tier-0 admin tasks only"

Usually **wrong**:

- ❌ "Defender for Servers P1 has JIT"
- ❌ "AppLocker is the modern default"
- ❌ "Credential Guard works without VBS"
- ❌ "Disable Tamper Protection for AV testing"
- ❌ "Always-open RDP is fine if firewall is in place"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ P1 across the board when compliance needs FIM/VA (need P2)
- ❌ WDAC straight to Enforce mode (lockout risk)
- ❌ PAW used for email/browsing (compromises Tier-0)
- ❌ JIT skipped because "RDP is rare anyway" (still an open port)
- ❌ Skipping Credential Guard because of one driver incompatibility (audit it; replace the driver)

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| EDR + AV on every server | Defender for Servers (P1 minimum) |
| Vulnerability scanning + FIM + compliance | Defender for Servers P2 |
| Close RDP by default; allow ad-hoc admin | JIT VM access (P2) |
| Block ransomware from encrypting Documents | Controlled Folder Access |
| Block Office macro attacks | ASR "Block Office apps creating child processes" |
| Kernel-level app allowlisting | WDAC (modern AppLocker) |
| Defeat Mimikatz / Pass-the-Hash | Credential Guard + VBS |
| Disable NTLM for admin accounts | Protected Users AD group |
| Hardware-rooted trust + max integrity | Secured-core server |
| Tier-0 admin workstation | PAW |
| Detect "user added to Domain Admins" | Log alert on Event 4732 |
| Centralized AV management for non-Azure | Defender for Servers via Arc |

---

## ✏️ Quick Self-Check

1. Defender for Servers P1 vs P2, pick 3 P2-only features? ___
2. JIT default max duration? ___
3. WDAC vs AppLocker, which is modern, which is legacy? ___
4. Credential Guard prerequisites? ___
5. Protected Users group effects? ___
6. Secured-core server hardware needs? ___

---

➡️ [Module 9: Backup, ASR & Migration](../Module-09-Backup-Migration/Reading.md)
