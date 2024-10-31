document.addEventListener("DOMContentLoaded", function () {
    cargarOpcionesSeleccionadas();
  });
  
  let primeraComida = 0;
  let segundaComida = 0;
  let terceraComida = 0;
  
  let cantidadPrimeraComida = 1;
  let cantidadSegundaComida = 1;
  let cantidadTerceraComida = 1;
  
  function cargarOpcionesSeleccionadas() {
    const pedidosContainer = document.getElementById("pedidos-container");
    pedidosContainer.innerHTML = ""; // Limpiar contenido previo
  
    const opcionesSeleccionadas =
      JSON.parse(localStorage.getItem("selecciones")) || [];
  
    opcionesSeleccionadas.forEach((opcion, index) => {
      // Crear un contenedor para cada pedido
      const pedidoDiv = document.createElement("div");
      pedidoDiv.classList.add("pedido", "row", "align-items-center", "mb-4");
  
      // Agregar la estructura HTML con la imagen a la izquierda y los detalles a la derecha
      pedidoDiv.innerHTML = `
              <div class="col-md-4 d-flex justify-content-start">
                  <!-- Contenedor de la imagen con el botón de sonido -->
                  <div class="contenedor-imagen d-flex m-5">
                      <button type="button" class="boton-icono p-3 div-parlante" id="btn-parlante"> 
                          <i class="parlante bi bi-volume-up"></i>
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
                          <p id="cantidad-texto-${index}" class="cantidad-texto">${opcion.cantidad}</p>
                      </div>
                      <div class="col-md-6 col-sm-6">
                          <button type="button" class="btn boton-icono ms-3" id="menos" onclick="decrementarCantidad(${index})">
                              <i class="bi bi-dash-circle" style="font-size: 3rem;"></i>
                          </button>
                          <button type="button" class="btn boton-icono ms-3" id="mas" onclick="aumentarCantidad(${index})">
                              <i class="bi bi-plus-circle" style="font-size: 3rem;"></i>
                          </button>
                      </div>
                  </div>
                  <div class="row mb-4">
                      <div class="col-md-6">
                          <label for="select-tamaño" class="h5">TAMAÑO</label>
                      </div>
                      <div class="col-md-6">
                          <select class="form-select w-100" id="select-tamaño-${index}" onchange="actualizarTamanio(${index})">
                              <option value="p" ${opcion.tamanio === 'p' ? 'selected' : ''}>Pequeña</option>
                              <option value="m" ${opcion.tamanio === 'm' ? 'selected' : ''}>Mediana</option>
                              <option value="g" ${opcion.tamanio === 'g' ? 'selected' : ''}>Grande</option>
                          </select>
                      </div>
                  </div>
                  <div class="input-group mb-5">
                      <label class="mx-2 h5">PRECIO</label>
                      <span class="input-group-text">$</span>
                      <span id="precio-texto-${index}" class="input-group-text">${opcion.precio * opcion.cantidad}</span>
                  </div>
              </div>
          `;
  
      pedidosContainer.appendChild(pedidoDiv); // Agregar el pedido al contenedor
    });
  }
  
  // Opcional: Actualizar cantidad y precio en el localStorage según el pedido
  function actualizarLocalStorage(cantidad, indice) {
    const opcionesSeleccionadas =
      JSON.parse(localStorage.getItem("selecciones")) || [];
    if (opcionesSeleccionadas[indice]) {
      opcionesSeleccionadas[indice].cantidad = cantidad;
      localStorage.setItem("selecciones", JSON.stringify(opcionesSeleccionadas));
    }
  }
  
  const aumentarCantidad = (index) => {
      const opcionesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];
      opcionesSeleccionadas[index].cantidad++;
      
      
      const cantidadTexto = document.getElementById(`cantidad-texto-${index}`);
      cantidadTexto.textContent = opcionesSeleccionadas[index].cantidad;
      
      const precioCalculado = opcionesSeleccionadas[index].precio * opcionesSeleccionadas[index].cantidad
      const precioTexto = document.getElementById(`precio-texto-${index}`);
      precioTexto.textContent = precioCalculado
  
      localStorage.setItem("selecciones", JSON.stringify(opcionesSeleccionadas));
    };
  
  
    const decrementarCantidad = (index) => {
      const opcionesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];
      
      if (opcionesSeleccionadas[index].cantidad > 1) {
        opcionesSeleccionadas[index].cantidad--;
        
  
    
        const cantidadTexto = document.getElementById(`cantidad-texto-${index}`);
        cantidadTexto.textContent = opcionesSeleccionadas[index].cantidad;
  
        const precioCalculado = opcionesSeleccionadas[index].precio * opcionesSeleccionadas[index].cantidad
        const precioTexto = document.getElementById(`precio-texto-${index}`);
        precioTexto.textContent = precioCalculado
  
        localStorage.setItem("selecciones", JSON.stringify(opcionesSeleccionadas));
  
      } else {
        console.log("La cantidad no puede ser menor a 1.");
      }
    };
  
  
    const actualizarTamanio = (index) => {
      const opcionesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];
      const selectTamaño = document.getElementById(`select-tamaño-${index}`);
      const nuevoTamaño = selectTamaño.value;
  
      opcionesSeleccionadas[index].tamanio = nuevoTamaño
  
      localStorage.setItem("selecciones", JSON.stringify(opcionesSeleccionadas));
    }