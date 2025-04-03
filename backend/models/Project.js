const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  imageUrl: String,
  githubUrl: String,
  liveUrl: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);