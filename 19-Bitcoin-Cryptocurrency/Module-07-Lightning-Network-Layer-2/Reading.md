# Module 7: Lightning Network & Layer-2 ⚡

> **Why this module matters:** Bitcoin's main chain settles ~7 transactions per second with ~10-minute finality. That is by design the on-chain layer prioritizes security and verifiability over throughput. **Layer-2 protocols, especially the Lightning Network, are where Bitcoin transitions from "digital gold" to "digital cash."** This module explains how a single Bitcoin transaction can collateralize millions of off-chain payments via payment channels and why El Salvador, Strike, Cash App, and most institutional payments rails in 2026 use Lightning.

> **Prerequisites for this module.** Before starting:
> - [Module 2 (Cryptographic Foundations)](../Module-02-Cryptographic-Foundations/Reading.md), HASH160, ECDSA, Schnorr
> - [Module 3 (Network & Consensus)](../Module-03-Bitcoin-Network-Consensus/Reading.md), 10-min blocks, mempool
> - [Module 6 (Script & Programmability)](../Module-06-Bitcoin-Script-Programmability/Reading.md), SegWit malleability fix, CSV, HTLC primitives
>
> Lightning would have been *impossible* without SegWit's malleability fix. Module 6's coverage is the foundation here.

---

## ☕ A Story: A Country and Its 10-Million-Person Lightning Test

**September 7, 2021**. The Republic of **El Salvador** population ~6.5 million makes Bitcoin **legal tender** alongside the US dollar, the first sovereign nation to do so. The government's distribution strategy involves giving every citizen $30 worth of BTC via a state-issued mobile wallet called **Chivo**, which uses the **Lightning Network** as its primary payment rail.

The bet is bold: Lightning, a technology released in production by Lightning Labs only 3 years earlier, was supposed to instantly become the de-facto payments rail for a country. McDonald's, Starbucks, Pizza Hut, and Walmart operating in El Salvador accept Chivo-Lightning. So do roadside vendors who'd never previously had a payment terminal of any kind.

What actually happened over 2021-2024 was messier than the marketing suggested. **Chivo had bugs.** **Onboarding KYC was a disaster.** Many citizens immediately cashed out their $30 of BTC into USD (~40% per Bank of El Salvador surveys). The Bitcoin Beach community at El Zonte where the experiment had been bottom-up since 2019 actually adopted Lightning for daily commerce; most of the rest of the country didn't.

But the *Lightning Network itself* did something it had never done at scale: it processed a country's worth of micropayment volume reliably, with sub-cent fees and sub-second latency, alongside a national fiat payment rail. As of 2026, **Strike, Cash App, Wallet of Satoshi, Phoenix, and Breez** between them carry significantly more Lightning volume monthly than Visa carries in mid-tier corridors like US-Philippines.

That story is your first lesson: **Lightning is not a future technology. It is a deployed, working layer-2 payment network handling significant volume in 2026.** It's also a complex protocol with real failure modes, channel jamming, watchtower attacks, liquidity drains. This module covers both.

---

## ⚖️ The Scaling Trilemma, Why L2 Exists

The "blockchain trilemma" (informally coined around 2017 by Vitalik Buterin, formalized in many papers since) claims a blockchain can pick at most 2 of:

```
   Decentralization
       /\
      /  \
     /    \
    /______\
Security    Scalability
```

Bitcoin's choice: maximize decentralization + security; throughput stays at ~7 tps. The trade-off feels unworkable for retail payments. **Layer-2 protocols are the resolution: Bitcoin L1 stays the settlement layer; L2 protocols (Lightning, RGB, sidechains) handle high-frequency commerce, settling to L1 periodically.**

🎯 **MEMORIZE THIS.** Lightning is **not** a sidechain. Lightning channels are anchored in **regular Bitcoin transactions** on L1, every channel open and close is a regular Bitcoin transaction. What happens *between* open and close is off-chain.

---

## 🔌 The Payment-Channel Concept

The core insight: **two parties can exchange many payments off-chain by signing successive updates to a shared multi-sig output, and only broadcast the final state to the chain.**

