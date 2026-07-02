// ===== TIROIR LATÉRAL DROIT =====
const hamburger  = document.getElementById('hamburger');
const navOverlay = document.getElementById('navOverlay');

const backdrop = document.createElement('div');
backdrop.className = 'nav-backdrop';
document.body.appendChild(backdrop);

if (hamburger && navOverlay) {
    hamburger.addEventListener('click', () => {
        const isOpen = navOverlay.classList.contains('active');
        hamburger.classList.toggle('active', !isOpen);
        navOverlay.classList.toggle('active', !isOpen);
        backdrop.classList.toggle('active', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    backdrop.addEventListener('click', closeMenu);

    navOverlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });
}

function closeMenu() {
    if (!hamburger || !navOverlay) return;
    hamburger.classList.remove('active');
    navOverlay.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== SERVICES DROPDOWN =====
const overlayDdTrigger = document.querySelector('.overlay-dd-trigger');
const overlaySub       = document.querySelector('.overlay-sub');

if (overlayDdTrigger && overlaySub) {
    overlayDdTrigger.addEventListener('click', () => {
        const isOpen = overlaySub.classList.contains('open');
        overlaySub.classList.toggle('open', !isOpen);
        overlayDdTrigger.classList.toggle('active', !isOpen);
    });
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== FADE-IN AU SCROLL =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.card, .avantage, .timeline-item, .skill-group, .engagement, .temoignage-wrap, .histoire-grid'
).forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
