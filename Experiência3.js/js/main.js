
//MENU HAMBÚRGUER MOBILE//
const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menu-mobile");

hamburger.addEventListener("click", () => {
    menuMobile.style.display = menuMobile.style.display === "flex" ? "none" : "flex";
});

// MENU SUBMENU DESKTOP// 
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

        // Checagem básica
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();

        if (!nome || !email || !cpf || !telefone) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        alert('Cadastro enviado com sucesso!');
        form.reset();
    });
}