/* ================================================
   DULCE ÉLÉGANCE — Script
   ================================================ */

/* ---- Navbar Scroll Effect ---- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- Mobile Menu Toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Prevent body scroll when menu is open
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- Menu Tabs ---- */
const tabBtns = document.querySelectorAll('.tab-btn');
const menuPanels = document.querySelectorAll('.menu-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    menuPanels.forEach(p => p.classList.remove('active'));

    btn.classList.add('active');

    const panel = document.getElementById('tab-' + target);
    if (panel) {
      panel.classList.add('active');
      // Animate cards in
      panel.querySelectorAll('.menu-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80);
      });
    }
  });
});

/* ---- Testimonials Carousel ---- */
const track = document.getElementById('testimonialsTrack');
const dotsContainer = document.getElementById('carouselDots');
const cards = track ? track.querySelectorAll('.testimonial-card') : [];

let currentSlide = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function getTotalSlides() {
  return Math.ceil(cards.length / slidesPerView);
}

function buildDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  const total = getTotalSlides();
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === currentSlide ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  if (!track) return;
  const cardWidth = track.querySelector('.testimonial-card').offsetWidth;
  const gap = 24;
  const offset = currentSlide * slidesPerView * (cardWidth + gap);
  track.style.transform = `translateX(-${offset}px)`;

  dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(index) {
  const total = getTotalSlides();
  currentSlide = Math.max(0, Math.min(index, total - 1));
  updateCarousel();
}

document.getElementById('carouselPrev')?.addEventListener('click', () => {
  const total = getTotalSlides();
  currentSlide = (currentSlide - 1 + total) % total;
  updateCarousel();
});

document.getElementById('carouselNext')?.addEventListener('click', () => {
  const total = getTotalSlides();
  currentSlide = (currentSlide + 1) % total;
  updateCarousel();
});

// Auto-play
let autoPlay = setInterval(() => {
  const total = getTotalSlides();
  currentSlide = (currentSlide + 1) % total;
  updateCarousel();
}, 5000);

track?.addEventListener('mouseenter', () => clearInterval(autoPlay));
track?.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => {
    const total = getTotalSlides();
    currentSlide = (currentSlide + 1) % total;
    updateCarousel();
  }, 5000);
});

window.addEventListener('resize', () => {
  slidesPerView = getSlidesPerView();
  currentSlide = 0;
  buildDots();
  updateCarousel();
});

buildDots();
updateCarousel();

/* ---- Reservation Form ---- */
const rezervaForm = document.getElementById('rezervaForm');
const formSuccess = document.getElementById('formSuccess');

rezervaForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  rezervaForm.style.opacity = '0';
  rezervaForm.style.transform = 'scale(0.97)';
  setTimeout(() => {
    rezervaForm.style.display = 'none';
    formSuccess.classList.add('visible');
    formSuccess.style.opacity = '0';
    setTimeout(() => {
      formSuccess.style.transition = 'opacity 0.5s ease';
      formSuccess.style.opacity = '1';
    }, 50);
  }, 400);
});

/* ---- Scroll Reveal ---- */
const revealElements = document.querySelectorAll('.despre-grid, .section-header, .menu-card, .gallery-item, .testimonial-card, .contact-card, .contact-map');

revealElements.forEach(el => {
  el.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Stagger delays for grid children
document.querySelectorAll('.menu-grid .menu-card, .gallery-grid .gallery-item, .contact-info .contact-card').forEach((el, i) => {
  el.dataset.delay = i * 80;
});

revealElements.forEach(el => revealObserver.observe(el));

/* ---- Back to Top ---- */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navH = navbar.offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

/* ---- Newsletter form ---- */
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.querySelector('input');
  if (input.value) {
    input.value = '';
    input.placeholder = 'Abonament confirmat! ✓';
    setTimeout(() => { input.placeholder = 'Email-ul dvs.'; }, 3000);
  }
});
