/* ── ARTICLES PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.from('.art-card', { opacity:0, y:28, duration:0.4, stagger:0.05, delay:0.08, ease:'power3.out' });
});
