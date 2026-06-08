# 🧪 Practice Exam 1, CompTIA Server+ (SK0-005 Style)

> **Conditions:** Set a 45-minute timer. 45 questions. Treat it like the real thing.
> **Pass mark:** 38/45 (~85%), the real exam scales to 750/900 (~83%); practice higher.
> Take this AFTER finishing Modules 1–4. Covers Hardware, Administration, Storage, Virtualization.

---

## 📝 Questions

### 1. The vertical height of 1U in a standard server rack is:
A. 1.0 inch
B. 1.75 inches
C. 2.5 inches
D. 3.5 inches

### 2. Which memory technology detects AND corrects single-bit errors automatically?
A. Non-ECC UDIMM
B. ECC RDIMM
C. LPDDR5
D. SO-DIMM

### 3. Two PSUs are installed in a server but both are plugged into the same PDU. The configuration is BEST described as:
A. True 2N, fully fault tolerant
B. N+1 PSU redundancy with a single shared point of failure at the PDU
C. 2N+1
D. No redundancy at all

### 4. IPMI runs on which transport and port?
A. TCP 22
B. UDP 161
C. UDP 623
D. TCP 443

### 5. Dell's brand for out-of-band management is:
A. iLO
B. iDRAC
C. XCC
D. CIMC

### 6. HPE's brand for out-of-band management is:
A. iLO
B. iDRAC
C. XCC
D. CIMC

### 7. A RAID controller's battery-backed write cache primarily protects:
A. Drives against vibration
B. In-flight cached writes against sudden power loss
C. BMC firmware
D. PSU output

### 8. Which interface offers dual ports per drive for path redundancy in enterprise storage?
A. SATA
B. SAS
C. Consumer M.2 NVMe
D. eSATA

### 9. ASHRAE recommended inlet air temperature for a data center (A1 envelope) is approximately:
A. 5–10 °C
B. 18–27 °C
C. 35–45 °C
D. 50–60 °C

### 10. A best-practice 2N PSU configuration requires each PSU plugged into:
A. The same outlet for simplicity
B. Two separate PDUs / power feeds
C. A USB hub
D. A wall outlet outside the rack

### 11. The systemd command to enable AND start a service in one shot is:
A. `service start sshd && service enable sshd`
B. `systemctl enable --now sshd`
C. `chkconfig sshd on`
D. `init 5 sshd`

### 12. AD DS depends MOST critically on which two infrastructure services?
A. SNMP and TFTP
B. DNS and NTP
C. SMTP and POP3
D. RDP and Telnet

### 13. RDP listens on which TCP port?
A. 22
B. 23
C. 3389
D. 5985

### 14. WinRM HTTPS listens on which TCP port?
A. 80
B. 443
C. 5985
D. 5986

### 15. Network Level Authentication (NLA) for RDP:
A. Authenticates the user BEFORE establishing a session
B. Encrypts only the keyboard
C. Disables MFA
D. Replaces RDP with VNC

### 16. The Linux file permission `-rwxr-x---` corresponds to which octal?
A. 644
B. 750
C. 755
D. 777

### 17. Kerberos authentication requires client and KDC clocks to be within:
A. 30 seconds
B. 5 minutes by default
C. 30 minutes
D. 24 hours

### 18. Telnet is unsafe for server administration because:
A. It uses too much bandwidth
B. It transmits credentials and session data in cleartext
C. It is incompatible with IPv6
D. It requires a license

### 19. Windows Server Core is BEST suited for:
A. Desktop kiosks
B. Production server roles needing smaller attack surface + fewer patches
C. Gaming workloads
D. Power-user workstations

### 20. DHCP option 6 carries:
A. Subnet mask
B. Default gateway
C. DNS servers
D. Lease time

### 21. The MINIMUM number of disks for RAID 6 is:
A. 2
B. 3
C. 4
D. 5

### 22. Eight 2 TB disks in RAID 6 yields what usable capacity?
A. 8 TB
B. 12 TB
C. 14 TB
D. 16 TB

### 23. Six 4 TB disks in RAID 10 yields what usable capacity?
A. 8 TB
B. 12 TB
C. 16 TB
D. 24 TB

### 24. RAID 5 has a write penalty of:
A. 1
B. 2
C. 4
D. 6

### 25. RAID 6 has a write penalty of:
A. 1
B. 2
C. 4
D. 6

### 26. RAID 10 has a write penalty of:
A. 1
B. 2
C. 4
D. 6

