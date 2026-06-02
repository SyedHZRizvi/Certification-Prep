# 🧪 Final Mock Exam — Windows Server Hybrid Administrator (AZ-800 + AZ-801)

> **Conditions:** Set a 120-minute timer. 60 questions. This is structured to mirror EITHER exam (combined content across all 10 modules).
> **Pass mark:** 42/60 (≈ 70%)
> Take this 2–3 days BEFORE your actual exam. Pick AZ-800 or AZ-801 to schedule based on which you're sitting first.

---

## 📝 Questions

### 1. The Active Directory hierarchy from top to bottom is:
A. Domain → Forest → Tree → OU → Object
B. Forest → Tree → Domain → OU → Object
C. Tree → Forest → Domain → OU → Object
D. Forest → Domain → Tree → OU → Object

### 2. Which FSMO role handles password updates and is the authoritative time source for the domain?
A. RID Master
B. PDC Emulator
C. Domain Naming Master
D. Infrastructure Master

### 3. The default inter-site replication interval (IP transport) is:
A. 15 seconds
B. 15 minutes
C. 180 minutes (3 hours)
D. 24 hours

### 4. GPO precedence (last wins) is:
A. Local → Domain → Site → OU
B. Local → Site → Domain → OU
C. Site → Domain → OU → Local
D. OU → Domain → Site → Local

### 5. To allow Help Desk to reset passwords for one OU without giving Domain Admin, use:
A. Add to Domain Admins
B. Delegate Control on the OU
C. Create FGPP
D. Add to Enterprise Admins

### 6. The lightweight Entra sync agent for multi-disconnected-forest M&A is:
A. Entra Connect Sync
B. Entra Cloud Sync
C. Microsoft Identity Manager
D. AD FS

### 7. Microsoft's 2026 recommended hybrid sign-in is:
A. Federation with AD FS
B. PHS + Seamless SSO
C. PTA only
D. Smart card only

### 8. Hybrid Entra Join device writeback requires:
A. Entra Cloud Sync
B. Entra Connect Sync
C. AD FS only
D. Either Cloud Sync or Connect Sync

### 9. The DNS feature BEST for resolving a partner zone whose NS list rarely changes:
A. Conditional forwarder
B. Stub zone
C. Global Names zone
D. WINS

### 10. DNSSEC's DS record is published in:
A. The signed zone itself
B. The parent zone, anchoring trust
C. The TXT zone-info record
D. Every NS record set

### 11. DHCP failover MCLT default is:
A. 5 minutes
B. 15 minutes
C. 1 hour
D. 4 hours

### 12. Windows Firewall with Advanced Security has the following three profiles:
A. Internal, External, DMZ
B. Domain, Private, Public
C. Trusted, Untrusted, Guest
D. Production, Test, Dev

### 13. Storage Spaces Direct supports how many nodes per cluster?
A. 1–8
B. 2–16
C. 4–32
D. 8–64

### 14. The Windows Server edition required for S2D is:
A. Standard
B. Datacenter
C. Essentials
D. Hyper-V Server (free)

### 15. Storage Replica synchronous mode latency budget is approximately:
A. 1 ms
B. 5 ms
C. 50 ms
D. 200 ms

### 16. DFS-R uses what technology to transfer only changed file parts?
A. Block-level mirroring
B. Remote Differential Compression (RDC)
C. SMB Multichannel
D. RPC over IPsec

### 17. Which file system supports block cloning + integrity streams but CANNOT be the OS boot drive?
A. NTFS
B. ReFS
C. FAT32
D. ExFAT

### 18. The Hyper-V VM generation that supports vTPM and Secure Boot is:
A. Gen 1
B. Gen 2
C. Both
D. Neither

### 19. Hyper-V Replica frequency options are:
A. 1 sec, 1 min, 1 hour
B. 30 sec, 5 min, 15 min
C. 5 min only
D. 1 hour, 4 hours, 24 hours

### 20. The Hyper-V live migration auth method that does NOT require admin to remote into source is:
A. CredSSP
B. NTLM
C. Kerberos with constrained delegation
D. Smart card

### 21. **Yes/No** — Mark each statement.

**S1:** An OU is a security boundary equivalent to a domain.
**S2:** ReFS can be the OS boot drive.
**S3:** S2D requires identical hardware across all nodes.

A. No / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

### 22. The Azure resource type for an Arc-enabled server is:
A. `Microsoft.Compute/virtualMachines`
B. `Microsoft.HybridCompute/machines`
C. `Microsoft.Web/sites`
D. `Microsoft.Kubernetes/connectedClusters`

