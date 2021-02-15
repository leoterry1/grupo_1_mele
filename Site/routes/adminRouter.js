const express = require('express');
const path = require("path")
const router = express.Router() 
const {create, subir, edit, save} = require("../controllers/adminController")
const multer = require("multer");

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
router.get('/editar/:id', edit);
router.put("/editar/producto/:id", upload.any(), save)
/* router.get('/delete/:id', adminController);  */
router.get('/create', create);
router.post('/create/producto', upload.any(), subir);



module.exports = router;