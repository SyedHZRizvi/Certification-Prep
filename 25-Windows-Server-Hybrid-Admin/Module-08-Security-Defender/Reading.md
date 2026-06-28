# Module 8: Server Security & Defender 🛡️

> **Why this module matters:** Security is 25–30% of AZ-801, by far the heaviest single domain on the second exam. Defender for Servers, WDAC, Credential Guard, JIT VM (Virtual Machine) access, and Secured-core server appear in nearly every scenario. The exam loves *"given this threat, which combination of controls is the right answer?"* Build the muscle memory of mapping CVEs and attack patterns to Microsoft's defenses and you've locked down the largest single chunk of AZ-801.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Azure Arc (Module 6), Defender for Servers extends naturally over Arc
> - Azure Monitor + Log Analytics (Module 7), Defender writes to the same workspace
> - On-prem AD (Active Directory) (Module 1), Credential Guard / Protected Users protect AD credentials
> - General security concepts (CIA triad, principle of least privilege), [`09-CompTIA-Security-Plus` Module 1](../../09-CompTIA-Security-Plus/Module-01-Security-Fundamentals/Reading.md)
>
> If those are shaky, pause and review. This module assumes you can already explain "what an EDR (Endpoint Detection and Response) does" and "what BitLocker protects."

---

## 🚨 A Story: The Ransomware Ride That Saved a Hospital

It's 3:42 a.m. at Atlantic Medical Center, a 480-bed teaching hospital. A nurse on the night shift double-clicks a phishing PDF. The PDF spawns a PowerShell command that downloads a Cobalt Strike beacon. Within 90 seconds, the beacon attempts to enumerate file shares, dump LSASS for credentials, and pivot to the adjacent SQL Server holding patient records.

Six things happen in that 90 seconds all *defensive* and the attack dies:

1. **Microsoft Defender for Endpoint** (already deployed via Defender for Servers P2) detects the suspicious PowerShell behavior and quarantines the beacon process.
2. **Attack Surface Reduction (ASR) rule** "Block Office apps from creating child processes" stops a backup tactic the attacker tries.
3. **Credential Guard** isolates LSASS so even if the beacon had gained admin rights, Mimikatz cannot extract NTLM hashes or Kerberos tickets.
4. **WDAC** policy blocks the second-stage payload because it isn't on the allowlist.
5. **Just-in-time VM access** on the SQL Server keeps RDP closed by default, the attacker cannot pivot in.
6. **Sentinel/Defender XDR (Extended Detection and Response) alert** fires within 4 minutes, the SOC (Security Operations Center) is paged, the user's account is force-rotated, and the workstation is isolated by 4:08 a.m.

The hospital's CISO (Chief Information Security Officer) told the board the next morning: *"We were never in danger. The Cobalt Strike beacon never even successfully called home, because Defender XDR's network protection blocked the C2 domain reputation-wise. The kill happened at five separate layers."*

Defense in depth, automated. That is what this module teaches.

---

## 🛡️ Microsoft Defender for Servers (Defender for Cloud SKU (Stock Keeping Unit))

**Defender for Servers** is the Microsoft Defender for Cloud server-protection SKU. It's a *bundle*, it doesn't replace MDE; it includes MDE plus other server-specific controls.

| | **Defender for Servers P1** | **Defender for Servers P2** |
|---|----------------------------|----------------------------|
| **Microsoft Defender for Endpoint (MDE)** | ✅ Included | ✅ Included |
| Microsoft Defender Antivirus | ✅ | ✅ |
| Live Response | ✅ | ✅ |
| **Vulnerability Assessment** | ❌ | ✅ MDVM (Defender Vulnerability Management) or Qualys |
| **File Integrity Monitoring (FIM)** | ❌ | ✅ |
| **Just-In-Time (JIT) VM access** | ❌ | ✅ |
| **Adaptive Application Controls** | ❌ | ✅ |
| **Network Hardening** (adaptive NSG rules) | ❌ | ✅ |
| **Regulatory Compliance** (PCI, HIPAA, ISO) | ❌ | ✅ |
| **500 MB/node/day free Log Analytics ingest** | ❌ | ✅ |
| Threat Intelligence | Basic | Premium |
| List price (2024-2026) | ~$5/server/month | ~$15/server/month |

