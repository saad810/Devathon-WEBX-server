const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: String,
  username: String,
  password: String,
  accountCreatedAt: Date,
  isVerified: Boolean, // Fixed `bool` to `Boolean`
});

module.exports = mongoose.model('User', userSchema);
