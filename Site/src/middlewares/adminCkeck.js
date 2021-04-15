module.exports = (req,res,next) => {
    let user = req.session.usuario
    if(typeof user != "undefined" && user.admin){
        next() 
    }else{
        res.redirect("/sin-permisos")
    }
    
}