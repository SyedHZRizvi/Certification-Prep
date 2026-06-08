# ✏️ Module 1 Quiz: The Bitcoin White Paper & Origins

> **Instructions:** Answer all 24 questions WITHOUT looking at the reading. Then check answers below. Aim for 20/24 minimum.

---

## Questions

### Q1. The Bitcoin white paper was published on what date? *(Remember)*
A. January 3, 2009
B. October 31, 2008
C. May 22, 2010
D. November 1, 2008

---

### Q2. The white paper was published to which venue? *(Remember)*
A. The Bitcoin Foundation blog
B. arXiv.org
C. The metzdowd.com cryptography mailing list
D. The Cypherpunks mailing list

---

### Q3. Which two pre-Bitcoin systems does the white paper explicitly cite? *(Remember)*
A. eCash and DigiCash
B. Hashcash and b-money
C. Bit Gold and RPOW
D. Hashcash and Bit Gold

---

### Q4. The Bitcoin Genesis block was mined on what date? *(Remember)*
A. October 31, 2008
B. January 3, 2009
C. January 12, 2009
D. May 22, 2010

---

### Q5. Which message appears in the coinbase of the Genesis block? *(Remember)*
A. "We are bigger than the banks."
B. "Chancellor on brink of second bailout for banks."
C. "It is well that the people of the nation do not understand our banking system."
D. "Nakamoto Genesis."

---

### Q6. Who was the first known recipient of a Bitcoin transaction? *(Remember)*
A. Wei Dai
B. Hal Finney
C. Adam Back
D. Nick Szabo

---

### Q7. The April 2024 halving (block 840,000) reduced the block subsidy to: *(Remember)*
A. 6.25 BTC
B. 3.125 BTC
C. 1.5625 BTC
D. 12.5 BTC

---

### Q8. The block subsidy halves every: *(Remember)*
A. 100,000 blocks
B. 144 blocks (daily)
C. 210,000 blocks (~4 years)
D. 1,000,000 blocks

---

### Q9. Bitcoin's supply cap is: *(Remember)*
A. Exactly 21,000,000 BTC
B. Asymptotic to 21,000,000 BTC (exact issued total is slightly less)
C. 100,000,000 BTC
D. Unlimited, with halving fees only

---

### Q10. The white paper defines a Bitcoin as: *(Understand)*
A. A token stored in a wallet file
B. A row in a global ledger
C. A chain of digital signatures over previous transaction outputs
D. A NFT minted by Satoshi

---

### Q11. The "Pizza Day" transaction was: *(Remember)*
A. May 22, 2010, Laszlo Hanyecz paid 10,000 BTC for two Papa John's pizzas
B. December 12, 2010, Satoshi's last forum post
C. February 9, 2011, first parity with USD
D. April 20, 2024, the fourth halving

---

### Q12. The Value Overflow Incident (CVE-2010-5139) created how many BTC in a single transaction? *(Remember)*
A. 21 million
B. 50,000
C. ~184 billion
D. 1 million

---

### Q13. The most accurate statement about Satoshi Nakamoto's identity, per the C4 CBP body of knowledge, is: *(Understand)*
A. Satoshi is publicly known to be Hal Finney
B. Satoshi is publicly known to be Craig Wright
C. Satoshi's identity is not publicly known
D. Satoshi is publicly known to be Nick Szabo

---

### Q14. The Genesis block reward of 50 BTC is: *(Understand)*
A. Stored in Satoshi's known wallet and spendable today
B. Unspendable due to a quirk in how it's stored in the UTXO set
C. Already spent on the Pizza Day transaction
D. Burned as part of the protocol

---

### Q15. The cypherpunk who proposed Hashcash (1997) the proof-of-work scheme Satoshi adopted is: *(Remember)*
A. David Chaum
B. Adam Back
C. Wei Dai
D. Nick Szabo

---

### Q16. A property Bitcoin claims to deliver but which is OFTEN confused is: *(Apply)*
A. Anonymous transactions
B. Free transactions
C. Pseudonymous transactions (with public on-chain history)
D. Instant final settlement

