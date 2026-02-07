// js/portfolio-effects.js
export function initPortfolioEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (portfolioItems.length > 0) {
        // Efecto de carga animada
        portfolioItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 * index);
        });
        
        // Efecto hover para el texto de enlace
        const portfolioLinkTexts = document.querySelectorAll('.portfolio-link-text');
        portfolioLinkTexts.forEach(linkText => {
            const parentItem = linkText.closest('.portfolio-item');
            
            parentItem.addEventListener('mouseenter', function() {
                const icon = linkText.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(5px)';
                }
            });
            
            parentItem.addEventListener('mouseleave', function() {
                const icon = linkText.querySelector('i');
                if (icon) {
                    icon.style.transform = 'translateX(0)';
                }
            });
        });
    }
}

// Efecto de scroll suave para enlaces internos
export function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar scroll suave para enlaces internos
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}