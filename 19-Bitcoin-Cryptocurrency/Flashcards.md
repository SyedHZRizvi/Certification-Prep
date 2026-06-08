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

<div class="fc-app" id="fc-app" role="region" aria-label="Interactive flashcards">
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
  var STORAGE_KEY = 'certhub-flashcards-bitcoin';
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

# ₿ Bitcoin & Cryptocurrency, Flashcards

> **How to use.** Click a card to flip. Mark "Got it" for cards you've internalized; "Try again" otherwise. Progress is saved in your browser. Filter by module section using the dropdown.

---

## Module 1, White Paper & Origins

**Q:** Who published the Bitcoin white paper, on what date, and in what venue?

**A:** Pseudonymous "Satoshi Nakamoto" posted *Bitcoin: A Peer-to-Peer Electronic Cash System* on the metzdowd.com Cryptography Mailing List on October 31, 2008. The PDF is 9 pages.

**Q:** What problem does the Bitcoin white paper claim to solve?

**A:** The double-spend problem in a peer-to-peer digital cash system *without* relying on a trusted third party (bank or payment processor).

**Q:** When was the Bitcoin Genesis block mined and what message is in its coinbase?

**A:** Block 0 was mined January 3, 2009. Its coinbase contains the headline: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks." It's a timestamp + a political statement.

**Q:** Who received the first ever Bitcoin transaction, and when?

**A:** Hal Finney received 10 BTC from Satoshi on January 12, 2009 (block 170). Finney was the second person to run a Bitcoin node.

**Q:** Name three cypherpunk predecessors to Bitcoin.

**A:** David Chaum's eCash (1983), Adam Back's Hashcash (1997), Wei Dai's b-money (1998), and Nick Szabo's Bit Gold (1998). Bitcoin combines ideas from all of them.

**Q:** What is the total Bitcoin supply cap and why is it 21 million?

**A:** 21M BTC, hard-coded. The number is the asymptotic sum of the geometric block-reward series: 50 BTC/block halving every 210,000 blocks (≈ 4 years), summed to infinity = 21M. Satoshi never publicly explained the choice.

---

## Module 2, Cryptographic Foundations

**Q:** Which hash functions does Bitcoin use, and where is each used?

**A:** SHA-256 (block headers, PoW, transaction IDs, double-SHA in many places), RIPEMD-160 (used inside HASH160 for address generation), HMAC-SHA512 (BIP-32 child key derivation).

**Q:** What elliptic curve does Bitcoin use, and who specified it?

**A:** secp256k1, specified by SECG in 2000. Bitcoin uses ECDSA over secp256k1. It is NOT a NIST P-curve, Satoshi explicitly avoided NIST curves.

**Q:** What is the relationship between a Bitcoin private key, public key, and address?

**A:** Private key (32 random bytes) → public key (via secp256k1 scalar multiplication) → public key hash via HASH160 = RIPEMD160(SHA256(pubkey)) → encoded as Base58Check (legacy) or Bech32 (SegWit) address.

**Q:** What is a Merkle tree and why does Bitcoin use it?

**A:** A binary tree where every non-leaf node is the hash of its children. Bitcoin uses it to commit to all transactions in a block via a single Merkle root in the block header (Merkle 1979). SPV clients use Merkle proofs to verify a tx is in a block without downloading the whole block.

**Q:** What is the difference between a hash function and a digital signature?

**A:** A hash compresses arbitrary input to fixed output, one-way, no key. A signature uses a private key to produce a value that anyone with the public key can verify proves "this private-key holder signed this message." Hash = integrity; signature = integrity + authentication + non-repudiation.

**Q:** What did Schnorr signatures add when activated via Taproot in 2021?

**A:** Linearity, multiple Schnorr signatures over the same message can be aggregated into one (MuSig). Net effect: multi-sig and single-sig look identical on-chain (privacy), and Lightning channel open/close becomes cheaper.

---

