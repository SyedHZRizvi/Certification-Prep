# Module 6: Bitcoin Script & Programmability 📜

> **Why this module matters:** Bitcoin has a programming language. Most people don't know that, and most discussions of "smart contracts" implicitly compare Bitcoin's Script to Ethereum's EVM and call the comparison a Bitcoin loss. This module argues the opposite: **Bitcoin Script is what Bitcoin *should* be**, a deliberately bounded language that buys decades of safety, and which (post-Taproot) is far more expressive than 2009-vintage Script. You'll leave this module able to read a P2PKH locking script, understand how SegWit decoupled signature from transaction ID, and explain how Taproot's MAST + Schnorr enables 5-of-9 multi-sig that looks like single-sig on-chain.

> **Prerequisites for this module.** Before starting:
> - [Module 2 (Cryptographic Foundations)](../Module-02-Cryptographic-Foundations/Reading.md), HASH160, ECDSA, Schnorr
> - [Module 3 (Network & Consensus)](../Module-03-Bitcoin-Network-Consensus/Reading.md), transaction structure, ScriptSig vs ScriptPubKey
> - [Module 4 (Wallets)](../Module-04-Wallets-Keys-Self-Custody/Reading.md), address types

---

## ☕ A Story: The Soft Fork Bitcoin Activated by Doing Nothing

It is **November 14, 2021**. At block height **709,632**, the Taproot soft fork activates on the Bitcoin network. Three Bitcoin Improvement Proposals BIP-340 (Schnorr signatures), BIP-341 (Taproot, including MAST), BIP-342 (Tapscript) become consensus rules.

Almost nothing visibly changes. The price of Bitcoin doesn't move on the news (already priced in). Most users have no idea anything happened. Most wallets don't yet support Taproot addresses.

But under the hood, four years of cryptographic engineering have just shipped. **Schnorr signatures replace ECDSA for new transactions.** **Multi-signature spending can now be aggregated into a single signature using MuSig2** meaning a 5-of-9 corporate vault looks indistinguishable on-chain from a single-sig personal wallet. **Merkelized Alternative Script Trees (MAST) let complex contracts reveal only the actual execution path** privacy and efficiency at the same time. The script length limit and `OP_*` opcode menu expand modestly. The total Bitcoin script ecosystem becomes more expressive in the same week.

The Taproot activation was significant for what it *didn't* do. It didn't add Turing-completeness. It didn't introduce a new VM. It didn't enable Ethereum-style smart contracts. It tightened consensus rules backward-compatibly, kept the conservative posture, and shipped years of careful work.

That story is your first lesson: **Bitcoin's culture is "do less, but ship what you do correctly." Taproot represents the most expressive Bitcoin Script change in a decade, and it was a soft fork small enough that most non-developers didn't notice it shipped.**

This module is the language.

---

## 🔤 What Bitcoin Script Is

**Bitcoin Script** is a **stack-based**, **non-Turing-complete** scripting language. Every Bitcoin transaction output (UTXO) has a **locking script** (ScriptPubKey) attached. To spend that output, the spender provides an **unlocking script** (ScriptSig, or in SegWit/Taproot, the witness) that when executed alongside the locking script leaves a `true` on the stack and the stack contains no other elements.

| Property | Choice | Why |
|----------|--------|-----|
| **Execution model** | Stack-based, postfix (like RPN calculators or Forth) | Simple, fast to execute |
| **Loops** | None | Bounded execution |
| **Conditionals** | OP_IF / OP_ELSE / OP_ENDIF (bounded) | Limited branching |
| **Recursion** | None | Bounded execution |
| **Memory** | Stack only, with size + count limits | Bounded memory |
| **Floating-point** | None | Determinism |
| **Output** | Pass / Fail | Verification, not computation |

🎯 **MEMORIZE THIS.** Bitcoin Script is **intentionally NOT Turing-complete**. This is a feature, not a bug. The trade-off: less expressive than Ethereum's EVM, but provably-bounded execution → no infinite-loop DoS risk, no gas-meter complexity, no surprising security exploits like the DAO hack.

---

## 🧱 The Anatomy of a Transaction Output (Recap)

Every Bitcoin transaction output has:

