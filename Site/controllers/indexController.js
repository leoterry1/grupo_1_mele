const fs = require("fs");
let productos = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));
module.exports = {
    index:(req, res) =>{
        res.render('index', {title: "Inicio", productos})
    }
}