const db = require('../database/models')
module.exports = {
    details : (req,res)=>{

        db.Products.findByPk(req.params.id)
            .then((producto)=>{
                res.render("details", {title: producto.name ,producto})
            })
            .catch((error)=>{
                res.send(error)
            })
    },
    all :(req,res)=>{
      
      db.Products.findAll()
        .then((productos)=>{
            res.render("products", {productos, title:"Productos", buscar: false})
        })
        .catch((error)=>{
            res.send(error)
        })
    }
}