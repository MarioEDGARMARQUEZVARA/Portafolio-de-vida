// js/language.js
import { translations } from './translations.js';

let currentLanguage = localStorage.getItem('language') || 'es';

export function initLanguage() {
    // Crear el botón de cambio de idioma
    addLanguageToggle();
    
    // Aplicar las traducciones al cargar la página
    applyTranslations(currentLanguage);
    
    // Actualizar la bandera según el idioma actual
    updateFlag(currentLanguage);
}

function addLanguageToggle() {
    // Buscar el contenedor específico para el botón de idioma
    const toggleContainer = document.querySelector('.language-toggle-container');
    if (!toggleContainer) return;
    
    // Verificar si ya existe el botón de idioma
    if (toggleContainer.querySelector('.language-toggle')) return;
    
    // Crear el botón de idioma
    const langToggle = document.createElement('div');
    langToggle.className = 'language-toggle';
    
    // Crear la imagen de la bandera
    const flagImg = document.createElement('img');
    flagImg.id = 'language-flag';
    flagImg.src = currentLanguage === 'es' 
        ? '/images/country-mexico-mexico-flag-illustration-vector.jpg' 
        : '/images/usa-america-flag.webp';
    flagImg.alt = currentLanguage === 'es' ? 'Español México' : 'English US';
    
    langToggle.appendChild(flagImg);
    toggleContainer.appendChild(langToggle);
    
    // Añadir evento de clic
    langToggle.addEventListener('click', toggleLanguage);
}

export function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    applyTranslations(currentLanguage);
    updateFlag(currentLanguage);
}

function updateFlag(lang) {
    const flagImg = document.getElementById('language-flag');
    if (!flagImg) return;
    
    if (lang === 'es') {
        flagImg.src = '/images/country-mexico-mexico-flag-illustration-vector.jpg';
        flagImg.alt = 'Español México';
    } else {
        flagImg.src = '/images/usa-america-flag.webp';
        flagImg.alt = 'English US';
    }
}

export function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Actualizar el título de la página
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        const key = titleElement.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            document.title = translations[lang][key];
        }
    }
}