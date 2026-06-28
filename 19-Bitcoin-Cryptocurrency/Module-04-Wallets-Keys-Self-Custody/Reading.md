# Module 4: Wallets, Keys & Self-Custody 🔐

> **Why this module matters:** Andreas Antonopoulos' maxim *"not your keys, not your coins"* is not a slogan, it is the operational summary of why Mt. Gox, QuadrigaCX, Celsius, BlockFi, and FTX lost their customers' funds while self-custodial Bitcoiners did not. This module unpacks the entire stack from `entropy → seed phrase → master key → child keys → addresses → spending transactions`, then builds up to institutional-grade multi-sig and MPC custody.

> **Prerequisites for this module.** Before starting:
> - [Module 2 (Cryptographic Foundations)](../Module-02-Cryptographic-Foundations/Reading.md), you must know what a private key, public key, and HASH160 are
> - [Module 3 (Network & Consensus)](../Module-03-Bitcoin-Network-Consensus/Reading.md), you must know how a transaction works
> - Cross-course: [09-CompTIA-Security-Plus Module-04 (Identity & Access Management)](../../09-CompTIA-Security-Plus/Module-04-Threats-Threat-Actors/Reading.md) covers the same multi-factor + hardware-token concepts in a corporate-IT frame.

---

## ☕ A Story: 850,000 Bitcoin, One Hot Wallet

In **early 2014**, Mt. Gox is the dominant Bitcoin exchange. At its peak in mid-2013 it handles roughly **70% of all global BTC trades**. Run from a Tokyo high-rise by a French expat named Mark Karpelès, it has the user experience of a 2003 forum and the operational discipline of one too.

On **February 7, 2014**, Mt. Gox suspends BTC withdrawals "to investigate technical issues." On **February 24**, it goes offline entirely. On **February 28**, it files for bankruptcy protection in Tokyo District Court. Total customer Bitcoin lost: approximately **850,000 BTC**, at the day's price, about $480 million.

The forensic post-mortem reveals an architecture that custody engineers in 2026 still teach as the canonical anti-pattern:

1. **Single hot wallet** held essentially all customer BTC.
2. **No segregation** between customer funds and operational funds.
3. **No multi-party signature requirement**, one set of keys, often available to the CEO (Chief Executive Officer).
4. **Transaction malleability** (a Bitcoin protocol quirk Mt. Gox claimed allowed double-withdrawal exploits, the truth was murkier).
5. **No external attestation** of reserves. Customers had no way to verify their BTC was still there.
6. **No independent audit** of cold-storage holdings.

By 2024, Mt. Gox's trustee was still distributing recovered BTC (about 142,000 BTC eventually recovered, at 2024 prices worth ~$10 billion to creditors who'd been waiting a decade). Karpelès received a suspended sentence for data manipulation but was acquitted of embezzlement. The actual whereabouts of the missing BTC remain partially unknown.

That story is your first lesson: **the cryptographic protocol can be perfect and the user can still lose everything if the custody architecture is wrong.** Every framework in this module is in some sense a direct response to Mt. Gox.

This module is the architecture.

---

## 🧬 What a Wallet Actually Is

A Bitcoin **wallet** has three components, often (but not always) bundled:

| Component | Function |
|-----------|----------|
| **Key store** | Holds private keys (or seed phrase / xprv) |
| **Signer** | Uses private keys to sign transactions |
| **Watch-only / address derivation** | Uses public keys to derive receive addresses + scan the chain |

🎯 **MEMORIZE THIS.** A wallet that holds public keys but no private keys is called a **watch-only wallet**. It can receive BTC and display balances, but it cannot spend. This is the foundation of hardware-wallet workflows: the laptop has the watch-only wallet (an xpub), the hardware device has the signing capability (the xprv).

### Hot vs warm vs cold (institutional vocabulary)

| Tier | Online? | Use | Examples |
|------|---------|-----|----------|
| **Hot** | Yes, always | Operational liquidity, real-time withdrawals | Exchange hot wallets, custodial mobile wallets |
| **Warm** | Sometimes, periodic | Daily/weekly rebalancing | Multi-sig where some signers are online |
| **Cold** | No, airgapped | Long-term storage | Coldcard, paper wallets, deep-storage HSMs |
| **Deep cold** | No, no, no, geographic-separation | Decade-scale storage | Multi-sig with off-site backup keys, encased in a vault |

