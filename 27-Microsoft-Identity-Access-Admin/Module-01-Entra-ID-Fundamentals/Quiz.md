# ✏️ Module 1 Quiz: Entra ID Fundamentals

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. Microsoft Entra ID was previously known as: *(Remember)*
A. Microsoft Identity Manager
B. Azure Active Directory
C. Active Directory Domain Services
D. Microsoft Account

---

### Q2. Which Entra ID edition is the minimum required for Conditional Access? *(Remember)*
A. Free
B. P1
C. P2
D. Microsoft Entra External ID

---

### Q3. Which two features REQUIRE Entra ID P2 (pick two)? *(Remember)*
A. Conditional Access
B. Identity Protection
C. Dynamic groups
D. Privileged Identity Management

---

### Q4. The default DNS domain of a new tenant has the format: *(Remember)*
A. `<tenant>.azure.com`
B. `<tenant>.microsoft.com`
C. `<tenant>.onmicrosoft.com`
D. `<tenant>.entra.com`

---

### Q5. Maximum verified custom domains per tenant: *(Remember)*
A. 1
B. 25
C. 500
D. 5,000

---

### Q6. A 4,200-employee health system buys Microsoft 365 E5 for all staff. What Entra ID tier do they already have? *(Apply)*
A. Free
B. P1 only
C. P2 (with Identity Protection + PIM)
D. External ID

---

### Q7. The right artifact to invite "Alice from Acme Partner" to your tenant is: *(Apply)*
A. Create her as a cloud member user
B. B2B guest invitation
C. Set up an External ID consumer tenant
D. Federated trust with Acme's tenant

---

### Q8. Which statement BEST distinguishes B2B from External ID? *(Understand)*
A. B2B uses social IdPs; External ID uses Microsoft accounts
B. B2B is for workforce partners (guests in your tenant); External ID is for consumer apps (separate tenant)
C. They are the same, both for external users
D. B2B is for employees; External ID is for guests

---

### Q9. A Global Administrator wants to take Owner over an Azure subscription. What must they do FIRST? *(Apply)*
A. Already implicit, GA has Owner everywhere
B. Toggle "Access management for Azure resources" → Yes; then assign themselves User Access Admin at root scope
C. Open a support ticket
D. Have another Global Admin grant them Contributor

---

### Q10. Which role can reset MFA for ANY user, including Global Admins? *(Remember)*
A. Helpdesk Administrator
B. Authentication Administrator
C. Privileged Authentication Administrator
D. User Administrator

---

### Q11. Default retention of Entra sign-in logs for a P1 tenant: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. 1 year

---

### Q12. Long-term retention of Entra sign-in logs is achieved by: *(Apply)*
A. Buying Entra ID P2
B. Configuring Diagnostic Settings → Log Analytics workspace
C. Turning on Security Defaults
D. Enabling Identity Protection

---

### Q13. Which statement about the default `<tenant>.onmicrosoft.com` name is TRUE? *(Understand)*
A. It can be renamed once after tenant creation
B. It can be deleted after a custom domain is verified
C. It is permanent and cannot be renamed or deleted
D. It is optional, many tenants don't have one

---

### Q14. To verify a custom domain `contoso.com` you typically: *(Apply)*
A. Email Microsoft support proof of ownership
B. Add a TXT (or MX) record at the DNS provider, then click Verify
C. Run a PowerShell command that auto-provisions DNS
D. Upload an SSL cert to Entra ID

---

### Q15. Tenant branding (custom logo on sign-in page) requires: *(Remember)*
A. Free
B. P1 or higher
C. P2 or higher
D. External ID

---

### Q16. Microsoft recommends keeping the number of Global Administrators at most: *(Remember)*
A. 1
B. 5
C. 12
D. 25

---

### Q17. Which is NOT a typical reason to have multiple tenants? *(Understand)*
A. Hard isolation for sovereign cloud (e.g. US Gov)
B. Testing/sandbox
C. Subsidiary with regulatory data-residency separation
D. To get around the 5,000 custom domain limit

---

### Q18. Which is TRUE about service limits? *(Understand)*
A. There's a hard cap of 500,000 objects per paid tenant
B. Group nesting depth has no limit
C. A user can have up to 250 app registrations by default
D. Administrative Units cannot be raised beyond the default

---

### Q19. A user wants to register a B2B guest from `acmepartner.com`, but the action is blocked. The most likely cause is: *(Apply)*
A. External collaboration settings restrict who can invite guests
B. The user lacks Owner on the subscription
C. The tenant is in External ID mode
D. The guest needs to upgrade to a paid Microsoft account

---

### Q20. **Yes/No**, For each statement, mark Yes or No. *(Understand)*

**S1:** Microsoft Entra ID Governance is a separate add-on SKU that adds Lifecycle Workflows.
**S2:** Microsoft 365 E3 includes Entra ID P2.
**S3:** Branding works in the Free tier.

A. Yes / Yes / No
B. Yes / No / No
C. No / Yes / No
D. Yes / No / Yes

---

### Q21. **Order these steps** to stand up a new Entra tenant for a subsidiary. *(Apply)*

1. Create 2 cloud-only break-glass Global Admin accounts
2. Verify the first custom domain
3. Sign in to the Entra admin center and click Create a tenant
4. Configure External collaboration settings to restrict guest invitations

