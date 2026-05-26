# ✏️ Module 5 Quiz: Hyper-V & Virtualization

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which VM generation supports vTPM and Secure Boot? *(Remember)*
A. Gen 1
B. Gen 2
C. Both
D. Neither

---

### Q2. The Hyper-V virtual switch type that allows VM-to-outside-world AND host-to-VM traffic is: *(Remember)*
A. External
B. Internal
C. Private
D. Loopback

---

### Q3. Hyper-V Replica's replication frequency options are: *(Remember)*
A. 1 sec, 1 min, 1 hour
B. 30 sec, 5 min, 15 min
C. 5 min only
D. 30 min, 1 hour, 1 day

---

### Q4. Hyper-V Replica is: *(Remember)*
A. Synchronous
B. Asynchronous
C. Bidirectional only
D. Snapshot-based only

---

### Q5. Which authentication option for Hyper-V Live Migration uses constrained delegation in AD and does NOT require an admin remote session? *(Understand)*
A. CredSSP
B. NTLM
C. Kerberos
D. Smart card

---

### Q6. To enable nested virtualization on a Hyper-V VM, you must: *(Apply)*
A. Run `Set-VMProcessor -ExposeVirtualizationExtensions $true` + disable dynamic memory + enable MAC spoofing
B. Just install Hyper-V inside the VM
C. Enable Smart Paging
D. Use a Gen 1 VM only

---

### Q7. The Host Guardian Service (HGS) attestation mode RECOMMENDED for production shielded VM deployments is: *(Remember)*
A. Host Key
B. TPM-trusted
C. None
D. Anonymous

---

### Q8. The MAX size of a VHDX file is: *(Remember)*
A. 2 TB
B. 16 TB
C. 64 TB
D. 256 TB

---

### Q9. The MAX size of a legacy VHD file is: *(Remember)*
A. 2 TB
B. 16 TB
C. 64 TB
D. 256 TB

---

### Q10. Which format does Azure require for uploaded disks? *(Remember)*
A. VHD only
B. VHDX only
C. VMDK
D. RAW

---

### Q11. **Yes/No** — Mark each statement. *(Evaluate)*

**S1:** Gen 2 VMs use UEFI firmware with Secure Boot.
**S2:** A Gen 1 VM can be converted to Gen 2 in-place via PowerShell.
**S3:** Gen 2 VMs support PXE boot via the synthetic NIC.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / No

---

### Q12. The Hyper-V vSwitch advanced feature that drops DHCP-server-like packets coming FROM a VM is called: *(Remember)*
A. Router guard
B. DHCP guard
C. Port mirroring
D. MAC spoofing

---

### Q13. Switch Embedded Teaming (SET) is required for: *(Understand)*
A. Storage Spaces Direct + Hyper-V modern deployments
B. Internet Explorer Compatibility
C. Office 365 sync
D. Hyper-V Replica only

---

### Q14. SR-IOV trade-off vs the standard vSwitch is: *(Understand)*
A. SR-IOV bypasses the vSwitch — no VLAN tagging, no extensions, no port mirroring
B. SR-IOV requires dynamic memory
C. SR-IOV is slower
D. SR-IOV works only on Gen 1 VMs

---

### Q15. To move a running VM with no shared storage between two Hyper-V hosts, use: *(Apply)*
A. Quick Migration
B. Storage Migration only
C. Shared-Nothing Live Migration (SMB 3.0 transport)
D. Hyper-V Replica failover

---

### Q16. **Order these steps** to enable Hyper-V Replica between HV01 and HV02. *(Create)*

1. On HV02: `Enable-VMReplication -AllowedAuthenticationType Kerberos -ReplicationFrequencySec 30`
2. On HV01: `Enable-VMReplication -VMName "SQL01" -ReplicaServerName "HV02.contoso.com" -AuthenticationType Kerberos -ReplicationFrequencySec 30`
3. On HV01: `Start-VMInitialReplication -VMName "SQL01"`
4. Validate via `Get-VMReplication -VMName "SQL01"`

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 2 → 4
D. 3 → 1 → 2 → 4

---

### Q17. A Hyper-V container that runs in its own utility VM for stronger isolation is: *(Remember)*
A. Windows Server Container
B. Hyper-V Container
C. Mixed Container
D. Process Container

---

### Q18. Dynamic Memory on a Hyper-V VM can adjust between: *(Understand)*
A. Minimum, Startup, Maximum (with priority weight)
B. Fixed only
C. Read-only memory
D. Shared cache

---

### Q19. **Yes/No** — Mark each statement. *(Analyze)*

**S1:** Hyper-V Replica supports an extended (third) replica downstream.
**S2:** Test failover in Hyper-V Replica disrupts the ongoing replication.
**S3:** Hyper-V Replica supports injecting different IP settings on failover.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. No / No / Yes

---

### Q20. Processor Compatibility Mode is used when: *(Apply)*
A. Source and destination hosts have different CPU instruction sets
B. The VM needs more CPU cores
C. CPU is hyperthreaded
D. NUMA spans nodes

---

### Q21. Which combination is REQUIRED for shielded VMs? *(Remember)*
A. Gen 1 + BIOS + TPM 1.2
B. Gen 2 + UEFI + vTPM + Host Guardian Service
C. Gen 2 + Legacy NIC
D. Gen 1 + Failover Cluster

---

### Q22. **Yes/No** — Mark each statement. *(Apply)*

**S1:** VMQ improves per-VM network throughput at 10 GbE+.
**S2:** vRSS scales VMQ processing across multiple guest cores.
**S3:** Enabling SR-IOV requires no change to the vSwitch configuration.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / Yes
D. Yes / No / Yes

