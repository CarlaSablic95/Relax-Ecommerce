const verProducto = () => {
    const urlParam = new URLSearchParams(window.location.search); // devuelve la cadena de consulta (parámetros) de la URL actual.
        // console.log(window.location) // ?id=3
        const idProducto = urlParam.get("id"); // obtengo el valor del parámetro "id"
        // console.log(idProducto); // 3 --> id del producto al cual clickeo
        let productos = JSON.parse(localStorage.getItem("productos"));
            producto = productos.find((producto) => producto.id == idProducto);
        if (producto) {
            contenedorProducto.innerHTML = 
            `<div class="col-12 col-md-6 text-center">
                <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid rounded-top">
            </div>
        <div class="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center text-center">
            <p class="text-body-tertiary">Estilo: ${producto.estilo.toUpperCase()}</p>
            <h4 class="text-dark fs-5 text-center">${producto.nombre}</h4>
            <p class="text-dark fs-6 text-center">$${producto.precio}</p>
            <button class="btn btn-primary border-0" onclick="agregarProducto(${producto.id})">Comprar</button>
        </div>`;

            localStorage.setItem("producto", JSON.stringify(producto));
        }
}

// Carrito de compras
const agregarProducto = (id) => {
    const idProducto = id;
    const productos = JSON.parse(localStorage.getItem("productos"));
    const producto = productos.find((producto) => producto.id == idProducto);
    
    if(producto) {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const productoEnCarrito = carrito.find((item) => item.id === producto.id);
        
        if(productoEnCarrito) {
            // si el producto está en el carrito, aumento la cantidad del producto
            productoEnCarrito.cantidad++;
            Toastify({
                text: "Producto añadido al carrito",
                duration: 3000,
                backgroundColor: "var(--dark-black)",
                close: true
            }).showToast();
        } else {
        // si el producto no está en el carrito, aumento la cantidad sólo a 1
        producto.cantidad = 1;
        carrito.push(producto);
        Toastify({
            text: "Producto añadido al carrito",
            duration: 3000,
            backgroundColor: "var(--dark-black)",
            close: true
        }).showToast();
    }
    console.log("Carrito: ", carrito);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
}

verProducto();
mostrarBotonCarrito();