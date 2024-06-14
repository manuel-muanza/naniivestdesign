// Seleciona todos os elementos do DOM
const $areaDashboard = document.querySelector('#dashboard-area');
const $btnDashboard = document.querySelector('#btn-Dashboard');
const $areaShareholder = document.querySelector('#shareholder-area');
const $btnShareholderArea = document.querySelector('#btn-shareholder');
const $btnMoviment = document.querySelector('#btn-movement');
const $areaMoviment = document.querySelector('#movement-area');
const $btnTax = document.querySelector('#btn-tax');
const $areaTax = document.querySelector('#tax-area');
const $btnInvestiment = document.querySelector('#btn-investiment');
const $areaInvestiment = document.querySelector('#investiment-area');
const $btnUserMenu = document.querySelector('#btn-user');
const $areaUser = document.querySelector('#user-area-dash');
const $btnConfig = document.querySelector('#btn-config');
const $btnConfig2 = document.querySelector('#btn-config-other');
const $areaConfig = document.querySelector('#config-area');
const $btnProfile = document.querySelector('#btn-profile');
const $areaProfile = document.querySelector('#profile-area');
const $btnNotification = document.querySelector('.btn-notification');
const $areaNotification = document.querySelector('#notification-area');
const $btnChat = document.querySelector('.btn-chat');
const $areaChat = document.querySelector('#chat-area');
const $btnHome = document.querySelector('.btn-home');
const $address = document.querySelector('#address-final');

// Função para alternar classes
const toggleClasses5 = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

// Função para mudar o menu
function changeMenu(text, element, principalMenu, ...otherMenus) {
    // Adiciona um evento de clique ao elemento
    element.addEventListener('click', () => {
        $address.textContent = text;
        // Mostra o menu principal e esconde os outros menus
        toggleClasses5(principalMenu, 'hide-menu', 'show-menu');

        otherMenus.forEach(menu => {
            toggleClasses5(menu, 'show-menu', 'hide-menu');
        });
    });
}

// Configura os menus e os botões correspondentes
// Menu Principal (Dashboard)
changeMenu(
    ' ',
    $btnDashboard,
    $areaDashboard, 
    $areaShareholder, 
    $areaMoviment, 
    $areaTax,
    $areaInvestiment, 
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

changeMenu(
    ' ',
    $btnHome,
    $areaDashboard, 
    $areaShareholder, 
    $areaMoviment, 
    $areaTax,
    $areaInvestiment, 
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Acionistas
changeMenu(
    'Acionistas',
    $btnShareholderArea, 
    $areaShareholder, 
    $areaDashboard, 
    $areaMoviment, 
    $areaTax,
    $areaInvestiment, 
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Movimento
changeMenu(
    'Movimento',
    $btnMoviment, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard, 
    $areaTax,
    $areaInvestiment, 
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Taxa
changeMenu(
    'Taxa',
    $btnTax, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard,
    $areaInvestiment,
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Investimento
changeMenu(
    'Investimento',
    $btnInvestiment, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard, 
    $areaUser, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Usuario
changeMenu(
    'Utilizador',
    $btnUserMenu, 
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard, 
    $areaConfig,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Configurações
changeMenu(
    'Configurações',
    $btnConfig, 
    $areaConfig,
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Configurações (Botão 2)
changeMenu(
    'Configurações',
    $btnConfig2, 
    $areaConfig,
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard,
    $areaProfile,
    $areaNotification,
    $areaChat
);

// Menu Perfil
changeMenu(
    'Perfil',
    $btnProfile,
    $areaProfile, 
    $areaConfig,
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard,
    $areaNotification,
    $areaChat
);

// Menu Notificações
changeMenu(
    'Notificações',
    $btnNotification,
    $areaNotification,
    $areaProfile, 
    $areaConfig,
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard,
    $areaChat
);

// Menu Mensagem
changeMenu(
    'Mensagens',
    $btnChat,
    $areaChat,
    $areaNotification,
    $areaProfile, 
    $areaConfig,
    $areaUser, 
    $areaInvestiment, 
    $areaTax, 
    $areaMoviment, 
    $areaShareholder, 
    $areaDashboard
);

/*
// Adiciona evento de clique para o botão "Home"
$btnHome.addEventListener('click', () => {
    console.log('clicou aqui');
    toggleClasses5($areaDashboard, 'hide-menu', 'show-menu');
    toggleClasses5($areaShareholder, 'show-menu', 'hide-menu');
    toggleClasses5($areaMoviment, 'show-menu', 'hide-menu');
    toggleClasses5($areaTax, 'show-menu', 'hide-menu');
    toggleClasses5($areaInvestiment, 'show-menu', 'hide-menu');
    toggleClasses5($areaUser, 'show-menu', 'hide-menu');
    toggleClasses5($areaConfig, 'show-menu', 'hide-menu');
    toggleClasses5($areaProfile, 'show-menu', 'hide-menu');
    toggleClasses5($areaNotification, 'show-menu', 'hide-menu');
    toggleClasses5($areaChat, 'show-menu', 'hide-menu');
});
*/