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
  var STORAGE_KEY = 'certhub-22-CompTIA-Network-Plus-flashcards';
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

# 🃏 Network+ Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10–15 min daily. The dropdown above filters by section so you can grind weak areas.

---

## 🌐 SECTION 1: OSI MODEL & TOPOLOGIES

**Q:** Recite the 7 OSI layers from bottom to top.
**A:** Physical, Data Link, Network, Transport, Session, Presentation, Application. ("Please Do Not Throw Sausage Pizza Away")

**Q:** Which OSI layer do MAC addresses live at?
**A:** Layer 2 (Data Link).

**Q:** Which OSI layer do IP addresses live at?
**A:** Layer 3 (Network).

**Q:** Which OSI layer do port numbers live at?
**A:** Layer 4 (Transport).

**Q:** TCP vs UDP, which layer?
**A:** Both Layer 4 (Transport).

**Q:** Which OSI layer does HTTP live at?
**A:** Layer 7 (Application).

**Q:** At what OSI layer does a hub operate?
**A:** Layer 1 (Physical).

**Q:** At what OSI layer does a switch operate?
**A:** Layer 2 (Data Link). (L3 switches also do routing at L3.)

**Q:** At what OSI layer does a router operate?
**A:** Layer 3 (Network).

**Q:** What is the L2 PDU called? L3? L4?
**A:** Frame (L2), Packet (L3), Segment (TCP) / Datagram (UDP) at L4.

**Q:** What is encapsulation?
**A:** Each layer wraps the upper-layer PDU with its own header (and sometimes trailer) as the data moves down the stack.

**Q:** Star topology, every device connects to what?
**A:** A central switch (or hub). One device fails others keep working. Switch fails all down.

**Q:** Full-mesh formula for links between N nodes?
**A:** N(N-1)/2. Six nodes → 15 links.

**Q:** Unicast vs broadcast vs multicast vs anycast, one-line each.
**A:** Unicast = one-to-one. Broadcast = one-to-all-on-segment. Multicast = one-to-group. Anycast = one-to-nearest-of-many.

---

## 🔢 SECTION 2: TCP/IP & SUBNETTING

**Q:** Class A range and default mask?
**A:** 1.0.0.0–126.255.255.255, /8 (255.0.0.0).

**Q:** Class B range and default mask?
**A:** 128.0.0.0–191.255.255.255, /16 (255.255.0.0).

**Q:** Class C range and default mask?
**A:** 192.0.0.0–223.255.255.255, /24 (255.255.255.0).

**Q:** Class D and what it's used for?
**A:** 224.0.0.0–239.255.255.255, multicast.

**Q:** RFC 1918 private ranges?
**A:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.

**Q:** APIPA range?
**A:** 169.254.0.0/16. Self-assigned when DHCP fails.

**Q:** Loopback IPv4 range?
**A:** 127.0.0.0/8 (commonly 127.0.0.1).

**Q:** Formula for usable hosts in a subnet?
**A:** 2^(host bits) - 2 (subtract network and broadcast).

**Q:** How many hosts in a /24?
**A:** 2^8 - 2 = 254.

**Q:** How many hosts in a /30?
**A:** 2^2 - 2 = 2 (perfect for point-to-point links).

**Q:** What does CIDR notation /27 mean?
**A:** First 27 bits are the network portion. Mask = 255.255.255.224. Five host bits → 30 hosts/subnet.

**Q:** What is VLSM?
**A:** Variable Length Subnet Mask, different subnet sizes within a single network for efficient address use.

**Q:** NAT vs PAT, one-line difference?
**A:** NAT translates IPs 1:1. PAT (overload) translates many internal IPs to one public IP using unique port numbers.

**Q:** IPv6 loopback address?
**A:** ::1.

**Q:** IPv6 link-local prefix?
**A:** FE80::/10.

**Q:** IPv6 unique local address (private) prefix?
**A:** FC00::/7 (commonly FD00::/8 in practice).

