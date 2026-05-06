const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  available: { type: Boolean, default: true },
}, { timestamps: true });

const getProductModel = (slug) => {
  const col = `products_business_${slug}`;
  return mongoose.models[col] || mongoose.model(col, productSchema, col);
};

module.exports = { getProductModel };
