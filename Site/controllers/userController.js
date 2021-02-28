const fs = require('fs');
const bcrypt = require('bcrypt');
const usuarios = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));
const { validationResult } = require('express-validator');

module.exports = {
    user: (req, res) => {
        res.render("signup-login")
    },

    signup: (req, res) => {
        let errores = validationResult(req);
        if (!errores.isEmpty()) {
            return res.render('signup-login', {
                errores: errores.errors
            })
        } else {
            const { name, email, password , lastName} = req.body;
            let lastID = 1;
            usuarios.forEach(usuario => {
                if (usuario.id > lastID) {
                    lastID = usuario.id
                }
            });
            let existe = usuarios.find(usuario => {
                return usuario.email === email
            });

            if (req.body == undefined || name == "" || email == "" || password == "") {
                res.render("signup-login")
            }
            else {
                if (existe === undefined) {
                    const passHash = bcrypt.hashSync(password, 12);
                    let usuario = {
                        id: lastID + 1,
                        name,
                        lastName,
                        email,
                        password: passHash,
                        profile: typeof req.files[0] != "undefined" ? req.files[0].filename : 'perfil.jpg',
                        admin: false
                    }
                    usuarios.push(usuario);
                    fs.writeFileSync("./data/users.json",JSON.stringify(usuarios, null, 2), 'utf-8');
                    res.redirect('/')
                } else {
                    res.render('signup-login')
                }
            }
        }
    },

    login: (req, res) => {
        let errores = validationResult(req);
        const {email, password, recordar} = req.body;
        if (!errores.isEmpty()) {
            return res.render('signup-login', {
                errores: errores.errors
            })
        }else{
            let result = usuarios.find(usuario => usuario.email === email);

            if(result){
                if(bcrypt.compareSync(password.trim(), result.password)){
                    req.session.usuario = {
                        id : result.id,
                        name : result.name,
                        profile : result.profile,
                        lastName: result.lastName,
                        admin: result.admin
                        
                    }

                    if(typeof recordar != 'undefined'){
                        res.cookie('userMele', req.session.usuario,{
                            maxAge :  1000 * 60 * 60 * 24 * 100000
                        })
                    }
                    res.redirect('/user/profile')
                }
            }
            res.render('signup-login',{
                errores: [
                    {
                        msg : 'Credenciales inválidas'
                    }
                ]
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