🔥 **Defender for Servers covers Azure VMs *and* Arc-enabled servers**, equally. That's the headline AZ-801 fact.

### Enable Defender for Servers

```bash
# Enable Defender for Servers P2 at subscription scope
az security pricing create \
    --name "VirtualMachines" \
    --tier "Standard" \
    --subplan "P2"

# Optionally also Defender for Storage, Containers, App Service, etc. at the same time
az security pricing create --name "StorageAccounts" --tier "Standard"
```

🎯 **Exam pattern:** *"You need vulnerability assessment, JIT, FIM, and regulatory compliance on 200 Arc-enabled Windows Servers."* → **Defender for Servers Plan 2**.

---

## 🔓 Just-In-Time (JIT) VM Access

JIT keeps **RDP (3389), SSH (Secure Shell) (22), and WinRM (5985/5986)** ports *closed* at the NSG. An authorized user requests time-bound access (typically ≤3 hours), Defender opens the port from the user's source IP only, then auto-closes.

| Property | Detail |
|----------|--------|
| Default max access duration | 3 hours |
| Source IP | Specific IP, IP range, or "any" |
| Ports | Configurable (RDP, SSH, WinRM by default) |
| Audit | Every request logged in Activity Log + Defender for Cloud |
| Works on | Azure VMs + Arc-enabled servers (with NSG/firewall integration via Arc + Defender for Servers P2) |
| Cost | Included with Defender for Servers P2 |

### Configure JIT on a VM

```powershell
# Configure JIT policy
$jitPolicy = @{
    Kind = "Basic"
    Properties = @{
        VirtualMachines = @(
            @{
                Id = "/subscriptions/.../virtualMachines/SRV01"
                Ports = @(
                    @{ Number = 3389; Protocol = "TCP (Transmission Control Protocol)"; AllowedSourceAddressPrefix = "*"; MaxRequestAccessDuration = "PT3H" },
                    @{ Number = 22;   Protocol = "TCP"; AllowedSourceAddressPrefix = "*"; MaxRequestAccessDuration = "PT3H" }
                )
            }
        )
    }
}
Set-AzJitNetworkAccessPolicy `
    -ResourceGroupName "rg-prod" -Location "eastus" -Name "default" -InputObject $jitPolicy

# Request access
Start-AzJitNetworkAccessPolicy `
    -ResourceGroupName "rg-prod" -Location "eastus" -Name "default" `
    -VirtualMachine @{ Id = "...SRV01"; Ports = @( @{ Number = 3389; AllowedSourceAddressPrefix = "1.2.3.4"; EndTimeUtc = (Get-Date).AddHours(2) } ) }
```

🚨 **Trap:** JIT requires the **Microsoft.Compute/virtualMachines/openConnectionPortDirectly/action** RBAC (Role-Based Access Control) permission. Built into Owner / VM Contributor; for least-privilege, scope a custom role to JIT-only.

---

## 🤖 Microsoft Defender for Endpoint (MDE)

MDE is the **EDR** (Endpoint Detection and Response) at the heart of the Defender stack. AZ-801 expects you to know:

| Capability | Detail |
|-----------|--------|
| **Antivirus + Antimalware** | Microsoft Defender Antivirus, real-time + scheduled scans |
| **EDR** | Process tree visibility, behavior-based detections, MITRE ATT&CK mapping |
| **Attack Surface Reduction (ASR)** | Policy-based blocks (e.g., "Block Office apps from creating child processes") |
| **Threat & Vulnerability Management** | Asset inventory, vulnerability ranking, remediation prioritization |
| **Auto-investigation & remediation** | Investigates alerts and auto-quarantines low-confidence detections |
| **Live Response** | Remote PowerShell-like session into a compromised machine (no inbound port) |
| **Network protection** | Blocks connections to malicious domains/IPs |

### Onboarding paths

| Path | Best for |
|------|----------|
| **Defender for Servers** auto-onboard | Azure VMs + Arc machines (recommended) |
| **Group Policy** onboarding package | AD-joined Windows outside Azure |
| **Intune** | Modern-managed devices |
| **Configuration Manager** | Existing SCCM fleet |
| **Manual script** | Standalone, lab |

### ASR rules (examples)

```powershell
# Enable ASR rule "Block Office apps from creating child processes" via PowerShell
Set-MpPreference -AttackSurfaceReductionRules_Ids "D4F940AB-401B-4EFC-AADC-AD5F3C50688A" `
                 -AttackSurfaceReductionRules_Actions Enabled
```

