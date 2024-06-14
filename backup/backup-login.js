const $inputs = document.querySelectorAll(".personal");

function borderStyle(element, selector) {
    element.classList.add(selector);
}

$inputs.forEach(input => {
    input.addEventListener("focus", () => {
        console.log('testando');
        borderStyle(input, 'focused-border');
    });

    input.addEventListener("blur", () => {
        input.classList.remove('focused-border');
    });
});

// ******************************

const $light = document.querySelector(".light");
const $dark = document.querySelector(".dark");
const $switcher = document.querySelector("#switcher");
const root = document.documentElement;
let $state = false;


function toggleClasses(element, removeClass, addClass) {
    element.classList.remove(removeClass);
    element.classList.add(addClass);
}

function darkModeElements () {
    root.style.setProperty('--primary-color', '#222020'); 
    root.style.setProperty('--secondary-color', '#9897c7');
    root.style.setProperty('--background-light', '#000000');
    root.style.setProperty('--hov-color', '#C70039');
    root.style.setProperty('--text-color', '#F8F9FD');
    root.style.setProperty('--text-color2', '#9897c7');
    root.style.setProperty('--error', '#de5260');
    toggleClasses($switcher, 'ligth-mode', 'dark-mode');
}

function lightModeElements () {
    root.style.setProperty('--primary-color', '#ffffff');
    root.style.setProperty('--secondary-color', '#1089FF');
    root.style.setProperty('--background-light', '#F8F9FD');
    root.style.setProperty('--hov-color', '#1472d0');
    root.style.setProperty('--text-color', '#020210');
    root.style.setProperty('--text-color2', '#020210');
    root.style.setProperty('--error', '#ec193c');
    toggleClasses($switcher, 'dark-mode', 'ligth-mode');
}

function updateRootVariables(lightMode) {

    if (lightMode) {
        // modo escuro
        darkModeElements ();
        $state = true;
    } else {
        lightModeElements ();
        $state = false;
    }
}

$switcher.addEventListener('click', () => {
    if($state == true) {
        darkModeElements ();
        toggleClasses($switcher, 'ligth-mode', 'dark-mode');
        setDarkMode(true);
        $state = false;
    } else {
        lightModeElements ();
        toggleClasses($switcher, 'dark-mode', 'ligth-mode');
        setDarkMode(false);
        $state = true;
    }
});

function setDarkMode(isDark) {
    if (isDark) {
        toggleClasses($dark, "bi-moon", "bi-moon-fill");
        toggleClasses($light, "bi-brightness-high-fill", "bi-brightness-high");
        toggleClasses($switcher, 'ligth-mode', 'dark-mode');
    } else {
        toggleClasses($light, "bi-brightness-high", "bi-brightness-high-fill");
        toggleClasses($dark, "bi-moon-fill", "bi-moon");
        toggleClasses($switcher, 'dark-mode', 'ligth-mode');
    }
    updateRootVariables(isDark);
    localStorage.setItem('darkMode', isDark);
}

$dark.addEventListener("click", () => {
    if ($dark.classList.contains("bi-moon")) {
        setDarkMode(true); // Modo escuro
    }
});

$light.addEventListener("click", () => {
    if ($light.classList.contains("bi-brightness-high")) {
        setDarkMode(false); // Modo claro
    }
});

// Restaurar o estado ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(darkMode);
});

// ****************************** 

const $labels = document.querySelectorAll('.modal label');
const $inputsForm = document.querySelectorAll('.input-effect');


// Iterar sobre cada input e adicionar o evento de foco
$inputsForm.forEach(($currentInput, index) => {
    $currentInput.addEventListener('focus', () => {
        toggleClasses($labels[index], 'no-label-effect', 'label-effect');
        $currentInput.classList.add('input-focus')
    });

    // Remover a classe quando o input perder o foco, se necessário
    $currentInput.addEventListener('blur', () => {
        if (!$currentInput.value) {
            toggleClasses($labels[index], 'label-effect', 'no-label-effect');
            $currentInput.classList.remove('input-focus')
        }
    });
});

const $submitLogin = document.querySelector('#login-submit-button');

const $emailInput = document.querySelector('#email-login');
const $emailError = document.querySelector('.errorEmail');
const $emailLbl = document.querySelector('.lbl-email');

const $passInput1 = document.querySelector('#password-login');
const $passError1 = document.querySelector('.errorPass1');
const $passLbl1 = document.querySelector('.lblpass1');


function validEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validPass(pass) {
    if (pass.length < 6) {
        return false;
    }
    return true;
}

function remClass (element, selector) {
    element.classList.remove( selector);
}

function addClass (element, selector) {
    element.classList.add( selector);
}

function clean (error, input, label) {
    addClass (error, 'hide');
    remClass (input, 'border');
    remClass (label, 'lbl-error');
}

function errorMsg (error, input, label) {
    remClass(error, 'hide');
    addClass(input, 'border');
    addClass(label, 'lbl-error');
}

$emailInput.addEventListener('input', () => {
    clean($emailError, $emailInput, $emailLbl);
});

$passInput1.addEventListener('input', () => {
    let pass = $passInput1.value;
    if (validPass(pass)) {
        clean($passError1, $passInput1, $passLbl1);
    }
});

