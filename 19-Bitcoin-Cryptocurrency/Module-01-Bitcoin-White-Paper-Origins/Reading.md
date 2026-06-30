# Module 1: The Bitcoin White Paper & Origins ₿

> **Why this module matters:** Every other module of this course refers back to design decisions made by an unknown person in 9 pages of PDF, posted to a mailing list on Halloween 2008. You cannot reason about Bitcoin's consensus, scarcity, or governance without knowing what Satoshi actually wrote, and what was already running in the cypherpunks' notebooks for two decades before that.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Basic finance literacy: what a payment is, what a bank does, what "double-spend" means in everyday language
> - General programming intuition: hashes, lists, timestamps (no code yet)
> - Comfort with the idea that "trust" can have a technical definition, not only a social one
>
> No prior cryptography or distributed-systems coursework is required, this module is the historical and motivational foundation the rest of the course builds on. If you've completed 09-CompTIA-Security-Plus Module-02 (Cryptography & PKI) you'll glide through Module 2 here; if not, that module makes a tight warm-up.

---

## ☕ A Story: The Email Heard Around the World

It is **8:10 PM Eastern time on October 31, 2008**, Halloween. A user calling themselves **Satoshi Nakamoto** posts a 9-page PDF to the **metzdowd.com Cryptography Mailing List**, a low-traffic forum where roughly 200 cypherpunks have been arguing about RSA, blind signatures, and the failures of e-cash since the mid-1990s.

The subject line is dry: *"Bitcoin P2P e-cash paper."* The body is two sentences and a link. The PDF is titled *"Bitcoin: A Peer-to-Peer Electronic Cash System."*

The reaction is muted. **Hal Finney** a PGP developer who has been working on remailers and digital cash since the early 1990s replies cautiously and constructively. **Wei Dai** (author of b-money, 1998) is gracious. A few engineers point out perceived flaws (block-size growth, mining centralization, double-spend windows). The mailing list mostly moves on.

Two months later, on **January 3, 2009 at 18:15:05 UTC**, Satoshi mines the first block the **Genesis block** and embeds in its coinbase a message: *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."* Nine days after that, on **January 12, 2009**, Hal Finney becomes the recipient of the first Bitcoin transaction, 10 BTC, in **block 170**.

For nine months, Bitcoin is a curiosity run by a handful of people. The first widely-cited *exchange* of BTC for a real thing happens on **May 22, 2010**, when Florida programmer Laszlo Hanyecz pays **10,000 BTC** to a stranger to buy him two Papa John's pizzas. (At the 2024 halving high of ~$73,000/BTC, those pizzas cost roughly **$730 million**. The Bitcoin community now commemorates "Pizza Day" annually.)

By **December 2010**, Satoshi makes his last forum post and disappears. To this day, his identity is not publicly known. He left behind roughly 1 million unspent BTC and a working system that has not had unscheduled downtime since 2013.

That story is your first lesson: **Bitcoin is not the first attempt at digital cash. It is the first one that worked, and "worked" means it survived its own creator walking away.**

This module is the historical and intellectual map. The rest of the course earns its place by referring back to these 9 pages.

---

## 🗺️ Why "Digital Cash" Failed Before Bitcoin

The cypherpunk mailing list (founded by Hughes, May, and Gilmore in 1992) had been trying to build private digital money for fifteen years before Satoshi's post. Below is the line of intellectual ancestors that Bitcoin combines. **MEMORIZE THIS** sequence, it appears as multiple-choice questions on the C4 CBP and almost every other Bitcoin exam.

