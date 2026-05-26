# Module 5: Application Registration & SSO 🔗

> **Why this module matters:** The average enterprise runs 250+ SaaS apps, plus dozens of in-house and on-prem web apps. Every one of them is a sign-in surface. Entra ID's job is to be the **single identity provider** behind all of them — so users sign in once, admins govern centrally, and attackers can't pick off the weakest app to phish the strongest credential. SC-300 dedicates 20–25% of its weight here because it's where identity meets application security, OAuth scopes, OIDC tokens, SAML assertions, and the very real risk that one "Approve" button by a junior employee on a malicious app gives an attacker tenant-wide Graph access.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - The tenant + role taxonomy from [Module 1](../Module-01-Entra-ID-Fundamentals/Reading.md) (Application Admin, Cloud Application Admin).
> - Group and user assignment patterns from [Module 2](../Module-02-Users-Groups/Reading.md).
> - CA policies that target apps from [Module 4](../Module-04-Conditional-Access/Reading.md) — apps in CA come from this module.
> - Basic understanding of OAuth 2.0 / OIDC / SAML — covered at intro depth in [`05-Azure-Fundamentals` Module 5](../../05-Azure-Fundamentals/Module-05-Governance-Compliance/Reading.md).

---

## 🪪 A Story: The Day "Approve" Cost Microsoft A Customer

July 2022. A developer at a 4,800-person manufacturing company gets an email titled "Quick request from the CFO." The email links to what appears to be a Microsoft 365 sign-in page for a "Quarterly Reports Approval" app. The developer signs in (real Microsoft creds, real MFA). The app asks for permissions: "Read your mail," "Send mail as you," "Read all files in your OneDrive." The developer clicks **Approve**. The page redirects to a normal CFO email.

It's an **illicit consent grant attack**. The attacker now has an OAuth refresh token tied to the developer's account. They use it to programmatically read every email the developer received, exfiltrate sensitive engineering docs, and send phishing emails *from the developer's account* to the CFO and CISO. Both CFO and CISO sign in to the same app. Within 24 hours the attacker has CFO-level mailbox access and is silently routing wire-transfer approval emails. The first detection comes when a $4.2M wire to a "vendor" in Hong Kong is reversed by the bank — six weeks later.

What went wrong was not a password compromise. It was not an MFA bypass. It was the **user consent setting**: by default, every Entra tenant lets *every user* grant any registered app permission to their data. The fix took five minutes: change the user consent setting from "Allow user consent for apps" to "Do not allow user consent" and require **admin consent workflow** instead. Three hundred fortune-1000 companies have made the same fix since 2022. The pattern still works — the exam will test whether you know how to prevent it.

---

## 🏗️ App Registration vs Enterprise Application (THE Distinction)

This is the single most-confused topic in SC-300. Memorize it cold.

| | **App Registration** (a.k.a. Application object) | **Enterprise Application** (a.k.a. Service Principal) |
|---|----------------------------------------------------|------------------------------------------------------|
| What it is | The application's *definition* (manifest) | The local *instance / identity* of the app in a tenant |
| Where it lives | Your **home tenant** (one App Registration per app) | **Every tenant** that uses the app (one Enterprise App per consenting tenant) |
| Contains | Redirect URIs, secrets/certs, API permissions, app roles, manifest | User assignments, app roles assigned to users, SSO config, conditional access targeting |
| Created when | You register a new app (or use App Gallery) | App is consented in a tenant (admin or user consent) |
| Multi-tenant SaaS example | Vendor's app registration in vendor's tenant | One Enterprise App per customer tenant |
| Single-tenant app example | App registration in your tenant | Enterprise App in same tenant (auto-created) |

🔥 **MEMORIZE:**
- **App Registration = the recipe.** Defines the app — published once in the home tenant.
- **Enterprise App = the dish at your table.** A local serving of the recipe — exists per tenant that uses the app.

🎯 **Exam tip:** "I deleted the Enterprise App but the App Registration is still there — why?" Because you're the *home tenant* and the App Registration is the canonical definition. To fully delete a single-tenant app, delete both.

---

## 🌐 The Three SSO Protocols Entra Speaks

