window.onload= inicio ();

function inicio() {
    const nombre_o1 = document.getElementById("nombre-orden1");
    const cantidad_o1 = document.getElementById('cantidad-orden1');
    const tamaño_o1 = document.getElementById('tamaño-orden1');
    const img_o1 = document.getElementById("imagen-orden1");
    const precio_o1 = document.getElementById("precio-orden1");

    
    
    
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