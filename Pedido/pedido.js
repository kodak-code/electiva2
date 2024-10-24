let cantidad = 1;
const cantidadElemento = document.getElementById('cantidad-texto');
const btnIncrementar = document.getElementById('mas');
const btnDecrementar = document.getElementById('menos');
 
btnIncrementar.addEventListener('click', () => {
    if (cantidad < 10) {
        cantidad++;
        cantidadElemento.textContent = cantidad;
    }
});
 
btnDecrementar.addEventListener('click', () => {
    if (cantidad > 1) {
        cantidad--;
        cantidadElemento.textContent = cantidad;
    }
});

/* const selectTamaño = document.getElementById('select-tamaño');
const precioElemento = document.createElement('p');
precioElemento.id = 'precio-texto';
precioElemento.textContent = 'Precio: $100';
document.body.appendChild(precioElemento);

selectTamaño.addEventListener('change', () => {
    let precio = 100;
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
    precioElemento.textContent = `Precio: $${precio}`;
});
*/

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
 
    texto += `${titulo}. Cantidad: ${cantidad}. Tamaño: ${tamañoTexto}.`;
    return texto;
}
 
const btnParlante = document.getElementById('btn-parlante');
btnParlante.addEventListener('click', leerContenido);
