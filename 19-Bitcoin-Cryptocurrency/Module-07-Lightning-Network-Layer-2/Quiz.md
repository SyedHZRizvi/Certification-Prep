# ✏️ Module 7 Quiz: Lightning Network & Layer-2

> 24 questions. Closed book. Aim for 20/24.

---

## Questions

### Q1. The Lightning Network paper was authored by: *(Remember)*
A. Satoshi Nakamoto
B. Adam Back
C. Joseph Poon and Thaddeus Dryja (January 2016)
D. Pieter Wuille

---

### Q2. A Lightning payment channel is anchored in: *(Understand)*
A. A separate sidechain
B. A 2-of-2 multi-sig output on Bitcoin's L1
C. An Ethereum smart contract
D. A federated server

---

### Q3. HTLC stands for: *(Remember)*
A. Hash Time-Locked Contract
B. High-Throughput Lightning Channel
C. Hashed-Token Liquidity Coin
D. HTML-Lightning Connector

---

### Q4. The Lightning Network's onion routing protocol is based on: *(Remember)*
A. Tor onion routing
B. Sphinx (Danezis & Goldberg, 2009 — adapted)
C. SSL/TLS handshake
D. IPSec tunnel

---

### Q5. SegWit was a PREREQUISITE for Lightning because it: *(Apply)*
A. Reduced fees
B. Fixed transaction malleability — TxIDs no longer depend on signature shape, so off-chain commitment txs are usable
C. Doubled block size
D. Activated Schnorr

---

### Q6. The three major Lightning implementations are: *(Remember)*
A. lnd, Core Lightning (CLN), Eclair
B. Bitcoin Core, Knots, libbitcoin
C. Solidity, Vyper, Yul
D. Geth, Erigon, Nethermind

---

### Q7. A custodial Lightning wallet (Wallet of Satoshi, Strike, Cash App): *(Apply)*
A. Provides self-custody equivalent to a hardware wallet
B. Is a custodial service — the provider holds keys; same risk class as a centralized exchange
C. Is the only way to use Lightning
D. Requires running a full node

---

### Q8. BOLT-11 is: *(Remember)*
A. A consensus rule
B. The standard invoice format (`lnbc1pjk...`)
C. A wallet brand
D. A mining pool

---

### Q9. The PRIMARY purpose of a watchtower in Lightning is: *(Apply)*
A. Validating blocks for mining
B. Monitoring the chain for cheating counterparties (old commitment transactions) while a user is offline
C. Routing payments
D. Storing private keys

---

### Q10. A channel's "inbound liquidity" refers to: *(Understand)*
A. Total capacity
B. The portion of channel capacity on the OTHER side — available for the user to receive
C. Mining hashrate
D. Transaction fees paid

---

### Q11. Splicing (deployed 2024+) is: *(Apply)*
A. A mining technique
B. The ability to add or remove funds from an existing Lightning channel without closing it
C. A consensus rule change
D. A new cryptographic primitive

---

### Q12. El Salvador's adoption of Bitcoin as legal tender occurred on: *(Remember)*
A. October 31, 2008
B. September 7, 2021
C. April 20, 2024
D. November 14, 2021

---

### Q13. Channel jamming is best described as: *(Apply)*
A. Mining attack
B. Attacker opens many HTLCs that never resolve, tying up the victim's channel liquidity — currently Lightning's most-discussed open attack
C. A 51% attack on Lightning
D. Routing slowdown

---

### Q14. Liquid Network differs from Lightning in that Liquid is: *(Analyze)*
A. Identical
B. A federated sidechain (block production by ~15 federation members, not PoW) with confidential transactions and asset issuance
C. A faster Bitcoin L1
D. A mining pool

---

### Q15. The cryptographic glue that ties together a multi-hop Lightning payment is: *(Apply)*
A. A blockchain commitment
B. A hash preimage shared along the route, plus cascading CSV timeouts
C. A NIST signature
D. Mining

---

### Q16. A node A wants to pay node C through node B (a hop). The sender chooses the route, NOT B. This is called: *(Remember)*
A. Random routing
B. Source routing
C. Onion routing
D. Multi-path routing

---

### Q17. The Bitcoin Script primitive Lightning uses for HTLC timeouts is: *(Apply)*
A. CLTV alone
B. CSV (BIP-112, relative timelock)
C. P2PKH
D. Schnorr aggregation

---

### Q18. A 2026 estimate: roughly what fraction of Lightning *volume* flows through custodial wallets? *(Evaluate)*
A. ~10%
B. ~20%
C. **~80%**
D. ~99%

---

### Q19. The RGB protocol is: *(Apply)*
A. Identical to Lightning
B. A sidechain
C. An off-chain smart-contract layer using Bitcoin as the commitment substrate
D. A consensus rule

---

### Q20. A Lightning channel close where both parties cooperate is called: *(Remember)*
A. Force close
B. Mutual close (faster, lower fee, immediate)
C. Penalty close
D. HTLC close

---

### Q21. A "force close" of a Lightning channel: *(Apply)*
A. Requires consensus rule violations
B. Is when one party broadcasts the latest commitment tx unilaterally; funds become spendable after the CSV delay (typically 1-2 weeks)
C. Is identical to a mutual close
D. Is reversible

