/* ============================================================
   Freshness Check — The Cert Hub
   © 2026 Syed Humayun Zafar Rizvi
   ============================================================
   On every page load, fetches /version.txt (always bypassing cache)
   and compares its contents to the build timestamp embedded in this
   page at Jekyll build time. If they differ, the cached HTML is stale
   and the page is force-reloaded with a cache-buster query string.
   ============================================================ */
(function () {
  'use strict';

  // The build timestamp is set per-page by an inline script BEFORE this
  // file loads. It lives at window.__CERTHUB_BUILD__.
  var embedded = window.__CERTHUB_BUILD__;
  if (!embedded) return;

  // If we just reloaded due to staleness, don't loop.
  if (location.search.indexOf('_v=') !== -1) return;

  // Compute version.txt URL — same origin, baseurl-aware.
  // The /Certification-Prep/ prefix is the GitHub Pages project path.
  // Detect baseurl from the document URL so it works in both local
  // preview (no baseurl) and production (/Certification-Prep).
  var path = location.pathname;
  var baseurl = '';
  var marker = '/Certification-Prep/';
  if (path.indexOf(marker) === 0) {
    baseurl = '/Certification-Prep';
  }
  var versionURL = baseurl + '/version.txt?_=' + Date.now();

  // Use fetch with cache:'no-store' so the request bypasses
  // both browser and intermediary caches.
  function check() {
    if (!window.fetch) return;
    fetch(versionURL, { cache: 'no-store', credentials: 'omit' })
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (latest) {
        if (!latest) return;
        latest = String(latest).trim();
        if (!latest || latest === embedded) return;
        // Stale: force a hard reload with a cache-buster.
        var sep = location.search ? '&' : '?';
        var url = location.pathname + location.search + sep + '_v=' + encodeURIComponent(latest) + location.hash;
        location.replace(url);
      })
      .catch(function () { /* offline / network error — silently ignore */ });
  }

  // Run once shortly after load so the rest of the page isn't delayed.
  if (document.readyState === 'complete') {
    setTimeout(check, 100);
  } else {
    window.addEventListener('load', function () { setTimeout(check, 100); });
  }

  // Also re-check when the tab regains visibility (catches the case
  // where a student left a tab open while a new deploy happened).
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible') check();
  });
})();
