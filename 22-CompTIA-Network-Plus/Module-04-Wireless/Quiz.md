# ✏️ Module 4 Quiz: Wireless & SOHO Networks

> **Instructions:** Answer all 26 questions WITHOUT looking at the reading.
> Then check your answers below. Aim for 22/26 minimum.
>
> Every question is tagged with its **Bloom's taxonomy level**.
>
> **Bloom distribution (this quiz):** Remember 7 · Understand 6 · Apply 7 · Analyze/Evaluate 5 · Create 1.

---

## Questions

### Q1. Wi-Fi 5 corresponds to which IEEE standard? *(Remember)*
A. 802.11n
B. 802.11ac
C. 802.11ax
D. 802.11be

---

### Q2. Wi-Fi 6E introduces support for which frequency band? *(Remember)*
A. 900 MHz
B. 2.4 GHz
C. 5 GHz only
D. 6 GHz (in addition to 2.4 and 5)

---

### Q3. The non-overlapping channels in the 2.4 GHz band in the US are: *(Remember)*
A. 1, 4, 7, 11
B. 1, 6, 11
C. 1, 5, 9, 13
D. 36, 40, 44, 48

---

### Q4. The current most secure consumer Wi-Fi standard is: *(Remember)*
A. WEP
B. WPA
C. WPA2
D. WPA3

---

### Q5. WPA3 replaces the 4-way handshake with which key exchange? *(Remember)*
A. PSK
B. SAE (Simultaneous Authentication of Equals)
C. RSA
D. Diffie-Hellman static

---

### Q6. 802.3af PoE provides approximately how much power per port? *(Remember)*
A. 7 W
B. 15.4 W
C. 30 W
D. 60 W

---

### Q7. A signal strength of -67 dBm is generally considered: *(Remember)*
A. Excellent, right next to AP
B. Reliable for VoIP/video
C. Unusable
D. The same as -90 dBm

---

### Q8. 802.11ac operates in which band(s)? *(Understand)*
A. 2.4 GHz only
B. 5 GHz only
C. 2.4 + 5 GHz
D. 6 GHz only

---

### Q9. The BSSID of a wireless network is: *(Understand)*
A. The human-readable name
B. The MAC address of the AP
C. The encryption type
D. The IP of the AP's management interface

---

### Q10. Wi-Fi 6 (802.11ax) introduces which multi-user scheduling feature? *(Understand)*
A. CSMA/CA
B. MIMO
C. OFDMA
D. WEP

---

### Q11. A site survey conducted with software using floor plans before any hardware is installed is called a: *(Understand)*
A. Predictive site survey
B. Passive site survey
C. Active site survey
D. Post-deployment survey

---

### Q12. Captive portals are typically used to: *(Understand)*
A. Encrypt wireless traffic over the air
B. Force a sign-in / terms-of-use page before allowing Internet access
C. Replace WPA3
D. Provide certificate-based authentication

---

### Q13. EAP-TLS is best described as: *(Understand)*
A. Server-side certificate only
B. Certificate-based authentication on BOTH client and server (most secure EAP method)
C. Password-based EAP
D. Cisco-proprietary

---

### Q14. A new AP requires up to 25 W of power. Which is the LEAST PoE standard that supports it? *(Apply)*
A. 802.3af
B. 802.3at (PoE+)
C. 802.3bt Type 3
D. USB-PD

---

### Q15. An office covers 30,000 sq ft on one floor. The architect wants seamless roaming and the same SSID throughout. The correct topology is: *(Apply)*
A. Single AP at the center
B. IBSS ad-hoc
C. ESS (Extended Service Set), multiple APs, one SSID, channel-planned
D. Mesh with no controller

---

### Q16. A user reports that Wi-Fi is "slow on the patio" but fine inside. Signal at the patio measures -85 dBm. The most likely cause is: *(Apply)*
A. The user's NIC is broken
B. Weak signal due to distance / wall attenuation, RSSI at -85 dBm is marginal
C. Wi-Fi 6 is not supported
D. The PSK is wrong

---

### Q17. A small office wants to deploy Wi-Fi for both staff and guests. The MOST appropriate design is: *(Apply)*
A. One open SSID for everyone
B. Two SSIDs on separate VLANs: WPA3-Enterprise for staff, captive portal or Enhanced Open for guests
C. WEP for guests, WPA3 for staff
D. Disable Wi-Fi for guests entirely

---

### Q18. To maximize throughput while minimizing interference in a dense 5 GHz deployment, the engineer should pick which channel width? *(Apply)*
A. 20 MHz, more channels = less interference
B. 40 MHz, best compromise
C. 80 MHz, always best
D. 160 MHz, always best

---

### Q19. The vendor recommends disabling WPS on the SOHO router. The PRIMARY reason is: *(Apply)*
A. WPS interferes with PoE
B. The PIN-based WPS authentication is brute-forceable (Reaver), enabling an attacker to recover the PSK in hours
C. WPS doesn't support IPv6
D. WPS slows Wi-Fi

---

