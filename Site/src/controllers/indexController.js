const db = require('../database/models')
const { Op } = require("sequelize")
module.exports = {
    index:(req, res) =>{
        db.Products.findAll()
            .then((productos)=>{
                
                res.render('index', {title: "Inicio", productos })
            })
            .catch((error)=> res.send(error))
    },
    search: (req,res)=>{
        const buscar = req.query.search;
        db.Products.findAll({
            where:{
                [Op.or]: [
                    {
                        name: {
                            [Op.substring]: buscar
                        }
                    },
                    {
                        mark: {
                            [Op.substring]: buscar
                        }
                    }
                ]
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
    },
    categories: (req, res) => {
        db.Products.findAll()
            .then((productos)=>{
                
                res.render("categories", {title: "Categorías", productos})
            })
            .catch((error)=> res.send(error))
        
    }
}