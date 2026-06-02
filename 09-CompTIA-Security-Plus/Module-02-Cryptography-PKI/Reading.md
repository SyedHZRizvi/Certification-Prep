# Module 2: Cryptography & PKI 🔐

> **Why this module matters:** Crypto shows up in every domain — TLS, VPNs, signatures, password hashing, certificate errors, file encryption. About 10% of exam questions touch crypto directly, and PBQs love to test certificate chains. Get this module right and the rest of Sec+ gets noticeably easier.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - [CIA triad and non-repudiation](../Module-01-Security-Fundamentals/Reading.md) — Confidentiality (what encryption provides), Integrity (what hashing provides), and Non-repudiation (what digital signatures provide). Cryptography is the *mechanism* under each.
> - Basic binary math — what a "256-bit key" means, why doubling the key length squares the brute-force time, what XOR does.
> - Hex and Base64 — you'll see both in cert files and hashes.
>
> If any of this is shaky, pause: this module compounds. Get cryptography wrong and Modules 3 (MFA), 6 (TLS/VPN), and 10 (data states) become much harder.

---

## 🍕 A Story: The Secret Note in History Class

Mr. Patel's middle-school history class. Two students — Alex and Bea — want to pass notes without Mr. Patel reading them.

**Round 1 — they share a single secret cipher** (e.g., A=Z, B=Y, C=X). Fast and easy: both can read and write with the same key. But how did they share the cipher in the first place? Bea had to slip Alex a paper at recess. If Mr. Patel intercepts that *first* exchange, the whole game is up. That's **symmetric encryption** — one shared key, brutally fast, but key distribution is the weak point.

**Round 2 — Alex installs a magic mailbox** with two slots: a *public* slot anyone can drop notes into, and a *private* slot only Alex's key opens. Bea drops her message in the public slot — only Alex can retrieve it. Now Mr. Patel can watch the drop happen and still can't read the note. That's **asymmetric encryption** — slower, but no shared secret needed.

**Round 3 — they want to verify nothing was changed mid-pass**. Bea writes the note, runs the words through a "fingerprint machine" that always produces the same 16-character code for the same input, and writes the code at the bottom. Alex re-runs the machine — if his output matches Bea's code, the note wasn't tampered with. That's **hashing** — integrity, not secrecy.

**Round 4 — they want proof of who wrote each note**. Bea writes the message, fingerprints it, then encrypts only the fingerprint with her private key. Alex decrypts the fingerprint with Bea's public key and re-fingerprints the message. Match = the note came from Bea AND wasn't altered. That's a **digital signature** — integrity + authentication + non-repudiation in one move.

Now you know all four primitives. The rest of this module is which algorithm, which key size, and which certificate.

---

## 🔢 Symmetric Encryption (Same Key Both Sides)

**Use case:** Encrypt lots of data fast (disk, database, large files, VPN tunnels, TLS bulk data after handshake).

**AES** was standardized by NIST in **FIPS 197** (November 2001) after a 5-year open competition. The winning design, **Rijndael**, came from Belgian cryptographers Joan Daemen and Vincent Rijmen (their original submission paper: "AES Proposal: Rijndael," September 1999). **RSA** is named after Rivest, Shamir & Adleman (R. Rivest, A. Shamir, L. Adleman, "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems," *Communications of the ACM*, vol. 21, no. 2, February 1978). **Diffie-Hellman** key exchange came from Whitfield Diffie and Martin Hellman ("New Directions in Cryptography," *IEEE Transactions on Information Theory*, November 1976) — the paper that essentially created modern public-key cryptography (Diffie/Hellman received the Turing Award for it in 2015).

| Algorithm | Key sizes | Status | Notes |
|-----------|-----------|--------|-------|
| **AES** (Advanced Encryption Standard) | 128, 192, 256 bits | ✅ Industry standard | Block cipher, FIPS 197 / FIPS-approved. **Default answer for symmetric on the exam.** |
| **3DES** (Triple DES) | 168 bits (effective) | ⚠️ Deprecated | Legacy; still seen in old systems but officially retired 2024 |
| **DES** | 56 bits | ❌ Broken | Historical only. Brute-forceable in hours. |
| **RC4** | 40–2048 bits | ❌ Broken | Stream cipher, lots of historical use (WEP, old TLS); avoid. |
| **Blowfish** | 32–448 bits | ⚠️ Aging | Bruce Schneier's design; replaced by Twofish/AES. |
| **Twofish** | 128/192/256 | ✅ OK | AES finalist; secure but less common. |
| **ChaCha20** | 256 bits | ✅ Modern | Stream cipher, fast on mobile (no AES hw accel), used in TLS 1.3 & WireGuard. |

