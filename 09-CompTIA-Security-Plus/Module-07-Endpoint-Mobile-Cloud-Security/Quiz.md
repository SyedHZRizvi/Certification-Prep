# ✏️ Module 7 Quiz: Endpoint, Mobile & Cloud Security

> **Instructions:** 26 questions. Aim for 22/26.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 6 (23%) · Understand 7 (27%) · Apply 6 (23%) · Analyze/Evaluate 6 (23%) · Create 1 (4%).

---

## Questions

### Q1. Which tool records process-level behavior on a host, allows threat hunting, and can roll back actions? *(Understand)*
A. AV (signature)
B. EDR
C. HIDS
D. WAF

---

### Q2. XDR differs from EDR PRIMARILY because: *(Understand)*
A. XDR runs on Linux only
B. XDR correlates endpoint with network/cloud/email telemetry
C. XDR is open source
D. XDR is purely signature-based

---

### Q3. A configuration baseline derived from CIS Benchmarks is used to: *(Understand)*
A. Set unique passwords
B. Harden systems to a known-good configuration
C. Replace patching
D. Distribute encryption keys

---

### Q4. In a BYOD model, the BEST way to protect corporate data on a personal device is: *(Apply)*
A. Block all personal devices
B. MAM + containerization with selective wipe of corp data
C. Install a rootkit
D. Disable all encryption

---

### Q5. COPE stands for: *(Remember)*
A. Corporate-Owned, Personally Enabled
B. Company-Owned, Privately Enabled
C. Corporate Optional Personal Equipment
D. Centralized Office Phone Environment

---

### Q6. Selective wipe is associated with: *(Remember)*
A. MDM only
B. MAM (Mobile Application Management)
C. Full disk encryption
D. WAFs

---

### Q7. In IaaS, the customer is responsible for: *(Understand)*
A. Hypervisor security
B. Physical facility security
C. Guest OS, app, data, network config inside the VM
D. Server hardware

---

### Q8. In SaaS, the customer is responsible for: *(Understand)*
A. Patching the underlying OS
B. Their data, identity/access configs, and integration security
C. Hypervisor management
D. Physical security

---

