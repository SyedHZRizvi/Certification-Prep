# ✏️ Module 10 Quiz: Operational Procedures

> Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.
>
> **Bloom distribution:** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The step where you document findings, actions, and outcomes in the 6-step methodology is: *(Remember)*
A. Step 1, Identify
B. Step 6, Document
C. Step 4, Plan
D. Step 2, Theory

---

### Q2. Which body typically approves a high-risk production change? *(Remember)*
A. SOC analyst
B. Change Advisory Board (CAB)
C. CFO
D. Marketing

---

### Q3. A standard change is BEST described as: *(Understand)*
A. Production-down emergency
B. Pre-approved low-risk change with documented template (e.g., adding user to security group)
C. Banned change
D. Same as emergency

---

### Q4. What's the FIRST equipment item to use before handling a motherboard out of its box? *(Apply)*
A. Hammer
B. Anti-static (ESD) wrist strap, attached to ESD mat or chassis
C. Magnetic screwdriver
D. Plastic gloves

---

### Q5. The PRIMARY purpose of a backout plan is: *(Understand)*
A. To bill the customer
B. To define how to revert a change if it fails
C. To skip CAB review
D. To extend the change window

---

### Q6. Which UPS type runs the inverter continuously (zero switch gap)? *(Remember)*
A. Standby
B. Line-interactive
C. Online (double conversion)
D. Surge-only

---

### Q7. A server-room target temperature recommended by ASHRAE TC9.9 is approximately: *(Remember)*
A. 0–5 °C
B. 18–27 °C (64–80 °F)
C. 35–40 °C
D. Whatever the building's HVAC is set to

---

### Q8. A user spills toner on the carpet during a printer service. The MOST appropriate cleanup: *(Apply)*
A. Vacuum with a regular vacuum
B. Use a HEPA-filtered vacuum (toner is fine particulate and a regular vacuum spreads it); wear mask
C. Sweep with a broom
D. Leave it

---

### Q9. The document used to look up safety info for a chemical like printer cleaning solvent is: *(Remember)*
A. SOW
B. MSDS / SDS
C. EULA
D. RFC

---

### Q10. A lithium-ion laptop battery should be disposed of by: *(Apply)*
A. Throwing in regular trash
B. Recycling at an electronics retailer (Best Buy, Apple Store, e-waste program)
C. Pouring water on it
D. Burning

---

### Q11. PII includes (per most US state laws + GDPR): *(Understand)*
A. Just an email address
B. Combinations of identifiers like name + SSN, name + DOB, name + address
C. Just a username
D. IP addresses only

---

### Q12. A technician notices a printout on a shared printer contains another user's salary info. The MOST appropriate action: *(Apply)*
A. Read it carefully
B. Pick it up, deliver to the named user without comment, do not discuss further; if egregious mishandling, notify supervisor
C. Post it on the bulletin board
D. Email it to everyone

---

### Q13. The "Acceptable Use Policy" (AUP) defines: *(Understand)*
A. The brand of computer the company buys
B. What users may and may not do on company systems
C. The pricing of software
D. The brand of coffee

---

### Q14. A user calls support extremely angry about an outage. The FIRST appropriate response: *(Apply)*
A. Hang up
B. Listen actively, empathize ("That sounds frustrating"), focus on the problem, set expectations
C. Argue back
D. Transfer to the CEO

---

### Q15. Emergency change differs from standard change in that emergency: *(Understand)*
A. Requires no approval ever
B. Has expedited approval (often after-the-fact CAB review) for production-down situations
C. Is illegal
D. Is slower

---

### Q16. A CMDB (Configuration Management Database) tracks: *(Remember)*
A. Customers only
B. Every IT asset (hosts, services, networks) and their relationships
C. Email passwords
D. Wi-Fi PSKs

---

### Q17. The PRIMARY reason a tech should NOT browse a user's personal folders during a service call: *(Analyze)*
A. It takes too long
B. Privacy / confidentiality, exceeds scope, may violate company policy, and could become a legal issue
C. The folders are encrypted
D. The screen is too small

---

### Q18. A user reports that their Acceptable Use Policy expired. The MOST appropriate response: *(Understand)*
A. Disable their account
B. Notify the user to re-acknowledge the current AUP (often via HR / IAM workflow) per company policy
C. Reformat their PC
D. Disable Wi-Fi

---

### Q19. A surge protector vs a UPS, the key difference is: *(Understand)*
A. They are the same
B. A surge protector only handles voltage spikes; a UPS additionally provides battery backup during outages/sags
C. UPS doesn't protect from surges
D. Surge protectors include batteries

---

### Q20. The Capital One breach (2019) highlighted that an open security ticket can: *(Evaluate)*
A. Self-resolve
B. Sit in a queue for weeks while exploitable in production, change-management SLAs must include security urgency
C. Be ignored without consequence
D. Be marked complete without action

---

