# 📋 Module 5 Cheat Sheet: Application Registration & SSO

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 🏗️ App Registration vs Enterprise App (MEMORIZE)

| | **App Registration** | **Enterprise App** |
|---|---------------------|-------------------|
| What | The recipe / manifest / definition | The dish — local instance / service principal |
| Lives in | Home tenant only | Every tenant that uses the app |
| Contains | Redirect URIs, secrets, API perms, app roles | User assignments, SSO config, CA targeting |
| Mental model | "Application object" | "Service principal" |

---

## 🌐 SSO Protocols

| Protocol | Token | Use case |
|----------|-------|----------|
| **OIDC** | JWT | Modern web/SPA/mobile/API |
| **SAML 2.0** | XML assertion | Legacy enterprise SaaS (Workday, Salesforce) |
| **WS-Federation** | XML | Legacy MS (SharePoint on-prem) |

🚨 OAuth 2.0 ≠ sign-in. OAuth = authorization; OIDC = sign-in.

---

## 🔧 SAML Config Essentials

| Setting | Mapping |
|---------|---------|
| Identifier (Entity ID) | Audience URI on app side |
| Reply URL | SAML ACS URL |
| Sign-on URL | SP-initiated optional |
| Token signing cert | Auto-gen by Entra; upload to vendor |
| Attributes/claims | UPN, email, custom |

---

## 🏛️ Gallery vs Custom

- **Gallery** (4,000+ pre-integrated) — pick first
- **Custom non-gallery** — build SAML/OIDC manually

---

## 🚪 Application Proxy

- Outbound-only connector on Windows Server
- No inbound firewall ports
- Per-app (not VPN)
- Supports KCD for backend Kerberos
- **Requires Entra ID P1**

---

## 🤝 User Consent Settings (Defeats Illicit Consent)

| Setting | Behavior |
|---------|----------|
| Do not allow user consent | Safest — all apps need admin consent |
| Allow user consent for verified publishers, selected perms | 2022+ default |
| Allow user consent for apps (legacy) | Old, dangerous |

**Pair with Admin consent workflow** — users request → reviewers (named users/groups) approve in portal.

---

## 🎭 Delegated vs Application Permissions

| | Delegated | Application |
|---|---------|-------------|
| Acts on behalf of | Signed-in user | The app itself |
| Example | `Mail.Send` | `Mail.ReadBasic.All` |
| User consent | Often allowed | NEVER (admin-only) |
| Effective perm | min(scope, user perm) | exactly what's granted, tenant-wide |

---

## 🪪 App Roles

- Declared in App Registration manifest
- Assigned in Enterprise App → Users and groups
- Surface in token as `roles: ["Manager"]` claim
- Per-app — NOT Entra roles

---

## 🎯 Per-App Gating

- **Assignment required = Yes** → only explicitly assigned users can sign in
- User/group assignment in Enterprise App → Users and groups
- Visible in MyApps for assigned users

---

## 🔒 OAuth Flows

| Flow | Status |
|------|--------|
| Authorization Code + PKCE | ✅ MODERN — web/SPA/mobile |
| Client Credentials | ✅ Daemon, app permissions |
| Device Code | ✅ Browserless devices |
| On-Behalf-Of (OBO) | ✅ Middle-tier APIs |
| Implicit grant | ❌ DEPRECATED |
| Resource Owner Password Credentials (ROPC) | ❌ DEPRECATED |

---

## 🚦 SaaS Onboarding Checklist (e.g. Workday)

```
1. Add from App Gallery (if available)
2. Configure SAML SSO (Identifier, Reply URL, attributes)
3. Set Assignment required = Yes
4. Assign Users and groups
5. Configure SCIM provisioning (if supported)
6. Apply CA: MFA + compliant device
7. Pilot user test (sign-in + provisioning)
8. Roll out
9. Configure quarterly access review on app role assignments
```

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:
- ✅ "App Registration in home tenant; Enterprise App per consuming tenant"
- ✅ "Use Auth Code + PKCE for SPA"
- ✅ "Application permission requires admin consent"
- ✅ "Do not allow user consent + admin consent workflow"
- ✅ "Assignment required = Yes"
- ✅ "Add from App Gallery first"
- ✅ "App Proxy connector is outbound-only"

When you see these, often **wrong**:
- ❌ "OAuth 2.0 is the sign-in protocol"
- ❌ "Implicit grant is recommended"
- ❌ "Application permission can be user-consented"
- ❌ "App Proxy needs inbound firewall ports"
- ❌ "App roles = Entra roles"
- ❌ "SAML uses JWT tokens"

---

## ⚠️ Anti-Patterns

- ❌ Old "Allow user consent for apps" setting (illicit consent attack vector)
- ❌ Assignment required = No on a sensitive SaaS app
- ❌ Granting app roles by direct user assignment (use groups for scale)
- ❌ Multi-tenant App Registration with public redirect URIs nobody owns
- ❌ Old SAML tokens with expired signing cert (rotate annually)

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. App Registration is where ___; Enterprise App is where ___.
2. SAML "Audience URI mismatch" → fix ___ in Entra.
3. App Proxy direction = ___ (in/out)?
4. Two settings that defeat illicit consent: ___ and ___
5. Delegated permission acts as ___; Application permission acts as ___.
6. Modern OAuth flow for SPA: ___

---

➡️ [Module 6: Identity Governance & PIM](../Module-06-Governance-PIM/Reading.md)
