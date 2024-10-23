function redirigirConId() {
    let hamburguesaEjemplo = document.getElementById("hamburguesaEjemplo");

    hamburguesaEjemplo.addEventListener("click", function() {
        window.location.href = "../../Pedido/pedido.html";
    });
    
}

window.onload = redirigirConId();