### 23. The Connected Machine agent communicates with Azure over:
A. Outbound HTTPS (443) only
B. Inbound RDP (3389)
C. Outbound SSH (22)
D. Inbound HTTP (80)

### 24. Least-privilege role for SP-based Arc onboarding is:
A. Owner
B. Contributor
C. Reader
D. Azure Connected Machine Onboarding

### 25. To auto-install AMA on every Arc-enabled server in a subscription, use:
A. Group Policy with a script
B. Azure Policy with DINE effect + remediation task
C. SCCM
D. PowerShell DSC v1

### 26. Update Management center patches:
A. Azure VMs only
B. Azure VMs + Arc-enabled servers (Windows + Linux)
C. Arc machines only
D. Windows only

### 27. The agent that replaced Microsoft Monitoring Agent (MMA) in August 2024 is:
A. SCOM agent
B. AMA (Azure Monitor Agent)
C. OMS Linux Agent
D. Defender for Endpoint agent

### 28. The query language used in Log Analytics is:
A. T-SQL
B. KQL (Kusto Query Language)
C. PowerShell
D. JMESPath

### 29. A Data Collection Rule (DCR) specifies:
A. On-prem AD password policy
B. What data to collect AND where to ship it
C. Log Analytics workspace billing tier
D. Azure region for backups

### 30. Log Analytics workspace default interactive retention is:
A. 7 days
B. 30 days
C. 90 days
D. 730 days

### 31. Which alert type evaluates a KQL query on a schedule?
A. Metric alert
B. Log alert (scheduled query rule)
C. Activity log alert
D. Service health alert

### 32. Which Defender for Servers PLAN includes JIT VM access?
A. P1
B. P2
C. Both
D. Neither

### 33. Defender for Servers bundles which other Microsoft product?
A. Microsoft Defender for Identity
B. Microsoft Defender for Endpoint (MDE)
C. Microsoft Sentinel
D. Microsoft Purview

### 34. The default maximum JIT VM access duration is:
A. 30 minutes
B. 1 hour
C. 3 hours
D. 24 hours

### 35. WDAC enforces at:
A. User mode
B. Kernel mode
C. Hypervisor mode
D. Network layer

### 36. Credential Guard relies on:
A. BitLocker
B. Virtualization-Based Security (VBS) + Hyper-V isolation
C. Active Directory
D. Sentinel SIEM

### 37. Adding admin accounts to the Protected Users group DISABLES:
A. NTLM + DES + RC4 Kerberos + credential caching + unconstrained delegation
B. Only NTLM
C. Only RC4
D. Smart card auth

### 38. MARS allows a maximum of how many backups per day per machine?
A. 1
B. 3
C. 8
D. Unlimited

### 39. Recovery Services Vault redundancy (LRS/ZRS/GRS) can be changed:
A. Anytime
B. Only BEFORE the first backup
C. Only via PowerShell
D. After quarterly review

### 40. Default soft delete retention for Recovery Services Vault is:
A. 7 days
B. 14 days
C. 30 days
D. 60 days

### 41. Azure Site Recovery typical RPO is:
A. ~30 seconds
B. 1 hour
C. 4 hours
D. 24 hours

### 42. ASR test failover is:
A. Disruptive — pauses replication
B. Non-disruptive — parallel test environment
C. Same as production failover
D. Not supported

### 43. Storage Migration Service phases are:
A. Inventory → Transfer → Cutover
B. Backup → Restore → Verify
C. Discover → Replicate → Failover
D. Plan → Build → Migrate

### 44. The console binary for PowerShell 7 is:
A. `powershell.exe`
B. `pwsh.exe`
C. `ps7.exe`
D. `cmd.exe`

### 45. WSMan PSRemoting default ports are:
A. 22 / 23
B. 80 / 443
C. 5985 / 5986
D. 1433 / 3306

### 46. The JEA file that maps AD groups to role capabilities is:
A. `.psrc` (Role Capability File)
B. `.pssc` (Session Configuration File)
C. `.psd1`
D. `.psm1`

### 47. DSC configurations compile into:
A. PowerShell scripts
B. MOF files
C. JSON
D. XML

### 48. The MODERN replacement for Azure Automation DSC (since 2023) is:
A. SCOM Configuration
B. Azure Machine Configuration
C. SCCM Compliance Settings
D. Group Policy Preferences