## Module 3, Bitcoin Network & Consensus

**Q:** What is the difference between a full node and an SPV client?

**A:** A full node downloads, verifies, and stores every block and transaction since Genesis (~700 GB as of 2026). An SPV (Simplified Payment Verification) client only downloads block headers + Merkle proofs of relevant transactions. Trust model differs sharply.

**Q:** State Bitcoin's longest-chain rule in one sentence.

**A:** Honest nodes always accept the chain with the most cumulative proof-of-work, not the most blocks. (Most blocks ≠ most work after a difficulty adjustment.)

**Q:** What is the difference between a soft fork and a hard fork?

**A:** Soft fork = backward-compatible rule tightening; non-upgraded nodes still accept the new chain (SegWit, Taproot). Hard fork = rule loosening or change that splits the chain (Bitcoin Cash 2017, Ethereum Classic 2016).

**Q:** What is the standard Bitcoin block time target and how is it enforced?

**A:** ~10 minutes. Enforced by the difficulty-adjustment algorithm every 2,016 blocks (~2 weeks): if blocks came in faster, difficulty rises; if slower, difficulty falls. Hard-capped at a 4x change per adjustment period.

**Q:** What was the BCH (Bitcoin Cash) hard fork and when?

**A:** August 1, 2017 (block 478558). A faction wanting larger blocks (8 MB) split from Bitcoin (which kept 1 MB blocks + activated SegWit). The split produced two chains and two coins; users with BTC pre-fork received an equal amount of BCH.

---

## Module 4, Wallets, Keys & Self-Custody

**Q:** What does BIP-39 specify?

**A:** Mnemonic seed phrases, 12 or 24 English words selected from a 2,048-word wordlist, encoding 128 or 256 bits of entropy plus a 4–8-bit checksum. Translates to a binary seed via PBKDF2.

**Q:** What does BIP-32 specify?

**A:** Hierarchical Deterministic (HD) wallets, derive a tree of child keys from a single master seed using HMAC-SHA512. Public-key child derivation is supported for watch-only accounts.

**Q:** What does BIP-44 specify?

**A:** A standard derivation path: `m/44'/coin_type'/account'/change/address_index`. For Bitcoin, coin_type = 0. Standardizes wallet portability, same seed in different wallets recovers the same addresses.

**Q:** Compare 2-of-3 multi-sig with MPC for institutional custody.

**A:** Multi-sig is on-chain (three Bitcoin scripts, multiple signatures, visible spending pattern). MPC (multi-party computation) splits a single private key off-chain, on-chain it looks like single-sig. Multi-sig is auditable; MPC is private and chain-agnostic but vendor-dependent.

**Q:** What happened to Mt. Gox and what's the lesson?

**A:** February 2014: Mt. Gox (then ~70% of global BTC volume) declared bankruptcy, having lost ~850,000 BTC over years from hot-wallet hacks and mismanagement. Lesson: "not your keys, not your coins." Drives the entire self-custody and CCSS doctrine.

**Q:** What is a BIP-39 passphrase and why does it matter?

**A:** An optional 25th word added to a 12/24-word seed. It produces an entirely different HD wallet, defeats seed-only theft. Lose it = funds gone (no recovery).

---

## Module 5, Mining & Proof-of-Work Economics

**Q:** What is Proof-of-Work in one sentence?

**A:** A computationally expensive puzzle (finding a nonce such that the block-header hash < target) that anyone can verify cheaply, anchoring economic cost into chain history.

**Q:** What is the current Bitcoin block subsidy and when does it next halve?

**A:** As of 2026, 3.125 BTC/block (post the April 2024 halving at block 840,000). Next halving ≈ early 2028, drops to 1.5625 BTC/block.

**Q:** What is hashrate and why does it matter?

**A:** Hashrate = total computation per second securing the chain (measured in EH/s exa-hashes per second). High hashrate raises the cost of a 51% attack Bitcoin's main security parameter.

