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
  var STORAGE_KEY = 'fc-progress-secplus';
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

# 🃏 CompTIA Security+ Master Flashcards

> **How to use:** Each card has a Q on one line and A on the next. The interactive widget above will display them; filter by section, mark "Got it" to track progress, and shuffle for retrieval practice. Aim for daily review until the real exam. Total: 130+ cards across 10 sections matching the modules.

---

## 📦 SECTION 1: SECURITY FUNDAMENTALS

**Q:** What are the 3 letters of the CIA triad?
**A:** Confidentiality, Integrity, Availability.

**Q:** Which CIA property does ransomware MOST directly violate?
**A:** Availability (and Confidentiality if data is also exfiltrated).

**Q:** What is non-repudiation, and how is it achieved?
**A:** A sender cannot deny sending a message. Achieved via digital signatures using the sender's private key.

**Q:** Define AAA.
**A:** Authentication, Authorization, Accounting.

**Q:** Identification vs Authentication vs Authorization?
**A:** Identification = claim; Authentication = prove the claim; Authorization = decide what you can do.

**Q:** Name the 3 Zero Trust control-plane components.
**A:** Policy Engine, Policy Administrator, Adaptive Identity (plus Threat Scope Reduction, Policy-Driven Access Control).

**Q:** Which Zero Trust component physically allows/blocks the request?
**A:** Policy Enforcement Point (PEP), lives in the data plane.

**Q:** What is Adaptive Identity?
**A:** Risk-based authentication using signals (device, location, time, behavior) to dial up/down challenge.

**Q:** Name the 4 control TYPES.
**A:** Technical, Managerial, Operational, Physical.

**Q:** Name the 6 control CATEGORIES.
**A:** Preventive, Deterrent, Detective, Corrective, Compensating, Directive.

**Q:** Difference between a Preventive and a Deterrent control?
**A:** Preventive physically stops the event; Deterrent discourages the attacker from acting in the first place.

**Q:** What is a compensating control?
**A:** An alternative control used when the primary control isn't feasible (e.g., extra logging on a legacy system that can't be patched).

**Q:** What is a gap analysis?
**A:** Comparing the current security posture to a target framework (e.g., ISO 27001) to identify shortfalls.

**Q:** Who typically approves a high-risk production change?
**A:** The Change Advisory Board (CAB).

**Q:** What is a backout plan and when is it written?
**A:** A documented procedure to revert a change if it fails, written BEFORE the change is deployed.

---

## 📦 SECTION 2: CRYPTOGRAPHY & PKI

**Q:** Which symmetric algorithm is today's industry default?
**A:** AES, typically AES-256-GCM for authenticated encryption.

**Q:** Symmetric vs asymmetric, which is faster and used for bulk data?
**A:** Symmetric. Asymmetric is too slow for bulk; used for key exchange + signatures.

**Q:** What is Perfect Forward Secrecy and which key exchanges provide it?
**A:** Past traffic stays safe even if the long-term private key leaks. Provided by ephemeral key exchanges (DHE, ECDHE).

**Q:** Which key signs a digital signature?
**A:** The sender's PRIVATE key.

**Q:** Which key verifies a digital signature?
**A:** The sender's PUBLIC key.

**Q:** Which key encrypts a confidential message for a recipient?
**A:** The RECIPIENT'S PUBLIC key.

**Q:** Which 4 algorithms are appropriate for password hashing?
**A:** bcrypt, scrypt, PBKDF2, Argon2.

**Q:** What does a salt do in password hashing?
**A:** Adds random per-user data so identical passwords don't hash identically and rainbow tables don't work.

**Q:** What's the difference between PEM, DER, PKCS#7, PKCS#12?
**A:** PEM = base64 text; DER = binary; PKCS#7 = cert chain (no key); PKCS#12 = cert + key + chain, password-protected.

**Q:** What's the difference between a SAN cert and a wildcard cert?
**A:** SAN covers multiple specific hostnames listed; wildcard `*.example.com` covers any single-label subdomain.

**Q:** What does OCSP stapling do?
**A:** Server pre-fetches the OCSP response and attaches it to TLS so the client doesn't need to query the CA.

**Q:** Where does a Root CA's private key ideally live?
**A:** Offline (only used to sign intermediates), often in an HSM.

