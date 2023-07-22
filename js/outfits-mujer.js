// Capturando nodos
let outfitMujer = document.getElementById("outfit-mujer"); // listado de outfits
// Consumiendo API LOCAL de outfits de mujer
    const mostrarOutfits = () => {
        fetch("./js/outfits-mujer.json")
            .then((respuesta) => respuesta.json())
            .then((outfits) => {
                outfits.forEach((outfit) => {
                    outfitMujer.innerHTML += `
                        <div class="col-12 col-md-4 mb-3">
                            <a href="./productos-mujer.html" class="text-decoration-none">
                                <div class="card border-0 bg-dark">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <img src="${outfit.img}" width="300px" alt="${outfit.nombre}" class="filtro-img img-fluid">
                                        <h4 class="rocker text-white fs-5 text-center">${outfit.nombre}</h4>
                                    </div>
                                </div>
                            </a>
                        </div>`
                });
            })
    }

    mostrarOutfits();