**Q:** What was the China mining ban (May 2021) and what was its effect?

**A:** China banned crypto mining; ~50% of global hashrate went offline within weeks. The chain kept producing blocks (slowed for ~10 days until the difficulty adjustment). Hashrate migrated to the US, Kazakhstan, Russia. Showed the network's resilience to a major jurisdictional shock.

**Q:** What is a mining pool and why do miners join one?

**A:** A coordinator that aggregates many miners' hashpower, splits rewards proportionally to submitted shares. Without pools, small miners would face huge variance in payout. F2Pool, AntPool, Foundry USA are the largest pools (2026).

---

## Module 6, Bitcoin Script & Programmability

**Q:** Is Bitcoin Script Turing-complete? Why or why not?

**A:** No. It has no loops and limited control flow, by design. Trade-off: less expressive than Ethereum's EVM, but provably-bounded execution and no infinite-loop DoS risk.

**Q:** What does P2PKH stand for and what does it lock to?

**A:** Pay-to-Public-Key-Hash. Locks to HASH160(pubkey). Most-common legacy address format (starts with "1"). Spender must reveal pubkey + valid signature.

**Q:** What does SegWit (BIP-141) change?

**A:** Moves the witness (signatures) out of the transaction input and into a separate structure. Fixes transaction malleability, raises effective block size to ~4 MB weight units, enables Lightning. Activated Aug 2017.

**Q:** What did Taproot activate (Nov 2021) and what does it bundle?

**A:** Three BIPs: 340 (Schnorr signatures), 341 (Taproot script-path/key-path spending), 342 (Tapscript). Net effect: single-sig and multi-sig spends look identical on-chain (privacy), complex scripts cost less, MuSig becomes practical.

**Q:** What is a PSBT?

**A:** Partially Signed Bitcoin Transaction (BIP-174), a serialization format that lets multiple signers (hardware wallets, multi-sig cosigners) collaboratively build and sign a transaction without ever sharing private keys.

---

## Module 7, Lightning Network & Layer-2

**Q:** What problem does Lightning solve?

**A:** Bitcoin's main chain processes ~7 tx/sec with ~10-min finality and rising on-chain fees. Lightning enables off-chain, instant, sub-cent payments by netting transactions inside payment channels that settle to L1 only on open and close.

**Q:** What is an HTLC (Hash Time-Locked Contract)?

**A:** A conditional script: payee can claim funds by revealing a preimage to a hash within a timeout; otherwise payer reclaims them. The cryptographic glue that chains hops in a multi-hop Lightning payment.

**Q:** What are the BOLT specifications?

**A:** Basis of Lightning Technology, the open standards (BOLT 1–11) co-edited by Lightning Labs, Blockstream, and ACINQ that define wire protocol, peer messages, channel state machine, onion routing, invoices.

**Q:** Who authored the Lightning Network paper?

**A:** Joseph Poon and Thaddeus Dryja, January 2016. "The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments."

**Q:** What did El Salvador's September 2021 Bitcoin law do?

**A:** Made Bitcoin legal tender alongside the US dollar. Required (in theory) every merchant to accept BTC, distributed the Chivo wallet to citizens. Was the first nation-state Lightning rollout, and a stress test that revealed UX, custody, and adoption challenges.

---

## Module 8, Regulation, Compliance & Tax

**Q:** What is FinCEN and what is an MSB?

**A:** Financial Crimes Enforcement Network (US Treasury bureau). MSB = Money Services Business. Per FIN-2013-G001 (March 2013), exchanges and money transmitters dealing in convertible virtual currency are MSBs, must register, file SARs, run AML.

**Q:** What is the FATF Travel Rule (Recommendation 15)?

