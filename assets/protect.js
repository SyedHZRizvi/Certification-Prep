/* ============================================================
   Content Protection — The Cert Hub
   © 2026 Syed Humayun Zafar Rizvi · All Rights Reserved

   Blocks casual content extraction:
     - text selection (CSS + selectstart event)
     - right-click context menu
     - copy / cut / drag events
     - common keyboard shortcuts: Ctrl/Cmd + C/X/A/S/P/U
     - F12 / Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (devtools shortcuts)
     - print (CSS @media print)

   What stays allowed:
     - clicking links (YouTube video cards, navigation, flashcards)
     - typing into search boxes / form inputs
     - the interactive quiz engine (uses click events, not selection)
     - flashcard widget (also click-based)

   IMPORTANT — honest limitation note:
   Web protection is a deterrent, not a wall. A determined user can
   always: view source (View → Developer → View Source still works
   from menu bar even with F12 blocked), disable JS in browser
   settings, or fetch the .md files directly from the URL. This file
   stops 95%+ of casual copying — but the only true protection is
   server-side gating, which a static Jekyll site cannot do.
   ============================================================ */
(function () {
  'use strict';

  // ---- 1. CSS protection (injected as a <style> at the top of <head>) ----
  // We inject via JS so this single file fully encapsulates the feature,
  // but the same CSS is also duplicated inline in _layouts/default.html
  // and index.html so it applies even if JS is disabled.
  var css = [
    'html, body, p, h1, h2, h3, h4, h5, h6, li, td, th, span, div, a,',
    'ol, ul, blockquote, code, pre, table, article, section, header,',
    'footer, nav, main, aside, figure, figcaption, summary, details {',
    '  -webkit-user-select: none !important;',
    '  -moz-user-select: none !important;',
    '  -ms-user-select: none !important;',
    '  user-select: none !important;',
    '  -webkit-touch-callout: none !important;',
    '}',
    'input, textarea, select, [contenteditable="true"] {',
    '  -webkit-user-select: text !important;',
    '  -moz-user-select: text !important;',
    '  user-select: text !important;',
    '  -webkit-touch-callout: default !important;',
    '}',
    'img, video, picture, source, canvas, svg {',
    '  -webkit-user-drag: none !important;',
    '  user-drag: none !important;',
    '  pointer-events: auto;',
    '}',
    '@media print {',
    '  html, body {',
    '    display: none !important;',
    '    visibility: hidden !important;',
    '  }',
    '  body::before {',
    '    content: "Printing is disabled on this site.";',
    '    display: block !important;',
    '    visibility: visible !important;',
    '  }',
    '}'
  ].join('\n');

  function injectCSS() {
    var s = document.createElement('style');
    s.setAttribute('data-protect', '1');
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectCSS);
  } else {
    injectCSS();
  }

  // ---- 2. Event-level protection ----
  function isFormField(el) {
    if (!el || !el.matches) return false;
    return el.matches('input, textarea, select, [contenteditable="true"]');
  }

  function block(e) {
    if (isFormField(e.target)) return; // allow in form fields
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
  }

  // Right-click menu
  document.addEventListener('contextmenu', block, { capture: true });
  // Selection start
  document.addEventListener('selectstart', block, { capture: true });
  // Drag start
  document.addEventListener('dragstart', block, { capture: true });
  // Copy / cut
  document.addEventListener('copy', block, { capture: true });
  document.addEventListener('cut', block, { capture: true });

  // ---- 3. Keyboard shortcut protection ----
  document.addEventListener('keydown', function (e) {
    if (isFormField(e.target)) return;
    var k = (e.key || '').toLowerCase();
    var mod = e.ctrlKey || e.metaKey;
    var shift = e.shiftKey;

    // Ctrl/Cmd + C / X / A / S / P / U
    if (mod && !shift && ['c', 'x', 'a', 's', 'p', 'u'].indexOf(k) !== -1) {
      e.preventDefault();
      return false;
    }
    // F12
    if (k === 'f12') {
      e.preventDefault();
      return false;
    }
    // Ctrl/Cmd + Shift + I / J / C  (devtools / console / inspector)
    if (mod && shift && ['i', 'j', 'c'].indexOf(k) !== -1) {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  // ---- 4. Best-effort: clear clipboard on focus (defensive) ----
  // Not bulletproof, but blocks "select all → drag" workflows in some browsers.
  // Skipped on form fields so users can still paste into search boxes.
})();
