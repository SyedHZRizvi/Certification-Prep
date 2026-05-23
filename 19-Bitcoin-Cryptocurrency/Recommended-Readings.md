# Recommended Readings — Bitcoin & Cryptocurrency Track

> **Purpose:** This curated list extends the per-module "Further Reading" sections with the canonical bibliography for a Bitcoin practitioner who plans to sit the C4 CBP, the Blockchain Training Alliance CBSA, or the University of Nicosia MSc — and to work in institutional digital assets thereafter.

> **How to use:** Engage each item at the point in the course indicated. The single most important free anchor text is Nakamoto's 9-page 2008 white paper. Everything else compounds on top of that. The Princeton textbook + Antonopoulos *Mastering Bitcoin* + Gensler's MIT lectures form a tight three-resource core that will get you 80% of the way.

---

## Canonical Textbooks (5 must-haves)

### Foundational

- **Nakamoto, Satoshi — *Bitcoin: A Peer-to-Peer Electronic Cash System* (self-published, October 31, 2008).**
  - 9 pages. Free PDF at <https://bitcoin.org/bitcoin.pdf>. Read it twice — once at the start of Module 1, again after finishing Module 5. There is no substitute for engaging with the primary source.

- **Narayanan, Arvind; Bonneau, Joseph; Felten, Edward; Miller, Andrew; Goldfeder, Steven — *Bitcoin and Cryptocurrency Technologies: A Comprehensive Introduction* (Princeton University Press, 2016; full draft free at bitcoinbook.cs.princeton.edu).**
  - The canonical *academic* textbook. Pairs with the Coursera MOOC of the same name (Tier 1 of the cert ladder). Read in parallel with Modules 1–5.

