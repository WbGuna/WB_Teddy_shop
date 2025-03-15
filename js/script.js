/* Função do menu principal */

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




/* Função do menu amburguer */
function toggleHamburgerMenu() {
    const menu = document.querySelector(".menu-itens"); // Seleciona o menu
    const isMenuOpen = menu.classList.contains("mostrar"); // Verifica se o menu está aberto

    if (isMenuOpen) {
        menu.classList.remove("mostrar"); // Fecha o menu removendo a classe "mostrar"
    } else {
        menu.classList.add("mostrar"); // Abre o menu adicionando a classe "mostrar"
    }
}


/* Função do primeiro carrossel */
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


/*Função do segundo carrossel */

// Selecionar elementos específicos do Carrossel 2
const pontos_2 = document.querySelectorAll('.ponto_2'); // Bolinhas do Carrossel 2
const carrossel_2 = document.querySelector('.carrossel_2'); // Contêiner do Carrossel 2
let currentIndex_2 = 0; // Índice inicial do card visível no Carrossel 2

// Função para atualizar a posição do Carrossel 2
function atualizarCarrossel_2(index, cardsVisiveis) {
    const cardWidth = carrossel_2.offsetWidth / cardsVisiveis; // Divide a largura do contêiner pelo número de cards visíveis
    const scrollPosition = index * cardWidth; // Calcula a posição do carrossel com base no índice

    // Rolagem suave para a posição calculada
    carrossel_2.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });

    // Atualizar as bolinhas (ativa/desativa)
    pontos_2.forEach((p) => p.classList.remove('ativo')); // Remove 'ativo' de todas as bolinhas
    if (pontos_2[index]) pontos_2[index].classList.add('ativo'); // Adiciona 'ativo' à bolinha correspondente
}

// Função para detectar quantos cards estão visíveis
function obterCardsVisiveis_2() {
    return window.innerWidth > 768 ? 3 : 1; // 3 cards visíveis em telas grandes, 1 em telas pequenas
}

// Configurar eventos de clique nas bolinhas do Carrossel 2
pontos_2.forEach((ponto, index) => {
    ponto.addEventListener('click', () => {
        currentIndex_2 = index; // Atualiza o índice atual
        const cardsVisiveis = obterCardsVisiveis_2(); // Calcula a quantidade de cards visíveis
        atualizarCarrossel_2(currentIndex_2, cardsVisiveis); // Move o carrossel para a posição correta
    });
});

// Ajustar o carrossel ao redimensionar a tela
window.addEventListener('resize', () => {
    const cardsVisiveis = obterCardsVisiveis_2(); // Recalcula os cards visíveis
    atualizarCarrossel_2(currentIndex_2, cardsVisiveis); // Realinha o carrossel
});


/* Validação do campo email */
const emailInput = document.querySelector('.newsletter-form input[type="email"]');
const subscribeButton = document.querySelector('.newsletter-form button');

// Função para validar o formato do email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para verificar formato do email
    return regex.test(email); // Retorna true se o formato estiver correto
}

// Evento de clique no botão de inscrição
subscribeButton.addEventListener('click', (event) => {
    const emailValue = emailInput.value.trim(); // Remove espaços em branco
    if (!validarEmail(emailValue)) {
        alert('Por favor, insira um email válido.'); // Mensagem de erro
        emailInput.focus(); // Foca no campo de email para correção
    } else {
        alert('Inscrição realizada com sucesso!'); 
        // Aqui você pode adicionar a lógica para enviar o email ao servidor
    }
});
