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
  var STORAGE_KEY = 'vfx-compositing-cards';
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

# 🃏 Claude Architect Flashcards (Master Set)

> **How to use:** Each card has a Q on one line and A on the next. Drill 10-15 minutes per day for at least 2 weeks before the assessment. Use the filter dropdown to focus on a single module at a time.

---

## 🧬 SECTION 1: FOUNDATIONS & CONSTITUTIONAL AI



## 🎬 Module 1, VFX Pipeline

**Q:** What does VFX stand for, and what distinguishes it from practical effects?
**A:** Visual Effects. VFX are created digitally in post-production; practical effects are physical, on-set (pyrotechnics, miniatures, prosthetics). Modern productions combine both.

**Q:** Name the six major departments in a VFX production pipeline.
**A:** Pre-vis (previsualization), Plate photography, 2D (compositing & roto), 3D (CG animation & FX), Digital Matte Painting (DMP), and Editorial/Finishing.

**Q:** What is a "hero shot" in VFX production?
**A:** A shot that receives the most resources because it appears on screen longest or carries the most narrative weight. Animators and compositors spend disproportionate time on hero shots.

**Q:** What does "on-set VFX supervision" involve?
**A:** A VFX supervisor attends the physical shoot to advise on lighting (matching for CG integration), capture reference (HDR probes, lidar scans), place tracking markers, and prevent costly fixes in post.

**Q:** What is The Volume (LED stage) and which major productions used it?
**A:** An LED wall + ceiling environment used instead of green screen. Renders real-time backgrounds that interact with actors and lighting. The Mandalorian (Disney+) popularized it; now used in The Batman, House of the Dragon.

---

## 🎞️ Module 2, Green Screen & Keying

**Q:** What is Keylight, and where does it live?
**A:** Keylight is a professional chroma-keying plugin built into Adobe After Effects (via Academy Award-winning algorithm from The Foundry). It's in Effects > Keying > Keylight.

**Q:** Describe the three-step keying workflow used by professional compositors.
**A:** (1) Rough key pull a clean initial key with aggressive settings. (2) Refined key adjust screen matte, clip black/white. (3) Fine key, edge-softness pass, spill suppression, integrate with plate.

**Q:** What is green spill, and how do you suppress it?
**A:** Green light from the screen reflecting onto the subject, turning edges or skin green. Suppress it with Keylight's Spill Suppression, Screen Shrink/Grow, or a dedicated Spill Suppressor effect.

**Q:** What is a difference matte, and when do you use one?
**A:** Created by shooting a clean background plate without the subject, then subtracting it from the foreground plate. Used when you can't use chroma (glass, transparent objects, uneven lighting).

**Q:** Why does motion blur make keying harder, and how do you handle it?
**A:** Motion blur creates semi-transparent pixel edges that the key algorithm struggles to classify as foreground or background. Handle by keying at motion blur extremes separately or using multiple keys merged with a hold-out matte.

---

## 🪟 Module 3, Rotoscoping

**Q:** What is rotoscoping?
**A:** The frame-by-frame manual tracing of subjects in footage to create a matte (alpha channel mask) for compositing, separating foreground from background without a green screen.

**Q:** What is Rotobrush 2.0 and how does it differ from traditional roto?
**A:** Adobe's AI-powered roto tool in After Effects that automatically propagates mattes across frames using machine learning. Traditional roto requires manual mask adjustments each frame.

**Q:** Name three professional roto software options used at major VFX houses.
**A:** Silhouette (now Boris FX Silhouette), Foundry Nuke's RotoPaint node, and SilhouetteFX. Mocha Pro is common for planar-tracking-assisted roto.

**Q:** What is "roto cheat" and why is it acceptable?
**A:** Using a faster shortcut (loose matte + blur, or color isolation instead of tight roto) when the shot composition or motion hides imperfect edges. Every professional cheats when the camera won't reveal the imperfection.

**Q:** What is an isolation matte used for in color work?
**A:** Masking a specific region (skin, sky, product) so a color correction affects only that area without bleeding into surrounding pixels.

---

## 📍 Module 4, Tracking

**Q:** What is a 1-point track in After Effects?
**A:** Tracks one feature point's position (X/Y) across frames. Useful for attaching a moving element (e.g., badge on a shirt) to a point that doesn't rotate or change scale.

**Q:** What is the difference between a 2D tracker and a 3D camera solve?
**A:** 2D tracker matches the 2D movement of a point or plane in the footage. A 3D camera solve reconstructs the physical camera's 3D position and orientation from 2D footage, enabling accurate CG object integration.

**Q:** What is Mocha and why is it preferred over AE's built-in tracker?
**A:** Mocha (Boris FX) uses planar tracking tracking flat surfaces (walls, screens, foreheads) which is more stable and faster than feature-point tracking, especially with motion blur or partial occlusions.

**Q:** What is a corner pin composite?
**A:** Attaching an image or video to a 4-point warp that matches four tracked corners of a surface (phone screen, billboard), so the replacement element follows the surface's perspective and movement precisely.

**Q:** What is Warp Stabilizer and when should you NOT use it?
**A:** After Effects' built-in stabilization plug-in. Avoid when: you need to add CG elements to the footage (it alters the camera math), or when there's genuine handheld energy you want to preserve.

---

## ✨ Module 5, Particle Systems

**Q:** Name the two most-used particle engines in After Effects.
**A:** Trapcode Particular (Red Giant/Maxon) and the built-in CC Particle World. Particular is the professional standard for film and broadcast; CC Particle World works for simple effects without additional plugins.

**Q:** What are the three main particle parameter groups in Particular?
**A:** Emitter (where/how particles are born), Particle (size, opacity, color, life), and Physics (wind, gravity, turbulence, air resistance).