```
[STEP 1: Channel open]    Alice + Bob fund a 2-of-2 multi-sig output with X BTC.
                          This is a regular Bitcoin tx on L1. 10 min to confirm.

[STEP 2: Off-chain]       Alice & Bob exchange signed "commitment transactions"
                          that distribute the X BTC differently each time.
                          They can do this 1000s of times per second, off-chain.

[STEP 3: Channel close]   When done, either party broadcasts the latest commitment
                          transaction to the chain. Settled in 10 min.
```

Three properties make this work:

1. **The funding transaction's output requires both signatures to spend.**
2. **The latest commitment transaction is signed by both parties.** Either can broadcast it unilaterally.
3. **Older commitment transactions are revoked** via a clever penalty scheme: if Bob broadcasts an old (earlier-state) commitment to cheat, Alice can use a "revocation secret" to claim *all* of Bob's channel funds.

🎯 **Exam tip.** The "revocation" mechanism penalty if you broadcast an old state is what makes Lightning trust-minimized. The economic game: cheating is detectable and severely punished.

---

## 📐 The Lightning Network Paper (Poon & Dryja, 2016)

**Joseph Poon** and **Thaddeus Dryja** published *"The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments"* in **January 2016**. The paper builds on Christian Decker and Roger Wattenhofer's earlier duplex-channel work (2015) and proposed:

1. **Bidirectional payment channels** between any two parties
2. **HTLCs (Hash Time-Locked Contracts)** that chain channels into multi-hop payments
3. **Onion routing** for privacy
4. **A network of channels** that can route payments from anyone to anyone

Production-quality implementations followed:

- **lnd** (Lightning Labs, written in Go, ~2016)
- **c-lightning / Core Lightning** (Blockstream, written in C, ~2017)
- **Eclair** (ACINQ, written in Scala, ~2017)
- **LDK** (Spiral, library-only, ~2022)

🎯 **MEMORIZE THIS.** The Poon-Dryja paper is dated January 14, 2016. CBP-tested.

---

## ⚡ HTLCs, Hash Time-Locked Contracts

To route a payment from Alice through Bob to Carol, the protocol needs a way to:

- Make Bob's payment to Carol *conditional* on Carol revealing a secret
- Make Alice's payment to Bob *conditional* on Bob revealing the same secret to Alice
- Provide a *timeout* in case Carol disappears mid-payment

The construction:

```
1. Carol generates a random secret R; computes H = HASH160(R).
2. Carol gives H to Alice (via the invoice).
3. Alice instructs her node to pay Bob, conditional on:
     "Bob receives X BTC if he reveals R such that HASH160(R) = H,
      OR the funds revert to Alice after 48 hours."
4. Bob, having received the HTLC from Alice, sets up a parallel HTLC to Carol:
     "Carol receives X BTC if she reveals R such that HASH160(R) = H,
      OR the funds revert to Bob after 24 hours."
5. Carol reveals R to claim Bob's HTLC.
6. Bob, now knowing R, claims Alice's HTLC.
```

The timeout cascade (Carol's 24h < Bob's 48h) ensures Bob always has time to claim from Alice after Carol claims from him.

🎯 **MEMORIZE THIS.** **HTLC = Hash Time-Locked Contract.** It is the cryptographic glue that turns a chain of channels into a multi-hop payment. The hash + timelock combination provides atomicity: either the whole payment succeeds, or it unwinds.

---

## 🛣️ Routing, How a Payment Finds Its Path

