// Main JavaScript entry point
import './style.css';

console.log('Portfolio app loaded');

// Simple scroll reveal animation observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Target elements to animate
    const elementsToAnimate = document.querySelectorAll('section, h1, .bg-white, .btn-primary');

    elementsToAnimate.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
