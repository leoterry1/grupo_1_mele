const db = require('../database/models')
const {Op} = require("sequelize")
module.exports = {
    index:(req, res) =>{
        db.Products.findAll()
            .then((productos)=>{
                
                res.render('index', {title: "Inicio", productos})
            })
            .catch((error)=> res.send(error))
    },
    search: (req,res)=>{
        const buscar = req.query.search;
        db.Products.findAll({
            where:{
                name:{
                    [Op.substring]: buscar
                }
            }
        })
        .then((productos)=>{
            res.render('products',{
                title:"Resultado de la búsqueda" + buscar,
                productos,
                buscar
            })
        })
        .catch((error)=> res.send(error))
        
    },
    sinPermisos: (req,res)=>{
        res.render("sin-permisos", {title: "Error"})
    }
}