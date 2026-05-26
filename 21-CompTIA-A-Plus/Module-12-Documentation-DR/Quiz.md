# ✏️ Module 12 Quiz: Documentation, Change & DR

> Answer all 24 questions WITHOUT looking at the reading. Aim for 20/24.
>
> **Bloom distribution:** Remember 6 · Understand 6 · Apply 7 · Analyze/Evaluate 4 · Create 1.

---

## Questions

### Q1. The 3-2-1 backup rule states: *(Remember)*
A. 3 copies, 2 media, 1 off-site
B. 3 backups, 2 weeks, 1 server
C. 3 sites, 2 admins, 1 vendor
D. 3 days RTO, 2 days RPO, 1 backup window

---

### Q2. RPO stands for: *(Remember)*
A. Recovery Process Order
B. Recovery Point Objective
C. Restoration Procedure Output
D. Resilient Procedural Operation

---

### Q3. A business says "we can tolerate 4 hours of data loss." This sets the: *(Apply)*
A. RTO at 4 hours
B. RPO at 4 hours
C. MTTR at 4 hours
D. SLA at 4 hours

---

### Q4. A hot site differs from a warm site in: *(Understand)*
A. Hot site has full real-time replication; immediate failover (minutes)
B. Hot is unstaffed; warm is staffed
C. Warm site has no equipment
D. They are identical

---

### Q5. The PRIMARY reason RAID is NOT a substitute for backup: *(Understand)*
A. RAID is too slow
B. RAID protects against hardware failure; backup protects against deletion, ransomware, corruption, mistake
C. RAID is too expensive
D. RAID is illegal

---

### Q6. An incremental backup contains: *(Remember)*
A. Everything
B. All changes since the last backup of ANY type (small, fast)
C. All changes since the last full backup only
D. Just the OS

---

### Q7. A differential backup contains: *(Remember)*
A. All changes since the last full backup (grows daily)
B. All changes since the last backup of any type
C. Just user files
D. Nothing

---

### Q8. The MOST appropriate first action when ransomware encrypts your local Veeam backups but cloud immutable storage is intact: *(Apply)*
A. Pay the ransom
B. Restore the production environment from the cloud immutable backup; rebuild local environment clean
C. Reformat the cloud
D. Disable cloud backups

---

### Q9. Modern variant 3-2-1-1-0 adds: *(Understand)*
A. 1 more cloud + 0 paper backups
B. 1 air-gapped/immutable copy + 0 errors (tested)
C. Nothing useful
D. 1 admin + 0 documentation

---

### Q10. A ticket marked P1 in most SMB ticketing systems means: *(Apply)*
A. Lowest priority
B. Highest priority — business-critical / site-down
C. Just a request
D. Closed

---

### Q11. The PRIMARY purpose of a runbook: *(Understand)*
A. A bedtime story
B. Step-by-step procedural document for a specific operational task
C. The Wi-Fi password
D. A login banner

---

### Q12. Asset disposal of a hard drive containing sensitive data BEFORE giving the PC to a recycler: *(Apply)*
A. Just deleting files is enough
B. Securely wipe per NIST 800-88 (DBAN, vendor secure-erase) or physically destroy (shred, drill, degauss)
C. Format normally
D. Pour water on it

---

### Q13. A change record must always include a __ in case the change fails: *(Remember)*
A. Free lunch
B. Backout (rollback) plan
C. New employee
D. Marketing slogan

---

### Q14. Untested backups are: *(Understand)*
A. Always good
B. Unknown-good — they may or may not restore successfully when you actually need them
C. Worth paying ransom
D. Better than tested ones

---

### Q15. The MOST appropriate test of a DR plan that's never been tested: *(Apply)*
A. Wait for a real disaster
B. Start with a tabletop exercise, then walkthrough, then partial restore, then full drill
C. Skip testing — it's covered in CAB
D. Email the team

---

### Q16. The MTBF (Mean Time Between Failures) is: *(Remember)*
A. How long a component runs on average before failing
B. How long to fix it
C. The warranty period
D. The price

---

### Q17. A 4-disk RAID 5 array of 8 TB drives — what's the usable capacity? *(Apply)*
A. 8 TB
B. 16 TB
C. 24 TB
D. 32 TB

---

### Q18. Maersk's recovery from NotPetya in 2017 was possible because: *(Analyze)*
A. They paid the ransom
B. A single domain controller in Lagos happened to be offline during the attack; it became the seed to rebuild the AD forest
C. They had no backups
D. They moved to Macs

---

### Q19. Hot / Warm / Cold site RTOs (minutes / hours / days respectively) compared with cost (high/mid/low) — the BEST match for a SMB with a 4-hour RTO and modest budget: *(Apply)*
A. Hot site
B. Warm site
C. Cold site
D. No DR

---

### Q20. BCP differs from DR in that BCP: *(Understand)*
A. Is the same as DR
B. Covers the whole business (people, premises, processes) — DR is the IT-specific subset
C. Is only for hospitals
D. Doesn't include IT

---

### Q21. A ticket that "Resolved" but the user reports the issue still exists should be: *(Apply)*
A. Closed anyway — tech knows best
B. Reopened — investigate further; do not close until user confirms
C. Deleted
D. Marked spam

---