```
Output {
   value:        amount in sats
   scriptPubKey: locking script (specifies the conditions to spend)
}
```

And every input that spends a UTXO has:

```
Input {
   prev_txid:   reference to the UTXO
   prev_index:  which output
   scriptSig:   unlocking script (provides data + signatures)
   witness:     (SegWit / Taproot) the signatures + witness data
   sequence:    locktime / RBF flag
}
```

🎯 **Exam tip.** Pre-SegWit, signatures went in `scriptSig`. Post-SegWit, signatures and other witness data are in a separate `witness` field. Post-Taproot, the witness format is further refined for Schnorr.

---

## 📜 The Most Common Locking Scripts

Five output types account for >99% of Bitcoin's UTXO set in 2026.

### 1. P2PK (Pay-to-Public-Key), Day 1, mostly historical

```
ScriptPubKey:  <pubkey> OP_CHECKSIG
ScriptSig:     <signature>
```

Used in the very early days (Satoshi sending to Hal Finney, the 50-BTC Genesis output). Verbose; the full public key sits in the output. Mostly deprecated; many of Satoshi's coins are in P2PK outputs.

### 2. P2PKH (Pay-to-Public-Key-Hash), Legacy, addresses start with "1"

```
ScriptPubKey:  OP_DUP OP_HASH160 <pubkey_hash> OP_EQUALVERIFY OP_CHECKSIG
ScriptSig:     <signature> <pubkey>
```

The most-common legacy address format. Spender reveals pubkey at spend time; receiver gives a shorter address.

🎯 **Walk through the script execution:**
1. Stack starts with the spender's `signature` and `pubkey` pushed.
2. `OP_DUP` duplicates the pubkey.
3. `OP_HASH160` replaces the top with HASH160(pubkey) = pubkey_hash.
4. `<pubkey_hash>` is pushed.
5. `OP_EQUALVERIFY` pops both and asserts they're equal; if not, fail.
6. `OP_CHECKSIG` pops pubkey + signature, returns true if signature is valid.
7. Stack ends with `true` → output unlocked.

### 3. P2SH (Pay-to-Script-Hash), BIP-16, April 2012, addresses start with "3"

The brilliance of P2SH: lock to the *hash of a redeem script* rather than a specific script. Spender reveals the script at spend time.

```
ScriptPubKey:  OP_HASH160 <script_hash> OP_EQUAL
ScriptSig:     <push-data of redeem_script>
               (which itself contains signatures + the actual script logic)
```

Use cases:

- **Multi-sig (2-of-3, 3-of-5)** before Taproot
- **Wrapped SegWit** (P2SH-P2WPKH, the legacy-compatible SegWit)
- Custom timelock contracts

🎯 **Exam tip.** P2SH was the first Bitcoin soft fork (BIP-16, April 2012). The addresses start with "3". The hash committed in the output is the HASH160 of the redeem script.

### 4. P2WPKH / P2WSH (Native SegWit), BIP-141, August 2017, addresses start with "bc1q..."

SegWit (Segregated Witness) moves signatures into a separate witness field, fixing three problems:

- **Transaction malleability**, TxID no longer depends on signature shape
- **Block-space efficiency**, witness data is discounted in weight calculation
- **Scripting extensibility**, versioned witness program enables future upgrades like Taproot

```
ScriptPubKey:  <0x00> <pubkey_hash>     (P2WPKH; 20 bytes)
            or <0x00> <script_hash>     (P2WSH; 32 bytes)
ScriptSig:     empty
Witness:       <signature> <pubkey>      (P2WPKH)
            or <signatures> <redeem_script>  (P2WSH)
```

🎯 **MEMORIZE THIS.** SegWit's two effective block-size improvements:

1. **Weight units instead of bytes.** Max block weight = 4,000,000 WU. Non-witness data counts as 4 WU/byte; witness data counts as 1 WU/byte. So a witness-heavy block can be larger than 1 MB in bytes.
2. **Fixes malleability.** TxID is now independent of signature shape, enabling Lightning to use unconfirmed transactions as channel commitments (Module 7).

### 5. P2TR (Pay-to-Taproot), BIP-341, November 2021, addresses start with "bc1p..."

Taproot is the most consequential Bitcoin Script upgrade since SegWit. It combines three things:

