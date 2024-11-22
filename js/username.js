const username = localStorage.getItem('loggedInUser');
        
        if (username) {
            // Exibe o nome do usuário na tela
            document.getElementById('user-name').textContent = username;
        } else {
            // Se o usuário não estiver logado, redireciona para a tela de login
            window.location.href = 'index.html';
        }