| Protocol | Use case | Token format | Where seen |
|----------|----------|--------------|------------|
| **OpenID Connect (OIDC)** | Modern web/SPA/mobile/API apps | JWT (JSON Web Token), ID + Access tokens | Microsoft Graph, all new Microsoft apps, modern SaaS |
| **SAML 2.0** | Legacy enterprise SaaS (Salesforce, Workday, ServiceNow) | XML SAML Assertion | Most "SaaS SSO" gallery apps |
| **WS-Federation (WS-Fed)** | Legacy MS apps (SharePoint on-prem, older AD FS) | XML SAML Assertion | Mostly legacy / hybrid |

🚨 **Exam trap:** OAuth 2.0 is **NOT** a sign-in protocol — it's an *authorization framework*. OIDC is built on top of OAuth 2.0 and adds the identity layer (ID token). The exam loves to use them interchangeably; the precise SC-300 answer is **OIDC for sign-in; OAuth for delegated/app permissions**.

### Picking SSO mode in an Enterprise App

In Entra portal → Enterprise apps → [App] → Single sign-on, the options:

| SSO mode | When |
|----------|------|
| **SAML** | Vendor's SSO docs specify SAML; configure ACS URL, entity ID, attributes |
| **Password-based SSO** | Vendor doesn't support SAML/OIDC; Entra stores the password and auto-fills via MyApps |
| **Linked sign-on** | Just a tile in MyApps; no SSO (deep-link to a separate IDP) |
| **Disabled** | No SSO |

### SAML config essentials (memorize)

| Setting | What it is |
|---------|------------|
| **Identifier (Entity ID)** | Unique URI for the app (e.g. `https://my.salesforce.com`) |
| **Reply URL (ACS URL)** | Where Entra POSTs the SAML response (e.g. `https://my.salesforce.com/?so=00D...`) |
| **Sign-on URL** | Optional — for SP-initiated SSO if app doesn't auto-redirect |
| **Relay State** | Optional — deep-link target after sign-in |
| **Logout URL** | For SAML single logout |
| **Token signing cert** | Auto-generated by Entra; upload to the vendor app |
| **User attributes & claims** | UPN, email, displayName, custom claims |

🎯 **Exam tip:** "SAML SSO fails with 'Audience URI mismatch'" → the **Identifier (Entity ID)** in Entra doesn't match what the app expects.

---

## 🏛️ App Gallery vs Custom Apps

| | **Gallery** | **Custom Non-Gallery** |
|---|-------------|------------------------|
| Setup | Pick from 4,000+ pre-integrated apps | Build SAML/OIDC config from scratch |
| Time | Minutes | Hours (depending on vendor docs) |
| Pre-configured | Yes — attributes, claims, URLs guessed | Manual |
| Examples | Salesforce, Workday, ServiceNow, Slack, Zoom | Internal HRMS, vendor's bespoke portal |

🎯 **Always check the App Gallery first.** Microsoft pre-tests integrations and they save hours.

---

## 🚪 Microsoft Entra Application Proxy

**App Proxy** publishes on-prem web apps to the internet through Entra ID — *without* opening firewall ports inbound. A lightweight **connector** runs on a Windows Server inside the corporate network and maintains an *outbound* connection to Entra.

```
INTERNET
  ↓
USER  → Entra ID (auth + CA)
        ↓
        Outbound HTTPS to App Proxy connector (no inbound ports)
        ↓
        Connector → on-prem app (HTTP/HTTPS, NTLM/Kerberos OK)
```

| Use case | Example |
|----------|---------|
| Legacy on-prem app with no native SSO | Old intranet HRMS portal |
| Internal SharePoint farm exposed via SSO | SharePoint on-prem with Hybrid Entra Join |
| Apps using Kerberos Constrained Delegation (KCD) | Exchange OWA, internal Power BI |

| Spec | Detail |
|------|--------|
| Connector OS | Windows Server 2012 R2 or later (2019/2022 recommended) |
| Connector group | Connectors organized in groups; one app published per group |
| Auth methods supported | Entra ID pre-auth (CA applies!), Passthrough (no Entra auth), KCD for backend |
| License | **Entra ID P1 minimum** |

