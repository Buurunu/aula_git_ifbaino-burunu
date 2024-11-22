document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Verifica se o usuário existe no localStorage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        // Armazena o nome de usuário no localStorage para ser acessado na home
        localStorage.setItem('loggedInUser', username);

        // Redireciona para a página home
        window.location.href = 'home.html';
    } else {
        alert('Usuário ou senha não reconhecidos.');
    }
});
