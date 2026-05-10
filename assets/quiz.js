/* ============================================================
   Interactive Quiz Engine v2 — with randomization
   © 2026 Syed Humayun Zafar Rizvi

   Each attempt:
     - Picks a random subset of questions (configurable size)
     - Shuffles question order
     - Shuffles answer-option order (A/B/C/D positions change)
   "Try Again" reshuffles → genuinely different test experience.
   ============================================================ */
(function () {
  'use strict';

  // Default subset size when bank is large. If bank has fewer questions,
  // shows all of them (still shuffled).
  var DEFAULT_SUBSET = 15;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var article = document.querySelector('article.content');
    if (!article) return;

    var allH3 = article.querySelectorAll('h3');
    if (allH3.length < 2) return;

    var qTest = 0;
    for (var i = 0; i < allH3.length; i++) {
      if (/^Q\d+\./.test(allH3[i].textContent.trim())) qTest++;
      if (qTest >= 2) break;
    }
    if (qTest < 2) return;

    var pool = parseAll(article);
    if (!pool.length) return;

    // Build widget shell + first attempt
    var widget = document.createElement('div');
    widget.className = 'qz-widget';
    var pageTitle = '';
    var h1 = article.querySelector('h1');
    if (h1) pageTitle = h1.textContent.replace(/^\s*✏️?\s*/, '').trim();

    var intro = '';
    if (h1) {
      var n = h1.nextElementSibling;
      while (n && n.tagName !== 'P' && n.tagName !== 'BLOCKQUOTE' && n.tagName !== 'H2') n = n.nextElementSibling;
      if (n && (n.tagName === 'P' || n.tagName === 'BLOCKQUOTE')) intro = n.textContent.trim();
    }

    article.insertBefore(widget, article.firstChild);
    hideSource(article, widget);

    // State held in closure
    var state = {
      pool: pool,
      pageTitle: pageTitle,
      intro: intro,
      currentSet: null
    };

    renderAttempt(widget, state);
  }

  // ========== PARSING ==========
  function parseAll(article) {
    var allH3 = Array.from(article.querySelectorAll('h3'));
    var qByNum = {};

    // Pass 1: questions
    allH3.forEach(function (h3) {
      var text = h3.textContent.trim();
      var m = text.match(/^Q(\d+)\.\s+(.+?)\??:?\s*$/);
      if (!m) return;
      var qNum = parseInt(m[1], 10);
      var qText = m[2].replace(/[:?]\s*$/, '').trim();

      var sib = h3.nextElementSibling;
      while (sib && sib.tagName !== 'P' && sib.tagName !== 'H3' && sib.tagName !== 'H2' && sib.tagName !== 'HR') {
        sib = sib.nextElementSibling;
      }
      if (!sib || sib.tagName !== 'P') return;

      var optionsText = sib.textContent.trim();
      var optionsMap = parseOptionsMap(optionsText);
      if (Object.keys(optionsMap).length < 2) return;

      qByNum[qNum] = {
        num: qNum,
        text: qText,
        optionsByLetter: optionsMap,
        correctLetter: null,
        correctText: null,
        explanation: ''
      };
    });

    // Pass 2: answers
    allH3.forEach(function (h3) {
      var text = h3.textContent.trim();
      var m = text.match(/^Q(\d+):\s*\*?\*?([A-D])\.?\s*(.*?)\*?\*?\s*$/);
      if (!m) return;
      var qNum = parseInt(m[1], 10);
      var letter = m[2];
      var fullText = (m[3] || '').replace(/\*\*/g, '').trim();
      if (!qByNum[qNum]) return;

      qByNum[qNum].correctLetter = letter;
      qByNum[qNum].correctText = fullText || qByNum[qNum].optionsByLetter[letter] || '';

      var sib = h3.nextElementSibling;
      var explHTML = '';
      while (sib && sib.tagName !== 'H3' && sib.tagName !== 'H2' && sib.tagName !== 'HR') {
        if (sib.textContent.trim() || sib.tagName === 'UL' || sib.tagName === 'OL') {
          explHTML += sib.outerHTML;
        }
        sib = sib.nextElementSibling;
      }
      qByNum[qNum].explanation = explHTML;
    });

    var pool = [];
    Object.keys(qByNum).forEach(function (k) {
      var q = qByNum[k];
      if (!q.correctLetter) return;
      // Convert options dict to array of {text, isCorrect}
      var optsArr = ['A','B','C','D'].filter(function (l) { return q.optionsByLetter[l]; }).map(function (l) {
        return { text: q.optionsByLetter[l], isCorrect: (l === q.correctLetter) };
      });
      if (optsArr.length < 2) return;
      pool.push({
        origNum: q.num,
        text: q.text,
        options: optsArr,            // canonical order
        correctText: q.correctText || (optsArr.find(function(o){return o.isCorrect;}) || {}).text || '',
        explanation: q.explanation
      });
    });

    return pool;
  }

  function parseOptionsMap(text) {
    var options = {};
    var regex = /\b([A-D])\.\s+([\s\S]+?)(?=\s+\b[A-D]\.\s|$)/g;
    var m;
    while ((m = regex.exec(text)) !== null) {
      options[m[1]] = m[2].trim();
    }
    return options;
  }

  // ========== RANDOMIZATION ==========
  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pickAttempt(pool, size) {
    var subsetSize = Math.min(size, pool.length);
    var shuffledPool = shuffleArr(pool);
    var subset = shuffledPool.slice(0, subsetSize);
    return subset.map(function (q, idx) {
      var shuffledOpts = shuffleArr(q.options);
      return {
        displayNum: idx + 1,
        origNum: q.origNum,
        text: q.text,
        options: shuffledOpts,            // randomized A/B/C/D positions
        correctText: q.correctText,
        explanation: q.explanation
      };
    });
  }

  // ========== RENDER ==========
  function renderAttempt(widget, state) {
    state.currentSet = pickAttempt(state.pool, DEFAULT_SUBSET);
    var displayedN = state.currentSet.length;
    var totalN = state.pool.length;

    var poolNote = displayedN < totalN
      ? '<strong>' + displayedN + ' random questions</strong> drawn from a pool of ' + totalN
      : '<strong>' + displayedN + ' question' + (displayedN === 1 ? '' : 's') + '</strong>';

    widget.innerHTML =
      '<div class="qz-header">' +
        '<h2>📝 ' + escapeHTML(state.pageTitle || 'Interactive Quiz') + '</h2>' +
        '<p class="qz-meta">' +
          (state.intro ? escapeHTML(state.intro) + '<br>' : '') +
          poolNote + ' · ' +
          '<span style="color:#6366f1;font-weight:600;">🔀 Order &amp; choices randomized</span> · ' +
          'Pick the best answer for each, then click <strong>Submit</strong>.' +
        '</p>' +
        '<div class="qz-progress-bar"><div class="qz-progress-fill" id="qz-progress"></div></div>' +
      '</div>' +
      '<div class="qz-questions" id="qz-questions">' +
        state.currentSet.map(renderQuestion).join('') +
      '</div>' +
      '<div class="qz-actions">' +
        '<button class="qz-btn qz-btn-submit" id="qz-submit">✓ Submit Answers</button>' +
        '<button class="qz-btn qz-btn-reset" id="qz-reset" style="display:none;">🔀 Try Again (new set)</button>' +
      '</div>' +
      '<div class="qz-result" id="qz-result"></div>';

    setTimeout(function () {
      widget.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener('change', function () { updateProgress(widget, displayedN); });
      });
      widget.querySelector('#qz-submit').addEventListener('click', function () {
        gradeQuiz(widget, state);
      });
      widget.querySelector('#qz-reset').addEventListener('click', function () {
        toastReshuffle();
        renderAttempt(widget, state);
        widget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }, 0);
  }

  function renderQuestion(q) {
    // q.options is already shuffled. Display at positions 0..3 = letters A..D.
    var letters = ['A', 'B', 'C', 'D'];
    var optionsHTML = q.options.map(function (opt, idx) {
      var letter = letters[idx];
      return '<label class="qz-option" data-q="' + q.displayNum + '" data-letter="' + letter + '" data-idx="' + idx + '">' +
        '<input type="radio" name="qz-q-' + q.displayNum + '" value="' + idx + '">' +
        '<span class="qz-letter">' + letter + '</span>' +
        '<span class="qz-option-text">' + escapeHTML(opt.text) + '</span>' +
      '</label>';
    }).join('');

    return '<div class="qz-question" data-q="' + q.displayNum + '">' +
      '<h3 class="qz-q-title"><span class="qz-q-num">' + q.displayNum + '</span>' + escapeHTML(q.text) + '</h3>' +
      '<div class="qz-options">' + optionsHTML + '</div>' +
      '<div class="qz-feedback" id="qz-fb-' + q.displayNum + '"></div>' +
    '</div>';
  }

  function updateProgress(widget, total) {
    var answered = widget.querySelectorAll('input[type="radio"]:checked').length;
    var pct = total ? (answered / total) * 100 : 0;
    var fill = widget.querySelector('#qz-progress');
    if (fill) fill.style.width = pct + '%';
  }

  // ========== GRADING ==========
  function gradeQuiz(widget, state) {
    var questions = state.currentSet;
    var correct = 0;
    var skipped = 0;
    var letters = ['A', 'B', 'C', 'D'];

    questions.forEach(function (q) {
      var selectedInput = widget.querySelector('input[name="qz-q-' + q.displayNum + '"]:checked');
      var userIdx = selectedInput ? parseInt(selectedInput.value, 10) : null;
      var correctIdx = q.options.findIndex(function (o) { return o.isCorrect; });
      var isCorrect = userIdx === correctIdx;
      if (isCorrect) correct++;
      if (userIdx === null) skipped++;

      var qEl = widget.querySelector('.qz-question[data-q="' + q.displayNum + '"]');
      if (!qEl) return;

      qEl.querySelectorAll('.qz-option').forEach(function (opt) {
        var idx = parseInt(opt.getAttribute('data-idx'), 10);
        opt.classList.add('qz-graded');
        if (idx === correctIdx) opt.classList.add('qz-correct');
        else if (idx === userIdx) opt.classList.add('qz-wrong');
        var inp = opt.querySelector('input');
        if (inp) inp.disabled = true;
      });

      var fb = widget.querySelector('#qz-fb-' + q.displayNum);
      if (!fb) return;
      var correctOpt = q.options[correctIdx];
      var correctFull = letters[correctIdx] + '. ' + escapeHTML(correctOpt.text);
      var explHTML = q.explanation ? '<div class="qz-explanation">' + q.explanation + '</div>' : '';

      if (userIdx === null) {
        fb.innerHTML = '<div class="qz-fb qz-fb-skip">' +
          '<div class="qz-fb-title">⚠️ Skipped — no answer selected</div>' +
          'Correct answer: <strong>' + correctFull + '</strong>' + explHTML +
        '</div>';
      } else if (isCorrect) {
        fb.innerHTML = '<div class="qz-fb qz-fb-correct">' +
          '<div class="qz-fb-title">✅ Correct! Nice work.</div>' +
          'Answer: <strong>' + correctFull + '</strong>' + explHTML +
        '</div>';
      } else {
        var userLetter = letters[userIdx];
        var userText = q.options[userIdx].text;
        fb.innerHTML = '<div class="qz-fb qz-fb-wrong">' +
          '<div class="qz-fb-title">❌ Not quite</div>' +
          'You picked <strong>' + userLetter + '. ' + escapeHTML(userText) + '</strong>.<br>' +
          'Correct answer: <strong>' + correctFull + '</strong>' + explHTML +
        '</div>';
      }
    });

    var pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    showScore(widget, correct, questions.length, pct, skipped);

    widget.querySelector('#qz-submit').style.display = 'none';
    widget.querySelector('#qz-reset').style.display = 'inline-flex';

    setTimeout(function () {
      var result = widget.querySelector('#qz-result');
      if (result) result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  function showScore(widget, correct, total, pct, skipped) {
    var badge, msg, cls;
    if (pct === 100) {
      badge = '🏆'; msg = 'Perfect score! You know this material cold.'; cls = 'is-perfect';
    } else if (pct >= 85) {
      badge = '✅'; msg = 'Excellent — exam-ready on this topic. Hit Try Again for a fresh test.'; cls = 'is-good';
    } else if (pct >= 70) {
      badge = '👍'; msg = 'Good. Read the wrong-answer explanations, then Try Again with a new set.'; cls = 'is-good';
    } else if (pct >= 50) {
      badge = '⚠️'; msg = 'Halfway there. Re-read the module, then come back for a fresh quiz set.'; cls = 'is-mid';
    } else {
      badge = '🔁'; msg = 'Re-study the entire module. The explanations below show what to focus on.'; cls = 'is-low';
    }
    var skipNote = skipped > 0 ? '<div class="qz-score-msg">⚠️ ' + skipped + ' question' + (skipped === 1 ? '' : 's') + ' skipped (counted as incorrect).</div>' : '';
    var result = widget.querySelector('#qz-result');
    if (!result) return;
    result.innerHTML = '<div class="qz-score-card ' + cls + '">' +
      '<div class="qz-score-badge">' + badge + '</div>' +
      '<div>' +
        '<div class="qz-score-num">' + correct + ' / ' + total + '</div>' +
        '<div class="qz-score-pct">' + pct + '% correct</div>' +
        '<div class="qz-score-msg">' + msg + '</div>' +
        skipNote +
      '</div>' +
    '</div>';
  }

  function toastReshuffle() {
    var existing = document.getElementById('qz-toast');
    if (existing) existing.remove();
    var t = document.createElement('div');
    t.id = 'qz-toast';
    t.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#0f172a;color:#fff;padding:12px 22px;border-radius:10px;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 12px 30px rgba(0,0,0,.35);font-family:Inter,sans-serif;';
    t.innerHTML = '🔀 Fresh test — questions and answer choices reshuffled';
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.remove(); }, 2200);
  }

  // ========== HIDE SOURCE ==========
  function hideSource(article, widget) {
    var children = Array.from(article.children);
    var hideMode = false;
    children.forEach(function (el) {
      if (el === widget) return;
      if (!hideMode) {
        if (el.tagName === 'H2' && /Question/i.test(el.textContent)) hideMode = true;
        else if (el.tagName === 'H3' && /^Q\d+\./.test(el.textContent.trim())) hideMode = true;
        else if (el.tagName === 'H1') { el.classList.add('qz-source-hidden'); return; }
        else if (el.tagName === 'P' || el.tagName === 'BLOCKQUOTE') {
          if (el.previousElementSibling === null || (el.previousElementSibling && el.previousElementSibling.classList.contains('qz-source-hidden'))) {
            el.classList.add('qz-source-hidden');
          }
          return;
        } else if (el.tagName === 'HR') { el.classList.add('qz-source-hidden'); return; }
      }
      if (hideMode) el.classList.add('qz-source-hidden');
    });
  }

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c];
    });
  }
})();
