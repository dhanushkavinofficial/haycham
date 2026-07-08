/* ══════════════════════════════════════════════════════
   COMMON.JS — shared across every page
   (mobile menu toggle + nav scroll shadow)
   ══════════════════════════════════════════════════════ */

/* ── MOBILE MENU ── */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham = document.getElementById('hamburger');
  menu.classList.toggle('open');
  ham.classList.toggle('open');
}

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('siteNav').classList.toggle('scrolled', window.scrollY > 10);
});
