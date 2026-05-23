/* ============================================================
   Video Modal Player — The Cert Hub
   © 2026 Syed Humayun Zafar Rizvi

   Intercepts clicks on .vg-card video cards. If the card has a
   data-video-id attribute, opens the YouTube embed inline in a
   modal overlay. If no data-video-id (fallback), lets the link
   open in a new tab as before.

   Inject the modal HTML on first use so the layout HTML stays clean.
   ============================================================ */
(function () {
  'use strict';

  var modal = null;        // the overlay element
  var iframe = null;       // the YouTube iframe inside the overlay
  var lastFocus = null;    // element that had focus before opening (a11y)

  function buildModal() {
    if (modal) return;
    var overlay = document.createElement('div');
    overlay.id = 'vidm-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Video player');
    overlay.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:9999',
      'background:rgba(0,0,0,0.85)',
      'display:none', 'align-items:center', 'justify-content:center',
      'padding:20px', 'box-sizing:border-box',
      'backdrop-filter:blur(4px)', '-webkit-backdrop-filter:blur(4px)'
    ].join(';');

    var stage = document.createElement('div');
    stage.style.cssText = [
      'position:relative',
      'width:100%', 'max-width:1100px',
      'aspect-ratio:16/9',
      'background:#000', 'border-radius:12px',
      'box-shadow:0 25px 80px rgba(0,0,0,0.6)',
      'overflow:hidden'
    ].join(';');

    iframe = document.createElement('iframe');
    iframe.title = 'Video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.setAttribute('allowfullscreen', 'allowfullscreen');
    iframe.style.cssText = 'width:100%;height:100%;border:0;display:block';
    iframe.src = 'about:blank';

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close video');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = [
      'position:absolute', 'top:-44px', 'right:-4px',
      'width:36px', 'height:36px', 'border-radius:50%',
      'background:rgba(255,255,255,0.15)', 'color:#fff',
      'border:1px solid rgba(255,255,255,0.25)',
      'font-size:24px', 'font-weight:700', 'line-height:1',
      'cursor:pointer', 'display:flex',
      'align-items:center', 'justify-content:center',
      'transition:background .15s'
    ].join(';');
    closeBtn.addEventListener('mouseenter', function(){ closeBtn.style.background = 'rgba(255,255,255,0.3)'; });
    closeBtn.addEventListener('mouseleave', function(){ closeBtn.style.background = 'rgba(255,255,255,0.15)'; });
    closeBtn.addEventListener('click', closeModal);

    stage.appendChild(iframe);
    stage.appendChild(closeBtn);
    overlay.appendChild(stage);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.body.appendChild(overlay);
    modal = overlay;
  }

  function openModal(videoId) {
    buildModal();
    lastFocus = document.activeElement;
    // rel=0 limits "up next" to same channel for cleaner UX
    iframe.src = 'https://www.youtube.com/embed/' + encodeURIComponent(videoId) +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // focus management for accessibility
    setTimeout(function () { iframe.focus(); }, 50);
  }

  function closeModal() {
    if (!modal) return;
    iframe.src = 'about:blank'; // stop video
    modal.style.display = 'none';
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  // Esc to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeModal();
    }
  });

  // Delegated click handler for every video card on the page
  document.addEventListener('click', function (e) {
    var card = e.target.closest('a.vg-card, .vg-card');
    if (!card) return;

    // Resolve a video ID from one of:
    //  1) data-video-id="abc123" (preferred — set during curation)
    //  2) href="https://www.youtube.com/watch?v=abc123"
    //  3) href="https://youtu.be/abc123"
    // If we can extract an ID, intercept the click and open the modal.
    // If not (fallback: search URL), let the browser handle it (new tab).
    var vid = card.getAttribute('data-video-id');
    if (!vid) {
      var href = card.getAttribute('href') || '';
      var m1 = href.match(/[?&]v=([A-Za-z0-9_-]{6,})/);     // youtube.com/watch?v=ID
      var m2 = href.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/); // youtu.be/ID
      var m3 = href.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/);
      vid = (m1 && m1[1]) || (m2 && m2[1]) || (m3 && m3[1]) || null;
    }
    if (!vid) return; // no specific video — let default action happen

    e.preventDefault();
    e.stopPropagation();
    openModal(vid);
  }, { capture: true });
})();