Lightning uses **source routing**: the sender (Alice's node) chooses the entire payment path. Why? Privacy, intermediate nodes only know about their immediate neighbors, not the full path.

The routing protocol:

1. **Each node gossips** its channel graph (channel ID, capacity, base fee, fee rate) to neighbors.
2. **Sender constructs a payment route** by graph search (Dijkstra-like, weighted by fee + reliability).
3. **Onion encryption** wraps the route layer by layer, like a packet through Tor.
4. **Each hop decrypts only its layer** and forwards the inner onion.

The Lightning protocol's onion construction is called **Sphinx** (Danezis & Goldberg, 2009), with adaptations.

### Channel-graph metrics

| Metric | Definition |
|--------|------------|
| **Capacity** | Total satoshis locked in the channel (funding tx output value) |
| **Balance** | How the capacity is split between the two parties (one side may have all or none) |
| **Liquidity** | Available capacity in a specific direction (Alice→Bob vs Bob→Alice) |
| **Channel age** | Time since the channel opened; older = more reliable |
| **Base fee** | Fixed fee per HTLC routed (typically 0-100 sats) |
| **Fee rate** | Proportional fee (ppm, parts per million; typically 1-2000 ppm) |

🎯 **Exam tip.** A channel can have full capacity but zero liquidity in one direction (all funds on one side). Routing failures often stem from liquidity gaps, not capacity gaps. CBSA tests this.

---

## 📋 The BOLT Specifications

**BOLT** = **B**asis **O**f **L**ightning **T**echnology. The open specs co-edited by Lightning Labs, Blockstream, ACINQ, and others. Stored at github.com/lightning/bolts.

| BOLT | Topic |
|------|-------|
| 0 | Introduction |
| 1 | Base protocol |
| 2 | Peer protocol (channel open, close, update) |
| 3 | Transaction format |
| 4 | Onion routing |
| 5 | Mutual close + force close |
| 6 | (Deprecated; was Hash Time-Locked Contracts) |
| 7 | P2P node and channel discovery |
| 8 | Encrypted and authenticated transport |
| 9 | Feature flags |
| 10 | DNS bootstrap |
| 11 | Invoice protocol (BOLT-11) |
| 12 | Offers (the post-BOLT-11 reusable invoice spec) |

🎯 **MEMORIZE THIS.** BOLT-11 is the invoice format you'll see as `lnbc1pjk...` strings. BOLT-12 (Offers) is the newer, reusable replacement, still rolling out.

---

## 🏠 Lightning Wallets, The Ecosystem in 2026

| Wallet | Type | Trust Model |
|--------|------|-------------|
| **Wallet of Satoshi** | Custodial | Fully custodial (you trust the provider) |
| **Strike** | Custodial | Fully custodial; integrated with US bank rails |
| **Cash App** | Custodial | Fully custodial; Block/Square infrastructure |
| **Blink (formerly Galoy)** | Custodial | Open-source; runs many community wallets |
| **Phoenix** | LSP-assisted | Non-custodial; uses ACINQ's LSP for liquidity |
| **Breez** | Non-custodial | Runs an LDK-based node internally |
| **Zeus** | Non-custodial | Connects to your own LND/CLN node |
| **RTL (Ride The Lightning)** | Self-hosted | Full self-hosted node management |
| **Mutiny** | Browser-based | LDK-in-WASM; runs in browser |

🚨 **Trap.** Custodial Lightning wallets (Wallet of Satoshi, Strike) are *not self-custody*. They're the same Mt. Gox-style risk class as a centralized exchange. Convenient for low-value, dangerous for storage. Always distinguish self-custodial vs custodial when evaluating.

---

## 🛡️ Watchtowers, Defending Against Cheaters

A user goes offline; the counterparty broadcasts an old (favorable to them) commitment transaction. If the user doesn't notice within the CSV timeout (typically 144 blocks ≈ 24 hours), the cheat succeeds.

**Watchtowers** are third-party services that monitor the chain on the user's behalf. If a cheating commitment is broadcast, the watchtower triggers the penalty transaction.

| Watchtower | Type |
|------------|------|
| Built-in to LND (eyes of satoshi style) | Self-managed |
| **The Eye of Satoshi** | Open-source standalone |
| Lightning Labs Loop / Pool | Commercial |
| Galoy / Blink | Custodial-side watchtower for hosted users |

🎯 **Exam tip.** Watchtowers can be **outsourced without trust**: the user gives the tower a privately-encrypted blob that only unlocks when the cheating tx is broadcast. The tower can verify the cheat without knowing the channel's contents. (BIP for this is in flux but documented in BOLT 13.)

---

## 🌀 Routing Failures + Liquidity Management

Lightning's hardest operational challenge: **liquidity management**. A channel might be 10 BTC total capacity but 9.99 BTC on your side → you can receive ~0.01 BTC inbound, then you're stuck.

### Liquidity-management techniques

| Technique | What it does |
|-----------|--------------|
| **Loop out** (Lightning Labs) | Swap Lightning balance for on-chain BTC; refills inbound capacity |
| **Loop in** (Lightning Labs) | Reverse, swap on-chain to Lightning |
| **Submarine swaps** | Generic cross-channel swap mechanism |
| **Splicing** | Add/remove funds from an existing channel without closing |
| **Lightning Pool** | Marketplace for inbound liquidity |
| **Magma** (Amboss) | Liquidity auction marketplace |
| **Rebalancing** | Pay yourself through the network to shift balance within your channels |

🎯 **Exam tip.** Splicing (specified in 2023, deployed 2024+) is the major UX improvement: a node operator can add or withdraw funds from a channel without closing and reopening it. Pre-splicing, every liquidity change was a channel close.

---

## 🚨 Lightning Attack Vectors

| Attack | Description | Mitigation |
|--------|-------------|------------|
| **Channel-jamming** | Attacker opens many HTLCs that never resolve; ties up your liquidity | Reputation systems; HTLC limits |
| **Eclipse attack** | Attacker isolates your node from honest peers; feeds you false chain state | Diverse peer connections; Tor / Mixnet |
| **Probing** | Attacker sends fake payments to learn your channel balances | Limit probe responses; encrypted channels |
| **Selfish routing** | Node operator drops payments selectively | Reputation scoring |
| **Time-dilation attack** | Slow your node's chain view via partition; counterparty cheats during gap | Watchtowers + sanity checks |
| **Channel-jam ban** | DOS via low-fee HTLCs that consume slots | Slot limits per peer |

🎯 **MEMORIZE THIS.** Channel jamming is currently Lightning's most-discussed open problem (2024-2026). Multiple BOLT proposals aim to address it via reputation systems and HTLC slot management.

---

## 🌐 Other Layer-2 Protocols (Briefly)

Lightning is by far the dominant Bitcoin L2. But the ecosystem includes others, CBP tests recognition of these.

| L2 | Description | Use case |
|----|-------------|----------|
| **Lightning Network** | Payment channels with HTLC routing | Payments |
| **Liquid Network** | Federated sidechain (Blockstream) | Confidential transactions, asset issuance |
| **RSK (Rootstock)** | Merge-mined sidechain | EVM-compatible smart contracts on Bitcoin |
| **Stacks** | Layered consensus (anchored to Bitcoin) | Smart contracts, sBTC bridge |
| **RGB** | Off-chain smart-contract layer with Bitcoin as commitment substrate | Tokenized assets, smart contracts |
| **Statechains** | UTXO-transfer via federated swaps | Faster L1 alternative |
| **Ark** | Off-chain payment pools | Payments without channel-jamming |
| **BitVM** | Generic computation via Bitcoin Script tricks | Theoretical / experimental |

🎯 **Exam tip.** **Liquid** is a federated sidechain, block production by a 15-of-15-ish federation, not by PoW. Faster settlement, confidential transactions. Used by exchanges for inter-exchange transfers. Different trust model from Bitcoin L1; CBP tests this.

---

## 💼 Case Study, Strike + the El Salvador Lightning Rollout (2021-2024)

**Situation.** **Strike** (founded 2019 by Jack Mallers, Chicago) is a Bitcoin-Lightning-USD app that lets users send dollars instantly worldwide via Lightning, often without the receiver knowing Bitcoin is involved. By 2021 Strike was processing significant USD-MXN, USD-PHP, and other cross-border corridor volume, orders of magnitude cheaper than Western Union or MoneyGram.

When El Salvador adopted Bitcoin as legal tender in September 2021, Strike was the chosen technology partner for the government-issued Chivo wallet's Bitcoin/Lightning rails. The plan: every Salvadoran gets $30 of BTC via Chivo, can spend it via Lightning at participating merchants.

**Decision.** Strike + the Salvadoran government chose:

- **Custodial Lightning** for citizens (operational simplicity > self-custody for initial rollout)
- **A government-run node infrastructure** (state-operated channels)
- **Onboarding via Chivo** with KYC handled by government partners (a controversial decision)
- **USD-pegged display** to soften BTC-volatility user experience

**Outcome.** Mixed-to-difficult initial reception:

- ~40% of citizens cashed out the $30 BTC to USD immediately (Bank of El Salvador survey, 2022)
- Chivo had documented identity-fraud incidents
- Adoption among small merchants was lower than projected
- BUT: Lightning volume in the country was orders of magnitude higher than pre-2021; remittance flows (~24% of Salvadoran GDP, mostly from US workers) had a new, cheaper rail
- By 2024-2025, El Salvador's BTC treasury had appreciated in value from purchase prices; however, El Salvador's situation — sovereign legal-tender status, specific political and economic circumstances, and IMF debt negotiations — is not comparable to individual or institutional investment contexts. Past government BTC holdings are cited here to illustrate a policy outcome, not as an investment recommendation.
- The Bitcoin Beach community at El Zonte (where bottom-up adoption preceded the law) showed sustainable use

**Lesson for the exam / for practitioners.** Three principles every exam tests:

1. **Adoption is a function of bottom-up demand, not top-down mandate.** El Zonte's organic adoption (Mike Peterson's NGO work, 2019-2020) was successful where Chivo's mandate was difficult.
2. **Custodial onboarding is the right initial UX for new users.** Self-custody for everyone is the long-term goal but requires education. The "Layer 0" of the stack is human, not cryptographic.
3. **Cross-border remittance is Lightning's strongest commercial case.** USD→Lightning→Local-fiat corridors (Strike US-Philippines, US-Mexico) demonstrably beat Western Union on fee and speed.

