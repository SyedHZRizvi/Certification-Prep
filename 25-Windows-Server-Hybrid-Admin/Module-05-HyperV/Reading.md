# Module 5: Hyper-V & Virtualization ⚙️

> **Why this module matters:** Hyper-V is 15–20% of AZ-800. But it's also the *building block* you need for every later module: the Hyper-V Replica scenario maps to Azure Site Recovery in Module 9; the shielded-VM model maps to Defender for Servers in Module 8; the live-migration concepts map to Azure VM mobility. Get Hyper-V into reflex memory and the rest of the cert becomes a series of "ah, that's the same idea, just in the cloud" moments.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - x86_64 CPU virtualization concepts (VT-x, AMD-V, SLAT/EPT)
> - NIC concepts (MAC address, VLAN, NIC teaming)
> - Active Directory authentication — [Module 1](../Module-01-Active-Directory/Reading.md)
> - Storage Spaces Direct + CSV — [Module 4](../Module-04-File-Storage/Reading.md) (Hyper-V live migration usually runs on S2D)
>
> If those are shaky, pause and review. This module assumes you can already explain "what makes a CPU hardware-virtualization-capable" and "why a CSV is needed for live migration."

---

## 🚛 A Story: The Moving Truck With No Driver

It's Saturday afternoon at 1:17 p.m. Your business-critical SQL Server is running on a Hyper-V host. The host has a memory module starting to throw correctable ECC errors — Dell says replace within 48 hours. The CFO is sitting in a board meeting that runs until 4 p.m. and *cannot* tolerate so much as a 30-second blip on the SQL workload.

You click "Live Migrate" in Hyper-V Manager. You select the destination host, the destination storage, click "Next." Hyper-V copies the SQL VM's memory page-by-page to the destination host *while the VM is still running*. When the residual delta is small enough to copy in milliseconds, the VM is paused, the last delta is sent, ownership transfers, and the VM resumes on the new host. Total downtime: 700 milliseconds. The SQL clients didn't even notice.

You text the dell tech: "OK, replace whenever you want — the workload is gone."

That seamless transition is the magic Hyper-V was built for. The exam tests *how* it works: shared storage or shared-nothing? Kerberos or CredSSP auth? Memory weight thresholds? CPU compatibility mode? Each scenario asks "given this constraint, which Hyper-V feature is the right one?" Master the patterns and you can answer them all.

---

## 🎭 VM Generations: Gen 1 vs Gen 2

| Property | **Generation 1** | **Generation 2** |
|----------|-----------------|------------------|
| Boot firmware | Legacy BIOS | **UEFI + Secure Boot** |
| Controller | IDE (boot disk) + SCSI (data) | **SCSI only** |
| Network | Legacy NIC + Synthetic NIC | Synthetic NIC only (no PXE on legacy) |
| Boot disk | IDE | **SCSI (boot from SCSI is supported)** |
| TPM (vTPM) | No | **Yes** (required for shielded VMs) |
| Max boot disk size | 2 TB | 64 TB |
| Guest OS support | Windows 2003+, most Linux | Windows 2012+, recent Linux (kernel 4.x+) |
| Use case | Legacy / migration | **New deployments** |

🔥 **MEMORIZE:** Once a VM is created as Gen 1, you cannot convert it to Gen 2. You'd have to create a new Gen 2 VM and migrate the disk.

🎯 **Exam pattern:** *"You're deploying a brand-new Windows Server 2022 VM that needs vTPM for BitLocker."* → **Gen 2**.

---

## 📦 Nested Virtualization

Nested virtualization lets you run a Hyper-V host *inside* a Hyper-V VM. The VM exposes Intel VT-x or AMD-V to the inner OS.

### Use cases

- **Lab / training** — run a full multi-host Hyper-V environment on one physical host
- **Windows Defender Application Guard** — runs a sub-VM for sandboxing browser sessions
- **WSL 2** — uses a lightweight nested hypervisor
- **Azure Stack HCI lab** — Azure provides nested-virtualization-capable VM SKUs

### Enable nested virtualization