- **Schnorr signatures** (BIP-340) replace ECDSA for the new scheme
- **Taproot itself** (BIP-341) defines two spend paths: a "key path" (single signature) and a "script path" (a MAST tree)
- **Tapscript** (BIP-342) is the updated scripting language for Taproot script-path spends

```
ScriptPubKey:  <0x01> <33-byte taproot output key>
```

The output key is a tweaked public key derived from:

- An **internal public key** (Schnorr-valid pubkey, possibly a MuSig aggregation of multiple)
- A **Merkle root** of alternative script paths (which may be empty, pure key-path)

#### Key-path vs script-path spending

| Spend type | Witness contains | Privacy |
|------------|-------------------|---------|
| **Key path** (most common) | Single 64-byte Schnorr signature | Identical to single-sig P2WPKH spend |
| **Script path** | Reveal one of the script branches + its inputs + Merkle proof | Reveals which branch was used |

**The killer feature.** A 5-of-9 corporate multi-sig where all 9 cosigners agree can spend via key path (MuSig2 aggregation) → looks identical to single-sig. If one cosigner disagrees and the spend must use a fallback script path, only that path is revealed.

🎯 **MEMORIZE THIS.** Taproot's privacy property: **cooperating multi-signature spends are indistinguishable from single-sig spends on-chain.** This is the institutional-custody privacy win.

---

## 🧮 MAST (Merkelized Alternative Script Trees)

MAST = a Merkle tree of alternative scripts. Each "leaf" is a script; the root commits to all of them. At spend time, only the leaf used is revealed (with its Merkle proof). Unused leaves stay hidden.

**Example use case:** an inheritance contract that allows:

- Path 1: Owner signs (most common)
- Path 2: Owner + spouse sign jointly (also common)
- Path 3: Spouse + attorney sign after 1-year timelock (rare, for inheritance)

Pre-Taproot: all three paths are visible in the redeem script when first spent, leaking the spending logic. Post-Taproot with MAST: only the path actually used is revealed. The hidden paths stay private forever.

🎯 **Exam tip.** MAST + Schnorr together = the institutional-custody privacy upgrade of 2021. Princeton and Stanford coursework name-checks the combination.

---

## 🕰️ Time-Locked Scripts (CLTV + CSV)

Two soft forks added time-based spending conditions:

| Opcode | BIP | Activated | Function |
|--------|-----|-----------|----------|
| **OP_CHECKLOCKTIMEVERIFY (CLTV)** | BIP-65 | Dec 2015 | Output can only be spent after absolute block height or time |
| **OP_CHECKSEQUENCEVERIFY (CSV)** | BIP-112 | July 2016 | Output can only be spent after relative delay |

### CLTV, absolute timelock

```
<timelock_value> OP_CHECKLOCKTIMEVERIFY OP_DROP <regular_script>
```

Spendable only after block height (or Unix timestamp) `timelock_value`. Used for:

- Inheritance contracts ("after 2030-01-01, my children can claim")
- Vested grants ("vest 25% in year 2, 50% in year 3...")

### CSV, relative timelock

```
<relative_delay> OP_CHECKSEQUENCEVERIFY OP_DROP <regular_script>
```

Spendable only `relative_delay` blocks after the *containing transaction* was confirmed. Used for:

- **Lightning Network channel timeouts** (Module 7), the cornerstone of HTLCs
- "Wait 24 hours after issuance before withdrawal" patterns

🎯 **MEMORIZE THIS.** CLTV = absolute, CSV = relative. Lightning HTLCs depend on CSV. Inheritance and vesting depend on CLTV.

---

## 📊 The Tx Weight Unit Math (SegWit Discount)

Pre-SegWit, the block-size limit was 1 MB (1,000,000 bytes). Post-SegWit, it's 4 million **weight units** (WU). The conversion:

```
weight = (non-witness bytes × 4) + (witness bytes × 1)
```

A pure-SegWit transaction has roughly **75% of its bytes in the witness**, so the weight is much less than 4 × bytes.

**Example.** A P2WPKH spend is about 110 bytes total, of which ~70 are signature/witness. Its weight is:

```
weight ≈ (40 × 4) + (70 × 1) = 230 WU
```