**Q:** IPv6 multicast prefix?
**A:** FF00::/8.

**Q:** SLAAC, what is it?
**A:** Stateless Address Auto-Configuration, IPv6 host generates its own address from router advertisement + interface ID. No DHCP needed.

**Q:** EUI-64, what does it do?
**A:** Generates the host portion of an IPv6 address from the MAC by flipping the 7th bit and inserting FFFE in the middle.

**Q:** Default gateway = ?
**A:** The router IP a host uses to reach networks outside its own subnet.

---

## 🔀 SECTION 3: ROUTING & SWITCHING

**Q:** Distance vector vs link state, name one of each.
**A:** Distance vector: RIP (or EIGRP, hybrid). Link state: OSPF, IS-IS.

**Q:** What is OSPF's metric?
**A:** Cost (based on bandwidth: reference bandwidth / link bandwidth).

**Q:** What is EIGRP's metric?
**A:** Composite, bandwidth + delay by default (can include load, reliability, MTU).

**Q:** RIP max hop count?
**A:** 15. 16 = unreachable.

**Q:** BGP, what does it do?
**A:** Border Gateway Protocol, routes between autonomous systems on the Internet. The "Internet's routing protocol."

**Q:** Default 802.1Q VLAN tag size?
**A:** 4 bytes added to the Ethernet header. VLAN ID = 12 bits (max 4,094 usable VLANs).

**Q:** Access port vs trunk port?
**A:** Access port carries one VLAN (untagged). Trunk port carries many VLANs (tagged with 802.1Q).

**Q:** What is the native VLAN on a trunk?
**A:** The one VLAN whose traffic is sent UNTAGGED across the trunk. Default is VLAN 1; both ends must match.

**Q:** What does STP prevent?
**A:** Layer 2 loops in switched networks.

**Q:** STP root bridge election criteria?
**A:** Lowest Bridge ID = (Priority + MAC). Default priority = 32768. Tie → lowest MAC wins.

**Q:** Three STP port roles?
**A:** Root port (best path to root), Designated port (forwarding on a segment), Blocking/Alternate port (loop-free standby).

**Q:** What is RSTP?
**A:** Rapid STP (802.1w), much faster convergence (seconds vs ~50s for classic STP).

**Q:** Link aggregation standard?
**A:** 802.3ad / LACP (Link Aggregation Control Protocol). Bundles multiple physical links into one logical link.

**Q:** Port security, what does sticky MAC mean?
**A:** Switch dynamically learns the MAC on the port and saves it as a static, allowed entry.

---

## 📡 SECTION 4: WIRELESS

**Q:** 802.11ac is also known as?
**A:** Wi-Fi 5. 5 GHz only.

**Q:** 802.11ax is also known as?
**A:** Wi-Fi 6 (or Wi-Fi 6E with 6 GHz band).

**Q:** 802.11be is also known as?
**A:** Wi-Fi 7. Operates on 2.4, 5, and 6 GHz; supports 320 MHz channels and MLO.

**Q:** Non-overlapping 2.4 GHz channels in the US?
**A:** 1, 6, 11.

**Q:** What is the difference between 2.4 GHz and 5 GHz?
**A:** 2.4 GHz: longer range, slower, more interference. 5 GHz: shorter range, faster, less crowded.

**Q:** WPA3 personal authentication uses?
**A:** SAE (Simultaneous Authentication of Equals), replaces WPA2's PSK 4-way handshake, defeats offline dictionary attacks.

**Q:** WPA2 Enterprise authentication uses?
**A:** 802.1X with RADIUS + EAP (PEAP, EAP-TLS, etc.).

**Q:** What is a captive portal?
**A:** Web page that intercepts HTTP requests on a guest network, forcing terms-of-use or sign-in before granting Internet access.

**Q:** Site survey, purpose?
**A:** Measure RF coverage, detect interference, plan AP placement and channel reuse.

