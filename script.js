/* ═══════════════════════════════════════════════
   CHANUKA SANESH — Portfolio Script v2.0
   Matches: my_portfolio_v2.html
═══════════════════════════════════════════════ */

/* ── 1. MENU ICON TOGGLE (mobile) ── */
const menuIcon = document.querySelector('#menu-icon');
const navbar   = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('open');
        navbar.classList.toggle('active');
    };
}

/* ── 2. ACTIVE NAV ON SCROLL ── */
const allSections = document.querySelectorAll('section[id]');
const navLinks    = document.querySelectorAll('.navbar a');
const indicator   = document.querySelector('.nav-indicator');

function updateIndicator(el) {
    if (!indicator || !el) return;
    indicator.style.left  = el.offsetLeft + 'px';
    indicator.style.width = el.offsetWidth + 'px';
}

window.addEventListener('scroll', () => {
    let current = '';
    allSections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
            updateIndicator(link);
        }
    });
});

/* initialise indicator on load */
window.addEventListener('load', () => {
    const active = document.querySelector('.navbar a.active');
    updateIndicator(active);
});

/* update indicator on click */
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.currentTarget.classList.add('active');
        updateIndicator(e.currentTarget);

        /* close mobile menu */
        navbar.classList.remove('active');
        menuIcon && menuIcon.classList.remove('open');
    });
});

/* ── 3. SCROLL REVEAL (IntersectionObserver) ── */
const srElements = document.querySelectorAll('[data-sr]');
const srObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            srObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.14 });

srElements.forEach(el => srObserver.observe(el));

/* ── 4. TYPED.JS ── */
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: [
            'Electronic Engineering Undergraduate',
            'PCB Designer',
            'Robotics Enthusiast',
            'IoT Developer',
            'Problem Solver'
        ],
        typeSpeed:  80,
        backSpeed:  60,
        backDelay:  1200,
        loop:       true,
    });
}

/* ── 5. FOOTER YEAR ── */

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
