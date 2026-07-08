/* ── ABOUT PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  const ease = 'power3.out';
  gsap.from('.about-sticky', { opacity:0, x:-24, duration:0.6, delay:0.1, ease });
  gsap.from('.about-content > *', { opacity:0, y:18, duration:0.45, stagger:0.06, delay:0.15, ease });
});