**Discussion (Socratic).**
- Q1: A small bank in Texas wants to offer USD-MXN remittances via Lightning. What's the technical + regulatory architecture? Why might they NOT do it?
- Q2: El Salvador's 2021 law was repealed (in part) in early 2025 under IMF loan negotiations. Lightning kept working. What does this say about protocol-level vs jurisdictional adoption?
- Q3: A board asks: "If 80% of Lightning volume flows through a few custodial wallets (Wallet of Satoshi, Cash App, Strike), is Lightning really decentralized?" Construct the strongest argument for and against.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Lightning replaces Bitcoin" | Lightning *settles* on Bitcoin. Without L1, Lightning has no security. |
| "Lightning is a sidechain" | No. Channels are anchored in regular Bitcoin transactions. Sidechains (Liquid, RSK) are separate. |
| "Custodial Lightning = self-custody" | No. Wallet of Satoshi, Strike, Cash App are custodial. Same risk class as an exchange. |
| "Lightning has no fees" | Lightning fees are tiny (often <$0.01 for small payments) but non-zero. Routing fees + on-chain channel open/close costs. |
| "Lightning is final on send" | Generally yes within seconds, but ambiguity exists during in-flight HTLCs. Best practice: wait for explicit settlement confirmation. |
| "Lightning works without watchtowers" | For a node always online, yes. For mobile / occasional users, watchtowers are essential. |
| "Lightning is not yet ready for production" | It's processing significant volume. The honest 2026 statement: it works for many use cases, has rough edges (channel jamming, liquidity UX). |

