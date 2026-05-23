# ✏️ Module 4 Quiz: Identity, Governance & Security

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.

---

## Questions

### Q1. The new name (as of 2023) for "Azure Active Directory" is: *(Remember)*
A. Azure Identity
B. Microsoft Entra ID
C. Azure Identity Service
D. Microsoft Identity Cloud

---

### Q2. Which Azure service answers "WHO can do WHAT on WHICH resources"? *(Remember)*
A. Azure Policy
B. RBAC (Role-Based Access Control)
C. Resource Locks
D. Defender for Cloud

---

### Q3. Which Azure service answers "WHAT resources are allowed to exist and how must they be configured"? *(Understand)*
A. RBAC
B. Azure Policy
C. Resource Locks
D. Conditional Access

---

### Q4. Which RBAC built-in role allows full management of resources EXCEPT granting access to others? *(Understand)*
A. Owner
B. Contributor
C. Reader
D. User Access Administrator

---

### Q5. To prevent ANY user (including Owners) from accidentally deleting a critical production database, use: *(Apply)*
A. RBAC Reader role
B. CanNotDelete resource lock
C. Azure Policy
D. NSG

---

### Q6. Which Entra ID capability provides ONE login for many SaaS apps? *(Remember)*
A. MFA
B. SSO (Single Sign-On)
C. Conditional Access
D. RBAC

---

### Q7. Which Entra ID feature is the POLICY ENGINE that decides when MFA is required (e.g., only when off-network)? *(Apply)*
A. SSO
B. RBAC
C. Conditional Access
D. Privileged Identity Management

---

### Q8. Yes/No: Microsoft Entra ID and on-premises Active Directory Domain Services use the same protocols and structure. *(Analyze)*
A. Yes
B. No

---

### Q9. To sync on-prem AD identities to Microsoft Entra ID, use: *(Apply)*
A. Azure Site Recovery
B. Microsoft Entra Connect
C. Azure Migrate
D. Azure Arc

---

### Q10. Which is BEST for centrally collecting security logs from Azure, AWS, and on-prem, then automating response? *(Apply)*
A. Defender for Cloud
B. Microsoft Sentinel
C. Azure Monitor
D. Azure Policy

---

### Q11. Which provides Cloud Security Posture Management (CSPM) with a Secure Score and workload protection? *(Understand)*
A. Microsoft Sentinel
B. Microsoft Defender for Cloud
C. Azure Policy
D. Azure Key Vault

---

### Q12. Which Zero Trust principle says "Verify each access request as if it originates from an open network"? *(Understand)*
A. Verify explicitly
B. Use least-privilege access
C. Assume breach
D. Defense in depth

---

### Q13. To invite an external partner's existing Microsoft account into your tenant, use: *(Apply)*
A. Entra ID Free tier only
B. Entra External ID (B2B collaboration)
C. Local accounts in your subscription
D. ExpressRoute

---

### Q14. Which Azure Policy effect BLOCKS creation of a non-compliant resource? *(Remember)*
A. Audit
B. Append
C. Deny
D. DeployIfNotExists

---

### Q15. A team needs to enforce a tag (`CostCenter`) on every new resource. The BEST approach is: *(Apply)*
A. Manually email developers
B. Azure Policy with Append or Modify effect
C. RBAC custom role
D. Resource Lock

---

### Q16. To securely store database passwords and SSL certificates, use: *(Apply)*
A. Storage account with public access disabled
B. Azure Key Vault
C. Cosmos DB
D. Resource group description field

---

### Q17. Which built-in RBAC role grants the LEAST privilege but still allows viewing resources? *(Understand)*
A. Owner
B. Contributor
C. Reader
D. User Access Administrator

---

### Q18. To allow remote workers to RDP/SSH into Azure VMs through a browser WITHOUT exposing public IPs on the VMs, use: *(Apply)*
A. VPN Gateway
B. Azure Bastion
C. Application Gateway
D. NSG

---

### Q19. A "policy initiative" (a.k.a. policy set) is: *(Remember)*
A. A custom RBAC role
B. A bundle of related Azure Policies
C. A region-specific deployment
D. A resource lock template

---

### Q20. RBAC assignment inheritance flows: *(Understand)*
A. From resource up to subscription
B. From management group down to subscriptions, RGs, and resources
C. Sideways across regions
D. There is no inheritance

---

### Q21. Yes/No: Resource locks override RBAC and apply to Owners too. *(Analyze)*
A. Yes
B. No

---

### Q22. Yes/No: Azure Policy can restrict the regions in which resources may be created. *(Apply)*
A. Yes
B. No

---