A. 1 → 2 → 3 → 4
B. 3 → 2 → 1 → 4
C. 3 → 1 → 2 → 4
D. 2 → 3 → 1 → 4

---

### Q22. **Yes/No**, Roles. *(Understand)*

**S1:** Entra ID roles and Azure RBAC roles are the same role system with different names.
**S2:** A Global Administrator implicitly has Owner over every Azure subscription.
**S3:** Privileged Role Administrator can assign any Entra ID role and manage PIM.

A. No / No / Yes
B. Yes / Yes / Yes
C. No / Yes / Yes
D. No / No / No

---

### Q23. The CISO wants to convert a federated domain `contoso.com` to managed (cloud auth). What's the BEST justification? *(Analyze)*
A. Federation prevents users from using SSPR
B. Managed authentication keeps the user signal in Entra ID, enabling richer CA + Identity Protection signals
C. Federation requires P2
D. Managed is the only option that supports custom branding

---

### Q24. Helpdesk Administrator role CAN: *(Understand)*
A. Reset passwords for any user, including Global Admins
B. Reset MFA methods for non-admins
C. Reset passwords for non-admins
D. Assign Entra roles

---

### Q25. **Yes/No**, Editions & feature mapping. *(Evaluate)*

**S1:** Conditional Access works with Entra ID Free.
**S2:** Identity Protection requires Entra ID P2.
**S3:** Entitlement management (access packages) requires Entra ID P2.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / Yes

---

## 🎯 Answers + Explanations

### Q1: **B. Azure Active Directory**
Renamed to Microsoft Entra ID in mid-2023. SC-300 uses both names interchangeably.

### Q2: **B. P1**
Conditional Access starts at P1. Identity Protection (risk-based CA) is the P2 feature.

### Q3: **B and D, Identity Protection + PIM**
Conditional Access (A) is P1. Dynamic groups (C) is P1. Identity Protection and PIM both need P2.

### Q4: **C. `<tenant>.onmicrosoft.com`**
Permanent and cannot be renamed or deleted.

### Q5: **D. 5,000**
Verified custom DNS domains per tenant cap at 5,000.

### Q6: **C. P2 (with Identity Protection + PIM)**
Microsoft 365 E5 bundles Entra ID P2; E3 bundles P1.

### Q7: **B. B2B guest invitation**
Partners go through B2B. External ID is for consumer-facing apps, not workforce collaboration.

### Q8: **B. B2B is for workforce partners; External ID is for consumer apps (separate tenant)**
Most important distinction in SC-300, the exam will trick you here.

### Q9: **B. Toggle "Access management for Azure resources" → Yes; then assign themselves User Access Admin at root scope**
The deliberate, audited elevation path. GA does NOT have Azure RBAC by default.

### Q10: **C. Privileged Authentication Administrator**
"Privileged" prefix means it can target admins. Authentication Administrator targets non-admins only.

### Q11: **B. 30 days**
7 days for Free, 30 days for P1/P2. Beyond that = forward to Log Analytics.

### Q12: **B. Configuring Diagnostic Settings → Log Analytics workspace**
The retention upgrade comes from where logs land, not from a license tier.

### Q13: **C. It is permanent and cannot be renamed or deleted**
Plan accordingly, pick a name you can live with.

### Q14: **B. Add a TXT (or MX) record at the DNS provider, then click Verify**
Standard DNS-based ownership proof.

### Q15: **B. P1 or higher**
Free tenants get the generic Microsoft branding only.

### Q16: **B. 5**
Microsoft's published guidance is to keep Global Admins ≤5; minimum 2 (so loss of one doesn't lock out the tenant).

### Q17: **D. To get around the 5,000 custom domain limit**
Per-tenant limits aren't bypassed by splitting tenants, multi-tenancy is for isolation, not capacity.

### Q18: **C. A user can have up to 250 app registrations by default**
Default 250, configurable via Application Developer role.

### Q19: **A. External collaboration settings restrict who can invite guests**
Default lets "Members" invite. Many orgs restrict to admins or specific groups.

### Q20: **B. Yes / No / No**
S1 yes (Governance is a separate add-on). S2 no (E3 = P1; E5 = P2). S3 no (branding needs P1).

### Q21: **C. 3 → 1 → 2 → 4**
Create tenant first, then break-glass accounts (so you're not locked out), then custom domain, then collaboration settings.

### Q22: **A. No / No / Yes**
S1 no (three separate systems). S2 no (must explicitly elevate). S3 yes.

### Q23: **B. Managed authentication keeps the user signal in Entra ID, enabling richer CA + Identity Protection signals**
Federation pushes auth out, Entra loses sign-in signals (location, device, risk) that power CA + Identity Protection.

### Q24: **C. Reset passwords for non-admins**
Helpdesk Admin = password reset only, and only on non-admin accounts.

### Q25: **B. No / Yes / Yes**
S1 no (CA needs P1). S2 yes. S3 yes.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Foundation locked in.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read the License Matrix + Roles sections. Re-quiz tomorrow.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- Entra ID = formerly Azure AD
- Conditional Access = P1; Identity Protection / PIM = P2
- Branding = P1
- Default sign-in log retention = 7 day Free / 30 day P1+
- B2B (partners in your tenant) vs External ID (customers in separate tenant)
- Global Admin needs explicit elevation for Azure RBAC root
- Privileged Authentication Administrator can reset admin MFA; Authentication Administrator cannot

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2](../Module-02-Users-Groups/Reading.md)