Institutional custody ratios (typical, 2026):

- **95% cold** (deep-storage, multi-sig)
- **4% warm** (semi-automated, MPC or multi-sig)
- **1% hot** (operational liquidity for next-day withdrawals)

---

## 🌱 The BIP Family: Where Modern Wallet Standards Come From

Three Bitcoin Improvement Proposals define every modern wallet's behavior. Memorize them.

| BIP | Title | Year | Author(s) | What it standardizes |
|-----|-------|------|-----------|----------------------|
| **BIP-32** | Hierarchical Deterministic Wallets | 2012 | Pieter Wuille | Derive a tree of child keys from a single master seed via HMAC-SHA512 |
| **BIP-39** | Mnemonic code for generating deterministic keys | 2013 | Marek Palatinus (Slush), Pavol Rusnák, Aaron Voisine, Sean Bowe | 12 / 24 English-word seed phrases |
| **BIP-44** | Multi-account Hierarchy for Deterministic Wallets | 2014 | Marek Palatinus, Pavol Rusnák | Standard derivation paths: `m/purpose'/coin'/account'/change/address` |

Related BIPs you should recognize:

- **BIP-43**, purpose field generalization
- **BIP-49**, derivation paths for P2SH-wrapped SegWit
- **BIP-84**, derivation paths for native SegWit (Bech32)
- **BIP-86**, derivation paths for Taproot

🎯 **Exam tip.** "What does BIP-32 standardize?" → HD wallets. "What does BIP-39 standardize?" → mnemonic seed phrases. "What does BIP-44 standardize?" → derivation paths. These three are routinely confused on exams.

---

## 🌳 BIP-32: Hierarchical Deterministic Wallets

Before BIP-32, every receive address used a freshly-generated random private key. Wallet files were lists of disconnected keys. Backups required re-backing-up on every new key generation.

BIP-32 changes the picture entirely:

```
                    [Seed: 128 or 256 bits of entropy]
                              │
                              │ HMAC-SHA512("Bitcoin seed", seed)
                              ▼
                    [Master Private Key (m)] + [Chain Code]
                              │
                ┌─────────────┼─────────────┐
                │             │             │
            child 0/      child 1/      child 2/...
              (m/0)         (m/1)         (m/2)
                │
        ┌───────┼───────┐
        │       │       │
    m/0/0   m/0/1   m/0/2 ...
```

Every node in the tree is derived deterministically from its parent + an index. Knowing the master seed → can derive every key in the tree. Knowing a node → can derive all its descendants but not its parent or siblings.

### Hardened vs non-hardened derivation

| Type | Notation | Property |
|------|----------|----------|
| **Non-hardened** | `m/0` | Child public key can be derived from parent public key + index. Enables watch-only xpub. |
| **Hardened** | `m/0'` (or `m/0H`) | Requires parent private key. Hardened nodes break the "xpub-can-derive-children" property, used for account boundaries. |

🚨 **Trap.** Hardened derivation requires the parent **private** key. Non-hardened only requires the parent public key. The `'` character (or `h` or `H` suffix) is what indicates hardened.

---

## 📜 BIP-39: Seed Phrases (the 12 or 24 Words)

The cryptographic problem BIP-39 solves: random 256-bit numbers are unmemorable. The solution: encode them as English words from a 2,048-word list.

| Bits of entropy | Words | Checksum bits | Total bits |
|-----------------|-------|----------------|-------------|
| 128 | 12 | 4 | 132 |
| 160 | 15 | 5 | 165 |
| 192 | 18 | 6 | 198 |
| 224 | 21 | 7 | 231 |
| **256** | **24** | **8** | **264** |

🎯 **MEMORIZE THIS.** 24 words = 256 bits of entropy + 8-bit checksum. Standard for institutional. 12 words = 128 bits of entropy + 4-bit checksum. Standard for many consumer wallets. Both are cryptographically strong; 256 bits gives you ~256-bit security against direct brute force, 128 bits gives ~128-bit security, both vastly beyond reach.

### The 2,048-word list

The BIP-39 English wordlist has exactly **2,048 words**. Each word represents **11 bits** (2^11 = 2,048). The first 4 letters are unique to each word (so you only need to memorize the first 4 to disambiguate).

