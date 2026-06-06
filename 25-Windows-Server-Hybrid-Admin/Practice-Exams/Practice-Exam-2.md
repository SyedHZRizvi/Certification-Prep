# 🧪 Practice Exam 2 — AZ-801 (Hybrid Advanced Services)

> **Conditions:** Set a 120-minute timer. 60 questions. Treat it like the real thing.
> **Pass mark:** 42/60 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 6–10 (AZ-801 backbone).

---

## 📝 Questions

### 1. The Azure resource type for an Arc-enabled server is:
A. `Microsoft.Compute/virtualMachines`
B. `Microsoft.HybridCompute/machines`
C. `Microsoft.Web/sites`
D. `Microsoft.Kubernetes/connectedClusters`

### 2. The Connected Machine agent communicates with Azure over:
A. Outbound HTTPS (443) only
B. Inbound RDP (3389)
C. Outbound SSH (22)
D. Inbound HTTP (80)

### 3. The LEAST-PRIVILEGE role for SP-based Arc onboarding is:
A. Owner
B. Contributor
C. Reader
D. Azure Connected Machine Onboarding

### 4. To auto-install AMA on every Arc-enabled server in a subscription, use:
A. Group Policy with a custom script
B. Azure Policy with DINE effect + remediation task
C. SCCM
D. PowerShell DSC v1

### 5. Arc-enabled Kubernetes works with:
A. AKS only
B. Any Kubernetes (AKS, EKS, GKE, OpenShift, K3s, ...)
C. OpenShift only
D. Docker Swarm only

### 6. Update Management center patches:
A. Azure VMs only
B. Azure VMs + Arc-enabled servers (Windows + Linux)
C. Arc machines only
D. Windows servers only

### 7. To deliver Extended Security Updates (ESU) for Windows Server 2012 R2 past EOL via the Azure billing channel, use:
A. Traditional ESU reseller keys
B. Azure Arc + link an ESU license in the portal
C. Migrate to Azure VMs
D. Disable Windows Update

### 8. Arc-enabled Kubernetes GitOps uses which open-source engine?
A. Argo CD
B. Flux v2
C. Jenkins
D. Spinnaker

### 9. **Yes/No** — Mark each statement.

**S1:** Arc requires inbound RDP / SSH on the target machine.
**S2:** Arc-enabled servers can be governed by Azure Policy at management group scope.
**S3:** Arc Private Link enables Arc usage in air-gapped networks.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

### 10. Which AGENT replaced the legacy Microsoft Monitoring Agent (MMA) in August 2024?
A. SCOM agent
B. AMA (Azure Monitor Agent)
C. OMS Linux Agent
D. Defender for Endpoint agent

### 11. A Data Collection Rule (DCR) specifies:
A. On-prem AD password policy
B. WHAT data to collect AND WHERE to ship it
C. Log Analytics workspace billing tier
D. Azure region for backups

### 12. The query language used in Log Analytics is:
A. T-SQL
B. KQL (Kusto Query Language)
C. PowerShell
D. JMESPath

### 13. Log Analytics workspace default interactive retention is:
A. 7 days
B. 30 days
C. 90 days
D. 730 days

### 14. Which alert type evaluates a KQL query on a schedule?
A. Metric alert
B. Log alert (scheduled query rule)
C. Activity log alert
D. Service health alert

### 15. **Order these steps** to monitor 200 Arc machines with one workspace + DCR + log alert.

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

### 16. Which Defender for Servers PLAN includes JIT VM access, FIM, and vulnerability assessment?
A. P1
B. P2
C. Both
D. Neither

### 17. Defender for Servers bundles which other Microsoft security product?
A. Microsoft Defender for Identity
B. Microsoft Defender for Endpoint (MDE)
C. Microsoft Sentinel
D. Microsoft Purview

### 18. The default maximum JIT VM access duration is:
A. 30 minutes
B. 1 hour
C. 3 hours
D. 24 hours

### 19. WDAC enforces at:
A. User mode
B. Kernel mode
C. Hypervisor mode
D. Network layer

