const Post = require('../models/post');

// Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const newPost = new Post({ title, content, user });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a new post' });
  }
};


// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};


// Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: `The post with ID ${postId} has been deleted`, deletedPostId: postId });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the post' });
  }
};




module.exports = {
  createPost,
  getAllPosts,
  deletePost,
};
