# ✏️ Module 1 Quiz: Active Directory Domain Services

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which is the true SECURITY boundary in Active Directory? *(Remember)*
A. Organizational Unit
B. Domain
C. Site
D. Forest

---

### Q2. Which two FSMO roles are FOREST-WIDE (not per-domain)? *(Remember)*
A. PDC Emulator and RID Master
B. Schema Master and Domain Naming Master
C. Infrastructure Master and Schema Master
D. RID Master and Infrastructure Master

---

### Q3. Which FSMO role is the authoritative time source and processes password changes/account lockouts? *(Remember)*
A. RID Master
B. PDC Emulator
C. Domain Naming Master
D. Infrastructure Master

---

### Q4. The default INTRA-site replication interval in AD DS is approximately: *(Remember)*
A. 1 second
B. 15 seconds (notify-based)
C. 3 minutes
D. 180 minutes

---

### Q5. The default INTER-site replication interval (IP transport) is: *(Remember)*
A. 15 seconds
B. 15 minutes
C. 180 minutes (3 hours)
D. 24 hours

---

### Q6. A senior engineer accidentally destroys the only DC holding the Schema Master role. You seize the role onto another DC. Can the original DC be safely recovered from backup and brought back online? *(Understand)*
A. Yes, after a metadata cleanup on the surviving DC
B. Yes, if the backup is less than 60 days old
C. No, the original DC must be metadata-cleaned and re-promoted from scratch
D. Yes, but only after the next tombstone lifetime expires

---

### Q7. Which GPO modifier wins when there is a conflict between a higher-scope Enforced GPO and a lower-OU with Block Inheritance set? *(Understand)*
A. Block Inheritance, local always wins
B. The higher-scope Enforced GPO wins, period
C. WMI Filter decides
D. Whichever was created first

---

### Q8. The AD Recycle Bin requires what minimum FOREST FUNCTIONAL LEVEL? *(Remember)*
A. Windows Server 2003
B. Windows Server 2008
C. Windows Server 2008 R2
D. Windows Server 2016

---

### Q9. You enabled the AD Recycle Bin on Tuesday. On Friday, you decide you don't want it anymore. Which is TRUE? *(Understand)*
A. You can disable it via PowerShell
B. You can disable it via Group Policy
C. Enable is one-way, once on, it cannot be disabled
D. It auto-disables after 180 days of no use

---

### Q10. A Read-Only Domain Controller in a branch office gets stolen. To minimize the blast radius, what should you do FIRST? *(Apply)*
A. Reset every password in the domain
B. Reset only the passwords of the accounts the RODC had cached, then remove its computer account
C. Wipe SYSVOL from a writable DC
D. Increase the tombstone lifetime

---

### Q11. Which combination of conditions causes the Infrastructure Master role to need careful placement? *(Analyze)*
A. Single domain forest with all DCs as GCs
B. Multi-domain forest where not every DC is a Global Catalog
C. Single domain forest with no GCs at all
D. Forest functional level below Windows Server 2008

---

### Q12. To allow Houston help-desk staff to reset passwords on Sales OU users only, you should: *(Apply)*
A. Add them to Domain Admins
B. Use Delegate Control on the Sales OU
C. Create a Fine-Grained Password Policy
D. Promote them to RODC delegated admin

---

### Q13. Which option lists the GPO precedence order correctly, top to bottom (last wins)? *(Remember)*
A. Local → Domain → Site → OU
B. Local → Site → Domain → OU
C. Site → Domain → OU → Local
D. OU → Domain → Site → Local

---

### Q14. **Yes/No**, Mark each statement. *(Evaluate)*

**S1:** An OU can be used as a security boundary equivalent to a domain.
**S2:** A Fine-Grained Password Policy can be linked directly to an OU.
**S3:** A gMSA password is rotated by the operating system (no manual reset needed).

A. Yes / Yes / Yes
B. No / No / Yes
C. Yes / No / Yes
D. No / Yes / Yes

---

### Q15. The default tombstone lifetime for deleted AD objects (Windows Server 2003 SP1 and later) is: *(Remember)*
A. 30 days
B. 60 days
C. 90 days
D. 180 days

---

### Q16. Which group nesting strategy does Microsoft recommend for multi-domain RBAC? *(Remember)*
A. AGLP, Accounts → Global → Local → Permissions
B. AGDLP, Accounts → Global → Domain Local → Permissions
C. ADUP, Accounts → Domain → Universal → Permissions
D. AUGP, Accounts → Universal → Global → Permissions

