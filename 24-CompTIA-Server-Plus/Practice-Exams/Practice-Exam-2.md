# 🧪 Practice Exam 2 — CompTIA Server+ (SK0-005 Style)

> **Conditions:** Set a 65-minute timer. 65 questions. Treat it like the real thing.
> **Pass mark:** 55/65 (~85%) — the real exam scales to 750/900 (~83%); practice higher.
> Take this AFTER finishing Modules 5–8 (DR/backup, security, networking, troubleshooting). Earlier-module recall mixed in.

---

## 📝 Questions

### 1. RTO measures:
A. Data-loss tolerance
B. Downtime tolerance
C. Backup size
D. Number of tape drives

### 2. RPO measures:
A. Downtime tolerance
B. Data-loss tolerance (in time)
C. Backup size
D. Number of admins

### 3. A patient drug-allergy DB requires no data loss in any disaster. This is a statement of:
A. RTO = 0
B. RPO = 0
C. MTBF = 0
D. SLA = 0

### 4. An incremental backup:
A. Backs up files changed since last FULL; does NOT clear the archive bit
B. Backs up files changed since LAST backup of any type; clears the archive bit
C. Always re-does a full
D. Is only available on tape

### 5. A differential backup:
A. Backs up files changed since last FULL; does NOT clear the archive bit
B. Backs up files changed since LAST backup of any type
C. Is smaller than incremental every day
D. Replaces fulls

### 6. Restoring on Thursday with a Sunday Full + Mon-Wed incrementals requires:
A. Sun full only
B. Sun full + Wed only
C. Sun full + Mon + Tue + Wed in order
D. Wed only

### 7. Restoring on Thursday with a Sunday Full + Mon-Wed differentials requires:
A. Sun full + Wed only
B. Sun full + Mon + Tue + Wed
C. Wed only
D. Sun only

### 8. A synthetic full backup:
A. Is fake and unrestorable
B. Is assembled on the backup server from earlier full + incrementals (no production read)
C. Is taken nightly during business hours
D. Is a snapshot clone

### 9. The 3-2-1 backup rule prescribes:
A. 3 backups/week + 2 tapes + 1 cloud
B. 3 copies of data, 2 different media types, 1 off-site
C. 3 RAID arrays
D. 3 administrators

### 10. The 3-2-1-1-0 variant adds:
A. 1 cloud copy and 0 tapes
B. 1 immutable / air-gapped copy and 0 verified errors
C. 1 admin and 0 vacations
D. 1 IPS and 0 honeypots

### 11. GFS stands for:
A. Global File System
B. Grandfather-Father-Son rotation
C. Generic File Storage
D. Group Failover Site

### 12. A hot DR site:
A. Has no equipment, just power and HVAC
B. Has pre-staged equipment but stale data
C. Is a continuously synchronized, near-instant-cutover mirror
D. Is a trailer

### 13. A cold DR site:
A. Has running mirrored systems with live data
B. Is a facility with power/HVAC but no servers/data — days-weeks recovery
C. Is a trailer
D. Is a cloud region

### 14. Two DCs 3,000 km apart over WAN — strict RPO = 0 with synchronous replication would:
A. Work perfectly
B. Add WAN round-trip latency to every write — crippling app perf; pick async with acceptable RPO
C. Save money
D. Make backups smaller

### 15. Successful backup jobs every night for 6 months proves restorability only if:
A. The backup software shows green checkmarks
B. Periodic file-level + full-system restore tests are actually performed
C. Tapes are in a fireproof safe
D. The backup admin says so

### 16. Immutable backups protect against:
A. Disk failures only
B. Ransomware or malicious deletion within the retention window
C. Power outages
D. Slow networks

### 17. VSS on Windows:
A. Replaces backup software entirely
B. Quiesces apps (SQL, Exchange) for application-consistent snapshots
C. Encrypts backup tapes
D. Is identical to ZFS snapshots