ASR rules are best deployed via GPO (Group Policy Object), Intune, or Defender for Endpoint Security Configuration Management, not one-server-at-a-time. The list has ~17 named rules; common ones:

- Block all Office apps from creating child processes
- Block credential stealing from LSASS
- Block JavaScript/VBScript from launching downloaded executable
- Block Office macro from making Win32 calls
- Block executable content from email/webmail

---

## 🚧 Windows Defender Application Control (WDAC)

**WDAC** is application allow-listing at the kernel level. Successor to AppLocker; tamper-resistant.

| | **AppLocker** | **WDAC** |
|---|--------------|----------|
| Layer | User-mode + kernel-mode hybrid | **Kernel-mode** |
| Tamper resistance | Limited | **Very high, even local admin can't bypass** |
| Policy distribution | GPO | GPO, MEM, MDM (Mobile Device Management), MSI |
| Audit / Enforce modes | Yes | Yes |
| Rule types | Path, publisher, hash | Signed code, file hash, FilePath, FilePublisher, custom (PEAuthenticode) |
| Microsoft recommendation in 2026 | Legacy, migrate to WDAC | **Use this** |

### Build a WDAC policy

```powershell
# Capture a baseline policy from a clean reference machine
New-CIPolicy -Level FilePublisher -Fallback Hash -FilePath C:\policies\base.xml -ScanPath C:\Windows -UserPEs

# Audit mode first
Set-RuleOption -FilePath C:\policies\base.xml -Option 3   # Audit mode

# Convert XML to binary policy
ConvertFrom-CIPolicy -XmlFilePath C:\policies\base.xml -BinaryFilePath C:\policies\SIPolicy.p7b

# Deploy to one machine (testing)
Copy-Item C:\policies\SIPolicy.p7b "C:\Windows\System32\CodeIntegrity\SIPolicy.p7b"
Restart-Computer

# Later, after audit reveals no false positives, switch to Enforce mode and re-deploy via GPO/MEM at scale
Set-RuleOption -FilePath C:\policies\base.xml -Option 3 -Delete   # Remove audit-only
```

🔥 **Microsoft 2024+ guidance:** WDAC is the default modern app-allowlisting; AppLocker is legacy support only.

---

## 🔐 Credential Guard

Credential Guard uses **Virtualization-Based Security (VBS)** + Hyper-V isolation to put LSASS secrets (NTLM hashes, Kerberos TGTs) in a separate hypervisor-protected process, isolated from even kernel-mode code on the host.

| Defeats | How |
|---------|-----|
| **Mimikatz / Pass-the-Hash** | NTLM hashes are not in main-LSASS memory |
| **Pass-the-Ticket** | Kerberos TGTs are not in main-LSASS memory |
| **Credential theft via SAM (Serviceable Addressable Market)-R / DPAPI** | Out-of-LSASS keys remain protected |

### Enable Credential Guard (Server 2019+)

| Step | Action |
|------|--------|
| 1 | Confirm CPU supports VT-x + EPT (Intel) or AMD-V + RVI (AMD) |
| 2 | Enable Hyper-V + Hypervisor Platform via Server Manager or PowerShell |
| 3 | Apply GPO: Computer Config → Admin Templates → System → Device Guard → "Turn On Virtualization Based Security" → "Enabled with UEFI lock" (or "without lock" for testability) |
| 4 | Verify with `Get-CimInstance -ClassName Win32_DeviceGuard` |

