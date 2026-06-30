# 📋 Module 5 Cheat Sheet: Application Deployment & Configuration

> One page. Print it. Tape it to your monitor. Review before the exam.

---

## 📦 5 Windows App Types

| Type | When |
|------|------|
| **Win32 (.intunewin)** | Modern default, any custom app |
| **LOB (raw MSI)** | Simple MSI, no extras |
| **Microsoft Store app (new)** | Store apps |
| **Microsoft 365 Apps** | Office Click-to-Run built-in |
| **Web app / web link** | Browser SaaS |

---

## 🔧 IntuneWinAppUtil

```cmd
IntuneWinAppUtil.exe -c <source> -s <setup-file> -o <output>
```

Wraps source folder → encrypted `.intunewin`.

---

## 🔍 Detection Rules (4 Types)

| Type | When |
|------|------|
| MSI product code | MSI installers |
| File (existence + version) | EXE installers |
| Registry | Custom installers |
| Custom PowerShell | Anything else (exit 0 + stdout) |

🚨 Most common app failure = wrong detection rule.

---

## 🔗 Dependencies vs Supersedence

| | Dependencies | Supersedence |
|---|--------------|--------------|
| What | App B required before App A | App A replaces App B |
| Max count | **100** | **10** |
| Max depth | n/a | **2** |
| Auto-install? | Yes (with consent) | Yes (with uninstall option) |

---

## ⏱️ Install Behavior + Return Codes

Install context: **System** (default) or **User**

| Return code | Meaning |
|-------------|---------|
| 0 | Success |
| 1707 | MSI success |
| 3010 | Soft reboot required |
| 1641 | Hard reboot initiated |
| 1618 | Another install in progress (retry) |

---

## 📦 MSIX Advantages over MSI

- Clean install / uninstall (no registry leftover)
- Side-by-side versioning
- Per-user install without admin
- Modification packages (customize without repackaging)
- Wraps Win32/MSI/Click-Once

---

## 🍎 iOS App Types

- iOS store app (public + VPP for paid)
- iOS LOB (.ipa)
- iOS web clip
- Microsoft 365 Apps

🔥 VPP requires ABM + VPP token (device or user).

---

## 🤖 Android App Types

- Android store app (Managed Google Play)
- Managed Google Play app (enterprise APK)
- Android Enterprise system app
- Android web app
- Microsoft 365 Apps

🔥 ALL Android Enterprise apps via **Managed Google Play** (no direct APK upload).

---

## 🎯 Assignment Intents

| Intent | Effect |
|--------|--------|
| **Required** | Auto-install on targeted devices |
| **Available for enrolled devices** | Company Portal self-service |
| **Available with or without enrollment** | MAM-only (no device enrollment) |
| **Uninstall** | Force-remove |

---

## 🛠️ App Configuration Policy (ACP)

| Channel | When |
|---------|------|
| **Managed devices** (MDM) | Device enrolled |
| **Managed apps** (MAM) | APP-protected app |

Pushes:

- Server URL (Outlook Mobile, custom apps)
- Default identity
- Branding
- Managed bookmarks (Edge/Chrome/Firefox)

---

## 📚 App Categories

UX labels (Productivity, Engineering, HR, etc.) for Company Portal catalog tabs. Not access control.

---

## 🏆 Exam Power Phrases

When you see these, they're often **correct**:

- ✅ "Win32 with detection rule + dependencies + supersedence"
- ✅ "App stuck installing = check detection rule"
- ✅ "Supersedence with uninstall previous for in-place upgrade"
- ✅ "App Configuration Policy for tenant URL push"
- ✅ "Required for auto-install, Available for Company Portal"

When you see these, often **wrong**:

- ❌ "Direct APK upload to Intune"
- ❌ "Supersedence chains of 3+ levels"
- ❌ "Embed dependencies in source folder"
- ❌ "LOB type for complex installers"
- ❌ "MSIX = MSI rebranded"

---

## ⚠️ Anti-Patterns To Recognize

- ❌ Missing or broken detection rule
- ❌ Bundling dependencies instead of relationship
- ❌ Supersedence depth > 2
- ❌ Required for non-critical apps (Company Portal noise)
- ❌ Skipping pilot ring (production debugging)

---

## ✏️ Quick Self-Check

Cover the answers, recite:

1. 5 Windows app types? ___
2. Max supersedence depth? ___ Max dependencies? ___
3. 4 detection rule types? ___
4. Return code 3010 means? ___
5. ACP managed devices vs managed apps channel? ___

---

➡️ [Module 6: Endpoint Security & Defender for Endpoint](../Module-06-Endpoint-Security/Reading.md)