A pre-SegWit P2PKH spend is ~190 bytes, all non-witness:

```
weight ≈ 190 × 4 = 760 WU
```

Same effective transaction, but P2WPKH is **~3× cheaper** in weight. Hence fee savings.

🎯 **MEMORIZE THIS.** Max block weight = **4,000,000 WU**. Max block size in bytes is variable (up to ~4 MB in extreme cases). The "1 MB block size" framing is obsolete.

---

## 💼 Case Study, The Taproot Activation (November 14, 2021)

**Situation.** By 2020, Bitcoin had been without a soft fork in three years (since SegWit). The Taproot proposal had gone through over four years of cryptographic engineering, review, and BIP authorship by Pieter Wuille, Jonas Nick, Tim Ruffing, and Anthony Towns. The community had learned hard lessons from the bitter SegWit / BCH activation battles of 2017. Activation needed to avoid the political theater of 2017.

**Decision.** The community settled on **"Speedy Trial"** activation: a 3-month signaling window starting at block 681,408 (April 2021), with a high (90%) signaling threshold. If miners signaled ≥90% in any 2,016-block period within the window, activation locked in for November 2021. If not, the proposal would have to be re-discussed.

Signaling reached the 90% threshold by **June 12, 2021** (the second signaling period). Lock-in followed; activation at block **709,632 on November 14, 2021**. No chain split. No mempool drama. No major drama at all.

**Outcome.** Taproot was the smoothest major soft-fork activation in Bitcoin's history. Adoption has been gradual: as of 2025, ~30-40% of new transactions use P2TR addresses; the rest are P2WPKH (SegWit) and legacy. The privacy benefits accumulate over time, the more Taproot adoption, the more single-sig and multi-sig spends are indistinguishable.

Three downstream consequences:

1. **Ordinals / Inscriptions** (Casey Rodarmor, January 2023) used a Taproot script-path quirk to inscribe arbitrary data into Bitcoin transactions. This was *unintended* by the Taproot authors but legal under the new rules.
2. **MuSig2** (Nick, Ruffing, Seurin, 2020) became practical, enabling efficient multi-sig that looks like single-sig.
3. **Lightning Network** began transitioning to Taproot-based channels for privacy and efficiency.

**Lesson for the exam / for practitioners.** Three principles every exam tests:

1. **Soft-fork activation can be smooth when the community trusts the proposal and process.** Speedy Trial worked because the proposal had been technically vetted; the political wars of 2017 were avoided.
2. **Protocol changes have emergent consequences.** The Ordinals wave was unforeseen by Taproot's authors; it created an entire new fee market three years later. Module 5 returned to this.
3. **Bitcoin's "do less, do it right" culture means most upgrades take years.** Taproot activation in 2021 was the culmination of work that started in 2017. CBP candidates should appreciate this conservatism, not lament it.

**Discussion (Socratic).**
- Q1: If Taproot had been an Ethereum-style hard fork, what would the activation have looked like? Why is Bitcoin's culture distrustful of hard forks even when "obviously good"?
- Q2: The Ordinals wave was unforeseen by Taproot's authors. Was Taproot's permissionless flexibility a feature or a bug? What does the answer imply for future Bitcoin upgrades (e.g., OP_CAT re-enablement, BIP-300 sidechains)?
- Q3: A bank custodian asks: should we migrate from P2WSH multi-sig to P2TR with MuSig2? Walk through the operational benefits vs the upgrade risk.

---

## 🚀 What Bitcoin Script Can (and Cannot) Do

### Things Bitcoin Script CAN do

- Lock to a public key or pubkey hash (P2PK, P2PKH, P2WPKH, P2TR)
- Multi-signature (M-of-N) via P2SH, P2WSH, or P2TR
- Time-locked spending (CLTV, CSV)
- Hash-lock conditions (preimage-reveal, used in HTLCs)
- Merkelized alternative paths (MAST in Taproot)
- Atomic swaps (across chains, via HTLCs)

### Things Bitcoin Script CANNOT do (without Turing-complete L2)

- Loops or recursion
- Arbitrary computation (e.g., on-chain order book)
- Native lending or interest accrual
- Compose smart contracts across multiple state transitions
- Inflation, on-chain governance, or supply changes

