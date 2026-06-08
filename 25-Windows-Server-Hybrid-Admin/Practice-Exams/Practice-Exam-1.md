# 🧪 Practice Exam 1, AZ-800 (Core Hybrid Infrastructure)

> **Conditions:** Set an 80-minute timer. 40 questions. Treat it like the real thing.
> **Pass mark:** 28/40 (≈ 70%, matching the real exam)
> Take this AFTER finishing Modules 1–5 (AZ-800 backbone).

---

## 📝 Questions

### 1. The Active Directory logical hierarchy from top to bottom is:
A. Domain → Forest → OU → Object
B. Forest → Tree → Domain → OU → Object
C. Tree → Forest → Domain → OU → Object
D. Forest → Domain → Tree → OU → Object

### 2. Which TWO FSMO roles are forest-wide?
A. PDC Emulator and RID Master
B. Schema Master and Domain Naming Master
C. Infrastructure Master and Schema Master
D. RID Master and Infrastructure Master

### 3. Which FSMO role handles password updates and is the authoritative time source?
A. RID Master
B. PDC Emulator
C. Domain Naming Master
D. Infrastructure Master

### 4. The default INTRA-site replication interval is approximately:
A. 1 second
B. 15 seconds (notify-based)
C. 3 minutes
D. 180 minutes

### 5. The default INTER-site replication interval (IP transport) is:
A. 15 seconds
B. 15 minutes
C. 180 minutes (3 hours)
D. 24 hours

### 6. The AD Recycle Bin requires what minimum forest functional level?
A. Server 2003
B. Server 2008
C. Server 2008 R2
D. Server 2016

### 7. The default tombstone lifetime since Server 2003 SP1 is:
A. 30 days
B. 60 days
C. 90 days
D. 180 days

### 8. Group Policy precedence (last wins) is:
A. Local → Domain → Site → OU
B. Local → Site → Domain → OU
C. Site → Domain → OU → Local
D. OU → Domain → Site → Local

### 9. **Yes/No**, Mark each statement.

**S1:** An OU is a security boundary equivalent to a domain.
**S2:** Forest functional level 2008 R2 is required for the AD Recycle Bin.
**S3:** A gMSA password is auto-rotated by the OS (no manual reset needed).

A. Yes / Yes / Yes
B. No / Yes / Yes
C. Yes / Yes / No
D. No / No / Yes

### 10. To allow a Help Desk team to reset Sales user passwords without making them Domain Admins, use:
A. Add to Domain Admins
B. Delegate Control on the Sales OU
C. Create a Fine-Grained Password Policy
D. Add to Enterprise Admins

### 11. After seizing the Schema Master role onto another DC, the original DC:
A. Can be safely brought back from backup
B. Must be metadata-cleaned and re-promoted from scratch
C. Will auto-reconcile within 24 hours
D. Becomes a Read-Only Domain Controller

### 12. The lightweight sync agent designed to support multiple disconnected on-prem forests is:
A. Microsoft Entra Connect Sync
B. Microsoft Entra Cloud Sync
C. Microsoft Identity Manager
D. AD FS

### 13. Microsoft's 2026 recommended hybrid sign-in method is:
A. Federation with AD FS
B. PHS + Seamless SSO
C. PTA only
D. Smart card only

### 14. Seamless SSO (SSSO) creates which computer account in your on-prem AD?
A. `MSOL_xxxx`
B. `AZUREADSSOACC`
C. `KERBEROSSSO`
D. `WIN32CERT`

### 15. Which device join state means the device is in BOTH on-prem AD AND Entra ID?
A. Entra Registered
B. Entra Joined
C. Hybrid Entra Joined
D. Workplace Joined

### 16. To use Hybrid Entra Join device writeback, you MUST use:
A. Entra Cloud Sync
B. Entra Connect Sync
C. Either Cloud Sync or Connect Sync
D. AD FS only

### 17. PTA agents communicate with Entra ID over:
A. Inbound 389 LDAP
B. Outbound 443 HTTPS only
C. Outbound 88 Kerberos
D. Inbound 80 HTTP

### 18. AD-integrated DNS zones provide:
A. Single-master file-based storage
B. Multi-master writes across all DCs
C. Read-only secondary replicas only
D. Cross-forest replication

### 19. Which DNS feature is BEST when the remote zone's NS list changes frequently?
A. Conditional forwarder
B. Stub zone
C. Static A records
D. WINS

### 20. DNSSEC's DS record is published in:
A. The signed zone itself
B. The parent zone, anchoring trust
C. The TXT zone-info record
D. Every NS record set

