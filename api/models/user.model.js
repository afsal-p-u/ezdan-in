const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    isUser: { type: String, enum: ["admin", "user"], default: "user"},
    cart: { 
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        default: [] 
    }
})

module.exports = mongoose.model("user", UserSchema)