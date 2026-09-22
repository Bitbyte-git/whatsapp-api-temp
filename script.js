/* ============================================================
   CHATNEXA — COMING SOON | script.js
   Interactions: Countdown, Navbar, Forms, Animations, Parallax
   ============================================================ */

'use strict';

// ============================================================
// 1. COUNTDOWN TIMER
// ============================================================
(function initCountdown() {
  // Launch date: 28 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 28);
  launchDate.setHours(launchDate.getHours() + 14);
  launchDate.setMinutes(launchDate.getMinutes() + 36);
  launchDate.setSeconds(launchDate.getSeconds() + 8);

  const daysEl    = document.getElementById('days');
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, '0');
  }

  function flipNumber(el, newValue) {
    const current = el.textContent;
    if (current === newValue) return;
    el.classList.add('flip');
    setTimeout(() => {
      el.textContent = newValue;
      el.classList.remove('flip');
    }, 120);
  }

  function updateCountdown() {
    const now  = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
      flipNumber(daysEl,    '00');
      flipNumber(hoursEl,   '00');
      flipNumber(minutesEl, '00');
      flipNumber(secondsEl, '00');
      return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    flipNumber(daysEl,    pad(days));
    flipNumber(hoursEl,   pad(hours));
    flipNumber(minutesEl, pad(minutes));
    flipNumber(secondsEl, pad(seconds));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

// ============================================================
// 2. NAVBAR — Scroll shadow + sticky behaviour
// ============================================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ============================================================
// 3. DROPDOWN MENUS
// ============================================================
(function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');

  dropdowns.forEach(dropdown => {
    const btn  = dropdown.querySelector('.nav-link--dropdown');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!btn || !menu) return;

    function openDropdown() {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      // Close all
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const b = d.querySelector('.nav-link--dropdown');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) openDropdown();
    });

    // Close on outside click
    document.addEventListener('click', closeDropdown);

    // Keyboard navigation
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
      if (e.key === 'Escape') closeDropdown();
    });
  });
})();

// ============================================================
// 4. MOBILE HAMBURGER MENU
// ============================================================
(function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const links      = mobileMenu ? mobileMenu.querySelectorAll('.mobile-nav__link, .mobile-cta') : [];

  if (!hamburger || !mobileMenu) return;

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  links.forEach(link => link.addEventListener('click', closeMenu));

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      closeMenu();
    }
  });
})();

// ============================================================
// 5. EMAIL FORM — Hero & Footer
// ============================================================
(function initForms() {
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // Hero Form
  const heroForm    = document.getElementById('notifyForm');
  const heroInput   = document.getElementById('email-input');
  const heroError   = document.getElementById('email-error');
  const heroSuccess = document.getElementById('email-success');
  const heroHint    = document.getElementById('email-hint');

  if (heroForm && heroInput) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = heroInput.value;

      if (!validateEmail(email)) {
        heroError.style.display   = 'flex';
        heroSuccess.style.display = 'none';
        heroInput.focus();
        heroForm.parentElement.querySelector('.notify-form__control').style.borderColor = '#D94F3D';
        return;
      }

      heroError.style.display   = 'none';
      heroSuccess.style.display = 'flex';
      heroHint.style.display    = 'none';
      heroInput.value           = '';
      heroForm.parentElement.querySelector('.notify-form__control').style.borderColor = '#007A4D';

      // Reset after 5s
      setTimeout(() => {
        heroSuccess.style.display = 'none';
        heroHint.style.display    = 'flex';
        heroForm.parentElement.querySelector('.notify-form__control').style.borderColor = '';
      }, 5000);
    });

    heroInput.addEventListener('input', () => {
      heroError.style.display = 'none';
      heroForm.parentElement.querySelector('.notify-form__control').style.borderColor = '';
    });
  }

  // Footer Form
  const footerForm  = document.getElementById('footerForm');
  const footerInput = document.getElementById('footer-email');

  if (footerForm && footerInput) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = footerInput.value;

      if (!validateEmail(email)) {
        footerInput.style.color = '#ff8c8c';
        setTimeout(() => { footerInput.style.color = ''; }, 1500);
        return;
      }

      // Show quick success feedback
      const wrap = footerInput.closest('.footer__input-wrap');
      const btn  = wrap.querySelector('.footer__submit-btn');

      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8L6.5 11.5L13 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
      btn.style.background = '#19A974';
      footerInput.value    = '';
      footerInput.placeholder = 'You\'re on the list!';

      setTimeout(() => {
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`;
        btn.style.background = '';
        footerInput.placeholder = 'Your email address';
      }, 4000);
    });
  }
})();

// ============================================================
// 6. SCROLL ANIMATIONS (Intersection Observer)
// ============================================================
(function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-aos]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Use rAF to ensure the transition plays visibly
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            entry.target.classList.add('aos-animate');
          });
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0   // fire as soon as ANY pixel enters viewport
  });

  // Observe after layout is settled (handles on-load visible elements)
  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      elements.forEach(el => observer.observe(el));
    });
  });

  // Fallback: if load already fired, observe immediately
  if (document.readyState === 'complete') {
    requestAnimationFrame(() => {
      elements.forEach(el => observer.observe(el));
    });
  }
})();

// ============================================================
// 7. PARALLAX — Subtle hero background shift on mouse move
// ============================================================
(function initParallax() {
  const heroBgImg = document.querySelector('.hero__bg-img');
  if (!heroBgImg) return;

  // Desktop only
  if (window.matchMedia('(max-width: 768px)').matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let rafId;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animate() {
    currentX = lerp(currentX, targetX, 0.04);
    currentY = lerp(currentY, targetY, 0.04);

    // Very subtle scale-and-shift — background drifts gently
    heroBgImg.style.transform =
      `scale(1.04) translate(${currentX * 8}px, ${currentY * 6}px)`;

    rafId = requestAnimationFrame(animate);
  }

  function onMouseMove(e) {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    targetX = (e.clientX - cx) / cx;
    targetY = (e.clientY - cy) / cy;
  }

  document.addEventListener('mousemove', onMouseMove, { passive: true });
  animate();

  window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      heroBgImg.style.transform = '';
    }
  });
})();

// ============================================================
// 8. SMOOTH ANCHOR SCROLLING
// ============================================================
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

// ============================================================
// 9. LANGUAGE SELECTOR — Visual feedback
// ============================================================
(function initLangSelector() {
  const selector = document.querySelector('.lang-selector');
  if (!selector) return;

  selector.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Placeholder: would open a language menu
      selector.style.borderColor = 'var(--color-primary)';
      setTimeout(() => { selector.style.borderColor = ''; }, 300);
    }
  });
})();

// ============================================================
// 10. FOOTER ACCORDION ON MOBILE
// ============================================================
(function initFooterAccordion() {
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  const cols = document.querySelectorAll('.footer__col');

  cols.forEach(col => {
    const title = col.querySelector('.footer__col-title');
    const links = col.querySelector('.footer__links');
    if (!title || !links) return;

    // Collapse by default on mobile
    links.style.display  = 'none';
    links.style.overflow = 'hidden';
    title.style.cursor   = 'pointer';

    // Add chevron indicator
    title.style.display         = 'flex';
    title.style.justifyContent  = 'space-between';
    title.style.alignItems      = 'center';

    const chevron = document.createElement('span');
    chevron.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5L7 9L11 5" stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    chevron.style.transition = 'transform 200ms ease';
    title.appendChild(chevron);

    let isOpen = false;

    title.addEventListener('click', () => {
      isOpen = !isOpen;
      links.style.display   = isOpen ? 'flex' : 'none';
      chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  });
})();