### Block vs Stream
- **Block ciphers** encrypt fixed-size chunks (AES = 128-bit blocks). Use a **mode of operation**.
- **Stream ciphers** encrypt one bit/byte at a time (ChaCha20, RC4).

### AES Modes (Sec+ wants you to know these)

| Mode | What it gives you | Notes |
|------|-------------------|-------|
| **ECB** (Electronic Codebook) | Encryption only — **never use** | Identical plaintext blocks → identical ciphertext (penguin meme leaks pattern) |
| **CBC** (Cipher Block Chaining) | Confidentiality | Needs an IV; padding oracle attacks if not careful |
| **CTR** (Counter) | Confidentiality, parallelizable | Stream-like behavior from a block cipher |
| **GCM** (Galois/Counter Mode) | **Confidentiality + Integrity (authenticated encryption)** | Modern default. TLS 1.2/1.3, IPSec. **AES-GCM is the right answer.** |
| **CCM** | Auth encryption | Used in WPA2 (AES-CCMP) |

🎯 **Exam tip:** If a question mentions "authenticated encryption" or "confidentiality + integrity together," the answer is **GCM** (or CCM in wireless contexts).

---

## 🔑 Asymmetric Encryption (Public/Private Key Pair)

**Use case:** Key exchange, digital signatures, certificates. Too slow for bulk data — typically used to exchange a *symmetric session key* that does the heavy lifting.

| Algorithm | Typical key size | Use | Notes |
|-----------|------------------|-----|-------|
| **RSA** | 2048-bit min (3072 recommended; 4096 strong) | Encryption + signatures | Most common; based on factoring large primes |
| **DSA** (Digital Signature Algorithm) | 2048-bit | **Signatures only** (not encryption) | NIST standard |
| **ECC** / **ECDSA** | 256-bit ECC ≈ 3072-bit RSA strength | Encryption + signatures (ECDSA = signatures) | Much smaller keys, faster, great for mobile/IoT |
| **EdDSA / Ed25519** | 256-bit | Signatures | Modern, fast, used in SSH and TLS 1.3 |
| **ElGamal** | Variable | Encryption + signatures | Less common; basis of DSA |

### Key Exchange (just agreeing on a shared secret over an open wire)

| Algorithm | What | Notes |
|-----------|------|-------|
| **DH** (Diffie-Hellman) | Classic key exchange | Vulnerable if small primes; needs authentication separately |
| **DHE** | Ephemeral DH | New key per session — gives **Perfect Forward Secrecy (PFS)** |
| **ECDH** | Elliptic-curve DH | Smaller keys, faster |
| **ECDHE** | Ephemeral ECDH | Modern default for TLS 1.2/1.3; gives PFS |

🎯 **Memorize: PFS = Perfect Forward Secrecy.** It means compromise of the long-term private key does NOT decrypt past traffic. Achieved by ephemeral key exchange (DHE / ECDHE).

### Symmetric vs Asymmetric — Side by Side

| Property | Symmetric | Asymmetric |
|----------|-----------|------------|
| Keys | 1 shared | 2 (public + private) |
| Speed | Fast (~100×) | Slow |
| Use | Bulk data | Key exchange, signatures |
| Key distribution | Hard | Easy (publish the public) |
| Examples | AES, ChaCha20 | RSA, ECC, DSA |
| Typical real-world combo | **Hybrid:** RSA/ECDHE exchanges an AES session key | |

---

## 🧬 Hashing — Integrity Without Secrecy

A hash is a **one-way fingerprint**: same input → same output, tiny input change → completely different output, and you can't reverse the output to recover the input.

