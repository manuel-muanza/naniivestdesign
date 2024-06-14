// Seleciona os elementos necessários para o dark mode
const $switcher = document.querySelector("#switcher");
const $dark = document.querySelector('.dark');
const $light = document.querySelector('.light');
const root = document.documentElement;

let $state = false; // Estado inicial do modo (false para claro)

// Funções Utilitárias
const toggleClasses2 = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

const setCSSVariables = (variables) => {
    Object.keys(variables).forEach(key => {
        root.style.setProperty(key, variables[key]);
    });
};

// Funções para Modo Escuro/Claro
const darkModeElements = () => {
    setCSSVariables({
        '--primary-color': '#222020',
        '--secondary-color': '#9897c7',
        '--background-light': '#000000',
        '--hov-color': '#9897c7',
        '--text-color': '#F8F9FD',
        '--text-color2': '#9897c7',
        '--error': '#de5260',
        '--transparent':'rgba(255, 255, 255, .1)'
    });
    toggleClasses2($switcher, 'ligth-mode', 'dark-mode');
    toggleClasses2($dark, 'bi-moon', 'bi-moon-fill');
    toggleClasses2($light, 'bi-brightness-high-fill', 'bi-brightness-high');
};

const lightModeElements = () => {
    setCSSVariables({
        '--primary-color': '#ffffff',
        '--secondary-color': '#1089FF',
        '--background-light': '#F8F9FD',
        '--hov-color': '#1472d0',
        '--text-color': '#020210',
        '--text-color2': '#020210',
        '--error': '#ec193c',
        '--transparent':'rgba(0, 0, 0, 0.1)'
    });
    toggleClasses2($switcher, 'dark-mode', 'ligth-mode');
    toggleClasses2($dark, 'bi-moon-fill', 'bi-moon');
    toggleClasses2($light, 'bi-brightness-high', 'bi-brightness-high-fill');
};

const updateRootVariables = (isDarkMode) => {
    isDarkMode ? darkModeElements() : lightModeElements();
    localStorage.setItem('darkMode', isDarkMode);
};

// Alternar Modo Escuro/Claro
$switcher.addEventListener('click', () => {
    $state = !$state;
    updateRootVariables($state);
});

// Ativar Modo Escuro ao clicar no $dark
$dark.addEventListener('click', () => {
    $state = true;
    updateRootVariables($state);
});

// Ativar Modo Claro ao clicar no $light
$light.addEventListener('click', () => {
    $state = false;
    updateRootVariables($state);
});

// Restaurar estado ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    $state = darkMode;
    updateRootVariables(darkMode);
});