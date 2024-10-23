function redirigirConId() {
    let contenido = document.getElementById("comerLocal");
    let llevar = document.getElementById("paraLlevar");
    llevar.addEventListener("click", function() {
        window.location.href = "../pedido/pedido.html";
    });
    contenido.addEventListener("click", function() {
        window.location.href = "../categorias/categorias.html";
    });
    
}
function aplicar(){
    redirigirConId();
}
window.onload = aplicar();