### Q20. A wireless user roams from AP1 to AP2 with the same SSID but their VoIP call drops. The MOST likely cause is: *(Analyze)*
A. The two APs are on different SSIDs
B. Sticky-client behavior or fast-transition (802.11r) not enabled, the client takes too long to re-associate, breaking the real-time stream
C. WPA3 doesn't support roaming
D. PoE failure

---

### Q21. An enterprise deploys WPA2-Enterprise with PEAP-MSCHAPv2. A penetration tester captures the EAPOL handshake and cracks user passwords offline. The BEST architectural fix is: *(Analyze)*
A. Switch to WEP
B. Migrate to WPA3-Enterprise with EAP-TLS (certificate-based; nothing to crack offline)
C. Make passwords longer
D. Add a captive portal in front

---

### Q22. Two APs on the same floor are configured on channels 1 and 3 in the 2.4 GHz band. The MOST significant operational consequence is: *(Analyze)*
A. Channels 1 and 3 are non-overlapping and will not interfere
B. Channels 1 and 3 partially overlap, causing co-channel interference and reduced throughput, should be 1 and 6 (or 1 and 11)
C. Only Wi-Fi 7 devices can use channel 3
D. PoE will fail on both APs

---

### Q23. 802.11ax (Wi-Fi 6) advantages over 802.11ac (Wi-Fi 5) include all EXCEPT: *(Analyze)*
A. OFDMA for finer-grained client scheduling
B. Support for 2.4 GHz (ac was 5 GHz only)
C. Better performance in dense client environments
D. Mandatory use of WEP

---

### Q24. A SOHO router has UPnP enabled by default. The SECURITY implication is: *(Analyze)*
A. UPnP is required for Wi-Fi to function
B. Applications inside the LAN can dynamically open inbound ports without admin approval, expanding the attack surface
C. UPnP enables WPA3 automatically
D. UPnP improves DNS resolution

---

### Q25. An AP supports both 802.11ax and WPA3. A legacy IoT camera supports only 802.11n and WPA2-PSK. The MOST appropriate compatibility approach is: *(Analyze)*
A. Refuse to support the camera
B. Configure the SSID in WPA2/WPA3 mixed mode, allowing both, or create a dedicated WPA2 SSID on a separate VLAN for legacy IoT
C. Downgrade the entire network to WPA2
D. Use WEP for the camera

---

### Q26. You're designing Wi-Fi for a 4-story law firm. Each floor needs ~80 simultaneous high-throughput users on laptops and phones. The CIO asks why you're recommending Wi-Fi 6 (802.11ax) with multiple low-power APs per floor rather than a few high-power Wi-Fi 5 (802.11ac) APs. State the SINGLE most compelling reason. *(Create)*

> *Create-level note:* you're justifying an architectural choice; the strongest answer captures the *root* reason in one phrase.
A. "Wi-Fi 6 supports higher max link speed than Wi-Fi 5."
B. "Wi-Fi 6's OFDMA + denser cell plan with low-power APs serves many concurrent clients far more efficiently than a few high-power Wi-Fi 5 APs, because per-cell capacity not raw peak speed is the bottleneck in dense deployments."
C. "Wi-Fi 6 has WPA3 mandatory."
D. "Wi-Fi 5 doesn't support PoE."

---

## 🎯 Answers + Explanations

### Q1: **B. 802.11ac**
Wi-Fi 5 = 802.11ac (2013, 5 GHz only). Wi-Fi 4 = 802.11n. Wi-Fi 6 = 802.11ax. Wi-Fi 7 = 802.11be.

### Q2: **D. 6 GHz (in addition to 2.4 and 5)**
Wi-Fi 6E (the "E" = Extended) adds the 6 GHz band on top of Wi-Fi 6's 2.4 + 5. Wi-Fi 7 also uses 6 GHz.

### Q3: **B. 1, 6, 11**
In the US, only channels 1, 6, and 11 are non-overlapping in the 2.4 GHz band (each is 20 MHz wide; 5 MHz spacing means most channels overlap).

### Q4: **D. WPA3**
WPA3 (2018) is the current standard. WEP is broken since 2001; WPA is deprecated; WPA2 is acceptable but superseded.

### Q5: **B. SAE**
Simultaneous Authentication of Equals (based on Dragonfly key-exchange) replaces the WPA2 4-way PSK handshake, providing forward secrecy and defeating offline dictionary attacks.

### Q6: **B. 15.4 W**
802.3af (the original PoE, 2003) provides 15.4 W at the port (12.95 W usable at the device).

### Q7: **B. Reliable for VoIP/video**
-67 dBm is the commonly cited threshold for VoIP/video reliability. -30 = excellent; -90 = unusable.

### Q8: **B. 5 GHz only**
802.11ac (Wi-Fi 5) is **5 GHz only**. 802.11n (Wi-Fi 4) was dual-band.

### Q9: **B. The MAC address of the AP**
BSSID is the AP's MAC (unique per radio). SSID is the human-readable network name.

### Q10: **C. OFDMA**
Orthogonal Frequency-Division Multiple Access, Wi-Fi 6's headline feature, dividing channels into sub-carriers so multiple clients can be served simultaneously in a single transmission opportunity.

