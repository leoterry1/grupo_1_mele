const fs = require("fs");
let productos = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
module.exports = {
    index:(req, res) =>{
        res.render('index', {title: "Inicio", productos})
    },
    search: (req,res)=>{
        const buscar = req.query.search;

        const resultado = productos.filter(producto=>{
            return producto.title.toLowerCase().includes(buscar.toLowerCase()) || producto.marca.toLowerCase().includes(buscar.toLowerCase()) || producto.category.toLowerCase().includes(buscar.toLowerCase()) 
        })
        
        res.render('products',{
            title:"Resultado de la búsqueda" + buscar,
            productos: resultado,
            buscar
        })
    }
}