# 📋 Module 5 Cheat Sheet: Mining & PoW Economics

---

## ⛏️ What Mining Is

```
Loop:
  construct candidate block (incl. coinbase + selected txs)
  compute double-SHA256(80-byte header)
  IF hash ≤ target → BROADCAST, claim reward
  ELSE → increment nonce, repeat
```

🧠 Mining = brute-force hash search. NOT solving math equations.

---

## 💎 The Halving Schedule

| # | Block | Date | Subsidy |
|---|-------|------|---------|
| 0 | 0 | 2009 | 50 |
| 1 | 210,000 | 2012-11 | 25 |
| 2 | 420,000 | 2016-07 | 12.5 |
| 3 | 630,000 | 2020-05 | 6.25 |
| **4** | **840,000** | **2024-04** | **3.125** |
| 5 | 1,050,000 | ~2028 | 1.5625 |

🧠 Every **210,000 blocks** ≈ 4 years.

---

## 🌀 Difficulty Adjustment

```
new = old × (2016 × 10 min) / (actual_time_for_last_2016_blocks)
```

- Every **2,016 blocks** (~2 weeks)
- Capped at **±4×** per adjustment
- Largest historical drop: -28% (July 2021, China ban)

---

## 🏭 ASIC Generations

| Gen | Years | Efficiency (J/TH) |
|-----|-------|-------------------|
| CPU | 2009-10 | ~1,000,000 |
| GPU | 2010-13 | ~10,000 |
| FPGA | 2011-13 | ~1,000 |
| ASIC gen 1 | 2013 | ~500 |
| ASIC modern | 2018-24 | ~30 |
| **ASIC 2024-26 (S21 Pro)** | **2024+** | **~14-17** |

---

## ⚡ Energy at a Glance (2026)

| Metric | Value |
|--------|-------|
| Bitcoin TWh/year | ~120-150 |
| % global electricity | ~0.5% |
| Gold mining (compare) | ~131 TWh/year |
| Clothes dryers US | ~108 TWh/year |
| Renewable share | 40-60% (disputed) |
| Top jurisdiction | US (~40%) |

---

## 🏊 Mining Pool Concentration

| Pool | % Hashrate |
|------|-----------|
| **Foundry USA** | ~30% |
| **AntPool** | ~22% |
| F2Pool | ~12% |
| ViaBTC | ~10% |
| Binance Pool | ~6% |

🚨 Top 2 ≈ 50%. Validation by full nodes mitigates risk.

---

## 🌍 Hashrate by Country (2026)

| Country | Share |
|---------|-------|
| **US** | ~40% |
| Kazakhstan | ~12% |
| Russia | ~10% |
| Canada | ~6% |
| China (semi-clandestine) | ~10% |
| Others | ~22% |

---

## 🧮 51% Attack Economics

- Cost to acquire 700 EH/s: $20-50B
- Daily op cost: ~$25M
- Sacrificed mining revenue: ~$20M/day
- Damage scope: double-spend recent, censor specific addresses
- Damage NOT possible: inflate supply, steal arbitrary, change rules

🧠 Net case for attack: weak even for a state actor.

---

## 🪙 The Stranded-Energy Argument

1. Miners = **most-relocatable** industrial load
2. Soak up flare gas, off-peak hydro, curtailed wind
3. ERCOT (TX) treats them as **Controllable Load Resources**
4. Monetize **negative-price** electricity events
5. Subsidize renewables build-out (guaranteed demand)

Examples: Marathon TX wind PPA, Permian flare-to-mining, El Salvador volcanic geothermal.

---

## ⚠️ Top Exam Traps

1. **2,016 blocks** difficulty / **210,000 blocks** halving
2. **April 2024 = 3.125 BTC**, next halving ~2028 → 1.5625
3. Mining = brute force, NOT solving math
4. 51% attack scope: limited (no inflation, no arbitrary theft)
5. **Cambridge CCAF** = primary academic energy source
6. **Stratum V2** = miners choose transactions (pool-centralization fix)
7. China official share = 0%; semi-clandestine ~10%
8. **US is dominant jurisdiction** (~40%)
9. ASIC manufacturing: ~80% China (Bitmain/MicroBT/Canaan)
10. **100-block coinbase maturity**

---

## 🏆 Power Phrases

✅ "Industrial flexible load + demand response"
✅ "Hashrate migrates; the chain doesn't stop"
✅ "Fees + subsidy combine to incentivize"
✅ "Validation by full nodes, not pools"

❌ "Bitcoin uses more energy than countries"
❌ "Mining is fundamentally wasteful"
❌ "Pools control consensus"
❌ "China controls Bitcoin mining"

---

➡️ [Module 6: Bitcoin Script & Programmability](../Module-06-Bitcoin-Script-Programmability/Reading.md)
