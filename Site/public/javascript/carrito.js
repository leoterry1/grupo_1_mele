let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let btnCarritoDesktop = document.querySelector(".carrito-desktop")
let showCarrito = false

let mostrarCarritoMobile = ()=>{
    if (showCarrito == false){
        /* carrito.style.display = "inline-block" */
        carrito.style.right = "0"
        /* carrito.style.left = "70%" */
        showCarrito = true
    } else{
        /* carrito.style.display = "none" */
        /* carrito.style.right = "-150%" */
        carrito.style.right = "-150%"
        showCarrito = false
    }
}
let mostrarCarritoDesktop = ()=>{
    if (showCarrito == false){
        carrito.style.top = "60px"
        showCarrito = true
    } else{
        /* carrito.style.display = "none" */
        carrito.style.top = "-150%"
        showCarrito = false
    }
}
btnCarrito.addEventListener("click", mostrarCarritoMobile)
btnCarritoDesktop.addEventListener("click", mostrarCarritoDesktop)

