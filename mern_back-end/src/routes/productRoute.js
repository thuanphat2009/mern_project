const express = require('express');
const { yeuCauDangNhap, adminMiddleWare } = require('../common-middleware');
const { createProduct } = require('../controller/productCtr');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.join( path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
const upload = multer({storage});
 

router.post('/product/create', yeuCauDangNhap,adminMiddleWare, upload.array('picture'), createProduct);
// router.get('/category/getcategory', getCategories);

module.exports = router;