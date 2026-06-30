# Module 1: Active Directory Domain Services 🌳

> **Why this module matters:** AD DS is 30–35% of AZ-800 by far the heaviest single domain. It's also the foundation everything else builds on: Group Policy targeting, hybrid identity, file-server permissions, Hyper-V live migration auth, even Azure Arc onboarding all assume a working forest. Get the FSMO roles, replication topology, and GPO precedence rules wired into reflex memory and you've already locked down a third of the exam.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - DNS basics (A records, SRV records, what a forwarder does), covered later in Module 3, but a primer helps
> - Basic TCP/IP networking (subnets, default gateways, what port 389 vs 636 is)
> - The Windows Server admin GUI (Server Manager, ADUC) and PowerShell basics
>
> If those are shaky, pause and review before continuing. This module assumes you've at least *seen* a domain controller before, even if you've never promoted one yourself.

---

## 🏰 A Story: The Marriage of Two Companies

Imagine it's Monday morning at Contoso, a 1,800-person regional manufacturer. Last Friday, Contoso closed a deal to acquire Fabrikam, a 700-person specialty engineering firm two states over. Both companies have run their own Active Directory forests for fifteen years. By Wednesday, the CEO wants every Contoso employee to be able to open Fabrikam's shared engineering drives. By Friday, the procurement VP wants a single sign-on view across both ERPs.

You're the senior systems administrator. Your boss puts six questions on the whiteboard:

1. Do we merge the forests, or set up a **trust**?
2. If a trust, which **direction** and **transitivity**?
3. Whose **FSMO roles** stay primary?
4. What about the duplicate **OU structure**, flatten? leave alone?
5. The Fabrikam DCs are 8 ms away. Do we put them in a different **site**?
6. Their domain controller in the Houston branch lives in an unlocked broom closet. What about that one?

Every answer in this module ladders up to one of those six questions. Active Directory has been around since Windows 2000, and the answers haven't changed nearly as much as you'd think. The protocols (Kerberos v5, LDAP v3, DNS SRV records) are older than half the engineers in your team. The product gets renamed; the fundamentals are eternal.

By the end of this module you'll have all six answers, plus a way of thinking about AD that scales from a 12-person law firm to a 200,000-seat global enterprise.

---

## 🌳 The Logical Hierarchy

AD DS organizes everything into a strict logical hierarchy:

```
FOREST  (top-level security boundary)
└── TREE  (one or more domains sharing a contiguous DNS namespace)
    └── DOMAIN  (replication and admin boundary)
        └── OU  (delegation + GPO targeting unit)
            └── OBJECT  (user, computer, group, contact, printer)
```

| Container | Means | Boundary type |
|-----------|-------|---------------|
| **Forest** | Top of the tree. One Schema, one Config partition, one Global Catalog. Forest = security boundary. | Security |
| **Tree** | One or more domains with contiguous DNS namespace (`contoso.com`, `sales.contoso.com`, `eu.contoso.com`). | Naming only |
| **Domain** | A replication boundary and a partition. Has its own admins (Domain Admins) and a separate password policy (via Fine-Grained PSO). | Replication + admin |
| **Organizational Unit (OU)** | A container for users/computers/groups. **OUs are *not* security boundaries**, they exist for **delegation** and **GPO targeting**. | Admin only |
| **Object** | A user, computer, group, contact, GPO, printer, etc. Has a globally unique SID and a distinguishedName (DN). | Leaf |

🎯 **Exam pattern:** *"The senior auditor demands a clean separation between Finance and the rest of the org. What's the best AD design?"* → **A separate domain**, not just an OU. OUs let admins delegate, but Domain Admins still have keys to everything inside the *domain*, that's what "OUs are not security boundaries" means.

🚨 **Trap on the exam:** Microsoft test items love to phrase "security boundary" three ways: "isolation boundary," "permission boundary," and "audit-separation boundary." All three = **forest** for true isolation, **domain** for the standard "this group of admins runs this place." OUs never qualify.

---

## 🔐 Forest vs Domain, The Security Boundary

The biggest design decision in any AD deployment is **how many forests** to run.

