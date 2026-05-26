# 📋 Module 3 Cheat Sheet: Hardware

> One page. Print it. Tape it.

---

## 🧠 Current Sockets

| Vendor | Socket | Generations |
|--------|--------|-------------|
| Intel | LGA 1700 | 12–14th Gen |
| Intel | LGA 1851 | Core Ultra (15th) |
| AMD | AM4 (PGA) | Ryzen 1000–5000 |
| AMD | AM5 (LGA) | Ryzen 7000+ |

---

## 🧮 RAM Cheat

| | DDR4 | DDR5 |
|--|------|------|
| Voltage | 1.2V | 1.1V |
| Base speed | 2133–3200 MT/s | 4800–6400 MT/s |
| Channels per DIMM | 1 | 2 sub |
| Pin count | 288 | 288 (different key) |

| Form | Use |
|------|-----|
| DIMM | Desktop (288 pin) |
| SODIMM | Laptop (260/262 pin) |

🎯 **Dual-channel:** populate matching color pair (usually A2+B2).

---

## 💾 Storage Tiers

| Tier | Interface | Speed |
|------|-----------|-------|
| 7200 HDD | SATA | ~150–250 MB/s |
| SATA SSD | SATA III | ~550 MB/s |
| NVMe Gen 3 | PCIe ×4 | ~3,500 MB/s |
| NVMe Gen 4 | PCIe ×4 | ~7,000 MB/s |
| NVMe Gen 5 | PCIe ×4 | ~14,000 MB/s |

---

## 🛡️ RAID Cheat

| RAID | Min disks | Fault tolerance | Capacity |
|------|-----------|------------------|----------|
| 0 | 2 | **None** | 100% |
| 1 | 2 | 1 | 50% |
| 5 | 3 | 1 | (N-1)/N |
| 6 | 4 | 2 | (N-2)/N |
| 10 | 4 (even) | 1 per mirror | 50% |

🎯 **RAID ≠ backup.**

---

## 🔌 PSU Cheat

| 80 PLUS | Eff @ 50% |
|---------|-----------|
| White | 80% |
| Bronze | 82% |
| Silver | 85% |
| Gold | 87% |
| Platinum | 90% |
| Titanium | 94% |

| Connector | Powers |
|-----------|--------|
| 24-pin (or 20+4) | Motherboard |
| 8-pin EPS (or 4+4) | CPU |
| 6+2 PCIe | GPU |
| 12VHPWR / 12V-2x6 | High-end GPU (up to 600W) |
| SATA power | Drives |

---

## 🖥️ Motherboard Form Factors

| Form | Size | PCIe |
|------|------|------|
| E-ATX | 12 × 13 in | 6–8 |
| ATX | 12 × 9.6 in | 4–7 |
| mATX | 9.6 × 9.6 in | 1–4 |
| ITX | 6.7 × 6.7 in | 1 |

---

## 🛡️ Windows 11 Trifecta

✅ TPM 2.0
✅ UEFI (not Legacy BIOS)
✅ Secure Boot

(Also: 8th-gen+ CPU, 4 GB RAM minimum, 64 GB storage)

---

## 🔑 M.2 Keying

| Key | Carries |
|-----|---------|
| B | SATA SSD or PCIe ×2 NVMe |
| M | NVMe PCIe ×4 (fast) |
| B+M | Either (universal) |
| A / E | WiFi / BT card |

---

## 🏆 Exam Power Phrases

✅ Often **right**:
- "Reseat the RAM"
- "Match the dual-channel slots per the manual"
- "Apply fresh thermal paste"
- "Use 80 PLUS Gold or better"
- "Use NVMe for boot drive"

❌ Often **wrong**:
- "Replace the motherboard first"
- "DDR4 works in a DDR5 slot"
- "RAID is a backup"
- "Skip the QVL — any RAM works"
- "Use Legacy BIOS for Win 11"

---

## 🗓️ Memorize Cold

- RAID 5 min = 3, RAID 6 min = 4, RAID 10 min = 4
- PCIe Gen 4 ×4 NVMe = 7 GB/s
- Win11 = TPM 2.0 + UEFI + Secure Boot
- ATX = 12 × 9.6 in
- 80 PLUS Gold ≈ 87% efficient
- Hardware domain = **25% of 220-1101**

---

## ✏️ Quick Self-Check

1. Min disks for RAID 5, 6, 10? ___
2. PCIe Gen 4 ×4 NVMe speed? ___
3. Win11 hardware trifecta? ___
4. ATX dimensions? ___
5. M.2 keying for full-speed NVMe? ___

---

➡️ [Module 4: Virtualization & Cloud](../Module-04-Virtualization-Cloud/Reading.md)
