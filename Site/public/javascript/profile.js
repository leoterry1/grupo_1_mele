let foto = document.querySelector("#editar-foto")
let editFoto = document.querySelector(".contenedor-edit")
let cancelarFoto = document.querySelector(".cancelar")
foto.addEventListener("click", ()=>{
    editFoto.style.display = "block"
})

cancelarFoto.addEventListener("click", () =>{
    editFoto.style.display = "none"
})

//EDITAR NOMBRE

let editName = document.querySelector("#edit-name")
let hideNombre = document.querySelector(".hide-nombre")
let formNombre = document.querySelector(".form-nombre")
let cancel = document.querySelector(".cancel-name")

editName.addEventListener("click", ()=>{
    formNombre.style.display = "flex"
    hideNombre.style.display = "none"
    editName.style.display = "none"
})
cancel.addEventListener("click", ()=>{
    formNombre.style.display = "none"
    hideNombre.style.display = "block"
    editName.style.display = "block"
})

//EMAIL

/* let editEmail = document.querySelector("#edit-email")
let hideEmail = document.querySelector(".hide-email")
let formEmail = document.querySelector(".form-email")
let cancelEmail = document.querySelector(".cancel-email")

editEmail.addEventListener("click", ()=>{
    formEmail.style.display = "flex"
    hideEmail.style.display = "none"
    editEmail.style.display = "none"
})
cancelEmail.addEventListener("click", ()=>{
    formEmail.style.display = "none"
    hideEmail.style.display = "block"
    editEmail.style.display = "block"
}) */

let editSurname = document.querySelector("#edit-surname")
let hideSurname = document.querySelector(".hide-surname")
let formSurname = document.querySelector(".form-surname")
let cancelSurname = document.querySelector(".cancel-surname")

editSurname.addEventListener("click", ()=>{
    formSurname.style.display = "flex"
    hideSurname.style.display = "none"
    editSurname.style.display = "none"
})
cancelSurname.addEventListener("click", ()=>{
    formSurname.style.display = "none"
    hideSurname.style.display = "block"
    editSurname.style.display = "block"
})

/* let password = document.querySelector("#edit-password")
let editPassword = document.querySelector(".contenedor-password")
let cancelarPassword = document.querySelector(".cancelar-pwd")
password.addEventListener("click", ()=>{
    editPassword.style.display = "block"
})

cancelarPassword.addEventListener("click", () =>{
    editPassword.style.display = "none"
}) */


