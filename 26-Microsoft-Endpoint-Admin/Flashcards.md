<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI (User Interface)',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
.fc-app *{box-sizing:border-box}
.fc-controls{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin-bottom:.85rem}
.fc-controls-left,.fc-controls-right{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center}
.fc-select,.fc-btn{font-family:inherit;font-size:.9rem;padding:.5rem .85rem;border-radius:8px;border:1px solid #d1d5db;background:#fff;color:#1f2937;cursor:pointer;transition:all .15s ease;line-height:1.2}
.fc-select:hover,.fc-btn:hover{border-color:#6366f1;color:#6366f1}
.fc-btn.fc-primary{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-primary:hover{filter:brightness(1.08);color:#fff;border-color:transparent;box-shadow:0 4px 14px rgba(99,102,241,.35)}
.fc-btn.fc-success{background:#10b981;color:#fff;border-color:transparent;font-weight:600}
.fc-btn.fc-success:hover{background:#059669;color:#fff;border-color:transparent}
.fc-btn.fc-danger{background:#fff;color:#dc2626;border-color:#fecaca;font-weight:600}
.fc-btn.fc-danger:hover{background:#dc2626;color:#fff;border-color:#dc2626}
.fc-btn.fc-ghost{background:#f3f4f6;border-color:#e5e7eb;font-size:.82rem;color:#6b7280}
.fc-btn.fc-ghost:hover{background:#fee2e2;color:#b91c1c;border-color:#fecaca}
.fc-counter{font-size:.95rem;color:#4b5563;font-weight:600;font-variant-numeric:tabular-nums}
.fc-progress{height:8px;background:#eef0fb;border-radius:99px;overflow:hidden;margin-bottom:1rem}
.fc-progress-bar{height:100%;background:linear-gradient(90deg,#6366f1,#8b5cf6);border-radius:99px;width:0%;transition:width .3s ease}
.fc-card-wrap{perspective:1400px;margin-bottom:1rem}
.fc-card{position:relative;width:100%;min-height:240px;cursor:pointer;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.fc-card.fc-flipped{transform:rotateY(180deg)}
.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;padding:2rem 1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:1px solid #e0e7ff;box-shadow:0 4px 18px rgba(99,102,241,.12)}
.fc-front{background:linear-gradient(135deg,#eef2ff 0%,#f5f3ff 100%)}
.fc-back{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border-color:transparent;transform:rotateY(180deg)}
.fc-label{position:absolute;top:.85rem;left:1rem;font-size:.7rem;letter-spacing:.12em;font-weight:700;text-transform:uppercase;opacity:.65}
.fc-known{position:absolute;top:.85rem;right:1rem;font-size:1.1rem;color:#10b981;font-weight:700}
.fc-back .fc-known{color:#86efac}
.fc-text{font-size:1.18rem;line-height:1.55;font-weight:500;max-width:100%;word-wrap:break-word}
.fc-back .fc-text{font-weight:500}
.fc-hint{position:absolute;bottom:.85rem;left:0;right:0;font-size:.75rem;opacity:.55;letter-spacing:.05em}
.fc-actions{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center}
.fc-actions .fc-btn{flex:1 1 auto;min-width:108px}
.fc-empty{text-align:center;padding:2rem;color:#6b7280}
.fc-source-hidden{display:none !important}
@media (max-width:640px){
  .fc-app{margin:1rem .5rem 1.5rem;padding:1rem;border-radius:10px}
  .fc-controls{flex-direction:column;align-items:stretch}
  .fc-controls-left,.fc-controls-right{justify-content:space-between}
  .fc-select,.fc-counter{width:100%;text-align:center}
  .fc-card{min-height:220px}
  .fc-face{padding:1.6rem 1rem}
  .fc-text{font-size:1.05rem}
  .fc-actions .fc-btn{flex:1 1 45%;min-width:0;font-size:.85rem;padding:.55rem .4rem}
}
</style>

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards" markdown="0">
  <div class="fc-controls">
    <div class="fc-controls-left">
      <select class="fc-select" id="fc-section" aria-label="Filter by section"><option value="__all__">All Sections</option></select>
    </div>
    <div class="fc-controls-right">
      <span class="fc-counter" id="fc-counter">Card 0 of 0</span>
      <button class="fc-btn fc-ghost" id="fc-reset" title="Clear known-card progress">Reset progress</button>
    </div>
  </div>
  <div class="fc-progress" aria-hidden="true"><div class="fc-progress-bar" id="fc-progress-bar"></div></div>
  <div class="fc-card-wrap">
    <div class="fc-card" id="fc-card" role="button" tabindex="0" aria-label="Flashcard. Click or press space to flip.">
      <div class="fc-face fc-front">
        <span class="fc-label">Question</span>
        <span class="fc-known" id="fc-known-front" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-question">Loading flashcards…</div>
        <span class="fc-hint">Click to flip</span>
      </div>
      <div class="fc-face fc-back">
        <span class="fc-label">Answer</span>
        <span class="fc-known" id="fc-known-back" aria-label="Marked as known"></span>
        <div class="fc-text" id="fc-answer"></div>
        <span class="fc-hint">Click to flip back</span>
      </div>
    </div>
  </div>
  <div class="fc-actions">
    <button class="fc-btn" id="fc-prev" aria-label="Previous card">&larr; Previous</button>
    <button class="fc-btn fc-success" id="fc-got" aria-label="Mark as known and advance">&#10003; Got it</button>
    <button class="fc-btn fc-danger" id="fc-tryagain" aria-label="Mark as not known and advance">&#10007; Try again</button>
    <button class="fc-btn" id="fc-shuffle" aria-label="Shuffle cards">&#128256; Shuffle</button>
    <button class="fc-btn fc-primary" id="fc-next" aria-label="Next card">Next &rarr;</button>
  </div>
</div>

<script>
(function(){
  var STORAGE_KEY = 'certhub-26-Microsoft-Endpoint-Admin-flashcards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    // Parse Q/A pairs from rendered DOM. Look for <p> tags containing <strong>Q:</strong> / <strong>A:</strong> within the article body.
    // Strategy: scan the document body sequentially, tracking current section as we encounter <h2>.
    var container = app.parentNode;
    // Walk all relevant elements after the widget in document order
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = []; // collect <p> Q/A elements + their <h2> headings to hide later
    var node;
    while((node = walker.nextNode())){
      if(node.tagName === 'H2'){
        var h2text = (node.textContent || '').trim();
        if(h2text){
          currentSection = h2text;
          if(!seen[h2text]){ seen[h2text] = true; sections.push(h2text); }
          sourceEls.push(node);
        }
        pendingQ = null; pendingQEl = null;
        continue;
      }
      // <p> node
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
        // Strip leading "Q:" from full text
        var qBody = fullText.replace(/^Q:\s*/i, '').trim();
        pendingQ = { section: currentSection, q: qBody };
        pendingQEl = node;
        sourceEls.push(node);
      } else if(marker.indexOf('A:') === 0 && pendingQ){
        var aBody = fullText.replace(/^A:\s*/i, '').trim();
        pendingQ.a = aBody;
        cards.push(pendingQ);
        sourceEls.push(node);
        pendingQ = null; pendingQEl = null;
      }
    }
    if(cards.length === 0){
      document.getElementById('fc-question').textContent = 'No flashcards found. The source content is shown below.';
      return;
    }
    // Hide source markdown now that we have cards. Also hide separating <hr> between sections that follow Q/A blocks.
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    // Hide the leading H1 + intro blockquote? Keep them. Hide all <hr> within the article body that appear after our widget, they're section separators in the source list.
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      // Only hide hrs that come after the widget AND are between hidden sections
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
    // Also hide ordered/unordered lists and the closing H2s ("STUDY TIPS", "BEFORE THE EXAM") that follow the cards
    var allH2 = document.querySelectorAll('h2');
    allH2.forEach(function(h){ if(!h.classList.contains('fc-source-hidden') && h.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) h.classList.add('fc-source-hidden'); });
    var allOL = document.querySelectorAll('ol, ul');
    allOL.forEach(function(l){ if(l.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) l.classList.add('fc-source-hidden'); });
    var trailingP = document.querySelectorAll('p');
    trailingP.forEach(function(p){
      if(p.classList.contains('fc-source-hidden')) return;
      if(p.closest('.fc-app')) return;
      if(p.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) p.classList.add('fc-source-hidden');
    });
    var trailingBQ = document.querySelectorAll('blockquote');
    trailingBQ.forEach(function(bq){ if(bq.compareDocumentPosition(app) & Node.DOCUMENT_POSITION_PRECEDING) bq.classList.add('fc-source-hidden'); });

    // Build section dropdown
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });

    // Load known-card state
    var known = {};
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw) known = JSON.parse(raw) || {};
    } catch(e){ known = {}; }

    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }

    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';

    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0;
      render();
    }

    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0;
      render();
    }

    var cardEl = document.getElementById('fc-card');
    var qEl = document.getElementById('fc-question');
    var aEl = document.getElementById('fc-answer');
    var counterEl = document.getElementById('fc-counter');
    var progressBar = document.getElementById('fc-progress-bar');
    var knownFront = document.getElementById('fc-known-front');
    var knownBack = document.getElementById('fc-known-back');

    function render(){
      cardEl.classList.remove('fc-flipped');
      if(deck.length === 0){
        qEl.textContent = 'No cards in this section.';
        aEl.textContent = '';
        counterEl.textContent = 'Card 0 of 0';
        progressBar.style.width = '0%';
        knownFront.textContent = ''; knownBack.textContent = '';
        return;
      }
      if(idx < 0) idx = 0;
      if(idx >= deck.length) idx = deck.length - 1;
      var c = deck[idx];
      qEl.textContent = c.q;
      aEl.textContent = c.a;
      counterEl.textContent = 'Card ' + (idx + 1) + ' of ' + deck.length;
      var knownCount = deck.reduce(function(acc, cc){ return acc + (known[cardId(cc)] ? 1 : 0); }, 0);
      var pct = deck.length ? Math.round((knownCount / deck.length) * 100) : 0;
      progressBar.style.width = pct + '%';
      var mark = known[cardId(c)] ? '✓' : '';
      knownFront.textContent = mark; knownBack.textContent = mark;
    }

    function flip(){ cardEl.classList.toggle('fc-flipped'); }
    function next(){ if(deck.length === 0) return; idx = (idx + 1) % deck.length; render(); }
    function prev(){ if(deck.length === 0) return; idx = (idx - 1 + deck.length) % deck.length; render(); }
    function markKnown(val){
      if(deck.length === 0) return;
      var c = deck[idx];
      if(val) known[cardId(c)] = 1;
      else delete known[cardId(c)];
      saveKnown();
      next();
    }
    function resetProgress(){
      if(!confirm('Clear all "Got it" progress for this deck?')) return;
      known = {};
      saveKnown();
      render();
    }

    cardEl.addEventListener('click', flip);
    cardEl.addEventListener('keydown', function(e){
      if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); }
      else if(e.key === 'ArrowRight'){ e.preventDefault(); next(); }
      else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
    });
    document.getElementById('fc-next').addEventListener('click', next);
    document.getElementById('fc-prev').addEventListener('click', prev);
    document.getElementById('fc-got').addEventListener('click', function(){ markKnown(true); });
    document.getElementById('fc-tryagain').addEventListener('click', function(){ markKnown(false); });
    document.getElementById('fc-shuffle').addEventListener('click', shuffle);
    document.getElementById('fc-reset').addEventListener('click', resetProgress);
    sectionSel.addEventListener('change', function(){ sectionFilter = sectionSel.value; applyFilter(); });

    render();
  });
})();
</script>

# 🃏 MD-102 Endpoint Administrator Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Click a card to flip. Use the dropdown to filter by section. "Got it" marks the card as known and tracks your progress per device. Aim for daily review until the real exam.

---

## 🌐 SECTION 1: MODERN WORKPLACE & STRATEGY

**Q:** What are the three Microsoft Entra device join states for Windows 11?
**A:** Entra registered (BYOD, personal), Entra joined (cloud-only), and Microsoft Entra hybrid joined (on-prem AD (Active Directory) + Entra ID).

**Q:** What does Zero Trust assume about every request?
**A:** Never trust, always verify, explicit verification of identity, device, network location, and signal context for every access decision.

**Q:** Define MDM (Mobile Device Management) and MAM in one sentence each.
**A:** MDM = Mobile Device Management full enrollment and control of the device. MAM = Mobile Application Management protect corporate data inside specific apps without enrolling the device.

**Q:** Which join state is the right answer when "the device is corporate-owned and has no need for on-prem AD"?
**A:** Microsoft Entra joined (cloud-only).

**Q:** What is the canonical license for a fully managed Windows 11 endpoint in 2026?
**A:** Microsoft 365 E3 (or higher), includes Windows 11 Enterprise, Intune Plan 1, Entra ID P1, and Defender for Endpoint Plan 1.

**Q:** What is "Windows as a service" (WaaS)?
**A:** Microsoft's servicing model, continuous quality updates (monthly) and annual feature updates instead of multi-year OS releases.

**Q:** Why is "domain join only" a failing answer on modern MD-102 questions?
**A:** It cannot manage off-network devices, mobile devices, or BYOD; it depends on line-of-sight to a domain controller. Modern answers are Entra join + Intune.

---

## 💿 SECTION 2: WINDOWS 11 DEPLOYMENT

**Q:** Name the four Autopilot deployment modes.
**A:** Self-deploying, Pre-provisioned (white-glove), User-driven, and Autopilot for existing devices.

**Q:** Which Autopilot mode requires no user interaction at first boot?
**A:** Self-deploying, used for kiosks, digital signage, or shared devices. Requires TPM 2.0 attestation.

**Q:** What does "pre-provisioned" (white-glove) deployment do?
**A:** IT or the OEM does the heavy lifting (apps, policies) before the device ships; the user does a quick sign-in and a few-minute personalization phase.

**Q:** What hardware hash uniquely identifies a device to Autopilot?
**A:** The Windows Autopilot device hardware hash (a base64-encoded blob derived from TPM, motherboard, and other hardware identifiers).

**Q:** What's the right way to register OEM devices with Autopilot at scale?
**A:** Have the OEM (Dell, HP, Lenovo, Microsoft, etc.) register devices directly to your tenant via their CSP relationship, no manual hash collection.

**Q:** What is a provisioning package (.ppkg)?
**A:** A Windows Configuration Designer artifact applied at OOBE or to a running device to enroll, apply settings, and install apps, used for low-bandwidth or air-gapped scenarios.

**Q:** When do you still pick MDT or Configuration Manager OSD over Autopilot?
**A:** Custom on-prem imaging, complex driver matrices, ConfigMgr-managed environments, or devices that must image from PXE without internet.

**Q:** What's the difference between an in-place upgrade and a wipe-and-load?
**A:** In-place keeps user data, apps, and settings (uses the Windows setup engine). Wipe-and-load reimages clean, preferred for major architectural changes.

---

## ☁️ SECTION 3: INTUNE FUNDAMENTALS

**Q:** What is the Microsoft Intune service formally called as of 2024+?
**A:** Microsoft Intune (the family is Microsoft Intune Suite, Plan 1, Plan 2, and the Suite add-on).

**Q:** Which Intune plan adds Endpoint Privilege Management, Remote Help, and Advanced Endpoint Analytics?
**A:** Intune Plan 2 (also called Intune Plan 2 add-on or Intune Suite features).

**Q:** Which platforms does Intune MDM support?
**A:** Windows 10/11, iOS/iPadOS, Android (Enterprise and AOSP), macOS, and Linux (Ubuntu LTS for compliance + Edge management).

**Q:** What is the difference between Intune and Configuration Manager?
**A:** Intune is cloud-only MDM/MAM. Configuration Manager (formerly SCCM) is on-prem with cloud attach (co-management). Both can manage Windows endpoints.

**Q:** Which group type is best for dynamic device targeting (e.g., "all Windows 11 devices in the Finance department")?
**A:** Dynamic device groups in Entra ID with a membership rule (e.g., `device.deviceOSType -eq "Windows" -and device.deviceOSVersion -startsWith "10.0.22"`).

**Q:** What is an app protection policy (APP)?
**A:** A MAM policy that protects corporate data inside specific apps (Outlook, Teams, OneDrive), requires no enrollment. Controls cut/copy/paste, save-as, encryption, PIN.

**Q:** What does the Company Portal app do?
**A:** Provides users with self-service enrollment, app installs, device compliance status, and remote actions for their managed devices.

---

## 📲 SECTION 4: ENROLLMENT & COMPLIANCE

**Q:** What is Apple Business Manager (ABM) used for?
**A:** Apple's portal for assigning company-owned iOS/iPadOS/macOS devices to an MDM, purchasing Volume Purchased Program (VPP) apps, and managing Apple IDs.

**Q:** What are the four Android Enterprise enrollment scenarios?
**A:** Personally-owned with work profile (BYOD), Corporate-owned with work profile (COPE), Fully managed (corporate-only), and Dedicated (kiosk/COSU).

**Q:** Which enrollment scenario is used for shared-device kiosks on Android?
**A:** Android Enterprise Dedicated devices (also called COSU, Corporate Owned, Single Use).

**Q:** What does a compliance policy actually do?
**A:** Evaluates a device against rules (encryption, OS version, antivirus, jailbreak) and marks the device compliant or non-compliant, the result feeds Conditional Access.

**Q:** A device is non-compliant. What component actually blocks the user's sign-in?
**A:** Conditional Access, not Intune. Compliance is a signal; CA enforces it.

**Q:** What is device attestation in Windows 11?
**A:** TPM 2.0 + measured boot attesting the boot chain to Microsoft Azure Attestation Service; used as a compliance signal for "boot integrity."

**Q:** What is Conditional Access Filter for Devices?
**A:** A CA policy condition that lets you target or exclude devices by attribute (model, OS, ownership) without putting devices in groups.

---

## 📦 SECTION 5: APPLICATION DEPLOYMENT

**Q:** What file extension does an Intune Win32 app package use?
**A:** `.intunewin`, produced by `IntuneWinAppUtil.exe` wrapping an installer (EXE/MSI/script) and its dependencies.

**Q:** What is the difference between a Win32 app and a "line-of-business" (LOB) app in Intune?
**A:** LOB = MSI/APPX/IPA file uploaded directly (simple). Win32 = `.intunewin` package with custom install/uninstall commands, detection rules, dependencies, and supersedence.

**Q:** What is a detection rule for?
**A:** Tells Intune how to determine whether the app is installed (file/registry/MSI product code/PowerShell script). Without it, Intune cannot report install state.

**Q:** What is supersedence in Intune Win32 apps?
**A:** A relationship where a newer app version replaces an older one (with optional uninstall of the previous). Used for app upgrade chains.

**Q:** What is the modern Windows app packaging format that replaces .appx?
**A:** MSIX, a Windows 10+ universal app package supporting clean install/uninstall, modification packages, and Win32 wrapping.

**Q:** Which app deployment intent installs the app automatically without user input?
**A:** Required (for user or device groups). "Available" puts it in Company Portal for self-service.

**Q:** What does an app configuration policy do?
**A:** Pushes per-app settings (server URL, default mailbox, branding) to managed apps, works with both MDM and MAM channels.

---

## 🛡️ SECTION 6: ENDPOINT SECURITY

**Q:** What's the difference between Microsoft Defender for Endpoint Plan 1 and Plan 2?
**A:** Plan 1 = next-gen antivirus + ASR + web protection + device control. Plan 2 = Plan 1 + EDR (Endpoint Detection and Response) + Threat & Vulnerability Management + Advanced Hunting + auto-investigation.

**Q:** What is an Attack Surface Reduction (ASR) rule?
**A:** A Defender for Endpoint rule that blocks specific malicious behaviors (Office child processes, credential theft, obfuscated scripts). Available in Audit, Block, or Warn mode.

**Q:** Which two ASR modes are deployable, and what's the trade-off?
**A:** Audit (logs but allows, for testing), Block (enforces). Warn is a third mode that prompts the user with a one-time bypass.

**Q:** What is BitLocker, and what does Intune's "silent enable" policy do?
**A:** BitLocker = full-disk encryption (XTS-AES (Advanced Encryption Standard) 128/256). Silent enable encrypts the OS drive and escrows the recovery key to Entra ID without user prompts.

**Q:** Where are BitLocker recovery keys stored when escrowed by Intune?
**A:** Microsoft Entra ID, on the device object. Admins can retrieve via Intune portal, Entra portal, or Microsoft Graph.

**Q:** What does EDR in block mode do?
**A:** Microsoft Defender for Endpoint blocks malicious artifacts even when a third-party antivirus is the primary AV, passive Defender + active EDR enforcement.

**Q:** What is Microsoft Defender for Cloud Apps (formerly MCAS)?
**A:** Microsoft's cloud access security broker (CASB), discovers shadow IT, controls SaaS (Software as a Service) apps, and integrates with Defender for Endpoint device signals.

---

## 🔄 SECTION 7: WINDOWS UPDATE

**Q:** What is Windows Update for Business (WUfB)?
**A:** Microsoft's free service that lets you defer and manage Windows quality/feature/driver updates via policy (Intune or Group Policy). No update content servers needed.

**Q:** Name the three update categories WUfB controls separately.
**A:** Feature updates (annual), Quality updates (monthly cumulative), and Driver updates.

**Q:** What is the recommended update ring topology?
**A:** Pilot (small, 0-day deferral) → Broad (most users, 7-day deferral) → Deferred (sensitive workloads, 14–30 day deferral). Sometimes a fourth "Critical" ring with longer deferral.

**Q:** What is an expedited update?
**A:** A WUfB action that pushes a specific quality update outside the normal ring schedule when a zero-day requires immediate patching.

**Q:** What is Delivery Optimization?
**A:** Microsoft's peer-to-peer content delivery for Windows updates and Intune apps, devices fetch from peers on the same LAN (Local Area Network) before pulling from Microsoft.

**Q:** When does a Windows 11 feature update reach end of servicing?
**A:** 24 months from release for Home/Pro (24H2 example: October 2024 → October 2026), 36 months for Enterprise/Education.

**Q:** What replaces WSUS for cloud-managed devices?
**A:** Windows Update for Business + Delivery Optimization. WSUS still exists but is being deprecated in favor of WUfB for cloud-managed scenarios.

---

## 📊 SECTION 8: MONITORING & TROUBLESHOOTING

**Q:** What is Endpoint analytics?
**A:** An Intune feature surfacing device performance scores: Startup performance, Application reliability, Work-from-anywhere, Resource performance, and Battery health.

**Q:** What are proactive remediations?
**A:** Pairs of PowerShell scripts a detection script and a remediation script that automatically detect and fix problems across your fleet. Requires Intune Plan 2.

**Q:** Where do you go in the Intune portal to see why a device failed enrollment?
**A:** Devices → Monitor → Enrollment failures, or Troubleshooting + support → Troubleshoot blade for a per-user view.

**Q:** What is the MDM diagnostics report on Windows 11?
**A:** A built-in report (`Settings → Accounts → Access work or school → Info → Create report`) that dumps every MDM policy and its source, invaluable for conflict troubleshooting.

**Q:** Which Intune report shows policy conflicts on a device?
**A:** Devices → [device] → Device configuration (or Per-setting state), which flags settings where two policies disagree.

**Q:** What's the canonical first step when an app shows "Failed" in Intune?
**A:** Check the detection rule. The most common cause is a detection rule that never returns true, the app actually installed but Intune can't tell.

**Q:** What logs the Autopilot deployment flow on a Windows 11 device?
**A:** `Settings → Accounts → Access work or school → Info → Export your management log files` produces an MDMDiagnostics zip including Autopilot ETW traces.

---

## 🧠 STUDY TIPS

1. **Build a test tenant.** A free Microsoft 365 E5 developer tenant lasts 90 days and renews. Enroll a real device or a Hyper-V VM (Virtual Machine) and click through every screen the exam describes.
2. **Drill the four Autopilot modes.** Self-deploying / pre-provisioned / user-driven / for-existing-devices, be able to name the use case, license requirement, and limitations for each.
3. **Memorize the licensing matrix.** Which features need Intune Plan 1, Plan 2, Entra ID P1, P2, or M365 E3/E5. The exam asks license-by-feature questions every form.
4. **Practice with the Company Portal.** Many "what does the user see" questions are unbluffable if you've never opened the Company Portal app.

---

## ✅ BEFORE THE EXAM

- [ ] Walk through 1 full Autopilot user-driven enrollment in a test tenant
- [ ] Enroll a Windows + iOS + Android device into Intune
- [ ] Build 3 update rings (Pilot/Broad/Deferred) and assign by group
- [ ] Package a Win32 app and deploy with a detection rule
- [ ] Build a compliance policy and a Conditional Access policy that uses it
- [ ] Pull an MDM diagnostics report from your own device
- [ ] Take Final-Mock-Exam in one sitting under exam conditions
