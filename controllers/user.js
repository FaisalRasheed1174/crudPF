//This file has all the functions which route calls
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
    });
    const result = await user.save();
    res.status(201).json({
      message: "User Created Successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating a user",
      error,
    });
  }
};


// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the user' });
  }
};

//update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Find the post by ID and update its properties
    const updatedPost = await Post.findByIdAndUpdate(id, { title, content }, { new: true });

    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};




module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser
};
