/* NAV - MENU */

let menuIcon = document.querySelector(".fa-bars")
let menu = document.querySelector(".hidden-menu")
let show = false

menuIcon.addEventListener("click", () =>{
    if (show == false){
        menu.style.left = "0";
        
        show = true
    } else if (show){
        
        menu.style.left = "-150%"
        
        show = false
    }
   
})
