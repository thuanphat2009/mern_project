const express = require('express');
const { requireSignin, userMiddleWare } = require('../common-middleware');
const { addItemToCart } = require('../controller/cartCtr');
const router = express.Router();


router.post('/user/cart/addtocart', requireSignin, userMiddleWare, addItemToCart);

module.exports = router;