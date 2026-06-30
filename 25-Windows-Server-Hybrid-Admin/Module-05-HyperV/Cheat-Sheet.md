# 📋 Module 5 Cheat Sheet: Hyper-V & Virtualization

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🎭 Gen 1 vs Gen 2 (MEMORIZE)

| Property | Gen 1 | **Gen 2** |
|----------|-------|-----------|
| Firmware | BIOS | UEFI + Secure Boot |
| Boot disk | IDE | SCSI |
| vTPM | No | **Yes** |
| Shielded VM support | No | **Yes** |
| Max boot disk | 2 TB | 64 TB |
| Convert in-place | n/a | **Cannot convert from Gen 1** |

🧠 New VMs = Gen 2 unless legacy OS forces Gen 1.

---

## 🌐 vSwitch Types

| Type | Reachability |
|------|--------------|
| **External** | VM ↔ outside world (+ host if `AllowManagementOS`) |
| **Internal** | Host ↔ VMs only |
| **Private** | VM ↔ VM only |

### Modern teaming

**SET (Switch Embedded Teaming)**, required for S2D + modern Hyper-V. LBFO is legacy.

---

## 🚚 Live Migration

| Property | Detail |
|----------|--------|
| Downtime | ~700 ms typical |
| Storage | Shared (CSV) OR **Shared-Nothing** (SMB 3.0) |
| Auth | **Kerberos** (constrained delegation) OR CredSSP |
| Perf options | TCP/IP, **Compression** (default), SMB Direct (RDMA) |

### Compare migration types

| Type | Downtime | Storage |
|------|----------|---------|
| Live Migration | ~0 sec | Shared OR Shared-Nothing |
| Quick Migration | Multi-sec (save state) | Shared |
| Storage Migration | 0 | Move storage only, VM stays put |

---

## 🔁 Hyper-V Replica

| Property | Detail |
|----------|--------|
| Mode | **Async** (always) |
| Intervals | **30 sec / 5 min / 15 min** |
| Auth | Kerberos (80) or Certificate (443) |
| Replicas | Primary → Secondary → Extended (3rd, optional) |
| Recovery points | 24 hourly snapshots |
| Failovers | Planned, Unplanned, **Test** (non-disruptive) |

🚨 **Test failover doesn't disrupt active replication**, run it monthly!

---

## 🛡️ Shielded VMs

```
Gen 2 VM + vTPM + BitLocker
    │
    ▼
HGS (Host Guardian Service), 3-node cluster, bastion forest
    │
    ▼  attestation
Guarded Host (Hyper-V), keys released, VM boots
```

| HGS Mode | Strength | Use |
|----------|----------|-----|
| **TPM-trusted** | Strong | Production |
| **Host Key** | Weak | Lab / legacy |

---

## 📦 Nested Virtualization (3 prereqs)

1. `Set-VMProcessor -ExposeVirtualizationExtensions $true`
2. `Set-VMMemory -DynamicMemoryEnabled $false`
3. `Set-VMNetworkAdapter -MacAddressSpoofing On`

---

## 📊 VM Resources

| Resource | Settings |
|----------|----------|
| CPU | vCPU count, Reserve %, Weight, Limit %, Compatibility Mode |
| Memory | Min, Startup, Max, Memory Weight, Smart Paging |
| Storage | **VHDX preferred** (64 TB, 4K-aligned), Differencing disks, **QoS Min/Max IOPS** |

### VHD vs VHDX

| | VHD | **VHDX** |
|---|-----|----------|
| Max | 2 TB | 64 TB |
| 4K aligned | No | Yes |
| Azure | **Yes, required** | Convert before upload |

---

## 🚀 NIC Performance Stack

| Feature | When |
|---------|------|
| **VMQ** | Default; per-VM queues at 10 GbE+ |
| **vRSS** | Multi-core scaling inside the VM |
| **SR-IOV** | Wire-speed VMs (FW, NFV), **bypasses vSwitch (no VLAN/extensions)** |

---

## 🐳 Windows Containers

| | Windows Server Container | Hyper-V Container |
|---|--------------------------|-------------------|
| Isolation | Shared kernel | Each in own utility VM |
| Use | Trusted multi-tenant | Untrusted code |

Linux on Windows: **WSL 2** or **LCOW**.

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Use a Gen 2 VM for vTPM and Secure Boot"
- ✅ "Use Kerberos with constrained delegation for Live Migration"
- ✅ "Use Shared-Nothing Live Migration over SMB 3.0"
- ✅ "Hyper-V Replica with 30-second interval"
- ✅ "Test failover is non-disruptive"
- ✅ "Convert VHDX to VHD before uploading to Azure"
- ✅ "SET teaming for S2D + modern Hyper-V"

Usually **wrong**:

- ❌ "Convert Gen 1 to Gen 2 in place"
- ❌ "Hyper-V Replica is synchronous"
- ❌ "Live Migration always requires shared storage"
- ❌ "SR-IOV preserves VLAN tagging"
- ❌ "Boot Azure VM directly from VHDX"
- ❌ "LBFO + S2D"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Gen 1 for new production deployments (no vTPM)
- ❌ Live Migration without constrained delegation (Kerberos fails)
- ❌ Dynamic memory + nested virtualization (incompatible)
- ❌ SR-IOV on VMs needing VLAN tagging (broken)
- ❌ Shielded VMs without HGS HA (single point of failure)
- ❌ VHD instead of VHDX for new VMs (legacy 2 TB cap)

---

## 📐 One-Line Decision Matrix

| Need | Feature |
|------|---------|
| New production VM with vTPM | Gen 2 |
| Wire-speed network throughput for a firewall VM | SR-IOV |
| VM mobility across hosts without shared storage | Shared-Nothing Live Migration (SMB 3.0) |
| Cross-site VM DR with 30-sec RPO | Hyper-V Replica @ 30 sec |
| Multi-tenant hosting with admin-isolation | Shielded VMs + HGS (TPM-trusted) |
| Hyper-V lab inside Hyper-V | Nested virtualization |
| 64 TB disk size | VHDX |
| Upload disk to Azure | VHD (convert from VHDX first) |
| Per-VM IOPS throttling | Storage QoS Min/Max IOPS |
| Test DR failover without disrupting prod | `Start-VMFailover -AsTest` |
| Hide rogue DHCP from a VM | vSwitch DHCP guard |
| NIC team for S2D Hyper-V | SET (not LBFO) |

---

## ✏️ Quick Self-Check

1. Gen 2 advantages over Gen 1? ___
2. Live Migration auth options + when each? ___
3. Hyper-V Replica intervals + auth? ___
4. SR-IOV trade-off vs vSwitch features? ___
5. VHD vs VHDX max + Azure constraint? ___
6. SET vs LBFO? ___

---

➡️ [Module 6: Hybrid Cloud with Azure Arc](../Module-06-Azure-Arc/Reading.md)
