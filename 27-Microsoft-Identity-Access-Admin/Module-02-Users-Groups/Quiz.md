# ✏️ Module 2 Quiz: Users, Groups & External Identities

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. The UPN format of a B2B guest from `partner.com` invited into `contoso` is: *(Remember)*
A. `alice@partner.com`
B. `alice_partner.com#EXT#@contoso.onmicrosoft.com`
C. `alice@contoso.com (guest)`
D. `partner.alice@contoso.com`

---

### Q2. Which attribute MUST be set on a user before most M365/Entra licenses can be assigned? *(Apply)*
A. JobTitle
B. Department
C. UsageLocation
D. MailNickname

---

### Q3. Dynamic groups REQUIRE which minimum license? *(Remember)*
A. Free
B. P1
C. P2
D. Entra ID Governance

---

### Q4. Entitlement management (access packages) REQUIRE which minimum license? *(Remember)*
A. Free
B. P1
C. P2
D. M365 Apps

---

### Q5. Lifecycle Workflows are part of which SKU? *(Remember)*
A. Free
B. P1
C. P2 (standalone)
D. Microsoft Entra ID Governance (add-on)

---

### Q6. Which dynamic rule selects all non-guest users in Spain? *(Apply)*
A. `(user.country -eq "Spain") -or (user.userType -eq "Guest")`
B. `(user.userType -ne "Guest") and (user.country -eq "Spain")`
C. `(user.country -in "Spain") and not (user.userType -ne "Guest")`
D. `(user.location -startsWith "Spain")`

---

### Q7. A user is removed from a dynamic group. What happens to their license assigned via group-based licensing on that group? *(Understand)*
A. License is retained until manually revoked
B. License is reclaimed automatically (usually within minutes to hours)
C. License is reclaimed after 30 days
D. License cannot be reclaimed without admin action

---

### Q8. B2B direct connect differs from B2B collaboration in that: *(Understand)*
A. B2B direct connect creates a guest user object; collaboration does not
B. B2B direct connect does NOT create a guest user object; both parties trust each other for Teams shared channels
C. B2B direct connect is a synonym for B2B collaboration
D. B2B direct connect is for consumers; collaboration is for partners

---

### Q9. The default "Guest invite settings" for new tenants is: *(Remember)*
A. Only Global Admins can invite
B. No one can invite
C. Anyone in the organization can invite (including members)
D. Only members of a specific group

---

### Q10. Per-partner inbound/outbound B2B rules live in: *(Apply)*
A. External collaboration settings
B. Cross-tenant access settings
C. Conditional Access named locations
D. Entitlement management

---

### Q11. The right artifact to allow Engineering employees to request access to Project-X with manager approval, 90-day expiry, and quarterly access review is: *(Apply)*
A. A security group with assigned membership
B. A dynamic group rule on `department`
C. An access package in entitlement management
D. A custom Entra role

---

### Q12. A "catalog" in entitlement management is: *(Understand)*
A. A SharePoint document library
B. A container of resources + access packages, with delegated ownership
C. A list of Microsoft 365 SKUs
D. A directory role assignment

---

### Q13. A "connected organization" in entitlement management lets you: *(Apply)*
A. Federate with on-prem AD
B. Define an external Entra tenant that access packages can grant guest access to
C. Sync users from Workday
D. Set up B2B direct connect

---

### Q14. Administrative Units (AUs) support which of these scoping models? *(Understand)*
A. Nested hierarchy with 6 levels
B. Flat (non-nested) containers of users/groups/devices
C. RBAC at resource group scope
D. Per-app role scoping

---

### Q15. **Yes/No**, Group types. *(Understand)*

**S1:** A single group can be both Security and M365.
**S2:** A dynamic-user group can also have manually assigned members.
**S3:** A Security group can be converted between Assigned and Dynamic membership types.

A. Yes / Yes / Yes
B. No / No / Yes
C. No / No / No
D. Yes / No / Yes

---

### Q16. The Helpdesk Administrator role scoped to an AU "Spain Region" can: *(Apply)*
A. Reset passwords for all users tenant-wide
B. Reset passwords only for non-admins inside the Spain AU
C. Assign any Entra role within the AU
D. Create new AUs

---

### Q17. A Terms of Use document is enforced by: *(Apply)*
A. A directory-wide setting
B. A Conditional Access policy grant control
C. A Defender for Cloud Apps policy
D. The user's UPN format

---

### Q18. Lifecycle Workflow trigger attributes typically include: *(Remember)*
A. `userType` and `country`
B. `employeeHireDate` and `employeeLeaveDateTime`
C. `displayName` and `mail`
D. `mobilePhone` and `jobTitle`

---

### Q19. A common cause of "Add member to dynamic group" returning unexpected results is: *(Analyze)*
A. The user's `usageLocation` is wrong
B. Dynamic rule evaluation is asynchronous (eventual consistency); large rules can take minutes to hours
C. The user is in a different administrative unit
D. M365 group rules don't support dynamic membership

---

### Q20. **Yes/No**, Licenses & features. *(Understand)*

**S1:** Group-based licensing requires Entra ID P1.
**S2:** Conditional Access is a prerequisite for Terms of Use.
**S3:** Lifecycle Workflows are included in Entra ID P2.

A. Yes / Yes / No
B. Yes / Yes / Yes
C. No / Yes / No
D. Yes / No / No

---

### Q21. **Order these steps** to onboard vendor `acme.com` with a self-service access package. *(Apply)*

1. Add `acme.com` to External collaboration settings allow list
2. Create a catalog and add resources
3. Add `acme.com` as a connected organization
4. Create an access package with assignment policies

