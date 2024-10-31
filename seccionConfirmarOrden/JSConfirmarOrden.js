window.onload= inicio ();

function inicio() {
    const nombre_o1 = document.getElementById("nombre-orden1");
    const cantidad_o1 = document.getElementById('cantidad-orden1');
    const tamaño_o1 = document.getElementById('tamaño-orden1');
    const img_o1 = document.getElementById("imagen-orden1");
    const precio_o1 = document.getElementById("precio-orden1");

    
    
    cargarOrdenes()
    
}




function cargarOrdenes() {
    const ordenesContainer = document.getElementById("ordenes-container");
    ordenesContainer.innerHTML = "";

    const ordenesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];

    if (ordenesSeleccionadas.length === 0) {
        return;
    }

    ordenesSeleccionadas.forEach((opcion, index) => {
        const ordenDiv = document.createElement("div");
        ordenDiv.classList.add("col-lg-4", "col-sm-6");

        ordenDiv.innerHTML = `
            <div class="item-orden min-comida">
                <h4 class="mt-4">ORDEN ${index + 1}</h4>
                <img src="${opcion.imagen}" alt="Imagen Orden ${index + 1}" class="img-fluid">
                <h5 id="nombre-orden${index}">${opcion.nombre}</h5>
                <h5>Cantidad: <span id="cantidad-orden${index}">${opcion.cantidad}</span></h5>
                <h5>Tamaño: <span id="tamaño-orden${index}">${opcion.tamanio == null ? "Pequeña" : opcion.tamanio == "m" ? "Mediano" : "Grande"}</span></h5>
                <h5>Precio: <span id="precio-orden${index}">${opcion.cantidad * opcion.precio}</span></h5>
            </div>
            <div class="text-center mt-2">
                <button type="button" class="boton-icono" id="btn-parlante${index}"> 
                    <i class="parlante bi bi-volume-up" style="font-size: 4rem;"></i>
                </button>
            </div>
        `;
        ordenesContainer.appendChild(ordenDiv);

        const btnParlante = document.getElementById(`btn-parlante${index}`);
        btnParlante.addEventListener('click', () => leerOrden(index));
    });
}

function leerOrden(index) {
    const nombreOrden = document.getElementById(`nombre-orden${index}`).textContent;
    const cantidadOrden = document.getElementById(`cantidad-orden${index}`).textContent;
    const tamañoOrden = document.getElementById(`tamaño-orden${index}`).textContent;
    const precioOrden = document.getElementById(`precio-orden${index}`).textContent;

    const synth = window.speechSynthesis;
    const textoOrden = `ORDEN ${index + 1}: ${nombreOrden}. Cantidad: ${cantidadOrden}. Tamaño: ${tamañoOrden}. Precio: ${precioOrden}. pesos.`;

    if (synth.speaking) {
        synth.cancel();
    }
    if (textoOrden !== '') {
        const utterance = new SpeechSynthesisUtterance(textoOrden);
        synth.speak(utterance);
    }
}

function leerTodo() {
    const synth = window.speechSynthesis;
    const ordenesSeleccionadas = JSON.parse(localStorage.getItem("selecciones")) || [];
    let index = 0;

    function hablar() {
        if (index < ordenesSeleccionadas.length) {
            const nombreOrden = document.getElementById(`nombre-orden${index}`).textContent;
            const cantidadOrden = document.getElementById(`cantidad-orden${index}`).textContent;
            const tamañoOrden = document.getElementById(`tamaño-orden${index}`).textContent;
            const precioOrden = document.getElementById(`precio-orden${index}`).textContent;
            const textoOrden = `ORDEN ${index + 1}: ${nombreOrden}. Cantidad: ${cantidadOrden}. Tamaño: ${tamañoOrden}. Precio: ${precioOrden} pesos.`;

            const utterance = new SpeechSynthesisUtterance(textoOrden);
            utterance.onend = () => {
                index++;
                hablar();
            };
            synth.speak(utterance);
        }
    }

    hablar();
}

const btnEscucharTodas = document.getElementById("btn-orden");
btnEscucharTodas.addEventListener("click", leerTodo);



const btnVolverOrdenar = document.getElementById("volver-orden");
btnVolverOrdenar.addEventListener("click", function() {
    window.location.href = "../index.html";
});


const btnPO = document.getElementById("btn-parlante-orden");
const btnPV = document.getElementById("btn-parlante-volver");
const synth = window.speechSynthesis; 

btnPO.addEventListener("click", function() {
    const btnEscucharTodas = document.getElementById("btn-orden");
    const textoBtn = btnEscucharTodas.textContent;

    if (synth.speaking) {
        synth.cancel(); 
    }

    if (textoBtn !== '') {
        const utterance = new SpeechSynthesisUtterance(textoBtn); 
        synth.speak(utterance); 
    }
});

btnPV.addEventListener("click", function() {
    const btnVolverOrdenar = document.getElementById("volver-orden");
    const textoBtn = btnVolverOrdenar.textContent;

    if (synth.speaking) {
        synth.cancel(); 
    }

    if (textoBtn !== '') {
        const utterance = new SpeechSynthesisUtterance(textoBtn); 
        synth.speak(utterance); 
    }
});