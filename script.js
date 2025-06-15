// filepath: c:\Users\shubh\OneDrive\Documents\GitHub\portfolio-website\script.js
// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section, .project-card').forEach(el => {
    observer.observe(el);
});