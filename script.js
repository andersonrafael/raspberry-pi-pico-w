document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const starsContainer = document.getElementById("stars-container");

    // Função para gerar estrelas
    function createStars() {
        const starCount = 100; // Número de estrelas
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 2}s`; // Atraso aleatório para o brilho
            starsContainer.appendChild(star);
        }
    }

    // Verifica o tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === "dark-theme" ? "☀️" : "🌙";
        if (savedTheme === "dark-theme") {
            createStars(); // Gera estrelas se o tema escuro estiver ativo
        }
    }

    // Alterna o tema ao clicar no botão
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light-theme");
            starsContainer.innerHTML = ""; // Remove as estrelas
        } else {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark-theme");
            createStars(); // Gera estrelas ao ativar o tema escuro
        }
    });

    // Interatividade dos cards de projetos
    const cards = document.querySelectorAll(".projeto-card");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            alert(`Você clicou no projeto: ${card.querySelector("h3").innerText}`);
        });
    });
});