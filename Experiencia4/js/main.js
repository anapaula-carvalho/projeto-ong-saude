
// MENU HAMBÚRGUER MOBILE
const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menu-mobile");

hamburger.addEventListener("click", () => {
    menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
});

//MENU SUBMENU DESKTOP//
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
        item.addEventListener("mouseenter", () => {
            submenu.style.display = "block";
        });
        item.addEventListener("mouseleave", () => {
            submenu.style.display = "none";
        });
    }
});

// VALIDAÇÃO DE FORMULÁRIO//
const form = document.getElementById('cadastro-form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Checagem básica dos campos
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const cep = document.getElementById('cep').value.trim();
        const cidade = document.getElementById('cidade').value.trim();
        const estado = document.getElementById('estado').value;

        if (!nome || !email || !cpf || !telefone || !endereco || !cep || !cidade || !estado) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        // Sucesso
        alert('Cadastro enviado com sucesso!');
        form.reset();
    });
}

// MODO ESCURO//
const toggle = document.getElementById("dark-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggle.textContent = "☀️ Modo Claro";
        } else {
            toggle.textContent = "🌙 Modo Escuro";
        }
    });
}