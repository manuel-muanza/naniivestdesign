const $changeImage = document.querySelector('#change-image');
const $changeImagePanel = document.querySelector('#change-image-container');
const $background = document.querySelector('.bg');
const $cancelUpload = document.querySelector('.cancel-upload');
const $cancelConfirmation = document.querySelector('#cancel-confirmacion');
const $confirmationPanel = document.querySelector('.dash-code');
const $changePassContainer = document.querySelector('#change-pass');

// Funções Utilitárias
const toggleClasses6 = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

$changeImage.addEventListener('click', () => {
    console.log('exemplo');
    toggleClasses6($changeImagePanel, 'hide-modal', 'show-modal');
    toggleClasses6($background, 'close', 'open');
});

$cancelUpload.addEventListener('click', ()=> {
    toggleClasses6($changeImagePanel, 'show-modal', 'hide-modal');
    toggleClasses6($background, 'open', 'close');
})

const $changePassword = document.querySelector('#change-password');
const $changePassPanel = document.querySelector('#change-pass-container');
const $cancelChangePass = document.querySelector('#cancel-new-pass');

$changePassword.addEventListener('click', ()=> {
    const $actualPass = document.querySelector('#the-password');
    const $firstPass = document.querySelector('#change-pass1');
    const $secondPass = document.querySelector('#change-pass2');

    $actualPass.value = '';
    $firstPass.value = '';
    $secondPass.value = '';

    toggleClasses6($changePassPanel, 'hide-modal-pass', 'show-modal-pass');
    toggleClasses6($changePassContainer, 'hidePassPanel', 'showPassPanel');
    toggleClasses6($background, 'close', 'open');
});

$cancelChangePass.addEventListener('click', ()=> {
    toggleClasses6($changePassPanel, 'show-modal-pass', 'hide-modal-pass');
    toggleClasses6($background, 'open', 'close');
});

$cancelConfirmation.addEventListener('click', ()=> {
    toggleClasses6($changePassPanel, 'show-modal-pass', 'hide-modal-pass');
    toggleClasses6($confirmationPanel, 'show', 'hide');
    toggleClasses6($background, 'open', 'close');
});