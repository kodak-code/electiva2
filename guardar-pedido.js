document.addEventListener('DOMContentLoaded', function() {
    const cantidadTexto = document.getElementById('cantidad-texto');
    const selectTamaño = document.getElementById('select-tamaño');
    const precioInput = document.getElementById('precio');
    const imagenPedido = document.querySelector('.img-pedido'); // Selecciona la imagen del pedido
    const botonSiguiente = document.getElementById('btn-siguiente');

    // Obtener la opción de consumo (Para Llevar o Comer en el Restaurante) del localStorage
    const consumoSeleccionado = localStorage.getItem('opcionSeleccionada')
        ? JSON.parse(localStorage.getItem('opcionSeleccionada')).name
        : "Para Llevar"; // Valor por defecto si no hay selección previa

    // Función para guardar el pedido completo en localStorage
    function guardarPedido() {
        const pedido = {
            nombre: "Hamburguesa Simple",
            cantidad: parseInt(cantidadTexto.textContent),
            tamaño: selectTamaño.options[selectTamaño.selectedIndex].text,
            precio: parseFloat(precioInput.value),
            consumo: consumoSeleccionado,
            imagen: imagenPedido.src // Guardar la ruta de la imagen
        };
        localStorage.setItem('pedido', JSON.stringify(pedido));
        console.log("Pedido guardado:", pedido);
    }

    // Evento para guardar el pedido cuando se hace clic en "Siguiente"
    botonSiguiente.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la redirección inmediata
        guardarPedido(); // Guardar el pedido en localStorage
        window.location.href = "../seccionConfirmarOrden/InterfazConfirmarOrden.html"; // Redirigir manualmente
    });
});