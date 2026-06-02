# Module 3: Authentication — MFA & Passwordless 🔑

> **Why this module matters:** Microsoft published an internal study in 2019 that found 99.9% of compromised accounts had no MFA enabled. *Five years later, the number hadn't moved much.* The single highest-leverage action you can take in identity security is to require MFA, then push beyond MFA to phishing-resistant passwordless. The SC-300 exam knows this — and tests how well you can roll it out without locking people out, alienating users, or breaking service accounts.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The tenant + license tiers from [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md) (because Authentication methods policy + per-user MFA + CA all interact).
> - User-and-group taxonomy from [Module 2](../Module-02-Users-Groups/Reading.md) (because methods policy is targeted at groups).
> - General cryptography vocabulary (public key, FIDO, X.509) — [`09-CompTIA-Security-Plus` Module 4](../../09-CompTIA-Security-Plus/Module-04-Cryptography-PKI/Reading.md).

---

## 🪪 A Story: The Mass MFA Enrollment That Almost Killed The CFO

October 2024. A 6,500-employee insurance carrier rolls out MFA to "everyone, by Friday." On Monday morning, the IT team turns on Security Defaults. By 10 AM the CFO can't sign in to Excel on her iPad because Authenticator on her phone is in its app-store update loop. By 11 AM she's en route to a board meeting where she presents quarterly earnings — *from a personal laptop she signs in to with her saved Chrome password*, because the bypass route was never closed. By noon, an attacker who'd been quietly trying her credentials for months is now inside, downloading the financial model. By 2 PM the IT team is in war-room mode. The CFO's phone has Authenticator installed by 3 PM. The breach forensics will take six weeks. The press release will say "human error."

What went wrong was not MFA. What went wrong was the *rollout*. They:

- Didn't pilot with combined registration first.
- Didn't provide a Temporary Access Pass for users whose primary device wasn't ready.
- Didn't disable legacy auth before enabling MFA, so the attacker's IMAP path stayed open.
- Didn't tell the CFO what to do if Authenticator failed (no break-glass plan for an executive).

This module is the right rollout. By the end you'll know which methods to enable, in what order, with what fallbacks, and how to push beyond MFA to **phishing-resistant passwordless** — the only auth control that actually stops modern attacks.

---

## 🔐 What "Authentication" Actually Means in Entra

| Term | Definition |
|------|------------|
| **Authentication (AuthN)** | Proving who you are |
| **Authorization (AuthZ)** | What you're allowed to do once authenticated |
| **MFA (Multi-Factor Auth)** | ≥ 2 of: something you **know** (password), something you **have** (phone, key), something you **are** (biometric) |
| **Passwordless** | Sign-in with no password at all — replace "something you know" with strong "something you have / are" |
| **Phishing-resistant MFA** | MFA where the credential is bound to the relying party (origin), so a fake site can't capture it. FIDO2, Windows Hello, certificate-based. |