### 18. Mean Time Between Failures (MTBF) — for reliability:
A. Smaller is better
B. Larger is better
C. Always 8 hours
D. Always equals MTTR

### 19. The IT subset of a Business Continuity Plan is the:
A. BIA
B. IRP
C. DRP (Disaster Recovery Plan)
D. CMDB

### 20. A tabletop exercise is:
A. A discussion-based walkthrough, no real failover
B. A full live failover to DR
C. A penetration test
D. A restore-only drill

### 21. An "access control vestibule" / mantrap:
A. Is a single security door
B. Is a two-door entry where the second door opens only after the first closes — defeats tailgating
C. Is a keypad
D. Is a camera tower

### 22. Secure Boot's primary purpose:
A. Speed up boot time
B. Verify that the bootloader is signed by a trusted key chained to the firmware's trust store
C. Encrypt the disk
D. Replace BIOS

### 23. Without a UEFI password, Secure Boot's value is:
A. Higher than ever
B. Largely negated — an attacker with console access can disable Secure Boot in seconds
C. Doubled
D. Equal to having it

### 24. TPM 2.0 is BEST described as:
A. A network protocol
B. A tamper-resistant chip / firmware storing keys + boot measurements
C. A virtualization extension
D. A type of NIC

### 25. A service account running SQL Server should be:
A. Domain Admin
B. The same account as the web server's
C. Dedicated, least-privileged; ideally a gMSA on Windows
D. The default `sa` account with no password

### 26. Principle of least privilege:
A. Give every user maximum rights
B. Give each account only the rights it strictly needs
C. Share admin accounts
D. Disable logging

### 27. RBAC stands for:
A. Role-Based Access Control
B. Resource-Based Access Control
C. Random-Based Access Control
D. Reverse-Based Access Control

### 28. JIT (Just-in-Time) elevation in PAM provides:
A. Standing 24×7 admin rights
B. Time-boxed, approved, audited elevation with MFA
C. Sharing of admin accounts
D. Disabled MFA

### 29. CIS Benchmarks are:
A. Storage performance baselines
B. Hardening guides for OSes, browsers, cloud services from the Center for Internet Security
C. Backup-rotation policies
D. PCI scanning tools

### 30. The CISA KEV catalog is the priority list for:
A. Backup software releases
B. Patches for vulnerabilities being actively exploited in the wild
C. New CPU architectures
D. Optional certifications

### 31. HIPS differs from HIDS in that HIPS:
A. Only logs
B. Can BLOCK suspicious activity, not just alert
C. Runs in the cloud only
D. Is older

### 32. EDR adds what over traditional antivirus?
A. Lower price
B. Behavioral analytics, threat-intel feeds, IR tooling — beyond signature scanning
C. No alerts
D. Slower performance

### 33. Disabling SMB 1.0 mitigates:
A. CPU overcommit
B. The EternalBlue exploit family (WannaCry / NotPetya)
C. DNS poisoning
D. Print spooler bugs

### 34. Group Managed Service Accounts (gMSAs) are valuable because:
A. They are easier to remember
B. Their passwords are auto-rotated by AD; admins never need to know them
C. They have no permissions
D. They work across forests automatically

### 35. After SED + BitLocker (TPM-bound), stolen drives are:
A. Trivially readable in another machine
B. Unreadable without the original TPM key — encryption protects data at rest
C. Recovered by the SAS controller automatically
D. Sent to the cloud

### 36. LACP is defined by:
A. 802.11
B. 802.1Q
C. 802.3ad / 802.1AX
D. 802.1X

### 37. The default Ethernet MTU is:
A. 1024
B. 1500
C. 4096
D. 9000

### 38. Jumbo frames are typically:
A. 1500
B. 4096
C. 9000 (sometimes 9216)
D. 64 KB

### 39. NIC teaming with LACP requires:
A. Nothing on the switch side
B. Switch ports configured in the same LAG with LACP enabled
C. Identical switch brands
D. Two different VLANs