| Topology | Use when | Pros | Cons |
|----------|----------|------|------|
| **Single forest, single domain** | <50k users, one set of admins, single DNS namespace | Simple, cheapest GPOs, fewest moving parts | All-or-nothing security |
| **Single forest, multiple domains** | Distinct sub-orgs needing different password policies (pre-FGPP era) or geographic latency | Shared Schema + Configuration + GC | Domain Admins of any one domain can be elevated to Enterprise Admin if you're not careful |
| **Multiple forests** | True separation (acquisitions, regulated business unit, classified workloads) | Hard security boundary; independent schemas | Cross-forest trusts needed; UPN suffix conflicts; double the admin overhead |

📌 **Microsoft's modern recommendation** (since ~2016): default to a **single forest, single domain** unless you have a *specific* requirement for more. Fine-Grained Password Policies (Windows Server 2008+) killed the old reason to split by domain ("different password rules per OU").

---

## 🤝 Trust Relationships

When forests need to share resources, you build a **trust**.

| Trust type | Direction | Transitivity | Use case |
|------------|-----------|--------------|----------|
| **Parent–Child** | Two-way | Transitive | Auto-created between parent + child domain in same forest |
| **Tree-Root** | Two-way | Transitive | Auto-created between trees in the same forest |
| **External** | One- or two-way | Non-transitive | Trust to a domain in a different forest, when forest trust isn't desired |
| **Forest** | One- or two-way | Transitive (across all domains in both forests) | Merger/acquisition scenarios; "Contoso ↔ Fabrikam" |
| **Realm** | One- or two-way | Non-transitive | Trust to non-Windows Kerberos realms (MIT KDC, Heimdal) |
| **Shortcut** | One- or two-way | Non-transitive | Optimizes auth path across a large multi-domain forest |

### Trust direction in plain English

```
Domain A  —trusts→  Domain B    means    Users from B can access A's resources.
```

(Counter-intuitive at first, but think: "I extend trust to you, so I let your people in.")

| Direction | Effect |
|-----------|--------|
| **Outgoing** (from this side) | Users in *this* domain can access the other domain's resources |
| **Incoming** | Users from the other domain can access *this* domain's resources |
| **Two-way** | Both of the above |

🔥 **Selective Authentication** is an option on Forest and External trusts: only users explicitly granted "Allowed-to-Authenticate" can use the trust path. Use it for partner / acquisition trusts where you don't want everyone visible.

### Build a forest trust (Contoso ↔ Fabrikam)

```powershell
# On a DC in contoso.com, two-way transitive forest trust
New-ADTrust -Name "fabrikam.com" `
            -Source "contoso.com" `
            -Target "fabrikam.com" `
            -TrustType Forest `
            -Direction Bidirectional `
            -ForestTransitive $true `
            -SelectiveAuth $false `
            -Credential (Get-Credential)
```

Or via `netdom`:
```cmd
netdom trust contoso.com /Domain:fabrikam.com /Add /Twoway /Transitive:yes /UserO:admin /PasswordO:* /UserD:fab\admin /PasswordD:*
```

---

## 🏢 FSMO Roles, Memorize Cold

FSMO = **Flexible Single Master Operations**. AD is multi-master for most operations (any DC can accept a password change, any DC can create a user), but five operations are single-master because the cost of a conflict is too high.

| Scope | Role | What it does | Where it lives by default |
|-------|------|--------------|---------------------------|
| **Forest** | Schema Master | Owns Schema partition writes, extending the schema (e.g., Exchange install) goes here | First DC in the forest |
| **Forest** | Domain Naming Master | Add/remove domains in the forest, add/remove application partitions | First DC in the forest |
| **Domain** | RID Master | Allocates blocks of RIDs (500 at a time) to DCs so each can mint unique SIDs | First DC in the domain |
| **Domain** | PDC Emulator | Authoritative time source; chains to Forest Root PDC; handles password updates; default GPO editor target; processes lockout immediately | First DC in the domain |
| **Domain** | Infrastructure Master | Tracks cross-domain object references; updates SIDs in references | First DC in the domain (avoid placing on a GC unless every DC is a GC) |

### Move a FSMO role (transfer vs seize)

```powershell
# Transfer (graceful, both DCs must be online)
Move-ADDirectoryServerOperationMasterRole -Identity "DC02" `
    -OperationMasterRole PDCEmulator,RIDMaster,InfrastructureMaster

# Seize (DC holding the role is dead, destructive, never bring old DC back)
Move-ADDirectoryServerOperationMasterRole -Identity "DC02" `
    -OperationMasterRole SchemaMaster,DomainNamingMaster -Force