| Algorithm | Output | Status |
|-----------|--------|--------|
| **MD5** | 128 bits | ❌ Broken (collisions) — never use for security |
| **SHA-1** | 160 bits | ❌ Deprecated (Google's SHAttered collision 2017) |
| **SHA-2** (SHA-224, **SHA-256**, SHA-384, **SHA-512**) | 224–512 bits | ✅ Industry standard |
| **SHA-3** | Variable | ✅ NIST standard; different internal design than SHA-2 |
| **RIPEMD-160** | 160 bits | ⚠️ Niche (Bitcoin uses it) |
| **HMAC** (Hash-based MAC) | Depends on hash | ✅ Hash + secret key = message authentication |

### Hashing properties to know
- **Deterministic** — same input → same hash
- **Pre-image resistance** — given a hash, can't compute the input
- **Collision resistance** — can't find two inputs that produce the same hash
- **Avalanche effect** — 1-bit input change → ~50% of output bits change

### Salting, Peppering, Key Stretching (password hashing!)

| Term | What | Why |
|------|------|-----|
| **Salt** | Random per-user value added before hashing | Defeats rainbow tables, makes two identical passwords hash differently |
| **Pepper** | Site-wide secret added before hashing (stored separately from DB) | Extra layer if the DB leaks |
| **Key stretching** | Hash repeatedly (thousands of rounds) | Slows brute force. Algorithms: **PBKDF2, bcrypt, scrypt, Argon2** |

🚨 **Trap on the exam:** Plain SHA-256 is *not* a password hash. Passwords need PBKDF2 / bcrypt / scrypt / Argon2.

---

## ✍️ Digital Signatures — Integrity + Authentication + Non-Repudiation

**Recipe:**
1. Sender hashes the message → H.
2. Sender encrypts H with **their PRIVATE key** → signature.
3. Sender sends message + signature.
4. Recipient decrypts the signature with **sender's PUBLIC key** → H'.
5. Recipient hashes the received message → H''.
6. If H' == H'', the message is intact AND came from the sender (non-repudiation).

🎯 **MEMORIZE:** Signatures use the **sender's private key** to sign and the **sender's public key** to verify. Encryption for confidentiality uses the **recipient's public key** to encrypt and the **recipient's private key** to decrypt. Swap these on the exam at your peril.

---

## 🏛️ PKI — Public Key Infrastructure

PKI is the system of certificates, CAs, and trust relationships that makes asymmetric crypto usable at internet scale.

### Players

| Role | What it does |
|------|--------------|
| **Subject** | The entity the certificate is about (e.g., `www.bank.com`) |
| **CA** (Certificate Authority) | Issues + signs certificates (e.g., DigiCert, Let's Encrypt) |
| **Root CA** | The trust anchor — its self-signed cert is in OS/browser trust stores |
| **Intermediate CA** | Issues end-entity certs; signed by the Root (keeps Root key offline) |
| **RA** (Registration Authority) | Verifies the requester before the CA issues |
| **CRL** (Certificate Revocation List) | Big list of revoked certs published by the CA |
| **OCSP** (Online Cert Status Protocol) | Real-time status check ("is this cert still good?") |
| **OCSP Stapling** | Server pre-fetches and attaches the OCSP response → no client lookup |
| **CSR** (Cert Signing Request) | What you send to the CA to request a cert; contains your public key + identity |

### Certificate Chain of Trust
```
Root CA (self-signed, in trust store)
   ↓ signs
Intermediate CA
   ↓ signs
Server certificate (www.bank.com)
```

Browser walks the chain. Any break → "untrusted certificate" warning.

### Certificate Types

| Type | Used for |
|------|----------|
| **Domain Validation (DV)** | Only proves domain control; fastest, cheapest (Let's Encrypt) |
| **Organization Validation (OV)** | CA verifies the org exists |
| **Extended Validation (EV)** | Rigorous org verification; used to show the green bar (browsers now downplay) |
| **Wildcard cert** | Covers `*.example.com` (any single-label subdomain) — convenient but risky if private key leaks |
| **SAN cert** (Subject Alternative Name) | One cert covers multiple specific names (`www.x.com`, `api.x.com`, `mail.y.com`) |
| **Code signing cert** | Signs executables/scripts so the OS shows publisher trust |
| **Client cert** | Authenticates a user/device (mutual TLS, smartcards) |
| **Self-signed cert** | Signed by its own key; OK internally, browsers warn |
| **Root cert** | The CA's own self-signed cert |

### Certificate Formats (PBQ candy)

| Format | Extension | Encoding |
|--------|-----------|----------|
| **PEM** | `.pem` `.crt` `.cer` `.key` | Base64, text, `-----BEGIN CERTIFICATE-----` |
| **DER** | `.der` `.cer` | Binary |
| **PKCS#7** | `.p7b` `.p7c` | Cert chain, no private key, base64 |
| **PKCS#12** | `.pfx` `.p12` | Cert + private key + chain, password-protected |

### Key Management

| Term | What |
|------|------|
| **HSM** (Hardware Security Module) | Tamper-resistant device that generates/stores keys; FIPS 140-2/3 validated |
| **KMS** (Key Management Service) | Cloud-managed key store (AWS KMS, Azure Key Vault, GCP KMS) |
| **TPM** (Trusted Platform Module) | Hardware chip on motherboard; root of trust for device, stores BitLocker key |
| **Secure Enclave** | iPhone equivalent; isolated keystore |
| **Key Escrow** | Trusted 3rd party holds a copy of the key (for legal/recovery) |
| **Key rotation** | Periodically replacing keys to limit blast radius |

---

## 🎭 Other Crypto Concepts You Must Know

### Obfuscation
Make something hard to read but NOT secure. Examples: code minification, Base64 encoding (NOT encryption!), variable renaming. Use case: slow down a casual attacker.

🚨 **Trap:** Base64 is **encoding**, not encryption. Anyone can decode it instantly.

### Steganography
Hiding data **inside other data** — e.g., a message tucked into the least-significant bits of an image. Confidentiality through invisibility. Often combined with encryption.

### Tokenization
Replace sensitive data with a non-sensitive reference (a *token*) stored in a lookup vault. Common in PCI: replace the credit-card number on file with a token; the real card lives in a vault. The token has no math relationship to the original (unlike encryption).

### Masking
Replace part of the data with X's for display (`****1234`). Reversible — original still in the DB.

### Hashing for de-identification
One-way — used for anonymizing without keeping a recovery path.

### Blockchain
A distributed, append-only ledger of hashed blocks. Each block contains the hash of the previous block → tampering with one block invalidates all later blocks. **Open public ledger** = the textbook Sec+ definition. Use cases: cryptocurrency, supply-chain provenance, DNSSEC-ish trust scenarios.

### Cryptographic Use Cases on the Exam
- **At rest** (full disk encryption — BitLocker, FileVault, LUKS; database TDE)
- **In transit** (TLS, IPSec, SSH, S/MIME)
- **In use** (memory encryption, secure enclaves — newer topic)

### Modern crypto buzzwords
- **Quantum-resistant / post-quantum crypto** — algorithms NIST is standardizing (e.g., CRYSTALS-Kyber) to survive future quantum computers
- **Homomorphic encryption** — compute on ciphertext without decrypting; mostly research
- **Lightweight crypto** — for IoT/embedded (Ascon now NIST-standardized)
- **Birthday attack** — exploits hash collisions; why hash length matters

---

## 🔬 Scenario Walkthrough (PBQ-style)

> **Scenario:** A user opens `https://shop.example.com` and gets the error "NET::ERR_CERT_AUTHORITY_INVALID." The cert chain shows:
> - Server cert issued by "Example Internal CA"
> - "Example Internal CA" is signed by... itself
> - The user's laptop trust store has no entry for "Example Internal CA"
>
> What's broken, and what would fix it?

**Walkthrough:**
1. The error is about trust, not expiration or hostname.
2. The chain ends at "Example Internal CA," which is a **self-signed root** — not in any public trust store and not in the user's local trust store.
3. The browser cannot walk the chain to a trusted root, so it refuses.
4. **Fixes** (in order of cleanliness):

   - **Best:** Replace the server cert with one issued by a publicly trusted CA (Let's Encrypt, DigiCert, etc.). The chain now ends at a root already in the trust store.
   - **Acceptable for internal-only sites:** Push "Example Internal CA"'s public certificate into every endpoint's trust store via GPO/MDM. The chain now resolves.
   - **Wrong:** Tell users to "click through" the warning. That's a long-term security debt.

PBQ might show you 4 certs and ask "drag them in order Root → Intermediate → Server" or "which cert needs to be installed in the trust store?"

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "SSL is the same as TLS" | SSL is dead (all versions deprecated). TLS replaced it. People say "SSL cert" but mean TLS. |
| "MD5 is fine for file integrity" | NO — broken since 2004. Use SHA-256+. (Some non-security file-dedup uses still exist.) |
| "Hashing encrypts data" | NO — hashing is one-way; you can't decrypt it. |
| "Asymmetric encrypts the big stuff" | NO — symmetric encrypts bulk; asymmetric exchanges the symmetric key. |
| "ECB is fine for big files" | NO — ECB leaks structure (penguin meme). Use CBC or GCM. |
| "Salting passwords is optional if hash is strong" | NO — always salt. Pepper is bonus. |
| "Code signing certs are for HTTPS" | NO — they sign executables/scripts. Different cert type. |
| "Wildcard certs are safer because they cover everything" | NO — if `*.x.com` private key leaks, every subdomain is compromised. |
| "EV certs are still required for e-commerce" | NO — browsers no longer show the green bar; EV is rarely worth the premium. |
| "OCSP requires the client to phone home" | YES, unless OCSP **stapling** is enabled (server fetches & attaches it). |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **AES** | Symmetric block cipher, 128/192/256-bit keys; modern standard |
| **GCM** | AES mode providing authenticated encryption (conf + integrity) |
| **RSA** | Asymmetric; factoring large primes; 2048+ bit |
| **ECC / ECDSA** | Elliptic-curve crypto; smaller keys, same strength |
| **DHE / ECDHE** | Ephemeral key exchange → Perfect Forward Secrecy |
| **PFS** | Past session traffic stays safe even if private key leaks later |
| **SHA-2** | Family of secure hashes (SHA-256, SHA-512 most common) |
| **HMAC** | Hash + secret key = message authentication code |
| **Salt** | Per-user random value added before password hashing |
| **PBKDF2/bcrypt/scrypt/Argon2** | Key-stretching password-hashing algorithms |
| **Digital signature** | Hash encrypted with sender's private key |
| **PKI** | The CA/cert/trust ecosystem |
| **CA / Root CA / Intermediate CA** | Issues certs; trust anchor; subordinate issuer |
| **CRL** | List of revoked certs |
| **OCSP / OCSP stapling** | Real-time revocation check (server pre-attaches) |
| **CSR** | Cert Signing Request |
| **SAN cert** | Multiple specific hostnames in one cert |
| **Wildcard cert** | Covers `*.domain.com` |
| **HSM** | Hardware Security Module — tamper-resistant key store |
| **TPM** | Trusted Platform Module — motherboard chip; BitLocker root |
| **KMS** | Cloud Key Management Service |
| **Key escrow** | 3rd party holds key copy for recovery/legal |
| **Tokenization** | Replace sensitive data with a non-sensitive reference token |
| **Steganography** | Hiding data inside other data (e.g., images) |
| **Blockchain** | Append-only ledger of hashed blocks |

### Acronyms cheat-row (Module 2)
| Acronym | Meaning |
|---------|---------|
| AES / DES / 3DES / RC4 | Symmetric algorithms |
| RSA / DSA / ECC / ECDSA / EdDSA | Asymmetric algorithms |
| DH / DHE / ECDH / ECDHE | (Ephemeral) Diffie-Hellman key exchange |
| PFS | Perfect Forward Secrecy |
| SHA / MD5 / HMAC | Hash families & MAC |
| PBKDF2 / bcrypt / scrypt / Argon2 | Password key-stretching |
| PKI / CA / RA / CRL / OCSP / CSR | PKI vocabulary |
| TLS / SSL / S/MIME / PGP | Crypto protocols |
| HSM / TPM / KMS | Key storage |
| GCM / CBC / ECB / CTR / CCM | AES modes |
| ECDSA / Ed25519 | Modern signature algorithms |
| PEM / DER / PKCS#7 / PKCS#12 | Cert formats |
| EV / OV / DV | Cert validation levels |
| SAN | Subject Alternative Name |

---

## 📊 Case Study — Heartbleed and OpenSSL (April 2014)

**Situation.** **OpenSSL** is the open-source TLS/SSL library that runs roughly two-thirds of the world's HTTPS servers (Apache, nginx, Postfix, OpenVPN, plus tens of thousands of embedded devices). In December 2011 an OpenSSL contributor (Robin Seggelmann, then a PhD student) added support for the TLS "heartbeat" extension (**RFC 6520**). The patch was reviewed by another volunteer and merged on New Year's Eve, 31 December 2011, becoming part of OpenSSL 1.0.1 (released 14 March 2012). The patch contained a 1-line bounds-check omission. At the time, the entire OpenSSL project ran on roughly **$2,000/year** in donations and had **one full-time-equivalent** developer (Steve Marquess, *Linux Weekly News*, April 2014).

**Decision.** No one — not the contributor, not the reviewer, not the downstream packagers in Red Hat / Debian / Ubuntu / FreeBSD, not the major banks and tech companies running OpenSSL — performed the bounds-check audit that would have caught the flaw. For 27 months, every TLS handshake using the heartbeat extension allowed a remote attacker to request up to 64 KB of *raw process memory* per request. That memory could contain session keys, **private RSA keys**, passwords in flight, and decrypted plaintexts. On **1 April 2014** Neel Mehta (Google) independently rediscovered the flaw. Google patched its services privately, then coordinated disclosure with Codenomicon (the Finnish firm that had also independently found it). Public disclosure: **7 April 2014**, with the marketing-grade name "Heartbleed" and a dedicated [heartbleed.com](http://heartbleed.com) site — the first major CVE to be branded.

**Outcome.** Two-thirds of all HTTPS servers globally were vulnerable. Within 48 hours, attackers had scraped private keys from Yahoo, OkCupid, the Canada Revenue Agency (CRA tax filings during the 2014 tax season), Mumsnet, and thousands of Cisco and Juniper devices. The CRA breach exposed 900 social-insurance numbers; one teenager was charged in connection (RCMP, 16 April 2014). The estimated *global* remediation cost (cert revocations, key rotations, password resets, audits) ran into the **billions of dollars**. The Linux Foundation responded by launching the **Core Infrastructure Initiative** (CII) in late 2014 with Amazon, Cisco, Dell, Facebook, Fujitsu, Google, IBM, Intel, Microsoft, NetApp, Qualcomm, RackSpace, and VMware funding OpenSSL maintainers and other critical open-source projects — the seed of what later became the **OpenSSF** (Open Source Security Foundation, 2020).

**Lesson for the exam / for practitioners.** Heartbleed maps onto multiple Sec+ concepts simultaneously:

- **Trust in PKI is not just trust in the math.** RSA-2048 was mathematically sound. The *implementation* leaked the private key. The exam tests this distinction: when a question contrasts "algorithm strength" vs "implementation security," remember Heartbleed.
- **Certificate revocation is load-bearing.** Every site running vulnerable OpenSSL had to **revoke** its TLS certificate and re-issue. The April-May 2014 spike in CRL/OCSP traffic was so large it briefly broke several CAs. This is why the exam asks about CRL, OCSP, and OCSP stapling.
- **PFS is the mitigation.** Sites using **ephemeral key exchange** (DHE/ECDHE — true Perfect Forward Secrecy) had session-specific keys; the long-term RSA private key leaked, but past TLS sessions could not be retroactively decrypted. Sites using static RSA key transport were fully retro-compromised. After Heartbleed, ECDHE became the de-facto standard for TLS 1.2 and was *mandated* in TLS 1.3 (RFC 8446, August 2018) — directly because of this incident.
- **Supply-chain risk.** A 1-line bug in a free library compromised half the internet. Compare with the Module 4 case (SolarWinds) — same pattern, different mechanism.

**Discussion (Socratic).**
- **Q1:** OpenSSL had a working *test suite* in 2012. The heartbeat extension included no tests for malformed length fields. As a security architect onboarding a new open-source dependency in 2026, what specific dependency-hygiene controls would you require before *adopting* a library that handles cryptographic material? Defend each against the cost-of-development objection.
- **Q2:** Sites using ECDHE escaped retroactive decryption; sites using static RSA did not. Yet in 2014 many enterprises still required static RSA for their corporate-proxy / TLS-inspection appliances (they couldn't decrypt the traffic without it). When a security control (TLS-inspection visibility for DLP/AV) conflicts with another control (PFS), how do you reason about the trade-off? Build the case for each side.
- **Q3:** The Core Infrastructure Initiative (CII) effectively *subsidized* critical open-source maintainers after Heartbleed. Was this a sustainable model, or was it a one-time response to a crisis? Critique the alternative models: paid commercial-support contracts (RedHat-style), foundation membership fees (Apache-style), GitHub Sponsors, government funding (the EU's NGI program). Which would you bet on for the next 10 years and why?

---

## ✅ Module 2 Summary

You now know:

- 🔢 **Symmetric** (AES is the answer) vs **Asymmetric** (RSA/ECC) and why we combine them
- 🔑 **Key exchange** (DHE/ECDHE) and what **Perfect Forward Secrecy** buys you
- 🧬 **Hashing** for integrity + the password-hashing trio (salt, pepper, key stretching)
- ✍️ **Digital signatures** = integrity + authentication + non-repudiation, and which key signs vs verifies
- 🏛️ The **PKI** ecosystem — CAs, intermediates, CRL, OCSP, cert types, cert formats
- 🎭 **Obfuscation vs steganography vs tokenization vs masking** — different things
- 💾 Where keys live: **HSM, TPM, KMS, secure enclave, key escrow**

**Next steps:**
1. 🎥 Watch [Videos.md](./Videos.md) — especially the Messer PKI series
2. ✏️ Take the [Quiz](./Quiz.md) — aim for 22/26
3. 📋 Tape the [Cheat-Sheet](./Cheat-Sheet.md) on the wall
4. ➡️ Move on to [Module 3 — Identity & Access Management](../Module-03-Identity-Access-Management/Reading.md)

> **Where this leads.**
> - Inside this course: [Module 3](../Module-03-Identity-Access-Management/Reading.md) uses asymmetric crypto inside SAML/OIDC (signed JWTs) and FIDO2 (challenge-response with the device's private key); [Module 6](../Module-06-Network-Security/Reading.md) covers TLS, IPSec, and DNSSEC — every one is built on this module's primitives; [Module 10](../Module-10-Application-Data-Security/Reading.md) revisits encryption-in-use (confidential computing) and tokenization vs encryption distinctions.
> - Cross-course: AWS Solutions Architect (course 04) covers KMS, ACM, and CloudHSM — the AWS implementations of the HSM/KMS concepts here. Azure AI Engineer (course 08) touches on key-management for model-serving endpoints.
> - Practice: Practice Exam 1 has ~7 crypto/PKI questions; Final Mock has ~13 (the largest module slice).

---

## 📚 Further Reading (Optional)

**Primary sources / seminal papers:**
- 📄 Diffie, W. & Hellman, M. (1976). "New Directions in Cryptography." *IEEE Transactions on Information Theory*, IT-22(6), 644-654. (The paper that created public-key crypto.)
- 📄 Rivest, R., Shamir, A. & Adleman, L. (1978). "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems." *Communications of the ACM*, 21(2), 120-126.
- 📄 NIST FIPS 197 (2001, reaffirmed 2023). [*Advanced Encryption Standard (AES)*](https://csrc.nist.gov/pubs/fips/197/final).
- 📄 IETF RFC 8446 (Rescorla, 2018). [*TLS 1.3*](https://datatracker.ietf.org/doc/html/rfc8446). (Mandates PFS via (EC)DHE; deprecates static RSA key transport.)
- 📄 IETF RFC 6520 (Seggelmann et al., 2012). *TLS/DTLS Heartbeat Extension* — the source of CVE-2014-0160 (Heartbleed). Read this alongside Mehta's disclosure.

**Standards:**
- 📖 [NIST SP 800-175B Rev 1](https://csrc.nist.gov/publications/detail/sp/800-175b/rev-1/final) — Guideline for Using Cryptographic Standards
- 📖 [NIST SP 800-57 Part 1 Rev 5](https://csrc.nist.gov/publications/detail/sp/800-57-part-1/rev-5/final) — Recommendation for Key Management (the key-mgmt bible)
- 📖 [NIST FIPS 186-5 (2023)](https://csrc.nist.gov/pubs/fips/186-5/final) — Digital Signature Standard (includes RSA, ECDSA, EdDSA)

**Post-quantum (2024-2026 developments):**
- 📄 NIST FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), FIPS 205 (SLH-DSA) — finalized August 2024. The first three post-quantum standards. Sec+ now references these by name.

**Practitioner:**
- 📖 [Cloudflare blog: A (Relatively Easy to Understand) Primer on Elliptic Curve Cryptography](https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/)
- 📖 [Mozilla Server Side TLS recommendations](https://wiki.mozilla.org/Security/Server_Side_TLS) — concrete cipher-suite advice (updated through 2024)
- 📖 [Let's Encrypt: How It Works](https://letsencrypt.org/how-it-works/) — a real PKI in plain English
- 📖 Nakov, S. (2018). *Practical Cryptography for Developers*. Free online: [cryptobook.nakov.com](https://cryptobook.nakov.com/).
