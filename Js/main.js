// js/main.js
import { initDropdown, initMobileDropdown } from './dropdown.js';
import { initPortfolioEffects, initSmoothScroll } from './portfolio-effects.js';

// Inicializar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar dropdown (para home y portfolio)
    initDropdown();
    
    // Inicializar efectos del portfolio (solo si estamos en portfolio.html)
    if (document.querySelector('.portfolio-item')) {
        initPortfolioEffects();
    }
    
    // Inicializar scroll suave
    initSmoothScroll();
    
    // Inicializar dropdown para móviles
    initMobileDropdown();
    
    // Detectar cambios en el tamaño de la ventana
    window.addEventListener('resize', function() {
        initMobileDropdown();
    });
});

// Exportar todas las funciones por si se necesitan individualmente
export { initDropdown, initMobileDropdown, initPortfolioEffects, initSmoothScroll };