```

🎯 **Exam pattern:** *"After the original DC failed, you seized the Schema Master role onto DC02. Can the original DC be returned to the domain?"* → **No.** Restoring it would create a duplicate Schema Master with potential schema corruption. The recovered DC must be **metadata-cleaned** and re-promoted from scratch.

🚨 **Common confusion: Infrastructure Master + GC.** On a single-domain forest, *every* DC should be a GC, and the IM role becomes a no-op, fine. On a multi-domain forest, the IM **must NOT be on a GC** unless *every* DC is a GC (Microsoft's design guidance since Win2K). If the IM is on a GC and not every DC is, foreign object references won't resolve correctly.

---

## 🌐 Sites, Subnets & Replication

A **site** is a high-bandwidth, low-latency network segment, usually one data center or one office building. Sites tell AD where to send authentication and which DCs replicate to which.

```
                                        ┌───────────────────────┐
                                        │   Site: HQ-NYC        │
   ┌──────────────────────┐  Site Link  │   Subnet: 10.1.0.0/16 │
   │   Site: Default-First│ ◄──────────►│   DC01, DC02 (GC)     │
   │   Subnet: 10.0.0.0/16│ Cost: 100   └───────────────────────┘
   │   DC00, RootPDC      │
   └──────────────────────┘
                ▲ Cost: 200 (3 hr replication)
                │
                ▼
   ┌───────────────────────┐
   │   Site: Branch-Houston│
   │   Subnet: 10.50.0.0/24│
   │   RODC: HOU-DC01      │
   └───────────────────────┘
```

### Sites & replication intervals

| Setting | Default | Notes |
|---------|---------|-------|
| **Intra-site replication** | **~15 seconds notify** + 1 second urgent (password, account lockout) | Uses change notification, near-real-time |
| **Inter-site replication** | **180 minutes** (3 hrs) over default IP transport (RPC over IP) | Adjustable on each Site Link (minimum 15 min) |
| **Site Link cost** | Default 100 | Lower = preferred path; KCC computes optimal topology |
| **Bridgehead servers** | Auto-elected by KCC, one per partition per site | Can be set as preferred via attribute |

### Subnet → Site mapping

Every DC must have a subnet defined in **AD Sites and Services** that maps to a site. Clients use a DC in their site whenever possible.

```powershell
# Associate a subnet with a site
New-ADReplicationSubnet -Name "10.50.0.0/24" -Site "Branch-Houston"
```

🚨 **Common exam trap:** A new branch office sees slow logons. The fix is almost always *"add the branch subnet to the right site"*, without that, clients hit a random DC anywhere in the forest.

### Replication monitoring tools

```powershell
# Health check
Get-ADReplicationFailure -Target * | Format-Table -Auto
Get-ADReplicationPartnerMetadata -Target * -Partition *

# Trigger replication immediately
repadmin /syncall DC02 /AdeP

# Full forest-wide health
repadmin /replsum
```

---

## 📋 Group Policy, The 90-Minute Rule of Thumb

Group Policy is how you push configuration to thousands of computers without touching each. A Group Policy Object (GPO) is a collection of settings stored in `SYSVOL` (file system) + the `policies` container in AD. GPOs are linked to **sites**, **domains**, or **OUs**.

### Precedence (LSDOU)

GPOs apply in a strict order, later ones win:

```
1. Local Group Policy        (on the computer itself)
2. Site-linked GPOs
3. Domain-linked GPOs
4. Organizational Unit GPOs  (nested OUs go top-down)
        Lower OU
        ↓
       Lowest OU              ← winning settings here
