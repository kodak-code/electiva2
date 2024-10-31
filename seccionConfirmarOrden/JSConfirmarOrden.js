window.onload= inicio ();

function inicio() {
    const nombre_o1 = document.getElementById("nombre-orden1");
    const cantidad_o1 = document.getElementById('cantidad-orden1');
    const tamaño_o1 = document.getElementById('tamaño-orden1');
    const img_o1 = document.getElementById("imagen-orden1");
    const precio_o1 = document.getElementById("precio-orden1");

    
    
    cargarOrdenes()
    function obtenerOrden1() {
    let texto1 = '';
    
    const nombre_o1TC = nombre_o1.textContent;
    const cantidad_o1TC = cantidad_o1.textContent; 
    const tamaño_o1V = tamaño_o1.value;
    const tamaño_o1TC = document.querySelector(`#select-tamaño option[value="${tamaño_o1V}"]`).textContent;
    const precio_o1V = precio_o1.value; 
    
    texto1 +=  `ORDEN 1: ${nombre_o1TC}. Cantidad: ${cantidad_o1TC}. Tamaño: ${tamaño_o1TC}. Precio: ${precio_o1V}.`; 
    return texto1;
}


function leerOrden1() {
    const synth = window.speechSynthesis;
    const textoOrden1 = obtenerOrden1();
    if (synth.speaking) {
        synth.cancel();
    }
    if (textoOrden1 !== '') {
        const utterance = new SpeechSynthesisUtterance(textoOrden1);
        synth.speak(utterance);
    }
}

const btnParlanteOrden1 = document.getElementById('btn-parlante1');
btnParlanteOrden1.addEventListener('click', leerOrden1);

}

function cargarOrdenes(){

    const ordenesContainer = document.getElementById("ordenes-container");
    ordenesContainer.innerHTML = "";

    const ordenesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];

    if(ordenesSeleccionadas.length === 0){
        return
    }

    ordenesSeleccionadas.forEach((opcion, index) =>{
        const ordenDiv = document.createElement("div")
        ordenDiv.classList.add("col-lg-4", "col-sm-6")

        ordenDiv.innerHTML = `
          <div class="item-orden min-comida">
                <h4 class="mt-4">ORDEN ${index + 1}</h4>
                <img src="${opcion.imagen}" alt="Imagen Orden 1" class="img-fluid" id="imagen-orden1">
                <h5 id="nombre-orden1"></h5>
                <h5>Cantidad:<span id="cantidad-orden1">${opcion.cantidad}</span></h5>
                <h5>Tamaño:<span id="tamaño-orden1">${opcion.tamanio == null ? "Pequeña" : opcion.tamanio == "m" ? "Mediano" : "Grande"}</span></h5>
                <h5>Precio: <span id="precio-orden1">${opcion.cantidad * opcion.precio}</span></h5> 
            </div>
            <div class="text-center mt-2">
                <button type="button" class="boton-icono" id="btn-parlante1"> 
                    <i class="parlante bi bi-volume-up" style="font-size: 4rem;"></i>
                </button>
            </div>
        `
        ordenesContainer.appendChild(ordenDiv); 
    })


}