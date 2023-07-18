// Capturando nodos
let outfitMujer = document.getElementById("outfit-mujer");
let productosMujer = document.getElementById("productos-mujer");

let checkBotones = document.querySelectorAll(".form-check-input");



let productos = [];


// Consumiendo API LOCAL de outfits de mujer
const mostrarOutfits = () => {
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
            });
        })
}

mostrarOutfits();

// Consumiendo API LOCAL de indumentaria femenina
const cargarProductosMujer = () => {
    fetch("./js/indumentaria-fem.json")
        .then((respuesta) => respuesta.json())
        .then((productos) => {
            productos.forEach((producto) => {
                productosMujer.innerHTML += `
                    <div class="col-12 col-md-4 mb-4 position-relative">
                        <img src="${producto.img}" alt="${producto.nombre}" class="img-fluid rounded-top">
                        <button id="${producto.id}" class="btn btn-primary border-0 position-absolute top-0 end-0 btn-fav">
                            <i class="bi bi-suit-heart"></i>
                        </button>
                          
                        <div class="bg-dark card-info-producto">
                            <h4 class="text-white fs-5 text-center">${producto.nombre}</h4>
                            <p class="text-white fs-6 text-center">$${producto.precio}</p>
                            <button id="${producto.id}" class="btn btn-primary border-0 btn-carrito">
                                Agregar al carrito <i class="bi bi-cart2"></i>
                            </button>
                        </div>
                    </div>`
            })
        })
}

cargarProductosMujer();

let btnAgregarCarrito = document.querySelectorAll("btn-carrito")

// let btnFavorito = document.querySelector(".btn-fav");
// let heart = document.querySelector(".bi-suit-heart");
// console.log(btnFavorito)
// console.log(heart)
// btnFavorito.addEventListener("click", () => {
//     heart.classList.remove("bi-suit-heart");
//     heart.classList.add("bi-suit-heart-fill");
//     console.log("Agregando a favoritos")
// })

const filtrarProdMujer = (productos) => {
    checkBotones.forEach(checkBoton => {
        checkBoton.addEventListener("click", (e) => {
            productos.filter(producto => producto.categoria === e.currentTarget.id)

            cargarProductosMujer()
        })
    })
}

filtrarProdMujer();

const agregarAlCarrito = () => {
    btnAgregarCarrito.addEventListener("click", (e) => {
        console.log("Agregado al carrito")
    })
}

agregarAlCarrito();