/* ── SKILLS ── */
function switchCat(btn, cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.skill-group').forEach(g => g.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('sg-' + cat).classList.add('active');
  if (typeof gsap !== 'undefined') {
    gsap.from('#sg-' + cat + ' .skill-chip', { opacity:0, y:10, duration:0.3, stagger:0.04, ease:'power2.out' });
  }
}

/* ── SKILLS PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  const ease = 'power3.out';
  gsap.from('.skill-chip', { opacity:0, x:-12, duration:0.35, stagger:0.04, delay:0.1, ease });
  gsap.from('.skills-sidebar', { opacity:0, x:-20, duration:0.5, delay:0.05, ease });
});
