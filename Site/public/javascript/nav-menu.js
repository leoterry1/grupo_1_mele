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


/* Posición del nav */

let navDesktop = document.querySelector(".fondo-nav");
let actualScroll = 0

window.addEventListener("scroll", () =>{
    if(window.scrollY < actualScroll && window.scrollY != 0){
        navDesktop.style.position = "fixed";
        navDesktop.style.top = "0px";
        navDesktop.style.left = "0px"
        navDesktop.style.right = "0px"
        navDesktop.style.margin = "auto"
        navDesktop.style.marginTop = "0";
        actualScroll = window.scrollY
        
    }else{
        navDesktop.style.position = "relative";
        navDesktop.style.top = "";
        actualScroll = window.scrollY
    }
     
})

let mobileNav = document.querySelector(".mobile");
let actualScrollM = 0

window.addEventListener("scroll", () =>{
    if(window.scrollY < actualScrollM && window.scrollY != 0){
        mobileNav.style.position = "fixed";
        mobileNav.style.top = "0px";
        mobileNav.style.marginTop = "0";
        actualScrollM = window.scrollY
        
    }else if (window.scrollY > actualScrollM && window.scrollY != 0){
        mobileNav.style.position = "relative";
        mobileNav.style.top = "-100px";
        actualScrollM = window.scrollY
    }else{
        mobileNav.style.position = "relative";
        mobileNav.style.top = "0";
        actualScrollM = window.scrollY
    }
     
})