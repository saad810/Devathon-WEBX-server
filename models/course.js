const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  about: { type: String },
  price: { type: Number, required: true },
  features: [featureSchema], // Array of feature objects
});

module.exports = mongoose.model('Course', courseSchema);