const fs = require("fs");
let productos = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
let subida = (array)=> fs.writeFileSync("./data/products.json", (JSON.stringify(array,null, 2)))
module.exports = {
    create: (req,res)=>{
        res.render("form-carga", {title : "Nuevo producto"})
    },
    subir: (req,res)=>{
        let lastID = 1;
        productos.forEach(producto => {
            if (producto.id > lastID) {
                lastID = producto.id
            }
        });
        let {name ,category , subCategory, description, marca, price} = req.body;
        let img = req.files[0].filename;
        let producto = {
            id : lastID + 1,
            title: name,
            category,
            marca,
            price,
            subCategory,
            description,
            img
        }
        productos.push(producto)
        subida(productos)
        res.render("details", {title: producto.title + "| Mele", producto})
    }
}