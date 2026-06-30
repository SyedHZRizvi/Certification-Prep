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
  var STORAGE_KEY = 'motion-graphics-cards';
  function ready(fn){ if(document.readyState !== 'loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    var app = document.getElementById('fc-app');
    if(!app) return;
    var container = app.parentNode;
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

# 🃏 Motion Graphics & UI Animation, Master Flashcards

> Drill these daily. 15 minutes/day for two weeks builds the vocabulary to communicate in any motion design context.

---

## Module 1, Motion Design Principles

**Q:** What are Disney's 12 Principles of Animation?

**A:** Squash & Stretch, Anticipation, Staging, Pose-to-Pose, Follow-Through/Overlapping Action, Slow In/Slow Out, Arcs, Secondary Action, Timing, Exaggeration, Solid Drawing, Appeal.

---

**Q:** What does "Squash and Stretch" mean and what must be preserved?

**A:** An object elongates in the direction of motion (stretch) and compresses upon impact (squash). Total volume must be preserved, the shape changes but not the overall mass.

---

**Q:** What is the purpose of "Anticipation" in animation?

**A:** A brief reverse or wind-up movement before the main action that telegraphs what's about to happen. Typically 15–25% of the total animation duration.

---

**Q:** What does "Staging" mean in motion graphics?

**A:** Only one primary motion event at a time so the viewer's eye always has a clear focus. Secondary animations should be smaller in scale or offset in time.

---

**Q:** What is the difference between ease-in and ease-out, and when do you use each?

**A:** Ease-in = slow start, fast finish (use for elements exiting the screen). Ease-out = fast start, slow finish (use for elements entering the screen). Matches the physics of departing and arriving objects.

---

**Q:** What are the four parameters of a spring animation?

**A:** Mass, Stiffness (tension), Damping, and Initial Velocity. Higher stiffness = faster/snappier; higher damping = less oscillation/bounce.

---

**Q:** What is the ideal duration for a standard UI transition, per both Google Material Design and Apple HIG?

**A:** 200–300ms. Both converge on this range from independent human-perception research.

---

**Q:** What is the CSS function for defining a custom easing curve?

**A:** `cubic-bezier(x1, y1, x2, y2)`, defines a bezier curve by two control points. X = time axis, Y = progress axis.

---

**Q:** What is "Follow-Through and Overlapping Action"?

**A:** Different parts of an animated system stop at different times. Heavy things stop later. In motion graphics: staggered exits where secondary elements trail after the primary element stops.

---

**Q:** What is the stagger formula for overlapping action?

**A:** `delay = total_duration × 0.15 × item_index`. For a 400ms animation, items stagger at 0ms, 60ms, 120ms, 180ms.

---

**Q:** What is "Pose-to-Pose" animation and how does it relate to all keyframe tools?

**A:** Define key states (start and end); software fills in-between frames using the easing curve. Every keyframe animation tool (AE, GSAP, CSS) is fundamentally pose-to-pose.

---

**Q:** What are Buck Studio's 5 motion principles?

**A:** Purpose, Clarity, Character, Continuity, Economy. Economy = simplest motion that achieves the goal.

---

**Q:** How does Stripe use two distinct motion languages?

**A:** Homepage: slow, organic gradient orb animation (brand/atmospheric). Product dashboard: conventional 200–300ms ease-in-out functional transitions. The two are deliberately separate.

---

## Module 2, AE Expressions & Scripts

**Q:** What keyboard shortcut adds an expression in After Effects (Mac)?

**A:** Option+Click the property stopwatch. (Alt+Click on Windows.)

---

**Q:** What does the `time` variable return in After Effects?

**A:** Current composition time in seconds as a floating-point number. Convert to frames: `time * thisComp.frameRate`.

---

**Q:** What expression creates continuous 360° rotation every 4 seconds?

**A:** `rotation = time * 90` (90 degrees per second × 4 seconds = 360 degrees = one full rotation).

---

**Q:** What are the two required parameters of `wiggle()`?

**A:** `wiggle(frequency, amplitude)`, frequency = wiggles per second; amplitude = max deviation from current value in property units.

---

**Q:** What does `loopOut("pingpong")` do?

**A:** Plays keyframes forward to the end, then backward to the start, alternating, creating a ping-pong bounce loop.

---

**Q:** What does `loopOut("offset")` do differently from `loopOut("cycle")`?

**A:** offset adds the property delta (end−start value) on each loop cycle, creating infinite drift. cycle simply repeats from start.

---

**Q:** What does `valueAtTime(time - 0.3)` do when referencing Layer A from Layer B?

**A:** Layer B samples Layer A's property value from 0.3 seconds ago, creating a 0.3-second delayed mirror (motion echo or trail effect).

---

**Q:** What does the `index` expression return?

**A:** The layer's position in the layer stack (1 = topmost layer). Used to create per-layer offsets for stagger animations.

---

**Q:** What is an Expression Control and where is it applied?

**A:** An effect (Slider, Checkbox, Color, Angle, Point Control) applied to a null or control layer that exposes values any expression in the comp can reference, creating a Master Controller system.

---

**Q:** What is the correct syntax to reference a Slider named "Speed" on a null named "CTRL"?

**A:** `thisComp.layer("CTRL").effect("Speed")("Slider")`

---

**Q:** What is the difference between an expression and a script in After Effects?

**A:** Expressions run live on every frame during playback. Scripts (ExtendScript) execute once when triggered. Different purposes: expressions = dynamic values; scripts = automation.

---

**Q:** What language are AE expressions written in?

**A:** JavaScript. Since AE CC 2019 the default expression engine is a modern JavaScript (V8) engine (ES2018+); the legacy ECMAScript-3 (ExtendScript) engine is still selectable. (Scripting, separate from expressions, uses ExtendScript `.jsx` files.)

---

**Q:** What does `clamp(value, min, max)` do?

**A:** Constrains a value to stay within the min–max range. Prevents runaway values from expressions like wiggle.

---

## Module 3, Typography & Text Animation

**Q:** How do you add a Text Animator in After Effects?

**A:** Select the text layer, then click the "Animate" button on the right side of the text layer in the timeline.

---

**Q:** Which Range Selector property do you keyframe to create a left-to-right text reveal?

**A:** The `Offset` property, keyframed from -100% to 100% to sweep the animator's effect across all characters.

---

**Q:** What is the "Blur > Scale > Opacity" text reveal, and what Scale value is used in the hidden state?

**A:** The canonical text reveal technique. In the hidden state, Scale is set to ~120% (slightly oversized). Characters "deflate" to 100% as they reveal, mimicking physical arrival. Blur and Opacity also animate from hidden (blurred, 0%) to revealed (sharp, 100%).

---

**Q:** What does the Range Selector "Based On" property control?

**A:** Whether the selector operates per Characters, per Words, or per Lines.

---

**Q:** What emotional quality does the Stranger Things title sequence's slow (~40-frame) timing create?

**A:** Weight, dread, and unease. Slow timing = gravity and tension; fast timing = energy and urgency.

---

**Q:** What font was used in Stranger Things and why?

**A:** ITC Benguiat. Chosen for its 1980s mass-market paperback aesthetic and the way its thick strokes "bleed", evoking horror/thriller paperback covers of the era.

---

**Q:** What is the "one technique per piece" rule for kinetic typography?

**A:** Choose one entrance technique and vary its speed and intensity. Multiple unrelated techniques create incoherence. One technique with variations reads as professional.

---

**Q:** What font license type is required for commercial broadcast video?

**A:** Broadcast License (or Video/Commercial License). A Desktop License is only for personal/print use. Using Desktop license for client video is a licensing violation.

---

**Q:** What is "Variable Font" animation in After Effects?

**A:** Animating between different weights (or other axes) within a single variable font file. Creates the "weight bloom" effect where text expands from normal to bold.

---

## Module 4, Logo & Brand Motion

**Q:** What AE feature is used for the draw-on logo reveal technique?

**A:** Trim Paths (found under Contents > Shape in a shape layer). Animate the End property from 0% to 100%.

---

**Q:** What is the key technical requirement for shape morphing in After Effects?

**A:** Both shapes must have the same number of anchor points. AE maps Point 1 to Point 1, etc. Mismatched counts cause twisting.

---

**Q:** Which axis rotation is used for the 3D Flip logo reveal?

**A:** Y-axis rotation, the logo flips from edge-on (90°) to face-forward (0°).

---

**Q:** What is a brand motion vocabulary document and what does it contain?

**A:** Documentation defining a brand's motion language: easing signature, speed signature, direction logic, color-in-motion order, sound pairing, and prohibited motions.

---

**Q:** What color space should After Effects compositions use for broadcast HD delivery?

**A:** Rec. 709 (BT.709). The broadcast legal luminance range is 16–235 (not 0–255 full range).

---

**Q:** What are the broadcast safe zones?

**A:** Title Safe = 80% of frame (text and logos stay inside). Action Safe = 93.75% (moving elements stay inside).

---

**Q:** What is the Netflix "tudum" sound and when was it introduced?

**A:** The Netflix sonic logo, a precisely timed audio event paired with the N ident's final snap. Introduced in 2019.

---

**Q:** What does Lottie export from After Effects, and which company created it?

**A:** Lottie exports AE animations as JSON files. Created by Airbnb's engineering team to solve the GIF/MP4 quality-performance-control problem on mobile.

---

## Module 5, Infographic & Data Viz

**Q:** Where should the anchor point be set on an animated bar chart bar?

**A:** Bottom center, so the bar scales upward from the baseline (not downward from the top or symmetrically from center).

---

**Q:** What technique creates an animated line chart that progressively reveals?

**A:** Trim Paths End animated from 0% to 100% on the shape layer path representing the line.

---

**Q:** How is a donut chart created in After Effects?

**A:** Build a pie chart (using stroke dash offset technique), then add a Track Matte using a solid circle to cut out the center.

---

**Q:** A waffle chart has 100 cells (10×10 grid). What AE expression property makes each cell animate at a unique time?

**A:** `index`. Each cell has a unique index (1–100) used to calculate unique animation delays.

---

**Q:** At approximately what point in a data animation should the key insight appear?

**A:** The 2/3 mark. First 1/3 = establish context; middle 1/3 = animate data change; 2/3 mark = insight reveal; final 1/3 = absorption time.

---

**Q:** What is Motion Bro and what does it do?

**A:** An After Effects panel extension for managing and previewing third-party preset packs (AEJuice, etc.). Allows drag-to-apply of animation presets.

---

**Q:** What is the correct bar-to-gap ratio for bar charts?

**A:** 2:1, bars should be twice as wide as the gaps between them. Standard data visualization guideline.

---

**Q:** What does "proportional duration" mean in data animation?

**A:** The animation duration of a value change should be proportional to the magnitude of that change. A value doubling should animate roughly twice as long as one increasing by 10%.

---

## Module 6, UI Micro-Interactions

**Q:** What is the upper limit of response time perceived as "instant" in UI, per Google Material Design?

**A:** 200ms. Both Material Design and Apple HIG converge on 200ms as the upper limit for "instant" response.

---

**Q:** What does FLIP stand for in the animation technique?

**A:** First, Last, Invert, Play. Only GPU-accelerated transforms are animated (not expensive layout properties).

---

**Q:** Which CSS properties are GPU-accelerated and safe for 60fps animations?

**A:** `transform` and `opacity`. Avoid animating `width`, `height`, `top`, `left`, these trigger layout recalculation.

---

**Q:** Which CSS media query supports reduced-motion accessibility?

**A:** `@media (prefers-reduced-motion: reduce)`, non-optional; users with vestibular disorders depend on it.

---

**Q:** What condition does Figma Smart Animate require for automatic interpolation?

**A:** Elements must have the same name in both frames. Same-named elements are treated as the same element in two states.

---

**Q:** What is a skeleton screen and why does it reduce perceived wait time?

**A:** A placeholder showing the layout shape before data arrives. Reduces cognitive uncertainty and provides something to look at, reducing perceived wait time by 20–40% per NNGroup.

---

**Q:** When is a spinner (not a progress bar) the appropriate loading indicator?

**A:** For indeterminate operations, when the duration is unknown. Progress bars are for determinate operations with measurable progress.

---

**Q:** What is Linear's published motion speed taxonomy?

**A:** Quick = 80–150ms; Comfortable = 200–300ms; Deliberate = 300–500ms. Specific interactions are assigned to specific categories.

---

**Q:** What is affordance signaling through animation?

**A:** Using animation to communicate how users should interact with an element (scale-down = pressable, follow-cursor lag = draggable, chevron rotate = expandable).

---

## Module 7, Lottie & Web Animation

**Q:** Which AE features are NOT supported by Lottie?

**A:** 3D camera animations, raster effects (Effect menu), track mattes with complex blending, certain expressions, time remapping on pre-comps.

---

**Q:** What is GSAP's `scrub: true` in ScrollTrigger?

**A:** Links animation progress to scroll position. Forward scroll = animation plays forward. Backward scroll = animation reverses. The playhead scrubs with the scroll.

---

**Q:** What is the GSAP ScrollTrigger `pin: true` property?

**A:** Fixes the trigger element in place (as if position: fixed) while the scroll-driven animation plays out. Unpins when animation completes.

---

**Q:** What is the Framer Motion `exit` prop and what wrapper is required?

**A:** `exit` animates when a component unmounts from the React tree. Requires `AnimatePresence` wrapper to function.

---

**Q:** What makes React Spring fundamentally different from GSAP?

**A:** React Spring uses physics simulation (mass, tension, friction), not duration-based keyframes. Animations settle naturally when the spring reaches equilibrium.

---

**Q:** What is the Web Animations API (WAAPI)?

**A:** A native browser API for creating and controlling animations without any external library. Supports play, pause, reverse, and seek.

---

**Q:** What does CSS `animation-fill-mode: forwards` do?

**A:** Keeps the element in the animation's final state after it completes. Without it, elements snap back to their pre-animation state.

---

**Q:** When should you use GSAP over Framer Motion?

**A:** GSAP for complex scroll-driven sequences, precise timing control, and vanilla JavaScript contexts. Framer Motion is React-specific and optimized for UI state animations.

---

## Module 8, Social Media Animation

**Q:** What are the standard dimensions for Instagram Reels, TikTok, and YouTube Shorts?

**A:** 1080×1920 pixels, 9:16 aspect ratio.

---

**Q:** What is the "hook window" for TikTok, Instagram Reels, and YouTube Shorts?

**A:** TikTok: 3 seconds. Instagram Reels: 2 seconds. YouTube Shorts: 1.5 seconds. Content that fails to hook in this window gets scrolled past.

---

**Q:** What export codec and container format is recommended for Instagram Reels and TikTok?

**A:** H.264 codec, .mp4 container, 3500–8000 kbps bitrate, AAC audio 192kbps.

---

**Q:** What is the "mobile-first" workflow for social media animation?

**A:** Build the master composition in 9:16 (1080×1920), then reframe to 1:1 (square) and 16:9 (landscape). Never start in landscape and adapt to mobile.

---

**Q:** Why do colors sometimes shift after uploading to social media?

**A:** Platforms re-encode video upon upload, causing color shift, especially in saturated colors. Export in sRGB and review the uploaded version before publishing.

---

**Q:** What percentage of social video is watched with sound off?

**A:** ~85% (particularly Facebook/Meta platforms). This makes animated captions essential, not optional.

---

**Q:** What is the "safe zone" for captions in 9:16 social video?

**A:** Lower 20–30% of the frame, above the platform's UI chrome (like/comment/share buttons) but inside the visible area.

---

**Q:** What metric does YouTube's A/B thumbnail testing measure?

**A:** Impression click-through rate (CTR), how many viewers who see the thumbnail click through to the video.

---

## Module 9, Sound Design & Motion

**Q:** Who coined the term "sound design" and stated that sound is approximately half the cinematic experience?

**A:** Walter Murch, legendary film editor who articulated the sound/vision relationship while working on films including Apocalypse Now.

---

**Q:** What is the three-layer model of sound in motion graphics?

**A:** Music (emotional foundation) + SFX/Sound Effects (event-specific punctuation) + Ambient/Atmosphere (textural background).

---

**Q:** What is an audio transient?

**A:** The initial attack of a sound, the first milliseconds where amplitude rises sharply. It's the ideal visual sync point.

---

**Q:** What is the ±2-frame synchrony rule?

**A:** Within 2 frames of an audio transient, a visual event is perceived as perfectly synchronized. Beyond 2 frames = noticeably out of sync.

---

**Q:** Should visual events lead or lag audio transients?

**A:** Lead by ~1 frame. Visual slightly before audio = tight, intentional. Visual after audio = sluggish.

---

**Q:** What does "royalty-free" music mean?

**A:** You pay a one-time license fee and don't owe per-use royalties. It does NOT mean free to use without a license.

---

**Q:** What is the After Effects feature for converting audio amplitude to keyframes?

**A:** Layer > Audio > Convert Audio to Keyframes. Creates a null layer with keyframes mapped to amplitude peaks.

---

**Q:** Where is the Audio Spectrum effect in After Effects?

**A:** Effect > Generate > Audio Spectrum.

---

**Q:** What must be created on a solid layer before applying the Audio Spectrum effect in circular mode?

**A:** An ellipse mask path. The effect draws the spectrum along the mask path.

---

**Q:** What is "sweetening" in sound design?

**A:** Adding subtle SFX that enhance the audio environment without calling conscious attention to themselves, sounds felt before they are consciously heard.

---

**Q:** What is the Tone of Motion concept?

**A:** The emotional quality of audio and animation vocabulary should match (or deliberately contrast for artistic effect). High-energy audio = fast, sharp motion; ambient audio = slow, smooth motion.

---

## Module 10, Showreel & Client Work

**Q:** What is the maximum recommended showreel length?

**A:** 60 seconds absolute maximum. 45 seconds preferred. Never longer.

---

**Q:** What is the four-zone showreel structure?

**A:** Hook (0–5s, strongest piece), Body (5–45s, 6–10 pieces), Climax (45–55s, complex piece), Close (55–60s, name + contact + website).

---

**Q:** What is the "ruthless edit" rule for showreels?

**A:** If you hesitate even for a second about whether to include a piece, cut it. Weak pieces don't broaden a reel, they weaken it.

---

**Q:** What is the showreel sequencing rule?

**A:** Strongest first, second-strongest last (primacy + recency). Alternate fast/slow. Similar styles not adjacent.

---

**Q:** What is the Specificity Test for showreel pieces?

**A:** "Why is this piece in the reel? What specific skill does it demonstrate?" If the answer is vague, cut the piece.

---

**Q:** What is a "day rate" vs a "project rate" in motion design freelancing?

**A:** Day rate: paid per day regardless of hours protects when scope is unclear. Project rate: paid per defined deliverable protects when scope is well-defined.

---

**Q:** What is the 2026 benchmark day rate for a mid-level motion designer (2–5 years)?

**A:** $600–$1,200 per day in a major US market.

---

**Q:** How many revision rounds are included in the standard freelance project rate?

**A:** 2 rounds. This must be stated explicitly in every proposal. Additional rounds are quoted separately.

---

**Q:** What is the most important conversation in a motion design project before work begins?

**A:** The reference call, watching 5–10 example videos together with the client to surface aesthetic preferences they can't articulate in writing.

---

**Q:** What is "spec work" and what is the industry's consensus?

**A:** Creating work without payment to enter a competition or pitch. Industry consensus: do not do it. It devalues the profession and benefits clients at the designer's expense.

---

**Q:** What is "scope creep" and how do you respond professionally?

**A:** Additional work not defined in the original brief. Respond: "That goes beyond the original scope. I'd be happy to quote that as a separate phase of work."

---

**Q:** Can you include client work in your showreel by default?

**A:** Generally yes, if: the project is publicly released, no NDA covers it, and you credit the client. When in doubt, ask.

---

**Q:** Which platforms are the primary discovery channels for motion designers?

**A:** Motionographer (industry showcase) and Vimeo (portfolio platform). LinkedIn is secondary.

---

**Q:** What is the difference between a sync license and a master license for music?

**A:** Sync license = right to use the musical composition in video sync. Master license = right to use the specific recording. Both are needed to use a published song in a video.
