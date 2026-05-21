# Module 5: Virtual Machines 🖥️

> **Why this module matters:** VMs are 20–25% of the AZ-104 exam. Picking the right size, redundancy model, and disk tier — and knowing how to scale, image, and automate them — is the bread and butter of an Azure admin. Expect drag-drop case studies.

---

## 🍕 A Story: The Pop-Up Donut Shop That Couldn't Handle Fame

Sasha runs "Hole Truth Donuts" out of a single food truck. One night a TikTok video of her maple bacon glaze goes viral and the line stretches around the block. The truck can fry maybe 80 donuts an hour. The line wants 800. By Saturday she's lost half her customers to a faster-but-worse competitor.

Three months later, after listening to a business coach, Sasha rebuilds:

- **Multiple identical trucks** parked at different lots — if one breaks down, the others keep selling. (That's **Availability Zones** — different physical locations in the same metro.)
- **A single base recipe and equipment list**, used to bring up each new truck in 20 minutes. (That's a **VM image**.)
- **Auto-summon**: when the line tops 30 people, she texts a backup truck to roll in. When the crowd dies down, that truck goes home. (That's a **scale set with autoscale rules**.)
- **Standardized add-ons** — every new truck gets the same logo, oven settings, POS install. (That's a **VM extension** like Custom Script Extension.)

That's the VM mental model. The exam will throw you scenarios where the cure is one of these patterns. Recognize the pattern, pick the right service.

---

## 🧮 VM Sizes & Families

| Family prefix | Optimized for | Examples |
|----|----|----|
| **A** | Entry-level / dev test | A-series (legacy) |
| **B** | Burstable (CPU credits) | B2s, B4ms — cheap dev VMs |
| **D** | General purpose | D2s_v5, D8as_v5 |
| **E** | Memory-optimized | E4ds_v5 — big RAM/CPU ratio |
| **F** | Compute-optimized | F4s_v2 — high CPU/RAM ratio |
| **L** | Storage-optimized | L8s_v3 — high local disk IOPS |
| **M / Mv2** | Memory-monster | SAP HANA, very large in-memory DBs |
| **N** | GPU | NC, ND, NV — ML, rendering |
| **H** | HPC | H, HB, HC — InfiniBand, MPI workloads |

🔥 **Suffix decoder:**
- `s` = Premium SSD support (you almost always want this)
- `d` = local NVMe temp disk
- `a` = AMD CPU
- `_v5` = generation 5 (newer = better $/perf)

```bash
az vm list-sizes --location eastus --output table | head -20
```

---

## 🏗️ Availability Patterns (MEMORIZE)

The big-three resilience options:

| Option | What it gives you | SLA |
|--------|-------------------|-----|
| **Single VM with Premium SSD** | None except hardware redundancy | 99.9% |
| **Availability Set (AS)** | Spreads VMs across fault & update domains in the same datacenter | 99.95% |
| **Availability Zone (AZ)** | Spreads VMs across physically separate datacenters in the same region | **99.99%** |
| **Virtual Machine Scale Set (VMSS)** | Identical VMs treated as a unit; can be zonal or regional | up to 99.99% |
| **Regional pair (DR via ASR)** | Cross-region failover | Custom |

🔥 **Fault Domain (FD)** = a rack with shared power/network. **Update Domain (UD)** = a group rebooted together for host patching.

- AS default: 2 FDs × 5 UDs (max 3 FDs × 20 UDs)
- An AS must be specified at VM **creation time** — can't add later.
- Zones (AZs) are mutually exclusive with AS — pick one.

### Create a VM in an Availability Zone via CLI

```bash
az vm create \
    --resource-group rg-app \
    --name vm-web-01 \
    --location eastus \
    --image Ubuntu2204 \
    --size Standard_D2s_v5 \
    --zone 1 \
    --admin-username azureuser \
    --generate-ssh-keys \
    --vnet-name vnet-app \
    --subnet snet-web \
    --public-ip-sku Standard \
    --nsg "" \
    --os-disk-delete-option Delete
```

### PowerShell — VM in an AS

```powershell
$as = New-AzAvailabilitySet `
    -ResourceGroupName "rg-app" -Name "as-web" `
    -Location "eastus" -PlatformFaultDomainCount 3 `
    -PlatformUpdateDomainCount 5 -Sku Aligned   # "Aligned" = supports managed disks

New-AzVM -ResourceGroupName "rg-app" -Name "vm-web-01" `
         -Location "eastus" -Size "Standard_D2s_v5" `
         -Image "UbuntuLTS" -AvailabilitySetId $as.Id `
         -Credential (Get-Credential)
```

---

## 💾 Managed Disks

A managed disk = an Azure-managed storage account behind the scenes. Five SKUs to know:

| SKU | Backing | Use case | Max IOPS |
|-----|---------|----------|----------|
| **Standard HDD** | HDD | Dev/test, low cost | ~500 |
| **Standard SSD** | SSD | Light prod web servers | ~6,000 |
| **Premium SSD** | SSD with high IOPS | Production workloads | ~20,000 |
| **Premium SSD v2** | SSD with **independent** IOPS, throughput, size | Cost-optimized prod, modern | ~80,000 |
| **Ultra Disk** | SSD, sub-ms latency, fully configurable | SAP HANA, top-tier DB | ~160,000 |

🔥 **Premium SSD v2 advantages:** you set IOPS, throughput, and size independently — no more "buy P30 just for the IOPS." Plus 1 GiB increments, not the rigid P-tier ladder.

| Constraint | Premium SSD v2 | Ultra |
|------------|----------------|-------|
| OS disk supported? | ❌ Data disks only | ❌ Data disks only |
| Zone-redundant? | ✅ (LRS or ZRS) | ✅ (LRS or ZRS) |
| Snapshot support | ✅ | Limited |
| AZ availability | Most | Most (check region) |

### Disk encryption layers (Azure-managed disks)

| Layer | What it does | Default |
|-------|--------------|---------|
| **SSE with PMK** (platform-managed key) | Storage-level encryption | On |
| **SSE with CMK** | KV-backed key | Opt-in |
| **Azure Disk Encryption (ADE)** | BitLocker (Win) / dm-crypt (Linux) inside the OS, key in KV | Opt-in, host-level |
| **Encryption at host** | Encrypts temp + cache disks on the physical host | Opt-in (must be enabled on subscription) |
| **Confidential disks** | TEE-backed | Specialized scenarios |

```bash
# Create a Premium SSD v2 data disk
az disk create \
    --resource-group rg-app \
    --name disk-app-data \
    --size-gb 500 \
    --sku PremiumV2_LRS \
    --disk-iops-read-write 5000 \
    --disk-mbps-read-write 200 \
    --zone 1
```

---

## 🖼️ VM Images

| Image type | What it is | Use case |
|------------|------------|----------|
| **Marketplace** | Vendor-published (Microsoft, Canonical, RedHat, etc.) | Standard OS or appliance |
| **Custom / managed image** | Snapshot of a generalized VM | Reproducible golden image |
| **Azure Compute Gallery (formerly Shared Image Gallery)** | Versioned, replicated images across regions | Org-wide standard images |
| **VHD** | Bring-your-own disk | Lift-and-shift |

### Compute Gallery essentials

- Hierarchy: **Gallery → Image Definition → Image Version (e.g. 1.0.0)**
- Replication targets: list of regions where the version is staged for fast deploy
- Replication count: number of cached copies per region (more = faster parallel deploys)
- Versioning lets you `1.0.0 → 1.1.0` without breaking pinned references

```bash
# Generalize a VM (Windows: run sysprep; Linux: waagent -deprovision +user)
az vm deallocate -g rg-app -n vm-gold
az vm generalize -g rg-app -n vm-gold

# Capture as an image
az image create -g rg-app -n img-web-2026 --source vm-gold

# Or publish to Compute Gallery (recommended)
az sig create -g rg-app -n gal_corp_main
az sig image-definition create -g rg-app -r gal_corp_main \
    -i web-ubuntu-2204 --publisher contoso --offer web --sku 2204 \
    --os-type Linux --os-state Generalized --hyper-v-generation V2
az sig image-version create -g rg-app -r gal_corp_main \
    -i web-ubuntu-2204 -e 1.0.0 \
    --managed-image $(az image show -g rg-app -n img-web-2026 --query id -o tsv) \
    --target-regions eastus=2 westus2=1
```

---

## 🛠️ VM Extensions

Code/scripts that Azure injects into the VM at boot or on demand. The big ones:

| Extension | Use |
|-----------|-----|
| **Custom Script Extension (CSE)** | Run a script on VM provision/update |
| **Run Command** | Ad-hoc command from the portal (doesn't need RDP/SSH) |
| **DSC** | PowerShell Desired State Configuration |
| **Azure Monitor Agent (AMA)** | Sends logs/metrics to Log Analytics |
| **Network Watcher Agent** | Enables packet capture & connection monitor |
| **Azure Disk Encryption** | Manages BitLocker / dm-crypt |
| **VM Insights** | Performance + map dependencies in Monitor |

### Install CSE via CLI (Linux example)

```bash
az vm extension set \
    --resource-group rg-app \
    --vm-name vm-web-01 \
    --name customScript \
    --publisher Microsoft.Azure.Extensions \
    --version 2.1 \
    --settings '{"fileUris":["https://example.com/install-nginx.sh"], "commandToExecute":"bash install-nginx.sh"}'
```

---

## 📈 Virtual Machine Scale Sets (VMSS)

A **Scale Set** is a group of identical VMs that scale together. Two orchestration modes:

| Mode | Notes |
|------|-------|
| **Uniform** (classic) | Same SKU/image, tightly managed by VMSS, max 1000 instances |
| **Flexible** (modern, default) | Mix sizes, integrate with AS-style FDs, max 1000 by default |

Flexible orchestration is **recommended for new deployments** — it integrates with AZs and supports mixed instance types.

### Autoscale rules

```bash
# Define an autoscale profile on an existing VMSS
az monitor autoscale create \
    --resource-group rg-app \
    --resource vmss-web \
    --resource-type Microsoft.Compute/virtualMachineScaleSets \
    --name autoscale-cpu \
    --min-count 2 --max-count 10 --count 2

# Scale OUT when avg CPU > 70% for 5 min
az monitor autoscale rule create \
    --resource-group rg-app \
    --autoscale-name autoscale-cpu \
    --condition "Percentage CPU > 70 avg 5m" \
    --scale out 1

# Scale IN when avg CPU < 30% for 5 min
az monitor autoscale rule create \
    --resource-group rg-app \
    --autoscale-name autoscale-cpu \
    --condition "Percentage CPU < 30 avg 5m" \
    --scale in 1
```

| Metric | Common rule |
|--------|-------------|
| Percentage CPU | > 70% → out · < 30% → in |
| Memory % | > 80% → out |
| Inbound flows | > N → out |
| Schedule-based | "Add 5 instances at 7 AM weekdays" |

🔥 **Cooldown** = post-scale wait before next scale event (default 5 min). Prevents flapping.

---

## 🧷 Update Management & Maintenance

| Feature | What it does |
|---------|--------------|
| **Azure Update Manager** | Periodic + on-demand OS patching, replaces "Update Management (legacy)" |
| **Maintenance Configuration** | Schedule reboots/maintenance windows |
| **Scheduled events** | API the VM can poll to learn of upcoming host maintenance |
| **Live migration** | Microsoft moves your VM to another host with minimal disruption |

---

## 🧪 Task-Sequencing Practice: Stand Up a Highly Available Web Tier

**Order these steps** to deploy a 3-instance, zone-redundant web tier behind a public load balancer.

1. ✅ Create the **resource group** + **VNet** with subnets in your target region.
2. ✅ Create a **Standard SKU Public IP** and **Standard Load Balancer** (zonal-redundant frontend).
3. ✅ Create a **Custom Image** in **Azure Compute Gallery** for the web app (or use Marketplace).
4. ✅ Create a **VM Scale Set (Flexible)** with **`--zones 1 2 3`** and the gallery image.
5. ✅ Attach the **LB backend pool** to the VMSS.
6. ✅ Define **autoscale rules** (CPU > 70% scale out, < 30% scale in; min 2, max 10).
7. ✅ Apply **NSGs** on the subnet to allow only 443 inbound from `Internet` + 22/3389 from `MgmtBastion`.
8. ✅ Configure **Azure Backup** + **Azure Monitor agent** via extension.
9. ✅ Optionally add **Azure Front Door** for global routing (Module 8).

⚠️ Skipping zonal LB + zonal VMSS = single-AZ outage takes you down. Skipping autoscale = paying for 10 VMs even at 3 AM.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "AS can be set after VM creation" | ❌ Must specify at create time |
| "AS and AZ can be combined" | ❌ Pick one |
| "Ultra Disk works as OS disk" | ❌ Data disks only (so does Premium SSD v2) |
| "B-series is great for production" | ❌ Bursts on CPU credits — only OK for predictable low-CPU |
| "Spot VMs always run" | ❌ Can be evicted with 30 sec notice |
| "VMSS scale OUT instantly meets demand" | ❌ New VMs need to boot — pre-warm for fast traffic spikes |
| "ADE encrypts at host" | ❌ ADE is in-OS (BitLocker/dm-crypt). Host encryption is a separate feature. |
| "Custom Script Extension runs every boot" | ❌ Runs once per extension; updates trigger re-run |

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **VM size family** | Letter prefix indicating workload optimization (D, E, F…) |
| **Suffix `s` / `d` / `a`** | Premium SSD support / NVMe temp / AMD CPU |
| **Availability Set (AS)** | FD + UD spread within one datacenter |
| **Availability Zone (AZ)** | Physically separate datacenters in a region |
| **Fault Domain (FD)** | Group sharing a rack power/network |
| **Update Domain (UD)** | Group rebooted together during host maintenance |
| **Managed disk** | Azure-managed disk SKU |
| **Premium SSD v2** | Modern disk with independent IOPS / throughput / size |
| **Ultra Disk** | Top-tier disk for SAP HANA / heavy DBs |
| **VHD** | Virtual Hard Disk file format |
| **Custom image / managed image** | Generalized VM snapshot |
| **Azure Compute Gallery** | Versioned, multi-region image catalog |
| **VM extension** | Code injected into a VM at boot/runtime |
| **VMSS** | Virtual Machine Scale Set |
| **Orchestration mode** | Uniform (legacy) vs Flexible (modern, default) |
| **Autoscale profile** | Min/max/default + scale rules |
| **Cooldown** | Wait period after a scale event |
| **Spot VM** | Bid for spare capacity, 30s eviction notice |

---

## ✅ Module 5 Summary

You now know:
- 🧮 The 8 VM family prefixes and what each is optimized for
- 🏗️ AS vs AZ — what they protect against, when to use which
- 💾 The 5 managed-disk SKUs and where Premium SSD v2 shines
- 🔐 The 4 encryption layers (SSE / CMK / ADE / Host)
- 🖼️ Compute Gallery hierarchy and how to capture/version images
- 🛠️ Key VM extensions (CSE, Run Command, AMA)
- 📈 VMSS Flexible vs Uniform + autoscale rules
- 🧷 Update Manager + Maintenance Config
- 🚨 The 8 common traps

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. 🧪 **TAKE [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) — you've covered the first half of the cert.**
5. ➡️ Move to [Module 6: App Services & Containers](../Module-06-App-Services-Containers/Reading.md)

---

## 📚 Further Reading (Optional)

- 📖 [VM size families overview](https://learn.microsoft.com/azure/virtual-machines/sizes)
- 📖 [Availability options](https://learn.microsoft.com/azure/virtual-machines/availability)
- 📖 [Managed disk types](https://learn.microsoft.com/azure/virtual-machines/disks-types)
- 📖 [Azure Compute Gallery](https://learn.microsoft.com/azure/virtual-machines/azure-compute-gallery)
- 📖 [VMSS orchestration modes](https://learn.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes)
