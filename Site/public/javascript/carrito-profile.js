let carritoProfile = qs(".thead");
let productProfile = qs(".table-body")
let totalProfile = qs("#total-profile")
let UpdateProfile = () =>{
    let cartProfile = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    carritoProfile.innerHTML = ''
    productProfile.innerHTML = ''
    if(cartProfile){
        carritoProfile.innerHTML = `
                    <th scope="col-1">Imagen</th>
                    <th scope="col-2">Nombre</th>
                    <th scope="col-1">Precio Unitario</th>
                    <th scope="col-1">Cantidad</th>
                    <th colspan="2" scope="col-1">Quitar/Agregar</th>
                    <th scope="col-1">Precio Final</th>
                `
        cartProfile.forEach(producto => {
            price = producto.price * producto.cant;
            total += price;
            productProfile.innerHTML += `
            <tr>
          <td><img src="/images/products/${producto.img}"</td>
          <td><p>${producto.name}</p></td>
          <td><p>$${producto.price}</p></td>
          <td><p>${producto.cant}</p></td>
          <td colspan="2"><i onclick="lessCart(${producto.id})" class="fas fa-minus-circle"></i>
          <i onclick="plusCart(${producto.id})" class="fas fa-plus-circle"></i></td>
          <td><p>$${producto.price * producto.cant}</td>
        </tr>
            `
        });
        totalProfile.innerHTML = `<button class="btn btn-danger"onclick="deleteCart()">Vaciar Carrito</button><h5>TOTAL:   $${total}</h5>`
    }else{
        carritoProfile.innerHTML = ''
        totalProfile.innerHTML = ' '
        carritoProfile.innerHTML = '<h5>NO HAY PRODUCTOS EN EL CARRITO</h5>'
    }
}
UpdateProfile();

