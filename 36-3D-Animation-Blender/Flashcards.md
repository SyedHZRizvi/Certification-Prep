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
  var STORAGE_KEY = '3d-blender-cards';
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
      if(pos & Node.DOCUMENT_POSITION_PRECEDING){ hr.classList.add('fc-source-hidden'); }
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
    try { var raw = localStorage.getItem(STORAGE_KEY); if(raw) known = JSON.parse(raw) || {}; } catch(e){ known = {}; }
    function cardId(c){ return c.section + '||' + c.q; }
    function saveKnown(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(known)); } catch(e){} }
    var deck = cards.slice();
    var idx = 0;
    var sectionFilter = '__all__';
    function applyFilter(){
      if(sectionFilter === '__all__'){ deck = cards.slice(); }
      else { deck = cards.filter(function(c){ return c.section === sectionFilter; }); }
      idx = 0; render();
    }
    function shuffle(){
      for(var i = deck.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i+1));
        var tmp = deck[i]; deck[i] = deck[j]; deck[j] = tmp;
      }
      idx = 0; render();
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
      if(deck.length === 0){ qEl.textContent = 'No cards in this section.'; aEl.textContent = ''; counterEl.textContent = 'Card 0 of 0'; progressBar.style.width = '0%'; knownFront.textContent = ''; knownBack.textContent = ''; return; }
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
      if(val) known[cardId(c)] = 1; else delete known[cardId(c)];
      saveKnown(); next();
    }
    function resetProgress(){ if(!confirm('Clear all "Got it" progress for this deck?')) return; known = {}; saveKnown(); render(); }
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

# 🃏 3D Animation with Blender — Master Flashcards

> **How to use:** Click a card to flip it. Mark "Got it" to skip mastered cards in future sessions. Use the section dropdown to focus on one module at a time.

---

## MODULE 1: BLENDER INTERFACE

**Q:** What does pressing Ctrl+Spacebar do in Blender?
**A:** Maximizes (or restores) the active editor to fill the screen.

**Q:** Which viewport shading mode lets you preview materials with HDRI without a full render?
**A:** Material Preview (the sphere icon in the viewport header shading buttons).

**Q:** What keyboard shortcut opens the N-Panel sidebar in the 3D Viewport?
**A:** N (press again to close).

**Q:** What does G, X, X (double-tap X) do in Object Mode?
**A:** Constrains the Grab transform to the object's local X axis (not world X).

**Q:** How do you frame a selected object in the 3D Viewport?
**A:** Numpad . (period/dot) — frames the selected object in view.

**Q:** What does the eye icon next to an object in the Outliner control?
**A:** Viewport visibility (whether the object is visible in the 3D viewport).

**Q:** What does pressing Z in the 3D Viewport do?
**A:** Opens the shading pie menu (Wireframe / Solid / Material Preview / Rendered).

**Q:** What does Alt+Z do in the viewport?
**A:** Toggles X-ray mode (see through the mesh).

**Q:** Which Blender open movie used a keyboard-first workflow with ~40-60% fewer mouse clicks than Maya?
**A:** Sprite Fright (2021), per the Blender Institute's production blog.

**Q:** What does Ctrl+A do in Object Mode?
**A:** Opens the Apply menu — most commonly used to Apply Scale (and other transforms).

**Q:** What is the keyboard shortcut to search for any Blender operator?
**A:** F3 (opens the Search menu in Blender 4.x).

---

## MODULE 2: 3D MODELING

**Q:** Why are quads (four-sided faces) preferred over triangles for animated characters?
**A:** Quads deform predictably under the Subdivision Surface modifier and bone weighting; triangles cause pinching artifacts at joints.

**Q:** What is the keyboard shortcut for a Loop Cut in Edit Mode?
**A:** Ctrl+R. Scroll the mouse wheel to add multiple cuts simultaneously.

**Q:** What does the Mirror Modifier's Clipping option do?
**A:** Prevents vertices from crossing the mirror axis during editing.

**Q:** At Subdivision Surface level 2, a base mesh of 1,000 polygons becomes how many polygons?
**A:** 16,000 (×16 multiplier at level 2).

**Q:** What is the minimum number of edge loops recommended at a character's elbow joint?
**A:** 3 concentric loops. Shoulder needs 4–5 due to 3-axis rotation.

**Q:** What does Proportional Editing (O key) do?
**A:** Applies transforms with a smooth falloff over a radius of influence — creates organic, sculpt-like results without leaving Edit Mode.

**Q:** The Sprite Fright character Ellie had approximately how many polygons in her base mesh?
**A:** ~4,800 polygons (before subdivision).

