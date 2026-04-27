const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId: String,
    items: [{
        productId: { type: mongoose.Schema.Types.ObjectId },
        qty: Number,
        price: Number
    }],
    total: Number,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

const getOrderModel = (tenantId) => {
    const modelName = `Order_${tenantId}`;
    const collectionName = `tenant_${tenantId}_orders`;
    if (mongoose.models[modelName]) {
        return mongoose.models[modelName];
    }
    return mongoose.model(modelName, OrderSchema, collectionName);
};

module.exports = { OrderSchema, getOrderModel };