**A:** Issued 2019. VASPs (virtual asset service providers) must transmit originator + beneficiary info (name, address, ID #) for transactions ≥ $/€ 1,000. Implementation varies by jurisdiction; threshold varies too.

**Q:** What is MiCA and when does it apply?

**A:** Markets in Crypto-Assets, EU regulation 2023/1114, phased into force June 2023–December 2024. Establishes the CASP (Crypto-Asset Service Provider) license, rules for stablecoin issuers (asset-referenced tokens, e-money tokens), and a comprehensive consumer-protection regime.

**Q:** How does the IRS treat Bitcoin for US tax?

**A:** Property, not currency, per Notice 2014-21. Every sale or swap is a capital gain/loss event. Spending BTC on coffee = a taxable event. Mining and staking rewards = ordinary income at receipt FMV.

**Q:** What was the Binance $4.3B settlement (Nov 2023)?

**A:** Binance pled guilty to BSA, IEEPA, and OFAC violations. $4.3B settlement (largest ever in crypto), CZ resigned and was sentenced to 4 months. Lesson: AML/KYC and sanctions screening at exchanges are non-negotiable.

---

## Module 9, Trading, Custody & Institutional

**Q:** What happened on January 11, 2024?

**A:** The SEC approved 11 spot-Bitcoin ETFs (BlackRock IBIT, Fidelity FBTC, Ark/21Shares ARKB, Grayscale GBTC conversion, etc.). First trading day saw ~$4.6B volume. As of 2025 IBIT alone holds >600,000 BTC. Institutional adoption inflection.

**Q:** What is the CryptoCurrency Security Standard (CCSS)?

**A:** A C4 (CryptoCurrency Certification Consortium) framework three levels (I, II, III) covering key generation, wallet creation, key storage, key usage, key compromise policy, audit logging. Used by exchanges and custodians as a vendor-assessment baseline.

**Q:** Differentiate cold, warm, and hot wallets.

**A:** Cold = offline, signed in airgapped env (deep cold storage, ~95% of institutional funds). Warm = partially online, multi-party approval needed. Hot = online, automated signing for operational liquidity. Institutional cold:warm:hot ratio typically 95:4:1.

**Q:** Name three institutional Bitcoin custodians.

**A:** Coinbase Custody (Trust Company, NYDFS-chartered), BitGo Trust, Fidelity Digital Assets, Anchorage Digital Bank (OCC-chartered), Gemini Custody. All offer SOC 2 Type II + insurance.

**Q:** What is a Bitcoin OTC desk?

**A:** Over-the-counter, large block trades executed off-exchange to avoid moving the lit-market price. Genesis, Cumberland (DRW), Galaxy, BlockFi (now defunct). Typical minimum trade $100K–$1M.

---

## Module 10, Beyond Bitcoin: The Blockchain Ecosystem

**Q:** What is Ethereum and what was its founding insight?

**A:** Launched July 2015 by Vitalik Buterin et al. Insight: instead of one specialized scripting language (Bitcoin Script), use a Turing-complete virtual machine (EVM) that lets developers deploy arbitrary smart contracts. Sacrificed some auditability for expressiveness.

**Q:** What was The DAO hack (June 2016)?

**A:** A re-entrancy bug in The DAO smart contract drained ~3.6M ETH (~$60M at the time). Led to a contentious hard fork that returned the funds; the non-forking minority became Ethereum Classic (ETC).

**Q:** What was the Terra/Luna collapse (May 2022)?

**A:** UST (an algorithmic, non-collateralized stablecoin) and its sister token LUNA imploded in 4 days. ~$40B in market cap evaporated. Triggered a contagion that took down Three Arrows Capital, Celsius, Voyager, and (six months later) FTX.

**Q:** What is a CBDC and how does it differ from Bitcoin?

**A:** Central Bank Digital Currency, a government-issued, centrally controlled digital currency. Programmable, surveilled, often offline-capable. Opposite design point to Bitcoin (issuer-controlled vs. issuer-less). e-CNY (China) is the largest pilot; ECB digital euro is in design.

**Q:** What is the difference between Bitcoin and "crypto" in 2026 institutional usage?

**A:** "Bitcoin" = the specific protocol launched 2009, conservative changes, store-of-value framing, regulated as a commodity (CFTC). "Crypto" = the broader ecosystem of altcoins, smart-contract platforms, stablecoins, DeFi, NFTs, many regulated as securities (SEC). Institutional allocators increasingly treat Bitcoin as a distinct asset class.

---

## Cross-cutting fundamentals

**Q:** What does "21M cap" actually guarantee?

**A:** That no more than 21M BTC will ever exist *under the current consensus rules*. Rules can change via consensus, but a change to the cap would require near-universal agreement of nodes, miners, and exchanges, and any minority refusing creates a competing chain. In practice the cap is treated as inviolable.

**Q:** Why does Bitcoin use UTXO not accounts?

**A:** UTXO (Unspent Transaction Output) model, every transaction consumes UTXOs and creates new ones. Vs. Ethereum's account-balance model. UTXO advantages: parallelizable validation, no replay attacks, simpler auditing. Disadvantages: less ergonomic for some application patterns.

**Q:** What is replace-by-fee (RBF)?

**A:** BIP-125. Allows a sender to replace an unconfirmed transaction in the mempool with a higher-fee version. Useful when fees spike. Receivers should wait for ≥1 confirmation if they're worried about RBF replacement.

**Q:** What is the Bitcoin block-header size and what's in it?

**A:** 80 bytes. Version (4) + previous block hash (32) + Merkle root (32) + timestamp (4) + difficulty bits (4) + nonce (4). The same 80 bytes are double-SHA-256 hashed for PoW.

**Q:** What is a coinbase transaction?

**A:** The first transaction in every block. Creates new BTC (the block subsidy) + collects all the block's fees. Has no inputs; coinbase field can contain arbitrary data (used historically for messages, signaling, AsicBoost flags).

**Q:** What is a 51% attack?

**A:** An attacker controlling >50% of hashrate can: (a) censor transactions, (b) double-spend by reorganizing recent blocks. Cannot: steal others' coins (signature still needed), inflate supply, or change protocol rules. Cost to mount on Bitcoin: prohibitively high.

**Q:** What is the Lindy Effect as applied to Bitcoin?

**A:** Coined by Mandelbrot (1982), reinterpreted by Taleb. The expected remaining life of a non-perishable thing is proportional to its current age. Bitcoin has now run continuously since 2009, by Lindy, expected to keep running another ~17 years. Used by Bitcoin advocates as a security argument.

**Q:** What is the difference between a node and a wallet?

**A:** A node validates and relays blocks/transactions across the P2P network. A wallet manages keys and constructs transactions. A node need not be a wallet (e.g., a pure verification node); a wallet need not be a node (most light wallets connect to someone else's node).

**Q:** What is "not your keys, not your coins"?

**A:** Andreas Antonopoulos' maxim. If a custodian holds your private keys (exchange wallet, custodial brokerage), you have a *claim* on Bitcoin, you do not *own* Bitcoin. Mt. Gox, QuadrigaCX, Celsius, FTX all proved the point.

---

## Study Tips

Use the section filter dropdown to drill into one module's cards at a time.

For the C4 CBP, prioritize Modules 1–4 (foundations + crypto + wallets), they make up roughly 60% of the question pool. Modules 7, 8, 9 are the next-biggest cluster.

If a card consistently trips you up, look up the corresponding section in the module's Reading.md before moving on. Spaced-repetition with retrieval failure is more useful than passive re-reading.

---

## Before The Exam

- Re-read the white paper (it's only 9 pages) the day before the CBP.
- Run through the Module 8 regulation table from memory, most candidates lose points on FATF Travel Rule + MiCA + FinCEN MSB confusions.
- Verify you can compute: block subsidy after N halvings, expected halving date, transaction fee in sats/vByte, multi-sig spend size.

Good luck. ₿
