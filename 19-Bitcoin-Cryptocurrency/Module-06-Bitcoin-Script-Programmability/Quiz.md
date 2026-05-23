# ✏️ Module 6 Quiz: Bitcoin Script & Programmability

> 24 questions. Closed book. Aim for 20/24.

---

## Questions

### Q1. Bitcoin Script is: *(Remember)*
A. Turing-complete
B. Stack-based, non-Turing-complete
C. Register-based
D. Functional / lazy-evaluated

---

### Q2. The locking script attached to a UTXO is called the: *(Remember)*
A. scriptSig
B. ScriptPubKey
C. witness
D. coinbase

---

### Q3. The P2PKH unlocking pattern is: *(Apply)*
A. `<signature>` only
B. `<signature> <pubkey>`
C. `<redeem_script>`
D. `<witness>`

---

### Q4. The Bitcoin Improvement Proposal that introduced P2SH was: *(Remember)*
A. BIP-9
B. BIP-16 (April 2012)
C. BIP-141
D. BIP-340

---

### Q5. SegWit was activated as a soft fork in: *(Remember)*
A. April 2012
B. August 2017
C. November 2021
D. April 2024

---

### Q6. Maximum Bitcoin block weight (post-SegWit) is: *(Remember)*
A. 1,000,000 bytes
B. 2,000,000 WU
C. 4,000,000 WU
D. 8,000,000 WU

---

### Q7. The SegWit weight formula is: *(Apply)*
A. `weight = bytes × 4` for all data
B. `weight = (non-witness × 4) + (witness × 1)` — witness data discounted
C. `weight = bytes / 4`
D. `weight = signatures × 100`

---

### Q8. Taproot was activated at block: *(Remember)*
A. 0 (Genesis)
B. 478,558
C. 709,632 (November 2021)
D. 840,000 (April 2024)

---

### Q9. The three BIPs of Taproot are: *(Remember)*
A. 32, 39, 44
B. 141, 143, 144
C. 340, 341, 342
D. 65, 68, 112

---

### Q10. A Taproot output has two spend paths: *(Apply)*
A. Hot path and cold path
B. Key-path (single Schnorr signature) and script-path (MAST tree)
C. Open and locked
D. Mainnet and testnet

---

### Q11. MAST stands for: *(Remember)*
A. Modular Application Script Tree
B. Merkelized Alternative Script Trees
C. Mining-Adjacent Storage Tier
D. Multi-Asset Signature Table

---

### Q12. The KEY PRIVACY property of Taproot is: *(Analyze)*
A. Multi-sig requires more signatures
B. Cooperating multi-sig spends are indistinguishable from single-sig spends on-chain
C. Output addresses are encrypted
D. Signature hashes use SHA-3

---

### Q13. CLTV (OP_CHECKLOCKTIMEVERIFY, BIP-65) is: *(Apply)*
A. A relative timelock — N blocks after the spending transaction
B. An absolute timelock — only spendable after a specific block height or Unix timestamp
C. A multi-sig opcode
D. A hash opcode

---

### Q14. CSV (OP_CHECKSEQUENCEVERIFY, BIP-112) is: *(Apply)*
A. An absolute timelock — only spendable after a specific block height
B. A relative timelock — N blocks after the parent transaction confirms
C. A multi-sig opcode
D. A hash opcode

---

### Q15. The Lightning Network's HTLCs depend on which Bitcoin Script primitive? *(Apply)*
A. CLTV alone
B. CSV + hash preimage revelation
C. P2SH only
D. RIPEMD-160 only

---

### Q16. Pre-Taproot, OP_CHECKMULTISIG was used for: *(Remember)*
A. Hashing
B. Verifying M-of-N signatures in P2SH/P2WSH multi-sig
C. Encoding addresses
D. Time-locks

---

### Q17. The address format prefix `bc1q` indicates: *(Apply)*
A. Legacy P2PKH
B. P2SH
C. Native SegWit Bech32 (P2WPKH or P2WSH)
D. Taproot Bech32m

---

### Q18. The address format prefix `bc1p` indicates: *(Apply)*
A. Legacy P2PKH
B. P2SH
C. Native SegWit Bech32 (P2WPKH or P2WSH)
D. Taproot Bech32m

---

### Q19. Tapscript (BIP-342) replaced OP_CHECKMULTISIG with: *(Apply)*
A. OP_CHECKSIGVERIFY only
B. OP_CHECKSIGADD (for efficient batched signature verification) plus aggregation via MuSig2
C. A new SHA-3 opcode
D. Nothing — it kept OP_CHECKMULTISIG unchanged

---

### Q20. The malleability problem SegWit solved was: *(Understand)*
A. Transactions could be modified by attackers
B. The TxID depended on the signature, so trivial signature reshaping changed the TxID — blocking unconfirmed-tx workflows like Lightning
C. Block hashes were predictable
D. Mining was inefficient

---

