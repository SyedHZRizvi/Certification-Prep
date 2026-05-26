# ✏️ Module 10 Quiz: PowerShell, DSC & Automation

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. The console binary for PowerShell 7 is: *(Remember)*
A. `powershell.exe`
B. `pwsh.exe`
C. `ps7.exe`
D. `cmd.exe`

---

### Q2. Windows PowerShell 5.1 runs on: *(Remember)*
A. .NET Framework 4.x
B. .NET (Core)
C. Java JVM
D. Mono

---

### Q3. PowerShell 7 runs on: *(Remember)*
A. .NET Framework 4.x
B. .NET (formerly .NET Core)
C. Python interpreter
D. Native C++

---

### Q4. The default ports for WS-Management (WinRM) PSRemoting are: *(Remember)*
A. 22 / 23
B. 80 / 443
C. 5985 / 5986
D. 1433 / 3306

---

### Q5. JEA stands for: *(Remember)*
A. Just Enough Administration
B. Just Enabled Account
C. JSON Encoded API
D. Joint Enterprise Architecture

---

### Q6. The JEA file that maps AD groups to role capabilities is: *(Remember)*
A. `.psrc` (Role Capability File)
B. `.pssc` (Session Configuration File)
C. `.psd1`
D. `.psm1`

---

### Q7. A JEA "virtual account" is: *(Understand)*
A. A standing privileged account stored in AD
B. A per-session elevated identity that has no standing privilege
C. The connecting user's own account elevated
D. A managed service account

---

### Q8. DSC configurations compile into: *(Remember)*
A. PowerShell scripts
B. MOF files
C. JSON
D. XML

---

### Q9. The DSC component on each target node that applies / enforces configuration is the: *(Remember)*
A. Local Configuration Manager (LCM)
B. WinRM service
C. Group Policy Client
D. WMI

---

### Q10. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** Windows PowerShell 5.1 and PowerShell 7 can coexist on the same Windows Server.
**S2:** `pwsh` supports SSH-based remoting.
**S3:** JEA's virtual account has standing AD privileges after the session ends.

A. Yes / Yes / No
B. Yes / No / Yes
C. No / Yes / No
D. Yes / Yes / Yes

---

### Q11. The MODERN replacement for Azure Automation DSC (since 2023) is: *(Remember)*
A. SCOM Configuration
B. Azure Machine Configuration (part of Azure Policy guest configuration)
C. SCCM Compliance Settings
D. Group Policy Preferences

---

### Q12. Azure Automanage's PRODUCTION profile enables: *(Understand)*
A. Backup, Update Management, Defender, Change Tracking, MAA
B. Backup only
C. Defender only
D. Nothing — Automanage is read-only

---

### Q13. **Order these steps** to deploy a DSC config to enforce IIS-installed across servers. *(Create)*

1. Author `WebServerBaseline.ps1` PowerShell DSC configuration
2. Compile to MOF: `WebServerBaseline -OutputPath C:\DSC`
3. Apply: `Start-DscConfiguration -Path C:\DSC -ComputerName WEB01 -Wait -Verbose`
4. Verify: `Get-DscConfigurationStatus -CimSession WEB01`

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 2 → 4
D. 4 → 1 → 2 → 3

---

### Q14. Azure Automation runbooks can be authored in: *(Remember)*
A. PowerShell, PowerShell Workflow, Python, Graphical
B. PowerShell only
C. JavaScript only
D. Bash only

---

### Q15. To run an Azure Automation runbook ON an on-prem server (not Azure sandbox), use a: *(Remember)*
A. Hybrid Runbook Worker (legacy) or Runbook extension on an Arc-enabled server (modern)
B. Manual SSH session
C. Scheduled Task only
D. Logic App

---

### Q16. The recommended authentication for an Azure Automation runbook calling Azure resources is: *(Apply)*
A. Hard-coded SP secret in the runbook
B. Managed Identity (system-assigned on the Automation account)
C. RunAs Account (legacy)
D. User credentials in plain text

---

### Q17. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** PowerShell DSC LCM can be configured for Push or Pull mode.
**S2:** Azure Machine Configuration works for Arc-enabled servers as well as Azure VMs.
**S3:** Hybrid Runbook Worker is still the recommended modern path.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q18. JEA endpoint registration cmdlet is: *(Remember)*
A. `New-PSSession`
B. `Register-PSSessionConfiguration`
C. `Enter-PSSession`
D. `Invoke-Command`

---

### Q19. To run a PowerShell command on all servers in an AD group: *(Apply)*
A. `Get-ADGroupMember "Web-Servers" | ForEach-Object { Invoke-Command -ComputerName $_.Name -ScriptBlock { ... } }`
B. `Get-ADUser | Invoke-Command`
C. RDP to each one
D. Email a script to each admin

---

### Q20. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** PowerShell 7 can run most modules originally written for 5.1.
**S2:** WinRM is required for Enter-PSSession over WSMan.
**S3:** Azure Automation runbooks have a maximum execution time.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q21. The recommended modern pattern for running automation against Arc-enabled servers is: *(Apply)*
A. Hybrid Runbook Worker installed manually on each
B. Use the Arc Runbook extension (deploy via Azure Policy)
C. SSH manually
D. SCCM

---

### Q22. JEA's `RestrictedRemoteServer` session type allows: *(Understand)*
A. Full PowerShell language
B. Only specific cmdlets / parameters / functions as defined in the role capability
C. Bash commands only
D. Read-only operations

