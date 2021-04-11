let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let btnCarritoDesktop = document.querySelector(".carrito-desktop")
let showCarrito = false

let mostrarCarritoMobile = () => {
    if (showCarrito == false) {
        /* carrito.style.display = "inline-block" */
        carrito.style.right = "0"
        /* carrito.style.left = "70%" */
        showCarrito = true
    } else {
        /* carrito.style.display = "none" */
        /* carrito.style.right = "-150%" */
        carrito.style.right = "-150%"
        showCarrito = false
    }
}
let mostrarCarritoDesktop = () => {
    if (showCarrito == false) {
        carrito.style.display = "block"
        showCarrito = true
    } else {
        carrito.style.display = "none"
        showCarrito = false
    }
}
btnCarrito.addEventListener("click", mostrarCarritoMobile)
btnCarritoDesktop.addEventListener("click", mostrarCarritoDesktop)

/* FUNCIONALIDAD */
let updateCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let divCart = qs("#cart")
    let cant = qs("#cant");
    let detalles = qs("#detalles")
    let total = 0;
    if (cart == null){
        cant.innerHTML = 0;
        return detalles.innerHTML = `
     <div class="empty-cart">
         <p>No tienes ningún producto agregado al carrito.</p>
     </div>`
     } else{
        
    cart.forEach(product => {
        price = product.price * product.cant;
        total += price;
        divCart.innerHTML += `
        <div class="row product">
        <div class="img-product col-3">
            <img src="/images/products/${product.img}" alt="">
        </div>
        <div class="name-product col-3">
            <p>${product.name}</p>
        </div>
        <div class="quantity col-3">
            <form action="">
                <button id="menos">-</button>
                <input class="col-4" type="number" value = "${product.cant}"name="quantity" id="quantity">
                <button id="mas">+</button>
            </form>
        </div>
        <div class="price col-3">
            <h5>$${product.price * product.cant}</h5>
        </div>
    </div>`
    });
    detalles.innerHTML = `
    <div class="total">
            <div class="buttons">
                <button class="confirm">Confirmar compra</button>
                <button onclick="deleteCart()">Vaciar Carrito</button>
            </div>
            <h5>$${total}</h5>
        </div> `
}
    cant.innerHTML = cart.length;
    
}
let deleteCart = () => {
    localStorage.clear();
    let cart = [];
    let detalles = qs("#detalles")
    let divCart = qs("#cart")
    let cant = qs("#cant");
    detalles.innerHTML = `
    <div class="empty-cart">
        <p>No tienes ningún producto agregado al carrito.</p>
    </div>`
    divCart.innerHTML = "";
    cant.innerHTML = cart.length;
}

updateCart();
