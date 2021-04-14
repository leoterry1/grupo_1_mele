const express = require('express');
const router = express.Router() 
const {user, login, signup, profile, editFoto, logout , submitProfile} = require('../controllers/userController')


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
router.post("/profile/editar/foto", uploadImg.any(), editFoto)

router.get('/logout', logout);

module.exports = router;