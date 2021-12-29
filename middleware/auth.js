const jwt = require('jsonwebtoken')

let auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) {
            return res.status(400).json({
                code: 400,
                Message: "token missing"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({
            code: 400,
            Message: "Invalid token"
        });
    }
}

module.exports = {
    auth
}