---

### Q17. You need a service account whose password is auto-rotated AND is usable by multiple servers in a web farm. The correct choice is: *(Apply)*
A. Standard user service account
B. sMSA (Standalone Managed Service Account)
C. gMSA (Group Managed Service Account)
D. Local SYSTEM

---

### Q18. **Order these steps** to seize the PDC Emulator role from a dead DC onto a surviving DC. *(Create)*

1. Run `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole PDCEmulator -Force`
2. Confirm current FSMO holders via `netdom query fsmo`
3. Run `repadmin /replsum` to verify replication is healthy on remaining DCs
4. Remove the dead DC via `Remove-ADDomainController -Identity DC01 -ForceRemoval` or `ntdsutil` metadata cleanup

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 3 → 2 → 1 → 4
D. 4 → 2 → 1 → 3

---

### Q19. A two-way TRANSITIVE trust between two FORESTS that allows users from each forest to access resources in the other is: *(Remember)*
A. External trust
B. Realm trust
C. Forest trust
D. Shortcut trust

---

### Q20. Which feature lets a forest-trust administrator restrict cross-forest authentication to ONLY explicitly allowed principals? *(Understand)*
A. Selective Authentication
B. NTLM Restriction Policy
C. Account-Based Authentication
D. Universal Group Caching

---

### Q21. After enabling the AD Recycle Bin, deleted objects can be restored with all attributes for the next ___ days by default. *(Remember)*
A. 30
B. 60
C. 90
D. 180

---

### Q22. **Yes/No**, Group Policy refresh. *(Apply)*

**S1:** Domain member computers refresh GPO every 90 minutes (+0–30 min offset).
**S2:** Domain controllers refresh GPO every 5 minutes.
**S3:** Folder redirection settings apply mid-session; no logoff required.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q23. A new branch office complains of slow logons. The DC at the branch is healthy, replicates fine, and has good network connectivity. The most likely cause is: *(Analyze)*
A. The PDC Emulator is too far away
B. The branch subnet is not associated with a site in AD Sites & Services
C. The GC is not in the local site
D. The Schema partition is not replicating

---

### Q24. **Yes/No**, RODC behavior. *(Analyze)*

**S1:** An RODC caches all user passwords by default.
**S2:** Domain Admins are members of the Denied RODC Password Replication Group by default.
**S3:** An RODC can be administered by a non-Domain-Admin delegated user without granting domain-wide rights.

A. No / Yes / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

### Q25. Which command displays the current FSMO role holders from any domain member? *(Apply)*
A. `dsquery server -hasfsmo`
B. `netdom query fsmo`
C. `dcdiag /test:fsmo`
D. All of the above

---

### Q26. To prevent Pass-the-Hash style attacks where a stolen krbtgt hash can forge unlimited Kerberos TGTs, Microsoft recommends: *(Apply)*
A. Rotating the krbtgt password TWICE (with a 10-hour gap), at least every 180 days
B. Disabling the krbtgt account entirely
C. Setting `userAccountControl` to `DONT_REQUIRE_PREAUTH` on krbtgt
D. Demoting all DCs and re-promoting

---

## 🎯 Answers + Explanations

### Q1: **D. Forest**
The forest is the AD security boundary. Domains are admin/replication boundaries. OUs are delegation containers. Sites are network constructs, none are security boundaries.

### Q2: **B. Schema Master and Domain Naming Master**
Both are forest-wide; the other three (PDC Emulator, RID Master, Infrastructure Master) are domain-wide. Memorize this 2-vs-3 split cold.

### Q3: **B. PDC Emulator**
The PDC chains time to the Forest Root PDC, processes password updates urgently (1-sec replication), and is the default GPO editor target. It also handles account lockout processing.

### Q4: **B. 15 seconds (notify-based)**
Intra-site replication uses change notification, partners get an "I have a change" RPC about 15 seconds after the change. Urgent updates (passwords, lockouts) get 1-second priority.

### Q5: **C. 180 minutes (3 hours)**
Default site-link replication is 180 minutes. Adjustable down to 15 minutes; uses RPC over IP by default (SMTP is deprecated and only for non-domain partitions anyway).

### Q6: **C. No, the original DC must be metadata-cleaned and re-promoted from scratch**
A seize is one-way. Bringing back the original DC creates dueling FSMO holders and can corrupt the schema. Always: seize → metadata-clean → fresh promotion.

