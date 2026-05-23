# Module 3: Bitcoin Network & Consensus 🌐

> **Why this module matters:** Bitcoin is a network of ~50,000–100,000 mutually distrustful nodes that — without a central coordinator — agree on the contents of the next block every ten minutes, have done so for 17 years, and have done so without unscheduled downtime since 2013. This module is how. Every later module (mining, scripts, Lightning, custody) inherits the consensus rules defined here.

> **Prerequisites for this module.** Before starting:
> - [Module 1](../Module-01-Bitcoin-White-Paper-Origins/Reading.md) — what the white paper claims
> - [Module 2](../Module-02-Cryptographic-Foundations/Reading.md) — hashes, signatures, Merkle trees
>
> Useful to have, but not required: the *Byzantine Generals Problem* (Lamport, Shostak, Pease, 1982) — Bitcoin's Nakamoto consensus is a probabilistic solution.

---

## ☕ A Story: The Network That Refused to Stop

On the morning of **March 11, 2013**, a bug in Bitcoin Core version 0.8 — released two weeks earlier — caused the network to **fork**. Roughly half of all nodes were running v0.8 (which used the new BerkeleyDB storage backend) and accepted a particular large block at height **225,430**. The other half were running v0.7 (with the old storage backend) and rejected the same block as exceeding the database's lock limit.

For about **6 hours**, two parallel Bitcoin chains existed simultaneously. Exchanges (Mt. Gox, BTC-China) suspended deposits. Mining pools were on opposite sides of the fork. The fork was a *consensus bug*, not a malicious attack — but for those 6 hours, **the Bitcoin network was effectively split**.

What happened next is one of the most important governance moments in Bitcoin's history. Gavin Andresen, BTC Guild's lead developer Eric Lombrozo, and Slush Pool's operators got on IRC. They quickly diagnosed that the v0.8 chain was technically "correct" by the new code's rules, but the v0.7 chain was where the majority of *value* (exchanges, merchants, users) sat. They made a controversial call: **the v0.8 nodes would downgrade to v0.7 and abandon their (longer) chain in favor of the v0.7 chain.**

Slush Pool and BTC Guild — about **50% of network hashrate at the time** — stopped mining on the v0.8 chain. Within hours the v0.7 chain caught up and overtook. Bitcoin was reunified at block **225,439**. The bad blocks were abandoned. 24 BTC of mining rewards on the abandoned chain were lost.

The 0.8/0.7 fork is the canonical case of **emergent governance in a decentralized system**. There was no committee vote. There was no governance token. There was a Skype call, an IRC channel, and a network of humans who agreed in real time which chain represented Bitcoin. Then they enforced their agreement with their hash power.

That story is your first lesson: **consensus isn't a property of the protocol alone. It's a property of the social network *running* the protocol. The math handles the easy 99.99% of the time. The remaining 0.01% — the hard forks, the bug responses, the contentious upgrades — is governed by the humans on call.**

This module is the protocol layer. Module 8 returns to the regulatory layer that wraps it.

---

## 🔌 The Bitcoin P2P Network — Topology

A "full node" is any computer running Bitcoin Core (or one of the compatible alternatives: btcd, Knots, libbitcoin) and accepting incoming connections.

