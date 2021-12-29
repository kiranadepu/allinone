const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    first_name: {
        type: "string",
        default: null
    },
    last_name: {
        type: "string",
        default: null
    },
    email: {
        type: "string",
        unique: true
    },
    password: {
        type: "string",
    }
})

module.exports = mongoose.model("User", UserSchema)