### 21. DHCP scavenging defaults are:
A. Enabled with 7/7/7 day intervals
B. Disabled by default
C. Enabled with 30/30/30 day intervals
D. Disabled with 14/14/14 day intervals when enabled

### 22. A new DHCP server is installed but is handing out APIPA addresses. The most likely cause is:
A. Scope not active
B. DHCP server NOT AUTHORIZED in AD
C. MCLT misconfigured
D. Conditional forwarder missing

### 23. DHCP failover MCLT (Maximum Client Lead Time) default is:
A. 5 minutes
B. 15 minutes
C. 1 hour
D. 4 hours

### 24. Storage Spaces Direct supports how many nodes per cluster?
A. 1–8
B. 2–16
C. 4–32
D. 8–64

### 25. The Windows Server edition required for S2D is:
A. Standard
B. Datacenter
C. Essentials
D. Hyper-V Server (free)

### 26. Storage Replica synchronous mode requires network RTT no greater than approximately:
A. 1 ms
B. 5 ms
C. 50 ms
D. 200 ms

### 27. DFS-R uses what technology to transfer only the changed parts of files?
A. Block-level mirroring
B. Remote Differential Compression (RDC)
C. SMB Multichannel
D. RPC over IPsec

### 28. ReFS LACKS which capability that NTFS has?
A. Block cloning
B. Integrity streams
C. EFS file-level encryption + boot/page file support
D. Mirror-accelerated parity

### 29. **Yes/No**, Mark each statement.

**S1:** ReFS can be the OS boot drive.
**S2:** S2D requires identical hardware across nodes.
**S3:** Storage Replica destination volume is mounted and readable during normal replication.

A. No / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

### 30. The Hyper-V VM generation that supports vTPM and Secure Boot is:
A. Gen 1
B. Gen 2
C. Both
D. Neither

### 31. The Hyper-V virtual switch type that allows VM-to-outside-world traffic is:
A. External
B. Internal
C. Private
D. Loopback

### 32. Hyper-V Replica replication frequency options are:
A. 1 sec, 1 min, 1 hour
B. 30 sec, 5 min, 15 min
C. 5 min only
D. 1 hour, 4 hours, 24 hours

### 33. Hyper-V Live Migration with no shared storage uses:
A. Quick Migration
B. Storage Migration only
C. Shared-Nothing Live Migration (SMB 3.0)
D. Hyper-V Replica failover

### 34. The Host Guardian Service (HGS) attestation mode recommended for production is:
A. Host Key
B. TPM-trusted
C. None
D. Anonymous

### 35. Azure requires which format for uploaded VM disks?
A. VHD only (must convert VHDX before upload)
B. VHDX only
C. VMDK
D. RAW

### 36. **Order these steps** to seize the PDC Emulator role from a dead DC onto a surviving DC.

1. `Move-ADDirectoryServerOperationMasterRole -Identity DC02 -OperationMasterRole PDCEmulator -Force`
2. Confirm current FSMO holders via `netdom query fsmo`
3. Run `repadmin /replsum` to verify replication health
4. Remove the dead DC via metadata cleanup

A. 1 → 2 → 3 → 4
B. 2 → 3 → 1 → 4
C. 3 → 2 → 1 → 4
D. 4 → 2 → 1 → 3

### 37. **Order these steps** to enable Hyper-V Replica between HV01 and HV02.

1. On HV02: `Enable-VMReplication -AllowedAuthenticationType Kerberos`
2. On HV01: `Enable-VMReplication -VMName "SQL01" -ReplicaServerName "HV02"`
3. On HV01: `Start-VMInitialReplication -VMName "SQL01"`
4. Validate via `Get-VMReplication -VMName "SQL01"`

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 2 → 4
D. 3 → 1 → 2 → 4

### 38. NLB supports a maximum of how many nodes?
A. 4
B. 8
C. 16
D. 32

### 39. **Yes/No**, Mark each statement.

**S1:** Storage Replica's destination volume is unmounted/inaccessible during normal replication.
**S2:** DFS-R is a backup solution.
**S3:** A DFS-N folder supports up to 32 targets.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

### 40. For a brand-new Windows Server 2022 VM that needs vTPM for BitLocker, the correct VM generation is:
A. Gen 1
B. Gen 2
C. Either, vTPM works on both
D. Server 2022 doesn't support vTPM

---

## 🎯 Answer Key (No Cheating!)

```
1.  B    11. B    21. B    31. A
2.  B    12. B    22. B    32. B
3.  B    13. B    23. C    33. C
4.  B    14. B    24. B    34. B
5.  C    15. C    25. B    35. A
6.  C    16. B    26. B    36. B
7.  D    17. B    27. B    37. A
8.  B    18. B    28. C    38. D
9.  B    19. B    29. A    39. A
10. B    20. B    30. B    40. B
```

