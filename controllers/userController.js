const Users = require('../models/user')
const jwt = require("jsonwebtoken")
const bycrpt = require('bcrypt')
require('dotenv').config();



let signup = async(req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body

        if (!(first_name && last_name && email && password)) {
            res.status(400).json({
                code: 400,
                message: "all fields are required !"
            })
        }

        const existingUser = await Users.findOne({ email })

        if (existingUser) {
            res.status(409).json({
                code: 409,
                message: "user already exist please login ! "
            })
        }

        let encrptPassword = await bycrpt.hash(password, 10)

        const user = await Users.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encrptPassword
        })
        res.status(200).json({
            code: 200,
            message: user
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({
            code: 200,
            message: "Please enter your user and password !"
        })

    }
}

let signin = async(req, res) => {


    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).json({
                code: 400,
                message: "username and password required !"
            })
        }
        const user = await Users.findOne({ email })
        if (!user) {
            res.status(400).json({
                code: 400,
                message: "Enter invalid username/password !"
            })
        }

        const passwordcompare = await bycrpt.compare(password, user.password)
        if (passwordcompare) {
            const token = jwt.sign({
                    id: user._id,
                    email: user.email

                },
                process.env.JWT_SECRET, {
                    expiresIn: 86400

                })
            res.status(200).json({
                user,
                token: token
            })
        } else {
            res.status(400).json({
                code: 400,
                message: "check the password again  !"
            })
        }


    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    signup,
    signin
}