let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let btnCarritoDesktop = document.querySelector(".carrito-desktop")
let showCarrito = false

let mostrarCarrito = ()=>{
    if (showCarrito == false){
        /* carrito.style.display = "inline-block" */
        carrito.style.left = "0"
        showCarrito = true
    } else{
        /* carrito.style.display = "none" */
        carrito.style.left = "-150%"
        showCarrito = false
    }
}
btnCarrito.addEventListener("click", mostrarCarrito)
btnCarritoDesktop.addEventListener("click", mostrarCarrito)

