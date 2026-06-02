# 📋 Module 1 Cheat Sheet: Active Directory Domain Services

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🌳 Logical Hierarchy

```
FOREST  ◄── Security + Schema boundary
└── TREE  ◄── Contiguous DNS namespace
    └── DOMAIN  ◄── Replication + admin boundary
        └── OU  ◄── Delegation + GPO targeting (NOT security)
            └── OBJECT  ◄── User / Computer / Group
```

🧠 **OUs are NOT security boundaries.**

---

## 🏢 FSMO Roles (MEMORIZE COLD)

| Scope | Role | Purpose |
|-------|------|---------|
| **Forest** | Schema Master | Schema partition writes |
| **Forest** | Domain Naming Master | Add/remove domains in forest |
| **Domain** | RID Master | Allocates RID pools to DCs |
| **Domain** | **PDC Emulator** | Time auth · password changes · default GPO editor · lockout processing |
| **Domain** | Infrastructure Master | Cross-domain object refs (keep OFF a GC in multi-domain forests unless all DCs are GCs) |

**Transfer:** `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole PDCEmulator`
**Seize:** add `-Force` (destructive — never recover original DC).

---

## ⏱️ Replication Intervals

| Type | Default |
|------|---------|
| **Intra-site (notify)** | ~15 sec (1 sec urgent) |
| **Inter-site (IP)** | 180 min — adjustable down to 15 min |
| **Tombstone lifetime** | 180 days (since 2003 SP1) |
| **Recycle Bin object lifetime** | 180 days (default) |
| **GPO refresh (members)** | 90 min + 0–30 offset |
| **GPO refresh (DCs)** | 5 min |

---

## 📋 GPO Precedence (LSDOU)

```
Local → Site → Domain → OU  (later wins)
              ↓
       Enforced beats Block Inheritance
   Higher-scope Enforced beats lower-scope Enforced
```

🔥 **Inverted rule under Enforced:** higher scope wins.

---

## 🤝 Trust Types

| Trust | Direction | Transitive | Use case |
|-------|-----------|------------|----------|
| **Parent–Child** | 2-way | Yes | Auto in forest |
| **Tree-Root** | 2-way | Yes | Auto across trees |
| **External** | 1- or 2-way | No | To a separate forest's single domain |
| **Forest** | 1- or 2-way | Yes (all domains) | Merger / acquisition |
| **Realm** | 1- or 2-way | No | Non-Windows Kerberos |
| **Shortcut** | 1- or 2-way | No | Intra-forest auth path optimization |

🔥 **Selective Authentication** on forest/external trusts = explicit "Allowed-to-Authenticate" required.

---

## 🪪 Service Accounts — Pick the Right One

| Type | Scope | Auto-rotate | Use when |
|------|-------|-------------|----------|
| Standard user SA | Domain | No | Legacy apps only |
| **sMSA** | Single computer | Yes (240 days) | Single-host service |
| **gMSA** ⭐ | Multi-computer | Yes (30 days) | Web farm, clustered, scheduled tasks |
| **dMSA** (2025) | Multi-computer | Yes | Migration target for legacy SAs |

Prerequisite for gMSA: `Add-KdsRootKey -EffectiveImmediately` (forest-wide, one-time).

---

## ♻️ AD Recycle Bin

- **One-way enable:** `Enable-ADOptionalFeature -Identity "Recycle Bin Feature" -Scope ForestOrConfigurationSet -Target "contoso.com"`
- Forest functional level ≥ **2008 R2**
- Restore: `Restore-ADObject -Identity <GUID>` (or `Get-ADObject ... -IncludeDeletedObjects` first)
- 180-day deleted-object lifetime

---

## 🏚️ RODC Cheat

- Read-only DB + selective password caching + role separation
- **Allowed RODC Password Replication Group** = ok to cache
- **Denied RODC Password Replication Group** = never cache (Domain Admins, Enterprise Admins are here by default)
- If stolen: reset *only* cached account passwords (see via `repadmin /prp View "RODC" Reveal`)

---

## 🛡️ Fine-Grained Password Policy (FGPP / PSO)

- Apply to **users or global security groups only** (NOT OUs)
- Lower **Precedence** value wins
- Example: stronger rules for Domain Admins group
- `New-ADFineGrainedPasswordPolicy -Name "Admin-PSO" -Precedence 1 -MinPasswordLength 16 -ComplexityEnabled $true ...`

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Delegate control to the OU" (least privilege)
- ✅ "Forest functional level Windows Server 2008 R2 or later"
- ✅ "Selective Authentication on the forest trust"
- ✅ "Add the branch subnet to the appropriate site"
- ✅ "Seize the FSMO role onto a surviving DC, then metadata-clean the dead one"
- ✅ "Use a gMSA"

Usually **wrong**:

- ❌ "Add to Domain Admins to delegate"
- ❌ "An OU is a security boundary"
- ❌ "Bring the original FSMO holder back after a seize"
- ❌ "Use the same password policy for everyone, even admins"
- ❌ "Standard user account is fine for a SQL service"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Permanent Domain Admin / Schema Admin for everyone
- ❌ One DC = one role concentration (no DR plan)
- ❌ No site/subnet mapping → random DC selection by clients
- ❌ Skipping `Add-KdsRootKey` and wondering why gMSAs fail
- ❌ Enabling AD Recycle Bin AFTER an accidental deletion (must be on BEFORE)

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| Add domain to existing forest | Domain Naming Master |
| Track who holds FSMOs | `netdom query fsmo` |
| Time problems forest-wide | Verify PDC Emulator in forest root has external time source |
| Branch with bad WAN + locked closet | RODC |
| Per-group password rules | FGPP / PSO |
| Auto-rotated service account on multiple servers | gMSA |
| Recovering a deleted user with attributes | AD Recycle Bin (enable BEFORE the deletion) |
| Block GPO from above on a specific OU | Block Inheritance (defeated by Enforced from above) |
| Force a GPO regardless of Block below | Enforced on the link |
| Two-way auth between Contoso and Fabrikam forests | Forest trust, bidirectional, transitive |

---

## ✏️ Quick Self-Check

1. All 5 FSMO roles + scope? ___
2. Intra vs inter-site replication interval? ___
3. LSDOU precedence + Enforced inversion? ___
4. Tombstone lifetime default? ___
5. Why must `Add-KdsRootKey` run before gMSAs? ___

---

➡️ [Module 2: Identity & Entra ID Hybrid Integration](../Module-02-Identity-Entra/Reading.md)