🚨 **VBS-incompatible drivers** can prevent Credential Guard from running. Microsoft publishes a compatibility check tool.

### Protected Users group (complementary)

Add admin users to the **Protected Users** AD group:

- Forces Kerberos AES (Advanced Encryption Standard) (no DES, no RC4)
- Disables NTLM auth (cannot use Pass-the-Hash even on legacy SMB)
- Disables unconstrained delegation
- Disables credential caching on the local machine (no offline auth)

```powershell
Add-ADGroupMember -Identity "Protected Users" -Members "alice","bob","charlie"
```

🔥 Protected Users + Credential Guard + LAPS is the **standard Tier-0 admin hardening triad**.

---

## 🏰 Secured-Core Server

**Secured-core server** is a hardware + firmware + OS bundle Microsoft certifies. Available in Windows Server 2022+.

| Component | Provides |
|-----------|----------|
| TPM 2.0 | Hardware root of trust |
| Secure Boot | Only signed boot code |
| DMA Protection | Blocks malicious DMA attacks (Thunderbolt etc.) |
| VBS / HVCI | Memory integrity via hypervisor |
| System Guard | Boot integrity + runtime attestation |
| Hypervisor Code Integrity (HCI) | Driver / module signing enforcement |

### Enable Secured-core (on a certified box)

```powershell
# Most settings are enabled by GPO or via Windows Admin Center
# Verify VBS + HVCI active
Get-CimInstance -ClassName Win32_DeviceGuard | Format-List
# Look for: VirtualizationBasedSecurityStatus = 2 (Running)
```

🎯 **Exam pattern:** *"Need maximum hardware-rooted security for a regulated workload"* → **Secured-core server** (requires certified OEM hardware).

---

## 🪖 Exploit Guard

**Exploit Guard** is the umbrella for several Windows 10/Server 2019+ exploit-mitigation features:

| Feature | What |
|---------|------|
| **Attack Surface Reduction (ASR)** | Rule-based blocks (covered above with MDE) |
| **Controlled Folder Access** | Anti-ransomware, only approved apps can modify protected folders |
| **Network Protection** | Blocks navigation to malicious domains/IPs (Edge, Chrome, Firefox) |
| **Exploit Protection (formerly EMET)** | DEP, ASLR, CFG, EAF, etc., process-level mitigations |

```powershell
# Enable Controlled Folder Access
Set-MpPreference -EnableControlledFolderAccess Enabled

# Add an app to the allowed list
Add-MpPreference -ControlledFolderAccessAllowedApplications "C:\Program Files\Acme\Acme.exe"
```

---

## 🛂 Privileged Access Workstation (PAW)

A **PAW** is a hardened admin workstation that is itself a Tier-0 asset:

- No internet browsing
- No email
- No third-party software (Office only)
- Credential Guard + WDAC + BitLocker + AppLocker (defense in depth)
- Used *exclusively* for AD / Tier-0 administration

🔥 PAW + Tier 0/1/2 model is Microsoft's recommended administrative hardening pattern (covered in Module 1's Sunburst case study).

---

## 🧪 Task-Sequencing Practice: Harden a Production AD Tier-0 with Defender for Servers P2 + Credential Guard + WDAC

**Scenario:** 4 Windows Server 2022 DCs need: (1) Defender for Servers P2 enabled, (2) Credential Guard active, (3) WDAC enforcing in audit mode then enforce mode, (4) JIT VM access for emergency RDP.

**Order these steps:**