```

### Inheritance modifiers

| Modifier | Effect |
|----------|--------|
| **Block Inheritance** (on an OU) | Stop GPOs from higher levels from applying, *unless* they're Enforced |
| **Enforced** (on a GPO link) | This GPO wins, period. Overrides Block Inheritance and any lower-level conflicting setting |
| **Link Order** (within a level) | Lower link order number = higher priority on conflict |
| **Security Filtering** | Restrict who the GPO applies to (default: Authenticated Users) |
| **WMI Filtering** | Run a WMI query (e.g., "only Windows 11 machines") to decide whether the GPO applies |

🎯 **Exam pattern:** *"GPO 'Marketing-Block-USB' is linked to the Marketing OU and Enforced. GPO 'Domain-Allow-USB' is linked at the domain root, also Enforced. Marketing has Block Inheritance. What wins on a Marketing computer?"* → The **higher-scope Enforced wins** (Domain). Enforced beats Block; among Enforced, higher scope (closer to root) wins. This is the opposite of normal precedence, memorize this inversion.

### GPO refresh intervals

| Target | Default |
|--------|---------|
| Domain Members (computer + user) | 90 min + random 0–30 min offset |
| Domain Controllers | 5 min |
| Foreground vs background processing | Some policies (folder redirection, software install) only on startup/logon |

Force a refresh:
```powershell
gpupdate /force /target:computer
# or
Invoke-GPUpdate -Computer SRV01 -Force
```

### Useful GPO PowerShell

```powershell
# Create a new GPO
New-GPO -Name "Block-USB-Removable-Storage"

# Link it to an OU
New-GPLink -Name "Block-USB-Removable-Storage" `
           -Target "OU=Marketing,DC=contoso,DC=com" `
           -Enforced No

# Report what's applied to a user/computer
Get-GPResultantSetOfPolicy -ReportType Html -Path C:\reports\rsop.html

# Backup all GPOs
Backup-GPO -All -Path \\fileshare\GPOBackup\$(Get-Date -Format yyyy-MM-dd)
```

---

## 🏛️ Organizational Units (OUs) & Delegation

OUs do two things:

1. **GPO targeting**, link policies to a specific OU
2. **Delegation**, give a team admin rights over *just* their OU without making them Domain Admins

### Delegate control via UI

In ADUC: right-click OU → Delegate Control → choose user/group → check tasks (reset passwords, modify group membership, create user/computer accounts, etc.).

### Delegate via PowerShell (dsacls or AD module)

```powershell
# Grant "HelpDesk" group the right to reset passwords on users in the Sales OU
$ouDN = "OU=Sales,DC=contoso,DC=com"
$identity = "CONTOSO\HelpDesk"
dsacls $ouDN /I:S /G "${identity}:CA;Reset Password;User"
```

🚨 **Trap on the exam:** Microsoft loves to ask "How do you delegate XYZ without granting Domain Admin rights?" The expected answer is always **"Delegate Control on the OU"**, never "add to Domain Admins."

---

## ♻️ AD Recycle Bin

Before the AD Recycle Bin, restoring a deleted object meant doing an **authoritative restore** from backup, painful. The Recycle Bin keeps deleted objects with all attributes intact for **180 days by default**.

### Enable (one-way operation, cannot be disabled)

```powershell
Enable-ADOptionalFeature -Identity "Recycle Bin Feature" `
    -Scope ForestOrConfigurationSet `
    -Target "contoso.com"
```

Requirements:

- Forest functional level **Windows Server 2008 R2 or higher**
- Membership in **Enterprise Admins** to enable

### Restore a deleted user

```powershell
# Find deleted objects
Get-ADObject -Filter 'IsDeleted -eq $true -and Name -like "Alice*"' `
    -IncludeDeletedObjects -Properties *

# Restore
Restore-ADObject -Identity "ObjectGUID-here"
```

📌 The default **tombstone lifetime** is 180 days (changed from 60 in Server 2003 SP1). When the Recycle Bin is enabled, the **deleted object lifetime** is also 180 days, this controls how long the Recycle Bin retains the object's attributes.

---

## 🏚️ Read-Only Domain Controllers (RODC)

You have a small branch office in a strip mall. The "server room" is a closet a janitor can pick the lock on. You need authentication at the branch (slow WAN), but losing that DC to theft cannot mean a full forest re-key.

**RODC = read-only AD copy + selective password caching + role separation.**