Other languages have their own BIP-39 lists: Japanese, Korean, Spanish, Chinese (Simplified + Traditional), French, Italian, Czech, Portuguese. **The wordlist used affects the derived seed**, entering English words into a Japanese wallet (or vice versa) derives a different wallet.

### The optional 25th word (passphrase)

BIP-39 specifies an optional **passphrase** added to the 12/24 words via PBKDF2:

```
seed = PBKDF2(mnemonic, "mnemonic" + passphrase, iterations=2048, hashlen=64)
```

If passphrase is empty → standard wallet. If passphrase is non-empty → an entirely different wallet, derived from the same words.

**Implications:**
- An attacker who steals the seed phrase (paper, photo, social engineering) still cannot spend without the passphrase.
- **A lost passphrase = lost funds.** No recovery possible.
- A user can have multiple "hidden wallets" by using different passphrases with the same 24 words.

🎯 **MEMORIZE THIS.** Trezor calls this the "**hidden wallet**" or **passphrase** feature; Ledger calls it the **25th word**. Same thing. It is **the** most important additional defense against seed-phrase theft.

### How the seed becomes a wallet

```
[24 English words from BIP-39 list]
            │ PBKDF2 (2048 iterations, HMAC-SHA512)
            ▼
[Seed (64 bytes)]
            │ BIP-32: HMAC-SHA512("Bitcoin seed", seed)
            ▼
[Master Private Key + Master Chain Code]
            │ Derivation path (BIP-44 etc.)
            ▼
[Child keys → addresses]
```

---

## 🛣️ BIP-44: Standard Derivation Paths

Without a standard, different wallets would derive different addresses from the same seed → wallet incompatibility nightmare.

BIP-44 (and its descendants BIP-49, BIP-84, BIP-86) specify:

```
m / purpose' / coin_type' / account' / change / address_index
```

| Field | Bitcoin value | Example |
|-------|---------------|---------|
| `purpose` | 44' (BIP-44), 49' (BIP-49), 84' (BIP-84), 86' (BIP-86) | Defines address type |
| `coin_type` | 0' = Bitcoin, 1' = Bitcoin testnet, 2' = Litecoin, 60' = Ethereum | Multi-coin separator |
| `account` | 0', 1', 2'... | User-defined account boundary |
| `change` | 0 = receive, 1 = change | Internal/external |
| `address_index` | 0, 1, 2... | Specific address |

### BIP-44 / 49 / 84 / 86 mapping (CBSA-tested)

| Standard | Purpose | Address Type | Example Path |
|----------|---------|--------------|--------------|
| **BIP-44** | 44' | P2PKH (legacy `1...`) | `m/44'/0'/0'/0/0` |
| **BIP-49** | 49' | P2SH-wrapped SegWit (`3...`) | `m/49'/0'/0'/0/0` |
| **BIP-84** | 84' | Native SegWit Bech32 (`bc1q...`) | `m/84'/0'/0'/0/0` |
| **BIP-86** | 86' | Taproot Bech32m (`bc1p...`) | `m/86'/0'/0'/0/0` |

🎯 **Exam tip.** If you import a seed into Wallet A configured for BIP-44 and then into Wallet B configured for BIP-84, the addresses will be different, same seed, different derivation. You haven't lost funds; you just need to select the matching path. CBSA tests this.

---

## 💳 Wallet Form Factors

| Form factor | Examples | Trust model | Use case |
|-------------|----------|-------------|----------|
| **Browser / mobile (hot)** | Wallet of Satoshi, BlueWallet, Phoenix, Strike | Custodial or self-custodial; online | Small amounts; daily spending |
| **Desktop (hot/warm)** | Sparrow, Electrum, Bitcoin Core | Self-custodial; online when running | Medium amounts; advanced ops |
| **Hardware wallet** | Trezor, Ledger, Coldcard, Foundation Passport, Jade | Self-custodial; signing offline | Most personal HODL |
| **Air-gapped device** | Coldcard MK4 (no USB during signing), Krux, Seedsigner | Self-custodial; never connects to internet | Paranoid / high-value |
| **Paper wallet** | Printed QR code | Self-custodial; truly offline | Legacy; mostly deprecated |
| **Multi-sig coordinator** | Unchained Capital, Casa, Nunchuk, Sparrow | Self-custodial; multi-device | Institutional + high-net-worth |