---

## 📊 Scoring

| Score | Verdict |
|-------|---------|
| 36–40 | 🏆 Excellent, AZ-800 ready |
| 28–35 | ✅ On track. Review missed Qs, then continue to Practice Exam 2 |
| 20–27 | ⚠️ Re-study weak modules (use map below) |
| <20   | 🔁 Restart from Module 1 |

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
| 1–11, 36 | Module 1 (Active Directory) |
| 12–17 | Module 2 (Identity & Entra ID Hybrid) |
| 18–23, 38 | Module 3 (Networking, DNS, DHCP) |
| 24–29, 39 | Module 4 (File Servers, Storage, Storage Spaces) |
| 30–35, 37, 40 | Module 5 (Hyper-V & Virtualization) |

---

## Detailed answer rationales

> Per the graduate-level professional bar spec, every wrong option is explained. Use these to retire concepts you missed, not just to "see what's correct."

**Q1. Answer: B.** *Why B is correct.* The canonical AD hierarchy is Forest → Tree → Domain → OU → Object (Microsoft Learn, AD DS Logical Structure; Brian Desmond et al., *Active Directory*, 5th ed., 2013). *Why the other options are wrong.* **A**: Domain isn't above Forest. **C**: Tree is below Forest. **D**: Tree is between Forest and Domain. *Exam-takeaway.* Memorize F-T-D-O-O.

**Q2. Answer: B.** *Why B is correct.* Schema Master + Domain Naming Master are forest-wide. The other three (PDC, RID, Infrastructure) are per-domain. *Why the other options are wrong.* **A**: PDC and RID are domain. **C**: Infrastructure is domain. **D**: Both are domain-level. *Exam-takeaway.* "Schema and Naming = Forest." Memorize that 2-vs-3 split.

**Q3. Answer: B.** *Why B is correct.* PDC Emulator chains time + handles password updates (1-sec urgent replication) + is default GPO editor. *Why the other options are wrong.* **A**: RID Master allocates RID pools. **C**: Domain Naming adds/removes domains. **D**: Infrastructure tracks cross-domain object refs. *Exam-takeaway.* "PDC = time + password + GPO."

**Q4. Answer: B.** *Why B is correct.* Intra-site replication uses change notification ~15 seconds. *Why the other options are wrong.* **A**: 1 sec is urgent only (passwords, lockouts). **C**: 3 min is no standard interval. **D**: 180 min is inter-site default. *Exam-takeaway.* Memorize: 15 sec intra, 180 min inter.

**Q5. Answer: C.** *Why C is correct.* Default site link is 180 minutes (3 hours), adjustable down to 15 min. *Why the other options are wrong.* **A**: 15 sec is intra-site. **B**: 15 min is the minimum inter-site, not default. **D**: 24 hr is far too slow. *Exam-takeaway.* 180 min default; 15 min minimum.

**Q6. Answer: C.** *Why C is correct.* Recycle Bin requires forest functional level 2008 R2 or higher. *Why the other options are wrong.* **A/B**: 2003/2008 are too old. **D**: 2016 works but isn't the minimum. *Exam-takeaway.* "2008 R2 = Recycle Bin floor."

**Q7. Answer: D.** *Why D is correct.* 180 days since Server 2003 SP1. *Why the other options are wrong.* **A**: 30/60 were earlier defaults. **B/C**: Wrong. *Exam-takeaway.* 180 days for tombstone + Recycle Bin deleted-object lifetime.

**Q8. Answer: B.** *Why B is correct.* LSDOU, Local → Site → Domain → OU, with the closest OU winning under normal precedence. *Why the other options are wrong.* **A**: Domain comes after Site, not before. **C**: Local must come first. **D**: Reversed order. *Exam-takeaway.* LSDOU; Enforced + Block flip the rules.

**Q9. Answer: B.** *Why B is correct.* S1 wrong (OUs are delegation containers, NOT security boundaries). S2 correct. S3 correct. *Why the other options are wrong.* They all mark S1 as Yes. *Exam-takeaway.* OUs ≠ security boundaries.

**Q10. Answer: B.** *Why B is correct.* Delegate Control on the OU is the least-privilege answer. *Why the other options are wrong.* **A**: Massive over-grant. **C**: FGPP is for password rules, not delegation. **D**: Enterprise Admins is even broader. *Exam-takeaway.* Delegation = OU-scoped.