🚨 **Exam trap:** App Proxy is not a VPN. It's per-app, identity-aware, and Entra-authenticated. It does NOT provide network-level access.

---

## 🤝 User Consent Settings (PREVENT The Illicit Consent Attack)

The DEFAULT in older tenants was "Allow user consent for apps from any publisher." Microsoft tightened this in 2022 to **"Allow user consent for verified publishers, for selected permissions"** for new tenants — but you must verify the setting in your tenant.

Entra portal → Enterprise applications → Consent and permissions → User consent settings:

| Setting | Risk |
|---------|------|
| **Do not allow user consent** | Safest — every app needs admin consent |
| **Allow user consent for apps from verified publishers, for selected permissions** | Microsoft's 2022+ default |
| **Allow user consent for apps** (legacy) | The pre-2022 default that enabled illicit consent attacks |

🔥 **MEMORIZE:** If a scenario describes the illicit consent / phishing-OAuth attack, the answer is **"Set User consent settings to 'Do not allow user consent'"** and **"Enable the admin consent workflow."**

---

## 📋 Admin Consent Workflow

When user consent is restricted, users see a "Request approval" button on the consent screen. The request lands in a queue admins approve (or deny) from Entra portal → Enterprise applications → Admin consent requests.

| Configuration | Detail |
|---------------|--------|
| Enable | Entra portal → Enterprise apps → Consent and permissions → Admin consent settings |
| Reviewers | Specific users or groups (typically Application / Cloud Application Admins) |
| Notify on request | Email + in-portal |
| Reminder cadence | Configurable (e.g. 24h) |
| Expiry | Default 30 days |

🎯 **Exam tip:** Reviewer assignment is by user/group — **NOT** by Entra role. A Cloud Application Administrator who isn't in the reviewer list won't see the request.

---

## 🎭 App Permissions: Delegated vs Application