function validPass(pass) {
    if (pass.length < 6) {
      return false;
    }
    return true;
  }
  
  $submitLogin.addEventListener('click', (event) => {
  
    let emailValue = $emailInput.value;
    let passValue = $passInput1.value;
    let isValidEmail = validEmail(emailValue);
    let isValidPass = validPass(passValue);
  
    if (!isValidEmail) {
        event.preventDefault();
        errorMsg ($emailError, $emailInput, $emailLbl)
    } else if (!isValidPass) {
        event.preventDefault();
        errorMsg ($passError1, $passInput1, $passLbl1)
    } else {
        clean($emailError, $emailInput, $emailLbl);
        clean($passInput1, $passInput1, $passLbl1);
        console.log('Login bem-sucedido!');
    }
  });
  
  const $eyeIcons = document.querySelectorAll('.eye'); 
  const $passes = document.querySelectorAll('.pass'); 
  
  function seePassword(element, type) {
    element.type = type;
  }
  
  $eyeIcons.forEach((eyeIcon, index) => {
    eyeIcon.addEventListener('click', () => {
      console.log('clicou no olho');
      if (eyeIcon.classList.contains('bi-eye-fill')) {
        toggleClasses(eyeIcon, 'bi-eye-fill', 'bi-eye-slash-fill');
        seePassword($passes[index], 'text');
      } else {
        toggleClasses(eyeIcon, 'bi-eye-slash-fill', 'bi-eye-fill');
        seePassword($passes[index], 'password');
      }
    });
  });

  const $codeSubmit = document.querySelector('#confirmation-submit-button');
  const $codeInput = document.querySelector('#confirmation-code');
  const $codeError = document.querySelector('.codeError');
  const $codeLbl = document.querySelector('.codeLbl');
  const $timer = document.querySelector('#timer');
  const $codeNew = document.querySelector('#newCode');
  let $codeTime = 0;
  
  let timeLeft = 5; // Ajuste o tempo inicial para 60 segundos
  let timerInterval;
  
  function startTimer() {
      timerInterval = setInterval(() => {
          if (timeLeft <= 0) {
              clearInterval(timerInterval);
              $codeSubmit.disabled = true; // Desabilita o botão de confirmação quando o tempo acaba
              $timer.textContent = "";
              $codeNew.classList.remove('hideCode');
          } else {
              $timer.textContent = `${timeLeft} seg`;
              timeLeft--;
          }
      }, 1000);
  }
  
  function resetTimer() {
      clearInterval(timerInterval);
      timeLeft = 5; // Reinicie o temporizador para 60 segundos
      $timer.textContent = `${timeLeft} seg`;
      $codeSubmit.disabled = false; // Habilita o botão de confirmação
      $codeNew.classList.add('hideCode'); // Esconde o botão de novo código
      startTimer();
  }
  
  $codeInput.addEventListener('input', () => {
      clean($codeError, $codeInput, $codeLbl);
      if ($codeInput.value.length > 6) {
          $codeInput.value = $codeInput.value.slice(0, 6); // Limita a entrada a 6 caracteres
      }
  });
  
  $codeSubmit.addEventListener('click', (event) => {
      if ($codeInput.value === '') {
          errorMsg($codeError, $codeInput, $codeLbl);
          event.preventDefault();
      } else if ($codeInput.value.length !== 6) {
          errorMsg($codeError, $codeInput, $codeLbl);
          event.preventDefault(); // Impede o envio se a condição não for satisfeita
      }
  });
  
  $codeNew.addEventListener('click', () => {
      $codeTime++; // Incrementa o contador toda vez que o botão é clicado
      console.log(`Código reenviado ${$codeTime} vezes`);
      resetTimer(); // Reinicia o temporizador quando o botão for clicado
  });
  
  // Inicia o temporizador quando o DOM estiver carregado
  document.addEventListener("DOMContentLoaded", () => {
      startTimer();
  });
  


/* */

const $newPassInp1 = document.querySelector('#pass1');
const $newPassError1 = document.querySelector('.pass1Error');
const $newPassLbl1 = document.querySelector('.newPass1')

const $newPassInp2 = document.querySelector('#pass2');
const $newPassError2 = document.querySelector('.pass2Error');
const $newPassLbl2 = document.querySelector('.newPass2')

const $newPassSubmit = document.querySelector('#new-pass-submit-button');

$newPassInp1.addEventListener('input', () => {
    clean($newPassError1, $newPassInp1, $newPassLbl1);
});

$newPassInp2.addEventListener('input', () => {
    clean($newPassError2, $newPassInp2, $newPassLbl2);
});

$newPassSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const newPassword = $newPassInp1.value;
  const confirmPassword = $newPassInp2.value;

  if (newPassword.length < 6) {
    errorMsg ($newPassError1, $newPassInp1, $newPassLbl1)
    return;
  }

  if (newPassword !== confirmPassword) {
    errorMsg ($newPassError2, $newPassInp2, $newPassLbl2)
    return; 
  }

  console.log('Senha alterada com sucesso!'); // Inform user about successful update (if applicable)
 
});


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


// Troca de models
/*
const $model1 = document.querySelector('.modal-login');
const $submitLog = document.querySelector('#login-submit-button');

const $model2 = document.querySelector('.modal-new-pass');
const $newPassSub = document.querySelector('#new-pass-submit-button');

const $model3 = document.querySelector('.modal-confirmation');


$submitLog.addEventListener('click', () => {
    $model1.style.left = '-400px'
    $model2.style.left = '0'
    $model3.style.left = '400px'
})

$newPassSub.addEventListener('click', () => {
    codeTime = 0;
    $model2.style.left = '-400px'
    $model3.style.left = '0'
})
*/