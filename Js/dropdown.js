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