const express = require('express');
const { requireSignin, adminMiddleWare } = require('../common-middleware');
const { addCategory, getCategories } = require('../controller/categoryCtr');
const router = express.Router();
// const multer = require('multer');


// const shortid = require('shortid');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(path.dirname(__dirname), 'uploads'));
//     },
//     filename: function (req, file, cb) {
//         cb(null, shortid.generate() + '-' + file.originalname);
//     },
// });

// const upload = multer({ storage });

router.post('/category/create', requireSignin,adminMiddleWare, addCategory);
router.get('/category/', getCategories);

module.exports = router;