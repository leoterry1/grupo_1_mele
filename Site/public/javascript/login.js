let registrarse = document.querySelector(".registrarse")
let ingresar = document.querySelector(".ingresar")
let login = document.querySelector(".login")
let signup = document.querySelector(".signup")
let nombre_apellido = document.querySelector(".nombre-apellido")

registrarse.addEventListener("click", () => {
    login.style.display = "none"
    signup.style.display = "flex"
    signup.style.flexDirection = "column"
    nombre_apellido.style.display = "flex"
    registrarse.style.borderBottom = "2px solid #744BFF"
    ingresar.style.borderBottom = "2px solid #A387FE"
    registrarse.style.transform = "scale (0)"
    registrarse.style.backgroundSize = "100% 2px"
    ingresar.style.backgroundSize = "0% 2px"
})
ingresar.addEventListener("click", () => {
    login.style.display = "flex"
    signup.style.display = "none"
    ingresar.style.borderBottom = "2px solid #744BFF"
    registrarse.style.borderBottom = "2px solid #A387FE"
    ingresar.style.backgroundSize = "100% 2px"
    registrarse.style.backgroundSize = "0% 2px"
})

