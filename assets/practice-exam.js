/* ============================================================
   PRACTICE EXAM ENGINE — The Cert Hub
   ------------------------------------------------------------
   Auto-activates on any page whose URL contains /Practice-Exams/
   (matches all 96 practice + mock exam pages site-wide).

   It parses the existing markdown rendering and transforms each
   question into an interactive radio-button form. On Submit:
   - Scores the exam
   - Shows ✅ / ❌ per question
   - For incorrect answers, surfaces the correct answer + (where
     available) the per-question explanation from the "Detailed
     answer rationales" section.

   Zero changes to any .md file. Pure client-side enhancement.
   If parsing fails for any reason, the page falls back to the
   plain markdown rendering it always had.
   ============================================================ */
(function () {
  'use strict';

  // 1. Detection — only run on Practice-Exam pages
  var path = window.location.pathname || '';
  var IS_PRACTICE_EXAM = /\/Practice-Exams\/(Practice-Exam-\d+|Final-Mock-Exam)\/?$/i.test(path);
  if (!IS_PRACTICE_EXAM) return;

  // 2. Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    try {
      var container = findContainer();
      if (!container) return; // bail silently

      var data = parse(container);
      if (!data.questions.length) return;
      if (!Object.keys(data.answers).length) return;

      render(container, data);
    } catch (e) {
      // Any parse error — leave the markdown as-is.
      console.warn('[practice-exam] parse failed, falling back to static render:', e);
    }
  }

  /* ---------- Step A: find the main content container ---------- */
  function findContainer() {
    // The Jekyll default layout wraps content in <article class="content">
    // or sometimes <main>. Try a few candidates.
    return (
      document.querySelector('article.content') ||
      document.querySelector('main article') ||
      document.querySelector('.content') ||
      document.querySelector('main') ||
      document.body
    );
  }

  /* ---------- Step B: parse questions, options, answers, rationales ---------- */
  function parse(root) {
    var qH3s = [];
    // Every question is an h3 whose text starts with "1." through "999."
    root.querySelectorAll('h3').forEach(function (h) {
      var text = (h.textContent || '').trim();
      var m = /^(\d+)\.\s+/.exec(text);
      if (m) qH3s.push({ num: parseInt(m[1], 10), h: h, title: text.replace(/^\d+\.\s+/, '') });
    });

    // Build each question's option list by walking sibling nodes after the h3
    // until we hit the next h3 / h2 / hr. kramdown often joins single-line-
    // separated options into one paragraph so we have to scan plain text.
    //
    // Parsing strategy: collect the full text of all paragraph/list siblings,
    // then split by option-letter boundaries. The regex looks for the pattern
    // "<letter>. <text>" where the next option's letter pattern (or end-of-
    // string) terminates the current text. This is robust to option text
    // containing arbitrary characters including capital A-G letters (e.g.
    // "Use AWS service" or "Configure GPU memory").
    var questions = qH3s.map(function (q) {
      var combinedText = '';
      var node = q.h.nextElementSibling;
      while (node && node.tagName !== 'H3' && node.tagName !== 'H2' && node.tagName !== 'HR') {
        combinedText += ' ' + (node.textContent || '');
        node = node.nextElementSibling;
      }
      combinedText = combinedText.replace(/\s+/g, ' ').trim();

      // Split by option-letter markers. The pattern "([A-G])\. " must be
      // preceded by start-of-string or whitespace, and the option text runs
      // until the next "[A-G]. " marker (or end-of-string).
      var options = [];
      var optRe = /(^|\s)([A-G])\.\s+([\s\S]+?)(?=\s+[A-G]\.\s+|$)/g;
      var m;
      while ((m = optRe.exec(combinedText)) !== null) {
        options.push({ letter: m[2], text: m[3].trim() });
      }

      // Dedupe by letter (keep first occurrence)
      var byLetter = {};
      options.forEach(function (o) { if (!byLetter[o.letter]) byLetter[o.letter] = o; });
      var unique = Object.keys(byLetter).sort().map(function (L) { return byLetter[L]; });

      return { num: q.num, title: q.title, options: unique, h: q.h };
    }).filter(function (q) { return q.options.length >= 2; });

    // Parse answer key — fenced <code> or <pre> after "Answer Key" h2
    var answers = {};
    var akH = findHeadingByText(root, 'h2', /answer key/i);
    if (akH) {
      // Walk forward to find the next <pre> or <code> block
      var node = akH.nextElementSibling;
      var keyText = '';
      while (node && node.tagName !== 'H2') {
        if (node.tagName === 'PRE' || node.tagName === 'CODE') {
          keyText = node.textContent || '';
          break;
        }
        var inner = node.querySelector && node.querySelector('pre, code');
        if (inner) { keyText = inner.textContent || ''; break; }
        node = node.nextElementSibling;
      }
      // Match patterns like "1. B" / "1.  B" / "1.B"
      var re = /(\d+)\.\s*([A-G])/g, m;
      while ((m = re.exec(keyText)) !== null) {
        answers[parseInt(m[1], 10)] = m[2];
      }
    }

    // Parse per-question explanations (optional)
    // Look for headings/paragraphs that match "Q1. Answer: B" or "**Q1. Answer: B**"
    var explanations = {};
    root.querySelectorAll('p, h3, h4, strong').forEach(function (el) {
      var t = (el.textContent || '').trim();
      var m = /^Q(\d+)\.\s*Answer:\s*([A-G])/i.exec(t);
      if (!m) return;
      var qn = parseInt(m[1], 10);
      if (explanations[qn]) return; // first occurrence wins
      // Collect content until the next "Qn. Answer:" heading
      var bodyEls = [];
      var n = el.nodeName === 'STRONG' ? el.parentElement : el; // hoist if wrapped
      var next = n.nextElementSibling;
      while (next && bodyEls.length < 12) { // safety cap
        var nt = (next.textContent || '').trim();
        if (/^Q\d+\.\s*Answer:/i.test(nt)) break;
        if (next.tagName === 'H2' || next.tagName === 'HR') break;
        bodyEls.push(next.cloneNode(true));
        next = next.nextElementSibling;
      }
      explanations[qn] = { letter: m[2], bodyEls: bodyEls };
    });

    return { questions: questions, answers: answers, explanations: explanations };
  }

  function findHeadingByText(root, tag, regex) {
    var found = null;
    root.querySelectorAll(tag).forEach(function (h) {
      if (!found && regex.test(h.textContent || '')) found = h;
    });
    return found;
  }

  /* ---------- Step C: render the interactive form ---------- */
  function render(root, data) {
    // Container for the engine UI (status bar + results)
    var bar = document.createElement('div');
    bar.className = 'pe-bar';
    bar.innerHTML =
      '<div class="pe-bar-inner">' +
        '<span class="pe-bar-title">📝 Interactive Mode</span>' +
        '<span class="pe-bar-progress" id="pe-progress">0 / ' + data.questions.length + ' answered</span>' +
        '<button type="button" class="pe-btn pe-btn-primary" id="pe-submit" disabled>Submit Exam</button>' +
        '<button type="button" class="pe-btn pe-btn-ghost" id="pe-reset" hidden>Reset</button>' +
      '</div>' +
      '<div class="pe-score" id="pe-score" hidden></div>';

    // Insert bar right before the first question's h3
    var firstH3 = data.questions[0].h;
    firstH3.parentNode.insertBefore(bar, firstH3);

    // Make the bar sticky at top
    bar.classList.add('pe-bar-sticky');

    // Transform each question into a radio-button form
    data.questions.forEach(function (q) {
      transformQuestion(q, data.answers[q.num]);
    });

    // Hide answer key + rationales sections (will reveal selectively on submit)
    var akH = findHeadingByText(root, 'h2', /answer key/i);
    if (akH) hideUntilNextH2(akH);
    var ratH = findHeadingByText(root, 'h2', /detailed answer rationale|answer rationale|detailed answer/i);
    if (ratH) hideUntilNextH2(ratH);

    // Wire up submit + reset
    var submitBtn = document.getElementById('pe-submit');
    var resetBtn  = document.getElementById('pe-reset');
    var progress  = document.getElementById('pe-progress');

    function updateProgress() {
      var answered = 0;
      data.questions.forEach(function (q) {
        if (document.querySelector('input[name="pe-q-' + q.num + '"]:checked')) answered++;
      });
      progress.textContent = answered + ' / ' + data.questions.length + ' answered';
      submitBtn.disabled = answered === 0;
    }

    root.addEventListener('change', function (e) {
      if (e.target && e.target.name && e.target.name.indexOf('pe-q-') === 0) updateProgress();
    });

    submitBtn.addEventListener('click', function () {
      grade(data, bar);
      submitBtn.hidden = true;
      resetBtn.hidden = false;
      // Scroll back to the top so user sees the score
      bar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    resetBtn.addEventListener('click', function () {
      if (!confirm('Reset all answers and start over?')) return;
      window.location.reload();
    });
  }

  function transformQuestion(q, correctLetter) {
    // Build a fieldset with one radio per option
    var fs = document.createElement('fieldset');
    fs.className = 'pe-q';
    fs.dataset.qnum = q.num;
    fs.dataset.correct = correctLetter || '';

    var legend = document.createElement('legend');
    legend.className = 'pe-q-num';
    legend.textContent = 'Question ' + q.num;
    fs.appendChild(legend);

    var feedback = document.createElement('div');
    feedback.className = 'pe-feedback';
    feedback.id = 'pe-feedback-' + q.num;

    q.options.forEach(function (opt) {
      var id = 'pe-q-' + q.num + '-' + opt.letter;
      var lbl = document.createElement('label');
      lbl.className = 'pe-opt';
      lbl.setAttribute('for', id);
      lbl.innerHTML =
        '<input type="radio" name="pe-q-' + q.num + '" id="' + id + '" value="' + opt.letter + '">' +
        '<span class="pe-opt-letter">' + opt.letter + '</span>' +
        '<span class="pe-opt-text"></span>';
      lbl.querySelector('.pe-opt-text').textContent = opt.text;
      fs.appendChild(lbl);
    });
    fs.appendChild(feedback);

    // Find and replace the option <p>/<li> elements that came after this h3
    var node = q.h.nextElementSibling;
    var toRemove = [];
    while (node && node.tagName !== 'H3' && node.tagName !== 'H2' && node.tagName !== 'HR') {
      toRemove.push(node);
      node = node.nextElementSibling;
    }
    if (toRemove.length) {
      q.h.parentNode.insertBefore(fs, toRemove[0]);
      toRemove.forEach(function (n) { n.remove(); });
    } else {
      q.h.parentNode.insertBefore(fs, q.h.nextSibling);
    }
  }

  function hideUntilNextH2(startH2) {
    startH2.style.display = 'none';
    startH2.classList.add('pe-hidden-section');
    var n = startH2.nextElementSibling;
    while (n && n.tagName !== 'H2') {
      n.style.display = 'none';
      n.classList.add('pe-hidden-section');
      n = n.nextElementSibling;
    }
  }

  /* ---------- Step D: grade + show feedback ---------- */
  function grade(data, bar) {
    var correct = 0, attempted = 0;
    data.questions.forEach(function (q) {
      var picked = document.querySelector('input[name="pe-q-' + q.num + '"]:checked');
      var fs = document.querySelector('fieldset.pe-q[data-qnum="' + q.num + '"]');
      var fb = document.getElementById('pe-feedback-' + q.num);
      var corr = (data.answers[q.num] || '').toUpperCase();
      var pickedLetter = picked ? picked.value.toUpperCase() : '';

      // Lock all inputs
      fs.querySelectorAll('input[type=radio]').forEach(function (i) { i.disabled = true; });
      // Highlight options
      fs.querySelectorAll('label.pe-opt').forEach(function (lbl) {
        var input = lbl.querySelector('input');
        if (input.value === corr) lbl.classList.add('pe-opt-correct');
        if (input.value === pickedLetter && pickedLetter !== corr) lbl.classList.add('pe-opt-incorrect');
      });

      if (pickedLetter) attempted++;
      var isRight = (pickedLetter === corr);
      if (isRight) correct++;

      // Feedback block
      fb.classList.add('pe-feedback-shown');
      var fbHtml = '';
      if (!pickedLetter) {
        fbHtml = '<div class="pe-fb-skipped">⚪ Not answered. <strong>Correct answer: ' + corr + '</strong>.</div>';
      } else if (isRight) {
        fbHtml = '<div class="pe-fb-right">✅ <strong>Correct</strong> — you picked ' + pickedLetter + '.</div>';
      } else {
        fbHtml = '<div class="pe-fb-wrong">❌ <strong>Incorrect</strong> — you picked ' + pickedLetter +
                 '. <strong>Correct answer: ' + corr + '</strong>.</div>';
      }
      // Append explanation if available (only for wrong or skipped)
      if (!isRight && data.explanations[q.num] && data.explanations[q.num].bodyEls.length) {
        var expDiv = document.createElement('div');
        expDiv.className = 'pe-fb-explanation';
        expDiv.innerHTML = '<div class="pe-fb-exp-title">Why ' + corr + ' is correct:</div>';
        data.explanations[q.num].bodyEls.forEach(function (el) { expDiv.appendChild(el); });
        fb.innerHTML = fbHtml;
        fb.appendChild(expDiv);
      } else {
        fb.innerHTML = fbHtml;
      }
    });

    // Show the score in the sticky bar
    var total = data.questions.length;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var passing = pct >= 70; // generic threshold; real cert pass marks vary
    var scoreEl = document.getElementById('pe-score');
    scoreEl.hidden = false;
    scoreEl.innerHTML =
      '<div class="pe-score-headline ' + (passing ? 'pe-score-pass' : 'pe-score-fail') + '">' +
        (passing ? '🏆' : '📚') + ' ' + correct + ' / ' + total + ' correct · ' + pct + '%' +
      '</div>' +
      '<div class="pe-score-sub">' +
        attempted + ' answered · ' + (total - attempted) + ' skipped · ' +
        '<a href="#" id="pe-show-key">Show answer key & full rationales</a>' +
      '</div>';

    document.getElementById('pe-show-key').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.pe-hidden-section').forEach(function (n) {
        n.style.display = '';
        n.classList.remove('pe-hidden-section');
      });
      this.textContent = '✓ Answer key revealed below';
      this.style.pointerEvents = 'none';
    });
  }
})();