### Q21. The Ordinals / Inscriptions protocol (Casey Rodarmor, January 2023) used: *(Analyze)*
A. A consensus-rule violation
B. A Taproot script-path quirk to embed arbitrary data in witness storage (legal under Taproot rules but unintended)
C. A hard fork
D. RPC API abuse

---

### Q22. A 5-of-9 Taproot multi-sig where all 9 cosigners agree spends via the: *(Apply)*
A. Script-path (revealing all 9 pubkeys)
B. Key-path (single MuSig2-aggregated Schnorr signature)
C. P2PKH path
D. Coinbase path

---

### Q23. "Bitcoin doesn't have smart contracts" is: *(Evaluate)*
A. Strictly true
B. Misleading — Bitcoin has Scripts (programmable spending conditions); they're deliberately non-Turing-complete to bound execution
C. Strictly false — it's identical to Ethereum
D. Only true pre-Taproot

---

### Q24. A custody architect chooses Taproot multi-sig over legacy P2WSH multi-sig PRIMARILY for: *(Evaluate)*
A. Lower fees AND on-chain indistinguishability from single-sig (privacy)
B. Higher fees
C. Smart-contract support
D. Mining benefits

---

## 🎯 Answers + Explanations

### Q1: **B. Stack-based, non-Turing-complete**
By design. The trade-off: less expressive, but bounded execution.

### Q2: **B. ScriptPubKey**
The locking script in the output. scriptSig is the unlocking script in the input.

### Q3: **B. `<signature> <pubkey>`**
Two pushes. P2PKH execution: dup, hash, compare, checksig.

### Q4: **B. BIP-16 (April 2012)**
First Bitcoin soft fork. P2SH addresses start with "3".

### Q5: **B. August 2017**
SegWit activated alongside the BCH hard fork. Block 481,824.

### Q6: **C. 4,000,000 WU**
4 million weight units. The "1 MB" cap is replaced by this weight calculation.

### Q7: **B. `weight = (non-witness × 4) + (witness × 1)`**
The discount is the witness × 1 (vs ×4). Encourages SegWit adoption.

### Q8: **C. 709,632 (November 2021)**
Speedy Trial activation. November 14, 2021.

### Q9: **C. 340, 341, 342**
Schnorr (340) + Taproot (341) + Tapscript (342). Authors: Wuille, Nick, Ruffing, Towns.

### Q10: **B. Key-path (single Schnorr signature) and script-path (MAST tree)**
Key-path is the common case (single MuSig-aggregated sig). Script-path is the fallback.

### Q11: **B. Merkelized Alternative Script Trees**
Merkle tree of alternative scripts; only the path used is revealed at spend.

### Q12: **B. Cooperating multi-sig spends are indistinguishable from single-sig spends on-chain**
The institutional-custody win. MuSig2 aggregation enables it.

### Q13: **B. An absolute timelock**
Specific block height OR Unix timestamp. The output is spendable only after that point.

### Q14: **B. A relative timelock — N blocks after the parent transaction confirms**
Used in Lightning HTLCs (Module 7).

### Q15: **B. CSV + hash preimage revelation**
HTLC = Hash Time-Locked Contract. CSV provides the timeout; preimage revelation provides the conditional release.

### Q16: **B. Verifying M-of-N signatures in P2SH/P2WSH multi-sig**
The pre-Taproot multi-sig primitive. Now superseded by MuSig2 + OP_CHECKSIGADD.

### Q17: **C. Native SegWit Bech32 (P2WPKH or P2WSH)**
BIP-173 encoding. Witness version 0.

### Q18: **D. Taproot Bech32m**
BIP-350 encoding. Witness version 1.

### Q19: **B. OP_CHECKSIGADD (for efficient batched verification) plus aggregation via MuSig2**
Two complementary approaches; choose based on use case.

### Q20: **B. The TxID depended on the signature**
TxID = double-SHA-256 of the serialized transaction including signatures. Reshape signature → new TxID. Blocked Lightning channel commitments. SegWit fixed by separating signature from TxID calculation.

### Q21: **B. A Taproot script-path quirk**
Casey Rodarmor used the Taproot witness format to store arbitrary data. The community split on whether this was "spam" or "use."

### Q22: **B. Key-path (single MuSig2-aggregated Schnorr signature)**
The privacy win: a 5-of-9 corporate multi-sig where everyone agrees is indistinguishable from a personal single-sig spend.

### Q23: **B. Misleading — Bitcoin has Scripts (programmable spending conditions)**
The accurate framing. Bitcoin Script is just less expressive than EVM. By design.

### Q24: **A. Lower fees AND on-chain indistinguishability from single-sig (privacy)**
The two main institutional wins for migrating to Taproot multi-sig.

---

## 📊 Score Yourself

- 22-24/24 → 🏆 Move to Module 7.
- 18-21/24 → ✅ Solid.
- 14-17/24 → ⚠️ Re-read the SegWit + Taproot sections.
- <14/24 → 🔁 Re-read entire Reading.md.

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 7](../Module-07-Lightning-Network-Layer-2/Reading.md)
