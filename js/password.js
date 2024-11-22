document.querySelector('.cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (newPassword === confirmPassword) {
        // Salva o novo usuário e senha no localStorage
        localStorage.setItem(newUsername, newPassword);

        // Redireciona para a tela de login após cadastro bem-sucedido
        window.location.href = 'index.html';
    } else {
        alert('As senhas não coincidem.');
    }
});