**Q:** What is an HSM?
**A:** Hardware Security Module, tamper-resistant device for generating and storing cryptographic keys (FIPS 140-2/3 validated).

**Q:** What is tokenization?
**A:** Replacing sensitive data with a non-sensitive reference; only a vault lookup recovers the original. No mathematical relation between token and original.

**Q:** What is steganography?
**A:** Hiding data inside other data (e.g., a message in image pixel data).

**Q:** Why is Base64 not encryption?
**A:** It's reversible by anyone, Base64 is encoding for safe transport, not security.

---

## 📦 SECTION 3: IDENTITY & ACCESS MANAGEMENT

**Q:** Name the 5 authentication factors.
**A:** Something you know, have, are, do, and where you are.

**Q:** Is password + PIN MFA?
**A:** No, both are "something you know."

**Q:** What MFA method is phishing-resistant?
**A:** FIDO2 / WebAuthn / passkeys, hardware tokens with origin binding.

**Q:** TOTP vs HOTP?
**A:** TOTP rotates on a clock (every ~30 sec); HOTP increments per-use (counter-based).

**Q:** SAML vs OAuth vs OIDC?
**A:** SAML = XML web SSO; OAuth = authorization (delegated access); OIDC = authentication via JWT id_token on top of OAuth.

**Q:** Which protocol uses TCP 49 and separates AuthN from AuthZ?
**A:** TACACS+.

**Q:** Which protocol uses UDP 1812/1813 for network AAA?
**A:** RADIUS.

**Q:** What does Kerberos require to function (timing-wise)?
**A:** Time synchronization across hosts (≤5 minute skew by default).

**Q:** What is the Kerberos TGT issued by?
**A:** The AS (Authentication Service) inside the KDC.

**Q:** LDAPS port?
**A:** 636 (LDAP is 389).

**Q:** DAC vs MAC?
**A:** DAC: object owner decides (Unix/Windows files). MAC: system enforces based on labels (military clearance).

**Q:** RBAC vs ABAC?
**A:** RBAC: permissions per role, users get roles. ABAC: dynamic decisions based on user/resource/environment attributes.

**Q:** What is JIT (Just-in-Time) access?
**A:** Privilege granted on request for a limited time window then auto-revoked. Reduces standing privilege.

**Q:** Name 3 core PAM capabilities.
**A:** Password vaulting + credential injection, session recording, JIT/ephemeral credentials.

**Q:** What is SCIM?
**A:** System for Cross-domain Identity Management, standard for automated user provisioning/deprovisioning across systems.

**Q:** What does NIST 800-63B say about periodic password rotation?
**A:** Do NOT force rotation absent evidence of compromise.

**Q:** What is MFA fatigue (push bombing)?
**A:** Attacker bombards a user with push prompts hoping they'll approve one by mistake.

---

## 📦 SECTION 4: THREATS & THREAT ACTORS

**Q:** What is an APT?
**A:** Advanced Persistent Threat, typically a nation-state actor with long-term, low-noise persistence and significant resources.

**Q:** What motivates a hacktivist?
**A:** Philosophical / political beliefs.

**Q:** What motivates organized crime?
**A:** Financial gain (often ransomware, BEC, fraud).

**Q:** Insider threat: malicious vs negligent?
**A:** Malicious = intentional harm. Negligent = unintentional (misconfiguration, accidental data leak).

**Q:** What is shadow IT?
**A:** Unsanctioned tech use by employees that bypasses procurement/security review, risk is loss of visibility.

**Q:** Was SolarWinds a phishing attack or supply-chain attack?
**A:** Supply-chain attack, trojanized Orion update delivered via legitimate update channel.

**Q:** What is the dark web used for in threat intel?
**A:** Marketplace where stolen credentials, exploit kits, and RaaS services are bought/sold.

**Q:** What is an ISAC?
**A:** Information Sharing & Analysis Center, industry-specific intel sharing org (FS-ISAC for finance, H-ISAC for health, etc.).

**Q:** What is STIX/TAXII?
**A:** STIX = data format for structured threat intel. TAXII = transport protocol. Standards for sharing IOCs.

**Q:** What is CISA AIS?
**A:** Automated Indicator Sharing, free US government-curated threat feed.

**Q:** IOC vs IOA?
**A:** IOC = Indicator of Compromise (artifact of past compromise: IP, hash). IOA = Indicator of Attack (behavior in progress).

