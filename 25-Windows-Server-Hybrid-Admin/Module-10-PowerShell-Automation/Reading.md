# Module 10: PowerShell, DSC & Automation 🤖

> **Why this module matters:** Automation is the *thread* that runs through every other module. Onboarding 500 servers to Arc, deploying AMA at scale, enforcing security baseline, rotating krbtgt — none of these scale without scripting. The exam directly tests PowerShell 5.1 vs 7 differences, JEA, DSC, and Azure Automation/Automanage; indirectly it tests automation thinking in every drag-drop "complete this command" item. Master this module and you've made the rest of the cert dramatically easier.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - PowerShell basics — pipelines, cmdlet syntax, parameter binding, variables
> - WS-Management / WinRM ports (5985/5986)
> - JSON / YAML for DSC config syntax
> - Azure Resource Manager basics (resource groups, RBAC) — for Azure Automation
>
> If those are shaky, pause and review. This module assumes you can already write `Get-Process | Where-Object Name -eq "explorer" | Stop-Process`.

---

## 💻 A Story: From 30-Click Onboarding to 30-Second Onboarding

It's Monday morning at Globex. The IT director has a problem: every new server provisioning takes **30 manual clicks** in the portal + ~12 minutes of admin time. Globex provisions ~40 servers per week. That's 8 hours/week of click-work — half an FTE.

The fix is a 50-line PowerShell script that:

1. Reads tickets from the ITSM system (Azure Function trigger)
2. Provisions the Azure VM via `New-AzVM`
3. Onboards to Arc via the connect script
4. Joins to AD via `Add-Computer`
5. Installs AMA + applies DCR via DSC
6. Adds to the right OU via `Move-ADObject`
7. Sets up Defender baseline via GPO link
8. Posts the result back to ITSM

Time per provision drops from 12 minutes to 30 seconds. The half-FTE returns to project work. The CIO writes a "thank you" email and approves the next automation budget.

That story plays out across every Microsoft shop in some form. The exam tests *which automation tool* is the right answer for *which scenario* — PowerShell vs DSC vs Automation Runbook vs Automanage vs Logic App.

---

## 🐚 Windows PowerShell 5.1 vs PowerShell 7

The single biggest fact in this module: **there are now two PowerShells**, and they coexist.

| | **Windows PowerShell 5.1** | **PowerShell 7** |
|---|---------------------------|------------------|
| Runtime | .NET Framework 4.x | **.NET (formerly .NET Core)** |
| Cross-platform | Windows only | **Windows, Linux, macOS** |
| Ships with | Windows 10/Server 2016+ (built in) | **Installed separately** (`Install-PowerShell`) |
| Dev focus | Maintenance only | **Active development** |
| Module compatibility | Most .NET FX modules | Most .NET modules; use compatibility shim for legacy |
| Console binary | `powershell.exe` | `pwsh.exe` |
| Default for new tools (Azure Cloud Shell etc.) | No | **Yes** |
| Backwards compat for old scripts | Native | High but not 100% |

🔥 **MEMORIZE:**
- `powershell.exe` = Windows PowerShell 5.1
- `pwsh.exe` = PowerShell 7
- Both can run side-by-side on the same Windows Server

### Install PowerShell 7 on Windows Server

```powershell
# Quick install via the MSI installer (preferred for servers)
winget install --id Microsoft.PowerShell --source winget

# Or via PowerShell:
iex "& { $(irm https://aka.ms/install-powershell.ps1) } -UseMSI -Quiet"

# Verify
pwsh -Version
```

🎯 **Exam pattern:** *"You need a PowerShell script to run on Windows and Linux Arc-enabled servers."* → **PowerShell 7** (`pwsh`).

---

## 🌐 PowerShell Remoting

Remoting executes commands on remote machines over **WS-Management (WSMan)**.

| Property | Detail |
|----------|--------|
| Transport | WSMan over HTTP (5985) or HTTPS (5986) |
| Authentication | Kerberos (default in-domain), CredSSP, Negotiate, Certificate, Basic (with HTTPS only) |
| Enable on target | `Enable-PSRemoting -Force` |
| One-to-one session | `Enter-PSSession -ComputerName SRV01` |
| One-to-many | `Invoke-Command -ComputerName srv01,srv02,srv03 -ScriptBlock { ... }` |
| Persistent session | `New-PSSession` for repeated use |
| Implicit remoting | Import remote modules into local session |