**Q11. Answer: B.** *Why B is correct.* Seize is one-way; original must be metadata-cleaned + re-promoted. *Why the other options are wrong.* **A**: Restoring would create dueling FSMO holders. **C**: No auto-reconcile mechanism. **D**: RODC promotion is unrelated. *Exam-takeaway.* Seize = burn-the-original.

**Q12. Answer: B.** *Why B is correct.* Cloud Sync is light, multi-instance, multi-forest-friendly. *Why the other options are wrong.* **A**: Connect Sync supports multi-forest but more heavily. **C**: MIM is the on-prem product, not for Entra. **D**: AD FS is federation, not sync. *Exam-takeaway.* M&A multi-forest → Cloud Sync.

**Q13. Answer: B.** *Why B is correct.* Microsoft's published guidance is PHS + SSSO. *Why the other options are wrong.* **A**: Federation is being deprecated. **C**: PTA has on-prem dependencies. **D**: Smart-card-only is too restrictive. *Exam-takeaway.* PHS + SSSO is the cloud-first default.

**Q14. Answer: B.** *Why B is correct.* `AZUREADSSOACC` is the SSSO computer account. *Why the other options are wrong.* **A**: `MSOL_*` is the Connect Sync service account. **C/D**: Not real names. *Exam-takeaway.* Memorize AZUREADSSOACC.

**Q15. Answer: C.** *Why C is correct.* Hybrid Entra Joined = both AD and Entra. *Why the other options are wrong.* **A**: Entra Registered = BYOD/personal. **B**: Entra Joined = cloud-only. **D**: Workplace Join is a legacy term. *Exam-takeaway.* Hybrid = "both."

**Q16. Answer: B.** *Why B is correct.* Cloud Sync does NOT support Hybrid Join device writeback. *Why the other options are wrong.* **A**: Cloud Sync lacks Hybrid Join writeback. **C**: Only Connect Sync. **D**: AD FS is sign-in, not sync. *Exam-takeaway.* Hybrid Join → Connect Sync.

**Q17. Answer: B.** *Why B is correct.* PTA agent makes only outbound HTTPS calls to Entra. *Why the other options are wrong.* **A**: No inbound LDAP. **C**: Not Kerberos. **D**: Inbound 80 = security risk. *Exam-takeaway.* PTA = outbound 443 only.

**Q18. Answer: B.** *Why B is correct.* AD-integrated zones replicate via AD's multi-master. *Why the other options are wrong.* **A**: File-based primary is single-master. **C**: Secondaries are read-only but not AD-integrated. **D**: Replication is per-partition scope. *Exam-takeaway.* AD-integrated = multi-master.

**Q19. Answer: B.** *Why B is correct.* Stub zones auto-refresh NS records, best for dynamic remote topologies. *Why the other options are wrong.* **A**: Conditional forwarders are static. **C**: Static A records won't scale. **D**: WINS is legacy NetBIOS. *Exam-takeaway.* Dynamic remote NS → stub zone.

**Q20. Answer: B.** *Why B is correct.* DS record at the PARENT anchors the trust chain. *Why the other options are wrong.* **A**: DNSKEY is in the signed zone; DS is parent's. **C**: TXT is unrelated. **D**: NS records don't carry signatures. *Exam-takeaway.* DS = parent anchor.

**Q21. Answer: B.** *Why B is correct.* Scavenging is OFF by default. Defaults *when enabled* are 7/7/7. *Why the other options are wrong.* **A**: Off by default. **C/D**: Wrong default values. *Exam-takeaway.* Scavenging is off; enable explicitly.

**Q22. Answer: B.** *Why B is correct.* DHCP must be authorized in AD (`Add-DhcpServerInDC`); otherwise no leases. Event 1059. *Why the other options are wrong.* **A**: Scope inactive would be a different error. **C**: MCLT is failover only. **D**: Conditional forwarders are DNS. *Exam-takeaway.* DHCP unauthorized = APIPA + Event 1059.

**Q23. Answer: C.** *Why C is correct.* Default MCLT is 1 hour. *Why the other options are wrong.* **A/B/D**: Wrong default values. *Exam-takeaway.* MCLT = 1 hr default.

**Q24. Answer: B.** *Why B is correct.* S2D supports 2 to 16 nodes per cluster. *Why the other options are wrong.* **A**: Min 2, not 1. **C**: Max 16, not 32. **D**: Wrong. *Exam-takeaway.* Memorize 2–16.

**Q25. Answer: B.** *Why B is correct.* S2D requires Datacenter edition. *Why the other options are wrong.* **A**: Standard not licensed. **C/D**: Essentials/Hyper-V Server don't support S2D. *Exam-takeaway.* S2D = Datacenter.

