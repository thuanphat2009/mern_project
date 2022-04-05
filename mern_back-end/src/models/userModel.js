const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({ 
    name:{
        type:String,
        required:true,
        min:3, 
        max:50
    },
    userName:{
        type:String,
        required:true,
        trim: true,
        unique: true,
        index: true, 
        lowercase: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        unique: true,
        lowercase: true
    },
    phone:{
        type:String
    },
    profilePicture:{
        type:String
    },
    hashPassword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
},{timestamps:true});

userSchema.virtual('password').set(function(password){
    this.hashPassword = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hashPassword);
    }
}

module.exports = mongoose.model('User',userSchema);