# ✏️ Module 1 Quiz: Subscriptions & Resource Hierarchy

> **Instructions:** Answer all 25 questions WITHOUT looking at the reading. Aim for 21/25 minimum before moving on.

---

## Questions

### Q1. From top to bottom, what is the correct order of Azure's resource hierarchy? *(Remember)*
A. Subscription → Tenant → Resource Group → Resource
B. Tenant → Management Group → Subscription → Resource Group → Resource
C. Management Group → Tenant → Subscription → Resource
D. Tenant → Subscription → Management Group → Resource Group → Resource

---

### Q2. How many management groups deep can you nest under the Tenant Root Group? *(Remember)*
A. 3
B. 4
C. 6
D. Unlimited

---

### Q3. A resource group has a region setting. Why? *(Understand)*
A. All resources in the RG must be in that region
B. Only for billing purposes
C. To store the RG's metadata; resources can live in other regions
D. To enforce data sovereignty

---

### Q4. Which statement about tags is TRUE? *(Understand)*
A. Tags inherit automatically from RG to resource
B. Tags are NOT inherited automatically; use a policy to enforce inheritance
C. Tags can be applied only to resource groups, not individual resources
D. Tags inherit from subscription to RG but not RG to resource

---

### Q5. An admin applies a `Deny` policy at the Tenant Root Group that blocks `eastus2` deployments. A team in a child subscription needs to deploy to `eastus2`. What's the cleanest fix? *(Apply)*
A. Override the policy at the subscription with an Allow policy
B. Move the subscription out of the management group hierarchy
C. Create a policy exemption at the appropriate scope
D. Delete the parent policy

---

### Q6. Which lock type can break operations like listing storage account keys? *(Understand)*
A. CanNotDelete
B. ReadOnly
C. NoAccess
D. Audit

---

### Q7. Who can create or remove resource locks by default? *(Remember)*
A. Any Reader
B. Contributors
C. Owners and User Access Administrators
D. Only the subscription's billing admin

---

### Q8. You want to move a VM (with managed disks, NIC, public IP) from Subscription A to Subscription B. Which is NOT required? *(Apply)*
A. Both subscriptions must be in the same Entra ID tenant
B. You must remove any resource locks first
C. You must stop (deallocate) the VM
D. You must validate the move (e.g. `validateMoveResources`) first

---

### Q9. Which subscription type is the modern, billing-portal-driven replacement for the Enterprise Agreement? *(Remember)*
A. Pay-As-You-Go
B. CSP
C. Microsoft Customer Agreement (MCA)
D. Visual Studio Subscription

---

### Q10. A subscription is currently associated with `contoso.onmicrosoft.com`. Can it be transferred to a different Entra ID tenant? *(Understand)*
A. No — subscriptions are permanently bound to their original tenant
B. Yes, via the "Change directory" action by a Billing Account Admin
C. Only by opening a Microsoft support ticket
D. Only if it's an MCA subscription

---

### Q11. Which Azure Policy effect would automatically deploy a missing diagnostic setting after a resource is created? *(Apply)*
A. Audit
B. Deny
C. Append
D. DeployIfNotExists

---

### Q12. You need to apply a single set of controls (allowed locations, required tags, encryption) consistently. The right artifact is: *(Apply)*
A. A single policy
B. An initiative (a.k.a. policy set)
C. A resource lock
D. An ARM template

---

### Q13. **Order these steps to move a VM from RG-A to RG-B (same subscription).** Pick the right sequence. *(Apply)*

1. Remove any locks on RG-A
2. Run `az resource invoke-action validateMoveResources`
3. Execute `az resource move`
4. Re-apply tags / RBAC at the destination as needed

A. 2 → 1 → 3 → 4
B. 1 → 2 → 3 → 4
C. 1 → 3 → 2 → 4
D. 3 → 1 → 2 → 4

---

### Q14. Which is TRUE about subscriptions and resource quotas? *(Understand)*
A. Quotas are tenant-wide
B. Quotas are per-RG
C. Quotas are per-subscription per-region
D. There are no quotas — Azure is unlimited