### 20. Microsoft's 2026 recommended app allowlisting is:
A. AppLocker
B. WDAC
C. Software Restriction Policies
D. Group Policy Preferences

### 21. Credential Guard relies on which underlying technology?
A. BitLocker
B. Virtualization-Based Security (VBS) + Hyper-V isolation
C. Active Directory
D. Sentinel SIEM

### 22. Adding admin accounts to the Protected Users group DISABLES which combination?
A. NTLM + DES + RC4 Kerberos + credential caching + unconstrained delegation
B. Only NTLM
C. Only RC4
D. Smart card auth

### 23. Secured-core server requires:
A. Just enable a registry key
B. Certified OEM hardware with TPM 2.0 + UEFI Secure Boot + DMA protection
C. Hyper-V role only
D. Replace Server with Linux

### 24. **Yes/No** — Mark each statement.

**S1:** Defender for Servers covers both Azure VMs and Arc-enabled servers.
**S2:** JIT requires `Microsoft.Compute/virtualMachines/openConnectionPortDirectly/action`.
**S3:** Credential Guard prevents pass-the-hash attacks.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

### 25. MARS allows a maximum of how many backups per day per machine?
A. 1
B. 3
C. 8
D. Unlimited

### 26. MABS is BEST for:
A. Backing up files only
B. App-aware VSS backup of SQL/SP/Exchange + VMs + Azure offload
C. Backing up Linux only
D. Replacing AD

### 27. Recovery Services Vault redundancy can be changed:
A. Anytime
B. Only BEFORE the first backup
C. Only via PowerShell
D. After quarterly review

### 28. The default soft delete retention for Recovery Services Vault is:
A. 7 days
B. 14 days
C. 30 days
D. 60 days

### 29. Azure Site Recovery (ASR) typical RPO is:
A. ~30 seconds
B. 1 hour
C. 4 hours
D. 24 hours

### 30. ASR test failover is:
A. Disruptive — pauses replication
B. Non-disruptive — parallel test environment
C. Same as production failover
D. Not supported

### 31. Storage Migration Service phases are:
A. Inventory → Transfer → Cutover
B. Backup → Restore → Verify
C. Discover → Replicate → Failover
D. Plan → Build → Migrate

### 32. Azure Migrate uses which underlying service for VM migration?
A. Azure Backup
B. ASR (Azure Site Recovery)
C. Hyper-V Replica
D. Storage Replica

### 33. **Yes/No** — Mark each statement.

**S1:** MARS can do application-consistent SQL backup.
**S2:** MABS is a free software (Azure-side storage is billed).
**S3:** ASR can replicate AWS EC2 instances to Azure.

A. No / Yes / Yes
B. No / No / Yes
C. Yes / Yes / Yes
D. Yes / Yes / No

### 34. The Recovery Services Vault feature that locks deletion for a configured period (compliance-grade) is:
A. Soft delete
B. Immutable vault
C. Quick restore
D. CMK

### 35. The console binary for PowerShell 7 is:
A. `powershell.exe`
B. `pwsh.exe`
C. `ps7.exe`
D. `cmd.exe`

### 36. Windows PowerShell 5.1 runs on:
A. .NET Framework 4.x
B. .NET (Core lineage)
C. Java JVM
D. Mono

### 37. The default ports for WSMan PSRemoting are:
A. 22 / 23
B. 80 / 443
C. 5985 / 5986
D. 1433 / 3306

### 38. The JEA file that maps AD groups to role capabilities is:
A. `.psrc` (Role Capability File)
B. `.pssc` (Session Configuration File)
C. `.psd1`
D. `.psm1`

### 39. DSC configurations compile into:
A. PowerShell scripts
B. MOF files
C. JSON
D. XML

### 40. The MODERN replacement for Azure Automation DSC (since 2023) is:
A. SCOM Configuration
B. Azure Machine Configuration
C. SCCM Compliance Settings
D. Group Policy Preferences

### 41. Azure Automanage's PRODUCTION profile enables:
A. Backup + Update Mgmt + Defender + Change Tracking + MAA
B. Backup only
C. Defender only
D. Nothing — Automanage is read-only

