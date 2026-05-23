# 📋 Module 3 Cheat Sheet: Network & Consensus

---

## 🔌 Network Snapshot (2026)

| Metric | Value |
|--------|-------|
| Reachable nodes | ~15,000-20,000 |
| Total nodes (incl NAT) | ~50,000-100,000 |
| Mainnet port | **8333** |
| Testnet3 port | 18333 |
| Signet port | 38333 |
| Lightning nodes | ~12,000 public |
| Mining pools (significant) | ~10-12 |

---

## 📦 Block Header (80 bytes)

| Field | Bytes |
|-------|-------|
| Version | 4 |
| Previous block hash | 32 |
| Merkle root | 32 |
| Timestamp | 4 |
| Bits (difficulty) | 4 |
| Nonce | 4 |
| **Total** | **80** |

🧠 Memory: "V-P-M-T-B-N = 4-32-32-4-4-4"

---

## ⚖️ Consensus Rules (5)

1. Block header satisfies PoW (hash ≤ target)
2. Every transaction valid (signatures, no double-spend, scripts succeed)
3. Block builds on known previous block
4. Longest **cumulative-work** chain wins
5. Coinbase ≤ subsidy + fees

---

## 🌀 Difficulty Adjustment

```
new_diff = old_diff × (2016 × 10 min) / actual_time
```

- Every **2,016 blocks** (~2 weeks)
- Capped at ±**4x** per adjustment

🧠 Target: 10-minute average block.

---

## 🍴 Soft vs Hard Fork

| | Soft | Hard |
|---|------|------|
| Rule change | Tightens (subset) | Loosens / changes |
| Backward compatible? | ✅ Yes | ❌ No |
| Splits chain? | No (unless miners disagree) | Yes (permanent) |
| Examples | P2SH (2012), SegWit (2017), Taproot (2021) | BCH (2017), BSV (2018) |

🚨 Bitcoin Core preference: **soft forks only**.

---

## 🕰️ Confirmation Guidance

| Value | Confirmations |
|-------|---------------|
| < $1K | 1 (~10 min) |
| $1K-$100K | 3 |
| $100K-$1M | **6** (~1 hour) |
| > $1M | 6-12 |
| Coinbase | **100** (consensus rule) |

🧠 1 confirmation = first inclusion (the tx's own block).

---

## 🌊 Transaction Lifecycle

```
broadcast → mempool → block inclusion → confirmations (1, 2, 3...)
                ↑
            RBF / CPFP can manipulate fee
```

🚨 0-conf is NOT safe (RBF can replace).

---

## 📡 Key BIPs

| BIP | Topic | When |
|-----|-------|------|
| 9 | Version-bits signaling | 2015 |
| 16 | P2SH | 2012 |
| 125 | RBF | 2015 |
| 141 | SegWit | 2017 |
| 152 | Compact block relay | 2016 |
| 340/341/342 | Schnorr/Taproot/Tapscript | 2021 |

---

## 🏛️ Nakamoto vs Classical BFT

| | Nakamoto | Classical BFT (PBFT, Tendermint) |
|---|----------|----------------------------------|
| Finality | Probabilistic | Deterministic (single round) |
| Permission model | Permissionless | Permissioned |
| Sybil resistance | PoW economic cost | Identity / staking |
| Latency | ~10 min/block, ~1 hour final | ~1-3 sec |
| Throughput | ~7 tps L1 | ~1000+ tps |

---

## ⚠️ Top Exam Traps

1. **2,016 blocks** for difficulty adjustment (not 2,000)
2. Block header = **80 bytes** regardless of N tx
3. Coinbase maturity = **100 blocks**
4. **Cumulative-work** chain (not block count)
5. Soft fork = tightening; hard fork = loosening
6. Mempool ≠ consensus; per-node cache
7. 51% can double-spend + censor; CANNOT inflate, steal arbitrary, or change rules
8. BCH fork: **August 1, 2017** (block 478,558)
9. SegWit + Taproot are **soft forks** (don't say hard)

---

## 🏆 Power Phrases

✅ "Soft fork — backward-compatible rule tightening"
✅ "Longest cumulative-work chain wins"
✅ "Probabilistic finality, not deterministic"
✅ "Full nodes enforce validity; miners produce blocks"
✅ "100-block coinbase maturity"

❌ "Bitcoin can be controlled by miners alone"
❌ "Hard forks are more democratic"
❌ "Confirmations don't matter"
❌ "Mempool is part of consensus"

---

## ✏️ Quick Self-Check

1. Difficulty adjustment cadence? ___
2. Soft vs hard fork in one sentence each? ___
3. Confirmation count for $1M payment? ___
4. Mainnet port? ___
5. What did the BCH fork change? ___

➡️ [Module 4: Wallets, Keys & Self-Custody](../Module-04-Wallets-Keys-Self-Custody/Reading.md)
