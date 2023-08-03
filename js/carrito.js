const mostrarCarrito = () => {
  // array que contiene los productos del carrito
  let productos = cargarCarritoLS();
    let contenidoTabla = "";

    if(cantidadProductos() > 0) {
      contenidoTabla = `<table class="table">
      <thead>
      <tr>
        <th colspan="2" class="text-start">Producto</th>
        <th scope="col" class="text-end">Precio</th>
        <th scope="col" class="text-end">Cantidad</th>
        <th scope="col" class="text-end">Subtotal</th>
        <th scope="col" class="text-end">
        <button class="btn btn-danger" onclick="vaciarCarrito()">
          <i class="bi bi-trash3-fill"></i>
        </button>
        </th>
      </tr>
    </thead>
    <tbody>`;
  
      productos.forEach(producto => {
          contenidoTabla += `
            <tr>
              <th scope="row">
              <img src="${producto.img}" alt="${producto.nombre}" width="100px">
              </th>
              <td class="text-start align-middle">${producto.nombre}</td>
              <td class="fw-bold text-end align-middle">$${producto.precio}</td>
              <td class="fw-bold text-end align-middle">${producto.cantidad} x $${producto.precio}</td>
              <td class="fw-bold text-end align-middle">$${(producto.cantidad  * producto.precio).toFixed(2)}</td>
              <td class="fw-bold text-center align-middle">
              <i class="bi bi-trash3-fill" onclick="eliminarProducto(${producto.id})"></i>
              </td>
            </tr>
          `;
          
      });
  
      contenidoTabla +=`
      
      <tr colspan="6">
          <th>Total: $${sumaTotalProductos().toFixed(2)}</th>
          
      </tr>
      </tbody>
      </table>`;
  
      contenidoCarrito.innerHTML = `${contenidoTabla}`;
    } else {
      contenidoCarrito.innerHTML = `<div class="text-center">
      <h4 class="text-center text-danger">No hay productos en el carrito!</h4>
        <img src="./assets/img/carrito.png">
      </div>
      <a class="text-center text-decoration-none fs-4 text-dark">Comprar</h4>
      `
    }
}

mostrarCarrito();
mostrarBotonCarrito();

const eliminarProducto = (id) => {
  const carrito = cargarCarritoLS();
  let posicion = carrito.findIndex((item) => item.id === id);

  // si la cantidad de un producto es mayor a 1, borra 
  if(carrito[posicion].cantidad > 1) {
    carrito[posicion].cantidad -= 1;
  } else {
    let carritoGuardado = carrito.splice(posicion, 1);
    console.log(carritoGuardado)
  }
  guardarCarritoLS(carrito);
  mostrarBotonCarrito();
  mostrarCarrito();
}

const vaciarCarrito = () => {
  localStorage.removeItem("carrito");
  mostrarBotonCarrito();
  mostrarCarrito();
}