🎯 **Exam tip.** If a question asks "can Bitcoin support X?" where X is a generic smart-contract feature: the answer is usually "yes, via L2 (Lightning, RGB, Liquid, RSK), but not at L1." Module 7 unpacks the L2 layer.

---

## 🔬 Tapscript, The Updated Scripting Language

Tapscript (BIP-342) is the scripting language used inside Taproot's script-path spends. Differences from legacy Script:

- **OP_CHECKSIG** now does Schnorr verification (legacy did ECDSA)
- **OP_CHECKMULTISIG / OP_CHECKMULTISIGVERIFY** removed; use multiple individual OP_CHECKSIG or aggregation
- New opcode **OP_CHECKSIGADD** for efficient k-of-n via batched verification
- More flexible script-size limits

🎯 **Exam tip.** OP_CHECKMULTISIG is a relic of the pre-Taproot multi-sig era. Modern multi-sig under Taproot uses MuSig2 (key-path) or OP_CHECKSIGADD (script-path).

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Bitcoin doesn't have smart contracts" | It does. They're called "Scripts" and they're deliberately non-Turing-complete. |
| "Taproot makes Bitcoin Turing-complete" | No. Taproot adds Schnorr + MAST + minor opcode changes. Still bounded. |
| "Ordinals are an attack on Bitcoin" | Or a feature, depends on framing. The Taproot rules permitted them; the market priced the resulting fee market. |
| "P2SH is deprecated" | Pre-SegWit P2SH is mostly replaced by P2WSH. But P2SH-wrapped-SegWit (3...) is still common for legacy-wallet compatibility. |
| "Multi-sig is identifiable on-chain" | Pre-Taproot: yes, the script structure is visible at spend. Post-Taproot with MuSig2: cooperating multi-sig is indistinguishable from single-sig. |
| "SegWit increased the block size" | Technically yes (4 MWU vs 1 MB), but the framing is "different unit, witness discounted." |
| "OP_CHECKMULTISIG is how modern multi-sig works" | Used to be. Modern multi-sig: MuSig2 key-path under Taproot. |
| "CLTV and CSV are the same" | CLTV = absolute (specific block height/time). CSV = relative (delay from confirming tx). |

---

## ⚠️ Exam Traps to Watch For

1. **Stack-based, NOT Turing-complete.** Don't confuse with EVM.
2. **P2PK vs P2PKH.** P2PK has full pubkey in output; P2PKH has the hash.
3. **P2SH = BIP-16, April 2012.** First Bitcoin soft fork.
4. **SegWit = BIP-141, August 2017.** Block weight, witness separation.
5. **Taproot = BIPs 340/341/342, November 2021** (block 709,632).
6. **MAST.** Merkelized Alternative Script Trees. Privacy via revealing only the used path.
7. **Schnorr aggregation (MuSig2).** Multi-sig that looks like single-sig.
8. **CLTV = absolute, CSV = relative.**
9. **Block weight unit cap = 4,000,000 WU.** Not 1 MB anymore.
10. **Tapscript replaced OP_CHECKMULTISIG.** Use OP_CHECKSIGADD or aggregation.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Bitcoin Script** | Bitcoin's stack-based, non-Turing-complete scripting language |
| **ScriptPubKey / locking script** | Defines conditions to spend an output |
| **ScriptSig / unlocking script** | Provides signatures + data to satisfy the locking script |
| **Witness** | SegWit/Taproot's separate signature storage |
| **P2PK / P2PKH / P2SH / P2WPKH / P2WSH / P2TR** | The major output types |
| **Redeem script** | The full script inside a P2SH or P2WSH output |
| **SegWit (BIP-141)** | Segregated Witness; weight units; fixes malleability |
| **Weight unit (WU)** | New block-space accounting; max 4M per block |
| **Taproot (BIP-341)** | Two-spend-path output; Schnorr + MAST |
| **MAST** | Merkelized Alternative Script Trees |
| **MuSig2** | Schnorr signature aggregation scheme |
| **Tapscript (BIP-342)** | The script language inside Taproot script-path |
| **OP_CHECKSIG / OP_CHECKSIGADD** | Signature verification opcodes |
| **OP_CHECKLOCKTIMEVERIFY (CLTV)** | Absolute-time spending condition (BIP-65) |
| **OP_CHECKSEQUENCEVERIFY (CSV)** | Relative-time spending condition (BIP-112) |
| **HTLC** | Hash Time-Locked Contract (Module 7) |
| **Ordinals / Inscriptions** | Method to embed arbitrary data in Taproot witness data |

