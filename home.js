/* ── HOME PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  const ease = 'power3.out';
  const tl = gsap.timeline();
  tl.from('.hero-badge',    { opacity:0, y:20, duration:0.5, ease })
    .from('.hero-h1',       { opacity:0, y:36, duration:0.65, ease }, '-=0.3')
    .from('.hero-sub',      { opacity:0, y:24, duration:0.5, ease }, '-=0.4')
    .from('.hero-actions',  { opacity:0, y:18, duration:0.45, ease }, '-=0.3')
    .from('.hero-stats .stat-item', { opacity:0, y:14, duration:0.4, stagger:0.07, ease }, '-=0.25')
    .from('#heroCard',      { opacity:0, scale:0.94, x:30, duration:0.65, ease }, '-=0.7');
});
