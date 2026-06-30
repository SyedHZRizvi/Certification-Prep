# 📋 Module 10 Cheat Sheet: PowerShell, DSC & Automation

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🐚 Two PowerShells (MEMORIZE)

| Property | Windows PowerShell 5.1 | **PowerShell 7** |
|----------|------------------------|------------------|
| Binary | `powershell.exe` | `pwsh.exe` |
| Runtime | .NET Framework 4.x | .NET (Core lineage) |
| Cross-platform | Windows only | Windows / Linux / macOS |
| Status | Maintenance only | Active development |
| Install | Built in | Separate (`winget install Microsoft.PowerShell`) |

🔥 Both coexist on the same Windows Server.

---

## 🌐 PSRemoting Ports & Auth

| Item | Value |
|------|-------|
| Port HTTP | **5985** |
| Port HTTPS | **5986** |
| Transport | WSMan (default) or SSH (PS 7) |
| Auth in domain | Kerberos (default) |
| Enable | `Enable-PSRemoting -Force` |

### Top remoting cmdlets

| Need | Cmdlet |
|------|--------|
| One-to-one interactive | `Enter-PSSession -ComputerName ...` |
| One-to-many command | `Invoke-Command -ComputerName srv01,srv02 -ScriptBlock { ... }` |
| Persistent session | `New-PSSession` + reuse |
| SSH transport (PS 7) | `Enter-PSSession -HostName linux01 -SSHTransport` |

---

## 🚧 JEA Components

| File / Concept | Purpose |
|----------------|---------|
| **Role Capability (`.psrc`)** | **What** cmdlets / params allowed |
| **Session Config (`.pssc`)** | **Who** (AD group) → which role; runtime identity |
| **Virtual Account** | Per-session elevated identity (NO standing privilege) |
| Endpoint | `Register-PSSessionConfiguration -Name ... -Path .pssc` |

🔥 Connect: `Enter-PSSession -ComputerName SRV01 -ConfigurationName MyJEA`

---

## 📜 DSC Quick

```
.ps1 Config  →  Compile  →  .MOF  →  LCM applies  →  Drift detection
```

### Push vs Pull

| Mode | When |
|------|------|
| **Push** | Admin runs `Start-DscConfiguration` against targets |
| **Pull** | LCM pulls from Pull Server on schedule (30 min default) |

### Modern: Azure Machine Configuration

- Replaces Azure Automation DSC (retired 2023)
- Covers **Azure VMs + Arc-enabled servers**
- Delivered via Azure Policy guest configuration
- DSC v3 under the hood

---

## ☁️ Azure Automation

| Component | Purpose |
|-----------|---------|
| **Runbook** | PowerShell, PS Workflow, Python, Graphical |
| **Modules** | Available PS modules for runbooks |
| **Credentials/Variables/Certificates** | Encrypted shared resources |
| **Schedules** | Cron-style triggers |
| **Webhooks** | HTTP-trigger runbooks |
| **Hybrid Runbook Worker** (legacy) | Run on-prem |
| **Arc Runbook extension** (modern) | Run on Arc-enabled servers |
| **Managed Identity** | Recommended auth (no secrets) |

---

## 🪄 Azure Automanage

- Auto-enables Microsoft-recommended services on VMs / Arc
- Profiles: **Production** (Backup, Update Mgmt, Defender, Change Tracking, MAA), **Dev/Test**, **Custom**
- Single click per VM; drift correction included

---

## 📜 Top Admin Cmdlet Reference

| Need | Cmdlet |
|------|--------|
| Install Windows feature | `Install-WindowsFeature -Name <role> -IncludeManagementTools` |
| Join domain | `Add-Computer -DomainName contoso.com -Restart` |
| Test connectivity | `Test-NetConnection -ComputerName srv01 -Port 5985` |
| Get current FSMO holders | `netdom query fsmo` or `Get-ADDomainController -Filter *` |
| List AD users | `Get-ADUser -Filter * -SearchBase "OU=Sales,..."` |
| Create DHCP scope | `Add-DhcpServerv4Scope` |
| Enable AD Recycle Bin | `Enable-ADOptionalFeature -Identity "Recycle Bin Feature" -Scope ForestOrConfigurationSet -Target contoso.com` |
| Connect to Azure | `Connect-AzAccount` |
| Onboard to Arc | `azcmagent connect --service-principal-id ...` |

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use PowerShell 7 for cross-platform scripts"
- ✅ "Use JEA to delegate admin without granting Domain Admin"
- ✅ "Use Azure Machine Configuration for Arc-enabled servers"
- ✅ "Use Managed Identity for runbook auth"
- ✅ "Use Arc Runbook extension instead of legacy Hybrid Runbook Worker"
- ✅ "Apply DSC in Pull mode for at-scale drift correction"
- ✅ "Use Automanage for one-click best-practice service enablement"

Usually **wrong**:

- ❌ "Run PS 5.1 cmdlet `Connect-MgGraph` on a Linux Arc box" (use PS 7)
- ❌ "Store SP secret in plaintext in a runbook"
- ❌ "Give DNS Operators Domain Admin to manage zones" (use JEA)
- ❌ "Push DSC config to 1,000 nodes daily" (use Pull or AMC)
- ❌ "Azure Automation DSC is the modern path" (it's retired)

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Hard-coded credentials in scripts (use Key Vault + MI)
- ❌ One JEA role capability per cmdlet (impossibly granular)
- ❌ DSC push to 100+ nodes manually (use Pull / AMC)
- ❌ Hybrid Runbook Worker installed by hand on every server (use Arc extension)
- ❌ Skipping the WindowsCompatibility module when PS 7 module gap is real

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| Cross-platform PowerShell | PS 7 (`pwsh`) |
| Constrained admin endpoint for non-admins | JEA with role capability + session config |
| Declarative config + drift detection | DSC + LCM (Pull mode) or AMC |
| Replace Azure Automation DSC | Azure Machine Configuration |
| Schedule + run scripts in Azure | Azure Automation runbook |
| Run runbook on Arc-enabled server | Runbook extension on Arc |
| Avoid secrets in runbooks | Managed Identity on Automation Account |
| Auto-enable Backup/Defender/Update | Azure Automanage |
| Run a single cmd on N remote servers | `Invoke-Command -ComputerName ... -ScriptBlock { ... }` |
| Persistent remote session | `New-PSSession` |
| SSH to Linux from Windows PS 7 | `Enter-PSSession -HostName ... -SSHTransport` |
| Verify reachability of WinRM | `Test-NetConnection -ComputerName srv01 -Port 5985` |

---

## ✏️ Quick Self-Check

1. PS 5.1 vs 7, three differences? ___
2. WinRM ports? ___
3. JEA, three components? ___
4. DSC Push vs Pull, when each? ___
5. What replaced Azure Automation DSC? ___
6. Automanage profiles? ___

---

➡️ [Practice Exams: Practice-Exam-1.md (AZ-800 focus)](../Practice-Exams/Practice-Exam-1.md), [Practice-Exam-2.md (AZ-801 focus)](../Practice-Exams/Practice-Exam-2.md), [Final-Mock-Exam.md (combined)](../Practice-Exams/Final-Mock-Exam.md)
