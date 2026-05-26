# ✏️ Module 5 Quiz: Application Registration & SSO

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. The App Registration object is BEST described as: *(Remember)*
A. The local instance of an app in a tenant
B. The application's definition / manifest in the home tenant
C. The OAuth client secret
D. The reply URL

---

### Q2. The Enterprise Application is BEST described as: *(Remember)*
A. The application's manifest in the home tenant
B. The local instance / service principal of an app in this tenant
C. A SAML token
D. A user account

---

### Q3. Which is TRUE about OAuth 2.0 and OIDC? *(Understand)*
A. OAuth 2.0 is the modern sign-in protocol
B. OIDC is an authorization framework, not for sign-in
C. OAuth 2.0 is authorization; OIDC is sign-in built on top of OAuth 2.0
D. They are the same thing

---

### Q4. Most legacy enterprise SaaS apps (Salesforce, Workday) use: *(Remember)*
A. OIDC
B. SAML 2.0
C. WS-Federation
D. SCIM

---

### Q5. A SAML "Assertion Consumer Service URL" is also known as: *(Remember)*
A. Identifier
B. Reply URL
C. Sign-on URL
D. Logout URL

---

### Q6. Microsoft Entra Application Proxy: *(Understand)*
A. Requires opening inbound firewall ports
B. Publishes on-prem web apps via an outbound-only connector
C. Provides network-level VPN access
D. Requires Entra ID Free

---

### Q7. The single most-tested setting that defeats the "illicit consent" OAuth phishing attack is: *(Apply)*
A. Enable Identity Protection
B. Set User consent settings to "Do not allow user consent" + enable Admin consent workflow
C. Disable SAML
D. Enable Security Defaults

---

### Q8. Application permissions (vs delegated): *(Understand)*
A. Act on behalf of a signed-in user
B. Act as the app itself, no user context, ALWAYS admin-consent-only
C. Are weaker than delegated
D. Are user-consentable

---

### Q9. **Yes/No** — Permissions. *(Understand)*

**S1:** `User.Read` (default delegated scope) is a delegated permission.
**S2:** `Mail.Send` as a delegated scope acts on behalf of the signed-in user.
**S3:** `User.Read.All` is available as an application permission requiring admin consent.

A. Yes / Yes / Yes
B. No / No / Yes
C. Yes / Yes / No
D. No / Yes / Yes

---

### Q10. An app role declared in an App Registration's manifest surfaces in the user's token as: *(Apply)*
A. `groups` claim
B. `roles` claim
C. `scp` claim
D. `aud` claim

---

### Q11. Property "Assignment required = Yes" on an Enterprise App means: *(Apply)*
A. Only users/groups explicitly assigned can sign in
B. All users in the tenant can sign in
C. The app is disabled
D. Only Global Admins can sign in

---

### Q12. A user can't see Workday in MyApps. First thing to check: *(Apply)*
A. Internet connectivity
B. Assignment required + user/group assignment on the Enterprise App
C. Identity Protection risk score
D. SSPR registration

---

### Q13. Which OAuth flow is RECOMMENDED for modern web/SPA apps in 2026? *(Remember)*
A. Implicit grant
B. Resource Owner Password Credentials (ROPC)
C. Authorization Code + PKCE
D. SAML 2.0 Bearer Assertion

---

### Q14. Which Microsoft-published OAuth flow is DEPRECATED? *(Remember)*
A. Authorization Code + PKCE
B. Client Credentials
C. Implicit grant
D. On-Behalf-Of

---

### Q15. Default reply URL for a Microsoft Graph PowerShell sign-in (interactive auth): *(Understand)*
A. `https://login.microsoftonline.com/common`
B. `http://localhost`
C. `https://graph.microsoft.com`
D. `https://portal.azure.com`

---

### Q16. **Yes/No** — SSO. *(Understand)*

**S1:** Microsoft Entra Application Proxy requires Entra ID P1 or higher.
**S2:** App Proxy supports Kerberos Constrained Delegation (KCD) for backend auth.
**S3:** App Proxy is a network-level VPN replacement.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q17. The admin consent workflow: *(Apply)*
A. Automatically grants consent to all apps
B. Lets users request admin consent in-app; reviewers approve from the portal
C. Replaces SSO
D. Only works for SAML apps

---

### Q18. Reviewers of admin consent requests are configured by: *(Apply)*
A. Entra role only (e.g. Cloud App Admin)
B. Specific users or groups designated in Consent and permissions settings
C. Azure RBAC at subscription scope
D. Per-app delegation

---

### Q19. A SAML SSO error "Audience URI mismatch" means: *(Analyze)*
A. The user's UPN is wrong
B. The SAML response Audience (Entity ID) doesn't match what the app expects
C. The token signing certificate expired
D. Identity Protection blocked the sign-in

---

### Q20. **Yes/No** — App registration. *(Understand)*

**S1:** Deleting an Enterprise App also deletes its App Registration in the home tenant.
**S2:** A multi-tenant App Registration creates an Enterprise App in each consenting tenant.
**S3:** Service principal = Enterprise App = local app identity in a tenant.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q21. **Order these steps** to onboard a Workday SAML SSO + provisioning integration. *(Apply)*

1. Add Workday from App Gallery
2. Configure SAML SSO (Identifier, Reply URL, attributes)
3. Set Assignment required + assign users
4. Configure SCIM provisioning