### 49. **Order these steps** to seize the PDC Emulator from a dead DC onto a surviving DC.

1. Run `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole PDCEmulator -Force`
2. Confirm current FSMO holders via `netdom query fsmo`
3. Run `repadmin /replsum` to verify replication health
4. Remove the dead DC via metadata cleanup

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 3 → 2 → 1 → 4
D. 4 → 2 → 1 → 3

### 50. **Order these steps** to monitor 200 Arc machines with one workspace + DCR + log alert.

1. Create Log Analytics workspace
2. Create DCR `dcr-windows-baseline`
3. Use Azure Policy DINE to associate DCR with all Arc machines
4. Trigger remediation task
5. Author KQL query and create the log alert
6. Create action group and link to alert

A. 1 → 2 → 3 → 4 → 5 → 6
B. 2 → 1 → 3 → 4 → 5 → 6
C. 1 → 3 → 2 → 4 → 5 → 6
D. 3 → 1 → 2 → 4 → 5 → 6

### 51. **Yes/No** — Mark each statement.

**S1:** Arc requires inbound RDP/SSH.
**S2:** Defender for Servers covers both Azure VMs and Arc-enabled servers.
**S3:** MMA was retired in August 2024.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

### 52. **Yes/No** — Mark each statement.

**S1:** Storage Replica synchronous mode works at any geographic distance.
**S2:** Hyper-V Replica is asynchronous.
**S3:** Azure requires VHD format (not VHDX) for uploaded disks.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

### 53. To project an existing on-prem ESXi VM into Azure as an Arc resource, use:
A. Connected Machine agent on each VM
B. The Azure Arc connector for VMware vCenter (preferred)
C. AWS Migration Service
D. Hyper-V Replica

### 54. The Microsoft Tier 0 administrative model includes:
A. Forest root, AD DCs, AD CS, Entra Connect, AD FS — identity control plane
B. Web servers only
C. End-user workstations
D. SharePoint sites

### 55. **Yes/No** — Mark each statement.

**S1:** Azure Machine Configuration works on Arc-enabled servers.
**S2:** WDAC is Microsoft's modern app allowlisting (AppLocker is legacy).
**S3:** Secured-core server requires certified OEM hardware with TPM 2.0.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 56. To pin Azure Backup data against ransomware deletion attempts that survive the 14-day soft delete window, use:
A. Lower retention
B. Immutable vault with a long lock
C. Disable soft delete
D. Local-only backups

### 57. ADMT preserves which attribute for resource access continuity?
A. SID History
B. UPN
C. samAccountName
D. ObjectGUID

### 58. The KQL operator to aggregate (e.g., average per machine) is:
A. `summarize`
B. `project`
C. `extend`
D. `union`

### 59. The recommended modern path for running automation on Arc-enabled servers is:
A. Hybrid Runbook Worker installed manually on each
B. Arc Runbook extension (deploy via Azure Policy)
C. SSH manually
D. SCCM

### 60. **Yes/No** — Final integrative.

**S1:** Defender for Servers P2 includes File Integrity Monitoring + JIT + Vulnerability Assessment.
**S2:** ASR Recovery Plans support pre/post scripts via Azure Automation runbooks.
**S3:** Azure Migrate uses ASR under the hood for VM migration.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. C    21. A    31. B    41. A    51. A
2.  B    12. B    22. B    32. B    42. B    52. A
3.  C    13. B    23. A    33. B    43. A    53. B
4.  B    14. B    24. D    34. C    44. B    54. A
5.  B    15. B    25. B    35. B    45. C    55. A
6.  B    16. B    26. B    36. B    46. B    56. B
7.  B    17. B    27. B    37. A    47. B    57. A
8.  B    18. B    28. B    38. B    48. B    58. A
9.  A    19. B    29. B    39. B    49. B    59. B
10. B    20. C    30. B    40. B    50. A    60. A
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 54–60 | 🏆 Excellent — schedule the exam |
| 42–53 | ✅ Strong. Review missed Qs the day before exam |
| 30–41 | ⚠️ Re-study weak modules (use map below) — postpone exam 1 week |
| <30   | 🔁 Restart from your weakest module |

---

## 🔍 Review Process

For EACH wrong answer:

1. Identify which module covered it (see map below)
2. Re-read that module's Reading.md
3. Add an Anki flashcard for the concept
4. Try the question again 3 days later

### Wrong-answer → Module map