---

### Q22. The "Eye of Satoshi" is: *(Remember)*
A. A mining pool
B. An open-source Lightning watchtower implementation
C. A Bitcoin wallet
D. A consensus rule

---

### Q23. The BOLT-12 specification adds: *(Apply)*
A. Mining changes
B. Reusable invoices ("offers") — replacing BOLT-11's single-use invoices
C. Schnorr verification
D. A new consensus rule

---

### Q24. A board asks: "Is Lightning ready for production at $100M/month corridor volume?" Strongest reasoned reply: *(Evaluate)*
A. No — Lightning is theoretical
B. Yes — Lightning has been processing significant production volume since 2021; Strike, Cash App, and Wallet of Satoshi collectively process large monthly USD-corridor volumes; the design has known open problems (channel jamming) but the success cases are demonstrated
C. Yes — Lightning has perfect uptime and no open problems
D. No — Lightning is only for retail

---

## 🎯 Answers + Explanations

### Q1: **C. Joseph Poon and Thaddeus Dryja (January 2016)**
*"The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments."* Dated January 14, 2016.

### Q2: **B. A 2-of-2 multi-sig output on Bitcoin's L1**
Lightning is built on regular Bitcoin transactions. Not a sidechain, not a separate chain.

### Q3: **A. Hash Time-Locked Contract**
The cryptographic mechanism: hash preimage + timeout.

### Q4: **B. Sphinx (Danezis & Goldberg, 2009 — adapted)**
The same packet construction Tor uses, with Lightning-specific adaptations.

### Q5: **B. Fixed transaction malleability**
Pre-SegWit, a third party could reshape the signature → different TxID → break the off-chain commitment-tx scheme. SegWit's malleability fix was the unlock.

### Q6: **A. lnd, Core Lightning (CLN), Eclair**
Lightning Labs (Go), Blockstream (C), ACINQ (Scala). The three production implementations.

### Q7: **B. Is a custodial service — same risk class as a centralized exchange**
Convenient, fast, mobile-friendly — but you're trusting the operator. Not equivalent to self-custody.

### Q8: **B. The standard invoice format**
`lnbc1pjk...` strings. BOLT-12 (Offers) is the newer alternative.

### Q9: **B. Monitoring the chain for cheating counterparties**
A user goes offline; counterparty might broadcast an old commitment. Watchtower triggers the penalty.

### Q10: **B. The portion of channel capacity on the OTHER side**
If a channel has 10 BTC capacity and 9 BTC is on the counterparty's side, you have 9 BTC of inbound — you can receive up to that much.

### Q11: **B. Add or remove funds from an existing channel without closing it**
Deployed 2024+. The most-important UX improvement for liquidity management since the initial Lightning launch.

### Q12: **B. September 7, 2021**
El Salvador's Bitcoin Law. Made BTC legal tender alongside USD. First sovereign adoption.

### Q13: **B. Attacker opens many HTLCs that never resolve**
The DOS on liquidity. Tying up channel slots so legitimate payments fail.

### Q14: **B. A federated sidechain with confidential transactions**
Block production by a federation of 15 functionaries. Different trust model.

### Q15: **B. A hash preimage shared along the route, plus cascading CSV timeouts**
The HTLC construction. Carol's preimage release propagates back through the route.

### Q16: **B. Source routing**
The sender (Alice's node) chooses the full path. Intermediate nodes only see their immediate neighbors. Privacy-preserving.

### Q17: **B. CSV (BIP-112, relative timelock)**
HTLC timeouts are relative: "spendable N blocks after the parent confirms." Module 6 covered this.

### Q18: **C. ~80%**
Wallet of Satoshi alone is a substantial fraction of total Lightning payment volume. Custodial wins on UX, loses on self-custody.

### Q19: **C. An off-chain smart-contract layer using Bitcoin as the commitment substrate**
RGB lets you issue tokens / smart contracts on Bitcoin without modifying Bitcoin. Off-chain validation, on-chain commitments.

### Q20: **B. Mutual close**
Both parties sign a closing transaction. Faster, cheaper, immediate spendability.

### Q21: **B. One party broadcasts the latest commitment tx unilaterally**
The unilateral exit. Funds locked for CSV delay (typically ~1-2 weeks) to allow watchtower / counterparty response.

### Q22: **B. An open-source Lightning watchtower implementation**
One of several. Specific watchtower implementations vary; "Eye of Satoshi" is among the better-known open ones.

### Q23: **B. Reusable invoices ("offers")**
BOLT-12 replaces single-use BOLT-11 invoices with reusable, machine-discoverable offers. Better for merchants.

### Q24: **B. Yes — Lightning has been processing significant production volume since 2021**
The honest answer. Known open problems exist (channel jamming); successful production deployments also exist.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 Move to Module 8.
- 18-21/24 → ✅ Solid.
- 14-17/24 → ⚠️ Re-read HTLC + routing + watchtower sections.
- <14/24 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8: Regulatory, Compliance & Tax](../Module-08-Regulatory-Compliance-Tax/Reading.md)
