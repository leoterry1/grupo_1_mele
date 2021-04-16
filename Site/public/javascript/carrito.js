let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let btnCarritoDesktop = document.querySelector(".carrito-desktop")
let showCarrito = false



let mostrarCarritoMobile = () => {
    if (showCarrito == false) {
        /* carrito.style.display = "inline-block" */
        carrito.style.transform = "scaleY(1)"
        /* carrito.style.left = "70%" */
        showCarrito = true
    } else {
        /* carrito.style.display = "none" */
        /* carrito.style.right = "-150%" */
        carrito.style.transform = "scaleY(0)"
        showCarrito = false
    }
}
let mostrarCarritoDesktop = () => {
    if (showCarrito == false) {
        carrito.style.transform = "scaleY(1)"
        showCarrito = true
    } else {
        carrito.style.transform = "scaleY(0)"
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
    let cant2 = qs("#cart-mobile");
    let detalles = qs("#detalles")
    let total = 0;
    if (cart == null){
        cant.innerHTML = 0;
        cant2.innerHTML = 0;
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
                <button onclick="lessCart(${product.id})" id="menos">-</button>
                <input class="col-4" type="number" value = "${product.cant}"name="quantity" id="quantity">
                <button onclick="plusCart(${product.id})" id="mas">+</button>
        </div>
        <div class="price col-3">
            <h5>$${product.price * product.cant}</h5>
        </div>
    </div>`
    });
    detalles.innerHTML = `
    <div class="total">
            <div class="buttons">
                <button onclick="deleteCart()">Vaciar Carrito</button>
            </div>
            <h5>$${total}</h5>
        </div> `
}
    cant.innerHTML = cart.length;
    cant2.innerHTML = cart.length;
    UpdateProfile();
    
}
let deleteCart = () => {
    localStorage.clear();
    let cart = [];
    let detalles = qs("#detalles")
    let divCart = qs("#cart")
    let cant = qs("#cant");
    let cant2 = qs("#cart-mobile");
    detalles.innerHTML = `
    <div class="empty-cart">
        <p>No tienes ningún producto agregado al carrito.</p>
    </div>`
    divCart.innerHTML = "";
    cant.innerHTML = cart.length;
    cant2.innerHTML = cart.length;
    UpdateProfile();
}
let lessCart = (id)=>{
    let cart = JSON.parse(localStorage.getItem("cart"))
    let divCart = qs("#cart")
    cart.forEach(product => {
        if(product.id == id && product.cant > 1){
            product.cant = product.cant -1
            divCart.innerHTML = ""
            localStorage.setItem("cart", JSON.stringify(cart))
            updateCart();

        }else if(product.id == id && product.cant == 1 && cart.length == 1){
            divCart.innerHTML = ""
            localStorage.clear()
            updateCart();
            UpdateProfile();
        }else if(product.id == id && product.cant == 1 && cart.length > 1){
            divCart.innerHTML = ""
            let newCart = []
            cart.forEach(product => {
                if(product.id != id){
                    newCart.push(product)
                }
            });
            localStorage.setItem("cart", JSON.stringify(newCart))
            updateCart();
        }
    });
}
let plusCart = (id) =>{
    let divCart = qs("#cart")
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.forEach(product => {
        if (product.id == id){
            product.cant = product.cant + 1
            divCart.innerHTML = ""
            localStorage.setItem("cart", JSON.stringify(cart))
            updateCart();
        }
    });
}
updateCart();
