# 📋 Module 5 Cheat Sheet: Warehouse Operations

> One page. Print it. Review before the exam.

---

## 📐 Layouts

| Layout | Pattern | Best for |
|--------|---------|----------|
| U-shape | Both docks same side | Most DCs |
| I-shape (straight-through) | In one side, out other | High-volume automated |
| L-shape | Hybrid | Constrained sites |

---

## 🔄 7-Step Workflow (+ Returns)

```
Receiving → Putaway → Storage → Replenishment →
Picking → Packing → Shipping → [Returns]
```

---

## 🗂️ Storage Equipment

| Method | Density | Selectivity | Rotation |
|--------|---------|-------------|----------|
| Selective racking | Low | High | FIFO (First In, First Out) ok |
| Drive-in | High | Low | LIFO (Last In, First Out) |
| Push-back | Med-high | Med | LIFO |
| Pallet/carton flow | High | Med | FIFO |
| Mezzanine | Vertical | High | FIFO ok |
| Shelving / bin | Low | Very high | FIFO ok |
| AS/RS | Very high | Very high | FIFO ok |
| VLM | Very high (Z) | High | FIFO ok |
| Carousel | High | High | FIFO ok |

---

## 🤖 Automation Cheat

| Tech | What it is |
|------|-----------|
| AS/RS | Cranes in racking |
| AGV | Fixed-path automated truck |
| AMR | Dynamic-mapping autonomous robot |
| GTP | Robotic shelves → picker (Kiva, AutoStore) |
| Voice | Headset-driven, hands-free |
| Pick-to-light | LEDs at bins |
| Drone | Inventory counting |

**Automate when:** high volume, stable SKU (Stock Keeping Unit), 24/7, accuracy critical.
**Don't automate when:** low volume, SKU churn, short lease, low labor cost.

---

## 📊 KPI (Key Performance Indicator) Benchmarks

| KPI | Target |
|-----|--------|
| Dock-to-stock | <4 hours |
| Putaway accuracy | >99% |
| Cube utilization | 65–85% |
| Pick accuracy | 99.5%+ |
| PPH | 60–200 (varies) |
| IRA | 95–99% |
| Damage rate | <0.5% |
| On-time ship | >98% |
| Perfect order | >95% world-class |

🚨 Cube utilization >85% impedes flow.

---

## 🛡️ Compliance Frames

| Standard | Scope |
|----------|-------|
| OSHA 29 CFR 1910.178 | Forklift safety |
| HACCP | Food safety |
| FDA cGMP / 21 CFR 11 | Pharma |
| DOT hazmat | Hazardous materials |
| C-TPAT | US Customs security |
| ISO 9001 / 14001 | Quality / environment |

---

## 🌡️ Cold Chain Ranges

| Tier | Temperature |
|------|-------------|
| Frozen | ≤ -18°C |
| Refrigerated | 0–8°C |
| Controlled ambient | 15–25°C |

---

## 🏆 Exam Power Phrases

Usually CORRECT:

- ✅ "U-shape for general DC, I-shape for high-volume automated"
- ✅ "Random putaway is systematic (WMS (Warehouse Management System)-tracked)"
- ✅ "Cube utilization 65–85% sweet spot"
- ✅ "Slot A-movers in golden zone"

Usually WRONG:

- ❌ "Drive-in = selective" (drive-in is LIFO)
- ❌ "100% cube utilization is best"
- ❌ "AGV = AMR" (path vs dynamic)
- ❌ "Automate everything"

---

## ⚠️ Anti-Patterns

- ❌ Mixing inbound and outbound traffic in U-shape without zoning
- ❌ Over-automating low-volume, SKU-churn ops
- ❌ Ignoring re-slot cycles as velocity shifts
- ❌ Forklift drivers without OSHA cert

---

## ✏️ Quick Self-Check

1. U vs I shape, when each? ___
2. 7-step workflow? ___
3. AS/RS vs AGV vs AMR, one-line each? ___
4. Cube utilization target? ___
5. Drive-in racking is FIFO or LIFO? ___

---

➡️ [Module 6: Transportation Modes](../Module-06-Transportation-Modes/Reading.md)
