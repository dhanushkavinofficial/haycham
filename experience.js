/* ── EXPERIENCE PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.from('.exp-item', { opacity:0, x:-24, duration:0.55, delay:0.1, ease:'power3.out' });
});