**Q26. Answer: B.** *Why B is correct.* Sync mode requires ≤ ~5 ms RTT for acceptable performance. *Why the other options are wrong.* **A**: 1 ms is unrealistic. **C/D**: Too slow for sync. *Exam-takeaway.* Sync ≤ 5 ms RTT (~50 km).

**Q27. Answer: B.** *Why B is correct.* RDC computes block-level diffs. *Why the other options are wrong.* **A**: Block mirroring is Storage Replica. **C**: SMB MC is parallel TCP, not diff. **D**: Wrong protocol. *Exam-takeaway.* RDC = block diff in DFS-R.

**Q28. Answer: C.** *Why C is correct.* ReFS lacks EFS file-level encryption AND cannot be boot/page-file drive. *Why the other options are wrong.* **A**: ReFS HAS block cloning. **B**: ReFS HAS integrity streams. **D**: ReFS HAS MAP. *Exam-takeaway.* NTFS still has the unique boot/page-file/EFS niche.

**Q29. Answer: A.** *Why A is correct.* S1 wrong (no boot from ReFS). S2 correct (S2D needs identical HW). S3 wrong (SR destination is unmounted). *Why the other options are wrong.* They mark S1 or S3 as Yes. *Exam-takeaway.* Memorize all three.

**Q30. Answer: B.** *Why B is correct.* Gen 2 supports vTPM and Secure Boot. *Why the other options are wrong.* **A**: Gen 1 lacks vTPM. **C**: Not both. **D**: Gen 2 supports both. *Exam-takeaway.* vTPM = Gen 2 only.

**Q31. Answer: A.** *Why A is correct.* External vSwitch binds to a physical NIC. *Why the other options are wrong.* **B**: Internal = host↔VMs. **C**: Private = VM↔VM only. **D**: Not a vSwitch type. *Exam-takeaway.* External = outside world.

**Q32. Answer: B.** *Why B is correct.* 30 sec / 5 min / 15 min intervals. *Why the other options are wrong.* **A**: 1-sec isn't supported. **C**: 5 min isn't the only option. **D**: Too slow. *Exam-takeaway.* Memorize 30s / 5m / 15m.

**Q33. Answer: C.** *Why C is correct.* Shared-Nothing uses SMB 3.0 between hosts. *Why the other options are wrong.* **A**: Quick Migration has multi-second downtime. **B**: Storage Migration moves storage, not the VM. **D**: HV Replica is async DR, not migration. *Exam-takeaway.* Shared-Nothing = SMB 3.0 between hosts.

**Q34. Answer: B.** *Why B is correct.* TPM-trusted uses hardware TPM + boot measurements. *Why the other options are wrong.* **A**: Host Key is weaker (lab-grade). **C/D**: Not modes. *Exam-takeaway.* Production = TPM-trusted.

**Q35. Answer: A.** *Why A is correct.* Azure requires VHD format. Convert VHDX before upload. *Why the other options are wrong.* **B**: VHDX is on-prem format. **C/D**: Not Azure-supported. *Exam-takeaway.* VHDX → VHD → Azure.

**Q36. Answer: B.** *Why B is correct.* Check current state → verify health → seize → clean up dead DC. *Why the other options are wrong.* **A**: Verify health BEFORE seizing. **C**: Reversed ordering. **D**: Cleanup before seize fails. *Exam-takeaway.* Verify, seize, then clean.

**Q37. Answer: A.** *Why A is correct.* Replica server first, then source enablement, then initial sync, then validate. *Why the other options are wrong.* **B–D**: Wrong sequence. *Exam-takeaway.* Replica → source → initial sync → validate.

**Q38. Answer: D.** *Why D is correct.* NLB supports up to 32 nodes per cluster. *Why the other options are wrong.* **A/B/C**: Wrong limits. *Exam-takeaway.* NLB 2–32 nodes.

**Q39. Answer: A.** *Why A is correct.* S1 correct (SR destination unmounted). S2 wrong (DFS-R is replication, not backup). S3 correct (32 targets). *Why the other options are wrong.* B–D wrong on S2 or others. *Exam-takeaway.* DFS-R ≠ backup; SR dest unmounted; DFS-N max 32 targets.

**Q40. Answer: B.** *Why B is correct.* Gen 2 supports vTPM. *Why the other options are wrong.* **A**: Gen 1 cannot support vTPM. **C**: Only Gen 2. **D**: Server 2022 does support vTPM via Gen 2. *Exam-takeaway.* vTPM = Gen 2.

---

➡️ When ready: continue with [Module 6: Azure Arc](../Module-06-Azure-Arc/Reading.md), then [Practice Exam 2](./Practice-Exam-2.md).