### Q22. The biggest lesson from the Maersk NotPetya case for your backup strategy: *(Evaluate)*
A. Use only Linux
B. Backups must survive the disaster they're meant to recover from — separate auth domain, immutable storage, AD-forest backup independence
C. Pay all ransoms
D. Never run Windows

---

### Q23. The RTO target for a hot DR site is typically: *(Remember)*
A. Days
B. Hours
C. Minutes
D. Months

---

### Q24. Design challenge: A 120-person law firm needs to (a) protect against ransomware destroying both production AND local backups, (b) survive a fire that takes out the office, (c) be back online within 8 hours. The MINIMUM viable architecture: *(Create)*

> *Create-level note:* you are picking the *combination* of backup + DR.
A. Just nightly tape backups
B. **3-2-1-1-0 strategy**: local backup (Veeam) + cloud immutable (S3 Object Lock) + warm DR site OR cloud DR (Azure/AWS) + quarterly partial restore tests + annual full drill + tabletop every 6 months
C. RAID 5 array only
D. No DR — buy insurance

---

## 🎯 Answers + Explanations

### Q1: **A. 3 copies, 2 media, 1 off-site**
The foundational backup rule. Memorize it.

### Q2: **B. Recovery Point Objective**
RPO = max acceptable data loss measured in time.

### Q3: **B. RPO at 4 hours**
"Data loss tolerance" = RPO. RTO is downtime tolerance.

### Q4: **A. Hot has real-time replication, immediate failover**
Hot is the most expensive but recovers in minutes. Warm needs hours.

### Q5: **B. RAID protects hardware failure; backup protects everything else**
The most-tested distinction. Repeat: RAID ≠ backup.

### Q6: **B. Changes since last backup of any type (small, fast)**
Restore requires last full + every incremental — slow restore, fast backup.

### Q7: **A. Changes since last full backup**
Each diff is bigger than the previous (grows daily). Restore = last full + latest diff.

### Q8: **B. Restore from immutable cloud backup**
The whole point of immutability. Don't pay; restore from clean copy.

### Q9: **B. 1 immutable + 0 errors (tested)**
The modern best-practice extension. Immutability for ransomware; testing for confidence.

### Q10: **B. Business-critical / site-down**
P1 = highest. P5 = lowest. (Some systems reverse — always check the org's standard.)

### Q11: **B. Step-by-step for a specific task**
Runbook = task-specific. SOP = process-level. KB article = solution-specific.

### Q12: **B. Wipe per NIST 800-88 or physical destruction**
Deleted files are recoverable. Use vendor secure-erase or destroy physically.

### Q13: **B. Backout (rollback) plan**
Always required. Written before, used after a failure.

### Q14: **B. Unknown-good**
Untested = you assume it works. Half the time the assumption is wrong.

### Q15: **B. Tabletop → walkthrough → partial → full drill**
Crawl, walk, run. Start cheap; build confidence.

### Q16: **A. Average runtime before failure**
MTBF is a reliability metric. MTTR is the repair time.

### Q17: **C. 24 TB**
RAID 5 = (N-1) × disk size = (4-1) × 8 TB = 24 TB.

### Q18: **B. A Lagos DC happened to be offline**
The famous Maersk story. Pure luck. Modern DR plans engineer that luck deliberately.

### Q19: **B. Warm site**
4-hour RTO fits warm. Hot is overkill for SMB; cold is too slow.

### Q20: **B. BCP covers the whole business; DR is IT-specific subset**
BCP includes manual workarounds when IT is down. DR is the IT-restoration piece.

### Q21: **B. Reopen — user confirms before close**
Always validate with the user. Closing prematurely is a SLA violation in most systems.

### Q22: **B. Backups must survive the disaster they protect against**
The single sentence summary. Separate auth, immutable storage, independence.

### Q23: **C. Minutes**
Hot = minutes. Warm = hours. Cold = days.

### Q24: **B. 3-2-1-1-0 + warm DR + quarterly testing**
The complete modern architecture. Each layer addresses one of the three requirements.

---

## 📊 Score Yourself

- 23–24/24 → 🏆 Documentation + DR locked. You're ready for the practice exams.
- 20–22/24 → ✅ Solid. Drill RPO/RTO and 3-2-1.
- 16–19/24 → ⚠️ Re-read the backup + DR sections.
- <16/24 → 🔁 Restart with the Reading.md.

---

## 🃏 Add To Your Flashcards

- 3-2-1 + 3-2-1-1-0 rules
- RPO / RTO / MTBF / MTTR
- Full / Incremental / Differential — speed trade-offs
- Hot / Warm / Cold sites + RTOs
- BCP vs DR
- Backout plan = always required for changes
- Ticket lifecycle: New → Assigned → In Progress → Resolved → Closed
- Test backups quarterly minimum
- Immutable + air-gapped = ransomware defense

---

## 🏁 Course Complete!

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md)

Then take the practice exams:
- [Practice Exam 1 — Core 1](../Practice-Exams/Practice-Exam-1.md)
- [Practice Exam 2 — Core 2](../Practice-Exams/Practice-Exam-2.md)
- [Final Mock Exam — 90 Q / 90 min](../Practice-Exams/Final-Mock-Exam.md)

Good luck with the real exams! 🛠️
