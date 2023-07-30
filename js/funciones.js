// Guardo productos en local storage
// Consumiendo API LOCAL de indumentaria femenina
let productos = [];
const guardarProductosLS = () => {
    fetch("./js/indumentaria-fem.json")
    .then((respuesta) => respuesta.json())
    .then((productos) => {   
        localStorage.setItem("productos", JSON.stringify(productos)); // lo convierto a objeto tipo string porque es el tipo de dato que acepta el local storage
    })
}

guardarProductosLS();


const obtenerProductos = () => {
    productos = JSON.parse(localStorage.getItem("productos"));
    // console.log(productos) // lo parseo porque viene con formato de texto JSON. El array con 27 objetos
}