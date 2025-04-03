const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'] 
  },
  description: { 
    type: String, 
    required: [true, 'Description is required'] 
  },
  technologies: { 
    type: [String], 
    required: [true, 'Technologies are required'],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'At least one technology is required'
    }
  },
  imageUrl: { 
    type: String, 
    required: [true, 'Image URL is required'],
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  githubUrl: String,
  liveUrl: String,
  featured: { 
    type: Boolean, 
    default: false 
  },
  category: { 
    type: String, 
    enum: ['web', 'mobile', 'other'], 
    default: 'web' 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);