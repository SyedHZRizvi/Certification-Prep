# 🎯 Final Mock Exam — CompTIA Server+ (SK0-005)

> **Conditions:** Set a 90-minute timer. **90 questions** (matches the real exam exactly).
> **Pass mark on this mock: 76/90 (~85%)** — real exam scales to 750/900 (~83%). Practice higher than the cut.
> Take this 2–3 days BEFORE the real exam. If you don't comfortably pass this, defer the real exam.
>
> **Domain coverage targets (matches CompTIA's blueprint):**
> - Hardware ~18% (~16 Q) — Modules 1, partial 7
> - Administration ~30% (~27 Q) — Modules 2, 4, 7
> - Security & DR ~24% (~22 Q) — Modules 5, 6
> - Troubleshooting ~28% (~25 Q) — Modules 3 (storage TS), 8

---

## 📝 Questions

### 1. 1U vertical height in inches:
A. 1.0
B. 1.75
C. 2.5
D. 3.5

### 2. ECC RAM's primary purpose is to:
A. Speed up boot
B. Detect AND correct single-bit memory errors automatically
C. Reduce DIMM cost
D. Disable virtualization

### 3. Two PSUs on the same PDU provide:
A. True 2N redundancy
B. PSU-level redundancy with PDU as a single point of failure
C. No redundancy
D. 2N+1

### 4. IPMI uses transport/port:
A. TCP 22
B. UDP 161
C. UDP 623
D. TCP 443

### 5. The HPE brand for BMC-based management is:
A. iDRAC
B. iLO
C. XCC
D. CIMC

### 6. The Cisco UCS BMC brand is:
A. iDRAC
B. iLO
C. XCC
D. CIMC

### 7. ASHRAE A1 recommended inlet temperature is approximately:
A. 5–10 °C
B. 18–27 °C
C. 35–45 °C
D. 50–60 °C

### 8. A vendor-neutral OOB management standard is:
A. iDRAC
B. iLO
C. IPMI
D. CIMC

### 9. SAS drives' enterprise advantage over SATA is:
A. Cheaper $/TB
B. Dual-port connectivity for redundant paths
C. Lower RPM
D. Smaller form factor

### 10. NVMe drives connect via:
A. SAS
B. SATA
C. PCIe
D. USB

### 11. `systemctl enable --now sshd` does:
A. Only starts sshd
B. Enables sshd at boot AND starts it now
C. Disables sshd
D. Removes the unit file

### 12. AD DS depends MOST critically on:
A. SNMP + TFTP
B. DNS + NTP
C. SMTP + POP3
D. RDP + Telnet

### 13. The Kerberos default skew tolerance is:
A. 30 sec
B. 5 min
C. 30 min
D. 24 hr

### 14. RDP listens on:
A. TCP 22
B. TCP 23
C. TCP 3389
D. TCP 5985

### 15. WinRM HTTPS listens on:
A. TCP 80
B. TCP 443
C. TCP 5985
D. TCP 5986

### 16. Server Core's main advantage is:
A. Better gaming
B. Smaller attack surface + fewer patches + less RAM/disk for production roles
C. Required for SQL Server
D. Mandatory for AD

### 17. NLA on RDP:
A. Encrypts only the keyboard
B. Authenticates the user BEFORE establishing the session
C. Disables MFA
D. Replaces RDP with VNC

### 18. DHCP option 6 carries:
A. Subnet mask
B. Default gateway
C. DNS servers
D. Lease time

### 19. The Linux file permission `-rwxr-x---` in octal is:
A. 644
B. 750
C. 755
D. 777

### 20. The Linux SUID bit:
A. Sets passwords
B. Makes the binary run as the file's owner
C. Removes execute permission
D. Enables sticky behavior

### 21. RAID 6 minimum disks:
A. 2
B. 3
C. 4
D. 5

### 22. 8 × 2 TB RAID 6 usable capacity:
A. 8 TB
B. 12 TB
C. 14 TB
D. 16 TB

### 23. 6 × 4 TB RAID 5 usable capacity:
A. 12 TB
B. 16 TB
C. 20 TB
D. 24 TB

### 24. 6 × 4 TB RAID 10 usable capacity:
A. 8 TB
B. 12 TB
C. 16 TB
D. 24 TB

### 25. RAID 5 write penalty:
A. 1
B. 2
C. 4
D. 6

### 26. RAID 6 write penalty:
A. 1
B. 2
C. 4
D. 6

### 27. RAID 10 write penalty:
A. 1
B. 2
C. 4
D. 6

### 28. iSCSI default TCP port:
A. 22
B. 445
C. 2049
D. 3260

### 29. NFS default port:
A. 80
B. 445
C. 2049
D. 3306

### 30. Modern SMB default port:
A. 137
B. 139
C. 443
D. 445

### 31. SAN provides:
A. File-level access
B. Block-level access (the host treats LUNs like local disks)
C. Object-only access
D. Stream-only access

### 32. FC zoning is enforced at:
A. Storage array
B. FC switch fabric
C. Host BIOS
D. Backup server

### 33. LUN masking is enforced at:
A. Storage array
B. FC switch fabric
C. Host BIOS
D. Backup server

### 34. A new LUN appears as 4 disks in Windows. Cause:
A. The array is broken
B. MPIO not installed
C. Windows requires 4 disks per LUN
D. The disk has 4 partitions

### 35. Thin provisioning's primary risk:
A. Slow reads
B. Pool fills while volumes report free space → app-level errors
C. Per-volume capacity limits
D. Mandatory dedup

### 36. Dedup is MOST effective on:
A. Pre-compressed video
B. Backup data and VDI golden images
C. Random binary noise
D. Encrypted blobs

### 37. Synchronous replication is best for:
A. Continental distances
B. Metro distance + RPO 0 requirement
C. Daily tape backups
D. Slow WAN links

### 38. A Type 1 hypervisor:
A. Runs on a host OS
B. Runs directly on hardware
C. Is the same as a container engine
D. Requires Windows 11 Pro

### 39. Which is Type 2:
A. ESXi
B. Hyper-V
C. KVM
D. VMware Workstation

### 40. Hyper-V virtual disk format:
A. VMDK
B. VHDX
C. qcow2
D. OVA

### 41. Live migration of a running VM requires:
A. Powering off the VM
B. Shared storage + L2 net + CPU compat + sufficient resources on target
C. Identical motherboard SKUs
D. Disabling networking

### 42. Snapshots are NOT a backup because:
A. They use more space
B. They live on the same datastore as the VM
C. They cannot be restored
D. They are illegal

### 43. The cluster feature that auto-restarts VMs after a host fail:
A. DRS
B. HA
C. FT
D. vMotion

### 44. The cluster feature that continuously balances load:
A. HA
B. FT
C. DRS
D. Anti-affinity

### 45. Two DCs keep ending up on the same host after DRS. Fix:
A. Affinity rule
B. Anti-affinity rule keeping them on separate hosts
C. Disable DRS only
D. Power both DCs off

### 46. Container vs VM — the categorical difference:
A. Containers cost more
B. Containers share host kernel; VMs each have their own
C. Containers are larger
D. VMs don't need hosts

### 47. The smallest Kubernetes scheduling unit:
A. Container
B. Node
C. Pod
D. Cluster

### 48. Docker's build recipe is in a file called:
A. Containerfile
B. Dockerfile
C. Makefile
D. kubeconfig

### 49. RTO measures:
A. Data-loss tolerance
B. Downtime tolerance
C. Backup size
D. Number of tape drives

### 50. RPO measures:
A. Downtime tolerance
B. Data-loss tolerance (in time)
C. Backup size
D. Number of admins

### 51. Email must be back within 1 hr of any outage. That's a statement of:
A. RTO = 1 hr
B. RPO = 1 hr
C. MTBF = 1 hr
D. MTTR = 1 hr

### 52. Incremental backup:
A. Since last FULL; does NOT clear archive bit
B. Since LAST backup of any type; clears archive bit
C. Always re-does a full
D. Tape only

### 53. Differential backup:
A. Since last FULL; does NOT clear archive bit
B. Since LAST backup of any type
C. Smaller than incremental
D. Replaces fulls

### 54. The 3-2-1 rule:
A. 3 backups/wk + 2 tapes + 1 cloud
B. 3 copies, 2 media types, 1 off-site
C. 3 RAID arrays
D. 3 admins

### 55. 3-2-1-1-0 adds:
A. 1 cloud + 0 tapes
B. 1 immutable / air-gapped + 0 verified errors
C. 1 admin + 0 vacations
D. 1 IPS + 0 honeypots

### 56. A hot DR site:
A. No equipment, just power/HVAC
B. Pre-staged equipment, stale data
C. Continuously synchronized, near-instant cutover
D. Trailer

### 57. Two DCs 3,000 km apart — strict RPO = 0 sync replication would:
A. Work perfectly
B. Add WAN latency to every write → use async with acceptable RPO
C. Save money
D. Make backups smaller

### 58. Successful nightly backups prove restorability only when:
A. Backup software shows green checkmarks
B. Periodic actual restore tests are performed
C. Tapes are in a safe
D. The admin says so

### 59. Immutable backups protect against:
A. Disk failures only
B. Ransomware / malicious deletion within retention
C. Power outages
D. Slow networks

### 60. Mantrap / access control vestibule purpose:
A. Single security door
B. Two-door entry where second opens only after first closes — defeats tailgating
C. A keypad
D. A camera tower

### 61. Secure Boot's primary purpose:
A. Speed up boot
B. Verify signed bootloader against firmware trust store
C. Encrypt the disk
D. Replace BIOS

### 62. Without a UEFI password, Secure Boot's value is:
A. Higher
B. Largely negated — attacker disables it in seconds
C. Doubled
D. Equal

### 63. TPM 2.0 is BEST described as:
A. A network protocol
B. A tamper-resistant chip / firmware storing keys + boot measurements
C. A virtualization extension
D. A type of NIC

### 64. SQL Server service account should be:
A. Domain Admin
B. Same as the web server's account
C. Dedicated, least-privileged; ideally a gMSA
D. Default `sa` with no password

### 65. RBAC =
A. Role-Based Access Control
B. Resource-Based Access Control
C. Random-Based Access Control
D. Reverse-Based Access Control

### 66. JIT in PAM:
A. Standing 24×7 admin
B. Time-boxed approved audited elevation with MFA
C. Sharing admin accounts
D. Disabled MFA

### 67. CIS Benchmarks are:
A. Storage perf baselines
B. Hardening guides from Center for Internet Security
C. Backup rotation
D. PCI scanning tools

### 68. CISA KEV priority is for:
A. Backup releases
B. Patches for actively-exploited vulnerabilities
C. New CPU archs
D. Optional certs

### 69. HIPS differs from HIDS in that HIPS:
A. Only logs
B. Can BLOCK suspicious activity
C. Runs in the cloud only
D. Is older

### 70. EDR adds over AV:
A. Lower price
B. Behavioral analytics + threat intel + IR tooling
C. No alerts
D. Slower performance

### 71. Default vendor iDRAC / iLO credentials:
A. Leave default
B. Post on the rack
C. Change at commissioning + segment OOB network + MFA
D. Share via email

### 72. Wet-pipe sprinkler in active server room:
A. Recommended
B. Anti-pattern — use clean-agent (FM-200 / Novec) or pre-action dry-pipe
C. Required by NFPA
D. Permanent

### 73. LACP is defined by:
A. 802.11
B. 802.1Q
C. 802.3ad / 802.1AX
D. 802.1X

### 74. Default Ethernet MTU:
A. 1024
B. 1500
C. 4096
D. 9000

### 75. Jumbo frames:
A. 1500
B. 4096
C. 9000 (sometimes 9216)
D. 64 KB

### 76. NIC teaming with LACP requires:
A. Nothing switch-side
B. Switch ports in same LAG with LACP enabled
C. Identical switch brands
D. Two different VLANs

### 77. Trunk port:
A. One VLAN
B. Multiple VLANs tagged per 802.1Q
C. No MAC table
D. Cannot do LACP

### 78. Jumbo on server only (switch/storage at 1500):
A. Massive perf increase
B. Perf degradation and possible black-holes
C. No change
D. Server becomes faster

### 79. L4 vs L7 LB — L7 adds:
A. Inspect/route by HTTP host / path / header / cookie
B. Skip IP headers for speed
C. Replace firewall
D. Replace DNS

### 80. IPv6 protocol replacing ARP:
A. NDP
B. DHCPv6
C. SNMP
D. RIP

### 81. The CompTIA 6-step troubleshooting methodology begins with:
A. Implement
B. Identify the problem
C. Test the theory
D. Document findings

### 82. After confirming a theory, next step is:
A. Document
B. Establish a plan and implement
C. Re-identify
D. Verify functionality

### 83. The LAST step is:
A. Test
B. Verify
C. Document findings, actions, outcomes
D. Implement

### 84. Server beeps 3 short tones on boot — first check:
A. PSU
B. RAM (reseat/swap)
C. Drives
D. Video

### 85. Blue drive bay LED typically means:
A. Failure
B. Power
C. Identify / Locator
D. Network

### 86. Solid amber drive LED indicates:
A. Activity
B. Drive failure / pre-fail
C. Identify
D. Network link

### 87. Linux per-device disk latency/util tool:
A. `top`
B. `iostat -xz 1`
C. `ping`
D. `tcpdump`

### 88. DB slow but CPU 22% / RAM 50% / disk 4 ms / NIC 200 Mbps of 10 Gb. Most likely cause:
A. CPU
B. RAM
C. Disk
D. Application-level (query, locking, GC) — infra not saturated

### 89. To verify MTU 9000 end-to-end on Linux:
A. `ping -M do -s 8972 destination`
B. `ping -s 64 destination`
C. `traceroute -I destination`
D. `iperf3 -u destination`

### 90. *Integration PBQ.* You're designing a single rack: 4 hypervisor hosts + 1 SAN + redundant top-of-rack switches. Requirements: (a) no single NIC/switch failure drops a host; (b) storage VLAN at line rate; (c) management traffic separated; (d) live migration without saturating production; (e) survive one PSU failure per host; (f) DCs split across hosts; (g) backups immutable in cloud; (h) RPO ≤ 15 min for the critical DB. Pick the design:
A. Single switch, single NIC per host, default MTU, one PSU per host, snapshots = backup
B. Pair of top-of-rack switches (MLAG); each host = 2× hot-swap PSUs on separate PDUs + 4× 25 GbE NICs (LACP, two for production trunk with VLANs 10/20, two for storage trunk VLAN 30 with MTU 9000); dedicated iDRAC port on VLAN 99; vMotion VLAN 40 (MTU 9000); anti-affinity rule splitting DCs; nightly cloud replica with S3 Object Lock; async log shipping every 5 min for the DB
C. One physical server with one NIC and no replication
D. Type 2 hypervisor on each user laptop

---

## 🎯 Answer Key (No Cheating!)

```
1. B    19. B   37. B   55. B   73. C
2. B    20. B   38. B   56. C   74. B
3. B    21. C   39. D   57. B   75. C
4. C    22. B   40. B   58. B   76. B
5. B    23. C   41. B   59. B   77. B
6. D    24. B   42. B   60. B   78. B
7. B    25. C   43. B   61. B   79. A
8. C    26. D   44. C   62. B   80. A
9. B    27. B   45. B   63. B   81. B
10. C   28. D   46. B   64. C   82. B
11. B   29. C   47. C   65. A   83. C
12. B   30. D   48. B   66. B   84. B
13. B   31. B   49. B   67. B   85. C
14. C   32. B   50. B   68. B   86. B
15. D   33. A   51. A   69. B   87. B
16. B   34. B   52. B   70. B   88. D
17. B   35. B   53. A   71. C   89. A
18. C   36. B   54. B   72. B   90. B
```

---

## 📊 Why #88 = D (Application-level)

When all four infrastructure axes (CPU, RAM, disk, network) are well below saturation but the application is slow, the bottleneck has moved out of infrastructure into the app: query plans, lock contention, GC, memory leaks, dependency latency. Throwing more infrastructure at it wastes money. Investigate at the application tier (query profiling, APM, slow-log analysis).

---

## 📊 Why #90 = B

Map each requirement to the design choice:
- (a) MLAG switches + cross-switch LACP team → NIC and switch redundancy
- (b) Dedicated storage NICs + jumbo frames + MPIO → line-rate storage
- (c) Dedicated mgmt VLAN 99 + separate iDRAC port → separation
- (d) Dedicated vMotion VLAN 40 with jumbo frames → won't saturate production
- (e) Dual hot-swap PSUs on separate PDUs → survive PSU + feed loss
- (f) Anti-affinity rule → DCs always split
- (g) S3 Object Lock immutable cloud replica → ransomware-resistant DR
- (h) Async log shipping every 5 min → RPO ≤ 15 min

Options A, C, D each fail multiple requirements.

---

## 📊 Detailed rationales for selected questions

> Full rationales for every question are embedded in the module Quizzes and Practice Exams 1 & 2. The most-missed concepts to review before the real exam:

- **RAID math** (Qs 22–24, 25–27): drill capacity formulas + write penalties until automatic
- **The 6 troubleshooting steps** (Qs 81–83): memorize the *order* — CompTIA tests it by name
- **MTU mismatch behavior** (Q 78): silent black-holes are worse than no jumbo at all
- **Snapshots vs backups** (Q 42): same datastore = same SPOF
- **OOB management ports** (Q 4): IPMI on UDP 623, segment the OOB network
- **Kerberos skew** (Q 13): 5-minute default; #1 cause of mystery AD failures
- **vMotion prerequisites** (Q 41): shared storage + L2 + CPU compat + resources
- **3-2-1-1-0** (Qs 54-55): immutability + tested restorability are now mainstream

---

## 📈 If you score…

- **76–90 / 90 (85%+)** → 🏆 Book the real exam.
- **68–75 / 90 (76–84%)** → ⚠️ Identify your weak modules from the Bloom tags in the per-module Quizzes; review those + Cheat-Sheets; retake this in 3–5 days.
- **< 68 / 90** → 🔁 Step back. Re-read at least 2 module Reading.md files, redo the affected Quizzes, then attempt this again in a week. Do NOT book the real exam yet.

Good luck. 🖥️
