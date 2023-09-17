const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobNum: Number
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel