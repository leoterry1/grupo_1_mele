const express = require('express');
const router = express.Router() 

const {index, search, sinPermisos} = require('../controllers/indexController')

router.get('/', index);
router.get('/search', search)
router.get("/sin-permisos", sinPermisos)


module.exports = router;