const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser); // Register route
router.get('/users', getAllUsers); // Get all users route

module.exports = router;
