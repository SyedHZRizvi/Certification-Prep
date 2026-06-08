# ✏️ Module 2 Quiz: Identity & Entra ID Hybrid Integration

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Which sign-in method requires NO on-prem agent or server at sign-in time? *(Remember)*
A. Pass-Through Authentication (PTA)
B. Federation with AD FS
C. Password Hash Sync (PHS)
D. Smart-card only

---

### Q2. The lightweight sync agent designed to support multiple DISCONNECTED on-prem forests is: *(Remember)*
A. Microsoft Entra Connect Sync
B. Microsoft Entra Cloud Sync
C. Microsoft Identity Manager
D. Forefront Identity Manager

---

### Q3. Seamless SSO (SSSO) works with which combinations of sign-in method? *(Remember)*
A. Federation only
B. PHS and PTA only (not Federation)
C. Smart card only
D. Federation and PTA

---

### Q4. Which device join state means the device is registered in BOTH on-prem AD AND Microsoft Entra ID? *(Remember)*
A. Entra Registered
B. Entra Joined
C. Hybrid Entra Joined
D. Workplace Joined

---

### Q5. To use Hybrid Entra Join with device writeback, you MUST use: *(Apply)*
A. Entra Cloud Sync
B. Entra Connect Sync
C. Either Connect Sync or Cloud Sync, both support it
D. AD FS only

---

### Q6. What is the name of the computer account Seamless SSO creates in your on-prem AD? *(Remember)*
A. `MSOL_xxxx`
B. `AZUREADSSOACC`
C. `KERBEROSSSO`
D. `WIN32CERT`

---

### Q7. Microsoft's 2026 recommendation for Hybrid identity sign-in is: *(Understand)*
A. Federation with AD FS for all users
B. PTA only
C. PHS + Seamless SSO (cloud authentication)
D. Smart-card-only authentication

---

### Q8. PHS hashes are sent to Entra ID using which hashing algorithm chain? *(Understand)*
A. MD5 → MD4
B. MD4 (AD password hash) → PBKDF2 + HMAC-SHA256 + salt → Entra storage
C. SHA-1 → SHA-2
D. The plaintext password is encrypted, not hashed

---

### Q9. A staging Entra Connect Sync server: *(Understand)*
A. Imports and syncs but does NOT export to Entra ID, DR-only
B. Is the active production sync server
C. Is required for PHS
D. Replaces the primary on failure automatically

---

### Q10. To pin which Entra Joined devices a user can sign into, while preventing them signing into their personal Entra tenant from a corporate machine, use: *(Apply)*
A. Conditional Access blocking external tenants
B. Cross-tenant access settings, Tenant Restrictions
C. Smart Lockout
D. Authenticator app number matching

---

### Q11. **Yes/No**, Mark each statement. *(Evaluate)*

**S1:** Cloud Sync supports federation as a sign-in method.
**S2:** PHS sends the plaintext password to Entra ID.
**S3:** PHS and PTA can be enabled simultaneously, with PHS as fallback.

A. No / No / Yes
B. Yes / No / Yes
C. Yes / Yes / No
D. No / Yes / No

---

### Q12. Pass-Through Authentication's on-prem agent communicates with Entra ID over which network direction and port? *(Remember)*
A. Inbound 389/LDAP
B. Outbound 443/HTTPS only
C. Outbound 88/Kerberos
D. Inbound 88/Kerberos + Outbound 443

---

### Q13. The MINIMUM number of PTA agents recommended for HA is: *(Remember)*
A. 1
B. 2
C. 3
D. 5

---

### Q14. The KEY difference between Entra ID and Entra Domain Services (Entra DS) is: *(Understand)*
A. Entra DS is cheaper
B. Entra DS supports legacy LDAP/Kerberos/NTLM and runs managed DCs in Azure; Entra ID does not
C. Entra DS replaces on-prem AD entirely
D. Entra DS supports OAuth, Entra ID does not

---

### Q15. A new acquisition has its own AD forest with no plans to consolidate for 18 months. The fastest way to merge into the parent Entra ID tenant is: *(Apply)*
A. Build a forest trust and let Connect Sync handle it
B. Install Entra Cloud Sync agents on multiple servers in the acquired forest; sync as a separate connector
C. Forge identities manually via Graph API
D. Deploy AD FS to bridge

---

### Q16. Which device-join state is intended for **personal/BYOD** devices that still get app-level SSO (Outlook, Teams)? *(Remember)*
A. Entra Joined
B. Entra Registered
C. Hybrid Entra Joined
D. Workplace Joined