### 40. A trunk port:
A. Carries only one VLAN
B. Carries multiple VLANs, tagged per 802.1Q
C. Has no MAC table
D. Cannot do LACP

### 41. The primary reason to enable jumbo frames on a storage VLAN is:
A. To reduce broadcast traffic
B. To reduce per-packet overhead + CPU interrupts, improving throughput
C. To shrink TCP windows
D. To enable IPv6

### 42. Enabling jumbo frames on the server only — switch and storage stay at MTU 1500 — typically causes:
A. Massive performance increase
B. Performance degradation and possibly black-holed connections
C. No change
D. The server becomes faster

### 43. A Layer 4 load balancer decides based on:
A. URL path
B. HTTP host header
C. IP address and TCP/UDP port
D. Cookie values

### 44. A Layer 7 load balancer adds:
A. Inspect/route based on HTTP host, path, header, cookie
B. Faster packet forwarding by skipping IP headers
C. Replacement of firewall
D. Replacement of DNS

### 45. The IPv6 protocol replacing ARP is:
A. NDP (Neighbor Discovery Protocol)
B. DHCPv6
C. SNMP
D. RIP

### 46. SLAAC lets an IPv6 host:
A. Get a DHCPv6 lease
B. Auto-generate its own address from a router-advertised prefix + interface identifier
C. Forge MAC addresses
D. Bypass routing

### 47. A server has IPv4 firewall rules for HTTPS but no IPv6 rules. After publishing AAAA records, some clients can't reach the site. The cause:
A. DNS broken
B. Missing IPv6 firewall rule — IPv6 blocked by default-deny
C. Browser bug
D. TLS handshake failure

### 48. The CompTIA 6-step troubleshooting methodology BEGINS with:
A. Implement the solution
B. Identify the problem
C. Test the theory
D. Document findings

### 49. After confirming a theory of probable cause, the next step is:
A. Document findings
B. Establish a plan of action and implement
C. Re-identify the problem
D. Verify functionality

### 50. The LAST step of the methodology is:
A. Test the theory
B. Verify functionality
C. Document findings, actions, and outcomes
D. Implement the solution

### 51. A server beeps 3 short tones on boot and refuses to POST. The first thing to check is:
A. The power supply
B. RAM (reseat / swap) — 3 beeps most often indicates a memory fault
C. The drives
D. The video card

### 52. The blue LED on a drive bay typically indicates:
A. Failure
B. Power
C. Identify / Locator (admin-toggled)
D. Network activity

### 53. A solid amber drive LED indicates:
A. Normal activity
B. Drive failure / pre-fail — check RAID controller and follow swap procedure
C. Identify mode
D. Network link

### 54. ECC single-bit errors trending up on one DIMM means:
A. Ignore — single-bit is auto-corrected
B. Schedule replacement before uncorrectable errors / data corruption
C. Reboot to clear
D. Add more DIMMs

### 55. On Linux, the canonical command for per-device disk I/O latency + utilization is:
A. `top`
B. `iostat -xz 1`
C. `ping`
D. `tcpdump`

### 56. Sustained Windows `Processor → Processor Queue Length` >> 2× cores indicates:
A. CPU pressure (threads waiting for cores)
B. Disk failure
C. RAM exhaustion
D. Bad NIC

### 57. A database is slow. CPU 22%, RAM 50%, disk latency 4 ms, NIC at 200 Mbps of 10 Gb. The MOST likely cause is:
A. CPU
B. RAM
C. Disk
D. Application-level — none of the infra resources are saturated

### 58. To verify MTU 9000 end-to-end on Linux:
A. `ping -M do -s 8972 destination`
B. `ping -s 64 destination`
C. `traceroute -I destination`
D. `iperf3 -u destination`

### 59. A new SAN LUN appears as 4 disks in Windows. The cause:
A. The array is broken
B. MPIO not installed; each path is being seen as a separate disk
C. Windows requires 4 disks per LUN
D. The disk has 4 partitions

