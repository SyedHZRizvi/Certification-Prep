# 📋 Module 5 Cheat Sheet: Virtual Machines

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🧮 Size Families (Letter)

| Letter | Optimized for |
|--------|---------------|
| A | Entry / legacy |
| B | Burstable |
| D | General purpose |
| E | Memory |
| F | Compute |
| L | Storage |
| M | Mega-memory |
| N | GPU |
| H | HPC |

Suffixes: `s`=Premium SSD · `d`=local NVMe · `a`=AMD · `_v5`=gen 5

---

## 🏗️ SLAs

| Config | SLA |
|--------|-----|
| Single VM w/ Premium SSD | 99.9% |
| Availability Set | 99.95% |
| Availability Zones (≥2) | **99.99%** |

🧠 **9 / 95 / 99**

AS: max 3 FDs × 20 UDs · Must set at VM create · Mutually exclusive with AZ

---

## 💾 Managed Disks

| SKU | Max IOPS | OS disk? |
|-----|----------|----------|
| Standard HDD | ~500 | ✅ |
| Standard SSD | ~6,000 | ✅ |
| Premium SSD | ~20,000 | ✅ |
| **Premium SSD v2** | ~80,000 | ❌ data only |
| **Ultra Disk** | ~160,000 | ❌ data only |

---

## 🔐 Encryption Layers

```
SSE (default) ─→ AES-256 at storage (MMK or CMK)
Host encryption ─→ encrypts temp + cache at host
ADE ─→ BitLocker / dm-crypt in guest OS
Confidential disks ─→ TEE-backed (specialized)
```

---

## 🖼️ Image Hierarchy (Compute Gallery)

```
Gallery → Image Definition → Image Version (1.0.0)
                  ↓
        Replicated to multiple regions
```

Generalize first: Windows = `sysprep` · Linux = `waagent -deprovision +user`

---

## 📈 VMSS Quick Hit

| Mode | When |
|------|------|
| **Flexible** (default) | New work, AZ integration, mixed sizes |
| Uniform | Legacy / very large identical fleets |

Autoscale rules: CPU>70% out · CPU<30% in · Cooldown 5 min default · min/max bounds

---

## 🛠️ Key Extensions

| Extension | Use |
|-----------|-----|
| **CSE** | One-time bootstrap script |
| **Run Command** | Ad-hoc shell from portal |
| **AMA** | Logs to Log Analytics |
| **ADE** | BitLocker / dm-crypt |
| **DSC** | PowerShell desired state |

---

## 🏆 Exam Power Phrases

Often **correct**:
- ✅ "Deploy VMSS Flexible across 3 zones"
- ✅ "Use Premium SSD v2 with provisioned IOPS"
- ✅ "Capture image in Azure Compute Gallery"
- ✅ "Encryption at host for temp disks"
- ✅ "Azure Bastion to remove public IP"

Often **wrong**:
- ❌ "Add VM to AS after creation"
- ❌ "Ultra Disk as OS"
- ❌ "B-series for production DB"
- ❌ "Combine AS and AZ"
- ❌ "Custom Script Extension on every boot"

---

## ⚠️ Anti-Patterns

- ❌ Single VM in production (99.9% only)
- ❌ Public IP on every VM (use Bastion)
- ❌ Untagged VMs everywhere
- ❌ Auto-scale rules without cooldown
- ❌ Spot VM for stateful DB

---

## ✏️ Quick Self-Check

1. SLAs: Single / AS / AZ? ___
2. Premium SSD v2 vs Premium SSD difference? ___
3. Max FDs and UDs in an AS? ___
4. Spot eviction notice? ___
5. ADE vs host encryption — what's encrypted where? ___

---

➡️ Now take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) before [Module 6](../Module-06-App-Services-Containers/Reading.md)
