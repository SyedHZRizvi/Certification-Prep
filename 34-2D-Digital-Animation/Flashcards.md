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
  var STORAGE_KEY = '2d-animation-cards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: function(n){
        var t = n.tagName;
        if(t === 'H2' || t === 'P') return NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_SKIP;
      }
    });
    var cards = [], sections = [], seen = {}, currentSection = 'General', pendingQ = null, pendingQEl = null;
    var sourceEls = [];
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
      var strong = node.querySelector && node.querySelector('strong');
      if(!strong) continue;
      var marker = (strong.textContent || '').trim().toUpperCase();
      var fullText = (node.textContent || '').trim();
      if(marker.indexOf('Q:') === 0){
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
    sourceEls.forEach(function(el){ el.classList.add('fc-source-hidden'); });
    var hrs = document.querySelectorAll('hr');
    hrs.forEach(function(hr){
      var pos = hr.compareDocumentPosition(app);
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){
        hr.classList.add('fc-source-hidden');
      }
    });
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
    var sectionSel = document.getElementById('fc-section');
    sections.forEach(function(s){
      var opt = document.createElement('option');
      opt.value = s; opt.textContent = s;
      sectionSel.appendChild(opt);
    });
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

## Module 1, Animate Interface & Workflow

**Q:** What is the "pasteboard" in Adobe Animate?

**A:** The gray area surrounding the Stage where off-screen objects can be staged. Objects there are invisible in exports.

---

**Q:** What is the difference between a keyframe and a blank keyframe in Animate?

**A:** A keyframe (filled circle ●) contains artwork and defines a state. A blank keyframe (hollow circle ○) contains no artwork, an intentionally empty moment.

---

**Q:** What are the three symbol types in Adobe Animate?

**A:** Graphic (syncs to parent timeline), Movie Clip (plays independently), and Button (4-state interactive element).

---

**Q:** Which symbol type should be used for a character rig that must stay synchronized with the parent timeline?

**A:** Graphic symbol, its animation syncs to the parent timeline, unlike Movie Clips which play independently.

---

**Q:** What is the difference between Merge Drawing Mode and Object Drawing Mode?

**A:** Merge Drawing: overlapping shapes merge/cut destructively. Object Drawing (J toggle): each shape is a self-contained object that doesn't interact with overlapping shapes.

---

**Q:** What audio sync mode is required for lip sync in Adobe Animate?

**A:** Stream, it ties audio to the playhead position. Event sync plays independently and goes out of sync.

---

**Q:** What keyboard shortcut inserts a blank keyframe in Adobe Animate?

**A:** F7

---

**Q:** What keyboard shortcut converts selected artwork to a symbol in Adobe Animate?

**A:** F8

---

**Q:** What keyboard shortcut inserts a keyframe (with artwork) in Adobe Animate?

**A:** F6

---

**Q:** What keyboard shortcut extends a frame (adds frames without a new keyframe) in Adobe Animate?

**A:** F5

---

**Q:** Where should the registration point of an upper arm symbol be placed for correct rotation in a character rig?

**A:** At the shoulder joint, the pivot point where the arm connects to the body, not the center of the arm.

---

**Q:** What is an OAM file in Adobe Animate?

**A:** An Open Adobe Animate Package, a bundled HTML5 Canvas animation with its dependencies, used for integration with tools like Adobe InDesign and Adobe Experience Manager.

---

**Q:** What does "Break Apart" (Ctrl/Cmd+B) do to a symbol instance?

**A:** Permanently disconnects the instance from the Library symbol, converting it to raw shapes. Changes to the Library symbol no longer affect the broken-apart instance.

---

## Module 2, Frame-by-Frame Animation

**Q:** What is onion skinning?

**A:** A display mode that shows adjacent frames at reduced opacity, letting the animator track motion arcs and spacing during frame-by-frame drawing.

---

**Q:** What does the spatial pattern of onion skins reveal about timing?

**A:** Clustered frames = slow motion at that area; spread frames = fast motion. Even spacing = linear speed.

---

**Q:** What is a "smear frame"?

**A:** A deliberately distorted or elongated drawing placed between two key poses to simulate fast motion that the eye cannot track as a discrete shape. Used extensively in Spider-Verse, anime, and Cuphead.

---

**Q:** What is "animating on twos" at 24fps?

**A:** Drawing a new pose every 2 frames, producing 12 unique drawings per second. Gives the classic hand-drawn cartoon look.

---

**Q:** In the rough-to-cleanup workflow, what is the correct layer order?

