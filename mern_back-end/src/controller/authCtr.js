const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.dangky = (req,res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: 'Tài khoản đã tồn tại'
        });
        const {
            name,
            email,
            password
        } = req.body;
        const _user = new User({ 
            name,
            email,
            password,
            userName: Math.random().toString(),
        });
        _user.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message: error
                });
            }
            if(data){
                return res.status(201).json({
                    message: 'Tạo tài khoản thành công'
                });
            }
        });
    })
}

exports.dangnhap = (req,res) => {
    User.findOne({ email: req.body.email })
    .exec((error,user)=>{
        if(error) return res.status(400).json({eror});
        if(user){
            if(user.authenticate(req.body.password)){
                const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });
                const { _id, name, email, role } = user;
                res.status(200).json({
                    token,
                    user:{
                        _id, name, email, role
                    }
                });
            }else{
                return res.status(400).json({
                    message: 'Sai mật khẩu'
                })
            }
        }else{
            return res.status(400).json({message: 'Có lỗi xảy ra'});
        }
    })
}


