const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const secrets = require('../config/secrets')
const jwt = require('jsonwebtoken')

//Create the schema for a user
const UserSchema = new mongoose.Schema({
    versionKey: false,
    username:{
        type:String,
        unique:true,
        required:true,
        lowercase:true

    },
    passwordHash:{
        type:String,
        required:true
    },
    role: {
        type: String,
        required: true,
        default: "USER"
    },
    communities: {
        type: [Number],
    }
},
    {timestamps:true});

UserSchema.methods.isValidPassword = function isValidPassword(password){
    return bcrypt.compareSync(password, this.passwordHash);
}

UserSchema.methods.setPassword = function setPassword(password){
    this.passwordHash = bcrypt.hashSync(password,10);
}

UserSchema.methods.generateJWT = function generateJWT(){
    return jwt.sign({
        username:this.username
    },
        secrets.token)
}

UserSchema.methods.toAuthJSON = function toAuthJSON(){
    return{
        username:this.username,
        role: this.role,
        token:this.generateJWT()
    }
}

module.exports = mongoose.model('User', UserSchema);