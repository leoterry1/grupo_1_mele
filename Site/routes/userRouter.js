const express = require('express');
const router = express.Router() 
const path = require('path');
const multer = require("multer");

const {user, login, signup } = require('../controllers/userController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

var upload = multer({ storage: storage })

router.get('/', user);
/* router.get('/login', userController);*/
router.post('/signup',upload.any(),signup); 



module.exports = router;