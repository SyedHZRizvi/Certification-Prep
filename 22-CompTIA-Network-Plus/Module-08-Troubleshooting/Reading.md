# Module 8: Network Troubleshooting Methodology 🛠️

> **Why this module matters:** Domain 5 (Network Troubleshooting) is **24% of the exam** — the **largest single domain**. CompTIA tests its 7-step troubleshooting methodology in nearly every form: "what's the FIRST step," "what comes AFTER X," "the technician implemented the fix but didn't verify — what step did they skip?" Memorize the order. Then learn the L1–L7 issue catalog and the cable-testing primer. This module is the rare topic where pure rote pays off enormously.

> **Prerequisites for this module.** Before starting, you should be comfortable with:
> - Modules 1–7 (everything — troubleshooting touches all of them)
> - The OSI model (you'll classify problems by layer)
> - The tools from Module 7 (you'll *use* them in this module)

---

## 🚨 A Story: The Reboot That Hid the Real Problem

A help-desk tech receives a ticket: "Internet is down." The tech walks to the user's desk. The user's PC has no IP — the address shows `169.254.x.x` (APIPA). The tech reboots the PC. Internet comes back. Ticket closed.

Two days later, the same user calls again. Same issue. Same reboot fix. Two days after that, *six other people* in the same hallway have the same problem. After the tech reboots a few of them, escalation reveals the root cause: the DHCP scope had been gradually exhausted by IoT devices that took 1-day leases but kept reappearing as new "clients" due to a misconfigured DHCP option. The actual fix was to increase the scope and extend the lease time.

**Reboots are not troubleshooting. Documentation is not bureaucracy. Following the methodology is not slow — it's how you don't have the same ticket reopen ten times.**

That's why CompTIA tests the 7-step model so heavily. The model exists to **prevent reboot-and-pray** as a substitute for diagnosis. Learn it cold.

---

## 🎯 The CompTIA 7-Step Troubleshooting Methodology — MEMORIZE COLD

This is the most-tested concept in Domain 5. It appears on the exam **directly** as "what is the FIRST step?" type questions, AND as the **frame** for every troubleshooting scenario.

| # | Step | What you do | Key activities |
|---|------|--------------|----------------|
| **1** | **Identify the problem** | Gather information; question users; identify symptoms; determine if anything recently changed; **approach multiple problems individually** | Read ticket; interview user; check recent changes (CMDB, change tickets); reproduce |
| **2** | **Establish a theory of probable cause** | Question the obvious; consider multiple approaches; top-down OSI, bottom-up OSI, or divide-and-conquer | Form hypothesis; rank possible causes |
| **3** | **Test the theory** | Confirm or refute. If confirmed → next step. If refuted → form a NEW theory OR escalate | Run targeted tests (ping, port, log query) |
| **4** | **Establish a plan of action** | Plan how to resolve + identify potential side effects | Draft steps; identify rollback; notify stakeholders |
| **5** | **Implement the solution (or escalate)** | Execute the plan, OR escalate if outside your scope/permissions | Make the changes within approved change-management |
| **6** | **Verify full system functionality** | Confirm the fix works AND that no new issues were created; implement preventive measures | End-to-end test; user confirmation; monitor briefly |
| **7** | **Document findings, actions, and outcomes** | Update tickets, KB, runbooks, CMDB — the next tech needs this | Write up; tag the article; close ticket with evidence |

### Mnemonic — "I Especially Test, Plan, Implement, Verify, Document"

🧠 (Identify, Establish theory, Test, Plan, Implement, Verify, Document)

🚨 **Trap on the exam:** A "fix worked but you skipped a step" question almost always means **step 6 (Verify)** or **step 7 (Document)**. CompTIA specifically tests this anti-pattern.

### Three approaches to "establish a theory"

| Approach | When to use |
|----------|-------------|
| **Top-down OSI** (start at L7, work down) | When the symptom is application-layer (page won't load, app slow) |
| **Bottom-up OSI** (start at L1, work up) | When the symptom is physical (no link light, totally disconnected) |
| **Divide and conquer** | Start in the middle (L3/L4 connectivity) and bisect from there |

🎯 **Exam pattern:** *"A user reports their browser can load www.google.com but not the internal app"* — DNS works (resolves Google), L1-L4 works (Internet works) — start at the *internal-specific* failure point (app server, auth, internal DNS, firewall rule for internal subnet). Use divide-and-conquer.

---

## 🪜 Common L1–L7 Issues — The Catalog CompTIA Tests

The exam quizzes you on recognizing the symptom → layer pattern. Memorize the high-frequency issues per layer.

### Layer 1 — Physical Issues

| Symptom | Likely cause | Tools |
|---------|--------------|-------|
| No link light on switch port | Cable cut/disconnected, NIC dead, wrong port type, port disabled | Visual inspection, swap cable, swap port |
| Intermittent connectivity | Bad cable, loose connector, EMI, damaged termination | Cable tester, replace cable, re-terminate |
| Throughput far below spec | Bad cable, EMI, mode mismatch (duplex), bent cable, distance exceeded (Cat6 = 100m max) | Cable certifier, TDR |
| Cross-talk | Untwisted pairs near termination, non-paired wires | Re-terminate, use shielded |
| Open / short / split pair | Improper termination | Cable certifier, re-terminate per TIA-568A/B |
| Signal attenuation | Distance, low-quality cable, too many splices | Run shorter cable, fiber for long runs |

### Layer 2 — Data Link Issues

| Symptom | Likely cause | Diagnosis |
|---------|--------------|-----------|
| **Duplex mismatch** | One end full, other end half — works but with collisions/runts/lost packets | Check interface counters (errors, collisions); set both ends to auto, or hard-code both ends identically |
| **Broadcast storm** | L2 loop without STP, malicious tool, faulty NIC | Disable affected port; ensure STP enabled and converged |
| **MAC flapping** | Same MAC seen on multiple ports (loop or duplicate MAC) | Switch log; isolate the offending port |
| **VLAN mismatch** | Access port on wrong VLAN; trunk native VLAN mismatch | `show interface switchport`; reconfigure |
| **STP problems** | Slow convergence, port stuck blocking, BPDU Guard error-disable | `show spanning-tree`; check for PortFast on trunks (BAD) |

### Layer 3 — Network Issues

| Symptom | Likely cause | Diagnosis |
|---------|--------------|-----------|
| **No IP / wrong IP** | DHCP failure (APIPA 169.254.x.x), static misconfiguration | `ipconfig /all`; renew lease; check DHCP relay |
| **Wrong subnet mask** | Typo, mismatched mask between hosts → split-brain communication | Verify on both ends; recompute network ID |
| **Wrong default gateway** | Typo; gateway moved; DHCP option 3 misconfigured | Check ip route table; ping the gateway |
| **Routing loop** | Misconfigured static routes; missing split-horizon | TTL-expiring messages in traceroute; review route tables |
| **Asymmetric routing** | Traffic out one path, back via another; can break stateful inspection | Capture on multiple paths; check firewall logs |
| **ARP cache poisoning** | Attacker on segment | Verify ARP entries match expected MAC; enable DAI |
| **Duplicate IP** | Two devices claim same IP | `arp -a`; check DHCP for static + scope conflict |
| **MTU mismatch / fragmentation issues** | VPN overhead reduces effective MTU; ICMP-blocking firewall breaks PMTUD | `ping <ip> -l 1472 -f` on Windows to find max payload; lower TCP MSS clamp |

### Layer 4 — Transport Issues

| Symptom | Likely cause | Diagnosis |
|---------|--------------|-----------|
| **Connection refused** | Service not listening on port; firewall blocking | `netstat`; `telnet host port`; check firewall |
| **Connection times out** | Firewall silently drops; route asymmetry; destination overloaded | Trace path; review firewall logs |
| **Slow throughput** | Window size too small; high latency × small window = low throughput (BDP); packet loss causing retransmits | Wireshark TCP analysis; tune window |
| **Port exhaustion** (NAT) | NAT table full from too many sessions / NAT slipstreaming | Increase NAT table size; check for client gone wild |

### Layer 7 — Application Issues

| Symptom | Likely cause | Diagnosis |
|---------|--------------|-----------|
| **DNS resolution failure** | Resolver unreachable; record missing; cache poisoning | `nslookup`; flush DNS cache; check resolver |
| **TLS / certificate errors** | Expired cert; clock skew (NTP!); wrong hostname; untrusted CA | Browser cert details; check NTP; verify chain |
| **HTTP 4xx / 5xx errors** | 404 = not found; 403 = forbidden; 500 = server error; 502/504 = upstream issue | Logs on server / load balancer / WAF |
| **Slow page load (waterfall)** | Many small assets, HTTP/1.1 no-keepalive, large CSS/JS, missing CDN | Browser DevTools; HTTP/2 enablement |
| **Authentication failures** | Bad creds; locked account; SAML/OIDC misconfig; clock skew | Identity provider logs |

---

## 📶 Wireless-Specific Troubleshooting

| Symptom | Cause | Diagnosis |
|---------|-------|-----------|
| **Weak signal (RSSI)** | Distance, obstruction, RF interference | Site survey, signal meter (NetSpot, Ekahau) |
| **Roaming drops** | Sticky client; no 802.11k/v/r; bad AP placement | Enable assisted roaming; site survey |
| **Slow throughput on Wi-Fi** | Channel congestion; old standard (b/g); 2.4 vs 5 GHz | Switch to 5/6 GHz, change channel |
| **Captive portal stuck** | DNS misconfig; HTTPS interception failure; expired session | Manually navigate to captive portal URL |
| **Channel overlap** | Multiple APs on same/adjacent channels | Channel survey; reassign 1/6/11 (2.4) |
| **No connection / wrong PSK** | Typo; WPA3-only AP and WPA2-only client | Verify PSK; check standard compatibility |
| **DFS event** | AP yielded channel due to radar; brief outage | Change to non-DFS channel; accept brief outages |

---

## 🧪 Cable Testing Tools — What Does Each Do?

| Tool | What it does | Use case |
|------|--------------|----------|
| **Cable tester** | Verifies continuity + pinout per TIA-568A/B | Validate new termination |
| **Cable certifier** | Verifies the run meets a specific category spec (Cat5e/6/6a/7) at frequencies | Validate before formal handoff |
| **TDR** (Time-Domain Reflectometer) | Sends pulse down cable; measures reflection to locate faults by distance | Find break/short in a long run |
| **OTDR** (Optical TDR) | TDR for fiber | Find fiber break or splice loss |
| **Tone generator + probe** | Sends audible tone on a wire; probe finds the other end | Tracing wires through walls / racks |
| **Loopback plug** | Loops TX → RX on a single port to test NIC | Verify NIC hardware |
| **Multimeter** | Voltage, continuity | General electronics troubleshooting |
| **Light meter / power meter** | Measures fiber signal strength in dBm | Verify fiber connections |
| **Wi-Fi analyzer** | Visualize RF environment | Site survey, troubleshoot weak signal / channel conflict |

🎯 **Exam pattern:** *"Identify the distance to a cable fault in a long run"* → TDR. *"Trace which wall jack a wire goes to"* → tone generator + probe.

---

## 🪪 Common Cable & Connector Types

| Cable type | Use | Connector | Distance |
|------------|-----|-----------|----------|
| **Cat5e** | 1 GbE | RJ45 | 100 m |
| **Cat6** | 1 GbE / 10 GbE short | RJ45 | 100 m (10 GbE up to 55 m) |
| **Cat6a** | 10 GbE | RJ45 | 100 m |
| **Cat7 / Cat8** | 10–40 GbE | GG45 / TERA / RJ45 | 30–100 m |
| **Coax (RG-6 / RG-59)** | Cable / satellite | F-connector | 100+ m |
| **Multi-mode fiber (OM3/OM4/OM5)** | LAN / data center | LC, SC, ST | 300–550 m at 10 GbE |
| **Single-mode fiber (OS1/OS2)** | Long-haul | LC, SC | 10–80 km |

### Termination standards
- **TIA/EIA-568A** vs **568B** — two wiring schemes for RJ45
- **Straight-through cable** = same standard on both ends (568B-568B) — for unlike devices (PC to switch)
- **Crossover cable** = different standards (568A-568B) — for like devices (PC to PC, switch to switch) (modern switches with **Auto-MDIX** make this irrelevant)
- **Rollover (console) cable** — flips all 8 wires; used to connect to a switch/router console port

---

## 🪛 Console & Out-of-Band Management

| Method | Use |
|--------|-----|
| **Console port** (serial) | Direct USB/serial connection to switch/router for initial config or recovery — often the *only* access if the network is broken |
| **Out-of-band management** (separate mgmt VLAN or dedicated mgmt network) | SSH/HTTPS to the device on a path NOT carrying user data — survives data-plane failures |
| **DRAC / iDRAC / iLO** (server-specific) | Out-of-band server management; survives OS crashes |

🎯 **Exam pattern:** *"You broke the only data-path link to a remote router by changing an interface config. How do you fix it?"* → Console port (serial) or out-of-band management network.

---

## 🔬 Scenario Walkthrough — Through The 7 Steps

> **Scenario:** A user reports they cannot reach internal CRM. You walk through the methodology.

**Step 1 — Identify the problem.** User confirms: only CRM is affected; other internal apps work; started ~1 hour ago. No recent changes per the user. Check change management — yesterday a network engineer made a firewall rule change "to tighten ACLs on the corporate segment." ✅ Possible related change.

**Step 2 — Establish a theory.** Hypothesis 1: the firewall change blocked the user's subnet from CRM. Hypothesis 2: CRM server is down. Hypothesis 3: DNS for `crm.corp.local` is broken. (Probability rank: 1 > 2 > 3 based on change-correlation.)

**Step 3 — Test the theory.**
- Hypothesis 3 first (fastest test): `nslookup crm.corp.local` → resolves correctly. ❌ NOT DNS.
- Hypothesis 2: `ping crm-server-IP` from your admin laptop on a different subnet — succeeds. ❌ NOT server down.
- Hypothesis 1: `ping crm-server-IP` from the user's PC — fails (timeout). Cross-check firewall logs for blocks from user subnet to CRM IP — confirmed deny rule added yesterday. ✅ CONFIRMED.

**Step 4 — Plan of action.** Modify the deny rule to permit user subnet (or remove if the change was overly broad). Plan rollback (note the current rule order). Schedule with change-management — minor change, short maintenance window or approved as a fix-forward emergency.

**Step 5 — Implement.** Edit ACL on firewall; reload rules. Test from user's PC.

**Step 6 — Verify full functionality.** User confirms CRM works. Check other affected users — also working. Verify no new issues (no DENY events spiking elsewhere). Monitor for 15 min.

**Step 7 — Document.** Update ticket with root cause, evidence (firewall log snippets), fix applied, and a KB article: "When tightening segment ACLs, validate against the list of internal apps each subnet must reach." Tag the original change request as having had unintended side effects.

This walkthrough is the **exact pattern PBQs test**. Practice it on every scenario.

---

## ⚠️ Exam Traps & Common Misconceptions

| Misconception | Reality |
|---------------|---------|
| "Step 1 is to implement a fix" | NO — Step 1 is identify; Step 5 is implement. Order matters. |
| "Documenting can wait" | NO — Step 7 is documenting. Skipping it means the next tech has zero context. |
| "Reboot first" | Reboots may help symptomatically but bypass root cause. Use the methodology. |
| "Verify is optional if the user says it works" | NO — Step 6 explicitly tests end-to-end functionality and checks for new issues. |
| "Always start at L1" | Bottom-up is one strategy. Top-down (L7→L1) often faster for app-layer symptoms. Divide-and-conquer is a third valid approach. |
| "Duplex mismatch causes total loss of connectivity" | NO — connectivity works but with errors and dropped packets; throughput collapses. |
| "169.254.x.x means the cable is unplugged" | NO — it means DHCP failed. Cable may be perfectly fine. |
| "A successful ping means the server is healthy" | Only confirms L3 reachability — service may not be listening on its port. Use `telnet host port` for L4 check. |
| "Cable certifier and tester are the same" | Tester = continuity + pinout. Certifier = full category spec compliance. Different price tiers. |

---

## 🎓 Key Terms To Know (Add to Flashcards!)

| Term | Definition |
|------|------------|
| **7-step methodology** | Identify → Establish theory → Test → Plan → Implement → Verify → Document |
| **Top-down / bottom-up / divide-and-conquer** | OSI-layer investigation approaches |
| **Duplex mismatch** | One end full / one end half — throughput collapses |
| **Broadcast storm** | L2 loop without STP — multiplies frames endlessly |
| **MAC flapping** | Same MAC seen on multiple ports — loop or duplicate MAC |
| **APIPA** | 169.254.x.x → DHCP failed |
| **TDR / OTDR** | Time-Domain Reflectometer (copper / optical) — locate cable fault by distance |
| **Cable certifier** | Validates against specific category standard |
| **Tone generator + probe** | Trace which wire goes where |
| **Loopback plug** | Test NIC hardware |
| **Wi-Fi analyzer** | RF survey tool |
| **Console port** | Direct serial admin interface |
| **Out-of-band management** | Admin path independent of data plane |
| **PMTUD** | Path MTU Discovery — relies on ICMP, broken by ICMP blocking |
| **MSS clamping** | Force TCP MSS lower to avoid fragmentation |

### Acronyms cheat-row (Module 8)
| Acronym | Meaning |
|---------|---------|
| TDR / OTDR | Time-Domain Reflectometer / Optical TDR |
| MTU | Maximum Transmission Unit |
| MSS | Maximum Segment Size (TCP) |
| PMTUD | Path MTU Discovery |
| RSSI / SNR | Signal strength / Signal-to-Noise Ratio |
| DFS | Dynamic Frequency Selection |
| RFP | Right Foot Path? No — RF Path (informal) |
| iLO / iDRAC / IPMI | Server out-of-band management |
| LACP | Link Aggregation Control Protocol |
| KB | Knowledge Base (documentation) |
| CMDB | Configuration Management Database |
| RCA | Root Cause Analysis |

---

## 📊 Case Study — The 2021 Facebook Outage (BGP Self-Inflicted)

**Situation.** On **4 October 2021** at **15:39 UTC**, Facebook (now Meta) — including Facebook, Instagram, WhatsApp, Oculus, Workplace — went **globally offline for ~6 hours**. The outage affected 3.5 billion users. It became, briefly, the largest enterprise outage in history.

**Decision.** Engineers running a **routine maintenance command** to assess global backbone capacity issued a BGP update that **withdrew the routes advertising Facebook's authoritative DNS servers**. With no routes to Facebook's DNS, the DNS responses for `facebook.com`, `instagram.com`, etc. **disappeared from the Internet's DNS tables**. Users got DNS resolution failures.

The cascade went deeper:

- Facebook's *internal* tools also relied on `meta.com` DNS — so engineers couldn't log in remotely
- The data centers' physical security badge systems relied on internal DNS — engineers were locked out of the buildings until manual override
- Recovery required *physically dispatching* engineers to data centers, manually overriding security, and restoring BGP advertisements at the routers

**Outcome.** ~6 hours of total outage. Estimated ~$60–90 million in direct lost ad revenue. Reputational damage in the billions. Meta's published post-mortem ("More Details about the October 4 Outage," Santosh Janardhan, 5 October 2021) became one of the most-read engineering blog posts ever, hitting ~10 million reads in 48 hours.

The post-mortem reads exactly like a **CompTIA 7-step methodology gone wrong**:

1. **Identify the problem** — The maintenance team identified routes were missing within minutes via internal monitoring (the parts that didn't depend on the broken DNS)
2. **Establish theory** — Quickly correlated the route withdrawal to the maintenance command issued seconds earlier
3. **Test the theory** — Out-of-band access showed the routers had received the withdraw and propagated it
4. **Plan of action** — Need to restore advertisements. But the *plan* couldn't be executed remotely because the engineers couldn't authenticate to the routers (DNS for internal AAA was also down). The plan had to include physical dispatch
5. **Implement** — Engineers drove to data centers, manually accessed routers via console / out-of-band, restored advertisements
6. **Verify** — Took additional hours for the new advertisements to propagate globally and DNS caches to refresh
7. **Document** — Public post-mortem within 24 hours; internal RCA detailed and shared

**Lesson for the exam / for practitioners.** This case touches *every* Module 8 concept:

- **Out-of-band management** — the absence of an out-of-band auth path is what turned a 5-minute fix into a 6-hour outage
- **Single-system dependencies** — internal tools, badge access, and DNS all sharing a single fate point amplified blast radius catastrophically
- **Documentation** — the post-mortem itself became a teaching artifact for the industry; transparency in incident reporting raises the bar
- **The 7-step methodology** — Meta's engineers absolutely followed it; the failure wasn't in the methodology but in pre-incident architecture (single points of failure)
- **Change management** — a single "routine" command had global blast radius. Change-management with stage validation (Module 1's Sec+ concepts) would have caught it

This case is exactly what Network+ tests when asking about troubleshooting methodology, out-of-band management, and the importance of verifying *full* functionality (Step 6) after a change. The Meta outage is the canonical "Verify and Document failed" cautionary tale even though the post-mortem itself was excellent.

**Discussion (Socratic).**
- **Q1:** You inherit an enterprise where the network team's badge access depends on AD which depends on DNS which depends on the network. Apply the lesson from Facebook: list THREE concrete architectural changes you'd make in your first 90 days to break this dependency loop.
- **Q2:** Facebook's outage was triggered by a "routine maintenance command." How would a robust change-management process (Module 6 / Sec+ Module 1) have caught it before global deployment? Be specific about staging, peer review, and impact analysis.
- **Q3:** Compare Meta's response (public post-mortem within 24 hours, deep technical detail) to a hypothetical organization that says nothing publicly. What organizational signals does each choice send to the engineering community, to customers, and to regulators? Defend your preferred approach.

---

## ✅ Module 8 Summary

You now know:

- 🎯 The **CompTIA 7-step troubleshooting methodology** in order — Identify → Establish theory → Test → Plan → Implement → Verify → Document
- 🪜 Three approaches to forming a theory — **top-down**, **bottom-up**, **divide-and-conquer**
- 🚨 **L1–L7 issue catalog** — duplex mismatch, broadcast storms, APIPA, routing loops, MTU issues, TLS errors, etc.
- 📶 **Wireless-specific** — sticky clients, channel overlap, captive portal stuck, DFS events
- 🧪 **Cable testing tools** — tester / certifier / TDR / OTDR / tone generator / loopback / Wi-Fi analyzer
- 🪪 **Cable types** — Cat5e/6/6a, fiber MM/SM, distances
- 🪛 **Console and out-of-band management** — the *only* way back when the data plane is broken

**Next steps:**
1. 🎥 Watch the curated videos: [Videos.md](./Videos.md)
2. ✏️ Take the quiz: [Quiz.md](./Quiz.md) — aim for 22/26
3. 📋 Review the [Cheat-Sheet.md](./Cheat-Sheet.md) before bed
4. ➡️ Take [Practice Exam 1](../Practice-Exams/Practice-Exam-1.md) (after Module 4 — earlier) and [Practice Exam 2](../Practice-Exams/Practice-Exam-2.md) (now), then the [Final Mock Exam](../Practice-Exams/Final-Mock-Exam.md) 2–3 days before your real exam.

> **Where this leads.**
> - Inside this course: All previous modules feed into this one — every symptom catalog draws from L1–L7 concepts in Modules 1–7.
> - Cross-course: CompTIA Security+ (course 09) has its own troubleshooting / IR methodology (NIST IR lifecycle) — similar discipline, different phase names.
> - Practice: Practice Exam 2 has ~10 troubleshooting questions; the Final Mock has ~20 (since Domain 5 is 24% of the exam).

---

## 📚 Further Reading (Optional)

**Primary sources:**
- 📄 CompTIA Network+ N10-009 Exam Objectives — Domain 5 explicitly lists the 7-step methodology
- 📄 IETF RFC 4459 (Savola, 2006). *MTU and Fragmentation Issues with In-the-Network Tunneling* — for MTU/PMTUD background

**Case-study sources:**
- 📄 Janardhan, S. (2021). "More Details about the October 4 Outage." Meta engineering blog, 5 October 2021.
- 📄 Cloudflare (2021). "Understanding How Facebook Disappeared from the Internet." 4 October 2021.

**Practitioner / exam:**
- 📖 [Professor Messer Troubleshooting playlist](https://www.professormesser.com/network-plus/n10-009/n10-009-video-training-course/)
- 📖 *Network Warrior* by Gary Donahue (O'Reilly) — practical, war-story driven
- 📖 *Practical Packet Analysis* by Chris Sanders (No Starch) — the diagnostic Wireshark book
