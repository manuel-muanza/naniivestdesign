document.getElementById('new-pass-submit-button2').addEventListener('click', function() {

    const $codePanel = document.querySelector('.dash-code'); 
    const $passPanel = document.querySelector('#change-pass');

    const toggleClasses7 = (element, removeClass, addClass) => {
        element.classList.remove(removeClass);
        element.classList.add(addClass);
    };

    // Define a senha atual correta (normalmente isso viria do backend)
    const senhaAtualCorreta = '123456';
    

    // Pegando os valores dos campos
    const senhaAtual = document.getElementById('the-password').value;
    const novaSenha = document.getElementById('change-pass1').value;
    const repetirSenha = document.getElementById('change-pass2').value;
    
    // Pegando os elementos das mensagens de erro
    const errorEmail = document.querySelector('.errorEmail');
    const pass1Error = document.querySelector('.pass1Error');
    const pass2Error = document.querySelector('.pass2Error');
    
    // Resetando as mensagens de erro
    errorEmail.classList.add('hide');
    pass1Error.classList.add('hide');
    pass2Error.classList.add('hide');
    
    let valid = true;
    
    // Validando a senha atual
    if (senhaAtual !== senhaAtualCorreta) {
        errorEmail.classList.remove('hide');
        valid = false;
    }
    
    // Validando a nova senha
    if (novaSenha.length < 6) {
        pass1Error.classList.remove('hide');
        valid = false;
    }
    
    // Verificando se as novas senhas coincidem
    if (novaSenha !== repetirSenha) {
        pass2Error.classList.remove('hide');
        valid = false;
    }
    
    if (valid) {
        // Se todos os campos são válidos, faça a submissão do formulário
        toggleClasses7($passPanel,'showPassPanel', 'hidePassPanel');
        toggleClasses7($codePanel,'hide', 'show');

        console.log('sucesso')
    }
});

document.getElementById('cancel-new-pass').addEventListener('click', function() {
    // Reseta o formulário e esconde as mensagens de erro
    document.getElementById('change-pass-form').reset();
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.classList.add('hide');
    });
});