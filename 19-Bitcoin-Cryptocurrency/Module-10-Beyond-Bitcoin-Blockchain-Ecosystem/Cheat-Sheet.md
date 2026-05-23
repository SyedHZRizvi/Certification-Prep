# 📋 Module 10 Cheat Sheet: Beyond Bitcoin — Broader Ecosystem

---

## 🧠 Bitcoin vs Ethereum vs Rollups

| | Bitcoin | Ethereum L1 | Ethereum Rollup (L2) |
|---|---------|-------------|---------------------|
| **State model** | UTXO | Account | Account (mirrors L1) |
| **Turing-complete** | No (by design) | Yes (EVM) | Yes |
| **Native cap** | 21M BTC (hard) | None (deflationary post-1559 conditional) | N/A — settles to L1 ETH |
| **Block time** | ~10 min | ~12 sec | Sequencer-driven, faster |
| **Consensus** | PoW | PoS (Sept 15 2022) | Inherits L1 via proofs |
| **TPS** | ~7 | ~15-30 | Hundreds to thousands |
| **Genesis** | Jan 3 2009 | July 30 2015 | Various 2021-2024 |

🧠 UTXO ≠ account. Different security profile.

---

## 🔥 EIP-1559 (August 5, 2021)

- **Base fee**: burned ⛽
- **Priority fee**: tip → validator 💰
- ETH can be **net-deflationary** when burn > issuance
- Block-by-block ±12.5% base-fee adjustment toward 15M-gas target

🧠 Most-cited Ethereum economic change.

---

## 🔀 The Merge (September 15, 2022)

| Pre-Merge (PoW) | Post-Merge (PoS) |
|----------------|-------------------|
| ASIC miners | Validators ≥32 ETH |
| 75 TWh/yr | 0.01 TWh/yr |
| 13K ETH/day issued | ~1.7K ETH/day |
| Probabilistic finality | Economic finality ~12-13 min |

🧠 Beacon Chain (Dec 2020) merged with mainnet. Clean execution.

---

## 🧱 Rollups — Optimistic vs ZK

| | Optimistic | ZK |
|---|-----------|------|
| **Proof** | Fraud-provable in 7-day window | Validity proof per batch |
| **Withdrawal to L1** | ~7 days | Minutes to hours |
| **Examples** | Arbitrum, Optimism, Base | zkSync Era, Starknet, Polygon zkEVM, Linea, Scroll |

🧠 EIP-4844 / Dencun (March 13 2024) → blobs → L2 fees -90%.

---

## 💵 Stablecoin Matrix

| Type | Backing | Examples | Failure mode |
|------|---------|----------|--------------|
| **Fiat-backed** | Cash + T-bills at custodians | USDC, USDT, PYUSD | Banking outage; insolvency |
| **Crypto-collateralized** | Overcollateralized crypto in smart contract | DAI (Maker) | Collateral price crash |
| **Algorithmic** | Reflexive paired token | UST (RIP) | Death spiral |
| **Commodity** | Physical (gold/silver) | PAXG, XAUT | Custody of physical |

🧠 **UST collapse May 2022 = $40B+ in 72 hours.** Algorithmic fragility proved fatal.

---

## 💵 USDC vs USDT Snapshot

| | USDC | USDT |
|---|------|------|
| **Issuer** | Circle | Tether |
| **Regulation** | NY MTL + US-regulated | HK / BVI |
| **Attestation** | Monthly (Deloitte) | Quarterly (BDO) |
| **2026 cap** | ~$50B | ~$130B |
| **Notable depeg** | March 2023 (SVB, 48h, recovered) | Multiple, all recovered |

---

## 🏗️ DeFi Primitives (the 4 that endured)

| Primitive | Protocol | Mechanism |
|-----------|---------|-----------|
| **DEX / AMM** | Uniswap V2 (2020) → V3 (2021 concentrated liq) | `x·y=k` |
| **Lending** | Aave, Compound | Overcollateralized pools + flash loans |
| **Liquid staking** | Lido (~30% of ETH stake) | stETH derivative for staked ETH |
| **Bridges** | Wormhole, LayerZero, IBC, CCIP | Lock + mint wrapped; ~$3B aggregate losses |

🧠 Bridges = biggest attack surface in crypto.

---

## 🖼️ NFTs (ERC-721, 2018)

| Functional (signal) | Speculative (mostly noise) |
|---------------------|---------------------------|
| ENS domains | PFPs (CryptoPunks, BAYC) |
| Governance / DAO | Generative art retail bubble |
| In-game items | "Utility" roadmaps that never shipped |
| RWA tokenization (early) | |
| Bitcoin Ordinals (BTC variant) | |

---

## 🏛️ DAOs

- **The DAO (2016)** → hack → Ethereum / Ethereum Classic split
- Modern durable DAOs: **MakerDAO/Sky** (~$5B+), Uniswap DAO, ENS DAO, Optimism Collective
- Failure modes: voter apathy, delegate concentration, legal ambiguity, capture by wealthy

🧠 Wyoming DAO LLC (2021) is the rare legal-entity vehicle.

---

## 🔗 Modular Layers

| Layer | Function | Example |
|-------|----------|---------|
| Execution | Run contracts | Rollups (Arbitrum, etc.) |
| Settlement | Verify proofs | Ethereum L1 |
| Data availability | Store reconstructible data | Celestia, EigenDA, Avail |
| Consensus | Order & finalize | Ethereum PoS, Celestia |

- **Celestia** (Oct 2023) — modular DA pioneer
- **EigenLayer** (2023) — restaking, ~$10B AVS security; cascading-slashing risk

---

## 🌉 Interoperability

| Protocol | Style |
|---------|-------|
| **IBC** | Cosmos light-client (trust-minimized) |
| **LayerZero** | Configurable validator stacks (DVNs) |
| **Chainlink CCIP** | Oracle-secured messaging |
| **Axelar** | Authenticated cross-chain GMP |

---

## ⚠️ Top Exam Traps

1. **Eth mainnet July 30 2015; EIP-1559 Aug 5 2021; Merge Sept 15 2022.**
2. **Base fee burned; priority fee to validator.**
3. **Optimistic = fraud-prove; ZK = validity-prove.**
4. **EIP-4844 / Dencun March 13 2024** → blobs → L2 fees -90%.
5. **3 stablecoin types: fiat, crypto-collateralized, algorithmic.**
6. **UST = algorithmic = death spiral**; USDC = fiat-backed; DAI = crypto-collateralized.
7. **USDC March 2023 SVB depeg = 48h, recovered.** UST May 2022 = died.
8. **Uniswap V3 concentrated liquidity (May 2021).**
9. **Bridges have lost ~$3B cumulatively.**
10. **Lido = ~30% of staked ETH** = top centralization concern.

---

## 🏆 Power Phrases

✅ "Reflexive death spiral" (UST)
✅ "Validity proof per batch" (ZK rollups)
✅ "Net-deflationary supply schedule" (EIP-1559 conditional)
✅ "Sequencer decentralization" (rollup roadmap)
✅ "Restaking with cascading-slashing risk" (EigenLayer)
✅ "Smart-contract + oracle + governance risk replaces counterparty risk"

❌ "All stablecoins are equivalent"
❌ "Ethereum is Bitcoin++"
❌ "DeFi has no counterparty risk"
❌ "Bridges are safe"
❌ "Algorithmic stablecoins work at scale"

---

➡️ [Capstone Project](../Capstone-Project.md) — integrate Modules 1-10
➡️ [Recommended Readings](../Recommended-Readings.md) — go deeper
