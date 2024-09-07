const User = require('../models/user');

// Register new user
exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    console.log('Registering user with data:', req.body); // Log the request data
    const newUser = new User({
      username,
      password,
      role,
      accountCreatedAt: new Date(),
      isVerified: false,
    });
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser); // Log the saved user data
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


// Fetch all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
