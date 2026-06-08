# 📋 Module 7 Cheat Sheet: Lightning Network & Layer-2

---

## ⚖️ Why L2 Exists (the trilemma resolution)

- Bitcoin L1: ~7 tps, ~10-min finality, maximizes **security + decentralization**
- L2 protocols: high throughput, settle to L1 periodically
- Lightning is **NOT** a sidechain, channels are anchored in regular Bitcoin txs

---

## 🔌 Payment-Channel Lifecycle

| Step | What Happens | On / Off Chain |
|------|--------------|----------------|
| **Open** | Fund 2-of-2 multi-sig output | On-chain (1 tx) |
| **Update** | Sign successive commitment txs | Off-chain (∞ txs) |
| **Close (cooperative)** | Both sign final state | On-chain (1 tx) |
| **Close (force)** | One party broadcasts last commitment | On-chain + CSV wait |
| **Cheat-prevention** | Old-state broadcast → counterparty claims all via revocation key | On-chain penalty tx |

🧠 **Revocation secret** = what makes cheating economically suicidal.

---

## 📐 The Foundational Paper

- **Poon & Dryja, January 14, 2016**, *"The Bitcoin Lightning Network"*
- Builds on Decker & Wattenhofer duplex channels (2015)
- Required **SegWit's malleability fix** to be possible

---

## ⚡ HTLC = Hash Time-Locked Contract

```
Carol: picks R, computes H = HASH160(R), invoices Alice with H
Alice → Bob: "X BTC if you reveal R matching H, else refund after 48h"
Bob   → Carol: "X BTC if you reveal R matching H, else refund after 24h"
Carol reveals R → Bob claims from Alice → atomic multi-hop ✅
```

- **Hash-lock**: preimage reveal = payment claim
- **Time-lock** (CSV): refund path if hop disappears
- Cascade: downstream timeout < upstream timeout

---

## 🛣️ Routing

- **Source routing**, sender picks the full path
- **Sphinx onion encryption** (Danezis & Goldberg, 2009), each hop sees only its layer
- Gossip protocol carries channel capacity + fee rates

| Metric | Meaning |
|--------|---------|
| **Capacity** | Total sats locked in channel |
| **Balance** | Split between the two ends |
| **Liquidity** | Available capacity in a direction |
| **Base fee** | Fixed sats per HTLC (0-100 typical) |
| **Fee rate** | ppm proportional (1-2000 typical) |

🎯 Routing fails when **liquidity** is gone in one direction, even if capacity is high.

---

## 📋 BOLT Specs (you should recognize)

| BOLT | What |
|------|------|
| **BOLT-2** | Peer / channel protocol |
| **BOLT-4** | Onion routing |
| **BOLT-11** | The `lnbc...` invoice format |
| **BOLT-12** | Offers (reusable, replaces 11) |

---

## 🧰 Implementations

| Impl | Maintainer | Language |
|------|-----------|----------|
| **lnd** | Lightning Labs | Go |
| **Core Lightning (CLN)** | Blockstream | C |
| **Eclair** | ACINQ | Scala |
| **LDK** | Spiral | Rust library |

```bash
# lnd basics
lncli openchannel <pubkey> --local_amt 1000000
lncli sendpayment --pay_req lnbc...
lncli closechannel --funding_txid <txid> --output_index <n>

# Core Lightning basics
lightning-cli fundchannel <id> <amount>
lightning-cli pay <bolt11>
lightning-cli close <peer>
```

---

## 🏠 Wallet Trust Spectrum (CRITICAL DISTINCTION)

| Wallet | Trust Model | Risk Class |
|--------|------------|-----------|
| Wallet of Satoshi, Strike, Cash App, Blink | **Custodial** | = exchange risk |
| Phoenix (ACINQ LSP) | LSP-assisted | Mostly self-custody |
| Breez, Mutiny | Non-custodial (LDK in-app) | Self-custody |
| Zeus, RTL | Connect to your node | Full self-custody |

🚨 Custodial Lightning ≠ self-custody. Mt. Gox-class risk.

---

## 🛡️ Watchtowers + Liquidity + Attacks

- **Watchtowers** defend against stale-commitment broadcast (BOLT 13 draft); trust-minimized via encrypted blob
- **Liquidity**: Loop in/out, submarine swaps, **splicing** (2024+), Lightning Pool / Magma, rebalancing
- **Top attacks**: channel jamming (biggest open problem 2024-26), eclipse, probing, time-dilation, selfish routing

---

## 🌐 L2 vs Sidechain vs Rollup (EXAM TRAP)

| Layer | What it is | Trust model | Example |
|-------|-----------|-------------|---------|
| **L2 payment channel** | Off-chain, anchored to L1 multisig | Bitcoin L1 security | **Lightning** |
| **Sidechain** | Separate chain, federated or merge-mined consensus | Federation / merge-miners | **Liquid, RSK** |
| **Rollup** (Eth concept) | Batch on parent chain w/ validity or fraud proofs | Parent chain + verifier | (not native to Bitcoin) |
| **Statechain** | Federated UTXO transfer | Federation | Mercury Layer |
| **Ark** | Off-chain payment pools w/ ASP coordinator | ASP semi-trusted | Ark protocol |

🎯 Lightning is L1-secured. Liquid is federation-secured. Don't conflate.

---

## 🇸🇻 El Salvador / Strike Rollout (Sept 7, 2021)

- First sovereign Bitcoin **legal-tender** law (alongside USD)
- **Chivo wallet** + **Strike** infrastructure
- **Custodial** rollout (operational simplicity > self-custody)
- ~40% citizens cashed out the initial $30 BTC promptly (BCR survey 2022)
- Bottom-up adoption at **Bitcoin Beach / El Zonte** (since 2019) was the success
- **2025 IMF loan**: legal-tender mandate partially repealed, Lightning kept working
- Lesson: **protocol-level adoption > jurisdictional adoption**

---

## ⚠️ Top Exam Traps

1. **Poon & Dryja, January 2016**, the paper, the year
2. **HTLC = Hash Time-Locked Contract** (NOT "high-throughput")
3. **BOLT-11 invoice** = `lnbc1pjk...`
4. **Lightning anchors on L1**, not a sidechain
5. **SegWit was prerequisite** (malleability fix)
6. **lnd, CLN, Eclair** = the three production implementations
7. **Watchtowers** = third-party cheat monitors (BOLT 13 draft)
8. **Liquid is a federated sidechain**, Lightning is not
9. **Channel jamming** = biggest open attack class 2024-26
10. **Splicing (2024+)** = resize channel without closing
11. **Custodial Lightning ≠ self-custody** (exchange-class risk)
12. **El Salvador 2021 / 2025**, adoption / repeal nuance

---

## 🏆 Power Phrases

✅ "Anchored to L1 via 2-of-2 multisig funding tx" · "Hash-lock for atomicity, time-lock for refund" · "Source-routed via Sphinx onion" · "Custodial wallet = exchange-class risk" · "Splicing resizes channels in-place"

❌ "Lightning is a sidechain" · "Lightning replaces Bitcoin" · "Custodial wallets are self-custody" · "Lightning has no fees"

---

➡️ [Module 8: Regulatory, Compliance & Tax](../Module-08-Regulatory-Compliance-Tax/Reading.md)
