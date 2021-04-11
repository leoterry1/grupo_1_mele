const db = require('../database/models')
const {check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('lastName')
    .notEmpty().withMessage('El apellido de usuario es requerido'),

    check('email')
    .isEmail().withMessage('El email debe ser válido'),

    body('email')
    .custom(function(value){
        return db.Users.findOne({
            where:{
                email:value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject('Este email ya está registrado')
            }
        })
    }),

    check('password')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({
        min: 6,
        max: 12
    }).withMessage('La contraseña debe tener un minimo de 6 y un máximo de 12 caracteres'),

    body('password2').custom((value, {req}) => {
        if (value !== req.body.password){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden')
]
