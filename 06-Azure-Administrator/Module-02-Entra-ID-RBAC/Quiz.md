# ✏️ Module 2 Quiz: Entra ID & RBAC

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading. Aim for 22/26 minimum.

---

## Questions

### Q1. Microsoft Entra ID primarily speaks which protocols?
A. LDAP and Kerberos
B. OAuth 2.0, OIDC, and SAML
C. NTLM and RADIUS
D. SMB and DCOM

---

### Q2. Which Entra ID license is REQUIRED for Conditional Access?
A. Free
B. Microsoft 365 Business Basic
C. P1
D. P2

---

### Q3. Which Entra ID license is REQUIRED for Identity Protection (risk-based policies)?
A. Free
B. Office 365 E1
C. P1
D. P2

---

### Q4. A dynamic group rule like `(user.department -eq "Sales")` requires what license?
A. Free
B. P1
C. P2
D. Microsoft 365 E5

---

### Q5. You want to give a vendor 4 hours of `Contributor` on one resource group, with MFA + manager approval. Which feature?
A. RBAC custom role
B. PIM for Azure resources
C. Conditional Access
D. Administrative units

---

### Q6. Which built-in role can assign other roles?
A. Contributor
B. Reader
C. Owner
D. Security Administrator

---

### Q7. A Storage Account Contributor has full control plane access. Can they read blob contents?
A. Yes automatically
B. Only after assigning themselves a data role like `Storage Blob Data Reader`
C. Yes, if MFA is satisfied
D. Never

---

### Q8. What is the maximum activation duration for a PIM role (default cap)?
A. 1 hour
B. 4 hours
C. 8 hours
D. 24 hours

---

### Q9. For a workload running on an Azure VM that needs to read from a Key Vault, the BEST identity is:
A. Hard-coded connection string
B. Service principal with a secret
C. Managed identity (system or user-assigned)
D. The VM's local admin account

---

### Q10. You need country IT admins to manage **only their country's users**. What feature?
A. Conditional Access
B. Administrative units (AUs)
C. PIM
D. Custom RBAC role

---

### Q11. Yes/No — Mark each statement.

**S1:** A Conditional Access policy can require both MFA and a compliant device in one policy.
**S2:** Security defaults and Conditional Access can both be enabled simultaneously.
**S3:** Conditional Access policies can target guest users.

A. Yes / Yes / Yes
B. Yes / No / Yes
C. No / No / Yes
D. Yes / Yes / No

---

### Q12. A B2B guest from Acme Corp signs in to your tenant. Their UPN in your tenant looks like:
A. `alice@acme.com`
B. `alice_acme.com#EXT#@contoso.onmicrosoft.com`
C. `acme\alice`
D. `guest_alice@contoso.com`

---

### Q13. You want customers (millions of them) to sign up for your retail app with Google and Facebook IdPs. The right Microsoft offering is:
A. Entra ID B2B
B. Entra External ID (formerly Azure AD B2C)
C. Microsoft 365 Defender
D. Microsoft Intune

---

### Q14. Which authentication method is considered the STRONGEST (phishing-resistant)?
A. SMS
B. Voice call
C. Microsoft Authenticator app push
D. FIDO2 security key

---

### Q15. In RBAC, permissions are calculated by:
A. Most restrictive deny wins
B. Union of all role assignments at and above the scope (additive)
C. Only the last assignment counts
D. Permissions inherit only one level

---

### Q16. Can a Contributor at a Resource Group level create role assignments at that RG?
A. Yes
B. No — Contributor explicitly cannot assign roles
C. Yes, but only for self
D. Only if MFA is satisfied

---

### Q17. Which scope is the **highest** at which you can assign an Azure RBAC role?
A. Resource
B. Resource Group
C. Subscription
D. Management Group

---

### Q18. **Order these steps** to grant a new third-party data analyst read-only access to one storage account's blobs.

1. Invite as B2B guest
2. Add the guest to a security group
3. Assign `Storage Blob Data Reader` to the group at the storage account scope
4. Confirm a Conditional Access policy requires MFA for guests

A. 1 → 2 → 3 → 4
B. 4 → 1 → 2 → 3
C. 2 → 1 → 3 → 4
D. 1 → 3 → 2 → 4

---

### Q19. The "Number matching" feature in Microsoft Authenticator is designed to defeat which attack?
A. SIM swap
B. MFA fatigue / push bombing
C. Replay attacks
D. Phishing of TOTP codes

---

### Q20. You enable Security Defaults on a tenant. What is one effect?
A. All users get MFA prompts based on risk
B. Legacy authentication is blocked, and MFA is required for everyone (especially admins)
C. The tenant becomes hybrid
D. All P2 features are unlocked

---

### Q21. A user has these role assignments:
- `Reader` at the subscription
- `Contributor` at `rg-app`
- `Storage Blob Data Owner` at `rg-app/storage1`

What can they do on a blob inside `storage1`?
A. Read only
B. Read/write at the control plane only
C. Read, write, delete blob data and modify ACLs
D. Nothing — conflicting roles cancel

---

### Q22. Which is TRUE about deny in Azure RBAC?
A. You can create user-defined deny assignments at will
B. There is no user-creatable deny; managed services may create deny assignments, and Azure Policy `Deny` blocks actions
C. Deny always wins over Allow at all scopes
D. Deny applies only at the management group level

---

### Q23. A user-assigned managed identity differs from system-assigned in that:
A. It can be used by Azure AD B2C only
B. It exists independently and can be attached to many resources, surviving their deletion
C. It requires you to rotate a secret monthly
D. It works only with Azure Functions

