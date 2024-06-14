// Seleciona os elementos necessários
const $btnMenu = document.querySelector('#btn-menu');
const $sideMenu = document.querySelector('#dash-nav');
const $logoArea = document.querySelector('#dash-logo');
const $listItems = document.querySelectorAll('.list-item');
const $mainArea = document.querySelector('#main-area');
const $changeImagePanel2 = document.querySelector('#change-image-container');
const $changePassPanel2 = document.querySelector('#change-pass')
const root2 = document.documentElement;

// Função Utilitária para alternar classes
const toggleClasses3 = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

// Função Utilitária para definir variáveis CSS
const setCSSVariable = (variable, value) => {
    root2.style.setProperty(variable, value);
};

// Evento de clique no botão do menu
$btnMenu.addEventListener('click', () => {
    // Alterna classes no menu lateral
    if ($sideMenu.classList.contains('big-menu')) {
        toggleClasses3($sideMenu, 'big-menu', 'small-menu');
        toggleClasses3($btnMenu, 'bi-list', 'bi-arrow-right-circle-fill');
        toggleClasses3($logoArea, 'pos-left', 'pos-center');
        $listItems.forEach(item => toggleClasses3(item, 'show-list', 'hide'));
        $changeImagePanel2.style.marginLeft = '500px';
        $changePassPanel2.style.left = '35%';

        console.log('reduziu');
    } else {
        toggleClasses3($sideMenu, 'small-menu', 'big-menu');
        toggleClasses3($btnMenu, 'bi-arrow-right-circle-fill', 'bi-list');
        toggleClasses3($logoArea, 'pos-center', 'pos-left');
        $listItems.forEach(item => toggleClasses3(item, 'hide', 'show-list'));
        $changeImagePanel2.style.marginLeft = '300px';
        $changePassPanel2.style.left = '25%';
        console.log('aumentou');
    }

    // Verifica o tamanho atual do menu e alterna entre os tamanhos
    const currentMenuSize = getComputedStyle(root2).getPropertyValue('--menu-tam').trim();
    if (currentMenuSize === '300px') {
        setCSSVariable('--menu-tam', '80px');
    } else {
        setCSSVariable('--menu-tam', '300px');
    }
});