---

### Q17. How many sats are in 1 BTC? *(Remember)*
A. 1,000
B. 100,000
C. 1,000,000
D. 100,000,000

---

### Q18. The white paper's §4 proposes which mechanism to solve the double-spend problem in a P2P network? *(Understand)*
A. Trusted notary servers
B. Proof-of-Stake voting
C. Proof-of-Work with longest-cumulative-work chain rule
D. Byzantine Fault Tolerant Paxos

---

### Q19. After the Value Overflow Incident in August 2010, how was it resolved? *(Apply)*
A. Coinbase reversed the transactions
B. The community released a patched client (v0.3.10); within ~9 hours the patched chain decisively overtook the bad chain
C. Satoshi minted offsetting negative BTC
D. The bug was never fixed; the bad coins are still spendable today

---

### Q20. Which of the following did Satoshi NOT design into Bitcoin? *(Apply)*
A. Block-reward halving every 210,000 blocks
B. A coinbase field with arbitrary data
C. A Turing-complete smart-contract VM
D. Merkle trees in block headers

---

### Q21. Mt. Gox at one point ~70% of global BTC trading volume collapsed in: *(Remember)*
A. October 2013
B. February 2014
C. August 2010
D. November 2017

---

### Q22. The intellectual ancestor of Bitcoin's pseudonymous unlinkable payments is David Chaum's: *(Remember)*
A. Bit Gold
B. Hashcash
C. eCash / DigiCash (with blind signatures, 1983)
D. b-money

---

### Q23. A board member argues that "Bitcoin can be banned and shut down by a coordinated G7 ban." Which is the strongest reasoned reply? *(Evaluate)*
A. Agree; no protocol can survive simultaneous state-level bans
B. Disagree; G7 nations have already tried, and Bitcoin's distributed-node model means nodes outside G7 jurisdictions would continue producing blocks, China's 2021 mining ban relocated, did not destroy, hashrate
C. Agree; mining is too concentrated to survive
D. Agree; exchanges control the network

---

### Q24. Bitcoin's "longest chain rule" is BEST stated as: *(Analyze)*
A. The chain with the most blocks always wins, regardless of work
B. The chain with the most cumulative proof-of-work wins, which may NOT be the chain with most blocks (e.g., across difficulty adjustments)
C. The chain with the highest hash always wins
D. The chain with the most users wins by social consensus

---

## 🎯 Answers + Explanations

### Q1: **B. October 31, 2008**
The white paper was posted on Halloween 2008. The Genesis block came two months later (January 3, 2009).

### Q2: **C. The metzdowd.com cryptography mailing list**
Satoshi posted to the low-traffic crypto list run by Perry Metzger and others, not the Cypherpunks list (which was effectively dormant by 2008).

### Q3: **B. Hashcash and b-money**
Satoshi cites Adam Back's Hashcash (1997) and Wei Dai's b-money (1998) in the white paper. He does NOT cite Bit Gold (Szabo), a long-noted curiosity.

### Q4: **B. January 3, 2009**
Block 0 was mined at 18:15:05 UTC. The block height is special-cased in code.

### Q5: **B. "Chancellor on brink of second bailout for banks."**
The full coinbase message is *"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."* It's a timestamp proof + a political statement.

### Q6: **B. Hal Finney**
Block 170, January 12, 2009. Finney received 10 BTC from Satoshi. He was the second person to run a Bitcoin node and a PGP veteran.

### Q7: **B. 3.125 BTC**
Pre-2024-halving was 6.25 BTC. Post-2024-halving is 3.125 BTC. Next halving (~2028) will drop to 1.5625.

### Q8: **C. 210,000 blocks (~4 years)**
Subsidy halves every 210,000 blocks; at ~10 min/block this is ~4 years.

### Q9: **B. Asymptotic to 21,000,000 BTC**
Exact issued total is 20,999,999.9769 BTC due to integer rounding in the protocol. For most exam questions "21 million" is accepted; only when the question specifies "exact" does the rounded number matter.

### Q10: **C. A chain of digital signatures over previous transaction outputs**
Direct quote from §2 of the white paper. This is the foundation of the UTXO model.

