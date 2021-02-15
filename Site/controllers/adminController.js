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
    },
    edit: (req,res) => {
        let producto = productos.find(producto=>{
            return producto.id == req.params.id
        });
        res.render("edit-form", {producto, title:"Editar producto"})
    },
    save: (req,res)=>{
        const {name ,category , subCategory, description, marca, price} = req.body;
        let img = req.files[0].filename;
        productos.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.id = +req.params.id;
                producto.title = name;
                producto.marca = marca;
                producto.price = price;
                producto.category = category;
                producto.subCategory = subCategory;
                producto.description = description;
                producto.img = img
            }
        });

        subida(productos)

        res.redirect('/productos');
    },
    borrar:(req,res)=>{
        productos.forEach(producto => {
            if (producto.id === +req.params.id) {
                let eliminar = productos.indexOf(producto)
                productos.splice(eliminar, 1)
            }

        });
        subida(productos)
        res.redirect("/productos")    
        
    }
}