**Q:** What does MITRE ATT&CK catalog?
**A:** Adversary Tactics, Techniques, and Procedures (TTPs).

---

## 📦 SECTION 5: VULNERABILITIES & ATTACKS

**Q:** Worm vs virus vs Trojan?
**A:** Worm self-replicates over networks without user action. Virus attaches to host file, needs user interaction. Trojan disguised as legit software, doesn't self-replicate.

**Q:** What is double-extortion ransomware?
**A:** Encrypts files AND exfiltrates data, threatening to leak if unpaid.

**Q:** What is a logic bomb?
**A:** Malware triggered by a specific condition (date, event, absence from payroll).

**Q:** What is fileless malware?
**A:** Malware that lives in memory/registry only, often using PowerShell / WMI / built-in tools, no disk file to scan.

**Q:** Best defense against SQL injection?
**A:** Parameterized queries / prepared statements.

**Q:** Stored XSS vs Reflected XSS?
**A:** Stored = malicious script saved on the server (e.g., forum post), runs for every viewer. Reflected = script in URL, runs when victim clicks the link.

**Q:** What does SSRF stand for and what's the typical target?
**A:** Server-Side Request Forgery, attacker makes the server fetch internal URLs (often cloud metadata at 169.254.169.254).

**Q:** What does CSRF do?
**A:** Tricks an authenticated victim's browser into making a request to the target app (state-changing). Defense: CSRF tokens + SameSite cookies.

**Q:** What is directory traversal?
**A:** Using `../` patterns to escape the web root and read arbitrary files (e.g., `/etc/passwd`).

**Q:** What is TOCTOU?
**A:** Time-Of-Check vs Time-Of-Use, a race condition between when a value is checked and when it's used.

**Q:** SYN flood, what does it exhaust?
**A:** The TCP half-open connection table on the target.

**Q:** What is DNS amplification?
**A:** Attack using spoofed source IPs + DNS servers returning responses much larger than the query, small input, huge output.

**Q:** Sec+ replacement term for MITM?
**A:** On-path attack.

**Q:** Rogue AP vs evil twin?
**A:** Rogue AP = any unauthorized AP. Evil twin = AP impersonating a legitimate SSID with a stronger signal.

**Q:** Brute force vs dictionary vs spraying vs stuffing?
**A:** Brute = try everything against one user. Dictionary = likely words against one user. Spraying = one password against many users (avoids lockout). Stuffing = breach-credentials reused across services.

**Q:** Pass-the-Hash, why does it work?
**A:** Windows NTLM authentication accepts the hash directly; you don't need the plaintext password.

**Q:** Vishing vs smishing vs phishing?
**A:** Voice / SMS / email phishing respectively.

**Q:** Whaling targets...?
**A:** Executives specifically.

**Q:** Watering hole attack?
**A:** Compromise a website that the target group frequently visits.

**Q:** Typosquatting?
**A:** Registering misspelled domains (`goggle.com`, `microsft.com`) to capture mistyped traffic.

**Q:** Name the 7 social-engineering psychological principles.
**A:** Authority, Urgency, Scarcity, Social proof, Liking/Familiarity, Trust, Fear.

---

## 📦 SECTION 6: NETWORK SECURITY

**Q:** SFTP port and protocol?
**A:** Port 22, over SSH.

**Q:** FTPS port and protocol?
**A:** Port 990 (or 21 with explicit TLS), FTP over TLS, NOT the same as SFTP.

**Q:** IDS vs IPS difference?
**A:** IDS detects + alerts (out-of-band). IPS detects + blocks (inline).

**Q:** What is a WAF?
**A:** Web Application Firewall, layer-7 firewall protecting web apps from OWASP-class attacks.

**Q:** What is a DMZ / screened subnet for?
**A:** Hosting public-facing services (web, email) isolated from the internal network.

**Q:** What is a jump server?
**A:** Hardened single entry point for administrative access into the secure zone, with MFA + session recording.

**Q:** What does SPF / DKIM / DMARC do together?
**A:** Prevents email spoofing of your domain. SPF = allowed sending IPs; DKIM = crypto signature; DMARC = policy on failures.

**Q:** 802.1X components?
**A:** Supplicant (client), Authenticator (switch/AP), Authentication Server (RADIUS).

