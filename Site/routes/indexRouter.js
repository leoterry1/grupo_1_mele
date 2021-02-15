const express = require('express');
const router = express.Router() 

const {index, search} = require('../controllers/indexController')

router.get('/', index);
router.get('/search', search)


module.exports = router;