document.addEventListener("DOMContentLoaded", function() {
    cargarOpcionesSeleccionadas();
});

function cargarOpcionesSeleccionadas() {
    const pedidosContainer = document.getElementById("pedidos-container");
    pedidosContainer.innerHTML = ""; // Limpiar contenido previo

    const opcionesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];

    opcionesSeleccionadas.forEach(opcion => {
        // Crear un contenedor para cada pedido
        const pedidoDiv = document.createElement("div");
        pedidoDiv.classList.add("pedido", "row", "align-items-center", "mb-4");

        // Agregar la estructura HTML con la imagen a la izquierda y los detalles a la derecha
        pedidoDiv.innerHTML = `
            <div class="col-md-4 d-flex justify-content-center">
                <!-- Contenedor de la imagen con el botón de sonido -->
                <div class="contenedor-imagen">
                    <button type="button" class="boton-icono p-3" id="btn-parlante"> 
                      <i class="parlante bi bi-volume-up fs-1"></i> 
                    </button>
                    <div class="contenedor-img-pedido d-flex justify-content-center">
                        <img class="img-pedido img-fluid" src="${opcion.imagen}" alt="Imagen del pedido" id="imagen">
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <h3 class="mb-4">${opcion.nombre}</h3>
                <div class="row mb-3">
                    <div class="col-md-4 col-sm-12">
                        <label class="h5">CANTIDAD</label>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <p id="cantidad-texto" class="cantidad-texto">1</p>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <button type="button" class="btn boton-icono ms-3" id="menos">
                            <i class="bi bi-dash-circle" style="font-size: 2rem;"></i>
                        </button>
                        <button type="button" class="btn boton-icono ms-3" id="mas">
                            <i class="bi bi-plus-circle" style="font-size: 2rem;"></i>
                        </button>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6">
                        <label for="select-tamaño" class="h5">TAMAÑO</label>
                    </div>
                    <div class="col-md-6">
                        <select class="form-select w-100" id="select-tamaño">
                            <option value="p" selected>Pequeña</option>
                            <option value="m">Mediana</option>
                            <option value="g">Grande</option>
                        </select>
                    </div>
                </div>
                <div class="input-group mb-5">
                    <label class="mx-2 h5">PRECIO</label>
                    <span class="input-group-text">$</span>
                    <input type="text" class="precio-input form-control" aria-label="precio de la comida" id="precio" readonly>
                    <span class="input-group-text">.00</span>
                </div>
            </div>
        `;

        pedidosContainer.appendChild(pedidoDiv); // Agregar el pedido al contenedor
    });
}

// Opcional: Actualizar cantidad y precio en el localStorage según el pedido
function actualizarLocalStorage(cantidad, indice) {
    const opcionesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];
    if (opcionesSeleccionadas[indice]) {
        opcionesSeleccionadas[indice].cantidad = cantidad;
        localStorage.setItem("selecciones", JSON.stringify(opcionesSeleccionadas));
    }
}
