const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model('Forum', forumSchema);