### PowerShell 7 also supports SSH remoting

```powershell
# PowerShell 7 cross-platform SSH remoting
Enter-PSSession -HostName linuxserver01 -UserName alice -SSHTransport
```

🚨 **WinRM port memory aid:** 5985 = HTTP, 5986 = HTTPS. The Windows Firewall rule "Windows Remote Management" must be enabled.

---

## 🚧 Just Enough Administration (JEA)

**JEA** = Role-capability-based remoting endpoints. Lets non-admins execute *only* specific cmdlets with *only* specific parameters, using a **virtual account** with elevated rights at runtime.

| Component | Purpose |
|-----------|---------|
| **Role Capability File (`.psrc`)** | Defines what cmdlets / parameters / functions are allowed |
| **Session Configuration File (`.pssc`)** | Maps AD groups → role capabilities; defines runtime identity |
| **Virtual Account** | Elevated account JEA creates *just for this session*; never has standing privileges |
| Endpoint | A constrained PSRemoting endpoint exposed via `Register-PSSessionConfiguration` |

### Build a simple JEA endpoint

```powershell
# Step 1: Create role capability — "DNS Operators can manage zones but not service"
$rcPath = "$env:ProgramFiles\WindowsPowerShell\Modules\DnsOpsJEA\RoleCapabilities\DnsOps.psrc"
New-Item -ItemType Directory -Path (Split-Path $rcPath) -Force

New-PSRoleCapabilityFile -Path $rcPath `
    -VisibleCmdlets @(
        @{ Name = "Get-Dns*"; Parameters = @{ Name = "Name"; ValidateSet = "ZoneName","ComputerName" } },
        @{ Name = "Add-DnsServerResourceRecordA"; Parameters = @{ Name = "ZoneName"; ValidateSet = "contoso.com" } }
    ) `
    -VisibleProviders FileSystem
```

```powershell
# Step 2: Create session config — map AD group to role capability
$psscPath = "C:\temp\DnsOps.pssc"

New-PSSessionConfigurationFile -Path $psscPath `
    -SessionType RestrictedRemoteServer `
    -RunAsVirtualAccount `
    -RoleDefinitions @{
        "CONTOSO\DNS-Operators" = @{ RoleCapabilities = "DnsOps" }
    }
```

```powershell
# Step 3: Register endpoint
Register-PSSessionConfiguration -Name "DnsOps" -Path $psscPath -Force

# Now a DNS-Operators member can connect, with no Domain Admin rights
Enter-PSSession -ComputerName "DNS01" -ConfigurationName DnsOps
```

🎯 **Exam pattern:** *"Allow Tier-2 helpdesk to restart a specific service on production servers without giving local admin rights."* → **JEA endpoint with `Restart-Service -Name "<service>"` allowed**.

---

## 📜 Desired State Configuration (DSC)

**DSC** is declarative config-management for Windows + Linux. Author a `.ps1`, it compiles to a MOF, and the **Local Configuration Manager (LCM)** on each target enforces it.

### DSC architecture

```
   AUTHOR  →  .ps1 config script  →  Start-DscConfiguration / Push  →  .MOF file
                                                                          ↓
                                                                   LCM on target node
                                                                          ↓
                                                                    Applies resources
                                                                    + drift detection
```

### Sample DSC config

```powershell
Configuration WebServerBaseline {
    Import-DscResource -ModuleName PSDesiredStateConfiguration

    Node "WEB01" {
        WindowsFeature IIS {
            Ensure = "Present"
            Name   = "Web-Server"
        }
        WindowsFeature ASPNET {
            Ensure    = "Present"
            Name      = "Web-Asp-Net45"
            DependsOn = "[WindowsFeature]IIS"
        }
        File DefaultPage {
            Ensure          = "Present"
            DestinationPath = "C:\inetpub\wwwroot\index.html"
            Contents        = "<html><body><h1>Welcome to Contoso</h1></body></html>"
        }
        Service IISStarted {
            Name      = "W3SVC"
            State     = "Running"
            DependsOn = "[WindowsFeature]IIS"
        }
    }
}

# Compile to MOF
WebServerBaseline -OutputPath C:\DSC

