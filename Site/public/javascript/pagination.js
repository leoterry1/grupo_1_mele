let change = () => {
if (location.pathname == "/categories"){
    document.querySelector(".productos-li").classList.remove("active")
    document.querySelector(".categorias-li").classList.add("active")
}
}
change();