// Consumiendo API LOCAL de outfits de mujer

fetch("./js/outfits-mujer.json")
    .then((respuesta) => respuesta.json())
    .then((outfits) => {
        outfits.forEach((outfit) => {
            outfitMujer.innerHTML += `
                <div class="col-12 col-md-4 mb-3">
                <a href="./productos-mujer.html" class="text-decoration-none">
                    <div class="card border-0 bg-degradado">
                        <div class="d-flex justify-content-between align-items-center">
                            <img src="${outfit.img}" width="300px" alt="${outfit.nombre}" class="filtro-img img-fluid">
                            <h4 class="rocker text-white fs-5 text-center">${outfit.nombre}</h4>
                        </div>
                    </div>
                    </a>
                </div>`
        })
    })

// Consumiendo API LOCAL de indumentaria femenina
const renderIndumentariaFem = () => {
    fetch("./js/indumentaria-fem.json")
        .then((respuesta) => respuesta.json())
        .then((productos) => {
            productos.forEach((producto) => {
                productosMujer.innerHTML += `
                    <div class="col-12 col-md-4 mb-3">
                        <div class="card border-0 bg-degradado">
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <img src="${producto.img}" width="300px" alt="${producto.nombre}" class="img-fluid">
                                <h4 class="text-white fs-5 text-center">${producto.nombre}</h4>
                            </div>
                        </div>
                    </div>`
            })
        })
}

renderIndumentariaFem();