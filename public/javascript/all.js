let btnCarrito = document.querySelector(".fa-shopping-cart")
let carrito = document.querySelector(".carrito")
let showCarrito = false
btnCarrito.addEventListener("click", ()=>{
    if (showCarrito == false){
        carrito.style.display = "none"
        showCarrito = true
    } else{
        carrito.style.display = "inline-block"
        showCarrito = false
    }
    
})