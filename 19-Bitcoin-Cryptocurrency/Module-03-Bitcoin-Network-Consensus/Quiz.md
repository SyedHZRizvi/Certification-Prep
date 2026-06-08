# ✏️ Module 3 Quiz: Bitcoin Network & Consensus

> **Instructions:** 24 questions. Closed book. Aim for 20/24.

---

## Questions

### Q1. The Bitcoin difficulty adjusts every: *(Remember)*
A. 144 blocks (~1 day)
B. 2,016 blocks (~2 weeks)
C. 4,032 blocks (~1 month)
D. 210,000 blocks (~4 years)

---

### Q2. Bitcoin's target average block interval is: *(Remember)*
A. 1 minute
B. 5 minutes
C. 10 minutes
D. 1 hour

---

### Q3. A soft fork is: *(Understand)*
A. A consensus rule LOOSENING that splits the chain
B. A consensus rule TIGHTENING; non-upgraded nodes still accept new blocks
C. A reorg of 3+ blocks
D. A protocol update with no consensus changes

---

### Q4. Bitcoin Cash (BCH) hard-forked from Bitcoin on: *(Remember)*
A. October 31, 2008
B. August 1, 2017
C. November 14, 2021
D. April 20, 2024

---

### Q5. The Bitcoin block header is: *(Remember)*
A. 32 bytes
B. 80 bytes
C. 256 bytes
D. Variable with N transactions

---

### Q6. Coinbase outputs are spendable: *(Remember)*
A. Immediately after the block is mined
B. After 1 confirmation
C. After 6 confirmations
D. After 100 confirmations (coinbase maturity)

---

### Q7. The 5 fields of a block header are version + previous block hash + Merkle root + timestamp + ___ + nonce. *(Apply)*
A. coinbase
B. difficulty bits (target)
C. magic bytes
D. fee

---

### Q8. A full node differs from an SPV client in that a full node: *(Understand)*
A. Validates only block headers
B. Validates every block and transaction since Genesis
C. Mines blocks
D. Connects only via Tor

---

### Q9. The "longest chain rule" in Bitcoin specifically refers to: *(Analyze)*
A. The chain with the most blocks
B. The chain with the most cumulative proof-of-work
C. The chain with the most users
D. The chain Coinbase recognizes

---

### Q10. RBF (Replace-By-Fee, BIP-125) allows: *(Apply)*
A. A receiver to refund a sender
B. A sender to replace an unconfirmed transaction with one paying a higher fee
C. The protocol to skip mining
D. A node to censor transactions

---

### Q11. The default Bitcoin mainnet port is: *(Remember)*
A. 22
B. 80
C. 443
D. 8333

---

### Q12. The number of confirmations conventionally treated as "final" for an institutional ($1M+) Bitcoin payment is: *(Apply)*
A. 1
B. 3
C. 6
D. 100

---

### Q13. The Bitcoin Cash hard fork was primarily about: *(Understand)*
A. Adding privacy features
B. Block size (1 MB → 8 MB+) vs SegWit
C. Banning Lightning
D. A different signature scheme

---

### Q14. SegWit, Taproot, and CLTV/CSV are all examples of: *(Apply)*
A. Hard forks
B. Soft forks
C. Pre-Bitcoin systems
D. Layer-2 protocols

---

### Q15. The "0.8/0.7 fork" in March 2013 is significant because: *(Evaluate)*
A. It was a malicious 51% attack
B. It was a consensus bug between two Bitcoin Core versions, resolved by coordinated downgrade, the textbook governance case study
C. It permanently split Bitcoin into two coins
D. It created Litecoin

---

### Q16. Which is TRUE about Nakamoto consensus vs classical BFT? *(Evaluate)*
A. They have identical safety guarantees
B. Nakamoto has probabilistic finality; classical BFT (PBFT, Tendermint) has deterministic finality after a single round
C. Classical BFT is permissionless
D. Nakamoto consensus needs less than f/3 honest validators

---

### Q17. A 51% attacker on Bitcoin CAN: *(Apply)*
A. Inflate the supply beyond 21M
B. Steal funds from any address
C. Double-spend recent transactions and censor specific addresses
D. Change the protocol's cryptographic primitives

---

### Q18. The mempool is: *(Understand)*
A. Part of Bitcoin consensus
B. A per-node cache of unconfirmed transactions; not consensus
C. A separate blockchain
D. Maintained only by miners

---

### Q19. A confirmation count of 1 means: *(Remember)*
A. 0 blocks have been built on top
B. The transaction is in the most recent block
C. 6 blocks have been built on top
D. The transaction is in the mempool

---

### Q20. The deepest Bitcoin mainnet reorg in modern history is: *(Remember)*
A. ~53 blocks (March 2013, coordinated rollback, not under normal operation)
B. 6 blocks
C. 1 block
D. 100 blocks

---

### Q21. Compact Block Relay (BIP-152) was proposed by Matt Corallo to: *(Apply)*
A. Compress the entire blockchain
B. Send block headers + short tx IDs so peers reconstruct blocks from mempool, reducing propagation time to under 1 second
C. Replace the Bitcoin P2P protocol with HTTP
D. Encrypt the blockchain

---

### Q22. The maximum difficulty change per 2,016-block adjustment is capped at: *(Remember)*
A. ±10%
B. ±2x
C. ±4x
D. unlimited

