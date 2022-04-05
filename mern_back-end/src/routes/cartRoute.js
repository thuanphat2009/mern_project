const express = require('express');
const { yeuCauDangNhap, userMiddleWare } = require('../common-middleware');
const { addItemToCart } = require('../controller/cartCtr');
const router = express.Router();
router.post('/user/cart/addtocart', yeuCauDangNhap, userMiddleWare, addItemToCart);

module.exports = router;