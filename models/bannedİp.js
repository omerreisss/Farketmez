const mongoose = require('mongoose');

const bannedIpSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  bannedAt: { type: Date, default: Date.now }
});

const BannedIp = mongoose.model('BannedIp', bannedIpSchema);

module.exports = BannedIp;