**Q:** How do you create a believable fire using layers in After Effects?
**A:** Stack: core flame (bright, small, fast particles) + mid flame (medium, warm orange) + smoke (large, dark, slow rise) + heat haze (displacement map layer). 5–7 layers minimum for depth.

**Q:** What is the "rule of 7 layers" in explosion compositing?
**A:** A practical VFX composition guideline: effective explosion shots typically need at least 7 elements, fireball, shockwave, debris, smoke, light (practical flash), dust ground-kick, and heat haze/lens distortion.

---

## 🟢 Module 6, Nuke Fundamentals

**Q:** What is the fundamental difference between Nuke's workflow and After Effects?
**A:** Node-based vs. layer-based. In Nuke, every operation is a node connected in a graph. This allows non-destructive, branching workflows where multiple composites share upstream nodes, essential for large-scale film work.

**Q:** What does the Merge node do in Nuke, and name its three key operations.
**A:** Combines two image streams (A over B). Key operations: Over (A over B, standard composite), Plus (add A and B together, used for glows), and Screen (used for light elements, brightens without blowing out).

**Q:** What is an EXR file and why does VFX use it instead of PNG?
**A:** OpenEXR is a 32-bit floating point image format supporting multiple channels (RGBA + Z-depth + normals + motion vectors) in a single file. Essential for passing render passes from 3D to the compositor.

**Q:** What is a Grade node in Nuke used for?
**A:** Applying a mathematical color correction (lift/gain/gamma, equivalent to offset/gain/gamma). It's Nuke's primary tool for primary color correction on image streams.

---

## 🎨 Module 7, Color Grading

**Q:** What is the difference between primary and secondary color correction?
**A:** Primary = whole-image adjustments (overall exposure, white balance, contrast). Secondary = targeted adjustments to specific colors or regions (skin tone, sky, a particular object).

**Q:** What is a LUT (Look-Up Table)?
**A:** A mathematical table that maps input color values to output color values. Used to convert between color spaces (e.g., log to Rec.709), apply a creative look, or replicate film emulation.

**Q:** What does ACES stand for and why is it important?
**A:** Academy Color Encoding System. A color management framework ensuring consistent color appearance across cameras, software, and displays, critical on large productions with many vendors.

**Q:** What is log footage and why do cameras shoot it?
**A:** A flat, low-contrast image encoding that preserves the maximum dynamic range the camera can capture. It looks washed out but contains full highlight and shadow detail, which a colorist grades into the final look.

**Q:** What is the three-way color corrector and its three controls?
**A:** A Lift/Gamma/Gain (or Shadows/Midtones/Highlights) color wheel tool. Lift adjusts shadows, Gamma adjusts midtones, Gain adjusts highlights, each independently.

---

## 🎭 Module 8, Practical & Digital FX Integration

**Q:** What is a "practical effect" and give three examples.
**A:** A physical, on-set effect. Examples: pyrotechnics (real fire/explosions), miniatures (scale models), prosthetics/animatronics, squib blood hits, snow/rain machines.

**Q:** Why does Gareth Edwards (Monsters, Rogue One) combine practical and digital FX?
**A:** Practical elements add real-world physics, lighting, and texture that's difficult to replicate digitally. CG then extends or replaces only what practical can't achieve, creating a more naturalistic final result.

**Q:** What is wire/rig removal?
**A:** Painting out wires, rigs, green sticks, or crew visible in a shot using frame-by-frame compositing, combining clean background frames or cloned plate areas to erase the rig.

**Q:** What is beauty work (beauty retouching)?
**A:** Frame-by-frame clean-up of cosmetic issues: removing blemishes, under-eye circles, stray hairs, or unwanted wrinkles, common in advertising and music videos.

---

## 💥 Module 9, Destruction & Action FX

**Q:** Name the seven layers typically composited to create a film-quality explosion.
**A:** Fireball core, mid-flame (orange), outer smoke (dark), shockwave (displacement), debris (3D particles), ground dust kick-up, heat haze / lens distortion. Optional: muzzle flash, lens flare.

**Q:** What is a muzzle flash and how is it composited?
**A:** The burst of light and smoke from a firearm when fired. Composited by: placing a stock muzzle flash element on the barrel tip → matching rotation to gun angle → adding a brief, bright light-flicker on the actor and surroundings using a Grade or Exposure node.

**Q:** What is chromatic aberration and when is it added in VFX?
**A:** The separation of color channels at the image edges, caused by a lens imperfection. Added subtly in VFX to help CG elements blend with live-action footage that was shot with real lenses exhibiting the effect.

---

## 🎬 Module 10, VFX Reel & Career

**Q:** What should a compositing reel lead with?
**A:** Your best work, not your newest. The opening 5 seconds determine if a recruiter continues watching. Lead with a visually striking, technically impressive shot that shows your compositing skills clearly.

**Q:** What is a VFX breakdown and why is it essential?
**A:** A before/after split showing the original plate and the finished composite side by side. Demonstrates your specific contribution. Studios want to see what YOU did, not just the final film frame.

**Q:** Name the difference between a VFX Artist and a Compositor career path.
**A:** Compositors specialize in 2D integration (keying, tracking, color matching). VFX Artists is broader, may include simulation, CG integration, and look development. Compositors typically earn $75K–$140K; senior VFX artists $100K–$200K+.

**Q:** What is the IATSE and why does it matter for VFX careers?
**A:** The International Alliance of Theatrical Stage Employees, the union representing VFX workers in the US/Canada. Joining a union shop provides minimum rates, benefits, and overtime protections. Major VFX houses (ILM, Weta) became union shops following worker organizing campaigns in 2022–2023.

---