| Feature | RODC | Writable DC |
|---------|------|-------------|
| Holds full AD database | Read-only copy | Read/write |
| Password caching | Only for accounts in the **Allowed RODC Password Replication Group** | All |
| Schema changes accepted | No | Yes |
| LDAP/Kerberos serving | Yes (for cached accounts) | Yes |
| Forwards writes to writable DC | Yes | N/A |
| Local admin separation | Yes, non-domain-admin can administer the box | No |

### Deploy an RODC

```powershell
# Pre-create the account in HQ
Add-ADDSReadOnlyDomainControllerAccount -DomainControllerAccountName "HOU-DC01" `
    -DomainName "contoso.com" `
    -SiteName "Branch-Houston" `
    -DelegatedAdministratorAccountName "CONTOSO\HoustonAdmin"

# At the branch, promote the prepped server (no Enterprise Admin needed at this step)
Install-ADDSDomainController -DomainName "contoso.com" `
    -SafeModeAdministratorPassword (Read-Host -AsSecureString) `
    -UseExistingAccount:$true `
    -ReadOnlyReplica:$true
```

### Password Replication Policy (PRP)

- **Allowed RODC Password Replication Group** → "ok to cache" list
- **Denied RODC Password Replication Group** → never cache (Domain Admins, Schema Admins, Enterprise Admins are in here by default)

🔥 If an RODC is stolen, reset *only* the passwords of the accounts that were actually cached, known via:

```powershell
Get-ADDomainController -Identity "HOU-DC01" |
    Get-ADAuthenticationPolicySilo  # for context, then:
repadmin /prp View "HOU-DC01" Reveal  # what is cached
repadmin /prp View "HOU-DC01" Auth2   # what has authenticated through it
```

---

## 🪪 Service Accounts: MSA, gMSA, sMSA

Service accounts are credentials that *services* use. Plain user accounts work but require manual password management, and tickets get cached, leading to breach risk.

| Type | Scope | Password | Use when |
|------|-------|----------|----------|
| **Standard user account** | Domain | Admin sets, rotates manually | Legacy services that don't support MSA |
| **sMSA (Standalone Managed Service Account)** | Single computer | Auto-rotated by the OS, 240 days | One service on one server (rare in 2026) |
| **gMSA (Group Managed Service Account)** | Multiple computers | Auto-rotated, 30 days default | Clustered service, IIS app pool across servers, scheduled tasks |
| **dMSA (Delegated MSA, Win Server 2025)** | Multi-computer | Auto-rotated, migration-path replacement for legacy SAs | Replacing legacy admin/service accounts with no app changes |

### Create a gMSA

```powershell
# One-time per forest, create the KDS root key
Add-KdsRootKey -EffectiveImmediately

# Create the gMSA
New-ADServiceAccount -Name "svc-app01" `
    -DNSHostName "svc-app01.contoso.com" `
    -PrincipalsAllowedToRetrieveManagedPassword "WebFarm-Servers"

# On each web server in the farm
Install-ADServiceAccount -Identity "svc-app01"
# Then in IIS: set app pool identity to CONTOSO\svc-app01$ (note the $)
```

🚨 The `$` at the end of a gMSA name is mandatory, that's how AD knows it's a computer-class principal.

---

## 🛡️ Fine-Grained Password Policies (FGPP)

Pre-Server 2008, every domain had **one** password policy. To enforce stricter rules on admins, you had to split into a separate domain. FGPP changed that.

```powershell
# Create a Password Settings Object (PSO) for Admins
New-ADFineGrainedPasswordPolicy -Name "Admin-PSO" `
    -Precedence 1 `
    -MinPasswordLength 16 `
    -ComplexityEnabled $true `
    -PasswordHistoryCount 24 `
    -MaxPasswordAge "30.00:00:00" `
    -MinPasswordAge "1.00:00:00" `
    -LockoutThreshold 5 `
    -LockoutObservationWindow "00:30:00" `
    -LockoutDuration "00:30:00"

# Apply to the Domain Admins group
Add-ADFineGrainedPasswordPolicySubject -Identity "Admin-PSO" `
    -Subjects "Domain Admins"
```

📌 **Precedence:** lower number wins. PSOs apply only to **users** and **global security groups**, not OUs.

---

## 🧪 Task-Sequencing Practice: Recover from a Lost Forest Root DC