# Apply (Push mode)
Start-DscConfiguration -Path C:\DSC -ComputerName WEB01 -Wait -Verbose
```

### Push vs Pull mode

| Mode | How |
|------|-----|
| **Push** | Admin runs `Start-DscConfiguration` against targets — simple but admin-initiated |
| **Pull** | Target's LCM pulls config from a Pull Server on a schedule (every 30 min by default) — scales better, supports drift correction |

### DSC v2 → Azure Machine Configuration (replaced Azure Automation DSC in 2023)

| | Azure Automation DSC | **Azure Machine Configuration** (current) |
|---|---------------------|-------------------------------------------|
| Status | Retired (Sept 2023) | Active — part of Azure Policy guest configuration |
| Scope | Azure-only | Azure + **Arc-enabled servers** |
| Engine | DSC v1 (Windows PowerShell 5.1) | DSC v3 (cross-platform) |
| Authoring | PowerShell DSC | PowerShell DSC v3 or guest config packages |
| Cost | Free | Free with Azure Monitor / Defender |

🎯 **Exam pattern:** *"Enforce a security baseline across 200 Arc-enabled Windows + Linux servers."* → **Azure Machine Configuration** (via Azure Policy guest configuration initiative).

---

## ☁️ Azure Automation

**Azure Automation** is the hub for runbooks, modules, schedules, and shared resources.

| Component | Purpose |
|-----------|---------|
| **Runbook** | PowerShell, PowerShell Workflow, Python, or graphical script |
| **Modules** | Imported PS modules available to runbooks |
| **Credentials / Variables / Certificates** | Securely stored secrets / config |
| **Schedule** | Cron-style triggers |
| **Webhooks** | HTTP-trigger runbooks |
| **Hybrid Runbook Worker** | Run runbooks ON an on-prem / Arc machine (vs in Azure sandbox) |
| **Update Management** (legacy → Update Manager) | Now superseded by Update Management center |

### Author a simple runbook

```powershell
# Sample PowerShell runbook: stop dev VMs at 7 PM each day
param (
    [string]$ResourceGroup = "rg-dev"
)

# Connect to Azure via Managed Identity (recommended for runbooks)
$AzureContext = (Connect-AzAccount -Identity).context

# Find and stop all VMs in the RG
$vms = Get-AzVM -ResourceGroupName $ResourceGroup -Status
foreach ($vm in $vms) {
    if ($vm.PowerState -eq "VM running") {
        Write-Output "Stopping $($vm.Name)..."
        Stop-AzVM -ResourceGroupName $ResourceGroup -Name $vm.Name -Force -NoWait
    }
}
```

### Hybrid Runbook Worker

Lets you run a runbook *on* an on-prem or Arc machine instead of in Azure's sandbox. Useful when:

- Touching on-prem AD without VPN
- Accessing on-prem SQL or file shares
- Bypassing Azure egress fees

🔥 **Modern guidance:** Use **Arc-enabled servers as Hybrid Runbook Workers** rather than the legacy worker installer.

---

## 🪄 Azure Automanage

**Automanage** auto-enables Microsoft-recommended services on Azure VMs *and* Arc-enabled servers. Two built-in profiles:

| Profile | Best for |
|---------|----------|
| **Production** | Production workloads — enables Backup, Update Mgmt, Defender, Change Tracking, MAA |
| **Dev/Test** | Lower-fidelity, doesn't enable Backup |
| **Custom profile** | Tailor to your standards |

Onboard a VM with one click — Automanage handles ongoing service-enablement and drift correction.

```bash
# Onboard a VM to Automanage with the Production profile
az automanage configuration-profile-assignment create \
    --resource-group "rg-prod" \
    --vm-name "SRV01" \
    --configuration-profile-name "Azure best practices - Production" \
    --location "eastus"
