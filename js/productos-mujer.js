// Listado de productos

const renderProductosMujer = () => {
    productos = obtenerProductosLS();
    titulo.innerHTML = "Todos los productos";
    productos.forEach((producto) => {
                productosMujer.innerHTML += `
                    <div class="col-12 col-md-4 mb-4 position-relative animate__animated animate__fadeIn text-center">
                        <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid rounded-top">
                        <button id="${producto.id}" class="btn btn-primary border-0 position-absolute top-0 end-0 btn-fav">
                            <i class="bi bi-suit-heart"></i>
                        </button>
                          
                        <div class="bg-dark card-info-producto">
                            <h4 class="text-white fs-5 text-center">${producto.nombre}</h4>
                            <p class="text-white fs-6 text-center">$${producto.precio}</p>
                            <a href="./ver-producto.html?id=${producto.id}" class="btn btn-primary border-0 btn-ver-producto">Ver producto</a>
                        </div>
                    </div>`
            });
}

renderProductosMujer();

// Filtro productos por estilo
const filtroPorEstilo = () => {
    productos = JSON.parse(localStorage.getItem("productos"));
     // recorro los check y por cada uno le agrego el evento click donde al hacerle click hago un filtro y comparo el estilo del producto con el VALUE DE CADA CHECKBOX
     // el método filter() RETORNA UN NUEVO ARRAY
    checkEstilos.forEach((checkEstilo) => {
        checkEstilo.addEventListener("click", () => {
            let productosFiltrados = productos.filter((producto) => (checkEstilo.checked && producto.estilo === checkEstilo.value)); // NUEVO ARRAY

            // Vacío el contenido de productosMujer antes de agregar los productos filtrados porque está lleno con los 27 productos
            productosMujer.innerHTML = "";

             // Si el largo del array nuevo que retorna el método filter() es MAYOR que cero, cambio el titulo por el nombre del estilo y recorro el NUEVO ARRAY para que CADA PRODUCTO se imprima en el div con ID productosMujer
            if(productosFiltrados.length > 0) {
                productosFiltrados.forEach(producto => {
                    titulo.innerHTML = `${(producto.estilo).toUpperCase()} <i class="bi bi-suit-heart"></i>`;
                    productosMujer.innerHTML += `
                    <div class="col-12 col-md-4 mb-4 position-relative animate__animated animate__fadeIn text-center">
                    <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid rounded-top">
                        <button id="${producto.id}" class="btn btn-primary border-0 position-absolute top-0 end-0 btn-fav">
                            <i class="bi bi-suit-heart"></i>
                        </button>
                          
                        <div class="bg-dark card-info-producto">
                            <h4 class="text-white fs-5 text-center">${producto.nombre}</h4>
                            <p class="text-white fs-6 text-center">$${producto.precio}</p>
                            <a href="./ver-producto.html?id=${producto.id}" target="_blank" class="btn btn-primary border-0 btn-ver-producto">Ver producto</a>
                        </div>
                    </div>`
                })
            } else {
                titulo.innerHTML = "Todos los productos";
                renderProductosMujer();
            }
        })
        
    })
}

filtroPorEstilo();

// Filtro por categoría de productos
const filtroPorCategoria = () => {
    productos = JSON.parse(localStorage.getItem("productos"));

    checkCategorias.forEach((checkCategoria) => {
        checkCategoria.addEventListener("click", (e) => {
            let categoriaProductos = productos.filter((producto) => (checkCategoria.checked && producto.categoria === checkCategoria.value));

            productosMujer.innerHTML = "";
            
            if(categoriaProductos.length > 0) {
                categoriaProductos.forEach((producto) => {
                    titulo.innerHTML = `${(producto.categoria).toUpperCase()}`;

                    productosMujer.innerHTML += `
                    <div class="col-12 col-md-5 mb-4 position-relative animate__animated animate__fadeIn">
                    <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid rounded-top">
                        <button id="${producto.id}" class="btn btn-primary border-0 position-absolute top-0 end-0 btn-fav">
                            <i class="bi bi-suit-heart"></i>
                        </button>
                          
                        <div class="bg-dark card-info-producto">
                            <h4 class="text-white fs-5 text-center">${producto.nombre}</h4>
                            <p class="text-white fs-6 text-center">$${producto.precio}</p>
                            <a href="./ver-producto.html?id=${producto.id}" target="_blank" class="btn btn-primary border-0 btn-ver-producto">Ver producto</a>
                        </div>
                    </div>`
                })
            } else {
                titulo.innerHTML = "Todos los productos";
                renderProductosMujer();
            }
        })
    })
}

filtroPorCategoria();
mostrarBotonCarrito();