document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
        const heading = article.querySelector("h2");

        heading.addEventListener("click", function () {
        // Cerrar todos los artículos primero
        articles.forEach((item) => {
            if (item !== article) {
            item.classList.remove("active");
            item.querySelector("h2 img").src =
                "./assets/images/icon-plus.svg";
            }
        });

        // Alternar el artículo actual
        article.classList.toggle("active");

        // Cambiar el icono
        const img = article.querySelector("h2 img");
        if (article.classList.contains("active")) {
            img.src = "./assets/images/icon-minus.svg";
        } else {
            img.src = "./assets/images/icon-plus.svg";
        }
        });

        // Soporte para teclado (accesibilidad)
        heading.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this.click();
        }
        });
    });
});