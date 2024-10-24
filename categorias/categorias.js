const Categorias = [
    {
        id: 1,
        nombre: "MENÚ DEL DÍA",
        href: "#menu-del-dia",
        imagen: "./imgs-categorias/CartaMenu.png"
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

const MenuDelDia = [
    {
        id: 1,
        nombre: "HAMBURGUESA SIMPLE",
        imagen: "./imgs-opciones/hamburguesa-simple.png"
    },
    {
        id: 2,
        nombre: "HAMBURGUESA COMPLETA",
        imagen: "./imgs-opciones/hamburguesa-completa.png"
    },
    {
        id: 3,
        nombre: "PAPAS FRITAS",
        imagen: "./imgs-opciones/porcion-papas.png"
    },
    {
        id: 4,
        nombre: "CONO HELADO",
        imagen: "./imgs-opciones/cono-helado.png"
    },
    {
        id: 5,
        nombre: "ENSALADA",
        imagen: "./imgs-opciones/ensalada-completa.png"
    },
    {
        id: 6,
        nombre: "NUGGETS",
        imagen: "./imgs-opciones/porcion-nuggets.png"
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
                    <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded">
                        <h5 class="card-title mt-3">${opcion.nombre}</h5>
                        <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                    </div>
                </a>
            `;
        }else if(Opciones == MenuDelDia && opcion.nombre == "HAMBURGUESA SIMPLE"){
            optionsContainer.innerHTML += `
                <a href="../Pedido/pedido.html" class="item-categoria">
                    <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded">
                            <h5 class="card-title mt-3">${opcion.nombre}</h5>
                            <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                    </div>
                </a>
            `;
        }else{
            optionsContainer.innerHTML += `
                <div class="card d-flex h-100 justify-content-between align-items-center border border-secondary rounded">
                        <h5 class="card-title mt-3">${opcion.nombre}</h5>
                        <img src="${opcion.imagen}" class="card-img-top mb-3 w-50" alt="Imagen ${opcion.nombre}">
                </div>
            `;
        }

        
    });

}

function manejarContenido(seccion){

    const SeccionTitulo = document.getElementById("main-title");
    const optionsContainer = document.getElementById("main-container");
    const btnVolver = document.getElementById("btn-volver");

    switch (seccion) {

        case '#menu-del-dia':
            SeccionTitulo.textContent = "MENÚ DEL DÍA";
            optionsContainer.innerHTML = ``;
            btnVolver.href = "#";
            obtenerOpciones(MenuDelDia);
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
}