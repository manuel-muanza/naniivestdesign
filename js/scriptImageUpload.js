// Seleciona os elementos necessários
const $imagePreview = document.getElementById('image-preview');
const $imageUpload = document.getElementById('image-upload');
const $confirmUpload = document.getElementById('confirm-upload');
const $removeImage = document.getElementById('remove-image');

// Listener para o input de arquivo
$imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            $imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Listener para o botão de confirmar
$confirmUpload.addEventListener('click', () => {
    // Adicionar a lógica de confirmação se necessário
    alert('Imagem confirmada!');
});

// Listener para o botão de remover imagem
$removeImage.addEventListener('click', () => {
    $imagePreview.src = 'img/user.png'; // Volta à imagem padrão
    $imageUpload.value = ''; // Limpa o input de arquivo
});
