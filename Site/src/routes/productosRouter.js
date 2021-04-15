const express = require('express');
const router = express.Router() 

const {details, all, filter} = require('../controllers/productosController')

router.get('/:page', all);
router.get('/details/:id', details);
router.get('/categories/filter/:page', filter);

module.exports = router;