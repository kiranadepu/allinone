const express = require('express')
const route = express.Router()
const postCOntroller = require('../controllers/postController')
const { auth } = require('../middleware/auth')


route.post('/create', auth, postCOntroller.createPosts)
route.get('/allposts', auth, postCOntroller.allPosts)
route.get('/:id', auth, postCOntroller.findSinglePost)
route.put('/:id', auth, postCOntroller.updatepost)
route.delete('/:id', auth, postCOntroller.deletePost)

module.exports = route