**Q:** SSID purpose?
**A:** Service Set Identifier, the human-readable name of a wireless network (max 32 characters).

---

## 🗂️ SECTION 5: NETWORK SERVICES & CLOUD

**Q:** DNS A record, what does it map?
**A:** Hostname → IPv4 address.

**Q:** DNS AAAA record, what does it map?
**A:** Hostname → IPv6 address.

**Q:** DNS CNAME record, what does it do?
**A:** Alias one hostname to another (canonical name).

**Q:** DNS MX record, purpose?
**A:** Mail Exchange, points to a domain's mail servers (with a priority/preference value).

**Q:** DNS PTR record, purpose?
**A:** Reverse lookup, IP → hostname. Used in spam filtering, logging.

**Q:** DNS TXT record, common uses?
**A:** SPF, DKIM, DMARC anti-spam records; domain ownership verification.

**Q:** DNS SRV record, purpose?
**A:** Locate the host and port for a specific service (used by SIP, AD, XMPP).

**Q:** DNS NS record?
**A:** Names the authoritative name servers for a zone.

**Q:** DNS port and protocol?
**A:** UDP 53 for queries; TCP 53 for zone transfers and responses >512 bytes.

**Q:** DHCP DORA, what do the letters stand for?
**A:** Discover, Offer, Request, Acknowledge.

**Q:** DHCP, UDP ports?
**A:** Client: UDP 68. Server: UDP 67.

**Q:** DHCP reservation vs scope?
**A:** Scope = pool of IPs DHCP can lease. Reservation = IP tied to a specific MAC (always gets the same address).

