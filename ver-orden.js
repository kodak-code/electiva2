document.addEventListener("DOMContentLoaded", function (){
    const cantidad_o1 = document.getElementById('cantidad-orden1');
    const tamaño_o1 = document.getElementById('tamaño-orden1');
    const nombre_o1 = document.getElementById("nombre-orden1");
    const img_o1 = document.getElementById("imagen-orden1");
    const precio_o1 = document.getElementById("precio-orden1");

    getPedido(cantidad_o1, tamaño_o1, nombre_o1, img_o1, precio_o1);
});

function getPedido(cantidad_o1, tamaño_o1, nombre_o1, img_o1, precio_o1) {
    const pedido = JSON.parse(localStorage.getItem('pedido'));

    console.log(pedido);

    if (pedido) {
        cantidad_o1.textContent = pedido.cantidad;
        tamaño_o1.textContent = pedido.tamaño;
        nombre_o1.textContent = pedido.nombre;
        img_o1.src = pedido.imagen;
        precio_o1.textContent = pedido.precio;
    } else {
        console.log("No hay pedidos!!!");
    }
}
