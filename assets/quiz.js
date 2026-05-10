/* ============================================================
   Interactive Quiz Engine
   Auto-detects pages with Q1./Q2. structure and converts the static
   markdown into an interactive quiz with answer-checking, color-coded
   feedback, score display, and explanations for wrong answers.
   © 2026 Syed Humayun Zafar Rizvi
   ============================================================ */
(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    var article = document.querySelector('article.content');
    if (!article) return;

    // Detect quiz pages: must have multiple <h3> Q1./Q2. headers
    var allH3 = article.querySelectorAll('h3');
    if (allH3.length < 2) return;

    var qTest = 0;
    for (var i = 0; i < allH3.length; i++) {
      if (/^Q\d+\./.test(allH3[i].textContent.trim())) qTest++;
      if (qTest >= 2) break;
    }
    if (qTest < 2) return; // Not a quiz page

    var data = parseAll(article);
    if (!data.questions.length) return;

    var widget = buildWidget(data, article);
    article.insertBefore(widget, article.firstChild);
    hideSource(article, widget);
  }

  // ========== PARSING ==========
  function parseAll(article) {
    var questions = [];
    var answers = {};
    var allH3 = Array.from(article.querySelectorAll('h3'));

    // First pass: questions (### Q1. ...:)
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
      var options = parseOptions(optionsText);
      if (Object.keys(options).length < 2) return;

      questions.push({
        num: qNum,
        text: qText,
        options: options,
        sourceH3: h3,
        sourceP: sib
      });
    });

    // Second pass: answers (### Q1: **B. text**)
    allH3.forEach(function (h3) {
      var text = h3.textContent.trim();
      var m = text.match(/^Q(\d+):\s*\*?\*?([A-D])\.?\s*(.*?)\*?\*?\s*$/);
      if (!m) return;
      var qNum = parseInt(m[1], 10);
      var letter = m[2];
      var fullText = (m[3] || '').replace(/\*\*/g, '').trim();

      // Gather explanation: siblings until next h3 or h2
      var sib = h3.nextElementSibling;
      var explHTML = '';
      while (sib && sib.tagName !== 'H3' && sib.tagName !== 'H2' && sib.tagName !== 'HR') {
        if (sib.textContent.trim() || sib.tagName === 'UL' || sib.tagName === 'OL') {
          explHTML += sib.outerHTML;
        }
        sib = sib.nextElementSibling;
      }

      answers[qNum] = {
        letter: letter,
        fullText: fullText,
        explanation: explHTML,
        sourceH3: h3,
        explSiblings: collectExplanationSiblings(h3)
      };
    });

    // Merge
    questions.forEach(function (q) {
      var a = answers[q.num];
      if (a) {
        q.correctLetter = a.letter;
        q.correctFullText = a.fullText || (q.options[a.letter] || '');
        q.explanation = a.explanation;
        q.answerSourceH3 = a.sourceH3;
        q.explSiblings = a.explSiblings;
      }
    });

    var validQuestions = questions.filter(function (q) { return q.correctLetter; });
    return { questions: validQuestions, allQuestions: questions };
  }

  function collectExplanationSiblings(h3) {
    var sibs = [];
    var sib = h3.nextElementSibling;
    while (sib && sib.tagName !== 'H3' && sib.tagName !== 'H2' && sib.tagName !== 'HR') {
      sibs.push(sib);
      sib = sib.nextElementSibling;
    }
    return sibs;
  }

  function parseOptions(text) {
    var options = {};
    // Pattern matches: "A. text up to next letter or end"
    var regex = /\b([A-D])\.\s+([\s\S]+?)(?=\s+\b[A-D]\.\s|$)/g;
    var m;
    while ((m = regex.exec(text)) !== null) {
      options[m[1]] = m[2].trim();
    }
    return options;
  }

  // ========== UI ==========
  function buildWidget(data, article) {
    var wrapper = document.createElement('div');
    wrapper.className = 'qz-widget';

    var pageTitle = '';
    var h1 = article.querySelector('h1');
    if (h1) pageTitle = h1.textContent.replace(/^\s*✏️?\s*/, '').trim();

    // Get intro text (first paragraph or blockquote after H1)
    var intro = '';
    if (h1) {
      var n = h1.nextElementSibling;
      while (n && n.tagName !== 'P' && n.tagName !== 'BLOCKQUOTE' && n.tagName !== 'H2') {
        n = n.nextElementSibling;
      }
      if (n && (n.tagName === 'P' || n.tagName === 'BLOCKQUOTE')) {
        intro = n.textContent.trim();
      }
    }

    var nQ = data.questions.length;
    wrapper.innerHTML =
      '<div class="qz-header">' +
        '<h2>📝 ' + escapeHTML(pageTitle || 'Interactive Quiz') + '</h2>' +
        '<p class="qz-meta">' +
          (intro ? escapeHTML(intro) + '<br>' : '') +
          '<strong>' + nQ + ' question' + (nQ === 1 ? '' : 's') + '</strong> · ' +
          'Select your answer for each question, then click <strong>Submit</strong>.' +
        '</p>' +
        '<div class="qz-progress-bar"><div class="qz-progress-fill" id="qz-progress"></div></div>' +
      '</div>' +
      '<div class="qz-questions" id="qz-questions">' +
        data.questions.map(renderQuestion).join('') +
      '</div>' +
      '<div class="qz-actions">' +
        '<button class="qz-btn qz-btn-submit" id="qz-submit">✓ Submit Answers</button>' +
        '<button class="qz-btn qz-btn-reset" id="qz-reset" style="display:none;">↻ Try Again</button>' +
        '<button class="qz-btn qz-btn-show" id="qz-show" style="display:none;">📖 Show all explanations</button>' +
      '</div>' +
      '<div class="qz-result" id="qz-result"></div>';

    // Attach handlers
    setTimeout(function () {
      wrapper.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener('change', function () { updateProgress(wrapper, nQ); });
      });
      wrapper.querySelector('#qz-submit').addEventListener('click', function () {
        gradeQuiz(wrapper, data.questions);
      });
      wrapper.querySelector('#qz-reset').addEventListener('click', function () {
        resetQuiz(wrapper, data.questions);
      });
      wrapper.querySelector('#qz-show').addEventListener('click', function () {
        showAllExplanations(wrapper, data.questions);
      });
    }, 0);

    return wrapper;
  }

  function renderQuestion(q) {
    var optionsHTML = ['A','B','C','D'].filter(function (k) { return q.options[k]; }).map(function (letter) {
      return '<label class="qz-option" data-q="' + q.num + '" data-letter="' + letter + '">' +
        '<input type="radio" name="qz-q-' + q.num + '" value="' + letter + '">' +
        '<span class="qz-letter">' + letter + '</span>' +
        '<span class="qz-option-text">' + escapeHTML(q.options[letter]) + '</span>' +
      '</label>';
    }).join('');

    return '<div class="qz-question" data-q="' + q.num + '">' +
      '<h3 class="qz-q-title"><span class="qz-q-num">' + q.num + '</span>' + escapeHTML(q.text) + '</h3>' +
      '<div class="qz-options">' + optionsHTML + '</div>' +
      '<div class="qz-feedback" id="qz-fb-' + q.num + '"></div>' +
    '</div>';
  }

  function updateProgress(widget, total) {
    var answered = widget.querySelectorAll('input[type="radio"]:checked').length;
    var pct = total ? (answered / total) * 100 : 0;
    var fill = widget.querySelector('#qz-progress');
    if (fill) fill.style.width = pct + '%';
  }

  // ========== GRADING ==========
  function gradeQuiz(widget, questions) {
    var correct = 0;
    var skipped = 0;

    questions.forEach(function (q) {
      var selected = widget.querySelector('input[name="qz-q-' + q.num + '"]:checked');
      var userAnswer = selected ? selected.value : null;
      var isCorrect = userAnswer === q.correctLetter;
      if (isCorrect) correct++;
      if (userAnswer === null) skipped++;

      // Color-code options
      var qEl = widget.querySelector('.qz-question[data-q="' + q.num + '"]');
      if (!qEl) return;

      qEl.querySelectorAll('.qz-option').forEach(function (opt) {
        var letter = opt.getAttribute('data-letter');
        opt.classList.add('qz-graded');
        if (letter === q.correctLetter) opt.classList.add('qz-correct');
        else if (letter === userAnswer) opt.classList.add('qz-wrong');
        var inp = opt.querySelector('input');
        if (inp) inp.disabled = true;
      });

      // Feedback
      var fb = widget.querySelector('#qz-fb-' + q.num);
      if (!fb) return;
      var correctFull = q.correctLetter + '. ' + escapeHTML(q.correctFullText || q.options[q.correctLetter] || '');

      var explHTML = q.explanation ? '<div class="qz-explanation">' + q.explanation + '</div>' : '';

      if (userAnswer === null) {
        fb.innerHTML = '<div class="qz-fb qz-fb-skip">' +
          '<div class="qz-fb-title">⚠️ Skipped — no answer selected</div>' +
          'Correct answer: <strong>' + correctFull + '</strong>' +
          explHTML +
          '</div>';
      } else if (isCorrect) {
        fb.innerHTML = '<div class="qz-fb qz-fb-correct">' +
          '<div class="qz-fb-title">✅ Correct! Nice work.</div>' +
          'Answer: <strong>' + correctFull + '</strong>' +
          explHTML +
          '</div>';
      } else {
        fb.innerHTML = '<div class="qz-fb qz-fb-wrong">' +
          '<div class="qz-fb-title">❌ Not quite</div>' +
          'You picked <strong>' + userAnswer + '. ' + escapeHTML(q.options[userAnswer] || '') + '</strong>.<br>' +
          'Correct answer: <strong>' + correctFull + '</strong>' +
          explHTML +
          '</div>';
      }
    });

    // Score
    var pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    showScore(widget, correct, questions.length, pct, skipped);

    widget.querySelector('#qz-submit').style.display = 'none';
    widget.querySelector('#qz-reset').style.display = 'inline-flex';

    // Smooth-scroll to score
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
      badge = '✅'; msg = 'Excellent — exam-ready on this topic. Review any wrong ones, then move on.'; cls = 'is-good';
    } else if (pct >= 70) {
      badge = '👍'; msg = 'Good. Read the wrong-answer explanations carefully, then retake in a few days.'; cls = 'is-good';
    } else if (pct >= 50) {
      badge = '⚠️'; msg = 'Halfway there. Re-read the module reading, focus on the wrong answers below.'; cls = 'is-mid';
    } else {
      badge = '🔁'; msg = 'Re-study the entire module before continuing. The explanations below show what to focus on.'; cls = 'is-low';
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

  function resetQuiz(widget, questions) {
    widget.querySelectorAll('input[type="radio"]').forEach(function (r) {
      r.checked = false; r.disabled = false;
    });
    widget.querySelectorAll('.qz-option').forEach(function (o) {
      o.classList.remove('qz-graded', 'qz-correct', 'qz-wrong');
    });
    widget.querySelectorAll('.qz-feedback').forEach(function (fb) { fb.innerHTML = ''; });
    var result = widget.querySelector('#qz-result');
    if (result) result.innerHTML = '';
    widget.querySelector('#qz-submit').style.display = 'inline-flex';
    widget.querySelector('#qz-reset').style.display = 'none';
    var showBtn = widget.querySelector('#qz-show');
    if (showBtn) showBtn.style.display = 'none';
    updateProgress(widget, questions.length);
    widget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function showAllExplanations(widget, questions) {
    // No-op for now (can be wired later if user wants this)
  }

  // ========== HIDE SOURCE ==========
  function hideSource(article, widget) {
    var children = Array.from(article.children);
    var hideMode = false;
    children.forEach(function (el) {
      if (el === widget) return;
      // Start hiding from the first h3 (Q1) or from the "Questions" h2
      if (!hideMode) {
        if (el.tagName === 'H2' && /Question/i.test(el.textContent)) hideMode = true;
        else if (el.tagName === 'H3' && /^Q\d+\./.test(el.textContent.trim())) hideMode = true;
        else if (el.tagName === 'H1') {
          // Hide H1 too — widget has its own title
          el.classList.add('qz-source-hidden');
          return;
        } else if (el.tagName === 'P' || el.tagName === 'BLOCKQUOTE') {
          // Intro paragraphs — can hide since widget displays the intro
          if (el.previousElementSibling === null || (el.previousElementSibling && el.previousElementSibling.classList.contains('qz-source-hidden'))) {
            el.classList.add('qz-source-hidden');
          }
          return;
        } else if (el.tagName === 'HR') {
          el.classList.add('qz-source-hidden');
          return;
        }
      }
      if (hideMode) el.classList.add('qz-source-hidden');
    });
  }

  // ========== UTIL ==========
  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c];
    });
  }
})();
