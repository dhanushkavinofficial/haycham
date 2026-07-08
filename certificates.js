/* ── CERTIFICATES PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.from('.cert-card', { opacity:0, y:24, duration:0.4, stagger:0.07, delay:0.08, ease:'power3.out' });
});
