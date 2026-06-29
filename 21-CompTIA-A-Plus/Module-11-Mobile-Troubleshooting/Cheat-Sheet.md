# 📋 Module 11 Cheat Sheet: Mobile / Application Troubleshooting

> One page. Print it.

---

## 🔋 Battery Triage

| Symptom | First check |
|---------|-------------|
| Fast drain | Per-app usage; signal strength; Battery Health % |
| Won't charge | Cable + charger + clean port |
| Phone hot | Background app, case off, charging environment |
| Battery swollen | Replace immediately, fire risk |

---

## 📶 Wi-Fi Triage Tree

```
1. Airplane mode off?
2. Wi-Fi enabled in settings?
3. Correct SSID joined?
4. Other devices working on this SSID?
5. IP valid? (check Settings)
6. Captive portal? (open browser)
7. MDM (Mobile Device Management) Wi-Fi profile current?
8. Within signal range?
```

## 📞 Cellular Triage Tree

```
1. Airplane mode off?
2. SIM/eSIM seated + active?
3. Account active with carrier?
4. APN correct (Android)?
5. Try LTE-only mode if 5G erratic?
```

---

## 🔄 Sync Failure Quick Map

| Symptom | Likely |
|---------|--------|
| No email | MDM compliance / password / MFA (Multi-Factor Authentication) |
| Calendar missing events | Sync filter (e.g., 30 days) |
| Contacts gone | iCloud / Google Sync toggle |
| Photos not backing up | Cloud quota / paused on cellular |
| OneDrive paused | Quota / auth |

---

## 📲 App Install Issues

| Symptom | Fix |
|---------|-----|
| "Insufficient storage" | Clear cache, delete unused apps |
| "Requires iOS X.x or later" | Update OS or device unsupported |
| Side-loaded won't install (Android) | Enable "Install unknown apps" for that source |
| Enterprise app won't launch | Trust enterprise dev cert in Settings |
| Required app missing | Re-push via MDM |

---

## 🛡️ MDM Action Map

| Need | MDM action |
|------|------------|
| Phone lost (recently) | Lock + track |
| Phone confirmed stolen | Full wipe (company-owned) or selective (BYOD) |
| Employee leaving | Selective wipe |
| Out of compliance | Auto-quarantine; notify user |
| Re-enroll | Reset; re-enroll via Company Portal |

---

## 🛡️ Mobile Security Cheat

| Attack | Defense |
|--------|---------|
| Smishing | User awareness; SMS link caution |
| Juice jacking | Use own brick / power-only cable |
| SIM swap | Port-Out Lock + app-based MFA |
| Public Wi-Fi MITM | VPN (Virtual Private Network) |
| Jailbreak / root | MDM auto-quarantine |
| Malicious app | Stick to official store; vet permissions |

---

## 🔋 Battery Health Metrics

- **Cycle count**, ~500-800 cycles before degradation
- **Capacity**, iOS flags <80%
- **iOS throttles** aged batteries, replace to restore performance

---

## 🏆 Exam Power Phrases

✅ Often **right**:

- "Check MDM compliance first when corporate email fails"
- "Selective wipe, only corporate data"
- "Lock before wipe for lost phones"
- "Use app-based or hardware MFA, not SMS"
- "Stop using a swollen battery"

❌ Often **wrong**:

- "Reset to factory as first step"
- "Use SMS MFA for high-value accounts"
- "Charge from any public USB port"
- "Approve every MFA prompt"
- "Jailbreak, it's fine for work phones"

---

## 🗓️ Memorize Cold

- Wi-Fi / cellular / Bluetooth triage trees
- Selective wipe vs full wipe
- Push vs Fetch trade-off
- Jailbreak/root → quarantine
- SIM swap + Port-Out Lock
- Juice jacking defense (own brick)
- Mobile = part of **22% Software Troubleshooting + Mobile**

---

## ✏️ Quick Self-Check

1. iPhone "No Service", first 3 checks? ___
2. Selective wipe vs full wipe? ___
3. SIM swap attack defense? ___
4. Push vs Fetch email, trade-off? ___
5. App keeps crashing on Android, order of fixes? ___

---

➡️ [Module 12: Documentation, Change & DR](../Module-12-Documentation-DR/Reading.md)
