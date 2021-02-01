let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let btnCarritoDesktop = document.querySelector(".carrito-desktop")
let showCarrito = false

let mostrarCarrito = ()=>{
    if (showCarrito == false){
        carrito.style.display = "inline-block"
        showCarrito = true
    } else{
        carrito.style.display = "none"
        showCarrito = false
    }
}
btnCarrito.addEventListener("click", mostrarCarrito)
btnCarritoDesktop.addEventListener("click", mostrarCarrito)

