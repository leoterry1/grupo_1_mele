/* NAV - MENU */

let menuIcon = document.querySelector(".fa-bars")
let menu = document.querySelector(".hidden-menu")
let show = false

menuIcon.addEventListener("click", () =>{
    if (show == false){
        menu.style.display = "inline-block";
        show = true
    } else if (show){
        menu.style.display = "none";
        show = false
    }
   
})