### Q9. A public S3 bucket exposing customer PII is a failure of: *(Analyze)*
A. AWS shared responsibility (AWS's fault)
B. Customer configuration management (customer's fault)
C. AWS encryption at rest
D. AWS physical security

---

### Q10. Which tool sits between users and SaaS apps, enforces policy, and discovers shadow IT? *(Remember)*
A. CSPM
B. CWPP
C. CASB
D. WAF

---

### Q11. CSPM (Cloud Security Posture Management) primarily: *(Remember)*
A. Detects malware on endpoints
B. Continuously audits cloud configurations against best practices
C. Replaces a SIEM
D. Issues TLS certificates

---

### Q12. ZTNA replaces: *(Apply)*
A. SAML federation
B. Traditional VPN for user access
C. EDR
D. Email security

---

### Q13. Containers share which key resource with the host? *(Understand)*
A. Their own kernel
B. The host OS kernel
C. The hypervisor
D. The CPU only

---

### Q14. Which is a common container security pitfall? *(Apply)*
A. Using minimal base images
B. Running the container as root
C. Image scanning
D. Network policies

---

### Q15. Infrastructure as Code (IaC) tools include: *(Remember)*
A. Terraform and CloudFormation
B. Nessus and Qualys
C. CrowdStrike and SentinelOne
D. SAML and OIDC

---

### Q16. Hardcoded secrets in a Git repo are MOST effectively prevented by: *(Analyze)*
A. Pre-commit secret scanning + secrets manager
B. Encryption at rest
C. Branch protection rules
D. RBAC on repository

---

### Q17. SCADA systems differ from typical IT because: *(Apply)*
A. They use TCP only
B. They have long service lifecycles and limited patching ability
C. They require monthly OS upgrades
D. They are entirely cloud-hosted

---

### Q18. The Purdue Model describes: *(Apply)*
A. Container orchestration
B. Reference architecture for OT network segmentation
C. Cloud regions
D. A PKI hierarchy

---

### Q19. Which is the MOST appropriate compensating control for a legacy PLC that cannot be patched? *(Evaluate)*
A. Re-image it monthly
B. Network segmentation, jump-server access, traffic monitoring
C. Install antivirus
D. Replace immediately, regardless of business impact

---

### Q20. A SIM swap attack defeats which of the following MFA factors? *(Apply)*
A. FIDO2 hardware key
B. SMS-based one-time codes
C. TOTP authenticator app
D. Biometric scan

---

### Q21. UEM differs from MDM in that UEM: *(Understand)*
A. Manages only iOS devices
B. Unifies mobile, laptop, desktop, and IoT management in one console
C. Replaces VPNs
D. Is hardware

---

### Q22. The MOST appropriate detection for outbound traffic from a workload to a known C2 IP, when the workload sits in a VPC: *(Evaluate)*
A. Browser extension
B. VPC flow logs + DNS firewall + EDR/CWPP
C. Office productivity software
D. Disable all logs

---

### Q23. Which deployment model lets two cloud providers be used deliberately? *(Remember)*
A. Public cloud
B. Multi-cloud
C. Private cloud
D. Community cloud

---

### Q24 (Scenario). Your company's marketing team starts using a new SaaS analytics tool, paid by personal credit card, no procurement involvement. The PRIMARY risk is: *(Analyze)*
A. Vendor lock-in
B. Shadow IT, no visibility, no policy enforcement, possible data leakage
C. Cost overruns
D. Slow performance

---

### Q25 (Scenario). An AWS IAM role attached to a Lambda function has `s3:*` on `Resource: *`. The BEST remediation is: *(Analyze)*
A. Delete the role
B. Apply least privilege, restrict to specific bucket + actions; use CIEM to keep it right-sized
C. Replace with root credentials
D. Disable CloudTrail

---

### Q26 (Scenario). A factory PLC sends commands over Modbus to a turbine. The vendor will not allow patching of the firmware. The BEST risk-reduction approach is: *(Create)*
A. Air-gap, segment behind a jump server on a separate VLAN, monitor Modbus traffic for anomalies, restrict who can log in
B. Open the PLC to the internet for remote support
C. Install an enterprise EDR on the PLC
D. Connect the PLC to corporate Wi-Fi for convenience

---

## 🎯 Answers + Explanations

### Q1: **B. EDR**
Process behavior + threat hunting + rollback = EDR.

### Q2: **B. Correlates endpoint with network/cloud/email**
XDR = extended across data sources.

### Q3: **B. Harden to a known-good config**
Baselines reduce attack surface to a documented standard.

### Q4: **B. MAM + containerization + selective wipe**
Separates corp from personal data, enables wipe without nuking personal photos.

### Q5: **A. Corporate-Owned, Personally Enabled**
Org-owned device, personal use permitted under policy.

### Q6: **B. MAM**
Mobile App Management governs corp-app data and enables selective wipe.

### Q7: **C. Guest OS, app, data, network config inside the VM**
Customer manages everything from OS up. Provider handles hypervisor down.

### Q8: **B. Your data + your IAM + integration security**
The provider handles the app itself; you handle who can access and what they do.

### Q9: **B. Customer config mgmt**
The shared model puts data-classification and access-controls on the customer.

### Q10: **C. CASB**
Cloud Access Security Broker, policy enforcement + shadow-IT discovery.

### Q11: **B. Audits cloud configs**
CSPM continuously checks for drift/misconfig.

### Q12: **B. Traditional VPN**
ZTNA replaces broad-network VPN access with identity-aware per-app access.

### Q13: **B. Host OS kernel**
Containers share the kernel, a kernel escape compromises the host.

### Q14: **B. Running as root**
Privileged containers + kernel exploits = host compromise.

### Q15: **A. Terraform / CloudFormation**
Plus ARM/Bicep, Pulumi, etc.

### Q16: **A. Pre-commit secret scanning + secrets manager**
Catch before push; store secrets in a vault, not code.

### Q17: **B. Long lifecycles, limited patching**
Decades-long deployment + safety constraints.

### Q18: **B. OT segmentation reference architecture**
Purdue describes layered OT zones (Level 0–5).

### Q19: **B. Segmentation + jump server + monitoring**
Compensating controls because patching isn't available.

### Q20: **B. SMS one-time codes**
Carrier ports the number to attacker; SMS delivery now reaches attacker.

### Q21: **B. Unified mgmt across device classes**
UEM = MDM + desktops + IoT in a single pane.

### Q22: **B. VPC flow logs + DNS firewall + EDR/CWPP**
Multi-layer detection at the right places.

### Q23: **B. Multi-cloud**
Deliberate use of multiple public providers.

### Q24: **B. Shadow IT**
Loss of visibility/policy enforcement on data flowing to an unsanctioned service.

### Q25: **B. Least privilege + CIEM**
Restrict to required actions + specific resources; CIEM keeps it tuned.

### Q26: **A. Segment + jump server + monitor + restrict access**
The textbook OT-compensating-control answer.

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Endpoint/mobile/cloud locked in.
- 22–24/26 → ✅ Strong, hit gaps.
- 18–21/26 → ⚠️ Re-read cloud + OT sections.
- <18/26 → 🔁 Restart Module 7.

---

## 🃏 Add To Your Flashcards

- EDR / XDR / MDR / EPP
- BYOD / CYOD / COPE / COBO
- MDM / MAM / UEM / EMM
- IaaS / PaaS / SaaS / FaaS responsibility lines
- CASB / CSPM / CWPP / CIEM / SASE / SSE / ZTNA / SWG / FWaaS
- IoT / ICS / SCADA / PLC / HMI

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 8, Security Operations](../Module-08-Security-Operations/Reading.md)
