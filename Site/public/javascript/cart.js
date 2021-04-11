let addToCart = (producto) =>{
    if(localStorage.getItem("cart") == null){
        let cart = [producto];
        localStorage.setItem("cart", JSON.stringify(cart))
    }else{
        let cartDiv = qs("#cart")
        cartDiv.innerHTML = ''
        let cart = JSON.parse(localStorage.getItem("cart"));
        let aux = false
        cart.forEach(product => {
            if(product.id == producto.id){
                product.cant = product.cant+1
                aux = true
            }
        });
        if(!aux){
            cart.push(producto)
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    updateCart();
};
let vaciarCarrito = () =>{
    localStorage.clear();
    deleteCart();
}