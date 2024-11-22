 // Script para exibir a mensagem de sucesso e redirecionar para o login
 document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    const newPasswordConfirm = document.getElementById('new-password-confirm').value.trim();

    // Verifica se as senhas coincidem
    if (newPassword === newPasswordConfirm) {
        // Salva os dados no localStorage
        localStorage.setItem(newUsername, newPassword);
        
        // Exibe o modal de sucesso
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        
        // Fecha o modal e redireciona após 3 segundos
        setTimeout(function() {
            modal.style.display = "none";
            window.location.href = 'index.html'; // Redireciona para a página de login
        }, 3000); // 3 segundos

    } else {
        alert('As senhas não coincidem. Tente novamente.');
    }
});

// Fecha o modal ao clicar no "x"
document.querySelector(".close").onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    window.location.href = 'index.html'; // Redireciona para a página de login imediatamente
}

// Fecha o modal se o usuário clicar fora da box
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
        window.location.href = 'index.html'; // Redireciona para a página de login
    }
}