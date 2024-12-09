const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const cryptoJs = require('crypto-js')

const SignIn = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json("User does not exist");
        }

        const decryptedPassword = cryptoJs.AES.decrypt(user.password, process.env.CRYPTOJS_SECRET).toString(cryptoJs.enc.Utf8)
        if (decryptedPassword !== req.body.password) {
            return res.status(403).json("Wrong password");
        }

        const age = 1000 * 60 * 60 * 24 * 7;

        const accessToken = jwt.sign({
            email: user.email,
            isUser: user.isUser,
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: age })

        
        return res.cookie("token", accessToken, {
            httpOnly: true,
            secure: process.env.SECURE,
            maxAge: age
        }).status(200).json(accessToken)
    } catch (err) {
        return res.status(500).json(err)
    }
}

const SignUp = async (req, res) => {
    try {
        const checkEmail = await userModel.findOne({ email: req.body.email })
        if (checkEmail) {
            return res.status(403).json("Email already exist");
        }
                
        const checkPhone = await userModel.findOne({ phone: req.body.phone })
        if (checkPhone) {
            return res.status(403).json("Phone number already exist");
        }

        const encryptedPassword = cryptoJs.AES.encrypt(req.body.password, process.env.CRYPTOJS_SECRET).toString()

        const user = await userModel({
            ...req.body,
            password: encryptedPassword
        }).save()

        const age = 1000 * 60 * 60 * 24 * 7;

        const accessToken = jwt.sign({
            email: user.email,
            isUser: user.isUser,
            id: user._id
        }, process.env.JWT_SECRET, { expiresIn: age })

        return res.cookie("token", accessToken, {
            httpOnly: true,
            secure: process.env.SECURE,
            maxAge: age
        }).status(200).json(accessToken)

    } catch (err) {
        return res.status(500).json(err)
    }
}

const SignOut = (req, res) => {
    res.clearCookie("token").status(200).json("Signout successfull")
}

module.exports = { SignUp, SignIn, SignOut }