A. 1 → 2 → 3 → 4
B. 2 → 4 → 1 → 3
C. 1 → 3 → 2 → 4
D. 4 → 3 → 2 → 1

---

### Q22. Which is TRUE about B2B guest sign-in? *(Understand)*
A. Guests always use a Microsoft account
B. Guests can sign in using their existing org account, Google, or one-time email passcode
C. Guests must create a new Entra password
D. Guests cannot sign in until they accept a Terms of Use

---

### Q23. A scenario: "We want to delegate user-management to regional helpdesks without giving them tenant-wide rights." The right artifact is: *(Apply)*
A. Conditional Access policy
B. Administrative Unit with scoped role assignment
C. Multiple tenants
D. Custom Azure RBAC role

---

### Q24. Default soft-delete period for an Entra user after deletion: *(Remember)*
A. 7 days
B. 30 days
C. 90 days
D. Permanent immediately

---

### Q25. **Yes/No**, B2B & directory. *(Evaluate)*

**S1:** Removing a B2B guest and re-inviting them creates a new object with new IDs.
**S2:** Group-based licensing can result in users not getting a license if the SKU runs out.
**S3:** A guest user's `userType` can be flipped to `Member` to grant member-level directory permissions.

A. Yes / Yes / Yes
B. No / No / Yes
C. Yes / Yes / No
D. No / Yes / Yes

---

## 🎯 Answers + Explanations

### Q1: **B. `alice_partner.com#EXT#@contoso.onmicrosoft.com`**
The canonical B2B guest UPN format. `#EXT#` is what dynamic group rules and CA conditions look for.

### Q2: **C. UsageLocation**
Two-letter country code required before most license assignments. Common day-1 trap.

### Q3: **B. P1**
Dynamic groups are a P1 feature, alongside group-based licensing and Conditional Access.

### Q4: **C. P2**
Entitlement management lives in P2 (alongside PIM, Identity Protection, access reviews).

### Q5: **D. Microsoft Entra ID Governance (add-on)**
Lifecycle Workflows ship in the Governance add-on SKU, not standalone P2.

### Q6: **B. `(user.userType -ne "Guest") and (user.country -eq "Spain")`**
Both predicates must be true. The other options have wrong operators or logic.

### Q7: **B. License is reclaimed automatically (usually within minutes to hours)**
Group-based licensing tracks membership; departure triggers automatic license removal.

### Q8: **B. B2B direct connect does NOT create a guest user object; both parties trust each other for Teams shared channels**
This is one of the most-tested distinctions. Direct connect = no guest object; collaboration = guest object.

### Q9: **C. Anyone in the organization can invite (including members)**
Default is permissive. Lock down for sensitive tenants.

### Q10: **B. Cross-tenant access settings**
Per-partner inbound/outbound + B2B direct connect lives here, not in tenant-wide collaboration settings.

### Q11: **C. An access package in entitlement management**
The textbook entitlement management use case: self-service + approval + time-bound + reviews.

### Q12: **B. A container of resources + access packages, with delegated ownership**
Catalogs are the delegation boundary so non-admins can own packages.

### Q13: **B. Define an external Entra tenant that access packages can grant guest access to**
Connected orgs auto-provision the B2B guest when an access package is assigned.

### Q14: **B. Flat (non-nested) containers of users/groups/devices**
AUs are NOT nested. Plan accordingly.

### Q15: **B. No / No / Yes**
A group is either Security or M365 (not both). Dynamic-user groups exclude manual assignment. Security groups CAN switch membership type (disruptive but possible).

### Q16: **B. Reset passwords only for non-admins inside the Spain AU**
AU scope + the role's own limits (Helpdesk = non-admins only).

### Q17: **B. A Conditional Access policy grant control**
TOU is enforced via CA. No CA → no TOU.

### Q18: **B. `employeeHireDate` and `employeeLeaveDateTime`**
The two canonical lifecycle attributes Microsoft uses for triggers.

### Q19: **B. Dynamic rule evaluation is asynchronous (eventual consistency); large rules can take minutes to hours**
Eventual consistency is the answer to many "why doesn't it work right now" questions.

### Q20: **A. Yes / Yes / No**
S1 yes. S2 yes (CA is required to attach a TOU). S3 no (Lifecycle Workflows = Governance SKU).

### Q21: **A. 1 → 2 → 3 → 4**
Settings first (open up the path), then catalog → connected org → access package.

### Q22: **B. Guests can sign in using their existing org account, Google, or one-time email passcode**
B2B uses *their* IdP whenever possible; OTP email is the fallback.

### Q23: **B. Administrative Unit with scoped role assignment**
Textbook AU use case: scope admin rights without multi-tenant complexity.

### Q24: **B. 30 days**
Soft-deleted users can be restored within 30 days. After that, permanent.

### Q25: **A. Yes / Yes / Yes**
S1 yes (new object = lost permissions). S2 yes (SKU exhaustion). S3 yes (flipping userType is supported, though rare).

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Identity hygiene locked in.
- 21–23/25 → ✅ Solid. Note misses; move on.
- 17–20/25 → ⚠️ Re-read the Dynamic Groups + Entitlement Management sections.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- B2B guest UPN format (`#EXT#`)
- `UsageLocation` required before licenses
- Dynamic groups = P1
- Entitlement Mgmt = P2
- Lifecycle Workflows = Entra ID Governance SKU
- B2B vs B2B direct connect
- External Collab Settings vs Cross-Tenant Access Settings
- AUs = flat, no nesting

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 3](../Module-03-Authentication/Reading.md)