---

## ⚠️ Exam Traps to Watch For

1. **Poon & Dryja, January 2016.** The paper, the authors, the year.
2. **HTLC = Hash Time-Locked Contract.** Hash preimage + timelock.
3. **BOLT-11** is the BOLT-11 invoice format (`lnbc1pjk...`).
4. **Lightning anchors on Bitcoin L1.** Not a sidechain.
5. **SegWit was the prerequisite for Lightning.** Malleability fix.
6. **The 3 major implementations: lnd, CLN, Eclair.**
7. **Watchtowers** protect offline users from cheating counterparties.
8. **Liquid is a federated sidechain**, not Lightning.
9. **Channel jamming** is the most-discussed open attack class.
10. **Splicing** (2024+) lets you resize channels without closing.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Lightning Network** | Off-chain Bitcoin payment network using payment channels |
| **Payment channel** | A 2-of-2 multi-sig output backing many off-chain payments |
| **HTLC** | Hash Time-Locked Contract; the cryptographic glue of multi-hop payments |
| **BOLT** | Basis Of Lightning Technology; the spec set |
| **lnd / Core Lightning / Eclair** | The three major implementations |
| **Funding tx** | The L1 transaction that opens a channel |
| **Commitment tx** | The off-chain transaction representing current channel state |
| **Revocation secret** | What lets one party penalize the other for broadcasting old state |
| **Watchtower** | Service that monitors the chain for cheating counterparties |
| **Channel capacity** | Total satoshis in a channel |
| **Channel balance** | How capacity is split between the two parties |
| **Inbound / outbound liquidity** | Available capacity in each direction |
| **Splicing** | Add/remove funds without channel close |
| **Loop out / loop in** | Lightning ↔ on-chain swap |
| **Onion routing (Sphinx)** | Layer-by-layer encryption for routing |
| **Submarine swap** | Cross-channel atomic swap |
| **BOLT-11 invoice** | The `lnbc...` invoice format |
| **BOLT-12 offer** | Reusable, newer invoice format |
| **Liquid** | Federated sidechain (Blockstream) |
| **RSK** | Merge-mined sidechain with EVM |
| **Statechain** | Federated UTXO-transfer protocol |
| **Ark** | Off-chain payment pools (newer L2) |

