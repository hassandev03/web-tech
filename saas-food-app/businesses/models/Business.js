const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  address: String,
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);
