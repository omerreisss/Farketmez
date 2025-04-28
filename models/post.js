const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Forum' },
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);