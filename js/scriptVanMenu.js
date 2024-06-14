const $btnUser = document.querySelector('.bi-person-circle');
const $menuUser = document.querySelector('.user-area-show');

// Função Utilitária para alternar classes
const toggleClasses4 = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

// Função para alternar entre abrir e fechar o menu
const toggleMenu = () => {
    if ($menuUser.classList.contains('open-menu')) {
        toggleClasses4($menuUser, 'open-menu', 'close-menu');
    } else {
        toggleClasses4($menuUser, 'close-menu', 'open-menu');
    }
};

$btnUser.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', (event) => {
    if ($menuUser.classList.contains('open-menu') && !($menuUser.contains(event.target) || $btnUser.contains(event.target))) {
        toggleClasses4($menuUser, 'open-menu', 'close-menu');
    }
});