🔥 **MEMORIZE the hierarchy of strength (Microsoft's published Authentication Strengths):**
1. **Single-factor (password only)** — weakest
2. **Multi-factor (any MFA)** — password + SMS / voice / app / OTP
3. **Passwordless MFA** — Authenticator phone sign-in / Windows Hello
4. **Phishing-resistant MFA** — FIDO2 / Windows Hello for Business / certificate-based — **strongest**

---

## ⚙️ The Authentication Methods Policy (THE place to manage methods in 2026)

For years Microsoft had **three** competing places to configure auth methods:

1. **Per-user MFA settings** (legacy, MFA portal — being deprecated)
2. **SSPR registration policy** (legacy)
3. **Authentication methods policy** (the modern one)

Microsoft announced in 2023 that the legacy MFA + SSPR policies would be retired by **end of September 2025**. By exam day all modern tenants should be using the unified **Authentication methods policy** (Entra portal → Protection → Authentication methods).

| Method | Strong? | Phishing-resistant? | Notes |
|--------|---------|---------------------|-------|
| **Password** | ❌ | ❌ | Required by some legacy flows; otherwise pair with MFA |
| **SMS** | Weak | ❌ | Discouraged by Microsoft; SIM-swap risk |
| **Voice call** | Weak | ❌ | Discouraged; same risk profile as SMS |
| **Email OTP** | Weak | ❌ | Allowed for guests; not for primary auth |
| **Microsoft Authenticator (push + number match)** | ✅ MFA | ❌ | Number matching mandatory since Feb 2023 |
| **Microsoft Authenticator (passkey / phone sign-in)** | ✅ Passwordless | ❌ (currently) | Push the user toward this |
| **Hardware OATH token** | ✅ MFA | ❌ | TOTP device — useful for kiosks |
| **Software OATH (Authenticator)** | ✅ MFA | ❌ | Authenticator + TOTP codes |
| **FIDO2 security key** | ✅ Passwordless | ✅ **Phishing-resistant** | Yubikey, Feitian, etc. |
| **Windows Hello for Business** | ✅ Passwordless | ✅ **Phishing-resistant** | Biometric / PIN bound to TPM |
| **Certificate-based authentication (CBA)** | ✅ Passwordless | ✅ **Phishing-resistant** | X.509 smart cards; FedRAMP High / DoD |
| **Temporary Access Pass (TAP)** | ✅ (time-bound) | ❌ | One-time or multi-use, for bootstrapping passwordless |

🚨 **Exam trap:** "Authenticator with number match" is **MFA**, not passwordless. Authenticator's *passkey/phone sign-in* mode is passwordless. Same app, different modes.

### Targeting methods to groups

In the modern policy, you choose:

- **Method** (e.g. FIDO2)
- **Enable**: On / Off
- **Target**: All users, OR specific groups
- **Configure** (per method): number matching, geo location codes, etc.

```text
FIDO2 → Enable: Yes
       Target: All users (initially) OR group "Pilot-FIDO2" (rollout phase)
       Configure:
         - Allow self-service registration: Yes
         - Enforce attestation: Yes (recommended)
         - Restrict by AAGUID: Optional (only allow Yubikey 5/Feitian list)
```

🎯 **Exam tip:** **AAGUID restriction** lets you allow only specific FIDO2 key models — e.g. only Yubikeys with FIPS 140-2 validation. Use this for regulated workloads.

---

## 🛡️ Security Defaults vs Conditional Access

| | **Security Defaults** | **Conditional Access** |
|---|----------------------|------------------------|
| Cost | Free | **Requires Entra ID P1** |
| Granularity | Tenant-wide on/off | Per-user/group, per-app, per-condition |
| Enforces MFA on admins | ✅ Yes (all admins) | ✅ (you build the policy) |
| Blocks legacy authentication | ✅ Yes | ✅ (you build the policy) |
| MFA registration enforced | ✅ 14 days | ✅ (configurable) |
| MFA on risky sign-ins | ✅ (limited) | ✅ (with Identity Protection P2 — full risk-based) |
| Customizable | ❌ No | ✅ Highly |
| Recommended for | Small orgs without P1 | Any P1+ org |

🔥 **MEMORIZE:** You can have **either** Security Defaults **or** Conditional Access — not both. Turning on CA disables Security Defaults; turning Security Defaults on disables your CA policies' enforcement.

🚨 **Trap:** A common 4,000-person org mistake is "turn off Security Defaults to build CA, then leave the CA in report-only forever." Result: *no protections at all*. Always have at least one enforced baseline CA before disabling Security Defaults.

---

## 🪪 Combined Registration (The Default User Experience)

**Combined registration** = a single experience where users register **both** MFA *and* SSPR methods in one flow. This has been the default for all new tenants since 2020 and is mandatory for new rollouts in 2026.

The user signs in for the first time, gets prompted to set up:

1. Microsoft Authenticator (recommended)
2. Phone (optional fallback)
3. Email (for SSPR only)
4. FIDO2 or Windows Hello (if enabled)

After registration, the same methods power MFA challenges and SSPR resets.

### Force users to re-register (after a breach)

```powershell
# Reset MFA methods for a user (forces re-registration on next sign-in)
Connect-MgGraph -Scopes "UserAuthenticationMethod.ReadWrite.All"

# Get the user's auth methods, then delete each
$user = "alice@contoso.com"
$methods = Get-MgUserAuthenticationMethod -UserId $user
$methods | ForEach-Object {
    # Choose the right cmdlet per method type
    if ($_.AdditionalProperties.'@odata.type' -eq "#microsoft.graph.microsoftAuthenticatorAuthenticationMethod") {
        Remove-MgUserAuthenticationMicrosoftAuthenticatorMethod -UserId $user -MicrosoftAuthenticatorAuthenticationMethodId $_.Id
    }
    # ... similar for phone, FIDO2, etc.
}
```

Or in portal: User → Authentication methods → "Require re-register multifactor authentication."

---

## ⏱️ Temporary Access Pass (TAP)

A **TAP** is a time-bounded passcode an admin generates for a user. The user signs in with the passcode (no password), then uses the resulting session to register passwordless methods.

| Setting | Default | Range |
|---------|---------|-------|
| Lifetime | 60 minutes | 10 min – 30 days |
| Length | 8 characters | 8–48 characters |
| Use type | One-time | One-time / multi-use |

### Create a TAP via PowerShell

```powershell
Connect-MgGraph -Scopes "UserAuthenticationMethod.ReadWrite.All"

New-MgUserAuthenticationTemporaryAccessPassMethod -UserId "alice@contoso.com" `
    -BodyParameter @{
        LifetimeInMinutes = 480     # 8 hours
        IsUsableOnce = $false       # allow multiple uses
    }
```

🎯 **Exam tip:** TAP is the **canonical answer** for "user lost FIDO2 key, needs to register a new one without entering a password" or "new hire needs to set up passwordless on Day 1 without ever typing a password."

🚨 **Trap:** TAP usability depends on the Authentication methods policy enabling TAP for the target user/group. If TAP isn't in the policy, the admin's "Create TAP" button is greyed out.

---

## 🔐 FIDO2 Security Keys

A **FIDO2 security key** is a hardware device (Yubikey, Feitian, etc.) that performs cryptographic challenge/response against the target site using **public-key crypto**. The private key never leaves the device. The signature includes the **origin** (relying party ID) — so a fake site can't request a signature that's valid on the real site.

| Spec | Detail |
|------|--------|
| Form factor | USB-A / USB-C / NFC / Bluetooth / Lightning |
| Protocol | WebAuthn (CTAP2) |
| Where in Entra | Authentication methods policy → FIDO2 → Enable + target |
| Restriction | Optional AAGUID allowlist (specific key models) |
| Self-service registration | Users register their own (default in 2026) or admin pre-provisions (preview) |

### User registration flow

1. User signs in to `https://aka.ms/mysecurityinfo` (My Security Info portal).
2. Clicks **Add sign-in method → Security key**.
3. Inserts key, sets PIN (8-char PIN inside the key's TPM), touches the key when prompted.
4. Names the key (so multiple keys can be distinguished).
5. Done — the key can sign in passwordless from supported clients.

### What clients support FIDO2 sign-in?

| Client | Support |
|--------|---------|
| Windows 10/11 sign-in | ✅ (passwordless sign-in to Windows + Entra) |
| macOS / Linux | Via browser only (Edge / Chrome / Firefox / Safari) |
| iOS / Android | Browser-based + Authenticator passkey (different code path) |
| Remote Desktop | Limited (use Hello + Cred Guard instead) |

🚨 **Trap:** "I bought 5000 Yubikeys, why doesn't my user with Windows 7 work?" Windows 7 is not supported. Windows 10 1903+ required for Windows sign-in.

---

## 💻 Windows Hello for Business (WHFB)

Windows Hello for Business is biometric (face / fingerprint) or PIN-based sign-in that uses **keys bound to the device's TPM**. Unlike FIDO2, the credential is tied to **one device**, not portable.

| Deployment model | Where it fits |
|------------------|---------------|
| **Cloud Kerberos trust** (recommended 2026) | Hybrid scenarios — Windows Hello uses cloud-issued Kerberos ticket for on-prem resources |
| **Key trust** (older hybrid) | Requires Windows Server 2016 KDC + certificate trust |
| **Certificate trust** (legacy) | Requires AD CS / PKI — complex |
| **Cloud-only** | No on-prem AD; pure Entra-joined devices |

Configuration is done via:

- **Intune device configuration** (Identity Protection policy)
- **Group Policy** (for AD-joined / Hybrid-joined devices)
- **Provisioning packages** (for OEM imaging)

🎯 **Exam tip:** "Hybrid Entra Join + Windows Hello for Business" is **Cloud Kerberos trust** in 2026 scenarios.

---

## 📜 Certificate-Based Authentication (CBA)

Entra-native certificate-based authentication lets users present an X.509 certificate (typically on a smart card or virtual smart card) to sign in. Strongest form of phishing-resistant MFA available in highly-regulated environments.

| Use case | Detail |
|----------|--------|
| Federal / DoD environments | FedRAMP High, IL5; smart cards (CAC, PIV) |
| Healthcare with smart-card-based access | Hospitals using badge readers |
| Replacing AD FS for CBA | Move CBA from AD FS to Entra directly (no federation needed) |

Configuration:

1. Upload trusted root + intermediate CAs to Entra (CertificateBased AuthN configuration).
2. Define **certificate-to-user mapping** (subject DN, SAN, etc.).
3. Configure **authentication binding rules** (e.g. "policy OID X.X.X.X → counts as MFA").
4. Enable CBA in the Authentication methods policy.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "SMS-based MFA is acceptable for admins" | ❌ Microsoft strongly discourages — phishable. Use Authenticator or FIDO2. |
| "Authenticator push = passwordless" | ❌ Authenticator push (with number match) is **MFA**. Phone sign-in / passkey is passwordless. |
| "Security Defaults and CA can coexist" | ❌ Choose one. Turning Defaults on disables your CA. |
| "TAP works without enabling it in the methods policy" | ❌ Admin button is greyed out unless TAP is enabled + targeted. |
| "FIDO2 is supported on all Windows versions" | ❌ Windows 10 1903+ for sign-in; legacy Windows = browser only. |
| "Combined registration is optional" | ❌ Mandatory for new tenants in 2026; legacy single-purpose flows being retired. |
| "Microsoft will keep legacy per-user MFA settings around forever" | ❌ End-of-life September 2025 for the legacy management surface. |
| "FIDO2 keys are tied to a single device" | ❌ Portable across devices (vs Windows Hello which is device-bound). |
| "Number matching is optional" | ❌ Mandatory since Feb 2023 — Microsoft enforced tenant-wide. |
| "CBA requires AD FS" | ❌ Not anymore. Entra-native CBA replaces AD FS for CBA scenarios. |

---

## 🧪 Task-Sequencing Practice: Roll Out Phishing-Resistant MFA to 100 IT Admins

**Order these steps correctly to migrate 100 IT admins from password + SMS to FIDO2-only.**

The correct order:

1. ✅ Inventory current MFA methods per admin (Graph: `Get-MgUserAuthenticationMethod`).
2. ✅ Procure FIDO2 keys (2 per admin — primary + backup).
3. ✅ Enable **FIDO2** in Authentication methods policy targeting `Admins-Pilot` group; **enable TAP** for the same group.
4. ✅ Ship keys to admins with welcome packet + instructions.
5. ✅ Run **a combined-registration training session** (live or recorded).
6. ✅ Generate **TAP** for each admin (1 week validity, multi-use) so they can register both keys without ever entering a password.
7. ✅ Admins register both FIDO2 keys at `https://aka.ms/mysecurityinfo`.
8. ✅ Create a **Conditional Access policy** requiring **Phishing-resistant MFA** authentication strength for the Admins group when accessing the Azure portal + Microsoft Entra admin center.
9. ✅ Place the CA policy in **report-only** for 1 week to verify no admin is locked out.
10. ✅ **Enforce** the CA policy; **disable** SMS as a method for the Admins group.
11. ✅ Configure a **break-glass exclusion** — break-glass accounts excluded from the CA policy and registered with FIDO2 separately.

⚠️ Skipping step 11 (break-glass) before step 10 (enforce) is the all-time classic way to lock yourself out of a tenant.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **Authentication methods policy** | Modern unified place to configure auth methods (Entra portal → Protection) |
| **Combined registration** | Single experience for registering MFA + SSPR methods |
| **MFA** | ≥ 2 factors of authentication |
| **Passwordless** | Auth with no password (Authenticator phone sign-in, Hello, FIDO2, CBA) |
| **Phishing-resistant MFA** | Origin-bound auth (FIDO2, Hello, CBA) |
| **FIDO2** | Hardware security key using WebAuthn / CTAP2 |
| **Windows Hello for Business** | Device-bound biometric / PIN tied to TPM |
| **Certificate-based authentication (CBA)** | X.509 cert sign-in, Entra-native (no AD FS needed) |
| **Temporary Access Pass (TAP)** | Time-bounded passcode for bootstrapping passwordless |
| **AAGUID** | Identifier for FIDO2 key model; used for allow-listing |
| **Number matching** | Mandatory anti-MFA-fatigue in Authenticator since Feb 2023 |
| **Security Defaults** | Free baseline: MFA on admins + block legacy auth + 14-day registration |
| **My Security Info portal** | `https://aka.ms/mysecurityinfo` — user self-service registration |
| **Cloud Kerberos trust** | Modern WHFB deployment model for hybrid environments |
| **Per-user MFA (legacy)** | Old portal being retired in Sept 2025 |

---

## ✅ Module 3 Summary

You now know:

- 🔐 The hierarchy: Password → MFA → Passwordless → Phishing-resistant
- ⚙️ The unified Authentication methods policy (legacy per-user MFA is deprecated)
- 🛡️ Security Defaults vs Conditional Access — pick one, not both
- 🪪 Combined registration is the default in 2026
- ⏱️ Temporary Access Pass for bootstrapping passwordless
- 🔐 FIDO2, Windows Hello for Business, and Certificate-based auth are the three phishing-resistant methods
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 4: Conditional Access & Identity Protection](../Module-04-Conditional-Access/Reading.md)

---

## 📊 Case Study — Microsoft's Own Internal Passwordless Rollout (2017–2024)

**Situation.** In 2017, Microsoft IT (managing 150,000+ employee identities) committed to "eliminate passwords from our network" — an audacious goal at a company whose flagship OS shipped with password sign-in for 30+ years. Microsoft's published telemetry (RSA 2019, Ignite 2020 onward) found that the company saw ~80,000 password-related attacks per second at its peak, with ~50% of help desk volume tied to password resets. Even with MFA, push-bombing fatigue was a real attack — the **2022 0ktapus campaign** showed that targeted MFA-fatigue attacks against Microsoft's own helpdesk vendor could bypass Authenticator push without number matching.

**Decision.** Microsoft IT pursued a three-phase plan:

1. **Block all legacy authentication** (2018–2020). Used Conditional Access to enforce modern auth across Microsoft 365, Exchange, and OS sign-in. ~98% of all credential-stuffing attacks targeted legacy protocols (POP / IMAP / SMTP AUTH); blocking them cut attack volume by 99% within months.
2. **Mandate Authenticator with number matching** (2021–2023). Replaced SMS/voice for all employees. Number matching specifically defeated push-bombing — the user had to type a number from the sign-in screen *into* the app, so silent push acceptance couldn't grant access. Microsoft published guidance and rolled it out tenant-wide in Feb 2023 for all customers.
3. **Phishing-resistant passwordless for all** (2022–2024). Mandated FIDO2 or Windows Hello for Business for all employees with admin role access. Created internal training and shipped Yubikeys to ~150,000 employees. By end of 2024, Microsoft reported ~98% of employee sign-ins occurred passwordless; ~70% of employees had completely removed passwords from their accounts (no password to recover; only FIDO2 + Hello).

**Outcome.** Per Microsoft Digital's published metrics (2024-09):

- **Credential-based attacks against Microsoft IT** fell 95% from 2018 peak.
- **Password-related help desk calls** dropped 87% (those left were edge cases like new hires waiting for keys).
- **Sign-in time** fell ~30% (face / Hello / FIDO2 is faster than typing a 24-character password + an Authenticator code).
- **Cost-of-attack analysis** found that the FIDO2 rollout had net positive ROI within 14 months including the cost of the keys (~$50/admin × ~5,000 admins = ~$250K capex) due to help-desk savings alone.

**Lesson for the exam / for practitioners.** Microsoft IT is the largest at-scale phishing-resistant deployment in the world, and they publish the playbook openly. SC-300 scenarios about "rolling out passwordless" expect you to know the Microsoft pattern: block legacy auth FIRST → enforce number matching → introduce TAP for bootstrapping → mandate FIDO2/Hello for admins → expand to all users. The order matters because each phase removes attack surface that the next phase couldn't defend against.

**Discussion (Socratic).**
- **Q1.** Microsoft IT shipped ~5,000 Yubikeys at ~$50 each for admin staff. A CFO at a 200-person company says "we can't spend $10K on keys — use SMS." Build the cost-of-incident counter-argument; what does one credential-based incident cost a small company?
- **Q2.** Microsoft chose to keep TAP enabled tenant-wide. Make the case for limiting TAP to specific admin roles only — what's the attack surface trade-off?
- **Q3.** A regulated environment (DoD IL5) cannot use FIDO2 keys from non-FIPS-certified vendors. Walk through how AAGUID restriction + CBA on smart cards solves this; what's the equivalent civilian-sector use case?

---

> **Where this leads.**
> - Inside this course: Module 4 builds Conditional Access policies that *target* these auth methods; Module 6 layers PIM activation MFA on top.
> - Cross-course: [`09-CompTIA-Security-Plus` Module 4](../../09-CompTIA-Security-Plus/Module-04-Cryptography-PKI/Reading.md) covers the underlying PKI / FIDO crypto; [`06-Azure-Administrator` Module 2](../../06-Azure-Administrator/Module-02-Entra-ID-RBAC/Reading.md) covers RBAC scenarios that interact with these policies.

---

## 💬 Discussion — Socratic prompts

1. **MFA fatigue.** Push-bombing attacks succeed when users accept push notifications they didn't trigger. Number matching defeats this. What other Microsoft-shipped controls layer on top of number matching to harden push further? When does Authenticator-push-with-number-match still lose, and what replaces it?
2. **TAP as attack vector.** A long-lived TAP (24h, multi-use) is a bearer credential. Who in the org should be authorized to issue them? Argue for / against limiting TAP issuance to Privileged Authentication Administrator only.
3. **The "passwordless but with a password" paradox.** Even after a user registers FIDO2, their password still exists in Entra. Should you delete it? Microsoft's "Passwordless authentication strength" CA policy doesn't require password removal — only FIDO2 sign-in. Build the case for going further and removing the password entirely.
4. **Smart cards in 2026.** With FIDO2 widely available, is smart-card-based CBA obsolete? Identify the 3 scenarios where CBA still wins over FIDO2, and where each is mandated by regulation.
5. **Hello vs FIDO2 trade-off.** Both are phishing-resistant. When is Windows Hello for Business the right answer over a portable FIDO2 key? Consider device assignment, BYOD, kiosks, and field workers.

---

## 📚 Further Reading (Optional)

- 📖 [Authentication methods policy in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods)
- 📖 [Phishing-resistant authentication overview](https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths)
- 📖 [FIDO2 security key deployment](https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-security-key)
- 📖 [Temporary Access Pass](https://learn.microsoft.com/entra/identity/authentication/howto-authentication-temporary-access-pass)
- 📖 [Number matching in Authenticator](https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-number-match)
- 📖 [Microsoft's own passwordless journey](https://www.microsoft.com/insidetrack/blog/microsoft-uses-phishing-resistant-mfa-for-everyone/) (Microsoft Digital, 2024)
- 📖 [Bonneau et al., *The Quest to Replace Passwords*, IEEE S&P 2012](https://ieeexplore.ieee.org/document/6234436) — seminal academic framework for evaluating authentication mechanisms.