| Component | Count (2026 estimates) | Source |
|-----------|------------------------|--------|
| Reachable full nodes (listening) | ~15,000–20,000 | Bitnodes.io, Luke-jr's snapshot |
| Total full nodes (incl. behind NAT) | ~50,000–100,000 | Researchers' estimates |
| Lightning nodes | ~12,000 public + tens of thousands private | mempool.space, 1ML |
| Mining pools (significant) | ~10–12 | Hashrate trackers |
| Reachable archival nodes | ~70% of reachable nodes | Hold full historical chain |
| Pruned nodes (don't keep all history) | ~30% of reachable nodes | Disk-constrained users |

🎯 **MEMORIZE THIS.** Reachable nodes ≈ 15K. Total nodes ≈ 50–100K. Decentralization isn't a marketing claim; it's a measurable network property.

### Node default port + protocol

- **Mainnet** TCP port 8333. Plaintext binary protocol. No TLS (see Module 2 Heartbleed discussion).
- **Testnet3** port 18333. **Signet** port 38333. **Regtest** port 18444.
- Modern peer discovery via **DNS seeds** (hardcoded list of high-availability nodes) → exchange `addr` messages.
- Some nodes also accept Tor and I2P connections for privacy.

### What a full node DOES

| Action | Detail |
|--------|--------|
| Validate every block since Genesis | ~750 GB chain as of 2026 |
| Validate every transaction in mempool | Up to ~300 MB mempool |
| Relay valid transactions | Best-effort gossip |
| Relay valid blocks | Compact-block relay (BIP-152) |
| Reject invalid txs/blocks | Refuse to forward |
| Maintain UTXO set | ~7–10 GB indexed |
| Optionally: serve light clients | BIP-37 bloom filters (legacy) or Compact Block Filters (BIP-157/158) |

🚨 **Trap.** A miner is **not necessarily** a full node. Many small miners delegate validation to their pool. The pool runs a full node and pays out hash power. CBP tests this distinction.

---

## 📦 The Anatomy of a Block

| Field | Size | Meaning |
|-------|------|---------|
| Magic bytes (mainnet) | 4 B | `0xF9 0xBE 0xB4 0xD9` — frames the message |
| Block size | 4 B | Total size in bytes |
| **Block header** (80 B) | 80 B | See below |
| Transaction count (varint) | 1–9 B | Number of transactions |
| Transactions | Variable | Coinbase + user transactions |

### The 80-byte block header (Module 2 recap)

```
Version          4 bytes
Previous block   32 bytes
Merkle root      32 bytes
Timestamp        4 bytes (Unix seconds)
Bits (target)    4 bytes (compact difficulty encoding)
Nonce            4 bytes
─────────────────────────
Total           80 bytes
```

The **double-SHA-256 of the 80 bytes** is the block hash, which must be ≤ the current target.

### The first transaction: coinbase

Every block's transaction[0] is the **coinbase transaction**:
- Has no inputs (or rather: one "input" that's a placeholder with arbitrary data — the "coinbase field")
- Outputs the **block subsidy + total fees** to addresses chosen by the miner
- The coinbase field can contain arbitrary data — historically used for messages (Genesis block's *Times* headline), version signaling (BIP-9 bits), AsicBoost reservation, and pool branding

🎯 **Exam tip.** The block subsidy is the *only* mechanism that creates new BTC. Halvings reduce the subsidy; eventually (around 2140) the subsidy becomes 0 and miners earn only fees.

---

## 🧾 The Anatomy of a Transaction

```
Tx
├── Version         (4 bytes)
├── Input count     (varint)
├── Inputs[N]
│   ├── Previous TxID    (32 bytes)
│   ├── Output index     (4 bytes)
│   ├── ScriptSig length (varint)
│   ├── ScriptSig        (variable)
│   ├── Sequence         (4 bytes)
│   └── Witness (SegWit) (optional; in witness, not in legacy tx)
├── Output count    (varint)
├── Outputs[M]
│   ├── Value (sats)     (8 bytes)
│   ├── ScriptPubKey len (varint)
│   └── ScriptPubKey     (variable; the "locking script")
└── Locktime        (4 bytes)
```

Module 6 returns to ScriptSig and ScriptPubKey in detail. For this module, the key facts:

- **Each input references a previous output (UTXO) by `(TxID, index)`** — the UTXO model.
- **The signature is in the ScriptSig (legacy) or the witness (SegWit/Taproot)** — Module 6 unpacks why this separation matters.
- **TxID (legacy) is double-SHA-256 of the serialized transaction including signatures**. For SegWit transactions, the TxID excludes witness data (which is committed separately).
- **Locktime** can prevent the transaction from being mined before a certain block height or time.

### Inputs > outputs by design

In every transaction (except coinbase): `sum(inputs) - sum(outputs) = fee`. The fee is implicit, not an explicit field. Miners receive the fee in the coinbase of the block.

🚨 **Trap.** "Change" is *not* a special concept; it's just another output back to a fresh address you control. Most wallets generate change addresses on every spend (Module 4).

---

## 🌊 Transaction Propagation

When you broadcast a transaction:

1. Your wallet sends `tx` to one or more nodes (your local node, an Electrum server, or a wallet provider).
2. Each receiving node validates the transaction against the **mempool acceptance rules** (signatures valid, no double-spend, not too small a fee, etc.).
3. Accepting nodes relay `inv` (inventory) messages to peers; peers request the actual `tx` if they don't have it.
4. Propagation across the network completes in **2–10 seconds** on average.
5. The transaction sits in mempools until a miner includes it in a block.

### The mempool is not a single thing

Each node has its own mempool. Default Bitcoin Core mempool capacity is **300 MB**. Under fee pressure (e.g., during the 2017 December peak, the 2024 inscription mania), nodes evict the lowest-fee transactions to make room. This means a transaction can be in some nodes' mempools and not others'.

🎯 **Exam tip.** The mempool is **not** consensus state. Consensus is over blocks. Mempools are best-effort caches of pending transactions.

### Replace-By-Fee (RBF) and CPFP

| Mechanism | What it does | Spec |
|-----------|--------------|------|
| **RBF (Replace-By-Fee)** | Sender broadcasts a replacement tx with a higher fee; nodes drop the original | BIP-125 |
| **CPFP (Child-Pays-For-Parent)** | Receiver (or sender) creates a new tx that spends the stuck tx's output with a high fee; miners include both | No BIP — emergent strategy |

🚨 **Trap.** "0-conf is safe" is false in an RBF world. Don't accept 0-confirmation payments for irreversible goods/services. Wait for at least 1 confirmation; for institutional risk, 6 is the conventional standard (≈1 hour).

---

## ⚖️ Nakamoto Consensus — the Heart of the System

The Bitcoin white paper §5 defined a 6-step rule. Here are the modern restatement.

### The 5 rules every full node enforces

1. **Block headers must satisfy the proof-of-work target.** Compute the 80-byte block header's double-SHA-256; verify it's ≤ target.
2. **Every transaction must be valid.** Signatures verify, no double-spends, scripts succeed, no creation of money out of thin air.
3. **The block builds on the current best chain.** The "previous block hash" field must reference a known block.
4. **The longest cumulative-work chain wins.** When two competing chains exist, the one with the highest summed difficulty across all blocks is "best."
5. **All transactions in a block must respect the supply schedule + fee rules.** Coinbase ≤ subsidy + fees.

### What Nakamoto consensus gives you (and what it doesn't)

| Property | Status |
|----------|--------|
| Safety (no double-spend on confirmed transactions) | **Probabilistic**, strengthens with confirmations |
| Liveness (transactions eventually included) | Yes, modulo fee competition |
| Deterministic finality (point at which a tx cannot be reversed) | **NO** — this is the key distinction from BFT consensus |
| Censorship resistance | Yes, modulo individual miners' behavior |
| Sybil resistance | Yes, via proof-of-work cost |

🎯 **MEMORIZE THIS.** **Nakamoto consensus does not have deterministic finality.** It has *probabilistic* safety that strengthens exponentially with confirmations. After 6 confirmations (~1 hour), the probability of reversal under a 30% attacker is < 0.1%. This is fundamentally different from BFT consensus (PBFT, Tendermint, HotStuff) which gives deterministic finality after a single round.

### Confirmation guidance (industry rule of thumb)

| Transaction value | Confirmations to wait |
|--------------------|----------------------|
| < $1,000 | 1 confirmation (~10 min) |
| $1K–$100K | 3 confirmations (~30 min) |
| $100K–$1M | 6 confirmations (~1 hour) |
| > $1M | 6–12 confirmations |
| Coinbase (newly-minted) | **100 confirmations required by consensus** before spendable |

🚨 **Trap.** Coinbase transactions are special: they have a **100-block maturity** — a miner cannot spend their block reward until 100 blocks have been mined on top. This protects against block-reorganizations affecting newly-issued coins.

---

## 🌀 Difficulty Adjustment

The protocol targets **one block every 10 minutes on average**. To hold this average as hashrate changes, the difficulty target adjusts every **2,016 blocks** (≈2 weeks):

```
new_difficulty = old_difficulty × (2016 × 10 min) / (actual_time_for_last_2016_blocks)
```

Capped at ±4× per adjustment to prevent dramatic swings.

### Worked example

If the last 2016 blocks took 12 days instead of 14 days (hashrate increased), the next adjustment makes blocks harder by:

```
factor = 14 days / 12 days = 1.167x
```

Difficulty rises by ~16.7%. Going the other way: if hashrate drops 50%, blocks slow until the adjustment (~4 weeks of pain), then difficulty drops up to 4×.

🎯 **Exam tip.** The adjustment cadence is **2,016 blocks ≈ 2 weeks**. Not 1,000. Not 2,000. **2,016 blocks.** It's chosen because 2 weeks × 24 hours × 6 blocks/hour = 2,016.

---

## 🍴 Forks: Soft vs Hard

A **fork** is any change to consensus rules. There are two kinds, and the difference is binary on the exam.

### Soft fork (backward-compatible tightening)

A **soft fork** restricts the previously-valid set of blocks. Non-upgraded nodes still accept the new (subset of) blocks as valid. As long as miners with majority hashpower enforce the new rules, the chain stays unified.

**Examples (CBP tests these):**
- **P2SH (BIP-16)** — April 2012
- **CLTV, CSV** — 2015-2016
- **SegWit (BIPs 141, 143, 144)** — August 2017
- **Taproot (BIPs 340, 341, 342)** — November 2021

### Hard fork (rule loosening / change)

A **hard fork** changes the rules in a way that *invalidates* previously-valid blocks (or makes previously-invalid blocks valid). Non-upgraded nodes reject the new chain → permanent network split.

**Examples (CBP tests these):**
- **Bitcoin Cash (BCH) hard fork** — August 1, 2017 (block 478,558). Increased block size to 8 MB.
- **Bitcoin SV (BSV) hard fork** — November 15, 2018. Increased BCH block size further.
- **Ethereum DAO fork** — July 2016. Reversed the DAO hack; minority chain became Ethereum Classic (ETC).

| Comparison | Soft Fork | Hard Fork |
|------------|-----------|-----------|
| Backward compatible? | Yes — old nodes accept new blocks | No — old nodes reject new blocks |
| Activation requires | Majority of miner hash power | Coordinated upgrade of all nodes |
| Splits the chain? | No (unless miners disagree) | Yes — permanent two-chain split |
| Examples | P2SH, SegWit, Taproot | Bitcoin Cash, Bitcoin SV |
| Bitcoin's preference | **Strong** — soft forks only since 2017 | Avoided |

🎯 **MEMORIZE THIS.** Bitcoin Core's strong cultural preference is soft forks. The last hard fork in the Bitcoin "family" was the **Bitcoin Cash split (August 2017)**. SegWit (the same month) was a soft fork that BCH-side rejected, triggering the chain split.

---

## 💼 Case Study — The Bitcoin Cash Hard Fork (August 1, 2017)

**Situation.** Bitcoin's blocks were filling up. Average fees had climbed from ~$0.10 in 2014 to ~$3 in late 2016 and ~$30 at peaks in 2017. Two factions had been arguing for years about how to scale: the **"big blockers"** wanted to raise the 1 MB block size to 8 MB or higher (simple, but breaks compatibility — hard fork). The **"small blockers" + SegWit camp** wanted to keep 1 MB but rearrange transaction format to fit more transactions (compatibility-preserving — soft fork, eventually plus Lightning).

**Decision.** After two years of acrimonious debate ("Block Size Wars"), the small-block / SegWit faction activated **SegWit via BIP-141** in **August 2017** as a soft fork. The big-block faction — led by Bitmain's Jihan Wu, Roger Ver, and Amaury Séchet — broke off and **forked the chain at block 478,558 on August 1, 2017**, creating **Bitcoin Cash (BCH)**.

**Outcome.** Two chains exist post-fork. Anyone with BTC before block 478,558 received an equal amount of BCH automatically. Over the following years:
- Bitcoin (BTC) market cap grew ~30× from August 2017 to peak (Nov 2021).
- Bitcoin Cash (BCH) market cap declined as a fraction of BTC's, ultimately settling around 1–3%.
- A further BCH faction split off in November 2018, forming **Bitcoin SV (BSV)** under Craig Wright.
- A second BCH split (BCH-ABC vs eCash / XEC) followed in November 2020.

**Lesson for the exam / for practitioners.** Three principles every exam tests:
1. **Hard forks create permanent chain splits.** Unlike soft forks, where non-upgrading nodes still see the chain, hard-fork dissenters get their own chain *and* their own coin (and the market decides which has value).
2. **The market — not the hashrate — decides the "real" chain.** BCH had significant hashpower at fork time (Bitmain pointed mining capacity at it). The market priced BTC at ~10× BCH within months.
3. **Soft-fork governance has lower coordination cost than hard-fork governance.** Every Bitcoin Core upgrade since SegWit has been a soft fork (Taproot in 2021, etc.). The BCH faction's experience — repeated re-splitting, market irrelevance — is the cautionary tale Bitcoin Core developers cite when justifying soft-fork-only governance.

**Discussion (Socratic).**
- Q1: Imagine BCH had captured 60% of BTC's market cap by 2026 instead of <5%. Would Bitcoin Core's "soft forks only" culture be defensible? At what market-share threshold should the calculus change?
- Q2: A board member argues "we should custody both BTC and BCH because anyone with BTC pre-fork got BCH automatically — it's an asset." What's the institutional policy you defend, and how do you handle a *future* fork in your custody architecture?
- Q3: BCH's pitch was "Bitcoin should be electronic cash; small blocks made it digital gold." Module 7 (Lightning) is in some ways a counter-argument: keep L1 as gold, use L2 for cash. Which framing is more durable, and why?

---

## 🌐 The Three "Confirmations" of a Bitcoin Transaction

A transaction's life cycle has three distinct states. CBP tests the vocabulary.

| State | Description | Trust level |
|-------|-------------|--------------|
| **Unconfirmed (in mempool)** | Broadcast, gossiped, sitting in mempools awaiting inclusion | 0-conf — not safe |
| **Confirmed in 1 block** | Included in the latest block | 1-conf — small-value safe |
| **Confirmed in 6+ blocks** | 6 blocks have been mined on top | "Final" for ~all institutional purposes |

🎯 **Exam tip.** "Confirmation count" = number of blocks built on top, INCLUDING the block your tx is in. So a tx in the most recent block has 1 confirmation. A tx in block N has `(current_height − N + 1)` confirmations.

---

## 🪞 Chain Reorgs

A **reorg** (reorganization) happens when a node receives a longer chain that doesn't include some of the blocks it previously thought were canonical. The node:

1. Switches to the new chain
2. Un-confirms transactions only on the abandoned chain
3. Re-confirms transactions on both chains where they appear
4. Returns abandoned-only transactions to the mempool

Small reorgs (1–2 blocks) happen occasionally — usually when two miners find a block at nearly the same time. Big reorgs (3+ blocks) are rare and concerning.

| Reorg size | Frequency on mainnet | Implication |
|------------|----------------------|-------------|
| 1 block | Several per week | Routine; reflects network propagation latency |
| 2 blocks | Few per month | Worth noting; often during difficulty-adjustment volatility |
| 3+ blocks | Rare (~few per year) | Investigate. Often associated with a malicious actor or a major outage |
| 6+ blocks | Extremely rare | Existential — never observed on Bitcoin mainnet post-2013 |

🎯 **MEMORIZE THIS.** The deepest reorg in Bitcoin's history (excluding the 0.8/0.7 fork) is **53 blocks** in March 2013 — and that was a coordinated rollback to abandon a buggy chain. Under normal operation, reorgs are 1–2 blocks.

---

## 📡 Compact Block Relay (BIP-152)

Naively, when a miner finds a new block, they broadcast the whole block (~1–4 MB) to peers, who must then re-validate every transaction. This wastes bandwidth: most peers already had most of the transactions in their mempool.

**BIP-152 (compact block relay)** ships the block header + short transaction IDs. Peers reconstruct the block from their mempool and only request missing transactions. Net effect: a new block typically takes < 1 second to propagate globally instead of several seconds.

🎯 **Exam tip.** Compact block relay was proposed by Matt Corallo in 2016. Combined with FIBRE (Fast Internet Bitcoin Relay Engine) and Stratum's network of high-availability relays, it keeps Bitcoin's propagation latency low even as the network grows.

---

## 🏛️ Frameworks from Princeton & MIT

### CAP Theorem and Bitcoin (Brewer, 2000)
- **C**onsistency, **A**vailability, **P**artition tolerance — pick 2 of 3 in a distributed system.
- Bitcoin chooses **AP** during partitions (Availability + Partition tolerance), with **eventual consistency**. When the network partitions, each side keeps mining; when partition heals, the longest-cumulative-work chain wins.

### FLP Impossibility (Fischer, Lynch, Paterson, 1985)
- Deterministic consensus is impossible in an asynchronous system with even one faulty node.
- Bitcoin sidesteps this with: (a) probabilistic finality (not deterministic), (b) economic incentives that make Byzantine behavior costly.

### Byzantine Generals Problem (Lamport et al., 1982)
- N parties must agree despite up to f of them being Byzantine. Classical BFT solutions need N ≥ 3f + 1.
- Bitcoin is *not* a classical BFT solution. It's a probabilistic solution where economic cost replaces deterministic safety guarantees — sometimes called **"Nakamoto-style consensus"** to distinguish it.

🎯 **Exam tip.** Princeton and Stanford coursework loves the question *"how does Nakamoto consensus differ from classical BFT?"* Answer: classical BFT has deterministic finality and works in a permissioned setting. Nakamoto consensus has probabilistic finality, works in a permissionless setting, and replaces trusted-quorum assumptions with economic-cost assumptions.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Bitcoin transactions are final after one confirmation" | Probabilistic — final-enough for $1K, not for $1M. Convention is 6 confs (~1 hour) for institutional. |
| "Miners control consensus" | Miners produce blocks; *full nodes* validate them. Miners can produce invalid blocks but they'll be rejected. |
| "If 51% of miners attack, Bitcoin is broken" | A 51% attacker can double-spend recent confirmations and censor. They CANNOT inflate supply, steal coins, or change protocol rules. |
| "Bitcoin scales by raising the block size" | Raising block size is a one-time, ~constant-factor win. Scale primarily comes from L2 (Lightning, Module 7). |
| "A hard fork is more democratic than a soft fork" | Hard forks impose a choice on everyone; minority chains are economically marginalized. Soft forks let dissenters keep using the protocol. |
| "Bitcoin consensus is based on majority hashpower vote" | Hashpower determines which valid chain becomes canonical. **Validity** is determined by every full node. |
| "0-conf transactions are safe for coffee" | Only safe if RBF is disabled (rare) AND the merchant accepts the small chargeback risk (Lightning is the right answer for coffee). |
| "Bitcoin can be shut down by banning mining" | China's 2021 ban did not shut down Bitcoin — hashrate relocated to US, Kazakhstan, Russia within 6 months. |

---

## ⚠️ Exam Traps to Watch For

1. **Soft fork vs hard fork.** Don't confuse the two. SegWit = soft (compatibility-preserving). BCH = hard (chain split).
2. **2,016-block adjustment.** Not 2,000. Not 2,500. **2,016 blocks ≈ 2 weeks.**
3. **Coinbase 100-block maturity.** A miner cannot spend block reward for 100 blocks (~16 hours). Tested often.
4. **Block-header size.** Always 80 bytes regardless of N transactions.
5. **Magic bytes.** Mainnet = `0xF9 0xBE 0xB4 0xD9`. Testnet differs.
6. **Confirmations include the block your tx is in.** So 1 confirmation = first inclusion.
7. **Mempool ≠ consensus.** Every node has its own mempool; the chain is consensus.
8. **0.8/0.7 fork (March 2013) is the textbook governance case** — humans on IRC coordinated a rollback.
9. **Nakamoto consensus ≠ BFT consensus.** Probabilistic finality, not deterministic. Use this language on the exam.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Full node** | Validates and stores every block and transaction since Genesis |
| **SPV / light client** | Validates only headers + Merkle proofs |
| **Mempool** | Per-node cache of unconfirmed transactions |
| **Coinbase tx** | First tx in a block; creates new BTC for the miner |
| **Coinbase maturity** | 100-block waiting period before coinbase output is spendable |
| **Confirmation** | Number of blocks built atop a tx, inclusive of its own block |
| **Reorg** | Chain reorganization; node switches from one chain to a longer one |
| **Difficulty adjustment** | Every 2,016 blocks; recalibrates target so blocks average 10 min |
| **Soft fork** | Backward-compatible rule tightening (SegWit, Taproot) |
| **Hard fork** | Non-backward-compatible rule change; splits the chain (BCH, BSV) |
| **Compact block relay** | BIP-152; sends short tx IDs, peers reconstruct from mempool |
| **DNS seeds** | Hardcoded high-availability nodes for initial peer discovery |
| **RBF (BIP-125)** | Replace-By-Fee; sender can replace unconfirmed tx with higher-fee version |
| **CPFP** | Child-Pays-For-Parent; receiver creates new high-fee tx that spends stuck output |
| **Nakamoto consensus** | Probabilistic, longest-cumulative-work consensus |
| **BFT consensus** | Byzantine Fault Tolerant; deterministic-finality consensus (PBFT etc.) |
| **51% attack** | Attacker with majority hashpower; can double-spend, censor; cannot inflate or steal |
| **Magic bytes** | 4-byte network prefix on Bitcoin messages |

---

## ✅ Module 3 Summary

You now know:

- 🔌 The P2P network topology — ~15K reachable nodes, port 8333, plaintext binary protocol
- 📦 The 80-byte block header structure and the coinbase transaction
- 🧾 Transaction anatomy — inputs, outputs, ScriptSig, ScriptPubKey, locktime
- 🌊 How transactions propagate: mempool → block inclusion → confirmations
- ⚖️ The 5 consensus rules every full node enforces
- 🌀 Difficulty adjustment every 2,016 blocks targeting 10-minute blocks
- 🍴 Soft fork (SegWit, Taproot) vs hard fork (BCH, BSV) — including the August 2017 split
- 💼 The 0.8/0.7 fork (March 2013) and Bitcoin Cash hard fork as governance case studies
- 🏛️ How Nakamoto consensus differs from classical BFT (probabilistic vs deterministic finality)

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md) — aim for 20/24 minimum
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: Wallets, Keys & Self-Custody](../Module-04-Wallets-Keys-Self-Custody/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 4 builds wallets that respect the consensus rules defined here; Module 5 quantifies the proof-of-work backing each block; Module 6 unpacks the ScriptPubKey introduced here; Module 7 builds Lightning channels on top of Bitcoin's settlement layer.
> - Cross-course: `09-CompTIA-Security-Plus` Module-09 (Architecture) covers distributed-system patterns that complement Nakamoto consensus.
> - Practice: Practice Exam 1 has 5–7 questions drawing from this module (fork types, confirmation counts, mempool behavior). Final Mock has scenario questions on chain reorgs and consensus failures.

---

## 💬 Discussion — Socratic prompts

1. **The 0.8/0.7 governance precedent.** In March 2013 a small group of developers and miners coordinated on IRC to abandon a longer chain in favor of the previously-canonical chain. Was this a vindication of decentralization (small social network responded effectively) or a violation (a few people decided for everyone)? How does your answer change at $10K/BTC vs $100K/BTC vs $1M/BTC?
2. **Probabilistic vs deterministic finality.** PBFT-style chains (Cosmos, HotStuff) have deterministic finality after a single round (~1-2 seconds). Bitcoin's probabilistic finality takes ~1 hour for the same confidence. What does Bitcoin gain by giving up deterministic finality, and at what value-at-risk does the trade-off favor PBFT-style chains?
3. **The big-block / small-block debate revisited.** The BCH fork was 9 years ago in 2026. SegWit + Lightning won the technical debate; BCH market-share lost the financial debate. Construct the strongest argument that the small-block / Lightning camp made the right call AND the strongest argument they didn't. What would have happened if both camps had agreed to a 4 MB compromise in 2016?
4. **51% attack as a market event.** Quantify: if Bitcoin's hashrate is 600 EH/s and an attacker rents that much from AWS-equivalent, what's the per-hour cost? At what BTC price is the cost-benefit clearly negative? Use back-of-envelope numbers — perfection isn't required, defensible reasoning is.
5. **Hard-fork-as-asset-class question.** Should an institutional Bitcoin custodian hold the hard-fork coin (BCH, BSV) automatically delivered to its custody clients post-fork? Custody risk, audit risk, regulatory risk — work through each.

---

## 📚 Further Reading (Optional)

- 📖 **Nakamoto White Paper §5 (Network)** and §11 (Calculations).
- 📖 **Antonopoulos — *Mastering Bitcoin* 2e** — Chapter 6 (Transactions), Chapter 8 (The Bitcoin Network), Chapter 10 (Mining and Consensus).
- 📖 **Narayanan et al. — *Bitcoin and Cryptocurrency Technologies*** — Chapter 2 (How Bitcoin Achieves Decentralization), Chapter 3 (Mechanics of Bitcoin).
- 📖 **Pacia, Chris — *Anonymous Crypto-Currency Network*** (2016 blog post). The clearest plain-English description of mempool dynamics.
- 📰 **BIP-9, BIP-148, BIP-91** at github.com/bitcoin/bips — version-bits signaling and the SegWit activation drama.
- 📰 **BIP-152** — compact block relay.
- 📰 **Bitcoin Optech newsletter — Block Size Wars archive** (bitcoinops.org).
- 📰 **Bier, Jonathan — *The Blocksize War: The Battle for Control over Bitcoin's Protocol Rules*** (2021). Best book-length history of the BCH fork.
- 🎓 **MIT 15.S12 — Lecture 4** (Blockchain Basics: Consensus).
- 🎓 **Stanford CS251 — Lecture 4–5** (Decentralization, Bitcoin Network).
