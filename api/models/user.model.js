const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    isUser: { type: String, enum: ["admin", "user"], default: "user"},
})

module.exports = mongoose.model("user", UserSchema)