**Q:** What shortcut selects an entire edge ring in Edit Mode?
**A:** Ctrl+Alt+Click on an edge.

**Q:** What does Shift+E do on selected edges in Edit Mode?
**A:** Sets the crease value — higher crease = sharper edge under Subdivision Surface.

**Q:** What is the correct production workflow order for a character base mesh?
**A:** Block-out → topology refinement (add edge loops) → apply Subdivision Surface modifier for render.

---

## MODULE 3: MATERIALS & TEXTURING

**Q:** In the Principled BSDF, what is the physically correct range for the Metallic parameter?
**A:** 0 (dielectric: plastic, skin, wood) or 1 (conductor: iron, gold, copper). Values between 0.1 and 0.9 are not physically based.

**Q:** What Color Space must a Normal Map texture be set to in Blender's Image Texture node?
**A:** Non-Color — prevents the color space remapping that would distort the normal vectors.

**Q:** What does the Roughness parameter at 0 produce in the Principled BSDF?
**A:** A mirror-smooth surface (perfectly tight specular highlight).

**Q:** Where should UV seams be placed on a humanoid character?
**A:** At areas least visible to the camera — under arms, inside legs, behind ears, under the chin.

**Q:** What is the keyboard shortcut to add a node in the Shader Editor?
**A:** Shift+A.

**Q:** What does Ctrl+Shift+Click do in the Shader Editor?
**A:** Previews the clicked node's output directly in the viewport (Material Preview or Rendered mode).

**Q:** What Substance Painter export preset should you use for Blender?
**A:** Blender (Metallic/Roughness). Also set Normal Map to OpenGL (not DirectX).

**Q:** Which Sony Pictures Animation film used a hybrid toon-shading approach (2D aesthetics over 3D geometry) discussed in this course?
**A:** The Mitchells vs. the Machines (2021).

**Q:** What are Quixel Megascans licensed as, enabling their free use in commercial productions?
**A:** CC0 (Creative Commons Zero) — free for all uses via Fab.com.

