const cambiarTemaDark = document.getElementById("darkMode");
const cambiarTemaLight = document.getElementById("lightMode");
const cambiarTemaContraste = document.getElementById("highContrastMode");

//normal
cambiarTemaLight.addEventListener("click", () => {
    document.body.removeAttribute("data-theme");
});

//oscuro
cambiarTemaDark.addEventListener("click", () => {
    document.body.setAttribute("data-theme", "dark");
});

//contraste
cambiarTemaContraste.addEventListener("click", () => {
    document.body.setAttribute("data-theme", "high-contrast");
});
