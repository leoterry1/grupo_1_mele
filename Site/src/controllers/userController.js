const db = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

module.exports = {
    user: (req, res) => {
        res.render("signup-login")
    },

    signup: (req, res) => {
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.render('signup-login', {
                erroresSignUp: errores.mapped(), estilo: "active", old: req.body
            })
        } else {
            const { name, email, password, lastName} = req.body;

            if (req.body == undefined || name == "" || email == "" || password == "") {
              return  res.render("signup-login", {estilo: "active", old: req.body})
            }
           db.Users.findOne({
               where:{
                    email
               }
           })
           .then((user)=>{
            if (!user) {
                const passHash = bcrypt.hashSync(password, 12);
                db.Users.create({
                    name,
                    email,
                    password : passHash,
                    surname: lastName,
                    admin : 0,
                    profile: typeof req.files[0] != "undefined" ? req.files[0].filename : 'perfil.jpg',
                })
                .then((user)=>{
                    res.redirect('/user')
                })
                /* let usuario = {
                    id: lastID + 1,
                    name,
                    lastName,
                    email,
                    password: passHash,
                    profile: typeof req.files[0] != "undefined" ? req.files[0].filename : 'perfil.jpg',
                    admin: false
                }
                usuarios.push(usuario);
                fs.writeFileSync("./src/data/users.json",JSON.stringify(usuarios, null, 2), 'utf-8'); */
                
            } else {
                console.log("hola")
                res.render('signup-login',{ estilo: "active", old: req.body})
            }
           })
           .catch((error)=>{
            res.send(error)
        })
        }
    },

    login: (req, res) => {
        let errores = validationResult(req);
        const {email, password, recordar} = req.body;
        if (!errores.isEmpty()) {
            return res.render('signup-login', {
                errores: errores.mapped()
            })
        }else{
            /* let result = usuarios.find(usuario => usuario.email === email); */
            db.Users.findOne({
                where:{
                     email
                }
            })
            .then((user)=>{
                if(user){
                    if(bcrypt.compareSync(password.trim(), user.password)){
                        req.session.usuario = {
                            id : user.id_user,
                            name : user.name,
                            profile : user.profile,
                            lastName: user.surname,
                            admin: user.admin
                            
                        }
    
                        if(typeof recordar != 'undefined'){
                            res.cookie('userMele', req.session.usuario,{
                                maxAge :  1000 * 60 * 60 * 24 * 100000
                            })
                        }
                        return res.redirect('/user/profile')
                    } 
                }
                res.render('signup-login',{
                    errores: 
                        {
                            credenciales: {
                                msg : 'Credenciales inválidas'
                            } 
                        },
                    datos : req.body    
                    
                })
            })
            .catch((error)=>{
                res.send(error)
            })
        }
    },

    profile: (req,res) => {
        let user = res.locals.user
        res.render('profile',{title: user.name + " " + user.lastName})
    },

    logout : (req,res) => {
        res.clearCookie('userMele')
        req.session.destroy();
        res.redirect('/')
    }

}