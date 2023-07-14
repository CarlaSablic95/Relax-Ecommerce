fetch("./js/outfits-mujer.json")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        datos.forEach((outfit) => {
            outfitWoman.innerHTML += `
            <div class="col-12 col-md-4">
            <div class="card" style="width: 18rem;">
            <img src="${outfit.img}" class="card-img-top" alt="${outfit.nombre}">
            
            </div>
            </div>`
        })

    })
    
