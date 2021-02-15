const fs = require('fs');
let usuarios = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

module.exports = {
    user: (req,res)=>{
        res.render("signup-login")
    },

    signup: (req,res) =>{
        let {name, email, password} = req.body
        let lastID = 1;
        usuarios.forEach(usuario => {
            if (usuario.id > lastID) {
                lastID = usuario.id
            }
        });
        let existe = usuarios.find(usuario => {
            return usuario.email === email
        });
    
        if (req.body == undefined || name == "" || email == "" || password == ""){
            res.render("signup-login")
        }
        else {
            if (existe === undefined) {
                let usuario = {id:lastID + 1, name, email, password}
                usuarios.push(usuario)
                fs.writeFileSync("./data/users.json", (JSON.stringify(usuarios)))
                res.redirect('/')
            } else {
                res.render('signup-login')
            }
        } 
    },
    login: (req, res) =>{
        let {email, password} = req.body

        let usuario = usuarios.find(user => {
            return user.email === email
        })
        
        if (req.body == undefined || password == "" || email == "") {
            res.render("signup-login")
        } else {
            if (usuario == undefined) {
                res.render("signup-login")
            } else if (password === usuario.password) {
                res.redirect("/")
            } else {
                res.render("signup-login")
            }
        }



    }
     
}