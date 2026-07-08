/* ── PROJECT FILTER ── */
function filterProjects(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('.proj-card');
  cards.forEach(c => {
    if (cat === 'all' || c.dataset.cat === cat) c.classList.remove('hidden');
    else c.classList.add('hidden');
  });
  if (typeof gsap !== 'undefined') {
    const visible = [...cards].filter(c => !c.classList.contains('hidden'));
    gsap.from(visible, { opacity:0, y:16, duration:0.35, stagger:0.05, ease:'power2.out' });
  }
}

/* ── PROJECTS PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  gsap.from('.proj-card:not(.hidden)', { opacity:0, y:28, duration:0.45, stagger:0.06, delay:0.08, ease:'power3.out' });
});
