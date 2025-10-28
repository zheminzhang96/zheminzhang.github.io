// Theme toggle (respects saved preference, falls back to OS)
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const syncPressed = () => btn.setAttribute('aria-pressed', root.getAttribute('data-theme') === 'dark');
    syncPressed();
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncPressed();
    });
  }

  // Mobile nav
  const navBtn = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (navBtn && nav) {
    navBtn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