### 60. A change fails at 2 a.m. The runbook calls for:
A. Wait until morning
B. Execute the backout plan
C. Call the CFO
D. Start a new project

### 61. The CMDB stores:
A. Backup catalogs only
B. Inventory + relationships + ownership of all configuration items
C. Firewall rules only
D. AD passwords

### 62. A blameless post-mortem focuses on:
A. Identifying the individual to fire
B. System and process improvements rather than personal blame
C. Avoiding documentation
D. Reducing monitoring

### 63. Default vendor iDRAC / iLO credentials should be:
A. Left as default for ease of administration
B. Posted on the rack
C. Changed during commissioning + OOB network segmented + MFA enabled if supported
D. Shared via email

### 64. A water-pipe sprinkler over an active server room is:
A. The recommended fire-suppression
B. An anti-pattern — use clean-agent (FM-200/Novec) or pre-action dry-pipe
C. Required by NFPA
D. Permanent

### 65. *Integration / PBQ-style.* You're designing DR for a hospital's EMR: RPO ≤ 15 min, RTO ≤ 2 hr, 24×7 operation, survive ransomware. Pick the combination:
A. Daily backup to USB on the same shelf as the server
B. Asynchronous log shipping to a 25-km warm site every 5 min; daily backup on-site; nightly replica to cloud with **S3 Object Lock immutability**; quarterly tested DR failover
C. Single tape stored on the same floor as production
D. RAID 5 inside the server with no replication

---

## 🎯 Answer Key (No Cheating!)

```
1. B    14. B   27. A   40. B   53. B
2. B    15. B   28. B   41. B   54. B
3. B    16. B   29. B   42. B   55. B
4. B    17. B   30. B   43. C   56. A
5. A    18. B   31. B   44. A   57. D
6. C    19. C   32. B   45. A   58. A
7. A    20. A   33. B   46. B   59. B
8. B    21. B   34. B   47. B   60. B
9. B    22. B   35. B   48. B   61. B
10. B   23. B   36. C   49. B   62. B
11. B   24. B   37. B   50. C   63. C
12. C   25. C   38. C   51. B   64. B
13. B   26. B   39. B   52. C   65. B
```

---

## 📊 Detailed answer rationales

**Q1. B — Downtime tolerance.** RTO = Recovery Time Objective.

**Q2. B — Data-loss tolerance (in time).** RPO = Recovery Point Objective.

**Q3. B — RPO = 0.** "No data loss" bounds data loss; RPO. (RTO bounds downtime.)

**Q4. B — Incremental: since LAST backup of any type; clears archive bit.**

**Q5. A — Differential: since last FULL; does NOT clear archive bit.**

**Q6. C — Sun full + all incrementals in order.** Incrementals are chained.

**Q7. A — Sun full + Wed differential only.** Differential is cumulative since last full.

**Q8. B — Built on the backup server from full + incrementals.** No production read.

**Q9. B — 3 copies / 2 media / 1 off-site.** Universal rule.

**Q10. B — + 1 immutable + 0 verified errors.** Modern ransomware-aware variant.

**Q11. B — Grandfather-Father-Son.** Monthly / Weekly / Daily.

**Q12. C — Continuously synchronized, near-instant cutover.** Hot = live.

**Q13. B — Power/HVAC but no servers/data; days-weeks.** Cold = empty shell.

**Q14. B — WAN latency makes sync impractical.** Use async + acceptable RPO.

**Q15. B — Periodic restore tests prove restorability.** Green checkmarks don't.

**Q16. B — Ransomware / malicious deletion within retention.** WORM/Object Lock.

**Q17. B — Quiesces apps for app-consistent snapshots.**

**Q18. B — Larger is better.** MTBF measures reliability.

**Q19. C — DRP.** DR is a subset of BCP.

