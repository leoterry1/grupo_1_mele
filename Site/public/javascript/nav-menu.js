/* NAV - MENU */

let menuIcon = document.querySelector(".fa-bars")
let menu = document.querySelector(".hidden-menu")
let show = false

menuIcon.addEventListener("click", () =>{
    if (show == false){
        menu.style.transform = "translate(0%,0%)";
        
        show = true
    } else if (show){
        
        menu.style.transform = "translate(-110%,0%)"
        
        show = false
    }
   
})
