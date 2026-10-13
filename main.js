/* ============================================
   DIGITAL INNOVATIONS — Interactions
============================================ */

/* Header scroll effect */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
    }
});

/* Mobile menu toggle */
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    if (links) links.classList.toggle('open');
}

/* Reveal on scroll */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Contact CTA — replace with your real email
    const ctaButtons = document.querySelectorAll('[data-cta]');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const subject = encodeURIComponent("Project enquiry — Digital Innovations");
            const body = encodeURIComponent(
                "Hi Digital Innovations,\n\nI'd like to talk about a project.\n\n" +
                "My name: \n" +
                "Company: \n" +
                "What I need: \n" +
                "Budget range: \n" +
                "Timeline: \n\n" +
                "Thanks"
            );
            window.location.href = `mailto:hello@digitalinnovations.co.bw?subject=${subject}&body=${body}`;
        });
    });

    // Smooth anchor scroll (offset for fixed header)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.length < 2) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                const links = document.querySelector('.nav-links');
                if (links) links.classList.remove('open');
            }
        });
    });
});
