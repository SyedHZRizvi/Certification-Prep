# 📋 Module 6 Cheat Sheet: Network Security Fundamentals

> One page. Print it. Tape it to your monitor.

---

## 🛡️ Firewall Generations

| Generation | Filters on | Use |
|------------|-----------|-----|
| **Stateless / packet filter** | 5-tuple per packet | Legacy / simple |
| **Stateful** | 5-tuple + connection state | Workhorse perimeter / segmentation |
| **NGFW** | Stateful + DPI + app + user + IPS + TLS decrypt | Modern enterprise |
| **WAF** | HTTP/HTTPS only (OWASP-class) | Protect web apps |
| **FWaaS / SASE** | Cloud-delivered | Hybrid / remote |

---

## 👀 IDS vs IPS

| Property | IDS | IPS |
|----------|-----|-----|
| Mode | Out-of-band (passive) | Inline |
| Action | Log + alert | Log + alert + **block** |
| Failure | Network OK | Network may go down |
| Latency | None | Some |

### Detection methods
- **Signature** — known patterns, low FP, blind to zero-days
- **Anomaly / behavioral** — baseline deviation, catches novel, more FP
- **Heuristic / ML** — scoring; tunable but black-box

---

## 🚪 NAC Quick Block

| Posture check | Goes where |
|---------------|------------|
| Patch + AV + encryption + cert OK | Production VLAN |
| Non-compliant | Quarantine VLAN (remediation portal) |
| Unknown / unmanaged | Guest VLAN (Internet only) |
| Failed | Deny / event-disable port |

Agent (deeper) vs Agentless (BYOD/IoT — DHCP fingerprint, port profile).

---

## 🛣️ Zero Trust

- **Never trust, always verify** (NIST SP 800-207)
- **PEP** (enforces) / **PE** (decides) / **PA** (translates)
- Adaptive Identity + Threat Scope Reduction + Microsegmentation + Continuous Monitoring
- ZTNA = identity-aware proxy per app (replaces broad VPN trust)

---

## 🔐 VPNs

| | IPsec | SSL/TLS VPN | WireGuard |
|--|-------|-------------|-----------|
| Layer | 3 | 4–7 | 3 |
| Transport | UDP 500 + 4500 + IP proto 50 | TCP 443 | UDP (single port, configurable) |
| Mode | Tunnel (S2S) / Transport (H2H) | Clientless or full-tunnel | Tunnel |
| Use | Site-to-site, remote access | Remote, firewall-friendly | Modern simpler alt |

### IPsec details
- **AH** = integrity only (rare in practice)
- **ESP** = encrypt + integrity + auth (used)
- **IKE / IKEv2** = key exchange (UDP 500, NAT-T = UDP 4500)
- **Phase 1** = secure channel between peers · **Phase 2** = ESP tunnel parameters

---

## 🔌 802.1X

| Role | Who |
|------|-----|
| Supplicant | Client device |
| Authenticator | Switch / WAP |
| Authentication Server | RADIUS |

- **EAP-TLS** = certs both sides (most secure)
- **PEAP / EAP-TTLS** = server cert + user creds in TLS tunnel
- RADIUS Accept can return Tunnel-Private-Group-ID → **dynamic VLAN assignment**

---

## 🧱 ACL Basics

- Evaluated **top-down, first match wins**
- End with **explicit deny-all**
- Common fields: permit/deny, protocol, src, dst, port, log

---

## 🚧 Physical Security

| Control | Purpose |
|---------|---------|
| **Mantrap / Access vestibule** | Defeat tailgating |
| Badge / proximity card | Identity + audit log |
| Biometric (fingerprint, iris) | Stronger identity |
| CCTV | Deterrent + detective (if recorded) |
| Security guard | Detective + deterrent |
| Locking racks | Server / switch cabinet |
| Cable lock | Laptop / equipment theft |
| Faraday cage | RF shielding |

---

## 🏆 Exam Power Phrases

Often **right**:

- ✅ "Microsegmentation reduces blast radius"
- ✅ "WAF for OWASP-class web attacks"
- ✅ "ZTNA per-application access"
- ✅ "IPS inline / IDS out-of-band"
- ✅ "802.1X + RADIUS + EAP-TLS"
- ✅ "Implicit deny at end of ACL"
- ✅ "Backup, then segment, then monitor"

Often **wrong**:

- ❌ "Disable IPS to fix false positives"
- ❌ "Open all inbound — users complain"
- ❌ "Telnet for remote management"
- ❌ "Trust traffic from inside the network"
- ❌ "IDS blocks attacks"

---

## 🗓️ Key Facts To Memorize Cold

- Stateful vs NGFW vs WAF
- IDS = passive, IPS = inline blocker
- IPsec ports: UDP 500 + UDP 4500 + IP proto 50
- SSL/TLS VPN: TCP 443
- 802.1X: supplicant / authenticator (switch/AP) / auth server (RADIUS)
- NAC = posture check before admission
- ZTNA = identity-aware per-app proxy (replaces broad VPN)
- Mantrap = anti-tailgate vestibule
- Implicit deny at end of ACL

---

## ✏️ Quick Self-Check

Cover the answers and recite:

1. IDS vs IPS in one sentence? ___
2. Three ports needed for IPsec through a NAT? ___
3. 802.1X three roles? ___
4. ACL evaluation order? ___
5. ZTNA's advantage over VPN? ___

---

➡️ [Module 7: Monitoring, Performance & Tools](../Module-07-Monitoring-Tools/Reading.md)
