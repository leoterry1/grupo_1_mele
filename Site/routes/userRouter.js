const express = require('express');
const router = express.Router() 

const {user, login, signup, profile, logout } = require('../controllers/userController')

/* Middlewares */
const uploadImg = require('../middlewares/uploadImg');
const userCheck = require('../middlewares/userCheck');

const signupValidator = require('../validations/signupValidator');
const loginValidator = require('../validations/loginValidator');

router.get('/', user);
router.post('/signup',uploadImg.any(),signupValidator,signup); 
router.post('/login',loginValidator,login);
router.get('/profile',userCheck,profile);
router.get('/logout', logout);

module.exports = router;