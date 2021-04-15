const db = require('../database/models')
const { check, body } = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('Se requiere su nombre'),
    
    check('surname')
        .notEmpty().withMessage('Se requiere su apellido'),

    check('email')
        .isEmail().withMessage('El email no es válido'),
    
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

    check('passwordActual')
    .notEmpty().withMessage('La contraseña es requerida'),

    check('password1')
    .isLength({
        min: 6,
        max: 12
    }).withMessage('La contraseña debe tener un minimo de 6 y un máximo de 12 caracteres'),

    body('password2').custom((value, {req}) => {
        if (value !== req.body.password1){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden')
]