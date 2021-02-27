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
            const { name, email, password } = req.body;
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
                        email,
                        password: passHash,
                        profile: req.files[0].filename || 'Sin profile'
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
                        name : result.name
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
        res.render('profile')
    },

    logout : (req,res) => {
        req.session.destroy();
        res.redirect('/')
    }

}