1. ✅ Enable Defender for Cloud / Defender for Servers P2 at the subscription scope
2. ✅ Onboard the DCs to Azure Arc (Module 6) so Defender extends to them
3. ✅ Verify MDE is auto-deployed via Defender for Servers, check in Defender XDR portal
4. ✅ On a *test DC*, build a WDAC reference policy in **Audit** mode (`New-CIPolicy ... -ScanPath C:\Windows`)
5. ✅ Deploy the policy to all 4 DCs via GPO; let it run in Audit for 7 days; review CodeIntegrity event log for unexpected blocks
6. ✅ Refine policy; switch to **Enforce** mode; re-deploy via GPO
7. ✅ Apply GPO to enable **VBS + Credential Guard** ("Turn On Virtualization Based Security" with UEFI lock)
8. ✅ Add Tier-0 admin accounts to the **Protected Users** AD group
9. ✅ Configure **JIT VM access** policy for the DCs (3389 + 5985 closed by default; 3-hour max request)
10. ✅ Validate end-to-end: try opening RDP without JIT (should be blocked); request JIT; verify access works
11. ✅ Schedule monthly review of MDE / WDAC alerts and JIT audit logs

⚠️ Skipping step 4–5 (audit period) is the #1 mistake, Enforce mode WDAC without an audit period will lock out legitimate admin tooling and require physical console recovery.

---

## 📊 Case Study, The 2024 CrowdStrike Falcon Sensor Outage and Defender's Role in EDR Resilience

**Situation.** On July 19, 2024, **CrowdStrike** one of two leading EDR vendors competing with Microsoft Defender pushed a faulty content update (channel file 291) to its Falcon sensor on Windows. The faulty file caused the sensor's kernel-mode driver to dereference an out-of-bounds pointer during boot, triggering a kernel panic (BSOD with `PAGE_FAULT_IN_NONPAGED_AREA`) on every Windows machine that received the update over a ~78-minute window before CrowdStrike could pull it. ~8.5 million Windows endpoints worldwide were affected (Microsoft Security Blog, *Helping our customers through the CrowdStrike outage*, July 20 2024). Delta Air Lines lost an estimated $500M, ~5,000 flights canceled (Delta SEC 8-K filing, July 24 2024); the UK NHS reported widespread GP-clinic outages; Indianapolis 911 dispatch was on manual paper-and-radio for 8 hours. Recovery required physical-console access to *each* affected machine to delete the bad file from Safe Mode, no remote-management path worked because the machines wouldn't boot.

**Decision.** The post-mortems converged on architectural lessons:

