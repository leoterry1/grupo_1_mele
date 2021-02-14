const express = require('express');
const router = express.Router() 
const {create, upload} = require("../controllers/adminController")

/* router.get('/', adminController);
router.get('/editar/:id', adminController);
router.get('/delete/:id', adminController); */
router.get('/create/producto', create);
router.post('/create/producto', upload);



module.exports = router;