### Hardware wallet trust model

A hardware wallet:

1. Generates the seed on the device (using its own RNG, ideally a hardware RNG).
2. Displays the seed to you once for backup.
3. **Never** transmits the seed off the device.
4. Receives transactions to sign via USB/QR/SD-card.
5. Displays the destination address and amount on its own small screen for you to verify.
6. Signs internally and returns the signature.

🚨 **Trap.** The hardware wallet's screen is the only **trusted display**. Don't trust your laptop's display of the destination address, a malware-infected laptop can swap it. Always verify on the hardware screen.

---

## 🔐 Multi-Signature (Multi-Sig) Custody

A multi-sig is a Bitcoin output that requires **M of N** signatures to spend. Specified in BIP-11 / BIP-16 / BIP-67 + the native SegWit / Taproot variants.

| Pattern | Use case |
|---------|----------|
| **2-of-2** | Two parties, both must agree, escrow, joint accounts |
| **2-of-3** | Three keys, any 2 sign, most-common institutional + personal "safety net" |
| **3-of-5** | Five keys, 3 sign, larger institutional |
| **5-of-9** | Even larger; Casa's Sovereign / Diamond tiers |

### Why 2-of-3 is the workhorse

For personal high-net-worth: typical setup is **3 keys held at separate locations** (home safe, bank safety deposit box, third-party service like Casa). Lose 1 key → still recoverable from the other 2. Steal 1 key → attacker still can't spend (needs 2).

### Multi-sig vs single-sig with passphrase

Both protect against single-point-of-failure key theft. Differences:

| Property | 2-of-3 multi-sig | Single-sig + passphrase |
|----------|--------------------|-------------------------|
| Theft of one secret | Safe | Safe (unless they steal both) |
| Loss of one secret | Safe (recover from other 2) | Lost if passphrase or seed |
| Operational complexity | Higher | Lower |
| On-chain footprint | Larger (script reveals structure pre-Taproot) | Indistinguishable from single-sig |
| Privacy | Worse (pre-Taproot) | Better |
| Inheritance | Easier (give each heir a key) | Harder (must share full secret) |

🎯 **Exam tip.** **Taproot (Module 6) changes the multi-sig privacy story.** Schnorr-based multi-sig via MuSig2 looks identical to single-sig on-chain. CBSA tests this distinction.

---

## 🤝 MPC (Multi-Party Computation) Custody

Multi-Party Computation is an alternative to multi-sig that **splits a single private key across multiple parties** mathematically, without any party ever holding the full key.

| Property | Multi-Sig | MPC |
|----------|-----------|-----|
| On-chain footprint | Multi-sig script (visible structure) | Single-sig (invisible structure) |
| Chain-agnostic | No (Bitcoin script-specific) | Yes (same MPC across BTC, ETH, etc.) |
| Auditability | Easy (script is on-chain) | Harder (off-chain signing protocol) |
| Vendor dependence | Low (any Bitcoin wallet) | High (MPC providers: Fireblocks, Copper, Qredo, Cobo) |
| Performance | Slower on-chain (larger tx) | Faster on-chain |
| Compliance | Easier (signers identifiable) | Harder |

🎯 **MEMORIZE THIS.** Multi-sig = on-chain enforcement. MPC = off-chain key splitting that looks like single-sig on-chain. Different security models. Institutional custody often combines: MPC for warm tier, multi-sig for cold tier.

---

## 🪦 Inheritance Planning

A common (and exam-tested) failure mode: Bitcoiner dies, surviving family cannot access funds. Estimates suggest **~3.5–4 million BTC** are permanently lost, many from inheritance issues.

### Frameworks

| Framework | Approach |
|-----------|----------|
| **Shamir's Secret Sharing (SLIP-39)** | Split the seed into M of N shares; distribute to trusted parties. Standardized in SLIP-39 (Trezor) but NOT BIP-39. |
| **Multi-sig with heir keys** | A 2-of-3 where one key is held by the heir or an attorney. Activates on death. |
| **Casa "Inheritance"** | Casa's product; one key held by Casa, time-locked release on death verification. |
| **Dead-man switch** | Time-locked transaction that broadcasts unless cancelled periodically. |
| **Letter of intent + safe deposit box** | Low-tech: write down the recovery process, store with the attorney. |

