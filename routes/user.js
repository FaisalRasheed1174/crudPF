//This has all the routes
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Create a new user
router.post('/', userController.createUser);
// Get all users
router.get('/', userController.getAllUsers);
// Delete a user by ID
router.delete('/:id', userController.deleteUser);
//update specific propoerties 
//router.patch("/:id", userController.updateUser);
//update User
//router.put('/:id', userController.updateUser);

module.exports = router;
