const express = require('express');
const { dangky, dangnhap } = require('../../controller/adminCtr/authAdminCtr');
const router = express.Router();


router.post('/admin/dangky', dangky);
router.post('/admin/dangnhap', dangnhap);


module.exports = router;