**Q:** What is EAP-TLS?
**A:** Strongest EAP variant, mutual certificate-based authentication for 802.1X.

**Q:** IPSec Tunnel vs Transport mode?
**A:** Tunnel mode encrypts the entire IP packet (used for site-to-site VPN). Transport mode encrypts only the payload (host-to-host).

**Q:** AH vs ESP in IPSec?
**A:** AH = integrity + authentication only. ESP = also confidentiality.

**Q:** Which VPN protocol is broken and should be retired?
**A:** PPTP.

**Q:** DNSSEC provides what?
**A:** Integrity of DNS records (signed). Does NOT provide encryption, that's DoT/DoH.

**Q:** DoT vs DoH port?
**A:** DoT (DNS over TLS) = 853. DoH (DNS over HTTPS) = 443.

**Q:** SNMPv3 advantage over earlier versions?
**A:** Adds authentication and encryption. v1/v2c are cleartext.

**Q:** LDAPS port?
**A:** 636. (LDAP = 389.)

**Q:** Kerberos port?
**A:** 88.

**Q:** Split tunnel vs full tunnel VPN?
**A:** Split = only corporate traffic via VPN, rest direct. Full = all traffic via VPN. Split is faster but less monitored.

**Q:** What is microsegmentation?
**A:** Per-workload firewall, each VM/container has its own allow-list, often via host agents or SDN.

---

## 📦 SECTION 7: ENDPOINT, MOBILE & CLOUD

**Q:** EDR vs AV?
**A:** EDR adds behavioral telemetry, threat hunting, rollback, and response actions. AV is signature-based detection only.

**Q:** XDR vs EDR?
**A:** XDR correlates endpoint + network + cloud + email telemetry. EDR is endpoint-only.

**Q:** MDR vs EDR?
**A:** MDR is a managed service operating EDR/XDR 24/7 for you.

**Q:** BYOD vs CYOD vs COPE vs COBO?
**A:** BYOD = Bring Your Own. CYOD = Choose Your Own (from approved list). COPE = Corporate-Owned, Personally Enabled. COBO = Corporate-Owned, Business Only.

**Q:** MDM vs MAM?
**A:** MDM manages the whole device. MAM manages just corporate apps and their data (enables selective wipe).

**Q:** What is UEM?
**A:** Unified Endpoint Management, single console for mobile + laptop + desktop + IoT.

**Q:** Who is responsible for S3 bucket misconfiguration?
**A:** The customer (under the shared responsibility model). AWS handles infrastructure; customer handles configuration.

**Q:** In IaaS, what does the customer manage?
**A:** Guest OS, runtime, applications, data, network configuration inside the VM, and IAM.

**Q:** What is a CASB?
**A:** Cloud Access Security Broker, sits between users and cloud apps; enforces policy; discovers shadow IT.

**Q:** What is CSPM?
**A:** Cloud Security Posture Management, continuously audits cloud configurations against best practices.

**Q:** What is ZTNA?
**A:** Zero Trust Network Access, identity-aware per-app access, replacing traditional VPN for user access.

**Q:** What is SASE?
**A:** Secure Access Service Edge, combines SD-WAN with cloud security services (FWaaS, SWG, ZTNA, CASB).

**Q:** Container security pitfall #1?
**A:** Running containers as root, a kernel escape compromises the host.

**Q:** Why is patching alone insufficient for ICS/SCADA?
**A:** Long device lifecycles, vendor doesn't allow downtime/upgrades, proprietary protocols. Use compensating controls: segmentation, jump servers, monitoring.

**Q:** What does SIM swap defeat?
**A:** SMS-based MFA, attacker convinces the carrier to port the victim's number to attacker-controlled SIM.

---

## 📦 SECTION 8: SECURITY OPERATIONS

**Q:** What does a SIEM do?
**A:** Aggregates logs, normalizes them, correlates events, and alerts on suspicious patterns.

**Q:** SIEM vs SOAR?
**A:** SIEM = detect + alert. SOAR = respond + automate via playbooks.

**Q:** NIST IR lifecycle phases in order?
**A:** Preparation → Detection & Analysis → Containment → Eradication → Recovery → Lessons Learned.

**Q:** Order of volatility, most volatile first?
**A:** CPU registers/cache → RAM → temp/swap → disk → remote logs → physical config.

