/* ================================================
   SITE SPÉ MATHS TERMINALE — Scripts v2
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────
     Barre de progression de lecture
  ────────────────────────────────────────────── */
  const progressBar = document.createElement('div');
  progressBar.id = 'reading-progress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', updateProgress, { passive: true });
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(progress, 100) + '%';
  }

  /* ──────────────────────────────────────────────
     Mode sombre — toggle
  ────────────────────────────────────────────── */
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Injecter le bouton dans la navbar
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const actions = document.createElement('div');
    actions.className = 'navbar-actions';

    const darkBtn = document.createElement('button');
    darkBtn.id = 'dark-toggle';
    darkBtn.title = 'Basculer mode sombre';
    darkBtn.setAttribute('aria-label', 'Mode sombre');
    darkBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    darkBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next    = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      darkBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    actions.appendChild(darkBtn);

    // Bouton hamburger
    const hamburger = document.createElement('button');
    hamburger.id = 'nav-toggle';
    hamburger.setAttribute('aria-label', 'Menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';

    const navLinks = navbar.querySelector('.nav-links');
    if (navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('open');
      });
      // Fermer le menu au clic sur un lien
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
        });
      });
    }

    actions.appendChild(hamburger);
    navbar.appendChild(actions);
  }

  /* ──────────────────────────────────────────────
     Lien actif dans la navbar
  ────────────────────────────────────────────── */
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || href === './' + current) {
      a.classList.add('active');
    }
  });

  /* ──────────────────────────────────────────────
     Corrigés toggle
  ────────────────────────────────────────────── */
  document.querySelectorAll('.btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      target.classList.toggle('open');
      btn.textContent = target.classList.contains('open')
        ? '▲ Masquer le corrigé'
        : '▼ Voir le corrigé';
    });
  });

  /* ──────────────────────────────────────────────
     Back to top
  ────────────────────────────────────────────── */
  const backTopBtn = document.getElementById('back-top');
  if (backTopBtn) {
    window.addEventListener('scroll', () => {
      backTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTopBtn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    );
  }

  /* ──────────────────────────────────────────────
     Animations au défilement (fade-in)
  ────────────────────────────────────────────── */
  const fadeTargets = document.querySelectorAll(
    'section, .definition, .propriete, .methode, .exemple, .exercice, .card, .py-editor'
  );

  fadeTargets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animation une seule fois
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  fadeTargets.forEach(el => observer.observe(el));

  /* ──────────────────────────────────────────────
     Recherche (index)
  ────────────────────────────────────────────── */
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.card').forEach(card => {
        const text = card.textContent.toLowerCase();
        const show = q === '' || text.includes(q);
        card.style.opacity    = show ? '1'     : '0.2';
        card.style.transform  = show ? ''      : 'scale(0.97)';
        card.style.transition = 'opacity .3s, transform .3s';
        card.style.pointerEvents = show ? '' : 'none';
      });
    });
  }

  /* ──────────────────────────────────────────────
     Tooltip sur les formules MathJax (au survol)
  ────────────────────────────────────────────── */
  // Copier une formule au double-clic
  document.addEventListener('dblclick', e => {
    const mathEl = e.target.closest('.MathJax');
    if (mathEl) {
      const tex = mathEl.querySelector('[data-mjx-texclass]')?.textContent || '';
      if (tex && navigator.clipboard) {
        navigator.clipboard.writeText(tex).then(() => {
          showToast('Formule copiée !');
        }).catch(() => {});
      }
    }
  });

  /* ──────────────────────────────────────────────
     Toast notification
  ────────────────────────────────────────────── */
  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      Object.assign(toast.style, {
        position: 'fixed', bottom: '5rem', left: '50%',
        transform: 'translateX(-50%)',
        background: '#323232', color: '#fff',
        padding: '.55rem 1.2rem', borderRadius: '20px',
        fontSize: '.85rem', zIndex: '9999',
        opacity: '0', transition: 'opacity .3s',
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 4px 16px rgba(0,0,0,.3)'
      });
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2000);
  }

  /* ──────────────────────────────────────────────
     Smooth scroll sur les ancres du sommaire
  ────────────────────────────────────────────── */
  document.querySelectorAll('.toc a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 70; // hauteur navbar
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