```powershell
# On the parent Hyper-V host, expose virtualization to the VM
Set-VMProcessor -VMName "LAB-HV-Host" -ExposeVirtualizationExtensions $true

# Also set the VM to use a static MAC and disable dynamic memory (required for nested)
Set-VMNetworkAdapter -VMName "LAB-HV-Host" -MacAddressSpoofing On
Set-VMMemory -VMName "LAB-HV-Host" -DynamicMemoryEnabled $false
```

🚨 **Restrictions:**
- VM **dynamic memory cannot increase** while nested virt is on (set static memory before enable)
- **MAC address spoofing** must be allowed on the VM's NIC (otherwise nested VMs can't network)
- Older AMD CPUs lacked Nested Page Tables; modern Zen 2+ supports nested fine

---

## 🌐 Hyper-V Virtual Switches

A **virtual switch (vSwitch)** is a software layer-2 switch inside Hyper-V. There are three types:

| Type | Connects to | Use case |
|------|------------|----------|
| **External** | Bound to a physical NIC — VM ↔ outside world AND host (optional) | Production VMs needing network access |
| **Internal** | Host ↔ VMs only, no physical NIC | Host-to-VM management/test traffic |
| **Private** | VM ↔ VM only, no host, no physical NIC | Isolated lab segments |

### Create a vSwitch

```powershell
# External
New-VMSwitch -Name "External-Production" `
             -NetAdapterName "Ethernet0" `
             -AllowManagementOS $true

# Internal
New-VMSwitch -Name "Internal-Mgmt" -SwitchType Internal

# Private
New-VMSwitch -Name "Lab-Isolated" -SwitchType Private

# Attach a VM
Connect-VMNetworkAdapter -VMName "SQL01" -SwitchName "External-Production"
```

### Advanced vSwitch features

| Feature | Purpose |
|---------|---------|
| **VLAN** | Per-vNIC VLAN tagging (`Set-VMNetworkAdapterVlan`) |
| **NIC Teaming (LBFO / SET)** | LBFO = legacy bond; **SET = Switch Embedded Teaming**, the modern S2D-compatible team |
| **MAC address spoofing** | Allow VM to use non-default MAC (required for nested virt, NLB) |
| **DHCP guard** | Drops DHCP-server-like packets from this VM (anti-rogue-DHCP) |
| **Router guard** | Drops router-advertisement packets from this VM |
| **Port mirroring** | Source/destination ports for capture |
| **Bandwidth management** | Per-VM minimum and maximum bandwidth |

---

## 🚚 Live Migration

Live Migration moves a running VM between hosts with **near-zero** downtime (typically <1 second).

### Requirements

| Property | Required |
|----------|----------|
| Hyper-V host version | Same or one major version apart (forward) |
| CPU | Identical OR enable **Processor Compatibility Mode** (uses lowest common instruction set) |
| Storage | **Shared storage** (CSV) OR **Shared-Nothing** (SMB 3.0 between source and destination) |
| Network | Migration network with enough bandwidth — 10 GbE+ recommended |
| Authentication | **Kerberos** (best — needs constrained delegation) OR **CredSSP** (requires admin to remote into source host) |
| Cluster | For automatic failover, both hosts in same Failover Cluster |

### Enable on each host

```powershell
# Configure live migration
Set-VMHost -VirtualMachineMigrationAuthenticationType Kerberos `
           -VirtualMachineMigrationPerformanceOption Compression `
           -MaximumVirtualMachineMigrations 4 `
           -MaximumStorageMigrations 2 `
           -EnableEnhancedSessionMode $true

Enable-VMMigration

# Constrained delegation in AD (one-time)
# For each Hyper-V host: open AD computer properties → Delegation tab →
#   "Trust this computer for delegation to specified services only"
#   → Use Kerberos only → Add CIFS and Microsoft Virtual System Migration Service for partner host

# Perform live migration
Move-VM -Name "SQL01" -DestinationHost "HV02" -IncludeStorage `
        -DestinationStoragePath "C:\ClusterStorage\Volume1\SQL01"
