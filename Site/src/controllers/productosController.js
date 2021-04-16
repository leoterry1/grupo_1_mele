const db = require('../database/models')
const { Op } = require("sequelize")

module.exports = {
    details: (req, res) => {

        db.Products.findByPk(req.params.id)
            .then((producto) => {
                res.render("details", { title: producto.name, producto })
            })
            .catch((error) => {
                res.send(error)
            })
    },
    all: (req, res) => {
        let num_page = parseInt(req.params.page)
        let skip_page = (num_page - 1) * 10

        db.Products
            .count()
            .then(function (count) {
                num_pages = parseInt((count / 10) + 1);
            });

        db.Products.findAll({ offset: skip_page, limit: 10 })
            .then((productos) => {
                res.render("categories", {
                    productos, title: "Productos", buscar: false, num_page,
                    num_pages, mensaje: "Todos los productos", error: "No encontramos productos con tu filtro", categories: false
                })
            })
            .catch((error) => {
                res.send(error)
            })
    },
    filter: (req, res) => {
        let num_page = parseInt(req.params.page)
        let skip_page = (num_page - 1) * 10
        db.Products.findAll({
            where: {
                [Op.and]: [
                    {
                        id_category: req.query.category != "null" ? req.query.category : { [Op.gt]: 0 }
                    },
                    {
                        id_subcategory: req.query.subCategory != "null" ? req.query.subCategory : { [Op.gt]: 0 }
                    },
                    {
                        price: {
                            [Op.between]: [
                                req.query.minprice ? parseInt(req.query.minprice) : 0,
                                req.query.maxprice ? parseInt(req.query.maxprice) : 999999
                            ]
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
        db.Products.findAll({
            offset: skip_page, limit: 10,
            where: {
                [Op.and]: [
                    {
                        id_category: req.query.category != "null" ? req.query.category : { [Op.gt]: 0 }
                    },
                    {
                        id_subcategory: req.query.subCategory != "null" ? req.query.subCategory : { [Op.gt]: 0 }
                    },
                    {
                        price: {
                            [Op.between]: [
                                req.query.minprice ? parseInt(req.query.minprice) : 0,
                                req.query.maxprice ? parseInt(req.query.maxprice) : 999999
                            ]
                        }
                    }
                ]
            }
        })
            .then((productos) => {
                if (productos) {
                    filter_url = `?category=${req.query.category}&subCategory=${req.query.subCategory}&minprice=${req.query.minprice}&maxprice=${req.query.maxprice}`
                    res.render('categories', {
                        title: "Resultados del filtro",
                        productos,
                        num_pages,
                        num_page,
                        filter_url,
                        mensaje: "Mostrando " + productos.length + " de " + cantidad + " resultados de tu filtro.",
                        error: "No encontramos resultados para tu filtro",
                        categories: true
                    })
                }
            })
            .catch((error) => res.send(error))
    }
}