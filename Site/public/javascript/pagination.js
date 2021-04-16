let change = () => {
if (location.pathname == "/categories"){
    document.querySelector(".productos-li").classList.remove("active")
    document.querySelector(".categorias-li").classList.add("active")
}
}
let filtroForm = qs(".filtro-form");
let filtroUp = qs(".fa-angle-up")
let filtroDown = qs(".fa-angle-down")


filtroDown.addEventListener("click", ()=>{
    filtroUp.style.display = "block";
    filtroForm.style.transform = "scaleY(1)"
    filtroForm.style.position = "relative"
    filtroDown.style.display = "none"
})
filtroUp.addEventListener("click", ()=>{
    filtroUp.style.display = "none";
    filtroForm.style.transform = "scaleY(0)"
    filtroDown.style.display = "block"
    filtroForm.style.position = "absolute"
})

change();