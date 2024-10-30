function redirigirConId() {
    let contenido = document.getElementById("comerLocal");
    let hamburguesaEjemplo = document.getElementById("hamburguesaEjemplo");

    contenido.addEventListener("click", function() {
        window.location.href = "../categorias/categorias.html";
    });
    // hamburguesaEjemplo.addEventListener("click", function() {
    //     console.log("click");
    //     console.log("hila");
    
    //     window.location.href = "../Pedido/pedido.html";
    // });
    
}
window.onload = redirigirConId();