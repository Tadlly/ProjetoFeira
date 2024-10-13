// Função para salvar os dados do cadastro no Local Storage
function cadastrarUsuario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const confirmSenha = document.getElementById('confirm-password').value;

    if (senha !== confirmSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Salva os dados no Local Storage (email como chave)
    localStorage.setItem(email, JSON.stringify({ nome: nome, senha: senha }));
    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');

    // Redireciona para a página de login
    window.location.href = "login.html";
}

// Função para realizar o login e redirecionar para a página index.html
function fazerLogin(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Verifica se o usuário está cadastrado no Local Storage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario) {
        // Valida a senha
        if (usuario.senha === senha) {
            alert(`Bem-vindo, ${usuario.nome}!`);
            // Redireciona para a página inicial (index.html)
            window.location.href = "index.html"; // Aqui redireciona para a página inicial
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    } else {
        alert("Usuário não encontrado. Verifique o e-mail ou cadastre-se.");
    }
}

// Função para lidar com a recuperação de senha
function recuperarSenha() {
    const email = prompt("Por favor, insira seu e-mail:");

    // Verifica se o e-mail está cadastrado no Local Storage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario) {
        alert(`Sua senha é: ${usuario.senha}`);
    } else {
        alert("E-mail não encontrado. Cadastre-se.");
    }
}

// Adiciona ouvintes de eventos para os formulários
document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.querySelector("form[action='process_cadastro.php']");
    const formLogin = document.querySelector("#loginForm"); // Seleciona o formulário de login

    if (formCadastro) {
        formCadastro.addEventListener("submit", cadastrarUsuario);
    }

    if (formLogin) {
        formLogin.addEventListener("submit", fazerLogin); // Adiciona o evento de submit
    }

    // Botão de "Esqueceu a senha?"
    const esqueceuSenhaBtn = document.getElementById('esquecer-senha');
    if (esqueceuSenhaBtn) {
        esqueceuSenhaBtn.addEventListener("click", recuperarSenha);
    }
});
