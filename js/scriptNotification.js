const $notification = document.querySelector('.bi-bell');
const $notificationPanel = document.querySelector('.notificationList');

// Funções Utilitárias
const toggleClasses9 = (element, class1, class2) => {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
};

$notification.addEventListener('click', (event) => {
    event.stopPropagation(); // Previne que o clique no ícone feche o painel
    toggleClasses9($notificationPanel, 'NoVisible', 'visible');  
});

document.addEventListener('click', (event) => {
    if (!$notificationPanel.classList.contains('NoVisible') && 
        !event.target.closest('.notificationList') && 
        !event.target.closest('.bi-bell')) {
        $notificationPanel.classList.remove('visible');
        $notificationPanel.classList.add('NoVisible');
    }
});