### Q11: **A. May 22, 2010, Laszlo Hanyecz paid 10,000 BTC for two Papa John's pizzas**
The first widely-cited commercial BTC transaction. Now celebrated annually as Bitcoin Pizza Day.

### Q12: **C. ~184 billion**
Specifically 184,467,440,737.09551616 BTC across two outputs. The patched client rejected the block within ~9 hours.

### Q13: **C. Satoshi's identity is not publicly known**
The C4 CBP and every academic source treats Satoshi's identity as unknown. Craig Wright's claims were rejected by the UK High Court in 2024 as forgery.

### Q14: **B. Unspendable due to a quirk in how it's stored in the UTXO set**
The Genesis-block reward is not added to the UTXO set as a normal output. Even Satoshi can't spend block 0's 50 BTC.

### Q15: **B. Adam Back**
Back's *Hashcash, A Denial of Service Counter-Measure* (1997) is the proof-of-work scheme Satoshi adopted.

### Q16: **C. Pseudonymous transactions (with public on-chain history)**
Bitcoin is pseudonymous, not anonymous. The most-tested fact about Bitcoin privacy. Chain-analysis companies like Chainalysis routinely de-anonymize patterns.

### Q17: **D. 100,000,000**
1 BTC = 100,000,000 sats. The smallest on-chain unit is 1 satoshi.

### Q18: **C. Proof-of-Work with longest-cumulative-work chain rule**
Satoshi solves the double-spend problem with Adam Back's PoW + the longest-cumulative-work tie-breaker, no trusted third party required.

### Q19: **B. The community released a patched client (v0.3.10); within ~9 hours the patched chain decisively overtook the bad chain**
This is the only successful supply exploit in Bitcoin's history. Hard-coded consensus rules combined with a fast community response resolved it.

### Q20: **C. A Turing-complete smart-contract VM**
Bitcoin Script is intentionally NOT Turing-complete (Module 6). Turing-complete contract VMs are an Ethereum-and-beyond design choice.

### Q21: **B. February 2014**
Mt. Gox suspended trading on Feb 7, 2014 and filed for bankruptcy on Feb 28. Approximately 850,000 BTC were lost. See Module 4.

### Q22: **C. eCash / DigiCash (with blind signatures, 1983)**
Chaum's blind-signature scheme was the first cryptographic digital cash. DigiCash bankrupted in 1998. Influenced but is not cited by Satoshi.

### Q23: **B. Disagree; G7 nations have already tried, and Bitcoin's distributed-node model means nodes outside G7 jurisdictions would continue producing blocks, China's 2021 mining ban relocated, did not destroy, hashrate**
The China mining ban in May 2021 is the empirical proof: hashrate dropped ~50% in weeks but the chain continued, and hashrate fully recovered within a year.

### Q24: **B. The chain with the most cumulative proof-of-work wins, which may NOT be the chain with most blocks**
Critical nuance: after a difficulty adjustment, a shorter chain with higher-difficulty blocks can have more cumulative work. CBP tests this distinction.

---

## 📊 Score Yourself

- 22–24/24 → 🏆 You've internalized the white paper. Move to Module 2.
- 18–21/24 → ✅ Solid. Re-read the section on the missed answers.
- 14–17/24 → ⚠️ Re-read the white paper itself (it's only 9 pages) and the section on cypherpunk predecessors.
- <14/24 → 🔁 Re-read the entire Reading.md and watch the Antonopoulos + 3Blue1Brown videos.

---

## 🃏 Add To Your Flashcards

- White paper date: 2008-10-31
- Genesis block date: 2009-01-03
- First receiver of BTC: Hal Finney, block 170
- Pre-Bitcoin systems Satoshi cited: Hashcash (Back) + b-money (Dai)
- Halving cadence: every 210,000 blocks
- Block subsidy April 2024+ : 3.125 BTC
- 1 BTC = 100,000,000 sats
- Genesis coinbase message + CVE-2010-5139 short facts

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2](../Module-02-Cryptographic-Foundations/Reading.md)
