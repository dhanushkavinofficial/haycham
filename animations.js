/* ══════════════════════════════════════════════════════
   ANIMATIONS.JS
   Additional GSAP polish layered on top of the existing
   per-page scripts. Nothing here touches or overrides any
   existing class, hover state, or logic — it only adds new
   feel-good motion (page entrance, nav indicator, scroll
   progress bar, stat counters, hero parallax/tilt).
   Loaded on every page, right after common.js.
   ══════════════════════════════════════════════════════ */

(function () {
  if (typeof gsap === 'undefined') return;

  /* ── Inject minimal CSS needed for the new elements below.
     This only adds new rules for new classes — it does not
     modify or override any existing selector's properties. ── */
  const style = document.createElement('style');
  style.textContent = `
    .scroll-progress-bar{
      position:fixed; top:0; left:0; height:3px; width:0%;
      background:linear-gradient(90deg, var(--primary), var(--accent));
      z-index:1200; pointer-events:none;
    }
    #navLinks{ position:relative; }
    #navLinks .nav-link{ position:relative; z-index:1; }
    .nav-indicator{
      position:absolute; top:4px; bottom:4px; left:0; width:0;
      background:var(--accent-pale); border-radius:var(--radius-xs);
      z-index:0; pointer-events:none;
    }
  `;
  document.head.appendChild(style);

  /* ── 1. SMOOTH PAGE ENTRANCE ──
     A quick whole-page fade so every navigation feels
     intentional rather than an abrupt swap. */
  gsap.set(document.body, { autoAlpha: 0 });
  gsap.to(document.body, {
    autoAlpha: 1,
    duration: 0.45,
    ease: 'power1.out',
    clearProps: 'opacity,visibility'
  });

  /* ── 2. SCROLL PROGRESS BAR ──
     A thin bar under the nav that fills as the person reads
     down the page. Purely additive, sits above everything. */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress-bar';
  document.body.appendChild(progressBar);

  let progressTicking = false;
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
    progressTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!progressTicking) {
      requestAnimationFrame(updateProgress);
      progressTicking = true;
    }
  });

  /* ── 3. NAV ENTRANCE + SLIDING ACTIVE/HOVER INDICATOR ──
     Nav links drift in on load, and a soft pill glides behind
     whichever link is active or currently hovered. */
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    gsap.from(navLinks.querySelectorAll('.nav-link'), {
      opacity: 0, y: -8, duration: 0.4, stagger: 0.04,
      ease: 'power2.out', delay: 0.15
    });

    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    navLinks.prepend(indicator);

    function moveIndicatorTo(link) {
      if (!link) { gsap.to(indicator, { opacity: 0, duration: 0.2 }); return; }
      gsap.to(indicator, {
        x: link.offsetLeft,
        width: link.offsetWidth,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out'
      });
    }

    const activeLink = navLinks.querySelector('.nav-link.active');
    // Let layout settle before first measurement
    requestAnimationFrame(() => moveIndicatorTo(activeLink));

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('mouseenter', () => moveIndicatorTo(link));
    });
    navLinks.addEventListener('mouseleave', () => moveIndicatorTo(activeLink));
    window.addEventListener('resize', () => moveIndicatorTo(activeLink));
  }

  /* ── 4. HOME PAGE EXTRAS ──
     Only run if the relevant elements exist on the page. */

  // 4a. Animated stat counters (10+, 14+, 6+ …)
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    const suffix = el.textContent.replace(/[0-9]/g, '');
    const counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 1.3,
      delay: 0.5,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.floor(counter.val) + suffix; },
      onComplete: () => { el.textContent = target + suffix; }
    });
  });

  // 4b. Hero blob ambient parallax (keeps its original CSS centering)
  const heroBlob = document.querySelector('.hero-blob');
  if (heroBlob) {
    gsap.set(heroBlob, { yPercent: -50 }); // preserves the existing translateY(-50%) centering
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;
      gsap.to(heroBlob, { x, y, duration: 1.4, ease: 'power2.out' });
    });
  }

  // 4c. Hero card gentle 3D tilt
  const heroCard = document.getElementById('heroCard');
  if (heroCard) {
    gsap.set(heroCard, { transformPerspective: 800, transformOrigin: 'center' });
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroCard.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(heroCard, { rotateY: px * 8, rotateX: -py * 8, duration: 0.5, ease: 'power2.out' });
    });
    heroCard.addEventListener('mouseleave', () => {
      gsap.to(heroCard, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'power3.out' });
    });
  }
})();
