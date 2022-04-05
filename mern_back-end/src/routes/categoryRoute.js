const express = require('express');
const { yeuCauDangNhap, adminMiddleWare } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/categoryCtr');
const router = express.Router();


router.post('/category/create', yeuCauDangNhap,adminMiddleWare, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router;