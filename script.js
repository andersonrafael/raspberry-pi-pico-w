// Adicionando interatividade com JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".projeto-card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            alert(`Você clicou no projeto: ${card.querySelector("h3").innerText}`);
        });
    });
});