```

### Performance options

| Option | What it does |
|--------|--------------|
| **TCP/IP** | Plain unoptimized transfer |
| **Compression** (default) | Memory pages compressed before send (CPU cost ↑, network ↓) |
| **SMB Direct (RDMA)** | Best — uses RDMA NICs for low latency, low CPU |

🔥 **Quick Migration ≠ Live Migration.** Quick Migration saves state, copies storage, then resumes (multi-second downtime). Live Migration is near-zero. Storage Migration moves only the storage (running VM stays put).

---

## 🔁 Hyper-V Replica

**Hyper-V Replica** asynchronously replicates a running VM from one Hyper-V host to another. Built into Hyper-V — no extra license cost.

| Property | Detail |
|----------|--------|
| Replication frequency | **30 sec**, **5 min**, or **15 min** intervals |
| Authentication | **Kerberos** (5986/HTTPS) or **Certificate** (443/HTTPS) — for cross-domain or cross-forest |
| Replicas | 1 primary → 1 secondary, optional 3rd "extended" replica downstream |
| Failover types | **Planned**, **Unplanned**, **Test failover** |
| Recovery points | 1 hour by default; up to **24** hourly snapshots retained |
| Application-consistent | Optional VSS-based interval for SQL-aware checkpoints |

### Set up replication

```powershell
# On the destination host, enable as replica server
Enable-VMReplication -ComputerName "HV02" `
                     -ReverseReplication `
                     -AllowedAuthenticationType Kerberos `
                     -KerberosAuthenticationPort 80 `
                     -ReplicationFrequencySec 30

# On the source host, configure replication for the VM
Enable-VMReplication -VMName "SQL01" `
                     -ReplicaServerName "HV02.contoso.com" `
                     -ReplicaServerPort 80 `
                     -AuthenticationType Kerberos `
                     -ReplicationFrequencySec 30

# Initial sync — over wire or via removable media
Start-VMInitialReplication -VMName "SQL01"
```

### Test failover (non-disruptive!)

```powershell
# On the replica side — creates a test VM that doesn't affect ongoing replication
Start-VMFailover -VMName "SQL01" -AsTest
```

🎯 **Exam pattern:** *"DR site has different IP scheme. After failover, the VM needs different network settings."* → Use **Injected IP addresses** in the replication configuration (`Set-VMNetworkAdapterFailoverConfiguration`).

---

## 🛡️ Shielded VMs and the Host Guardian Service

A **shielded VM** is a Gen 2 VM with vTPM, BitLocker, and policy enforcement — designed so even *fabric administrators* (Hyper-V admins) cannot inspect the VM's memory or disk.

### The stack

| Component | Role |
|-----------|------|
| **Shielded VM** | Gen 2 + vTPM + BitLocker volume + Shielding Data File |
| **Guarded Host** | Hyper-V host that has been attested as trustworthy by HGS |
| **Host Guardian Service (HGS)** | Centralized attestation + key release service (3-node HGS cluster recommended) |
| **Shielding Data File (`.pdk`)** | Sealed package: VM template + admin password + secrets |

### Two attestation modes

| Mode | Strongest | Use case |
|------|-----------|----------|
| **TPM-trusted** (formerly TPM Mode) | **Yes** — host TPM + boot measurements verified | Production with TPM 2.0 hardware |
| **Host Key** (formerly Admin-trusted) | Weaker — just a key pair from each host | Lab / legacy hardware without TPM |

🔥 **TPM-trusted is the recommendation for any production deployment.** Host Key mode protects against *off-host* attackers but not against a malicious fabric admin.

### Deploy HGS

```powershell
# On the first HGS node (joins/creates the HGS cluster)
Install-WindowsFeature HostGuardianServiceRole -IncludeManagementTools

Initialize-HgsServer -HgsServiceName "HGS01" `
                    -TrustTpm `
                    -CreateNewDomain `
                    -NewDomainName "hgs.contoso.local" `
                    -SafeModeAdministratorPassword (Read-Host -AsSecureString)