---

### Q23. Hyper-V live migration without RDMA but with compression uses: *(Understand)*
A. Plain TCP/IP only
B. CPU-compressed memory pages — trade CPU for network bandwidth
C. UDP multicast
D. iSCSI offload

---

### Q24. The MAX number of virtual processors per Hyper-V VM (Windows Server 2022) is approximately: *(Remember)*
A. 64
B. 128
C. 240
D. 1024

---

### Q25. A Linux container running on Windows Server uses: *(Remember)*
A. WSL 2 (lightweight nested VM) or LCOW
B. Pure Windows kernel
C. Hyper-V Container only
D. Not supported

---

### Q26. To check whether nested virtualization is enabled on a VM, run: *(Apply)*
A. `Get-VMProcessor -VMName <name> | Select-Object ExposeVirtualizationExtensions`
B. `dsregcmd /status`
C. `Test-VMCompatibility`
D. `Get-VMReplication`

---

## 🎯 Answers + Explanations

### Q1: **B. Gen 2**
Gen 2 is UEFI + Secure Boot + vTPM. Gen 1 cannot support vTPM.

### Q2: **A. External**
External = bound to physical NIC. With `AllowManagementOS $true`, the host can also use it.

### Q3: **B. 30 sec, 5 min, 15 min**
The three intervals. 30 sec is the smallest.

### Q4: **B. Asynchronous**
Always async. For sync DR you'd use Storage Replica or stretch cluster.

### Q5: **C. Kerberos**
Kerberos with constrained delegation = no remote-session requirement. CredSSP needs the admin remoted into the source.

### Q6: **A. Set-VMProcessor with ExposeVirtualizationExtensions + disable dynamic memory + MAC spoofing**
All three are required. Skipping any one breaks nesting.

### Q7: **B. TPM-trusted**
Strongest — uses host TPM + boot measurements. Host Key is weaker (lab-grade).

### Q8: **C. 64 TB**
VHDX max is 64 TB.

### Q9: **A. 2 TB**
Legacy VHD max is 2 TB.

### Q10: **A. VHD only**
Azure requires VHD format. Convert VHDX before upload.

### Q11: **D. Yes / No / No**
S1 correct. S2 wrong (can't convert in place). S3 wrong (Gen 2 PXE uses the synthetic NIC, which *does* support PXE — but only over UEFI, which is more restrictive than Gen 1 BIOS-PXE).

### Q12: **B. DHCP guard**
DHCP guard blocks rogue DHCP servers in VMs. Router guard blocks rogue router advertisements.

### Q13: **A. Storage Spaces Direct + Hyper-V modern deployments**
SET is the required teaming mode for S2D and modern Hyper-V. LBFO is legacy.

### Q14: **A. SR-IOV bypasses the vSwitch — no VLAN/extensions/mirror**
The trade-off for wire-speed performance is loss of vSwitch features on those flows.

### Q15: **C. Shared-Nothing Live Migration (SMB 3.0 transport)**
Shared-Nothing uses SMB 3.0 between hosts. Quick Migration has multi-second downtime.

### Q16: **A. 1 → 2 → 3 → 4**
Configure replica server first, then enable replication on source, then initial sync, then validate.

### Q17: **B. Hyper-V Container**
Hyper-V Container runs in a utility VM for stronger isolation. Windows Server Container shares the kernel.

### Q18: **A. Minimum, Startup, Maximum (with priority weight)**
Dynamic Memory has 4 parameters: Min, Startup, Max, Memory Weight.

### Q19: **A. Yes / No / Yes**
S1 correct (extended replica). S2 wrong (test failover does NOT disrupt the active replication). S3 correct (injected IP on failover).

### Q20: **A. Source and destination hosts have different CPU instruction sets**
Processor Compatibility Mode masks newer CPU features so the VM is portable.

### Q21: **B. Gen 2 + UEFI + vTPM + Host Guardian Service**
The full stack required for shielded VMs.

### Q22: **A. Yes / Yes / No**
S1 and S2 correct. S3 wrong — SR-IOV must be enabled at vSwitch creation time (cannot be added later).

### Q23: **B. CPU-compressed memory pages**
Compression option spends CPU to reduce network bandwidth — useful when network is the bottleneck.

### Q24: **C. 240**
Windows Server 2022 supports up to 240 vCPUs per VM.

### Q25: **A. WSL 2 (lightweight nested VM) or LCOW**
Linux containers need a Linux kernel — provided by a small WSL 2 VM or the older LCOW.

### Q26: **A. `Get-VMProcessor -VMName <name> | Select-Object ExposeVirtualizationExtensions`**
Checks whether nested virt is enabled on the VM.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Hyper-V domain mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read Live Migration + Hyper-V Replica + Shielded VM sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Gen 1 vs Gen 2 (UEFI, Secure Boot, vTPM)
- vSwitch types: External, Internal, Private
- Live Migration auth: Kerberos (constrained delegation) vs CredSSP
- Hyper-V Replica intervals: 30s / 5m / 15m, always async
- Shielded VM: Gen 2 + vTPM + HGS, TPM-trusted attestation
- VHD = 2 TB max; VHDX = 64 TB; Azure requires VHD
- SET = modern team for S2D; LBFO is legacy
- SR-IOV bypasses vSwitch (no VLAN, no extensions)
- Nested virt: static memory + MAC spoofing + ExposeVirtualizationExtensions
- 240 max vCPUs per VM (2022)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 6](../Module-06-Azure-Arc/Reading.md)
