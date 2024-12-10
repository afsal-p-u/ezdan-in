const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json("Not authencticated")
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) {
            return res.status(401).json("Token not valid")
        }
        req.userId = payload.id
        next()
    })
}

// const verifyUser = (req, res, next) => {
//     console.log(req)
//     console.log(req?.cookies)
//     console.log(req?.cookies?.token)
//     next()
// }

const verifyAdmin = (req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json("Not authencticated")
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) {
            return res.status(401).json("Token not valid")
        }
        
        if (payload.isUser == "admin") {
            next()
        } else {
            return res.status(401).json("You are not authorized")
        }
    })
}


module.exports = { verifyUser, verifyAdmin }