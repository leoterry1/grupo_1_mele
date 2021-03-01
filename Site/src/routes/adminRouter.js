const express = require('express');
const path = require("path")
const router = express.Router() 
const {create, subir, edit, save, borrar} = require("../controllers/adminController")
const multer = require("multer");
const adminCheck = require("../middlewares/adminCkeck")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

/* router.get('/', adminController); */
router.get('/editar/:id',adminCheck, edit);
router.put("/editar/producto/:id", adminCheck, upload.any(), save);
router.delete('/delete/:id',adminCheck, borrar);  
router.get('/create', adminCheck, create);
router.post('/create/producto',adminCheck, upload.any(), subir);



module.exports = router;