const botaoIniciar = document.getElementById('btn-iniciar');

function iniciarAventura() {
    // Redireciona o jogador para a página de segurança que criamos
    window.location.href = "seguranca.html";
}

botaoIniciar.addEventListener('click', iniciarAventura);