🚨 **Trap.** "Sharing your seed with your spouse" is the simplest plan and the one most professionals recommend *against*, it eliminates the protection from a single point of compromise.

---

## 💼 Case Study, Mt. Gox (February 2014)

**Situation.** Mt. Gox had grown from a Magic: The Gathering card-trading site (origin of "Mt. Gox" = "**M**agic **T**he **G**athering **O**nline e**X**change") in 2010 to ~70% of global BTC trade volume in 2013. CEO Mark Karpelès had bought it from Jed McCaleb (later of Ripple and Stellar) in 2011. The technical architecture remained essentially a one-person hobby project as it scaled.

**Decision.** Mt. Gox kept the vast majority of customer BTC in a **single hot wallet** with a single set of keys, no multi-sig, and no segregation between customer and operational funds. Cold-storage segregation was claimed but never independently audited. The company also failed to detect a slow leak of BTC from 2011–2014 that, by various estimates, drained hundreds of thousands of BTC before the final collapse.

**Outcome.** On February 7, 2014, all withdrawals were suspended. On February 28, the company filed for bankruptcy. Approximately **850,000 BTC** were declared lost (200,000 of those were later "found" in an old format wallet). Total customer losses: ~650,000 BTC unrecovered. A decade of bankruptcy proceedings followed; the trustee distributed recovered BTC to creditors in 2024.

The cascade effects:

- BTC price crashed from ~$830 to ~$420 within weeks.
- Crypto exchanges globally accelerated cold-storage segregation, audit, and PoR (Proof-of-Reserves) practices.
- The CryptoCurrency Security Standard (CCSS) emerged in 2014 directly in response.
- "Not your keys, not your coins" became the rallying cry of the self-custody movement.
- A near-identical pattern repeated 8 years later: **QuadrigaCX (Jan 2019)** CEO Gerald Cotten died with sole knowledge of cold-storage keys; ~$190M CAD in customer funds lost. **FTX (Nov 2022)** customer funds commingled with proprietary trading; $8B+ lost.

**Lesson for the exam / for practitioners.** Three principles every exam tests:

1. **Single-point-of-failure in custody is the failure mode.** Multi-sig + multi-jurisdiction key holding + independent audit + proof-of-reserves are the minimum hygiene for any custodian, period.
2. **"Hot wallet" amounts must be operationally minimal.** Cold:warm:hot ratios of 95:4:1 are not paranoia; they are the industry standard precisely because Mt. Gox demonstrated the alternative.
3. **Customer funds must be segregated.** Mt. Gox and FTX both commingled. Coinbase, BitGo, Anchorage, Fidelity Digital Assets explicitly segregate via NYDFS or OCC charters that legally require segregation.

**Discussion (Socratic).**
- Q1: If you'd been the CEO of Mt. Gox in early 2013 and noticed a slow BTC outflow you couldn't explain, what's the play that doesn't lead to February 2014? Walk through the IR + audit path.
- Q2: A customer asks: "Why should I keep my BTC at Coinbase rather than self-custody?" Construct the strongest argument for both, and identify the threshold where self-custody starts to dominate.
- Q3: The trustee distributed BTC to creditors in 2024 (10 years post-collapse). For the median creditor, distributed BTC was worth 80× the dollar value lost. Was the long wait actually a net positive for creditors? What's the moral lesson for a custodian's bankruptcy?

---

## 🚨 The Top 10 Self-Custody Mistakes (CBP loves these)