**A:** Cleanup layer ABOVE the roughs layer, the animator traces clean lines over the rough guide.

---

**Q:** What is "pose-to-pose" animation?

**A:** Drawing key poses (extremes) first, then filling in the in-betweens later. Better for controlled, planned motion.

---

**Q:** What is "straight-ahead" animation?

**A:** Drawing frame 1, then frame 2, then frame 3, sequentially without planning key poses first. Better for organic, spontaneous effects.

---

**Q:** What does "slow in / slow out" describe in animation?

**A:** The clustering of in-between drawings near key poses, slow at the start and end of a motion, fast in the middle. One of the 12 Principles of Animation.

---

**Q:** What are the four key poses in a walk cycle?

**A:** Contact, Down, Passing, Up.

---

## Module 3, Tweening & Motion Paths

**Q:** What is the key structural difference between a Classic Tween and a Motion Tween?

**A:** Classic Tween: requires two keyframes on the same layer. Motion Tween: tracks property changes on a single span; auto-generates a motion path.

---

**Q:** Which tween type supports per-property easing curves via the Motion Editor?

**A:** Motion Tween only. Classic Tweens use a simple ease slider (-100 to 100).

---

**Q:** What causes "floaty" animation in tweened work?

**A:** Linear easing, no holds at key poses, identical timing for all properties, and no overshoot or cushion.

---

**Q:** What does the "Back Out" ease preset do?

**A:** The object overshoots its destination slightly, then settles back, creating a natural soft landing.

---

**Q:** In the Motion Editor, a steep section of the speed curve indicates:

**A:** Fast movement (rapid property change) at that point in time.

---

**Q:** A flat section of the Motion Editor curve indicates:

**A:** No property change, a hold or very slow movement.

---

**Q:** What is "Orient to Path" in a Motion Tween?

**A:** An option that automatically rotates the symbol so its orientation axis aligns with the direction of travel along the motion path.

---

**Q:** What type of layer provides a drawn path for a Classic Tween object to follow?

**A:** A Motion Guide Layer (added via right-click → Add Classic Motion Guide).

---

## Module 4, Character Rigging in Animate

**Q:** What is FK (Forward Kinematics)?

**A:** Rotating each joint independently from parent to child down the chain. Natural for arms, tails, and hair.

---

**Q:** What is IK (Inverse Kinematics)?

**A:** Moving the end effector (hand or foot); the system solves all joint angles automatically. Natural for planted feet and reaching hands.

---

**Q:** What is the Preston Blair phoneme for M, B, and P sounds?

**A:** MBP, closed or nearly closed mouth.

---

**Q:** What is the Preston Blair phoneme for F and V sounds?

**A:** FV, upper front teeth resting on the lower lip.

---

**Q:** What is the REST phoneme group?

**A:** The mouth position for silence, pause, or exhale, a relaxed, slightly open position.

---

**Q:** What shows are most associated with the cut-out animation workflow?

**A:** South Park, Hazbin Hotel, Archer, and Rick and Morty.

---

**Q:** Why must registration points be consistent across all variants of a mouth shape symbol?

**A:** Symbol swap preserves position and transform; inconsistent registration points cause the swapped symbol to appear in the wrong position.

---

**Q:** What is the "CDG" phoneme group?

**A:** A slightly open mouth with an active tongue position for consonants like D, G, hard C, S, T, and Z.

---

**Q:** What is the "AI" phoneme group?

**A:** A wide-open mouth with visible teeth, used for sounds like "say," "eye," and long A or I vowels.

---

## Module 5, After Effects for 2D

**Q:** What does "Create Shapes from Vector Layers" do in After Effects?

**A:** Converts imported Illustrator layers into native AE Shape Layers with fully editable vector paths, strokes, and fills.

---

**Q:** What is a Null Object in After Effects?

**A:** An invisible (at render time) object used as a rig controller via parenting. It holds transform data without contributing visible artwork.

---

**Q:** What does the Pick Whip do in After Effects?

**A:** It creates a parent-child relationship between two layers. Dragging from the child's Parent column to a parent layer links them hierarchically.

---

**Q:** What keyboard shortcut applies Easy Ease in After Effects?

**A:** F9 (Easy Ease both sides). Shift+F9 = Easy Ease In. Ctrl/Cmd+Shift+F9 = Easy Ease Out.

---

**Q:** What is the Speed Graph in After Effects' Graph Editor?

**A:** Shows velocity (rate of change) over time. Peaks = fast movement; valleys = slow movement or hold.