---

## ✅ Module 6 Summary

You now know:

- 🔤 Bitcoin Script is stack-based, non-Turing-complete (by design)
- 📜 The 5 standard output types: P2PK, P2PKH, P2SH, P2WPKH/P2WSH, P2TR
- 🧱 How `OP_DUP OP_HASH160 ... OP_EQUALVERIFY OP_CHECKSIG` unlocks a P2PKH spend
- 🆕 SegWit (BIP-141, August 2017): weight units, malleability fix, 4 MWU cap
- ✨ Taproot (BIPs 340/341/342, November 2021): Schnorr + MAST + Tapscript
- 🧮 MAST and the privacy property, cooperating multi-sig indistinguishable from single-sig
- 🕰️ CLTV (absolute) and CSV (relative) timelocks
- 💼 The November 2021 Taproot activation case and the Ordinals downstream consequence

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 7: Lightning Network & Layer-2](../Module-07-Lightning-Network-Layer-2/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 7 builds Lightning channels on top of CSV + HTLC + SegWit's malleability fix; Module 9 audits institutional Taproot adoption.
> - Cross-course: `09-CompTIA-Security-Plus` Module-09 covers cryptographic protocols generally; Taproot's MuSig2 is in that intellectual neighborhood.
> - Practice: Practice Exam 2 has 5-7 questions on Script, SegWit, Taproot. Final Mock has scenario questions on choosing output types.

---

## 💬 Discussion, Socratic prompts

1. **Turing-complete vs bounded.** Vitalik Buterin's 2014 critique of Bitcoin Script motivated Ethereum's Turing-complete EVM. The DAO hack (2016) proved one cost of that choice. Construct the strongest argument that Bitcoin's bounded design was correct AND the strongest counter-argument. Where would you draw the line in 2026?
2. **The Ordinals debate.** The Inscriptions protocol used a Taproot quirk to encode arbitrary data in witness data. The community split into "spam" vs "feature" camps. Construct the strongest version of each. What does the resulting fee market imply about permissionless protocols?
3. **MuSig2 institutional migration.** A bank with 5-of-9 P2WSH multi-sig considers migrating to P2TR with MuSig2. What's the privacy win? What's the operational risk? At what custody-size threshold does the migration become clearly worth it?
4. **The OP_CAT re-enablement debate.** OP_CAT (string concatenation) was disabled in 2010 over DoS concerns. Re-enabling it could enable more expressive scripts (covenants, BitVM, etc.). Defend the conservative "don't re-enable" position AND the progressive "re-enable" position.
5. **The "Bitcoin-as-settlement" view.** Some argue Bitcoin Script should stay minimal (settlement layer only), with all computation moving to L2 (Lightning, RGB). Others argue more expressive L1 (covenants, sidechains) is necessary. What's the trade-off, and where would you land for the 2030 roadmap?

---

## 📚 Further Reading

- 📖 **Antonopoulos, *Mastering Bitcoin* 2e** Chapter 7 (Advanced Transactions and Scripting) + Chapter 9 (SegWit).
- 📖 **Antonopoulos / Osuntokun / Pickhardt, *Mastering the Lightning Network*** Chapter 5 (Bitcoin Foundations Including SegWit).
- 📰 **BIP-16, 65, 112, 141, 173, 340, 341, 342, 350** at github.com/bitcoin/bips.
- 📰 **Pieter Wuille, Taproot explainer threads on Twitter (2020-2021).**
- 📰 **Murch, Bitcoin Script primer at murch.one.**
- 📰 **Bitcoin Optech, Taproot Workshop materials.**
- 📰 **Casey Rodarmor, Ordinals theory.**
- 🎓 **MIT 15.S12, Lecture 11** (Smart Contracts).
- 🎓 **Stanford CS251, Lecture 6** (Bitcoin Script).