```

🚨 **HGS lives in its own bastion forest** — never on production AD. This isolates the keys.

---

## 📊 Hyper-V VM Resource Controls

| Resource | Setting | Notes |
|----------|---------|-------|
| CPU | Virtual processors | Up to 240 per VM (Windows Server 2022) |
| CPU | **Reserve / Weight / Limit** | Reserve = guaranteed; weight = relative priority; limit = max cap |
| Memory | **Dynamic memory** | Min / Startup / Max + memory weight |
| Memory | **Smart Paging** | Disk-backed paging when host runs out — only for restarts, not normal operations |
| Storage | VHD vs VHDX | **VHDX recommended**: up to 64 TB, corruption-resistant, 4K-aligned |
| Storage | Differencing disk | Child VHD pointing to parent for snapshots / templates |
| Storage | **QoS Min/Max IOPS** | Per-VHD throttling |

### VHD vs VHDX

| | VHD | **VHDX** |
|---|-----|----------|
| Max size | 2 TB | **64 TB** |
| 4K sector alignment | No | Yes |
| Corruption resistance | Lower | Higher (transaction log) |
| Shared between Hyper-V and Azure | Yes | **VHDX must convert to VHD for Azure upload** (Azure uses VHD format) |

🔥 **Azure VMs use VHD format only.** When you migrate a Hyper-V VM to Azure, convert VHDX → VHD first.

---

## 🚀 SR-IOV, VMQ, vRSS — Network Performance Features

| Feature | What it does | When |
|---------|--------------|------|
| **VMQ** (Virtual Machine Queue) | Per-VM hardware queues on the physical NIC | Default for 10 GbE+ Hyper-V hosts with many VMs |
| **vRSS** (virtual Receive Side Scaling) | Scales VMQ across multiple CPU cores in the VM | Combined with VMQ for high-throughput VMs |
| **SR-IOV** (Single Root I/O Virtualization) | VM gets a dedicated Virtual Function (VF) of the NIC, bypassing the vSwitch | Wire-speed VMs (NFV, firewalls, low-latency apps); requires SR-IOV-capable NIC + BIOS enablement |
| **SET** (Switch Embedded Teaming) | Modern NIC team built into the vSwitch — supports VMQ, vRSS, RDMA | S2D + production Hyper-V |

```powershell
# Enable SR-IOV on a NIC (must be done at vSwitch creation)
New-VMSwitch -Name "External-SRIOV" -NetAdapterName "Ethernet0" -EnableIov $true

# Assign SR-IOV VF to a VM
Set-VMNetworkAdapter -VMName "FirewallVM" -IovWeight 100 -IovQueuePairsRequested 4
```

🚨 **SR-IOV trade-off:** SR-IOV bypasses the vSwitch — which means **no VLAN tagging, no port mirroring, no extensions** on those traffic flows. Use only for VMs that genuinely need wire-speed throughput.

---

## 🐳 Containers on Windows Server

Windows Server has **two container isolation modes**:

| Mode | Isolation | OS sharing | Use when |
|------|-----------|------------|----------|
| **Windows Server Containers** | Process-level (shared kernel with host) | Yes | Trusted multi-tenant |
| **Hyper-V Containers** | Each in its own utility VM | No | Untrusted code; strong isolation |

### Run a Windows container

```powershell
# Install Containers feature
Install-WindowsFeature Containers
Restart-Computer

# Install Docker (CE/Mirantis) or use containerd
# Pull and run an image
docker pull mcr.microsoft.com/windows/servercore:ltsc2022
docker run -d --name web1 mcr.microsoft.com/windows/servercore:ltsc2022 ping -t localhost