1. **Kernel-mode EDRs have a brittleness profile** that user-mode + hypervisor-isolated controls do not share. (Microsoft has been moving to push EDR sensors *out* of kernel mode where possible.)
2. **Staged rollouts of agent updates** are non-negotiable. CrowdStrike pushed channel files (content updates) to all customers simultaneously; they had a feature for staged rollout for binary updates but not for content.
3. **Recovery automation matters more than detection.** Most organizations needed a runbook for "EDR sensor breaks Windows boot", and almost none of them had one. Microsoft published [Recovery instructions](https://learn.microsoft.com/) within 4 hours; CrowdStrike updated their guidance the following day.
4. **Multi-vendor EDR strategy**, some organizations deliberately split EDR across two vendors (e.g., Defender on workstations, CrowdStrike on servers) precisely to avoid a single vendor's outage taking everything down.
5. **Defender's "Tamper Protection" + cloud-side update gating**, Defender's update channel includes a validation step that *holds* updates from rolling forward when MS detects anomalies. (Microsoft has not had a CrowdStrike-scale outage.)

**Outcome.** CrowdStrike's stock dropped ~30% in two weeks. The US Department of Homeland Security launched a formal review. The European Commission opened an inquiry into resilience standards for security software. Microsoft published its [Windows resiliency initiative](https://learn.microsoft.com/) committing to user-mode EDR APIs that would let third parties run sensors without kernel-mode privileges. By late 2024, Defender's reported deployment share among Fortune 500 had increased measurably as customers reconsidered EDR vendor diversification.

**Lesson for the exam / for practitioners.** AZ-801 won't test you on CrowdStrike by name, but it will test:

- *MDE as the primary EDR* in the Defender for Servers bundle, and the operational comfort of staying within Microsoft's update gating
- *ASR rules + Controlled Folder Access*, protections that don't depend on a third-party kernel driver
- *Credential Guard + Protected Users*, defense in depth that survives any single agent failure
- *Recovery runbooks*, what to do when *any* security agent breaks boot
- *Defender for Cloud's secure score*, a baseline you can verify against any agent's claims

The exam will phrase this as: *"A SOC manager wants EDR coverage on 1,200 Windows Servers (mix of Azure, on-prem, AWS (Amazon Web Services)) with the simplest licensing and operational model. What's the recommendation?"* → **Defender for Servers P2 across the whole fleet via Arc** (covers Azure-native, Arc-projected on-prem, AWS EC2 (Elastic Compute Cloud) via Arc).

**Discussion (Socratic).**
- **Q1.** CrowdStrike's outage was a kernel-mode driver bug. Defender Antivirus also runs partly in kernel mode. Build the case that "single-vendor EDR is structurally riskier than dual-vendor," and the counter-argument that "two vendors = two attack surfaces = more risk." Which side is structurally stronger?
- **Q2.** Defender for Servers P2 costs ~$15/server/month. For a 500-server SMB, that's $90K/year. Build the business case vs (a) Defender for Endpoint P2 standalone (~$5.20/server/month) without the FIM/JIT/VA, and (b) hand-rolled antivirus + Sysinternals + manual patching.
- **Q3.** Recovery from the CrowdStrike outage required physical console access, no remote tool worked. Architect a "boot failure recovery" runbook for a 500-machine estate: who's responsible, what tools (DRAC/iLO/iDRAC, network boot, Azure Bastion for Azure VMs), and what's the realistic time-to-recover?

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "Defender for Servers P1 includes JIT VM access" | ❌ JIT is **P2 only** |
| "Defender for Servers and Defender for Endpoint are the same product" | ❌ Defender for Servers is a SKU that *bundles* MDE plus extras |
| "WDAC and AppLocker are interchangeable" | ❌ WDAC is the modern default; AppLocker is legacy |
| "Credential Guard runs without VBS / Hyper-V" | ❌ Requires VBS = requires Hyper-V hypervisor |
| "JIT works only on Azure VMs, not Arc machines" | ❌ Works on both (with proper firewall integration) |
| "Secured-core is a software switch" | ❌ Requires certified OEM hardware (TPM 2.0 + UEFI + DMA protection) |
| "Protected Users group only affects Kerberos" | ❌ Also disables NTLM, credential caching, unconstrained delegation |
| "Tamper Protection is enabled by default everywhere" | ❌ Default on Defender Antivirus but not all deployment paths set it |
| "Defender Antivirus + 3rd-party AV can run in passive mode together" | ✅ Yes, Defender goes Passive automatically when a 3rd-party AV is active |
| "Arc machines need separate MDE license" | ❌ Defender for Servers includes MDE for Arc |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Defender for Cloud** | Microsoft's CSPM + CWP platform (umbrella) |
| **Defender for Servers P1 / P2** | Server protection SKUs (P2 = full) |
| **MDE** | Microsoft Defender for Endpoint, the EDR |
| **MDAV** | Microsoft Defender Antivirus |
| **MDVM** | Microsoft Defender Vulnerability Management |
| **ASR** | Attack Surface Reduction rules |
| **JIT VM access** | Just-in-Time port opening with time-bound access |
| **FIM** | File Integrity Monitoring (P2) |
| **WDAC** | Windows Defender Application Control (kernel-level allowlisting) |
| **Credential Guard** | VBS-isolated LSASS secrets |
| **VBS / HVCI** | Virtualization-Based Security / Hypervisor Code Integrity |
| **Secured-core server** | Certified hardware + firmware + OS hardening bundle |
| **Protected Users group** | AD group that disables NTLM, RC4, caching for members |
| **Tier 0/1/2 model** | Microsoft's admin segregation (Tier 0 = forest control plane) |
| **PAW** | Privileged Access Workstation |
| **Tamper Protection** | Prevents disabling MDAV settings without IT approval |

---

## ✅ Module 8 Summary

You now know:

- 🛡️ Defender for Servers P1 vs P2, features and the $5 vs $15/server pricing
- 🔓 JIT VM access, time-bound port opening (P2 only)
- 🤖 MDE as the EDR core + ASR rules
- 🚧 WDAC for kernel-level app allowlisting (modern AppLocker successor)
- 🔐 Credential Guard + VBS + Hyper-V isolation of LSASS
- 🏰 Secured-core server, hardware-rooted security bundle
- 🪖 Exploit Guard + Controlled Folder Access + Network Protection
- 🛂 PAW + Tier 0/1/2 model
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 9: Backup, ASR & Migration](../Module-09-Backup-Migration/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 9's Azure Backup encrypts to Recovery Services Vault using keys you protect with Credential Guard; Module 10's PowerShell scripts deploy WDAC + ASR at scale.
> - Cross-course: [`09-CompTIA-Security-Plus`](../../09-CompTIA-Security-Plus/README.md) covers the security fundamentals; [`06-Azure-Administrator` Module 8](../../06-Azure-Administrator/Module-08-Network-Security/Reading.md) covers the network-security counterparts.
> - Practice: Practice Exam 2 has 14+ questions on this domain; Final Mock has a Defender + WDAC + JIT case study.

---

## 💬 Discussion, Socratic prompts

1. **Defender for Servers P1 vs P2.** A 1,200-server enterprise debates: P1 everywhere ($75K/year), P2 everywhere ($225K/year), or mixed (P2 on Tier-0 only, P1 on Tier-1 and Tier-2). Defend the mixed approach and identify the operational complexity it creates.
2. **WDAC adoption barriers.** WDAC in Enforce mode breaks legacy installers that use unsigned code. Build the rollout plan: which servers go first, what's the audit-period duration, what's the rollback if an Enforce policy locks out RDP, and how do you handle the legacy ERP (Enterprise Resource Planning) that ships unsigned `.exe` files in nightly updates?
3. **Credential Guard incompatibility.** Some kernel-mode drivers (older anti-virus, some VPN (Virtual Private Network) clients, some hardware management agents) cannot run under HVCI. Build the migration plan: discovery (Microsoft's HVCI Readiness Tool), driver-vendor outreach, replacement timeline. Where do you absolutely-must-deploy CredGuard despite the cost, and where do you accept the residual risk?
4. **JIT vs always-on bastion.** JIT keeps RDP closed; Azure Bastion provides a managed RDP proxy with built-in MFA (Multi-Factor Authentication) and no public IP. Defend each: JIT for ad-hoc emergency access; Bastion for routine admin sessions. What's the cost trade-off and the security trade-off?
5. **CrowdStrike lessons applied at home.** Your enterprise standardizes on Defender for Servers P2. Build the resilience plan: how do you stage Defender updates, what's the boot-failure recovery runbook, and what's the *operational* argument for or against a secondary EDR vendor?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, Defender for Servers overview](https://learn.microsoft.com/azure/defender-for-cloud/defender-for-servers-introduction)
- 📖 [Microsoft Defender for Endpoint documentation](https://learn.microsoft.com/microsoft-365/security/defender-endpoint/)
- 📖 [WDAC deployment guide](https://learn.microsoft.com/windows/security/threat-protection/windows-defender-application-control/wdac-deployment-guide)
- 📖 [Credential Guard documentation](https://learn.microsoft.com/windows/security/identity-protection/credential-guard/)
- 📖 [Secured-core server documentation](https://learn.microsoft.com/windows-server/security/secured-core-server)
- 📖 [Microsoft Tier 0/1/2 administrative model](https://learn.microsoft.com/security/privileged-access-workstations/privileged-access-access-model)
- 📖 Microsoft Security Response Center, *Helping our customers through the CrowdStrike outage* (July 20 2024), Microsoft's CrowdStrike incident response post
- 📖 NIST SP 800-53 *Security and Privacy Controls* (Rev 5, 2020), the canonical control catalog Defender maps to
- 📖 [Sean Metcalf adsecurity.org](https://adsecurity.org/) practical AD security guidance that overlaps heavily with Credential Guard / PAW