**Scenario:** A senior engineer accidentally physically destroys the only forest root DC (DC01.contoso.com, holding Schema Master, Domain Naming Master). You have writable DCs in two child domains and one other DC in the root domain that is a GC but holds no FSMO roles. The latest System State backup of DC01 is 14 days old.

**Order these steps:**

1. ✅ Determine current FSMO holders via `netdom query fsmo` from a surviving DC.
2. ✅ Seize the Schema Master and Domain Naming Master onto the surviving root-domain DC: `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole SchemaMaster,DomainNamingMaster -Force`
3. ✅ Verify child-domain trust paths still resolve (`nltest /sc_query:contoso.com`).
4. ✅ Perform **metadata cleanup** to remove the orphaned DC01 record: `ntdsutil` → `metadata cleanup` → `remove selected server` (or `Remove-ADDomainController -Identity DC01 -ForceRemoval`).
5. ✅ Build a **new** root-domain DC (DC03), promote with `Install-ADDSDomainController`, let it pull from DC02.
6. ✅ Verify replication: `repadmin /replsum` shows zero failures forest-wide.
7. ✅ **Never** bring DC01 back online from backup. Even a successfully restored image would create dueling FSMO holders if the seize is in place.

⚠️ Step 7 is the catch. Many candidates pick "restore from backup" because the backup is "only 14 days old." But the moment you seize, the recovered DC01 is poisoned. Always: **seize is one-way**.

---

## 📊 Case Study, The 2020 SolarWinds Sunburst Attack and AD Persistence

