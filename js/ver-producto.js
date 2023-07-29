const verProducto = () => {
    const urlParam = new URLSearchParams(window.location.search); // devuelve la cadena de consulta (parámetros) de la URL actual.
        console.log(window.location) // ?id=3
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
            <p class="">Estilo: ${producto.estilo.toUpperCase()}</p>
            <h4 class="text-dark fs-5 text-center">${producto.nombre}</h4>
            <p class="text-dark fs-6 text-center">$${producto.precio}</p>
            <a href="#" class="btn btn-primary border-0">Comprar</a>
        </div>`;

            localStorage.setItem("producto", JSON.stringify(producto));
        }
}
    verProducto();