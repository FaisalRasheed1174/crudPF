const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// Create a new post
router.post('/', postController.createPost);

// Get all posts
router.get('/', postController.getAllPosts);

// Delete a post by ID
router.delete('/:id', postController.deletePost);


//update specific propoerties 
//router.patch("/:id", postController.updatePost);
//update User
//router.put('/:id', postController.updatePost);


module.exports = router;