- **Antonopoulos, Andreas M. — *Mastering Bitcoin: Programming the Open Blockchain*, 2nd ed. (O'Reilly Media, 2017; full text free at github.com/bitcoinbook/bitcoinbook).**
  - The canonical *practitioner* textbook. Far more code-and-protocol than Narayanan. Read in parallel with Modules 4–7.

- **Antonopoulos, Andreas M. & Osuntokun, Olaoluwa & Pickhardt, Rene — *Mastering the Lightning Network* (O'Reilly, 2021; full text free at github.com/lnbook/lnbook).**
  - The canonical Lightning Network text. Read in parallel with Module 7.

- **Ammous, Saifedean — *The Bitcoin Standard: The Decentralized Alternative to Central Banking* (Wiley, 2018).**
  - The most-cited "Austrian-school" economic argument for Bitcoin. Optional but read at least the first 4 chapters and chapter 8 for the cultural context of the conservative Bitcoin community. Engage during Modules 5 + 8.

### Practitioner / Institutional

- **Antonopoulos, Andreas M. — *The Internet of Money*, vols. 1–3 (Merkle Bloom, 2016/2017/2019).**
  - Three short volumes of public talks. The best plain-English explanation of what Bitcoin *means* — useful for any board readout, executive briefing, or family-dinner conversation.

- **Lawant, Matt; Hougan, Matt; Lawant, David — *Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond*, 2nd ed. (McGraw-Hill, 2024; original 2017 by Burniske & Tatar).**
  - Updated to include the spot-ETF launch and 2024 institutional landscape. Engage during Module 9.

- **Hougan, Matt; Lawant, David — *Cryptoassets: The Guide to Bitcoin, Blockchain, and Cryptocurrency for Professional Investors* (CFA Institute Research Foundation, 2021; free PDF at cfainstitute.org).**
  - The CFA Institute's own free monograph. Required reading for any CFA candidate doing the digital-assets specialization. Engage during Module 9.

- **Vigna, Paul & Casey, Michael J. — *The Age of Cryptocurrency*, rev. ed. (St. Martin's, 2016).**
  - History + journalism rather than technical text. Useful narrative context for Modules 1 + 10.

- **Wright, Aaron & De Filippi, Primavera — *Blockchain and the Law: The Rule of Code* (Harvard University Press, 2018).**
  - Legal-academic perspective on smart contracts, DAOs, and regulation. Engage during Module 8.

---

## Seminal Papers, BIPs and Specifications

### Pre-Bitcoin Cryptography & Cypherpunk

- **Diffie, Whitfield & Hellman, Martin — "New Directions in Cryptography" (*IEEE Transactions on Information Theory*, 1976).**
  - The paper that introduced public-key cryptography. Without it, no Bitcoin. Engage at the start of Module 2.

- **Merkle, Ralph — "Secrecy, Authentication, and Public Key Systems" (Stanford PhD thesis, 1979).**
  - Introduces Merkle trees. Engage during Module 2.

- **Lamport, Leslie; Shostak, Robert; Pease, Marshall — "The Byzantine Generals Problem" (*ACM TOPLAS*, 1982).**
  - The foundational distributed-consensus problem that Bitcoin's Proof-of-Work solves probabilistically. Engage during Module 3.

- **Chaum, David — "Blind Signatures for Untraceable Payments" (*CRYPTO '82*).**
  - The eCash paper. The intellectual ancestor of digital cash.

- **Back, Adam — "Hashcash — A Denial of Service Counter-Measure" (1997, hashcash.org).**
  - Where Bitcoin's PoW mechanism comes from. Engage during Modules 1 + 5.

- **Dai, Wei — "b-money" (informal proposal, 1998).**
  - One of the two systems Satoshi cites in the white paper. <www.weidai.com/bmoney.txt>.

- **Szabo, Nick — "Bit Gold" (essays, 1998–2008).**
  - The other Satoshi-cited predecessor. <unenumerated.blogspot.com>.

- **Szabo, Nick — "Smart Contracts: Building Blocks for Digital Markets" (*EXTROPY*, 1996).**
  - The original "smart contract" essay. Engage during Module 10.

### Bitcoin Foundational Papers

- **Nakamoto, Satoshi — *Bitcoin: A Peer-to-Peer Electronic Cash System* (2008).** Listed above.

- **Poon, Joseph & Dryja, Thaddeus — "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments" (2016, lightning.network/lightning-network-paper.pdf).**
  - The Lightning paper. Engage during Module 7.

- **Eyal, Ittay & Sirer, Emin Gün — "Majority Is Not Enough: Bitcoin Mining Is Vulnerable" (*Financial Cryptography*, 2014).**
  - The selfish-mining paper. Engage during Module 5.

- **Bonneau, Joseph et al. — "SoK: Research Perspectives and Challenges for Bitcoin and Cryptocurrencies" (*IEEE Security & Privacy*, 2015).**
  - The Systematization-of-Knowledge survey. Engage during Modules 3 + 5.

- **Ron, Dorit & Shamir, Adi — "Quantitative Analysis of the Full Bitcoin Transaction Graph" (2013).**
  - The chain-analysis paper that founded the modern compliance industry. Engage during Modules 8 + 9.

### Bitcoin Improvement Proposals (BIPs) — required reading

- **BIP-1, BIP-2** — The BIP process itself.
- **BIP-9** — Version-bits signaling for soft forks.
- **BIP-16** — P2SH (Pay-to-Script-Hash). 2012.
- **BIP-21** — URI scheme `bitcoin:`.
- **BIP-32** — HD wallets (Wuille, 2012).
- **BIP-39** — Mnemonic seed phrases (Palatinus et al., 2013).
- **BIP-43, BIP-44, BIP-49, BIP-84** — Derivation paths.
- **BIP-65** — `OP_CHECKLOCKTIMEVERIFY`.
- **BIP-68, BIP-112** — Relative locktime + `OP_CHECKSEQUENCEVERIFY`.
- **BIP-141** — Segregated Witness (Lombrozo, Lau, Wuille, 2015).
- **BIP-143, BIP-144** — SegWit signature hashing + serialization.
- **BIP-152** — Compact block relay.
- **BIP-174** — PSBT (Partially Signed Bitcoin Transaction).
- **BIP-340, BIP-341, BIP-342** — Schnorr signatures + Taproot + Tapscript (Wuille, Nick, Towns, 2020).

Read on github.com/bitcoin/bips. Engage during Modules 4 (32/39/44), 6 (16/65/68/112/141/340/341/342), 9 (174).

### Lightning Specifications

- **BOLT 0 through BOLT 11** — github.com/lightning/bolts. Engage during Module 7.
- **Pickhardt, Rene & Richter, Stefan — "Optimally Reliable & Cheap Payment Flows" (2021).** Probabilistic routing.
- **Decker, Christian & Wattenhofer, Roger — "A Fast and Scalable Payment Network with Bitcoin Duplex Micropayment Channels" (2015).** Pre-Poon-Dryja channel construction.

### Cryptographic Standards

- **NIST FIPS 180-4** — Secure Hash Standard (SHA-2, SHA-3). Engage during Module 2.
- **NIST FIPS 186-5** — Digital Signature Standard (DSA, ECDSA). Engage during Module 2.
- **SEC 1 / SEC 2 (Standards for Efficient Cryptography)** — secp256k1 parameters. <secg.org>. Engage during Module 2.
- **NIST SP 800-57** — Key Management. Engage during Modules 2 + 4.
- **CryptoCurrency Security Standard (CCSS) v8.0** — cryptoconsortium.github.io/CCSS. Engage during Modules 4 + 9.

---

## Regulatory and Standards References

- **FinCEN — *Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies* (FIN-2013-G001, March 18, 2013).**
  - The original US regulatory anchor for cryptocurrency. Engage during Module 8.

- **FinCEN — Final Rule on virtual-currency transmittals (2020) + FinCEN 2024 enforcement actions catalogue.**
  - US Travel Rule + post-Binance enforcement posture. Engage during Module 8.

- **FATF — *Recommendation 15: New Technologies* (2019) and *Updated Guidance for a Risk-Based Approach to Virtual Assets and Virtual Asset Service Providers* (2021, updated 2024).**
  - The global AML/KYC anchor. <fatf-gafi.org>. Engage during Module 8.

- **EU — *Regulation (EU) 2023/1114 on Markets in Crypto-Assets (MiCA)* (eur-lex.europa.eu).**
  - The most comprehensive crypto regulation in the world. Engage during Module 8.

- **EU — *Transfer of Funds Regulation (TFR) recast 2023/1113* — the EU Travel Rule implementation.**
  - Engage during Module 8.

- **US SEC — *Spot Bitcoin ETP Approval Order* (January 10, 2024).**
  - The 71-page order that approved the first 11 spot-Bitcoin ETFs. Engage during Module 9.

- **IRS — *Notice 2014-21* (March 2014) + *Rev. Rul. 2023-14* (staking) + *Form 1099-DA* (effective 2026 reporting).**
  - US tax treatment of digital assets. Engage during Module 8.

- **OFAC — Digital Currency Address designations (ongoing) + Sanctions Compliance Guidance for the Virtual Currency Industry (October 2021).**
  - The sanctions regime. Engage during Module 8.

- **New York DFS — Virtual Currency BitLicense (23 NYCRR 200), 2015.**
  - The strictest US state regime. Engage during Module 8 + 9.

- **OCC — Interpretive Letter 1170, 1172, 1174 (custody, stablecoins, INVNs).**
  - Engage during Module 9.

- **NCUA — Letter 21-CU-16 (December 2021) on credit-union digital-asset partnerships.**
  - Directly relevant to the capstone scenario.

- **Basel Committee on Banking Supervision — *Prudential Treatment of Cryptoasset Exposures* (final standard, 2022, effective January 2025).**
  - How banks must risk-weight crypto exposures. Engage during Module 9.

---

## Industry Resources (subscribe to ≥3 of these)

- **Bitcoin Optech Newsletter** (bitcoinops.org/en/newsletters) — weekly. The single best signal-to-noise newsletter on Bitcoin protocol developments. Free. Engage from Module 3 onward.

- **Coindesk** (coindesk.com) — daily. Industry's most-cited news source despite the 2022–2023 turbulence. Mixed quality — read with a critical eye.

- **The Block** (theblock.co) — daily, paywalled in part. Data + research; "The Block Research" reports are excellent.

- **Bitcoin Magazine** (bitcoinmagazine.com) — daily; founded 2012 by Vitalik Buterin and Mihai Alisie (later Bitcoin-only). Conservative editorial line.

- **Andreas Antonopoulos — YouTube (@aantonop)** — videos, talks, AMAs. Free. Engage throughout.

- **Jameson Lopp — blog (lopp.net) and Twitter (@lopp)** — technical, security-focused, opinionated. Free.

- **Lyn Alden — newsletter (lynalden.com)** — monthly. The best Bitcoin-aware macro newsletter. Free + paid tiers.

- **Pierre Rochard, Saifedean Ammous, Allen Farrington** — three different prominent Bitcoin commentators worth alternating between for balance.

- **Glassnode Insights** (glassnode.com) — on-chain analytics. Free + paid.

- **The Pomp Podcast** (Anthony Pompliano) — interviews. Mainstream-investor-friendly.

- **What Bitcoin Did** (Peter McCormack) — long-form interviews.

- **Stephan Livera Podcast** — technical, Austrian-economics-leaning.

- **Empire / Lightspeed / Bell Curve** (Blockworks network) — institutional-finance-oriented podcasts.

- **Hal Finney archives** (nakamotoinstitute.org/finney) — the second person on Bitcoin. Foundational reading for the cultural / philosophical context.

- **Nakamoto Institute** (nakamotoinstitute.org) — curates the cypherpunk + early Bitcoin canon. Free.

---

## Free Academic Courses (engage in parallel with this track)

- **Princeton — *Bitcoin and Cryptocurrency Technologies* (Arvind Narayanan, Coursera).**
  - <https://www.coursera.org/learn/cryptocurrency>. 11 weeks, audit free. The Tier-1 foundation in the cert ladder.

- **MIT 15.S12 — *Blockchain and Money* (Gary Gensler, Fall 2018).**
  - <https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/>. Every lecture on OCW free. Gensler taught this before becoming SEC Chair (2021–2025). Required watching for Module 8.

- **Stanford CS251 — *Cryptocurrencies and Blockchain Technologies* (Dan Boneh).**
  - <https://cs251.stanford.edu>. Lecture notes free. Heavy on cryptography; pairs well with Module 2.

- **UC Berkeley X12 — *Blockchain Fundamentals* (Blockchain at Berkeley).**
  - Free Coursera / edX coursework. Good complement.

- **Chainalysis Academy** (academy.chainalysis.com) — free. Required if you'll work in chain analysis or compliance.

- **University of Nicosia — *Introduction to Digital Currencies* (free MOOC).**
  - <https://www.unic.ac.cy/blockchain/free-mooc/>. The on-ramp to the Nicosia MSc. Andreas Antonopoulos has lectured in this program for years.

- **DeepLearning.AI / Coursera — *Blockchain Specialization* (University at Buffalo).**
  - Free audit. Practitioner-oriented.

- **The Bitcoin Academy** (Block / Jack Dorsey / Square initiative) — free curriculum, plain-language.

---

## A Note on AI Tools for Bitcoin Research

The 2024–2026 generation of LLMs (Claude, GPT-4, Gemini) is *useful* for Bitcoin study with two caveats:

1. **Hallucinations in BIP numbers and dates are common.** Always verify a model's claim about which BIP did what against the actual BIP at github.com/bitcoin/bips.
2. **They often confuse "Bitcoin" with "crypto."** Be explicit in prompts. "What does BIP-340 specify in Bitcoin's Taproot soft fork?" works better than "Tell me about Schnorr."

Useful agents for this material:
- **Anthropic Claude** for protocol summarization and BIP traversal.
- **Perplexity** for regulatory-citation lookup with sources.
- **GitHub Copilot Chat** for reading the Bitcoin Core C++ codebase.

---

## Recommended Reading Sequence

If you have time for only 5 books, read in this order:

1. **Nakamoto — *Bitcoin White Paper*** (the 9 pages)
2. **Antonopoulos — *Mastering Bitcoin* 2e** (the practitioner reference)
3. **Narayanan et al. — *Bitcoin and Cryptocurrency Technologies*** (the academic counterpart)
4. **Antonopoulos / Osuntokun / Pickhardt — *Mastering the Lightning Network*** (the L2 reference)
5. **Hougan & Lawant — *Cryptoassets* (2024 ed.)** (the institutional-investor view)

If you have time for only 3 standards, read:

1. **CCSS v8.0** (custody)
2. **FATF Recommendation 15 + 2024 Updated Guidance** (compliance)
3. **EU MiCA Title V** (the most comprehensive regulatory regime in 2026)

These three combined contain ~70% of the regulatory and operational intelligence that informs institutional-crypto conversations in 2026.

---

## Maintaining Your Skills

Bitcoin's surface area is small compared to "crypto," but the regulatory and Lightning-spec landscape evolves continuously. Plan to:

- Re-skim *Mastering Bitcoin* every 18 months as new BIPs activate (the GitHub edition is updated).
- Subscribe to **Bitcoin Optech** and consume one issue per week.
- Re-take a chain-analysis training (Chainalysis, TRM, Elliptic) annually if you work in compliance.
- Re-read the Nakamoto white paper on every January 3 (Genesis day). It's still 9 pages; you'll find something new every year.

---

Good luck. Bitcoin & Cryptocurrency is the entry credential to a field that is rebuilding monetary infrastructure on top of cryptography — and the compounding effect of consistent reading is what separates the technologists from the speculators. ₿
