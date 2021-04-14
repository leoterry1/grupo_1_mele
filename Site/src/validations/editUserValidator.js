const { check, body } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre de usuario es requerido'),

    check('lastName')
    .notEmpty().withMessage('El apellido de usuario es requerido'),

    check('email')
    .isEmail().withMessage('El email debe ser válido'),

    check('pass1')
    .notEmpty().withMessage('La contraseña es requerida')
    .isLength({
        min: 6,
        max: 12
    }).withMessage('La contraseña debe tener un minimo de 6 y un máximo de 12 caracteres'),

    body('pass2').custom((value, {req}) => {
        if (value !== req.body.pass1){
            return false
        }else{
            return true
        }
    }).withMessage('Las contraseñas no coinciden')

]