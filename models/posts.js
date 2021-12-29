const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostsSchema = new Schema({
    title: {
        type: "string",
        required: true,
        unique: true
    },
    description: {
        type: "string",
        required: true
    }
})

module.exports = mongoose.model("Posts", PostsSchema)