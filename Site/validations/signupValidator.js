const fs = require('fs');
const {check, body} = require('express-validator');
const usuarios = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('email')
    .isEmail().withMessage('El email debe ser válido'),

     body('email').custom(value => {
        let result = usuarios.find(usuario => usuario.email === value);
        if(result){
            return false
        }else{
            return true
        }
    }).withMessage('El email ya está registrado'),

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
