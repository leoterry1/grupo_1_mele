const express = require('express');
const router = express.Router() 

const indexController = require('../controllers/indexController')

router.get('/', indexController);
router.get('/search', indexController)


module.exports = router;