---

### Q17. To check the current device join state on a Windows 10/11 machine, run: *(Apply)*
A. `dsregcmd /status`
B. `whoami /upn`
C. `gpupdate /force`
D. `Test-AzureADConnection`

---

### Q18. **Order these steps** to deploy PHS + Seamless SSO for a brand-new tenant. *(Create)*

1. Verify on-prem AD health (`dcdiag /v`, `repadmin /replsum`)
2. Add and verify your custom DNS domain in Entra ID
3. On a member server, install Entra Connect Sync, choose PHS + Enable SSO
4. Distribute a GPO adding `autologon.microsoftazuread-sso.com` to the Intranet Zone

A. 1 → 2 → 3 → 4
B. 2 → 1 → 3 → 4
C. 1 → 3 → 4 → 2
D. 3 → 4 → 2 → 1

---

### Q19. Continuous Access Evaluation (CAE) primarily provides: *(Understand)*
A. Near-real-time token revocation for risk events / admin disable
B. Replacement for MFA
C. Replacement for Conditional Access
D. Federation with on-prem AD FS

---

### Q20. Which authentication method is **strongest** (phishing-resistant, passwordless) per Microsoft 2026 guidance? *(Understand)*
A. SMS
B. Email OTP
C. Voice call
D. FIDO2 security key

---

### Q21. **Yes/No**, Cloud Sync feature support. *(Analyze)*

**S1:** Cloud Sync supports password hash sync (PHS).
**S2:** Cloud Sync supports Hybrid Entra Join device writeback.
**S3:** Cloud Sync requires SQL Server on the agent host.

A. Yes / No / No
B. Yes / Yes / No
C. No / No / Yes
D. Yes / Yes / Yes

---

### Q22. The default password rotation cadence Microsoft recommends for the `AZUREADSSOACC$` computer account is: *(Remember)*
A. Daily
B. Every 30 days
C. Every 90 days
D. Never, auto-managed entirely

---

### Q23. An on-prem account is disabled in AD. With PHS only (no PTA), how quickly is the user blocked from signing into Entra-protected apps? *(Analyze)*
A. Immediately
B. Within the next sync interval (~2 min by default for the password hash but full attribute sync runs ~30 min)
C. After the next forest functional level change
D. Never, disable doesn't propagate

---

### Q24. **Yes/No**, Sign-in resiliency. *(Apply)*

**S1:** PHS sign-in continues to work even when on-prem WAN is down.
**S2:** PTA sign-in continues to work even when on-prem agents are unreachable.
**S3:** Federation sign-in continues to work even when AD FS is down.

A. Yes / No / No
B. Yes / Yes / No
C. No / No / Yes
D. Yes / Yes / Yes

---

### Q25. A Windows 10/11 device is BOTH joined to the on-prem domain AND Hybrid Entra Joined. The Primary Refresh Token (PRT) used for cloud SSO comes from: *(Understand)*
A. The on-prem KDC (Kerberos)
B. Entra ID itself, after device authenticates with the Entra-issued device certificate
C. The local SAM database
D. AD FS

---

### Q26. Which sign-in method is Microsoft *actively pushing customers to migrate away from* in 2024–2026? *(Understand)*
A. PHS
B. PTA
C. Federation with AD FS
D. Seamless SSO

---

## 🎯 Answers + Explanations

### Q1: **C. PHS**
PHS validates the password entirely in Entra ID (against the synced hash). PTA needs an on-prem agent. Federation needs an on-prem AD FS farm.

### Q2: **B. Entra Cloud Sync**
Cloud Sync is built for multi-instance lightweight deployment and supports multiple disconnected forests cleanly. Connect Sync supports multi-forest but in a single connector graph that's harder to manage post-merger.

### Q3: **B. PHS and PTA only (not Federation)**
SSSO is Kerberos-ticket based against `AZUREADSSOACC`. Federation does its own SSO via AD FS, so SSSO is irrelevant there.

### Q4: **C. Hybrid Entra Joined**
Both AD and Entra. Entra Registered = personal device; Entra Joined = cloud-only corp device; Hybrid = both.

### Q5: **B. Entra Connect Sync**
Cloud Sync does *not* support Hybrid Join device writeback (a frequent exam trap). Must use Connect Sync for Hybrid Join.

