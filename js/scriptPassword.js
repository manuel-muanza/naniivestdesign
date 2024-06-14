// Seleciona os elementos necessários
const $passwordInput = document.querySelector('#the-password');
const $passwordError = document.querySelector('.errorEmail');
const $passwordLbl = document.querySelector('.lbl-email');
const $newPassInput1 = document.querySelector('#change-pass1');
const $newPassError1 = document.querySelector('.pass1Error');
const $newPassLbl1 = document.querySelector('.newPass1');
const $newPassInput2 = document.querySelector('#change-pass2');
const $newPassError2 = document.querySelector('.pass2Error');
const $newPassLbl2 = document.querySelector('.newPass2');
const $submitNewPass = document.querySelector('#new-pass-submit-button2');
const $cancelNewPass = document.querySelector('#cancel-new-pass');
const $eyeIcons = document.querySelectorAll('.eye');

// Função Utilitária para alternar classes
const toggleClasses = (element, removeClass, addClass) => {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
};

// Função de Validação
const validPass = (pass) => pass.length >= 6;

const cleanError = (error, input, label) => {
    error.classList.add('hide');
    input.classList.remove('border');
    label.classList.remove('lbl-error');
};

const showError = (error, input, label) => {
    error.classList.remove('hide');
    input.classList.add('border');
    label.classList.add('lbl-error');
};

// Manipulação de Inputs e Labels
const addFocusEffect = ($input, $label) => {
    $input.addEventListener('focus', () => {
        toggleClasses($label, 'no-label-effect', 'label-effect');
        $input.classList.add('input-focus');
    });

    $input.addEventListener('blur', () => {
        if (!$input.value) {
            toggleClasses($label, 'label-effect', 'no-label-effect');
            $input.classList.remove('input-focus');
        }
    });
};

// Adiciona efeitos de foco aos inputs
const $inputsForm = document.querySelectorAll('.input-effect');
const $labels = document.querySelectorAll('#change-pass-form label');
$inputsForm.forEach(($input, index) => addFocusEffect($input, $labels[index]));

// Alternar Visibilidade da Senha
$eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener('click', () => {
        const input = eyeIcon.previousElementSibling;
        const isPasswordVisible = eyeIcon.classList.contains('bi-eye-fill');
        toggleClasses(eyeIcon, isPasswordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill', isPasswordVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill');
        input.type = isPasswordVisible ? 'text' : 'password';
    });
});

// Limpa os erros ao digitar
$passwordInput.addEventListener('input', () => cleanError($passwordError, $passwordInput, $passwordLbl));
$newPassInput1.addEventListener('input', () => cleanError($newPassError1, $newPassInput1, $newPassLbl1));
$newPassInput2.addEventListener('input', () => cleanError($newPassError2, $newPassInput2, $newPassLbl2));

// Validação e submissão de nova senha
$submitNewPass.addEventListener('click', (event) => {
    event.preventDefault();
    let valid = true;

    if (!validPass($passwordInput.value)) {
        showError($passwordError, $passwordInput, $passwordLbl);
        valid = false;
    }

    if (!validPass($newPassInput1.value)) {
        showError($newPassError1, $newPassInput1, $newPassLbl1);
        valid = false;
    }

    if ($newPassInput1.value !== $newPassInput2.value) {
        showError($newPassError2, $newPassInput2, $newPassLbl2);
        valid = false;
    }

    if (valid) {
        console.log('Senha alterada com sucesso!');
        // Adicione aqui a lógica para salvar a nova senha
    }
});

// Cancelar a mudança de senha
$cancelNewPass.addEventListener('click', () => {
    // Adicione aqui a lógica para cancelar a mudança de senha
    console.log('Mudança de senha cancelada');
});
