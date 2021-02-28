module.exports = (req,res,next) => {
    let user = res.locals.user
    if(typeof user != "undefined" && user.admin){
        next() 
    }else{
        res.redirect("/sin-permisos")
    }
    
}