```

🎯 **Exam pattern:** *"Auto-enable Microsoft-recommended monitoring, backup, and security on every new Azure VM and Arc machine without per-VM clicks."* → **Azure Automanage**.

---

## 📜 Common Admin Cmdlets Cheat Reference

### AD module
```powershell
Get-ADUser -Identity alice
New-ADUser -Name "Bob Smith" -SamAccountName bsmith -Path "OU=Users,DC=contoso,DC=com"
Add-ADGroupMember -Identity "Domain Admins" -Members alice
Move-ADObject -Identity "CN=alice,OU=Users,DC=contoso,DC=com" -TargetPath "OU=Disabled,DC=contoso,DC=com"
Disable-ADAccount -Identity alice
Get-ADReplicationFailure -Target *
Reset-ADAccountPassword -Identity alice -NewPassword (Read-Host -AsSecureString)
```

### DNS module
```powershell
Add-DnsServerPrimaryZone -Name "subdomain.contoso.com" -ReplicationScope Forest -DynamicUpdate Secure
Add-DnsServerResourceRecordA -ZoneName "contoso.com" -Name "web" -IPv4Address 10.0.5.10
Add-DnsServerConditionalForwarderZone -Name "fabrikam.com" -MasterServers 10.99.0.5,10.99.0.6
```

### DHCP module
```powershell
Add-DhcpServerInDC -DnsName "dhcp01.contoso.com" -IPAddress 10.0.0.10
Add-DhcpServerv4Scope -Name "HQ" -StartRange 10.0.10.50 -EndRange 10.0.10.200 -SubnetMask 255.255.255.0
Set-DhcpServerv4OptionValue -ScopeId 10.0.10.0 -DnsServer 10.0.0.10 -Router 10.0.10.1
```

### Hyper-V module
```powershell
New-VM -Name "WEB01" -MemoryStartupBytes 4GB -Generation 2 -Path "D:\VMs"
Set-VMProcessor -VMName "WEB01" -Count 4
Add-VMHardDiskDrive -VMName "WEB01" -Path "D:\VMs\WEB01\osdisk.vhdx"
Start-VM -Name "WEB01"
Move-VM -Name "WEB01" -DestinationHost "HV02" -IncludeStorage -DestinationStoragePath "C:\ClusterStorage\Volume1"
```

### Az module (Azure)
```powershell
Connect-AzAccount
Get-AzSubscription | Select-AzSubscription -SubscriptionId "..."
New-AzResourceGroup -Name "rg-test" -Location "eastus"
New-AzVM -ResourceGroupName "rg-test" -Name "TestVM01" -Image "Win2022Datacenter"
```

---

## 🧪 Task-Sequencing Practice: Deploy a Security Baseline DSC Config to 100 Arc Servers

**Scenario:** 100 Arc-enabled Windows Servers need a baseline DSC config: enable Windows Firewall, install Defender Antivirus features, set audit policy. Use Azure Machine Configuration.

**Order these steps:**

1. ✅ Author the DSC v3 configuration script `SecurityBaseline.ps1`
2. ✅ Use `New-GuestConfigurationPackage` to compile the DSC into a guest-config package (`.zip`)
3. ✅ Sign the package (recommended for production) and upload to a storage account
4. ✅ Use `New-GuestConfigurationPolicy` to wrap the package as an Azure Policy definition
5. ✅ Publish the custom policy to a management group
6. ✅ Assign the policy at MG scope with DeployIfNotExists effect
7. ✅ Trigger remediation tasks for existing Arc machines
8. ✅ Monitor compliance in Azure Policy → Compliance pane
9. ✅ Adjust policy as needed; redeploy

⚠️ Skipping step 3 (signing) is the #1 mistake at scale — unsigned packages may fail to apply if WDAC or signed-only execution policies are in place.

---

## 📊 Case Study — How GitHub Builds Its 50,000-Server Infrastructure with Code

**Situation.** GitHub, owned by Microsoft since 2018, runs its global infrastructure on ~50,000 servers across multiple data centers and clouds. Every day, GitHub deploys ~100 production changes to that infrastructure. By 2022, GitHub had moved entirely to an **infrastructure-as-code** model: every server's config, every firewall rule, every CDN setting, every DNS record is defined in version-controlled Terraform / DSC / Ansible files, peer-reviewed via PRs, and applied via automated runners.

**Decision.** GitHub's IaC philosophy (publicly documented in *GitHub's Engineering Blog: Production-quality infrastructure with Terraform*, July 2022):

1. **Everything is code.** A server config that's not in git isn't a config — it's a manual artifact and will drift.
2. **Drift detection runs every 10 minutes.** Any DSC / Terraform `plan` mismatch creates a Slack alert and an automatic PR.
3. **Approval gates for sensitive changes.** Production AD/Tier-0 changes require 2-of-3 senior approvers + business-hours-only window.
4. **Audit log of every apply.** Stored in Splunk + GitHub Actions logs for 7 years.
5. **JEA-style scope at the platform level.** Engineers have RBAC roles that grant only the resource types they manage; no global admin.

**Outcome.** GitHub's published metrics (Operations Blog, 2023):

- Mean time to deploy infrastructure change: **6 minutes** (PR merge → applied)
- Mean time to detect drift: **8 minutes** (10-min cycle ± jitter)
- Outage caused by "I made an emergency manual change": **zero in 18 months** (each emergency goes through the same PR-and-apply pipeline; the runner is the only path to change)
- Audit-prep time for SOC 2 / ISO 27001: **dropped from ~4 weeks to ~2 days**

**Lesson for the exam / for practitioners.** AZ-801 won't ask about GitHub's internals but tests:

- *DSC at scale* — Azure Machine Configuration / DSC v3 / guest configuration is GitHub's pattern made small
- *JEA / RBAC for least privilege* — same philosophy as GitHub's resource-type RBAC
- *Automation runbooks for routine ops* — startup / shutdown scripts, rotating certs, etc.
- *Drift detection* — DSC's LCM in pull mode handles this automatically

The exam will phrase: *"How do you ensure all 200 production Windows Servers have IIS installed and W3SVC running, with automatic correction if state drifts?"* → **DSC in pull mode** or **Azure Machine Configuration via Azure Policy DINE**.

**Discussion (Socratic).**
- **Q1.** GitHub's "everything is code" requires every engineer to learn Terraform/DSC. The cultural transition is the hardest part. Build the case for the 6-week training plan to bring a 50-engineer ops team to IaC fluency, and identify the *single* skill that gates the rest (hint: git workflow, including PR review).
- **Q2.** JEA at scale (thousands of role capabilities) becomes its own management problem. Build the case that **fewer, broader role definitions** + **PIM activation for sensitive ones** beats hyper-granular JEA-everywhere. Where does the simplicity-vs-least-privilege trade-off live?
- **Q3.** DSC drift detection at 10-minute intervals catches deliberate manual changes — but engineers will argue "sometimes I need to make a quick fix during an outage." Build the policy: when is manual change *ever* allowed (probably "outage-only with retroactive PR within 24 hours"), and how do you enforce the retroactive PR requirement?

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "PowerShell 5.1 and PowerShell 7 are the same thing" | ❌ Different runtimes (.NET FX vs .NET); coexist on Windows |
| "JEA requires a Tier-0 admin to set up each session" | ❌ Set up once via session config; non-admins use ongoing |
| "DSC and Azure Machine Configuration are interchangeable" | ❌ AMC is the modern path; DSC v1 push/pull is legacy for new deployments |
| "Hybrid Runbook Worker is the only way to run runbooks on-prem" | ❌ Arc-enabled server with Runbook extension is the modern path |
| "Automanage replaces Azure Backup" | ❌ Automanage ENABLES Backup (among other services) per profile |
| "Pwsh 7 cannot run Windows-only modules" | ❌ Most Windows modules run; use WindowsCompatibility module for exceptions |
| "PSRemoting on PowerShell 7 uses different ports" | ❌ Still WSMan 5985/5986 (and optionally SSH for cross-platform) |
| "DSC config is YAML" | ❌ DSC v1/v2 is PowerShell-syntax that compiles to MOF; DSC v3 supports YAML + PS |
| "Update Management center retired Azure Automation Update Management" | ✅ Yes, in 2024 |
| "JEA virtual accounts retain privileges after the session ends" | ❌ Virtual accounts are session-scoped; no standing privilege |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Windows PowerShell 5.1** | `powershell.exe` — legacy, Windows-only, .NET Framework |
| **PowerShell 7** | `pwsh.exe` — current, cross-platform, .NET |
| **WSMan** | WS-Management protocol (PSRemoting transport) |
| **Implicit remoting** | Import remote module into local session |
| **JEA** | Just Enough Administration — constrained remoting endpoints |
| **Role Capability File** | `.psrc` — what cmdlets/parameters are allowed |
| **Session Configuration File** | `.pssc` — maps AD groups to role capabilities |
| **Virtual Account** | Per-session elevated identity for JEA |
| **DSC** | Desired State Configuration |
| **MOF** | Compiled DSC output format |
| **LCM** | Local Configuration Manager (the DSC engine on each node) |
| **Pull / Push mode** | DSC distribution patterns |
| **Azure Machine Configuration** | Replaces Azure Automation DSC (2023) — Azure + Arc |
| **Azure Automation** | Runbooks + schedules + modules + credentials |
| **Hybrid Runbook Worker** | Runs runbooks on-prem (legacy) |
| **Runbook extension on Arc** | Modern equivalent |
| **Azure Automanage** | Auto-enable best-practice services on VMs/Arc |

---

## ✅ Module 10 Summary

You now know:

- 🐚 PowerShell 5.1 vs 7 — coexist; pick 7 for cross-platform / new development
- 🌐 PowerShell Remoting via WSMan 5985/5986 (or SSH on PS 7)
- 🚧 JEA — role-capability-based constrained endpoints with virtual accounts
- 📜 DSC — declarative config, Push vs Pull, LCM
- 🆕 Azure Machine Configuration replaces Azure Automation DSC (2023)
- ☁️ Azure Automation — runbooks, schedules, Hybrid Runbook Worker
- 🪄 Azure Automanage — best-practice service auto-enablement
- 📜 Top admin cmdlets per module (AD, DNS, DHCP, Hyper-V, Az)
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Take **Practice Exams 1, 2, and Final Mock** in [Practice-Exams/](../../../Practice-Exams/)
5. 🎓 Schedule both AZ-800 and AZ-801

---

> **Where this leads.**
> - Inside this course: This module is the toolset for all the others. Module 1 (AD scripts), Module 4 (storage automation), Module 6 (Arc onboarding), Module 9 (backup automation) all rely on these patterns.
> - Cross-course: Every Microsoft cert (AZ-104, AZ-204, SC-200) will test PowerShell at this depth.
> - Practice: Practice Exam 1 has 2 questions on PS; Practice Exam 2 has 8 (deep coverage); Final Mock has a complete-the-command drag-drop.

---

## 💬 Discussion — Socratic prompts

1. **PowerShell 5.1 retirement.** Microsoft has signaled that 5.1 is "complete" — security fixes only, no new features. Build the case for proactively migrating internal scripts to 7 (cross-platform, performance, async support) vs the cost of 5.1's stability and rare module incompatibilities. What's the realistic migration timeline for a 20K-script enterprise estate?
2. **JEA depth — how granular?** A naive JEA implementation has one role capability per cmdlet (hyper-granular). A pragmatic implementation groups cmdlets by job function. Defend the **functional-grouping** approach and identify the workload class where hyper-granular is genuinely needed (hint: regulated, separation-of-duties).
3. **DSC vs Group Policy.** GPO still does most of what DSC does for Windows. Build the case for DSC: cross-platform (Linux too), declarative drift detection, version-controlled config, integration with Azure. Then identify the workloads where GPO remains the right answer.
4. **Azure Automation vs GitHub Actions vs Logic Apps.** All three can run scheduled code in Azure. Defend Automation (PowerShell-native, runbook gallery, hybrid worker), Actions (developer-friendly, deep git integration), Logic Apps (low-code, business-user-friendly). What's the per-workflow decision matrix?
5. **Automanage adoption.** Automanage auto-enables Backup, Defender, Update Mgmt, etc. on a VM — costs ~$1/VM/month for the profile. Build the case for and against fleet-wide Automanage vs hand-rolled policy enforcement. When does each win for a 5,000-VM enterprise?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — PowerShell documentation](https://learn.microsoft.com/powershell/scripting/overview)
- 📖 [PowerShell 7 — What's new](https://learn.microsoft.com/powershell/scripting/whats-new/what-s-new-in-powershell-70)
- 📖 [Just Enough Administration (JEA) overview](https://learn.microsoft.com/powershell/scripting/learn/remoting/jea/overview)
- 📖 [Desired State Configuration overview](https://learn.microsoft.com/powershell/dsc/overview)
- 📖 [Azure Machine Configuration documentation](https://learn.microsoft.com/azure/governance/machine-configuration/overview)
- 📖 [Azure Automation documentation](https://learn.microsoft.com/azure/automation/overview)
- 📖 [Azure Automanage documentation](https://learn.microsoft.com/azure/automanage/overview-about)
- 📖 Jeffrey Snover, "Monad Manifesto" (2002) — the foundational PowerShell vision document; required cultural reading
- 📖 Don Jones and Jeffery Hicks, *Learn Windows PowerShell in a Month of Lunches* (4th ed., Manning, 2019) — the canonical PowerShell intro text
