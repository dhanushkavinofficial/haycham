/* ── CONTACT FORM ── */
function submitForm(e) {
  e.preventDefault();
  const s = document.getElementById('formSuccess');
  s.style.display = 'block';
  e.target.reset();
  setTimeout(() => s.style.display = 'none', 5000);
}

/* ── CONTACT PAGE ANIMATIONS ── */
window.addEventListener('load', () => {
  if (typeof gsap === 'undefined') return;
  const ease = 'power3.out';
  gsap.from('.contact-item', { opacity:0, x:-20, duration:0.4, stagger:0.06, delay:0.1, ease });
  gsap.from('.contact-form-wrap', { opacity:0, x:20, duration:0.55, delay:0.1, ease });
});