---

### Q24. Yes/No — A Conditional Access policy is created with these conditions: All users, All cloud apps, Locations = Block list = Russia, Grant = Block.

**S1:** A user in Russia attempting to sign in will be blocked.
**S2:** A user in Spain will also be blocked.
**S3:** The policy can be tested first using "Report-only" mode before enforcing.

A. Yes / No / Yes
B. Yes / Yes / Yes
C. No / No / Yes
D. Yes / Yes / No

---

### Q25. Per-user MFA, security defaults, and Conditional Access — which is the modern, recommended way to enforce MFA?
A. Per-user MFA
B. Security defaults (for basic baseline only)
C. Conditional Access (granular, recommended)
D. All three at once

---

### Q26. Access reviews are useful for:
A. Replacing PIM
B. Periodic re-justification of role assignments and group memberships
C. Running compliance scans on storage
D. Synchronizing on-prem AD

---

## 🎯 Answers + Explanations

### Q1: **B. OAuth 2.0, OIDC, and SAML**
Entra ID is cloud-native. For LDAP/Kerberos you'd use Entra Domain Services (a different product) or stick with on-prem AD.

### Q2: **C. P1**
Conditional Access needs Entra ID P1 (included in M365 E3/E5).

### Q3: **D. P2**
Identity Protection (risk-based CA) is the headline P2 feature.

### Q4: **B. P1**
Dynamic group membership rules require P1. Common gotcha.

### Q5: **B. PIM for Azure resources**
Just-in-time, time-bound, MFA + approval-gated activation = PIM by definition.

### Q6: **C. Owner**
Owner + User Access Administrator are the role-assigning roles. Contributor explicitly cannot.

### Q7: **B. Only after assigning themselves a data role**
Control plane (Storage Account Contributor) ≠ data plane (Storage Blob Data Reader). A subtle but heavily tested distinction.

### Q8: **C. 8 hours**
Default cap; you can lower it per role in PIM settings.

### Q9: **C. Managed identity**
No secrets to rotate, lifecycle is managed by Azure. Always preferred for Azure-hosted workloads.

### Q10: **B. Administrative units (AUs)**
AUs scope directory-level admin (User Admin, Helpdesk Admin) to a subset of users/groups.

### Q11: **A. Yes / Yes / Yes**
All three are true. **However:** when you turn Security Defaults on, the portal nags about CA — and CA generally supersedes Security Defaults in practice. Microsoft does allow both, but the guidance is to migrate to CA.

(Correction note: Microsoft documentation states that enabling CA **disables** Security Defaults — if your exam phrases this strictly, S2 may be NO. Read the exact wording.)

### Q12: **B. `alice_acme.com#EXT#@contoso.onmicrosoft.com`**
The classic B2B guest UPN format.

### Q13: **B. Entra External ID (formerly Azure AD B2C)**
Consumer-facing, sign-up flows, social IdPs.

### Q14: **D. FIDO2 security key**
Hardware-backed, phishing-resistant. SMS/voice are the weakest. Push without number matching is vulnerable to fatigue attacks.

### Q15: **B. Union of all role assignments at and above the scope (additive)**
Roles add up. No deny in standard RBAC.

### Q16: **B. No — Contributor explicitly cannot assign roles**
Even within the RG. Use Owner or UAA for that.

### Q17: **D. Management Group**
You can assign roles down from MG → sub → RG → resource.

### Q18: **A. 1 → 2 → 3 → 4**
Invite → group → grant at scope → confirm CA. Granting at the storage account scope (not sub-wide) follows least privilege.

### Q19: **B. MFA fatigue / push bombing**
The user must type a 2-digit number shown in the app, defeating "spam push until they tap Approve" attacks.

### Q20: **B. Legacy authentication is blocked, and MFA is required for everyone (especially admins)**
Security defaults are a free, opinionated baseline. Risk-based prompts need P2 (Identity Protection).

### Q21: **C. Read, write, delete blob data and modify ACLs**
`Storage Blob Data Owner` includes full data-plane access. Subscription Reader still lets them see the resource exists.

### Q22: **B. There is no user-creatable deny; managed services may create deny assignments, and Azure Policy `Deny` blocks actions**
Deny assignments are reserved for Azure managed services. For policy-based deny, use Azure Policy.

### Q23: **B. It exists independently and can be attached to many resources, surviving their deletion**
User-assigned MIs are their own ARM resource. System-assigned dies with its parent.

### Q24: **A. Yes / No / Yes**
Russia is in the block list — blocked. Spain isn't — allowed. Report-only mode is a real CA setting and is recommended before enforcing.

### Q25: **C. Conditional Access**
Per-user MFA is legacy; Security Defaults are a free baseline only; CA is the modern, granular path.

### Q26: **B. Periodic re-justification of role assignments and group memberships**
Access reviews keep your principle of least privilege honest over time.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Identity domain mastered.
- 22–24/26 → ✅ Strong. Note misses, move on.
- 18–21/26 → ⚠️ Re-read CA + PIM + RBAC sections.
- <18/26 → 🔁 Re-read the entire module.

---

## 🃏 Add To Your Flashcards

- Entra licensing tiers (Free / P1 / P2) and what unlocks at each
- B2B guest UPN format
- B2B vs External ID (B2C)
- 4 fundamental RBAC roles + UAA
- Control plane vs data plane
- "No user-creatable deny in RBAC"
- PIM eligible vs active
- Managed identity (system vs user-assigned)
- Authenticator number matching → defeats MFA fatigue

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 3](../Module-03-Storage-Accounts-Blobs/Reading.md)
