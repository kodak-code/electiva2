window.onload = inicio ();

function inicio () {
let cantidad = 1;
const cantidadElemento = document.getElementById('cantidad-texto');
const btnIncrementar = document.getElementById('mas');
const btnDecrementar = document.getElementById('menos');
const selectTamaño = document.getElementById('select-tamaño');
const precioInput = document.getElementById("precio");

const actualizarPrecio = () => {

    switch (selectTamaño.value) {
        case 'p':
            precio = 100;
            break;
        case 'm':
            precio = 150;
            break;
        case 'g':
            precio = 200;
            break;
    }
    let precioMultiplicado = cantidad * precio;
    precioInput.value = precioMultiplicado;
};

btnIncrementar.addEventListener('click', () => {
    if (cantidad < 10) {
        cantidad++;
        cantidadElemento.textContent = cantidad;
        actualizarPrecio(); 
    }
});

btnDecrementar.addEventListener('click', () => {
    if (cantidad > 1) {
        cantidad--;
        cantidadElemento.textContent = cantidad;
        actualizarPrecio(); 
    }
});

selectTamaño.addEventListener('change', () => {
    actualizarPrecio();
});


actualizarPrecio();



function leerContenido() {
    const synth = window.speechSynthesis;
    const texto = obtenerTextoDeLaPagina();
    if (synth.speaking) {
        synth.cancel();
    }
    if (texto !== '') {
        const utterance = new SpeechSynthesisUtterance(texto);
        synth.speak(utterance);
    }
}
 
function obtenerTextoDeLaPagina() {
    let texto = '';
 
    const titulo = document.querySelector('h3').textContent;
    const cantidad = document.getElementById('cantidad-texto').textContent; 
    const tamañoSeleccionado = document.getElementById('select-tamaño').value;
    const tamañoTexto = document.querySelector(`#select-tamaño option[value="${tamañoSeleccionado}"]`).textContent;
    const precio = document.getElementById('precio').value; 

    texto += `${titulo}. Cantidad: ${cantidad}. Tamaño: ${tamañoTexto}. Precio: ${precio}.`; 
    return texto;
}
 
const btnParlante = document.getElementById('btn-parlante');
btnParlante.addEventListener('click', leerContenido);

}