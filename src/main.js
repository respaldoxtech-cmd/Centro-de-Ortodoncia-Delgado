import * as THREE from 'https://esm.sh/three@0.160.0';
import gsap from 'https://esm.sh/gsap@3.12.5';
import { createIcons, Sparkles, ShieldCheck, Smile, Stethoscope, Instagram, Facebook, Linkedin } from 'https://esm.sh/lucide@0.344.0';

// Initialize Lucide Icons after the DOM is fully loaded for safety
window.addEventListener('DOMContentLoaded', () => {
    createIcons({
        icons: {
            Sparkles,
            ShieldCheck,
            Smile,
            Stethoscope,
            Instagram,
            Facebook,
            Linkedin
        }
    });
});

// Scroll Effects
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }
});

// GSAP Entry Animations
gsap.from('.section-tag', { opacity: 0, y: 20, stagger: 0.2, duration: 1, ease: 'power3.out' });
gsap.from('.hero-title', { opacity: 0, y: 30, duration: 1.2, delay: 0.2, ease: 'power4.out' });
gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 1, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero-btns', { opacity: 0, y: 20, duration: 1, delay: 0.6, ease: 'power3.out' });

// Video Entry Animation
gsap.fromTo('#hero-video', 
    { opacity: 0, scale: 0.9, y: 20 },
    { opacity: 1, scale: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' }
);

// Mouse Tilt Effect (Smoother)
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
    // Ensure video is playing
    heroVideo.play().catch(e => console.warn('Autoplay prevented:', e));
    
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15; // Reduced intensity
        const y = (e.clientY / window.innerHeight - 0.5) * 15;

        gsap.to(heroVideo, {
            x: x,
            y: y,
            rotationY: x * 0.1, // Subtle rotation
            rotationX: -y * 0.1,
            duration: 1,
            ease: "power2.out"
        });
    });
}

// Scroll trigger for service cards
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to('.service-card', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: 'auto'
            });
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.services-grid').forEach(el => observer.observe(el));