### 42. To run an Azure Automation runbook ON an on-prem server, use:
A. Hybrid Runbook Worker (legacy) or Runbook extension on Arc-enabled server (modern)
B. Manual SSH session
C. Scheduled Task only
D. Logic App

### 43. **Yes/No** — Mark each statement.

**S1:** Windows PowerShell 5.1 and PowerShell 7 can coexist on the same Windows Server.
**S2:** PowerShell 7 supports SSH-based remoting.
**S3:** JEA's virtual account has standing AD privileges after the session ends.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / No
D. Yes / Yes / Yes

### 44. The CrowdStrike outage of July 2024 was caused by:
A. An AD compromise
B. A faulty kernel-mode driver content update causing BSOD
C. A WAF misconfiguration
D. A DDoS attack

### 45. ASR Mobility Service agent runs on:
A. The Azure target VM
B. The source machine (Hyper-V VM, VMware VM, physical, or Azure VM for A2A)
C. The Recovery Services Vault
D. The Hyper-V host only

### 46. VM Insights provides:
A. Patch management
B. Pre-built perf trends + dependency map + health
C. SQL Server replication
D. AD replication monitoring

### 47. **Yes/No** — Mark each statement.

**S1:** Defender for Servers P2 includes File Integrity Monitoring.
**S2:** Defender for Servers P1 includes Vulnerability Assessment.
**S3:** Defender for Servers P2 provides 500 MB/node/day free Log Analytics ingest.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

### 48. To monitor Arc-enabled server health from Azure, the FIRST check is:
A. Connected Machine agent status (Connected / Offline / Expired)
B. Azure Monitor alert
C. Defender recommendation
D. Network Watcher

### 49. The KQL operator to aggregate (e.g., average per machine) is:
A. `summarize`
B. `project`
C. `extend`
D. `union`

### 50. **Yes/No** — Mark each statement.

**S1:** A single DCR can be associated with many machines.
**S2:** Application Insights stores in a Log Analytics workspace (since 2023).
**S3:** Sentinel is a separate workspace from Log Analytics.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / Yes

### 51. To run a single command on multiple remote computers and collect results:
A. `Invoke-Command -ComputerName srv01,srv02,srv03 -ScriptBlock { Get-Service }`
B. `Enter-PSSession -ComputerName srv01,srv02,srv03`
C. `New-PSSession`
D. `Connect-RemoteServer`

### 52. To replicate Azure VMs from one Azure region to another for DR, use:
A. Azure Backup
B. ASR Azure-to-Azure replication
C. Storage Replica
D. Hyper-V Replica

### 53. Which ASR failover type is "non-disruptive — runs in parallel"?
A. Planned
B. Unplanned
C. Test
D. Failback

### 54. The Microsoft Tier 0 administrative model includes:
A. Forest root, AD DCs, AD CS, Entra Connect, AD FS — the identity control plane
B. Web servers only
C. End-user workstations
D. SharePoint sites

### 55. To pin Azure Backup data against ransomware deletion attempts that survive past the 14-day soft delete window, use:
A. Lower retention
B. Immutable vault with a 1-year lock
C. Disable soft delete
D. Local-only backups

### 56. ADMT preserves which attribute for resource access continuity?
A. SID History
B. UPN
C. samAccountName
D. ObjectGUID

### 57. **Yes/No** — Mark each statement.

**S1:** Azure Machine Configuration works for Arc-enabled servers.
**S2:** Hybrid Runbook Worker is the recommended modern automation path for Arc machines.
**S3:** Azure Automanage Production profile auto-enables Backup.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

### 58. Recommended Tier-0 admin hardening triad is:
A. PAW + Tier model + LAPS only
B. Credential Guard + Protected Users + LAPS
C. WDAC + AppLocker + Smart Card
D. JIT + RBAC + RDP

### 59. **Order these steps** to enable DR for an on-prem Hyper-V VM via ASR.

