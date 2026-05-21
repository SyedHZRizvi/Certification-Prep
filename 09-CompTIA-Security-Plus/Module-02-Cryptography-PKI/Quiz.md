# ✏️ Module 2 Quiz: Cryptography & PKI

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Aim for 22/26 minimum.

---

## Questions

### Q1. Which algorithm is a symmetric block cipher and the modern standard?
A. RSA
B. AES
C. SHA-256
D. ECC

---

### Q2. To digitally sign a message, the sender encrypts the message's hash with:
A. The sender's public key
B. The sender's private key
C. The recipient's public key
D. The recipient's private key

---

### Q3. To send a confidential message that only Bob can read, Alice encrypts it with:
A. Alice's private key
B. Alice's public key
C. Bob's public key
D. Bob's private key

---

### Q4. Which provides authenticated encryption (confidentiality AND integrity in one mode)?
A. AES-ECB
B. AES-CBC
C. AES-GCM
D. RC4

---

### Q5. The PRIMARY reason ECC (elliptic curve) is popular on mobile and IoT devices is:
A. Stronger security than RSA at any size
B. Smaller key sizes for equivalent strength
C. It is symmetric so it's faster
D. It does not require certificates

---

### Q6. Which key exchange provides Perfect Forward Secrecy?
A. RSA key transport
B. Static DH
C. DHE / ECDHE
D. SHA-256

---

### Q7. Which is BROKEN and should not be used for security purposes?
A. SHA-256
B. SHA-3
C. MD5
D. HMAC-SHA256

---

### Q8. A salt is added to a password BEFORE hashing to:
A. Slow brute-force attempts
B. Defeat rainbow tables and prevent identical passwords from producing identical hashes
C. Encrypt the password
D. Recover the password later

---

### Q9. Which is NOT a password-hashing/key-stretching algorithm?
A. bcrypt
B. PBKDF2
C. Argon2
D. AES-256

---

### Q10. The signature on a TLS certificate is produced by:
A. The browser
B. The web server
C. The Certificate Authority (CA)
D. The DNS resolver

---

### Q11. Which file format typically contains BOTH the certificate AND the private key, password-protected?
A. PEM
B. DER
C. PKCS#7 (.p7b)
D. PKCS#12 (.pfx / .p12)

---

### Q12. A wildcard certificate for `*.example.com` covers:
A. example.com only
B. www.example.com and api.example.com but not test.dev.example.com
C. Every single-label subdomain of example.com (e.g., www, api, mail)
D. Every domain owned by the company

---

### Q13. OCSP **stapling** improves on plain OCSP by:
A. Encrypting the OCSP response
B. Letting the server pre-fetch and attach the OCSP response so the client does not phone home
C. Replacing CRLs with stapled lists
D. Requiring mutual TLS

---

### Q14. A self-signed certificate causes a browser warning because:
A. It uses a weak hash
B. The chain cannot terminate at a trusted root in the OS/browser trust store
C. It has no SAN entries
D. It does not include OCSP info

---

### Q15. The PRIMARY reason we combine symmetric + asymmetric (hybrid encryption) is:
A. Stronger math
B. Asymmetric is slow; symmetric is fast — so use asymmetric to exchange a fast symmetric key
C. Compliance requirement
D. Asymmetric cannot encrypt data at all

---

### Q16. A TPM is typically used to:
A. Store cloud KMS keys
B. Hold a hardware root of trust and protect keys for the local device (e.g., BitLocker)
C. Replace a smartcard
D. Generate quantum-resistant keys

---

### Q17. Which Sec+ term describes a tamper-resistant appliance specifically built to generate and store cryptographic keys at enterprise scale?
A. TPM
B. HSM
C. KMS
D. RAID

---

### Q18. Tokenization differs from encryption because:
A. Tokenization is reversible without a key
B. The token has no mathematical relationship to the original; only a vault lookup recovers it
C. Tokenization is faster than AES
D. Tokens are always 16 characters

---

### Q19. Hiding a secret message inside the pixel data of an image is:
A. Encryption
B. Tokenization
C. Steganography
D. Obfuscation

---

### Q20. Base64 encoding is:
A. A strong stream cipher
B. Encoding, not encryption — anyone can decode it instantly
C. A hashing function
D. A key-stretching technique

---

### Q21. Which property does a digital signature provide that ordinary encryption does not?
A. Confidentiality
B. Availability
C. Non-repudiation
D. Compression

---

### Q22. In an internal PKI, the Root CA is usually:
A. Online and used to issue every certificate
B. Kept offline; only used to sign intermediate CAs
C. Replaced monthly
D. The same machine as the RA

---

### Q23. Which protocol modernizes key exchange in TLS 1.3 to make PFS the default?
A. Static RSA key exchange
B. ECDHE
C. SSLv3
D. PBKDF2

---

### Q24. A blockchain provides integrity primarily because:
A. Each block stores the hash of the previous block
B. Every block is encrypted with AES
C. Blocks are stored in a single central database
D. Only authorized users can write blocks

---

### Q25 (Scenario). A bank's server certificate expired at 02:00 UTC. By 02:15 customers report "ERR_CERT_DATE_INVALID." Which is the QUICKEST appropriate fix?
A. Disable HTTPS site-wide
B. Install a new, valid certificate from the CA (or renew & deploy)
C. Tell users to ignore the warning
D. Force browsers to ignore date checks via group policy