### Q7: **B. The higher-scope Enforced GPO wins, period**
Enforced beats Block Inheritance, and among Enforced policies, the higher scope wins (opposite of normal precedence). This inversion is heavily exam-tested.

### Q8: **C. Windows Server 2008 R2**
The forest functional level must be at least 2008 R2. Older forests must first be raised before the Recycle Bin can be enabled.

### Q9: **C. Enable is one-way, once on, it cannot be disabled**
This is a deliberate design choice, preventing future restore capability would be a security/operations risk.

### Q10: **B. Reset only the passwords of the accounts the RODC had cached, then remove its computer account**
Use `repadmin /prp View "HOU-RODC01" Reveal` to see what was cached, then reset just those accounts. Mass-resetting the whole domain is unnecessary and disruptive.

### Q11: **B. Multi-domain forest where not every DC is a Global Catalog**
Infrastructure Master tracks cross-domain object references; if it lives on a GC in this scenario, references won't update. Either put every DC on GC, or keep IM off a GC.

### Q12: **B. Use Delegate Control on the Sales OU**
The principle of least privilege: scope the delegation to the OU. Domain Admin would massively over-grant.

### Q13: **B. Local → Site → Domain → OU**
LSDOU. Local is first, OU last (nested OUs go top-down, with the closest OU to the object winning by default, Enforced inverts this).

### Q14: **B. No / No / Yes**
S1: OUs are not security boundaries. S2: PSOs apply to users and global groups only, not OUs. S3: gMSAs auto-rotate (30 days default).

### Q15: **D. 180 days**
Since Windows Server 2003 SP1, tombstone is 180 days. The Recycle Bin's deleted-object lifetime also defaults to 180.

### Q16: **B. AGDLP, Accounts → Global → Domain Local → Permissions**
Microsoft's long-standing recommendation. Universal groups extend to AGUDLP for multi-forest.

### Q17: **C. gMSA**
gMSAs are multi-host capable, auto-rotate, and are the current-best-practice. sMSAs are single-host only and rarely used today.

### Q18: **B. 2 → 3 → 1 → 4**
Check current state → verify health → seize → clean up dead DC. Never seize blind; always confirm replication is healthy first to avoid making a bad situation worse.

### Q19: **C. Forest trust**
Forest trust = two-way (optional), transitive across all domains in both forests. External is non-transitive. Realm is for non-Windows Kerberos. Shortcut is intra-forest.

### Q20: **A. Selective Authentication**
Available on Forest and External trusts. Requires "Allowed-to-Authenticate" permission on each target resource.

### Q21: **D. 180**
The deleted-object lifetime (and tombstone lifetime) is 180 days by default.

### Q22: **A. Yes / Yes / No**
S1 & S2 correct. S3 wrong, folder redirection requires logoff/logon (foreground processing). Drive maps, software install, and folder redirection apply only at startup/logon.

### Q23: **B. The branch subnet is not associated with a site in AD Sites & Services**
Without a subnet → site mapping, clients are treated as if in Default-First-Site and may hit a DC across the WAN. Adding the subnet fixes this immediately.

### Q24: **A. No / Yes / Yes**
S1 wrong (RODCs cache only accounts in the Allowed RODC Password Replication Group). S2 and S3 correct.

### Q25: **D. All of the above**
All three commands work. `netdom query fsmo` is the most common; `dcdiag /test:fsmo` is part of broader health checks.

### Q26: **A. Rotating the krbtgt password TWICE (with a 10-hour gap), at least every 180 days**
Twice is required because TGTs valid under the previous-previous password become invalid only after both rotations. Microsoft publishes a script `Reset-KrbTgt-Password.ps1` for exactly this purpose.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 AD domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read FSMO + GPO + RODC sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- All 5 FSMO roles + scope + default placement
- LSDOU + Enforced/Block precedence inversion
- 15 sec intra / 180 min inter replication
- Tombstone & deleted-object lifetime = 180 days
- AD Recycle Bin = one-way enable, 2008 R2 min
- AGDLP group nesting strategy
- RODC = read-only + selective caching + role separation
- gMSA = auto-rotate, multi-host, prefer over sMSA
- krbtgt = rotate twice with 10-hour gap, every 180 days
- Selective Authentication on forest trusts

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2](../Module-02-Identity-Entra/Reading.md)
