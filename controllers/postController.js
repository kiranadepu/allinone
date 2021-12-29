const mongoose = require('mongoose')
const Posts = require('../models/posts')

let createPosts = async(req, res) => {
    const post = new Posts({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const postsave = await post.save()
        res.json(postsave)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

let allPosts = async(req, res) => {
    try {
        const posts = await Posts.find()
        res.json(posts)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}


let findSinglePost = async(req, res) => {
    try {
        const posts = await Posts.findById(req.params.id)
        res.json(posts)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

let updatepost = async(req, res) => {
    try {
        const posts = await Posts.findOneAndUpdate(req.params.id, req.body, { new: true })
        res.json(posts)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}

let deletePost = async(req, res) => {
    try {
        const posts = await Posts.findByIdAndRemove(req.params.id)
        res.json(posts)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
}


module.exports = {
    createPosts,
    allPosts,
    findSinglePost,
    updatepost,
    deletePost
}