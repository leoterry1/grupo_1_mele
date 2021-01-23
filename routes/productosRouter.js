const express = require('express');
const router = express.Router() 

const productosController = require('../controllers/productosController')

router.get('/', productosController);
router.get('/details/:id', productosController);
router.get('/category/:category', productosController);

module.exports = router;