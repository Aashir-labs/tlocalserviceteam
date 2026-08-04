// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Mobile services submenu
function toggleMobileSubmenu(btn) {
  btn.classList.toggle('open');
  const submenu = btn.nextElementSibling;
  if (submenu) submenu.classList.toggle('open');
}

// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  item.classList.toggle('open');
}

// Scroll to top button
window.addEventListener('scroll', () => {
  const btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});

// Smooth scroll for same-page anchor links only (href="#id").
// Links like "index.html#services" from other pages use normal browser navigation.
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('mobileMenu')?.classList.remove('open');
    }
  });
});

// Highlight the current page's nav link (works across pages)
(function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href], .dropdown-menu a[href], .mobile-menu a[href]').forEach(a => {
    const href = a.getAttribute('href');
    const hrefPage = href.split('#')[0];
    if (hrefPage && hrefPage === current) {
      a.classList.add('active');
    }
  });
})();