**Q:** What is a DHCP relay?
**A:** Forwards DHCP broadcasts across subnets to a central DHCP server (because broadcasts don't cross routers). Also called IP helper.

**Q:** NTP port and protocol?
**A:** UDP 123.

**Q:** FTP, control + data ports?
**A:** TCP 21 (control), TCP 20 (active-mode data).

**Q:** SFTP port?
**A:** TCP 22 (it's FTP over SSH).

**Q:** TFTP port and protocol?
**A:** UDP 69. No auth, used for switch/router firmware uploads and PXE boot.

**Q:** AWS dedicated cloud link?
**A:** AWS Direct Connect.

**Q:** Azure dedicated cloud link?
**A:** Azure ExpressRoute.

**Q:** SD-WAN, one-line definition?
**A:** Software-Defined WAN, centrally managed overlay that intelligently routes traffic across multiple links (MPLS, broadband, LTE) based on policy and link health.

---

## 🔒 SECTION 6: NETWORK SECURITY

**Q:** Stateful vs stateless firewall, one-line difference.
**A:** Stateful tracks connection state (allows replies to outbound automatically). Stateless evaluates each packet in isolation.

**Q:** Next-Gen Firewall adds what beyond stateful?
**A:** Application-layer inspection, IDS/IPS integration, user identity awareness, TLS decryption.

**Q:** IDS vs IPS, one-line difference.
**A:** IDS detects and alerts (out-of-band). IPS detects and blocks (inline).

**Q:** ACL, what is it?
**A:** Access Control List, ordered rules permitting or denying traffic based on packet attributes (IPs, ports, protocols).

**Q:** NAC, purpose?
**A:** Network Access Control, posture-checks devices (patch level, AV, OS) before granting network access.

**Q:** Zero Trust core principle?
**A:** "Never trust, always verify", no implicit trust based on network location.

**Q:** IPsec, two main protocols?
**A:** AH (Authentication Header integrity only) and ESP (Encapsulating Security Payload encryption + integrity). ESP is what's used in practice.

**Q:** IPsec, two modes?
**A:** Transport mode (encrypts payload only, host-to-host) and Tunnel mode (encrypts entire packet, gateway-to-gateway VPNs).

**Q:** SSL/TLS VPN benefits over IPsec?
**A:** Works over TCP 443 (firewall-friendly), often clientless (browser-based), easier remote-user deployment.

**Q:** 802.1X, what does it do?
**A:** Port-based authentication for wired/wireless. Three roles: supplicant (client), authenticator (switch/AP), authentication server (RADIUS).

---

## 📊 SECTION 7: MONITORING & TOOLS

**Q:** SNMP, port and purpose?
**A:** UDP 161 (queries), UDP 162 (traps). Polls device metrics like CPU, interface counters, errors.

**Q:** Three SNMP versions?
**A:** v1 (cleartext community strings), v2c (cleartext, bulk ops), v3 (authentication + encryption, use this).

**Q:** Syslog, port and purpose?
**A:** UDP 514 (TCP 6514 for syslog over TLS). Collects log messages from network devices into a central server.

**Q:** Syslog severity levels, name a few in order?
**A:** 0 Emergency, 1 Alert, 2 Critical, 3 Error, 4 Warning, 5 Notice, 6 Informational, 7 Debug.

**Q:** NetFlow, what does it report?
**A:** Per-flow traffic metadata (source/dest IP + port, protocol, byte/packet counts). For bandwidth analysis and security visibility.

**Q:** Latency vs jitter, one-line each.
**A:** Latency = average round-trip time. Jitter = variation in latency over time (bad for VoIP/video).

**Q:** Throughput vs bandwidth?
**A:** Bandwidth = max theoretical capacity. Throughput = actual achieved data rate.

**Q:** What command shows the path a packet takes to a destination on Windows?
**A:** `tracert`. (Linux/macOS: `traceroute`.)

**Q:** What command tests reachability with ICMP echo?
**A:** `ping`.

**Q:** `nslookup` vs `dig`, purpose?
**A:** Both perform DNS lookups from the CLI. `dig` (Linux/macOS) gives more detailed output; `nslookup` is cross-platform.

**Q:** What does Wireshark do?
**A:** Captures and analyzes packets on the wire (or wireless). The gold-standard packet analyzer.

**Q:** What is a baseline?
**A:** Recorded "normal" performance metrics over time. Compared to current data to spot deviations.

---

## 🛠️ SECTION 8: TROUBLESHOOTING METHODOLOGY

**Q:** Recite the CompTIA 7-step troubleshooting model in order.
**A:** 1) Identify the problem, 2) Establish a theory of probable cause, 3) Test the theory, 4) Plan of action, 5) Implement the solution, 6) Verify full system functionality, 7) Document findings and outcomes.

**Q:** When testing your theory fails, what's the next move?
**A:** Establish a NEW theory (back to step 2), or escalate.

**Q:** What does "approach the problem from the top down" mean in OSI troubleshooting?
**A:** Start at Layer 7 (the application) and work down toward Layer 1.

**Q:** Bottom-up troubleshooting starts where?
**A:** Layer 1 (cables, signal, link lights) and works up.

**Q:** Cable tester vs cable certifier vs TDR, purpose?
**A:** Tester checks continuity / pinout. Certifier validates against TIA category (e.g., Cat6 specs). TDR (Time-Domain Reflectometer) locates faults by distance.

**Q:** Wi-Fi signal strength, what units?
**A:** dBm (decibel-milliwatts). -30 dBm = excellent, -67 = good for VoIP, -80 = poor, -90 = unusable.

**Q:** What is duplex mismatch?
**A:** One end of a link is full-duplex, other is half-duplex. Symptom: connectivity works but throughput collapses with errors/collisions.

**Q:** What's the easy fix for a "works on one switch port, broken on another" issue?
**A:** Check the port config, VLAN assignment, duplex/speed, port security, errors. Or simply move the cable to a known-good port and verify.

---

## 🔢 SECTION 9: PORTS YOU MUST KNOW COLD

**Q:** Ports 20, 21?
**A:** FTP data (20) and FTP control (21). TCP.

