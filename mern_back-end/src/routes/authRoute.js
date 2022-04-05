const express = require('express');
const { dangky, dangnhap } = require('../controller/authCtr');
const router = express.Router();


router.post('/dangky', dangky);
router.post('/dangnhap', dangnhap);
// router.post('/thongtin', yeuCauDangNhap, (req,res) =>{
//     res.status(200).json({
//         user: 'profile',

//     })
// })

module.exports = router;