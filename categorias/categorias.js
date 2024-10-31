const Categorias = [
    {
        id: 1,
        nombre: "COMIDA RÁPIDA",
        href: "#comida-rapida",
        imagen: "./imgs-categorias/comida_rapida.png"
    },
    {
        id: 2,
        nombre: "ENTRADA",
        href: "#entrada",
        imagen: "./imgs-categorias/empanadas.png"
    },
    {
        id: 3,
        nombre: "PLATO PRINCIPAL",
        href: "#plato-principal",
        imagen: "./imgs-categorias/plato_principal.png"
    },
    {
        id: 4,
        nombre: "POSTRES",
        href: "#postres",
        imagen: "./imgs-categorias/postres.png"
    },
    {
        id: 5,
        nombre: "BEBIDAS",
        href: "#bebidas",
        imagen: "./imgs-opciones/agua.png"
    },
    {
        id: 6,
        nombre: "GUARNICIÓN",
        href: "#guarnicion",
        imagen: "./imgs-categorias/guarnicion.png"
    }
];

const ComidaRapida = [
    {
        id: 1,
        nombre: "HAMBURGUESA SIMPLE",
        imagen: "./imgs-opciones/hamburguesa-simple.png",
        precio: 500,
        tamanio: "mediana",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "HAMBURGUESA COMPLETA",
        imagen: "./imgs-opciones/hamburguesa-completa.png",
        precio: 700,
        tamanio: "grande",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "PAPAS FRITAS",
        imagen: "./imgs-opciones/porcion-papas.png",
        precio: 300,
        tamanio: "pequeña",
        cantidad: 1
    },
    {
        id: 4,
        nombre: "CONO HELADO",
        imagen: "./imgs-opciones/cono-helado.png",
        precio: 200,
        tamanio: "único",
        cantidad: 1
    },
    {
        id: 5,
        nombre: "ENSALADA",
        imagen: "./imgs-opciones/ensalada-completa.png",
        precio: 450,
        tamanio: "grande",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "NUGGETS",
        imagen: "./imgs-opciones/porcion-nuggets.png",
        precio: 350,
        tamanio: "mediana",
        cantidad: 1
    }
];


const Entradas = [
    {
        id: 1,
        nombre: "EMPANADAS",
        imagen: "./imgs-opciones/empanadas.png"
    },
    {
        id: 2,
        nombre: "PICADA",
        imagen: "./imgs-opciones/picada.png"
    },
    {
        id: 3,
        nombre: "VITEL TONE",
        imagen: "./imgs-opciones/vitel-tone.png"
    },
    {
        id: 4,
        nombre: "TORTILLA DE PAPAS",
        imagen: "./imgs-opciones/tortilla-de-papas.png"
    },
    {
        id: 5,
        nombre: "NACHOS",
        imagen: "./imgs-opciones/nachos.png"
    },
    {
        id: 6,
        nombre: "PROVOLETA",
        imagen: "./imgs-opciones/provoleta.png"
    }
];

const PlatoPrincipal = [
    {
        id: 1,
        nombre: "MILANESA CON FRITAS",
        imagen: "./imgs-opciones/mila-con-fritas.png"
    },
    {
        id: 2,
        nombre: "ASADO",
        imagen: "./imgs-opciones/asado.png"
    },
    {
        id: 3,
        nombre: "PIZZA",
        imagen: "./imgs-opciones/pizza-napo.png"
    },
    {
        id: 4,
        nombre: "PASTAS CON SALSA",
        imagen: "./imgs-opciones/pasta-con-bolognesa.png"
    },
    {
        id: 5,
        nombre: "PASTEL DE PAPAS",
        imagen: "./imgs-opciones/pastel-de-papas.png"
    },
    {
        id: 6,
        nombre: "SUSHI",
        imagen: "./imgs-opciones/sushi.png"
    }
];

const Postres = [
    {
        id: 1,
        nombre: "FLAN",
        imagen: "./imgs-opciones/flan.png"
    },
    {
        id: 2,
        nombre: "CHOCOTORTA",
        imagen: "./imgs-opciones/chocotorta.png"
    },
    {
        id: 3,
        nombre: "TORTA ROGEL",
        imagen: "./imgs-opciones/rogel.png"
    },
    {
        id: 4,
        nombre: "HELADO",
        imagen: "./imgs-opciones/cono-helado.png"
    },
    {
        id: 5,
        nombre: "ALFAJORES",
        imagen: "./imgs-opciones/alfajores.png"
    },
    {
        id: 6,
        nombre: "PANQUEQUES",
        imagen: "./imgs-opciones/panqueques.png"
    }
];

const Bebidas = [
    {
        id: 1,
        nombre: "AGUA",
        imagen: "./imgs-opciones/agua.png"
    },
    {
        id: 2,
        nombre: "GASEOSA",
        imagen: "./imgs-opciones/gaseosa.png"
    },
    {
        id: 3,
        nombre: "CAFÉ",
        imagen: "./imgs-opciones/cafe.png"
    },
    {
        id: 4,
        nombre: "BATIDO",
        imagen: "./imgs-opciones/batido.png"
    },
    {
        id: 5,
        nombre: "CERVEZA",
        imagen: "./imgs-opciones/cerveza.png"
    },
    {
        id: 6,
        nombre: "VINO",
        imagen: "./imgs-opciones/vino.png"
    }
];

