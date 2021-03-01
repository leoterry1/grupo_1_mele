module.exports = (req,res,next) => {
    if(req.session.usuario){
        res.locals.user = req.session.usuario;  
    }
    next()
}