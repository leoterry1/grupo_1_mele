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
        let num_page = parseInt(req.params.page)
        let skip_page = (num_page - 1) * 10
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
        .then((productos) => {
            if (productos) {
                cantidad = productos.length
                num_pages = parseInt(productos.length / 10) + 1;
            }
        })
        db.Products.findAll({offset: skip_page, limit: 10,
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
            res.render('categories',{
                title:"Resultado de la búsqueda" + buscar,
                productos,
                buscar,
                search_url: `?search=${req.query.search}`,
                num_page,
                num_pages,
                mensaje: "Mostrando " + productos.length + " de " + cantidad + " resultados de tu búsqueda: " + req.query.search,
                error: "No se han encontrado resultados para tu búsqueda: " + req.query.search
            })
        })
        .catch((error)=> res.send(error))
        
    },
    sinPermisos: (req,res)=>{
        res.render("sin-permisos", {title: "Error"})
    },
    categories: (req, res) => {
        res.locals.user = req.session.usuario
        res.render("categories", {title: "Categorías"})  
    }
}