**Q:** Port 22?
**A:** SSH / SFTP / SCP. TCP.

**Q:** Port 23?
**A:** Telnet (cleartext, don't use). TCP.

**Q:** Port 25?
**A:** SMTP. TCP.

**Q:** Port 53?
**A:** DNS. UDP for queries, TCP for zone transfers.

**Q:** Ports 67, 68?
**A:** DHCP server (67) and client (68). UDP.

**Q:** Port 69?
**A:** TFTP. UDP.

**Q:** Port 80?
**A:** HTTP. TCP.

**Q:** Port 110?
**A:** POP3. TCP.

**Q:** Port 123?
**A:** NTP. UDP.

**Q:** Port 143?
**A:** IMAP. TCP.

**Q:** Ports 161, 162?
**A:** SNMP queries (161) and SNMP traps (162). UDP.

**Q:** Port 389?
**A:** LDAP. TCP/UDP.

**Q:** Port 443?
**A:** HTTPS (HTTP over TLS). TCP.

**Q:** Port 445?
**A:** SMB (Windows file sharing). TCP.

**Q:** Port 514?
**A:** Syslog. UDP.

**Q:** Port 587?
**A:** SMTP submission (with TLS). TCP.

**Q:** Port 636?
**A:** LDAPS (LDAP over SSL/TLS). TCP.

**Q:** Port 993?
**A:** IMAPS (IMAP over SSL/TLS). TCP.

**Q:** Port 995?
**A:** POP3S (POP3 over SSL/TLS). TCP.

**Q:** Port 3389?
**A:** RDP (Remote Desktop). TCP.

**Q:** Port 5060 / 5061?
**A:** SIP (5060 cleartext, 5061 over TLS). TCP/UDP.

---

## 🚨 SECTION 10: EXAM POWER PHRASES

**Q:** Often-correct answer phrases:
**A:** "Check Layer 1 first" / "Document the change" / "Verify full system functionality" / "Apply the principle of least privilege" / "Use WPA3" / "Use SSH instead of Telnet" / "Use SFTP instead of FTP."

**Q:** Often-wrong answer phrases:
**A:** "Skip documentation" / "Use Telnet" / "Use FTP for sensitive data" / "Disable STP to fix loops" / "Trust traffic from inside the network" / "Use WEP" / "Hardcode passwords in plaintext config."

**Q:** "FIRST" in a question, what's it asking?
**A:** Initial step. Often identification, isolation, or following the troubleshooting model in order.

**Q:** "BEST" or "MOST appropriate", strategy?
**A:** Multiple answers may "work", pick the one that is most efficient, secure, and aligned with the methodology.

---

## 📝 STUDY TIPS FOR FLASHCARDS

1. **Anki recommendation:** Spaced repetition is undefeated.
2. **Daily review:** 10–15 min/day until exam.
3. **Subnetting daily:** Add 5 fresh subnetting drills to your routine, they'll feel like math homework, then they'll feel like reflex.
4. **Add cards as you find weak spots:** Reading.md → wrong quiz answers → new card.
5. **Mix decks:** Don't just review one section at a time. Interleave.

---

## 🎯 BEFORE THE EXAM

You should be able to instantly answer:

- The 7 OSI layers + a protocol/device for each
- All RFC 1918 private ranges
- Class A/B/C default masks
- Common port numbers (especially 20, 21, 22, 23, 25, 53, 67/68, 69, 80, 110, 123, 143, 161/162, 389, 443, 445, 514, 3389)
- All major DNS record types (A, AAAA, MX, CNAME, PTR, TXT, SRV, NS)
- Wi-Fi standards by year and band (a, b, g, n, ac, ax, be)
- The 7-step CompTIA troubleshooting model
- IPsec vs SSL/TLS VPN differences
- VLAN tagging (802.1Q), native VLAN, trunk vs access port
- STP basics, root bridge election, port roles

Good luck! 🚀