const Guarnicion = [
    {
        id: 1,
        nombre: "PURÉ",
        imagen: "./imgs-opciones/pure.png"
    },
    {
        id: 2,
        nombre: "ENSALADA",
        imagen: "./imgs-opciones/ensalada-completa.png"
    },
    {
        id: 3,
        nombre: "ARROZ",
        imagen: "./imgs-categorias/guarnicion.png"
    },
    {
        id: 4,
        nombre: "VERDURA ASADA",
        imagen: "./imgs-opciones/verduras-asadas.png"
    },
    {
        id: 5,
        nombre: "PAPAS FRITAS",
        imagen: "./imgs-opciones/porcion-papas.png"
    },
    {
        id: 6,
        nombre: "ENSALADA RUSA",
        imagen: "./imgs-opciones/ensalada-rusa.png"
    }
];

document.addEventListener("DOMContentLoaded", function (){

    verificarCategoria();

    window.addEventListener('hashchange', function () {
        manejarContenido(location.hash);
    });

});

function verificarCategoria(){
    // Obtenengo el fragmento de la URL después del #
    const seccion = location.hash;

    // Verificar si existe el fragmento de la URL
    if (seccion) {
        manejarContenido(seccion);
    }else{
        manejarContenido('#');
    }
};

function obtenerOpciones(Opciones){
    const optionsContainer = document.getElementById("main-container");
    
    Opciones.forEach( (opcion) => {

        if (Opciones == Categorias) {
            optionsContainer.innerHTML += `
                <a href="${opcion.href}" class="item-categoria">
                    <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded seleccionable">
                        <h5 class="card-title mt-3">${opcion.nombre}</h5>
                        <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                        <h5 class="card-price mt-3 d-none">${opcion.precio || ''}</h5>
                        <h5 class="card-quantity mt-3 d-none">${opcion.cantidad || ''}</h5>

                    </div>
                </a>
            `;
        }else if(Opciones == ComidaRapida && opcion.nombre == "HAMBURGUESA SIMPLE"){
            optionsContainer.innerHTML += `
                
                    <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded seleccionable">
                            <h5 class="card-title mt-3">${opcion.nombre}</h5>
                            <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                            <h5 class="card-price mt-3 d-none">${opcion.precio || ''}</h5>
                        <h5 class="card-quantity mt-3 d-none">${opcion.cantidad || ''}</h5>

                    </div>
               
            `;
        }else{
            optionsContainer.innerHTML += `
                <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded seleccionable">
                        <h5 class="card-title mt-3">${opcion.nombre}</h5>
                        <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                        <h5 class="card-price mt-3 d-none">${opcion.precio || ''}</h5>
                        <h5 class="card-quantity mt-3 d-none">${opcion.cantidad || ''}</h5>

                </div>
            `;
        }

        
    });

}

function aplicarEstiloSeleccion() {
    const seleccionables = document.querySelectorAll(".seleccionable");
    let seleccionados = JSON.parse(localStorage.getItem("selecciones")) || [];
    
    // Filter out any previous selections of "COMIDA RÁPIDA"
    seleccionados = seleccionados.filter(obj => obj.nombre !== "COMIDA RÁPIDA");
    
    // Update the visual interface with previously selected elements
    seleccionables.forEach((element) => {
        const nombre = element.querySelector(".card-title").textContent;
        const precio = element.querySelector(".card-price").textContent;
        const cantidad = element.querySelector(".card-quantity").textContent;
        // Add "seleccionado" class if the item is already selected
        if (seleccionados.some(seleccion => seleccion.nombre === nombre)) {
            element.classList.add("seleccionado");
        }

        element.addEventListener("click", function () {
            
            if (element.classList.contains("seleccionado")) {
                // If already selected, deselect and remove from localStorage
                element.classList.remove("seleccionado");
                seleccionados = seleccionados.filter(seleccion => seleccion.nombre !== nombre);
            } else {
                // Check if the limit of 3 selections has been reached
                if (seleccionados.length < 3) {
                    element.classList.add("seleccionado");
                    seleccionados.push({
                        nombre: nombre,
                        precio: precio,
                        cantidad: cantidad,
                        imagen: element.querySelector(".card-img-top").src
                    });
                } else {
                    MostrarMensajeAdvertencia(); // Function to show a warning message
                }
            }

            // Save the updated selections in localStorage
            localStorage.setItem("selecciones", JSON.stringify(seleccionados));
        });
    });
}


document.addEventListener("DOMContentLoaded", function (){
    verificarCategoria();

    // Recuperar las selecciones guardadas al cargar la página
    const seleccionadosGuardados = JSON.parse(localStorage.getItem("selecciones"));
    if (seleccionadosGuardados) {
        aplicarEstiloSeleccion();
    }

    window.addEventListener('hashchange', function () {
        manejarContenido(location.hash);
    });
});


function MostrarMensajeAdvertencia() {
    const successMessage = document.getElementById('AdvertenciaPedido');
    successMessage.style.display = 'block';
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

function manejarContenido(seccion){

    const SeccionTitulo = document.getElementById("main-title");
    const optionsContainer = document.getElementById("main-container");
    const btnVolver = document.getElementById("btn-volver");

    switch (seccion) {

        case '#comida-rapida':
            SeccionTitulo.textContent = "COMIDA RÁPIDA";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(ComidaRapida);
            break;

        case '#entrada':
                
            SeccionTitulo.textContent = "ENTRADA";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(Entradas);
            break;

        case '#plato-principal':
            SeccionTitulo.textContent = "PLATO PRINCIPAL";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(PlatoPrincipal);
            break;

        case '#postres':
                
            SeccionTitulo.textContent = "POSTRES";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(Postres);
            break;

        case '#bebidas':
            SeccionTitulo.textContent = "BEBIDAS";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(Bebidas);
            break;
                
        case '#guarnicion':
            SeccionTitulo.textContent = "GUARNICIÓN";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(Guarnicion);
            break;

        default:
            SeccionTitulo.textContent = "CATEGORIAS";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "../index.html";
            obtenerOpciones(Categorias);
            break;
    }
     aplicarEstiloSeleccion();
}