---

### Q23. Automation Account components that store secrets securely are: *(Remember)*
A. Credentials, Variables (encrypted), Certificates, Connections
B. Just text variables
C. Just Key Vault
D. Just environment vars

---

### Q24. **Yes/No** — Cross-functional. *(Apply)*

**S1:** `Install-WindowsFeature` is the modern cmdlet to install a Windows Server role.
**S2:** `Add-Computer` joins a Windows machine to an AD domain.
**S3:** `Test-NetConnection` verifies TCP / ICMP reachability.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / Yes / Yes
D. Yes / Yes / No

---

### Q25. A Configuration Profile assignment in Azure Automanage applies which kind of profile? *(Remember)*
A. Production, Dev/Test, or Custom
B. Free, Standard, Premium
C. P1, P2
D. Internal, External

---

### Q26. To run a single command on multiple remote computers and return results: *(Apply)*
A. `Invoke-Command -ComputerName srv01,srv02,srv03 -ScriptBlock { Get-Service }`
B. `Enter-PSSession -ComputerName srv01,srv02,srv03`
C. `New-PSSession`
D. `Connect-RemoteServer`

---

## 🎯 Answers + Explanations

### Q1: **B. `pwsh.exe`**
PS 7 is `pwsh.exe`. Windows PowerShell 5.1 is `powershell.exe`.

### Q2: **A. .NET Framework 4.x**
Windows PowerShell 5.1 = .NET Framework, Windows-only.

### Q3: **B. .NET (formerly .NET Core)**
PowerShell 7 runs on cross-platform .NET (Core lineage).

### Q4: **C. 5985 / 5986**
WSMan HTTP / HTTPS ports. Standard for PowerShell Remoting.

### Q5: **A. Just Enough Administration**
JEA = constrained remoting endpoints.

### Q6: **B. `.pssc` (Session Configuration File)**
The `.pssc` defines who gets which role capability. The `.psrc` defines what the role can do.

### Q7: **B. A per-session elevated identity that has no standing privilege**
Virtual accounts are session-scoped. Never standing.

### Q8: **B. MOF files**
DSC's `.MOF` (Managed Object Format) is the compiled form LCM consumes.

### Q9: **A. Local Configuration Manager (LCM)**
The LCM is the engine on each node.

### Q10: **A. Yes / Yes / No**
S1 correct. S2 correct (PS 7 SSH transport). S3 wrong (virtual accounts are session-scoped).

### Q11: **B. Azure Machine Configuration**
Replaces Azure Automation DSC; covers Azure + Arc; uses DSC v3.

### Q12: **A. Backup, Update Management, Defender, Change Tracking, MAA**
The full Production profile bundle.

### Q13: **A. 1 → 2 → 3 → 4**
Author → compile → apply → verify. Standard DSC flow.

### Q14: **A. PowerShell, PowerShell Workflow, Python, Graphical**
The four runbook authoring types.

### Q15: **A. Hybrid Runbook Worker (legacy) or Runbook extension on an Arc-enabled server (modern)**
Both options exist; Arc extension is the modern path.

### Q16: **B. Managed Identity (system-assigned on the Automation account)**
The least-privilege, no-secrets option. RunAs accounts are legacy (deprecated).

### Q17: **A. Yes / Yes / No**
S1 correct. S2 correct. S3 wrong (Arc Runbook extension is now the modern path; HRW is legacy).

### Q18: **B. `Register-PSSessionConfiguration`**
Registers the constrained endpoint defined in the `.pssc`.

### Q19: **A. `Get-ADGroupMember ... | Invoke-Command`**
Classic pattern: enumerate group → execute on each.

### Q20: **A. Yes / Yes / Yes**
All three correct. PS 7 has high backward compatibility; WinRM is the WSMan transport; runbooks have a 3-hour default execution timeout.

### Q21: **B. Use the Arc Runbook extension (deploy via Azure Policy)**
Modern Arc-native path.

### Q22: **B. Only specific cmdlets / parameters / functions as defined in the role capability**
Constrained execution — the entire JEA point.

### Q23: **A. Credentials, Variables (encrypted), Certificates, Connections**
The four secure shared-resource types in an Automation Account.

### Q24: **A. Yes / Yes / Yes**
All three correct. Standard admin cmdlets.

### Q25: **A. Production, Dev/Test, or Custom**
The three profile choices in Automanage.

### Q26: **A. `Invoke-Command -ComputerName ... -ScriptBlock { ... }`**
Standard one-to-many remoting pattern.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Automation domain mastered. Take the Practice Exams next!
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read PS / JEA / DSC sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- `powershell.exe` = PS 5.1; `pwsh.exe` = PS 7
- PS 5.1 on .NET FX (Windows-only); PS 7 on .NET (cross-platform)
- WinRM ports: 5985 HTTP / 5986 HTTPS
- JEA: `.psrc` role capability, `.pssc` session config, virtual account (no standing privilege)
- DSC compiles to MOF; LCM applies on each node
- Azure Machine Configuration replaces Azure Automation DSC
- Automation runbook types: PowerShell, PS Workflow, Python, Graphical
- Use Managed Identity for runbook → Azure auth
- Automanage profiles: Production, Dev/Test, Custom
- Arc Runbook extension is modern path; Hybrid Runbook Worker is legacy

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Practice Exams](../Practice-Exams/)!
