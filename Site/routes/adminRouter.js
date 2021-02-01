const express = require('express');
const router = express.Router() 

const adminController = require('../controllers/adminController')

/* router.get('/', adminController);
router.get('/editar/:id', adminController);
router.get('/delete/:id', adminController); */
router.get('/create/producto', adminController.create);



module.exports = router;