| Year | System | Author | What it contributed | Why it didn't take off |
|------|--------|--------|---------------------|------------------------|
| 1983 | **eCash / DigiCash** | David Chaum (CWI) | Blind signatures for unlinkable payments | Required a central issuer (Chaum's bank); DigiCash bankrupted 1998 |
| 1992 | **Cypherpunk Manifesto** | Eric Hughes | "Privacy is necessary for an open society" | Manifesto, not a system |
| 1997 | **Hashcash** | Adam Back | Proof-of-Work as anti-spam (later: anti-Sybil) | Was a fee, not a currency |
| 1998 | **b-money** | Wei Dai | Network of pseudonymous identities; PoW; cryptographically enforced contracts | Sketched, never built |
| 1998 | **Bit Gold** | Nick Szabo | PoW-anchored "client puzzles" forming a chain of value | Sketched, never deployed; double-spend solution incomplete |
| 2004 | **RPOW** | Hal Finney | Reusable Proof-of-Work tokens on a trusted server | Required Finney's server to be trusted |

🎯 **Exam tip.** Satoshi cites Back's *Hashcash* and Dai's *b-money* explicitly in the white paper's footnotes. He does *not* cite Szabo's *Bit Gold*, a curiosity that has fueled 15 years of "Satoshi = Szabo?" speculation but remains unproven.

What every pre-Bitcoin system lacked was a credible answer to *one* question: **how do you stop the same digital token from being spent twice without a central referee?**

---

## 📜 The 9 Pages: Section-by-Section Walkthrough

The white paper has **12 numbered sections** plus an abstract, references, and an appendix. Below is the structure exam-takers must internalize.

### Abstract, the one-paragraph thesis
*"A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution."*

That sentence is the entire mandate of Bitcoin. Two phrases earn separate underlines:

- **"Purely peer-to-peer"**, no trusted intermediary in the payment path.
- **"Electronic cash"**, the metaphor is cash, not credit. Once received, the receiver does not need to trust the sender.

### §1 Introduction, the trust-minimization argument
Commerce on the internet has come to rely "almost exclusively" on trusted third parties for payment processing. This generates fraud cost, friction, and the impossibility of small "casual transactions" because reversibility prices them out.

### §2 Transactions, the chain-of-signatures definition
*"We define an electronic coin as a chain of digital signatures."* Each owner signs a hash of the previous transaction and the public key of the next owner, then appends the signature to the end of the coin. The recipient verifies the signature chain back to its origin.

🎯 **MEMORIZE THIS.** A Bitcoin is **not** a token, a file, a number, or a balance. It is a *chain of digital signatures over previous transaction outputs.* This is the UTXO model. Every later exam CBP, CBSA, Princeton tests this conceptual model.

### §3 Timestamp Server, the publishing rule
*"The solution we propose begins with a timestamp server."* The server takes a hash of a block of items and widely publishes the hash. Each timestamp includes the previous timestamp in its hash, a **chain**. (This is exactly Merkle's idea from 1979, plus the cypherpunks' "linked timestamping" of the 1990s; see Module 2.)

### §4 Proof-of-Work, the Sybil-resistance trick
Satoshi proposes implementing the distributed timestamp server using **Adam Back's Hashcash**: a participant scans for a value that, when SHA-256–hashed with the data, begins with a target number of zero bits. The expected work is exponential in the number of required bits; verification is one hash.

The famous formulation: *"One CPU one vote."* In 2008 this was approximately true. By 2013, ASICs had made it approximately false; the modern formulation is *"one joule one vote."* (Module 5 covers this in depth.)

### §5 Network, the protocol-of-rules summary
The six steps that every Bitcoin node executes:

1. New transactions are broadcast to all nodes.
2. Each node collects new transactions into a block.
3. Each node works on finding a difficult proof-of-work for its block.
4. When a node finds a proof-of-work, it broadcasts the block to all nodes.
5. Nodes accept the block only if all transactions in it are valid and not already spent.
6. Nodes express their acceptance by working on creating the next block in the chain, using the hash of the accepted block as the previous hash.

🚨 **Trap on the exam.** Many candidates conflate steps 4 and 6. Accepting a block (step 5) is *not* the same as building on top of it (step 6). A node can validate a block and *choose not to build on it* if it later receives a longer chain, see Module 3.

### §6 Incentive, the economics of honesty
The first transaction in a block is special: it creates a new coin owned by the block's creator. *"This adds an incentive for nodes to support the network."* Once a predetermined supply is reached, the incentive transitions from new-coin issuance to transaction fees, which the paper notes will be necessary to support the network "in perpetuity."

### §7 Reclaiming Disk Space, the Merkle-tree optimization
Once enough confirmations bury a transaction, old transactions can be discarded by walking up the Merkle tree from the leaves, replacing branches with their hashes. Block headers stay small (80 bytes, see Module 3).

### §8 Simplified Payment Verification, SPV
*"It is possible to verify payments without running a full network node."* The user only needs the longest proof-of-work chain's block headers, plus the Merkle branch linking the transaction to the block it was timestamped in. This is the foundation of **SPV clients** like Electrum and (loosely) every mobile wallet (Module 4).

### §9 Combining and Splitting Value
Transactions can have multiple inputs and multiple outputs, explaining how change and aggregation work.

### §10 Privacy, the public-but-pseudonymous compromise
*"Privacy can still be maintained by breaking the flow of information in another place: by keeping public keys anonymous."* This is the famous **pseudonymous (not anonymous)** property. Module 8 covers the chain-analysis industry that has since blossomed precisely because Bitcoin is *not* anonymous.

### §11 Calculations, the 51% attack math
A probabilistic analysis of how an attacker with `q` fraction of the hashrate can outrun the honest chain with `z` confirmations. The result: probability drops exponentially in `z`. This is where the **"6 confirmations" rule of thumb** comes from, though no specific number is in the paper.

### §12 Conclusion
*"We have proposed a system for electronic transactions without relying on trust."* Brief, conventional.

---

## 🧬 The 13 Design Decisions Satoshi Encoded

Every later module of this course will refer back to one of these. Below is the full list. The right column is where the course returns to it.

| # | Decision | Where it appears later |
|---|----------|------------------------|
| 1 | **Public-key cryptography** for ownership (ECDSA over secp256k1) | Module 2 |
| 2 | **SHA-256** as the workhorse hash | Module 2 |
| 3 | **Proof-of-Work** for Sybil resistance + leader election | Module 5 |
| 4 | **Block chain** structure (each block commits to the previous) | Module 3 |
| 5 | **Merkle trees** in each block | Modules 2, 3 |
| 6 | **UTXO model** (chain of signatures over outputs) | Modules 4, 6 |
| 7 | **10-minute average block interval** + difficulty adjustment every 2,016 blocks | Module 5 |
| 8 | **Block-reward halving** every 210,000 blocks | Module 5 |
| 9 | **Hard cap of 21 million BTC** | Module 5 |
| 10 | **Longest-cumulative-PoW chain rule** (not most blocks; cumulative work) | Module 3 |
| 11 | **Coinbase transaction** with arbitrary data field | Modules 3, 5 |
| 12 | **Bitcoin Script** as the spending language (intentionally not Turing-complete) | Module 6 |
| 13 | **P2P gossip protocol** for transaction and block propagation | Module 3 |

🎯 **Exam tip.** CBP loves to ask "which of the following is NOT one of Satoshi's design choices?" with a distractor like *"Turing-complete smart contracts"* (that's Ethereum) or *"Proof-of-Stake consensus"* (that's Ethereum post-Merge, Cosmos, etc.).

---

## 🧮 The Halving Schedule (the most-tested table)

Block subsidy halves every **210,000 blocks** (~4 years). Starting at 50 BTC.

| Halving # | Block height | Date (approx.) | New subsidy | Cumulative supply (approx.) |
|-----------|--------------|----------------|-------------|------------------------------|
| Genesis | 0 | 2009-01-03 | 50 BTC | 50 BTC |
| 1st | 210,000 | 2012-11-28 | 25 BTC | 10,500,000 BTC |
| 2nd | 420,000 | 2016-07-09 | 12.5 BTC | 15,750,000 BTC |
| 3rd | 630,000 | 2020-05-11 | 6.25 BTC | 18,375,000 BTC |
| **4th** | **840,000** | **2024-04-20** | **3.125 BTC** | **19,687,500 BTC** |
| 5th (est.) | 1,050,000 | ~2028-04 | 1.5625 BTC | ~20,343,750 BTC |
| 6th (est.) | 1,260,000 | ~2032 | 0.78125 BTC | ~20,671,875 BTC |
| ... | ... | ... | ... | asymptotic to 21,000,000 |
| Final halving | block ~6,930,000 | ~year 2140 | subsidy → 0 sats | exactly 20,999,999.9769 BTC |

🚨 **Trap on the exam.** The 21M cap is **asymptotic**, due to integer rounding in the code, the final issued total is 20,999,999.97690000 BTC, not exactly 21M. Most exam questions accept "21 million" as the correct answer but if asked for the *exact* number, know it's slightly less.

**MEMORIZE THIS.** Block subsidy halves every 210,000 blocks ≈ 4 years. The April 2024 halving (block 840,000) dropped subsidy from 6.25 to 3.125 BTC.

---

## 🕰️ The First-Year Timeline (CBP-tested)

| Date | Event |
|------|-------|
| 2008-08-18 | `bitcoin.org` domain registered |
| 2008-10-31 | White paper posted to cryptography mailing list |
| 2009-01-03 18:15:05 UTC | **Block 0 (Genesis)** mined; contains *The Times* headline |
| 2009-01-09 | Bitcoin v0.1 released |
| 2009-01-12 | **Block 170**, first transaction, Satoshi → Hal Finney, 10 BTC |
| 2009-10-05 | New Liberty Standard establishes first published BTC/USD price: **1,309.03 BTC = $1** |
| 2010-05-22 | **Pizza Day**, Laszlo Hanyecz pays 10,000 BTC for 2 pizzas via Jeremy Sturdivant |
| 2010-07-17 | Mt. Gox launched as an exchange (originally a Magic: The Gathering card-trading site, hence "Mt. Gox" = **M**agic **T**he **G**athering **O**nline e**X**change) |
| 2010-08-15 | **CVE-2010-5139**, the **Value Overflow Incident** (see case study below) |
| 2010-12-12 | Satoshi's last forum post |
| 2011-04-23 | Satoshi's last private email to a known recipient (Mike Hearn) |

---

## 💼 Case Study, The 184-Billion-BTC Bug (CVE-2010-5139, August 2010)

**Situation.** Bitcoin had been live for 19 months. The network was a few hundred nodes, mining was still done on home CPUs and a few GPUs, and the codebase was almost entirely Satoshi's. On **August 15, 2010** at 17:46 UTC, an attacker exploited an arithmetic-overflow bug in `CTransaction::CheckTransaction` and broadcast a transaction in **block 74638** that created **184,467,440,737.09551616 BTC** in a single output, split between two addresses.

**Decision.** The Bitcoin developer community at that point still effectively just Satoshi, Gavin Andresen, and a handful of others released a patched client (Bitcoin v0.3.10) within **5 hours**. The patch added a check that the sum of outputs cannot exceed the sum of inputs *and* cannot exceed a sanity-cap of 21M BTC. Miners running the patched code rejected the bad block. **The chain was forked at block 74637; the bad block was abandoned.** By block 74691 (about 53 blocks / ~9 hours later) the patched chain had decisively overtaken the bad chain.

**Outcome.** No exchanges had loaded the bad coins. No merchants had accepted them. The patched chain became canonical. The incident is the only successful exploit of Bitcoin's monetary policy in history, and it lasted less than 10 hours.

**Lesson for the exam / for practitioners.** Two principles every exam tests:

1. **Consensus rules are enforced by every full node, not by miners.** The miners who built on block 74638 mined valid Proof-of-Work; their blocks were rejected because the *transaction* violated a (newly-added) consensus rule. Module 3 returns to this.
2. **Bitcoin's value depends on the integrity of its supply schedule.** Inflation that bypasses the 21M cap is the one failure mode that the protocol explicitly cannot recover from in the market's eyes. The 2010 incident proves the recovery requires a coordinated soft fork inside hours.

**Discussion (Socratic).**
- Q1: If the bug had been discovered six months later (after Bitcoin's price had risen 100x and merchants had accepted bad coins), how should the community have handled it? Would a chain rollback have been justifiable?
- Q2: Why did the patched chain decisively win, was it inevitable, or did the small node-count and miner-count in 2010 make it easier than it would be in 2026?
- Q3: What's the trade-off Satoshi implicitly accepted by writing the original `CheckTransaction` *without* the overflow guard, and what does it tell you about the maturity of the codebase versus the maturity of the social consensus around it?

---

## 🧱 The Bitcoin Genesis Block, Bit-by-Bit

Every CBP exam includes at least one question on the Genesis block. Memorize this table.

| Field | Value | Notes |
|-------|-------|-------|
| Height | 0 | Special-cased in code, its hash is not actually computed dynamically |
| Hash | `000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f` | Lots of leading zeros, much more PoW than required by the original target |
| Timestamp | 2009-01-03 18:15:05 UTC | "Saturday" |
| Nonce | 2083236893 | Single-CPU mining took ~6 days, per Satoshi's emails |
| Version | 1 | |
| Coinbase data | `04ffff001d0104455468652054696d6573203033...` decodes to `The Times 03/Jan/2009 Chancellor on brink of second bailout for banks` | Political and chronological proof |
| Output | 50 BTC | UNSPENDABLE due to a quirk, see below |
| Output address | `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` | Often shown in books |

🚨 **Trap.** The Genesis-block reward of 50 BTC is **unspendable**, it's not stored in the UTXO set due to a peculiarity in Satoshi's code. Many candidates miss this. So Satoshi's 50 BTC reward from block 0 has never moved and *cannot* move.

---

## 🧑‍💻 Who Is Satoshi Nakamoto?

CBP doesn't ask "who is Satoshi", but Princeton and Nicosia coursework references the candidates because it informs the cultural context of the protocol. The five most-named:

| Candidate | Why named | Status |
|-----------|-----------|--------|
| **Hal Finney** | First receiver of BTC; PGP veteran; lived near a person named "Dorian Satoshi Nakamoto" | Denied; died 2014. Strong circumstantial fit. |
| **Nick Szabo** | Bit Gold author; writing style matches; cryptography depth fits | Denied. Many cryptographers privately suspect. |
| **Adam Back** | Hashcash author; cited in WP; British English in posts | Denied. Acknowledges close-orbit. |
| **Dorian Nakamoto** | *Newsweek* 2014 cover story | Denied (and the reporter's evidence was circumstantial at best). |
| **Craig Wright** | Self-claimed since 2016 | UK High Court ruled in 2024 that Wright is **not** Satoshi and engaged in forgery. |

🎯 **Exam tip.** The C4 CBP body of knowledge explicitly notes that **Satoshi's identity is not publicly known.** Any answer that asserts a specific identity (Wright, Szabo, Finney) is wrong on the exam.

---

## 🪙 Bitcoin's Unit Economics

| Unit | Value in BTC | Use |
|------|--------------|-----|
| 1 BTC | 1 | Spec / settlement layer |
| 1 cBTC ("centi-bitcoin") | 0.01 BTC | Rarely used |
| 1 mBTC ("milli-bitcoin") | 0.001 BTC | Sometimes used in payment apps |
| 1 μBTC ("bit" / "micro-bitcoin") | 0.000001 BTC | Briefly trendy 2018–2019 |
| **1 sat (Satoshi)** | **0.00000001 BTC** | The smallest on-chain unit. Most-used unit in technical contexts |
| 1 msat (milli-satoshi) | 0.001 sat | **Lightning Network only**, not represented on-chain (Module 7) |

🎯 **MEMORIZE THIS.** 1 BTC = 100,000,000 sats. Conversions are usually requested in sats per byte (fees), sats per dollar (price), or msat-flows in Lightning.

---

## 🏛️ The Six Pillars of Bitcoin's Value Proposition

If the white paper is the *manual*, the value proposition is the *pitch*. CBP routinely asks "which of the following is a property Bitcoin claims to deliver?" with multiple plausible-looking choices.

| # | Property | One-line definition |
|---|----------|----------------------|
| 1 | **Permissionless** | Anyone can transact, run a node, or mine, no whitelist or KYC at the protocol layer |
| 2 | **Censorship-resistant** | No party can block specific transactions; miners can decline to include them but other miners will eventually do so |
| 3 | **Trust-minimized** | Receivers do not need to trust senders; senders do not need to trust intermediaries |
| 4 | **Pseudonymous** | Addresses are public keys, not legal identities, but on-chain history is fully public |
| 5 | **Auditable** | Every full node can independently verify the total supply, ownership of any address, and any historical transaction |
| 6 | **Scarce** | Supply is hard-capped (21M asymptotic) and predictable (halving schedule) |

🚨 **Trap on the exam.** Bitcoin does **NOT** claim to be:

- Anonymous (it's pseudonymous; see Module 8 on chain analysis)
- Free (transactions have fees, especially since SegWit/Taproot adoption)
- Instant (1-confirmation safety is ~10 min, "settled" rule of thumb is 6 confs ≈ 1 hour)
- Reversible (cash analogy, once mined into the chain and buried, no reversal)

---

## 🌐 The First 36 Months of Network Growth

This is rarely directly tested but is referenced throughout institutional case studies.

| Year | Nodes (est.) | BTC price (year-end) | Notable event |
|------|--------------|-----------------------|----------------|
| 2009 | <100 | ~$0 | Genesis; "1,309 BTC = $1" first quoted |
| 2010 | ~500 | $0.30 | Pizza Day; first exchange (Mt. Gox); CVE-2010-5139 |
| 2011 | ~10,000 | $4.70 | First parity with USD (Feb 9, 2011); Silk Road launches; Wikileaks accepts BTC |
| 2012 | ~30,000 | $13.45 | First halving (Nov 2012); Bitcoin Magazine founded |
| 2013 | ~60,000 | $738 | China bans bank-crypto interaction; Mt. Gox dominant exchange |
| 2014 | ~120,000 | $314 | **Mt. Gox collapse** (Feb 2014), see Module 4 case study |

🎯 **Exam tip.** The most-tested early-history facts: white paper date, Genesis date, Pizza Day price, first halving block height, Mt. Gox collapse date.

---

## 🎓 Frameworks Princeton Drills

The Princeton textbook + MOOC structure Module 1 around three big questions. Memorize the framing.

### Q1. *"What problem does Bitcoin solve?"*
The **double-spend problem** in a peer-to-peer setting *without* a trusted referee. Solved via **proof-of-work timestamping** + the **longest-chain rule**.

### Q2. *"How does Bitcoin achieve consensus?"*
**Nakamoto consensus**, probabilistic agreement via the heaviest-cumulative-work chain. Distinct from classical BFT (PBFT, Tendermint) which gives deterministic finality under bounded faults. **Nakamoto consensus has no fixed-time finality; it has probabilistic safety that strengthens with confirmations.**

### Q3. *"What makes Bitcoin's monetary policy credible?"*
**Hard-coded supply schedule + costly verification + open-source codebase + economic majority of nodes + ~17 years of demonstrated resilience.** Princeton specifically frames this as *credible-commitment theory* (Kydland-Prescott, 1977 Nobel-winning monetary-policy paper) applied to a non-state monetary system.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Bitcoin is anonymous" | Pseudonymous. Every transaction is public on the chain; chain-analysis firms (Chainalysis, TRM, Elliptic) routinely deanonymize. |
| "Satoshi is the inventor of blockchain" | Satoshi did not invent linked timestamping (Haber & Stornetta, 1991) or PoW (Back, 1997). He *combined* them with public-key crypto and incentives into a working system. |
| "Bitcoin is a company / a foundation" | There is no Bitcoin Inc. The Bitcoin Foundation existed 2012–2018 but never controlled the protocol. Development happens on Bitcoin Core (one of multiple implementations) via the open-source BIP process. |
| "Satoshi has admin keys" | False. There are no admin keys. Satoshi's ~1M BTC are spendable only with the corresponding private keys, which he/she presumably still holds. The protocol has no privileged accounts. |
| "Bitcoin can be banned by a government" | A government can ban its use domestically. Several have (China 2021). No government can stop the global network as long as some jurisdiction allows it. |
| "Bitcoin uses too much energy / 'wastes' electricity" | The energy spend secures the chain. Whether it's "worth it" is a values question (Module 5). Comparing to gold mining and the legacy banking system is the usual framing. |
| "Bitcoin is too slow / can't scale" | On-chain settlement is intentionally conservative (~7 tx/sec). Layer-2 (Lightning, sidechains) handles scale, see Module 7. The "blockchain trilemma" frames the trade-off. |

---

## ⚠️ Exam Traps to Watch For

1. **White-paper date.** October 31, 2008, not 2009. The *Genesis block* is January 3, 2009.
2. **Hashcash citation.** Adam Back's Hashcash (1997). Some answer choices substitute *Bit Gold* or *RPOW*, both are real but not cited in the white paper.
3. **"How many pages?"** 9 (eight content + 1 references). Distractors include 8, 10, 12.
4. **First receiver of BTC.** Hal Finney, not Adam Back, not Wei Dai, not Nick Szabo.
5. **The "21M" question.** The cap is 21M *approximate / asymptotic*. The exact issued total at infinity is 20,999,999.9769 BTC due to integer rounding. CBP usually accepts "21 million" as the right answer; only if a question specifies "exact" does the rounded number matter.
6. **Genesis-block coinbase message.** *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."* Memorize the exact phrasing, distractors swap *"03/Jan/2009"* for *"03/01/2009"* and *"bailout"* for *"rescue"*.
7. **Block subsidy after the 4th halving (April 2024).** **3.125 BTC**, not 6.25 (that was post-2020) and not 1.5625 (that's the next halving).

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **White paper** | The 9-page PDF Satoshi published 2008-10-31 |
| **Genesis block** | Block 0, mined 2009-01-03 18:15:05 UTC |
| **Coinbase** | The special first transaction in every block that creates new BTC; also the arbitrary-data field at its start |
| **Halving / halvening** | The 210,000-block reduction of the block subsidy by 50% |
| **Subsidy** | The newly-issued BTC per block (currently 3.125, post April 2024) |
| **Fees** | The non-subsidy portion of a miner's reward (input - output value) |
| **UTXO** | Unspent Transaction Output, the unit of value Bitcoin tracks |
| **Pizza Day** | May 22, 2010, 10,000 BTC for 2 pizzas. The first known commercial BTC transaction. |
| **Nakamoto consensus** | The probabilistic, longest-cumulative-work agreement mechanism Satoshi proposed |
| **51% attack** | An attacker controlling majority hashrate; can double-spend / censor but not steal or inflate |
| **Sat / Satoshi** | The smallest on-chain unit, 0.00000001 BTC |
| **Cypherpunk** | The 1992–present community of cryptography-and-privacy activists from which Bitcoin emerged |
| **Hashcash** | Adam Back's 1997 anti-spam Proof-of-Work scheme |
| **b-money** | Wei Dai's 1998 cryptocurrency sketch, cited in the WP |
| **Bit Gold** | Nick Szabo's 1998 cryptocurrency sketch, NOT cited in the WP |
| **DigiCash / eCash** | David Chaum's 1983/1990s centralized digital cash |
| **Mt. Gox** | First major Bitcoin exchange; collapsed Feb 2014 |
| **Hal Finney** | First receiver of BTC (block 170); PGP veteran; passed away 2014 |
| **Nakamoto Institute** | Online archive curating cypherpunk + early Bitcoin canon |

---

## ✅ Module 1 Summary

You now know:

- 📜 The white-paper publication chain: October 31, 2008 → cryptography mailing list → 9 pages → Genesis on January 3, 2009
- 🧠 The four intellectual ancestors Bitcoin combines: DigiCash, Hashcash, b-money, Bit Gold
- 🧱 The 12 sections of the white paper and the 13 design decisions Satoshi encoded
- 🪙 The halving schedule, the 21M cap, and the unit-economics ladder (BTC → sats)
- 💼 The Value Overflow Incident (CVE-2010-5139) as the only successful supply exploit ever
- 🕰️ The first-36-months timeline up through the Mt. Gox collapse
- 🏛️ The six pillars of Bitcoin's value proposition (permissionless, censorship-resistant, trust-minimized, pseudonymous, auditable, scarce)
- 🧑‍💻 The most-named Satoshi candidates and the correct exam answer (identity unknown)

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md), particularly the Antonopoulos "Internet of Money" talks
2. ✏️ Take the [Quiz](./Quiz.md), aim for 20/24 minimum
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 2: Cryptographic Foundations](../Module-02-Cryptographic-Foundations/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 2 unpacks the cryptographic primitives (SHA-256, ECDSA, Merkle trees) that the white paper takes for granted. Module 3 turns the §3-§5 network sketch into a working consensus model. Module 5 expands §4 + §6 into the modern mining economy and the 2024 halving. Module 8 turns §10's "pseudonymity" into the entire chain-analysis / FinCEN / FATF compliance stack.
> - Cross-course: `09-CompTIA-Security-Plus` Module-02 (Cryptography & PKI) is the security-engineering parallel to Module 2 here. `14-AI-Marketing-Foundations` Module-09 (Privacy & Compliance) is the consent-and-regulatory parallel to Module 8.
> - Practice: Practice Exam 1 has 6–8 questions drawing from this module (Genesis date, halving math, Satoshi history, white-paper structure). Final Mock revisits with cross-module synthesis questions.

---

## 💬 Discussion, Socratic prompts

Use these as journal prompts, study-group questions, or interview-prep drills. Each is open-ended; the strongest answers cite specific dates, frameworks, or named cypherpunk predecessors.

1. **The "first" question.** A skeptical board member argues that "Bitcoin isn't really new cryptographic digital cash has been around since Chaum in 1983." Construct the strongest argument for the skeptic AND the strongest counter-argument. Which would you defend in a CIO meeting where Bitcoin custody is being voted on, and why? (Hint: think about what specifically *worked* in Bitcoin that didn't in DigiCash, Hashcash, b-money, or Bit Gold and which property dominates.)
2. **The Halloween publication choice.** Satoshi posted the paper on October 31, 2008. The world was in the middle of the worst financial crisis since 1929. Was the publication date a coincidence, a deliberate political statement (echoed by the Genesis block's *Times* headline), or both? How does your answer affect your understanding of Bitcoin's intended audience and mission?
3. **The "identity unknown" trade-off.** Bitcoin's protocol depends on a social consensus that Satoshi did not leave admin keys, that no one knows who he/she is, and that the rules apply equally to everyone. Construct the strongest argument that the *unknown* identity is a security property (versus the strongest argument that it's a vulnerability, what if Satoshi is alive and could be coerced?).
4. **The CVE-2010-5139 thought experiment.** If the value-overflow bug had been discovered after the SEC approved spot-Bitcoin ETFs (i.e., in 2024+ rather than 2010), would a coordinated rollback still have been politically feasible? How would the BlackRock IBIT custodian (Coinbase Custody) and the holders of $50B in IBIT shares affect the decision? Map this to the difference between credible-commitment and renegotiation in monetary policy.
5. **The "permissionless ≠ unregulated" framing.** Bitcoin claims to be permissionless at the protocol layer. Regulators at the application layer (exchanges, custodians) are imposing increasingly strict KYC, Travel Rule, and sanctions screening. Where exactly is the boundary, and where will it be in 2030? Defend your answer with at least one specific 2024–2026 regulatory action.

There are no "official" answers, defend your reasoning with specifics. Strong responses cite at least one named cypherpunk source (Chaum, Back, Dai, Szabo), one named case (Genesis block, CVE-2010-5139, Mt. Gox, the spot-ETF approval), and one piece of monetary or distributed-systems theory.

---

## 📚 Further Reading (Optional)

- 📖 **Nakamoto, *Bitcoin: A Peer-to-Peer Electronic Cash System*** (2008). The 9 pages. Free at bitcoin.org/bitcoin.pdf.
- 📖 **Narayanan, Bonneau, Felten, Miller, Goldfeder, *Bitcoin and Cryptocurrency Technologies*** (Princeton UP, 2016). Chapters 1–3.
- 📖 **Antonopoulos, *Mastering Bitcoin* 2e** (O'Reilly, 2017). Chapters 1–2.
- 📖 **Antonopoulos, *The Internet of Money* vol. 1** (Merkle Bloom, 2016). The "Big Picture" and "Currency as a Language" talks.
- 📖 **Vigna & Casey, *The Age of Cryptocurrency*** (St. Martin's, rev. 2016). Narrative history.
- 📰 **Nakamoto Institute** (nakamotoinstitute.org), curated cypherpunk archives + Satoshi's emails + Finney's blog.
- 📰 **Bitcoin Optech Newsletter, issue archives 2018–present** (bitcoinops.org). The signal-to-noise newsletter.
- 🎓 **Princeton, *Bitcoin and Cryptocurrency Technologies* on Coursera** (Narayanan). Weeks 1–2 cover this module.
- 🎓 **MIT 15.S12, *Blockchain and Money*** (Gensler, Fall 2018). Lecture 1: "Money, Ledgers, and Bitcoin."
