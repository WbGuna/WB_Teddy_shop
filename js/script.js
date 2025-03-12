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

const pontos = document.querySelectorAll('.ponto');
const carrossel = document.querySelector('.carrossel');
let currentIndex = 0; // Índice atual do card ou posição visível

// Função para atualizar a posição do carrossel
function atualizarCarrossel(index, cardsVisiveis) {
    const cardWidth = carrossel.offsetWidth / cardsVisiveis; // Divide pela quantidade de cards visíveis
    const scrollPosition = index * cardWidth; // Calcula a posição baseada no índice
    carrossel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });

    // Atualiza as bolinhas
    pontos.forEach((p) => p.classList.remove('ativo'));
    pontos[index].classList.add('ativo');
}

// Detecta a quantidade de cards visíveis com base no tamanho da tela
function obterCardsVisiveis() {
    return window.innerWidth > 768 ? 3 : 1; // 3 cards para telas grandes, 1 para pequenas
}

// Configura navegação manual com bolinhas
pontos.forEach((ponto, index) => {
    ponto.addEventListener('click', () => {
        currentIndex = index; // Atualiza o índice atual
        const cardsVisiveis = obterCardsVisiveis(); // Obtém o número de cards visíveis
        atualizarCarrossel(currentIndex, cardsVisiveis);
    });
});

// Reajusta a posição ao redimensionar a tela
window.addEventListener('resize', () => {
    const cardsVisiveis = obterCardsVisiveis(); // Obtém o número de cards visíveis
    atualizarCarrossel(currentIndex, cardsVisiveis); // Garante que a posição fique alinhada ao redimensionar
});