**Situation.** In December 2020, FireEye (now Mandiant) disclosed that a state-sponsored adversary (UNC2452 / Cozy Bear, attributed to Russia's SVR) had compromised SolarWinds' Orion build pipeline and shipped malicious code (Sunburst / SUNSPOT / TEARDROP) to ~18,000 customer organizations, including ~9 US federal agencies and ~100 of the Fortune 500 (CISA Alert AA20-352A, December 2020; CrowdStrike incident response report 2021). The deepest level of compromise was in Active Directory: in the worst-affected environments, the attacker stole the **krbtgt account hash** and forged Kerberos "Golden Tickets" granting unlimited domain admin access for any user, any service, any duration, without ever needing to authenticate again against a domain controller.

**Decision.** Microsoft's published guidance (Microsoft Security Response Center, *Recovering from Compromised Identity Infrastructure*, January 2021) gave Sunburst victims three escalating remediation paths:

1. **Rotate the krbtgt password twice** (with a 10-hr wait between rotations so existing TGTs expire). This invalidates Golden Tickets but **does not** clean up backdoor accounts, hidden ACL grants, or SIDHistory entries.
2. **Tier-0 rebuild**, rebuild DCs from clean OS, rotate **every** privileged credential (Domain Admins, Enterprise Admins, krbtgt, service accounts), audit AdminSDHolder for unexpected ACEs, and re-baseline AD ACL state via tools like Bloodhound + PingCastle.
3. **Forest recovery** a full clean-room forest rebuild. The "nuclear option." Multiple Sunburst victims chose this including, reportedly, the US Treasury OFAC unit (Reuters, January 2021).

**Outcome.** Of the ~9 federal agencies confirmed compromised, three did the krbtgt double-rotation only (option 1) and re-detected adversary activity within months. Two did the full Tier-0 rebuild and recovered cleanly. CISA and the NSA later published joint guidance recommending **option 2 minimum** for any confirmed Sunburst victim, and adding mandatory deployment of: (a) **Microsoft LAPS** for local admin password rotation, (b) **Protected Users group** for human admins, (c) **AdminSDHolder ACL hardening**, and (d) **PAW** (Privileged Access Workstations) on a separate physical or virtual network.

**Lesson for the exam / for practitioners.** AZ-800 won't test you on Sunburst by name, but it will test the building blocks of the response:

- *krbtgt rotation cadence* → **180 days max** is Microsoft's published recommendation (twice-rotated annually).
- *Protected Users group* → prevents NTLM, DES, RC4 Kerberos, and unconstrained delegation for members; cannot be cached on RODCs.
- *AdminSDHolder* → the container whose ACL is hourly applied to all "protected groups" (Domain Admins, Schema Admins, etc.) by the **SDProp** task; an unexpected ACE here is one of the highest-value persistence techniques.
- *PAW* → an admin workstation that is itself a Tier-0 asset (no internet browsing, no email, no untrusted code).

The exam will phrase this as scenario: "A security team detects unusual Kerberos tickets being created for the krbtgt account. What single action invalidates all forged tickets?" The answer is **rotate the krbtgt password twice**. That single fact is worth several question points, and the Sunburst case study explains *why* it matters.

**Discussion (Socratic).**
- **Q1.** Build the case for and against **option 3 (full forest recovery)** for a 6,000-seat regulated enterprise with confirmed Sunburst lateral movement. What is the *real* business cost of a forest rebuild (downtime, broken application identities, broken trusts), versus the *measurable risk* of a Tier-0 rebuild missing one ACL?
- **Q2.** Sunburst attackers reportedly added SIDHistory entries to grant access to domains that had a forest trust with the compromised domain. Why is **Selective Authentication** on forest trusts the strongest mitigation, and what's the operational cost of enabling it on a 30-domain forest with 250+ inter-org integrations?
- **Q3.** Microsoft's tier model (Tier 0 = forest control plane, Tier 1 = servers, Tier 2 = workstations) is a defense-in-depth recommendation that very few orgs fully implement because it's expensive. Argue the *minimum viable* tier-0 isolation a 200-person company should adopt, and where the diminishing returns curve actually bends.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "OUs are security boundaries" | ❌ OUs are delegation + GPO targeting boundaries; only forests (and domains, to a lesser extent) are security boundaries |
| "After seizing a FSMO role, the original DC can rejoin" | ❌ Never, metadata-clean and re-promote |
| "Block Inheritance always wins" | ❌ Enforced beats Block Inheritance; higher-scope Enforced beats lower-scope Enforced |
| "Tombstone lifetime = 60 days" | ❌ 180 days since Server 2003 SP1 (and matches Recycle Bin deleted object lifetime) |
| "RODC caches all passwords" | ❌ Only accounts explicitly in the Allowed RODC Password Replication Group |
| "Infrastructure Master must always be on a non-GC" | ❌ Only in multi-domain forests where not every DC is a GC |
| "AD Recycle Bin can be disabled" | ❌ One-way operation |
| "Distribution groups can be used for RBAC" | ❌ Only security groups have SIDs and can be on ACLs |
| "gMSAs work without the KDS root key" | ❌ Add-KdsRootKey is a one-time prerequisite per forest |
| "FGPP can target an OU" | ❌ Only users and global security groups |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Forest** | Top-level AD container; security and Schema boundary |
| **Tree** | A contiguous DNS namespace within a forest |
| **Domain** | A replication and admin partition |
| **OU** | A delegation + GPO targeting container; *not* a security boundary |
| **FSMO** | Flexible Single Master Operations (5 roles) |
| **PDC Emulator** | Time + password/GPO authority |
| **RID Master** | Allocates RIDs to DCs |
| **Site** | Network segment for replication & client affinity |
| **Site Link** | The replication path between two sites (cost + interval) |
| **KCC** | Knowledge Consistency Checker, auto-builds the replication topology |
| **GPO** | Group Policy Object |
| **LSDOU** | Local → Site → Domain → OU GPO precedence |
| **RODC** | Read-Only Domain Controller |
| **gMSA** | Group Managed Service Account |
| **FGPP / PSO** | Fine-Grained Password Policy / Password Settings Object |
| **AdminSDHolder** | Container whose ACL is hourly applied to protected groups |
| **Tombstone lifetime** | 180 days, how long deleted objects persist before garbage collection |
| **krbtgt** | The hidden account whose hash signs all Kerberos TGTs |

---

## ✅ Module 1 Summary

You now know:

- 🌳 The forest → tree → domain → OU → object hierarchy and what each boundary means
- 🤝 Trust types (parent–child, tree-root, external, forest, realm, shortcut), directions, and transitivity
- 🏢 All 5 FSMO roles, their scope, their default placement, and seize-vs-transfer
- 🌐 Sites, site links, replication intervals (15 sec intra / 180 min inter), and KCC
- 📋 GPO precedence (LSDOU), inheritance modifiers (Block + Enforced + Link Order), and refresh intervals
- 🏛️ OUs as delegation containers and how to delegate without granting Domain Admin
- ♻️ AD Recycle Bin, enable once, 180-day window, requires 2008 R2 functional level
- 🏚️ RODCs, read-only, selective caching, role separation
- 🪪 gMSAs, the modern service-account standard
- 🛡️ Fine-Grained Password Policies via PSOs
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Identity & Entra ID Hybrid Integration](../Module-02-Identity-Entra/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 plugs your on-prem AD into Microsoft Entra ID for cloud-based services (Conditional Access, MFA, app SSO). Module 4's file servers rely on AD security groups for share permissions. Module 5's Hyper-V live migration uses Kerberos against your DCs. Module 6's Azure Arc onboarding can target every AD-joined server you have.
> - Cross-course: [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers Entra ID independently, it's the cloud-side counterpart to this module. [`09-CompTIA-Security-Plus` Module 3](../../09-CompTIA-Security-Plus/Module-03-Identity-Access-Management/Reading.md) covers the IAM principles behind AD's design.
> - Practice: Practice Exam 1 has 9 questions on AD; Practice Exam 2 has 4 (hybrid integration); Final Mock has a case study spanning AD + Entra Connect + RODC.

---

## 💬 Discussion, Socratic prompts

1. **Forest design for a hospital network.** A 12-hospital health system wants one forest for clinical IT, but the radiology PACS vendor demands their own forest for HIPAA isolation. Defend the single-forest-with-FGPP approach vs the dual-forest-with-forest-trust approach. Which is genuinely safer once you account for staff turnover, Selective Authentication overhead, and the cost of a future merger?
2. **PDC Emulator placement.** A 4-site forest with 2 DCs per site needs to decide where to put the PDC Emulator. Argue the trade-off between "closest to the most admins" (for GPO editing latency), "closest to the most users" (for password update latency), and "in the most physically secure site" (for crisis containment). When does each consideration win?
3. **OU design, depth vs breadth.** Two valid OU designs exist for a 5,000-user company: a flat "by-department" structure (Marketing, Sales, Engineering, ...) or a nested "geo-then-department" structure (US/Sales, US/Marketing, EU/Sales, ...). Which scales better for GPO management, and how does Block Inheritance + Enforced reshape your answer when both regions have a "company-wide screensaver" policy at the root?
4. **gMSA migration friction.** A 200-server SQL estate uses standard user service accounts ("svc_sql_prod"). The 2-year project to migrate them all to gMSAs keeps stalling because each migration requires application owner sign-off. Build the executive business case: what is the *measurable* security and operational improvement, and what's the strongest counter-argument from an application owner? (Hint: SQL Server's `RECONFIGURE`-needing changes are non-trivial.)
5. **RODC's relevance in 2026.** With SD-WAN, MPLS-on-everything, and most branches on 100+ Mbps links, the original "branch office with bad WAN" rationale for RODCs is weaker than it was in 2008. Build the case that RODCs are now primarily a **security** play (limit blast radius of branch compromise) rather than a **performance** play, and argue when *not* deploying an RODC at a remote site is the right call.

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn, AD DS overview](https://learn.microsoft.com/windows-server/identity/ad-ds/ad-ds-getting-started)
- 📖 [Best Practices for Securing Active Directory (Microsoft, 2025 revision)](https://learn.microsoft.com/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory)
- 📖 Microsoft, *Recovering from Compromised Identity Infrastructure* (MSRC, January 2021), the canonical Sunburst response paper
- 📖 [Microsoft Tier 0/1/2 administrative model](https://learn.microsoft.com/security/privileged-access-workstations/privileged-access-access-model)
- 📖 Joe Richards, *Active Directory Cookbook* (4th ed., O'Reilly, 2013), still the most cited reference text; cmdlets have moved on but design principles haven't
- 📖 Brian Desmond et al., *Active Directory: Designing, Deploying, and Running Active Directory* (5th ed., O'Reilly, 2013), companion deep-dive
- 📖 [Sean Metcalf adsecurity.org](https://adsecurity.org/) long-running AD-security-focused blog; the practical companion to Microsoft's docs
- 📖 NIST SP 800-12 Rev 1 (2017), for the broader IAM principles AD implements
