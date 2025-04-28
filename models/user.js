const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  pfp: { type: String, default: '/default.png' },
  isAdmin: { type: Boolean, default: false },
  ip: String  // IP adresini de kaydet
});

module.exports = mongoose.model('User', userSchema);