---

### Q15. The CFO wants a forecasted monthly Azure spend, sliceable by department. Which combination is the BEST? *(Analyze)*
A. Azure Advisor + budgets
B. Tags (e.g. `CostCenter`) + Cost Management cost analysis
C. Resource locks + activity log
D. Policy initiatives + cost alerts

---

### Q16. You want all resources in a subscription to be tagged `CostCenter` automatically when missing. Which built-in policy effect fits BEST? *(Apply)*
A. Deny
B. Audit
C. Modify (e.g. "Inherit a tag from the resource group")
D. ReadOnly

---

### Q17. Which of the following is NOT a valid Azure Policy effect? *(Remember)*
A. Audit
B. AuditIfNotExists
C. ForceDelete
D. Append

---

### Q18. Reserved Instances primarily save money in exchange for: *(Understand)*
A. Lower SLA
B. A 1- or 3-year commitment to a region & VM family
C. Eviction risk
D. Less premium support

---

### Q19. Spot VMs offer huge discounts but can be evicted with: *(Remember)*
A. No notice
B. 30 seconds' notice
C. 5 minutes' notice
D. 24 hours' notice

---

### Q20. A resource group is deleted. What happens to the resources inside? *(Remember)*
A. They are kept and moved to a "default" RG
B. They are soft-deleted for 30 days
C. They are permanently deleted (unless protected by a lock)
D. They are detached and orphaned

---

### Q21. Yes/No — For each statement, mark Yes or No. *(Understand)*

**S1:** A subscription can belong to two management groups simultaneously.
**S2:** A resource can belong to two resource groups simultaneously.
**S3:** A management group can contain other management groups.

A. Yes / Yes / Yes
B. No / No / Yes
C. Yes / No / No
D. No / Yes / No

---

### Q22. A `CanNotDelete` lock applied at a subscription means: *(Apply)*
A. Only the subscription itself can't be deleted
B. Resources in the subscription can be deleted but the sub itself cannot
C. Every resource inside inherits the lock and cannot be deleted
D. The lock has no effect at subscription level

---

### Q23. You need to constrain all deployments to `westeurope` and `northeurope`. The BEST place to apply this policy is: *(Analyze)*
A. Each individual resource
B. Each resource group
C. The management group above all affected subscriptions
D. The Tenant Root Group only

---

### Q24. The Azure Hybrid Benefit reduces cost on Azure VMs by allowing you to: *(Understand)*
A. Use Spot pricing for Windows workloads
B. Apply existing on-premises Windows Server / SQL licenses to Azure VMs
C. Buy 5-year reservations
D. Receive a 10% credit for any deployment

---

### Q25. Yes/No — A team needs hard isolation between Prod and Dev (separate billing, separate quotas, separate Owner permissions). Mark Yes or No. *(Evaluate)*

**S1:** Two resource groups in the same subscription satisfy this.
**S2:** Two subscriptions in the same management group satisfy this.
**S3:** Two subscriptions in **different** management groups satisfy this and allow different policy inheritance.

A. Yes / Yes / Yes
B. No / Yes / Yes
C. No / No / Yes
D. Yes / No / No

---

## 🎯 Answers + Explanations

### Q1: **B. Tenant → Management Group → Subscription → Resource Group → Resource**
The canonical 4-level hierarchy (5 if you count tenant). Memorize this — every governance answer flows from it.

### Q2: **C. 6**
Up to 6 levels of MGs under the (non-counted) Tenant Root Group. Practical orgs stop at 3–4.

### Q3: **C. To store the RG's metadata; resources can live in other regions**
The RG has its own region just for ARM metadata storage. Resources inside can be deployed anywhere.

### Q4: **B. Tags are NOT inherited automatically; use a policy to enforce inheritance**
A classic trap. Use the built-in "Inherit a tag from the resource group" policy with the `Modify` effect.

### Q5: **C. Create a policy exemption at the appropriate scope**
You can't out-vote a parent Deny with a child Allow. Exemptions are the supported override mechanism.