### Q6: **B. `AZUREADSSOACC`**
The classic computer account name. Memorize this.

### Q7: **C. PHS + Seamless SSO**
Microsoft's published guidance. Federation is being deprecated; PTA is fine but has on-prem dependencies at sign-in.

### Q8: **B. MD4 → PBKDF2 + HMAC-SHA256 + salt → Entra**
The on-prem AD password is already MD4-hashed; PHS re-hashes that MD4 value before sending. Never the plaintext password.

### Q9: **A. Imports and syncs but does NOT export to Entra ID, DR-only**
Staging mode is a passive replica. To activate it after primary failure, switch staging mode off (manual operation, not automatic).

### Q10: **B. Cross-tenant access settings, Tenant Restrictions**
Tenant Restrictions block sign-in to other Entra tenants from corporate-managed networks/devices. CA can support this, but the official feature is Tenant Restrictions.

### Q11: **A. No / No / Yes**
S1 wrong (Cloud Sync doesn't support federation). S2 wrong (PHS never sends plaintext). S3 correct (coexistence supported and recommended).

### Q12: **B. Outbound 443/HTTPS only**
The PTA agent makes only outbound HTTPS calls to Entra. No inbound ports required on your firewall.

### Q13: **C. 3**
Microsoft recommends 3 agents minimum for production HA. Fewer = single-point-of-failure risk.

### Q14: **B. Entra DS supports legacy LDAP/Kerberos/NTLM and runs managed DCs in Azure**
Entra DS = managed AD DCs in Azure for legacy apps. Entra ID = cloud-native OAuth/OIDC/SAML.

### Q15: **B. Install Entra Cloud Sync agents on multiple servers in the acquired forest**
Cloud Sync is exactly designed for this M&A scenario, light, multi-forest, no forest trust needed.

### Q16: **B. Entra Registered**
BYOD/personal devices with cloud identity only. App-level SSO; cannot enforce full device policy.

### Q17: **A. `dsregcmd /status`**
The canonical command to inspect join state on any modern Windows.

### Q18: **A. 1 → 2 → 3 → 4**
Health check first, domain verification before sync setup, then sync deployment, then user-experience polish (Intranet Zone GPO).

### Q19: **A. Near-real-time token revocation for risk events / admin disable**
CAE shortcuts the 1-hour access-token TTL by signaling apps to re-evaluate. Critical post-Storm-0558 control.

### Q20: **D. FIDO2 security key**
Hardware-backed, phishing-resistant, passwordless. SMS/voice are weak; OTP via email is weakest.

### Q21: **A. Yes / No / No**
Cloud Sync supports PHS; does NOT support Hybrid Join writeback or require SQL.

### Q22: **B. Every 30 days**
Microsoft's published guidance, the SSSO computer account password is a high-value target.

### Q23: **B. Within the next sync interval**
Password hash syncs every 2 minutes; other attributes (including AccountEnabled) on the standard sync cycle (default 30 min). This is one of PHS's weaknesses relative to PTA.

### Q24: **A. Yes / No / No**
Only PHS survives on-prem outages, the entire validation happens in Entra ID. PTA needs an agent; Federation needs AD FS.

### Q25: **B. Entra ID itself, after device authenticates with the Entra-issued device certificate**
The PRT is issued by Entra after the device proves identity via its registered cert. It is *not* the same as a Kerberos TGT.

### Q26: **C. Federation with AD FS**
Microsoft has clear public guidance to migrate to cloud authentication. AD FS is supported but actively deprecated in product direction.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Hybrid identity mastered. Move on.
- 22–24/26 → ✅ Strong. Note misses, then continue.
- 18–21/26 → ⚠️ Re-read Connect Sync vs Cloud Sync + sign-in methods sections.
- <18/26 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Connect Sync vs Cloud Sync feature matrix (Hybrid Join → Connect; multi-forest M&A → Cloud)
- PHS / PTA / Federation, when each wins
- SSSO uses `AZUREADSSOACC$` Kerberos
- Entra Registered / Entra Joined / Hybrid Entra Joined, pick the right one
- PHS hash chain: MD4 → PBKDF2 + HMAC-SHA256 + salt
- PTA: outbound 443 only, 3 agents minimum
- Entra DS = managed LDAP/Kerberos/NTLM (not Entra Connect)
- CAE = near-real-time token revocation (Storm-0558 lesson)
- `dsregcmd /status` for join state

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 3](../Module-03-Networking-DNS/Reading.md)
