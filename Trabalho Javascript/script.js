document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exibe a notificação
    var notification = document.getElementById("notification");
    notification.classList.add("show");

    // Após 3 segundos, remove a notificação e redireciona para a página index.html
    setTimeout(function() {
        notification.classList.remove("show");
        window.location.href = "index.html";  // Redireciona para index.html
    }, 3000);  // A notificação ficará visível por 3 segundos
});