1. **Photographing your seed phrase.** Cloud-backup, malware, anyone-with-your-iCloud-password can read it.
2. **Storing the seed on the same device as the wallet.** Defeats the purpose.
3. **Buying a hardware wallet from a non-official source.** Supply-chain attacks have been documented (Ledger's 2020 customer-data leak; pre-tampered devices on Amazon).
4. **Reusing addresses.** Worsens privacy; pre-Taproot, revealed the full public key.
5. **Generating "vanity" addresses with online tools.** The tool sees the private key.
6. **Mixing testnet and mainnet by accident.** Sending mainnet BTC to a testnet-encoded address = funds lost.
7. **Mistyping during seed restoration.** BIP-39 checksum catches most typos but not all word-order errors.
8. **Failing to test the seed before funding.** Always restore the seed onto a second device first, send a test transaction, then fund the address.
9. **No passphrase.** A 25th word is the most effective single defense against seed-phrase theft.
10. **No inheritance plan.** Even a sealed envelope to the attorney is better than nothing.

---

## 📐 The Receiving Workflow (Best Practice)

```
1. Generate new address on hardware wallet (verify on hardware screen)
2. Share address with sender (QR code, copy/paste)
3. Sender broadcasts transaction
4. Watch incoming transaction in watch-only wallet (xpub)
5. Wait for desired confirmations (1 / 3 / 6 per amount table)
6. Mark address as used; do NOT reuse for future receives
```

## 📐 The Spending Workflow (Best Practice)

```
1. Open watch-only wallet on laptop; construct PSBT (Partially Signed Bitcoin Transaction)
2. Transfer PSBT to hardware wallet (USB / QR / SD card)
3. Hardware wallet displays:
     - Destination address (verify on hardware screen)
     - Amount (verify on hardware screen)
     - Fee (verify reasonable)
     - Change-back address (verify on hardware screen)
4. Approve on hardware wallet
5. Signed PSBT returned to laptop
6. Laptop broadcasts to network
7. Confirm inclusion via mempool.space or your own node
```

🎯 **MEMORIZE THIS.** A PSBT (BIP-174) is the standard format for multi-step signing flows. Coordinators (Sparrow, Specter, Caravan, Casa, Unchained) pass PSBTs between cosigners.

---

## 🚨 Common Misconceptions To Unlearn

| Misconception | Reality |
|---|---|
| "Hardware wallets are unhackable" | Defeats most attack classes but not all. Side-channel attacks (Trezor T glitch), supply-chain attacks (pre-tampered devices), and seed-input attacks exist. The mitigation is layered (passphrase + multi-sig). |
| "Multi-sig is only for institutions" | 2-of-3 is the *baseline* for any individual holding >~$50K. Sovereign-class users (Casa Diamond) use 5-of-9 multi-sig across continents. |
| "I'll just remember the 24 words" | Don't. Write down. Use steel plates for fire/flood resistance. Test with a small transfer first. |
| "Ledger / Trezor are interchangeable" | Trezor is open-source firmware; Ledger uses a closed secure element. Different threat models. |
| "Custodial wallets are safe because they're regulated" | Mt. Gox was Japanese-incorporated. QuadrigaCX was Canadian-incorporated. FTX was Bahamian-incorporated. "Regulated" is necessary but not sufficient, segregation + audit + multi-sig + proof-of-reserves are required. |
| "My passphrase is too short to matter" | A short passphrase reduces the entropy gain dramatically. Use ≥6 random words or a long passphrase. |

---

## ⚠️ Exam Traps to Watch For

1. **BIP numbers.** 32 = HD, 39 = mnemonic, 44 = derivation path. Don't swap.
2. **24 words = 256 bits of entropy** (with 8-bit checksum, 264 total bits). 12 words = 128 bits.
3. **Passphrase = 25th word.** Optional; produces a different wallet; loss = funds lost.
4. **Hardened vs non-hardened derivation.** Hardened requires parent private key; non-hardened works from parent public key.
5. **PBKDF2 iterations in BIP-39: 2048.** Not 1024, not 10,000.
6. **Hardware wallet's screen is the only trusted display.**
7. **BIP-44 / 49 / 84 / 86 → legacy / P2SH-SegWit / native SegWit / Taproot.**
8. **Mt. Gox lost 850,000 BTC in Feb 2014.** Exam asks "how many BTC did Mt. Gox lose?", memorize ~850K.
9. **Coldcard, Trezor, Ledger** are hardware wallet brands. The differences matter for institutional procurement.

---

## 🎓 Key Terms To Know

| Term | Definition |
|------|------------|
| **Seed phrase / mnemonic** | 12 or 24 English words from BIP-39 list |
| **Entropy** | The randomness behind the seed; 128 or 256 bits |
| **Passphrase / 25th word** | Optional BIP-39 password; produces a different wallet |
| **HD wallet (BIP-32)** | Hierarchical Deterministic, derive a tree of keys from one seed |
| **Derivation path (BIP-44)** | `m/purpose'/coin'/account'/change/index` |
| **xprv / xpub** | Extended private / extended public key (BIP-32) |
| **Watch-only** | Wallet with xpub but no xprv; can receive, cannot spend |
| **PSBT (BIP-174)** | Partially Signed Bitcoin Transaction format |
| **Hot / Warm / Cold** | Online / sometimes-online / airgapped storage tiers |
| **Hardware wallet** | Dedicated device that signs offline |
| **Multi-sig** | M of N signatures required to spend |
| **MPC** | Multi-Party Computation; off-chain key splitting |
| **SLIP-39** | Shamir's Secret Sharing standard (Trezor) |
| **Coinjoin** | Privacy technique: combine multiple users' transactions |
| **Address reuse** | Receiving multiple times to the same address (avoid) |

---

## ✅ Module 4 Summary

You now know:

- 🌱 BIP-32 / BIP-39 / BIP-44, the three standards every modern wallet uses
- 🌳 How a seed phrase becomes a tree of derivable keys
- 📜 The 12/24-word mnemonic (128/256 bits of entropy)
- 🔑 Optional passphrase (25th word) and why it's the most important defense
- 🛣️ Derivation paths and how BIP-44/49/84/86 map to address types
- 💳 Wallet form factors: hot/warm/cold, hardware vs software vs paper
- 🔐 Multi-sig and MPC custody architectures
- 🪦 Inheritance planning (SLIP-39 Shamir, multi-sig with heir keys, Casa Inheritance)
- 💼 Mt. Gox as the canonical "what not to do" case

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md), particularly Antonopoulos on inheritance
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Print the [Cheat Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 5: Mining & Proof-of-Work Economics](../Module-05-Mining-Proof-of-Work-Economics/Reading.md)

