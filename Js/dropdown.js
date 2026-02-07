// js/dropdown.js
export function initDropdown() {
    const portfolioNav = document.querySelector('.nav-item');
    const dropdown = document.querySelector('.dropdown');
    
    if (portfolioNav && dropdown) {
        portfolioNav.addEventListener('mouseenter', function() {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        });
        
        portfolioNav.addEventListener('mouseleave', function() {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
        });
    }
}

// Para móviles - toggle del dropdown
export function initMobileDropdown() {
    const portfolioLink = document.querySelector('.nav-item .nav-link');
    const dropdown = document.querySelector('.dropdown');
    
    if (portfolioLink && dropdown && window.innerWidth <= 768) {
        portfolioLink.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
}
// js/dropdown.js - Agregar esta función
export function setActiveLinks() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link, .dropdown a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage && linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// import { initDropdown, initMobileDropdown, setActiveLinks } from './dropdown.js';
// import { initPortfolioEffects, initSmoothScroll } from './portfolio-effects.js';

// document.addEventListener('DOMContentLoaded', function() {
//     initDropdown();
//     setActiveLinks(); // <-- Agregar esta línea
    
//     if (document.querySelector('.portfolio-item')) {
//         initPortfolioEffects();
//     }
    
//     initSmoothScroll();
//     initMobileDropdown();
    
//     window.addEventListener('resize', function() {
//         initMobileDropdown();
//     });
// });