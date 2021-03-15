const db = require('../database/models')
module.exports = {
    create: (req,res)=>{
        res.render("form-carga", {title : "Nuevo producto"})
    },
    subir: (req,res)=>{

        let {name ,category , subCategory, description, marca, price} = req.body;
        let img = req.files[0] ? req.files[0].filename : "defaultImg.png";
        db.Products.create({
            name,
            mark: marca,
            price,
            detail: description,
            img,
            id_subcategory: +subCategory,
            id_category: +category,
        })
        .then((producto)=>{
          
          res.redirect("/productos/details/" + producto.id_product)
          
        })
        .catch((error)=>{
            res.send(error)
        })

       
    },
    edit: (req,res) => {
        /* let producto = productos.find(producto=>{
            return producto.id == req.params.id 
        });
        res.render("edit-form", {producto, title:"Editar producto"}) */
        db.Products.findByPk(req.params.id)
        .then((producto)=>{
            res.render("edit-form", {producto, title:"Editar producto"})
        })
        .catch((error)=> res.send(error))
    },
    save: (req,res)=>{
        let {name ,category , subCategory, description, marca, price} = req.body;
        let img = req.files[0] ? req.files[0].filename : "defaultImg.png";
        db.Products.update({
            name,
            mark: marca,
            price,
            detail: description,
            img,
            id_subcategory: +subCategory,
            id_category: +category,
        },
        {
            where : {
                id_product : req.params.id
            }
        })
        .then((producto)=>{
        
            res.redirect("/productos")
            
          })
          .catch((error)=>{
              res.send(error)
          })
    },
    /* save: (req,res)=>{
        const {name ,category , subCategory, description, marca, price} = req.body;
        let producto = productos.find(producto=>{
            return producto.id == req.params.id
        });
        let img = producto.img
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
        }); */

        /* subida(productos)

        res.redirect('/productos'); */
    /* }, */
    borrar:(req,res)=>{
        db.Products.destroy({
            where : {
                id_product : req.params.id
            }
        })
        .then(result =>{
            return res.redirect("/productos")
        })
        .catch((error)=>{
            res.send(error)
        })
    }
    /* borrar:(req,res)=>{
        productos.forEach(producto => {
            if (producto.id === +req.params.id) {
                let eliminar = productos.indexOf(producto)
                fs.unlinkSync("public/images/products/"+ producto.img)
                productos.splice(eliminar, 1)
                
            }

        });
        subida(productos)
        res.redirect("/productos")    
        
    } */
}