**Q:** Why capture memory before powering off?
**A:** RAM is volatile, once power is removed, the data is gone. Capture in-process state, network connections, decrypted keys first.

**Q:** What is chain of custody?
**A:** Documented log of who touched the evidence, when, where, and why, from acquisition through trial.

**Q:** What is a legal hold?
**A:** A directive to preserve potentially relevant data; suspends routine deletion when litigation is reasonably anticipated.

**Q:** What is a write blocker?
**A:** Hardware that prevents any writes to the evidence drive during forensic acquisition.

**Q:** Why analyze a forensic image instead of the original drive?
**A:** Preserves the original; analysis runs on a hash-verified working copy.

**Q:** Can SSDs be degaussed?
**A:** No, degaussing only affects magnetic media. SSDs use flash; use crypto-erase or physical destruction.

**Q:** What does CVSS measure?
**A:** Severity of a vulnerability on a 0-10 scale (base, temporal, environmental components).

**Q:** What does EPSS measure?
**A:** Probability that a vulnerability will be exploited in the wild.

**Q:** What is CISA's KEV catalog?
**A:** Known Exploited Vulnerabilities, vulns actively being exploited; patch these FIRST.

**Q:** NetFlow vs PCAP?
**A:** NetFlow = connection metadata (5-tuple, byte counts). PCAP = full packet payloads (much larger).

**Q:** What is threat hunting?
**A:** Proactively searching for adversaries already inside the environment that automated detection has missed.

**Q:** Credentialed vs non-credentialed vulnerability scan?
**A:** Credentialed logs in and sees actual configs/packages (most accurate). Non-credentialed sees only the external attacker's view.

---

## 📦 SECTION 9: GRC, RISK & COMPLIANCE

**Q:** Governance document hierarchy?
**A:** Policy > Standard > Procedure > Guideline > Baseline.

**Q:** Formula: SLE = ?
**A:** Asset Value × Exposure Factor.

**Q:** Formula: ALE = ?
**A:** SLE × ARO (Annualized Rate of Occurrence).

**Q:** 4 risk treatment strategies?
**A:** Avoid, Mitigate, Transfer, Accept.

**Q:** Cyber insurance is which treatment?
**A:** Transfer.

**Q:** Inherent vs residual risk?
**A:** Inherent = before controls. Residual = remaining after controls.

**Q:** What is a risk register?
**A:** Living catalog of identified risks with owners, treatments, and status.

**Q:** MSA vs SOW vs SLA?
**A:** MSA = umbrella contract. SOW = project scope under MSA. SLA = performance metrics + remedies (uptime, response time).

**Q:** What's an NDA?
**A:** Non-Disclosure Agreement, confidentiality terms.

**Q:** MOU vs MOA?
**A:** MOU = non-binding statement of intent. MOA = binding agreement.

**Q:** When is a DPA required?
**A:** GDPR requires a Data Processing Agreement when a third-party processor handles personal data on your behalf.

**Q:** When is a BAA required?
**A:** HIPAA requires a Business Associate Agreement with vendors handling Protected Health Information.

**Q:** What is an ISA?
**A:** Interconnection Security Agreement, defines security requirements when two systems connect.

**Q:** NIST CSF v1 functions in order?
**A:** Identify, Protect, Detect, Respond, Recover (CSF 2.0 adds Govern).

**Q:** ISO 27001 attests to what?
**A:** Existence of an Information Security Management System (ISMS).

**Q:** Who does PCI-DSS apply to?
**A:** Anyone who stores, processes, or transmits cardholder data.

**Q:** Who does GDPR apply to?
**A:** Anyone processing EU residents' personal data, extraterritorial in scope.

**Q:** What is HIPAA?
**A:** US federal law protecting Protected Health Information (PHI) for healthcare and business associates.

**Q:** RTO definition?
**A:** Maximum acceptable downtime for a system/process.

**Q:** RPO definition?
**A:** Maximum acceptable data loss, expressed in time (e.g., "RPO = 4 hours" means you can lose up to 4 hours of recent data).

**Q:** MTBF vs MTTR?
**A:** MTBF = Mean Time Between Failures (avg time between failures). MTTR = Mean Time To Repair/Recover (avg time to fix).