# Switch to Hyper-V isolation
docker run -d --isolation=hyperv mcr.microsoft.com/windows/nanoserver:ltsc2022
```

📌 Linux containers run on Windows via **WSL 2** (lightweight nested VM) or **Linux Containers on Windows (LCOW)**.

---

## 🧪 Task-Sequencing Practice: Migrate a Production SQL VM with Zero Downtime to a New Host

**Scenario:** A SQL Server VM ("SQL01") runs on HV01 with local storage. The CFO needs the VM moved to a new host (HV02) on a different S2D cluster, with new storage location, during business hours. Zero downtime tolerance.

**Order these steps:**

1. ✅ Verify both hosts are running compatible Hyper-V versions and the destination has sufficient CPU/memory/storage capacity
2. ✅ Enable live migration on both hosts: `Enable-VMMigration` and set Kerberos auth
3. ✅ Configure **constrained delegation** in AD for each host's computer account, delegating CIFS and "Microsoft Virtual System Migration Service" to the other host
4. ✅ If destination CPU differs significantly, enable **Processor Compatibility Mode** on the VM (requires shutdown — coordinate; for true zero downtime, ensure CPU stepping matches)
5. ✅ Initiate Shared-Nothing live migration: `Move-VM -Name "SQL01" -DestinationHost "HV02" -IncludeStorage -DestinationStoragePath "C:\ClusterStorage\Volume1\SQL01"`
6. ✅ Monitor migration progress: `Get-VM SQL01 | Select-Object Name,Status,State`
7. ✅ Validate post-migration: connect to SQL, run sample queries, confirm no replication lag for AlwaysOn
8. ✅ Optional: re-enable Processor Compatibility Mode OFF after migration if CPUs are matched

⚠️ Skipping step 3 (constrained delegation) is the #1 mistake — the migration will fail with "Kerberos authentication failed" and the admin will scramble to figure out why.

---

## 📊 Case Study — The 2021 OVHcloud Strasbourg Data Center Fire

**Situation.** On the night of March 9–10, 2021, a fire broke out in OVHcloud's SBG2 data center in Strasbourg, France — one of Europe's largest cloud providers. The fire spread from a UPS in SBG2 to neighboring SBG1, destroying SBG2 entirely and damaging SBG1 (OVHcloud Post-Incident Report, March 22 2021; Le Monde, *Incendie chez OVH : Octave Klaba s'explique sur les conséquences*, March 10 2021). The cause: a faulty UPS battery (subsequently confirmed by French fire investigators in their final report) overheated in an unsuppressed enclosure. ~3.6 million websites went offline. Among them: French national broadcaster France 24, parts of the European Space Agency website, and ~12,000 small business customers whose only data copy was in SBG2 because they had not enabled OVHcloud's optional cross-zone backup.

**Decision.** OVHcloud's published post-incident actions and the broader cloud-industry response converged on five principles that map directly onto Hyper-V DR best practices:

1. **Replicate at a different fire compartment**, ideally a different building. SBG2's failure spreading to SBG1 was a fire-compartment failure.
2. **Asynchronous replication is cheap insurance.** Many of the lost SMB customers had paid €5/month for "backup" they thought was cross-zone but was actually local to SBG2.
3. **Test failovers, not just back-up.** Backups untested for failover are theater.
4. **Diversify the metadata store.** OVHcloud's customer-facing portal was down for days; recovery was slowed because metadata about *which* services lived in SBG2 was itself in SBG2.
5. **Be explicit about RPO/RTO with customers.** Many customers conflated "high availability" with "disaster recovery" — they're different.

**Outcome.** OVHcloud later acquired Smart Network Solutions and refactored its product line to include explicit "Datacenter Resilience" tiers with cross-region default replication. Insurance payouts were estimated at €105M (Insurance Insider, June 2021). The breach became a Stanford GSB case study (no public reference yet) on the cost of customers misunderstanding shared-responsibility models in IaaS.

**Lesson for the exam / for practitioners.** AZ-800 / AZ-801 won't test you on OVHcloud — but it tests the building blocks:

- *Hyper-V Replica* → 30 sec / 5 min / 15 min async replication is the on-prem equivalent of OVHcloud's cross-zone replication
- *Cross-site stretch cluster + Storage Replica* → for true RPO 0 metro pairs (covered in Module 4)
- *Test failover* → Hyper-V Replica's `Start-VMFailover -AsTest` is non-disruptive — use it monthly, not "someday"
- *Azure Site Recovery* (Module 9) → cloud-equivalent of Hyper-V Replica with much richer test/failover orchestration

The exam will phrase this as: *"A business-critical Hyper-V VM must survive complete loss of the primary data center, with the lowest possible RPO. The DR site is 35 km away (~2 ms RTT). What is the right combination?"* → **Stretch failover cluster + Storage Replica synchronous + (optional) Hyper-V Replica for an additional async copy further away**.

**Discussion (Socratic).**
- **Q1.** OVHcloud's SBG1 was *next to* SBG2 — a "two-zone" architecture that didn't survive a fire spreading. Build the case for true geographic separation (≥100 km) for DR, and identify the *single* OVH customer profile that genuinely needs only local HA (hint: latency-sensitive trading).
- **Q2.** Hyper-V Replica supports 30s / 5min / 15min intervals. A SQL Server workload's RTO/RPO requirements are 5 min RPO. Defend the choice between Replica with 30s intervals + manual failover vs an Always-On Availability Group across two stretched Hyper-V hosts. What's the cost-benefit?
- **Q3.** The OVHcloud customers who survived best were the ones who had practiced their failover. Build a 90-day Hyper-V Replica test-failover cadence: who runs the test, what's the runbook, and how do you measure success? What's the *minimum* cost to never have it become theater?

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "You can convert a Gen 1 VM to Gen 2" | ❌ Not directly — create new Gen 2 and migrate disk |
| "Live migration requires shared storage" | ❌ Shared-Nothing migration over SMB 3.0 works |
| "Hyper-V Replica is synchronous" | ❌ Always async; minimum interval is 30 sec |
| "Shielded VMs work on Gen 1 hosts" | ❌ Gen 2 with vTPM required |
| "VMQ is for VMs with low-traffic NICs" | ❌ VMQ optimizes for high-traffic VMs at 10 GbE+ |
| "SR-IOV supports VLAN tagging" | ❌ Bypasses the vSwitch — no VLAN/mirror/extension on SR-IOV flows |
| "Azure can boot from VHDX directly" | ❌ Azure requires VHD format; convert before upload |
| "Quick Migration = Live Migration" | ❌ Quick Migration has multi-second downtime (save state → copy → resume) |
| "LBFO and SET are interchangeable" | ❌ LBFO is legacy; SET is required for S2D and modern Hyper-V |
| "Nested virtualization allows dynamic memory" | ❌ Dynamic memory must be off before enabling nested virt |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Gen 1 / Gen 2 VM** | Legacy BIOS vs UEFI + Secure Boot + vTPM |
| **Nested virtualization** | Hyper-V inside a Hyper-V VM |
| **vSwitch types** | External / Internal / Private |
| **SET** | Switch Embedded Teaming — modern NIC team |
| **Live Migration** | Near-zero downtime VM move |
| **Quick Migration** | Save state, copy, resume — multi-second downtime |
| **Storage Migration** | Move VM's storage while VM stays put |
| **Shared-Nothing Migration** | Live migrate without shared storage (SMB 3.0) |
| **Hyper-V Replica** | Async VM replication (30s / 5m / 15m) |
| **Shielded VM** | Gen 2 + vTPM + BitLocker, opaque to fabric admin |
| **HGS** | Host Guardian Service — attestation + key release |
| **TPM-trusted vs Host Key** | Strong vs weak HGS attestation modes |
| **VMQ / vRSS / SR-IOV** | NIC performance offloads |
| **VHD vs VHDX** | 2 TB vs 64 TB + corruption resistance |
| **CSV** | Cluster Shared Volume |
| **Processor Compatibility Mode** | Hide CPU instruction set differences for live migration |

---

## ✅ Module 5 Summary

You now know:

- 🎭 Gen 1 (legacy BIOS, IDE boot) vs Gen 2 (UEFI, Secure Boot, vTPM)
- 📦 Nested virtualization — labs, WDAG, WSL 2, prerequisites (static memory, MAC spoofing)
- 🌐 The three vSwitch types and when each applies
- 🚚 Live Migration — Kerberos vs CredSSP, constrained delegation, performance options
- 🔁 Hyper-V Replica — 30s/5m/15m async, test failover, certificate vs Kerberos
- 🛡️ Shielded VMs + HGS — TPM-trusted vs Host Key attestation
- 📊 VM resource controls — Dynamic memory, CPU weight, VHDX QoS
- 🚀 VMQ / vRSS / SR-IOV — when each is appropriate
- 🐳 Windows Server Containers vs Hyper-V Containers — process vs VM isolation
- 🚨 The 10 most common exam traps in this domain

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Hybrid Cloud with Azure Arc](../Module-06-Azure-Arc/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6's Azure Arc can manage your Hyper-V hosts. Module 8's Defender for Servers protects them. Module 9's ASR is the cloud sibling of Hyper-V Replica. Module 10's PowerShell DSC can apply configuration to VMs at scale.
> - Cross-course: [`06-Azure-Administrator` Modules 5–6](../../06-Azure-Administrator/Module-05-Virtual-Machines/Reading.md) cover Azure VMs and AKS — the cloud-equivalent skills.
> - Practice: Practice Exam 1 has 8 questions on Hyper-V; Practice Exam 2 has 3 (hybrid scenarios); Final Mock has a live-migration + Hyper-V Replica case study.

---

## 💬 Discussion — Socratic prompts

1. **Gen 1 vs Gen 2 for legacy migration.** Your company has 800 production Hyper-V VMs from 2014, all Gen 1. The CIO wants them all Gen 2 within 18 months for shielded-VM compliance. Defend the migration strategy (the only path: build new Gen 2 VMs and migrate disks/data — what's the per-VM time, and what application classes block the migration?).
2. **Hyper-V Replica vs Always-On AG.** A SQL Server workload has an 8 GB DB with 50 transactions/sec. For DR, defend Hyper-V Replica (cheaper, generic to any VM) vs SQL AG (transaction-level, but SQL-specific). What's the customer profile where each wins?
3. **SR-IOV adoption trade-off.** SR-IOV gives wire-speed networking but bypasses the vSwitch (no VLAN, no extensions). A 4-node Hyper-V cluster runs a mix of internal-facing line-of-business VMs and a network-firewall VM that needs 40 Gbps. Defend the choice to enable SR-IOV only on the firewall VM and explain why blanket SR-IOV would harm operational management.
4. **Shielded VMs vs trusted-admin model.** Implementing HGS requires a bastion forest, 3 HGS nodes, and TPM 2.0-capable hardware — a 6-week project for most enterprises. Build the case that shielded VMs are essential for any multi-tenant Hyper-V hoster (regulatory or compliance), and the case that for a single-tenant private cloud they are overkill.
5. **OVHcloud lessons applied at home.** Build your enterprise's DR architecture for Hyper-V workloads spanning two on-prem sites (same metro) plus an Azure Site Recovery target (cross-region). What's the failover order, what's the test cadence, and what's the cost trade-off vs single-site survival?

---

## 📚 Further Reading (Optional)

- 📖 [Microsoft Learn — Hyper-V overview](https://learn.microsoft.com/windows-server/virtualization/hyper-v/hyper-v-on-windows-server)
- 📖 [Live Migration deep dive](https://learn.microsoft.com/windows-server/virtualization/hyper-v/manage/live-migration-overview)
- 📖 [Hyper-V Replica overview](https://learn.microsoft.com/windows-server/virtualization/hyper-v/manage/set-up-hyper-v-replica)
- 📖 [Shielded VM deployment guide](https://learn.microsoft.com/windows-server/security/guarded-fabric-shielded-vm/guarded-fabric-deploying-hgs-overview)
- 📖 [SR-IOV / VMQ best practices](https://learn.microsoft.com/windows-server/virtualization/hyper-v-virtual-switch/manage/enable-sr-iov-on-a-physical-network-adapter)
- 📖 OVHcloud, *Post-incident report — SBG2 fire, March 9–10 2021* (OVHcloud blog, March 22 2021)
- 📖 Mendel Rosenblum and Tal Garfinkel, "Virtual Machine Monitors: Current Technology and Future Trends," *IEEE Computer*, May 2005 — the foundational academic paper on hypervisor design
- 📖 [Azure Stack HCI documentation](https://learn.microsoft.com/azure-stack/hci/) — the Microsoft-supported HCI distribution built atop Hyper-V + S2D