| | **Delegated permissions** | **Application permissions** |
|---|---------------------------|----------------------------|
| Acts on behalf of | A signed-in user | The app itself (no user context) |
| OAuth scope name | e.g. `User.Read`, `Mail.Send` | e.g. `User.Read.All`, `Mail.ReadBasic.All` |
| Effective permission | min(app permission, user's own permission) | Exactly what's granted, tenant-wide |
| Requires admin consent? | Some scopes (admin-only) require it; many are user-consentable | Always — no user context to consent |
| Example | A mail-merge app sends mail "as Alice" when Alice uses it | A background sync app reads all users' calendars unattended |

🚨 **Exam trap:** Application permissions are **always** admin-consentable only. If a scenario says "user can consent to send mail as themselves" → delegated. "Daemon reads all calendars at midnight" → application.

---

## 🪪 App Roles & Claims

**App roles** are custom role strings declared in the App Registration's manifest:

```json
"appRoles": [
  {
    "allowedMemberTypes": ["User", "Application"],
    "displayName": "Manager",
    "id": "8ddcd0d5-1b2c-4a8b-9c8f-1a2b3c4d5e6f",
    "isEnabled": true,
    "description": "Can approve expense reports",
    "value": "Manager"
  },
  {
    "allowedMemberTypes": ["User"],
    "displayName": "Submitter",
    "id": "1f2e3d4c-5b6a-7889-0011-aabbccddeeff",
    "isEnabled": true,
    "description": "Can submit expense reports",
    "value": "Submitter"
  }
]
```

Assigned in Enterprise App → Users and groups → Add user/group → pick role. The role surfaces in the user's token as `roles: ["Manager"]` claim.

🎯 **Exam tip:** App roles are **per-application** — totally separate from Entra ID roles. Don't confuse "Application Administrator" (Entra role over all apps) with the app's own "Manager" role (per-app).

---

## 🔒 OAuth 2.0 Flows You Should Know

| Flow | When |
|------|------|
| **Authorization Code + PKCE** | Modern web/SPA/mobile (most common) |
| **Client Credentials** | Daemon/service-to-service with App permissions |
| **Device Code** | Sign-in on devices without browsers (CLI tools, IoT) |
| **On-Behalf-Of (OBO)** | Middle-tier API forwarding a user's token to a downstream API |
| **Implicit grant** | DEPRECATED — replaced by Auth Code + PKCE |
| **Resource Owner Password Credentials (ROPC)** | DEPRECATED — sends password to app; phishable |

🚨 **Exam trap:** "Device Code" flow appears in CA conditions as **Authentication flow → Device code flow**. CA can require additional MFA when device-code is used (a common attack pattern).

---

## 🎯 Assignment Required

In Enterprise App → Properties → **Assignment required = Yes**: only users/groups explicitly assigned (in Users and groups blade) can sign in to the app.

When **Assignment required = No**: any user in the tenant can sign in (if they have a license / CA permits).

```text
SaaS app (e.g. Salesforce, internal HRMS):
  Assignment required = Yes
  Users and groups = [HRMS-Users, Sales-Team]
  → Only those groups can sign in
```

🎯 **Exam tip:** "User can't see the app in MyApps" → check Assignment required + user/group assignment first. Then check user consent settings + admin consent state.

---

## 🚨 Common Exam Traps

| Trap | Reality |
|------|---------|
| "App Registration and Enterprise App are the same thing" | ❌ Definition vs Local instance — totally different |
| "OAuth 2.0 is a sign-in protocol" | ❌ OAuth = authorization; OIDC adds sign-in |
| "Delegated permission allows acting unattended" | ❌ Always needs a user context |
| "Application permission can be user-consented" | ❌ Always admin-consent-only |
| "User consent default in 2026 is wide open" | ❌ New tenants default to verified-publisher + selected perms only |
| "App Proxy needs inbound firewall ports" | ❌ Outbound-only via connector |
| "App roles = Entra roles" | ❌ Per-app vs tenant-wide; different systems |
| "Implicit grant is the recommended modern flow" | ❌ Deprecated; use Auth Code + PKCE |
| "SAML uses JWT tokens" | ❌ SAML uses XML assertions |
| "Assignment required only blocks browser sign-in" | ❌ Blocks all auth flows |

---

## 🧪 Task-Sequencing Practice: Onboard A Vendor SaaS (Workday) With SAML SSO + Provisioning

**Order these steps correctly.**

The correct order:

1. ✅ Verify Workday is in the App Gallery — if so, add from Gallery (saves hours).
2. ✅ Configure **SAML SSO** in the Enterprise App: Identifier, Reply URL, attribute mappings.
3. ✅ Download Entra's **Federation Metadata XML** or token signing cert.
4. ✅ Upload that to Workday and configure Workday's SSO settings.
5. ✅ Set **Assignment required = Yes**.
6. ✅ Assign **Users and groups** (e.g. `Workday-Users` security group).
7. ✅ Configure **SCIM provisioning** if Workday supports it — Entra pushes new hires/leavers automatically.
8. ✅ Apply a **Conditional Access policy**: this app requires MFA + compliant device.
9. ✅ Test with **a pilot user** — sign in, validate attribute mapping, validate SCIM provisioning.
10. ✅ Roll out to broader group; configure **app-specific reviews** in access reviews.

⚠️ Skipping step 5 (Assignment required = Yes) is a security hole — *any* user in your tenant could sign in to Workday.

---

## 🎓 Key Terms To Know (Add to Anki!)

| Term | Definition |
|------|------------|
| **App Registration** | The application's definition / manifest in the home tenant |
| **Enterprise Application** | Local instance (service principal) of the app in a tenant |
| **Service Principal** | Same as Enterprise App — the identity of the app in this tenant |
| **OIDC** | OpenID Connect — modern sign-in on top of OAuth 2.0 |
| **OAuth 2.0** | Authorization framework (NOT sign-in by itself) |
| **SAML 2.0** | Legacy SSO protocol using XML assertions |
| **WS-Federation** | Older Microsoft SSO protocol; mostly legacy |
| **Redirect URI / Reply URL** | URL Entra POSTs the token/SAML response back to |
| **ACS URL** | Assertion Consumer Service URL — SAML term for Reply URL |
| **Entity ID / Identifier** | Unique URI for the SAML app |
| **Delegated permission** | Scope granted in user context (`User.Read`) |
| **Application permission** | Scope granted to the app itself, no user (`User.Read.All`) |
| **User consent** | User grants scopes to an app for themselves |
| **Admin consent** | Admin grants scopes for the entire tenant |
| **Admin consent workflow** | In-portal request → approval queue |
| **App role** | Per-app custom role string (`Manager`, `Submitter`) |
| **Assignment required** | App Property — only assigned users can sign in |
| **Microsoft Entra Application Proxy** | Publish on-prem web apps via outbound connector |
| **Conditional Access App Control** | Defender for Cloud Apps reverse proxy session control |
| **SCIM provisioning** | Standard API for syncing users/groups to a SaaS app |
| **Multi-tenant app** | App registration that accepts sign-ins from other tenants |

---

## ✅ Module 5 Summary

You now know:
- 🏗️ App Registration (recipe) vs Enterprise App (dish) — the canonical distinction
- 🌐 Three SSO protocols: OIDC (modern), SAML (legacy enterprise SaaS), WS-Fed (legacy MS)
- 🏛️ App Gallery vs custom non-gallery apps
- 🚪 App Proxy publishes on-prem apps without inbound ports
- 🤝 User consent settings + admin consent workflow defeat illicit consent attacks
- 🎭 Delegated vs application permissions
- 🪪 App roles in token claims
- 🎯 Assignment required as the per-app gate
- 🚨 The 10 most common traps at this layer

**Next steps:**
1. 🎥 Watch the videos in [Videos.md](./Videos.md)
2. ✏️ Take the [Quiz](./Quiz.md)
3. 📋 Review the [Cheat-Sheet](./Cheat-Sheet.md)
4. ➡️ Move to [Module 6: Identity Governance & PIM](../Module-06-Governance-PIM/Reading.md)

---

## 📊 Case Study — The 2022 OAuth Illicit Consent Wave

**Situation.** Beginning in late 2021 and peaking in mid-2022, Microsoft's Defender for Cloud Apps + Microsoft Threat Intelligence Center (MSTIC) tracked a surge in OAuth-based phishing attacks against Microsoft 365 tenants. The attack pattern was consistent:
1. Attacker registers a multi-tenant app in their own throwaway Entra tenant with a benign-sounding name like "Quarterly Reports Approval" or "Document Signing Service."
2. Attacker sends targeted email with a sign-in link that uses Microsoft's real OAuth consent URL — so the URL bar shows `login.microsoftonline.com`, indistinguishable from a legitimate Microsoft sign-in.
3. Victim signs in (real Microsoft creds, real MFA passes — the attacker isn't asking for the password).
4. Consent screen lists permissions: typically `Mail.ReadWrite`, `Mail.Send`, `Files.Read.All`, sometimes `offline_access` (refresh token).
5. Victim clicks Approve. The attacker now has an OAuth refresh token tied to the victim — *MFA bypassed because the user consented*.
6. Attacker uses the token to read mail, exfiltrate files, send phishing as the user, often pivoting to executives.

Microsoft tracked thousands of incidents tied to this pattern in 2022 (DART team posts; *Microsoft Security Response Center* blog posts in March 2022 and Sept 2022). The single Bing-search attack ("Volexity" disclosure) hit ~140+ orgs.

**Decision.** Microsoft hardened the default consent settings: tenants created in 2022 or later default to **"Allow user consent for apps from verified publishers, for selected permissions"** instead of the older "Allow user consent for apps." Microsoft also rolled out the **publisher verification** program — apps must be cryptographically verified by their publisher's MPN (Microsoft Partner Network) account before they're considered "verified."

Microsoft simultaneously published a customer playbook ("[Mitigate illicit consent grants](https://learn.microsoft.com/security/operations/incident-response-playbook-app-consent)") recommending all customers:
1. Set **User consent settings = Do not allow user consent**.
2. Enable **Admin consent workflow**.
3. Use **Microsoft Defender for Cloud Apps** to flag risky OAuth apps.
4. Run **KQL queries** weekly on `AuditLogs` for `Consent to application` events from unverified publishers.

**Outcome.** Per Microsoft Defender XDR telemetry (2024 retrospective):
- Tenants that adopted the "Do not allow user consent" + admin consent workflow setting saw **>99% reduction in successful illicit consent grants**.
- Median time to detect a consent grant for an unverified-publisher app dropped from "weeks to never" to under 2 days (via Defender for Cloud Apps OAuth alerts).
- Microsoft's own internal tenant adopted the strictest setting in 2022 and has not been successfully phished via OAuth consent since.

**Lesson for the exam / for practitioners.** Microsoft's identity defenses are not "off by default." Consent settings are a tenant-level decision; the security-conscious default ("admin consent only") trades user convenience for safety. SC-300 will absolutely test whether you know that:
- The phishable surface is **consent**, not authentication.
- The fix is **two settings**: user consent + admin consent workflow.
- The investigation tool is **Defender for Cloud Apps** OAuth alerts (which surfaces apps with unusual permission requests).

When you see a scenario about "user accepted an app permission and the attacker now has Mail.Send," the answer is *always* the consent settings + admin consent workflow + DCA OAuth governance.

**Discussion (Socratic).**
- **Q1.** The "Do not allow user consent" setting blocks legitimate self-service for users adopting new SaaS tools (e.g. a marketing tool that needs Calendar access). What's the user-experience cost vs the security benefit? Build a quantitative case for the strict setting.
- **Q2.** Microsoft's publisher verification program requires a paid MPN account. Defend: should publisher verification be required by default, or should orgs choose? What attacks does verification not stop?
- **Q3.** A SOC analyst wants to write a KQL detection for "user consented to an unverified-publisher app in last 24h." Sketch the query (use `AuditLogs` table, look for `OperationName == "Consent to application"`).

---

> **Where this leads.**
> - Inside this course: Module 4 CA policies target the apps you publish here; Module 6 access reviews can be run on app role assignments; Module 8 Sentinel detections find illicit consent.
> - Cross-course: [`08-Azure-AI-Engineer` Module 1](../../08-Azure-AI-Engineer/Module-01-Plan-Manage-Azure-AI/Reading.md) covers app-permissions for the AI services; [`09-CompTIA-Security-Plus` Module 7](../../09-CompTIA-Security-Plus/Module-07-Security-Operations/Reading.md) covers OAuth as part of broader app security.

---

## 💬 Discussion — Socratic prompts

1. **App Registration vs Enterprise App.** Why did Microsoft separate the recipe from the dish? What problem would a unified single-object model have caused for multi-tenant SaaS?
2. **OIDC vs SAML in 2026.** Many vendors offer both. When is SAML still the right choice over OIDC? Consider attribute richness, IdP-initiated flows, and legacy app compatibility.
3. **Admin consent workflow staffing.** If every user request goes to a queue, who staffs the queue? Argue for SOC, IT operations, or a delegated app-governance committee. What's the SLA expectation?
4. **App Proxy vs VPN vs Private Endpoint.** All three publish internal resources. When is each the right answer? Build the decision tree.
5. **App roles vs Entra roles vs Azure RBAC.** Sketch a scenario where all three are involved in one user's effective permissions (e.g. an HR analyst accessing an HR app in Azure).

---

## 📚 Further Reading (Optional)

- 📖 [Application and service principal objects in Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/app-objects-and-service-principals)
- 📖 [OAuth 2.0 and OpenID Connect in Microsoft Entra ID](https://learn.microsoft.com/entra/identity-platform/v2-protocols)
- 📖 [Configure how users consent to applications](https://learn.microsoft.com/entra/identity/enterprise-apps/configure-user-consent)
- 📖 [Microsoft Entra Application Proxy overview](https://learn.microsoft.com/entra/identity/app-proxy/overview-what-is-app-proxy)
- 📖 [Add SAML-based single sign-on to a non-gallery application](https://learn.microsoft.com/entra/identity/enterprise-apps/add-application-portal-setup-sso)
- 📖 Microsoft Security Response Center, "Illicit consent grants" series, 2022.
- 📖 NIST SP 800-204C, *Implementation of DevSecOps for a Microservices-based Application with Service Mesh* — context on OAuth/OIDC in modern API stacks.