### 27. The default TCP port for iSCSI is:
A. 22
B. 445
C. 2049
D. 3260

### 28. The default port for NFS is:
A. 80
B. 445
C. 2049
D. 3306

### 29. Modern SMB uses the default port:
A. 137
B. 139
C. 443
D. 445

### 30. A SAN provides what type of storage compared to a NAS?
A. File-level
B. Block-level
C. Object-only
D. Stream-only

### 31. Zoning is enforced at the:
A. Storage array
B. FC switch fabric
C. Host BIOS
D. Backup server

### 32. LUN masking is enforced at the:
A. Storage array
B. FC switch fabric
C. Host BIOS
D. Backup server

### 33. A new LUN appears to Windows as four separate disks. The MOST likely cause is:
A. The array is broken
B. The host has four paths and no MPIO/multipathing driver installed
C. Windows requires four disks per LUN
D. The LUN is undersized

### 34. Thin provisioning's primary risk is:
A. Slow read speeds
B. The shared pool filling, causing application-level errors while volumes still report free space
C. Per-volume capacity limits
D. Mandatory deduplication

### 35. Two data centers 60 km apart over dark fiber, application requires RPO = 0. Replication should be:
A. Daily backup to tape
B. Synchronous replication
C. Asynchronous with 24-hour delay
D. No replication

### 36. A Type 1 hypervisor:
A. Runs on top of a host OS
B. Runs directly on hardware (bare-metal)
C. Is identical to a container engine
D. Requires Windows 11 Pro

### 37. Which is a Type 2 hypervisor?
A. VMware ESXi
B. Microsoft Hyper-V
C. KVM
D. VMware Workstation

### 38. Hyper-V's virtual disk format is:
A. VMDK
B. VHDX
C. qcow2
D. OVA

### 39. Live migration of a running VM between hosts requires:
A. Powering off the VM first
B. Shared storage + L2 network + CPU compatibility (or EVC) + sufficient resources on target
C. Identical motherboard part numbers
D. Disabling networking

### 40. Snapshots are NOT a backup because:
A. They use more space than backups
B. They live on the same datastore as the VM, datastore loss = snapshot loss
C. They cannot be restored
D. They are illegal in the EU

### 41. The cluster feature that automatically restarts VMs on surviving hosts after a host failure is:
A. DRS
B. HA (High Availability)
C. FT (Fault Tolerance)
D. vMotion

### 42. Two domain controllers keep landing on the same host after live migration. The correct fix is to configure:
A. An affinity rule
B. An anti-affinity rule keeping them on separate hosts
C. Disable Live Migration
D. Power both DCs off

### 43. The single most important architectural difference between a container and a VM is:
A. Containers are bigger
B. Containers share the host kernel; VMs each have their own kernel
C. Containers always cost more
D. VMs don't need a host

### 44. The smallest scheduling unit in Kubernetes is the:
A. Container
B. Node
C. Pod
D. Cluster

### 45. *Integration / PBQ-style.* A branch-office server needs the following all at once: (a) tolerate one PSU failure, (b) tolerate one drive failure, (c) allow remote OS reinstall from a hand-off-only colo, (d) email an alert before thermal shutdown, (e) ECC memory. Pick the bill of materials:
A. Single PSU, two consumer SSDs in software mirror, no BMC, no email alerts, non-ECC RAM
B. Dual hot-swap PSUs on the same PDU, two SATA SSDs in software mirror, basic IPMI, ECC RAM
C. Dual hot-swap PSUs on **separate** PDUs, four SAS drives in RAID 10 behind a hardware RAID controller with FBWC, full iDRAC/iLO with SMTP alerting, ECC RAM
D. Single PSU, four SATA HDDs in RAID 5, full iDRAC, ECC RAM

---

## 🎯 Answer Key (No Cheating!)

```
1. B    11. B   21. C   31. B   41. B
2. B    12. B   22. B   32. A   42. B
3. B    13. C   23. B   33. B   43. B
4. C    14. D   24. C   34. B   44. C
5. B    15. A   25. D   35. B   45. C
6. A    16. B   26. B   36. B
7. B    17. B   27. D   37. D
8. B    18. B   28. C   38. B
9. B    19. B   29. D   39. B
10. B   20. C   30. B   40. B
```

---

## 📊 Detailed answer rationales

**Q1. B, 1.75 inches.** 1U is the standard rack unit; 42U rack ≈ 73.5 in tall.