---

> **Where this leads.**
> - Inside this course: Module 6 explains how the multi-sig and Taproot scripts work at the protocol layer; Module 7 builds Lightning channels on top of these self-custody primitives; Module 9 audits institutional custody against CCSS.
> - Cross-course: `09-CompTIA-Security-Plus` Module-04 (IAM (Identity and Access Management)) covers MFA (Multi-Factor Authentication), hardware tokens (YubiKey, FIDO2), and the same general "what you have / what you know" framework.
> - Practice: Practice Exam 1 has 6–8 questions from this module (BIP numbers, multi-sig, inheritance). Final Mock asks scenario questions on custody architecture choices.

---

## 💬 Discussion, Socratic prompts

1. **The "regulated custody" question.** A high-net-worth client argues that Coinbase Custody (NYDFS-chartered trust company, SOC (Security Operations Center) 2 Type II, insurance) is safer than self-custody. Construct the strongest argument for both. At what dollar threshold does each side dominate?
2. **The passphrase paradox.** A passphrase protects against seed theft but creates a single point of failure (passphrase loss = funds lost forever). Design an inheritance plan that handles both threats. What's the unavoidable trade-off?
3. **2-of-3 vs 3-of-5 multi-sig.** For a $5M personal holding, defend either 2-of-3 (simpler, faster recovery) or 3-of-5 (more resilient to multiple compromises), and show the math of expected loss under different attack/loss scenarios.
4. **MPC vs multi-sig for an exchange.** An exchange must rebalance its warm wallet hourly with sub-second signing latency. Multi-sig is slow; MPC is fast. What's the security trade-off, and what's the audit-and-compliance trade-off?
5. **The QuadrigaCX precedent.** Gerald Cotten died with sole knowledge of cold-storage keys. How does your custody architecture survive the CEO dying in the next 24 hours? Walk through the runbook.

---

## 📚 Further Reading

- 📖 **Antonopoulos, *Mastering Bitcoin* 2e** Chapters 4-5 (Keys & Addresses, Wallets).
- 📖 **Antonopoulos, *The Internet of Money* vol 2 chapter on inheritance.**
- 📰 **BIP-32, BIP-39, BIP-44, BIP-49, BIP-84, BIP-86, BIP-174** at github.com/bitcoin/bips.
- 📰 **SLIP-39** at github.com/satoshilabs/slips.
- 📰 **Casa "Sovereign / Diamond" white papers** at keys.casa.
- 📰 **Unchained Capital's "Multisig Concierge" educational series.**
- 📰 **Jameson Lopp, "A Modest Privacy Protection Proposal for Bitcoin"** at lopp.net.
- 🎓 **MIT 15.S12, Lecture 11** (Smart Contracts and Use Cases) touches on multi-sig.
- 🎓 **Princeton MOOC, Week 4** (How to Store and Use Bitcoins).
