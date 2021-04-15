const db = require('../database/models')

module.exports = (req,res,next) => {
    if(req.session.usuario){
        db.Users.findByPk(req.session.usuario.id)
        .then(user =>{
            res.locals.user = user;  
        })
        .catch(error =>{
            res.send(error)
        })
    }
    next()
}