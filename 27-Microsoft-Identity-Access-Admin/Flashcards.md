<style>
.fc-app{font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:760px;margin:1.5rem auto 2.5rem;padding:1.25rem;background:#fff;border-radius:14px;box-shadow:0 6px 24px rgba(99,102,241,.10),0 2px 6px rgba(0,0,0,.04);border:1px solid #eef0fb;color:#1f2937}
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
  var STORAGE_KEY = 'certhub-27-Microsoft-Identity-Access-Admin-flashcards';
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

# 🃏 SC-300 Identity & Access Admin Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Copy into Anki, Quizlet, or paper flashcards. Aim for daily review until the real exam.

---

## 🪪 SECTION 1: ENTRA ID FUNDAMENTALS

**Q:** What was Microsoft Entra ID called before mid-2023?
**A:** Azure Active Directory (Azure AD). Microsoft rebranded but the exam may still use the old term, they mean the same service.

**Q:** Name the four Entra ID editions.
**A:** Free, Microsoft Entra ID P1, Microsoft Entra ID P2, Microsoft Entra External ID (formerly Azure AD B2C).

**Q:** Which Entra ID edition is the minimum required for Conditional Access?
**A:** P1.

**Q:** Which Entra ID edition is required for Identity Protection and PIM?
**A:** P2.

**Q:** What is a tenant in Entra ID?
**A:** A dedicated, isolated instance of the Entra ID directory representing your organization, your identity boundary.

**Q:** Format of the default Entra tenant domain?
**A:** `<yourorg>.onmicrosoft.com` (cannot be deleted, cannot be renamed).

**Q:** How many custom domains can you verify on one tenant?
**A:** Up to 5,000 verified custom domains per tenant.

**Q:** Difference between directory (Entra) roles and Azure RBAC roles?
**A:** Entra roles control Entra ID resources (users, groups, apps); Azure RBAC roles control Azure resources (VMs, storage). Different scope, sometimes similar names.

**Q:** What does Entra ID B2B let you do?
**A:** Invite external users (partners, vendors) as guests using their existing identity provider. They appear in your directory as guest user objects.

**Q:** What does Entra External ID (formerly B2C) do?
**A:** Hosts consumer-facing identities in a separate Entra External ID tenant, with custom sign-up/sign-in flows and social IdP integration.

**Q:** Can the Tenant Root Group's name be changed?
**A:** The tenant itself is named at creation and only the friendly tenant name can be updated; the initial `*.onmicrosoft.com` domain is permanent.

---

## 👤 SECTION 2: USERS, GROUPS & EXTERNAL IDENTITIES

**Q:** Three Entra user types?
**A:** Member (internal), Guest (B2B invited), and External member (cross-tenant collaboration with member-like permissions).

**Q:** Sign-in name (UPN) format of a B2B guest from `partner.com`?
**A:** `alice_partner.com#EXT#@yourtenant.onmicrosoft.com`.

**Q:** What is `userType` on a guest user?
**A:** `Guest` (vs `Member` for internal users). Used in dynamic group rules and CA policies.

**Q:** Two Entra group types?
**A:** Security groups (for RBAC/CA targeting) and Microsoft 365 groups (for collaboration with mailbox/SharePoint/Teams).

**Q:** Three group membership types?
**A:** Assigned (manual), Dynamic User (rule on user attributes), Dynamic Device (rule on device attributes).

**Q:** Which license tier is required for dynamic groups?
**A:** Entra ID P1.

**Q:** Example dynamic membership rule for all Sales users?
**A:** `(user.department -eq "Sales")`.

**Q:** What does group-based licensing let you do?
**A:** Assign a license SKU to a group; members automatically inherit and lose the license as they join/leave the group.

**Q:** What is entitlement management used for?
**A:** Lets non-admins request bundles of access (an access package) groups, apps, SharePoint sites with approval workflows and time bounds. P2 feature.

**Q:** What is a Terms of Use document in Entra ID?
**A:** A PDF you can require users (or specific groups/apps) to accept at sign-in via a Conditional Access policy. Acceptance is logged for audit.

**Q:** How do you bulk-import users to Entra ID?
**A:** Upload a CSV in the Entra portal's "Bulk create" tool, or use Microsoft Graph PowerShell `New-MgUser` in a loop.

**Q:** Difference between an assigned group and a dynamic group for license assignment?
**A:** Both can hold the license. Dynamic auto-adjusts membership from attributes; assigned needs manual changes, but license processing time is the same.

---

## 🔑 SECTION 3: AUTHENTICATION (MFA & PASSWORDLESS)

**Q:** Define "passwordless" in Entra terms.
**A:** A sign-in method that doesn't require a password at all, FIDO2 keys, Windows Hello for Business, Microsoft Authenticator phone sign-in, or certificate-based authentication.

**Q:** Three Microsoft-supported passwordless methods?
**A:** FIDO2 security keys, Windows Hello for Business, Microsoft Authenticator phone sign-in (Authenticator app passkey).

**Q:** Where do you control which methods users can register, in 2026?
**A:** The unified **Authentication methods policy** (Entra portal → Security → Authentication methods). Legacy MFA & SSPR policies are being deprecated.

**Q:** Difference between Security Defaults and Conditional Access?
**A:** Security Defaults = on/off baseline (free, enforces MFA on admins + risky sign-ins). CA = granular, customizable per user/app/condition (requires P1+).

**Q:** What is combined registration?
**A:** A single user experience to register MFA *and* SSPR methods together (Microsoft Authenticator, phone, email, FIDO2). Now the default for all tenants.

**Q:** When was number-matching enabled by default in Microsoft Authenticator?
**A:** February 2023, Microsoft enabled it for all tenants to mitigate MFA-fatigue push-bombing.

**Q:** What does the Temporary Access Pass (TAP) do?
**A:** A time-bounded passcode an admin issues so a user can register passwordless methods (e.g. a new FIDO2 key) without ever entering a password.

**Q:** Two authentication strengths Microsoft ships out of the box?
**A:** "Multifactor authentication" (any MFA), "Passwordless MFA", and "Phishing-resistant MFA" (FIDO2 / Windows Hello / certificate-based).

**Q:** What is certificate-based authentication (CBA) used for?
**A:** Cloud-native authentication using X.509 certificates, required for FedRAMP High / DoD scenarios where smart cards replace passwords.

**Q:** What is SSPR (Self-Service Password Reset)?
**A:** Lets users reset their own forgotten passwords using registered methods (e.g. Authenticator, phone). Requires P1 for cloud users and `M365 Apps for business` or P1 for synced users.

---

## 🛡️ SECTION 4: CONDITIONAL ACCESS & IDENTITY PROTECTION

**Q:** Three components of a Conditional Access policy?
**A:** Assignments (who/what), Conditions (signals like risk, device, location), and Access controls (grant or block, with controls like MFA, compliant device).

**Q:** What is "report-only" mode?
**A:** A CA policy state where the policy is evaluated and logged but not enforced, safe way to test before turning it on.

**Q:** What does a "named location" do in Conditional Access?
**A:** Defines IP ranges or countries as a named entity (e.g. "Corporate HQ"). Used in policy conditions to trigger or exclude controls.

**Q:** Which Microsoft-published baseline CA policy do they recommend everyone enable?
**A:** "Require MFA for all admins" (Microsoft Conditional Access templates ship 14+ recommended baseline policies as of 2026).

**Q:** Two main risk types in Identity Protection?
**A:** User risk (account is suspected compromised) and Sign-in risk (this specific sign-in looks suspicious).

**Q:** What license is required for Identity Protection?
**A:** Entra ID P2.

**Q:** What is "session control" in Conditional Access?
**A:** Modifies the session after sign-in, e.g. sign-in frequency, app-enforced restrictions, persistent browser session, Defender for Cloud Apps proxy.

**Q:** What does CA block by default when configured to "block legacy authentication"?
**A:** Older auth protocols (POP, IMAP, SMTP AUTH, MAPI, Exchange Online PowerShell pre-modernauth) that don't support MFA, the most common attack vector.

**Q:** How do you safely exclude break-glass accounts from CA?
**A:** Create 2 cloud-only accounts with long unique passwords, store them in a sealed envelope/vault, and add them to "Exclude" on every CA policy.

**Q:** Which Identity Protection risk policy automatically forces a password change?
**A:** User risk policy with "Require password change" as the access control (typically at High user risk).

**Q:** What does the "What If" tool in CA do?
**A:** Simulates which policies would apply to a hypothetical user/app/condition combination, used to verify policy design before deploying.

---

## 🔗 SECTION 5: APPLICATIONS & SSO

**Q:** Difference between an "App Registration" and an "Enterprise App"?
**A:** App Registration = the application's definition (the manifest, redirect URIs, secrets, API permissions) in your home tenant. Enterprise App = the service principal, the local instance/identity of the app in each tenant that uses it.

**Q:** Three SSO protocols Entra supports for SaaS apps?
**A:** OpenID Connect (OIDC), SAML 2.0, WS-Federation.

**Q:** Which auth protocol does a modern web/SPA app typically use?
**A:** OpenID Connect (OIDC) on top of OAuth 2.0. SAML is more common for legacy enterprise SaaS.

**Q:** What is Microsoft Entra Application Proxy?
**A:** Publishes on-premises web apps to the internet through Entra ID without opening firewall ports, uses a lightweight connector on a Windows Server inside the corporate network.

**Q:** Difference between user consent and admin consent?
**A:** User consent lets individual users grant the app delegated permissions to their data. Admin consent is required for app permissions (no user context) or any permission flagged as "admin-only," and applies tenant-wide.

**Q:** What is the admin consent workflow?
**A:** Lets users request admin consent in-app; the request lands in a queue admins approve from the Entra portal. Replaces the old "ask your IT admin via email" pattern.

**Q:** What is an app role?
**A:** A custom role string declared in the app's manifest (e.g. "Manager", "Approver"). Assigned to users or groups in Enterprise Apps; surfaced as `roles` claim in the token.

**Q:** What is a scope (in OAuth/OIDC)?
**A:** The granular permission an app requests, e.g. `User.Read`, `Files.ReadWrite`. Comes either as delegated (acts on behalf of user) or application (acts as the app itself).

**Q:** Where do you turn off the legacy "user consent for all apps" setting?
**A:** Entra portal → Enterprise applications → Consent and permissions → User consent settings → "Do not allow user consent" (or restrict to verified publishers).

**Q:** What are reply URLs / redirect URIs?
**A:** The URLs Entra is allowed to redirect tokens back to after sign-in. Must exactly match what the app sends in its authorization request.

---

## 🛂 SECTION 6: GOVERNANCE & PIM

**Q:** What does Privileged Identity Management (PIM) do?
**A:** Turns "always on" admin role assignments into "eligible, activate just-in-time, with MFA, optional approval, and a time limit." Records every activation for audit.

**Q:** Two kinds of role assignments in PIM?
**A:** Eligible (must activate JIT) and Active (always assigned, optionally time-bound).

**Q:** What license is required for PIM?
**A:** Entra ID P2.

**Q:** Default max activation duration for an Entra role in PIM?
**A:** 8 hours (configurable per role; up to 24 with permanent active disabled).

**Q:** What are access reviews used for?
**A:** Periodically asking reviewers (admins, the user, or the user's manager) whether someone still needs their role, group membership, or app access. Auto-removes if no response or denied.

**Q:** What can you target with an access review?
**A:** Group membership, app assignment, Entra role assignment, Azure RBAC role assignment, access package assignment, and PIM-eligible/active role assignments.

**Q:** What is an access package in entitlement management?
**A:** A bundle of resources (groups, apps, SharePoint sites) that internal or external users can request via a self-service portal. Includes approval, time-bound assignments, and access reviews.

**Q:** What is a catalog in entitlement management?
**A:** A container of resources and access packages, scoped to a business unit. Catalog owners delegate without granting Entra admin rights.

**Q:** What is a Lifecycle Workflow?
**A:** Automates joiner/mover/leaver scenarios, e.g. on hire, run "send welcome email + add to default groups + generate TAP." On leave, "remove from all groups + disable account + revoke sessions."

**Q:** When does a Lifecycle Workflow trigger?
**A:** Scheduled (daily) against attribute changes (`employeeHireDate`, `employeeLeaveDateTime`) or on-demand by an admin.

---

## 🌉 SECTION 7: HYBRID IDENTITY

**Q:** Two main hybrid identity sync products from Microsoft?
**A:** Microsoft Entra Connect (legacy, Windows Server agent, formerly Azure AD Connect) and Microsoft Entra Cloud Sync (newer, lighter, agent-based, cloud-driven config).

**Q:** Three Entra authentication topologies for hybrid?
**A:** Password Hash Sync (PHS), Pass-Through Authentication (PTA), and Federation (AD FS or third-party).

**Q:** What does Password Hash Sync send to the cloud?
**A:** A hash of a hash of the user's on-prem password (so even Microsoft cannot reverse it to the real password). Authentication happens in the cloud.

**Q:** What does Pass-Through Authentication (PTA) do?
**A:** Forwards the password validation request to an on-prem agent that validates it against AD. Password never leaves the on-prem domain.

**Q:** What is Seamless SSO?
**A:** Silently signs corporate-network users into Entra-integrated apps using Kerberos against a computer account (`AZUREADSSOACC`), no UPN re-entry. Works with PHS and PTA.

**Q:** Difference between Entra Connect Sync and Entra Cloud Sync?
**A:** Connect Sync = full-featured, complex topologies, Windows Server install. Cloud Sync = lightweight agent, multi-forest with no trust required, config in the cloud, simpler, but fewer features (no device write-back, fewer attribute customizations).

**Q:** Four write-back features Entra Connect supports?
**A:** Password write-back (SSPR changes flow to AD), Group write-back, Device write-back (legacy), Attribute write-back (user attribute writeback from Entra to AD).

**Q:** What is Hybrid Entra Join?
**A:** A device joined to on-prem AD that's also registered to Entra ID, enabling Conditional Access and Intune on AD-joined devices.

**Q:** What does the staging server in Entra Connect do?
**A:** A second Connect installation in staging mode, receives changes but doesn't export to AD/Entra. Used for HA/upgrade testing; promote it to active in case of primary failure.

**Q:** How do you filter which OUs sync to Entra ID?
**A:** Entra Connect Configuration Wizard → Domain and OU filtering → select only the OUs to sync. (Cloud Sync: per-scoping filter on the provisioning config.)

---

## 📊 SECTION 8: MONITORING & THREATS

**Q:** Three primary Entra ID log types?
**A:** Sign-in logs, Audit logs, and Provisioning logs.

**Q:** Default retention of Entra sign-in/audit logs?
**A:** 7 days for Free, 30 days for P1/P2. Longer retention requires forwarding to Log Analytics or a storage account.

**Q:** Where do you send Entra logs for long-term retention and KQL querying?
**A:** Configure Diagnostic Settings → send to Log Analytics workspace (KQL), an Event Hub (downstream SIEM), or a storage account (archive).

**Q:** What is KQL?
**A:** Kusto Query Language, Microsoft's pipe-style query language used in Log Analytics, Sentinel, Defender, and Resource Graph.

**Q:** Example KQL to find failed sign-ins in the last hour?
**A:** `SigninLogs | where TimeGenerated > ago(1h) | where ResultType != 0 | summarize count() by UserPrincipalName, ResultType`.

**Q:** What is Identity Secure Score?
**A:** A 0–100% score Microsoft calculates from your identity configuration (MFA registration, legacy auth blocked, admin counts, etc.) with prescriptive improvement actions.

**Q:** What is Microsoft Defender for Identity (formerly ATP)?
**A:** Agent-based detection on Domain Controllers and AD FS servers, detects on-prem attacks (Golden Ticket, DCSync, lateral movement) and reports to the Defender XDR portal.

**Q:** Why use break-glass accounts?
**A:** Insurance against a tenant-wide lockout caused by misconfigured CA, expired admin MFA, or compromised federation. 2 cloud-only Global Admins, no MFA via federated method, vaulted credentials.

**Q:** Microsoft's recommended count and protection for break-glass accounts?
**A:** Exactly 2 accounts, cloud-only (no sync), excluded from ALL CA policies, monitored with a SignInLogs alert on every use, password split across two safes.

**Q:** What's the right tool for tenant-wide identity threat hunting?
**A:** Microsoft Sentinel, ingest SigninLogs + AuditLogs + Defender alerts, run analytics rules + UEBA, and build SOAR playbooks.

---

## ⚙️ SECTION 9: LICENSING CHEAT-MATRIX

**Q:** Minimum license for Conditional Access?
**A:** Entra ID P1.

**Q:** Minimum license for Identity Protection (risk-based CA)?
**A:** Entra ID P2.

**Q:** Minimum license for Privileged Identity Management (PIM)?
**A:** Entra ID P2.

**Q:** Minimum license for entitlement management + access packages?
**A:** Entra ID P2 (Microsoft Entra ID Governance SKU for full Lifecycle Workflows + custom extensions).

**Q:** Minimum license for dynamic groups & group-based licensing?
**A:** Entra ID P1.

**Q:** Minimum license for self-service password reset (synced users)?
**A:** Entra ID P1.

**Q:** What does "Microsoft Entra ID Governance" SKU add beyond P2?
**A:** Lifecycle Workflows, custom extensions/Logic Apps in entitlement management, machine-learning recommendations for access reviews.

**Q:** Does Microsoft 365 E3 include Entra ID P1?
**A:** Yes, E3 includes Entra ID P1; E5 includes Entra ID P2 + Identity Protection + PIM + entitlement management.

---

## 🚨 SECTION 10: COMMON EXAM TRAPS

**Q:** Trap: A user complains MFA pops up on every sign-in. What's likely wrong?
**A:** A Conditional Access policy has "Sign-in frequency = Every time" set. Lower it (e.g. 7 days) or disable that session control.

**Q:** Trap: You disabled Security Defaults to roll out custom CA. What must you confirm?
**A:** That you've replaced *every* protection Security Defaults gave you, MFA registration, legacy auth block, MFA for admins, MFA for risky sign-ins.

**Q:** Trap: A guest user can't see an app you assigned them. What's the most common cause?
**A:** "Assignment required" is enabled on the Enterprise App but the guest was added directly to the user; or the user hasn't completed the B2B invitation redemption.

**Q:** Trap: PIM activation fails with "Approval required" but the user is in the approvers list.
**A:** A user cannot self-approve a PIM activation. Assign at least one other approver, or use auto-approval with MFA + justification.

**Q:** Trap: You enabled FIDO2 in Authentication methods but a user can't register a key.
**A:** Check method policy targeting (must include the user/group); ensure passkey/registration is enabled at tenant level; FIDO2 sign-in surface is enabled in CA.

**Q:** Trap: All policy and groups look correct but a user sees no apps in MyApps.
**A:** The user is a guest and "external collaboration settings" restrict guest access to directory, or the apps are user-assigned and the guest wasn't added.

**Q:** Trap: SAML SSO fails with "Audience URI mismatch."
**A:** The SAML response `Audience` (entity ID) doesn't match what the app expects, fix the Entity ID in the Entra Enterprise App SAML SSO config.

**Q:** Trap: Entra Connect won't install, "Insufficient privileges."
**A:** The setup account needs Enterprise Admin in on-prem AD AND Global Administrator (or Hybrid Identity Administrator) in Entra ID for first-time install.

**Q:** Trap: A break-glass account is locked out after you enable strong CA policies.
**A:** Break-glass accounts must be **excluded** from every CA policy, including the "require MFA for admins" one. They're insurance; CA must not gate them.

---

## 📚 STUDY TIPS

- Build cards from your wrong answers in Quizzes 1–8, they target your real weaknesses.
- Review 20 cards/day starting Week 1, spaced repetition beats cramming.
- Star the License Matrix cards, they alone are worth 5–7 exam questions.
- Whenever you read a Microsoft doc page that names a portal blade, add a flashcard: "Where do you configure X?"

## 🎯 BEFORE THE EXAM

- Re-read the License Cheat-Matrix the night before.
- Re-read the Break-Glass + Conditional Access exclusion rules.
- Re-read the B2B vs External ID comparison.
- Sleep 8 hours. Eat. Show up early.
