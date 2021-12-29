const express = require('express')
const route = express.Router()
const UserController = require('../controllers/userController')

route.post('/register', UserController.signup)
route.post('/login', UserController.signin)


module.exports = route