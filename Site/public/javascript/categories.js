let electronica = document.querySelector("#electronica")
let coleccion = document.querySelector("#coleccion")
let instrumentos = document.querySelector("#instrumentos")
let artistas = document.querySelector("#artistas")
let albumes = document.querySelector("#albumes")
let btnArtistas = document.querySelector('#btnArtistas')
console.log(btnArtistas)

btnArtistas.addEventListener("click",() =>{
    console.log("Algo estoy haciendo")
    artistas.styleDisplay = "flex"
    artistas.toggleClass("data")
})