**Q:** Hot vs warm vs cold site?
**A:** Hot = fully equipped, real-time sync, ready immediately. Warm = equipment in place, periodic sync, hours/days. Cold = empty facility, days/weeks.

**Q:** 3-2-1 backup rule?
**A:** 3 copies of data, on 2 different media types, with 1 copy off-site.

**Q:** What is an immutable backup?
**A:** A backup that cannot be modified or deleted, ransomware-resistant.

**Q:** Tabletop vs walkthrough vs simulation vs parallel vs full-interruption?
**A:** Tabletop = discussion only. Walkthrough = step-by-step rehearsal. Simulation = controlled live exercise. Parallel = DR site runs alongside prod. Full-interruption = actual cutover (riskiest).

**Q:** What is a BIA?
**A:** Business Impact Analysis, identifies critical processes, quantifies downtime impact, drives RTO/RPO targets.

---

## 📦 SECTION 10: APPLICATION & DATA SECURITY

**Q:** SAST analyzes what?
**A:** Source code (or compiled binaries) statically, before runtime.

**Q:** DAST analyzes what?
**A:** A running application from the outside via crawling/probing.

**Q:** What does SCA find?
**A:** Known-vulnerable third-party dependencies in your software.

**Q:** What does RASP do?
**A:** Runtime Application Self-Protection, embedded agent that blocks attacks at runtime inside the app process.

**Q:** What is an SBOM?
**A:** Software Bill of Materials, machine-readable list of every component in a software product. Required for US federal software (EO 14028).

**Q:** STRIDE letters?
**A:** Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege.

**Q:** 3 data states?
**A:** At Rest, In Transit, In Use.

**Q:** What protects "in transit" data?
**A:** TLS, IPSec, SSH, S/MIME, VPN.

**Q:** What protects "in use" data?
**A:** Confidential computing, hardware-level encryption while data is being processed (Intel SGX, AMD SEV, Apple Secure Enclave, AWS Nitro Enclaves).

**Q:** Tokenization vs encryption?
**A:** Tokenization: no math relation; only a vault lookup recovers the original. Encryption: reversible with a key.

**Q:** What is masking?
**A:** Display-time obfuscation showing only part of the data (e.g., `****1234`). Original still in the DB.

**Q:** Pseudonymization vs anonymization (under GDPR)?
**A:** Pseudonymization = reversible with mapping key; GDPR still applies. Anonymization = irreversible by reasonable means; GDPR no longer applies.

**Q:** What is data sovereignty?
**A:** Data is subject to the laws of the country it physically resides in.

**Q:** Network DLP vs Endpoint DLP?
**A:** Network DLP intercepts data at the gateway (emails, uploads). Endpoint DLP runs on the device (USB, print, screen capture).

**Q:** Best place to store application secrets?
**A:** A secrets manager / vault, retrieved at runtime via short-lived credentials. Never hardcoded.

**Q:** Which programming languages are memory-unsafe by default?
**A:** C and C++ (manual memory management). Memory-safe alternatives: Rust, Go, Java, Python, C#.

**Q:** Three classifications for sensitive data covered by major regulations?
**A:** PII (PII generally), PHI (HIPAA-covered health data), PCI/CHD (cardholder data under PCI-DSS).

**Q:** What does code signing provide?
**A:** Integrity + publisher authenticity, consumers verify the signature with the publisher's public key before installing.

**Q:** What's the difference between Waterfall and DevSecOps?
**A:** Waterfall = sequential phases (Requirements → Design → Build → Test → Deploy). DevSecOps = security integrated continuously into CI/CD pipelines.

**Q:** Two standards for SBOM format?
**A:** SPDX and CycloneDX.

---

## 📚 STUDY TIPS

- Drill these daily, 15 minutes/day beats one 90-minute cram
- Shuffle frequently to avoid pattern memorization
- For acronyms, say them out loud (auditory + visual reinforcement)
- For formulas (SLE/ALE), do at least 3 worked examples
- Mark "Got it" only after you've answered correctly without seeing the back
- Filter by section to drill weak domains
- Reset progress 1 week before the exam and re-run the full deck

## 🎯 BEFORE THE EXAM

- The night before: re-run all cards in shuffle mode
- Don't try to learn new material the day before
- Cards you still miss: write them on a single sheet of paper, review on the morning
- Get 7+ hours of sleep, eat protein, arrive early

Good luck. 🛡️