1. Create Recovery Services Vault in target Azure region
2. Install ASR provider on Hyper-V host; register host in vault
3. Create replication policy
4. Enable replication on the VM
5. Run a non-disruptive test failover quarterly

A. 1 → 2 → 3 → 4 → 5
B. 2 → 1 → 3 → 4 → 5
C. 1 → 3 → 2 → 4 → 5
D. 3 → 1 → 2 → 4 → 5

### 60. The recommended Run Command approach for Arc-enabled servers is:
A. Manually RDP into each
B. Use `azcmagent connect` then send commands through the agent's outbound channel
C. Install OpenSSH on each
D. Use SCCM only

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B    31. A    41. A    51. A
2.  A    12. B    22. A    32. B    42. A    52. B
3.  D    13. B    23. B    33. A    43. A    53. C
4.  B    14. B    24. A    34. B    44. B    54. A
5.  B    15. A    25. B    35. B    45. B    55. B
6.  B    16. B    26. B    36. A    46. B    56. A
7.  B    17. B    27. B    37. C    47. A    57. A
8.  B    18. C    28. B    38. B    48. A    58. B
9.  A    19. B    29. A    39. B    49. A    59. A
10. B    20. B    30. B    40. B    50. A    60. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 54–60 | 🏆 Excellent — AZ-801 ready, schedule the exam |
| 42–53 | ✅ Solid. Review missed Qs + take Final Mock |
| 30–41 | ⚠️ Re-study weak modules (use map below) |
| <30   | 🔁 Restart from Module 6 |

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
| 1–9, 60 | Module 6 (Azure Arc) |
| 10–15, 46, 48–50 | Module 7 (Azure Monitor) |
| 16–24, 44, 47, 54, 58 | Module 8 (Security & Defender) |
| 25–34, 45, 52–53, 55–56, 59 | Module 9 (Backup, ASR & Migration) |
| 35–43, 51, 57 | Module 10 (PowerShell & Automation) |

---

## Detailed answer rationales (selected)

> Per the graduate-level professional bar spec, key answers explained.

**Q1. Answer: B.** Arc-enabled servers project as `Microsoft.HybridCompute/machines`. Distinct from native Azure VMs (`Microsoft.Compute/virtualMachines`).

**Q2. Answer: A.** Outbound HTTPS 443 only. Memorize this — Arc agent has NO inbound port requirements. Headline security fact.

**Q3. Answer: D.** Least-privilege built-in role for SP onboarding is "Azure Connected Machine Onboarding." Owner/Contributor are too broad; Reader can't create.

**Q4. Answer: B.** Azure Policy DINE effect + remediation = scalable auto-deployment. GPO/SCCM/DSC are valid for specific scenarios but Policy is the Arc-native pattern.

**Q5. Answer: B.** Arc K8s works with any conformant K8s (AKS, EKS, GKE, OpenShift, K3s, RKE, kubeadm).

**Q6. Answer: B.** Update Management center is unified across Azure VMs + Arc machines, Windows + Linux.

**Q7. Answer: B.** Arc is the modern billing channel for ESUs on out-of-support OSes.

**Q8. Answer: B.** Arc K8s GitOps uses Flux v2 (CNCF graduated).

**Q9. Answer: A.** Arc is outbound-only (S1=No). Policy at MG scope works (S2=Yes). Arc Private Link supports air-gapped (S3=Yes).

**Q10. Answer: B.** MMA retired Aug 2024; AMA is the successor.

**Q11. Answer: B.** DCRs centralize "what to collect + where to ship" in JSON.

**Q12. Answer: B.** KQL is the Log Analytics query language. Pipe-based, SQL-like.

**Q13. Answer: B.** 30 days default interactive retention.

**Q14. Answer: B.** Log alerts run KQL on a schedule (5 min default).

**Q15. Answer: A.** Workspace → DCR → policy association → remediate → KQL alert → action group.

**Q16. Answer: B.** JIT, FIM, VA, AAC, network hardening, regulatory compliance = Plan 2 only.

**Q17. Answer: B.** Defender for Servers bundles MDE in both P1 and P2.