### Q6: **B. ReadOnly**
Listing keys is technically a write operation under the hood. `CanNotDelete` is safer for storage accounts.

### Q7: **C. Owners and User Access Administrators**
Built-in roles. Contributors can do most things but not create/delete locks.

### Q8: **C. You must stop (deallocate) the VM**
Move doesn't require deallocation. Locks must be removed (B), same tenant (A), and validation step (D) are required.

### Q9: **C. Microsoft Customer Agreement (MCA)**
EA is being phased out. MCA is the modern unified billing model.

### Q10: **B. Yes, via the "Change directory" action by a Billing Account Admin**
Subscriptions are not permanently bound. Plan carefully: RBAC scoped to the old tenant breaks.

### Q11: **D. DeployIfNotExists**
DINE runs an embedded ARM deployment to bring a non-compliant resource into compliance.

### Q12: **B. An initiative (a.k.a. policy set)**
Initiatives bundle related policies and assign them as one unit.

### Q13: **B. 1 → 2 → 3 → 4**
Remove locks → validate → execute → fix downstream references. Trying to validate before removing the lock typically still succeeds, but the *move* will fail without lock removal, so the safe order is 1 → 2 → 3 → 4.

### Q14: **C. Quotas are per-subscription per-region**
Need more cores in East US? Either request a quota increase, switch regions, or use a second subscription.

### Q15: **B. Tags (e.g. `CostCenter`) + Cost Management cost analysis**
Tagging is the foundation. Cost Management slices by tag for chargeback and forecasting.

### Q16: **C. Modify (e.g. "Inherit a tag from the resource group")**
Modify lets a policy add/update tags on existing and new resources.

### Q17: **C. ForceDelete**
Not a real effect. Valid effects: Audit, AuditIfNotExists, Deny, Append, Modify, DeployIfNotExists, Disabled, Manual, EnforceOPAConstraint (preview).

### Q18: **B. A 1- or 3-year commitment to a region & VM family**
RIs are commitment-based. Use Savings Plans if you need more flexibility.

### Q19: **B. 30 seconds' notice**
Spot eviction notice = 30 seconds. Design workloads to checkpoint frequently.

### Q20: **C. They are permanently deleted (unless protected by a lock)**
Deleting an RG cascades. Always lock production RGs (`CanNotDelete`).

### Q21: **B. No / No / Yes**
A sub belongs to exactly one MG, a resource to exactly one RG, and MGs can be nested.

### Q22: **C. Every resource inside inherits the lock and cannot be deleted**
Locks inherit downward, so a sub-level `CanNotDelete` protects every child.

### Q23: **C. The management group above all affected subscriptions**
Apply governance as high as it makes sense. Tenant Root would over-apply; per-RG would under-apply.

### Q24: **B. Apply existing on-premises Windows Server / SQL licenses to Azure VMs**
Hybrid Benefit = bring-your-own-license. Up to ~40% off Windows VMs, more for SQL.

### Q25: **C. No / No / Yes**
Same RG ≠ separate billing. Same MG = shared policy inheritance. Different MGs + different subs gives true isolation including policy.

---

## 📊 Score Yourself

- 24–25/25 → 🏆 Hierarchy mastered.
- 21–23/25 → ✅ Solid. Note your misses; move on.
- 17–20/25 → ⚠️ Re-read the inheritance and Move sections. Re-quiz tomorrow.
- <17/25 → 🔁 Re-read the entire module before continuing.

---

## 🃏 Add To Your Flashcards

- 4-level hierarchy order
- Max MG depth (6)
- "Tags don't inherit; use Modify policy"
- ReadOnly vs CanNotDelete (and why ReadOnly breaks storage)
- Lock creators (Owner & UAA only)
- Move-resource validation step
- DeployIfNotExists vs AuditIfNotExists
- Reserved Instance vs Savings Plan vs Spot

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md) for one-page review, then [Module 2](../Module-02-Entra-ID-RBAC/Reading.md)