### Q23. Yes/No: Microsoft Sentinel is Microsoft's cloud-native SIEM and SOAR platform. *(Remember)*
A. Yes
B. No

---

### Q24. A bank wants every web request authenticated, each session re-evaluated for risk, and minimum privileges everywhere. Which model are they following? *(Evaluate)*
A. Defense in Depth only
B. Zero Trust
C. Perimeter security
D. Network segmentation only

---

### Q25. Which is TRUE about Conditional Access? *(Analyze)*
A. It is included in Entra ID Free tier
B. It requires Entra ID P1 or higher
C. It is a network appliance
D. It replaces RBAC

---

### Q26. To bring a PaaS service (e.g., Azure SQL Database) into your private VNet so it has no public endpoint, use: *(Apply)*
A. Azure Firewall
B. Private Endpoint / Private Link
C. NSG
D. Front Door

---

## 🎯 Answers + Explanations

### Q1: **B. Microsoft Entra ID**
Renamed in 2023. Same product. Exam uses the new name.

### Q2: **B. RBAC**
RBAC = identity-to-action mapping. The cleanest "who can do what" answer.

### Q3: **B. Azure Policy**
Policy = compliance rules on resource shape, location, configuration.

### Q4: **B. Contributor**
Full management except grant access. Owner can grant access; UAA can grant access; Reader is read-only.

### Q5: **B. CanNotDelete resource lock**
Locks apply to everyone including Owners. RBAC Reader can be bypassed by other roles.

### Q6: **B. SSO**
One login, many apps. The classic SSO definition.

### Q7: **C. Conditional Access**
CA is the policy engine. MFA is just a control it can require.

### Q8: **B. No**
Different protocols (OAuth/SAML vs Kerberos/LDAP), different structure (flat vs forest/domain/OU). They sync but aren't the same.

### Q9: **B. Microsoft Entra Connect**
Formerly Azure AD Connect. THE on-prem sync tool.

### Q10: **B. Microsoft Sentinel**
Multi-source SIEM/SOAR. Defender for Cloud focuses on Azure posture; Sentinel is the multi-source log + automation platform.

### Q11: **B. Defender for Cloud**
CSPM + CWPP + Secure Score. The cloud security posture tool.

### Q12: **A. Verify explicitly**
"Verify each request as if from an open network" maps directly to "verify explicitly."

### Q13: **B. Entra External ID (B2B collaboration)**
B2B for partners; B2C for customers. Unified under External ID branding.

### Q14: **C. Deny**
Deny blocks creation. Audit just flags. Append/Modify alter the resource.

### Q15: **B. Azure Policy with Append or Modify**
Automated, enforced, auditable. Emails don't enforce; RBAC doesn't enforce tags.

### Q16: **B. Azure Key Vault**
Built for secrets, keys, certs. HSM-backed.

### Q17: **C. Reader**
Reader = view-only. Lowest meaningful privilege among the four fundamental roles.

### Q18: **B. Azure Bastion**
Browser-based RDP/SSH over a private hop — no public IPs needed on the VMs.

### Q19: **B. A bundle of related Azure Policies**
Examples: "ISO 27001" initiative, "PCI DSS v3.2.1" initiative.

### Q20: **B. From management group down to subscriptions, RGs, and resources**
Top-down inheritance.

### Q21: **A. Yes**
Locks apply to everyone, including Owners, until the lock is removed.

### Q22: **A. Yes**
Classic Policy use case: restrict allowed regions.

### Q23: **A. Yes**
Sentinel = SIEM (logs/correlation) + SOAR (automation/playbooks).

### Q24: **B. Zero Trust**
"Authenticate everything, re-evaluate risk, minimum privilege" — textbook Zero Trust.

### Q25: **B. Requires Entra ID P1 or higher**
CA isn't in the Free tier — comes with P1+.

### Q26: **B. Private Endpoint / Private Link**
Private Link brings PaaS into your VNet via a private IP — no public endpoint exposed.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Security mastered
- 22–24/26 → ✅ Solid
- 18–21/26 → ⚠️ Re-read RBAC vs Policy vs Lock comparison
- <18/26 → 🔁 Re-do Reading + re-watch Adam Marczak's Policy vs RBAC video

---

## 🃏 Add To Your Flashcards

- New name for Azure AD
- RBAC vs Policy vs Lock — one-sentence each
- 4 fundamental built-in roles
- 3 Zero Trust principles
- Defender for Cloud vs Sentinel
- Conditional Access requires which tier (P1+)

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5: Cost Management & SLAs](../Module-05-Cost-Management-SLAs/Reading.md)