**Q:** What PBR workflow does Blender's Principled BSDF use?
**A:** Metallic/Roughness (the Disney PBR standard — same as Unreal Engine, Unity's HDRP, Substance Painter default).

---

## MODULE 4: LIGHTING & HDRI

**Q:** In three-point lighting, what is the key-to-fill ratio for a horror/thriller scene?
**A:** 16:1 or more (fill at 6% or less of key intensity).

**Q:** What is unique about the Sun light type in Blender?
**A:** Its position in the viewport is completely irrelevant — only its rotation determines shadow direction.

**Q:** What is the color temperature of candlelight?
**A:** ~1,800K (very warm orange).

**Q:** What is the color temperature of overcast daylight?
**A:** ~6,500K (cool blue-white).

**Q:** What does the HDRI Strength parameter on the Background node (World Shader) control?
**A:** The overall intensity/brightness of the environment lighting.

**Q:** What is the best free CC0 HDRI source mentioned in this course?
**A:** Poly Haven (polyhaven.com) — CC0 HDRIs up to 16K resolution.

**Q:** How do you rotate the HDRI environment in Blender's World Shader?
**A:** Add a Mapping node (connected to Texture Coordinate set to Generated) before the Environment Texture node. Rotation Z rotates the HDRI heading.

**Q:** What was the average number of light objects per shot in the Sprite Fright production?
**A:** 12–18 light objects per average shot.

**Q:** The Sprite Fright team described their lighting philosophy in one phrase. What is it?
**A:** "Every light has a reason" — every light is motivated by something visible or implied in the scene.

**Q:** For a comedy/family animation, what key-to-fill ratio is recommended?
**A:** 2:1 to 3:1 (fill at 33–50% of key intensity — low contrast, character fully lit and readable).

---

## MODULE 5: RIGGING & ARMATURES

**Q:** What naming convention does Rigify require for bilateral symmetry?
**A:** .L and .R suffixes (e.g., UpperArm.L, UpperArm.R).

**Q:** What is the bone roll and why does it matter?
**A:** The roll is the rotation of the bone's local X/Z axes around its Y (length) axis. Wrong roll causes animation to deform in unexpected directions.

**Q:** What does Ctrl+N do in Armature Edit Mode with bones selected?
**A:** Recalculates (corrects) the bone roll to a chosen reference axis.

**Q:** In IK (Inverse Kinematics), what does the Chain Length setting of 2 mean?
**A:** The IK solver covers the 2 bones above the constrained tip bone (e.g., lower leg + upper leg for a leg IK).

**Q:** What is a pole target?
**A:** A separate bone or empty that acts as a magnet defining which direction the elbow/knee bends in an IK chain.

**Q:** What are Rigify's CTRL bones?
**A:** The control bones visible to and manipulated by animators. DEF (deform) and MCH (mechanism) bones are hidden.

**Q:** What is a corrective shape key?
**A:** A stored mesh deformation that compensates for deformation artifacts at joints (skin bag, candy wrapper twist), driven by bone rotation via Blender's Driver system.

**Q:** In Blender 4.x, Bone Collections replace which older feature?
**A:** Bone Layers (the numbered layer system from Blender 3.x and earlier).

**Q:** What shortcut connects a mesh to an armature with automatic weights?
**A:** Select mesh → Shift+select armature → Ctrl+P → Armature Deform with Automatic Weights.

**Q:** Why is IK preferred for foot-planting?
**A:** IK moves the end effector (the foot controller) while the chain solves automatically — the foot stays planted on the ground as the body moves over it.

---

## MODULE 6: WEIGHT PAINTING & SKINNING

**Q:** In Weight Paint mode, what does red coloring on a vertex indicate?
**A:** Weight = 1.0 (full influence from the active bone).

**Q:** In Weight Paint mode, what does blue coloring on a vertex indicate?
**A:** Weight = 0.0 (no influence from the active bone).

**Q:** What does Auto Normalize do in Weight Paint mode?
**A:** Forces all bone weight values for any vertex to always sum to exactly 1.0. ALWAYS enable this.

**Q:** What is the "skin bag" problem?
**A:** The armpit or hip area collapses into a deflated, messy shape when a limb is raised — caused by incorrect weight distribution between nearby bones.

**Q:** What is the Basis shape key?
**A:** The neutral, rest-pose geometry of the mesh — the reference all other shape keys are applied relative to.

**Q:** Why should shape keys be designed as independent expressions?
**A:** Because shape keys are additive — multiple active shape keys fight each other. A Smile and a Frown both at 0.8 produce unpredictable results.

**Q:** How are shape keys driven from bones in production?
**A:** Via Blender's Driver system: right-click the shape key value → Add Driver → link to bone rotation channel → map input range.

**Q:** How long did the Sprite Fright production team spend on weight painting per humanoid character?
**A:** 2–4 days per character, including corrective shape keys and driver setup.

**Q:** What tool in Blender allows copying weight groups from the body mesh to a clothing mesh?
**A:** The Data Transfer modifier (Physics not required — it's in the modifier stack).

**Q:** What is the minimum set of facial shape keys for basic character expression?
**A:** Blink.L, Blink.R, Smile, Mouth.Open — the four basics that cover most dialogue and reaction performances.

---

## MODULE 7: KEYFRAME ANIMATION & GRAPH EDITOR

**Q:** What keyboard shortcut inserts a keyframe in the 3D Viewport?
**A:** I (opens the Insert Keyframe menu).

**Q:** What does pressing S on selected keyframes in the Dope Sheet do?
**A:** Scales the timing — stretches or compresses the spacing between selected keyframes.

**Q:** What does a flat horizontal handle at a keyframe in the Graph Editor indicate?
**A:** Ease-in/out — the animated value decelerates to a stop at that keyframe (natural physics behavior).

**Q:** What is Constant (Stepped) interpolation used for?
**A:** Blocking passes — holds the value at each keyframe until the next, allowing timing to be judged on key poses alone.

**Q:** What does the Cycles modifier in the Graph Editor do?
**A:** Extends an F-Curve infinitely by repeating its pattern — used for seamless looping animations.

**Q:** What is the industry-standard animation production workflow order?
**A:** Stepped/Constant blocking → director approval → convert to Bezier spline → spline polish.

**Q:** For a seamless walk cycle at 24fps with a 24-frame cycle, which frames must have identical poses?
**A:** Frame 1 and Frame 25 (the 25th frame bridges the loop back to the start).

**Q:** What does "Push Down" do in the NLA Editor?
**A:** Converts the active Action in the Action Editor into an NLA strip on the NLA timeline.

**Q:** What is a Fake User on a Blender Action?
**A:** A flag (shield icon) that prevents Blender from deleting the Action as orphan data when the file is saved and closed.

**Q:** What Blender Foundation open movie used a 12-frame gallop cycle extended with the Cycles modifier?
**A:** Charge (2022).

---

## MODULE 8: PHYSICS & SIMULATIONS

**Q:** What is the difference between an Active and Passive rigid body?
**A:** Active = governed by physics (falls, bounces, collides). Passive = fixed collider that other Active objects bounce off without moving.

**Q:** What Collision Shape is recommended for most solid props in a rigid body simulation?
**A:** Convex Hull — approximates the convex envelope; faster than Mesh but accurate for most solid objects.

**Q:** What does the Pinning vertex group in cloth simulation control?
**A:** The vertices that do not move in the simulation — the attachment points that hold the cloth to the character.

**Q:** What causes cloth simulations to explode or produce spikes?
**A:** Bad mesh topology: n-gons, very long thin quads, or non-manifold edges.

**Q:** What are the three required object types for a Mantaflow fluid simulation?
**A:** Domain (bounding box), Flow (fluid emitter), Effector (collision obstacle).

**Q:** What file format does Mantaflow use for fluid volume cache data?
**A:** OpenVDB (.vdb).

**Q:** Why must simulations always be baked before rendering?
**A:** Unbaked simulations recalculate from frame 1 for every render call — causing inconsistent, wrong results especially in distributed rendering.

**Q:** Which Sony Animation film used a hybrid keyframe-trigger → physics approach for robot debris, referenced in this course?
**A:** The Mitchells vs. the Machines (2021).

**Q:** What new hair system did Blender 4.0 introduce?
**A:** Hair Curves objects with Geometry Nodes-based grooming — replacing the older Particle Hair system for new projects.

**Q:** What does the Cloth Self Collision option prevent?
**A:** The cloth mesh from passing through itself (intersecting its own geometry).

---

## MODULE 9: RENDERING & OUTPUT

**Q:** What rendering algorithm does Cycles use?
**A:** Path tracing — physically accurate light simulation including global illumination, caustics, and subsurface scattering.

**Q:** What is EEVEE's primary limitation compared to Cycles?
**A:** It approximates lighting rather than physically simulating it — less accurate shadows, indirect light, and subsurface scattering.

**Q:** Which denoiser requires an NVIDIA RTX GPU?
**A:** OptiX (NVIDIA's AI denoiser using Tensor Cores). CPU alternative: OpenImageDenoise (Intel OIDN).

**Q:** Why should you never render production animation directly to MP4?
**A:** If the render crashes, all frames are lost and rendering must restart from frame 1. PNG or EXR sequences allow resuming from the crashed frame.

**Q:** What does the OpenEXR MultiLayer format store?
**A:** All enabled render passes (Combined, Diffuse, AO, Shadow, Depth, Cryptomatte, etc.) in a single .exr file per frame.

**Q:** What does the Depth (Z) render pass contain?
**A:** The per-pixel distance from the camera to the nearest surface — used for depth-of-field blur in compositing.

**Q:** What is Cryptomatte used for in compositing?
**A:** Generating per-object masks — click on an object in the Cryptomatte pass to isolate it for independent color grading.

**Q:** The Sprite Fright production rendered at which resolution and aspect ratio?
**A:** 2048×858 — 2K DCI Scope (2.39:1 aspect ratio).

**Q:** What sample count optimization did Sprite Fright use to cut render time by ~40%?
**A:** Rendering foreground characters at 512 samples and background elements at 64 samples in separate View Layers.

**Q:** What CRF value is recommended for a high-quality H.264 MP4 final delivery?
**A:** CRF 18–23 (lower value = higher quality and larger file size).

---

## MODULE 10: SHORT FILM PROJECT

**Q:** What are the four questions a short film concept sheet must answer?
**A:** What happens, who is the character, where does it take place, what is the emotional payoff.

**Q:** What is an animatic?
**A:** A timed slideshow of storyboard panels cut to planned shot durations — built in Blender's VSE.

**Q:** How many frames must be rendered for a 10-second short at 24fps?
**A:** 240 frames.

**Q:** What is the correct production phase order for a short film?
**A:** Concept → Model → Materials → Rig → Animate (blocking → spline) → Light → Render → Composite → Deliver.

**Q:** What Blender Foundation short was made by ~2 artists in ~3 months?
**A:** Coffee Run (2020) — the benchmark for minimal-team indie Blender production.

**Q:** What is "follow-through" in animation?
**A:** Secondary parts (hair, clothing, tail) continuing to move after the main body has stopped — they lag, overshoot their final position, and settle.

**Q:** What is Z-fighting and how is it caused?
**A:** A flickering artifact in renders caused by two mesh surfaces occupying nearly the same position in 3D space — they compete for which renders in front.

**Q:** What is the recommended delivery format for a portfolio short film?
**A:** H.264 MP4, CRF 18–23, 1920×1080, 24fps.

**Q:** What is the most important self-review question for a finished short film?
**A:** Is the emotional beat felt clearly by a viewer who has no prior context about the production?

**Q:** What does Ian Hubert's "Lazy Tutorials" philosophy teach about short film production?
**A:** Get the camera positioned smartly and close enough — the viewer's imagination fills in what they don't see. Smart framing beats high polygon count.

---