---

## ✅ Module 7 Summary

You now know:

- ⚖️ The scaling-trilemma argument for why L2 exists
- 🔌 Payment-channel concept (open → off-chain updates → close)
- ⚡ HTLCs and how multi-hop payments work
- 🛣️ Routing via source routing + Sphinx onion routing
- 📋 BOLT specs and the three major implementations (lnd, CLN, Eclair)
- 🏠 Lightning wallet ecosystem (custodial vs non-custodial)
- 🛡️ Watchtowers and the cheating-prevention model
- 🌀 Liquidity management (Loop, splicing, rebalancing)
- 🚨 Attack vectors (channel jamming, eclipse, probing)
- 💼 The El Salvador / Strike case study

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 8: Regulatory, Compliance & Tax](../Module-08-Regulatory-Compliance-Tax/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 8 covers the regulatory layer wrapping Lightning (Travel Rule applicability, custodial Lightning as MSB, MiCA's stance); Module 9 covers institutional Lightning use cases.
> - Cross-course: `14-AI-Marketing` Module 7 (paid advertising) touches the payments-rail layer in marketing contexts.
> - Practice: Practice Exam 2 has 5-6 Lightning questions. Final Mock has a Lightning architecture scenario.

---

## 💬 Discussion, Socratic prompts

1. **The custodial-Lightning paradox.** ~80% of Lightning volume flows through a handful of custodial wallets (Wallet of Satoshi, Strike, Cash App). Is this a Lightning failure or a Lightning success? At what point would the centralization become a protocol concern?
2. **The channel-jamming open problem.** Channel jamming is acknowledged as Lightning's biggest open attack class. Construct a 2030 outlook: do you expect a clean solution? An acceptable mitigation? An evolution to a different L2?
3. **The Liquid vs Lightning vs RGB question.** A custodian wants to offer USDT-equivalent stablecoin services on Bitcoin's rails. Compare Liquid (federated sidechain with confidential transactions) vs Lightning (atomic swaps) vs RGB (off-chain smart contracts). Which wins at 2027?
4. **The remittance-volume question.** Strike's USD-MXN corridor handles substantial monthly volume by 2026. At what fraction of the ~$80B/year remittance corridor volume does Lightning displace Western Union? Defend your answer with the cost structure.
5. **The El Salvador retrospective.** 2025's law repeal partially reversed the legal-tender mandate but Lightning kept working. What's the right framing for institutional decision-makers contemplating "national Lightning rails"?

---

## 📚 Further Reading

- 📖 **Antonopoulos / Osuntokun / Pickhardt, *Mastering the Lightning Network*** (O'Reilly, 2021). Free on GitHub.
- 📰 **Poon & Dryja, "The Bitcoin Lightning Network"** (January 2016, lightning.network).
- 📰 **BOLT specifications** at github.com/lightning/bolts.
- 📰 **Lightning Labs blog** (lightning.engineering/posts).
- 📰 **Bitcoin Optech newsletter, Lightning Section** (bitcoinops.org).
- 📰 **Amboss + 1ML + mempool.space Lightning explorers.**
- 📰 **Galoy / Blink, Open-source Lightning wallet stack.**
- 📰 **Pickhardt & Richter, "Optimally Reliable & Cheap Payment Flows"** (2021). Min-cost flow routing.
- 🎓 **MIT 15.S12, Lecture 8** (Scaling Solutions for Bitcoin).
- 🎓 **Princeton MOOC, supplementary Lightning lecture.**
- 🎓 **Stanford CS251, Lecture 9** (Off-chain Scaling).