### Q11: **A. Predictive site survey**
Predictive surveys use software (Ekahau, iBwave) with floor plans BEFORE installation. Passive listens to existing RF; active injects test traffic; post-deployment validates after installation.

### Q12: **B. Force a sign-in / terms-of-use page**
Captive portals intercept HTTP and redirect to a sign-in page. They are NOT encryption, open-SSID + captive portal still has unencrypted air traffic unless WPA3 Enhanced Open is also enabled.

### Q13: **B. Cert-based both sides**
EAP-TLS = certificates on both client AND server. Most secure but deployment-heavy. PEAP/EAP-TTLS = server cert only, with user credentials inside a TLS tunnel.

### Q14: **B. 802.3at (PoE+)**
802.3at delivers up to 30 W at the port (25.5 W usable), which covers a 25 W device. 802.3af tops out at 15.4 W (12.95 usable), not enough.

### Q15: **C. ESS**
Multiple APs sharing one SSID with channel planning = Extended Service Set. Clients roam transparently between APs.

### Q16: **B. Weak signal**
-85 dBm is marginal, well past the -70 dBm comfort zone. Patio is outside the comfortable coverage area; either add an AP or accept the limitation.

### Q17: **B. Two SSIDs, separate VLANs, WPA3-Enterprise for staff + guest network**
Best practice: segment staff and guests with separate SSIDs/VLANs. Staff = WPA3-Enterprise (per-user 802.1X). Guests = captive portal or Enhanced Open. Never share a PSK across both.

### Q18: **A. 20 MHz**
In DENSE deployments, narrower channels = more non-overlapping channels available = less co-channel interference. Wide channels look fast on a single AP but collapse capacity when APs overlap. (Counterintuitive but correct.)

### Q19: **B. PIN brute-forceable (Reaver)**
The WPS PIN method is broken, Reaver/Bully tools can recover the PSK in 4-10 hours of brute force. Push-button isn't immune to other issues. Disable WPS entirely.

### Q20: **B. Sticky-client / no 802.11r fast transition**
Client roaming is initiated by the *client*, not the AP. Without 802.11k/v/r assistance, the re-association can take hundreds of milliseconds, long enough to drop a real-time stream.

### Q21: **B. WPA3-Enterprise with EAP-TLS**
PEAP-MSCHAPv2 is known vulnerable to offline cracking (Moxie Marlinspike's CloudCracker). EAP-TLS uses certificates on both sides, there's no password to crack offline.

### Q22: **B. Channels 1 and 3 overlap**
2.4 GHz channels are 20 MHz wide with 5 MHz spacing. Channels 1 and 3 overlap heavily. Only 1/6/11 are non-overlapping.

### Q23: **D. Mandatory use of WEP**
Wi-Fi 6 mandates **WPA3**, not WEP (WEP is broken). The other three are real Wi-Fi 6 advantages.

### Q24: **B. Apps can open inbound ports without admin approval**
UPnP lets applications dynamically request port forwards, malware loves this. Disable UPnP unless you have a specific app that needs it (and prefer manual port-forwarding for that app).

### Q25: **B. Mixed mode OR separate VLAN for legacy**
Practical reality: legacy devices must coexist. Mixed-mode SSID is the lowest-effort approach; a dedicated WPA2 SSID on its own VLAN gives stronger isolation.

### Q26: **B. OFDMA + dense low-power cells > raw peak speed in dense deployments**
The root insight: a few high-power APs create giant cells, each with hundreds of clients fighting for airtime. Many low-power APs create small cells with fewer clients each → more capacity per user. Wi-Fi 6's OFDMA further multiplies this by serving many clients in one TX opportunity. Raw peak speed (A) is misleading; WPA3 isn't strictly mandatory (C is false in practice; mixed mode allowed); Wi-Fi 5 supports PoE fine (D is false).

---

## 📊 Score Yourself

- 25–26/26 → 🏆 Wireless mastered.
- 22–24/26 → ✅ Solid. Re-read the 802.11 table once before the exam.
- 18–21/26 → ⚠️ Re-read 802.11 standards table + security section.
- <18/26 → 🔁 Restart the Reading.md.

---

## 🃏 Add To Your Flashcards

- 802.11 standards: a/b/g/n/ac/ax/be with marketing names and bands
- 2.4 GHz non-overlapping channels: 1, 6, 11
- WPA timeline: WEP (broken) → WPA → WPA2 → WPA3 (SAE)
- EAP-TLS = both-side certs, most secure
- PoE: 15.4 W (af) / 30 W (at) / 60–100 W (bt)
- RSSI thresholds: -67 reliable, -80 marginal, -90 unusable
- Wi-Fi 6 = OFDMA + dense-cell efficiency
- Disable UPnP and WPS on SOHO routers

---

➡️ Next: [Cheat-Sheet.md](./Cheat-Sheet.md), then [Module 5, Network Services & Cloud Connectivity](../Module-05-Services-Cloud/Reading.md)