---

### Q26 (Scenario). A pen-tester finds the corporate web app stores passwords as `SHA-256(password)` with no salt. What is the BEST remediation?
A. Switch to MD5 for speed
B. Add Base64 encoding before hashing
C. Re-hash all stored passwords with a salted, key-stretched algorithm such as bcrypt/Argon2 on next user login
D. Leave it — SHA-256 is unbroken

---

## 🎯 Answers + Explanations

### Q1: **B. AES**
Advanced Encryption Standard. Block cipher, 128-bit blocks, 128/192/256-bit keys. Industry default.

### Q2: **B. The sender's private key**
Signing = encrypt the *hash* with **sender's private key**. Verify = decrypt with **sender's public key**. This is the most commonly tested crypto fact on Sec+.

### Q3: **C. Bob's public key**
For confidentiality, encrypt with the **recipient's public key** — only their private key can decrypt.

### Q4: **C. AES-GCM**
GCM = Galois/Counter Mode = authenticated encryption. ECB leaks patterns (never use). CBC is conf-only. RC4 is broken.

### Q5: **B. Smaller key sizes for equivalent strength**
256-bit ECC ≈ 3072-bit RSA strength. Smaller keys → faster handshakes, less memory, better for mobile/IoT.

### Q6: **C. DHE / ECDHE**
Ephemeral key exchange creates a new session key per session — compromise of the long-term key does not decrypt past traffic.

### Q7: **C. MD5**
Collisions found in 2004. Do not use for security. SHA-256/SHA-3/HMAC-SHA256 are all fine.

### Q8: **B. Defeat rainbow tables**
Salts make identical passwords hash differently and invalidate pre-computed rainbow tables. Slowing brute-force is what key stretching does.

### Q9: **D. AES-256**
AES is encryption, not password hashing. bcrypt, PBKDF2, Argon2 (and scrypt) are the key-stretching family.

### Q10: **C. The Certificate Authority (CA)**
The CA's private key signs the cert; clients verify with the CA's public key (which lives in the trust store).

### Q11: **D. PKCS#12**
.pfx/.p12 — bundles cert + private key + chain, password-protected. PEM/DER are typically cert-only; PKCS#7 is a chain bundle without keys.

### Q12: **C. Every single-label subdomain**
`*.example.com` matches www, api, mail. It does NOT match `test.dev.example.com` (that's two labels deep).

### Q13: **B. Server pre-fetches and attaches the OCSP response**
Eliminates the client's separate round-trip to the OCSP responder; faster + more private.

### Q14: **B. The chain cannot terminate at a trusted root**
Self-signed = chain-of-one, and that one is not in any default trust store.

### Q15: **B. Asymmetric is slow; symmetric is fast**
Hybrid: use slow asymmetric to exchange a symmetric session key, then use fast symmetric for the bulk data. This is how TLS works.

### Q16: **B. Hold a hardware root of trust for the local device**
TPM is the motherboard chip; HSM is the enterprise appliance; KMS is the cloud service.

### Q17: **B. HSM**
Hardware Security Module. Typically FIPS 140-2/3 validated; non-exportable keys.

### Q18: **B. No math relationship; vault lookup recovers**
Encryption: token = f(key, plaintext). Tokenization: token = random reference; original sits in a vault.

### Q19: **C. Steganography**
Hiding data inside other data.

### Q20: **B. Encoding, not encryption**
Base64 is reversible by anyone — it's about safe transport of binary data, not secrecy.

### Q21: **C. Non-repudiation**
Only the holder of the private key could have produced the signature → they cannot later deny it.

### Q22: **B. Kept offline; only signs intermediates**
Best practice — Root CA private key is gold; using it daily exposes it. Issue intermediates that handle daily work.

### Q23: **B. ECDHE**
TLS 1.3 mandates (EC)DHE-style ephemeral exchanges, making PFS the default.

### Q24: **A. Each block stores the hash of the previous block**
Tamper with any block → its hash changes → all subsequent blocks' references become invalid.

### Q25: **B. Install a new, valid certificate**
Renewing the cert is the only legitimate fix. Disabling HTTPS, ignoring warnings, or bypassing date checks are unacceptable.

### Q26: **C. Re-hash with salted, key-stretched algorithm on next login**
You can't recover plaintext from SHA-256 (good), so you migrate at next login by rehashing with bcrypt/Argon2 + salt. SHA-256 unsalted is too fast and rainbow-vulnerable for passwords.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Crypto mastered. Many candidates stumble here — you're ahead.
- 22–24/26 → ✅ Solid. Note the gaps (probably algorithm classification or PKI roles), review, move on.
- 18–21/26 → ⚠️ Re-read the "Symmetric vs Asymmetric" and "PKI" sections, watch Messer #3.
- <18/26 → 🔁 Full restart. Crypto compounds — don't move on weak.

---

## 🃏 Add To Your Flashcards

- For each algorithm: type (sym/asym/hash), key sizes, status
- The signing/verifying key direction (sender's private signs; sender's public verifies)
- The encrypting/decrypting key direction (recipient's public encrypts; recipient's private decrypts)
- PFS + which key exchanges provide it
- Cert formats: PEM, DER, PKCS#7, PKCS#12
- HSM vs TPM vs KMS vs Secure Enclave

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 3 — Identity & Access Management](../Module-03-Identity-Access-Management/Reading.md)
