// Seleciona o link de "Categorie"
const categorieLink = document.getElementById("categorie-link");
const submenu = document.querySelector(".submenu");
const toggleIcon = categorieLink.querySelector(".toggle-icon");

// Garante que o submenu esteja fechado ao carregar a página
submenu.style.display = "none";
toggleIcon.textContent = "\\/"; // Define o ícone como "abrir"

// Adiciona um evento de clique ao link
categorieLink.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Alterna a visibilidade do submenu
    if (submenu.style.display === "block") {
        submenu.style.display = "none"; // Esconde o submenu
        toggleIcon.textContent = "\\/"; // Mostra a seta para abrir
    } else {
        submenu.style.display = "block"; // Mostra o submenu
        toggleIcon.textContent = "/\\"; // Mostra a seta para fechar
    }
});

function toggleHamburgerMenu() {
    const menu = document.querySelector(".menu-itens"); // Seleciona o menu
    const isMenuOpen = menu.classList.contains("mostrar"); // Verifica se o menu está aberto

    if (isMenuOpen) {
        menu.classList.remove("mostrar"); // Fecha o menu removendo a classe "mostrar"
    } else {
        menu.classList.add("mostrar"); // Abre o menu adicionando a classe "mostrar"
    }
}