**Q20. A — Discussion walkthrough.** Functional = hands-on partial; Full-scale = real failover.

**Q21. B — Two-door entry defeating tailgating.**

**Q22. B — Verify bootloader signature against firmware trust store.** Blocks bootkits.

**Q23. B — Largely negated.** Attacker disables Secure Boot in seconds without UEFI pw.

**Q24. B — Tamper-resistant chip/firmware for keys + measurements.**

**Q25. C — Dedicated least-privileged; ideally gMSA.** Cross-service sharing is an anti-pattern.

**Q26. B — Only rights strictly needed.** PoLP (Saltzer & Schroeder 1975).

**Q27. A — Role-Based Access Control.**

**Q28. B — Time-boxed approved audited elevation with MFA.** Eliminates standing privilege.

**Q29. B — Hardening guides from CIS.** Industry-standard baselines (L1 / L2).

**Q30. B — Actively exploited.** Federal BOD 22-01 mandates remediation.

**Q31. B — Can BLOCK, not just alert.**

**Q32. B — Behavioral + telemetry + IR tooling.** Modern endpoint defense.

**Q33. B — EternalBlue family.** SMB 1.0 is the WannaCry / NotPetya vector.

**Q34. B — Passwords auto-rotated by AD.** Solves the service-account password-rotation pain.

**Q35. B — Unreadable without the original TPM key.** Encryption is the answer to physical theft.

**Q36. C — 802.3ad / 802.1AX.** LACP IEEE standards.

**Q37. B — 1500 bytes.** Default Ethernet MTU.

**Q38. C — 9000 (sometimes 9216).** Jumbo frames.

**Q39. B — Switch ports in same LAG with LACP enabled.** Both sides must participate.

**Q40. B — Multiple VLANs tagged per 802.1Q.**

**Q41. B — Reduce per-packet overhead + CPU interrupts.** Storage / vMotion / backup networks benefit.

**Q42. B — Performance degradation and possible black-holes.** Mismatch is worse than not enabling.

**Q43. C — IP + TCP/UDP port.** L4 sees only the 5-tuple.

**Q44. A — Route by host / path / header / cookie.** L7 parses app data.

**Q45. A — NDP.** Neighbor Discovery Protocol replaces ARP in IPv6.

**Q46. B — Auto-generate from router-advertised prefix + interface ID.**

**Q47. B — Missing IPv6 firewall rule.** Common dual-stack oversight.

**Q48. B — Identify the problem.** Step 1.

**Q49. B — Establish a plan of action and implement.** Step 4.

**Q50. C — Document findings, actions, and outcomes.** Step 6.

**Q51. B — RAM.** 3 beeps most often indicates memory fault on common BIOS.

**Q52. C — Identify / Locator.** Admin-toggled from iDRAC/iLO.

**Q53. B — Drive failure / pre-fail.** Use RAID controller utility for confirmation.

**Q54. B — Schedule replacement.** Trending corrections forecast uncorrectable errors.

**Q55. B — `iostat -xz 1`.** Per-device extended stats.

**Q56. A — CPU pressure.** Sustained > 2× cores in queue = real contention.

**Q57. D — Application-level.** None of the four infra resources are saturated.

**Q58. A — `ping -M do -s 8972`.** DF bit + 9000-byte payload check.

**Q59. B — MPIO not installed.** Each path looks like a separate disk.

**Q60. B — Execute the backout plan.** That's why it exists.

**Q61. B — Inventory + relationships + ownership.** CMDB is the single source of truth.

**Q62. B — System / process improvements.** Blameless = not personal.

**Q63. C — Changed during commissioning + segmented network + MFA.** Default vendor creds are publicly documented and a top breach vector.

**Q64. B — Anti-pattern.** Use clean-agent gas suppression.

**Q65. B — Async log shipping + immutable cloud + tested DR.** Satisfies all stated requirements (RPO, RTO, 24×7, ransomware). The other options fail multiple requirements.
