/* ============================================================
 * record-studio.js — The Cert Hub "Record & Review" practice studio
 * ------------------------------------------------------------
 * Two free practice tools. No account, no API key, no cost.
 *
 *   1) Recorder — record / playback / download yourself reciting
 *      (Quran) or speaking (languages). This is fully local: the
 *      audio is captured with MediaRecorder and never leaves the
 *      browser unless the learner chooses to download/share it.
 *
 *   2) Pronunciation check (languages only) — uses the browser's
 *      built-in Web Speech API (SpeechRecognition) to transcribe what
 *      you said and show, word-by-word, which target words it
 *      understood. NOTE: in today's browsers (Chrome, Edge, Safari)
 *      this sends the short audio clip to the BROWSER VENDOR'S speech
 *      service (e.g. Google) for transcription — i.e. that one feature
 *      is NOT fully on-device. It is an intelligibility proxy, NOT a
 *      phoneme-perfect score, and is deliberately NOT applied to Quran
 *      recitation (generic ASR can't judge Tajweed).
 *
 * Forward-compatible: a .record-studio with data-endpoint shows a
 * "Submit for feedback" button that POSTs the clip (future server loop).
 * ============================================================ */
(function () {
  "use strict";
  if (window.__recordStudioInit) return;
  window.__recordStudioInit = true;

  var REC_SUPPORTED =
    typeof navigator !== "undefined" &&
    navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === "function" &&
    typeof window.MediaRecorder !== "undefined";

  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  function fmtTime(s) { var m = Math.floor(s / 60), r = s % 60; return m + ":" + (r < 10 ? "0" : "") + r; }
  function pickMime() {
    var prefs = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
    for (var i = 0; i < prefs.length; i++) { try { if (window.MediaRecorder.isTypeSupported(prefs[i])) return prefs[i]; } catch (e) {} }
    return "";
  }
  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return (s == null ? "" : String(s)).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function isRTL(lang) { return /^(ar|ur|fa|he|ps|sd)\b/i.test(lang || ""); }

  /* Strip combining diacritics by code point (ASCII source — ranges are
   * unambiguous): U+0300–U+036F Latin; U+064B–U+0655 Arabic harakat/hamza/
   * maddah; U+0670 superscript alef; U+0640 tatweel; U+06D6–U+06ED Quran marks. */
  function stripMarks(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) {
      var cp = str.charCodeAt(i);
      if ((cp >= 0x0300 && cp <= 0x036f) || (cp >= 0x064b && cp <= 0x0655) ||
          cp === 0x0670 || cp === 0x0640 || (cp >= 0x06d6 && cp <= 0x06ed)) continue;
      out += str.charAt(i);
    }
    return out;
  }
  function normalize(s) {
    var t = stripMarks((s || "").toLowerCase().normalize("NFKD"));
    try { t = t.replace(/[^\p{L}\p{N}\s]/gu, " "); }
    catch (e) { t = t.replace(/[^0-9a-z؀-ۿݐ-ݿ\s]/g, " "); }
    return t.replace(/\s+/g, " ").trim();
  }

  function unsupportedNotice(kind) {
    var verb = kind === "quran" ? "reciting" : "speaking";
    return (
      '<div class="rs-note"><strong>In-browser recording isn\'t available here.</strong> Your browser blocked the microphone or doesn\'t support it. ' +
      "You can still practise: record yourself " + verb + " with your phone's voice-recorder app, play it back against the model, and use the checklist below — then share the file with a teacher or your study community.</div>"
    );
  }

  /* ---------------- Recorder ---------------- */
  function initRecorder(root) {
    var controls = root.querySelector('[data-rs="controls"]');
    if (!controls) return;
    var kind = root.getAttribute("data-kind") || "language";
    var endpoint = (root.getAttribute("data-endpoint") || "").trim();
    var recVerb = kind === "quran" ? "Recite" : "Speak";
    if (!REC_SUPPORTED) { controls.innerHTML = unsupportedNotice(kind); return; }

    var btnRec = el("button", { type: "button", class: "rs-btn rs-btn-rec" }, "🎙️ Record");
    var btnStop = el("button", { type: "button", class: "rs-btn rs-btn-stop", disabled: "true" }, "⏹ Stop");
    var timer = el("span", { class: "rs-timer" }, "0:00");
    var status = el("span", { class: "rs-status", role: "status", "aria-live": "polite" }, "Ready — press Record and " + recVerb.toLowerCase() + ".");
    var player = el("audio", { controls: "true", class: "rs-player", "aria-label": "Your recording playback", style: "display:none;width:100%;margin-top:10px;" });
    var btnDownload = el("a", { class: "rs-btn rs-btn-ghost", style: "display:none;", download: "" }, "⬇ Download");

    var row = el("div", { class: "rs-row" });
    row.appendChild(btnRec); row.appendChild(btnStop); row.appendChild(timer);
    var row2 = el("div", { class: "rs-row rs-row-after", style: "display:none;" });
    row2.appendChild(btnDownload);
    var btnSubmit = null;
    if (endpoint) { btnSubmit = el("button", { type: "button", class: "rs-btn rs-btn-submit" }, "📤 Submit for feedback"); row2.appendChild(btnSubmit); }
    controls.innerHTML = "";
    controls.appendChild(row); controls.appendChild(status); controls.appendChild(player); controls.appendChild(row2);

    var mr = null, chunks = [], stream = null, tick = null, seconds = 0, mime = pickMime(), lastBlob = null;
    function setRecording(on) { btnRec.disabled = on; btnStop.disabled = !on; root.classList.toggle("rs-recording", on); }
    function stopTracks() { if (stream) { stream.getTracks().forEach(function (t) { t.stop(); }); stream = null; } }

    btnRec.addEventListener("click", function () {
      if (btnRec.disabled) return;        // guard: prevent parallel getUserMedia / MediaRecorders
      btnRec.disabled = true;             // disable synchronously, BEFORE the async permission prompt
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
        stream = s; chunks = [];
        try { mr = mime ? new MediaRecorder(s, { mimeType: mime }) : new MediaRecorder(s); }
        catch (e) { mr = new MediaRecorder(s); }
        mr.ondataavailable = function (ev) { if (ev.data && ev.data.size > 0) chunks.push(ev.data); };
        mr.onstop = function () {
          stopTracks();
          lastBlob = new Blob(chunks, { type: mr.mimeType || mime || "audio/webm" });
          var url = URL.createObjectURL(lastBlob);
          player.src = url; player.style.display = "block";
          var ext = lastBlob.type.indexOf("mp4") > -1 ? "m4a" : lastBlob.type.indexOf("ogg") > -1 ? "ogg" : "webm";
          btnDownload.href = url; btnDownload.setAttribute("download", "cert-hub-" + kind + "-recording." + ext);
          btnDownload.style.display = "inline-flex"; row2.style.display = "flex";
          status.textContent = "Recording stopped. Play it back, compare with the model, then work through the checklist below.";
        };
        mr.start(); seconds = 0; timer.textContent = "0:00";
        status.textContent = "Recording started. " + recVerb + " clearly, at a measured pace.";
        setRecording(true);   // keeps Record disabled, enables Stop
        tick = setInterval(function () { seconds++; timer.textContent = fmtTime(seconds); if (seconds >= 600) btnStop.click(); }, 1000);
      }).catch(function () {
        // Transient denial / busy device AFTER controls are live: keep the
        // existing recording + UI intact, just re-enable Record with a hint.
        setRecording(false);
        status.textContent = "Microphone was blocked or is busy — allow access and try again.";
      });
    });
    btnStop.addEventListener("click", function () {
      if (tick) { clearInterval(tick); tick = null; }
      setRecording(false);
      if (mr && mr.state !== "inactive") mr.stop();
    });
    if (btnSubmit) {
      btnSubmit.addEventListener("click", function () {
        if (!lastBlob) return;
        btnSubmit.disabled = true; btnSubmit.textContent = "Uploading…";
        var fd = new FormData();
        fd.append("audio", lastBlob, "recording.webm"); fd.append("kind", kind); fd.append("ref", root.getAttribute("data-ref") || "");
        fetch(endpoint, { method: "POST", body: fd, credentials: "same-origin" })
          .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
          .then(function (d) { status.textContent = (d && d.message) || "Submitted. You'll receive feedback shortly."; btnSubmit.textContent = "✓ Submitted"; })
          .catch(function () { btnSubmit.disabled = false; btnSubmit.textContent = "📤 Submit for feedback"; status.textContent = "Upload failed — download and share your recording with a teacher instead."; });
      });
    }
  }

  /* ---------------- Pronunciation check (Web Speech API) ---------------- */
  function initSpeech(root) {
    var panel = root.querySelector('[data-rs="speech"]');
    if (!panel) return;
    var lang = root.getAttribute("data-lang") || "en-US";
    var rtl = isRTL(lang);
    var input = panel.querySelector('[data-rs="target"]');
    var btn = panel.querySelector('[data-rs="check"]');
    var result = panel.querySelector('[data-rs="result"]');
    if (!input || !btn || !result) return;

    var chips = panel.querySelectorAll(".rs-chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener("click", (function (c) {
        return function () { input.value = c.getAttribute("data-phrase") || c.textContent; input.focus(); };
      })(chips[i]));
    }

    if (!SpeechRecognition) {
      btn.disabled = true;
      result.innerHTML =
        '<div class="rs-note">The free pronunciation check needs a browser with built-in speech recognition. ' +
        "<strong>Desktop Chrome or Edge work best.</strong> Support varies by browser and language (for example, Safari may not handle Urdu or Persian). " +
        "In other browsers, use the recorder above and compare yourself to the model, or share a recording with a teacher.</div>";
      return;
    }

    var listening = false;
    btn.addEventListener("click", function () {
      var target = (input.value || "").trim();
      if (!target) { result.innerHTML = '<div class="rs-note">Type or pick a phrase first, then tap the button and say it.</div>'; return; }
      if (listening) return;

      var rec = new SpeechRecognition();
      rec.lang = lang; rec.interimResults = false; rec.maxAlternatives = 1; rec.continuous = false;
      listening = true; btn.disabled = true;
      var oldLabel = btn.textContent;
      btn.textContent = "🎧 Listening… say it now";
      result.innerHTML = '<div class="rs-note">Listening… speak the phrase clearly.</div>';

      rec.onresult = function (ev) {
        // ev.results[0][0] is the engine's highest-ranked hypothesis.
        var best = "";
        try { best = ev.results[0][0].transcript || ""; } catch (e) { best = ""; }
        renderResult(result, target, best, rtl);
      };
      rec.onerror = function (ev) {
        var msg = ev && ev.error === "no-speech" ? "Didn't catch anything — tap again and speak a little louder."
          : ev && ev.error === "not-allowed" ? "Microphone access was blocked. Allow the mic and try again."
          : ev && ev.error === "language-not-supported" ? "Your browser's recognizer doesn't support " + esc(lang) + ". Use the recorder + model comparison above instead, or try desktop Chrome/Edge."
          : "Couldn't run the check — try again, or use the recorder above.";
        result.innerHTML = '<div class="rs-note">' + msg + "</div>";
      };
      rec.onend = function () { listening = false; btn.disabled = false; btn.textContent = oldLabel; };
      try { rec.start(); } catch (e) { listening = false; btn.disabled = false; btn.textContent = oldLabel; }
    });
  }

  function renderResult(result, target, heard, rtl) {
    // Single source of truth: compare AND display the SAME normalized tokens
    // so the per-word highlight always lines up with the score.
    var tWords = normalize(target).split(" ").filter(Boolean);
    var hWords = normalize(heard).split(" ").filter(Boolean);
    if (!tWords.length) { result.innerHTML = '<div class="rs-note">Type a target phrase to compare against.</div>'; return; }
    var pool = {}; hWords.forEach(function (w) { pool[w] = (pool[w] || 0) + 1; });
    var matched = 0, words = "";
    for (var i = 0; i < tWords.length; i++) {
      var ok = pool[tWords[i]] > 0; if (ok) { pool[tWords[i]]--; matched++; }
      words += '<span class="rs-w ' + (ok ? "rs-w-ok" : "rs-w-miss") + '">' + esc(tWords[i]) + "</span> ";
    }
    var pct = Math.round((matched / tWords.length) * 100);
    var verdict = pct >= 85 ? "Excellent — clearly understood." : pct >= 60 ? "Good — most of it came through; polish the flagged words." : "Keep going — the flagged words weren't recognised. Listen to the model and try again.";
    var d = rtl ? ' dir="rtl"' : ' dir="ltr"';
    result.innerHTML =
      '<div class="rs-score"><span class="rs-score-num">' + pct + '%</span> understood — <span class="rs-score-v">' + esc(verdict) + "</span></div>" +
      '<p class="rs-result-h">Word-by-word <span class="rs-legend"><span class="rs-w rs-w-ok">understood</span> <span class="rs-w rs-w-miss">work on this</span></span></p>' +
      '<p class="rs-words"' + d + ">" + words + "</p>" +
      '<p class="rs-heard"' + d + '><strong>The recognizer heard:</strong> ' + (heard ? esc(heard) : "<em>(nothing)</em>") + "</p>" +
      '<p class="rs-disc">This checks <strong>intelligibility</strong> — whether a listener would catch your words. It is not a phoneme-perfect or accent score, and a recognizer can mishear. For nuance and accent, share a recording with a teacher.</p>';
  }

  function boot() {
    var nodes = document.querySelectorAll(".record-studio");
    for (var i = 0; i < nodes.length; i++) { initRecorder(nodes[i]); initSpeech(nodes[i]); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