---

### Q23. A change to the consensus rules that previously-valid blocks become invalid (without the chain splitting at all) is impossible because: *(Analyze)*
A. The protocol does not allow rule changes
B. By definition, any rule change that invalidates previously-valid blocks IS a hard fork, non-upgrading nodes will reject the new blocks
C. Hashing prevents it
D. The 21M cap forbids it

---

### Q24. A board member argues that "Bitcoin can be controlled by the top 4 mining pools, who together control 65% of hashrate." Strongest reasoned reply: *(Evaluate)*
A. Agree; mining pools control the protocol
B. Pools coordinate block production but validity is enforced by every full node; pools cannot inflate supply, steal coins, or change protocol rules without breaking the consensus that every full node enforces, and miners depend on the chain being valuable, which depends on those rules holding
C. Disagree; mining is not done in pools
D. Agree; pools own everyone's bitcoin

---

## 🎯 Answers + Explanations

### Q1: **B. 2,016 blocks (~2 weeks)**
Memorize: 2,016 blocks × 10 min = 20,160 min = 14 days. This is what makes the difficulty adjustment "every two weeks."

### Q2: **C. 10 minutes**
Targeted average. Individual blocks are exponentially distributed; some come in seconds, others in 30+ minutes.

### Q3: **B. A consensus rule TIGHTENING; non-upgraded nodes still accept new blocks**
The defining property of a soft fork. Backward compatible. SegWit, Taproot, P2SH all qualify.

### Q4: **B. August 1, 2017**
Block 478,558 was the BCH fork point. SegWit activated on Bitcoin the same month, the small-block / big-block factions had been arguing for years.

### Q5: **B. 80 bytes**
Version (4) + previous hash (32) + Merkle root (32) + timestamp (4) + bits (4) + nonce (4) = 80 bytes.

### Q6: **D. After 100 confirmations (coinbase maturity)**
Special-case consensus rule. Protects against reorganization-driven reward reversals.

### Q7: **B. difficulty bits (target)**
The 5 fields are: version, previous block hash, Merkle root, timestamp, difficulty bits, nonce.

### Q8: **B. Validates every block and transaction since Genesis**
Full node = independent verification end-to-end. SPV trusts the chain headers + Merkle proofs.

### Q9: **B. The chain with the most cumulative proof-of-work**
Critical nuance: cumulative work, not block count. Across difficulty adjustments these can differ.

### Q10: **B. A sender to replace an unconfirmed transaction with one paying a higher fee**
BIP-125. The replacement transaction is broadcast; nodes drop the old one. Receivers should not treat 0-conf as final in an RBF world.

### Q11: **D. 8333**
Mainnet TCP port. Testnet is 18333; Signet is 38333.

### Q12: **C. 6**
6 confirmations ≈ 1 hour. The conventional institutional threshold. For very small payments, 1 is often acceptable; for very large payments (>$10M), some treasuries wait 12-24.

### Q13: **B. Block size (1 MB → 8 MB+) vs SegWit**
The "Block Size Wars" of 2015-2017 culminated in this fork.

### Q14: **B. Soft forks**
All three are consensus tightenings that maintain backward compatibility.

### Q15: **B. It was a consensus bug between two Bitcoin Core versions, resolved by coordinated downgrade**
Bitcoin Core v0.8 had a BerkeleyDB change; v0.7 nodes rejected a particular block. Two chains existed for ~6 hours; the community coordinated to roll back to the v0.7 chain.

### Q16: **B. Nakamoto has probabilistic finality; classical BFT has deterministic finality**
Critical conceptual distinction for Princeton, Stanford, and CBSA exams.

### Q17: **C. Double-spend recent transactions and censor specific addresses**
What 51% gives you and what it does NOT give you is precisely tested. They cannot inflate supply, steal coins from arbitrary addresses, or change cryptographic rules.

### Q18: **B. A per-node cache of unconfirmed transactions; not consensus**
Each node has its own. Consensus is only over blocks.

### Q19: **B. The transaction is in the most recent block**
1 confirmation = first inclusion. The transaction's own block counts as 1.

### Q20: **A. ~53 blocks (March 2013, coordinated rollback)**
The deepest reorg in Bitcoin's history. Notably this was *coordinated* by the community, not from a malicious attack.

### Q21: **B. Send block headers + short tx IDs so peers reconstruct blocks from mempool**
BIP-152, proposed by Matt Corallo in 2016. Critical for keeping propagation latency below 1 second.

### Q22: **C. ±4x**
The difficulty cannot change by more than a factor of 4 in a single 2,016-block adjustment.

### Q23: **B. By definition, any rule change that invalidates previously-valid blocks IS a hard fork**
The classification follows the rule change's direction relative to old rules. Tightening = soft, loosening = hard.

### Q24: **B. Pools coordinate block production but validity is enforced by every full node**
This is the fundamental separation between hashpower and validity. CBP routinely tests it.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 Move to Module 4.
- 18-21/24 → ✅ Solid.
- 14-17/24 → ⚠️ Re-read the soft-fork-vs-hard-fork table and confirmation guidance.
- <14/24 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 4: Wallets, Keys & Self-Custody](../Module-04-Wallets-Keys-Self-Custody/Reading.md)
