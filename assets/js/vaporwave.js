// Vaporwave — Main JS
// Mobile nav, glitch text init, copy buttons
(function () {
  'use strict';

  // ── Mobile nav ──────────────────────────────────────────────────────────
  const toggle = document.querySelector('.vp-nav__toggle');
  const links = document.querySelector('.vp-nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!links.contains(e.target) && !toggle.contains(e.target)) links.classList.remove('open');
    });
  }

  // ── Active nav links ─────────────────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.vp-nav__links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path.startsWith(href) && href !== '/')) a.classList.add('active');
  });

  // ── Glitch text init ─────────────────────────────────────────────────────
  document.querySelectorAll('.post-header__title, .post-card__title').forEach(el => {
    el.setAttribute('data-text', el.textContent);
    el.classList.add('glitch');
  });

  // ── Copy code ─────────────────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'Copy';
    btn.style.cssText = [
      'position:absolute', 'top:10px', 'right:12px',
      'font-family:"Space Mono",monospace', 'font-size:0.6rem',
      'background:rgba(185,103,255,0.15)', 'color:#b967ff',
      'border:1px solid rgba(185,103,255,0.35)', 'border-radius:4px',
      'padding:0.2rem 0.5rem', 'cursor:pointer', 'letter-spacing:0.05em'
    ].join(';');
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
        btn.textContent = '✓ Copied';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();
