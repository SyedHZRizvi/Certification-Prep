# 📋 Module 1 Cheat Sheet: The Bitcoin White Paper & Origins

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📜 The Document Itself

| Field | Value |
|-------|-------|
| Title | *Bitcoin: A Peer-to-Peer Electronic Cash System* |
| Author | "Satoshi Nakamoto" (pseudonymous) |
| Date | **October 31, 2008** |
| Venue | metzdowd.com Cryptography Mailing List |
| Length | **9 pages** (12 sections + abstract + references) |
| Free at | bitcoin.org/bitcoin.pdf |

---

## 🧬 The 4 Cypherpunk Ancestors

| Year | System | Author | Contribution |
|------|--------|--------|--------------|
| 1983 | eCash | David Chaum | Blind signatures for privacy |
| 1997 | **Hashcash** | **Adam Back** | **PoW (cited by Satoshi)** |
| 1998 | **b-money** | **Wei Dai** | **PoW currency sketch (cited by Satoshi)** |
| 1998 | Bit Gold | Nick Szabo | Chained PoW (NOT cited) |

🧠 Memory: "**eCash → Hashcash → b-money → Bit Gold**", chronological cypherpunk ladder.

---

## 🎯 The 12 White-Paper Sections

```
Abstract     · The one-paragraph thesis
§1  Intro    · Trust-minimization argument
§2  Trans    · Coin = chain of signatures
§3  Stamp    · Linked timestamp server (Merkle 1979)
§4  PoW      · Hashcash adoption ("one CPU one vote")
§5  Network  · 6-step node algorithm
§6  Incentive· Coinbase + fees post-21M
§7  Disk     · Merkle pruning
§8  SPV      · Light clients via Merkle proofs
§9  Combine  · Multi-input / multi-output tx
§10 Privacy  · Pseudonymous public keys
§11 Calcul.  · 51% attack math (→ 6-conf rule)
§12 Concl.   · One paragraph
```

---

## 🪙 The Genesis Block (memorize)

| Field | Value |
|-------|-------|
| Height | 0 |
| Date | **2009-01-03 18:15:05 UTC** |
| Coinbase message | "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" |
| Reward | 50 BTC (**UNSPENDABLE**, quirk in code) |
| Nonce | 2083236893 |

---

## 🧮 The Halving Schedule

| Halving | Block | Date | Subsidy |
|---------|-------|------|---------|
| 0 | 0 | 2009 | 50 BTC |
| 1 | 210,000 | 2012-11 | 25 BTC |
| 2 | 420,000 | 2016-07 | 12.5 BTC |
| 3 | 630,000 | 2020-05 | 6.25 BTC |
| **4** | **840,000** | **2024-04** | **3.125 BTC** |
| 5 | 1,050,000 | ~2028 | 1.5625 BTC |
| ... | ... | ~2140 | 0 (subsidy ends) |

🧠 Memory: "21M asymptotic", exact is 20,999,999.9769 BTC.

---

## 🪙 Unit Ladder

```
1 BTC = 1,000 mBTC = 100,000 μBTC = 100,000,000 sats
```

🚨 1 msat (milli-satoshi) is **Lightning-only**, not on-chain.

---

## 🕰️ First-36-Month Timeline

| Date | Event |
|------|-------|
| 2008-10-31 | White paper |
| 2009-01-03 | Genesis block |
| 2009-01-12 | Block 170, first BTC tx (Satoshi → Finney, 10 BTC) |
| 2010-05-22 | **Pizza Day**, 10,000 BTC for 2 pizzas |
| 2010-07-17 | Mt. Gox opens |
| 2010-08-15 | **CVE-2010-5139**, 184B BTC bug (resolved in ~9 hours) |
| 2010-12-12 | Satoshi's last forum post |
| 2014-02-28 | **Mt. Gox files for bankruptcy** |

---

## 🏛️ The 6 Value-Proposition Pillars

1. **Permissionless**, no whitelist at the protocol layer
2. **Censorship-resistant**, no party can block transactions
3. **Trust-minimized**, no trusted intermediary needed
4. **Pseudonymous**, public keys, not legal identities (NOT anonymous)
5. **Auditable**, every full node verifies total supply
6. **Scarce**, 21M asymptotic cap

🚨 Bitcoin does NOT claim: anonymity, free transactions, instant finality, reversibility.

---

## 🧑‍💻 Satoshi-Identity Candidates (all denied)

- **Hal Finney**, first receiver; died 2014. Strong circumstantial fit.
- Nick Szabo, Bit Gold author; writing style match.
- Adam Back, Hashcash author; British English in posts.
- Dorian Nakamoto, 2014 *Newsweek* cover; denied.
- **Craig Wright**, self-claimed since 2016; UK High Court 2024 ruled NOT Satoshi (forgery).

🎯 **Exam answer: identity not publicly known.**

---

## 🚨 Top 7 Exam Traps

1. White paper = 2008-10-31; Genesis = 2009-01-03. Don't swap.
2. WP cites Hashcash + b-money, NOT Bit Gold.
3. 9 pages, not 8 or 10.
4. First receiver: Hal Finney, not Wei Dai / Nick Szabo / Adam Back.
5. 21M is asymptotic, not exact (off by ~0.023 BTC).
6. Current subsidy (post April 2024) is **3.125 BTC**, not 6.25.
7. Satoshi's identity → exam answer is **"unknown"**.

---

## 🏆 Power Phrases

When you see these, they're often correct on exam:

- ✅ "Pseudonymous, not anonymous"
- ✅ "Longest *cumulative-work* chain (not most blocks)"
- ✅ "Trust-minimized, permissionless"
- ✅ "Cypherpunk lineage (Chaum, Back, Dai)"
- ✅ "21M asymptotic cap"

When you see these, they're often wrong:

- ❌ "Anonymous"
- ❌ "Instant final settlement"
- ❌ "Free transactions"
- ❌ "Satoshi is Craig Wright / Nick Szabo / Hal Finney" (any specific name)
- ❌ "Turing-complete smart-contract VM" (that's Ethereum)

---

## ✏️ Quick Self-Check

Cover answers and recite:

1. White-paper date and venue? ___
2. Pre-Bitcoin systems Satoshi cited (two)? ___
3. April 2024 subsidy? ___
4. How many sats in 1 BTC? ___
5. First receiver of BTC + block number? ___
6. Genesis block date + coinbase message? ___

If you can answer all 6 in under 60 seconds, you own this module. ✅

---

➡️ [Module 2: Cryptographic Foundations](../Module-02-Cryptographic-Foundations/Reading.md)
