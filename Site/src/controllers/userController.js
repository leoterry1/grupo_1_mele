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
            console.log(errores)
            return res.render('signup-login', {
                erroresSignUp: errores.mapped(), estilo: "active", old: req.body
            })
        } else {
            const { name, email, password, lastName } = req.body;
            if (req.body == undefined || name == "" || email == "" || password == "") {
                return res.render("signup-login", { estilo: "active", old: req.body })
            }
            db.Users.findOne({
                where: {
                    email
                }
            })
                .then((user) => {
                    if (!user) {
                        const passHash = bcrypt.hashSync(password, 12);
                        db.Users.create({
                            name,
                            email,
                            password: passHash,
                            surname: lastName,
                            admin: 0,
                            profile: typeof req.files[0] != "undefined" ? req.files[0].filename : 'perfil.jpg',
                        })
                            .then((user) => {
                                res.redirect('/user')
                            })
                            .catch((error) => {
                                res.send(error)
                            })

                    } else {
                        console.log("hola")
                        res.render('signup-login', { estilo: "active", old: req.body })
                    }
                })
                .catch((error) => {
                    res.send(error)
                })
        }
    },

    login: (req, res) => {
        let errores = validationResult(req);
        const { email, password, recordar } = req.body;
        if (!errores.isEmpty()) {
            return res.render('signup-login', {
                errores: errores.mapped()
            })
        } else {

            db.Users.findOne({
                where: {
                    email
                }
            })
                .then((user) => {
                    if (user) {
                        if (bcrypt.compareSync(password, user.password)) {
                            req.session.usuario = {
                                id: user.id_user,
                                name: user.name,
                                profile: user.profile,
                                lastName: user.surname,
                                admin: user.admin

                            }

                            if (typeof recordar != 'undefined') {
                                res.cookie('userMele', req.session.usuario, {
                                    maxAge: 1000 * 60 * 60 * 24 * 100000
                                })
                            }
                            return res.redirect('/user/profile')
                        }
                    }
                    res.render('signup-login', {
                        errores:
                        {
                            credenciales: {
                                msg: 'Credenciales inválidas'
                            }
                        },
                        datos: req.body

                    })
                })
                .catch((error) => {
                    res.send(error)
                })
        }
    },

    profile: (req, res) => {
        db.Users.findOne({
            where: {
                id_user: req.session.usuario.id
            }
        }).then(user => {
            res.render('profile', { title: user.name + " " + user.surname, user })
        }).catch(error => {
            res.send(error)
        })

    },

    logout: (req, res) => {
        res.clearCookie('userMele')
        req.session.destroy();
        res.redirect('/')
    },

    editFoto: (req, res) => {
        db.Users.update({
            profile: req.files[0] ? req.files[0].filename : undefined
        },
            {
                where: {
                    id_user: req.session.usuario.id
                }
            }).then(user => {
                db.Users.findOne({
                    where: {
                        id_user: req.session.usuario.id
                    }
                })
                    .then((user) => {
                        req.session.usuario.profile = user.profile
                        console.log(req.session.usuario)
                        return res.redirect("/user/profile")

                    })
                    .catch((error) => {
                        res.send(error)
                    })
            }).catch(error => {
                res.send(error)
            })
    },

    editName: (req, res) => {
        let name = req.body.name
        db.Users.update({
            name: name
        },
            {
                where: {
                    id_user: req.session.usuario.id
                }
            })
            .then(user => {
                db.Users.findOne({
                    where: {
                        id_user: req.session.usuario.id
                    }
                })
                    .then((user) => {
                        req.session.usuario.name = user.name
                        console.log(req.session.usuario)
                        return res.redirect("/user/profile")
                    })
                    .catch((error) => {
                        res.send(error)
                    })
            }).catch(error => {
                res.send(error)
            })
    },
    
    editLastName: (req, res) => {
        let lastName = req.body.surname
        db.Users.update({
            surname: lastName
        },
            {
                where: {
                    id_user: req.session.usuario.id
                }
            })
            .then(user => {
                db.Users.findOne({
                    where: {
                        id_user: req.session.usuario.id
                    }
                })
                    .then((user) => {
                        req.session.usuario.lastName = user.surname
                        return res.redirect("/user/profile")

                    })
                    .catch((error) => {
                        res.send(error)
                    })
            }).catch(error => {
                res.send(error)
            })
    },

    editEmail: (req, res) => {
        let email = req.body.email
        db.Users.update({
            email
        },
            {
                where: {
                    id_user: req.session.usuario.id
                }
            })
            .then(user => {
                db.Users.findOne({
                    where: {
                        id_user: req.session.usuario.id
                    }
                })
                    .then((user) => {
                        req.session.usuario.email = user.email
                        return res.redirect("/user/profile")

                    })
                    .catch((error) => {
                        res.send(error)
                    })
            }).catch(error => {
                res.send(error)
            })
    },
    editPassword: (req, res) => {
        let passwordActual = req.body.passwordActual
        let passwordNew = req.body.password1
        const passHash = bcrypt.hashSync(passwordNew, 12);
        
        if (!errores.isEmpty()) {
            return res.render('profile', {
                errores: errores.mapped(),
                title: "Editar perfil"
            })
        }else{

        db.Users.findOne({
            where: {
                id_user: req.session.usuario.id
            }
        }).then(user => {
            if (bcrypt.compareSync(passwordActual, user.password)) {
                db.Users.update({
                    password: passHash
                },
                    {
                        where: {
                            id_user: req.session.usuario.id
                        }
                    })
                    .then((user) => {
                        return res.redirect("/user/profile")

                    })
                    .catch((error) => {
                        res.send(error)
                    })
            } else {
                res.redirect("/")
            }
        }).catch(error => {
            res.send(error)
        })
    }
}

}
