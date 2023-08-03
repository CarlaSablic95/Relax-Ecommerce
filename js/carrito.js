const mostrarCarrito = () => {
  // array que contiene los productos del carrito
  let productos = cargarCarritoLS();
    let contenidoTabla = "";
    contenidoTabla = `<table class="table">
    <thead>
    <tr>
      <th colspan="2" class="text-start">Producto</th>
      <th scope="col" class="text-end">Precio</th>
      <th scope="col" class="text-end">Cantidad</th>
      <th scope="col" class="text-end">Subtotal</th>
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
            
          </tr>
        `;
        
    });

    contenidoTabla +=`
    
    <tr colspan="6">
        <th>Total: $${totalProductos().toFixed(2)}</th>
        
    </tr>
    </tbody>
    </table>`;

    contenidoCarrito.innerHTML = `${contenidoTabla}`
}


const borrarProducto = () => {
  console.log("Borro el producto")
}

mostrarCarrito();
mostrarBotonCarrito();