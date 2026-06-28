/* ============================================================
 * record-studio.js — The Cert Hub "Record & Review" practice studio
 * ------------------------------------------------------------
 * In-browser recorder for recitation (Quran) and speaking (languages).
 * 100% client-side: audio is captured with MediaRecorder, played back,
 * and downloaded — it never leaves the learner's browser unless a
 * feedback endpoint is explicitly configured.
 *
 * Progressive enhancement:
 *   - No JS / unsupported browser  -> the self-assessment rubric and the
 *     "record on your phone & share with a teacher" fallback still render.
 *   - data-endpoint set on .record-studio -> a "Submit for feedback" button
 *     appears and POSTs the recording (Phase 2: AI scoring / human review).
 *     When no endpoint is set, that button is hidden — so the studio is
 *     honest about what it can do right now.
 *
 * Markup contract (see _includes/record-studio.html):
 *   <div class="record-studio" data-endpoint="" data-kind="quran|language">
 *     <div data-rs="controls"></div>
 *     ...rubric...
 *   </div>
 * ============================================================ */
(function () {
  "use strict";
  if (window.__recordStudioInit) return;
  window.__recordStudioInit = true;

  var SUPPORTED =
    typeof navigator !== "undefined" &&
    navigator.mediaDevices &&
    typeof navigator.mediaDevices.getUserMedia === "function" &&
    typeof window.MediaRecorder !== "undefined";

  function fmtTime(s) {
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function pickMime() {
    var prefs = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"];
    for (var i = 0; i < prefs.length; i++) {
      try {
        if (window.MediaRecorder.isTypeSupported(prefs[i])) return prefs[i];
      } catch (e) {}
    }
    return "";
  }

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (html != null) n.innerHTML = html;
    return n;
  }

  function unsupportedNotice(kind) {
    var verb = kind === "quran" ? "reciting" : "speaking";
    return (
      '<div style="background:#fef3c7;border:1px solid #fcd34d;border-radius:10px;padding:14px 16px;color:#92400e;font-size:0.95rem;line-height:1.6;">' +
      "<strong>In-browser recording isn't available here.</strong> Your browser blocked microphone access or doesn't support it. " +
      "You can still practise: record yourself " +
      verb +
      " with your phone's voice-recorder app, then play it back against the model and use the checklist below. " +
      "Share the file with a teacher or your study community for feedback." +
      "</div>"
    );
  }

  function initOne(root) {
    var controls = root.querySelector('[data-rs="controls"]');
    if (!controls) return;
    var kind = root.getAttribute("data-kind") || "language";
    var endpoint = (root.getAttribute("data-endpoint") || "").trim();
    var recVerb = kind === "quran" ? "Recite" : "Speak";

    if (!SUPPORTED) {
      controls.innerHTML = unsupportedNotice(kind);
      return;
    }

    // Build UI
    var btnRec = el("button", { type: "button", class: "rs-btn rs-btn-rec" }, "🎙️ Record");
    var btnStop = el("button", { type: "button", class: "rs-btn rs-btn-stop", disabled: "true" }, "⏹ Stop");
    var timer = el("span", { class: "rs-timer", "aria-live": "polite" }, "0:00");
    var status = el("span", { class: "rs-status", role: "status" }, "Ready when you are — press Record and " + recVerb.toLowerCase() + ".");
    var player = el("audio", { controls: "true", class: "rs-player", style: "display:none;width:100%;margin-top:10px;" });
    var btnDownload = el("a", { class: "rs-btn rs-btn-ghost", style: "display:none;", download: "" }, "⬇ Download");
    var btnSubmit = null;

    var row = el("div", { class: "rs-row" });
    row.appendChild(btnRec);
    row.appendChild(btnStop);
    row.appendChild(timer);

    var row2 = el("div", { class: "rs-row rs-row-after", style: "display:none;" });
    row2.appendChild(btnDownload);
    if (endpoint) {
      btnSubmit = el("button", { type: "button", class: "rs-btn rs-btn-submit" }, "📤 Submit for feedback");
      row2.appendChild(btnSubmit);
    }

    controls.innerHTML = "";
    controls.appendChild(row);
    controls.appendChild(status);
    controls.appendChild(player);
    controls.appendChild(row2);

    var mediaRecorder = null,
      chunks = [],
      stream = null,
      tick = null,
      seconds = 0,
      mime = pickMime(),
      lastBlob = null;

    function setRecording(on) {
      btnRec.disabled = on;
      btnStop.disabled = !on;
      root.classList.toggle("rs-recording", on);
    }

    function stopTracks() {
      if (stream) {
        stream.getTracks().forEach(function (t) { t.stop(); });
        stream = null;
      }
    }

    btnRec.addEventListener("click", function () {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (s) {
          stream = s;
          chunks = [];
          try {
            mediaRecorder = mime ? new MediaRecorder(s, { mimeType: mime }) : new MediaRecorder(s);
          } catch (e) {
            mediaRecorder = new MediaRecorder(s);
          }
          mediaRecorder.ondataavailable = function (ev) {
            if (ev.data && ev.data.size > 0) chunks.push(ev.data);
          };
          mediaRecorder.onstop = function () {
            stopTracks();
            lastBlob = new Blob(chunks, { type: mediaRecorder.mimeType || mime || "audio/webm" });
            var url = URL.createObjectURL(lastBlob);
            player.src = url;
            player.style.display = "block";
            var ext = (lastBlob.type.indexOf("mp4") > -1 ? "m4a" : lastBlob.type.indexOf("ogg") > -1 ? "ogg" : "webm");
            btnDownload.href = url;
            btnDownload.setAttribute("download", "cert-hub-" + kind + "-recording." + ext);
            btnDownload.style.display = "inline-flex";
            row2.style.display = "flex";
            status.textContent = "Recorded. Play it back, compare with the model, then work through the checklist below.";
          };
          mediaRecorder.start();
          seconds = 0;
          timer.textContent = "0:00";
          status.textContent = "🔴 Recording… " + recVerb + " clearly and at a measured pace.";
          setRecording(true);
          tick = setInterval(function () {
            seconds++;
            timer.textContent = fmtTime(seconds);
            if (seconds >= 600) btnStop.click(); // 10-min safety cap
          }, 1000);
        })
        .catch(function () {
          controls.innerHTML = unsupportedNotice(kind);
        });
    });

    btnStop.addEventListener("click", function () {
      if (tick) { clearInterval(tick); tick = null; }
      setRecording(false);
      if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    });

    if (btnSubmit) {
      btnSubmit.addEventListener("click", function () {
        if (!lastBlob) return;
        btnSubmit.disabled = true;
        btnSubmit.textContent = "Uploading…";
        var fd = new FormData();
        fd.append("audio", lastBlob, "recording.webm");
        fd.append("kind", kind);
        fd.append("ref", root.getAttribute("data-ref") || "");
        fetch(endpoint, { method: "POST", body: fd, credentials: "same-origin" })
          .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
          .then(function (data) {
            status.textContent = data && data.message ? data.message : "Submitted. You'll receive feedback shortly.";
            btnSubmit.textContent = "✓ Submitted";
          })
          .catch(function () {
            btnSubmit.disabled = false;
            btnSubmit.textContent = "📤 Submit for feedback";
            status.textContent = "Upload failed — please try again, or download and share your recording with a teacher.";
          });
      });
    }
  }

  function boot() {
    var nodes = document.querySelectorAll(".record-studio");
    for (var i = 0; i < nodes.length; i++) initOne(nodes[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