---

**Q:** What keyboard shortcut pre-composes layers in After Effects?

**A:** Ctrl/Cmd+Shift+C

---

**Q:** The Puppet Pin Tool in After Effects is best for:

**A:** Organic mesh deformation on a single flattened layer. Not ideal for articulated rigs with separate body parts.

---

**Q:** Which Puppet Pin type creates a rigid area that resists mesh deformation?

**A:** Stiff Pin.

---

**Q:** How should you import a layered Illustrator file into AE to keep individual layers accessible?

**A:** File → Import → File → "Import as: Composition, Retain Layer Sizes"

---

## Module 6, Puppet & Bone Tools (DUIK)

**Q:** What is DUIK and who makes it?

**A:** A free, open-source professional character rigging plugin for After Effects, made by RxLaboratory (Nicolas Lebrun / Duduf).

---

**Q:** What is the difference between DUIK Bassel and DUIK Angela?

**A:** Bassel (16.x) is the established stable version; Angela (17.x) is the current generation with an improved auto-rig workflow.

---

**Q:** In a DUIK IK leg rig, which controller does the animator directly keyframe?

**A:** The foot goal (end effector) controller. DUIK's IK solver automatically calculates hip and knee angles from that position.

---

**Q:** What does the "stiffness" parameter control in a DUIK spring rig?

**A:** How quickly the spring element returns to its rest position after being displaced. High stiffness = snaps back quickly; low stiffness = slow, floppy return.

---

**Q:** What does the "damping" parameter control in a DUIK spring rig?

**A:** How quickly the spring oscillation dies out. High damping = oscillation stops quickly; low damping = oscillation continues longer.

---

**Q:** What is the rubber hose animation style?

**A:** Limbs that curve continuously like rubber hoses with no defined elbow or knee break. Associated with 1930s cartoons and deliberately used in Cuphead.

---

**Q:** Joysticks 'n Sliders (J+S) is used for:

**A:** Blending between multiple pre-drawn facial positions using a joystick controller. The animator draws 5 positions (center, up, down, left, right); J+S blends automatically.

---

**Q:** In J+S, what must the animator draw BEFORE setting up the joystick?

**A:** All five face positions as separate artwork: center, up, down, left, and right.

---

## Module 7, Lip Sync & Dialogue

**Q:** How many mouth shapes does the Preston Blair phoneme set use?

**A:** 10 visually distinct shapes (AI, E, O, U, CDG, FV, L, MBP, REST, WQ).

---

**Q:** Why does animation use ~10 mouth shapes instead of all 44 English phonemes?

**A:** Many phonemes that sound different look nearly identical, a reduced set captures the most visually distinct positions efficiently.

---

**Q:** What is the "WQ" phoneme group?

**A:** A small round pucker with rounded cheeks, used for W and Q sounds (as in "wow," "queue").

---

**Q:** What is the "L" phoneme group?

**A:** The mouth is open with the tongue tip visible near the palate, used for the L consonant sound.

---

**Q:** What is Adobe Character Animator used for in lip sync?

**A:** Auto-generating lip sync by analyzing audio and triggering named mouth layers in a layered Photoshop or Illustrator puppet file.

---

**Q:** What type of source file does Character Animator require for its puppets?

**A:** Layered Photoshop (.psd) or Illustrator (.ai) file with layers named to match Ch's phoneme group labels.

---

**Q:** What does "exclusive behaviors" mean for Character Animator mouth layers?

**A:** Only one mouth layer is visible at a time, Ch switches between them exclusively as phonemes change during playback.

---

**Q:** What is the key performance principle beyond technical lip sync?

**A:** The eye moves before the mouth. Characters react (eyes, brows) before they speak, and body acting should reflect the emotional content of the dialogue.

---

## Module 8, Walk Cycles & Action

**Q:** What is the Contact pose in a walk cycle?

**A:** The heel of the lead foot making its first contact with the ground. Arms are at opposite swing positions. Maximum body extension.

---

**Q:** What is the Down pose in a walk cycle?

**A:** The body is at its lowest point as the stepping leg bends to absorb the step's impact.

---

**Q:** What is the Passing position in a walk cycle?

**A:** One foot passes the other in mid-air (mid-swing). The body is at its highest point.

---

**Q:** How many frames does a standard walk cycle take at 24fps?

**A:** 12 frames (2 steps per second).

---

**Q:** How does a run cycle differ from a walk cycle?

