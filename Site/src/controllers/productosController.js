const fs = require("fs");
let productos = JSON.parse(fs.readFileSync("./src/data/products.json", "utf-8"));
module.exports = {
    details : (req,res)=>{
        let producto = productos.find(producto=>{
            return producto.id == req.params.id
        });

        res.render("details", {title: producto.title ,producto})
    },
    all :(req,res)=>{
        res.render("products", {productos, title:"Productos", buscar: false})
    }
}