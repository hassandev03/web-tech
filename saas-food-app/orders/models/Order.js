const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  businessId: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'delivered', 'cancelled'],
    default: 'pending',
  },
}, { timestamps: true });

const getOrderModel = (slug) => {
  const col = `orders_business_${slug}`;
  return mongoose.models[col] || mongoose.model(col, orderSchema, col);
};

module.exports = { getOrderModel };
