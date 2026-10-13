/* ============================================
   DIGITAL INNOVATIONS — Interactions
============================================ */

/* Header scroll effect */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
});

/* Mobile menu toggle */
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
}

/* Reveal on scroll */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

/* Work filter */
function filterWork(category, btn) {
    document.querySelectorAll('.work-filter').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.querySelectorAll('.work-card').forEach(card => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? 'flex' : 'none';
    });
}

/* Contact form */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || 'friend';
    alert(`Thanks, ${name}! Your message has been sent to Digital Innovations.\n\nWe'll reply within 24 hours.`);
    e.target.reset();
}

/* Mailto CTA (for pages with data-cta buttons) */
function initCtaButtons() {
    document.querySelectorAll('[data-cta]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.tagName === 'A' && btn.getAttribute('href') !== '#') return;
            e.preventDefault();
            window.location.href = 'contact.html';
        });
    });
}

/* Smooth anchor scroll (offset for fixed header) */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const top = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
                const links = document.querySelector('.nav-links');
                if (links) links.classList.remove('open');
            }
        });
    });
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    initCtaButtons();
    initSmoothScroll();
});
