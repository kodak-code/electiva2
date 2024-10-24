const cambiarTemaDark = document.getElementById("darkMode");
const cambiarTemaLight = document.getElementById("lightMode");
const cambiarTemaContraste = document.getElementById("highContrastMode");

//normal
cambiarTemaLight.addEventListener("click", () => {
    document.documentElement.removeAttribute("data-theme");
});

//oscuro
cambiarTemaDark.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
});

//contraste
cambiarTemaContraste.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "high-contrast");
});