**A:** A run cycle includes an airborne phase where both feet are simultaneously off the ground. Standard run = 8 frames at 24fps.

---

**Q:** Anticipation must move in which direction relative to the main action?

**A:** The opposite direction. Jump UP → crouch DOWN first. Punch RIGHT → pull LEFT first.

---

**Q:** What animation style does Cuphead use?

**A:** Snappy animation, long held poses followed by sudden 2–3 frame fast transitions, based on the 1930s Fleischer Brothers style.

---

**Q:** What martial art is Avatar: The Last Airbender's waterbending based on?

**A:** Tai Chi Chuan (flowing, circular, continuous movements).

---

**Q:** What is "follow-through" in animation?

**A:** The continued motion of secondary elements (hair, clothing, accessories) after the primary character motion has stopped.

---

**Q:** What should the frame just BEFORE an impact show?

**A:** Maximum stretch, the body is at full extension before the compression of impact.

---

## Module 9, Exporting & Delivery

**Q:** H.264 output from After Effects requires which application?

**A:** Adobe Media Encoder. H.264 is not available directly from the AE Render Queue.

---

**Q:** Which codec supports alpha transparency in a video format for compositing pipelines?

**A:** ProRes 4444 (MOV). ProRes 422 does not have alpha.

---

**Q:** What is Lottie JSON?

**A:** A vector-based animation format created by Airbnb, exported from After Effects using the Bodymovin plugin. Used for iOS/Android app and web animation.

---

**Q:** Lottie JSON requires which AE layer type to export correctly?

**A:** Shape Layers (vector path data). Raster footage, 3D layers, and many effects do not export to Lottie.

---

**Q:** Why is GIF usually inferior to WebM for web animation?

**A:** GIF is limited to 256 colors (causing banding), has no audio, and often produces larger file sizes than WebM at the same quality. WebM supports full color depth and alpha.

---

**Q:** What color space is standard for US broadcast TV?

**A:** Rec.709 (same primaries as sRGB but different gamma encoding curve).

---

**Q:** sRGB and Rec.709 differ in what key way?

**A:** They share the same color primaries but have different gamma encoding curves. A mismatch causes washed-out or over-bright output.

---

**Q:** What are the delivery specs for TikTok?

**A:** H.264 MP4, 1080×1920 pixels (9:16 portrait), 30fps.

---

**Q:** What plugin exports After Effects compositions to Lottie JSON?

**A:** Bodymovin (free, available on GitHub).

---

**Q:** For web animation that requires transparency (alpha channel), which format should be used?

**A:** WebM (VP9), supports alpha transparency in web browsers.

---

## Module 10, Production Pipeline

**Q:** What are the stages of the 2D studio pipeline in order?

**A:** Development → Pre-Production (storyboard, animatic) → Layout → Rough Animation → Cleanup → Color → Composite → Sound → QC/Delivery.

---

**Q:** What is an animatic?

**A:** A storyboard cut to the final audio in video form, used to test timing and pacing before any animation is produced.

---

**Q:** Why is the animatic stage the best time to catch pacing problems?

**A:** Changes at the animatic stage cost hours of editing. The same changes after rough animation is complete cost weeks of re-animation.

---

**Q:** What is a model sheet?

**A:** A reference document showing a character from multiple angles, in various expressions, with size comparisons and exact color specifications, used to ensure consistency across all animators.

---

**Q:** What does the layout department produce?

**A:** Camera staging, shot composition, background placement, and character position guides for each shot.

---

**Q:** What is Toon Boom Harmony used for?

**A:** Full broadcast pipeline production at major studios (The Simpsons, Rick and Morty, My Little Pony). Offers drawing through compositing in one tool.

---

**Q:** What is TVPaint used for?

**A:** High-quality hand-drawn frame-by-frame animation, used by European studios like Cartoon Saloon (The Secret of Kells, Song of the Sea).

---

**Q:** What is a "color script" in animation production?

**A:** A visual map that assigns a color palette to each scene in a production, ensuring emotional storytelling consistency through color across the entire film or episode.

---

**Q:** What is Toon Boom Storyboard Pro used for?

**A:** Industry-standard storyboarding and animatic creation at major North American animation studios.

---

**Q:** What are three key differences between a broadcast studio pipeline and a solo YouTube creator pipeline?

**A:** Broadcast: larger team (20–200+), much longer timeline (6–24 months per episode), strict delivery specs (ProRes, timecode). YouTube: small team (1–5), faster cycle (1–8 weeks), simpler delivery (H.264 MP4).