| Question # | Module |
|------------|--------|
| 1–5, 21 (S1), 49 | Module 1 (Active Directory) |
| 6–8 | Module 2 (Identity & Entra ID Hybrid) |
| 9–12 | Module 3 (Networking, DNS, DHCP) |
| 13–17, 21 (S2,S3), 52 (S1) | Module 4 (File, Storage) |
| 18–20, 52 (S2,S3) | Module 5 (Hyper-V) |
| 22–26, 51 (S1), 53 | Module 6 (Azure Arc) |
| 27–31, 50, 51 (S3), 58 | Module 7 (Azure Monitor) |
| 32–37, 51 (S2), 54, 55, 60 (S1) | Module 8 (Security & Defender) |
| 38–43, 56, 57, 60 (S2,S3) | Module 9 (Backup, ASR, Migration) |
| 44–48, 55 (S1), 59 | Module 10 (PowerShell & Automation) |

---

## Detailed answer rationales (selected — common stumbles)

**Q1. B.** F-T-D-O-O. Memorize cold.

**Q2. B.** PDC Emulator = time + password + GPO authority.

**Q4. B.** LSDOU. Enforced + Block flip rules.

**Q9. A.** Conditional forwarder = static; stub zone = dynamic NS refresh. Stable partner → conditional forwarder.

**Q11. C.** MCLT default 1 hr.

**Q13. B.** S2D 2–16 nodes.

**Q15. B.** Sync ≤ 5 ms RTT.

**Q17. B.** ReFS = block clone + integrity, NO boot/page/EFS.

**Q18. B.** Gen 2 for vTPM/Secure Boot.

**Q20. C.** Kerberos with constrained delegation = no admin remote session.

**Q22. B.** Arc machines = `Microsoft.HybridCompute/machines`.

**Q23. A.** Outbound HTTPS 443 only — Arc agent has NO inbound port needs.

**Q24. D.** Least-privilege = Azure Connected Machine Onboarding role.

**Q25. B.** Azure Policy DINE + remediation = scalable pattern.

**Q27. B.** MMA retired Aug 2024; AMA is the successor.

**Q28. B.** KQL = Kusto Query Language.

**Q30. B.** 30 days default interactive retention.

**Q32. B.** JIT = P2 only.

**Q34. C.** Default max JIT = 3 hours.

**Q36. B.** VBS + Hyper-V hypervisor.

**Q37. A.** Protected Users disables NTLM, DES, RC4 Kerberos, credential caching, unconstrained delegation.

**Q38. B.** MARS = 3 backups/day max.

**Q39. B.** Vault redundancy locked at first backup.

**Q40. B.** Soft delete default 14 days.

**Q41. A.** ASR ~30s RPO.

**Q42. B.** Test failover is non-disruptive — parallel test VNet.

**Q44. B.** `pwsh.exe` = PowerShell 7.

**Q45. C.** WSMan 5985/5986.

**Q46. B.** `.pssc` = Session Configuration File (maps groups to capabilities).

**Q49. B.** Verify state → confirm health → seize → clean up dead DC.

**Q50. A.** Workspace → DCR → policy assoc → remediate → KQL alert → action group.

**Q51. A.** Arc is outbound only; Defender covers both; MMA retired.

**Q52. A.** SR sync NOT at any distance (≤ 5ms RTT). HV Replica IS async. Azure DOES need VHD.

**Q53. B.** Arc connector for vCenter is the new native ESXi-to-Arc integration.

**Q54. A.** Tier 0 = identity control plane.

**Q55. A.** All three correct.

**Q56. B.** Immutable vault = compliance-grade hard lock.

**Q57. A.** SID History.

**Q58. A.** `summarize` for aggregation.

**Q59. B.** Arc Runbook extension is modern (HRW is legacy).

**Q60. A.** All three correct (P2 features bundle, ASR scripts, Azure Migrate via ASR).

---

## 🎓 You're Ready

- 54–60 on this exam means you're statistically very likely to pass either AZ-800 or AZ-801 on the first attempt.
- 42–53 means you'll pass with comfortable margin if you fix the misses.
- <42 means re-study the weak modules; re-take this mock; then schedule.

**Final advice:**
- Sleep 8 hours the night before
- Eat protein, not sugar
- Bring water + your passport / govt ID
- Read each question TWICE before clicking; underline keywords ("zone-redundant," "lowest cost," "Arc-enabled")
- Mark and move on if stuck — come back at the end
- For drag-drop "complete the command" items, **most languages tolerate the parameter order shown in the official docs** — when in doubt, choose the order Microsoft Learn uses

**You've got this.** 🎯
