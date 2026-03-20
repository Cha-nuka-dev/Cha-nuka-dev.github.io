// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections/* Active Link Handling */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let indicator = document.querySelector('.nav-indicator');

function updateIndicator(element) {
    if (!element) return;
    indicator.style.left = element.offsetLeft + 'px';
    indicator.style.width = element.offsetWidth + 'px';
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let target = document.querySelector('header nav a[href*=' + id + ']');
                if (target) {
                    target.classList.add('active');
                    updateIndicator(target);
                }
            });
        }
    });

    /* Sticky Header Logic Removed as we use fixed position */
};

// Initialize indicator
window.addEventListener('load', () => {
    let activeLink = document.querySelector('header nav a.active');
    updateIndicator(activeLink);
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        updateIndicator(e.target);
    });
});

// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.hero-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.hero-content p, .about-content', { origin: 'right' });

// Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Electronic Engineering Undergraduate', 'PCB Designer', 'Robotics Enthusiast', 'Problem Solver'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Update Year
document.getElementById('year').textContent = new Date().getFullYear();
