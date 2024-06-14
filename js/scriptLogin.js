 // Seleciona todos os elementos necessários
 const $inputs = document.querySelectorAll(".personal");
 const $labels = document.querySelectorAll('.modal label');
 const $inputsForm = document.querySelectorAll('.input-effect');
 const $submitLogin = document.querySelector('#login-submit-button');
 const $emailInput = document.querySelector('#email-login');
 const $emailError = document.querySelector('.errorEmail');
 const $emailLbl = document.querySelector('.lbl-email');
 const $passInput1 = document.querySelector('#password-login');
 const $passError1 = document.querySelector('.errorPass1');
 const $passLbl1 = document.querySelector('.lblpass1');
 const $eyeIcons = document.querySelectorAll('.eye'); 
 const $passes = document.querySelectorAll('.pass'); 
 const $codeSubmit = document.querySelector('#confirmation-submit-button');
 const $codeInput = document.querySelector('#confirmation-code');
 const $codeError = document.querySelector('.codeError');
 const $codeLbl = document.querySelector('.codeLbl');
 const $timer = document.querySelector('#timer');
 const $codeNew = document.querySelector('#newCode');
 const $newPassInp1 = document.querySelector('#pass1');
 const $newPassError1 = document.querySelector('.pass1Error');
 const $newPassLbl1 = document.querySelector('.newPass1');
 const $newPassInp2 = document.querySelector('#pass2');
 const $newPassError2 = document.querySelector('.pass2Error');
 const $newPassLbl2 = document.querySelector('.newPass2');
 const $newPassSubmit = document.querySelector('#new-pass-submit-button');
 
 let timeLeft = 5; // Ajuste o tempo inicial para 5 segundos
 let timerInterval;
 
 // Funções Utilitárias
 const toggleClasses = (element, removeClass, addClass) => {
     element.classList.remove(removeClass);
     element.classList.add(addClass);
 };
 
 // Funções de Validação
 const validEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 
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
 
 $inputs.forEach(input => {
     input.addEventListener("focus", () => input.classList.add('focused-border'));
     input.addEventListener("blur", () => input.classList.remove('focused-border'));
 });
 
 $inputsForm.forEach(($input, index) => addFocusEffect($input, $labels[index]));
 
 // Validação de Login
 $emailInput.addEventListener('input', () => cleanError($emailError, $emailInput, $emailLbl));
 $passInput1.addEventListener('input', () => validPass($passInput1.value) && cleanError($passError1, $passInput1, $passLbl1));
 
 $submitLogin.addEventListener('click', (event) => {
     if (!validEmail($emailInput.value)) {
         showError($emailError, $emailInput, $emailLbl);
         event.preventDefault();
     } else if (!validPass($passInput1.value)) {
         showError($passError1, $passInput1, $passLbl1);
         event.preventDefault();
     }
 });
 
 // Alternar Visibilidade da Senha
 $eyeIcons.forEach((eyeIcon, index) => {
     eyeIcon.addEventListener('click', () => {
         const isPasswordVisible = eyeIcon.classList.contains('bi-eye-fill');
         toggleClasses(eyeIcon, isPasswordVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill', isPasswordVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill');
         $passes[index].type = isPasswordVisible ? 'text' : 'password';
     });
 });
 
 // Temporizador para Código de Confirmação
 const startTimer = () => {
     timerInterval = setInterval(() => {
         if (timeLeft <= 0) {
             clearInterval(timerInterval);
             $codeSubmit.disabled = true;
             $timer.textContent = "";
             $codeNew.classList.remove('hideCode');
         } else {
             $timer.textContent = `${timeLeft} seg`;
             timeLeft--;
         }
     }, 1000);
 };
 
 const resetTimer = () => {
     clearInterval(timerInterval);
     timeLeft = 5;
     $timer.textContent = `${timeLeft} seg`;
     $codeSubmit.disabled = false;
     $codeNew.classList.add('hideCode');
     startTimer();
 };
 
 $codeInput.addEventListener('input', () => {
     cleanError($codeError, $codeInput, $codeLbl);
     if ($codeInput.value.length > 6) $codeInput.value = $codeInput.value.slice(0, 6);
 });
 
 $codeSubmit.addEventListener('click', (event) => {
     if ($codeInput.value.length !== 6) {
         showError($codeError, $codeInput, $codeLbl);
         event.preventDefault();
     }
 });
 
 $codeNew.addEventListener('click', resetTimer);
 
 document.addEventListener("DOMContentLoaded", startTimer);
 
 // Validação de Nova Senha
 $newPassInp1.addEventListener('input', () => cleanError($newPassError1, $newPassInp1, $newPassLbl1));
 $newPassInp2.addEventListener('input', () => cleanError($newPassError2, $newPassInp2, $newPassLbl2));
 
 $newPassSubmit.addEventListener('click', (event) => {
     event.preventDefault();
     if ($newPassInp1.value.length < 6) {
         showError($newPassError1, $newPassInp1, $newPassLbl1);
     } else if ($newPassInp1.value !== $newPassInp2.value) {
         showError($newPassError2, $newPassInp2, $newPassLbl2);
     } else {
         console.log('Senha alterada com sucesso!');
     }
 });
 
 // Navegação por Inputs de Código
 document.addEventListener("DOMContentLoaded", () => {
     const inputs = document.querySelectorAll("#code-inputs input");
     inputs.forEach((input, index) => {
         input.addEventListener("input", () => {
             if (input.value.length === 1 && index < inputs.length - 1) {
                 inputs[index + 1].focus();
             }
         });
         input.addEventListener("keydown", (event) => {
             if (event.key === "Backspace" && input.value === '' && index > 0) {
                 inputs[index - 1].focus();
             }
         });
     });
 });