A. 1 → 2 → 3 → 4
B. 4 → 3 → 2 → 1
C. 2 → 4 → 1 → 3
D. 1 → 3 → 4 → 2

---

### Q22. A scenario: "Daemon job needs to read all users' mailboxes at midnight." The right permission is: *(Apply)*
A. Delegated permission `Mail.Read`
B. Application permission `Mail.Read` (admin-consent required)
C. User consent with `Mail.Read`
D. SCIM provisioning

---

### Q23. To prevent users from registering NEW applications in your tenant: *(Apply)*
A. Disable user consent
B. Set User settings → User can register applications → No
C. Block app gallery
D. Enable Security Defaults

---

### Q24. CA condition "Authentication flow → Device code flow" allows you to: *(Apply)*
A. Block all sign-ins
B. Require additional MFA for sign-ins using the device code flow (common attacker pattern)
C. Force OIDC instead of SAML
D. Disable Authenticator push

---

### Q25. **Yes/No** — OAuth & app permissions. *(Evaluate)*

**S1:** Application permission `User.Read.All` allows the app to read all users without a signed-in user.
**S2:** Delegated permission allows the app to act unattended.
**S3:** Granting application permissions requires admin consent.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / No / Yes
D. Yes / Yes / No

---

## 🎯 Answers + Explanations

### Q1: **B. The application's definition / manifest in the home tenant**
The recipe vs the dish. App Registration = the recipe.

### Q2: **B. The local instance / service principal of an app in this tenant**
Enterprise App = the dish at your table.

### Q3: **C. OAuth 2.0 is authorization; OIDC is sign-in built on top of OAuth 2.0**
The precise SC-300 answer. OAuth alone is not sign-in.

### Q4: **B. SAML 2.0**
Most "enterprise SaaS SSO" still runs SAML 2.0 in 2026.

### Q5: **B. Reply URL**
ACS URL is SAML terminology; "Reply URL" is Microsoft's portal label.

### Q6: **B. Publishes on-prem web apps via an outbound-only connector**
No inbound ports needed. Outbound-only is the security win.

### Q7: **B. Set User consent settings to "Do not allow user consent" + enable Admin consent workflow**
The canonical illicit-consent-attack mitigation.

### Q8: **B. Act as the app itself, no user context, ALWAYS admin-consent-only**
Application permissions can never be user-consented.

### Q9: **A. Yes / Yes / Yes**
S1 yes — `User.Read` is delegated. S2 yes — `Mail.Send` as delegated acts on behalf of the signed-in user. S3 yes — `User.Read.All` exists as an application permission needing admin consent.

### Q10: **B. `roles` claim**
App roles surface as the `roles` claim in the token.

### Q11: **A. Only users/groups explicitly assigned can sign in**
Property gates per-app access. Default is "any user in the tenant" if Off.

### Q12: **B. Assignment required + user/group assignment on the Enterprise App**
Most common cause. Check assignment first.

### Q13: **C. Authorization Code + PKCE**
The modern recommended flow for SPA/web/mobile.

### Q14: **C. Implicit grant**
Deprecated. Replaced by Auth Code + PKCE.

### Q15: **B. `http://localhost`**
Interactive PowerShell uses localhost callback.

### Q16: **A. Yes / Yes / No**
S1 yes (P1 min). S2 yes (KCD supported). S3 no (App Proxy is per-app, identity-aware, NOT a VPN).

### Q17: **B. Lets users request admin consent in-app; reviewers approve from the portal**
The in-product approval flow.

### Q18: **B. Specific users or groups designated in Consent and permissions settings**
Reviewer assignment is by user/group — not by Entra role.

### Q19: **B. The SAML response Audience (Entity ID) doesn't match what the app expects**
Identifier mismatch is the canonical SAML SSO failure mode.

### Q20: **B. No / Yes / Yes**
S1 no (App Registration lives in the home tenant — deleting an Enterprise App in a consuming tenant doesn't delete the home-tenant App Registration). S2 yes (multi-tenant App Registration creates one service principal per consenting tenant). S3 yes (service principal and Enterprise App are the same per-tenant object).

### Q21: **A. 1 → 2 → 3 → 4**
Gallery → SAML → assign users → provisioning.

### Q22: **B. Application permission `Mail.Read` (admin-consent required)**
Unattended = application permission. Always admin-consent.

### Q23: **B. Set User settings → User can register applications → No**
The tenant setting that controls app registration.

### Q24: **B. Require additional MFA for sign-ins using the device code flow (common attacker pattern)**
CA can target the authentication flow to apply stricter controls.

### Q25: **B. Yes / No / Yes**
S1 yes. S2 no (delegated needs user context). S3 yes.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 App SSO locked in.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read App Reg vs Enterprise App + User Consent sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- App Registration = recipe (home tenant); Enterprise App = dish (per tenant)
- OAuth = authz; OIDC = sign-in on OAuth
- SAML "Audience URI mismatch" = Entity ID/Identifier wrong
- App Proxy = outbound connector, no inbound ports, P1+
- "Do not allow user consent" + admin consent workflow = defeat illicit consent
- Delegated needs user context; Application permission = admin-consent-only
- Assignment required = per-app gate
- Auth Code + PKCE = modern; Implicit + ROPC = deprecated

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 6](../Module-06-Governance-PIM/Reading.md)
