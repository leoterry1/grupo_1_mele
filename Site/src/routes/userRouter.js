const express = require('express');
const router = express.Router() 
const {user, login, signup, profile, editFoto, logout , editName, editLastName, editEmail, editPassword} = require('../controllers/userController')


/* Middlewares */
const uploadImg = require('../middlewares/uploadImg');
const userCheck = require('../middlewares/userCheck');

const signupValidator = require('../validations/signupValidator');
const loginValidator = require('../validations/loginValidator');
const editUserValidator = require('../validations/editUserValidator');
const sessionCheck = require("../middlewares/seessionCkeck")

router.get('/',sessionCheck, user);
router.post('/signup',uploadImg.any(),signupValidator,signup); 
router.post('/login',loginValidator,login);

router.get('/profile',userCheck,profile);

/* Editar */
router.put("/profile/editar/foto", uploadImg.any(), editFoto)
router.put("/profile/editar/nombre", editName)
router.put("/profile/editar/apellido", editLastName)
router.put("/profile/editar/email", editEmail)
router.put("/profile/editar/password", editPassword)

router.get('/logout', logout);

module.exports = router;