### Q21. The CompTIA preferred order for handling a difficult customer escalation: *(Apply)*
A. Argue, then hang up
B. Listen → empathize → restate the problem → focus on resolution → escalate if needed
C. Escalate immediately without listening
D. Email the CEO

---

### Q22. A Standard Operating Procedure (SOP) is: *(Remember)*
A. A type of disk
B. A documented step-by-step for a recurring process
C. A security badge
D. A Windows command

---

### Q23. A tech installs pirated software on a user's PC because "the user asked." The MOST significant risk: *(Evaluate)*
A. None
B. Legal/financial liability (license audits, fines) + security risk (cracked installers often contain malware) + termination of the tech
C. The user might dislike it
D. The PC will be slower

---

### Q24. Design challenge: A 90-person engineering firm wants to ensure that *no* production change happens without proper approval, but also wants to keep day-to-day operational work moving. The MINIMUM viable architecture: *(Create)*

> *Create-level note:* you are picking the *combination* of process + tooling.
A. CAB approval for every change including password resets
B. **3-tier change classification** (Standard pre-approved, Normal CAB review, Emergency expedited+post-CAB) + tracked in a ticketing system with required backout plan field
C. No change management
D. Verbal-approval-only process

---

## 🎯 Answers + Explanations

### Q1: **B. Step 6, Document**
Document is always last. The exam will test you on the order of the 6-step methodology.

### Q2: **B. Change Advisory Board (CAB)**
The CAB reviews and approves normal-priority changes. Emergency may have expedited path.

### Q3: **B. Pre-approved low-risk with template**
Standard changes are routine, low-risk, well-understood. They bypass full CAB review by being pre-approved by category.

### Q4: **B. Anti-static (ESD) wrist strap**
ESD damage is invisible but real. Wrist strap + ground first, always.

### Q5: **B. Define how to revert if change fails**
Written before the change, used after a failure. Critical for restoring service quickly.

### Q6: **C. Online (double conversion)**
Online UPS runs the inverter always, equipment never sees the raw line voltage. Zero switch gap, premium price.

### Q7: **B. 18–27 °C (64–80 °F)**
ASHRAE TC9.9 2021 recommended envelope. Some shops push warmer for energy savings.

### Q8: **B. HEPA vacuum + mask**
Toner is fine particulate; regular vacuum exhausts it back into the air. HEPA captures it. Mask protects you.

### Q9: **B. MSDS / SDS**
Material/Safety Data Sheet. Required by OSHA for chemical safety info. Look up at manufacturer / supplier.

### Q10: **B. Recycle at electronics retailer**
Lithium-ion in landfill = fire risk. Most jurisdictions require recycling.

### Q11: **B. Name + SSN, name + DOB, name + address**
PII is usually a combination, the name PLUS another identifier that ties to an individual.

### Q12: **B. Deliver without comment; report egregious mishandling**
Don't pry. Don't share. If the data was obviously mishandled (e.g., left in public area), escalate to supervisor.

### Q13: **B. What users may and may not do on company systems**
Acceptable Use Policy = the rules of the road.

### Q14: **B. Listen, empathize, focus on problem, set expectations**
Standard customer-service flow. Defuse the emotion, then solve the problem.

### Q15: **B. Expedited approval, post-CAB review**
Emergency = production down, fix needed now. Still reviewed, just after the fact.

### Q16: **B. Every IT asset + relationships**
CMDB is the inventory of "what we own + what depends on what."

### Q17: **B. Privacy / confidentiality**
Browsing exceeds scope. Document only what's needed. Privacy violations carry legal weight.

### Q18: **B. Notify user to re-acknowledge per company policy**
Don't disable; don't reformat. HR/IAM workflow handles policy refresh.

### Q19: **B. UPS adds battery backup; surge protector is voltage-only**
Surge protector clamps spikes. UPS carries you through outages.

### Q20: **B. Tickets can sit in queue while exploitable**
The Capital One lesson. SLAs for security findings must reflect exploitability + impact.

### Q21: **B. Listen → empathize → restate → focus → escalate if needed**
The proper de-escalation sequence.

### Q22: **B. Documented step-by-step for recurring process**
Different from a runbook (which is task-specific), SOPs are general.

### Q23: **B. Legal + security + termination risk**
Pirated software = license violation + commonly bundled with malware + firing offense at most companies.

### Q24: **B. 3-tier classification + tracked tickets + backout plan**
The modern, balanced approach. Standard for routine; Normal CAB for big stuff; Emergency for fires.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Operational discipline locked in.
- 20–22/24 → ✅ Solid. Drill change-management vocabulary.
- 16–19/24 → ⚠️ Re-read the change + safety sections.
- <16/24 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- 3 change types: Standard / Normal / Emergency
- CAB, RFC, backout plan, maintenance window
- ESD mitigation list
- 3 UPS types
- MSDS / SDS
- PII / PHI / PCI definitions
- Active listening / professional communication essentials
- "Document findings" = step 6

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 11, Mobile / Application Troubleshooting](../Module-11-Mobile-Troubleshooting/Reading.md)