**Q18. Answer: C.** Default max JIT duration is 3 hours.

**Q19. Answer: B.** WDAC enforces at the kernel — tamper-resistant.

**Q20. Answer: B.** WDAC is modern; AppLocker is legacy.

**Q21. Answer: B.** VBS + Hyper-V hypervisor isolation of LSASS.

**Q22. Answer: A.** Protected Users disables NTLM, DES, RC4 Kerberos, credential caching, unconstrained delegation.

**Q23. Answer: B.** Secured-core requires certified OEM hardware (TPM 2.0 + UEFI + DMA protection).

**Q24. Answer: A.** All three correct.

**Q25. Answer: B.** MARS = 3 backups per day max.

**Q26. Answer: B.** MABS = app-aware DPM-based backup with Azure offload.

**Q27. Answer: B.** Vault redundancy locked at first backup.

**Q28. Answer: B.** 14-day default soft delete.

**Q29. Answer: A.** ASR typical RPO ~30 seconds.

**Q30. Answer: B.** Test failover is non-disruptive — parallel test VNet.

**Q31. Answer: A.** Inventory → Transfer → Cutover.

**Q32. Answer: B.** Azure Migrate uses ASR for VM migration.

**Q33. Answer: A.** S1 wrong (MARS isn't app-aware). S2 correct. S3 correct.

**Q34. Answer: B.** Immutable vault = hard lock for compliance.

**Q35. Answer: B.** `pwsh.exe` for PowerShell 7.

**Q36. Answer: A.** Windows PowerShell 5.1 on .NET Framework 4.x.

**Q37. Answer: C.** WSMan ports 5985 (HTTP) and 5986 (HTTPS).

**Q38. Answer: B.** `.pssc` maps groups → role capabilities and defines runtime identity.

**Q39. Answer: B.** DSC compiles to MOF.

**Q40. Answer: B.** Azure Machine Configuration replaces Automation DSC (2023).

**Q41. Answer: A.** Production profile auto-enables Backup, Update Mgmt, Defender, Change Tracking, MAA.

**Q42. Answer: A.** Hybrid Runbook Worker is legacy; Arc Runbook extension is modern.

**Q43. Answer: A.** S1 correct, S2 correct, S3 wrong (virtual accounts are session-scoped, no standing privilege).

**Q44. Answer: B.** Faulty kernel-mode driver content update — channel file 291.

**Q45. Answer: B.** Mobility Service runs on the source machine.

**Q46. Answer: B.** VM Insights = perf + dependency map + health.

**Q47. Answer: A.** S1 correct (FIM = P2). S2 wrong (VA = P2 only). S3 correct (500 MB/node/day free with P2).

**Q48. Answer: A.** First check: agent status (Connected / Offline / Expired).

**Q49. Answer: A.** `summarize` is the aggregation operator.

**Q50. Answer: A.** S1 correct. S2 correct (App Insights merged into LA in 2023). S3 wrong (Sentinel runs ON a Log Analytics workspace).

**Q51. Answer: A.** `Invoke-Command` is the one-to-many remoting pattern.

**Q52. Answer: B.** ASR A2A for cross-region Azure DR.

**Q53. Answer: C.** Test failover is non-disruptive.

**Q54. Answer: A.** Tier 0 = identity control plane (DCs, AD CS, Entra Connect, AD FS).

**Q55. Answer: B.** Immutable vault provides hard, time-locked retention.

**Q56. Answer: A.** SID History preserves original SIDs for resource access continuity.

**Q57. Answer: A.** S1 correct (AMC for Arc). S2 wrong (Arc Runbook extension is modern, not HRW). S3 correct.

**Q58. Answer: B.** Credential Guard + Protected Users + LAPS = classic Tier-0 triad.

**Q59. Answer: A.** Standard ASR setup sequence.

**Q60. Answer: B.** `azcmagent connect` + run commands through agent's outbound channel = no inbound port needed.

---

➡️ When ready: take [Final-Mock-Exam](./Final-Mock-Exam.md) to consolidate.