**Q2. B, ECC RDIMM.** ECC = Error-Correcting Code (SECDED). Production servers always use ECC.

**Q3. B, N+1 PSU; PDU is the shared SPOF.** Same-PDU defeats the redundancy intent. True 2N requires separate feeds.

**Q4. C, UDP 623.** IPMI runs on UDP 623; historical CVEs make management-VLAN segmentation mandatory.

**Q5. B, iDRAC.** Integrated Dell Remote Access Controller.

**Q6. A, iLO.** Integrated Lights-Out (HPE).

**Q7. B, In-flight cached writes against sudden power loss.** Without it, RAID 5/6 parity can be torn-written.

**Q8. B, SAS.** SAS drives have dual ports, allowing two HBA paths for redundancy. SATA is single-port.

**Q9. B, 18–27 °C.** ASHRAE A1 envelope. Measure front-of-rack inlet (not CPU temp).

**Q10. B, Two separate PDUs / power feeds.** Plugging both PSUs into the same PDU = no real redundancy.

**Q11. B, `systemctl enable --now sshd`.** The `--now` flag starts immediately.

**Q12. B, DNS and NTP.** AD relies on SRV/PTR records and 5-minute Kerberos skew.

**Q13. C, 3389.** RDP TCP 3389 (and UDP 3389 for newer low-latency mode).

**Q14. D, 5986.** WinRM HTTPS. HTTP listener is 5985.

**Q15. A, Authenticates the user BEFORE establishing a session.** Reduces pre-auth attack surface.

**Q16. B, 750.** Owner rwx (7), group r-x (5), others --- (0).

**Q17. B, 5 minutes by default.** Above this, AD authentication fails.

**Q18. B, Cleartext credentials.** Use SSH (Linux) or WinRM HTTPS / RDP+NLA (Windows).

**Q19. B, Production server roles.** Smaller attack surface, fewer patches, lower resource use.

**Q20. C, DNS servers.** Option 6.

**Q21. C, 4.** RAID 6 = 2 data + 2 parity minimum.

**Q22. B, 12 TB.** (8 − 2) × 2 TB.

**Q23. B, 12 TB.** 6/2 × 4 TB.

**Q24. C, 4.** Read old data + read old parity + write new data + write new parity.

**Q25. D, 6.** Two parity blocks (P + Q).

**Q26. B, 2.** Write to both mirrors only.

**Q27. D, 3260.** iSCSI TCP 3260.

**Q28. C, 2049.** NFS TCP/UDP 2049.

**Q29. D, 445.** Modern SMB; legacy NetBIOS-over-TCP/IP (139/137) is deprecated.

**Q30. B, Block-level.** SAN presents LUNs as local-like disks; NAS exposes files.

**Q31. B, FC switch fabric.** Zoning lives on switches (Brocade, Cisco MDS).

**Q32. A, Storage array.** LUN masking lives on the array's controller.

**Q33. B, No MPIO/multipathing driver installed.** Each path appears as a separate disk without multipathing.

**Q34. B, The shared pool filling, causing application-level errors while volumes still report free space.** Classic thin-provisioning hazard.

**Q35. B, Synchronous replication.** Metro distance + RPO 0 → synchronous.

**Q36. B, Bare-metal.** Type 1 = bare-metal (ESXi, Hyper-V, KVM). Type 2 = hosted.

**Q37. D, VMware Workstation.** ESXi/Hyper-V/KVM are Type 1.

**Q38. B, VHDX.** Hyper-V's modern disk format. VMDK = VMware, qcow2 = KVM.

**Q39. B, Shared storage + L2 + CPU compat (or EVC) + resources.** The four classic prerequisites.

**Q40. B, Same datastore = same SPOF.** Snapshots are point-in-time deltas, not independent copies.

**Q41. B, HA.** HA auto-restarts VMs on surviving hosts (minutes of downtime). DRS = continuous load balance.

**Q42. B, Anti-affinity rule.** Keeps the pair on separate hosts so one host failure doesn't take both down.

**Q43. B, Containers share the host kernel; VMs each have their own kernel.** The categorical architectural distinction.

**Q44. C, Pod.** Smallest schedulable unit; 1+ containers sharing networking/storage.

**Q45. C, Dual hot-swap PSUs on separate PDUs, RAID 10 with FBWC, full iDRAC/iLO + SMTP alerts, ECC RAM.** Each requirement maps to a component. A, B, D fail multiple requirements.
