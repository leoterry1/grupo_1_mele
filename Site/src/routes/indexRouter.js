const express = require('express');
const router = express.Router() 

const {index, search, sinPermisos, categories} = require('../controllers/indexController')

router.get('/', index);
router.get('/search', search)
router.get("/sin-permisos", sinPermisos)
router.get("/categories", categories)


module.exports = router;