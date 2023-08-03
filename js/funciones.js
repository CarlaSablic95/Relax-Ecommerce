// Guardo productos en local storage
// Consumiendo API LOCAL de indumentaria femenina
// let productos = [];
const guardarProductosLS = () => {
    fetch("./js/indumentaria-fem.json")
    .then((respuesta) => respuesta.json())
    .then((productos) => {   
        localStorage.setItem("productos", JSON.stringify(productos)); // lo convierto a objeto tipo string porque es el tipo de dato que acepta el local storage
    })
}
guardarProductosLS();


const obtenerProductosLS = () => {
   return productos = JSON.parse(localStorage.getItem("productos"));
    // console.log(productos) // lo parseo porque viene con formato de texto JSON. El array con 27 objetos
}

// CARRITO DE COMPRAS

const guardarCarritoLS = (carrito) => {
     localStorage.setItem("carrito", JSON.stringify(carrito))
}

const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const cantidadProductos = () => {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, producto) => acumulador += producto.cantidad, 0);
}

const sumaTotalProductos = () => {
 const carrito = cargarCarritoLS();
 return carrito.reduce((acumulador, producto) => acumulador += producto.cantidad * producto.precio, 0);
}

const mostrarBotonCarrito = () => {
    botonCarrito.innerHTML = `<i class="bi bi-bag"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge bg-beige text-dark rounded-circle" id="item-carrito">${cantidadProductos()}</span>`;
}

mostrarBotonCarrito();

// REGISTRO Y LOGIN DE USUARIO
